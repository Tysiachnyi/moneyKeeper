let btnStartCalculation = document.getElementById("start");
// let allValue = document.querySelectorAll('[class*="-value"]');
let budgetValue = document.getElementsByClassName("budget-value");
let dayBudgetValue = document.getElementsByClassName("dayBudget-value");
let levelValue = document.getElementsByClassName("level-value");
let expensesValue = document.getElementsByClassName("expenses-value");
let optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value");
let incomeValue = document.getElementsByClassName("income-value");
let monthSavingsValue = document.getElementsByClassName("monthsavings-value");
let yearSavingsValue = document.getElementsByClassName("yearsavings-value");

let expensesItems = document.getElementsByClassName("expenses-item");

let allBtn = document.getElementsByTagName("button");
let btnApprove = allBtn[0];
let btnApproveOpt = allBtn[1];
let btnCalculate = allBtn[2];
let btnCalculateDeposit = allBtn[3];


let allOptionalField = document.querySelectorAll(".optionalexpenses-item");

let chooseIncome = document.querySelector(".choose-income");
let savingsCheckbox = document.querySelector("#savings");
let chooseSum = document.querySelector(".choose-sum");
let choosePrecent = document.querySelector("choose-percent");
let yearvValue = document.querySelector(".year-value");
let monthValue = document.querySelector(".month-value");