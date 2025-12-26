
const quotesContainer = document.querySelector('.quotes');
const quoteContainers = document.querySelectorAll('.quote-container');
const components = document.querySelectorAll('.component');

let isMobile = window.innerWidth < 800; 


function setActiveComponent(index) {
  components.forEach(c => c.classList.remove('active-component'));
  components[index].classList.add('active-component');
}

function scrollToQuote(index) {
  quoteContainers[index].scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest'
  });
}

function handleScroll() {
  let currentIndex = 0;
  let closestDistance = Infinity;

  const containerCenter = quotesContainer.scrollLeft + quotesContainer.offsetWidth / 2;

  quoteContainers.forEach((quote, index) => {
    const quoteCenter = quote.offsetLeft + quote.offsetWidth / 2;
    const distance = Math.abs(containerCenter - quoteCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      currentIndex = index;
    }
  });

  setActiveComponent(currentIndex);
}

function showQuoteByIndex(index) {
  quoteContainers.forEach((quote, i) => {
    quote.style.display = i === index ? 'block' : 'none';
  });
  setActiveComponent(index);
}

function initCarouselMode() {
  isMobile = window.innerWidth < 800;

  if (isMobile) {
    
    quotesContainer.style.overflowX = 'auto';
    quoteContainers.forEach(q => (q.style.display = 'block'));
    quotesContainer.addEventListener('scroll', handleScroll);
  } else {
    
    quotesContainer.removeEventListener('scroll', handleScroll);
    quotesContainer.style.overflowX = 'hidden';
    showQuoteByIndex(0); 
  }
}


components.forEach((component, index) => {
  component.addEventListener('click', () => {
    if (isMobile) {
      scrollToQuote(index);
    } else {
      showQuoteByIndex(index);
    }
  });
});

window.addEventListener('resize', () => {
  clearTimeout(window._resizeTimeout);
  window._resizeTimeout = setTimeout(initCarouselMode, 200);
});

initCarouselMode();










