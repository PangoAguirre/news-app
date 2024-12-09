/* eslint-disable react/prop-types */
export function PaginationButton({page, updateNumPage, totalPages}) {
    if (!(page >= 1 && page <= totalPages)) return null
    return (
        <button onClick={() => updateNumPage({newNumPage: page})}>
            {page}
        </button>
    )
}