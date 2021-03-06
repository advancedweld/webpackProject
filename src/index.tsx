/*
 * @Author: xiangshangzhi xiangshangzhi@xtfer.com
 * @Date: 2022-07-20 12:55:04
 * @LastEditors: xiangshangzhi xiangshangzhi@xtfer.com
 * @LastEditTime: 2022-07-23 16:06:00
 * @FilePath: /webpackProject/src/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// webpack的入口文件：src/index.tsx

import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import logo from "./assets/logo.svg";

import App from "./App/index";

function AppCotainer() {
  return (
    <div className="App">
      <App></App>
    </div>
  );
}

ReactDOM.render(<AppCotainer />, document.getElementById("root"));
