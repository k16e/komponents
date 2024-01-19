import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
import intersect from '@alpinejs/intersect'

export default function runAlpine() {
    Alpine.store('states', {
        scrollPastHeader: false
    })

    Alpine.plugin(persist)
    Alpine.plugin(intersect)
    Alpine.start()

    console.log('Alpine took off 🚀')
}