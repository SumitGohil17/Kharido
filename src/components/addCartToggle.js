import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";

function addCartToggle({increase, decrease, quantity }) {
    // const decrease = (e) => {
    //     e.preventDefault();
    //     setQauntity(decreaseValue => (decreaseValue > 1 ? decreaseValue - 1 : 1))
    //   }
    
    //   const increase = (e) => {
    //     e.preventDefault();
    //     setQauntity(increaseValue => (increaseValue < stock ? increaseValue + 1 : stock))
    //   }
    return (
        <div className='flex'>
            <button onClick={() => decrease()} className=' mr-[5px]'>
                <FaMinus />
            </button>
            <h4 className='text-gray-600'>{quantity}</h4>
            <button onClick={() => increase()} className='ml-[5px]'>
                <FaPlus/>
            </button>
        </div>
    )
}

export default addCartToggle