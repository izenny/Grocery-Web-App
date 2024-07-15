import React from 'react'

const Product = () => {
  return (
    <div className="m-2 flex justify-around ">
      <div className="m-6 relative">
        <div className="w-[300px] h-[180px] border-2 border-black"></div>
        <div className="absolute w-[150px] h-[150px] border-2 border-black top-[50px] left-[180px]"></div>
      </div>
      <div className="m-6 relative">
        <div className="w-[300px] h-[180px] border-2 border-black"></div>
        <div className="absolute w-[150px] h-[150px] border-2 border-black top-[50px] left-[180px]"></div>
      </div>
      <div className="m-6 relative">
        <div className="w-[300px] h-[180px] border-2 border-black"></div>
        <div className="absolute w-[150px] h-[150px] border-2 border-black top-[50px] left-[180px]"></div>
      </div>
    </div>
  )
}

export default Product