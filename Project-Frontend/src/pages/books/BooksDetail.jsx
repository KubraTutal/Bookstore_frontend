import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { addToCart } from '../../store/features/cartSlice';

const KitapDetaySayfasi = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);


  const dispatch = useDispatch()

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

  useEffect(() => {
    const fetchKitap = async () => {
      try {
        const response = await axios.get(`/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Kitap bilgileri alınırken bir hata oluştu', error);
      }
    };

    fetchKitap();
  }, [id]);


  const randomImages = [
    'https://picsum.photos/400/800',
    'https://picsum.photos/400/800',

  ];


  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="row">
        <div className="col-3" style={{ height: '100vh', overflow: 'hidden' }}>

          <img src={getRandomImage()} alt="Random Image" className="img-fluid" style={{ height: '100%' }} />
        </div>
        <div className="col-6">

          <div className="d-flex justify-content-center align-items-center">
            <div className="card text-center">
              <div className="card-body">
                <h2 className="card-title">{book.name}</h2>
                <img
                  src={book.img}
                  className="card-img-top mx-auto"
                  alt={book.name}
                  style={{ width: '300px', height: '400px', display: 'block' }}
                />
                <p className="card-text text-black font-medium">Yazar: {book.author}</p>
                <p className="card-text text-red-600 font-bold">Fiyat: {book.price} TL</p>
                <Stack spacing={1} style={{ alignItems: 'center' }}>
                  <Rating name="size-medium" defaultValue={5} />
                </Stack>
                <p className="card-text">Açıklama: {book.descriptionLong}</p>
                <p className="card-text">Yayın Evi: {book.publisher}</p>

                <Button variant="contained"
                color="primary"
                className="btn btn-primary"
                onClick={handleAddToCart}>sepete ekle</Button>


              </div>
             
            </div>
          </div>
        </div>
        <div className="col-3" style={{ height: '100vh', overflow: 'hidden' }}>

          <img src={getRandomImage()} alt="Random Image" className="img-fluid" style={{ height: '100%' }} />
        </div>
      </div>
    </>
  );
};

export default KitapDetaySayfasi;
