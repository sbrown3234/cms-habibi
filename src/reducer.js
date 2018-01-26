const defaultState = {}

export default function(state = defaultState, action) {
  if (action.type == 'HOME_IMAGES') {
    state = Object.assign({}, state, {
      images: action.image
    })
  }

  if (action.type == 'GET_ROOMS') {
    state = Object.assign({}, state, {
      images: action.images
    })
  }

return state;
}
