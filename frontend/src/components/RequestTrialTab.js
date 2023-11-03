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
      if (product) {
        this.setState({
          product: product,
          trialLink: product.trialLink,
        });
      } else {
        console.error("Error fetching product");
      }
    } catch (error) {
      console.error("Error in componentDidMount:", error);
    }
  }

  fetchProduct() {
    // Fetch product details here
    // This is a placeholder and should be replaced with actual implementation
    return Promise.resolve({
      name: "AI Product",
      trialLink: "https://www.example.com/trial",
    });
  }

  async render() {
    // Fetch product details here
    // This is a placeholder and should be replaced with actual implementation
    try {
      const response = await fetch("/api/products/1"); // replace with actual product id
      const product = await response.json();
      return product;
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  }

  async render() {
    const { product, trialLink } = this.state;

    if (!product) {
      return <div>Loading...</div>;
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
