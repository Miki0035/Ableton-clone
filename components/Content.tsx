import React from 'react'
const Content = ({ mainText , subText}: { mainText: string, subText: string }) => {
  return (
    <div className='flex flex-col flex-wrap items-center my-20'>
      <h5 className=' text-left text-xl w-1/2 max-[800px]:text-lg  max-[700px]:w-3/4  max-[700px]:text-sm   mb-5 leading-loose font-bold'>
      {mainText}
      </h5>
      <p className='text-left text-md w-1/2 max-[800px]:text-sm  max-[700px]:w-3/4  max-[700px]:text-xs  mb-10 font-light'>
      {subText}
      </p>
    </div>
  )
}

export default Content