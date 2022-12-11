$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.modal').fadeIn(800);
});

$('.close-popup').click(function() {
    $('.modal').fadeOut(800);
});