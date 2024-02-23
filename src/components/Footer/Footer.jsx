import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="relative bg-white">
                    <div className="mx-auto max-w-7xl px-8 border-y">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-8 md:py-16">
                            <div className="col-start-1 lg:col-start-2 grid grid-cols-1 gap-x-8">
                                <div>
                                    <p className="font-bold text-lg text-gray-900">Subscribe to our newsletter</p>
                                    <p className="text-md font-normal mt-4 mb-5 hover:text-gray-800 sm:w-80">The latest news, articles, and resources, sent to your inbox weekly.</p>
                                    <input type="text" placeholder="Enter Your Email" className="border rounded-3xl sm:w-60 border-gray-300 px-2 py-1" />
                                    <button className="bg-blue-400 font-medium text-white py-1 text-md shadow px-3 rounded-3xl sm:mt-0 mt-2 sm:ms-2">Subscribe</button>
                                </div>
                            </div>
                            <div className="row-start-1 grid sm:grid-cols-4 grid-cols-2 gap-x-8 gap-y-10 text-sm">
                                <div>
                                    <p id="Clothing-heading" className="font-bold text-lg text-gray-900">Electronics</p>
                                    <ul role="list" aria-labelledby="Clothing-heading" className="mt-6 space-y-3 sm:mt-4 sm:space-y-4">
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Gadgets</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Smart Watch</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Smart T.V</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Alexa</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Chromebook</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Camera </a></li>
                                    </ul>
                                </div>
                                <div>
                                    <p id="Accessories-heading" className="font-bold text-lg text-gray-900">Accessories</p>
                                    <ul role="list" aria-labelledby="Accessories-heading" className="mt-6 space-y-3 sm:mt-4 sm:space-y-4">
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Watches</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Mobiles</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Headphones</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Speakers</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Airpods</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Laptops</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <p id="Brands-heading" className="font-bold text-lg text-gray-900">Brands</p>
                                    <ul role="list" aria-labelledby="Brands-heading" className="mt-6 space-y-3 sm:mt-4 sm:space-y-4">
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">I Phone</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Samsung</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">JBL</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Boat</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Significant Other</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <p id="Support-heading" className="font-bold text-lg text-gray-900">Support</p>
                                    <ul role="list" aria-labelledby="Support-heading" className="mt-6 space-y-3 sm:mt-4 sm:space-y-4">
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Pricing</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Documentation</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">Guides</a></li>
                                        <li className="flex"><a href="#" className="text-md font-normal hover:text-gray-800">API Status</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl px-8 py-7">
                        <p className='text-center'>© 2023 SHOPEE, Inc. All rights reserved.</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer