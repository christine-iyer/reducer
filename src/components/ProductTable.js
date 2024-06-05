import React from 'react'

export default function ProductTable({filterText, inStockOnly}) {
     const products = [
          { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
          { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
          { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
          { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
          { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
          { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
     ];
     return (
          <div>             
                <h3>Product Table</h3>
               <ul>
                    { 
         
                    products.map(product => (
                         <li key={product.name}>
                              {product.name} {product.price} {product.category} 
                         </li>
                    ))
                 
                    }
               </ul>
 

          </div>
     )
}
