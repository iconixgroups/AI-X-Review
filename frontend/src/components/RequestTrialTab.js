import React from "react";

class TrialRequestTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: null,
      trialSignupLink: null,
    };
  }

  async componentDidMount() {
    // The 'retrieveProductDetails' function fetches the product details from the '/api/actual-endpoint' and returns the product as a JSON object. In case of an error during the fetch operation, it logs the error and returns null.
    try {
      const productDetails = await this.retrieveProductDetails();
      if (productDetails) {
        this.setState({
          productDetails: productDetails,
          trialSignupLink: productDetails.trialLink,
        });
      } else {
        console.error("Error fetching product details");
      }
    } catch (error) {
      console.error("Error in componentDidMount:", error);
    }
  }

  async retrieveProductDetails() {
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
    const { productDetails, trialSignupLink } = this.state;

    if (!productDetails) {
      return <div>Loading...</div>;
    }

    return (
      <div id="trialRequestTab">
        <h2>{productDetails.name} - Request Trial</h2>
        <p>
          Interested in trying out {productDetails.name}? Click the link below
          to sign up for a trial.
        </p>
        <a href={trialSignupLink} target="_blank" rel="noopener noreferrer">
          Request Trial
        </a>
      </div>
    );
  }
}

export default TrialRequestTab;
