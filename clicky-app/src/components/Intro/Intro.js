import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Intro.css';

const Intro = props => (
    <div className="jumboIntro">
        <Jumbotron style={{background: "url(/assets/images/introBanner.jpg)",
                            width: "100%",
                            height: "100%"
                            }} >
        <h3>{props.message}</h3>
        </Jumbotron>
    </div>
)

export default Intro;
