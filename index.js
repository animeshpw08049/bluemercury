{
    const sliders = document.querySelectorAll(".slider");
    // interval between switching images
    // can't be less than your animation duration in css!
    const interval = 4000;
    // if you don't want to first animation last longer than other animations  
    // set animDuration (in miliseconds) to your value of animation duration in css
    const animDuration = 1000;
  
    for (let i = 0; i < sliders.length; ++i) {
      const slider = sliders[i];
      const dots = slider.querySelector(".dots");
      const sliderImgs = slider.querySelectorAll(".img");
  
      let currImg = 0;
      let prevImg = sliderImgs.length - 1;
      let intrvl;
      let timeout;
  
      // Creates dots and add listeners to them
      for (let i = 0; i < sliderImgs.length; ++i) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dots.appendChild(dot);
        dot.addEventListener("click", dotClick.bind(null, i), false);
      }
  
      const allDots = dots.querySelectorAll(".dot");
      allDots[0].classList.add("active-dot");
  
      sliderImgs[0].style.left = "0";
      timeout = setTimeout(() => {
        animateSlider();
        sliderImgs[0].style.left = "";
        intrvl = setInterval(animateSlider, interval);
      }, interval - animDuration);   
  
      /**
       * Animates images
       * @param {number} [nextImg] - index of next image to show
       * @param {boolean} [right = false] - animate to right
       */
      function animateSlider(nextImg, right) {
        if (!nextImg)
          nextImg = currImg + 1 < sliderImgs.length ? currImg + 2 : 1;
  
        --nextImg;
        sliderImgs[prevImg].style.animationName = "";
  
        if (!right) {
          sliderImgs[nextImg].style.animationName = "leftNext";
          sliderImgs[currImg].style.animationName = "leftCurr";
        } 
        else {
          sliderImgs[nextImg].style.animationName = "rightNext";
          sliderImgs[currImg].style.animationName = "rightCurr";
        }
  
        prevImg = currImg;
        currImg = nextImg;
  
        currDot = allDots[currImg];
        currDot.classList.add("active-dot");
        prevDot = allDots[prevImg];
        prevDot.classList.remove("active-dot");
      }
  
      /**
       * Decides if animate to left or right and highlights clicked dot
       * @param {number} num - index of clicked dot
       */
      function dotClick(num) {
        if (num == currImg)
          return false;
  
        clearTimeout(timeout);
        clearInterval(intrvl);
  
        if (num > currImg)
          animateSlider(num + 1);
        else
          animateSlider(num + 1, true);
  
        intrvl = setInterval(animateSlider, interval);
      }
    }
  }
  var slideLeft = 1;
var slideRight = 4;
var slideLeft1 = 1;
var slideRight1 = 4;
var slideLeft2 = 1;
var slideRight2 = 4;
function slideShow() {
    for (let i = slideLeft; i <= slideRight; i++) {
        document.getElementById("sc" + i).style.display = "inline-block";
    }
    for(var i = slideLeft1 ; i<= slideRight1 ;i++){
      document.getElementById("scent"+i).style.display= "inline-block";
    }
    for(var i = slideLeft2 ; i<= slideRight2 ;i++){
      document.getElementById("bs"+i).style.display= "inline-block";
    }
}
function slideMoveRight() {
    if (slideRight <= 7) {
        document.getElementById("sc" + slideLeft).style.display = "none";
        slideLeft += 1;
        slideRight += 1;

        for (let i = slideLeft; i <= slideRight; i++) {
            document.getElementById("sc" + i).style.display = "inline-block";
        }
    } else {
        return;
    }
}
function slideMoveRight1() {
  if (slideRight1 <= 7) {
      document.getElementById("scent" + slideLeft1).style.display = "none";
      slideLeft1 += 1;
      slideRight1 += 1;

      for (let i = slideLeft1; i <= slideRight1; i++) {
          document.getElementById("scent" + i).style.display = "inline-block";
      }
  } else {
      return;
  }
}
function slideMoveRight2() {
  if (slideRight2 <= 7) {
      document.getElementById("bs" + slideLeft2).style.display = "none";
      slideLeft2 += 1;
      slideRight2 += 1;

      for (let i = slideLeft2; i <= slideRight2; i++) {
          document.getElementById("bs" + i).style.display = "inline-block";
      }
  } else {
      return;
  }
}
function slideMoveLeft() {
    if (slideLeft >= 2) {
        document.getElementById("sc" + slideRight).style.display = "none";
        slideLeft -= 1;
        slideRight -= 1;

        for (let i = slideLeft; i <= slideRight; i++) {
            document.getElementById("sc" + i).style.display = "inline-block";
        }
    } else {
        return;
    }
}
function slideMoveLeft1() {
  if (slideLeft1 >= 2) {
      document.getElementById("scent" + slideRight1).style.display = "none";
      slideLeft1 -= 1;
      slideRight1 -= 1;

      for (let i = slideLeft1; i <= slideRight1; i++) {
          document.getElementById("scent" + i).style.display = "inline-block";
      }
  } else {
      return;
  }
}
function slideMoveLeft2() {
  if (slideLeft2 >= 2) {
      document.getElementById("scent" + slideRight2).style.display = "none";
      slideLeft2 -= 1;
      slideRight2 -= 1;

      for (let i = slideLeft2; i <= slideRight2; i++) {
          document.getElementById("bs" + i).style.display = "inline-block";
      }
  } else {
      return;
  }
}