// Write your code here!

const main = document.querySelector('#main');
const h1 = document.querySelector('#victory');

main.remove();

const newHeader = document.createElement('header');
newHeader.setAttribute('id', 'victory');
newHeader.innerText = 'champion';
h1.append(newHeader);