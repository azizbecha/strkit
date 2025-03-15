/**
 * Compares two strings and returns an array of differences
 * 
 * @param str1 - First string
 * @param str2 - Second string
 * @returns Array of difference objects
 * 
 * @example
 * diffStrings('hello world', 'hello there'); // [{ type: 'equal', value: 'hello ' }, { type: 'removed', value: 'world' }, { type: 'added', value: 'there' }]
 */
export interface StringDiff {
    type: 'equal' | 'added' | 'removed';
    value: string;
  }
  
  export default function diffStrings(str1: string, str2: string): StringDiff[] {
    const diff: StringDiff[] = [];
    let i = 0;
    let j = 0;
  
    while (i < str1.length || j < str2.length) {
      if (str1[i] === str2[j]) {
        let equalChars = '';
        while (str1[i] === str2[j] && i < str1.length) {
          equalChars += str1[i];
          i++;
          j++;
        }
        if (equalChars) diff.push({ type: 'equal', value: equalChars });
      } else {
        if (i < str1.length) diff.push({ type: 'removed', value: str1[i++] });
        if (j < str2.length) diff.push({ type: 'added', value: str2[j++] });
      }
    }
  
    return diff;
  }