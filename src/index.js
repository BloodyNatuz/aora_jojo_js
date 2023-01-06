import './style.css';

console.log('Hello World');

const body = document.querySelector('body');

// MAIN NAVBAR
const mainnav = document.createElement('nav');
mainnav.id = 'mainnav';
body.appendChild(mainnav);

let tab = ['Accueil', 'Chaussures', 'Bijoux', 'Vêtements', 'A propos', 'Contact'];

let a0 = document.createElement('a');
a0.href = '#';
a0.textContent = tab[0];
mainnav.appendChild(a0);

let a1 = document.createElement('a');
a1.href = '#';
a1.textContent = tab[1];
mainnav.appendChild(a1);

let a2 = document.createElement('a');
a2.href = '#';
a2.textContent = tab[2];
mainnav.appendChild(a2);

let a3 = document.createElement('a');
a3.href = '#';
a3.textContent = tab[3];
mainnav.appendChild(a3);

let a4 = document.createElement('a');
a4.href = '#';
a4.textContent = tab[4];
mainnav.appendChild(a4);

let a5 = document.createElement('a');
a5.href = '#';
a5.textContent = tab[5];
mainnav.appendChild(a5);

// SECOND NAVBAR
const secondnav = document.createElement('nav');
secondnav.id = 'secondnav';
body.appendChild(secondnav);

let tab2 = ['Connexion', 'Inscription', 'Panier'];

let a6 = document.createElement('a');
a6.href = '#';
a6.textContent = tab2[0];
secondnav.appendChild(a6);

let a7 = document.createElement('a');
a7.href = '#';
a7.textContent = tab2[1];
secondnav.appendChild(a7);

let a8 = document.createElement('a');
a8.href = '#';
a8.textContent = tab2[2];
secondnav.appendChild(a8);

// HEADER
const header = document.createElement('header');
header.id = 'header';
body.appendChild(header);

const img = document.createElement('img');
img.src = 'https://www.lespetitsprix.com/images/logo.png';