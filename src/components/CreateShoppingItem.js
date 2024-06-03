import React from 'react'

export default function CreateShoppingItem({item, addItem, handleChange}) {
  return (
    <div>CreateShoppingItem
     <input type="text" placeholder="Create" value={item.product} />

     <input type="text" placeholder="Quantity" value={item.qty} onChange={handleChange} />
     <input type="text" placeholder="Price" value={item.price} onChange={handleChange} />
     <button type='submit' onClick={addItem} onChange={handleChange} />
    </div>
  )
}
