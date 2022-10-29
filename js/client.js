'use strict';

const body = document.querySelector('body');

const form = document.querySelector("form");

const baseStyle = body.getAttribute("class");

// To set radio button color
const root = document.querySelector(':root');
const radioColor = function () {
  root.style.setProperty("--radio-color", window.getComputedStyle(body).color)
}
// TODO: Create random light, dark, colorful colors to change it randomly rather than pre-made color themes

// Color Theme Selection Function
const colorTheme = function() {
  if (form.base.checked) {
    body.className = baseStyle;
    radioColor();
  } else if (form.dark.checked) {
    body.className = baseStyle;
    body.classList.add("dark-theme")
    radioColor();
  } else if (form.light.checked) {
    body.className = baseStyle;
    body.classList.add("light-theme")
    radioColor();
  } else {
    body.className = baseStyle;
    body.classList.add("colorful-theme")
    radioColor();
  }
}

// Event Handlers
form.base.addEventListener("click", colorTheme);
form.dark.addEventListener("click", colorTheme);
form.light.addEventListener("click", colorTheme);
form.colorful.addEventListener("click", colorTheme);