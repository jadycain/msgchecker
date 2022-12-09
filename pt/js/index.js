var owl;
var is_pain_ani=false;
var blog_num;
var blog_id;
var blog_img;
var blog_title;
var blog_text;
$(document).ready(function(){

    $.ajax({
		url: 'https://intersense.ddns.net:9022/api/Message/GetListBlog?lang=PT',
		type: 'GET',
		dataType: 'json',
		contentType: 'application/json',
		success: function(data){
			console.log(data);
            blog_num=data.ListBlog.length;

            for(var i=0;i<blog_num;i++){
                blog_id=data.ListBlog[i].ArticleID;
                blog_img=data.ListBlog[i].TitleImageUrl;
                blog_title=data.ListBlog[i].Title;
                blog_text=data.ListBlog[i].Content;

                $('section.blog .item_box').append(
                    '<a class="item" href="blog.html?aid='+blog_id+'">'+
                        '<figure><img src="'+blog_img+'" /><div class="more"><p>Read more</p></div></figure>'+
                        '<div class="info"><h3>'+blog_title+'</h3><h4>'+blog_text+'</h4></div></a>'
                )
            }

            $('section.blog .inner .item_box').slick({
                arrows: false,
                infinite: true,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: 0,
                variableWidth: true,
                swipe: true,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 1500,
                        settings: {
                            arrows: false,
                            centerMode: true,
                        }
                    },
                    {
                        breakpoint: 750,
                        settings: {
                            arrows: false,
                            centerMode: true,
                        }
                    }
                ]
            });
		},
		error: function(xhr, ajaxOptions, thrownError){
			console.log(xhr);
			console.log(xhr.status);
			console.log(thrownError);
		}
	});

    /*** scroll ***/
	$(window).scroll(windowScroll);
    windowScroll();

    // pain
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
        triggerElement: "section.pain",
        triggerHook: "onLeave", 
        duration: '50%'
    }).setPin("section.pain").addTo(controller);

    scene.on('progress',(event)=>{
        let pixelProgress = event.progress * 1000;
        if (pixelProgress>100){
            if(!is_pain_ani){
                is_pain_ani=true;
                $('section.pain .item01').fadeOut(150,function(){
                    $('section.pain .item02').fadeIn(150,function(){
                        is_pain_ani=false;
                    });
                    $('section.pain .dot01').removeClass('active');
                    $('section.pain .dot02').addClass('active');
                });
            }
        }
        if (pixelProgress <= 100){
            if(!is_pain_ani){
                is_pain_ani=true;
                $('section.pain .item02').fadeOut(150,function(){
                    $('section.pain .item01').fadeIn(150,function(){
                        is_pain_ani=false;
                    });
                    $('section.pain .dot02').removeClass('active');
                    $('section.pain .dot01').addClass('active');
                });
            }
        }
    });

    $(window).resize(indexResize);
    indexResize();
    // solution
    owl = $('section.solution .slide_box');
    owl.owlCarousel({
        items: 3,
        loop: true,
        dots: true,
        center: true,
        touchDrag: false,
        mouseDrag: false,
        autoplayHoverPause: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 500,
        slideTransition: 'linear',
        responsive:{
            // breakpoint from 0 up
            1500:{
                margin: -118,
            },
            1000:{
                margin: -80,
            },
            750:{
                margin: -160,
            },
            200:{
                margin: -50,
            },
        }
    });
    $('.owl-dot').on('click',function(){
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay');
    });


    // say
    $('section.say .item_box').slick({
        arrows: true,
        infinite: true,
		dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        swipe: true,
		autoplay: false,
        centerPadding: '0px',
		responsive: [
		    {
			    breakpoint: 1500,
			    settings: {
                    arrows: false,
                    centerMode: true,
			    }
            },
            {
                breakpoint: 750,
                settings: {
                    arrows: false,
                    centerMode: true,
			    }
		    }
		]
    });

    set00();
    act00();
});

function set00(){
    TweenMax.set('section.kv .inner .right .phone',{opacity:0,y:50});
    TweenMax.set('section.kv .inner .left h2',{opacity:0,x:50});
    TweenMax.set('section.kv .inner .left p',{opacity:0,x:50});
    TweenMax.set('section.kv .inner .left a',{opacity:0,x:50});
    TweenMax.set('section.kv .shadow',{opacity:0,y:50});
    TweenMax.set('section.kv .c01',{opacity:0,x:-50});
    TweenMax.set('section.kv .inner .right .c02',{opacity:0,x:-50});

    TweenMax.set('section.feature .inner h2',{opacity:0,y:50});
    TweenMax.set('section.feature .inner .main .row',{opacity:0,y:50});

    TweenMax.set('section.trust .inner figure',{opacity:0,y:50});
    TweenMax.set('section.trust .inner .info',{opacity:0,x:50});

    TweenMax.set('section.say .inner h2',{opacity:0,x:50});
    TweenMax.set('section.say .inner h3',{opacity:0,x:50});
    TweenMax.set('section.say .inner .item_box',{opacity:0,y:50});

    TweenMax.set('section.whoscall .inner',{opacity:0,y:50});
    
    TweenMax.set('section.blog .inner h2',{opacity:0,y:50});
    TweenMax.set('section.blog .inner .item_box',{opacity:0,y:50});
}

function act00(){
    TweenMax.to('section.kv .inner .right .phone',0.8,{opacity:1,y:0});
    TweenMax.to('section.kv .inner .left h2',0.8,{opacity:1,x:0});
    TweenMax.to('section.kv .inner .left p',0.8,{delay:0.3,opacity:1,x:0});
    TweenMax.to('section.kv .inner .left a',0.8,{delay:0.6,opacity:1,x:0});
    TweenMax.to('section.kv .shadow',0.8,{delay:0.6,opacity:1,y:0});
    TweenMax.to('section.kv .c01',0.8,{delay:0.5,opacity:1,x:0});
    TweenMax.to('section.kv .inner .right .c02',0.8,{delay:0.5,opacity:1,x:0});
    
}

function act01(){
    TweenMax.to('section.feature .inner h2',0.8,{opacity:1,y:0});
    TweenMax.staggerTo('section.feature .inner .main .row',0.8,{delay:0.5,opacity:1,y:0},0.3);
}

function act02(){
    TweenMax.to('section.trust .inner figure',0.8,{opacity:1,y:0});
    TweenMax.to('section.trust .inner .info',0.8,{delay:0.3,opacity:1,x:0});
}

function act03(){
    TweenMax.to('section.say .inner h2',0.8,{opacity:1,x:0});
    TweenMax.to('section.say .inner h3',0.8,{delay:0.3,opacity:1,x:0});
    TweenMax.to('section.say .inner .item_box',0.8,{delay:0.6,opacity:1,y:0});
}

function act04(){
    TweenMax.to('section.whoscall .inner',0.8,{opacity:1,y:0});
}

function act05(){
    TweenMax.to('section.blog .inner h2',0.8,{opacity:1,y:0});
    TweenMax.to('section.blog .inner .item_box',0.8,{delay:0.5,opacity:1,y:0});
}

function indexResize(){
    $('section.pain').width($(window).width());
    $('section.pain').parent().css('min-width',$(window).width());
}


// windowScroll
var winScroll;
var winHeight;

var is_act01=false;
var is_act02=false;
var is_act03=false;
var is_act04=false;
var is_act05=false;

function windowScroll(){
	winScroll = $(window).scrollTop();
    winHeight = $(window).height();

    
    if(winScroll>=$('section.feature').offset().top-winHeight*0.8 && is_act01==false){
		is_act01=true;
		act01();
    }
    if(winScroll>=$('section.trust').offset().top-winHeight*0.8 && is_act02==false){
		is_act02=true;
		act02();
    }
    if(winScroll>=$('section.say').offset().top-winHeight*0.8 && is_act03==false){
		is_act03=true;
		act03();
    }
    if(winScroll>=$('section.whoscall').offset().top-winHeight*0.8 && is_act04==false){
		is_act04=true;
		act04();
    }
    if(winScroll>=$('section.blog').offset().top-winHeight*0.8 && is_act05==false){
		is_act05=true;
		act05();
    }
}