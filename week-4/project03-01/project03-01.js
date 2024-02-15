/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Kylie Struhs
      Date:   Jan 31 2024

      Filename: project03-01.js
*/

// declaring menuItems variable
let menuItems = document.getElementsByClassName("menuItem");

// adding a for loop to cycle through the array
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("change", calcTotal);
}

//create function to calculate total cost of order
function calcTotal() {
  let orderTotal = 0;
  // for loop to check if the item is checked and then add cost of item to order total
  for (i = 0; i < 5; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value * 1);
    }
    // using innerHTML property to write the orderTotal to billTotal element on HTML page
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
  }
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
