const artillery = require('artillery');

const config = {
  target: 'http://localhost:3000',
  phases: [
    { duration: 60, arrivalRate: 5 },
  ],
  defaults: {
    headers: {
      'Content-Type': 'application/json',
    },
  },
};

const scenario = {
  flow: [
    { get: { url: '/api/products' } },
    { get: { url: '/api/users' } },
    { get: { url: '/api/reviews' } },
    { get: { url: '/api/teams' } },
    { get: { url: '/api/awards' } },
    { get: { url: '/api/embeds' } },
    { get: { url: '/api/issues' } },
  ],
};

artillery.quick(config, scenario, (err) => {
  if (err) {
    console.log('Load test encountered an error:', err);
  } else {
    console.log('Load test completed successfully.');
  }
});