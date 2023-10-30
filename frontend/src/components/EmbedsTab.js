import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';

class EmbedsTab extends React.Component {
    componentDidMount() {
        this.props.fetchEmbeds(this.props.productId);
    }

    render() {
        const { embeds } = this.props;
        return (
            <div id="embedsTab">
                {embeds.map((embed, index) => (
                    <div key={index}>
                        <h3>{embed.title}</h3>
                        <iframe src={embed.url} title={embed.title}></iframe>
                        <p>{embed.description}</p>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    embeds: state.embeds,
    productId: state.currentProduct.id
});

const mapDispatchToProps = dispatch => ({
    fetchEmbeds: productId => dispatch(actions.fetchEmbeds(productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EmbedsTab);