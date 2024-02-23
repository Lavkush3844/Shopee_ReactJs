import React, { useEffect } from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';

const Search = () => {
    const [open, setOpen] = useState(false);
    const { products } = useSelector((state) => state.ProductsReducer);
    const [productInput, setProductInput] = useState(products);
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        let value = e.target.value;
        setSearch(value);
    };

    useEffect(() => {
        let searchData;
        if (search.trim() === '') {
            // If the search query is empty, set productInput to an empty array
            searchData = [];
        } else {
            // Filter products based on the search query
            searchData = products.filter((pro) => {
                return pro.pname.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
        }
        setProductInput(searchData);
    }, [search, products]);

    return (
        <>
            <button type='button' className="p-2 text-gray-400 hover:text-gray-500" onClick={() => setOpen(true)}>
                <span className="sr-only">Search</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6">
                    <path strokeLinecap="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z">
                    </path>
                </svg>
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
                                                    <div className="flex items-center justify-between border rounded-lg px-3 py-2">
                                                        <input type='text' placeholder='Find Anything...' className='w-full text-md font-medium focus:outline-none' onChange={handleChange} />
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
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {productInput.map((product, index) => {
                                                        return (
                                                            <li key={index} className="flex items-center py-6">
                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                    <img src={product.image} alt="Shirt" className="h-full w-full object-cover object-top" />
                                                                </div>
                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                                            <h3><p className="cursor-pointer">{product.pname}</p></h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
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
    );
};

export default Search;
