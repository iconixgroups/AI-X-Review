const { fetchProduct, loginUser, postReview, reportIssue } = require('../frontend/src/actions');
const { store } = require('../frontend/src/redux/store');
const { Product, User, Review, Issue } = require('../backend/models');
const assert = require('assert');

describe('Unit Tests', function() {
  describe('Actions', function() {
    it('fetchProduct should return a product', async function() {
      const product = await fetchProduct('testProductId');
      assert(product instanceof Product);
    });

    it('loginUser should return a user', async function() {
      const user = await loginUser('testUsername', 'testPassword');
      assert(user instanceof User);
    });

    it('postReview should return a review', async function() {
      const review = await postReview('testProductId', 'testUserId', 'testReview', 5);
      assert(review instanceof Review);
    });

    it('reportIssue should return an issue', async function() {
      const issue = await reportIssue('testProductId', 'testUserId', 'testIssue');
      assert(issue instanceof Issue);
    });
  });

  describe('Redux Store', function() {
    it('store should be an object', function() {
      assert(typeof store === 'object');
    });

    it('store should have initial state', function() {
      const initialState = store.getState();
      assert(initialState.products.length === 0);
      assert(initialState.users.length === 0);
      assert(initialState.reviews.length === 0);
      assert(initialState.issues.length === 0);
    });
  });
});