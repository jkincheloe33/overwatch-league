import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import TeamList from './teamList';

class Teams extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        // console.log(this.props);
        this.setState({ isLoading: false });
    }

    render() {
        if (this.state.isLoading) {
            return <h1>Loading</h1>;
        } else {
            return (
                <div className="teams">
                    <TeamList teams={this.props.competitorsFromParent} />
                </div>
            );
        }
    }
}

export default Teams;