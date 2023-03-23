$(document).ready(function(){
   $('.scrollspy').scrollSpy();
   $('#carouselNaves').carousel({
      fullwidth: true,
      // padding: 500,
      // numVisible: 3,
      dist: 0,
      duration: 200,
      indicators: true
   });

   $('#carouselSiths').carousel({
      padding: 500,
      numVisible: 5,
      dist: -100,
      duration: 200,
   });

   $('#carouselJedis').carousel({
      padding: 500,
      numVisible: 5,
      dist: 50,
      duration: 200,
   });


   $('.sidenav').sidenav();

});