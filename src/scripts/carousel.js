import { _q } from './snips'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

import 'swiper/css'

export default function _carousel() {
    if (!_q('.swiper')) return

    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: { delay: 3500 },
        centeredSlides: true,
        slidesPerView: 'auto',
        grabCursor: true,
        spaceBetween: 12,
        autoHeight: true,

        modules: [Navigation],
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        a11y: {
            prevSlideMessage: 'Previous Slide',
            nextSlideMessage: 'Next Slide',
        }
    })
}