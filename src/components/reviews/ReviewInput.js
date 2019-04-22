import React, { Component } from "react";
import Reviews from "./Reviews";

class ReviewInput extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log("Review Submitted ...");
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add Review ..."
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default ReviewInput;
