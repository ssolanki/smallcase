<!--
  Title: smallcase
  Description: A smallcase assignment
  Author: ssolanki
  -->

# First React App

### 1. Setup and Build
---

#### Dev Server:
  Make sure you have npm and node installed on your system.

  1. `npm install -g yarn`
  2. `yarn install`
  3. `yarn run start`
  4. open `localhost:8080` in your browser

#### Production Deploy:
  After 1st and 2nd command run these commands to deploy on [Surge](https://surge.sh)

  1. `npm run build`
  2. `npm run deploy`
  3. open [https://ssolanki.surge.sh](https://ssolanki.surge.sh) and go offline from dev tools and refresh.

  Running locally:

  1. In `webpack.config.prod.js` file change `200.html` to `index.html` at line:46
  2. `cd dist/`
  3. `python -m SimpleHTTPServer`
  4. open `localhost:8000` in your browser


### 2. Todo
----
  1. Support for `React-Redux`
  2. `SASS` support will be added
