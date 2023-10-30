import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../redux/actions';

class OverviewTab extends React.Component {
    componentDidMount() {
        this.props.fetchProduct();
    }

    render() {
        const { product } = this.props;
        return (
            <div id="overviewTab">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <h3>Key Features</h3>
                <ul>
                    {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <h3>Target Audience</h3>
                <p>{product.targetAudience}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product,
});

const mapDispatchToProps = dispatch => ({
    fetchProduct: () => dispatch(fetchProduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OverviewTab);