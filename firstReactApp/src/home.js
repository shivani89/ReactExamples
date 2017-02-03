import React, { Component } from 'react';
import hp from './react_hp.jpg';

class Home extends Component {
    render(){
        return (

        	<div>
        		<img src={hp} className="App-hp" alt="hp" />
        	
        	</div>

        	);
    }
}

export default Home;