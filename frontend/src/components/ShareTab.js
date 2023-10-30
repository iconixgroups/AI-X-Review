import React from 'react';

class ShareTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product
        };
    }

    shareOnSocialMedia(platform) {
        const { product } = this.state;
        let url = '';

        switch(platform) {
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${product.url}`;
                break;
            case 'twitter':
                url = `https://twitter.com/intent/tweet?url=${product.url}&text=${product.name}`;
                break;
            case 'linkedin':
                url = `https://www.linkedin.com/shareArticle?mini=true&url=${product.url}&title=${product.name}`;
                break;
            default:
                break;
        }

        window.open(url, '_blank');
    }

    shareViaEmail() {
        const { product } = this.state;
        const subject = `Check out this AI product: ${product.name}`;
        const body = `I found this AI product and thought you might be interested: ${product.url}`;
        const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    }

    render() {
        return (
            <div id="shareTab">
                <h2>Share this product</h2>
                <button onClick={() => this.shareOnSocialMedia('facebook')}>Share on Facebook</button>
                <button onClick={() => this.shareOnSocialMedia('twitter')}>Share on Twitter</button>
                <button onClick={() => this.shareOnSocialMedia('linkedin')}>Share on LinkedIn</button>
                <button onClick={this.shareViaEmail}>Share via Email</button>
            </div>
        );
    }
}

export default ShareTab;