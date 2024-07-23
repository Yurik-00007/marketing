$(function () {
  var mixer = mixitup('.portfolio__content')
  Fancybox.bind("[data-fancybox]", {})
  $('.slider-block__inner').slick(
    {
      dots: true,
      prevArrow:'<button type="button" class="slick-prev"><img src="../images/arrow-left.svg" alt="prev"></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="../images/arrow-right.svg" alt="next"></button>',
    }
  )
})