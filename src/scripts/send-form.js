import { _q, _ql, _encode } from './snips'
import { modal, setModal } from './store'
import gsap from 'gsap'

const _sendForm = () => {
    if (!_q('[data-form-submit]')) return

    const
        buttons = _ql('[data-form-submit]'),
        endpoint = import.meta.env.PUBLIC_FORM_ENDPOINT,
        file = _q('[data-input-file]'),
        fileSuccess = _q('[data-file-success]'),
        fileError = _q('[data-file-error]')

    file.addEventListener('change', e => {
        const
            files = e.target.files,
            fileSize = files[0].size,
            size = Math.round((fileSize / 1024))
        console.log(files, size)
        if (files.length) {
            if (size > 300) {
                gsap.to(fileError, {
                    display: 'flex',
                    opacity: 1,
                    y: -6
                })
            } else {
                gsap.to(fileSuccess, {
                    display: 'flex',
                    opacity: 1,
                    y: -6
                })
            }
        }
    })

    buttons.map(ea => {
        const form = ea.parentNode

        form.addEventListener('submit', submit)
    })

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
            } else {
                console.log('Failed')
            }
        })
    }
}

export default _sendForm