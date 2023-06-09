interface Props {
    page: number;
    perPage: number;
    totalPages: number;
    handleSetPage: (page: number) => void;
    handleSetPerPage: (qtyPerPage: number) => void;
}

const todosPerPageQty = [5, 10, 20, 50];

const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
const Pagination = (props: Props) => {

    const { page, perPage, handleSetPage, handleSetPerPage, totalPages } = props;

    const handleBeforePage = () => {
        if (page <= 0) { return }
        handleSetPage(page - 1);
        scrollToTop();

    }
    const handleNextPage = () => {
        if (page >= totalPages - 1) { return }
        handleSetPage(page + 1);
        scrollToTop();

    }

    const handleAlgo = (qtyPerPage: number) => {
        if (perPage === qtyPerPage) { return }
        handleSetPage(0);
        handleSetPerPage(qtyPerPage);
        scrollToTop();
    }

    return (
        <div className=" flex w-full flex-wrap justify-around items-center px-5 py-5 ">
            <div className="flex flex-col justify-center items-center">
                <h3 className="py-2">Page</h3>
                <div className="flex gap-4 justify-center items-center">
                    {
                        page >= 1 &&
                        <>
                            <button
                                onClick={handleBeforePage}
                                type="button" className="w-full p-2 px-4 text-indigo-600 bg-white border rounded-l-xl hover:bg-indigo-300">
                                {"<"}
                            </button>
                        </>
                    }
                    <button type="button" className="w-full px-5 py-3  bg-white  border-2 hover:bg-indigo-300 ">
                        {page + 1}
                    </button>
                    {
                        page <= totalPages - 2 &&
                        <button
                            type="button"
                            onClick={handleNextPage}
                            className="w-full p-2 px-4 text-base text-indigo-500 bg-white border-t border-b border-r rounded-r-xl hover:bg-indigo-300">
                            {">"}
                        </button>
                    }
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="py-2">ToDos per Page </h3>
                <div>
                    {
                        todosPerPageQty.map((qty: number, i: number) =>
                            <button key={i} className={`${perPage === qty ? "bg-indigo-300" : "bg-slate-100"}  p-3 mx-2 rounded-lg hover:bg-indigo-300`}
                                onClick={() => handleAlgo(qty)}>{qty}
                            </button>
                        )
                    }
                </div>
            </div>
        </div >
    );
}

export default Pagination;