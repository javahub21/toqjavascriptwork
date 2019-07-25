/*
Git add . / git commit -m "First commit" / git push (upload files)

Dot notation - math.random(returns a random number)
math.floor(returns random intergers) 
e.g. consosle.log(math.floor (math.random() * 10)); lists intergers 0-9, add +1 for start 

generate random numbers 1-50 e.g. for (i = 0; i < 7; i++)
    {console.log (math.random() * 49 +1); }

Operators(store value) - % division remainder, ++ increase by 1, -- decrease by 1,
+= adds value to var e.g. var x = 10; x += 5; (value 15, can use -=, *=, %=, /=
    can also use "" for string)

    == equal value, === equal value and type, 
    != not equal to value !== not equal to value and type
    && and e.g. "Friday" && "saturday" (if/else methods
    || Or e.g. 3 || 5 ===0)

Expo ** returns result of rasing the second operand
e.g. var1 ** var2, a ** b ** c / a ** (b ** c)

Unary plus +x convert intergers and floats e.g. true/false, null
-2 numbers into 2 numbers

Functions - execute parameters from variable and return value
e.g. var x = myFunction(4, 3); Function is called, return value will end up in x
function myFunction(a, b) {
  return a * b; Function returns the product of a and b
}

Loop - const sandwichOrder = (top1, top2, top3, top4, top5)=>{
 console.log(`We are preparing your sandwich order:
 ${top1}, ${top2}, ${top3}, ${top4}, ${top5}`);

}
sandwichOrder("ham","cheese","turkey","bacon","tuna");

list text and number on each line from 0-4, increases value by 1 per loop
var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

While Loop - let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Spade";
while(currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard); 


*/