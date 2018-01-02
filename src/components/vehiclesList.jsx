import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Progress } from 'reactstrap';


class VehiclesListItem extends React.Component {
  state = {
    id : '',
  }

  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    console.log(this.props);
    console.log(e.target.id);
    this.props.vehicles.showSpecs(e.target.id);
  } 

  render() {
  return (this.props.vehicles.list.lenght === 0) ?
    (<Progress animated value={2 * 5} />) :
    (this.props.vehicles.list.map((url) => {
      return (
        <a href="#" onClick={this.handleClick}><ListGroupItem id={url}>{this.props.vehicles.vehicles[url].name}</ListGroupItem></a>
      );
    }));
  }
};

VehiclesListItem.propTypes = {
  showSpecs: PropTypes.func,
  vehicles: PropTypes.object,
};

export default VehiclesListItem;
