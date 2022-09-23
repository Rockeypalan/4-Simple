function printOdd(num) {
  for (let i = 1; i <= num * 2; i++) {
    if (i % 2) {
      console.log(i);
    }
  }
}
printOdd(2);
