var cross = "x";
var circle = "o";
var space1 = "x";
var space2 = "x";
var space3 = "x";
var space4 = "o";
var space5 = "x";
var space6 = "o";
var space7 = "x";
var space8 = "x";
var space9 = "o";

if (space1 == space2 && space2 == space3) {
    console.log("Winner Winner");
}

console.log(`    |       |   `);
console.log(` ${space1}  |   ${space2}   | ${space3}  `);
console.log(`    |       |   `);
console.log(`-------------------`);
console.log(`    |       |   `);
console.log(` ${space4}  |   ${space5}   | ${space6}  `);
console.log(`    |       |   `);
console.log(`-------------------`);
console.log(`    |       |   `);
console.log(` ${space7}  |   ${space8}   | ${space9}  `);
console.log(`    |       |   `);

