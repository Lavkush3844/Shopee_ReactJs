import React from 'react'

const Collection = () => {
    return (
        <>
            <section className='my-14'>
                <div className="max-w-7xl container mx-auto">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="group relative col-span-12 h-[300px] overflow-hidden rounded-lg sm:col-span-6">
                            <div className="absolute z-[1] h-full w-full"></div>
                            <img className="transition-all h-full w-full object-cover hover:transform group-hover:scale-110" src="https://megabyte.andevfrontend.site/images/categories/sec-notebooks.jpg" alt="banner-img" />
                            <div className="absolute top-0 left-0 flex h-full w-full items-center">
                                <div className="z-[2] p-5">
                                    <h3 className="text-lg text-[#3C91E6] font-bold uppercase text-primary-color drop-shadow-xl">
                                        Notebooks
                                    </h3>
                                    <p className="my-5 text-white drop-shadow-md">
                                        Choose the ideal laptop for you!
                                    </p>
                                    <a className="inline-block rounded-lg bg-[#3C91E6] py-2 px-3 text-white" href="#">
                                        <span>Show more</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="group relative col-span-12 h-[300px] overflow-hidden rounded-lg sm:col-span-6">
                            <div className="absolute z-[1] h-full w-full"></div>
                            <img className="transition-all h-full w-full object-cover hover:transform group-hover:scale-110" src="https://megabyte.andevfrontend.site/images/categories/sec-desktops.jpg" alt="banner-img" />
                            <div className="absolute top-0 left-0 flex h-full w-full items-center">
                                <div className="z-[2] p-5">
                                    <h3 className="text-lg text-white font-bold uppercase text-primary-color drop-shadow-xl">
                                        Desktops
                                    </h3>
                                    <p className="my-5 text-white drop-shadow-md">
                                        Build your PC at the best price!
                                    </p>
                                    <a className="btn-effect inline-blockrounded-lg bg-[#3C91E6] rounded-lg py-2 px-3 text-white" href="#">
                                        <span>Show more</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Collection