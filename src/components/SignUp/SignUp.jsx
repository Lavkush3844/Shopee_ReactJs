import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { errNull, userCreate } from '../../services/action/auth.action';

const SignUp = () => {

    const { isSignUp, err } = useSelector(state => state.authReducer);
    const navigate = useNavigate();

    const [signup, setSignup] = useState({
        fname: '',
        email: '',
        password: '',
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSignup({ ...signup, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userCreate(signup.email, signup.password));
    }

    const handleErrNull = () => {
        dispatch(errNull());
    }

    if (isSignUp) {
        navigate('/login');
    }
    else {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <form onSubmit={handleSubmit} className="bg-blue-300 px-10 py-10 rounded-xl">
                    <div>
                        <h1 className="text-center text-white text-xl mb-4 font-bold">Signup</h1>
                    </div>
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
                        <input type="text" name="fname" value={signup.fname} onChange={handleChange} className="mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-400 outline-none" placeholder="Name" />
                    </div>
                    <div>
                        <input type="email" name="email" value={signup.email} onChange={handleChange} className="mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-400 outline-none" placeholder="Email" />
                    </div>
                    <div>
                        <input type="password" name='password' value={signup.password} onChange={handleChange} className="mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg placeholder:text-gray-400 outline-none" placeholder="Password" />
                    </div>
                    <div className="flex justify-center mb-3">
                        <button type='submit' className="bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg">Signup</button>
                    </div>
                    <div>
                        <h2 className="text-white">Have an account <NavLink to={'/login'} className="text-red-500 font-bold" href="/login">Login</NavLink></h2>
                    </div>
                </form>
            </div>
        );
    }


}

export default SignUp;
