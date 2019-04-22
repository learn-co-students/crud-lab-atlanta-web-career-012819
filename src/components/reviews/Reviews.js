import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // console.log(this.props.reviews)
    return (
      <ul>
        {this.props.reviews.map(review => <Review key={review.id} review={review} delete={this.props.deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;
