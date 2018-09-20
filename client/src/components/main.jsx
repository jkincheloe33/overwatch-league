import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import Nav from './navigation';
import Header from './header';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        // console.log(this.props.location.state.data);
    }

    render() {
        let competitors = this.props.location.state.data;
        return (
            <div className="main-container">
                <Nav />
                <Header competitorsFromParent={competitors} />
            </div>
        )
    }
}

export default Main;