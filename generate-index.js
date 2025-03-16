import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const libDir = path.join(process.cwd(), 'src/lib');
const libIndexPath = path.join(process.cwd(), 'src/lib/index.ts');
const outputPath = path.join(process.cwd(), 'src/index.ts');

// Function to lint files
const lintFiles = (files) => {
  try {
    execSync(`npx eslint ${files} --fix`, { stdio: 'inherit' });
    console.log(`Linted and fixed: ${files}`);
  } catch (error) {
    console.error(`Linting failed for ${files}:`, error.message);
    process.exit(1);
  }
};

// Log the directory being scanned
console.log('Scanning directory:', libDir);

// Run Barrelsby to generate src/lib/index.ts if configured
try {
  console.log('Running Barrelsby...');
  const barrelsbyOutput = execSync('npx barrelsby --config barrelsby.json', {
    encoding: 'utf8',
  });
  console.log(
    'Barrelsby output:',
    barrelsbyOutput || 'No output from Barrelsby'
  );
} catch (error) {
  console.error('Barrelsby failed:', error.message);
  console.error('Error details:', error);
}

// Read all .ts files in src/lib/, excluding index.ts
const files = fs
  .readdirSync(libDir)
  .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
  .map((file) => path.basename(file, '.ts'));

if (files.length === 0) {
  console.error('Error: No .ts files found in src/lib/.');
  process.exit(1);
}

// Generate src/lib/index.ts if it doesn’t exist or is empty
let libIndexContent = '';
if (
  !fs.existsSync(libIndexPath) ||
  !(libIndexContent = fs.readFileSync(libIndexPath, 'utf8').trim())
) {
  console.warn(
    'Warning: src/lib/index.ts is missing or empty. Generating it manually...'
  );
  libIndexContent = files
    .map((file) => `export { default as ${file} } from './${file}';`)
    .join('\n');
  fs.writeFileSync(libIndexPath, libIndexContent, 'utf8');
  console.log('Created src/lib/index.ts with default exports.');
  lintFiles(libIndexPath);
} else {
  console.log('src/lib/index.ts already exists with content.');
  lintFiles(libIndexPath);
}

// Generate import statements for src/index.ts
const imports = files
  .map((file) => `import ${file} from './lib/${file}';`)
  .join('\n');

// Generate the strkit object
const strkitObject = `const strkit = {\n  ${files.join(',\n  ')},\n};`;

// Generate named exports list
const namedExports = files.join(', ');

// Combine everything into the final content for src/index.ts
const finalContent = `${imports}\n\n${strkitObject}\n\nexport default strkit;\nexport { ${namedExports} };\n`;

// Write and lint src/index.ts
fs.writeFileSync(outputPath, finalContent, 'utf8');
lintFiles(outputPath);
console.log('Generated and linted src/index.ts');

// Lint generate-index.js itself
lintFiles(import.meta.url.replace('file://', ''));
