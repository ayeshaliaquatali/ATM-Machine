#! /usr/bin/env node
console.log("By miss Ayesha");
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 45612;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin number",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct the pin number!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select your option",
            type: "list",
            choices: ["withdraw", "fast cash", "check Balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "enter the amount",
                type: "number"
            }
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`${amountAnswer.amount} : withdraw successfully`);
            console.log(`your remaining balance is : ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select the option",
                type: "list",
                choices: [2000, 5000, 10000, 20000, 50000]
            }
        ]);
        if (fastcashAns.fastcash > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= fastcashAns.fastcash;
            console.log(`${fastcashAns.fastcash} : withdraw successfully`);
            console.log(`your remaining balance is : ${myBalance}`);
        }
    }
    else {
        console.log(`your balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect the pin number!!");
}
