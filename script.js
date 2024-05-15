$('a[href*="#"]').click(function(){
    var eleHash = $(this).attr('href');
    var pos = $(eleHash).offset().top;
    $('body,html').animate({scrollTop:pos},500);
    return false;
})

$('.hamburger').click(function(){
    $(this).toggleClass("active");
    $('#g-nav').toggleClass("navactive");
})
$('.g-nav-item a').click(function(){
    $('.hamburger').removeClass("active");
    $('#g-nav').removeClass("navactive");
});

$(window).on('load',function(){
    $("#loader").delay(3000).fadeOut('slow');
    $("#loading").delay(3000).fadeOut('slow');
  });
