(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('select').formSelect();
    $('.carousel').carousel();
    $('.modal').modal();
    $('.slider').slider();
    $('.materialboxed').materialbox();
    $('.datepicker').datepicker({
      yearRange: 25,
      changeMonth: true,
      changeYear: true,
    });
    $("#m1").click(function(){
       $(this).removeClass('pulse');                   
   });
  });
  $(function(){

   $("input[name=login]").click(function(){
      $("div.content").not("."+this.value).hide();
      $("."+this.value).show();
   });

});
$('#textarea1').val('');
  M.textareaAutoResize($('#textarea1'));