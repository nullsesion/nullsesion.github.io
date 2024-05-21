import React, { Component } from 'react'; 
import './UserName.css';

export default class UserName extends Component {
    render() {
        return (
            <div>
                <span>Имя: </span>
                <span><input type="text" /></span>
            </div>
        );
    }
  }