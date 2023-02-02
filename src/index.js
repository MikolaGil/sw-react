import React from 'react';
import ReactDOM from 'react-dom/client';
import SWapiservice from './swapi-service';

import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>, document.getElementById('root'));

// const swapi = new SWapiservice();
// swapi.getPlanet(1).then(data => console.log(data));