import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import paper from './images/paper.jpg'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <header>hodor.</header>
          <nav>
          <ul>
            <li>(about)  </li>
            <li>   (more)</li>
            <li>  (pictures)</li>
          </ul>
          </nav>
        </div>
        <p className='App-article'>
          <p>Hodor hodor hodor; hodor hodor hodor! Hodor, hodor, hodor. Hodor hodor hodor HODOR hodor, hodor hodor, hodor. Hodor hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor hodor, hodor. Hodor hodor hodor hodor. Hodor. Hodor. Hodor hodor, hodor. Hodor hodor; hodor hodor. Hodor. Hodor hodor, hodor. Hodor HODOR hodor, hodor hodor?! </p>
        </p>
        <p className='App-buffer'>
          <img src={paper}/>
        </p>
        <section className='App-aside1'>
          <p>Actual Assignment Goes Here:
          I feel like React will eventually be something that I will really like. As of right now I see how it could potentially help me write more succinct code which is overall pretty fantastic. I don't quite understand it as of yet so I'm more tentative when it comes to breaking my code constantly just to fix it with some curly braces. That scares the living daylights out of me.</p>
        </section>
        <section className='App-aside2'>
        <p>Hodor hodor hodor; hodor hodor hodor! Hodor, hodor, hodor. Hodor hodor hodor HODOR hodor, hodor hodor, hodor. Hodor hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor hodor, hodor. Hodor hodor hodor hodor. Hodor. Hodor. Hodor hodor, hodor. Hodor hodor; hodor hodor. Hodor. Hodor hodor, hodor. Hodor HODOR hodor, hodor hodor?!</p>
        </section>
        <footer className ="App-footer"></footer>
      </div>

    )
  }
}

export default App
