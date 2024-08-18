import React from 'react'

const SidebarLibrary = ({heading,text,button}) => {
  return (
    <div className='bg-white/5 text-white flex flex-col gap-2  px-5 py-4 rounded-lg my-3'>
        <h3 className='font-bold'>{heading}</h3>
        <p className='font-semibold text-sm'>{text}</p>
        <button className='bg-white rounded-full w-fit text-black font-semibold text-[14px] py-[6px] px-5 mt-3'>{button}</button>
    </div>
  )
}

export default SidebarLibrary