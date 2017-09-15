(function($){

  var slider = $('.slides');
  var isSliding = false;

  $(window).on('load', function(){

    slider.bxSlider({
      speed: 2000,
      pager: false,
      controls: false,
      auto: false,
      autostart: false,
      mode: 'horizontal',
      captions: false,
      infiniteLoop: false,
      slideSelector: 'div.item',
      useCSS: true,
      onSlideBefore() {
        isSliding = true;
      },
      onSlideAfter() {
        isSliding = false;
      }
    });

    //Use the arrow keys to control the slider
    $(document).keydown(function(e){

      //Prevent any action if slider is currently sliding
      if(isSliding){
        return false;
      }

      if (e.keyCode == 39){
          slider.goToNextSlide();
          return false;
      }
      else if (e.keyCode == 37){
          slider.goToPrevSlide();
          return false;
     }
    });

    $(".slides").stellar({
      scrollProperty: 'transform',
      positionProperty: 'transform',
      horizontalScrolling: true,
      verticalScrolling: false,
      hideDistantElements: false,
    });

  });

})(jQuery);
