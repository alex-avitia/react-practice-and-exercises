import React from 'react';

import './Card.css';

const card = (props) => {
    // we add a constant to represent the class name, that way any class name received from outside is immediately added to the string dynamically
    const classes = ' card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default card;

//meant to be a reusable component