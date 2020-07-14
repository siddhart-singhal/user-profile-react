import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import User from './app/user';
import './assets/styles.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={User}/>
    </Router>,
    document.getElementById('container')
);
