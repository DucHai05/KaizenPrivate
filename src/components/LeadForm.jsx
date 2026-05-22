import { useState } from 'react';
import { goalOptions } from '../data/siteContent.js';

const initialForm = {
  name: '',
  phone: '',
  age: '',
  goal: goalOptions[0],
};

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export default function LeadForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const submitLead = async (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus({ type: 'error', message: 'Vui lòng nhập họ tên và số điện thoại.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${apiBaseUrl}/api/consultation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parentName: formData.name,
          phone: formData.phone,
          childAge: formData.age ? Number(formData.age) : null,
          goal: formData.goal,
        }),
      });
      const contentType = response.headers.get('content-type') || '';

      if (!contentType.includes('application/json')) {
        throw new Error('Máy chủ trả về dữ liệu không hợp lệ.');
      }

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Không thể gửi đăng ký.');
      }
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Không thể gửi đăng ký. Vui lòng thử lại.' });
      setIsSubmitting(false);
      return;
    }

    setStatus({ type: 'success', message: 'Cảm ơn ba mẹ. Kaizen đã nhận thông tin và sẽ liên hệ sớm.' });
    setFormData(initialForm);
    setIsSubmitting(false);
  };

  return (
    <form className="lead-form" onSubmit={submitLead}>
      <div className="form-head">
        <span>Free Assessment</span>
        <strong>Nhận lịch đánh giá 1:1</strong>
      </div>
      {status.message && <div className={`alert ${status.type}`} role="status">{status.message}</div>}
      <label>
        Họ tên phụ huynh
        <input type="text" name="name" placeholder="Nhập họ tên" value={formData.name} onChange={updateField} required />
      </label>
      <label>
        Số điện thoại
        <input type="tel" name="phone" placeholder="Nhập số điện thoại" value={formData.phone} onChange={updateField} required />
      </label>
      <label>
        Độ tuổi của bé
        <input type="number" name="age" min="5" max="17" placeholder="Ví dụ: 10" value={formData.age} onChange={updateField} />
      </label>
      <label>
        Mục tiêu tập luyện
        <select name="goal" value={formData.goal} onChange={updateField}>
          {goalOptions.map((goal) => <option key={goal}>{goal}</option>)}
        </select>
      </label>
      <button type="submit" className="btn btn-primary full" disabled={isSubmitting}>
        {isSubmitting ? 'Đang gửi...' : 'Gửi đăng ký ngay'}
      </button>
    </form>
  );
}
