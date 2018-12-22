import React from 'react';
import './GamePiece.css';

const GamePiece = props => (
    <div
        role="img"
        style={{ backgroundImage: `url("${props.image}")`}}
        className="gamePiece"
        onClick={() => props.handleClick(props.id, props.message)}
    >
    <p>{props.name}</p>
    </div>
);

export default GamePiece;