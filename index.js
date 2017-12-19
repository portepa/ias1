const config  = require('./config');
const request = require('request');

const handler = (event, context, callback) => {
  request({
    url: config.URL,
    method: 'get'
  }, (err, response, body) => {
    if (err) {
      console.err(err);
      callback(err);
    } else {
      callback(null, {
        statusCode: 200,
        body: body,
        headers: {
          'content-type': response.headers['content-type']
        }
      });
    }
  });
}

module.exports = {
  handler,
}
