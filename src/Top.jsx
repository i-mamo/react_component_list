import React, { Component } from 'react';
import { Sidebar } from './Sidebar';
import { Contents } from './Contents'

export class Top extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div id='content'>
          <div className='area areaFill'>
            <div className="fillContent">
              <p className="fillDate">2022年01月01日</p>
              <select className="fillValue">
                <option value="ミニッツ鍼灸整骨院">ミニッツ鍼灸整骨院</option>
                <option value="ミニッツ鍼灸整骨院">ミニッツ鍼灸整骨院</option>
                <option value="ミニッツ鍼灸整骨院">ミニッツ鍼灸整骨院</option>
                <option value="ミニッツ鍼灸整骨院">ミニッツ鍼灸整骨院</option>
              </select>
            </div>
            {/* <!-- fillContent --> */}
            <div className="fillBlock">
              <div className="block blockPrice">
                <p className="blockTitle">合計売上</p>
                <p className="blockValue">¥120,000</p>
              </div>
              {/* <!-- blockblock --> */}
              <div className="block blockPerson">
                <p className="blockTitle"><span>受診者数</span></p>
                <p className="blockValue">30<span>人</span></p>
              </div>
              {/* <!-- blockblock --> */}
              <div className="block blockUnit">
                <p className="blockTitle"><span>受診単価</span></p>
                <p className="blockValue">¥4,000</p>
              </div>
              {/* <!-- blockPrice --> */}
            </div>
          </div>
          <Contents />
        </div>
      </>
    )
  }
}

export default Top;
