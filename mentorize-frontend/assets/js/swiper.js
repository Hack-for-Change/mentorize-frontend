const divOrigem = document.querySelector(".quarto");
const divDestino = document.getElementById("destino1");
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("cardsCategorias");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";

  if (window.innerWidth <= 1000) {
    const prevSeta1 = document.getElementById('prevSeta1');
    if (prevSeta1) {
      prevSeta1.remove();
    }
    divDestino.appendChild(divOrigem);
    divDestino.appendChild(prevSeta1);
  }
}