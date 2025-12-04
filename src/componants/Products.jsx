import React from 'react'
import Productdata from '../Productdata'
import { Link, useParams } from 'react-router-dom'
import Navv from './Navv'

export default function Products() {

    let { id } = useParams()  // category comes as id from URL
    let categoryData = Productdata.find((item) => item.category === id)

    return (
        <>
        <Navv></Navv>
        <div className='h-[90dvh] w-full bg-gray-100 py-10 px-5'>
            

            <div className='grid grid-cols-4 gap-8  mx-auto'>
                {categoryData.products.map((p) => (
                    <div
                        key={p.id}
                        className='bg-white shadow-md rounded-2xl p-5 flex flex-col items-center transition hover:scale-105 hover:shadow-xl'
                    >
                        <img
                            src={p.images[0]}
                            alt={p.name}
                            className='h-40 w-auto mb-4'
                        />

                        <h3 className='font-semibold text-lg text-gray-900'>{p.name}</h3>

                        <Link
                            to={`/productdetails/${p.id}`}
                            className='bg-red-600 text-white px-6 py-2 rounded-full mt-4 text-sm font-medium hover:bg-red-700'
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

