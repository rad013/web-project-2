function Submit(){
    let error = false

    let firstname=document.getElementById("first-name")
    if (firstname.value.length<5 || firstname.value.length>10 ) {
        error = true
        alert("Firstname length must be 5-10 character")
    }
    if (username.value.length<0) {
        error = true
        alert("FirstName Cannot be empty")
    }

    let lastname=document.getElementById("last-name")
    if (lastname.value.length<3 || lastname.value.length>15) {
        error = true
        alert("lastname length must be 3- 15 character")
    }
    let email = document.getElementById('email');
    if (!(email.value.endsWith("@gmail.com") || email.value.endsWith("@yahoo.com"))) {
        error = true;
        alert("Email must end with @gmail.com or @yahoo.com")
        return
    }
    let phone = document.getElementById("phone-number")
    if(phone.value.length < 11 || phone.value.length > 12){
        error = true
        alert("Phone number length must be between 11 - 12")
        return
    }

    if(isNaN(phone.value)){
        error = true
        alert("Phone number must be numerical")
        return
    }
    let message = document.getElementById("message")
    if (message.value.length<0) {
        error=true
        alert("Message must be filled")

    }
    if(!error){
        alert("Message sent successful")
    }
}