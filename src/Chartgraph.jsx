import React, { Component } from 'react';


class Graph {
  constructor(data) {
    console.log(data);
    this.data = data.data

  }
}

export class Chartgraph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      json: [
        { id: 1, name: '山田　太郎', cash: 2000, credit: 1500, date: '2022/01/01', apdated_at: '2022/02/01' },
        { id: 2, name: '山田　一郎', cash: 3000, credit: 2500, date: '2022/02/02', apdated_at: '2022/02/01' },
        { id: 3, name: 'テストあ', cash: 4000, credit: 5000, date: '2022/03/03', updated_at: '2022/02/01' },
        { id: 4, name: 'テストい', cash: 5000, credit: 3500, date: '2022/04/04', updated_at: '2022/02/01' },
        { id: 5, name: 'テストう', cash: 6000, credit: 4500, date: '2022/05/05', updated_at: '2022/02/01' },
        { id: 6, name: 'テストえ', cash: 7000, credit: 500, date: '2022/06/06', updated_at: '2022/02/01' },
        { id: 7, name: 'テストお', cash: 8000, credit: 1200, date: '2022/07/07', updated_at: '2022/02/01' },
        { id: 8, name: 'テストか', cash: 9000, credit: 5500, date: '2022/08/08', updated_at: '2022/02/01' },
        { id: 9, name: 'テストき', cash: 10000, credit: 1600, date: '2022/09/09', updated_at: '2022/02/01' },
        { id: 10, name: 'テストく', cash: 2000, credit: 1500, date: '2022/10/10', updated_at: '2022/02/01' },
        { id: 11, name: 'テストけ', cash: 3000, credit: 800, date: '2022/11/11', updated_at: '2022/02/01' },
        { id: 12, name: 'テストこ', cash: 2000, credit: 400, date: '2022/12/12', updated_at: '2022/02/01' },
        { id: 13, name: 'テストさ', cash: 8000, credit: 1600, date: '2022/01/01', apdated_at: '2022/02/01' },
        { id: 14, name: 'テストし', cash: 2200, credit: 2000, date: '2022/02/02', apdated_at: '2022/02/01' },
        { id: 15, name: 'テストす', cash: 2300, credit: 2200, date: '2022/03/03', updated_at: '2022/02/01' },
        { id: 16, name: 'テストせ', cash: 2400, credit: 1200, date: '2022/04/04', updated_at: '2022/02/01' },
        { id: 17, name: 'テストそ', cash: 2800, credit: 100, date: '2022/05/05', updated_at: '2022/02/01' },
        { id: 18, name: 'テストa', cash: 2900, credit: 1000, date: '2022/06/06', updated_at: '2022/02/01' },
        { id: 19, name: 'テストb', cash: 1000, credit: 2500, date: '2022/07/07', updated_at: '2022/02/01' },
        { id: 20, name: 'テストc', cash: 1200, credit: 5000, date: '2022/08/08', updated_at: '2022/02/01' },
        { id: 21, name: 'テストd', cash: 1300, credit: 5300, date: '2022/09/09', updated_at: '2022/02/01' },
        { id: 22, name: 'テストe', cash: 1400, credit: 5500, date: '2022/10/10', updated_at: '2022/02/01' },
        { id: 23, name: 'テストf', cash: 4800, credit: 4500, date: '2022/11/11', updated_at: '2022/02/01' },
        { id: 24, name: 'テストg', cash: 3500, credit: 3500, date: '2022/12/12', updated_at: '2022/02/01' },
        { id: 25, name: 'テストA', cash: 2600, credit: 7500, date: '2022/01/01', apdated_at: '2022/02/01' },
        { id: 26, name: 'テストB', cash: 7800, credit: 8500, date: '2022/02/02', apdated_at: '2022/02/01' },
        { id: 27, name: 'テストC', cash: 4500, credit: 6500, date: '2022/03/03', updated_at: '2022/02/01' },
        { id: 28, name: 'テストD', cash: 8000, credit: 6100, date: '2022/04/04', updated_at: '2022/02/01' },
        { id: 29, name: 'テストE', cash: 10000, credit: 1700, date: '2022/05/05', updated_at: '2022/02/01' },
        { id: 30, name: 'テストF', cash: 20000, credit: 1800, date: '2022/06/06', updated_at: '2022/02/01' },
        { id: 31, name: 'テストG', cash: 200, credit: 1500, date: '2022/07/07', updated_at: '2022/02/01' },
        { id: 32, name: 'JAM BROWN', cash: 2000, credit: 800, date: '2022/08/08', updated_at: '2022/02/01' },
        { id: 33, name: 'DAVID JSON', cash: 3000, credit: 200, date: '2022/09/09', updated_at: '2022/02/01' },
        { id: 34, name: 'ANDO TARO', cash: 3000, credit: 400, date: '2022/10/10', updated_at: '2022/02/01' },
        { id: 35, name: 'SUZUKI RYO', cash: 3500, credit: 900, date: '2022/11/11', updated_at: '2022/02/01' },
        { id: 360, name: 'can do', cash: 1900, credit: 500, date: '2022/12/12', updated_at: '2022/02/01' },
      ]
    }


  }

  componentDidMount() {

    let data_json = {
      target: '#test',
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          
        }]
      },

      

    }

    new Graph(data_json)

  }

  render() {
    return (
      <>
        <div id="test">
          <div id="layer_main">
            <svg xmlns="http://www.w3.org/2000/svg" height={500} width={700} viewBox="150 -20 500 700">
              {/* Barグラフ */}
              <g stroke="black" strokeWidth="2">
                <rect x="60" y="240" width="30" height="360" stroke="black" fill="green" strokeWidth="2" />
                <rect x="120" y="150" width="30" height="450" stroke="black" fill="yellow" strokeWidth="2" />
                <rect x="180" y="170" width="30" height="430" stroke="black" fill="tomato" strokeWidth="2" />
                <rect x="240" y="300" width="30" height="300" stroke="black" fill="red" strokeWidth="2" />
                <rect x="300" y="400" width="30" height="200" stroke="black" fill="orange" strokeWidth="2" />
                <rect x="360" y="320" width="30" height="280" stroke="black" fill="skyblue" strokeWidth="2" />
                <rect x="420" y="240" width="30" height="360" stroke="black" fill="green" strokeWidth="2" />
                <rect x="480" y="450" width="30" height="150" stroke="black" fill="yellow" strokeWidth="2" />
                <rect x="540" y="370" width="30" height="230" stroke="black" fill="tomato" strokeWidth="2" />
                <rect x="600" y="300" width="30" height="300" stroke="black" fill="red" strokeWidth="2" />
                <rect x="660" y="500" width="30" height="100" stroke="black" fill="orange" strokeWidth="2" />
                <rect x="720" y="320" width="30" height="280" stroke="black" fill="skyblue" strokeWidth="2" />
              </g>
              <polyline points="65,70 135,100 195,200 255,50 315,300 375,200 435,150 495,400 555,350 615,280 675,485 735,330" stroke="black" strokeWidth="2" fill="transparent" />
            </svg>
          </div>

          <div id='layer0'>
            <svg xmlns="http://www.w3.org/2000/svg" height={500} width={700} viewBox="150 -20 500 700">

              {/* 枠線 */}
              <g stroke="black" strokeWidth="2">
                <line x1="40" y1="20" x2="40" y2="600"></line>
                <line x1="40" y1="600" x2="800" y2="600"></line>
              </g>



              {/* 縦メモリ */}
              <g>
                <text x="0" y="600">0</text>
                <text x="0" y="550">50</text>
                <text x="0" y="500">100</text>
                <text x="0" y="450">150</text>
                <text x="0" y="400">200</text>
                <text x="0" y="350">250</text>
                <text x="0" y="300">300</text>
                <text x="0" y="250">350</text>
                <text x="0" y="200">400</text>
                <text x="0" y="150">450</text>
                <text x="0" y="100">500</text>
                <text x="0" y="50">550</text>
              </g>

              {/* 横メモリ */}
              <g>
                <text x="60" y="625">1月</text>
                <text x="120" y="625">2月</text>
                <text x="180" y="625">3月</text>
                <text x="240" y="625">4月</text>
                <text x="300" y="625">5月</text>
                <text x="360" y="625">6月</text>
                <text x="420" y="625">7月</text>
                <text x="480" y="625">8月</text>
                <text x="540" y="625">9月</text>
                <text x="600" y="625">10月</text>
                <text x="660" y="625">11月</text>
                <text x="720" y="625">12月</text>
              </g>



            </svg>

          </div>
          <div id='layer1'>
            <svg xmlns="http://www.w3.org/2000/svg" height={500} width={700} viewBox="150 -20 500 700">
              {/* 内線 */}
              <g stroke="gray" strokeWidth="1">
                <line x1="40" y1="550" x2="800" y2="550"></line>
                <line x1="40" y1="500" x2="800" y2="500"></line>
                <line x1="40" y1="450" x2="800" y2="450"></line>
                <line x1="40" y1="400" x2="800" y2="400"></line>
                <line x1="40" y1="350" x2="800" y2="350"></line>
                <line x1="40" y1="300" x2="800" y2="300"></line>
                <line x1="40" y1="250" x2="800" y2="250"></line>
                <line x1="40" y1="200" x2="800" y2="200"></line>
                <line x1="40" y1="150" x2="800" y2="150"></line>
                <line x1="40" y1="100" x2="800" y2="100"></line>
                <line x1="40" y1="50" x2="800" y2="50"></line>
              </g>

            </svg>
          </div>

        </div>

      </>
    )
  }
}

export default Chartgraph;
