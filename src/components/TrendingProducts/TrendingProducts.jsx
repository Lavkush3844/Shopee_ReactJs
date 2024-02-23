import React, { useEffect, useState } from 'react'
import { getData } from '../../services/action/products.action';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../services/action/addCart.action';
import { useNavigate } from 'react-router';

const TrendingProducts = () => {

    const { products } = useSelector((state) => state.ProductsReducer);
    const { isLogin } = useSelector((state) => state.authReducer);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    const addProduct = (product) => {
        console.log("heello");
        setData(product);
        if (isLogin) {
            dispatch(addItem(product));
        }
        else {
            navigate('/login');
        }

    }

    return (
        <>


            <section className='my-14 p-4 md:p-0 max-w-7xl mx-auto'>
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-1xl md:text-2xl font-bold tracking-tight text-gray-900">Trending Now</h2>
                    <a className="font-semibold bg-[#3C91E6] text-white py-2 px-3 rounded-3xl text-sm md:text-md flex items-center cursor-pointer">View More
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="ms-1 text-xl font-gray-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="m13.061 4.939-2.122 2.122L15.879 12l-4.94 4.939 2.122 2.122L20.121 12z"></path>
                        </svg>
                    </a>
                </div>
                <div className="mt-4 mb-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                        products.map((product, index) => {
                            return (
                                <div key={index} className="point group relative border rounded-xl border-gray-200">
                                    <div className="aspect-h-1 p-4 relative aspect-w-1 w-full overflow-hidden border-b border-gray-200 rounded-md  lg:aspect-none sm:h-80">
                                        <img src={product.image} alt="Shirt" className="h-full group-hover:opacity-75 w-full object-cover object-top lg:h-full lg:w-full" />
                                        <div className="bg-indigo-600 font-semibold text-white p-3 z-30 rounded-full m-3 bottom-0 end-0 absolute point hidden items-center justify-center">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="fw-bold" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="mt-2 px-6 py-3 flex flex-col">
                                        <h2 className="font-medium mb-3">{product.pname}</h2>
                                        <div className="flex justify-between items-center mt-2">
                                            <h2 className="font-medium text-orange-500 text-lg">{`Rs.${product.price}`}</h2>
                                            <button className="flex gap-2 items-center text-sm bg-blue-400 text-white rounded-3xl px-4 py-2 
                                        cursor-pointer hover:bg-transparent border hover:border hover:text-blue-600 border-blue-400" onClick={() => addProduct(product)}>
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
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}
export default TrendingProducts