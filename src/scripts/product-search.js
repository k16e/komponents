export const _productSearch = () => {
    const filterForm = document.getElementById('filter-form')
    if (filterForm) {
        filterForm.addEventListener('submit', handleFormSubmit)
    }
}

function handleFormSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const searchParams = new URLSearchParams()

    for (const [key, value] of formData) {
        if (value) {
            if (key === 'partner') {
                // Append multiple partner values
                searchParams.append(key, value);
            } else if (key === 'in_stock') {
                // Only add in_stock if it's checked
                if (value === 'true') {
                    searchParams.set(key, value);
                }
            } else {
                searchParams.set(key, value);
            }
        }
    }

    // Remove page parameter when applying new filters
    searchParams.delete('page')

    // Update the URL and trigger a page reload
    window.location.href = `${window.location.pathname}?${searchParams.toString()}`
}