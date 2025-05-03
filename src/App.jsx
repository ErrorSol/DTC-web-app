import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './pages/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TicketBooking from './pages/TicketBooking';
import Account from './pages/Account';
import PaymentGateway from './pages/PaymentGateway';
import LiveTracking from './pages/LiveTracking';
import RoutesPage from './pages/Routes';
import LandingPage from './pages/LandingPage';
import CardPayment from './pages/CardPayment';
import NetBanking from './pages/NetBanking';
import UPIPayment from './pages/UPIPayment';
import QRPayment from './pages/QRPayment';
import PayLater from './pages/PayLater';
import CashPayment from './pages/CashPayment';

function AppContent() {
  const location = useLocation();
  
  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ticket-booking" element={<TicketBooking />} />
        <Route path="/account" element={<Account />} />
        <Route path="/payment" element={<PaymentGateway />} />
        <Route path="/live-tracking" element={<LiveTracking />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/card-payment" element={<CardPayment />} />
        <Route path="/net-banking" element={<NetBanking />} />
        <Route path="/upi-payment" element={<UPIPayment />} />
        <Route path="/qr-payment" element={<QRPayment />} />
        <Route path="/pay-later" element={<PayLater />} />
        <Route path="/cash-payment" element={<CashPayment />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
