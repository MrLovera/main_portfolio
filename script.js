$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav-bar').addClass("sticky");
    }else {
        $('.nav-bar').removeClass("sticky");
    }
    });
    
    /*EFECTO TOGGLE*/
    $('.menu-btn').click(function(){
        $('.nav-bar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
});



// ANIMACION ESCRITURA


var typed = new Typed(".typing",{
    strings: ["Developer", "Designer", "Freelancer", "Youtuber"],
    typeSpeed:100,
    backSpeed:70,
    loop:true

});
