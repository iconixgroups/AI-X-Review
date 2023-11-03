import React from "react";

class RequestTrialTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      trialLink: null,
    };
  }

  async componentDidMount() {
    // Assuming "fetchProduct" is a function that fetches the product details
    try {
      const product = await this.fetchProduct();
      this.setState({
        product: product,
        trialLink: product.trialLink,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async fetchProduct() {
    // Fetch product details here
    // This is a placeholder and should be replaced with actual implementation
    const response = await fetch("https://api.example.com/product");
    const product = await response.json();
    return product;
  }

  render() {
    const { product, trialLink } = this.state;

    if (!product) {
      return (
        <div>
          <span>Loading...</span>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        </div>
      );
    }

    return (
      <div id="requestTrialTab">
        <h2>{product.name} - Request Trial</h2>
        <p>
          Interested in trying out {product.name}? Click the link below to sign
          up for a trial.
        </p>
        <a href={trialLink} target="_blank" rel="noopener noreferrer">
          Request Trial
        </a>
      </div>
    );
  }
}

export default RequestTrialTab;
