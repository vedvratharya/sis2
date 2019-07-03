(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('select').formSelect();
    $('.datepicker').datepicker();
  });
  $(function(){

   $("input[name=login]").click(function(){
      $("div.content").not("."+this.value).hide();
      $("."+this.value).show();
   });

});
