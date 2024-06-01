// Cart.js
import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { handleValue } from '../../store/features/cartSlice';

const Cart = () => {

  const cart = useSelector(state => state.cart.value)
  const dispatch = useDispatch();

  const [books, setBooks] = useState([])
  const [isChanged, setIsChanged] = useState(false)


  useEffect(() => {
    if (cart > 0) {
      getCartValue()
    }
  }, [])

  useEffect(() => {
    return () => {
      isChanged ? handleLeftCart() : null
    }
  }, [isChanged])

  const handleLeftCart = async () => {
    try {
      console.log('worked')
      let response = await axios.post('/cart/updateCart', books)
      console.log(response.data)
    } catch (error) {
      console.log('Cart Update Error', error)
    }
  }


  const getCartValue = async () => {
    const books = await axios.get('/cart/getAll')
    setBooks(books.data.carts)
  }

  const deleteAllCart = async () => {
    const response = await axios.get('/cart/deleteAll')
    if (response.data.status) {
      toast.success('Sepet Temizlendi')
    }
    setBooks([])
    dispatch(handleValue(0))
  }

  const handleQuantity = (book, type) => {
    const updatedBooks = books.map((element) => {
      if (element._id === book._id) {
        if (type === 'plus') {
          return { ...element, quantity: element.quantity + 1 };
        } else if (type === 'minus' && element.quantity > 1) {
          return { ...element, quantity: element.quantity - 1 };
        }
      }
      return element;
    });
  
    setBooks(updatedBooks);
    setIsChanged(true);
  };



const cartItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px', // Kartlar arasındaki boşluğu artırdım
};

const cartItemDetailsStyle = {
  flex: 1,
};

const cartItemImageContainerStyle = {
  flex: '0 0 30%',
  maxWidth: '100px', // Görsel genişliğini sınırladım, istediğiniz değeri ayarlayabilirsiniz
  marginRight: '10px', // Görsel ile kart arasındaki boşluğu artırdım
};

const cartItemImageStyle = {
  width: '100%',
  height: 'auto',
};

return (
  <div>
    <h2>Sepetim</h2>
    {books.map(book => (
      <div key={book._id} style={cartItemStyle}>
        <div style={cartItemDetailsStyle}>
          <div style={{ width: '100%' }}>
            <p>{book.name}</p>
            <p>Fiyat: {book.price * book.quantity} TL</p>
            <p>Miktar: {book.quantity}</p>
            <div>
              <Button className='btn btn-warning' onClick={() => handleQuantity(book, 'plus')}>Ekle(+)</Button>
              <Button className='btn btn-warning' onClick={() => handleQuantity(book, 'minus')} disabled={book.quantity === 1 ? true : false}>Azalt(-)</Button>
            </div>
          </div>
        </div>
        <div style={cartItemImageContainerStyle}>
          <img src={book.img} alt={book.name} style={cartItemImageStyle} />
        </div>
        <hr />
      </div>
    ))}
    <div>
      <p>Toplam: {calculateTotal(books)} TL</p>
      <Button className='btn btn-warning' onClick={deleteAllCart}>Sepeti Temizle</Button>
      <Link to={'/payment'} className="btn btn-warning">
        ödeme yap
      </Link>
    </div>
  </div>
);
};

const calculateTotal = (books) => {
  return books.reduce((total, book) => total + (book.price * book.quantity), 0);
};

export default Cart;
