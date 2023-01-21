$(document).ready(function() { 
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });
    
    var typed = new Typed(".typed", {
        strings:["BSIT Student","Software Engineer","full Stack Developer"],
        typeSpeed: 90,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
    
    $('.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        loop:true,
        items:5,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    
    var skillsTopOffSet = $(".skillsSection").offset().top;
    
    $(window).scroll(function(){
        if(window.pageYOffset > skillsTopOffSet - $(window).height() + 200){
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 5,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });
    
});