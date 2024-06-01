// Books.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CardGroup } from 'react-bootstrap';
import CategoriesBooks from '../../components/CategoriesBooks';

const Books = () => {
  const { categoryID } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooksByCategory();
  }, [categoryID]);

  const getBooksByCategory = async () => {
    try {
      console.log('categoryID:', categoryID);

      if (categoryID) {
        const response = await axios.get(`/books/getBooksByCategory/${categoryID}`);
        console.log('API Response:', response.data); 
        setBooks(response.data);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

 
  useEffect(() => {
    console.log('Current state:', books);
  }, [books]);

  return (
    <CardGroup className="container mt-4">
    {books.map((book) => (
      <CategoriesBooks key={book._id} book={book} />
    ))}
  </CardGroup>
  );
};

export default Books;
