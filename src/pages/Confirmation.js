import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Confirmation.css';

function Confirmation() {
  const location = useLocation();
  const { formData, totalPrice } = location.state || {};

  if (!formData) {
    return (
      <div className="confirmation-page">
        <h2>沒有訂單資料</h2>
        <Link to="/">返回首頁</Link>
      </div>
    );
  }

  return (
    <div className="confirmation-page">
      <h2>🎉 感謝您的訂購！</h2>
      <p>我們已收到您的訂單，以下是您的資料：</p>

      <ul>
        <li><strong>姓名：</strong> {formData.name}</li>
        <li><strong>電子郵件：</strong> {formData.email}</li>
        <li><strong>聯絡電話：</strong> {formData.phone}</li>
        {formData.address && <li><strong>地址：</strong> {formData.address}</li>}
        <li><strong>總金額：</strong> HK${totalPrice.toLocaleString()}</li>
      </ul>

      <Link to="/" className="home-link">返回首頁</Link>
    </div>
  );
}

export default Confirmation;
