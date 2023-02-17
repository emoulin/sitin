function throttle(callback, timeout = 300) {
    let time = Date.now();
    return (...args) => {
        if ((time + timeout - Date.now()) < 0) {
            callback.apply(this, args);
            time = Date.now();
        }
    }
}

//#region  Scroll Animation

const header = document.querySelector(".s-header")

function scrollCheck(e){
    window.pageYOffset > 50 ? header.classList.add("shadow") : header.classList.remove("shadow");
}

/*Throttle foi definido para 10ms, 
é pouco mas diminui a quantidade de chamadas ao mesmo tempo 
que reduz risco de não ler a última localização do scroll*/

window.addEventListener("scroll", throttle(scrollCheck, 10))

//#endregion Scroll Animation

//#region  Counter Animation

let elements = document.querySelectorAll("[data-number]");
let steps = 10; //etapas da animação
let timeAnimation = 500; //tempo total da animação em ms
let delay = 500; //tempo de delay entre elementos
let timeStep = timeAnimation/steps; //tempo entre etapas da animação

for (let i = 0; i < elements.length; i++) {
  let value = elements[i].dataset.number;
  let prefix = elements[i].dataset.prefix;
  let sufix = elements[i].dataset.sufix;
  if (prefix) {
    elements[i].textContent =  prefix + 0;
  } else if (sufix){
    elements[i].textContent =  "" + 0 + sufix;
  } else {
    elements[i].textContent =  "" + 0;
  }
  setTimeout(() => {
    increaseCounter(elements[i], steps, timeStep, value, prefix, sufix);
  }, i * delay);  
}

function increaseCounter(element, steps, time, value, prefix, sufix) {
  for (let i = 0; i <= steps; i++) {
    setTimeout(() => {
      if (prefix) {
        element.textContent =  prefix + parseInt((value/steps) * i);
      } else if (sufix){
        element.textContent =  "" + parseInt((value/steps) * i) + sufix;
      } else {
        element.textContent =  "" + parseInt((value/steps) * i);
      }
    }, i * time);
  }
}

//#endregion Counter Animation



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
});

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
});

