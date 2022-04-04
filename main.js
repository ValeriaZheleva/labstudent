//Checking of Fisrt name field
function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Верно";
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Пожалуйста, введите от 2 до 15 символов на английском";
        return false;
    }
}

//Checking of Last name field
function checkLast() {
    var last = document.getElementById("last").value;
    var regex = /^[a-zA-Z\s]{2,20}$/;

    if (regex.test(last)) { // if testing of first is true
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Верно";
        return true;
    }
    else {// if it's not
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Пожалуйста, введите от 2 до 20 символов на английском";
        return false; 
    }
}

//Checking of Phone number field
function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    if (regex.test(phone)) { // if testing of first is true
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Верно";
        return true;
    }
    else {// if it's not
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Введите номер в формате +7-***-***-**-**";
        return false;
    }
}
