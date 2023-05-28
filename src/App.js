import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/sign-up/sign-up';
import SignIn from './pages/sign-in/sign-in';
import MyProfile from './pages/sign-in/sub-pages/my-profile/my-profile';
import Settings from './pages/sign-in/sub-pages/settings/settings';
import ForgotPassword from './pages/forgot-password-page/forgot-password';
import EmailSent from './pages/email-sent-page/email-sent';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/email-sent" element={<EmailSent/>} />
          <Route path="/my-profile" element={<MyProfile/>} />
          <Route path="/my-settings" element={<Settings/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
