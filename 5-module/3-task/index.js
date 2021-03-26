function initCarousel() {
  const container = document.querySelector('[data-carousel-holder]');
  const carouselInner = container.querySelector('.carousel__inner');
  const rightArrow = container.querySelector('.carousel__arrow_right');
  const leftArrow = container.querySelector('.carousel__arrow_left');
  leftArrow.style.display = 'none';
  const shift = carouselInner.offsetWidth;
  let position = 0;
  let currentSlideNumber = 1;
  const slidesAmount = 4;

  container.addEventListener('click', ({target}) => {
    if (target.closest('.carousel__arrow_right')) {
      if (currentSlideNumber < 4) {
        right();
        update(); 
        leftArrow.style.display = '';
      
      } else {
        rightArrow.style.display = 'none';
      } 
      
    } else if (target.closest('.carousel__arrow_left')) {
      if (currentSlideNumber > 1) {
        left();
        update();
        rightArrow.style.display = '';
      
      } else {
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
