import * as React from "react";
import { Dispatch } from 'redux';
import { connect, ConnectedState, ConnectedDispatch, OwnProps, OwnState } from 'react-redux';
import Gallery from 'react-grid-gallery';
import { Store } from '../reducers/store';

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({

});

const mapDispatchToProps = (dispatch: Dispatch<Store.All>): ConnectedDispatch => ({

});

class ProductsPage extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

    constructor() {
        super();
        this.setState({
            images: [
                {
                    src: "/assets/images/photos/diego-hernandez-220886.jpg",
                    thumbnail: "/assets/images/photos/diego-hernandez-220886.jpg",
                    thumbnailWidth: 320,
                    thumbnailHeight: 174,
                    caption: "diego-hernandez-220886"
                },
                {
                    src: "/assets/images/photos/joshua-earle-157231.jpg",
                    thumbnail: "/assets/images/photos/joshua-earle-157231.jpg",
                    thumbnailWidth: 320,
                    thumbnailHeight: 174,
                    caption: "joshua-earle-157231"
                }
                ]
        });
        this.onSelectImage = this.onSelectImage.bind(this);
    }

    onSelectImage(index, image) {
        window.location.href = '/product-details';
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-md-12 text-left">
                        <Gallery
                            images={this.state.images}
                            enableLightbox={false}
                            enableImageSelection={false}
                            onSelectImage={this.onSelectImage} />
                    </div>
                </div>
            </div>
        );
    }

}

export const Products: React.ComponentClass<OwnProps> =
    connect(mapStateToProps, mapDispatchToProps)(ProductsPage);