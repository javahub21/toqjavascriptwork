/* shows numbers 0-9 in list
or (i = 0; i < 10; i++) {
    console.log(i);
}*/

/* shows numbers starting from 9-0
for (i = 9; i > -1; i--) {
    console.log(i);
} */

/* list favdrinks
var favouriteDrinks = [
    "Pepsi",
    "7 Up",
    "Coke",
    "Rubicon"
];
console.log(favouriteDrinks[0]);
console.log(favouriteDrinks[1]);
console.log(favouriteDrinks[2]);
console.log(favouriteDrinks[3]); */

/* loop and add two more films
var favFilms = [
    "Spider-man",
    "Thor",
    "Goodfellas",
    "Godfather",
    "Superman",
];
favFilms.push ("Iron-man", "Forest Gump");
console.log(favFilms);

for (filmIndex = 0; filmIndex < favFilms.length; filmIndex++); {
        console.log(favFilms[filmIndex]);
    } */
    
    //check film is ghostbusters

    var favFilms = [
        "Spider-man",
        "Thor",
        "Ghostbusters",
        "Godfather",
        "Superman",
    ];
    
    const filmCheck = () => {
        if (favFilms[2] == "Ghostbusters") {
            console.log("Yay it's Ghostbusters");
        } else {
            console.log("Booo, we want Ghostbusters");
        }
    };
    filmCheck(); 
