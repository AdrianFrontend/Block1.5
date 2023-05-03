const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,

  breakpoints: {
    620: {
      slidesPerView: 2
    },
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// Show all button

let brandsList = document.querySelector(".brands-list")
brandsListChildrens = brandsList.children

let showAllButton = document.querySelector('.show-all-button')

showAllButton.addEventListener("click", () => {
  if (showAllButton.classList.contains('show-all-button--closed')) {
    showAllButton.classList.remove('show-all-button--closed')
    showAllButton.classList.add('show-all-button--opened')
  } else {
    showAllButton.classList.remove('show-all-button--opened')
    showAllButton.classList.add('show-all-button--closed')
  }
})

let windowWidth = window.innerWidth
let hiddenElements = document.querySelectorAll(".brand-card")

if (windowWidth <= 1015) {
  for (let i = 6; i < hiddenElements.length; i++) {
    hiddenElements[i].classList.add('brand-card--hidden')
  }

  showAllButton.addEventListener('click', (event) => {
    if (hiddenElements[6].classList.contains("brand-card--hidden")) {
      for (let i = 6; i < hiddenElements.length; i++) {
        hiddenElements[i].classList.remove('brand-card--hidden')
      }
    } else {
      for (let i = 6; i < hiddenElements.length; i++) {
        hiddenElements[i].classList.add('brand-card--hidden')
      }
    }
  })
} else if (windowWidth > 1015 && windowWidth <= 1391) {
  for (let i = 8; i < hiddenElements.length; i++) {
    hiddenElements[i].classList.add('brand-card--hidden')
  }

  showAllButton.addEventListener('click', (event) => {
    if (hiddenElements[8].classList.contains("brand-card--hidden")) {
      for (let i = 8; i < hiddenElements.length; i++) {
        hiddenElements[i].classList.remove('brand-card--hidden')
      }
    } else {
      for (let i = 8; i < hiddenElements.length; i++) {
        hiddenElements[i].classList.add('brand-card--hidden')
      }
    }
  })
} else if (windowWidth > 1391) {
  hiddenElements[10].classList.add('brand-card--hidden')

  showAllButton.addEventListener('click', (event) => {
    if (hiddenElements[10].classList.contains("brand-card--hidden")) {
      hiddenElements[10].classList.remove('brand-card--hidden')
    } else {
      hiddenElements[10].classList.add('brand-card--hidden')
    }
  })
}



