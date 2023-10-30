import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';
import Review from './Review';

const ReviewsTab = ({ productId, fetchReviews }) => {
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState('rating');

  useEffect(() => {
    fetchReviews(productId).then(reviews => setReviews(reviews));
  }, [productId, fetchReviews]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const sortedReviews = () => {
    switch (filter) {
      case 'rating':
        return [...reviews].sort((a, b) => b.rating - a.rating);
      case 'date':
        return [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'sentiment':
        return [...reviews].sort((a, b) => b.sentiment - a.sentiment);
      default:
        return reviews;
    }
  };

  return (
    <div id="reviewsTab">
      <h2>Reviews</h2>
      <select onChange={handleFilterChange}>
        <option value="rating">Rating</option>
        <option value="date">Date</option>
        <option value="sentiment">Sentiment</option>
      </select>
      {sortedReviews().map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchReviews: productId => dispatch(actions.fetchReviews(productId)),
});

export default connect(null, mapDispatchToProps)(ReviewsTab);