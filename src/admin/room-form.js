import React from 'react';
import { newImage } from '.././actions';
import ImageForm from './image-form'

const RoomForm = ({ toggleForm }) => {
  return (<div className="upload">
            <div className="upload preview">
              {!!images && images.map(image => <img className="preview-images" src={image.url} />)}
            </div>
            <div className="upload-form">
            <h1>Choose one or multiple pictures to add:</h1>
              <input id="files" type="file" onChange={(e) => uploadImages(e)} multiple/>
              <button type="submit" onClick={() => toggleForm()}>Submit</button>
            </div>
          </div>
      )
}

const filterImages = (e) => {
  let files = [...e.target.files]

  uploadImages(files)
}

const uploadImages = (imageArray) => {
  if (imageArray.length > 0) {
    newImage(imageArray[0], 'home');
    imageArray.shift();
    uploadImages(imageArray)
  } else {
    return;
  }
}


export default ImageForm;
