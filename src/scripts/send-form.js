import { _q, _ql } from './snips'

const _sendForm = () => {
    if (!_q('[data-form-submit]')) return

    const
        buttons = _ql('[data-form-submit]')

    buttons.map(ea => {
        const form = ea.parentNode

        form.addEventListener('submit', submit)
    })

    function submit(e) {
        e.preventDefault()
        console.log(e)
    }
}

export default _sendForm