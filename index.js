// Write your code here!

const main = document.querySelector('#main');
const h1 = document.querySelector('#victory');

main.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
h1.appendChild(newHeader);