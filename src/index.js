import React from "react";
import ReactDOM from 'react-dom'
import { Medicalc } from './Medicalc';
import { Chartgraph } from './Chartgraph';
import { Datatable } from './DataTable'
import {Gantchart} from './Gantchart'
import { Test } from './Test'

import './css/style.scss'
// import './css/common.css'


// ReactDOM.render(<Test/>,document.getElementById('root'))
ReactDOM.render(<Medicalc/>,document.getElementById('root'))
// ReactDOM.render(<Gantchart/>,document.getElementById('root'))
// ReactDOM.render(<Chartgraph/>,document.getElementById('root'))
// ReactDOM.render(<Datatable/>,document.getElementById('root'))