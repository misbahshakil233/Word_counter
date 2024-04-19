import inquirer from 'inquirer'
import chalk from 'chalk'

let wordCounter=await inquirer.prompt([{
    name:"words",
    message:"Please Enter your sentence : ",
    type:"input"
}])
let countWords= wordCounter.words.trim().split(" ").length
console.log(chalk.bold.bgMagenta(`In this sentence the words are ${countWords}`))


// NOTES:
//TRIM()  sentence k start s aur last s space ko khtam kardata ha sentence k bech sa nahai karta ha
//SPLIT() Sentence k bech m jo bhi space hoga usky behave p ye words ko alag alag kar k count karta ha 
//array kay andar ajata ha 
//.length array ka method ha split k andar jo kuc store hwa wo array m hwa . length uski length btadyega