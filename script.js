const productContainers = [...document.querySelectorAll('.product-container')];
const btnPrev = [...document.querySelectorAll('.btnPrev')];
const btnNext = [...document.querySelectorAll('.btnNext')];

productContainers.forEach((item, i) =>{
    const cardWidth = 250 + 40; 
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    btnNext[i].addEventListener('click', () => {
    item.scrollLeft += cardWidth;
});

btnPrev[i].addEventListener('click', () => {
  item.scrollLeft -= cardWidth;
});
})
