import React, {Component} from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details/item-details';
import './people-page.css';
import SwapiService from '../../services/swapi-service';



export default class PeoplePage extends Component {
    swapiService = new SwapiService();
    state = {
        selectedPerson: 5  
    }
    onPersonSelected = (selectedPerson)=> {
        this.setState({
          selectedPerson
        })
      }

   
    render() {
        const itemList = (
            <ItemList 
                onItemSelected = {this.onPersonSelected}
                getData = {this.swapiService.getAllPeople}>

                {(i) => (
                    `${i.name} ( ${i.birthYear})`
                    )};
            </ItemList>
          );
          
          const ItemDetails = (
              <ItemDetails ItemId = {this.state.selectedPerson} />
          );
        return (
        <Row left = {itemList} right = {ItemDetails} />
        );
    }
}