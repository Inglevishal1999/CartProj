import React from 'react'
import HeroSecton from './HeroSecton'

const PageOne = () => {
  return (
    <>
      <div className='w-full h-20 border rounded-lg shadow-lg'>
        <div className='flex w-full justify-between items-center p-4'>
            <div className='text-4xl w-[50%] text-zinc-400 font-extrabold'>Battle Ground A-20</div>
            <div className='text-lg font-bold p-2'>
                <ul className='flex w-[100%] gap-20 text-slate-500'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact US</li>
                </ul>
            </div>
        </div>
        <div>
            <HeroSecton/>
        </div>
      </div>
    </>
  )
}

export default PageOne
