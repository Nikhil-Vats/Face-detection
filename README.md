## About

Face detection demo (takes ~10s to load libraries and detect face) - https://facemesh-detection.netlify.app/

Subscriptions demo - https://facemesh-detection.netlify.app/data

This webapp was a part of an internship test. It has the following features -

1. Using [Tensorflow's facemesh](https://github.com/tensorflow/tfjs-models/tree/master/facemesh) to infer the surface geometry of human's face. Only one keypoint is rendered for demo purpose.

2. Using HasuraDB and integrating Apollo Client for subscriptions (real time data fetching). Check it out here - https://facemesh-detection.netlify.app/data.

3. Using ThreeJS instead of HTML Canvas for rendering the video and the keypoints in a more efficient way.

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
