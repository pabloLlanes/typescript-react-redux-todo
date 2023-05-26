import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../store/Store';
import List from '../components/List';

export const Home = () => {
    const todos = useAppSelector((state) => state.todo);
    console.log(todos)

    return (
        <>
            <List />
        </>
    );
}

