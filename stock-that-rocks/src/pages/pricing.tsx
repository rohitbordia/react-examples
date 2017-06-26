import * as React from "react";
import { Dispatch } from 'redux';
import { connect, ConnectedState, ConnectedDispatch, OwnProps, OwnState } from 'react-redux';
import { Store } from '../reducers/store';

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({

});

const mapDispatchToProps = (dispatch: Dispatch<Store.All>): ConnectedDispatch => ({

});

class PricingPage extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src="assets/images/logos/logo.png" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1 text-center">
                        
                    </div>
                    <div className="col-md-5 text-center">
                        Photos
                    </div>
                    <div className="col-md-5 text-center">
                        Membership
                    </div>
                    <div className="col-md-1 text-center">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1 text-center">
                        
                    </div>
                    <div className="col-md-5 text-center">
                        Packages
                    </div>
                    <div className="col-md-5 text-center">
                        Videos
                    </div>
                    <div className="col-md-1 text-center">
                        
                    </div>
                </div>
            </div>
        );
    }

}

export const Pricing: React.ComponentClass<OwnProps> =
    connect(mapStateToProps, mapDispatchToProps)(PricingPage);