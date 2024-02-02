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

        /**
         * get for data, encode, yeah?
         * push to localstorage
         * then load/trigger modal
         * of course, the form success modal window should be hidden with dummy data
         * update form modal with data from local storage
         * on dismiss form modal, clear form (even clear form once submission is successful)
         * usebasin to test success submission
         * check how if there's error if show error on same page and clear or show error in modal and reset form
        */
    }
}

export default _sendForm