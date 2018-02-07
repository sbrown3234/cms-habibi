(function(){
  var spicedPg = require('spiced-pg');
  var db = spicedPg(process.env.DATABASE_URL || 'postgres:postgres:postgres@localhost:5432/habibi');
  var bcrypt = require('bcryptjs');


  exports.getImages = () => {
    const q = `SELECT * FROM images;`
    return db.query(q).then(results => {
      return results.rows
    }).catch(err => {
      console.log('db getInfo err: ', err)
    })
  }

  exports.getAllRooms = () => {
    const q = `SELECT rooms.id, room_name, description, occupancy, price, amenities, url
              FROM rooms
              JOIN images
              ON rooms.id = images.room_id;`;
    return db.query(q).then(results => {
      return results.rows
    }).catch(err=> {
      console.log('getAllRooms db err: ', err)
    })
  }

  exports.insertPageImage = (file, pageName) => {
    const q = `INSERT INTO images (url, page) VALUES ($1, $2);`;
    const params = [file, pageName];
    return db.query(q, params).then(results => {
      console.log('successfully inserted')
      return results.rows[0]
    }).catch(err => {
      console.log('insertPage db err: ', err)
    })
  }

  exports.newRoom = (name, desc, occupancy, price, amenities) => {
    const q = `INSERT INTO rooms (room_name, description, occupancy, price, amenities) VALUES ($1, $2, $3, $4, $5) RETURNING id;`
    const params = [name, desc, occupancy, price, amenities];
    return db.query(q, params).then(results => {
      console.log('new room insert!')
      return results.rows[0]
    }).catch(err => {
      console.log('newRoom db err: ', err)
    })
  }

  exports.newRoomImage = (url, roomId) => {
    const q = `INSERT INTO images (url, room_id) VALUES ($1, $2);`
    const params = [url, roomId];
    return db.query(q, params).then(results => {
      console.log('successfully inserted image')
      return results.rows[0]
    }).catch(err => {
      console.log('newRoomImage db err: ', err)
    })
  }

  exports.newQuestion = (question, answer, sectionName) => {
    const q = `INSERT INTO faq (question, answer, section_name) VALUES ($1, $2, $3)
              RETURNING id`;
    const params = [question, answer, sectionName];
    return db.query(q, params).then(results => {
      return results.rows[0]
    }).catch(err => {
      console.log('newQuestion db err: ', err)
    })
  }

  exports.getRecentFAQ = (id) => {
    const q = `SELECT * FROM faq_questions
              WHERE id = $1;`
    const params = [id];
    return db.query(q, params).then(results => {
      return results.rows[0]
    }).catch(err => {
      console.log('getRecentFAQ db err: ', err)
    })
  }

  exports.getFAQ = () => {
    const q = `SELECT * FROM faq;`;
    return db.query(q).then(results => {
      console.log('getFaq results: ', results.rows)
      return results.rows
    }).catch(err => {
      console.log('getFAQ db err: ', err)
    })
  }

  exports.updateAddress  = (data) => {
    const q = `UPDATE address SET name = $1, street = $2, city = $3, state = $4, country = $5, zip = $6, phone = $7, email = $8;`
    const params = [data.name, data.street, data.city, data.state, data.country, data.zip, data.phone, data.email];
    return db.query(q, params).then(results => {
      return results.rows[0]
    }).catch(err => {
      console.log('updateAddress db err: ', err)
    })
  }

})();
