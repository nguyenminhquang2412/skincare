$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
});