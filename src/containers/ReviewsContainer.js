import React, { Component } from "react";
import { connect } from "react-redux";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={this.props.restaurant.id}
        />
        <Reviews
          reviews={this.props.reviews.filter(
            review => this.props.restaurant.id === review.restaurantId
          )}
          deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addReview: payload => dispatch({ type: "ADD_REVIEW", review: payload }),
    deleteReview: id => dispatch({ type: "DELETE_REVIEW", id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsContainer);
