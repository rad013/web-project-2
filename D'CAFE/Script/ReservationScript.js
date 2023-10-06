const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', submit)

function submit(event) {
    let error = false;
    event.preventDefault()
    let firstName = document.getElementById('firstName');
    let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', '\'', '"', '<', '>', ',', '.', '/', '?'];

    if (firstName.value.length < 3 || firstName.value.length > 15) {
        error = true;
        alert("First name length must be between 3 - 15 characters")
        return
    }

    let spaceCountFirst = 0;

    for (let i = 0; i < firstName.value.length; i++) {
        if (firstName.value[i] === ' ') {
            spaceCountFirst++;
        } else if (!isNaN(firstName.value[i])) {
            error = true;
            alert("First name must not contain any numbers");
            return;
        } else if (symbols.includes(firstName.value[i])) {
            error = true;
            alert("First name must not contain any symbols");
            return;
          }
    }

    if (spaceCountFirst >= 1) {
        error = true;
        alert("First name must not contain any spaces");
        return;
    }

    let lastName = document.getElementById('lastName');

    if (lastName.value.length < 3 || lastName.value.length > 15) {
        error = true;
        alert("Last name length must be between 3 - 15 characters")
        return
    }

    let spaceCountLast = 0;

    for (let i = 0; i < lastName.value.length; i++) {
        if (lastName.value[i] === ' ') {
            spaceCountLast++;
        } else if (!isNaN(lastName.value[i])) {
            error = true;
            alert("Last name must not contain any numbers");
            return;
        } else if (symbols.includes(lastName.value[i])) {
            error = true;
            alert("Last name must not contain any symbols");
            return;
          }
    }

    if (spaceCountLast >= 1) {
        error = true;
        alert("Last name must not contain any spaces");
        return;
    }

    let salutation = document.getElementById('salutation');

    if (salutation.value === 'select') {
      error = true;
      alert("Please select a salutation");
      return;
    }

    let email = document.getElementById('email');

    if (!(email.value.endsWith("@gmail.com") || email.value.endsWith("@yahoo.com"))) {
        error = true;
        alert("Email must end with @gmail.com or @yahoo.com")
        return
    }

    let phone = document.getElementById("phone")
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

    let reservationDate = document.getElementById('date');
    let reservationTime = document.querySelector('.right-form .time');

    if (reservationDate.value === '') {
        error = true;
        alert("Please select a reservation date");
        return;
    }

    if (reservationTime.value === '') {
        error = true;
        alert("Please select a reservation time");
        return;
    }

    let resTime = parseTime(reservationTime.value);

    if (resTime < 9 || resTime >= 18) {
        error = true;
        alert("Reservation time must be between 09:00 AM and 05:59 PM");
        return;
    }

    let numberOfPeople = document.getElementById('peopleQty');
  
    if (numberOfPeople.value === '') {
        error = true;
        alert("Please enter the number of people");
        return;
    }

    if (numberOfPeople.value < 1) {
        error = true;
        alert("Number of people cannot be under 1");
        return;
    }

    if(!error){
        alert("registration successful")
    }

    const formContainer = document.querySelector('.form-container');
    formContainer.innerHTML = `
    <div class="success-message">
      <img src="../res/Checked.png" alt="Checkbox Image">
      <p>Thank you! Your form has been successfully saved.</p>
      
    </div>
    `;
    // const returnBtn = document.getElementById('returnBtn');
    // returnBtn.addEventListener('click', returnToHome);
}

function parseTime(timeString) {
    let parts = timeString.split(":");
    let hours = parseInt(parts[0]);
  
    if (timeString.includes("PM") && hours !== 12) {
      hours += 12;
    } else if (timeString.includes("AM") && hours === 12) {
      hours = 0;
    }
  
    return hours;
}

// function returnToHome() {
//     window.location.href = 'Html/Home.html'; // Ini diganti ke href halaman home kita
// }