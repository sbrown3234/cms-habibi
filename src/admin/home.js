import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getInfo, deleteImage } from '.././actions';
import ImageForm from './image-form';

class Home extends React.Component {
  componentDidMount() {
    this.props.getInfo()
  }
  render() {
    console.log('rending home')
    console.log('props: ', this.props)

    if (!this.props) {
      return <div>Loading...</div>
    }

    const { deleteImage, handleChange, toggleForm, showForm, images, rooms } = this.props

    const carousel = (
      <div className= "carousel images">
        {images.map(image => <Link to="/rooms"><img src={image.url} /></Link>)}
      </div>
    )

    const content = (
      <div className="home-rooms">
        {rooms.map(room => {
          <div className="home-room">
              <h1>{room.room_name}</h1>
              <Link to="/rooms"><img src={room.url[0]}/></Link>
              <p>{room.description}</p>
        </div>
        })}
      </div>
    )

    return (
      <div className="home-container">
        <h1>Hostel Habibi</h1>
        {carousel}
        {(images.length === 0) && <h1>Start uploading some images!</h1>}
        <button type="button" onClick={()=> toggleForm()}>Add Photo</button>
        {!!showForm && <ImageForm images={images} toggleForm={toggleForm}/>}
        <div className="booking">
        <h1>The <u>Best</u> Backpacking Hostel in San Diego</h1>
        <Link to="https://hotels.cloudbeds.com/en/reservas/dgcNyK"><div>Book Now</div></Link>
        </div>
        {content}
        {(rooms.length ==0) && <h1>There are no rooms to show -- start uploading rooms <Link to="/rooms">here</Link></h1>}
      </div>
    )

  }
}

const mapStateToProps =  function (state) {
  return {
    images: state.images.filter(image => image.page == 'home'),
    rooms: state.rooms
  }
}

const mapDispatchesToProps = function (dispatch) {
  return {
    getInfo: () => dispatch(getInfo()),
    deleteImage: (id) => dispatch(deleteImage(id))
  }
}

export default connect(mapStateToProps, mapDispatchesToProps)(Home)
