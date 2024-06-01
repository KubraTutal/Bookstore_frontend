import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbars = () => {
  const cartCount = useSelector(state => state.cart.value);
  const favoriteCount = useSelector(state => state.favorite.value);

  return (
    <>
      <Navbar sticky='top' className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
        <Container>
        <img
        src="../src/images/logo.jpg"
        style={{height: '50px' }}
        />
          <Navbar.Brand href="/" style={{ color: 'red' }}>Paper Cities</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Anasayfa</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Menü"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/Categories">Kategoriler</NavDropdown.Item>
              <NavDropdown.Item href="/AllBooks">Tüm Kitaplar</NavDropdown.Item>
              <NavDropdown.Item href="/PopularBooks">Popüler Kitaplar</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/about">Hakkımızda</Nav.Link>
            <Nav.Link href="/login">Giriş Yap</Nav.Link>
            <Nav.Link href="/signup">Kaydol</Nav.Link>
            {/* Sepet ikonu ve ürün sayısı */}
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart /> Sepetim{' '}
              <span className="cart-count">{cartCount}</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/favorite">
              <FaHeart/> favorilerim{' '}
              <span className="cart-count">{favoriteCount}</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{ marginTop: '80px' }}></div>
    </>
  );
};

export default Navbars;
