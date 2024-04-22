$(document).ready(function(){
    $(".navbar a").click(function(event) {
        event.preventDefault();
        
        var targetId = $(this).attr("href");
        var targetSection = $(targetId);
        
        if (targetSection.length) {
            $("html, body").animate({
                scrollTop: targetSection.offset().top
            }, 1000, "easeInOutExpo"); 
        }
    });
});