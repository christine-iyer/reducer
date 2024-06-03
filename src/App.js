import {useState} from 'react';
import './components/CreateShoppingItem'
import CreateShoppingItem from './components/CreateShoppingItem';


export default function App() {
  const [item, setItem] = useState({
    id: 0,
    product: '',
    qty: 0,
    price: 0
  })
  const [shoppingCart, setShoppingCart] = useState([
    {
      id: 1,
      product: 'Green Jacket',
      qty: 1,
      price: 109.95,
    },
    {
      id: 2,
      product: 'Green Pants ',
      qty: 1,
      price: 22.3,
    },
    {
      id: 3,
      product: 'White Shoes',
      qty: 2,
      price: 55.99,
    },
    {
      id: 4,
      product: 'T-Shirt',
      qty: 1,
      price: 15.99,
    },
    {
      id: 5,
      product: 'White Belt',
      qty: 4,
      price: 22.06,
    }, {
    id: 6, 
    product: 'White Bag',
    qty: 1,
    price: 139.99,}
  
  ])

  const addItem = (e) => {
    const newItem = { text: e.target.value, id: shoppingCart.length-1, completed: false }
    setShoppingCart([newItem, ...shoppingCart])
    e.target.value = ''
}

  let total = shoppingCart.reduce((a, b) => {
    return a + (b.qty * b.price)/shoppingCart.length;
  }, 0);
  return (
    <div className="container text-center mt-3">
   <>
   <CreateShoppingItem item={item} setItem={setItem}/>
   </>
      <h1>Shopping Cart</h1>
      <h5>Average: ${total.toFixed(2)}</h5>
      <button className="btn btn-primary mt-3">Checkout</button>
    </div>
  );
}