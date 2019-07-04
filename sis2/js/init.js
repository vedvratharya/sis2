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
    $('.datepicker').datepicker({
      yearRange: 25,
      changeMonth: true,
      changeYear: true,
    });
  });
  $(function(){

   $("input[name=login]").click(function(){
      $("div.content").not("."+this.value).hide();
      $("."+this.value).show();
   });

});
