//How to create a single carousel...js code

"use strict"
try{

  const carouselInner = document.querySelector(".carousel-inner");
  const carouselItem = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");
  let count = 0;

  const slideShow = ((index) => {
    if(index < 0){
      count = carouselItem.length - 1;
    }else if(index >= carouselItem.length){
      count = 0
    }else{
      count = index
    }
    carouselInner.style.transform = `translateX(-${count * 100}%)`;
    updateDots();
  });


  prevBtn.addEventListener("click", () => {
    slideShow(count - 1)
  });
  nextBtn.addEventListener("click", () => {
    slideShow(count + 1)
  });

  carouselItem.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if(index === 0){
      dot.classList.add("active")
    };
    dot.addEventListener("click", () => {
      slideShow(index)
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot")
  const updateDots = (() => {
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === count);
    })
  });

const infiniteSlide = setInterval(() => {
    slideShow(count + 1)
  }, 2000);

}catch(err){
  console.log(err)
}