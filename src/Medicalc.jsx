import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Top } from './Top'
import { Chartgraph } from './Chartgraph';

export class Medicalc extends Component {
  render() {
    return (
      <div>
        <div id="wrapper">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Top />} />
              <Route path="main" element={<Chartgraph />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default Medicalc;
