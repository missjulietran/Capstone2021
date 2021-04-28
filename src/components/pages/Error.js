import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>404</h1> <h3>The page you were  looking for couldn’t be found...</h3>

            <Link to="/">Back to Previous Page</Link>
        </div>
    )
}

export default Error;
