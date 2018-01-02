const defaultState = {
  vehiclesList: {
    vehicles: [],
    // showSpecs: {},
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_VEHICLES':
      return {
        ...state,
        vehiclesList: {
          ...state.vehiclesList,
          vehicles: action.vehicles.map(el => el.url),
        },
      };
    case 'SHOW_SPECS':
      return {
        ...state,
        showSpecs: action.showSpecs,
      };
    default:
  }
  return state;
};
