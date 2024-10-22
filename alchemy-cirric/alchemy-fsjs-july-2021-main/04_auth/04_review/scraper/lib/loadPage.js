import fetch from 'node-fetch';

// this function makes an http request to a page
// and returns its HTML
export default async function loadPage(url) {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error('Not found');
    else return res.text();
  });
}
