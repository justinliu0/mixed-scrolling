(function(){
    const horizontalContainer = document.getElementById('horizontal-container');
    const horizontalWrapper   = document.getElementById('horizontal-wrapper');
  
    function updateHeights() {
      const totalWidth = horizontalWrapper.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollLength = totalWidth - viewportWidth;
      const finalHeight = window.innerHeight + scrollLength;
      
      horizontalContainer.style.height = `${finalHeight}px`;
    }

    function onScroll() {
      const containerTop = horizontalContainer.offsetTop;
      const scrollY = window.scrollY;
      const containerHeight = parseFloat(horizontalContainer.style.height) || window.innerHeight;
      const containerBottom = containerTop + containerHeight;
      
      if (scrollY < containerTop || scrollY > containerBottom) return;

      const distance = scrollY - containerTop;
      const totalWidth = horizontalWrapper.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollLength = totalWidth - viewportWidth;
      
      let clamped = Math.max(0, Math.min(distance, scrollLength));

      horizontalWrapper.style.transform = `translateX(-${clamped}px)`;
    }
  
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', () => {
      updateHeights();
      onScroll();
    });
    updateHeights();
    onScroll();
  
  })();
  