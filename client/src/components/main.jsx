import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import Nav from './navigation';
import SlickHeader from './slickHeader';
import Teams from './teams';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });
    }

    render() {
        if (this.state.isLoading === true) {
            return <h1>Loading...</h1>;
        } else {
            let competitors = this.props.location.state.data;
            return (
                <div className="main-container">
                    <Nav />
                    <SlickHeader />
                    <Teams competitorsFromParent={competitors} />
                </div>
            )
        }
    }
}

export default Main;