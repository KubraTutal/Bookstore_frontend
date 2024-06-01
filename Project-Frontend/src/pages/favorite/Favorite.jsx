import React from 'react'
import { useSelector } from 'react-redux';



const Favorite = () => {

    const books = useSelector(state => state.favorite.books);

    const favoriteItemStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px', 
    };
  
    const favoriteItemDetailsStyle = {
      flex: 1,
    };
  
    const favoriteItemImageContainerStyle = {
      flex: '0 0 30%',
      maxWidth: '100px', 
      marginRight: '10px', 
    };
  
    const favoriteItemImageStyle = {
      width: '100%',
      height: 'auto',
    };


  return (
    <div>
      <h2>Favorilerim</h2>
      {books.map(book => (
        <div key={book._id} style={favoriteItemStyle}>
          <div style={favoriteItemDetailsStyle}>
            <div style={{ width: '100%' }}>
              <p>{book.name}</p>
              <p>Fiyat: {book.price} TL</p>
              <button  className='btn btn-warning'>favorimden Çıkar</button>
            </div>
          </div>
          <div style={favoriteItemImageContainerStyle}>
            <img src={book.img} alt={book.name} style={favoriteItemImageStyle} />
          </div>
          <hr />
        </div>
      ))}
     
    </div>
  )
}

export default Favorite;