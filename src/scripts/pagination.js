export function _paginateLink(baseURL, current) {
    const url = new URL(baseURL)
    url.searchParams.set('page', current)

    return url.toString()
}

export function _truncatesPagination(totalPages, currentPage) {
    const max = 5

    if (totalPages <= max) {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const hasStartEllipsis = currentPage > max - 2
    const hasEndEllipsis = currentPage < totalPages - (max - 2)

    if (hasStartEllipsis && !hasEndEllipsis) {
        return [
            1,
            { text: '...' },
            ...Array.from({ length: 3 }, (_, i) => totalPages - 3 + i),
        ]
    }

    if (!hasStartEllipsis && hasEndEllipsis) {
        return [
            ...Array.from({ length: 3 }, (_, i) => i + 1),
            { text: '...' },
            totalPages,
        ]
    }

    return [
        1,
        { text: '...' },
        ...Array.from({ length: 3 }, (_, i) => currentPage - 1 + i),
        { text: '...' },
        totalPages,
    ]
}