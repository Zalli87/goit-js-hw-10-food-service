import menuCardTpl from './templaytes/card.hbs';
import menuCards from './menu.json';

const menuCardContainerEl = document.querySelector('.js-menu')

function createMenuCardsMarkup(menuCards) {
    return menuCards.map(menuCardTpl).join('');
}

const cardsMarkup = createMenuCardsMarkup(menuCards);
menuCardContainerEl.insertAdjacentHTML('beforeend', cardsMarkup);


const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const changeThemeEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

changeThemeEl.addEventListener('change', onChangeTheme);

checkTheme();

function onChangeTheme(evt) {
    if (evt.currentTarget.checked) {
     localStorage.setItem('pageTheme', theme.DARK);
     bodyEl.classList.remove(theme.LIGHT);
     bodyEl.classList.add(theme.DARK);
           
  }
    else {
     localStorage.setItem('pageTheme', theme.LIGHT);
     bodyEl.classList.remove(theme.DARK);
     bodyEl.classList.add(theme.LIGHT);
    }
};

function checkTheme() {
    const savedTheme = localStorage.getItem('pageTheme');
    if (savedTheme === theme.DARK ) {
        bodyEl.classList.add(theme.DARK);
        changeThemeEl.checked = true;
    }
};
    


