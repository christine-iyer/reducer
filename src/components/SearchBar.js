import React from 'react'

export default function SearchBar({ filterText, onFilterTextChange, inStockOnly, setInStockOnly}) {
     return (
          <div>
               <form>
                    <input
                         type="text"
                         value={filterText} placeholder="Search..."
                         onChange={(e) => onFilterTextChange(e.target.value)} />
                    <button className="button" type='submit'>Search</button>
                    <label>
                         <input
                              type="checkbox"
                              checked={inStockOnly}
                              onChange={(e) => setInStockOnly(e.target.checked)} />
                              {' ' + filterText}
                         
                         Only show products in stock
                    </label>
               </form>
          </div>
     )
}
