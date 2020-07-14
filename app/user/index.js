import React, { Component, PropTypes } from 'react';
import Profile from './components/Profile'
import RepoFilter from './components/RepoFilter'
import RepoList from './components/RepoList'

export default class User extends Component {
    constructor() {
        super()
        this.state = { filter: '' }
    }

    handleFilterUpdate = (filter) => {
        this.setState({ filter })
    }

    render() {
        const username = 'supreetsingh247'
        const { filter } = this.state
        return (
            <div className="outer-container">
                <div className="inner-container">
                    <div className="user-info">
                        <Profile username={username}/>
                    </div>
                    <div className="repo-info">
                        <div className="tab">
                            <h3 className="tab-content">Overview</h3>
                            <h3 className="tab-content tab-content-active">Repositories</h3>
                            <h3 className="tab-content">Projects</h3>
                        </div>
                        <RepoFilter onUpdate={this.handleFilterUpdate}/>
                        <RepoList filter={filter} username={username}/>
                    </div>
                </div>
            </div>
        );
    }
}

User.propTypes = {
    params: PropTypes.shape({
        username: PropTypes.string,
    }),
}
