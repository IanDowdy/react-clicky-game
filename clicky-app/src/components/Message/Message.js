import React, {Component} from 'react';
import './Message.css';

class Message extends Component {
    state = {
        headerMessage: ""
    }

    componentDidUpdate(prevProps) {
        let newState = {
            headerMessage: "yooo"

        }


        
    }

    render() {
        return(
            "Hai"
        )
    } 
    
}

export default Message;