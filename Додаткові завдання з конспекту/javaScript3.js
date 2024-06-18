const b = 10;

if (true) {
  const a = 5;
  console.log(a); // 5
  console.log(b); // 6
}
console.log(a); // ламається, бо не бачить а

if (true) {
  const b = 10;
  console.log(a); // ламається, бо не бачить а
  console.log(b);
}
console.log(b);
