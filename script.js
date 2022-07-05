// Object to store details
let userDetailsDatabase = {}


function getUserDetails() {
    // Receive username
    let userName = prompt("Enter your username:")
    
    //Allow user cancel
    if (userName == null) {
        return
    }

    // Validate username
    function validateUserName(userName){
        if (userName.length < 10 && userName.length > 0) {
            return true
        }
        else {
            return false
        }
    }

    while(validateUserName(userName) == false) {
        userName = prompt("Username must be less than 10 and greater than 0 in length.")
    }

    userDetailsDatabase["UserName"] = userName  //Store value in object key


    // Receive email input
    let email = prompt("Enter your email address:")

    //Allow user cancel
    if (email == null) {
        return
    }

    // Validate email
    function validateEmail(email){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            {
            return (true)
            }
            alert("You have entered an invalid email address!")
            return (false)
    }

    while (validateEmail(email) == false) {
        email = prompt("Enter a valid email address.")
    }

    userDetailsDatabase["Email"] = email

    // Receive phone number input
    let phoneNumber = prompt("Enter your phone number:")

    //Allow user cancel
    if (phoneNumber == null) {
        return
    }
    // Validate phone number length
    function validatePhoneNumber(phoneNumber) {
        if (phoneNumber.length == 11){
            return true
        }
        else{
            alert("You have entered an invalid phone number!")
            return false
        }
    }

    while (validatePhoneNumber(phoneNumber) == false) {
        phoneNumber = prompt("Phone number must be 11 digits. Try again.")
    }

    userDetailsDatabase["PhoneNumber"] = phoneNumber


    // Receive password input
    let password = prompt("Enter your password:")

    //Allow user cancel
    if (password == null) {
        return
    }
    // Validate password length
    function validatePassword(password){
        if (password.length < 6){
            alert("Password is too short!")
            return false
        }
        else {
            return true
        }
    }

    while(validatePassword(password) == false) {
        password = prompt("Password must not be less than 6 digits.")
    }

    userDetailsDatabase["Password"] = password


    // Confirm password
    let confirmPassword = prompt("Confirm your password:")

    //Allow user cancel
    if (confirmPassword == null) {
        return

    }
    // Confirm both password inputs match
    function validateConfirmPassword(confirmPassword){
        if (confirmPassword != password){
            alert("Passwords not the same!")
            return false
        }
        else {
            return true
        }
    }
    while(validateConfirmPassword(confirmPassword) == false) {
        confirmPassword = prompt("Confirm password does not match password. Try again!")
    }
}

console.log(userDetailsDatabase)

function displayUserDetails(){
    alert(`Your Details\n\nUsername: ${userDetailsDatabase.UserName}\n
    PhoneNumber: ${userDetailsDatabase.PhoneNumber}\n
    Email: ${userDetailsDatabase.Email}`)
} 

//MY IDEA FOR PASSWORD VALIDATION
// function validateConfirmPassword(a, b){
//     if (a === b) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(validateConfirmPassword(password, confirmPassword))