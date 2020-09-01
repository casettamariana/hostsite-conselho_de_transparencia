//Animation background navbar
$(window).scroll(function () {
    if ($(this).scrollTop() >= $("#home").height()) {
        document.querySelector('nav').classList.add("background_nav");
    } else if($(this).scrollTop() <= $("#home").height()){
        document.querySelector('nav').classList.remove("background_nav");
    }
});