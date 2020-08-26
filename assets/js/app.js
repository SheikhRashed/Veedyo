// @ts-nocheck
// window.addEventListener("scroll", () =>{
//     let pageY = window.pageYOffset;
//     let customer = document.querySelector("#customer");
//     console.log( customer.style.backgroundPosition = `-${pageY}px - 800px`);
//     console.log(customer);
// });

// var rellax = new Rellax('.rellax',{
//     horizontal:true,

//     //Disable vertical Parallax Scrolling     
//     vertical:false
// });


$(document).ready(function(){
    $('.client_slider').slick({
    autoplay: true,
    autoplaySpeed: 1200,
    dots:false,
    arrows:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });