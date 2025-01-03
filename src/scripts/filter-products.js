import { _ql, _q } from './snips'

export function _filterProducts() {
    const checkboxes = _ql('input[type="checkbox"][name="partner"]')
    const applyButton = _q('#apply-filters')
    const resetButton = _q('#reset-filters')
    const applyLabel = _q('label[for="apply-filters"]')
    const resetLabel = _q('label[for="reset-filters"]')
    const searchInput = _q('input[name="s"]')

    let initialState = new Set()

    function updateButtonVisibility() {
        const currentState = new Set(Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value))
        const stateChanged = !setsAreEqual(initialState, currentState)

        applyLabel.style.display = stateChanged || searchInput.value !== '' ? '' : 'none'
        resetLabel.style.display = currentState.size > 0 || searchInput.value !== '' ? '' : 'none'
    }

    function setsAreEqual(a, b) {
        return a.size === b.size && [...a].every(value => b.has(value))
    }

    if (window.activePartners && window.activePartners.length > 0) {
        checkboxes.forEach(cb => {
            if (window.activePartners.includes(cb.value)) {
                cb.checked = true
                initialState.add(cb.value)
            }
        })
        resetLabel.style.display = ''
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateButtonVisibility)
    })

    updateButtonVisibility()

    resetButton.addEventListener('click', e => {
        e.preventDefault()
        checkboxes.forEach(cb => cb.checked = false)
        searchInput.value = ''
        initialState.clear()
        updateButtonVisibility()
        window.location.href = '/products-filtered'
    })

    applyButton.addEventListener('click', e => {
        e.preventDefault()
        const checkedPartners = checkboxes
            .filter(cb => cb.checked)
            .map(cb => cb.value)

        const url = new URL(window.location)
        url.searchParams.delete('partner')
        checkedPartners.forEach(partner => url.searchParams.append('partner', partner))

        if (searchInput.value) {
            url.searchParams.set('s', searchInput.value)
        } else {
            url.searchParams.delete('s')
        }

        window.location.href = url.toString()
    })
}