// Write your code here!

const main = document.querySelector('#main');
const h1 = document.querySelector('#victory');

main.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = 'MOHAMMED MAHMOOD is the champion';