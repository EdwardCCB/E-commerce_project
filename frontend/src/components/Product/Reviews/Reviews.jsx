import React, { useState } from 'react';
import './Reviews.css';

const initialReviews = [
    { id: 1, author: 'Francisco', rating: 4, text: 'Good product, I recommend it and very good order delivery on time, recommended', date: '1 month ago' },
    { id: 2, author: 'Eduardo', rating: 2, text: 'Meh', date: '5 day ago' },
];

const Reviews = () => {
    const [reviews, setReviews] = useState(initialReviews);
    const [showAll, setShowAll] = useState(false);
    const [newReview, setNewReview] = useState('');
    const [newRating, setNewRating] = useState(0);

    const visibleReviews = showAll ? reviews : reviews.slice(0, 5);

    const handleSeeMore = () => setShowAll(!showAll);

    const handleAddReview = () => {
        if (newReview && newRating) {
            const newEntry = {
                id: reviews.length + 1,
                author: 'Anonymous',
                rating: newRating,
                text: newReview,
                date: 'Just now',
            };
            setReviews([...reviews, newEntry]);
            setNewReview('');
            setNewRating(0);
        }
    };

    return (
        <div className="reviews-container">
            <h3>Reviews</h3>
            {visibleReviews.map((review) => (
                <div key={review.id} className="review-container">
                    <div className="review-header">
                        <div className="author-rating">
                            <span className="author">{review.author}:</span>
                            <span className="rating">
          {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
        </span>
                        </div>
                        <span className="date">{review.date}</span>
                    </div>
                    <div className="review">
                        <p className="review-text">{review.text}</p>
                    </div>
                </div>
            ))}

            {reviews.length > 5 && (
                <button onClick={handleSeeMore} className="see-more-btn">
                    {showAll ? 'See Less' : 'See More'}
                </button>
            )}

            <hr/>

            <h3>Add Review</h3>
            <div className="add-review">
                <div className="rating-container">
                    <label>Your rating:</label>
                    <div className="stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={star <= newRating ? 'star filled' : 'star'}
                                onClick={() => setNewRating(star)}
                            >
          ☆
        </span>
                        ))}
                    </div>
                </div>
                <textarea
                    placeholder="Write your review"
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                />
                <button onClick={handleAddReview} className="send-btn">
                    Send
                </button>
            </div>
        </div>
    );
};

export default Reviews;