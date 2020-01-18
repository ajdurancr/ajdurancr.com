# durancr-io
This is a personal project running on [durancr.io](https://durancr.io/) and built using [React](https://reactjs.org/), [Next.JS](https://nextjs.org/), [Jest](https://jestjs.io/), [Enzyme](https://airbnb.io/enzyme/) and [Contentful](https://www.contentful.com/).

The coding style used in this repo is based on Airbnb Style Guide for JavaScript and React.

## Getting Started
In order to start this project it is necessary to go through the following steps:

### 1. Setting up content models in contentful
Comming soon...

### 2. Cloning project and installing dependencies
- clone this project: `git clone https://github.com/ajdurancr/durancr-io.git`
- step into the project's folder: `cd durancr-io`
- install the project's dependencies: `npm install`

### 3. Setting up environment variables for contentful client

- create a **.env** file (*if running the project locally*) and/or set the environment variables required to connect to [contentful](https://contentful.github.io/contentful.js/contentful/7.13.1/contentful.html#.createClient):
  - `CONTENTFUL_SPACE`: Contentful Space ID
  - `CONTENTFUL_ACCESS_TOKEN`: Contentful CDA Access Token

### 4. Running the project

In order to start the project run:
- `npm run dev` for development mode
- `npm start` for production mode
