import React, { Component } from 'react';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Container from '../Container/Container';
import GamePiece from '../GamePiece/GamePiece';
import data from '../../data.json';
import './Game';

class Game extends Component {
  
        state = {
            data,
            message: "Whatup Foo"
        };

        componentDidMount() {
            this.setState({ data });
        }
    

    render() {
        return (
            <div className="Game">
                <Header />
                <Intro message={this.state.message} />
                <Container>
                    {
                        this.state.data.map(item => (
                            <div>
                                HELLO
                                <GamePiece
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
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