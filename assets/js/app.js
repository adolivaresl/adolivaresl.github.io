$(document).ready(function(){
    $(".oculto").hide();              
      $(".inf").hover(function(){
            var nodo = $(this).attr("href");  
   
            if ($(nodo).is(":visible")){
                 $(nodo).hide();
                 return false;
            }else{
          $(".oculto").hide("slow");                             
          $(nodo).fadeToggle("fast");
          return false;
            }
      });
  }); 