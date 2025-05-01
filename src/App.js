// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import CheckoutPage from './pages/CheckoutPage';
import NaviBar from './components/NaviBar';
import ConfirmationPage from './pages/ConfirmationPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import bgImage from './images/bg.jpg';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <CartProvider>
        <UserProvider>
          <ToastContainer />
          <Router>
            <NaviBar />
            <main style={{ flex: 1, padding: '20px' }}>
              <div className="content-container">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/order-confirmation" element={<ConfirmationPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                </Routes>
              </div>
            </main>
            <Footer />
          </Router>
        </UserProvider>
      </CartProvider>
    </div>
  );
}

export default App;
