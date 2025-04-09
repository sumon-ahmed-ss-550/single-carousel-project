## HTML CODE HERE
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- FONTAWESOME CSS LINK HERE -->
     <link rel="stylesheet" href="./css/all.min.css">
     <link rel="stylesheet" href="./css/fontawesome.min.css">
    <!-- CSS STYLE LINK HERE -->
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div class="container">

        <h1>This is a carousel project</h1>
        <h2>This is again change</h2>

        <div class="carousel">

            <div class="carousel-inner">
                <div class="carousel-item"><img src="./img/img1.jpg" alt=""></div>
                <div class="carousel-item"><img src="./img/img2.jpg" alt=""></div>
                <div class="carousel-item"><img src="./img/img3.jpg" alt=""></div>
                <div class="carousel-item"><img src="./img/img4.jpg" alt=""></div>
            </div>

            <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
            <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
            <div class="dots"></div>

        </div>

    </div>
    <!-- FONTAWESOME JAVASCRIPT LINK HERE -->
     <script src="./js/all.min.js"></script>
     <script src="./js/fontawesome.min.js"></script>
    <!-- JAVASCRIPT LINK HERE -->
    <script src="./js/script.js"></script>
</body>
</html>

```

## CSS CODE HERE
```css
/*===================================================
BASIC CSS STYLE START HERE
======================================================*/
*{
    margin:0px;
    padding:0px;
    list-style-type:none;
    box-sizing:border-box;
    outline:none;
    line-height:1.5rem;
    }
.container{
    width:100%;
    max-width:1200px;
    margin:0px auto;
    }
/*===================================================
BASIC CSS STYLE END HERE
======================================================*/
.carousel{
    width:100%;
    position:relative;
    overflow:hidden;
    }
.carousel-inner{
    display:flex;
    flex-direction:row;
    transition:0.5s ease;
    }
.carousel-item{
    flex-basis:100%;
    flex-grow:0;
    flex-shrink:0;
    }
.carousel-item img{
    width:100%;
    height:auto;
    display:block;
    }
button{
    position:absolute;
    border:none;
    font-size:22px;
    padding:12px 18px;
    top:50%;
    transform:translateY(-50%);
    opacity:0.5;
    border-radius:4px;
    cursor:pointer;
    }
.prev{
    left:10px;
    }
.next{
    right:0px;
    right:10px;
    }
.dot{
    width:10px;
    height:10px;
    background-color:rgb(247, 238, 240);
    border-radius:50%;
    }
.dots{
    display:flex;
    position:absolute;
    bottom:10px;
    left:50%;
    transform:translateX(-50%);
    gap:6px;
    cursor:pointer;
    }

.active{
    background-color:#000;
    }
```

## JAVASCRIPT CODE HERE
```javascript
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
```