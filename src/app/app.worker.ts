/// <reference lib="webworker" />

import { environment } from 'src/environments/environment';

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// Define a function to handle messages from the main thread.
onmessage = async function (event) {
  const body = {
    model: 'gpt-4-turbo',
    temperature: 0.5,
    max_tokens: 4000,
    messages: [{ role: 'user', content: event.data.text }],
  };

  const results = await postData(environment.baseApiURL, body);
  postMessage(results);
};
