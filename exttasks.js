/* const person = {
    name: "Toqeir",
    age: 21
};
console.log(person); */

// alarm input weekend or weekday
var day = "Monday";
var alarm = 7;

const myAlarm = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am",
};
if (day == "Saturday" || "Sunday") {
    console.log (myAlarm.weekendAlarm);
} else if (day != "Saturday" || "Sunday") {
    console.log(myAlarm.weekdayAlarm);
}