import React, { Component } from 'react';
import logo from '../assets/logo.svg';

class Header extends Component {
    constructor(){
        super()
        this.state = {
            name: "Joe"
        }
    }

    render() {
        return (
            <header>
                <div className="logo"><img src={logo} alt="logo" /></div>
                <nav>
                    <a href="#">Create Ads</a>
                    <a href="#">About Us</a>
                    <a href="#">Log in</a>
                    <a href="#" className="register-btn">Register</a>
                </nav>
            </header>
        )
    }
}

export default Header;