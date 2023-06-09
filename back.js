var activeIndex = 0;
console.log("connected");
console.log(activeIndex)

const slides = document.getElementsByTagName("article");
const handleLeftClick = () => {
    const nextIndex = (activeIndex - 1 + 4) % 4;
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
    currentSlide.dataset.status = "after";
    nextSlide.dataset.status = "becoming-active-from-before"
    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
    });
}

const handleRightClick = () => {
    const nextIndex = (activeIndex + 1) % 4;
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
    currentSlide.dataset.status = "before";
    nextSlide.dataset.status = "becoming-active-from-after";
    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
    });
    console.log(activeIndex)
}