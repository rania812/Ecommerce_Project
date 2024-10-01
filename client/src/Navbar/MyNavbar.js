import React, { useState } from 'react';
import { Navbar, Container, Nav, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from './logo.png';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import CheckProd from '../ProduitAuPanier/CheckProd'; // Import the CheckProd component
import { popularProducts } from '../component/data';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const MyNavbar = () => {
  const [open, setOpen] = useState(false); // Local state to track cart state
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const cartItems = useSelector(state => state.cart.cart);
  const cartItemCount = cartItems.length;

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const renderUserDropdown = () => {
    return (
      <Dropdown.Menu>
        <Link to="/login">
          <Dropdown.Item onClick={handleSignIn}>Sign In</Dropdown.Item>
        </Link>
        <Link to="/signup">
          <Dropdown.Item onClick={handleSignUp}>Sign Up</Dropdown.Item>
        </Link>
        {/* Super Admin dropdown */}
        <Dropdown.Divider />
        <Dropdown.Item as="button">Super Admin</Dropdown.Item>

      </Dropdown.Menu>
    );
  };

  const filteredProduct = popularProducts.find(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <div onClick={() => setOpen(!open)}> {/* Toggle open state on click */}
                  <FaShoppingCart />
                </div>
                {cartItemCount > 0 && <div className="cart-items">{cartItemCount}</div>}
              </Nav.Link>
              <Nav.Link href="#link">
                <Dropdown show={userMenuOpen} onToggle={toggleUserMenu}>
                  <Dropdown.Toggle as={FaUser} id="dropdown-basic" />
                  {renderUserDropdown()}
                </Dropdown>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
 
      </Navbar>
      {/* Show the CheckProd component if open is true */}
      {open && <CheckProd />}
      {searchTerm.length > 0 && filteredProduct && (
        <div>
          <img src={filteredProduct.img} alt={filteredProduct.name} style={{ width: "200px" }} />
          <h1>{filteredProduct.name}</h1>
        </div>
      )}
    </div>
  );
}

export default MyNavbar;
