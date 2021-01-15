import items from '../template/menu.hbs';
import menu from '../menu.json';

const markup = items(menu);

const menuRef = document.querySelector('ul.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
