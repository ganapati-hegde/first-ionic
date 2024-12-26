import { React, useEffect, useState } from 'react';
import './App.css';
import Rating from './components/Rating/rating'


const App = () => {
  const [rating, setRating] = useState(0)
  useEffect(() => {
    const ratingFromStorage = localStorage.getItem('rating');
    if (ratingFromStorage) {
      setRating(Number(ratingFromStorage));
    } else {
      localStorage.setItem('rating', 0);
    }
  }, [])
  const setMyRating = (rating) => {
    setRating(rating);
    localStorage.setItem('rating', rating);
  }
  return (
    <div className="App">
      
      <Rating rating={rating} setMyRating={setMyRating} />
    </div>
  );
};

export default App;
