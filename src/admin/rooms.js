import { React, Component } from 'react';
import RoomForm from './room-form';
import { connect } from 'react-redux';

class Rooms extends Component {

  ComponentDidMount() {
    this.props.getInfo()
  }

  render() {

    if (!this.props.images) {
      return <div>Loading, Please Wait....</div>
    }

    const { images, toggleForm, rooms } = this.props

    const amenities = (≤
      <ul>
      </ul>
    )

    const indivRoom = (
      <div className="room-container">
        <div className="rooms">
        {rooms.map(room=> {
          <h1>{room.room_name}</h1>
          <p>{room.description}</p>
        })}
        </div>
      </div>
    )

    return (
      <div>
        <div>
          {rooms && }
        </div>

        <div>

        </div>
        {showForm && <RoomForm toggleForm={toggleForm} />}
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    images: state.images.filter(image => images.page == 'room'),
    rooms: state.rooms.filter(room => room.id)
  }
}

const mapDispatchesToProps = function (dispatch) {
  return {
    getInfo: () => dispatch(getInfo()),
    addRoom: (data) => dispatch(addRoom(data)),
    deleteImage: (id) => dispatch(deleteImage(id))
  }
}


export default connect(mapStateToProps, mapDispatchesToProps)(Rooms)
