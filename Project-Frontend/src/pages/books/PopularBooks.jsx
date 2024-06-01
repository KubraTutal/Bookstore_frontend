import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCarousel from '../../components/BookCarousel';

const PopularBooks = () => {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        try {
            const response = await axios.get('/books/getAllbooks');
            const firstFiveBooks = response.data.slice(0, 10);
            setBookList(firstFiveBooks);
        } catch (error) {
            console.error('Kitaplar alınırken hata oluştu:', error);
        }
    };

    return (
        <div className='text-center'>
            <h4 className="mb-4" style={{ color: '#696969',fontSize:25,textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}> ~~POPÜLER KİTAPLAR~~ </h4>
            <BookCarousel books={bookList} />
        </div>
    );
};

export default PopularBooks;
