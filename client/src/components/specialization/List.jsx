import React from 'react'
import Data from "./Data"
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div className='flex md:flex-row flex-col gap-x-4'>
      {Data.map((item)=>(
        <Link to={item.route} className='flex lg:w-[33%] flex-col gap-y-2 cursor-pointer hover:scale-105 mb-5 lg:mb-0'>
            <div className='h-[75%] rounded-xl '>
                <img src={item.img} alt="" className='w-full h-full rounded-xl' />
            </div>
            <div className='h-[25%]'>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-sm leading-4'>{item.description}</p>
            </div>
        </Link>
      ))}
    </div>
  )
}

export default List
