import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';

const PortfolioItem = (props) => {
    return (
        <div>
            <h2> Thing I've done </h2>
            <p>This is the portfolio items {props.match.params.id}</p>
        </div>
    )
}

export default PortfolioItem;