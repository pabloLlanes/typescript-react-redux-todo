import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { logInUser } from "../../store/slices/UserSlice";

const FormLogin = () => {
    const dispatch = useAppDispatch()

    const [isFailLogIn, setIsFailLogIn] = useState<boolean>(false);

    type Login = {
        username: string;
        password: string;
    }

    const initialLogin: Login = {
        username: "",
        password: "",
    }

    const [userLogin, setUserLogin] = useState<Login>(
        initialLogin
    );

    const { username, password } = userLogin;

    const user = useAppSelector((state) => state.user)

    const handleInputChange = (field: string) => {
        return (e: any) => {
            setUserLogin((prev) => ({
                ...prev,
                [field]: e.target.value
            }));
        };
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(logInUser(userLogin));
        if (!user.isLogging) {
            setIsFailLogIn(true);
            setTimeout(() => { setIsFailLogIn(false) }, 3000)
            return;
        }
    };

    return (
        <div className="h-screen w-full bg-slate-100 flex flex-col justify-center items-center rounded-lg">
            <div className="p-12 shadow-2xl bg-white border-b-4 border-r-2 border-gray-300">
                <h1 className="py-6 text-2xl">WELCOME</h1>
                <form className="flex items-center justify-center flex-col "
                    onSubmit={handleSubmit}>
                    <div className="flex gap-4 p-6 justify-center items-center">
                        <label className="text-gray-900">
                            Username:
                        </label>
                        <input
                            className="border-2 w-3/4"
                            placeholder=" Enter username... "
                            value={username}
                            onChange={handleInputChange("username")}
                        />
                    </div>
                    <div className="flex gap-4 p-6 justify-center items-center">
                        <label className="text-gray-900">
                            Password:
                        </label>
                        <input
                            className="border-2 w-3/4"
                            placeholder=" Enter password..."
                            type="password"
                            value={password}
                            onChange={handleInputChange("password")}
                        />
                    </div>
                    {isFailLogIn && <div className="p-4 bg-red-400 rounded-lg text-white">user or password incorrect</div>}

                    <button className="bg-indigo-300 text-white text-lg px-6 py-2 rounded-xl mt-10">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;