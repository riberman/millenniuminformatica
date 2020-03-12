;(function () {

	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#ubea-offcanvas, .js-ubea-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ( $('body').hasClass('offcanvas') ) {
    			$('body').removeClass('offcanvas');
    			$('.js-ubea-nav-toggle').removeClass('active');
	    	}
	    }
		});

	};



	var header = function() {
		$('.header-fixed').css('padding-top', $('.ubea-nav').height());
	};

	var navigation = function() {

		$('body').on('click', '#ubea-offcanvas ul a:not([class="external"]), .main-nav a:not([class="external"])', function(event){
			var section = $(this).data('nav-section');
				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top - 55
			    	}, 500, 'easeInOutExpo');
			   }

			   if ($('body').hasClass('offcanvas')) {
			   	$('body').removeClass('offcanvas');
			   	$('.js-ubea-nav-toggle').removeClass('active');
			   }
		   event.preventDefault();
		   return false;
		});

	};


	var offcanvasMenu = function() {

		$('body').prepend('<div id="ubea-offcanvas" />');
		$('body').prepend('<a href="#" class="js-ubea-nav-toggle ubea-nav-toggle"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#ubea-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#ubea-offcanvas').append(clone2);

		$('#ubea-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#ubea-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-ubea-nav-toggle').removeClass('active');

	    	}
		});
	};


	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('.main-nav > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('div[data-section]');

		$section.waypoint(function(direction) {

		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};

	var burgerMenu = function() {

		$('body').on('click', '.js-ubea-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('offcanvas') ) {
				$('body').removeClass('offcanvas');
			} else {
				$('body').addClass('offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var owlCarousel = function(){

		var owl = $('.owl-carousel-carousel');
		owl.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    	}
		});


		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	]
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};


	// Loading page
	var loaderPage = function() {
		$(".ubea-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#ubea-counter').length > 0 ) {
			$('#ubea-counter').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var accordion = function() {
		$('.ubea-accordion-heading').on('click', function(event){

			var $this = $(this);

			$this.closest('.ubea-accordion').find('.ubea-accordion-content').slideToggle(400, 'easeInOutExpo');
			if ($this.closest('.ubea-accordion').hasClass('active')) {
				$this.closest('.ubea-accordion').removeClass('active');
			} else {
				$this.closest('.ubea-accordion').addClass('active');
			}
			event.preventDefault();
		});
	};

	var sliderMain = function() {

	  	$('#ubea-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#ubea-hero .flexslider .slides > li').css('height', $(window).height());
	  	$(window).resize(function(){
	  		$('#ubea-hero .flexslider .slides > li').css('height', $(window).height());
	  	});

	};


	$(function(){
		fullHeight();
		mobileMenuOutsideClick();
		header();
		navigation();
		offcanvasMenu();
		burgerMenu();
		navigationSection();
		contentWayPoint();
		dropdown();
		owlCarousel();
		goToTop();
		loaderPage();
		counterWayPoint();
		accordion();
		sliderMain();
		imgFolder();
	});


}());

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-10146041-21', 'auto');
  ga('send', 'pageview');

	// Desktop or mobile
		var imgFolder =function() {
			if (screen.width >= 840){
				document.getElementById("img-1").style.backgroundImage = "url('https://lh3.googleusercontent.com/jSyryKno0U-3A2VL6zaBIQsHsNzHRmlWGiXaszX0hUg9JGtZ0HHcmknS3J7dfMtusfQ1dn4Il0F3ffIxIf-ZjMGTIA3JOOvSsCJrk1FK6NHCWg4w4uAUobk4iib422L3iTX6mCqO6HPyl3wx49WVbKS7_BsknUx6sWgb9DGjb3pS1Yc6124Bu7aTm7VxVhkf_7SvnyM0pLOpQ3AXrdtoY9LoeAOmcTzbs94HwHX_61BXpKY9OXNBquDfGdTuduPYN9PIrHQWodlNi-kjbPxhxE7AuAhRjGhGPrZhW0zefLX2WQjE1s_MiTrfyqZhsXj61OPU7Ilk-_zqC_XIJTX2YiJYWh9UFCfhAk-nRRQX2hQWHn67R2vuh_erGvbQkuelzLW3OeNpqUMBSO4VpsPj1haKMSryDa-GdchU96YafGi3826rjsh8otJ-lfdtuRVXSwgvVSUfc7ZJCsQf1i1S_toL11GxaDomG9pji5Wm8BwK2oW8XtyWMoD17Z5Yc4UlVRypKEz-uK2SqeleUEiHY6Sfzv8-uV0gStmnPiscdiAVGoYEaIZIeD5onm3wbld6tu_YRkSfs_TGkEOnWesEdlJB_0L00LuuHIBlGEQNp1SuBohl7Za_DzH78ofHbxztT-OQIt5KUe30E4anmnLm83hVtdg3YmZh3Th97nQ5wUj7vUTPKBXVUsE=w1248-h936-no')";
				document.getElementById("img-2").style.backgroundImage = "url('https://lh3.googleusercontent.com/XB8qVMg3_Jh3TRSok30T_T3tyDjWenTlgiakCI3Z6pBehEczlBuleqfPi25frCvqsDdXeAX_FbwSGA8YUhaqXtCcNcPW8UgxMc78UwzaPp6nE3OYRQTEdmlrAX96rAmGVdPezvpLE2wGhOwWVSBvZ5qICXJLoBZsoHR0BEGEiCVB1NyM69obQtEJJ8TTS4570yTKZIc89Lt-mhEDMxNrrq23l9iwGYeq4j_ltdDN2m_EXNHHVcZXejoAZhT-VnfGYzY5l4LDNkUIrrRe1YZgeVDxoUdEYHpFQrckA5BQEUDgnfDxJlzeZMDM8oYWvNBsIFkWs6LGc2WyDcZCvMJF_f0T0vADuBYfr0PUiq6RIH2Fu3qyP0ADz4u6xc9TNTzoio-xAqJicCPEzA-iojqDebUN0KWnY_xGaqFJJYVV4LbnU5e5pglAeB-Y5GwlLB5wCIO8jKmU1_pFlWeWrvplMPR65iUVseaIGK_d4rZFtch2EEe87iGSuKcRztAfYBDapckq4XI22FQK_IrhAAGN6XthmONwFOMV5EElcVKQsFtiwfmydrI5YAjU6cT6B4rYUyuwH2HgmHkRtozLDUCV6Gs7X2XsziAR1LZN9CoQJBatrNUXE26AVONx3LxXPCcSLFnCfle9rx0ekhjax1wiX3JM_gTvBGd40g7adXMsI-iO59dmO_z1MZQ=w952-h714-no')";
				document.getElementById("img-3").style.backgroundImage = "url('https://lh3.googleusercontent.com/5sISEn5P0a7eEM5zYY6Lh6u4ga8dVoTSxBXKP2EnPJABG3taL4EWbtSxncbZrB1gdSYXRVVJTYlCV9L1JvIIGZ3g0VmKf7WK8dcRG5Nnjwxkon-bRxo8w2hqxVQqYjQPoTfWImot06vtU5Z8XssQl0XGHEFHJZu6-_aepguRIWT-SMk0DWuHsOYsZ2Ol8xunFqnizm0G3OFwhTsDtvTWGLskfnhkIIKT7IqWMQrQoo1w-NSTHYUojYSAdPsyFARHM_-3MATd-j8lCNZuksuxyedSIO4slQ3gmuOwOKsD4z9KVJXFEbtIMeID-P1XK8-gdXLAI5lj3IuB3osZGaoubSf_Lbp1i7_ikgoaMhJu87U-J4eAGtdF7AGU1LuAUjqJpTXnLkkHrSbTlClGEdCz3pC70JFLixwNVE_5PoEwpesBpY_Brrrk2LA6MVkfIEj0yf4lsmXdeuzYfyuL7GNgs_ptHCVN3F7MNd0Y68StHTtxxEvdnz9sK3Qwg7MIfK4Ejo2YVxftDAKP7O25f15qNZ2pw57NBCLjhoWIG2CsMcrYEeh_X4ARvPS4HbTxa5Rm6tLgonJaXzn5g6YhDTP2boZL8Sc98PVU_ntIT6fUZsBx1DjmYYzvpv9Ttrh9EqQkXLW2W0MzbxeEJalp8_W0jafYBsldH07cNcNGtyuec4SHPzwr0x6CD0o=w952-h714-no')";
				document.getElementById("img-4").style.backgroundImage = "url('https://lh3.googleusercontent.com/-AnEhUw7IVmbAXX5RaQ9XC1uRT5k7EovR_P3B6AO2zqe46eBnDVeZCoEUUBkKbYhoAC_CtHijIbPq45KZg5096qCmf8Bx7M_8QKRcXrqauM7UCdOeI1SiR11RkoPIJgQ2AQO67M8bENq7dRlbLGBbsV_n0mnXdNrt2x2cDSHTcAkCzA5gFGf2ufH4ll9H67OKylvTEyqo0gze269DS9BnuCmLpWL5X3uN6LYycHSJg4dIXAxOAjMyvks6PkVCFiLzdgo0cwSWeDwuo9A4R1T_AO6-sELJXG9rqVvRMwK0bvNVOBBeZw_u85BuIL6_Mwp0iDMgrNzaX8u6VwnelXz_O1xIndFr5AT0ggfHJFw42AN4LZmVfGZK6b8hJykwIYUOH4A14uVwPeM2p9hM9UQZcgZmO5ehsKP9X6kfDs4logEOYzq-6V02n22iKecBJdo5BS9jP5-ShIWh7w0ZEK4nzyyShZnUJt4CPQxZPxcocmQ8IP7fIW-dmdglWPpM0c9FYufqDso80Ew2kPB9GbCeM9kDNm55XkuMonnd5IF78Dt_dZ5lIq5ttOezfel7gtLwvMwd8prnCVu2r4KImTc8GXFFndSNE6yUjWW0yks4mR9ci8QOukgO5P0A_JjPjwdBUwt_ic2p-ywH5JCjkRome5ZJ-bL8rJy5wloMz8XrV0vsUPB_fVCV-E=w952-h714-no')";
			} else {
				document.getElementById("img-1").style.backgroundImage = "url('https://lh3.googleusercontent.com/qAavomuc0U4bZxpJjoHePrtyaH8KHu3YLloA6WwVL0fVFCr174N9etcIrAKZf0wC-6irnf9nEbVV1ccjDVgUfBvlfEl2WCk7yMfrAO1gEHJpTTgcNMG38p_e1aGHUPq6hPxNQclKKzZx7zkwHaF-DNRzNdKFPJRatgdAORE1zgEtYOsl2gWGH2lMHCLBtZkkYStihXFiK0SlC9LykafuN2n1Ei9lwxwrr3MIbFUqGO4phRq76ShSffMWb7si3AdM0YcXiqp1pkRxpAMcduOeglVFxBqPznPqhSG8l24mBHOVfJ17qWdfxMg-tm3oH1QIkiBB-sNTstYDl_qWyLPpXiUVQOuYQ22K_EdMTZ54Cvl7V81yGtuz7liW3dyQNgtDyzQtOnKYvMmKE8RDL7FbXcD2tocqhSIbmi_TZiFoeJGZoG9uWH4jXCtKp6F7x1KWXFxpwsnmlfCqS969-qRa8N7uxcB2LD8oL_VuFjcy78kcB6QQRy6BK_EUVQMac29zQoYf0-lBG6XytARPTjK2WtITGrhBIRHFdoAFxMv_JvNzJ8YqUOjumb0ZfkszFxeaKhb5V1bH8Nu3v2S6RpJ9OTZzSL20Rsgyt3Dv4FU5uF34WXpOn5smPncsWeif-10fkVQYRm4vkWR08mtUHetwfEge9reoRA_W2ZDeqfKes8BciGPvSzU1c9k=w952-h714-no')";
				document.getElementById("img-2").style.backgroundImage = "url('https://lh3.googleusercontent.com/naxW-9C7grYI9Vko_BgllzPYUUBKJMMYfllhJmmAhiKcGUwAxiuSA0ZIMtU1EHwxQfdc4znwwOFLEujq3CzBGK-94Izr4Vr-u-dDc8LNRqu35WHw26-ufRKXklitYIWSOtrzr5uI77INfZ4_QMYEBalOYILZ-ufaKHd2UkjhCTR88GEjXLbh49yFDbEhYbPX6IQI-hVHWsyu8l9rLjxVF-LZw8hrh0BXvpyBcXvzjku3hTHaLvJ-BVtOfePP0BrpT3y-S06a6fIOgKr44mf5uJR8sqYIxQntfgL8G_rk813IK3DV2xQvKiyZjhG7G1sSQdggdC2-wA5cYwvZVJRu_IX80mLU1BKn4Up8iinNPUNez2IwtjHqTLOtEsxhwfLliWb3mh7C8rmW-RugFk6fxWTrccatWRMUwiR4VdCDfusU1yJ8bPdA68NOA538NY8XfwwVjOVO8U0EJHerET5ihPbmfDLUy8arQmwXyapmsLUT39DGfHCzvCBkPhWw5QL44Uljb6ftgOICYuc6b6g8x7qIxBcSr00EncBRUSGWom196tTIp3eNsK_5XMOYt9H6pOhYdsuYS-0jPkfl9ewYM6XOoB16lWI75Z_3i5HFAMFVwl87JW3Bj1L2wFmXg4hkYhzl8IPVAFAd7rQOEi7rOzMxRg9ui50_qfmhO_4HXUbIts3dRUwY97c=w952-h714-no')";
				document.getElementById("img-3").style.backgroundImage = "url('https://lh3.googleusercontent.com/ruRfrkArfNnbj6PKu86_X88kjmKXq4_6dB-x-dHWmAo1rvQAjL8m-soM_P3whET2S_DA800S7StZw6S1aDjokBFCjfXNy8mRzmkEmseu9OOgzbf4Hc4iU3HDpb_8ewsJvOXy9HBwV0tBZZpbPrkGuSy-nwbeFm9KReGAIP-L1HgMglodc56WLcS2ZgAu18VJx223R0NyK3d6QzKWudGwyb0KN0lbEAqa4HPy3XbXoJ4ABlIvoxSnUtJgWVK_h3XlEbhglaVbtQucZj7hbQogZUrat80nN4w6w94L2_mh0GzB1AIA6ziH7ZTzEeChe6FjAJ-sKmcCdNTvrWRgriwe_mEVLBklOV1DbY4KeSBczrJvA57N3me7iVj1vG6GKRoilhCi0A1FirkV8pUsQ154-4sIMbT4Lsfm7Guk5jGuyUcXLJIi3uCgjwboR7LS3Y98bOUh-JKdwO5_ivWjC0mtm1mcSNKK0MdzIR4l45Agt9QX_gNrZRg5kIhWdc_Cu9QNaLN2_XPaEe5F2bkInOBvfy-p7LIPrVG27gKgvOprXZYrz6RcDuHyfBERGTml3xGJ2mxY0gckbrBToC2fxSrFtAlaXl3fL3cTk8IRYBjJ2GSeASNbDVod_0c8qBYJS0bi6We_PfxvFF0FvPfRy9JBpyeCmO4mJ9LRsgtWir3M9qF3MHkj23zd63w=w952-h714-no')";
				document.getElementById("img-4").style.backgroundImage = "url('https://lh3.googleusercontent.com/O7Wdhf56HQpCXJx5wCAzG6lSZt_xW-9LK2mTm6CmfH0cxpxUKHQLjn7ULE_P4AiKqibKW80m6KaivifGeI4vGNqW7Cyxn9VTjABAUv61x7pLqbEuh13ZiYUkYXzUX8kpjTi1z81Kc-qCeiaQgnqBqkel8HUWdxdUlSqPZFSVrqa-mGk6jrJy31-ehUHg6imvm_BzGp2DXVh_UmtWeXCtb4cOdYv3PTlWkvpZR8SP0FzxBp3CwzMWOjJrrPuuyK2rwPt12ILebYUSo9ewoQPEmbDezA65RT3hlKHWw0lt31CpqHbgwfvSoDfOkk0y-na8mXXYr9xubDj4Ozd4QEElXmeAQboQIQhM6uLGCzIktTD1RscSboWB_3sukO3Ss2_vrUmwc0ABO8oBDzKbbB2Mb1rvj0LpUbXzeq7osJQ8aQiP0ktom4RG5rB9jDrS8DKP2V_vlB6GArVWXGrHv9CidPP1USiCZ171wEuYbnG1V3jpksZNIWFgmA_IRkYSqTPMBDHLhCVqZ4bJMDs5xlSNf2tfPFzQMfUd2ldT4Irx2cw24957fZsO4DRNUKiNLOojQrBForXNJ7ciwdajZ3mgtjBLMZYEgNbhAMTsfGA7XV-onuKBoaKI65AEeHfDpZV5kpkfV-H7PtVhQQnKh_9tt_p_Ffo2ZkND6-vlGvcQzp1lEGmt1apYMtY=w952-h714-no')";
			}
			console.log(screen.width);
		};
