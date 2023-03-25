/*
step-1:add event handeler button withdraw
step-2: get the withdraw amount fron the input field
step-3 : get previous withdraw total
step-4 : calculate total amount
step 4-5: set total withdraw amount
step-5: get the previous balance total
step-6: alet 


step-7: clear the input field


*/
// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

// step-3 :

const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


// step-5:
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step-7: 
withdrawField.value = '';

if(newWithdrawAmount > previousBalanceTotal){
    alert('এহহ মগের মুল্লুক নাকি , আপনার বাপের বাঙ্কে এত টাকা নাই '); 
    return;
}


// step-4: 

const currentWithdrawTOtal = previousWithdrawTotal + newWithdrawAmount;
// step-4-5

withdrawTotalElement.innerText = currentWithdrawTOtal;


const currentBalanceTotal = previousBalanceTotal - currentWithdrawTOtal;


balanceTotalElement.innerText = currentBalanceTotal;

// step-6 :


})