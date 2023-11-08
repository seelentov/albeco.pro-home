import owl from './modules/owlCarousel.js'

$(document).ready(function () {
  const reviewCarousel = $(".js-reviews-carousel__items").owlCarousel({
			loop: true,
			margin: 30,
			dots: false,
			nav: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				1500: {
					items: 2,
				},
			},
		})
		$('.js-reviews-carousel__prev').click(function () {
			reviewCarousel.trigger('prev.owl.carousel')
		})
		// Go to the previous item
		$('.js-reviews-carousel__next').click(function () {
			reviewCarousel.trigger('next.owl.carousel')
		})
})
