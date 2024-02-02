import { _q, _ql } from './snips'

const _sendForm = () => {
    if (!_q('[data-form-submit]')) return

    const
        buttons = _ql('[data-form-submit]')

    buttons.map(ea => {
        const form = ea.parentNode

        

        console.log(form)
    })
}

export default _sendForm