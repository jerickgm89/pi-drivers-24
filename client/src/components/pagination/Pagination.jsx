
export const Pagination = ({prevPage, nextPage, page}) => {

    const nextPageIndicator = page + 2;
    const prevPageIndicator = (page === 0) ? page : nextPageIndicator - 2;

  return (
    <div className="mx-auto">
        <div className="grid grid-cols-3 place-items-center">
        <button className='btn btn-paginator' onClick={prevPage}>Prev</button>
        <div className="grid grid-cols-3 gap-2">
            <button className='btn btn-disabled'>{prevPageIndicator}</button>
            <button className='btn btn-primary'>{page + 1}</button>
            <button className='btn btn-disabled'>{nextPageIndicator}</button>
        </div>
        <button className='btn btn-paginator' onClick={nextPage}>Next</button>
      </div>
    </div>
  )
}
