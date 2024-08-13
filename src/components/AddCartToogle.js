import React from 'react'

function AddCartToogle( {amount , setIncreased , setDecreased}) {
  return (
    <div className='flex' >
        <button onClick={() => setDecreased()} >-</button>
        <div>{amount}</div>
        <button onClick={() => setIncreased()}>+</button>
    </div>
  )
}

export default AddCartToogle