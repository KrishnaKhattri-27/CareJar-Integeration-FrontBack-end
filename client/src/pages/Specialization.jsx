import React from 'react'
import List from '../components/specialization/List'

const Specialization = () => {
  return (
    <div className='flex md:h-screen items-center'>
       <div className='lg:w-[75%] my-5 lg:my-0  mx-5 lg:mx-auto bg-white px-[20px] py-[50px] rounded-md'>
       <div className='mb-5 '>
            <h1 className='text-2xl font-bold'>Book an appointment for an in-clinic consultation</h1>
            <h4 className='text-lg'>Find experienced doctors across all specialties</h4>
        </div>
            <List/>
       </div>
    </div>
  )
}

export default Specialization
