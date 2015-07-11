import xhr from 'xhr';

const API = 'http://localhost:1144';

export function getJSON(url, cb) {
  xhr({
    url: `${API}/${url}`,
    method: 'GET',
    json: true
  }, (err, response, body) => {
    if (err) {
      cb(err);
    } else {
      cb(null, body);
    }
  });
}
