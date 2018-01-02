const defaultState = {
  vehicles: {},
};

const normalize = (arr, key) => arr.reduce((accum, el) => {
  return {
    ...accum,
    [el[key]]: el,
  };
}, {});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_VEHICLES':
      return {
        ...state,
        vehicles: {
          ...state.vehicles,
          ...normalize(action.vehicles, 'url')
        },
      };
    default:
      return state;
  }
};

