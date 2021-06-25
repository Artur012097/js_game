$('#roomsSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: $('.rooms__prev'),
    nextArrow: $('.rooms__next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('#feedbackSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.feedback__prev'),
    nextArrow: $('.feedback__next')
  });

  let burger = document.getElementById('burger')
  let menu = document.getElementById('mobileMenu')

  burger.addEventListener('click', () => {
    burger.classList.toggle('open')
    menu.classList.toggle('open')
  })