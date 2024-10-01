import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './ProduitVendre/Products';
import ProductDetail from './ProduitVendre/ProductDetail';
import MyNavbar from './Navbar/MyNavbar';
import Announcement from './component/Announcement';
import Footer from './component/Footer';
import Loogin from './LogIn/Loogin'; // Login page
import Signup from './LogIn/Signup'; // Signup page
import { Provider } from 'react-redux';
import store from './redux/store';
import CartT from './transform/CartT';
import Sllider from './SlideShow/Sllider';
import Newsletter from './component/Newsletter';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for token in localStorage when the app loads
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Announcement />
         {isAuthenticated && <MyNavbar />}
        {isAuthenticated && <Sllider />}
        {isAuthenticated && <CartT />}

        <Routes>
           <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Loogin onLoginSuccess={() => setIsAuthenticated(true)} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/signup"
            element={
              !isAuthenticated ? <Signup /> : <Navigate to="/" />
            }
          />
          
           <Route
            path="/"
            element={isAuthenticated ? <Products /> : <Navigate to="/login" />}
          />
          <Route
            path="/detail/:id"
            element={isAuthenticated ? <ProductDetail /> : <Navigate to="/login" />}
          />
        </Routes>

         {isAuthenticated && <Newsletter />}
        {isAuthenticated && <Footer />}
      </Router>
    </Provider>
  );
};

export default App;
