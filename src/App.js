import logo from './logo.svg';

import './App.css';
import React,  {Component} from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';


// import {Component} from 'react'
// import RemWrapper from './RemWrapper';
// const {ReactDraggable: Draggable, React, ReactDOM} = window;

export default class App extends Component {
  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  render() {
    return (
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    );
  }
}


