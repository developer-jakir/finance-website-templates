$(document).ready(function(){
    $(".mobile-menu-box i").click(function() {
        $("nav").toggleClass('add-nav').animate(1000)
        $("#main-menu").toggleClass('block')
        });
});