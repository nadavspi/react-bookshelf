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

export function postJSON(url, body, cb) {
  xhr({
    url: `${API}/${url}`,
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }, (err, response, body) => {
    cb(response.statusCode);
  });
}
