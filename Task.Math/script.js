"use strict";

let rdm = Math.round(Math.random() * 25);
let count = 3;

function check() {
  count--;
  let inp = document.getElementById("inp");

  let num = Number(inp.value);

  if (count === 0) {
    Swal.fire({
      icon: "error",
      title: "You lost!",
      text: "You're out of chances!",
      confirmButtonText: "Play Again",
    });
  } else if (num === rdm) {
    Swal.fire("You won!", "Good luck!", "success");
  } else if (num > rdm) {
    alert(" Chosen number is lower!");
  } else {
    alert(" Chosen number is higher!");
  }
}
