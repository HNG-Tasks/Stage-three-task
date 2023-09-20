import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/Login';
import Gallery from './components/Gallery';
import Signup from './components/auth/Signup';
import Footer from './common/Footer';
import PrivateRoute from './components/route/PrivateRoute';
import { auth } from './firebase';

function App() {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/gallery"
          element={<PrivateRoute element={<Gallery />} authenticated={authenticated} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;






