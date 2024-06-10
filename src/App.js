import React, { useState } from 'react';
import './App.css';
import CartItem from './components/CartItem';

const data = [
    {"category": "Sativa", "price": "$1", "stocked": true, "name": "Apple Fritter"},
    {"category": "Sativa", "price": "$1", "stocked": true, "name": "Dragonfruit Sorbetto"},
    {"category": "Sativa", "price": "$2", "stocked": false, "name": "Passionfruit"},
    {"category": "Indica", "price": "$2", "stocked": true, "name": "GG"},
    {"category": "Indica", "price": "$4", "stocked": false, "name": "Turkish Delight"},
    {"category": "Indica", "price": "$1", "stocked": true, "name": "Pomegranite Purple"},
    {"category": "Hybrid", "price": "$3", "stocked": true, "name": "Southeast Breeze"},
    {"category": "Hybrid", "price": "$4", "stocked": true, "name": "Noreaster"},
    {"category": "Hybrid", "price": "$5", "stocked": true, "name": "Salt n Pepper"}
];

function calculateAveragePrice(products) {
    const total = products.reduce((acc, product) => {
        return acc + parseFloat(product.price.replace('$', ''));
    }, 0);
    return (total / products.length).toFixed(2);
}

function calculateTotalPrice(cart) {
    const total = cart.reduce((acc, item) => {
        return acc + parseFloat(item.price.replace('$', ''));
    }, 0);
    return total.toFixed(2);
}

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const averagePrice = calculateAveragePrice(data);
    const totalPrice = calculateTotalPrice(cart);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Average Price Calculator</h1>
                <p>The average price of the products is: ${averagePrice}</p>
                <h2>Product List</h2>
                <ul>
                    {data.map((product, index) => (
                        <li key={index}>
                            {product.name} - {product.price} 
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </li>
                    ))}
                </ul>
                <h2>Cart</h2>
                <ul>
                    {cart.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))}
                </ul>
                <p>Total Price: ${totalPrice}</p>
            </header>
        </div>
    );
}

export default App;
