import React from 'react';
import './Item.css';

import '../assets/akrobat/Akrobat-Regular.otf';


// TODO: aggiungere una proprieta nei reducer
//      dove si lista il singolo veicolo o altro e qui mappa tutte le caratteristiche

const Show = (props) => {
  let vehic = props.show.show;
  console.log(vehic);
  if (vehic.length === 0) return (<p>ciao</p>);
  return (
    // console.log(props.show.vehicles[vehic])
    Object.keys(props.show.vehicles[vehic]).map((item, i) => (
      <p>{item}: {props.show.vehicles[vehic][item]}</p>
    ))
  );
};
export default Show;

