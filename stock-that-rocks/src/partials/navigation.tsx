import * as React from "react";
import { Dispatch } from 'redux';
import { connect, ConnectedState, ConnectedDispatch, OwnProps, OwnState } from 'react-redux';
import { Store } from '../reducers/store';

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({

});

const mapDispatchToProps = (dispatch: Dispatch<Store.All>): ConnectedDispatch => ({

});

class NavigationPage extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

    render() {
        return (
            <div>
                <div className="row navigation">
                    <div className="col-md-2 text-center">
                        
                    </div>
                    <div className="col-md-2 text-center">
                        <a>Featured</a>
                    </div>
                    <div className="col-md-2 text-center">
                        <a>Categories</a>
                    </div>
                    <div className="col-md-2 text-center">
                        <a>Collections</a>
                    </div>
                    <div className="col-md-2 text-center">
                        <a>Sessions</a>
                    </div>
                    <div className="col-md-2 text-center">
                        
                    </div>
                </div>
            </div>
        );
    }

}

export const Navigation: React.ComponentClass<OwnProps> =
    connect(mapStateToProps, mapDispatchToProps)(NavigationPage);