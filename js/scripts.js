$=jQuery;


$(function() {

  // $('.portfolio-projects__container > a').on("click",function(e){
  //   e.preventDefault();
  // });

  /*
  ========================================
  Generales (Start)
  Page: Todas
  ========================================
  */

  var windowWidth = $(window).innerWidth();
  var windowHeight = $(window).innerHeight();
  //alert("width: " + windowWidth + " ,height :" + windowHeight);

  $(window).on("resize",function(){
    windowWidth = $(window).innerWidth();
    windowHeight = $(window).innerHeight();
  });

  //alert(windowWidth +" x "+ windowHeight);
  //alert("window height" + windowHeight);

  $(".mouse").on("click",function(){
    var numberSection= $(this).data("section");
    $('html, body').animate({
      scrollTop: $(".home-slide--one").offset().top
    }, 1000);
  });


  /*
  ========================================
  Generales (End)
  Page: Todas
  ========================================
  */


  /**********************************************/
	/* VH Mobile Calculate navigation toolbar	  */
	/*********************************************/

	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	/**********************************************/
	/* VH Mobile Calculate navigation toolbar	  */
	/*********************************************/


   /*
	========================================
  Slider Otros Proyectos(Start)
  Page: Single Portafolio
	========================================
  */

  $('.other-projects .portfolio-projects__container').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
          breakpoint: 991,
          settings: 'unslick'
      }
    ]
  });

  $(window).on('resize', function() {
    $(".home__menu").slick('resize');
  });

  /*
	========================================
  Slider Otros Proyectos(End)
  Page: Single Portafolio
	========================================
  */

  /*
	========================================
  Efecto Parallax Elements (Start)
  Page: Single Servicio
	========================================
  */

  //if(windowWidth > 991){
    parallaxElementsPortfolio();
  //}

  function parallaxElementsPortfolio(){
    var controller = new ScrollMagic.Controller();
        
    $(".content-portfolio__image img").each(function (index, elem) {
      var tween = TweenMax.to(
        elem, 0.5,
        {
          y: 0,
          yoyo: true
        }
      );
      new ScrollMagic.Scene({
          duration: windowHeight/3,
          triggerElement: $(window),
          triggerHook: 0,
      })
      .setTween(tween)
      .addTo(controller)
      //.addIndicators();
    });

    $(".content-portfolio__content-side > div img").each(function (index, elem) {
      var tween = TweenMax.to(
        elem, 0.5,
        {
          y: 0,
          yoyo: true
        }
      );
      new ScrollMagic.Scene({
          duration: windowHeight,
          triggerElement: elem,
          triggerHook: 1,
      })
      .setTween(tween)
      .addTo(controller)
      //.addIndicators();
    });

  }

  /*
  ========================================
  Efecto Parallax Elements (End)
  Page: Single Servicio
  ========================================
  */



  /*
  ========================================
  Slider otros proyectos (Start)
  Page: Single portafolio
  ========================================
  */

  $('.about-site__slider > div').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
  });

   /*
  ========================================
  Slider otros proyectos (End)
  Page: Single portafolio
  ========================================
  */

  /*
	========================================
  Efecto Buscador (Start)
  Page: Todas
	========================================
  */

  var $body = $('body');
  var $menu = $('.menu');
  var $menuItems = $(document).find('.menu > li');
  var $searchWrapper = $('.search-wrapper');
  var $searchFormWrapper = $('.search-form-wrapper');

  function displaySearch() {
    if(! $body.hasClass('search-on')) {
      $body.addClass('search-on');
      // Fade out the menu items
      $menu.velocity({
        opacity: 0
      }, {
        duration:195,
        easing: [20]
      });
      $menuItems.velocity({
        opacity: 0,
        scale: 0.70
      }, {
        duration: 210, 
        easing: [20]
      });
      // Display background overlay
      // $background.velocity({
      //   opacity: 1
      // }, {
      //   duration: 50, 
      //   easing: "easeInQuad",
      //   display: "block"
      // });
      // Display the search
      $searchWrapper.addClass('search-displayed');
      $searchWrapper.velocity({
        opacity: 1
      }, {
        duration: 200
      });
      $searchFormWrapper.velocity({
        left: '10px',
        opacity:1
      }, {
        duration: 600,
        easing: 'easeOutSine',
            delay: 175
      });
    
      // Change search icon to x
      $('.search-g4a').html('<i class="icon-close"></i>');
    } else {
      $body.removeClass('search-on');
      $searchWrapper.removeClass('search-displayed');
      $menu.velocity('reverse');
      $menuItems.velocity({opacity: 1, scale: 1}, {
        duration: 200,
        easing: [20],
        stagger: 100
      });
      // $background.velocity('reverse');
      $searchFormWrapper.velocity('reverse');
      //$searchWrapper.add($searchSuggestionItems).velocity('reverse');
      $('.search-g4a').html('<i class="icon-buscar"></i>');
    }

  }

  $(".search-g4a").on('click', function(){
    //console.log("clicked search");
    displaySearch();
  });

  /*
	========================================
  Efecto Buscador (End)
  Page: Todas
	========================================
  */

  /*
	========================================
  Slider Section (Start)
  Page: Home
	========================================
  */

  $(".pagination__content").on("click",function(){
    var numberSection= $(this).data("section");
    $('html, body').animate({
      scrollTop: $(".home-slide--"+numberSection).offset().top
    }, 1000);
  });

  var arrayColors = ["#ec1968","#faaf40", "#4069b1"];
  let totalHeight = 100;

  // Detectar cambio de sección
  var level = 0;
 
  if($(".content-wrapper.home").length){
    var homeLogoTop = $(".home__logo").offset().top;
    $(window).on("scroll",function(event){
      
      if( $(window).scrollTop() <= homeLogoTop){
        $(".pagination-container").removeClass("show");
        level = 0;
      }
      if(level == 0 || level == 2 ){
        if( $(window).scrollTop() >=  $(".home-slide--one").offset().top - (windowHeight/2) 
            && $(window).scrollTop() <=  ($(".home-slide--one").offset().top + (windowHeight - (windowHeight/2)))){
          level = 1;
          moveSectionSlide(level);
          $(".pagination-container").addClass("show");
          //return
        }
      }
      if(level == 1 || level == 3){
        if( $(window).scrollTop() >=  ($(".home-slide--two").offset().top) - (windowHeight/2) 
          && $(window).scrollTop() <=  ($(".home-slide--two").offset().top + (windowHeight - (windowHeight/2)))){
          level = 2;
          moveSectionSlide(level);
          //return;
        }
      }
      if(level == 2){
        if( $(window).scrollTop() >=  $(".home-slide--three").offset().top - (windowHeight/2) 
          && $(window).scrollTop() <=  ($(".home-slide--three").offset().top + (windowHeight - (windowHeight/2)))){
          level = 3;
          moveSectionSlide(level);
          //return;
        }
      }
    });
  
    function moveSectionSlide(level){
      //console.log("level:" + level);
      let slideDivision = totalHeight / 3;
      let slideTop = slideDivision * (level -1);
      $(".pagination__content").removeClass("active");
      $(".pagination__content").eq(level -1).toggleClass("active");
      $(".pagination__slider").css("background-color", arrayColors[(level -1)]);
      $(".pagination__slider").stop().animate({
        top: slideTop + "%",
      }, 1000, function() {});
    }
  }
  
  /*
	========================================
  Slider Section (End)
  Page: Home
	========================================
  */


  /*
	========================================
  Efecto Cambiar Social en Footer (Start)
  Page: Todas
	========================================
  */

  if( $("footer").length && $(".footer__top").is(":visible") ){
    var footerTop = $("footer").offset().top;
    var heightSocialFixed = $(".social-networks--home ul").height();
    // console.log("socialFixedTop: " + socialFixedTop);
    // console.log("FooterTop: " + footerTop);
    $(window).scroll(function() {
      // console.log("windowScrollTop: " + $(window).scrollTop());
      if($(window).scrollTop() > (footerTop - ( (windowHeight/2) - (heightSocialFixed/2) )) ){
        $(".social-networks--home").addClass("footer");
      }
      else{
        $(".social-networks--home").removeClass("footer");
      }
    });
  }
  
  /*
	========================================
  Efecto Cambiar Social en Footer (End)
  Page: Todas
	========================================
  */


  /*
	========================================
  Efecto Cambiar Menu en Footer (Start)
  Page: Todas
	========================================
  */

  $(window).scroll(function() {

    if($(".footer__top").is(":visible")){
      //console.log("scrollTop: " + $(window).scrollTop() + "windowHeight: " + $(window).height() + "documentHeight: " + $(document).height());
      if(($(window).scrollTop() + $(window).height()) + 56 >= $(document).height()) {
        $(".nav--clone-secondary").addClass("footer");
        $(".nav--clone-secondary .logo-color").hide();
        $(".nav--clone-secondary .logo-white").show();
        
      }
      else{
        $(".nav--clone-secondary").removeClass("footer");
        $(".nav--clone-secondary .logo-white").hide();
        $(".nav--clone-secondary .logo-color").show();
      }
    }
    
  });

  /*
	========================================
  Efecto Cambiar Menu en Footer (End)
  Page: Todas
	========================================
  */

  /*
	========================================
  Efecto Parallax Elements (Start)
  Page: Single Servicio
	========================================
  */

  // if(windowWidth > 991){
  //   parallaxElementsHome();
  // }

  var containerHeight = $(".home-slide__square-bkg").innerHeight();
  var scrollElements = [
    /** First slide **/
    { "selector": ".home-slide--one .home-slide__img img","triggerElement" :".home-slide--one .home-slide__square-bkg","duration": 1, "y": 45},

    { "selector": ".home-slide--one .home-slide__square","triggerElement" :".home-slide--one .home-slide__square-bkg", "duration": 0.5, "y": 0},
    { "selector": ".home-slide--one .home-slide__letter-bkg img","triggerElement" :".home-slide--one .home-slide__square-bkg", "duration": 0.8, "y": 0},

    { "selector": ".home-slide--one .home-slide__info","triggerElement" :".home-slide--one .home-slide__square-bkg", "duration": 0.2, "y": 0},
    { "selector": ".home-slide--one .home-slide__square-bkg","triggerElement" :".home-slide--one .home-slide__square-bkg", "duration": 1, "y": 0},

    /** Second slide **/
    { "selector": ".home-slide--two .home-slide__img img","triggerElement" :".home-slide--two .home-slide__square-bkg","duration": 1, "y": -80},

    { "selector": ".home-slide--two .home-slide__square","triggerElement" :".home-slide--two .home-slide__square-bkg", "duration": 0.5, "y": -50},
    { "selector": ".home-slide--two .home-slide__letter-bkg img","triggerElement" :".home-slide--two .home-slide__square-bkg", "duration": 0.8, "y": 0},

    { "selector": ".home-slide--two .home-slide__info","triggerElement" :".home-slide--two .home-slide__square-bkg", "duration": 0.2, "y": -20},
    { "selector": ".home-slide--two .home-slide__square-bkg","triggerElement" :".home-slide--two .home-slide__square-bkg", "duration": 1, "y": 0},

    /** Third slide **/
    { "selector": ".home-slide--three .home-slide__img","triggerElement" :".home-slide--three .home-slide__square-bkg","duration": 1, "y": -40},

    { "selector": ".home-slide--three .home-slide__square","triggerElement" :".home-slide--three .home-slide__square-bkg", "duration": 0.5, "y": -50},
    { "selector": ".home-slide--three .home-slide__letter-bkg img","triggerElement" :".home-slide--three .home-slide__square-bkg", "duration": 0.8, "y": 0},

    { "selector": ".home-slide--three .home-slide__info","triggerElement" :".home-slide--three .home-slide__square-bkg", "duration": 0.2, "y": -60},
    { "selector": ".home-slide--three .home-slide__square-bkg","triggerElement" :".home-slide--three .home-slide__square-bkg", "duration": 1, "y": 0},
  ]

  for (index = 0; index < scrollElements.length; index++) {
    if(windowWidth > 991){
      parallaxElementsHome(scrollElements[index].selector,scrollElements[index].triggerElement, scrollElements[index].duration, scrollElements[index].y);
    }
  }

  function parallaxElementsHome(elem,triggerElement,duration,y){
    //console.log(elem);
    var controller = new ScrollMagic.Controller();
      //console.log(windowHeight);
      var tween = TweenMax.to(
        elem, duration,
        {
          y: y,
          yoyo: true
        }
      );
      new ScrollMagic.Scene({
          duration: windowHeight + containerHeight,
          triggerElement: triggerElement,
          triggerHook: 1,
      })
      .setTween(tween)
      .addTo(controller)
      //.addIndicators();
  }

  /*
  ========================================
  Efecto Parallax Elements (End)
  Page: Single Servicio
  ========================================
  */


  /*
  ========================================
  SnackBar (Start)
  Page: Interior Servicio
  ========================================
  */
  var clickDisabled = false;
  var timeOut = 0;
  function snackbar() {
    $("#snackbar").addClass("show");
    clickDisabled = true;
    timeOut = setTimeout(
      function(){
        $("#snackbar").removeClass("show");
        clickDisabled = false;
      },6000
    );

  }

  var dataTooltip = "";
  $("[data-tooltip]").on("click",function(){
    if(windowWidth < 768){
      if (clickDisabled) return;
      dataTooltip = $(this).data("tooltip");
      $("#snackbar").find(".info").html(dataTooltip);
      snackbar();
    }
    
  });

  $("#snackbar i").on("click",function(){
    $("#snackbar").removeClass("show");
    clickDisabled = false;
    clearTimeout(timeOut);
  });
  
  /*
	========================================
  Custom Select Dropdown (Start)
  Page: Contacto
	========================================
  */
  
  $('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

  });

  /*
	========================================
  Custom Select Dropdown (End)
  Page: Contacto
	========================================
  */

  /*
	========================================
  Slider Home -- Primera sección (Start)
  Page: Home
	========================================
  */

  //Agregar clase para mostrar degradado una vez que se muestra la segunda opcion del menu
  $(".home__menu").on("afterChange", function (slick, currentIndex){
    $(".home__menu").addClass("left");
    if(currentIndex.currentSlide == 0){
      $(".home__menu").removeClass("left");
    }
  });

  $('.home__menu').slick({
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToScroll: 1,
    //centerMode: true,
    variableWidth: true,
    mobileFirst: true,
    rows: 0,
    responsive: [
      {
          breakpoint: 991,
          settings: 'unslick'
      }
    ]
  });

  $(window).on('resize', function() {
    $(".home__menu").slick('resize');
  });

  /*
	========================================
  Slider Home -- Primera sección (End)
  Page: Home
	========================================
  */
  
  /*
	========================================
  Efecto Parallax Elements (Start)
  Page: Single Servicio
	========================================
  */

  if(windowWidth > 991){
    parallaxElements();
  }

  function parallaxElements(){
    var controller = new ScrollMagic.Controller();
        
    $(".c-step-cycle__image img").each(function (index, elem) {
      var tween = TweenMax.to(
        elem, 0.5,
        {
          y: -30,
          yoyo: true
        }
      );
      new ScrollMagic.Scene({
          duration: windowHeight,
          triggerElement: elem,
          triggerHook: 1,
      })
      .setTween(tween)
      .addTo(controller)
      //.addIndicators();
    });
  }
  
  /*
	========================================
  Efecto Parallax Elements (End)
  Page: Single Servicio
	========================================
  */


  /*
	========================================
  Slider Home Tablet (Start)
  Page: Home
	========================================
  */

  $(window).on("load",function(){
    $('.slider-tablet').slick({
      arrows: false,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    });
  });

  $('.slider-tablet').on('init reInit beforeChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    let totalWidth = 100;
    let slideDivision = totalWidth / slick.slideCount;
    let slideLeft = 0;
    slideLeft = slideDivision * i;

    $(".custom-paging__actual-slide").text( (i < 9) ? "0"+i : i);
    $(".custom-paging__total-slides").text( (slick.slideCount < 9) ? "0"+slick.slideCount : slick.slideCount);

    //Calcular posicion del slider
    $(".custom-paging__slider").animate({
      width: slideLeft + "%",
    }, 1000, function() {});

  });

  /*
	========================================
  Slider Home Tablet (End)
  Page: Home
	========================================
  */


  /*
	========================================
  List Style Type (Start)
  Page: Interior Servicio
	========================================
  */

  // Para poder alinear de acuerdo al diseño los bullets de las listas
  $(".c-step-cycle ul li").wrapInner( "<div class='fake-list'></div>" );

  /*
	========================================
  List Style Type (Start)
  Page: Interior Servicio
	========================================
  */
  
  /*
	========================================
  Hamburguer Menu (Start)
  Page: All
	========================================
  */

  $(".hamburguer-menu").on("click",function(){
    $(".nav-secondary").addClass("open");
    $(".menu-overlay").addClass("open");
    $("body").addClass("open");
  });

  $(".close-menu").on("click",function(){
    $(".nav-secondary").removeClass("open");
    $(".menu-overlay").removeClass("open");
    $("body").removeClass("open");
    $(".hamburguer-menu").removeClass("is-open");
  });

  $('.hamburguer-menu').on("click",function(){
    $(this).toggleClass("is-open");
  });

  /*
	========================================
  Hamburguer Menu (End)
  Page: All
	========================================
  */
  
  /*
	========================================
  Category Slider (Start)
  Page: Blog / Blog Single
	========================================
  */

  $(".blog-tags ul").on("afterChange", function (slick, currentIndex){
    $(".blog-tags ul").addClass("left");
    if(currentIndex.currentSlide == 0){
      $(".blog-tags ul").removeClass("left");
    }
  });

  $(".blog-tags ul").slick({
    autoplay: true,
    autoplaySpeed: 2000,

    arrows: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    variableWidth: true,
    rows: 0,
  });

  $(window).on('resize', function() {
    $(".blog-tags ul").slick('resize');
  });

   /*
	========================================
  Category Slider (End)
  Page: Blog / Blog Single
	========================================
  */
  
  /*
	========================================
  Dropdown Footer (Start)
  Page: All
	========================================
  */

  $(".dropdown").on("click",function(){
      $(this).next().slideToggle();
  });

  /*
	========================================
  Dropdown Footer (End)
  Page: All
	========================================
  */


  /*
	========================================
  Square mouse hover (Start)
  Page: Portafolio
	========================================
  */

  //Efecto hover mouse cuadros
  $('.portfolio-projects__container > a').each( function() { $(this).hoverdir(); } );

  /*
	========================================
  Square mouse hover (End)
  Page: Portafolio
	========================================
  */

  /*
	========================================
  Slider Notas relacionadas (Start)
  Page: Blog Single
	========================================
  */

  $('.related-category__container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: true,
    rows: 0,
    responsive: [
        {
            breakpoint: 991,
            settings: 'unslick'
        }
    ]
  });

  $(window).on('resize', function() {
      $('.related-category__container').slick('resize');
  });

  /*
	========================================
  Slider Notas relacionadas (End)
  Page: Blog Single
	========================================
  */


  /*
	========================================
  Efecto nav progress (Start)
  Page: Blog Single
	========================================
  */

  var $page = $("html, body");

  $page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
      $page.stop();
  });
      
  $(".scroll-top").on("click",function(){
      $("html, body").animate({
          scrollTop: $(".the-content__top").offset().top - 100
      }, 1000);
  });

  var getMax = function(){
      return $("article").height();
  }
  
  var getValue = function(){
      return $(window).scrollTop();
  }
      
  if('max' in document.createElement('progress')){
      // Browser supports progress element
      var progressBar = $('progress');
      
      // Set the Max attr for the first time
      progressBar.attr({ max: getMax() });

      $(document).on('scroll', function(){
          // On scroll only Value attr needs to be calculated
          progressBar.attr({ value: getValue() });

          // Aparecer Flecha
          max = getMax();
          value = getValue();            
          widthNumber = (value/max) * 100;
          
          if(widthNumber > 80){
              $(".scroll-top").addClass("show");
          }
          else{
              $(".scroll-top").removeClass("show");
          }

      });
    
      $(window).resize(function(){
          // On resize, both Max/Value attr needs to be calculated
          progressBar.attr({ max: getMax(), value: getValue() });
      });   
  }
  else {
      var progressBar = $('.lecture-progress__bar'), 
          max = getMax(), 
          value, width;
      
      var getWidth = function(){
          // Calculate width in percentage
          value = getValue();            
          width = (value/max) * 100;
          width = width + '%';
          return width;
      }
      
      var setWidth = function(){
          progressBar.css({ width: getWidth() });
      }
      
      $(document).on('scroll', setWidth);
      $(window).on('resize', function(){
          // Need to reset the Max attr
          max = getMax();
          setWidth();
      });
  }

  /*
	========================================
  Efecto nav progress (End)
  Page: Blog Single
	========================================
  */


  /*
	========================================
  Fixed Menu (Start)
  Page: All
	========================================
  */

  if($('.c-intro-page').length){
    var introHeight = $('.c-intro-page').height();
    var introPositionTop = $('.c-intro-page').offset().top
  }
  // En Home
  else if($('.home__intro').length){
    var introHeight = $('.home__menu').height();
    var introPositionTop = $('.home__menu').offset().top;
  }
  //En Contacto
  else{
    var introHeight = $('.nav').height();
    var introPositionTop = $('.nav').offset().top;
  }
  

  var setMenuPos = introHeight + introPositionTop;
  //console.log(setMenuPos);

  $(window).on('scroll', function() {

    if( $(window).scrollTop() > setMenuPos ){
      //console.log($(window).scrollTop() + ">" + setMenuPos);
      $(".nav--clone-secondary").addClass("fixed");

      //En Single
      if( $("progress").length ){
          $("progress").addClass("fixed")
      }
    }
    else{
        $(".nav--clone-secondary").removeClass("fixed");
        // En Single
        if( $("progress").length ){
            $("progress").removeClass("fixed")
        }
    }
  });

  /*
	========================================
  Fixed Menu (End)
  Page: All
	========================================
  */
  
  /*
	========================================
  Slider Technologies (Start)
  Page: Nosotros
	========================================
  */

  $('.technologies').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
      mobileFirst: true,
      arrows: false,
      dots: true,
      rows: 0,
      responsive: [
          {
              breakpoint: 768,
              settings: 'unslick'
          },
      ]
  });

  $(window).on('resize', function() {
      $('.technologies').slick('resize');
  });

  /*
	========================================
  Slider Technologies (End)
  Page: Nosotros
	========================================
  */


  /*
	========================================
  Slider Specialist (Start)
  Page: Nosotros
	========================================
  */

  // Slider < 991
  $('.specialist__container').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
      mobileFirst: true,
      arrows: false,
      dots: true,
      rows: 0,
      responsive: [
          {
              breakpoint: 992,
              settings: 'unslick'
          },
          {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
          },
          {
              breakpoint: 0,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
          },
      ]
  });

  $(window).on('resize', function() {
      $('.specialist__container').slick('resize');
  });

  /*
	========================================
  Slider Specialist (End)
  Page: Nosotros
	========================================
  */


  /*
	========================================
  Acordeon -- Deshabilitado (Start)
  Page: Servicios
	========================================
  */

  // Acordeon < 767 

  // function acordeon($this){
  //     console.log("entro");
  //     if ($this.hasClass("active")) {
  //         $this.removeClass("active");
  //         $this.find(".c-card__content").slideUp(200);
  //     } else {
  //         $(".c-card").removeClass("active");
  //         $this.addClass("active");
  //         $this.find(".c-card__content").slideDown(
  //         {
  //             start: function () {
  //             $(this).css({
  //                 display: "flex"
  //             })
  //             }
  //         }, 500
  //     );
  //     $this.siblings(".c-card").find(".c-card__content").slideUp(200);
  //     }
      
  // }

  //$(window).on('resize', function() {
      //windowWidth = $(window).width();
      //$(".services__container .c-card").find(".c-card__content").attr("style","");
      //$(".services__container .c-card").removeClass("active");
      
  //});

  // $(".services__container .c-card").on("click", function() {
  //     if( windowWidth <= 768){
  //         acordeon($(this));
  //     }else{
  //         return;
  //     }
  // });
    
  /*
	========================================
  Acordeon -- Deshabilitado (End)
  Page: Servicios
	========================================
  */

  /*
	========================================
  Slider You Know (Start)
  Page: Interior Servicio
	========================================
  */

  // Slider < 991
  $('.you-know__container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
      mobileFirst: true,
      arrows: false,
      dots: true,
      rows: 0,
      responsive: [
          {
              breakpoint: 991,
              settings: 'unslick'
          }
      ]
  });

  $(window).on('resize', function() {
      $('.you-know__container').slick('resize');
  });

  /*
	========================================
  Slider You Know (End)
  Page: Interior Servicio
	========================================
  */


  /*
	========================================
  Slider Tools (Start)
  Page: Interior Servicio
	========================================
  */

  $('.tools__container').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

  $('.tools__container').show();

});

/*
========================================
Slider Tools (End)
Page: Interior Servicio
========================================
*/

var windowWidth = $(window).width();
var windowHeight = $(window).height();

/*
========================================
Scroll Animated Svg Line (Start)
Page: Interior Servicio
========================================
*/

if(typeof dataElements !== 'undefined') {
  totalElements = dataElements.elements;
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  numbers_name = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  index = 0;
  while (totalElements > 1) {
      lineID = `line-${numbers_name[index]}`;
      window["$line" + numbers[index]] = $("path#"+lineID);

      lineOverID = `line-${numbers_name[index]}-over`;
      window["$lineOver" + numbers[index]] = $("path#"+lineOverID);
      
      pathPrepare(window["$line" + numbers[index]]);
      window["controller" + numbers[index]] = new ScrollMagic.Controller();
      window["timeline" + numbers[index]] = new TimelineMax();
      
      g4atimeline(window["timeline" + numbers[index]], window["$line" + numbers[index]], window["$lineOver" + numbers[index]]);

      triggerElement = `.trigger.${numbers_name[index]}`;

      new ScrollMagic.Scene(
          {
              triggerElement: triggerElement, 
              duration: 450, 
              tweenChanges: true
          }
      ) 
      .setTween(window["timeline" + numbers[index]]).addTo(window["controller" + numbers[index]]);

      index += 1;
      totalElements -= 1;
  }
}

function g4atimeline(timeline, line, lineOver){
    timeline.add(TweenMax.to(
        line,
        1,
        {
            strokeDashoffset: 0,
            ease: Linear.easeNone
        }
    )).add(TweenMax.to(
        lineOver, 
        1, 
        {
            strokeDashoffset: 0, 
            ease:Linear.easeNone}
        )
    );
}

function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
}

/*
========================================
Scroll Animated Svg Line (End)
Page: Interior Servicio
========================================
*/


/*
========================================
Primer Scroll To Segunda Sección (Start)
Page: Home V2
========================================
*/

// if(windowWidth > 991){
//   $(window).on('load', gsapScrollPanel);
// }

// var progress = 0;

// function gsapScrollPanel() {
  
//   var controllerScrollPanel,
//       scrollSceneDefaultForward,
//       scrollSceneDefaultReverse,
//       resizeTimer;

  
//   // If the .fullpage container exists, set up the fullpage section animations
//   if ( $('.fullpage').length ) {
//     initController();
//     handleResize();
//   }

//   // Initialize the scrollMagic controller
//   function initController() {
//     // Init new controller
//     controllerScrollPanel = new ScrollMagic.Controller();

//     // Change behaviour of controller to animate scroll instead of jump
//     controllerScrollPanel.scrollTo(function (newpos) {
//       TweenMax.to(window, 0.5, {scrollTo: {y: newpos, autoKill:false}});
//     });

//     // Init the forward and reverse scenes
//     scrollPanelScenes();
//   }

  
//   // If window is resized, destroy controller and reset once resize has stopped
//   function handleResize() {
//     $(window).resize(function() {
//       destroyScrollPanels();
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(doneResizing, 500);
//     });
//     function doneResizing(){
//       reInitScrollPanels();
//     }
//   }

//   // Destroy scroll panels
//   function destroyScrollPanels() {
//     controllerScrollPanel.destroy();
//     scrollSceneDefaultForward.destroy();
//     scrollSceneDefaultReverse.destroy();
//   }

  
//   // Re-init scroll panels
//   function reInitScrollPanels() {
//     controllerScrollPanel = null;
//     scrollSceneDefaultForward = null;
//     scrollSceneDefaultReverse = null;
//     initController();
//   }


//   // The forward and reverse scenes
//   function scrollPanelScenes() {

//     // Create scenes for panels, when scrolling forward
//     $('.fullpage').each(function(index, elem) {
//       var $scrollPanel = $(elem);
//       var forwardScrollPos = $scrollPanel.offset().top;

//       scrollSceneDefaultForward = new ScrollMagic.Scene({
//         offset: 10, // Number of pixels user can scroll before panel snaps into place
//         triggerElement: elem,
//         triggerHook: 1,// Trigger this scene when top of panel enters view
//       })
//       .on('start', function(event) {
//         //console.log(currentIndex);
//         if (event.scrollDirection == 'FORWARD') {
//           controllerScrollPanel.scrollTo(forwardScrollPos); // If direction is forward, trigger scrollTo
//           //console.log("inicie");
          
//           $("body").addClass("overflow");
          
//         } else if (event.scrollDirection == 'REVERSE') {
//           // Do nothing
//           //console.log("ScrollReverse");
//           //Validar que unicamente regrese si currentIndex es igual a 0
//         }
//       })
//       .on('progress', function(event) {
        
//         if(event.progress == 1){
//           progress = 1;
//         }
//         //alert("progress: " + event.progress);
//         //console.log("progress");
//       })
//       // Prevent problems with momentum scrolling by pausing for a period of time
//       .on('enter', function(event) {
        
//         setTimeout(function() {
//           //if(currentIndex =! 0){
//             $('body').removeClass('is-locked');
//           //}
//         },1200)
//       })
//       .addTo(controllerScrollPanel);
//     })

//     // Create scenes for panels, when scrolling reverse
//     $('.fullpage:nth-child(n+2)').each(function(index, elem) {
//       var $scrollPanel = $(elem);
//       var reverseScrollPos = $scrollPanel.prev().offset().top;

//       scrollSceneDefaultReverse = new ScrollMagic.Scene({
//         offset: -10, // Number of pixels user can scroll before panel snaps into place
//         triggerElement: elem,
//         triggerHook: 0,// Trigger this scene when bottom of panel enters view
//       })
//       .on('start', function(event) {
//         if (event.scrollDirection == 'FORWARD') {
//           // Do nothing
//         } else if (event.scrollDirection == 'REVERSE') {
//           //Validar si currentIndex = 0
          
//           controllerScrollPanel.scrollTo(reverseScrollPos); // If direction is reverse, trigger scrollTo
//           //console.log("ScrollReverse");
//         }
//       })
//       .on('progress', function(event) {
//         if(event.progress == 1){
//           progress = 1;
//         }
//         //alert("progress: " + event.progress);
//       })
//       // Prevent problems with momentum scrolling by pausing for a period of time
//       .on('leave', function(event) {
//         $('body').addClass('is-locked');
//         setTimeout(function() {
//           //if(currentIndex =! 0){
//             $('body').removeClass('is-locked');
//           //}
//         },1200)
//       })
      
//       .addTo(controllerScrollPanel);
//     })
//   }
// }

/*
========================================
Primer Scroll To Segunda Sección (End)
Page: Home
========================================
*/

/*
========================================
Segundo Scroll Elementos desaparecen (Start)
Page: Home V2
========================================
*/

// //References to DOM elements
// var $window = $(window);
// var $document = $(document);


// var $slidesContainer = $(".home-slider");
// var $allSlides = $(".home-slide");
// var $currentSlide = $allSlides.first();


// //defaultEase for all animations - except ...
// TweenLite.defaultEase = Linear.easeNone;

// //Animating flag - is our app animating
// var isAnimating = false;

// //The height of the window
// var pageHeight = $window.innerHeight();

// //Key codes for up and down arrows on keyboard. We'll be using this to navigate change slides using the keyboard
// var keyCodes = {
//   UP  : 38,
//   DOWN: 40
// };

// // individual animations per slide ======
// var currentIndex = 0;

// const el = document.querySelectorAll(".home-slide");
// const slides = [].slice.call(el); 
// slidesNo = slides.length;
// let animations = [];


// // create animation timelines
// for(let [i] of slides.entries()) {
//   animations[i] = new TimelineMax({});
// }

//   animations[0]
//   .to('.home-slide--one  .home-slide__square-bkg'
//       ,0.8, //Tiempo que tarda en completar la animacion
//       {
//         scaleY: 1,
//         transformOrigin:"50% 100%",
//       },
//   )
//   .to('.home-slide--one  .home-slide__letter-bkg img',0.6,
//       {
//         top:'30px',
//         autoAlpha: 1,
//       },
//       "-=1"
//   )
//   .to('.home-slide--one .home-slide__info-container, .home-slide--one .home-slide__img',1,
//       {
//         top:'0%',
//         autoAlpha: 1,
//       },
//       "-=0.5"
//   )
//   .to('.home-slide--one .home-slide__square',0.6,
//     {
//       //top:'33px',
//       autoAlpha: 1,
//     },
//   )
//   .reverse();


//   animations[1]
//     .to('.home-slide--two  .home-slide__square-bkg'
//     ,0.8, //Tiempo que tarda en completar la animacion
//     {
//       scaleY: 1,
//       transformOrigin:"50% 100%",
//     },
//     )
//     .to('.home-slide--two  .home-slide__letter-bkg img',0.6,
//     {
//       top:'-125px',
//       autoAlpha: 1,
//     },
//     "-=1"
//     )
//     .to('.home-slide--two .home-slide__info-container, .home-slide--two .home-slide__img',1,
//       {
//         top:'0%',
//         autoAlpha: 1,
//       },
//       "-=0.5"
//     )
//     .to('.home-slide--two .home-slide__square',0.6,
//       {
//         //top:'33px',
//         autoAlpha: 1,
//       },
//     )
//     .reverse();

//     animations[2]
//     .to('.home-slide--three  .home-slide__square-bkg'
//     ,0.8, //Tiempo que tarda en completar la animacion
//     {
//       scaleY: 1,
//       transformOrigin:"50% 100%",
//     },
//     )
//     .to('.home-slide--three  .home-slide__letter-bkg img',0.6,
//     {
//       top:'30px',
//       autoAlpha: 1,
//     },
//     "-=1"
//     )
//     .to('.home-slide--three .home-slide__info-container, .home-slide--three .home-slide__img',1,
//       {
//         top:'0%',
//         autoAlpha: 1,
//       },
//       "-=0.5"
//     )
//     .to('.home-slide--three .home-slide__square',0.6,
//       {
//         //top:'33px',
//         autoAlpha: 1,
//       },
//     )
//     .reverse();

//     animations[3]
//     .to('.footer--home'
//     ,1,
//     {
//       //{clip:"rect(0px 100px 100px 100px)"
//       clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
//       ease: Power3.easeInOut
//     },
//     "-=0.5"
//     ).reverse();


// //Going to the first slide

// animations[currentIndex].reversed(false);

// /*  Adding event listeners  */

// $window.on("resize", onResize).resize();

// if(windowWidth > 991){
//   $window.on("mousewheel DOMMouseScroll", onMouseWheel);
// }

// var windowHeight = $(window).innerHeight();

// /* When user scrolls with the mouse, we have to change slides */
// function onMouseWheel(event){

//   if($(window).scrollTop() < windowHeight && progress == 0){
//     console.log("ya entra a lo de aabajo");
//     return false;
//   }
//   //console.log($(window).scrollTop());
//   //console.log(event);

//   //Normalize event wheel delta
//   var delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;
//   //console.log("delta: " + delta);
//   //If the user scrolled up, it goes to previous slide, otherwise - to next slide
//   if(delta < -1){
//     //console.log("scrollDown");
//     //console.log("esta animando: " + isAnimating);
//     goToNextSlide();
//   }
//   else if(delta > 1){
//     //console.log("scrollUp");
//     if(currentIndex == 0){
//       $("body").removeClass("overflow");
//     }
//     goToPrevSlide();
//   }
//   event.preventDefault();
// }

// /*  If there's a previous / next slide, slide to it */

// function goToPrevSlide() {
  
//   if($currentSlide.prev().length) {
//     goToSlide($currentSlide.prev());
//   }
// }

// function goToNextSlide() {
//   //console.log("next");
//   if($currentSlide.next().length){ 
//     goToSlide($currentSlide.next());
//   }
// }

// /*  Actual transition between slides */

// function goToSlide($slide){  

//   //console.log("voy al slide numero: " + $slide.index());
//   //var slideTop = 0;

//   //console.log($slide);
//   //console.log("isAnimating: " + isAnimating)
//   if(!isAnimating && $slide.length){
    
//     //console.log("goToSlide");
//     isAnimating = true;
//     $currentSlide = $slide;

//     var currentTime = animations[currentIndex].time();

//     function rev(){
//       animations[currentIndex].timeScale(2).reversed(true);
//     }

//     //Sliding to current slide
//     var action = new TimelineMax()
//     .add(rev)
//     .to($slidesContainer, 0, {scrollTo: {y: pageHeight * $currentSlide.index() }, ease: Power2.easeOut, onComplete: onSlideChangeEnd , onCompleteScope: this},currentTime/2+0.2)
//   }

// }

//   /*  Once the sliding is finished, we need to restore "isAnimating" flag.*/

//   function onSlideChangeEnd() {
//     setTimeout(() => {
//       isAnimating = false;
//     },500);

//     // console.log("Numero sliders: " + slidesNo);

//     var arrayColors = ["#ec1968","#faaf40", "#4069b1"];
//     var arrayWords = ["Nosotros", "servicios", "Portafolio"];
//     // Funcionalidad transicion paginacion
//     let totalHeight = 100;
//     let slideDivision = totalHeight / (slidesNo -1);
//     let slideTop = 0;

//     for (let index = 0; index < (slides.length -1); index++) {
//       if($currentSlide.index() == index){
//         slideTop = slideDivision * index;
//         changeWord(arrayWords[index]);
//         animate(slideTop, arrayColors[index] || arrayColors[0]);
//       }
//     }
//     //console.log($currentSlide.index());
//     //console.log(slides.length);
//     if($currentSlide.index() == (slides.length -1) ){
//       $(".pagination-container").hide();
//     }
//     else{
//       $(".pagination-container").show();
//     }

//     function animate(slideTop, arrayColors){
//       //console.log(arrayColors);

//       $(".pagination__slider").css("background-color", arrayColors);
  
//       //Calcular posicion del slider
//       $(".pagination__slider").add(".pagination__content > div").animate({
//         top: slideTop + "%",
//       }, 1000, function() {});

//     }

//     function changeWord(word){

//       $(".pagination__content > div").html(word);
    
//     }

//     // Change the index
//     currentIndex = $currentSlide.index();

//     //console.log("CurrentIndex: " + currentIndex);
//     //console.log("TotalSlides: " + (slides.length -1));
//     // Play the timeline for the current slide
//     if(currentIndex == (slides.length -1)){
//       animations[currentIndex].timeScale(2).reversed(false);
//     }else{
//       animations[currentIndex].timeScale(1).reversed(false);
//     }
    
  
//   }

// /*
// *   When user resize it's browser we need to know the new height, so we can properly align the current slide
// * */
// function onResize(event){

//   //This will give us the new height of the window
//   var newPageHeight = $window.innerHeight();

//   /*
//   *   If the new height is different from the old height ( the browser is resized vertically ), the slides are resized
//   * */
//   if(pageHeight !== newPageHeight){
//     pageHeight = newPageHeight;

//     //This can be done via CSS only, but fails into some old browsers, so I prefer to set height via JS
//     TweenLite.set([$slidesContainer, $allSlides], {height: pageHeight + "px"});

//     //The current slide should be always on the top
//     TweenLite.set($slidesContainer, {scrollTo: {y: pageHeight * $currentSlide.index() }});
//   }

// }

/*
========================================
Segundo Scroll Elementos desaparecen (End)
Page: Home V2
========================================
*/



