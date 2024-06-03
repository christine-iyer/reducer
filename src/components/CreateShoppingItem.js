import React from 'react'

export default function CreateShoppingItem({item, addItem, handleChange}) {
  return (
    <div>CreateShoppingItem
     <input type="text" placeholder="Create" value={item.product} />

     <input className="number" type="number" placeholder="Quantity" value={item.qty} onChange={handleChange} />
     <input type="number" placeholder="Price" value={item.price} onChange={handleChange} />
     <button className="button" type='submit' onClick={addItem} onChange={handleChange} />
    </div>
  )
}
