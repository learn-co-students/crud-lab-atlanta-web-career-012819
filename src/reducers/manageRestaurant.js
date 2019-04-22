import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  switch (action.type) {
    case "ADD_RESTAURANT": {
      const restaurant = {
        id: cuid(),
        text: action.text
      };
      return { ...state, restaurants: [...state.restaurants, restaurant] };
    }
    case "DELETE_RESTAURANT": {
      return { ...state, restaurants: state.restaurants.filter(r => r.id !== action.id) };
    }
    case "ADD_REVIEW": {
      // console.log(action.review)
      const review = {
        ...action.review,
        id: cuid()
      }
      // console.log("review: ", review)
      return { ...state, reviews: [...state.reviews, review]}
    }
    case "DELETE_REVIEW": {
      return { ...state, reviews: state.reviews.filter(r => r.id !== action.id)}
    }
    default:
      return state;
  }
}
