// src/pages/Checkout.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Checkout.css';

function Checkout() {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert('請填寫所有必填欄位');
      return;
    }

    clearCart();
    navigate('/confirmation', {
      state: {
        formData,
        totalPrice
      }
    });
  };

  return (
    <div className="checkout-page">
      <h2>結帳</h2>

      {cartItems.length === 0 ? (
        <p>您的購物車是空的。</p>
      ) : (
        <>
          <ul className="checkout-list">
            {cartItems.map(car => (
              <li key={car.id}>
                {car.brand} {car.model} - HK${car.price.toLocaleString()}
              </li>
            ))}
          </ul>

          <p><strong>總金額：</strong>HK${totalPrice.toLocaleString()}</p>

          <p>請填寫您的聯絡資料：</p>
          <form className="checkout-form" onSubmit={handleSubmit}>
            <label>
              姓名：
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>

            <label>
              電子郵件：
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>

            <label>
              聯絡電話：
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>

            <label>
              地址（選填）：
              <textarea name="address" value={formData.address} onChange={handleChange} />
            </label>

            <button type="submit">提交訂單</button>
          </form> 
        </>
      )}
    </div>
  );
}

export default Checkout;

