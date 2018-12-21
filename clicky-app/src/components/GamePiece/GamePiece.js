import React from 'react';
import './GamePiece.css';

const GamePiece = props => (
    <div
        role="img"
        style={{ backgroundImage: `url("${props.image}")`}}
        className="gamePiece"
    />
);

export default GamePiece;