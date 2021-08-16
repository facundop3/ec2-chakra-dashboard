const { REACT_APP_API_URL } = process.env;

export const getInstancesData = tokenPromise =>
  tokenPromise
    .then(token => {
      return fetch(`${REACT_APP_API_URL}/instances`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    })
    .then(res => res.json());
