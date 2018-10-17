import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        this.setState({ isLoading: false });
    }

    render() {
        if (this.state.isLoading) {
            return <h1>Loading</h1>;
        } else {
            return (
                < div className="single-team-inner" >
                    <img src={this.props.team.competitor.logo} alt="" />
                    <h2>{this.props.team.competitor.name}</h2>
                    <p>{this.props.team.competitor.homeLocation}</p>
                    <Link to={`/teams/${this.props.team.competitor.id}`} className="view-team">View Team <i className="fas fa-angle-right"></i></Link>
                </div >
            )
        }
    }
}

export default Team;