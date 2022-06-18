import React, { Component } from 'react'


class DataTable {
  constructor(data) {

    this.data = Object.assign({}, data)
    this.target = this.data.targetId
    this.lengthMenu = this.data.lengthMenu ?? [10, 25, 50, 100]
    this.displayLength = this.data.displayLength
    this.searching = this.data.searching
    this.info = this.data.info
    this.pagingType = this.data.pagingType
    this.pagingNumber = this.data.pagingNumber ?? 4
    this.lengthChange = this.data.lengthChange

    this.top = this.data.top
    this.bottom = this.data.bottom

    console.log(this.top);
    console.log(this.bottom);


    if (!!this.destroy) {
      $(this.target).find('tbody').empty()
    }

    if (!!$(`${this.target}_rows_box`)) {
      $(`${this.target}_rows_box`).remove()
    }

    if (!!$(`${this.target}_length`)) {
      $(`${this.target}_length`).remove()
    }

    if (!!$(`${this.target}_search`)) {
      $(`${this.target}_search`).remove()
    }

    if (!!$(`${this.target}_rows_box_after`)) {
      $(`${this.target}_rows_box_after`).remove()
    }


    //table上部に空のdiv要素を作る・・１
    $(this.target).before(
      `
        <div id='${this.target.replace(/#|\./, '')}_rows_box'></div>
      `
    )

    //table下部に空のdiv要素を作る・・４
    $(this.target).after(
      `
          <div id='${this.target.replace(/#|\./, '')}_rows_box_after'></div>
        `
    )

    //件数表示・・２
    let selectbox_numbers = ''
    for (let p in this.lengthMenu) {
      if (/\d/g.test(this.displayLength)) {
        if (this.displayLength == this.lengthMenu[p]) {
          selectbox_numbers += `<option value="${this.lengthMenu[p]}" selected>${this.lengthMenu[p]}</option>`
        } else {
          selectbox_numbers += `<option value="${this.lengthMenu[p]}">${this.lengthMenu[p]}</option>`
        }
      } else {
        if (p == 0) {
          selectbox_numbers += `<option value="${this.lengthMenu[p]}" selected>${this.lengthMenu[p]}</option>`
        } else {
          selectbox_numbers += `<option value="${this.lengthMenu[p]}">${this.lengthMenu[p]}</option>`
        }
      }
    }

    //件数表示の表示するかしないか
    const Length = (v) => {
      if (this.lengthChange == false) {
        $(`${this.target}_rows_box${v}`).append(
          `
          <div id="${this.target.replace(/#|\./, '')}_length" hidden>
            表示
            <select id="${this.target.replace(/#|\./, '')}_num">
              ${selectbox_numbers}
            </select>
            件
          </div>
          `
        )
      } else {

        $(`${this.target}_rows_box${v}`).append(
          `
            <div id="${this.target.replace(/#|\./, '')}_length" >
              表示
              <select id="${this.target.replace(/#|\./, '')}_num">
             ${selectbox_numbers}
              </select>
              件
            </div>
            `
        )

      }
    }


    //検索box表示・・３
    const Search = (v) => {
      $(`${this.target}_search`).remove()

      if (this.searching == false) {
        $(`${this.target}_rows_box${v}`).append(
          `
          <div id='${this.target.replace(/#|\./, '')}_search'hidden>
            検索：
            <input id="${this.target.replace(/#|\./, '')}_input" type='search' name='table_input_'/>
          </div>
          `
        )
      } else {
        $(`${this.target}_rows_box${v}`).append(
          `
          <div id='${this.target.replace(/#|\./, '')}_search'>
            検索：
            <input id="${this.target.replace(/#|\./, '')}_input" type='search' name='table_input_'/>
          </div>
          `
        )
      }
    }




    if (this.top != ([] | '') && this.bottom != ([] | '')) {
      Length('')
      Search('')
    } else {
      for (let q in this.top) {
        if (this.top[q] == 'search') {
          Search('')
        } else if (this.top[q] == 'length') {
          Length('')
        }
      }

      for (let u in this.bottom) {
        if (this.bottom[u] == 'search') {
          Search('_after')
        } else if (this.bottom[u] == 'length') {
          Length('_after')
        }
      }
      
    } 




    create(this, this.data, 'first')

    function create(t, data_) {
      $(t.target).find('tbody').remove()
      $(`${t.target}_info`).remove()
      $(`${t.target}_paging`).remove()
      if (data_.data == ([] | '')) {
        $(t.target).append('<tbody><tr></tr></tbody>')
        // console.log($(t.target).find('tbody tr').html());
        $(t.target).find('tbody tr').append(`<td colSpan='${data_.columns.length}'>データがありません</td>`)
        // return
      }

      const Views = () => {
        const view_len = $(`${t.target}_length`)?.children().val()
        for (const [i, d] of data_.data.entries()) {

          //ヘッダー作成
          if (i == 0) {
            for (let j in data_.columns) {
              $(t.target).find('th')[j].id = `${t.target.replace(/#|\./, '')}_${data_.columns[j].data}`
              $(t.target).find('th')[j].dataset.id = j
              $(t.target).find('th')[j].dataset.sort = data_?.sort ? 'up' : 'down'
            }
            // //ヘッダーEND


            //ボディ作成
            $(t.target).append('<tbody></tbody>')
          }

          //表示件数（デフォルト10）
          if (i < view_len) {
            $(t.target).children(':last').append(`<tr></tr>`)
          }
          //columnsの順番に修正＋keyの名前をindexに変更
          for (let k in data_.columns) {
            let keys_arr = Object.keys(d)
            for (let l in keys_arr) {
              if (data_.columns[k].data == keys_arr[l]) {
                delete Object.assign(d, { [k]: d[keys_arr[l]] })[keys_arr[l]]
              }
            }

            //表示件数（デフォルト10）
            if (i < view_len) {
              $(t.target).children(':last').children(`:last`).append(`<td class='dropzone'>${d[k]}</td>`)
            }
          }
          //ボディEND
        }
      }



      // //36件中10件表示(27%)のとこ・・５

      const Info = (v, position) => {
        if (t.info == false) {
          $(`${t.target}_info`).remove()
        } else {
          if ($(`${t.target}_num`).val() < data_.data.length) {
            if (!!position) {
              $(`${t.target}_${position}`).after(
                `
                <div id='${t.target.replace(/#|\./, '')}_info'>
                  ${$(`${t.target}_num`).val()}/${data_.data.length}(${Math.trunc($(`${t.target}_num`).val() / data_.data.length * 100)}%)
                </div>
                `
              )
            } else if (!position) {
              if ($(`${t.target}_rows_box${v}`).children(':first').html()) {
                $(`${t.target}_rows_box${v}`).children(':first').before(
                `
                <div id='${t.target.replace(/#|\./, '')}_info'>
                  ${$(`${t.target}_num`).val()}/${data_.data.length}(${Math.trunc($(`${t.target}_num`).val() / data_.data.length * 100)}%)
                </div>
                `
                )
              } else {
                $(`${t.target}_rows_box${v}`).append(
                  `
                  <div id='${t.target.replace(/#|\./, '')}_info'>
                    ${$(`${t.target}_num`).val()}/${data_.data.length}(${Math.trunc($(`${t.target}_num`).val() / data_.data.length * 100)}%)
                  </div>
                  `
                )
              }
            }


          } else {
            if (!!position) {
              $(`${t.target}_${position}`).after(
                `
                <div id='${t.target.replace(/#|\./, '')}_info'>
                ${data_.data.length}/${data_.data.length}(100%)
                </div>
                `
              )
            } else if (!position) {
              if ($(`${t.target}_rows_box${v}`).children(':first').html()) {
                $(`${t.target}_rows_box${v}`).children(':first').before(
                  `
                  <div id='${t.target.replace(/#|\./, '')}_info'>
                  ${data_.data.length}/${data_.data.length}(100%)
                  </div>
                  `
                )
              } else {
                $(`${t.target}_rows_box${v}`).append(
                  `
                  <div id='${t.target.replace(/#|\./, '')}_info'>
                  ${data_.data.length}/${data_.data.length}(100%)
                  </div>
                  `
                )
              }
            }
          }
        }
      }




      //ページ送り・・６
      const Paging = (v, position) => {

        if (t.pagingType == false) {
          $(`${t.target}_paging`).remove()
        } else {
          const sliceByNumber = (array, number) => {
            const length = Math.ceil(array.length / number)
            return new Array(length).fill().map((_, i) =>
              array.slice(i * number, (i + 1) * number)
            )
          }

          sliceByNumber(data_.data, $(`${t.target}_num`).val())

          //class内thisに要素追加
          t.pages = sliceByNumber(data_.data, $(`${t.target}_num`).val())

          //pagingボタン作成
          let page_button = ``
          for (let m in sliceByNumber(data_.data, $(`${t.target}_num`).val())) {
            if (t.pages.length > t.pagingNumber && /\d/g.test(t.pagingNumber)) {
              if (m == 0) {//1ページ目表示
                page_button += `<button data-dt-idx = ${m} data-selected = 1 data-display = 0>${(m | 0) + 1}</button><span id='${t.target.replace(/#|\./, '')}_first'></span>`
              } else if (m < t.pagingNumber) {//2ページ目以降表示
                page_button += `<button data-dt-idx = ${m} data-selected = 0 data-display = 0>${(m | 0) + 1}</button>`
              } else {//表示しないものがある場合
                if (m != t.pages.length - 1) {
                  page_button += `<button data-dt-idx = ${m} data-selected = 0 data-display = 1 >${(m | 0) + 1}</button>`
                } else {
                  page_button += `<span id='${t.target.replace(/#|\./, '')}_last'>...</span><button data-dt-idx = ${t.pages.length - 1} data-selected = 0 data-display = 0>${(t.pages.length - 1 | 0) + 1}</button>`
                }
              }
              continue
            }

            if (m == 0) {
              page_button += `<button data-dt-idx = ${m} data-selected = 1>${(m | 0) + 1}</button>`
            } else {
              page_button += `<button data-dt-idx = ${m} data-selected = 0>${(m | 0) + 1}</button>`
            }
          }

          if (!!position) {
            $(`${t.target}_${position}`).after(
              `
            <div id='${t.target.replace(/#|\./, '')}_paging'>
              <button data-dt-idx = -1 data-selected = 0>戻る</button>
              ${page_button}
              <button data-dt-idx = +1 data-selected = 0>次へ</button>
            </div>
            `
            )
          } else if (!position) {
            if ($(`${t.target}_rows_box${v}`).children(':first').html()) {
              $(`${t.target}_rows_box${v}`).children(':first').before(
                `
              <div id='${t.target.replace(/#|\./, '')}_paging'>
                <button data-dt-idx = -1 data-selected = 0>戻る</button>
                ${page_button}
                <button data-dt-idx = +1 data-selected = 0>次へ</button>
              </div>
              `
              )
            } else {
              $(`${t.target}_rows_box${v}`).append(
                `
              <div id='${t.target.replace(/#|\./, '')}_paging'>
                <button data-dt-idx = -1 data-selected = 0>戻る</button>
                ${page_button}
                <button data-dt-idx = +1 data-selected = 0>次へ</button>
              </div>
              `
              )
            }
          }

          //pagesボタン(クリック時)
          $(`${t.target}_paging`).children().off('click').on('click', (e) => {
            if (!/button/i.test(e.target.tagName)) {
              return
            }
            let index = 0
            const before_selected = $(`${t.target}_paging`).find("[data-selected='1']")[0].dataset

            //選択中[data-selected='1']*色変更等は外部SCSS
            if (/\+/.test(e.target.dataset.dtIdx)) {
              before_selected.selected = 0
              index = (before_selected.dtIdx | 0) + 1

              if (index > $(`${t.target}_paging`).find("[data-dt-idx]").length - 3) {
                index = $(`${t.target}_paging`).find("[data-dt-idx]").length - 3
              }

              $(`${t.target}_paging`).find(`[data-dt-idx='${index}']`)[0].dataset.selected = 1

            } else if (/\-/.test(e.target.dataset.dtIdx)) {
              before_selected.selected = 0
              index = (before_selected.dtIdx | 0) - 1

              if (index == -1) {
                index = 0
              }
              $(`${t.target}_paging`).find(`[data-dt-idx='${index}']`)[0].dataset.selected = 1
            } else {
              before_selected.selected = 0
              index = e.target.dataset.dtIdx | 0
              e.target.dataset.selected = 1
            }


            const selectpage = ($(`${t.target}_paging`).find("[data-selected='1']")[0].dataset.dtIdx | 0)
            //lastlength(jsmin)
            // const lastlength = ($(`${t.target}_paging`).find("[data-display]").params.length - 1 | 0)
            const pages_arr = Array.from($(`${t.target}_paging`).find("[data-display]"))
            const lastlength = (pages_arr.length - 1 | 0)
            // console.log(pages_arr);
            // console.log(lastlength);


            // for (const [p, d] of $(`${t.target}_paging`).find("[data-display]").params.entries()) {
            for (const [p, d] of pages_arr.entries()) {
              // console.log(d);
              if (selectpage - 1 == d.dataset.dtIdx) {
                d.dataset.display = 0
              } else if (selectpage + 1 == d.dataset.dtIdx) {
                d.dataset.display = 0
              } else if (selectpage - 1 != d.dataset.dtIdx && selectpage + 1 != d.dataset.dtIdx && selectpage != d.dataset.dtIdx) {
                if (p != 0 && p != lastlength) {
                  d.dataset.display = 1
                }
                if (selectpage == 0 && p == 2) {
                  d.dataset.display = 0
                }
                if (p == lastlength - 2 && selectpage == lastlength) {
                  d.dataset.display = 0
                }
              }

              if (selectpage >= lastlength - 2) {
                $(`${t.target}_last`).html('')
              } else {
                $(`${t.target}_last`).html('...')
              }
              if (selectpage >= 3) {
                $(`${t.target}_first`).html('...')
              } else if (selectpage <= 2) {
                $(`${t.target}_first`).html('')
              }

            }



            $(t.target).find('tbody').remove()
            for (const [n, d] of t.pages[index].entries()) {

              $(t.target).append('<tbody></tbody>')
              $(t.target).children(':last').append(`<tr></tr>`)

              for (let k in t.data.columns) {
                $(t.target).children(':last').children(`:last`).append(`<td class='dropzone'>${d[k]}</td>`)
              }
            }

            $(`${t.target}_info`)?.html(`${t.pages[index].length}/${t.data.data.length}(${Math.trunc(t.pages[index].length / t.data.data.length * 100)}%)`)

          })
        }
      }



      if (t.top != ([] | '') && t.bottom != ([] | '')) {
        Paging('_after')
        Info('_after')
      } else {
        for (let q in t.top) {
          if (t.top[q] == 'info') {
            Info('', t.top[q - 1])
          } else if (t.top[q] == 'paging') {
            Paging('', t.top[q - 1])
          }
        }
  
        for (let u in t.bottom) {
          if (t.bottom[u] == 'info') {
            Info('_after', t.bottom[u - 1])
          } else if (t.bottom[u] == 'paging') {
            Paging('_after', t.bottom[u - 1])
          }
        }
      }

      Views()

    }


    //ソート(thタグ)
    $(`${this.target}`).find(`th`).off('click').on('click', (e) => {
      let n = e.target.dataset.id

      this.data.data.sort(function (a, b) {
        if (e.target.dataset.sort == 'up') {

          if (a[n] > b[n]) {
            return 1;
          }
          if (a[n] < b[n]) {
            return -1;
          }
        } else {

          if (a[n] > b[n]) {
            return -1;
          }
          if (a[n] < b[n]) {
            return 1;
          }
        }
        return 0
      })

      //ソートのUP/DOWN
      if (e.target.dataset.sort == 'up') {
        $(`#${e.target.id}`).attr('data-sort', 'down')
        this.data.sort = false
      } else {
        $(`#${e.target.id}`).attr('data-sort', 'up')
        this.data.sort = true
      }

      create(this, this.data)
    })

    //検索フォーム(inputBOX)
    // console.log($(`${this.target}_input`));
    // $(`${this.target}_rows_box`).off('change').on('change', this, (e) => {
    $(`${this.target}_input`).off('input').on('input', this, (e) => {
      console.log('dasfgdhj');
      if (!!$(`${this.target}_input`).val()) {
        const regex = new RegExp($(`${this.target}_input`).val(), 'ig')
        let search = data.data.filter((v) => {
          for (let key of Object.keys(v)) {
            if (regex.test(v[key])) {
              return v
            }
          }
        })

        this.data.data = search

        create(this, this.data)
      } else {
        this.data = Object.assign({}, data)
        create(this, this.data)
      }
    })

    //件数(selectBOX)
    $(`${this.target}_num`).off('change').on('change', () => {
      create(this, this.data)
    })


    // let dragged

    // document.addEventListener("drag", function(event) {

    // }, false);

    // document.addEventListener("dragstart", function(event) {
    //   // store a ref. on the dragged elem
    //   dragged = event.target;
    //   // make it half transparent
    //   event.target.style.opacity = .5;
    // }, false);

    // document.addEventListener("dragend", function(event) {
    //   // reset the transparency
    //   event.target.style.opacity = "";
    // }, false);

    // /* events fired on the drop targets */
    // document.addEventListener("dragover", function(event) {
    //   // prevent default to allow drop
    //   event.preventDefault();
    // }, false);

    // document.addEventListener("dragenter", function(event) {
    //   // highlight potential drop target when the draggable element enters it
    //   if (event.target.className == "dropzone") {
    //     event.target.style.background = "purple";
    //   }

    // }, false);

    // document.addEventListener("dragleave", function(event) {
    //   // reset background of potential drop target when the draggable element leaves it
    //   if (event.target.className == "dropzone") {
    //     event.target.style.background = "";
    //   }

    // }, false);

    // document.addEventListener("drop", function(event) {
    //   // prevent default action (open as link for some elements)
    //   event.preventDefault();
    //   // move dragged elem to the selected drop target
    //   if (event.target.className == "dropzone") {
    //     event.target.style.background = "";
    //     dragged.parentNode.removeChild( dragged );
    //     event.target.appendChild( dragged );
    //   }
    // }, false);

  }
}



export class Datatable extends Component {
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

    //自作テーブル使用例 
    /*
    targetId      :対象のid 
    data          :[{},{},...]の型
    destroy       :true/false (デフォルト:false)trueで削除
    lengthMenu    :[10,20,30] (デフォルト:[10,25,50,100])
    displayLength :int型 (デフォルト:10)
    pagingNumber  :int型/false（デフォルト: 3)falseで全表示 *
    */
    let table_data = {
      targetId: '#create_table',
      data: this.state.json,
      destroy: true,
      lengthMenu: [5, 10, 15, 25, 2000, 5000, 10000],
      displayLength: 5,
      // searching: false,
      // info: false,
      // pagingType: false,
      // pagingNumber:false,
      // lengthChange: false,
      top: [ 'length','info','search','paging'],
      bottom: [],
      columns: [
        { data: 'id' },
        { data: 'name' },
        { data: 'cash' },
        { data: 'credit' },
        { data: 'date' },
      ]
    }

    new DataTable(table_data)

  }
  render() {
    return (
      <>
        <div id='data_table'>
          <table id='create_table'>
            <thead>
              <tr>
                <th>id</th>
                <th>名前</th>
                <th>現金</th>
                <th>クレジット</th>
                <th>日付</th>
              </tr>
            </thead>
          </table>
        </div>
        <div id="test">
          AAAAAAAAAAAAAAAAAAAAAAAA================BBBBBBBBBBBBBB
          AAAAAAAAAAAAAAAAAAAAAAAA================BBBBBBBBBBBBBB
          AAAAAAAAAAAAAAAAAAAAAAAA================BBBBBBBBBBBBBB
          AAAAAAAAAAAAAAAAAAAAAAAA================BBBBBBBBBBBBBB
        </div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
        <div id="test2">===========</div>
      </>
    )
  }
}


