import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../redux/actions';
import OverviewTab from './OverviewTab';
import ReviewsTab from './ReviewsTab';
import LaunchesTab from './LaunchesTab';
import TeamTab from './TeamTab';
import AwardsTab from './AwardsTab';
import EmbedsTab from './EmbedsTab';
import ShareTab from './ShareTab';
import RequestTrialTab from './RequestTrialTab';
import ReportIssueTab from './ReportIssueTab';

const ProductPages = ({ match, fetchProduct, product }) => {
  const { id } = match.params;

  useEffect(() => {
    fetchProduct(id);
  }, [id, fetchProduct]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <OverviewTab product={product} />
      <ReviewsTab product={product} />
      <LaunchesTab product={product} />
      <TeamTab product={product} />
      <AwardsTab product={product} />
      <EmbedsTab product={product} />
      <ShareTab product={product} />
      {product.trialAvailable && <RequestTrialTab product={product} />}
      <ReportIssueTab product={product} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { product: state.products[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchProduct })(ProductPages);