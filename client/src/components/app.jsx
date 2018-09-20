import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './homepage';
import Main from './main';
import Teams from './teams';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/main" component={Main} />
                        <Route path="/teams" component={Teams} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;