import { _q, _ql, _encode } from './snips'
import _runToast from './toast'
import gsap from 'gsap'

const _toast = _runToast()

const _sendForm = () => {
    if (!_q('[data-form-submit]')) return

    const
        button = _q('[data-form-submit]'),
        endpoint = import.meta.env.PUBLIC_FORM_ENDPOINT,
        file = _q('[data-input-file]'),
        fileSuccess = _q('[data-file-success]'),
        fileError = _q('[data-file-error]'),
        form = button.parentNode

    if (file) {
        file.addEventListener('change', e => {
            const
                files = e.target.files,
                fileSize = files[0].size,
                size = Math.round((fileSize / 1024))

            if (files.length) {
                gsap.to(fileSuccess, {
                    display: 'flex',
                    opacity: 1,
                    y: -6
                })
            }
        })
    }

    form.addEventListener('submit', submit)

    async function submit(e) {
        e.preventDefault()

        const
            form = e.target,
            data = new FormData(form),
            select = _q('#affiliate', form)

        await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: _encode(Object.fromEntries(data))
        }).then(res => {
            if (res.status === 200) {
                localStorage.removeItem('affiliate')
                form.reset()
                if (select) select.value = 'Recommend for me!'
                _toast.display(`We have received your message. You will hear from us in 48 hours`)
            } else {
                console.log('Failed')
            }
        })
    }

    function disable(el) {
        el.disabled = true
        el.firstElementChild.classList.add('disabled')
    }

    function enable(el) {
        el.disabled = false
        el.firstElementChild.classList.remove('disabled')
    }
}

export default _sendForm