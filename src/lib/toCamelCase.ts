/**
 * Converts a string to camelCase.
 * 
 * @param str - The string to convert
 * @returns The camelCase string
 * 
 * @example
 * toCamelCase('hello world'); // "helloWorld"
 * toCamelCase('This-is-a-test'); // "thisIsATest"
 */
export function toCamelCase(str: string): string {
    return str
      .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : "");
}
