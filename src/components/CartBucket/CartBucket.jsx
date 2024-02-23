import React, { useEffect } from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { delItem } from '../../services/action/addCart.action'

const CartBucket = () => {

    const [open, setOpen] = useState(false);

    const { isCart, totalPrice } = useSelector((state) => state.cartReducer);

    const dispatch = useDispatch()

    const handleDelete = (itemId) => {
        dispatch(delItem(itemId))
    }


    return (
        <>

            <button type='button' className="group point flex items-center" onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z">
                    </path>
                </svg>
                <span className="ml-1 mt-1 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {isCart.length}</span>
                <span className="sr-only">items in cart, view bag
                </span>
            </button>


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
                                                    <div className="flex items-center justify-between rounded-lg px-3 py-2">
                                                        <h2>Shopping Cart</h2>
                                                        <div className="ml-3 flex h-7 items-center">
                                                            <button
                                                                type="button"
                                                                className="relative rounded-md text-gray-300 hover:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
                                                                onClick={() => setOpen(false)}
                                                            >
                                                                <span className="absolute -inset-2.5" />
                                                                <span className="sr-only">Close panel</span>
                                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                {/* Your content */}

                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {
                                                                isCart.map((product, index) => {
                                                                    return (
                                                                        <li key={index} className="flex py-6">
                                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                                <img src={product.image} alt="T-shirt" className="h-full w-full object-cover object-top" />
                                                                            </div>
                                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                                <div>
                                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                        <h3><a>{product.pname}</a></h3>
                                                                                        <p className="ml-4">{`Rs.${product.price}`}</p>
                                                                                    </div>
                                                                                    <p className="mt-1 text-sm text-gray-500">black</p>
                                                                                </div>
                                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                                    <p className="text-gray-500">{`Qty :${product.quantity}`}</p>
                                                                                    <div className="flex">
                                                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => handleDelete(product.id)}>Remove</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="border-t mt-28 border-gray-200 px-4 py-6 sm:px-6">
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <p>Subtotal</p>
                                                        <p className='font-semibold'>{`Rs.${totalPrice}`}</p>
                                                    </div>
                                                    <div className="mt-6">
                                                        <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                                                    </div>
                                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                        <p>or <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> →</span></button></p>
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

export default CartBucket