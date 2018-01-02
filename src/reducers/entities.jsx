const defaultState = {
  vehicles: {},
  show: [],

};

const normalize = (arr, key) => arr.reduce((accum, el) => ({
  ...accum,
  [el[key]]: el,
}), {});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_VEHICLES':
      return {
        ...state,
        vehicles: {
          ...state.vehicles,
          ...normalize(action.vehicles, 'url'),
        },
      };
    case 'SHOW_SPECS':
      // console.log(action);
      return {
        ...state,
        show: [action.show],
      };
    default:
      return state;
  }
};

