const defaultState = {
  vehiclesList: {
    vehicles: [],
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
    default:
  }
  return state;
};
