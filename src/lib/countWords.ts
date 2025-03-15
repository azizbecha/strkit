/**
 * Counts the number of words in a string
 * 
 * @param str - The string to count words in
 * @returns The number of words
 * 
 * @example
 * countWords('Hello world'); // 2
 * countWords('This   is   a   test'); // 4
 */
export default function countWords(str: string): number {
    return str.trim().split(/\s+/).length;
}