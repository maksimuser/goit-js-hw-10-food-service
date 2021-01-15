import itemsTemplate from '../template/menu.hbs';
import menu from '../menu.json';

const markup = itemsTemplate(menu);

const menuRef = document.querySelector('ul.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
console.log(markup);
