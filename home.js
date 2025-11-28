
const validPin = 1234;
// add money functionality
document.getElementById("add-money-btn")
.addEventListener('click',function(e){
    e.preventDefault()
    console.log("add money btn clicked ")

    // for selecting bank 
    const bank = document.getElementById('bank' ).value
    const accountNumber = document.getElementById('account-number').value
    const addAmount =  parseInt(document.getElementById('add-amount').value)
    const addPin = parseInt(document.getElementById('add-pin').value)

    console.log(bank,accountNumber,addAmount,addPin)

    const availableBalance =  parseInt(document.getElementById('available-balance').innerText)



    console.log(availableBalance)

     
    if(accountNumber.length < 11 ){
        alert('please provide valid account number')
        return
    }

    if( addPin !== validPin  ){
        alert('Please provide valid pin number')
        return
    }

    const totalNewAvailableBalance = availableBalance + addAmount

    document.getElementById('available-balance').innerText = totalNewAvailableBalance
 })

// cash out functionality
 document.getElementById('withdraw-btn')
 .addEventListener('click',function(e){
    e.preventDefault()
    const agentNumber = document.getElementById('agent-number')
    .value
    const withdrawPin = parseInt( document.getElementById('withdraw-pin').value)
     const amount = parseInt(document.getElementById('withdraw-amount').value)

     const availableBalance =  parseInt(document.getElementById('available-balance').innerText)

     if(agentNumber.length < 11) {
        alert('Please provide valid agent number')
        return 
     } if (withdrawPin !== validPin ){
        alert('please provide valid pin Number ')
        return
     }

    const totalNewAvailableBalance = availableBalance - amount ;
    console.log(totalNewAvailableBalance)

    document.getElementById('available-balance').innerText = totalNewAvailableBalance
 })









// toggling feature
document.getElementById('add-money')
.addEventListener('click', function() {
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
});

document.getElementById('cash-out')
.addEventListener('click', function() {
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'block';
});

