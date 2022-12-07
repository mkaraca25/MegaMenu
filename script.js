$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(300);
    });
    
    smallScreenMenu();
    let temp;
    function resizeEnd(){
        smallScreenMenu();
    }

    $(window).resize(function(){
        clearTimeout(temp);
        temp = setTimeout(resizeEnd, 100);
        resetMenu();
    });
});
$(document).ready(function () {
    $("#btn").click(function () {
        alert("Hello, we will reply as soon as possible");
    });
});
$(document).ready(function () {
    $("#btnOrder").click(function () {
        alert("Your order has been received! Thank you for choosing us.");
    });
});

const subMenus = $('.sub-menu');
const menuLinks = $('.menu-link');

function smallScreenMenu(){
    if($(window).innerWidth() <= 992){
        menuLinks.each(function(item){
            $(this).click(function(){
                $(this).next().slideToggle();
            });
        });
    } else {
        menuLinks.each(function(item){
            $(this).off('click');
        });
    }
}

function resetMenu(){
    if($(window).innerWidth() > 640){
        subMenus.each(function(item){
            $(this).css('display', 'none');
        });
    }
}