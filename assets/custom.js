$(document).ready(function(){ 
  $(".mobile-toggle").click(function(k){
    k.preventDefault();
    $(this).toggleClass("on");
    $(".mobile-nav").toggleClass("active");
    $('body,html').toggleClass('scrollno');
  });    
  $(".shop-btn").click(function(k){
    k.preventDefault();
    $(this).toggleClass("active");
    $(".mega-menu").toggleClass("active"); 
  });  
  $(".search-btn").click(function(k){ 
    $(".header-search").toggleClass("active"); 
  });    
  $(".close").click(function(k){ 
    $(".header-search").removeClass("active"); 
  });    
  /********* On scroll heder Sticky *********/
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
          $("header").addClass("head-sticky");
      } else {
          $("header").removeClass("head-sticky");
      }
  });
  //END
  /******* Accordian JS *******/
    function close_accordion_section() {
        jQuery('.accordion .accordion-title').removeClass('active');
        jQuery('.accordion .accordion-content').slideUp(300).removeClass('open');
    } 
    jQuery('.accordion-title').click(function (e) {
        // Grab current anchor value
        var currentAttrValue = jQuery(this).attr('href');

        if (jQuery(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            // Add active class to section title
            jQuery(this).addClass('active');
            // Open up the hidden content panel
            jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }
        e.preventDefault();
    });  
    //FAQ ACCORDIAN
    $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".content").slideUp(200); 
        } else { 
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this).siblings(".content").slideDown(200);
        }
    });   
    var N = $("header").outerHeight(); 
    $(".video_section").css({ "margin-top": N, "padding-bottom": "calc(100vh - " + N + "px)" }); 
    var header_hright = $('header').outerHeight();
    $('header').next('.inner-wrapper').css('margin-top', header_hright + 'px'); 
    
    $(".mega-list li a").hover( function() { // Changes the .image-holder's img src to the src defined in .list a's data attribute.
        var value=$(this).attr('data-src');
        $(".image-holder").toggleClass('active');
        $(".image-holder img").attr("src", value);
    });

// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab-view").each(function(){
        $(this).find(".tab_content").hide(); 
        $(this).find(".tab_content:first").show();
    }); 
    /* if in tab mode */
    $("ul.tabs li").click(function() { 
      $(this).closest(".tab-view").find(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();	 
      $(this).closest(".tab-view").find("ul.tabs li").removeClass("active");
      $(this).addClass("active"); 
	  $(this).closest(".tab-view").find(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active"); 
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() { 
      $(this).closest(".tab-view").find(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn(); 
	  $(this).closest(".tab-view").find(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active"); 
	  $(this).closest(".tab-view").find("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    }); 
    //mobile fitst slick with window reload 
    if($('.gift-slider').length > 0 ){
    $('.gift-slider').slick({
        infinite: true,
        centerMode: false,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [ 
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1 
                }
            },
            {
                breakpoint: 575,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1 
                }
            }
        ]
    });   
    }
});    
$(window).on('load resize orientationchange', function() {
    $('.mobile_only_product_slider').each(function() {
        var $mobile_only_product_slider = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 767) {
            if ($mobile_only_product_slider.hasClass('slick-initialized')) {
                $mobile_only_product_slider.slick('unslick');
            }
        } else {
            if (!$mobile_only_product_slider.hasClass('slick-initialized')) {
                $mobile_only_product_slider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    infinite: true,
                    dots: false,
                    arrows: true,
                    touchThreshold: 100,
                    swipeToSlide: true,
                    waitForAnimate: false,
                    responsive: [ 
                        {
                        breakpoint: 575,
                            settings: {
                                slidesToShow: 2,
                                arrows: false,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }
        }
    });
  //END
  $('.mobile_only_how_work_slider').each(function() {
        var $mobile_only_how_work_slider = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 767) {
            if ($mobile_only_how_work_slider.hasClass('slick-initialized')) {
                $mobile_only_how_work_slider.slick('unslick');
            }
        } else {
            if (!$mobile_only_how_work_slider.hasClass('slick-initialized')) {
                $mobile_only_how_work_slider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    infinite: true,
                    dots: false,
                    autoplay: 1000,
                    speed: 1000,
                    arrows: true,
                    touchThreshold: 100,
                    swipeToSlide: true,
                    waitForAnimate: false,
                });
            }
        }
    }); 
});