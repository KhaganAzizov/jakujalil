$(window).on('load',function() {
    $("#loading").fadeOut(100, function() {
        $("section").show();
        AOS.init();
        $(".hamburger").click(function() {
            $("nav").toggleClass("active");
        })
        fireme(true);
    });
});
function go(pos) {
    if(pos===1){
        $('#vid1').attr('src','https://www.youtube.com/embed/HgWGQbALPy4?autoplay=0');
        $('#dat1').text("03.08.2020");
        $('#tit1').text("Azerbaijani Niva");
        $('#txt1').text("Niva is a famous car among young people. You rarely can see untuned Niva in Baku.");
        $('#vid2').attr('src','https://www.youtube.com/embed/HZ8W9CgiZYA?autoplay=0');
        $('#dat2').text("01.08.2020");
        $('#tit2').text("AutoStatus");
        $('#txt2').text("If you live in Azerbaijan and love cars as much as I do you probably have seen this Youtube show.");
        $('#vid3').attr('src','https://www.youtube.com/embed/_WFFXAcCmGI?autoplay=0');
        $('#dat3').text("01.04.2020");
        $('#tit3').text("Car from Dubai");
        $('#txt3').text("I also shoot cars in different countries.This Mustang is known as UFO in Dubai");
        $('#vid4').attr('src','https://www.youtube.com/embed/vF17rJXWQ0s?autoplay=0');
        $('#dat4').text("01.04.2020");
        $('#tit4').text("Porsche New Year");
        $('#txt4').text("There is no bad car there is bad advertisement. New Year video for Porsche Azerbaijan.");
        fireme(true);

    }
    else if(pos===2){
        $('#vid1').attr('src','https://www.youtube.com/embed/uCppKSVXJpg?autoplay=0');
        $('#dat1').text("24.09.2019");
        $('#tit1').text("Retro");
        $('#txt1').text("All music videos of Retro are shooting by me");
        $('#vid2').attr('src','https://www.youtube.com/embed/x-KQAsFrszU?autoplay=0');
        $('#dat2').text("16.10.2019");
        $('#tit2').text("Aslixan\nGüc Məndədir");
        $('#txt2').text("This video has been shooted by me and Farman Bashirli.");
        $('#vid3').attr('src','https://www.youtube.com/embed/F91Riw44Gs4?autoplay=0');
        $('#dat3').text("01.04.2020");
        $('#tit3').text("Sabir Samiroglu\nDivj-Mvij");
        $('#txt3').text("I also shoot cars in different countries.This Mustang is known as UFO in Dubai");
        $('#vid4').attr('src','https://www.youtube.com/embed/F91Riw44Gs4?autoplay=0');
        $('#dat4').text("01.04.2020");
        $('#tit4').text("Another music video");
        $('#txt4').text("There is no bad car there is bad advertisement. New Year video for Porsche Azerbaijan.");
        fireme(true);
    }
    else  if(pos===3){
        $('#vid1').attr('src','https://www.youtube.com/embed/l55RvyiOAh0?autoplay=0');
        $('#dat1').text("25.11.2019");
        $('#tit1').text("Unboxing");
        $('#txt1').text("Recently started to shoot camera stuff unboxing videos");
        $('#vid2').attr('src','https://www.youtube.com/embed/XrstkBgIDfA?autoplay=0');
        $('#dat2').text("Ongoing");
        $('#tit2').text("Zarafat-Zarafata");
        $('#txt2').text("Very famous show where you dont have to laugh at guests jokes.");
        $('#vid3').attr('src','https://www.youtube.com/embed/r4kcOjtHEXk?autoplay=0');
        $('#dat3').text("Ongoing");
        $('#tit3').text("KinoZavr");
        $('#txt3').text("Show that exams Azerbaijani movies.");
        $('#vid4').attr('src','https://www.youtube.com/embed/RKYc6R1NCCk?autoplay=0');
        $('#dat4').text("01.04.2020");
        $('#tit4').text("Technote");
        $('#txt4').text("Worked as a filmmaker at Technote");
        fireme(true);
    }
}
function sendmail(){
    if( $('#mailname').val() !=='' && $('#mailmsg').val() !== '' ){
        alert("perfect");
        var txt=$('#mailmsg').val()+"%0D%0A"+$('#mailname').val();
        window.open('mailto:azizovkhgn@gmail.com?subject=WebContact'+'&body='+txt);
    }

}
function fireme(res){
    var s           = $('.slider'),
        sWrapper    = s.find('.slider-wrapper'),
        sItem       = s.find('.slide'),
        btn         = s.find('.slider-link'),
        sWidth      = sItem.width(),
        sCount      = sItem.length,
        slide_date  = s.find('.slide-date'),
        slide_title = s.find('.slide-title'),
        slide_text  = s.find('.slide-text'),
        slide_more  = s.find('.slide-more'),
        slide_image = s.find('.slide-image'),
        sTotalWidth = sCount * sWidth;

    sWrapper.css('width', sTotalWidth);
    sWrapper.css('width', sTotalWidth);
    var clickCount  = 0;
    if(res){
        TweenMax.to(sWrapper, 0.4, {x: '-' + ( 0 ) });
        res=false;
        var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
        var toProperties = {autoAlpha:0.8, x:'0', y:'0'};
        TweenLite.fromTo(slide_image, 2, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
        TweenLite.fromTo(slide_date, 1.3, fromProperties, toProperties);
        TweenLite.fromTo(slide_title, 1.6, fromProperties, toProperties);
    }
    btn.off('click');
    btn.on('click', function(e) {
        e.preventDefault();

        if( $(this).hasClass('next') ) {
            ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
        } else if ( $(this).hasClass('prev') ) {
            ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
        }
        TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })


        //CONTENT ANIMATIONS

        var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
        var toProperties = {autoAlpha:0.8, x:'0', y:'0'};

        TweenLite.fromTo(slide_image, 2, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
        TweenLite.fromTo(slide_date, 1, fromProperties, toProperties);
        TweenLite.fromTo(slide_title, 1.3,fromProperties, toProperties);
        TweenLite.fromTo(slide_text, 1.6, fromProperties, toProperties);
     /*   TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);*/

    });
}
$('.overlay').addClass('overlay-blue');