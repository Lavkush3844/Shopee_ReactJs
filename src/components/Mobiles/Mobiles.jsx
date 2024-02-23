import React from 'react'

const Mobiles = () => {
    return (
        <>
            <section className='my-14 p-4 md:p-0 max-w-7xl mx-auto'>
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-1xl md:text-2xl font-bold tracking-tight text-gray-900">Mobiles</h2>
                    <a className="font-semibold bg-[#3C91E6] text-white py-2 px-3 rounded-3xl text-sm md:text-md flex items-center cursor-pointer">View More
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="ms-1 text-xl font-gray-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="m13.061 4.939-2.122 2.122L15.879 12l-4.94 4.939 2.122 2.122L20.121 12z"></path>
                        </svg>
                    </a>
                </div>
                <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="border rounded-xl border-gray-200">
                        <div className="text-center border-b border-gray-200">
                            <img className="inline-block"
                                src="https://isotech-demo.myshopify.com/cdn/shop/products/1200_1200-4_57e789df-b31e-4aa8-bd8d-79b293d60e81.png?v=1695378500&width=324" alt="" />
                        </div>
                        <div className="px-8 py-4">
                            <h2 className="font-medium mb-6">Wireless Headphone</h2>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="font-medium text-orange-500 text-xl">$105.00</h2>
                                <button className="flex gap-2 items-center text-sm bg-blue-400 text-white rounded-3xl px-4 py-2 
                                    cursor-pointer hover:bg-transparent border hover:border hover:text-blue-600 border-blue-400 ">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z">
                                        </path>
                                    </svg>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-xl border-gray-200">
                        <div className="text-center border-b border-gray-200">
                            <img className="inline-block"
                                src="https://isotech-demo.myshopify.com/cdn/shop/products/1200_1200-1_ce07dbcd-242e-4c63-bf2f-8ec9269e692d.png?v=1695378500&width=324" alt="" />
                        </div>
                        <div className="px-8 py-4">
                            <h2 className="font-medium mb-6">Wireless Headphone</h2>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="font-medium text-orange-500 text-xl">$105.00</h2>
                                <button className="flex gap-2 items-center text-sm bg-blue-400 text-white rounded-3xl px-4 py-2 
                                    cursor-pointer hover:bg-transparent border hover:border hover:text-blue-600 border-blue-400 ">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z">
                                        </path>
                                    </svg>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-xl border-gray-200">
                        <div className="text-center border-b border-gray-200">
                            <img className="inline-block"
                                src="https://isotech-demo.myshopify.com/cdn/shop/files/1200_1200-13_50827fde-68ab-453e-ab12-23aaffb895a8.png?v=1695528608&width=324" alt="" />
                        </div>
                        <div className="px-8 py-4">
                            <h2 className="font-medium mb-6">Wireless Headphone</h2>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="font-medium text-orange-500 text-xl">$105.00</h2>
                                <button className="flex gap-2 items-center text-sm bg-blue-400 text-white rounded-3xl px-4 py-2 
                                    cursor-pointer hover:bg-transparent border hover:border hover:text-blue-600 border-blue-400 ">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z">
                                        </path>
                                    </svg>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-xl border-gray-200">
                        <div className="text-center border-b border-gray-200">
                            <img className="inline-block"
                                src="https://cdn.shopify.com/s/files/1/0829/4619/5736/files/1200_1200-12_af221d4c-5108-47ef-bb61-ae896e0e3f01_360x.png?v=1695528091" alt="" />
                        </div>
                        <div className="px-8 py-4">
                            <h2 className="font-medium mb-6">Wireless Headphone</h2>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="font-medium text-orange-500 text-xl">$105.00</h2>
                                <button className="flex gap-2 items-center text-sm bg-blue-400 text-white rounded-3xl px-4 py-2 
                                    cursor-pointer hover:bg-transparent border hover:border hover:text-blue-600 border-blue-400 ">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z">
                                        </path>
                                    </svg>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mobiles