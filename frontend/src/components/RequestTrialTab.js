import React from "react";

class TrialRequestTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_details: null,
      trial_request_link: null,
    };
  }

  async componentDidMount() {
    // The 'fetchProductDetails' function fetches the product details from the '/api/actual-endpoint' and returns the product as a JSON object. In case of an error during the fetch operation, it logs the error and returns null.
    try {
      const product_details = await this.fetchProductDetails();
      if (product_details) {
        this.setState({
          product_details: product_details,
          trial_request_link: product_details.trialLink,
        });
      } else {
        console.error("Error fetching product details");
      }
    } catch (error) {
      console.error("Error in componentDidMount:", error);
    }
  }

  async fetchProductDetails() {
    // Fetch product details here
    // This is a placeholder and should be replaced with actual implementation
    try {
      const response = await fetch("/api/actual-endpoint");
      const product = await response.json();
      return product;
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  }

  async render() {
    const { product_details, trial_request_link } = this.state;

    if (!product_details) {
      return <div>Loading...</div>;
    }

    return (
      <div id="trialRequestTab">
        <h2>{product_details.name} - Request Trial</h2>
        <p>
          Interested in trying out {product_details.name}? Click the link below to sign
          up for a trial.
        </p>
        <a href={trial_request_link} target="_blank" rel="noopener noreferrer">
          Request Trial
        </a>
      </div>
    );
  }
}

export default TrialRequestTab;
