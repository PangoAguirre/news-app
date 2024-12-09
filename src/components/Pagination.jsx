import { PaginationButton } from "./PaginationButton";

export function Pagination({numPage, totalResults, updateNumPage}) {

  if (numPage <= 0) return
  const totalPages = totalResults < 100 ? Math.ceil(totalResults / 9) : 10;
  const array = [...Array(Math.min(totalPages, 5))]

  return (
    array.map((_, index) => {
      const page = numPage + index - 1
      return <PaginationButton key={page} page={page} updateNumPage={updateNumPage} totalPages={totalPages}/>
    })
  )
}