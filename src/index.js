import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import Header from './components/Header.js';
import Filter from './components/Filter.js';
import Listings from './components/Listings.js';
import './styles/main.scss';


class App extends Component {
    constructor(){
        super();
        this.state = {
            name : ""
        }
    }

    render() {
        return (
            <div>
                <Header/>
               <section id="content-area">
                   <Filter />
                   <Listings />
               </section>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));
