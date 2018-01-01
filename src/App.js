import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';

import NavBarComp from './components/navbar';
import './App.css';
import './assets/akrobat/Akrobat-Regular.otf';
import entities from './reducers/entities.jsx';
import VehiclesListItem from './components/vehiclesList';


class App extends Component {
  state = {
    vehicles: []
  }
  // constructor(props) {
  //   super(props);
  //   // this.fetchVehicles();
  // }
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vehicles: state.vehicles,
});

const mapDispatchToProps = dispatch => ({
  addVehicles: vehicles => dispatch({
    type: 'ADD_VEHICLES',
    vehicles,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
