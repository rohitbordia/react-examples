import * as React from "react";
import { Dispatch } from 'redux';
import { connect, ConnectedState, ConnectedDispatch, OwnProps, OwnState } from 'react-redux';
import * as Ionicon from 'react-ionicons';
import { Slider } from "react-slick";
import { Store } from '../reducers/store';

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({

});

const mapDispatchToProps = (dispatch: Dispatch<Store.All>): ConnectedDispatch => ({

});

class ProductDetailsPage extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

    constructor(){
        super();
        this.state = {
            productName: "Test Photo",
            productOptions: [
                {
                desc:"Web",
                price:"$15.00",
                desc2:"1024 x 840"
                }
            ],
           productImage: "/assets/images/photos/diego-hernandez-220886.jpg"
        };
    }

    render() {

        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
                <div className="row">
                    <div className="col-md-12 text-left">
                        <h1>{this.state.productName}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-left">
                        {this.state.productOptions.map((prod, index) => (
                            <div key={index}>
                                <div className="row">
                                    <div className="col-md-1">
                                        <input type="radio" />
                                    </div>
                                    <div className="col-md-9">
                                        ${prod.desc}
                                    </div>
                                    <div className="col-md-2">
                                        ${prod.price}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-1">
                                    </div>
                                    <div className="col-md-9">
                                        ${prod.desc2}
                                    </div>
                                    <div className="col-md-2">
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="row">
                            <div className="col-md-12">
                                Woluld you like to save 20% on this photo?
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <a className="buttons-top login">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 text-center">
                        <div className="row">
                            <img src={this.state.productImage}></img>
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                SHARE THIS IMAGE!
                            </div>
                            <div className="col-sm-1">
                                <a><Ionicon icon="ion-social-facebook"></Ionicon></a>
                            </div>
                            <div className="col-sm-1">
                                <a><Ionicon icon="ion-social-twitter"></Ionicon></a>
                            </div>
                            <div className="col-sm-1">
                                <a><Ionicon icon="ion-social-pinterest-outline"></Ionicon></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        More form this session
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <Slider {...settings}>
                            {this.state.productMore.map((related, index) => (
                                <div key={index}>
                                    <img src={related.image} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        More options
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <Slider {...settings}>
                            {this.state.productOther.map((other, index) => (
                                <div key={index}>
                                    <img src={other.image} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

export const ProductDetails: React.ComponentClass<OwnProps> =
    connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);