const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const libDir = path.join(__dirname, 'src/lib');
const libIndexPath = path.join(__dirname, 'src/lib/index.ts');
const outputPath = path.join(__dirname, 'src/index.ts');

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

// Log the directory for debugging
console.log('Scanning directory:', libDir);

// Run Barrelsby with explicit config
try {
  console.log('Running Barrelsby...');
  const barrelsbyOutput = execSync('npx barrelsby --config barrelsby.json', {
    encoding: 'utf8',
  });
  console.log('Barrelsby output:', barrelsbyOutput || 'No output from Barrelsby');
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

// Check if src/lib/index.ts exists and has content; create it if not
let libIndexContent = '';
if (!fs.existsSync(libIndexPath) || !(libIndexContent = fs.readFileSync(libIndexPath, 'utf8').trim())) {
  console.warn('Warning: src/lib/index.ts is missing or empty. Generating it manually...');
  libIndexContent = files
    .map((file) => `export { default as ${file} } from './${file}';`)
    .join('\n');
  fs.writeFileSync(libIndexPath, libIndexContent, 'utf8');
  console.log('Created src/lib/index.ts with default exports.');
  lintFiles(libIndexPath); // Lint the generated file
} else {
  console.log('src/lib/index.ts already exists with content.');
  lintFiles(libIndexPath); // Lint existing file
}

// Generate import statements for src/index.ts
const imports = files
  .map((file) => `import ${file} from './lib/${file}';`)
  .join('\n');

// Generate strkit object
const strkitObject = `const strkit = {\n  ${files.join(',\n  ')},\n};`;

// Combine with export * from './lib'
const finalContent = `${imports}\n\n${strkitObject}\n\nexport default strkit;\n\nexport * from './lib';`;

// Write to src/index.ts and lint it
fs.writeFileSync(outputPath, finalContent, 'utf8');
lintFiles(outputPath);
console.log('Generated and linted src/index.ts');

// Lint generate-index.js itself
lintFiles(__filename);