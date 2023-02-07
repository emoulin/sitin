let screenWidth = window.screen.width

if (screenWidth >= 1024) {
  let divLarguraSite = document.querySelector(".largura-site.swiper")
  divLarguraSite.classList.remove("swiper")

  let divSlideClientes = document.querySelector(".slide-clientes")
  divSlideClientes.removeAttribute("class")

  let divContentWrapper = document.querySelector(".content-wrapper")
  divContentWrapper.removeAttribute("class")

  let divCardClientes = document.querySelectorAll(".card-clientes")
  divCardClientes.forEach((card) => {
    card.classList.remove("swiper-slide")
  })

  let divCardClientesParent =
    document.querySelector(".card-clientes").parentNode
  divCardClientesParent.classList.add("flex-clientes")
}
