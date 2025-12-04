import React from 'react'
import { Link } from 'react-router-dom'

export default function Navv() {
  return (
    <div className=' fixed w-full'>
      <div className='w-full h-15 bg-gray-700 text-white flex items-center justify-between px-40'>
        <div className='font-bold text-3xl'>
            <span className='text-red-600'>S</span>hop <span className='text-red-600'>M</span>e <i className="ri-shopping-bag-line text-3xl text-red-600"></i>
        </div>
        <div className='flex gap-5 text-lg'>
            <Link to={'/Procate'}><span><span className='text-red-600'>C</span>ategories</span></Link>
            <Link to={'/Allpro'}> <span><span className='text-red-600'>P</span>roducts</span></Link>
            <Link to={'/Cart'}><span><span className='text-red-600'>C</span>art</span></Link>
        </div>
      </div>
    </div>
  )
}
