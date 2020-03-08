const barBtn = document.getElementById('bar')
const menu = document.querySelector('.menu')
const menuBack = document.querySelector('.back')
const body = document.body
var screen_width = document.documentElement.clientWidth > 800 ? true : false;
barBtn.addEventListener('click', () => {
  // menu.style.display = 'block'
  menu.style.transform = 'translateX(-100%)'
  body.classList.add('body-move')
  menuBack.style.transform = 'translateX(0)'
})
menuBack.addEventListener('click', () => {
  menu.style.transform = 'translateX(0)'
  body.classList.remove('body-move')
  menuBack.style.transform = 'translateX(100%)'
})
// setInterval(() => {
//   if (!screen_width) {
//     body.style.transform = 'translateX(0)'
//   }
// }, 2000)