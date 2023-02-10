let screenWidth = window.innerWidth
let divLarguraSite = document.querySelector(".largura-site.swiper")
let divSlideClientes = document.querySelector(".slide-clientes")
let divContentWrapper = document.querySelector(".content-wrapper")
let divCardClientesParent = document.querySelector(".card-clientes").parentNode
let divCardClientes = document.querySelectorAll(".card-clientes")

if (screenWidth >= 1024) {
  divLarguraSite.classList.remove("swiper")

  divSlideClientes.classList.remove("slide-clientes")

  divContentWrapper.classList.remove("content-wrapper")

  divCardClientes.forEach((card) => {
    card.classList.remove("swiper-slide")
  })

  divCardClientesParent.classList.add("flex-clientes")
}
