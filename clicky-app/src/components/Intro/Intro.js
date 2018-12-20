import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Intro.css';

const Intro = props => (
    <div className="jumboIntro">
        <Jumbotron style={{'backgroundImage': `url('assets/images/nbaLogos.jpg')`}} >
        MUH NAME IS STEEEVE
        </Jumbotron>
    </div>
)

export default Intro;
