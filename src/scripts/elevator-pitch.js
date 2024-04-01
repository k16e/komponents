import {
    _q,
} from './snips'
import Glide from '@glidejs/glide'

export default function _elevatorPitch() {
    if (!_q('[data-elevator-pitch]')) return

    new Glide('[data-elevator-pitch]', {
        type: 'carousel',
        autoplay: 3000,
        perView: 3,
        breakpoints: {
            1024: { perView: 2 },
            576: { perView: 1 },
        },
        classes: {
            nav: { active: 'active' }
        }
    }).mount()
}