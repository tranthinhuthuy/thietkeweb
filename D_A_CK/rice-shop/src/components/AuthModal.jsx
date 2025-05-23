import React, { useState } from 'react';

export default function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button onClick={onClose} className="modal-close">×</button>
        <h2>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h2>
        <input type="email" placeholder="Email" className="modal-input" />
        <input type="password" placeholder="Mật khẩu" className="modal-input" />
        <button className="modal-button">
          {isLogin ? 'Đăng nhập' : 'Đăng ký'}
        </button>
        <p onClick={() => setIsLogin(!isLogin)} className="modal-toggle">
          {isLogin ? 'Chưa có tài khoản? Đăng ký' : 'Đã có tài khoản? Đăng nhập'}
        </p>
      </div>
    </div>
  );
}