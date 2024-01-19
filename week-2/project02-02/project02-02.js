/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Kylie Struhs
      Date:   Jan 15 2024

      Filename: project02-02.js
 */

// Add a function to define variables and a conditional operator
function verifyForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  //conditional operator to test truthy and falsy value
  name && email && phone
    ? window.alert("Thank you!")
    : window.alert("Please fill in all fields.");
}

// Add event listener for submitting the form
document.getElementById("submit").addEventListener("click", verifyForm, false);
