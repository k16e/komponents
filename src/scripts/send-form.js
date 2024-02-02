import { _q, _ql, _encode } from './snips'

const _sendForm = () => {
    if (!_q('[data-form-submit]')) return

    const
        buttons = _ql('[data-form-submit]'),
        endpoint = import.meta.env.PUBLIC_FORM_ENDPOINT

    buttons.map(ea => {
        const form = ea.parentNode

        form.addEventListener('submit', submit)
    })

    async function submit(e) {
        e.preventDefault()
        await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: _encode({
                // pass in the formdata to send
            })
        }).then(res => {
            // reset form data here
            if (res.status === 200) {
                console.log('Success')
                // do something if submission success
            }
            else {
                console.log('Failed')
                // do something if fails
            }
        }).catch(err => console.log(err))

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