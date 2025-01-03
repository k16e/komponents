export const _productSearch = () => {
    const filterForm = document.getElementById('filter-form')

    filterForm.addEventListener('submit', handleFormSubmit)

    function handleFormSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const searchParams = new URLSearchParams()

        for (const [key, value] of formData) {
            if (key === 'partner') {
                searchParams.append(key, value)
            } else {
                searchParams.set(key, value)
            }
        }

        // Remove page parameter when applying new filters
        searchParams.delete('page')

        // Update the URL and trigger a page reload
        window.location.href = `${window.location.pathname}?${searchParams.toString()}`
    }
}