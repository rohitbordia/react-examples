import * as React from "react";
import { Dispatch } from 'redux';
import { connect, ConnectedState, ConnectedDispatch, OwnProps, OwnState } from 'react-redux';
import * as Ionicon from 'react-ionicons';
import { Store } from '../reducers/store';

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({

});

const mapDispatchToProps = (dispatch: Dispatch<Store.All>): ConnectedDispatch => ({

});

class HeaderPage extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

    styles = {
        headerMain: {
            backgroundColor: "#9eb7b2"
        }
    };

    render() {
        return (
            <div>
                <div className="row" style={this.styles.headerMain}>
                    <div className="col-md-2 text-left">
                        <img src="assets/images/logos/logo.png" />
                    </div>
                    <div className="col-md-8 text-center">
                        <input type="text" value="" /><button type="button"><Ionicon icon="ion-search"></Ionicon></button>
                    </div>
                    <div className="col-md-1 text-right">
                        <a className="buttons-top login">Log in</a>
                    </div>
                    <div className="col-md-1 text-left">
                        <a className="buttons-top join">Join</a>
                    </div>
                </div>
            </div>
        );
    }

}

export const Header: React.ComponentClass<OwnProps> =
    connect(mapStateToProps, mapDispatchToProps)(HeaderPage);