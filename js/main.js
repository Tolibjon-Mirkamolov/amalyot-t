$(function () {
  let header = document.querySelector('.wrapper .header')
  let menu = document.querySelector('.click-btn')
  let i = document.querySelector('.fa-bars')
  let navbar = document.querySelector('.nav')

  menu.addEventListener('click', () => {
    navbar.style.cssText = 'left: 0'
    i.classList.remove('fa-bars')
    i.classList.add('fa-times')
  })

  // menu.addEventListener('click', () => {
  //   navbar.style.cssText = 'left: -26rem;'
  //   i.classList.remove('fa-times')
  //   i.classList.add('fa-bars')
  // })

  window.onscroll = () => {
    i.classList.add('fa-bars')
    i.classList.remove('fa-times')
    navbar.style.cssText = 'left: -100%'

    if (window.scrollY > 100) {
      header.classList.add('active')
    } else {
      header.classList.remove('active')
    }
  }
})
