import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <h2>🛒 購物車</h2>

      {cartItems.length === 0 ? (
        <p>您的購物車是空的。</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map(car => (
              <li key={car.id} className="cart-item">
                <div>
                  <strong>{car.brand} {car.model}</strong><br />
                  年份：{car.year}｜價格：HK${car.price.toLocaleString()}
                </div>
                <button onClick={() => removeFromCart(car.id)} className="remove-btn">移除</button>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <p><strong>總金額：</strong>HK${totalPrice.toLocaleString()}</p>
            <button onClick={clearCart} className="clear-btn">清空購物車</button>
            <button className="checkout-btn" onClick={() => navigate('/checkout')}>
              前往結帳
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

