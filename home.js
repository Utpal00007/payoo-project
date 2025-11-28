
const validPin = 1234;

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


// toggling feature
document.getElementById('add-money')
.addEventListener('click', function() {
    document.getElementById('cash-out-parent').style.display = 'none';
    document.querySelector('.add-money-parent').style.display = 'block';
});

document.getElementById('cash-out')
.addEventListener('click', function() {
    document.querySelector('.add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'block';
});

