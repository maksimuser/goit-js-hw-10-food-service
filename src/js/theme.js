const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.body.classList = 'light-theme';

const refs = {
  input: document.querySelector('#theme-switch-toggle'),
};

setTheme();

refs.input.addEventListener('change', handleThemeChahge);

function handleThemeChahge() {
  const onChecked = refs.input.checked;
  document.body.classList.remove('dark-theme');
  document.body.classList.add('light-theme');

  localStorage.setItem('Theme', Theme.LIGHT);

  if (onChecked) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');

    localStorage.setItem('Theme', Theme.DARK);
  }
}

function setTheme() {
  const savedTheme = localStorage.getItem('Theme');
  if (savedTheme === Theme.DARK) {
    refs.input.checked = true;
    document.body.classList = savedTheme;
  }
}
