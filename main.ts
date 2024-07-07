import inquirer from "inquirer";
import chalk from "chalk";
//-----------------------------------------Name Question----------------------
let asked_name = await inquirer.prompt({
    name : "ans",
    type : "input",
    message : chalk.green("What is your name?")
})
//-----------------------------------------Personality Question----------------------
let Question = await inquirer.prompt({
    name : "ans",
    type : "number",
    message : chalk.red("If you are talkative person type 1, If you dont like to talk type 2")
})
//-----------------------------------------Person Class----------------------
class Person {
    Personality : string = chalk.yellow("No personality");
    
    constructor (Personality : string){
         if (Personality != "") {
              this.Personality  = Personality 
         } 
    }
    
     askQuestion (value: number) {
         if (value === 1) {
             chalk.greenBright (this.Personality = "Extrovert")
         }
         else if (value === 2) {
             chalk.blueBright (this.Personality = "Introvert")
         }
         else{
             chalk.cyan (this.Personality = "Mystery")
         }
    }
}
//-----------------------------------------Student Class----------------------
class Student extends Person{
     private _myName: string = "No Name"

    constructor (Personality : string) {
         super(Personality)
    }
    
    get myName() {
        return chalk.blueBright(this._myName)
    }

    
   set myName(parm : string) {
        if (parm !== "") {
            chalk.gray (this._myName = parm);
         }
    }

}
let person = new Person("")
chalk.cyanBright(person.askQuestion(Question.ans))

let student = new Student("")
chalk.yellowBright(student.myName = asked_name.ans)
chalk.greenBright(console.log(`Hi ${student.myName},
You have ${person.Personality} Personality.`));