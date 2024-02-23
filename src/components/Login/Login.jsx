import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { errNull, popUpSignUp, userLogin } from '../../services/action/auth.action';

const Login = () => {
    const navigate = useNavigate();
    const { err, isLogin } = useSelector(state => state.authReducer);
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...login, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userLogin(login.email, login.password));
    }

    const handleGoogleSignUp = () => {
        dispatch(popUpSignUp());
    }

    const handleErrNull = () => {
        dispatch(errNull());
        setLogin({
            email: '',
            password: ''
        })
    }
    if (isLogin) {
        navigate('/');
    }
    else {
        return (
            <section className="flex justify-center items-center my-16">
                <form onSubmit={handleSubmit} className="bg-blue-300 px-10 py-10 rounded-xl">
                    <h1 className="text-center text-xl mb-4 font-bold">Login</h1>
                    <div className="flex my-4">
                        {err && (
                            <p className="py-2 bg-slate-100 px-3 w-full flex justify-between rounded-md font-bold border-2 border-orange-400 text-orange-400 items-center">
                                {err}
                                <span className='cursor-pointer' onClick={handleErrNull}>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="text-xl point"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                                    </svg>
                                </span>
                            </p>
                        )}
                    </div>
                    <div>
                        <input type="email" name="email" className="mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg placeholder:text-gray-400 outline-none" placeholder="Email" value={login.email} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="password" name='password' className=" mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg placeholder:text-gray-400 outline-none" placeholder="Password" value={login.password} onChange={handleChange} />
                    </div>
                    <div className="flex justify-center mb-3">
                        <button type='submit' className="bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg">Login</button>
                    </div>
                    <button type='button' onClick={handleGoogleSignUp} className="flex w-full items-center justify-center px-6 py-3 my-4 text-white transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 hover:text-black dark:hover:bg-gray-600">
                        <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"></path>
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"></path>
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"></path>
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"></path>
                        </svg>
                        <span className="mx-2">Sign up with Google</span>
                    </button>

                    <div>
                        <h2 className="text-white mt-6">Don't have an account <NavLink to={'/signUp'} className="text-red-400 font-bold">Signup</NavLink></h2>
                    </div>
                </form>
            </section>
        );
    }

}

export default Login;
