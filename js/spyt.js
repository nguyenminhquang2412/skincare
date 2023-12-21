$(document).ready(function(){
    $('.leftt').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true, 
        prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        autoplay: true,
        autospeed: 2000,
    });
});