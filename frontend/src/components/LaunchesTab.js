import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';

const LaunchesTab = ({ productId, fetchProductLaunches }) => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetchProductLaunches(productId)
      .then(launches => setLaunches(launches))
      .catch(error => console.error(error));
  }, [productId, fetchProductLaunches]);

  return (
    <div id="launchesTab">
      <h2>Product Launches</h2>
      {launches.length > 0 ? (
        <ul>
          {launches.map((launch, index) => (
            <li key={index}>
              <h3>{launch.title}</h3>
              <p>{launch.description}</p>
              <p><strong>Release Date:</strong> {new Date(launch.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No launches found for this product.</p>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchProductLaunches: productId => dispatch(actions.fetchProductLaunches(productId))
});

export default connect(null, mapDispatchToProps)(LaunchesTab);