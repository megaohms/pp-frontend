/* TODO:

(Optional) Use JSDoc to document the functions.
*/

const API_URL_ME = 'https://us-central1-internals-358114.cloudfunctions.net/react-challenge/me';
const API_URL_PHONE = 'https://us-central1-internals-358114.cloudfunctions.net/react-challenge/phone';

export const me = () => {
  return fetch(API_URL_ME, {
      headers: { Authorization: "Bearer WellTheoryCode2023" },
    })
    .then((response) => response.json())
};

export const phone = () => {
  return fetch(API_URL_PHONE, {
      headers: { Authorization: "Bearer WellTheoryCode2023" },
    })
    .then((response) => response.json())
};