import { useSelector } from 'react-redux'



export const Login = () => {

    const user = useSelector((state: any) => state.user)
    console.log(user)

    return (
        <>
            <h1>LOGIN</h1>
        </>
    );
}

