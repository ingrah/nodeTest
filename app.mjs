import chalk from "chalk";

const myJoke = "Her burde det være en vits";


//Hvordan skal jeg bruke chalk for å skrive ut denne med forskjellige farger på hvert ord?

//Hvordan kan jeg splitte opp setningen?
//Hvordan kan jeg skrive ut hvert ord? hvordan gjøre setningen om til ei liste, hvordan få skrevet ut.

console.log(myJoke);

const words = myJoke.split(" "); 

let coloredmyJoke =""; 

for (let i = 0; i < words.length; i++){
    // choose a color for each words 
    const color = chalk.rgb(getRandomColor(),getRandomColor(),getRandomColor());

    //apply the color to the words 
    coloredmyJoke += color(words[i]) + " ";
}
console.log(coloredmyJoke);

// function to generate a random color component 

function getRandomColor() {
    return Math.floor(Math.random()* 256);
}