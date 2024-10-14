import withWeapp, { cacheOptions } from "@tarojs/with-weapp";
import { Block } from "@tarojs/components";
import React from "react";
import Taro from "@tarojs/taro";
import "./app.scss";
//app.js
cacheOptions.setOptionsToCache({
  onLaunch: function () {}
});
@withWeapp(cacheOptions.getOptionsFromCache(), true)
class App extends React.Component {
  render() {
    return this.props.children;
  }
}
export default App;