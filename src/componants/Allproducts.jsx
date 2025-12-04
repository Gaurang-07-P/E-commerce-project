import React from 'react'
import Navv from './Navv'
import { Link } from 'react-router-dom'
import Productdata from '../Productdata'

export default function Allproducts() {

    return (
        <>
            <Navv />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                            gap-8 max-w-6xl mx-auto p-8">

                {Productdata.map(cat =>
                    cat.products.map(p => (
                        <div
                            key={p.id}
                            className="bg-white shadow-md rounded-2xl p-5 flex flex-col items-center 
                                       hover:scale-105 transition"
                        >
                            <img
                                src={p.images[0]}
                                alt={p.name}
                                className="h-40 w-auto object-contain mb-4"
                            />

                            <h3 className="font-semibold text-lg text-gray-900">{p.name}</h3>
                            <p className="text-gray-600">{p.price}</p>

                            <Link
                                to={`/productdetails/${p.id}`}
                                className="bg-red-600 text-white px-6 py-2 rounded-full mt-4 text-sm"
                            >
                                View Details
                            </Link>
                        </div>
                    ))
                )}

            </div>
        </>
    )
}
