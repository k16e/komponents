import { _ql, _q } from './snips'

export function _filterProducts() {
    const checkboxes = _ql('input[type="checkbox"][name="partner"]')
    const applyButton = _q('#apply-filters')
    const resetButton = _q('#reset-filters')
    const applyLabel = _q('label[for="apply-filters"]')
    const resetLabel = _q('label[for="reset-filters"]')

    function updateButtonVisibility() {
        const anyChecked = Array.from(checkboxes).some(cb => cb.checked)
        applyLabel.style.display = anyChecked ? '' : 'none'
        resetLabel.style.display = anyChecked ? '' : 'none'
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateButtonVisibility)
    })

    updateButtonVisibility()

    resetButton.addEventListener('click', e => {
        e.preventDefault()
        checkboxes.forEach(cb => cb.checked = false)
        updateButtonVisibility()
    })

    applyButton.addEventListener('click', e => {
        e.preventDefault()
        const checkedPartners = checkboxes
            .filter(cb => cb.checked)
            .map(cb => cb.value)

        const url = new URL(window.location)
        url.searchParams.delete('partner')
        checkedPartners.forEach(partner => url.searchParams.append('partner', partner))

        window.location.href = url.toString()
    })
}