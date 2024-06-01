// App.jsx

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import Navbars from './components/Navbar';
import LoginSignUp from './pages/login/LoginSignUp';
import SignUp from './pages/signup/SignUp';
import Categories from './pages/categories/Categories';
import Books from './pages/books/Books';
import AllBooks from './pages/books/AllBooks';
import BooksDetail from './pages/books/BooksDetail';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Cart from './pages/cart/Cart';
import Favorite from './pages/favorite/Favorite';
import axios from 'axios';
import Payment from './pages/payment/Payment';
import PopularBooks from './pages/books/PopularBooks';
import BookCarousel from './components/BookCarousel';
import BookCarousel2 from './components/BookCarousel2';


const App = () => {
  axios.defaults.baseURL = 'http://localhost:5555'
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path='/Login' element={<LoginSignUp />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Categories' element={<Categories />} />
          <Route path='/AllBooks' element={<AllBooks />} />
          <Route path="/kitaplar/:categoryID" element={<Books />} />
          <Route path="/AllBooks/:id" element={<BooksDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/PopularBooks' element={<PopularBooks />} />
          <Route path='/BookCarousel' element={<BookCarousel />} />
          <Route path='/BookCarousel2' element={<BookCarousel2 />} />
         
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
