const startAnimationLeft = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("slide-in-from-left", entry.isIntersecting);
    });
  };

  const observerLeft = new IntersectionObserver(startAnimationLeft);
  const optionsLeft = { root: null, rootMargin: '0px', threshold: 1 }; 
  
  const elementLeft = document.querySelectorAll('#info_collum1');
  elementLeft.forEach(el => {
    observerLeft.observe(el, optionsLeft);
  });
