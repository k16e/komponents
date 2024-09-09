export default function _gtag() {
    const
        id = 'G-9P8580K5SN',
        tag = document.createElement('script')

    tag.async = true
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${id}`

    document.head.appendChild(tag)

    window.dataLayer = window.dataLayer || []
    function gtag() {
        dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', id)
}