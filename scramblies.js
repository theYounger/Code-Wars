/* page:
https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
*/

/* instructions (without RegExp):
Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
*/
// scramblies('foo', 'bar')

function scramblies(str1, str2) {
  let flag = true;
  for (let i = 0; i < str2.length; i++) {
    if(str1.indexOf(str2[i]) === -1) {
      flag = false;
    }
  }
  return flag;
}

scramblies('ncarcoemsdf', 'narco');