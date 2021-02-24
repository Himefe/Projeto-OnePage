
// Slide 1 variáveis

const slideWrapper1 = document.querySelector(".slide-1 .slide-wrapper");
const slidePai1 = document.querySelector(".slide-1");
const slideFilho1 = document.querySelectorAll(".slide-1 .slide-wrapper .slide");
let totalSlide1 = slideFilho1.length;
let currentSlide1 = 0;



const atualizaDimensoes = () => {

  // Dimensões slide 1
  slideWrapper1.style.width = `${slidePai1.clientWidth * slideFilho1.length - 1}px`;

  slideFilho1.forEach((filho) => {
    filho.style.maxWidth = `${slidePai1.clientWidth}px`;
  });
}

setInterval(() => {
  nextSlide();
}, 3000);


function SlideAnterior() {
  currentSlide1--;
  if(currentSlide1 < 0) {
      currentSlide1 = totalSlide1 - 1;
  }
  atualizaMargin();
}
function nextSlide() {
  currentSlide1++;
  if(currentSlide1 > (totalSlide1 - 1)){
      currentSlide1 = 0;
  }
  atualizarMargin();
}

function atualizarMargin() {
  let sliderItemWidth1 = slideFilho1[0].clientWidth;
  
  let newMargin1 = (sliderItemWidth1 * currentSlide1);
  slideWrapper1.style.marginLeft = `-${newMargin1}px`;

}





// Events
window.addEventListener("load", () => {
  atualizaDimensoes();
})
window.addEventListener("resize", () => {
  atualizaDimensoes();
});




