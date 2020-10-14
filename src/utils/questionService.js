const BASE_URL = '/api/questions';

export default {
    index,
    create
}

function index() {
    return fetch(BASE_URL).then(res => res.json());
}
  
function create(question) {
    const options = {
        method: 'POST',
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify({question})
    };
    return fetch(BASE_URL, options).then(res => res.json());
}