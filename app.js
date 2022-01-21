const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.querySelectorAll('div').length


// sidebar.style.top = `-300vh` 
//sidebar.style.top = `-${3*100}vh` //смена слайда на 3. Это число надо высчить

let activeSlideIndex = 0    

sidebar.style.top = `-${(slidesCount-1) * 100}vh` 

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction){
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount){
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
           
        }
    }

    const height = container.clientHeight

    // mainSlide.style.transform = `translateY(-2000px)`

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}