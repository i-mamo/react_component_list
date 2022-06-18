import React, { Component, createElement } from "react";
import './css/Gantchart.scss'

export class Gantchart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      target: 'chart',

    }


  }
  componentDidMount() {
    for (let i = 1; i <= 31; i++) {
      const div_elm = document.createElement('div')
      div_elm.id = i
      div_elm.innerHTML = i
      console.log(div_elm);
      document.getElementsByClassName('right_header')[0].appendChild(div_elm)
    }
  }
  render() {
    return (
      <>
        <div id="chart">
          <div>
            <div className="left_contents">
              <div className="left_header">
                <div className="th">タスク名</div>
                <div className="th">担当者</div>
                <div className="th">進捗状況</div>
              </div>
              <div className="td">test1</div>
              <div className="td">test</div>
              <div className="td">test1</div>
            </div>
            <div className="right_contents">
              <div className="right_header">

              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Gantchart;
