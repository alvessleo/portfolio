const target = document.querySelectorAll('[data-animation]');

const animationClass = 'animate';

function animateScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animateScroll();

if(target.length){
    window.addEventListener('scroll', function(){
        animateScroll();
    })
}


// imgs paralelo

window.addEventListener('scroll', () => {
    const targetImg = document.querySelectorAll('.scroll');
    var index = 0, length = targetImg.length;
    for (index; index < length; index++){
        var pos = window.pageYOffset * targetImg[index].dataset.rate;

        if(targetImg[index].dataset.direction === 'vertical'){
            targetImg[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
        } else {
            var posX = window.pageYOffset * targetImg[index].dataset.ratex;
            var posY = window.pageYOffset * targetImg[index].dataset.ratey;

            targetImg[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
        }
    }
})