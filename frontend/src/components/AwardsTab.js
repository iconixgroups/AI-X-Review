import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';

const AwardsTab = ({ productId, fetchAwards }) => {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    fetchAwards(productId).then(awards => setAwards(awards));
  }, [productId, fetchAwards]);

  return (
    <div id="awardsTab">
      <h2>Awards and Recognitions</h2>
      {awards.length === 0 ? (
        <p>No awards or recognitions found for this product.</p>
      ) : (
        <ul>
          {awards.map((award, index) => (
            <li key={index}>
              <h3>{award.title}</h3>
              <p>{award.description}</p>
              <p>
                <strong>Source:</strong> <a href={award.sourceUrl}>{award.source}</a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchAwards: productId => dispatch(actions.fetchAwards(productId)),
});

export default connect(null, mapDispatchToProps)(AwardsTab);