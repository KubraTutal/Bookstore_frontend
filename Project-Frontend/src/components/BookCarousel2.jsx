import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookCarousel = ({ books }) => {
    return (
        <div style={{ backgroundColor: '#f8f8ff' }}>
             <style>
                {`
                .carousel-control-prev-icon,
                .carousel-control-next-icon {
                  filter: invert(1);
                }
                `}
            </style>
            <Carousel>
                {books.map((book) => (
                    <Carousel.Item key={book._id}>
                        <div style={{ textAlign: 'center' }}>
                        <Link to={`/AllBooks/${book._id}`}>
                            <img
                                className="d-block"
                                src={book.img}
                                alt={book.name}
                                style={{ maxHeight: '250px', maxWidth: '200px', objectFit: 'cover', margin: '0 auto' }}
                            />
                           </Link>
                        </div>
                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default BookCarousel;
