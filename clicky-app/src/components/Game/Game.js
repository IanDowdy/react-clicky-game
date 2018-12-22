import React, { Component } from 'react';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Container from '../Container/Container';
import GamePiece from '../GamePiece/GamePiece';
import data from '../../data.json';
import './Game.css';

class Game extends Component {
  
        state = {
            data,
            message: "Whatup Foo",
            score: 0,
            topScore: 0
        };

        componentDidMount() {
            this.setState({ data: this.shuffleDeck(this.state.data) });
        }

        click = ( id, message )=> {
            this.messageClick(message);
            console.log(id, message)
            this.setState({
                data: this.shuffleDeck(data),
                clicked: true
            })
            console.log(data.map(item => (
                item.clicked
            )))
        }
        
        messageClick = message => {
            console.log(message)
            this.setState({
                message: message,
            })
        }

        shuffleDeck = data => {
            let newData = data.sort(function(a, b){return 0.5 - Math.random()});
            return newData;
        };

    render() {
        return (
            <div className="Game" style={{'backgroundImage': `url('assets/images/nbaLogos.jpg')`}}>
                <Header />
                <Intro message={this.state.message} />
                <Container>
                    {
                        this.state.data.map(item => (
                            <div>
                                <GamePiece
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    message={item.message}
                                    clicked={item.clicked}
                                    handleClick={this.click}
                                    messageClick={this.messageClick}
                                />
                            </div>
                        ))
                    }
                </Container>
            </div>
        );
    }
}

export default Game;