// Campos do formulário devem ser validados tanto em obrigatoriedade quanto em formato. Além disso, os campos Telefone e CPF devem possuir máscaras;

// Utilizar bibliotecas vanilla para carrousel e máscara;

// Utilizar o pacote NodeJS chamado json-server para mockup da API de leads.

var buttonModal = document.getElementsByClassName("button__modal")

// Taking all the "TENHO INTERESSE" buttons and applying the onClick Modal Open
for (var i = 0; i < buttonModal.length ; ++i){
    buttonModal[i].onclick = function() {openModal()};
}

// Modal open visible
function openModal() {
    document.querySelector(".modal__background").classList.add("visible")
}

// Modal close invisible
function closeModal() {
    document.querySelector(".modal__background").classList.remove("visible")
}


// Mask telefone modal
function masktel(objeto, f) {
    setTimeout(function() {
        var v = mtel(objeto.value);
        if (v != objeto.value) {
            objeto.value = v;
        }
    }, 1);
}

function mtel(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
}


// Checkbox important
function confirm() {
    closeModal()

    let modal = document.querySelector('.modal__return')
    modal.style.display = "block"

    setTimeout(function() {
        modal.style.display = "none"
    }, 10000)
}

function openDescription() {

    if (description.style.display === "none") {
        description.style.display = "block"
    } else {
        description.style.display = "none"
    }
    
}

