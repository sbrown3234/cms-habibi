import React from 'react';
import axios from 'axios';
import Nav from './nav/nav';
import Footer from './nav/footer';


export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      toggleForm: false,
    };

    this.addRoom = this.addRoom.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addImage = this.addImage.bind(this)
    this.handlePicture = this.handlePicture.bind(this)
    this.addQuestion = this.addQuestion.bind(this)
    this.addSection = this.addSection.bind(this)
    this.showForm = this.showForm.bind(this)
    this.upload = this.upload.bind(this)
    this.update = this.update.bind(this)
  }

  componentDidMount(){}



  render() {
    console.log('rendering app')

    if(!this.state) {
      return (
        <div>Loading..... </div>
      )
    }

    const { toggleForm } = this.state

    const children = React.cloneElement(this.props.children, {
      toggleForm,
      addRoom: this.addRoom,
      handleChange: this.handleChange,
      addImage: this.addImage,
      handlePictures: this.handlePictures,
      addQuestion: this.addQuestion,
      addSection: this.addSection,
      showForm: this.showForm,
      upload: this.upload,
      update: this.update
    })

    return (
      <div id="app">
        <Nav />
        { children }
        <Footer />
      </div>
    )
  }

}
