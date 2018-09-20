import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './homepage';
import Main from './main';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/main" component={Main} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;