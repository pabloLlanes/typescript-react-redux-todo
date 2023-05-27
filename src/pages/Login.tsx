import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logInUser } from '../store/slices/UserSlice';



export const Login = () => {
    const [isFailLogIn, setIsFailLogIn] = useState(false);
    const dispatch = useDispatch()
    const [userlogin, setUserLogin] = useState(
        {
            username: "",
            password: ""
        }
    );

    const { username, password } = userlogin;


    const user = useSelector((state: any) => state.user)
    console.log(user.isLogging)
    const handleInputChange = (field: any) => {
        return (e: any) => {
            setUserLogin((prev) => ({
                ...prev,
                [field]: e.target.value
            }));
        };
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(logInUser(userlogin));
        if (!user.isLogging) {
            setIsFailLogIn(true);
            setTimeout(() => { setIsFailLogIn(false) }, 2000)
            return;
        }


    };
    return (
        <>
            <div className="bg-indigo-400 h-screen flex justify-center items-center">
                <div className="w-full h-1/2 sm:w-2/3 bg-slate-500 flex flex-col justify-center items-center rounded-lg">
                    <h1 className="py-4 text-xl"> WELCOME</h1>

                    <form className="flex items-center justify-center  flex-col"
                        onSubmit={handleSubmit}>

                        <div className="flex gap-4 p-4 justify-center items-center">
                            <label className="text-gray-900">
                                Username:
                            </label>
                            <input
                                className="border-2 w-3/4"
                                placeholder=" Insert title... "
                                value={username}
                                onChange={handleInputChange("username")}
                            />
                        </div>
                        <div className="flex gap-4 p-4 justify-center items-center">
                            <label className="text-gray-900">
                                Password:
                            </label>
                            <input
                                className="border-2 w-3/4"
                                placeholder=" Insert title... "
                                value={password}
                                onChange={handleInputChange("password")}
                            />
                        </div>
                        <button className="mt-16">
                            Login
                        </button>
                        {isFailLogIn && <p>error to login</p>}
                    </form>



                </div>
            </div>
        </>
    );
}

