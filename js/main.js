$(function(){

// -- Слайдер
  $('.photo-gallery__slider').slick({
    arrows: false,   // Отключаем стрелки
    dots: false,      // Включаем точки под слайдером
    autoplay: true,  // Автовоспроизведение слайдера  
    slidesToShow: 4, // Показывать по 4 слайда в одном окне
    slidesToScroll: 1,
    responsive: [     // Отключаем дотсы при ширине 1140px
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 846,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          fade: true
        }
      },
    ]
  });

  // -- Действие кнопки Меню для мобильной версии: открыть и показать перечень пунктов Меню
  $('.menu-btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
});