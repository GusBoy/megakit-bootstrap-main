/**
 * WEBSITE: https://themefisher.com
 */

(function ($) {
	'use strict';

	// =========================================
	// АНИМАЦИЯ ПРИ ПРОКРУТКЕ
	// =========================================
	
	function checkAnimations() {
		var windowHeight = $(window).height();
		var scrollTop = $(window).scrollTop();
		
		// Проверяем все элементы с классами анимации
		$('.geismar-animate, .fade-in-up, .scale-in, .slide-in-right').each(function() {
			var $element = $(this);
			
			// Пропускаем уже анимированные элементы
			if ($element.hasClass('animate-in') || $element.hasClass('animated')) {
				return;
			}
			
			var elementTop = $element.offset().top;
			var elementVisible = scrollTop + windowHeight - 150;
			
			// Если элемент виден - добавляем класс
			if (elementVisible > elementTop) {
				if ($element.hasClass('geismar-animate')) {
					$element.addClass('animate-in');
				} else {
					$element.addClass('animated');
				}
			}
		});
	}

	// =========================================
	// SCROLL HANDLER
	// =========================================
	
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		
		// Проверяем анимации
		checkAnimations();
		
		// Navbar effect
		if (scroll > 50) {
			$('#navbar').addClass('scrolled');
			$('.navigation').addClass('header-scrolled');
		} else {
			$('#navbar').removeClass('scrolled');
			$('.navigation').removeClass('header-scrolled');
		}

		// Scroll to top button
		if (scroll >= 200) {
			$('#scroll-to-top, .scroll-to-top').addClass('show');
		} else {
			$('#scroll-to-top, .scroll-to-top').removeClass('show');
		}
	});

	// =========================================
	// DOCUMENT READY
	// =========================================
	$(document).ready(function() {
		// Проверяем анимации сразу при загрузке
		checkAnimations();
	});

	// =========================================
	// WINDOW LOAD
	// =========================================
	$(window).on('load', function() {
		$('.preloader').fadeOut('slow');
		// Проверяем анимации после загрузки
		setTimeout(checkAnimations, 100);
	});

	// =========================================
	// TESTIMONIAL SLIDER
	// =========================================
	
	if ($('.testimonial-wrap').length !== 0) {
		$('.testimonial-wrap').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 6000,
			responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}, {
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	// =========================================
	// NAVBAR DROPDOWN
	// =========================================
	
	if ($(window).width() < 992) {
		$('#navbar .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}

	// =========================================
	// SCROLL TO TOP
	// =========================================

	$(document).on('click', '#scroll-to-top, .scroll-to-top', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 600);
		return false;
	});

	// =========================================
	// SMOOTH SCROLL FOR ANCHOR LINKS
	// =========================================
	
	$('.navbar-nav a[href^="#"], a[href^="#"].btn').on('click', function (event) {
		event.preventDefault();
		
		var target = $(this.getAttribute('href'));
		
		if (target.length) {
			// Закрыть мобильное меню
			$('.navbar-collapse').removeClass('show');
			
			// Получаем высоту navbar
			var navbarHeight = $('#navbar').outerHeight() || 100;
			
			// Плавная прокрутка
			$('html, body').stop().animate({
				scrollTop: target.offset().top - navbarHeight - 20
			}, 800, 'swing');
		}
	});

	// =========================================
	// PORTFOLIO GALLERY
	// =========================================
	
	if ($('.portfolio-gallery').length !== 0) {
		$('.portfolio-gallery').each(function () {
			$(this).find('.popup-gallery').magnificPopup({
				type: 'image',
				gallery: {
					enabled: true
				}
			});
		});
	}

	// =========================================
	// COUNTER
	// =========================================
	
	if ($('.counter-stat').length !== 0) {
		$('.counter-stat').counterUp({
			delay: 10,
			time: 1000
		});
	}

	// =========================================
	// HOVER EFFECTS FOR SERVICE ITEMS
	// =========================================
	
	$('.service-item').hover(
		function() {
			$(this).find('i').addClass('pulse');
		},
		function() {
			$(this).find('i').removeClass('pulse');
		}
	);

	// =========================================
	// ICON PULSE ANIMATION
	// =========================================
	
	$('.intro-item i').addClass('float');

	// =========================================
	// CURRENT YEAR IN FOOTER
	// =========================================
	$('#year').text(new Date().getFullYear());

})(jQuery);
