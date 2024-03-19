import { _q, _ql, _encode } from './snips'
import _runToast from './toast'
import _gsap from './gsap'
import Botpoison from '@botpoison/browser'

const
    _toast = _runToast(),
    g = _gsap()

export default function _submit() {
    if (!_q('[data-form-submit]')) return

    const
        button = _q('[data-form-submit]'),
        form = button.parentNode,
        successMsg = _q('[data-form-success-message]').textContent,
        endpoint = form.getAttribute('form-id')

    form.addEventListener('submit', submit)

    async function submit(e) {
        e.preventDefault()

        const
            form = e.target,
            data = new FormData(form),
            botpoison = new Botpoison({
                publicKey: 'pk_91403b5a-e3db-4abd-a2af-2b1cc2056536'
            })

        button.classList.add('disabled')
        const { solution } = await botpoison.challenge()

        await fetch(`https://submit-form.com/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: _encode({
                ...Object.fromEntries(data),
                _botpoison: solution
            })
        }).then(res => {
            if (res.status === 200) {
                form.reset()
                window.scrollTo({ top: 0, left: 0 })
                _toast.display(successMsg)
                button.classList.remove('disabled')
            } else {
                _toast.display(`Aw, snap, something broke. Please refresh page and try again.`)
            }
        })
    }
}