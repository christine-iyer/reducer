import React from 'react';

const shoppingCart = [
  {
    id: 1,
    product: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    qty: 1,
    price: 109.95,
  },
  {
    id: 2,
    product: 'Mens Casual Premium Slim Fit T-Shirts ',
    qty: 1,
    price: 22.3,
  },
  {
    id: 3,
    product: 'Mens Cotton Jacket',
    qty: 2,
    price: 55.99,
  },
  {
    id: 4,
    product: 'Mens Casual Slim Fit',
    qty: 1,
    price: 15.99,
  },
];
export default function App() {
  const [item, setItem] = useState({
    id: 0,
    product: '',
    qty: 0,
    price: 0
  })
  
  let total = shoppingCart.reduce((a, b) => {
    return a + (b.qty * b.price)/shoppingCart.length;
  }, 0);
  return (
    <div className="container text-center mt-3">
      <h1>Shopping Cart</h1>
      <h5>Average: ${total.toFixed(2)}</h5>
      <button className="btn btn-primary mt-3">Checkout</button>
    </div>
  );
}