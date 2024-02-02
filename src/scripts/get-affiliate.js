import { _q, _empty } from './snips'

const _getAffiliate = () => {
    if (import.meta.env.SSR) return
    if (!_q('[data-affiliate-populate]')) return

    const
        el = _q('[data-affiliate-populate]'),
        affiliate = !_empty(localStorage.affiliate) ? 'Recommend for me!' : localStorage.affiliate

    el.innerText = affiliate
}

export default _getAffiliate