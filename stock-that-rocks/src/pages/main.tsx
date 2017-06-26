import * as React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import { Dispatch } from "redux";
import { connect, ConnectedState, ConnectedDispatch, OwnProps, OwnState } from "react-redux";
import { Store } from "../reducers/store";
import { Header } from "../partials/header";
import { Navigation } from "../partials/navigation";
import { Footer } from "../partials/footer";
import { Pricing } from "../pages/pricing";
import { Products } from "../pages/products";
import { ProductDetails } from "../pages/product-details";


injectTapEventPlugin();

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({

});

const mapDispatchToProps = (dispatch: Dispatch<Store.All>): ConnectedDispatch => ({

});

class MainPage extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

    constructor() {
        super();

    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {

        /*
        * Add this lines for use the router
        *
        * <BrowserRouter>
        *     <switch>
        *         <Route path="/[path]" component={[component]} />
        *         <Redirect from="/" to="[path]" />
        *     </switch>
        * </BrowserRouter> 
        */

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Navigation />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <BrowserRouter>
                            <switch>
                                <Route path="/products" component={Products} />
                                <Route path="/product-details" component={ProductDetails} />
                                <Route path="/pricing" component={Pricing} />
                                <Redirect from="/" to="products" />
                            </switch>
                        </BrowserRouter>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export const Main: React.ComponentClass<OwnProps> =
    connect(mapStateToProps, mapDispatchToProps)(MainPage);