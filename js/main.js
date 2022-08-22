
function mobile(){
    //모바일에서 실행될 거 붙여넣기
    
    //nav 나오기
    let onOff = true;
        $('.btn').on('click',function(){
            onOff = !onOff;
            if(onOff == false){
            $('nav').css({'left':0});
            $(this).addClass('open');
            }else{
                $('nav').css({'left':'-100%'});
                $(this).removeClass('open');
            }
        })

    //sub 나오기
    $('.gnb>li').on('click',function(){
        $('.sub').stop().slideUp();
        $(this).children('.sub').stop().slideToggle();
    })
}

function pc(){
    //피씨에서 실행될 거 붙여넣기
    
    $('header .shop a').css({'display':'block'});
    $(window).on('scroll',function(){
        let scr = $(window).scrollTop();
        let start = $('.maincon').offset().top;
        if(scr >= 600){
            $('.top').fadeIn();
        }else{
            $('.top').fadeOut();
        }
        if(scr>=start){
            $('.hwrap').fadeOut();
            $('.hwrap2, .gnb li').fadeIn();
            $('nav').show();
            $('header .shop p').css({'color':'#3272d6'})
        }
        if(scr<=start){
            $('.hwrap').fadeIn();
            $('.hwrap2, .gnb li').fadeOut();
            $('header .shop p').css({'color':'#fff'})
        }
    })
}

function common(){
    //둘다 실행될 거 붙여넣기 

    //cm 재생
    $('.cm').get(0).play();

    $('.slide').slick({
        arrows : false,
        dots : true,
        autoplay : true,
        autoplaySpeed : 2500
    });
    
    
    $('.itvslide').slick({
        'nextArrow' : '.next',
        'prevArrow' : '.prev' 
    });
    
    
    let arr = ['2022', '2021', '2020', '2019', '2016']
    
     
    $('.pocarigirl').slick({
        arrows : false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear', 
        autoplay : true,
        autoplaySpeed : 2500,
        customPaging : function(slider, i) {
            return `<span class="num">${arr[i]}</span> <button></button>`;
        },
      });

      $('.top').on('click',function(){
        $("html, body").animate({scrollTop : 0}, 500);
    })

}




$(window).on('resize',function(){

    let winWidth = window.innerWidth;


    if(winWidth >=1320){
        pc();
        location.reload();
    }else{
        mobile();
        location.reload();
    }


});

common();



let winWidth = window.innerWidth;


if(winWidth >=1320){
    pc();
}else{
    mobile();
}
