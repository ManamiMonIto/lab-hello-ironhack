import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";




const root = <div>
  <div className="head">

  <div className="nav">
  <img src="/images/ironhack-logo.svg"/>
  <img src="/images/menu-top.svg"/>
  </div>

  <div className="main">

  <div className="left"> 
  <h1>Say hello to ReactJS</h1>
  <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
  <button>
    Awesome!
  </button>
  </div>

  <div className="right">
  <img src="/images/react-logo.svg"/>
  <img src="/images/react-logo.svg"/>
  <img src="/images/react-logo.svg"/>
  </div>

  </div>
  </div>
  

  <div className="container">
  <div>
  <img src="/images/icon1.png"/>
  <h2>
    Declarative
  </h2>
  <p>
    React makes it painless to create interactive Uls.
  </p>
  </div>
  <div>
  <img src="/images/icon2.png"/>
  <h2>
    Components
  </h2>
  <p>
    Build encapsulated components that manage thier state.
  </p>
  </div>
  <div>
  <img src="/images/icon3.png"/>
  <h2>
    Single-Way
  </h2>
  <p>
    A set of immutable values are passed to the component's.
  </p>
  </div>
  <div>
  <img src="/images/icon4.png"/>
  <h2>
    JSX
  </h2>
  <p>
    Statically-typed, designed to run on modern browsers.
  </p>
  </div>
  
</div>
</div>


ReactDOM.render(root, document.getElementById("root"));
// ReactDOM.render(body, document.getElementById("body"));
