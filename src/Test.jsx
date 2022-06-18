import React, { Component } from 'react';
import Icon from './common/logo.svg'
import Iconhome from './common/icon-home.svg'
import Iconpin from "./common/icon-pin.svg"
import Icondot1 from "./common/icon-dot-1.svg"
import Icondot2 from "./common/icon-dot-2.svg"
import Icondot3 from "./common/icon-dot-3.svg"

import './css/Test.scss'


export class Test extends Component {
  render() {
    return (
      <div id="wrapper">

        <div id="sidebar">
          <a href="#" className="logo">
            <img src={Icon} alt="medicalc" />
          </a>
          <ul className="menu-sidebar">
            <li className="active">
              <a href="#">
                <span className="icon icon-home">トップページ</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon icon-edit">カルテ入力</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon icon-note">レセプト一覧</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon icon-calc">日計入力</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon icon-page">資料作成</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon icon-chart">総括表</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon icon-mess">メッセージ</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon icon-hook">リモートURL</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon icon-setting">システム設定</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon icon-phone">お問い合わせ</span>
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- #sidebar --> */}
        
        <div id="content">
            <div className="area areaFill">
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
            {/* <!-- areafill --> */}
            <div className="area areaContent">
                <div className="contentProg">
                    <ul className="progInfo">
                        <li><span><img src={Iconpin} width="14" height="18"/></span>対応状況</li>
                        <li><span><img src={Icondot1}/></span>登録済み：12件</li>
                        <li><span><img src={Icondot2}/></span>未精算：15件</li>
                        <li><span><img src={Icondot3}/></span>精算済み：3件</li>
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
        </div>
        {/* <!-- #content --> */}
      </div>
    )
  }
}

export default Test;
