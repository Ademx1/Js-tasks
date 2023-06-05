"use strict";

function show() {
  let inp = document.getElementById("inp");
   let eye = document.getElementById("eye");

  if (inp.type === "password") {
    inp.type = "text";
    eye.className = "fa fa-eye-slash";
    eye.textContent="Hide";

  }else{
    inp.type = "password";
    eye.className="fa-solid fa-eye";
    eye.textContent="Show";
  }
  
}
