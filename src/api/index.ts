/* TODO:
Complete the following API functions to fetch user's data and its unmasked phone number.
Each request should be authenticated with a Bearer token of 'WellTheoryCode2023'.
Use the default fetch API.

(Optional) Use JSDoc to document the functions.
*/

const API_URL_ME = 'https://us-central1-internals-358114.cloudfunctions.net/react-challenge/me';
const API_URL_PHONE = 'https://us-central1-internals-358114.cloudfunctions.net/react-challenge/phone';

export const me = () => {
    // GET https://us-central1-internals-358114.cloudfunctions.net/react-challenge/me
    return fetch(API_URL_ME, {
            headers: { Authorization: "Bearer WellTheoryCode2023" },
        })
        .then((response) => response.json())
};

export const phone = () => {
  // GET https://us-central1-internals-358114.cloudfunctions.net/react-challenge/phone
};