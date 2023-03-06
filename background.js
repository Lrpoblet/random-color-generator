'use strict';

const btn = document.querySelector('.button');
const body = document.querySelector('.body');
const colorName = document.querySelector('.color');

function randomColor() {
  let makingColorCode = '0123456789ABCDEF';
  let finalCode = '#';

  for (let counter = 0; counter < 6; counter++) {
    finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)];
  }
  return finalCode;
}

function getRandomColor() {
  document.body.style.backgroundColor = randomColor();
  colorName.innerHTML = randomColor();
}

function onClick() {
  getRandomColor();
}

btn.addEventListener('click', onClick);
