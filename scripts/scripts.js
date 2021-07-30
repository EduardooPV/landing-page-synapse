// Campos do formulário devem ser validados tanto em obrigatoriedade quanto em formato. Além disso, os campos Telefone e CPF devem possuir máscaras;

// Utilizar bibliotecas vanilla para carrousel e máscara;

// Utilizar o pacote NodeJS chamado json-server para mockup da API de leads.


var imgs = document.getElementsByClassName("img")

for (var i = 0; i < imgs.length ; ++i){
    imgs[i].onclick = function() {click()};
  }

function click() {
    var description = document.querySelector(".description")


    if (description.style.display === "none") {
        description.style.display = "block"
    } else {
        description.style.display = "none"
    }

}


// Pegando todos os botões "TENHO INTERESSE" e aplicando o onClick modal open
var buttonModal = document.getElementsByClassName("button__modal")

for (var i = 0; i < buttonModal.length ; ++i){
    buttonModal[i].onclick = function() {openModal()};
}

function openModal() {
    document.querySelector(".modal__background").classList.add("visible")
}

function closeModal() {
    document.querySelector(".modal__background").classList.remove("visible")
}