import React from 'react';
import './Header.css';
import Message from '../Message/Message';

const Header = props => (
    <div className="header">
        <ul>
            <li><h2>Ahoy</h2></li>
            <li><Message /></li>
        </ul>
        
    </div>
)

export default Header;
