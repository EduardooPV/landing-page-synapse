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

// Slide Depositions
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




// ======== ALERTA DE GAMBIARRA POR DESISTENCIA =========== //

function openDescription1() {
    description1 = document.querySelector('.description1')

    if (description1.style.display === "none") {
        description1.style.display = "block"
    } else {
        description1.style.display = "none"
    }
}

function openDescription2() {
    description2 = document.querySelector('.description2')

    if (description2.style.display === "none") {
        description2.style.display = "block"
    } else {
        description2.style.display = "none"
    }
}

function openDescription3() {
    description3 = document.querySelector('.description3')

    if (description3.style.display === "none") {
        description3.style.display = "block"
    } else {
        description3.style.display = "none"
    }
}

function openDescription4() {
    description4 = document.querySelector('.description4')

    if (description4.style.display === "none") {
        description4.style.display = "block"
    } else {
        description4.style.display = "none"
    }
}