'use strict';

// Create form element variables

// Radio
const darkColor = document.querySelector("input[value=dark]")

const lightColor = document.querySelector("input[value=light]")

const colorfulColor = document.querySelector("input[value=colorful]")

// Create body variable
const body = document.querySelector('body');


const colorTheme = function() {
  if (darkColor.checked) {
    body.className = "";
    body.classList.add("dark-theme")
  } else if (lightColor.checked) {
    body.className = "";
    body.classList.add("light-theme")
  } else {
    body.className = "";
    body.classList.add("colorful-theme")
  }
}

darkColor.addEventListener("click", colorTheme);
lightColor.addEventListener("click", colorTheme);
colorfulColor.addEventListener("click", colorTheme);