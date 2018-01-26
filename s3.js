(function() {
  const fs = require('fs');
  const knox = require('knox');

  let secrets;


  if (process.env.NODE_ENV == 'production') {
    secrets = process.env;
} else {
    secrets = require('./secrets');
}

const client = knox.createClient({
    key: secrets.AWS_KEY,
    secret: secrets.AWS_SECRET,
    bucket: 'alsaru'
});

  exports.upload = (file) => {
    return new Promise ((resolve, reject) => {
      const s3Request = client.put(file.filename, {
        'Content-Type': file.mimetype,
        'Content-Length': file.size,
        'x-amz-acl': 'public-read'
      });
      const readStream = fs.createReadStream(file.path);
      readStream.pipe(s3Request);
      s3Request.on('response', s3Response => {
        const wasSuccessful = s3Response.statusCode == 200;
        if (wasSuccessful) {
          resolve()
        } else {
          reject();
        }
      })
    })
  }
})()
