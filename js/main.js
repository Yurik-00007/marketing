$(function () {
  Fancybox.bind("[data-fancybox]", {})
  $('.slider-block__inner').slick(
    {
      dots: true,
      prevArrow:'<button type="button" class="slick-prev"><img src="../images/arrow-left.svg" alt="prev"></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="../images/arrow-right.svg" alt="next"></button>',
      responsive: [
        {
          breakpoint: 769,
          settings: {
          arrows: false,
          }
        },
      ]
    }
  )
  $('.menu__btn').on('click', function (e) {
  $('.header__top-inner').toggleClass('header__top-inner--active')
  })
  var mixer = mixitup('.portfolio__content')

})