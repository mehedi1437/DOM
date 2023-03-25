
// Add event listener on the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
// stpe-2 : get the deposit input field
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString)

// step-3: get the deposit total amount

const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

// Step-4 : add numbers total
const currentDepositTOtal = previousDepositTotal + newDepositAmount;


depositTotalElement.innerText = currentDepositTOtal; 

// step-5 : get current total balance

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step-6 : calculate current total

const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

balanceTotalElement.innerText = currentBalanceTotal;



// step-7: cleat the input field
depositField.value = '';
    
})