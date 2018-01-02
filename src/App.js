import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';

import NavBarComp from './components/navbar';
import './App.css';
import './assets/akrobat/Akrobat-Regular.otf';
// import reducer from './reducers';
import VehiclesListItem from './components/vehiclesList';
import Show from './components/Item';


class App extends Component {
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
    // console.log(this.props);
    return (
      <div>
        <div className="App">
          <NavBarComp />
        </div>
        <div className="dashBoard">
          <ListGroup>
            <VehiclesListItem vehicles={this.props} />
          </ListGroup>
          <div className="specsDiv">
            <Show show={this.props} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vehicles: state.entities.vehicles,
  list: state.pages.vehiclesList.vehicles,
  show: state.entities.show,
});

const mapDispatchToProps = dispatch => ({
  addVehicles: vehicles => dispatch({
    type: 'ADD_VEHICLES',
    vehicles,
  }),
  showSpecs: show => dispatch({
    type: 'SHOW_SPECS',
    show,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
