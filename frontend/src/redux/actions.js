// Action Types
export const PRODUCT_FETCH_SUCCESS = 'PRODUCT_FETCH_SUCCESS';
export const PRODUCT_FETCH_FAILURE = 'PRODUCT_FETCH_FAILURE';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const REVIEW_POST_SUCCESS = 'REVIEW_POST_SUCCESS';
export const REVIEW_POST_FAILURE = 'REVIEW_POST_FAILURE';
export const ISSUE_REPORT_SUCCESS = 'ISSUE_REPORT_SUCCESS';
export const ISSUE_REPORT_FAILURE = 'ISSUE_REPORT_FAILURE';

// Action Creators
export const productFetchSuccess = (product) => ({
  type: PRODUCT_FETCH_SUCCESS,
  payload: product
});

export const productFetchFailure = (error) => ({
  type: PRODUCT_FETCH_FAILURE,
  payload: error
});

export const userLoginSuccess = (user) => ({
  type: USER_LOGIN_SUCCESS,
  payload: user
});

export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error
});

export const reviewPostSuccess = (review) => ({
  type: REVIEW_POST_SUCCESS,
  payload: review
});

export const reviewPostFailure = (error) => ({
  type: REVIEW_POST_FAILURE,
  payload: error
});

export const issueReportSuccess = (issue) => ({
  type: ISSUE_REPORT_SUCCESS,
  payload: issue
});

export const issueReportFailure = (error) => ({
  type: ISSUE_REPORT_FAILURE,
  payload: error
});