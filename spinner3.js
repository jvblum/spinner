const ipt = process.argv.slice(2)[0] && !isNaN(process.argv.slice(2)[0]) ? process.argv.slice(2)[0] : 18; 
// takes number from command line; if undefined or not a number, defaults to 18 (in deciseconds);

// const addRe = arr => { // adds \r to elements of array; unnecessary
//   const newArr = [];
//   for (const elm of arr) newArr.push(`\r${elm}`);
//   return newArr;
// };

const maxLength = arr => {
  const hldArr = []
  for (const elm of arr) hldArr.push(elm.length);
  return hldArr.sort()[hldArr.length - 1];
}
const addSpaces = (str, num) => {
  for (let i = 0; i < num; i++) str += " ";
  return str;
}; 
const addSpcElm = arr => arr.map(val => addSpaces(val, maxLength(arr) - val.length))

// const opt = ['\r| ', '\r/ ', '\r- ', '\r\\ ']; // animation output
const frms = addSpcElm("take this little matter outside bitch".split(" "));

const animate = tmr => { // animator
  for (let i = 1; i <= tmr; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${frms[i % frms.length]} === ${i}`);
    }, i * 200 - 100);
  }
};

animate(ipt);
// clean up never
// missing features - set frame speed (setTimeout() timing), and set frames;