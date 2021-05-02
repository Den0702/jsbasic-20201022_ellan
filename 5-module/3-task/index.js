function initCarousel() {
  const container = document.querySelector('[data-carousel-holder]');
  const carouselInner = container.querySelector('.carousel__inner');
  const rightArrow = container.querySelector('.carousel__arrow_right');
  const leftArrow = container.querySelector('.carousel__arrow_left');
  leftArrow.style.display = 'none';
  const shift = carouselInner.offsetWidth;
  let position = 0;
  let currentSlideNumber = 0;
  const slidesAmount = 4;

  container.addEventListener('click', (event) => {
    if (event.target.closest('.carousel__arrow_right')) {
      if (currentSlideNumber < slidesAmount) {
        right();
        update(); 
        leftArrow.style.display = '';
      } 
      if (currentSlideNumber === slidesAmount - 1) {
        rightArrow.style.display = 'none';
      } 
      
    } else if (target.closest('.carousel__arrow_left')) {
      if (currentSlideNumber > 0) {
        left();
        update();
        rightArrow.style.display = '';
      } 
      if (currentSlideNumber === 0) {
        leftArrow.style.display = 'none';
      }
        
    }
  });
  
  function left() {
    position += shift;
    currentSlideNumber--;
  }

  function right() {
    position -= shift;
    currentSlideNumber++; 
  }

  function update() {
    carouselInner.style.transform = `translateX(${position}px)`;
  }
}
