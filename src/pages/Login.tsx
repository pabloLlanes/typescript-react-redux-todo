import { useSelector } from 'react-redux'



export const Login = () => {

    console.log("Login");
    const user = useSelector((state: any) => state.user)
    console.log(user)

    return (
        <>
            <h1>LOGIN</h1>
        </>
    );
}

