import React from 'react';

const addItem = (props) => {
    return (
        <div>
            <input type="text" onChange={props.handleChange} />
            <button onClick={props.handleClick}>Add item</button>
        </div>
    );
}

export default addItem;