/*
Page: https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
Instructions: Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
*/

function scramblies(str1, str2) {
  var noMatch = false;
  // str1 must be at least as long as str2
  if(str1.length < str2.length) {
    return noMatch;
  }

  // Checks str1 for any characters of str2 it may be be missing
  for (let i = 0; i < str2.length; i++) {
    var str1Index = str1.indexOf(str2[i]);
    if(str1Index === -1) {
      return noMatch;
    }
    str1 = str1.replace(str2[i],"");
  }
  return !noMatch;
}

const match = [
  scramblies('say','sasssy'),
  scramblies('rkqodlw','world'),
  scramblies('cedewaraaossoqqyt','codewars'),
  scramblies('katas','steak'),
  scramblies('scriptjava','javascript'),
  scramblies('scriptingjava','javascript'),
  scramblies('scriptsjava','javascripts'),
  scramblies('jscripts','javascript'),
  scramblies('aabbcamaomsccdd','commas')
];

console.log(match);
