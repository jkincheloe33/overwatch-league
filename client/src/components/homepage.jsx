import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            teamIdx: 0
        }
    }

    componentDidMount() {

        fetch('http://api.overwatchleague.com/teams')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({
                    data: data,
                    isLoading: false
                });
            });
        this.timeout = setInterval(() => {
            let currentIdx = this.state.teamIdx;
            this.setState({ teamIdx: currentIdx + 1 });
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        if (this.state.isLoading) {
            return <h1>Loading</h1>;
        } else {
            let competitors = this.state.data.competitors;
            let team = competitors[this.state.teamIdx % competitors.length];
            return (
                <Fragment>
                    <div className="home-container">
                        <div className="overlay" style={{
                            backgroundImage: 'linear-gradient(#' + team.competitor.secondaryColor + 'be, #' + team.competitor.primaryColor + 'be)'
                        }}></div>
                        < div className="team-logo">
                            <img src="../../img/logo3.png" alt="" />
                        </div>
                        <nav className="home-nav">
                            <ul>
                                <li><Link to={{ pathname: '/main', state: { data: competitors } }} > <i className="fas fa-arrow-right"></i></Link></li>
                                <li><Link to='/main'><i className="fas fa-arrow-right"></i></Link></li>
                            </ul>
                        </nav>
                    </div>
                </Fragment >
            )
        }
    }
}

export default HomePage;