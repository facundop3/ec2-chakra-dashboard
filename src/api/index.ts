const { REACT_APP_API_URL } = process.env;

export const getInstancesData = (tokenPromise: Promise<string>, page: number) =>
  tokenPromise
    .then(token => {
      return fetch(`${REACT_APP_API_URL}/instances?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    })
    .then(res => res.json());
