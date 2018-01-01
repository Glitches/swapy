

import React from 'react';
import { ListGroupItem } from 'reactstrap';

const VehiclesListItem = (props) => {
  return (props.vehicles.vehicles.lenght === 0) ? 
    (<h1>ciao</h1>):
    (props.vehicles.vehicles.map((el) => {
      return (
        <a href="#"><ListGroupItem>{el.name}</ListGroupItem></a>
      );
    }));
};

export default VehiclesListItem;
