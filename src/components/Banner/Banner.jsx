import React from 'react';
import headPhone1 from '../../assets/headphone-1.png'
import headPhone2 from '../../assets/headphone-2.png'
import mobile2 from '../../assets/mobile-2.png'
import speaker from '../../assets/s.webp'
import watch from '../../assets/watch.jpg'

const Banner = () => {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="py-4 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
                        <p className="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
                    </div>
                    <div>
                        <div className="mt-10 ">
                            <div aria-hidden="true" className="pointer-events-none hidden lg:block lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img src={headPhone1} alt="" className="h-full w-full object-cover object-center" /></div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src={mobile2} alt="" className="h-full w-full object-cover object-center" /></div>
                                        </div>
                                        <div className=" flex-shrink-0">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg"><img src={headPhone2} alt="" className="h-full w-full object-cover object-center" /></div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src={watch} alt="" className="h-full w-full object-cover object-center" /></div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src={speaker} alt="" className="h-full w-full object-cover object-center" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="inline-block point rounded-md border border-transparent bg-[#3C91E6] px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


