
$(document).ready(function() {

        $("#hamburger, #close").click(function() {
          $("#hamburger, #close").toggle();
          $("nav ul").toggleClass("open-nav");

        });
      });
