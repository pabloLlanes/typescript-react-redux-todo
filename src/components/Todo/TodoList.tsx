import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useDispatch, useSelector } from 'react-redux';

import Pagination from "../Pagination/Pagination";
import ToDo from "./ToDo";
import { fetchToDos } from "../../store/slices/ToDoSlice";
import AddEditToDo from "./AddEditToDo";


const ToDoList = () => {
  const dispatch = useAppDispatch();
  const toDos = useAppSelector((state) => state.toDo.data);

  useEffect(() => {
    if (toDos.length === 0) {
      console.log('FETCH TODOS')
      dispatch(fetchToDos())
    }
  }, [])

  const [page, setPage] = useState(0);
  const [openAddEditToDo, setAddEditToDo] = useState({ isOpen: false, type: "CREATE", id: null });

  const [perPage, setPerPage] = useState(15);

  const totalPages = Math.ceil(toDos?.length / perPage);

  const pagesVisited = page * perPage;

  const handlePagination = (updatePage: number) => setPage(updatePage);

  const handleSetPerPage = (qtyPerPage: number) => setPerPage(qtyPerPage);

  const displayToDos = toDos?.slice(pagesVisited, pagesVisited + perPage);

  const handleAdd = () => {
    setAddEditToDo({ isOpen: true, type: "CREATE", id: null });
  };

  const theads = ["Id", "Status", "Title"];

  return (
    <div className='flex justify-center items-center'>
      {openAddEditToDo.isOpen ?
        <AddEditToDo type={openAddEditToDo.type} id={openAddEditToDo.id} setAddEditToDo={setAddEditToDo} /> :
        <div className="flex flex-col">

          <table className="px-4 py-4 -mx-4 min-w-full ">
            <thead >
              <tr >
                {theads.map((th, i) =>
                  <th key={i} className="bg-blue-200 px-5 py-3 text-sm text-center text-gray-800   border-b-4 border-blue-600">
                    {th}
                  </th>)}
                <th className="bg-blue-200 px-5 py-3 text-sm text-center text-gray-800  border-b-4 border-blue-600">

                  <button className="bg-green-400 p-2 mx-1 rounded-md"
                    onClick={handleAdd}>
                    ADD
                  </button>
                </th>
              </tr>
            </thead>

            <tbody>
              {
                displayToDos?.map((toDo: any) =>
                  <ToDo key={toDo.id} toDo={toDo} setAddEditToDo={setAddEditToDo} />
                )
              }
            </tbody>
          </table>

          <Pagination
            page={page}
            totalPages={totalPages}
            handleSetPage={handlePagination}
            handleSetPerPage={handleSetPerPage}
          />
        </div>
      }
    </div>
  );
};

export default ToDoList;
