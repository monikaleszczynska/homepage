console.log('Siema!');
const name = ('Monika');
const age = ('31');
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat`);
console.log('Witaj przybyszu!');

const box = document.querySelector('.box__paragraph--js');
console.log(box.innerHTML);
box.innerHTML = `Nazywam się ${name} i mam ${age} lat`;

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[5]);

const about = document.querySelector('.box2__header--js');
about.innerHTML = `Hello World!`;

if ('JavaScript' != 'Java') {
    console.log('to prawda!');
}

if (age > 20) {
    console.log('masz więcej niż 20 lat');
} else {
    console.log('masz mniej niż 20 lat');
}

switch (age) {
    case 20:
        console.log ('masz równo 20 lat');
        break;
    case 30:
        console.log ('masz równo 30 lat');
        break;
    default:
        console.log (`masz ${age} lat`);
        break;
}

function calculate (x){
    x= x + 3;
    console.log(x);
    return x*7
}

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);



const welcome = (name, age) => {
    console.log(`Witaj ${name}, masz ${age} lat!`)

}
welcome('Monika', 31);

const button = document.querySelector('.header__button--js');
console.log(button);




button.addEventListener('click', (e) => {
const header = document.querySelector('.main__header--js');
header.innerHTML = 'klik, klik';
});