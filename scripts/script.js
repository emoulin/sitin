function throttle(callback, timeout = 300) {
  let time = Date.now()
  return (...args) => {
    if (time + timeout - Date.now() < 0) {
      callback.apply(this, args)
      time = Date.now()
    }
  }
}

const header = document.querySelector(".s-header")

function scrollCheck(e) {
  window.pageYOffset > 50
    ? header.classList.add("shadow")
    : header.classList.remove("shadow")
}

/*Throttle foi definido para 10ms, 
é pouco mas diminui a quantidade de chamadas ao mesmo tempo 
que reduz risco de não ler a última localização do scroll*/

window.addEventListener("scroll", throttle(scrollCheck, 10))

var swiper = new Swiper(".slide-clientes", {
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

var swiper = new Swiper(".slide-parcerias", {
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

var swiper = new Swiper(".slide-depoimentos", {
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
  spaceBetween: 24,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})
