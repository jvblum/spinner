for (let i = 200; i <= 1800; i+= 200) {
  setTimeout(() => {
    if (i % 800 === 200) process.stdout.write('\r|   ');
    if (i % 800 === 400) process.stdout.write('\r/   ');
    if (i % 800 === 600) process.stdout.write('\r-   ');
    if (i % 800 === 0) process.stdout.write('\r\\   ');
  }, i + 100);
}