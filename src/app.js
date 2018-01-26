import React from 'react';
import axios from 'axios';
import Nav from './nav/nav';
import Footer from './nav/footer';


export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showForm: false,
    };

    this.handleChange = this.handleChange.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  componentDidMount(){
    
  }



  render() {
    console.log('rendering app')

    const { showForm } = this.state

    const children = React.cloneElement(this.props.children, {
      showForm,
      handleChange: this.handleChange,
      toggleForm: this.toggleForm
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
