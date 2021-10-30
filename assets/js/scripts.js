const banner = document.querySelector('.banner-area .slider-area-total');
const selectDot = document.querySelectorAll('.slide-dots div');
let posBanner = 0;
let posDot = 0;

banner.style.transition = '2s ease';
selectDot[0].classList.toggle('active');

 function bannerAnimation() {
    posBanner -= 100;
    posDot++;
    if(posBanner < -200) {
        cleanActive(posDot)
        posBanner = 0;
        posDot = 0;
        banner.style.transform = `translateX(${posBanner}vw)`;
        selectDot[0].classList.toggle('active');
    } else {
        cleanActive(posDot);
        changeActive(posDot);
        banner.style.transform = `translateX(${posBanner}vw)`;
        console.log(posDot);
    }
    
} 

function changeActive(pos) {
    selectDot[pos].classList.toggle('active');
}

function cleanActive(pos){
    selectDot[pos - 1].classList.toggle('active');
}




setInterval(bannerAnimation, 5000);




