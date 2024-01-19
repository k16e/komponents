import Alpine from 'alpinejs'

export default function () {
    const states = Alpine.store('states')

    console.log('Header is', states.scrollPastHeader)
}