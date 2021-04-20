import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import loader from '../../../loader.gif';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://young-wave-18523.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <h1 class="text-center text-primary">Customer Reviews</h1>
                </div>
                <div className="row">
                    {
                        reviews.length === 0 && <img className="loader-resize" src={loader}></img>
                    }
                    {
                        reviews.map(review => <Review review={review}></Review>)
                    }
                </div>
            </div>
        </>
    );
};

export default ReviewSection;