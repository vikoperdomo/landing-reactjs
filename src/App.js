import WOW from "wowjs";
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Include This Home
import Home from "./pages/homes/Home";

// Include This Extra Pages
import Error from "./pages/others/Error";

const App = () => {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, []);
    return (
        <Router>
                <Switch>
                    <Route
                        exact
                        path={`${process.env.PUBLIC_URL + '/'}`}
                        component={Home}
                    />
                    <Route exact component={Error}/>
                </Switch>
        </Router>
    );
};

export default App;
