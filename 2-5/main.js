const args = process.argv[2];
let count1 = 0;
let count2 = 0;
let count3 = 0;

count1 = Math.floor(args / 100);
count2 = Math.floor((args % 100) / 10);
count3 = (args % 100) % 10;

console.log(`100円玉→${count1}枚`);
console.log(`10円玉→${count2}枚`);
console.log(`1円玉→${count3}枚`);