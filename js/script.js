const lightThemeBtn = document.getElementById('light-theme')
const darkThemeBtn = document.getElementById('dark-theme')
const rootElement = document.querySelector('.root')

const currentTheme = localStorage.getItem('theme') || 'light'

const setLightTheme = () => {
  localStorage.setItem('theme', 'light')
  
  if(rootElement.classList.contains('dark-theme')){
    rootElement.classList.remove('dark-theme')
  }

  lightThemeBtn.classList.add('toggle-theme__button--active')

  if(darkThemeBtn.classList.contains('toggle-theme__button--active')){
    darkThemeBtn.classList.remove('toggle-theme__button--active')
  }
}

const setDarkTheme = () => {
  localStorage.setItem('theme', 'dark')
  
  rootElement.classList.add('dark-theme')

  darkThemeBtn.classList.add('toggle-theme__button--active')

  if(lightThemeBtn.classList.contains('toggle-theme__button--active')){
    lightThemeBtn.classList.remove('toggle-theme__button--active')
  }
}

if(currentTheme === 'light'){
  setLightTheme()
}else{
  setDarkTheme()
}

lightThemeBtn.addEventListener('click', setLightTheme)
darkThemeBtn.addEventListener('click', setDarkTheme)

