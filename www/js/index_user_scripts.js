/*jshint browser:true */
/*global $ */(function()
{
 "use strict";

 function register_event_handlers(){
    
    
    
    /* button  Button */
    $(document).on("click", ".uib_w_2", function(evt){
         /*global activate_page */
         activate_page("#dashboard"); 
    });
     
     
     $(document).on("click", ".btn-inicio", function(){
        activate_subpage("#inicio");
     });
     
     $(document).on("click", ".btn-tarefas", function(){
        activate_subpage("#tarefas");
     });
     
     $(document).on("click", ".btn-settings", function(){
        activate_subpage("#settings");
     });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
