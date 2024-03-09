"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Kylie Struhs
      Date:   March 9 2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function (e) {
  let pwd = document.getElementById("pwd").value;
  let feedback = document.getElementById("feedback");

  // prevent browser from responding to the submit event
  e.preventDefault();

  // create variables containing regular expressions
  let regex1 = /[A-Z]/;
  let regex2 = /\d/;
  let regex3 = /[!\$#%]/;

  // create if else to test if password is at least 8 characters, includes uppercase letter and a number, and includes special character
  // send feedback based on conditions
  if (pwd.length < 8) {
    feedback.textContent = "Your password must be at least 8 characters";
  } else if (regex1.test(pwd) === false) {
    feedback.textContent = "Your password must include an uppercase letter";
  } else if (regex2.test(pwd) === false) {
    feedback.textContent = "Your password must include a number";
  } else if (regex3.test(pwd) === false) {
    feedback.textContent =
      "Your password must include one of the following: !$#%";
  } else {
    signupForm.submit();
  }
});
