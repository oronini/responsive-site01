
function toTopBtnShow(){
  const topBtn = document.getElementById('js-goTop');
  window.addEventListener('scroll', () => {
    const coordinateY = window.scrollY;
    if (coordinateY > 350)  {
      topBtn.classList.add('show');
    }
    if (coordinateY == 0) {
      topBtn.classList.remove('show');
    }
  })
}

toTopBtnShow();

const nav = document.getElementById('nav-wrapper');
const hamburger = document.getElementById('js-hamburger');
const blackBg = document.getElementById('js-black-bg');

function hamburgerMenu() {
  hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
  });
  blackBg.addEventListener('click', function () {
      nav.classList.remove('open');
  });
};

hamburgerMenu();

function menuClick(btn, area){
  const scrollBtn = document.getElementById(btn);
  scrollBtn.addEventListener('click', ()=> {
    const scrollTo = document.getElementById(area);
    scrollTo.scrollIntoView({
      behavior:'smooth',
      block:'start'
    });
    if (nav.classList.contains('open')){
      nav.classList.remove('open');
    }
  });
}

menuClick('js-goToTop','js-top');
menuClick('js-goToSection01','js-section01Area');
menuClick('js-goToSection02','js-section02Area');
menuClick('js-goToSection03','js-section03Area');
menuClick('js-section03','js-section03Area');
menuClick('js-goTop','js-top');
menuClick('js-topBtn','js-top');
menuClick('js-section01','js-section01Area');
menuClick('js-section02','js-section02Area');


function scrollColorChange(addClass,queryElm, differenceNum) {
  window.addEventListener('scroll', () => {
    const difference = differenceNum;
    const $peagTop = document.getElementById('js-top').clientHeight 
    const $section01 =document.getElementById('js-section01Area').clientHeight;
    const $section02 =document.getElementById('js-section02Area').clientHeight;    
    const coordinateY = window.scrollY;
    const elm = document.querySelectorAll(queryElm);
    for (let i = 0; i < elm.length; i++){
      if(coordinateY > ($peagTop + $section01 + $section02- difference)) {
        elm[i].classList.add(addClass);
      } else if (coordinateY > ($peagTop + $section01- difference) || coordinateY < $peagTop- difference){
        elm[i].classList.remove(addClass);
      } else if (coordinateY > ($peagTop - difference))  {
        elm[i].classList.add(addClass);
      }
    }
  });
}
scrollColorChange('js-color', '#js-scrollFontColor', 20)
scrollColorChange('js-bg','.l-hamburger__line', 20);
scrollColorChange('js-bg2', '#js-goTop',850)