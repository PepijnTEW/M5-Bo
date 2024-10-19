const startAnimationRight = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("slide-in-from-right", entry.isIntersecting);
    });
  };

  const observerRight = new IntersectionObserver(startAnimationRight);
  const optionsRight = { root: null, rootMargin: '0px', threshold: 1 }; 
  
  const elementRight = document.querySelectorAll('#info_collum2');
  elementRight.forEach(el => {
    observerRight.observe(el, optionsRight);
  });
