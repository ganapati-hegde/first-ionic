import { React } from 'react';
import './rating.css'


const Rating = ({ rating, setMyRating }) => {
   
    
    return <div>
        {[...Array(5)].map((eachStar, index) => {
            index = index + 1;
            return <button onClick={() => { setMyRating(index) }}>
                <span class={`star ${rating >= index ? 'filled' : 'nonFilled'}`}>&#9733;</span>
            </button>
        })}
        <div>{`Rating: ${rating}`}</div>
    </div>
}
export default Rating;