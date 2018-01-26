(function(){
  var spicedPg = require('spiced-pg');
  var db = spicedPg(process.env.DATABASE_URL || 'postgres:postgres:postgres@localhost:5432/habibi');
  var bcrypt = require('bcryptjs');


  exports.getInfo = () => {
    const q = `SELECT * FROM `
    return db.query(q).then(results => {
      return results.rows
    }).catch(err => {
      console.log('db getInfo err: ', err)
    })
  }

  exports.getAllRooms = () => {
    const q = `SELECT * FROM ;`;
    return db.query(q).then(results => {
      return results.rows
    }).catch(err=> {
      console.log('getAllRooms db err: ', err)
    })
  }

  exports.insertPageImage = (file, pageName) => {
    const q = ` ;`;
    const params = [file, pageName];
    return db.query(q, params).then(results => {
      console.log('successfully inserted')
      return results.rows[0]
    }).catch(err => {
      console.log('insertPage db err: ', err)
    })
  }

  exports.getAbout = () => {
    const q = `SELECT * FROM about;`
    return db.query(q).then(results => {
      return results.rows[0];
    }).catch(err => {
      console.log('getAbout db err: ', err)
    })
  }

  exports.updateAbout = text => {
    const q = `UPDATE about SET description = $1;`;
    const params = [text];
    return db.query(q, params).then(results => {
      console.log('successfully updated')
      return results.rows[0]
    }).catch(err => {
      console.log('updateAbout db err: ', err)
    })
  }

  exports.newRoom = (name, desc, occupancy, price, amenities) => {
    const q = `INSERT INTO rooms `
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
    const q = `INSERT INTO faq (question, answer, section_name) VALUES ($1, $2, $3)`;
    const params = [question, answer, sectionName];
    return db.query(q, params).then(results => {
      return results.rows[0]
    }).catch(err => {
      console.log('newQuestion db err: ', err)
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

})();
