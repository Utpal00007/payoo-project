 // login button functionality

 document.getElementById('loginButton')
 .addEventListener('click',function(e){
    e.preventDefault()
    const mobileNumber = 1234567890 ;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById
    ('mobile-number').value //get number or get value comes in as a string 
    // make it an integer number and value will be kept on the parseInt parenthesis
    const mobileNumberValueConverted = parseInt (mobileNumberValue)


    const pinNumberValue = document.getElementById
    ('pin-number').value
    const pinNumberValueConverted = parseInt (pinNumberValue)

    console.log(mobileNumberValueConverted,pinNumberValueConverted)

    if(mobileNumberValueConverted === mobileNumber && 
      pinNumberValueConverted === pinNumber ){
       window.location.href = './home.html'
    } else  {
      alert('Invalid Mobile Number or Pin')
    }


 
 })