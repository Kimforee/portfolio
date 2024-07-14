import React from 'react';

function ListGroup(props){
    const items = [];
    if(items.length)
    return (
        <>
        {items.map((item) => (
        <li key={item}>{item}</li>
        ))}
        <h1>hi there beautiful</h1>
        </>
    );
}
export default ListGroup;