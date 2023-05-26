import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import List from '../components/Todo/TodoList';
import { useAppSelector } from '../store/store';

export const Home = () => {
    //const todos = useAppSelector((state) => state.todo);


    return (
        <>
            <List />
        </>
    );
}

