import './header.css'
import { useState } from 'react'
import { Dialog, Popover, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'
import Logo1 from '../Logo/Logo'
import NavMenu from '../NavMenu/NavMenu'
import Search from '../Search/Search'
import CartBucket from '../CartBucket/CartBucket'
import { NavLink } from 'react-router-dom'
import UserLoginProfile from '../UserLoginProfile/UserLoginProfile'
import { useSelector } from 'react-redux'


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { isLogin } = useSelector(state => state.authReducer);


    return (
        <header className="bg-white sticky z-30 top-0">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Logo1 />
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <NavMenu />
                    </Popover>
                </Popover.Group>

                <div className="flex flex-1 items-center lg:gap-3 gap-1.5 justify-end">

                    <div className="hidden lg:ml-8 lg:flex"><a href="#" className="flex items-center text-gray-700 hover:text-gray-800"><img src="https://www.svgrepo.com/show/405510/flag-for-flag-india.svg" alt="" className="block h-auto w-5 flex-shrink-0" /><span className="ml-1.5 block text-sm font-medium">IND</span><span className="sr-only">,change currency</span></a></div>

                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}  >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Search />
                    <CartBucket />
                    {isLogin ? <UserLoginProfile /> : <NavLink to={'/login'} className="hidden ml-2 lg:block text-sm font-semibold  text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path></svg>
                    </NavLink>}


                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="">
                            <span className="sr-only">Your Company</span>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    {/* for dropdown menu */}
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <NavMenu />
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

