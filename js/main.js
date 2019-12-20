let btnStartCalculation = document.getElementById("start");
// let allValue = document.querySelectorAll('[class*="-value"]');
let budgetValue = document.getElementsByClassName("budget-value");
let dayBudgetValue = document.getElementsByClassName("daybudget-value");
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

btnApprove.disabled = true;
btnApproveOpt.disabled = true;
btnCalculate.disabled = true;

// btnApprove.setAttribute("disabled", "disabled");
// btnApproveOpt.setAttribute("disabled", "disabled");
// btnCalculate.setAttribute("disabled", "disabled");


let allOptionalField = document.querySelectorAll(".optionalexpenses-item");

let chooseIncome = document.querySelector(".choose-income");
let savingsCheckbox = document.querySelector("#savings");
let chooseSum = document.querySelector(".choose-sum");
let choosePrecent = document.querySelector(".choose-percent");
let yearValue = document.querySelector(".year-value");
let monthValue = document.querySelector(".month-value");
let dayValue = document.querySelector(".day-value");

// functional
let userBudget, userCurrentDate;


btnStartCalculation.addEventListener('click', function(){
    userCurrentDate = prompt("Введите дату в формате YYYY-MM-DD", '');
    userBudget = +prompt("Ваш бюджет на месяц" , '');
    btnApprove.disabled = false;
    btnApproveOpt.disabled = false;
    btnCalculate.disabled = false;

    while(isNaN(userBudget) || userBudget == "" || userBudget == null){
        userBudget = +prompt("Ваш бюджет на месяц" , '');
    }
    appData.budget = userBudget;
    appData.timeData = userCurrentDate;
    budgetValue[0].textContent = userBudget.toFixed();
    yearValue.value = new Date(Date.parse(userCurrentDate)).getFullYear();
    monthValue.value = new Date(Date.parse(userCurrentDate)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(userCurrentDate)).getDate();
});



btnApprove.addEventListener('click', function(){
    let sum = 0;

    for(let i=0; i < expensesItems.length; i++){
        let userExpenses = expensesItems[i].value,
            userExpensesCost = expensesItems[++i].value;

        if((typeof(userExpenses))==='string' && (typeof(userExpenses)) != null &&
         (typeof(userExpensesCost)) != null 
        && userExpenses != '' && userExpensesCost != '' && userExpenses.length < 50){
            console.log('done');
            appData.expenses[userExpenses] = userExpensesCost;
            sum += +userExpensesCost;
            expensesValue[0].textContent = sum;
            appData.totalExpenses = sum;
        }
        else {
            // home work 
            // reload for element
            i = i - 1
        }
    };
});

btnApproveOpt.addEventListener('click',function(){
    for(let i=0;i<allOptionalField.length;i++){
        let optionalExpensesAnswer = allOptionalField[i].value;
        appData.optionalExpenses[i] = optionalExpensesAnswer;
        optionalExpensesValue[0].textContent += appData.optionalExpenses[i] + ' '; 

    }
});

btnCalculate.addEventListener('click', function(){

    if(appData.budget != undefined){

            if(appData.totalExpenses > 0){
                appData.moneyPerDay = ((appData.budget - appData.totalExpenses) / 30).toFixed();
                dayBudgetValue[0].textContent = appData.moneyPerDay;

                if(appData.moneyPerDay < 100) {
                    levelValue[0].textContent = 'Минимальный уровень достатка';
                }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                    levelValue[0].textContent = "Средний уровень достатка";
                }else if (appData.moneyPerDay > 2000){
                    levelValue[0].textContent = "Высокий уровень достатка";
                }else {
                    levelValue[0].textContent = "Произошла ошибка";
                }}else{
                appData.moneyPerDay = (appData.budget / 30).toFixed();
                dayBudgetValue[0].textContent = appData.moneyPerDay;
                
                if(appData.moneyPerDay < 100) {
                    levelValue[0].textContent = 'Минимальный уровень достатка';
                }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                    levelValue[0].textContent = "Средний уровень достатка";
                }else if (appData.moneyPerDay > 2000){
                    levelValue[0].textContent = "Высокий уровень достатка";
                }else {
                    levelValue[0].textContent = "Произошла ошибка";
                }
        }
        

        
    }else{
        dayBudgetValue[0].textContent = "Произошла ошибка";
    }

});

chooseIncome.addEventListener('input',function(){
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue[0].textContent = items;

});

savingsCheckbox.addEventListener('click',function(){
    if(appData.savings == true){
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePrecent.value;
        appData.monthInCome = sum/100/12*percent;
        appData.yearInCome = sum/100*percent;
        console.log(appData.monthInCome);
        monthSavingsValue[0].textContent = appData.monthInCome.toFixed(1);
        yearSavingsValue[0].textContent = appData.yearInCome.toFixed(1);

    }
});

choosePrecent.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +chooseSum.value,
        percent = +choosePrecent.value;
    appData.monthInCome = sum/100/12*percent;
    appData.yearInCome = sum/100*percent;
    console.log(appData.monthInCome);

    monthSavingsValue[0].textContent = appData.monthInCome.toFixed(1);
    yearSavingsValue[0].textContent = appData.yearInCome.toFixed(1);

    }
});


let appData = {
    budget: userBudget,
    timeData: userCurrentDate,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings: false,
    
};
