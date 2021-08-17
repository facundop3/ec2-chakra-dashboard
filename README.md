## Setup:
1 - Install dependencies `yarn install` <br>
2 - Create a `.env` file following the `.env.example` file structure:<br>

`REACT_APP_AUTH0_AUDIENCE=<Your_auth0_audience>`

`REACT_APP_AUTH0_CLIENT_ID=<Your_auth0_client_ID>`

`REACT_APP_AUTH0_DOMAIN=<Your_auth0_domain>`

`REACT_APP_API_URL=<Your_API_url>`

If you're running server and client locally your `REACT_APP_API_URL` will look like: <br>
<br>
```REACT_APP_API_URL=http://localhost:3005/api```

After installing the dependencies and creating the `.env` file  you can start the project by running `yarn start`


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
