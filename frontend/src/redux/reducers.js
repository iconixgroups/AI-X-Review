```javascript
import { 
  PRODUCT_FETCH_SUCCESS, 
  PRODUCT_FETCH_FAILURE, 
  USER_LOGIN_SUCCESS, 
  USER_LOGIN_FAILURE, 
  REVIEW_POST_SUCCESS, 
  REVIEW_POST_FAILURE, 
  ISSUE_REPORT_SUCCESS, 
  ISSUE_REPORT_FAILURE 
} from './actions';

const initialState = {
  product: {},
  user: {},
  reviews: [],
  issues: [],
  error: null
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        product: action.payload,
        error: null
      };
    case PRODUCT_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case REVIEW_POST_SUCCESS:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        error: null
      };
    case REVIEW_POST_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ISSUE_REPORT_SUCCESS:
      return {
        ...state,
        issues: [...state.issues, action.payload],
        error: null
      };
    case ISSUE_REPORT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;
```