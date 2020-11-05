import React, { Component } from 'react';
import './App.css';
import Main from './Components/MainComponent.js'
import { BrowserRouter } from 'react-router-dom';
// import $ from 'jquery';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }

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

export default App;
