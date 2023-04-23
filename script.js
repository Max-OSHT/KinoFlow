$('#main-slider').owlCarousel({
    items:2,
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    stagePadding: 50,
    autoWidth:false,
    responsive:{
        0:{
            items:1,
            stagePadding: 25,
        },
        330:{
            items:1,
            stagePadding: 25,
        },
        530:{
            items:1,
            stagePadding: 30,
        },
        730:{
            items:1,
            margin: 10,
            stagePadding: 40,
        },
        930:{
            items:2,
            margin: 10,
            stagePadding: 50,
        },
        1130:{
            items:2,
            margin: 10,
            stagePadding: 60,
        },
        1330:{
            items:2,
            margin: 10,
            stagePadding: 80,
        }
    },
    responsiveBaseElement: '#main-slider',
});

$('#movies').owlCarousel({
    items: 6,
    rewind: true, 
    autoWidth:false,
    dots: false,
    responsive:{
        0:{
            items:1,
            loop: true,
        },
        330:{
            items:1,
            loop: true,
        },
        530:{
            items:2,
            loop: true,
        },
        730:{
            items:3,
            loop: true,
        },
        930:{
            items:4,
        },
        1130:{
            items:5,
        },
        1330:{
            items:6,
        }
    },
    responsiveBaseElement: '#movies',
});

$('#Movies').each(function() {
    // Создаем карусель
    var owl = $(this).find('.owl-carousel').owlCarousel();
  
    // При клике по кнопке Влево
    $(this).find('.owl-prev').on('click', function () {
      // Перематываем карусель назад
      owl.trigger('prev.owl.carousel');
    });
  
    // При клике по кнопке Вправо
    $(this).find('.owl-next').on('click', function () {
      // Перематываем карусель вперед
      owl.trigger('next.owl.carousel');
    });
});

$('#serials').owlCarousel({
    items: 6,
    rewind: true,
    dots: false,
    autoWidth:false,
    responsive:{
        0:{
            items:1,
            loop: true,
        },
        330:{
            items:1,
            loop: true,
        },
        530:{
            items:2,
            loop: true,
        },
        730:{
            items:3,
            loop: true,
        },
        930:{
            items:4,
        },
        1130:{
            items:5,
        },
        1330:{
            items:6,
        }
    },
    responsiveBaseElement: '#serials',
});

$('#Serials').each(function() {
    // Создаем карусель
    var owl = $(this).find('.owl-carousel').owlCarousel();
  
    // При клике по кнопке Влево
    $(this).find('.owl-prev').on('click', function () {
      // Перематываем карусель назад
      owl.trigger('prev.owl.carousel');
    });
  
    // При клике по кнопке Вправо
    $(this).find('.owl-next').on('click', function () {
      // Перематываем карусель вперед
      owl.trigger('next.owl.carousel');
    });
});

$('#mults').owlCarousel({
    items: 6,
    rewind: true,
    dots: false,
    autoWidth:false,
    responsive:{
        0:{
            items:1,
            loop: true,
        },
        330:{
            items:1,
            loop: true,
        },
        530:{
            items:2,
            loop: true,
        },
        730:{
            items:3,
            loop: true,
        },
        930:{
            items:4,
        },
        1130:{
            items:5,
        },
        1330:{
            items:6,
        },
        1600:{
            items:6,
        }
    },
    responsiveBaseElement: '#Mults',
});

$('#Mults').each(function() {
    // Создаем карусель
    var owl = $(this).find('.owl-carousel').owlCarousel();
  
    // При клике по кнопке Влево
    $(this).find('.owl-prev').on('click', function () {
      // Перематываем карусель назад
      owl.trigger('prev.owl.carousel');
    });
  
    // При клике по кнопке Вправо
    $(this).find('.owl-next').on('click', function () {
      // Перематываем карусель вперед
      owl.trigger('next.owl.carousel');
    });
});

// Popup
$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn(200);
		// return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		// return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut(200);
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut(100);					
		}
	});
});

function getContent() {
    var link = document.querySelectorAll('.img-link');
    player = document.querySelector('#YouFrame');

    link.forEach(function(act_link) {
        act_link.addEventListener('click', function() {
            var video = act_link.getAttribute('data-video');
            player.src = video;
        });
    });
}