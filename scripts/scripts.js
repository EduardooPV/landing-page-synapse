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

// Abrindo e fechando as descrições 
let description = document.querySelectorAll(".learn__description")
let img = document.querySelectorAll('.img')

description.forEach( description => {
    description.addEventListener("click", function openDescription() {     
        if(window.innerWidth < 768) {
            if(description.lastElementChild.style.display == 'block') {
                description.lastElementChild.style.display = 'none'
                description.firstElementChild.lastElementChild.style.transform = 'rotate(0)'
            } else {
                description.lastElementChild.style.display = 'block'
                description.firstElementChild.lastElementChild.style.transform = 'rotate(180deg)'
                description.firstElementChild.lastElementChild.style.transition = '0.5s'
            }
        } 
    })
})