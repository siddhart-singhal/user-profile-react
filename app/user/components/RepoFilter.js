import React, { Component, PropTypes } from 'react';

export default class RepoFilter extends Component {
    render() {
        return (
            <section className="border-bottom filter">
                <input
                    type="text"
                    placeholder="Find a repository.."
                    className="form-control"
                    onKeyUp={({ target: { value } }) => this.props.onUpdate(value)}
                />
                <summary>
                    <i>Type:</i> <span>All</span>
                    <span className="dropdown-caret"></span>
                </summary>
                <summary>
                    <i>Language:</i> <span>All</span>
                    <span className="dropdown-caret"></span>
                </summary>
                <a href="#" className="new-button">New</a>
            </section>
        );
    }
}

RepoFilter.propTypes = {
    onUpdate: PropTypes.func.isRequired,
};
