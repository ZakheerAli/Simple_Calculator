import inquirer from "inquirer";
const ans = await inquirer.prompt([
    {
        type: "number",
        name: "firstnum",
        message: "Enter your first number:",
    },
    {
        type: "number",
        name: "secondnum",
        message: "Enter your Second number:",
    },
    {
        type: "list",
        name: "Operator",
        message: "Select any one operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (ans.Operator == "Addition") {
    console.log(ans.firstnum + ans.secondnum);
}
else if (ans.Operator == "Subtraction") {
    console.log(ans.firstnum - ans.secondnum);
}
else if (ans.Operator == "Multiplication") {
    console.log(ans.firstnum * ans.secondnum);
}
else {
    console.log(ans.firstnum / ans.secondnum);
}
;
