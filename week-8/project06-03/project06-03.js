"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Kylie Struhs
      Date:   March 2 2024

      Filename: project06-03.js
*/

// declare useShip variable
let useShip = document.getElementById("useShip");

// add event listener to useShip, book said click, but most appropriate is to use on change
useShip.addEventListener("change", copyShippingToBilling);

// function to copy data entered in shipping address fields to billing address fields.
function copyShippingToBilling() {
  if (useShip.checked) {
    document.getElementById("firstnameBill").value =
      document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value =
      document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value =
      document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value =
      document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value =
      document.getElementById("cityShip").value;
    document.getElementById("countryBill").value =
      document.getElementById("countryShip").value;
    document.getElementById("codeBill").value =
      document.getElementById("codeShip").value;

    // set selected index of state in billing address to selected index of state in shipping address
    document.getElementById("stateBill").selectedIndex =
      document.getElementById("stateShip").selectedIndex;
  }
}

// declare formElements variable
let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

/* I tried to disable built-in validation tools from browser, when I was having trouble with getting my error message to show.
That didn't work and just made the form submit.
  billShip.noValidate = true;
  */

// create a for loop that runs through the input fields and looks for invalid data. If invalid data is found, run function showValidationError
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

//showValidationError function, prevents default browser message and sets errorBox text
//evt refers to the object created by the event
function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted fields";
}
