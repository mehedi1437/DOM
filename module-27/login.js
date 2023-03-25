// Step-1:Add click event

document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2: get the email address insite the input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step-3 : get password inside the input field
    const passField = document.getElementById('password');
    const password = passField.value;

    

    // verify email and password [not recomanded way]
    if (email === 'sontan@bap.com' && password === 'secret' ){
        window.location.href = "bank.html";
    }
    else {
        alert("toke ami tejjo sontan ghosona korlam");
    }
})