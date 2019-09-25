console.log ('Siema!');
const name=('Monika');
const age=('31');
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat`);
console.log('Witaj przybyszu!');

const box = document.querySelector('.box__paragraph--js');
console.log(box.innerHTML);
box.innerHTML=`Nazywam się ${name} i mam ${age} lat`;

const paragraphs= document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[5]);

const about= document.querySelector('.box2__header--js');
about.innerHTML=`Hello World!`;