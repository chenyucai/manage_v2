;(function($){

  $.fn.test =function(options){

    options = options || {};

    var defaults = {
      callback:null
    };

    var opts = $.extend({}, defaults, options);

    var $this = $(this);

    $this.on('click',function(){
      alert(1);
    });

    var renderHtml = "";
  };

})(jQuery);
