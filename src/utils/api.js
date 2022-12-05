export const sendRes = (url, obj) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(obj),
  })
};
