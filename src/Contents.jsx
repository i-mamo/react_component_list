import React, { Component } from 'react';
import Iconpin from "./common/icon-pin.svg"
import Icondot1 from "./common/icon-dot-1.svg"
import Icondot2 from "./common/icon-dot-2.svg"
import Icondot3 from "./common/icon-dot-3.svg"

export class Contents extends Component {
  render() {
    return (
      <>
        {/* <!-- areafill --> */}
        <div className="area areaContent">
          <div className="contentProg">
            <ul className="progInfo">
              <li><span><img src={Iconpin} width="14" height="18" /></span>対応状況</li>
              <li><span><img src={Icondot1} /></span>登録済み：12件</li>
              <li><span><img src={Icondot2} /></span>未精算：15件</li>
              <li><span><img src={Icondot3} /></span>精算済み：3件</li>
            </ul>
            <p className="progProgress">
              <span className="progress40">40%</span>
              <span className="progress50">50%</span>
              <span className="progress10">10%</span>
            </p>
          </div>
          {/* <!-- contentProg --> */}
          <div className="contentNews">
            <div className="blockNews newsInfo">
              <h2 className="infoTitle">インフォメーション</h2>
              <ul className="infoList">
                <li>
                  <p className="datetime"><span>2022年01月01日 12:00</span></p>
                  <a className="link" href="#">【マッサージ】ここにタイトルを記載します、これはダミーテキストですこれは…</a>
                </li>
                <li>
                  <p className="datetime"><span>2022年01月01日 12:00</span></p>
                  <a className="link" href="#">【マッサージ】ここにタイトルを記載します、これはダミーテキストですこれは…</a>
                </li>
                <li>
                  <p className="datetime"><span>2022年01月01日 12:00</span></p>
                  <a className="link" href="#">【マッサージ】ここにタイトルを記載します、これはダミーテキストですこれは…</a>
                </li>
                <li>
                  <p className="datetime"><span>2022年01月01日 12:00</span></p>
                  <a className="link" href="#">【マッサージ】ここにタイトルを記載します、これはダミーテキストですこれは…</a>
                </li>
                <li>
                  <p className="datetime"><span>2022年01月01日 12:00</span></p>
                  <a className="link" href="#">【マッサージ】ここにタイトルを記載します、これはダミーテキストですこれは…</a>
                </li>
              </ul>
            </div>
            {/* <!-- newsInfo --> */}
            <div className="blockNews newsSystem">
              <h2 className="infoTitle">アップデート・システム障害</h2>
              <ul className="infoList">
                <li>
                  <p className="datetime"><span>2022年01月01日 12:00</span></p>
                  <a className="link" href="#">【マッサージ】ここにタイトルを記載します、これはダミーテキストですこれは…</a>
                </li>
                <li>
                  <p className="datetime"><span>2022年01月01日 12:00</span></p>
                  <a className="link" href="#">【マッサージ】ここにタイトルを記載します、これはダミーテキストですこれは…</a>
                </li>
                <li>
                  <p className="datetime"><span>2022年01月01日 12:00</span></p>
                  <a className="link" href="#">【マッサージ】ここにタイトルを記載します、これはダミーテキストですこれは…</a>
                </li>
                <li>
                  <p className="datetime"><span>2022年01月01日 12:00</span></p>
                  <a className="link" href="#">【マッサージ】ここにタイトルを記載します、これはダミーテキストですこれは…</a>
                </li>
                <li>
                  <p className="datetime"><span>2022年01月01日 12:00</span></p>
                  <a className="link" href="#">【マッサージ】ここにタイトルを記載します、これはダミーテキストですこれは…</a>
                </li>
              </ul>
            </div>
            {/* <!-- newsSystem --> */}
          </div>
          {/* <!-- contentNews --> */}
        </div>
        {/* <!-- areaContent --> */}
      </>
    )
  }
}

export default Contents;
