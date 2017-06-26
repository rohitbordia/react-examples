import * as React from "react";
import { Dispatch } from 'redux';
import { connect, ConnectedState, ConnectedDispatch, OwnProps, OwnState } from 'react-redux';
import { Store } from '../reducers/store';

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({

});

const mapDispatchToProps = (dispatch: Dispatch<Store.All>): ConnectedDispatch => ({

});

class AboutPage extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

    constructor(){
        super();
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-md-12 text-left">
                        <img src="assets/images/logos/about.png" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-left">
                        <img src="assets/images/logos/about.png" />
                    </div>
                </div>
            </div>
        );
    }

}

export const About: React.ComponentClass<OwnProps> =
    connect(mapStateToProps, mapDispatchToProps)(AboutPage);