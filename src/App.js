import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';

import NavBarComp from './components/navbar';
import './App.css';
import './assets/akrobat/Akrobat-Regular.otf';
import reducer from './reducers';
import VehiclesListItem from './components/vehiclesList';
import Show from './components/Item';


class App extends Component {
  state = {
    vehicles: [],
    showSpecs: {}
  }
 
  componentDidMount() {
    this.fetchVehicles();
  }

  fetchVehicles() {
    fetch('https://swapi.co/api/vehicles/')
      .then(response => response.json())
      .then(data => data.results)
      .then((data) => {
        this.props.addVehicles(data);
      });
  }


  render() {
    console.log(this.props);
    return (
      <div> 
      <div className="App">
        <NavBarComp />
        </div>  
        <ListGroup>
          <VehiclesListItem vehicles={this.props} />
        </ListGroup>
        {/* <Item></Item> */}
        <Show showSpecs={this.props}/>>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vehicles: state.entities.vehicles,
  list: state.pages.vehiclesList.vehicles,
  showSpecs: state.pages.vehiclesList.showSpecs,
});

const mapDispatchToProps = dispatch => ({
  addVehicles: vehicles => dispatch({
    type: 'ADD_VEHICLES',
    vehicles,
  }),
  showSpecs: vehicle => dispatch({
    type: 'SHOW_SPECS',
    vehicle,
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
