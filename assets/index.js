window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  addButtonBackToTopOnScroll()
}


var typed = new Typed('.dev-text-anim', {
  strings: ['Desenvolvedor', 'Front-End', 'Programador'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})

var typed = new Typed('.meu-nome', {
  strings: ['Murilo Calmon'],
  typeSpeed: 100,
  showCursor: false
})

function addButtonBackToTopOnScroll() {
  if (scrollY > 400) {
    btnBack.classList.add('back-to-top')
  } else {
    btnBack.classList.remove('back-to-top')
  }
}
