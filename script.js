let brands = [
  lenovo = {
    brandName: "Lenovo",
    imgSrc: "./img/lenovo.svg",
    hrefUrl: "#",
    imgClass: "brand-card__lenovo"
  },
  samsung = {
    brandName: "Samsung",
    imgSrc: "./img/samsung.svg",
    hrefUrl: "#",
    imgClass: "brand-card__samsung"
  },
  apple = {
    brandName: "Apple",
    imgSrc: "./img/apple.svg",
    hrefUrl: "#",
    imgClass: "brand-card__apple"
  },
  viewSonic = {
    brandName: "ViewSonic",
    imgSrc: "./img/viewSonic.svg",
    hrefUrl: "#",
    imgClass: "brand-card__view-sonic"
  },
  bosch = {
    brandName: "BOSCH",
    imgSrc: "./img/bosch.svg",
    hrefUrl: "#",
    imgClass: "brand-card__bosch"
  },
  hp = {
    brandName: "hp",
    imgSrc: "./img/hp.svg",
    hrefUrl: "#",
    imgClass: "brand-card__hp"
  },
  acer = {
    brandName: "Acer",
    imgSrc: "./img/acer.svg",
    hrefUrl: "#",
    imgClass: "brand-card__acer"
  },
  sony = {
    brandName: "SONY",
    imgSrc: "./img/sony.svg",
    hrefUrl: "#",
    imgClass: "brand-card__sony"
  },
  lenovo = {
    brandName: "Lenovo",
    imgSrc: "./img/bosch.svg",
    hrefUrl: "#",
    imgClass: "brand-card__lenovo"
  },
  samsung = {
    brandName: "Samsung",
    imgSrc: "./img/samsung.svg",
    hrefUrl: "#",
    imgClass: "brand-card__samsung"
  },
  apple = {
    brandName: "Apple",
    imgSrc: "./img/apple.svg",
    hrefUrl: "#",
    imgClass: "brand-card__apple"
  }
]

let windowWidth = window.innerWidth

// if (windowWidth < 768) {
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // slidesPerView: 2,
  centeredSlides: true,

  breakpoints: {
    650: {
      slidesPerView: 2
    } 
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // bulletClass: ""
  },
});
// }

let swiperWrapper = document.querySelector(".swiper-wrapper")
let slideTemplate = document.querySelector("#swiper__slide").content.querySelector(".swiper-slide")

brands.map((brand) => {
  let slide = slideTemplate.cloneNode(true)
  let brandImg = slide.querySelector(".swiper-card__logo")
  let brandButton = slide.querySelector(".swiper-card__button")

  brandImg.src = brand.imgSrc
  brandImg.alt = `Логотип ${brand.brandName}`
  brandImg.classList.add(brand.imgClass)

  brandButton.href = brand.hrefUrl

  swiperWrapper.appendChild(slide)
})



let brandsList = document.querySelector(".brands-list")
let brandTemplate = document.querySelector("#brands-list__item").content.querySelector(".brand-card")

brands.map((brand) => {
  let brandCard = brandTemplate.cloneNode(true)
  let brandImg = brandCard.querySelector(".brand-card__logo")
  let brandButton = brandCard.querySelector(".brand-card__button")

  brandImg.src = brand.imgSrc
  brandImg.alt = `Логотип ${brand.brandName}`
  brandImg.classList.add(brand.imgClass)

  brandButton.href = brand.hrefUrl

  brandsList.appendChild(brandCard)
})

// Show all button

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



