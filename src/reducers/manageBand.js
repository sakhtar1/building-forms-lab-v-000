export default function manageBand(state = {
  bands: [],
}, action) {
  return state
}{
  switch (action.type) {
    case 'ADD_BAND':

      return { bands: state.bands.concat(action.payload.name)}

    default:
      return state;
  }
}
