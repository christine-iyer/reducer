import { useState } from "react";
import SearchBar from "./components/SearchBar";
import PRODUCTS from "./components/data";
import ProductTable from "./components/ProductTable";

export default function App() {
  const products=require()
  const [filterText, setFilterText] = " ";
  const [inStockOnly, setInStockOnly] =useState(false)
  return(
    <div>
      <SearchBar 
      filterText={filterText} 
      onFilterTextChange={setFilterText} 
      inStockOnly={inStockOnly}
      />
      <ProductTable 
      filterText={filterText}
      inStockOnly={inStockOnly}
      setInStockOnly={setInStockOnly}/>
    </div>
  )
}