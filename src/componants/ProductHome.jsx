import React from 'react'
import { Link } from 'react-router-dom'
import Productdata from '../Productdata'

export default function ProductHome() {
    return (
        <div className="w-full h-[92dvh] bg-gray-100 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-8 w-[90%]">

                {Productdata.map((p, idx) => (
                    <Link to={`/products/${p.category}`} key={idx}>
                        <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center">

                            <img
                                src={p.pic}
                                alt=""
                                className="h-40 w-full object-contain rounded-md"
                            />

                            <h2 className="mt-4 text-xl font-bold text-gray-800">
                                {p.category}
                            </h2>

                            <button className="mt-3 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm transition-all">
                                View Products
                            </button>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    )
}

