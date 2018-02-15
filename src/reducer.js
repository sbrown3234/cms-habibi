const defaultState = {
  images : [],
  rooms : [],
  questions : [],
  contact : []
}

export default function(state = defaultState, action) {
  if (action.type == 'GET_INFO') {
    state = Object.assign({}, state, {
      images: action.images,
      rooms: action.rooms
    })
  }

  if (action.type == 'GET_FAQ') {
    state = Object.assign({}, state, {
      questions: action.questions
    })
  }

  if (action.type == 'NEW_IMAGE') {
    state = Object.assign({}, state.images, {
      images: [...state.images, action.image]
    })
  }

  if (action.type == 'NEW_QUESTION') {
    state = Object.assign({}, state, {
      questions: [...state.questions, action.question]
    })
  }

  if (action.type == 'GET_CONTACT') {
    state = Object.assign({}, state, {
      contact: action.contact
    })
  }

return state;
}
