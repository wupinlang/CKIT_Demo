import withWeapp, { cacheOptions } from '@tarojs/with-weapp'
import { Block, View, Text } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
//index.js
require('../../../certificationKit/echoss/echoss-lite-min.js')
var template = require('../../../certificationKit/template-min.js')
import './stamp.scss'
cacheOptions.setOptionsToCache({
  methods: {
    echossTouchStart: template.onHandleTouchEvent,
    echossTouchMove: template.echossTouchMove,
    echossTouchEnd: template.echossTouchEnd,
    echossTouchCancel: template.echossTouchCancel,
    echossCkitEvent: template.echossCkitEvent,
    callCkitPage: function (res) {
      Taro.showLoading({
        title: '加载中',
        mask: true,
      })
      template.setBackgroundColor('#000000')
      template.setBackgroundOpacity('0')
      template.setDescription('')
      template.setLoadingYn('Y')
      template.setIconYn('N')
      template.setAudioSrc(
        'https://web.echoss.cn/platform/ckit/sounds/stamp_sound.mp3'
      )
      template.showEchossCertificationPage(
        {
          app: this,
          appId: 'wxf59533afc8975255',
          regionCode: template.REGION_CODE_TYPE.CHINA,
          languageCode: template.LANGUAGE_CODE_TYPE.CHINESE,
          // licenseId     : "paeceac4f09a34648b10f0ec5cfe2e3d7",
          licenseId: 'd23ba7b2ae7e149edb0a6c13191d745d7',
          userCode: 'U0001V00A001B001M00001V00A001B001M00001',
          // userCode      : "wechat_openid",
          merchantCode: 'V00A001B001M00001',
          //authKey       : "",
          extData: {
            type: 'SPM',
            service: 'COUPON',
            price: '100',
          },
        },
        function (errorCode, errorMessage) {
          Taro.hideLoading()
          console.log('initError: ' + errorMessage + '(' + errorCode + ')')
          Taro.showModal({
            title: '提示',
            content: errorMessage + '(' + errorCode + ')',
            showCancel: false,
          })
        }
      )
    },
  },
  attached: function () {
    var that = this
    template.initializeSuccess = function () {
      Taro.hideLoading()
      console.log('initialize success')
    }
    template.onBeforeStamp = function () {
      console.log('onBeforeStamp')
    }
    template.certSuccess = function (result) {
      console.log(result)
    }
    template.certError = function (errorCode, errorMessage) {
      console.log('certError: ' + errorMessage + '(' + errorCode + ')')
    }
  },
})
@withWeapp(cacheOptions.getOptionsFromCache())
class _C extends React.Component {
  render() {
    return (
      <View
        className="container"
        ontouchstart="echossTouchStart"
        ontouchmove="echossTouchMove"
        ontouchend="echossTouchEnd"
        ontouchcancel="echossTouchCancel"
      >
        <View className="ckitDemoView">
          <Text>Certification Kit Demo</Text>
          <Text className="ckitPageBtn" onClick={this.callCkitPage}>
            Certification Page Button
          </Text>
        </View>
      </View>
    )
  }
}
export default _C
