import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Authentication from "../pages/Authentication";
import NotFound from "../pages/NotFound";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/otp" component={Authentication}/>
            <Route component={NotFound}/>
        </Switch>

    </BrowserRouter>
)

export default App;
