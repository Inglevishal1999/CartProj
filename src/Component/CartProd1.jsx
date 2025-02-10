import React from 'react'
import Dropdown from './Dropdown'

const CartProd1 = () => {
  return (
    <div>
       <div className=" flex w-full h-[950px] rounded-s-md ">
          <div className=" w-[65%]">
            <div className="flex border-t-2">
              <img
                src="/src/shopping-cart-page-01-product-01.jpg"
                alt="shirt"
                className="w-80 p-5"
              />
              <div className="flex p-3">
                <div className="w-72">
                  <div className="font-sans text-xl text-slate-500">
                    Basic Tee
                  </div>
                  <div className="text-lg font-medium">Sienna | Large</div>
                  <div className="text-lg font-medium">$32.00</div>
                </div>
                <div className="i">
                  <Dropdown />
                </div>
              </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default CartProd1
