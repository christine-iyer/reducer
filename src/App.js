import { useState } from "react";
import CreateShoppingItem from "./components/CreateShoppingItem";

export default function App(){
  const [item, setItem] = useState({
    product: '',
    qty: 0,
    price: 0,
  })
  const [items, setItems] = useState([
    {id: 1, product: "Milk", qty: 1, price: 1.99},
    {id: 2, product: "Bread", qty: 2, price: 2.99},
    {id: 3, product: "Cheese", qty: 3, price: 3.99},
    {id: 4, product: "Eggs", qty: 4, price: 4.99},
    {id: 5, product: "Butter", qty: 5, price: 5.99},
    {id: 6, product: "Sugar", qty: 6, price: 6.99},
    {id: 7, product: "Coffee", qty: 7, price: 7.99},
  ])

  const createItem = (e) => {
    e.preventDefault()
    setItems([...items, item])
    setItem({
      product: e.target.value,
      qty: 0,
      price: 0,
    })

  }
const total = items.reduce((total, item)=> {
  return total + item.price * item.qty
})

  const handleChange = (e) => {
    setItem({...item, [e.target.name]: e.target.value})
  }

  

return(
  <>
  <CreateShoppingItem/>
  </>
)
}