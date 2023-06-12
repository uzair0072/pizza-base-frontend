import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/sign-up/sign-up';
import SignIn from './pages/sign-in/sign-in';
import MyProfile from './pages/sign-in/sub-pages/my-profile/my-profile';
import Settings from './pages/sign-in/sub-pages/settings/settings';
import ForgotPassword from './pages/forgot-password-page/forgot-password';
import EmailSent from './pages/email-sent-page/email-sent';
import DeleteAccount from './pages/sign-in/sub-pages/delete-account/delete-account';
import HomePage from './pages/homepage/homepage';
import SmallPizzaDeal from './pages/item-description/small-pizza-deal/small-pizza-deal';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/email-sent" element={<EmailSent/>} />
          <Route path="/my-profile" element={<MyProfile/>} />
          <Route path="/my-settings" element={<Settings/>} />
          <Route path="/delete-account" element={<DeleteAccount/>} />
          <Route path="/small-pizza-deal" element={<SmallPizzaDeal/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
