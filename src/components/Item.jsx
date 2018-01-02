// Photo is from respoective owner
// I ABSOLUTELY don't want to break copyright, it's just for my study purpose


import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';
import '../assets/akrobat/Akrobat-Regular.otf';
import hqdefault from '../assets/hqdefault.jpg'
// TODO: aggiungere una proprieta nei reducer
//      dove si lista il singolo veicolo o altro e qui mappa tutte le caratteristiche

const Show = (props) => {
  const vehic = props.show.show;
  console.log(vehic);
  if (vehic.length === 0) return (<img src={hqdefault} alt={"hqdefualt"} />);
  return (
    // console.log(props.show.vehicles[vehic])
    Object.keys(props.show.vehicles[vehic]).map((item, i) => (
      <p>{item}: {props.show.vehicles[vehic][item]}</p>
    ))
  );
};

Show.propTypes = {
  show: PropTypes.object,
};

export default Show;

