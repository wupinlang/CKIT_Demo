import withWeapp, { cacheOptions } from '@tarojs/with-weapp'
import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import Stamp from './stamp/stamp'
cacheOptions.setOptionsToCache({})
@withWeapp(cacheOptions.getOptionsFromCache())
class _C extends React.Component {
  render() {
    return (
      <View className="container">
        11212212<Stamp></Stamp>
      </View>
    )
  }
}
export default _C
