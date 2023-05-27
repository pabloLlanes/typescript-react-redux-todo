import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ToDoList from '../components/ToDo/ToDoList';
import NavBar from '../components/NavBar/NavBar';

export const Home = () => {
    //const todos = useAppSelector((state) => state.todo);

    return (
        <>
            <NavBar />
            <ToDoList />
        </>
    );
}

