import React from 'react'
import { useCard } from '../context/CartContext'
import { NavLink } from 'react-router-dom';

function AddCardBag({ product , quantity }) {

  const { AddToCard } = useCard();

  const { product_id } = product[0]
  
  return (
    <NavLink to='/cart' className='h-[50px] w-full' onClick={() => AddToCard(product_id , quantity , product)}>
      <button type="submit" class=" px-[10px] flex h-[50px] w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 mr-[10px] text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
    </NavLink>
  )
}

export default AddCardBag