const defaultState = {
  vehicles: [],
  favoriteVehicles: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_VEHICLES':
      return {
        ...state,
        vehicles: action.vehicles,
      };
    default:
      return state;
  }
};

