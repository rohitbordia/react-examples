import * as React from "react";
import { Dispatch } from 'redux';
import { connect, ConnectedState, ConnectedDispatch, OwnProps, OwnState } from 'react-redux';
import * as Ionicon from 'react-ionicons';
import { Store } from '../reducers/store';

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({

});

const mapDispatchToProps = (dispatch: Dispatch<Store.All>): ConnectedDispatch => ({

});

class FooterPage extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

    styles = {
        footerMain: {
            backgroundColor: "#9eb7b2"
        },
        footerLegal: {
            backgroundColor: "#a0a0a0"
        }
    };

    render() {
        return (
            <div>
                <div className="row" style={this.styles.footerMain}>
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-2">
                        <div className="row">
                            <img src="assets/images/logos/logo.png" />
                        </div>
                        <div className="row">
                            NEWSLETTER SIGNUP
                    </div>
                        <div className="row">
                            <input type="text" value="" /><button type="button"><Ionicon icon="ion-android-send"></Ionicon></button>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row">
                            <strong>LEARN MORE</strong>
                        </div>
                        <div className="row">
                            <a>Prices</a>
                        </div>
                        <div className="row">
                            <a>Membership</a>
                        </div>
                        <div className="row">
                            <a>FAQ</a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row">
                            <strong>LEGAL INFORMATION</strong>
                        </div>
                        <div className="row">
                            <a>Photo licensing</a>
                        </div>
                        <div className="row">
                            <a>How to use</a>
                        </div>
                        <div className="row">
                            <a>Terms policy</a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row">
                            <strong>COMPANY &amp; SUPPORT</strong>
                        </div>
                        <div className="row">
                            <a>About</a>
                        </div>
                        <div className="row">
                            <a>Contact</a>
                        </div>
                        <div className="row">
                            <a>Blog</a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row">
                            <strong>FOLLOW US</strong>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <a><Ionicon icon="ion-social-instagram-outline"></Ionicon></a>
                            </div>
                            <div className="col-sm-3">
                                <a><Ionicon icon="ion-social-pinterest-outline"></Ionicon></a>
                            </div>
                            <div className="col-sm-3">
                                <a><Ionicon icon="ion-social-facebook"></Ionicon></a>
                            </div>
                            <div className="col-sm-3">
                                <a><Ionicon icon="ion-social-twitter"></Ionicon></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>
                <div className="row" style={this.styles.footerLegal}>
                    <div className="col-md-12 text-center">
                        &reg; 2017 STOCKS THAT ROCKS
                        </div>
                </div>
            </div>
        );
    }

}

export const Footer: React.ComponentClass<OwnProps> =
    connect(mapStateToProps, mapDispatchToProps)(FooterPage);