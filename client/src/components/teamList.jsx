import React, { Component, Fragment } from 'react';
import Team from './team';

class TeamList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.setState({ isLoading: false });
    }

    render() {
        if (this.state.isLoading) {
            return <h1>Loading</h1>;
        } else {
            return (
                < div className="teams-container" >

                    {this.props.teams.map((team, index) => {
                        return (
                            <div className="single-team">
                                <Team key={team.competitor.id} team={team} />
                            </div>
                        );
                    })}
                </div>
            )
        }
    }
}

export default TeamList;