import inquirer from "inquirer";
let currency = {
    "United States Dollar": 1,
    "Euro": 0.89,
    "British Pound Sterling": 0.77,
    "Japanese Yen": 0.007,
    "Swiss Franc": 0.99,
    "Pakistani Rupees": 278,
    "Indian Rupees": 83.54
};
let currencies = await inquirer.prompt([{
        type: "list",
        name: "currency",
        message: "Select the currency you want to convert",
        choices: ["United States Dollar", "Euro", "British Pound Sterling", "Japanese Yen", "Swiss Franc", "Pakistani Rupees", "Indian Rupees"]
    },
    {
        type: "list",
        name: "currencyToConvert",
        message: "Select the currency you want to convert to",
        choices: ["United States Dollar", "Euro", "British Pound Sterling", "Japanese Yen", "Swiss Franc", "Pakistani Rupees", "Indian Rupees"]
    }, {
        type: "number",
        name: "amount",
        message: "Enter the amount you want to convert"
    }
]);
let initialAmount = currency[currencies.currency];
let finalAmount = currency[currencies.currencyToConvert];
let amount = currencies.amount;
let convertedAmount = finalAmount / initialAmount * amount;
console.log(convertedAmount);
