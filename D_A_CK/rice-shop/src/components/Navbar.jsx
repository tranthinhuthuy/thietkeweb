import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Bán Cơm</h2>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Trang chủ</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Giỏ hàng</Link>
          <Link to="/checkout" onClick={() => setMenuOpen(false)}>Thanh toán</Link>
          <Link to="/history" onClick={() => setMenuOpen(false)}>Lịch sử đơn hàng</Link>
          <button className="auth-button" onClick={() => {
            setShowAuthModal(true);
            setMenuOpen(false);
          }}>
            Đăng nhập / Đăng ký
          </button>
        </div>
      </nav>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
};

export default Navbar;