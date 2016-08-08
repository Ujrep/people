
function path(url = '') {
  if (url.indexOf('http') === 0) return url;
  return `https://slack.com/api/${url}`;
}

export default {
  get(url) {
    return fetch(path(url), {
      method: 'get',
    }).then((response) => {
      return response.json();
    });
  },
};
