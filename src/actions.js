import axios from 'axios';

export function getInfo() {
  return axios.get('/info').then(({data}) => {
    console.log('results: ', data)
    return {
      type: "GET_INFO",
      images: data.data[0],
      rooms: data.data[1]
    }
  }).catch(err => {
    console.log('err: ', err)
  })
}

export function newImage (file, page){

  let data = new FormData();
  data.append('file', file)
  data.append('page', page)

  return axios.post('/new-image', data).then((result) => {
    console.log('in newImage : ', result)
  })
}

export function deleteImage (id){
  return axios.post('/delete-image/' + id).then(() => {
    return {
      type: "DELETE_IMAGE",
      id: id
    }
  })
}

export function getFAQ (){
  return axios.get('/faq').then(() => {
    console.log("getFaq")
    return {
      type: "GET_FAQ",
      questions: data.results
    }
  })
}

export function newFAQ (body){
  return axios.post('/new-question', body).then(() => {
    return {
      type: "NEW_QUESTION",
      question: body
    }
  })
}

export function getAddress (){
  return axios.get('/contact').then(({data}) => {
    return {
      type: "GET_CONTACT",
      contact: data.results
    }
  })
}
