import React, { PropTypes } from 'react';

export default RepoListItem;

function RepoListItem({ repo }) {
    return (
        <li className="border-bottom">
            <div className="pull-right">
                <strong>{repo.language}</strong>
                <strong>&#9734; {repo.stargazers_count}</strong>
                <strong>&#4292; {repo.forks_count}</strong>
            </div>
            <h4 className="repo-name"><a href={repo.html_url}>{repo.name}</a></h4>
            <p>{repo.description}</p>
        </li>
    );
}

RepoListItem.propTypes = {
    repo: PropTypes.shape({
        pushed_at: PropTypes.string,
        language: PropTypes.string,
        stargazers_count: PropTypes.number,
        forks_count: PropTypes.number,
        html_url: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
    }),
};

RepoListItem.defaultProps = {
    repo: {},
};
