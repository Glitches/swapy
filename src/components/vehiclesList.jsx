import React from 'react';
import { ListGroupItem } from 'reactstrap';

const VehiclesListItem = (props) => {
  console.log(props.vehicles);
  return (props.vehicles.list.lenght === 0) ? 
    (<h1>ciao</h1>) :
    (props.vehicles.list.map((url) => {
      return (
        <a href="#"><ListGroupItem>{props.vehicles.vehicles[url].name}</ListGroupItem></a>
      );
    }));
};

export default VehiclesListItem;
