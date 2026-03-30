import React from 'react'

const Card = ({ item }) => {
  console.log(item)
  const { number, image, title, description } = item;
  return (
    <div className='bg-white rounded-lg flex flex-col justify-center items-center my-3 p-3 text-center relative'>
      <div className='bg-linear-to-r from-[#4F39F6] to-[#8839f6] w-8 h-8 flex items-center justify-center text-white absolute rounded-full top-3 right-3'>
        <p>{number}</p>
      </div>
      <div className='bg-blue-50 mt-14 p-2 rounded-full'>
        <img className='w-10 ' src={image} alt="image" />
      </div>
      <h1 className='text-lg font-medium mt-3'>{title}</h1>
      <p className='text-sm text-gray-400 my-3'>{description}</p>
    </div>
  )
}

export default Card