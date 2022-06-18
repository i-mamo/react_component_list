import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './common/logo.svg'


export class Sidebar extends Component {
  render() {
    return (
      <>
        <div id='sidebar'>
          <Link to={'#'}>
            <img src={Logo} className='logo' />
          </Link>
          <ul className="menu-sidebar">
            <li className="active">
              <NavLink to={"#"}>
                <span className="icon icon-home">トップページ</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'#'}>
                <span className="icon icon-edit">カルテ入力</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'#'}>
                <span className="icon icon-note">レセプト一覧</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'#'}>
                <span className="icon icon-calc">日計入力</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'#'}>
                <span className="icon icon-page">資料作成</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'#'}>
                <span className="icon icon-chart">総括表</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'#'}>
                <span className="icon icon-mess">メッセージ</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'#'}>
                <span className="icon icon-hook">リモートURL</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'#'}>
                <span className="icon icon-setting">システム設定</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'#'}>
                <span className="icon icon-phone">お問い合わせ</span>
              </NavLink>
            </li>
          </ul>

        </div>
      </>
    )
  }
}

export default Sidebar;
