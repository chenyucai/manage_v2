(function($){
  $.fn.test = function(options){
    options = options || {};

    var defaultOpts = {
      callback:null,
    };

    var opts = $.extend({},defaultOpts,options);

    var $this = $(this);

    $this.on('click',function(e){
      $('#selectul').html('');
      $("#selectdiv").show();
      picker.renderHTML();
      e.stopPropagation();
    });

    $(document).click(function(event) {
      $("#selectdiv").hide();
    });

    var week =  [{'wk':'星期一','href':''},{'wk':'星期二','href':''},{'wk':'星期三','href':''},{'wk':'星期四','href':''},{'wk':'星期五','href':''},{'wk':'星期六','href':''},{'wk':'星期日','href':''}];
    var picker = {
      renderHTML: function(){
        for(i=0;i<week.length;i++){
          var html = '<li class="selectli"><a class="selectlia">'+week[i].wk+'</a></li>';
          $('#selectul').append(html);
        }
        $('.selectli').click(function(e){
          var val = $(this).find("a").html();
          $('.select').find("label").html(val);
          $("#selectdiv").hide();
          e.stopPropagation();
        });
      }
    };
  };
})(jQuery);
