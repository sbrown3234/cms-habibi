import React from 'react';
import axios from 'axios';
import Nav from './nav/nav';
import Footer from './nav/footer';


export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showForm: false,
      showMenu: false
    };

    this.handleChange = this.handleChange.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
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

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  componentDidMount(){

  }



  render() {
    console.log('rendering app')

    const { showForm, showMenu } = this.state

    const children = React.cloneElement(this.props.children, {
      showForm,
      handleChange: this.handleChange,
      toggleForm: this.toggleForm
    })

    return (
      <div id="app">
        <Nav showMenu={showMenu} toggleMenu={this.toggleMenu}/>
        { children }
        <Footer />
      </div>
    )
  }

}
