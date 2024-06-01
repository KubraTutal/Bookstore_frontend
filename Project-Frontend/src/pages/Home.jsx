import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from '../components/BookList';
import BookCarousel2 from '../components/BookCarousel2';


const Home = () => {

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    try {
      const response = await axios.get('/books/getAllbooks');
      const firstFiveBooks = response.data.slice(0, 10);
      setBookList(firstFiveBooks);
    } catch (error) {
      console.error('Kitaplar alınırken hata oluştu:', error);
    }
  };
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await axios.get('/books/getAllbooks');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <>
      <div>
        <div className='text-center'>
          <BookCarousel2 books={bookList} />
        </div>
      </div>
      <br />
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {books.map((book) => (
            <BookList key={book._id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
