import React from 'react'

const PageOne = () => {
  return (
    <>
      <div className='w-full h-20 border rounded-lg shadow-lg'>
        <div className='flex w-full justify-between items-center p-4'>
            <div className='text-lg font-bold w-[50%]'>Page One</div>
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
            
        </div>
      </div>
    </>
  )
}

export default PageOne
