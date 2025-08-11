import React, { useState } from 'react';
import './Sell.css';

function Sell() {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    price: '',
    contact: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.brand.trim()) newErrors.brand = '請輸入品牌';
    if (!formData.model.trim()) newErrors.model = '請輸入車型';
    if (!formData.year.trim() || isNaN(formData.year)) newErrors.year = '請輸入有效年份';
    if (!formData.price.trim() || isNaN(formData.price)) newErrors.price = '請輸入有效價格';
    if (!formData.contact.trim()) newErrors.contact = '請輸入聯絡方式';
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      setFormData({
        brand: '',
        model: '',
        year: '',
        price: '',
        contact: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="sell-page">
      <h2>我要賣車</h2>
      <p>請填寫以下表單，我們將儘快與您聯繫。</p>

      {submitted && <div className="success-message">您的車輛資訊已送出，感謝您！</div>}

      <form className="sell-form" onSubmit={handleSubmit}>
        <label>
          品牌：
          <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
          {errors.brand && <span className="error">{errors.brand}</span>}
        </label>

        <label>
          車型：
          <input type="text" name="model" value={formData.model} onChange={handleChange} />
          {errors.model && <span className="error">{errors.model}</span>}
        </label>

        <label>
          年份：
          <input type="number" name="year" value={formData.year} onChange={handleChange} />
          {errors.year && <span className="error">{errors.year}</span>}
        </label>

        <label>
          預期售價 (HK$)：
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
          {errors.price && <span className="error">{errors.price}</span>}
        </label>

        <label>
          聯絡方式：
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
          {errors.contact && <span className="error">{errors.contact}</span>}
        </label>

        <button type="submit">送出</button>
      </form>
    </div>
  );
}

export default Sell;
