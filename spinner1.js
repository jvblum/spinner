for (let i = 200; i <= 1800; i+= 200) {
  setTimeout(() => {
    if (i % 800 === 200) process.stdout.write('\r|   ');
    if (i % 800 === 400) process.stdout.write('\r/   ');
    if (i % 800 === 600) process.stdout.write('\r-   ');
    if (i % 800 === 0) process.stdout.write('\r\\   ');
  }, i + 100);
}

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);