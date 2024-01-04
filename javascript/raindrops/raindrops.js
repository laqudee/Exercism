//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (n) => {
  if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    return n.toString();
  }
  let text = ''
  if (n % 3 === 0) {
    text += 'Pling';
  }
  if (n % 5 === 0) {
    text += 'Plang';
  }
  if (n % 7 === 0) {
    text += 'Plong';
  }

  return text;
};
