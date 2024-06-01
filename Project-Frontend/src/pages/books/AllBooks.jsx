import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from '../../components/BookList';
import { useDispatch } from 'react-redux';

const AllBooks = () => {
  const [bookList, setBookList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getBooks();
    getValueCart();
  }, []);

  const getValueCart = async () => {
    try {
      let value = await axios.get('cart/cartNumber').then(res => res.data.number)
      dispatch(handleValue(value))
    } catch (error) {
      console.log('Get Cart Value Error', error)
    }
  }

  const getBooks = async () => {
    try {
      const response = await axios.get('/books/getAllbooks');
      setBookList(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {bookList.map((book) => (
        <BookList key={book._id} book={book} />
      ))}
    </div>
  );
}

export default AllBooks;