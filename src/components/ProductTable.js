import React from 'react'
import products from'./data.json'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default function ProductTable({ products,filterText, inStockOnly}) {
     const rows= []
     const lastCategory = null
     const products = require('./data.json)
     products.forEach((product)=> {
          if(product.name.toLowerCase().indexOf(
               filterText.toLowerCase()
           ) === -1
          ){
               return;
          }
     if(inStockOnly && !product.stocked)
     {
          return;
     }
     if(product.category!== lastCategory){
          rows.push(
               <ProductCategoryRow
               category={product.category}
               key={product.category}/>
          )
     }
     rows.push(
          <ProductRow
          product={product}
          key={product.name}/>
     )
     lastCategory = product.category
})
     

     return (
          <div>    
               <table>
                    <thead>
                         <tr>
                              <th>Name</th>
                              <th>Price</th>
                         </tr>
                    </thead>
                    <tbody>
                         {rows}
                    </tbody>
               </table>         
                
 

          </div>
     )
}
