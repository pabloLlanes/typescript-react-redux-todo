interface Props {
    page: number;
    totalPages: number;
    handleSetPage: (page: number) => void;
    handleSetPerPage: any;
}

const Pagination = (props: Props) => {

    const { page, handleSetPage, handleSetPerPage, totalPages } = props;

    const handleBeforePage = () => {
        if (page <= 0) { return }
        handleSetPage(page - 1)
    }
    const handleNextPage = () => {
        if (page >= totalPages - 1) { return }
        handleSetPage(page + 1)
    }

    return (
        <div className=" flex flex-col items-center px-5 py-5 ">
            <div className="flex items-center">
                {
                    page >= 1 &&
                    <>
                        <button
                            onClick={handleBeforePage}
                            type="button" className="w-full p-2 px-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                            {"<"}
                        </button>
                        <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                            {page}
                        </button>
                    </>
                }
                <button type="button" className="w-full px-5 py-3 text-base text-indigo-500 bg-white  border-2  hover:bg-gray-100 ">
                    {page + 1}
                </button>

                {/*     <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                        2
                    </button>
                    <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100">
                        3
                    </button>*/}


                {
                    page <= totalPages - 1 &&

                    <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                        {page + 2}
                    </button>
                }

                {
                    page <= totalPages - 2 &&
                    <button
                        type="button"
                        onClick={handleNextPage}
                        className="w-full p-2 px-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
                        {">"}
                    </button>
                }
            </div>
            <div>
                <select value={page} onChange={handleSetPerPage}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div >
        </div >
    );
}

export default Pagination;