import React, { Component } from 'react';
import './App.css';
import Main from './Components/MainComponent.js'
import { BrowserRouter } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import ReactGA from 'react-ga';

export default function App() {

  const history = createBrowserHistory();

  history.listen(location => {
    ReactGA.initialize('G-V1Q12DS7Y7');
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  return (
    <BrowserRouter history={history}>
      <Main />
    </BrowserRouter>
  );


//   componentDidMount(){
//     let scripts = [
//         { src: "jquery-3.5.1.min.js" },
//         { src: "/__/firebase/8.0.0/firebase-app.js"},
//         { src: "/__/firebase/8.0.0/firebase-analytics.js"},
//         { src: "/__/firebase/init.js"},
//     ]

//     scripts.map(item => { 
//         const script = document.createElement("script")
//         script.src = item.src
//         script.async = true
//         document.body.appendChild(script)
//     })    
//  }
}
