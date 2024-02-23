import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../services/action/auth.action'

const UserLoginProfile = () => {

    const [open, setOpen] = useState(false);
    const { isLogin, user } = useSelector(state => state.authReducer);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginList = [
        {
            title: "Your Account"
        },
        {
            title: "Your Orders"
        },
        {
            title: "Your Wishlist"
        },
        {
            title: "Your Addresses"
        },
        {
            title: "Payment Options"
        },
        {
            title: "Login & Security"
        },
    ]

    const handleLoginOpener = () => {

        if (isLogin) {
            setOpen(true);
        }
        else {
            navigate('/login');
        }
    }

    const handleLogout = () => {
        dispatch(userLogout());
    }

    return (
        <>

            {

                isLogin ?
                    <button type='button' onClick={handleLoginOpener} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none ring-1 ring-black">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="h-7 w-7 rounded-full"
                            src={user.uphoto}
                            alt=""
                        />
                    </button>
                    :
                    <button type='button' onClick={handleLoginOpener} className="hidden ml-2 lg:block text-sm font-semibold  text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path></svg>
                    </button>
            }


            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                    <div className="flex items-start justify-between pb-4 border-b-2 border-black">
                                                        <div className="relative ml-0 mb-0 flex items-center">
                                                            <div className="relative mr-3 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                                <span className="absolute -inset-1.5"></span>
                                                                <span className="sr-only">Open user menu</span>
                                                                <img className="h-8 w-8 rounded-full" src={user.uphoto} alt="" />
                                                            </div>
                                                            <h2 className="text-lg font-medium text-gray-900" id="headlessui-dialog-title-:r6:" data-headlessui-state="open">Hello, {user.uname}</h2>
                                                        </div>
                                                        <div className="ml-3 flex h-7 items-center">
                                                            <button type="button" onClick={() => setOpen(false)} className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                                                <span className="absolute -inset-0.5"></span>
                                                                <span className="sr-only">Close panel</span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                {/* Your content */}
                                                <div className="flex h-full flex-col ">
                                                    <div className="mt-8">
                                                        <div className="flow-root">
                                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                                {
                                                                    loginList.map((list, index) => {
                                                                        return (
                                                                            <li key={index} className="flex py-4 cursor-pointer">
                                                                                <div className="ml-0 flex flex-1 flex-col">
                                                                                    <div>
                                                                                        <div className="point flex justify-between text-base font-medium text-gray-900">
                                                                                            <h3><p>{list.title}</p></h3>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                                <li className="flex py-4 cursor-pointer" onClick={handleLogout}>
                                                                    <div className="ml-0 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="point flex justify-between text-base font-medium text-gray-900">
                                                                                <h3><p>Logout</p></h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="border-t mt-5 border-gray-200 px-4 py-6 sm:px-6">
                                                        <div className="flex justify-center text-center text-sm text-gray-500">
                                                            <p>
                                                                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> →</span></button>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>




        </>
    )
}

export default UserLoginProfile