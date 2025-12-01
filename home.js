
// const validPin = 1234;
// const transactionData = []

// // function to get input values
// function getInputValues(id){
    
//         // const inputField = document.getElementById("add-amount")
//         // const inputValue = inputField.value
//         // const inputFieldValueNumber = parseInt(inputValue)

//         // in a one line 
//         const inputFieldValueNumber = parseInt(document.getElementById(id).value)

//          return inputFieldValueNumber
//  }

// // if it is not a number then 
// function getInputValuesNotNumber (id){
//     // const inputField = document.getElementById(id)
//     // const inputValue = inputField.value
//     // return inputValue 

//     // const inputValue = document.getElementById(id).value
//     // return inputValue

//     // in a one line
//     return document.getElementById(id).value

//  }

// //function to get inner text
// function getInnerText(id){
//     // const element = document.getElementById(id)
//     // const elementValue = element.innerText
//     // const elementValueNumber = parseInt(elementValue)

//     // const elementValueNumber = parseInt(document.getElementById(id).innerText)
//      // in a one line
//     return parseInt(document.getElementById(id).innerText)
// }

// // function to set inner text
// function setInnerText( value){
//     const availableBalanceElement = document.getElementById( "available-balance").innerText = value
//     return availableBalanceElement
// }

// // function to toggle 
// function handleToggle(id){
//    const forms = document.getElementsByClassName('form')

//     for (const form of forms ){
//         form.style.display = 'none'
//     }
//     document.getElementById(id).style.display = 'block'
 
// }
// // function to toggle buttons
// function handleButtonToggle(id){
//     const formBtns = document.getElementsByClassName('form-btn')
//    for (const btn of formBtns){
//     btn.classList.remove('border-[#0874f2]','bg-[#0874f20ds]')
//     btn.classList.add('border-gray-300')
//    }
// document.getElementById(id).classList.remove('border-gray-300')
// document.getElementById(id).classList.add('border-[#0874f2]','bg-[#0874f20d]')

// }


//  // add money functionality
// document.getElementById("add-money-btn")
// .addEventListener('click',function(e){
//     e.preventDefault()
//     console.log("add money btn clicked ")

//     // for selecting bank 
//     // const bank = document.getElementById('bank' ).value
//     const bank =  getInputValuesNotNumber('bank')
//     // const accountNumber = document.getElementById('account-number').value
//     const accountNumber =  getInputValuesNotNumber('account-number')
   
//      const addAmount =  getInputValues( "add-amount" )
//     const addPin =  getInputValues('add-pin')
//     // const addPin = parseInt(document.getElementById('add-pin').value)
//   console.log(bank,accountNumber,addAmount,addPin)
//   // const availableBalance =  parseInt(document.getElementById('available-balance').innerText)
//     const availableBalance =  getInnerText ('available-balance')
//     console.log(availableBalance)
//    if(accountNumber.length < 11 ){
//         alert('please provide valid account number')
//         return
//     }

//     if( addPin !== validPin  ){
//         alert('Please provide valid pin number')
//         return
//     }
//    const totalNewAvailableBalance = availableBalance + addAmount

//     // document.getElementById('available-balance').innerText = totalNewAvailableBalance
//      setInnerText (totalNewAvailableBalance)

//      const data = {
//         name : "Add Money",
//          date : new Date().toLocaleTimeString()
//      }
//      transactionData.push(data)


//  })

// // cash out functionality
// //  document.getElementById('withdraw-btn')
// //  .addEventListener('click',function(e){
// //     e.preventDefault()
// //     const agentNumber = document.getElementById('agent-number')
// //     .value
// //     const withdrawPin = parseInt( document.getElementById('withdraw-pin').value)
// //      const amount = parseInt(document.getElementById('withdraw-amount').value)

// //      const availableBalance =  parseInt(document.getElementById('available-balance').innerText)

// //      if(agentNumber.length < 11) {
// //         alert('Please provide valid agent number')
// //         return 
// //      } if (withdrawPin !== validPin ){
// //         alert('please provide valid pin Number ')
// //         return
// //      }

// //     const totalNewAvailableBalance = availableBalance - amount ;
// //     console.log(totalNewAvailableBalance)

// //     document.getElementById('available-balance').innerText = totalNewAvailableBalance
// //  })

// // cash out functionality

// document.getElementById('withdraw-btn')
// .addEventListener('click',function (e){
//     e.preventDefault()
//     // const agentNumber = document.getElementById('agent-number').value
//     const agentNumber =  getInputValuesNotNumber('agent-number')
//     // const withdrawPin = parseInt(document.getElementById('withdraw-pin').value)
//     const withdrawPin = getInputValues('withdraw-pin')
//     // const amount = parseInt(document.getElementById('withdraw-amount').value)
//     const amount = getInputValues('withdraw-amount')

//     // const availableBalance = parseInt(document.getElementById('available-balance').innerText)
//     const availableBalance = getInnerText('available-balance')

//     if(agentNumber.length < 11){
//         alert('Please provide valid agent number')
//         return
//     }if(withdrawPin !== validPin){
//         alert ('Please provide valid pin number')
//         return 
//     }
//     const totalNewAvailableBalance = availableBalance - amount 

//     // document.getElementById ('available-balance').innerText =
//     // totalNewAvailableBalance;
//     setInnerText(totalNewAvailableBalance)
    
//     const data = {
//         name : "Cash Out ",
//          date : new Date().toLocaleTimeString()
//      }
//      transactionData.push(data)
     
// })


// // transfer money functionality

// document.getElementById('transaction-button')
// .addEventListener('click',function(){
     
//   const  transactionContainer = document.getElementById('transaction-container')
//   transactionContainer.innerText =""

//   for (const data of transactionData){
//     const div = document.createElement("div")  
//       div.innerHTML = `
//       <div class="bg-white rounded-xl p-3  flex justify-between items-center  "  > 
//         <div class="flex items-center">
//             <div class="  p-3 rounded-full bg-[#f4f5f7]">
//                  <img src="./assets/wallet1.png" class="mx-auto" alt="">
//             </div>
//             <div class="ml-3">
//                 <h1> ${data.name}</h1>
//                 <p> ${data.date} </p>
//             </div>
//         </div>
//         <i class="fa-solid fa-ellipsis-vertical"></i>
//      </div>
//       `
//       transactionContainer.appendChild(div)
     
//   }


// })




// // toggling feature
// document.getElementById('add-money')
// .addEventListener('click', function(e) {
//     // document.getElementById('cash-out-parent').style.display = 'none';
//     // document.getElementById('transfer-money-parent').style.display =  'none';
//     // document.getElementById('add-money-parent').style.display = 'block';
//     // const forms = document.getElementsByClassName('form')
//     // console.log(forms)
//     //Here array like object so I can use for loop 

//     // for (const form of forms){
//     //     form.style.display = 'none' // it will be removed all the forms or btn section 


//     // }
//     // // now it will be display just add money form
//     // document.getElementById('add-money-parent').style.display = 'block'
//     handleToggle('add-money-parent')

// const formBtns = document.getElementsByClassName('form-btn')
//    for (const btn of formBtns){
//     btn.classList.remove('border-[#0874f2]','bg-[#0874f20ds]')
//     btn.classList.add('border-gray-300')
//    }
// document.getElementById('add-money').classList.remove('border-gray-300')
// document.getElementById('add-money').classList.add('border-[#0874f2]','bg-[#0874f20d]')
// });

// document.getElementById('cash-out')
// .addEventListener('click', function() {
//     // document.getElementById('add-money-parent').style.display = 'none';
//     // document.getElementById('transfer-money-parent').style.display = 'none';
//     // document.getElementById('cash-out-parent').style.display = 'block';

//     // const forms = document.getElementsByClassName('form')

//     //  for (const form of forms){
//     //     form.style.display = 'none'  


//     // }
//     // document.getElementById('cash-out-parent').style.display = 'block'
//     handleToggle('cash-out-parent')

// // const formBtns = document.getElementsByClassName('form-btn')
// //    for (const btn of formBtns){
// //     btn.classList.remove('border-[#0874f2]','bg-[#0874f20ds')
// //     btn.classList.add('border-gray-300')
// //    }
// // document.getElementById('cash-out').classList.remove('border-gray-300')
// // document.getElementById('cash-out').classList.add('border-[#0874f2]','bg-[#0874f20d]')

// handleButtonToggle('cash-out')
// })

// // transfer money functionality
// document.getElementById('transfer-money')
// .addEventListener('click',function(){
//     //  document.getElementById('cash-out-parent').style.display = 'none';
//     // document.getElementById('add-money-parent').style.display = 'none';
//     // document.getElementById('transfer-money-parent').style.display = 'block'
//     //  const forms = document.getElementsByClassName('form')

//     //  for (const form of forms){
//     //     form.style.display = 'none'  


//     // }
//     // document.getElementById('transfer-money-parent').style.display = 'block'
//     handleToggle('transfer-money-parent')

// // const formBtns = document.getElementsByClassName('form-btn')
// //    for (const btn of formBtns){
// //     btn.classList.remove('border-[#0874f2]','bg-[#0874f20ds')
// //     btn.classList.add('border-gray-300')
// //    }
// // document.getElementById('transfer-money').classList.remove('border-gray-300')
// // document.getElementById('transfer-money').classList.add('border-[#0874f2]','bg-[#0874f20d]')

// handleButtonToggle('transfer-money')

// })

// //get bonus functionality
// document.getElementById('bonus-button')
// .addEventListener('click',function(){
//     // const forms = document.getElementsByClassName('form')

//     // for (const form of forms ){
//     //     form.style.display = 'none'
//     // }
//     // document.getElementById('get-bonus-parent').style.display = 'block'

//     handleToggle('get-bonus-parent')

// //     const formBtns = document.getElementsByClassName('form-btn')
// //    for (const btn of formBtns){
// //     btn.classList.remove('border-[#0874f2]','bg-[#0874f20ds')
// //     btn.classList.add('border-gray-300')
// //    }
// // document.getElementById('bonus-button').classList.remove('border-gray-300')
// // document.getElementById('bonus-button').classList.add('border-[#0874f2]','bg-[#0874f20d]')

// handleButtonToggle('bonus-button')
// })

// // pay bill functionality 
// document.getElementById('bill-button')
// .addEventListener('click',function(){
//     handleToggle('pay-bill-parent')
//     handleButtonToggle('bill-button')
// })

// // transaction functionality 
// document.getElementById('transaction-button')
// .addEventListener('click',function(){
//     handleToggle('transaction-parent')
//     handleButtonToggle('transaction-button')
// })



const validPin = 1234;
const transactionData = [];

// function to get input values
function getInputValues(id) {
     const inputFieldValueNumber = parseInt(document.getElementById(id).value)

         return inputFieldValueNumber
}

// if it is not a number 
function getInputValuesNotNumber(id) {
    return document.getElementById(id).value;
}

// get inner text
function getInnerText(id) {
    return parseInt(document.getElementById(id).innerText);
}

// set balance
function setInnerText(value) {
    document.getElementById("available-balance").innerText = value;
}

// toggle forms
function handleToggle(id) {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) form.style.display = 'none';
    document.getElementById(id).style.display = 'block';
}

// toggle buttons
function handleButtonToggle(id) {
    const formBtns = document.getElementsByClassName('form-btn');
    
    for (const btn of formBtns) {
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
        btn.classList.add('border-gray-300');
    }

    const activeBtn = document.getElementById(id);
    activeBtn.classList.remove('border-gray-300');
    activeBtn.classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
}

// ADD MONEY
document.getElementById("add-money-btn")
.addEventListener('click', function (e) {
    e.preventDefault();

    const bank = getInputValuesNotNumber('bank');
    const accountNumber = getInputValuesNotNumber('account-number');
    const addAmount = getInputValues("add-amount");
    const addPin = getInputValues('add-pin');
    const availableBalance = getInnerText('available-balance');

    if (accountNumber.length < 11) {
        alert('Please provide valid account number');
        return;
    }

    if (addPin !== validPin) {
        alert('Please provide valid pin number');
        return;
    }

    if (addAmount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    const totalNewAvailableBalance = availableBalance + addAmount;
    setInnerText(totalNewAvailableBalance);

    transactionData.push({
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    });
});

// CASH OUT
document.getElementById('withdraw-btn')
.addEventListener('click', function (e) {
    e.preventDefault();

    const agentNumber = getInputValuesNotNumber('agent-number');
    const withdrawPin = getInputValues('withdraw-pin');
    const amount = getInputValues('withdraw-amount');
    const availableBalance = getInnerText('available-balance');

    if (agentNumber.length < 11) {
        alert('Please provide valid agent number');
        return;
    }
    if (withdrawPin !== validPin) {
        alert('Please provide valid pin number');
        return;
    }
    if (amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;
    setInnerText(totalNewAvailableBalance);

    transactionData.push({
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    });
});

// SHOW TRANSACTIONS (ONLY THIS)
document.getElementById('transaction-button')
.addEventListener('click', function () {

    const transactionContainer = document.getElementById('transaction-container');
    transactionContainer.innerText = "";

    for (const data of transactionData) {
        const div = document.createElement("div");
        div.innerHTML = `
      <div class="bg-white rounded-xl p-3 flex justify-between items-center">
        <div class="flex items-center">
            <div class="p-3 rounded-full bg-[#f4f5f7]">
                <img src="./assets/wallet1.png" class="mx-auto" alt="">
            </div>
            <div class="ml-3">
                <h1>${data.name}</h1>
                <p>${data.date}</p>
            </div>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
     </div>
      `;
        transactionContainer.appendChild(div);
    }

    handleToggle('transaction-parent');
    handleButtonToggle('transaction-button');
});

// TOGGLE BUTTON LOGIC
document.getElementById('add-money')
.addEventListener('click', function () {
    handleToggle('add-money-parent');
    handleButtonToggle('add-money');
});

document.getElementById('cash-out')
.addEventListener('click', function () {
    handleToggle('cash-out-parent');
    handleButtonToggle('cash-out');
});

document.getElementById('transfer-money')
.addEventListener('click', function () {
    handleToggle('transfer-money-parent');
    handleButtonToggle('transfer-money');
});

document.getElementById('bonus-button')
.addEventListener('click', function () {
    handleToggle('get-bonus-parent');
    handleButtonToggle('bonus-button');
});

document.getElementById('bill-button')
.addEventListener('click', function () {
    handleToggle('pay-bill-parent');
    handleButtonToggle('bill-button');
});
