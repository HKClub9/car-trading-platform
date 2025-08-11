import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = '請輸入姓名';
    if (!formData.email.trim()) {
      newErrors.email = '請輸入電子郵件';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '電子郵件格式不正確';
    }
    if (!formData.message.trim()) newErrors.message = '請輸入留言內容';
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        new Audio('/success.mp3').play(); // Play sound
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setTimeout(() => setIsSuccess(false), 3000); // Hide success after 3s
      }, 1500); // Simulate network delay
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="contact-page">
      <h2>聯絡我們</h2>
      <p>如有任何問題或建議，歡迎透過以下表單與我們聯繫。</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          姓名：
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          電子郵件：
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          留言內容：
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>

        <button type="submit">送出</button>

        {isSubmitting && (
            <div className="loading-icon">
              <i className="fas fa-circle-notch fa-spin fa-2x" style={{ color: '#FFD700' }}></i>
            </div>
        )}

        {isSuccess && <div className="success-message">✅ 已成功送出！</div>}

      </form>

      <div className="contact-info">
        <h3>聯絡資訊</h3>
        <p>地址：香港北區成功街88號</p>
        <p>電話：+852 1234 5678</p>
        <p>電子郵件：info@successcars.hk</p>
      </div>
    </div>
  );
}

export default Contact;

