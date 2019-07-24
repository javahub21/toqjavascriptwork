/* var coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } 
    else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans(); */

//chosen drink size and type
/* const coffeeOrder = (size, type) => {
    console.log(`chosen size of coffee ${size} type of coffee ${type}`);
}
coffeeOrder("small", "latte"); */

/* adding numbers
const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp (7,3);
console.log(addUp (5,5)); */

/*check for temp in farenhiet
const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};
console.log("the temperature is" + getFahrenheit (15) + "•f"); */

//adding pizza multiple toppings with added sides
/* var orderCount = 1;

const takeOrder = (topping, side) => {
    console.log(`${orderCount} Pizza with ${topping} sides added ${side}`);
    orderCount++;
}
takeOrder("Pineapple" + " + chicken,", "fries");
takeOrder("Spicy chicken,", "rice");
takeOrder("Green Peppers,", "salad"); */

/* dispense cash, check pin correct then show balance if correct
var accPin = 5836;
var accBal = 400;

const cashMachine = (pinNum, cash) => {
    if (pinNum == accPin && cash <= accBal) {
        console.log(`Your PIN is correct and the ${cash} you requested is being dispensed!`)    
    } else if (pinNum != accPin) {
        console.log(`PIN number is incorrect!. Please try again.`);
    } else {
        console.log(`Insufficient funds in your account! Please check and try again.`);
    }
}
cashMachine(5836, 300);
cashMachine(5838, 300);
cashMachine(5836, 410);
cashMachine(5833, 500); */

/* sandwich order with toppings, can add more topping var
const sandwichOrder = (toppings, drink) => {
    console.log(`Sub sandwich with ${toppings} sides added ${drink}`);
}
sandwichOrder("lettuce" + " + chicken,", "Coke"); */


