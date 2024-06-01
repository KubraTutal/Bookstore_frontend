import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/features/cartSlice';
import { Button } from '@mui/material';
import { addToFavorite } from '../store/features/favoriteSlice';
import { FaHeart} from 'react-icons/fa';
import axios from 'axios';



const BookList = ({ book }) => {

  const dispatch = useDispatch();


  const handleAddToCart = async () => {
    try {
      let cartObj = {
        name: book.name,
        img: book.img,
        quantity: 1,
        price: book.price,
        booksId: book._id
      }
      let response = await axios.post('/cart/addToCart', cartObj)
      if (response.data.message) {
        dispatch(addToCart(book));

      }
    } catch (error) {
      console.log('Add to Cart Error', error)
    }
  };

  const handleAddToFavorite = () => {
    (book._id = !book._id) ?
      null : dispatch(addToFavorite(book));
  };




  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  const bookquantity = (book) => {
    return (
      (book.quantity) <= 10 ? <p className="card-text" style={{ color: 'red', fontSize: 12 }}>son {book.quantity} adet</p> : null
    )
  };

  return (
    <div key={book._id} className="card" style={{ width: '350px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={book.img} className="card-img-top" alt="Book Cover" style={{ width: '180px', height: '200px', objectFit: 'cover' }} />
      <div className="card-body" style={{ width: '100%', textAlign: 'center' }}>
        <h5 className="card-title">{book.name}</h5>
        <Stack spacing={1} style={{ alignItems: 'center' }}>
          <Rating name="size-medium" defaultValue={5} />
        </Stack>
        <p className="card-text" style={{ color: 'grey', fontSize: 12 }}>
          {truncateText(book.descriptionShort, 30)}
        </p>
        <p className="card-text" style={{ color: 'red', fontSize: 20 }}>{book.price} TL{bookquantity(book)}</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', width: '100%' }}>
          <Link to={`/AllBooks/${book._id}`} className="btn btn-warning">
            İncele
          </Link>
          <Button variant="contained"
            color="primary"
            className="btn btn-primary" size='small' onClick={handleAddToCart}>sepete ekle</Button>
          <FaHeart onClick={handleAddToFavorite} style={{ color: 'red', cursor: 'pointer' }} /> 

        </div>
      </div>
    </div>
  );
};

export default BookList;
