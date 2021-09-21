$(document).ready(function(){

    $("#emergencia").on("mouseover",function(){

        $("#emergencia h4").css({"font-size":"1.7rem", "transition":"1s"});

        $("#emergencia strong").css({"font-size":"28px", "transition":"1s"});
       
    }).on("mouseout",function(){

        $("#emergencia h4").css({"font-size":"1.5rem", "transition":"1s"});

        $("#emergencia strong").css({"font-size":"1.25rem", "transition":"1s"});

    });

});
