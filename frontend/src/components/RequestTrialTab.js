import React from 'react';

class RequestTrialTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      trialLink: null
    };
  }

  componentDidMount() {
    // Assuming "fetchProduct" is a function that fetches the product details
    this.fetchProduct().then(product => {
      this.setState({
        product: product,
        trialLink: product.trialLink
      });
    });
  }

  fetchProduct() {
    // Fetch product details here
    // This is a placeholder and should be replaced with actual implementation
    return Promise.resolve({
      name: 'AI Product',
      trialLink: 'https://www.example.com/trial'
    });
  }

  render() {
    const { product, trialLink } = this.state;

    if (!product) {
      return <div>Loading...</div>;
    }

    return (
      <div id="requestTrialTab">
        <h2>{product.name} - Request Trial</h2>
        <p>
          Interested in trying out {product.name}? Click the link below to sign up for a trial.
        </p>
        <a href={trialLink} target="_blank" rel="noopener noreferrer">Request Trial</a>
      </div>
    );
  }
}

export default RequestTrialTab;