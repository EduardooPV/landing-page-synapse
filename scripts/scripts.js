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