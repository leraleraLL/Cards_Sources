
function slidesPlagin(activeSlide = 3){ 
const slides = document.querySelectorAll('.slide')
// if (activeSlide == null){
//     activeSlide = 3
// }
slides[activeSlide - 1].classList.add('active')

for (const slide of slides){
    slide.addEventListener('click', () => {
     clearActiveClasses()
    
    slide.classList.add('active')
})
}

function clearActiveClasses(){
    slides.forEach( (slide) => {
        slide.classList.remove('active')
    } )
}
}

slidesPlagin()
