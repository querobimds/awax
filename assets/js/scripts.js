const banner = document.querySelector('.banner-area .slider-area-total');
const selectDot = document.querySelectorAll('.slide-dots div');
let posBanner = 0;
let posDot = 0;

banner.style.transition = '2s ease';
selectDot[0].classList.add('active');

 function bannerAnimation() {
    if(posBanner === -200) {
        cleanActive()
        posBanner = 0;
        posDot = 0;
        banner.style.transform = `translateX(${posBanner}vw)`;
        selectDot[0].classList.toggle('active');
    } else {
        posBanner -= 100;
        posDot = posBanner / -100;
        cleanActive();
        changeActive(posDot);
        banner.style.transform = `translateX(${posBanner}vw)`;
        console.log(posDot);
    }
    
} 

function changeActive(pos) {
    selectDot[pos].classList.add('active');
}

function cleanActive(){
    for(let i = 0; i < selectDot.length; i++){
        selectDot[i].classList.remove('active');
    }
}

for(let i = 0; i < selectDot.length; i++){
    selectDot[i].addEventListener('click', () => {
        if(i === 0) {
            posBanner = 0;
            cleanActive();
            changeActive(i);
            banner.style.transform = `translateX(${posBanner}vw)`;
        }
        if(i === 1) {
            posBanner = -100;
            cleanActive();
            changeActive(i);
            banner.style.transform = `translateX(${posBanner}vw)`;
        }
        if(i === 2){
            posBanner = -200;
            cleanActive();
            changeActive(i);
            banner.style.transform = `translateX(${posBanner}vw)`;
        }
    });
}


setInterval(bannerAnimation, 5000);




