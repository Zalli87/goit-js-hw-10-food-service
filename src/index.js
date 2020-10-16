import menuCardTpl from './templaytes/card.hbs';
import menuCards from './menu.json';
// console.log(menuCards);
// console.log(menuCardTpl(menuCards[0]));

const menuCardContainerEl = document.querySelector('.js-menu')
// console.log(menuCardContainerEl);

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
console.log(changeThemeEl);
const bodyEl = document.body;
console.log(bodyEl);

const savedTheme = localStorage.getItem('pageTheme');


changeThemeEl.addEventListener('change', onChangeTheme);

function onChangeTheme(evt) {
      if (evt.currentTarget.checked) {
          localStorage.setItem('pageTheme', 'dark-theme');
           bodyEl.classList.add(theme.DARK);
  }
  if (!evt.currentTarget.checked) {
      localStorage.setItem('pageTheme', 'light-theme');
      bodyEl.classList.remove(theme.DARK);
  bodyEl.classList.add(theme.LIGHT);
    }
    if (savedTheme === '') {
        localStorage.setItem('pageTheme', 'light-theme');
 bodyEl.classList.add(theme.LIGHT);
    };
    if (localStorage.getItem(pageTheme) === theme.DARK) {
        localStorage.setItem('pageTheme', 'dark-theme');
        bodyEl.classList.remove(theme.LIGHT);
        bodyEl.classList.add(theme.DARK);
        changeThemeEl.checked = true;
  
    } else if (localStorage.getItem(pageTheme) === theme.LIGHT) {
        localStorage.setItem('pageTheme', 'light-theme');
        bodyEl.classList.remove(theme.DARK);
        bodyEl.classList.add(theme.LIGHT);
    }
};
