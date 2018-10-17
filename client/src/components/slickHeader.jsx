import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

class SlickHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            teamIdx: 0
        }
    }

    componentDidMount() {
        jQuery(document).ready(() => {
            $('.headerSlider').slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            });
        });
        fetch('https://api.overwatchleague.com/news')
            .then(results => {
                return results.json();
            }).then(data => {
                let blogs = data.blogs;
                this.setState({
                    blogs: blogs,
                    isLoading: false
                });
                console.log(this.state.blogs);
            });
    }

    componentDidUpdate() {
        jQuery(document).ready(() => {
            $('.headerSlider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        });

    }

    render() {
        if (this.state.isLoading) {
            return <h1>Loading</h1>;
        } else {
            return (
                <div className="headerSlider">
                    {this.state.blogs.map((blog, index) => {
                        let title = blog.title;
                        let summary = blog.summary;
                        let link = blog.defaultUrl;
                        let image = blog.header.url.replace(/\/\//g, 'http://');
                        return (
                            <div className="slide">
                                <div className="slideContainer" style={{ backgroundImage: `url(${image})` }}>
                                    <div className="overlay"></div>
                                    <div className="headerContent">
                                        <h2>{title}</h2>
                                        <p>{summary}</p>
                                    </div>

                                </div>

                            </div>
                        );
                    })}
                </div>
            )
        }
    }
}

export default SlickHeader;