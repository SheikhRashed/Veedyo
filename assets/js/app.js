// @ts-nocheck

// One type

$(window).on("load resize scroll", function() {
  $(".bg-static").each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop;
    console.log(leftPosition);
      $(this)
        .find(".bg-move")
        .css({ left: leftPosition});
  });
});

// another way
// var bg = document.getElementsByClassName('bg-static');
// var parallaxInstance = new Parallax(bg);

$(document).ready(function(){
    $('.client_slider').slick({
    autoplay: true,
    autoplaySpeed: 1200,
    dots:false,
    arrows:false,
    slidesToShow: 5,
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