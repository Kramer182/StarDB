import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page/people-page';

import './app.css';

export default class App extends React.Component {

  state = {
  }

  onPersonSelected = (selectedPerson)=> {
    this.setState({
      selectedPerson
    })
  }
  render(){
    return (
      <div>
        <Header />
        <RandomPlanet />
  
        <PeoplePage />
      </div>
    );
  }
  
};

