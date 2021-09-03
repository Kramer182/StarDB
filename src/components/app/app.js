import React from 'react';
import SwapiService  from '../../services/swapi-service';
import Header from '../header';
import Row from '../row';
import RandomPlanet from '../random-planet';
import './app.css';
import ItemDetails, {Record} from '../item-details/item-details';

export default class App extends React.Component {

  swapiService = new SwapiService();
  state = {
  }

  onPersonSelected = (selectedPerson)=> {
    this.setState({
      selectedPerson
    })
  }
  render(){
    const {getPerson, getStarship,
      getPersonImage,getStarshipImage} = this.swapiService;

    const personDetails = (
    <ItemDetails itemId ={11}
    getData = {getPerson}
    getImageUrl = {getPersonImage} >
      <Record field = 'gender' label = 'Gender '/>
      <Record field = 'eyeColor' label ='Eye Color '/>
    </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails itemId = {5}
      getData = {getStarship}
      getImageUrl = {getStarshipImage} >
        <Record field = 'model' label = 'Model '/>
        <Record field = 'length' label = 'Length '/>
        <Record field = 'costInCredits' label = 'Cost '/>
      </ItemDetails>
    )
    return (
      <div>
        <Header />
        <RandomPlanet />
  
        <Row left = {personDetails} right = {starshipDetails} />
      </div>
    );
  }
  
};

