import React from 'react';

const listItem = (props) => {
    return (
        <div>
            <p>{props.text} => {props.id}</p>
            <button onClick={() => props.delete(props.id)}>Remove note</button>
            <button onClick={() => props.markAsDone(props.id)}>Mark as done</button>
        </div>
    );
}

export default listItem;