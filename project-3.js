function printOdd(num) {
  if (num % 2 === 0) {
    num = num * 2 - 2;
  } else {
    num = num * 2;
  }
  for (let i = 1; i <= num; i += 2) {
    console.log(i);
  }
}
printOdd(4);
