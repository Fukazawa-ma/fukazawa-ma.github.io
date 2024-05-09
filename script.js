$('a[href*="#"]').click(function(){
    var eleHash = $(this).attr('href');
    var pos = $(eleHash).offset().top;
    $('body,html').animate({scrollTop:pos},500);
    return false;
})