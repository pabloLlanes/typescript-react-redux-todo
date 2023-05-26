import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/Store";
import { fetchTodos } from "../store/slices/TodoSlice";

const List = () => {
  const todos = useAppSelector((state) => state.todo.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])
  console.log(todos)
  return (
    <div className="rounded-md shadow border m-2 p-2">
      <p>This is List Components</p>

    </div>
  );
};

export default List;
