import axios from 'axios';

export const getInfo = () => {
  return axios.get('/info').then({data} => {
    console.log('getInfo action: ', data)
    return {
      type: "GET_INFO",
      images: data.results[0],
      rooms: data.results[1]
    }
  }))
}

export const deleteImage = (id) => {
  return axios.post('/delete-image/' + id).then(() => {
    return {
      type: "DELETE_IMAGE",
      id: id
    }
  })
}

export const getFAQ = () => {
  return axios.get('/faq').then({data} => {
    return {
      type: "GET_FAQ",
      questions: data.results
    }
  })
}

export const newFAQ = (body) => {
  return axios.post('/new-question', body).then(() => {
    return {
      type: "NEW_QUESTION",
      question: body
    }
  })
}

export const getAddress = () => {
  return axios.get('/contact').then({data} => {
    return {
      type: "GET_CONTACT",
      contact: data.results
    }
  })
}
