(function($){

  var slider = $('.slides');

  $(window).on('load', function(){
    slider.bxSlider({
      speed: 5000,
      pager: false,
      controls: false,
      auto: false,
      autostart: 'true',
      mode: 'horizontal',
      captions: false,
      infiniteLoop: 'true',
      slideSelector: 'div.item'
    });

    //Use the arrow keys to control the slider
    $(document).keydown(function(e){
        if (e.keyCode == 39){
            slider.goToNextSlide();
            return false;
        }
        else if (e.keyCode == 37){
            slider.goToPrevSlide();
            return false;
       }
    });

  });

})(jQuery);
