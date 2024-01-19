import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

export default function runAlpine() {
    Alpine.store('states', {
        scrollPastHeader: false
    })

    Alpine.plugin(persist)
    Alpine.start()

    console.log('Alpine took off 🚀')
}