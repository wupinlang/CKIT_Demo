var _0x40e2 = [
  "echoss/echoss-lite-min.js",
  "ckit-min.js",
  "REGION_CODE_TYPE",
  "LANGUAGE_CODE_TYPE",
  "uid",
  "",
  "certBackgroundColor",
  "#000000",
  "certOpacity",
  "0.4",
  "certDescription",
  "certLoadingYn",
  "Y",
  "certSuccessYn",
  "certLoadingImage",
  "certIconYn",
  "certIconType",
  "STAMP",
  "imageInterval",
  "certAudio",
  "onHandleTouchEvent",
  "Stamp",
  "echossTouchMove",
  "echossTouchEnd",
  "echossTouchCancel",
  "echossIconEvent",
  "onDetectEvent",
  "Icon",
  "echossIconInputEvent",
  "onDetectInputEvent",
  "echossCkitEvent",
  "event",
  "dataset",
  "currentTarget",
  "1",
  "ES22",
  "It has been canceled by user.",
  "certError",
  "setData",
  "Common",
  "enableStamping",
  "showEchossCertificationPage",
  "languageCode",
  "KOREAN",
  "setLanguageCode",
  "JAPANESE",
  "TAIWAN",
  "CHINESE",
  "regionCode",
  "KOREA",
  "app",
  "appId",
  "initialize",
  "JAPAN",
  "CHINA",
  "EUROPE",
  "APSE1",
  "APSE2",
  "echossData",
  "data",
  "https://developer.echoss.co.kr/sdk/ckit",
  "https://web.echoss.cn/platform/ckit",
  "https://web.ap-southeast-1.12cmglobal.com/sdk/ckit",
  "https://web.europe.12cmglobal.com/esp2/sdk/ckit",
  "ckitImage01",
  "/images/stamping/img_btn_close_stamp.png",
  "ckitImage03",
  "/images/stamping/img_stamphand01.png",
  "ckitImage04",
  "/images/stamping/img_stamphand02.png",
  "ckitImage05",
  "/images/stamping/img_stamphand03.png",
  "ckitImage06",
  "/images/stamping/img_stamphand04.png",
  "ckitImage08",
  "/images/stamping/img_stamp_sucsess.png",
  "ckitImage02",
  "/images/stamping/stamp_motion_fr.png",
  "ckitImage07",
  "/images/stamping/stamping_ico.gif",
  "ckitImage09",
  "/images/stamping/stamp_motion01.png",
  "ckitImage10",
  "/images/stamping/stamp_motion02.png",
  "ckitImage11",
  "/images/stamping/stamp_motion03.png",
  "ckitLoadingImage",
  "checkLicenseId",
  "setBackgroundColor",
  "test",
  "Invalid Background Color 'ex) #000000'",
  "log",
  "setBackgroundOpacity",
  "Invalid Background Opacity 'ex) 0 ~ 1'",
  "setDescription",
  "setLoadingYn",
  "N",
  "y",
  "n",
  "Invalid LoadingYn 'ex) Y / N'",
  "setSuccessYn",
  "Invalid successYn 'ex) Y / N'",
  "setLoadingImage",
  "You need set LoadingYn to 'Y'",
  "setIconYn",
  "Invalid useIconYn 'ex) Y / N'",
  "setAudioSrc",
  "createInnerAudioContext",
  "src",
  "setIconType",
  "toUpperCase",
  "OTP",
  "Invalid iconType 'ex) STAMP / OTP'",
  "showSuccess",
  "onBeforeStamp",
  "certSuccess",
  "function",
  "Cannot find module '",
  "'",
  "exports",
  "call",
  "length",
  "amd",
  "object",
  "initializeSuccess",
  "ckitCenterNumber",
  "getData",
  "setStampData",
  "setOtpData",
  "init",
  "enableStampingErrorMsg",
  ",",
  "K",
  "SPFCM",
  "COMMON_ETC",
  "OTP_ISSUE_TYPE",
  "closeGuideView",
  "echossCertificationSuccess",
  "hideIcon",
  "echossServiceGetToken",
  "showIcon",
  "ES20",
  "It failed to initialize with Service Page.",
  "initializeFail",
  "onException",
  "now",
  "play",
  "onError",
  "onStamp",
  "rgb(255, 104, 104)",
  "A001",
  "STAMP_ERROR_TYPE",
  "showErrorMessage",
  "A002",
  "echossServiceCert",
  "template"
];
/**
 * 取消动态require
 */
var echoss = require("./echoss/echoss-lite-min.js");
var esp = require("./ckit-min.js");
var template = {};
(function (_0x103fx26) {
  if (typeof define === _0x40e2[116] && define[_0x40e2[122]]) {
    define(_0x103fx26);
  } else {
    if (typeof exports === _0x40e2[123]) {
      module[_0x40e2[119]] = _0x103fx26();
    } else {
    }
  }
})(function () {
  (function _0x103fx1c(_0x103fx1d, _0x103fx1e, _0x103fx1f) {
    // _0x103fx1d = {1: fn, } , _0x103fx1e = {}, _0x103fx1f = [1]
    function _0x103fx20(_0x103fx21, _0x103fx22) {
      // _0x103fx21 = 1, _0x103fx22 = undefined
      if (!_0x103fx1e[_0x103fx21]) {
        if (!_0x103fx1d[_0x103fx21]) {
          /**
           * 自执行函数，不会走到这里(!{1: fn}[1] => false) ，所以把动态require注释调
           */
          // var _0x103fx23 = typeof require == _0x40e2[116] && require;
          // if (!_0x103fx22 && _0x103fx23) {
          //   return _0x103fx23(_0x103fx21, !0);
          // }
          // if (_0x103fx25) {
          //   return _0x103fx25(_0x103fx21, !0);
          // }
          // throw new Error(_0x40e2[117] + _0x103fx21 + _0x40e2[118]);
          return;
        }
        var _0x103fx24 = (_0x103fx1e[_0x103fx21] = { exports: {} });
        _0x103fx1d[_0x103fx21][0][_0x40e2[120]](
          _0x103fx24[_0x40e2[119]],
          function (_0x103fx1c) {
            var _0x103fx1e = _0x103fx1d[_0x103fx21][1][_0x103fx1c];
            return _0x103fx20(_0x103fx1e ? _0x103fx1e : _0x103fx1c);
          },
          _0x103fx24,
          _0x103fx24[_0x40e2[119]],
          _0x103fx1c,
          _0x103fx1d,
          _0x103fx1e,
          _0x103fx1f
        );
      }
      return _0x103fx1e[_0x103fx21][_0x40e2[119]];
    }
    var _0x103fx25 = typeof require == _0x40e2[116] && require;
    for (
      var _0x103fx21 = 0;
      _0x103fx21 < _0x103fx1f[_0x40e2[121]];
      _0x103fx21++
    ) {
      _0x103fx20(_0x103fx1f[_0x103fx21]);
    }
    return _0x103fx20;
  })(
    {
      1: [
        function (_0x103fx4, _0x103fx5, _0x103fx6) {
          (function () {
            template[_0x40e2[2]] = esp[_0x40e2[2]];
            template[_0x40e2[3]] = esp[_0x40e2[3]];
            template[_0x40e2[4]] = _0x40e2[5];
            template[_0x40e2[6]] = _0x40e2[7];
            template[_0x40e2[8]] = _0x40e2[9];
            template[_0x40e2[10]] = _0x40e2[5];
            template[_0x40e2[11]] = _0x40e2[12];
            template[_0x40e2[13]] = _0x40e2[12];
            template[_0x40e2[14]] = null;
            template[_0x40e2[15]] = _0x40e2[12];
            template[_0x40e2[16]] = _0x40e2[17];
            template[_0x40e2[18]] = null;
            template[_0x40e2[19]] = null;
            template[_0x40e2[20]] = echoss[_0x40e2[21]][_0x40e2[20]];
            template[_0x40e2[22]] = echoss[_0x40e2[21]][_0x40e2[20]];
            template[_0x40e2[23]] = echoss[_0x40e2[21]][_0x40e2[20]];
            template[_0x40e2[24]] = echoss[_0x40e2[21]][_0x40e2[20]];
            template[_0x40e2[25]] = echoss[_0x40e2[27]][_0x40e2[26]];
            template[_0x40e2[28]] = echoss[_0x40e2[27]][_0x40e2[29]];
            template[_0x40e2[30]] = function (_0x103fx7) {
              if (
                _0x103fx7[_0x40e2[33]][_0x40e2[32]][_0x40e2[31]] == _0x40e2[34]
              ) {
                template[_0x40e2[37]](_0x40e2[35], _0x40e2[36]);
                echoss[_0x40e2[39]][_0x40e2[38]]({ ckitClose: true });
                echoss[_0x40e2[21]][_0x40e2[40]](false);
              }
            };
            template[_0x40e2[41]] = function (_0x103fx8, _0x103fx9) {
              esp[_0x40e2[87]](
                _0x103fx8,
                function (_0x103fxa, _0x103fxb) {
                  template[_0x40e2[4]] = _0x103fxa;
                  if (
                    _0x103fx8[_0x40e2[42]] == template[_0x40e2[3]][_0x40e2[43]]
                  ) {
                    echoss[_0x40e2[44]](echoss[_0x40e2[3]].KOREAN);
                  } else {
                    if (
                      _0x103fx8[_0x40e2[42]] ==
                      template[_0x40e2[3]][_0x40e2[45]]
                    ) {
                      echoss[_0x40e2[44]](echoss[_0x40e2[3]].JAPANESE);
                    } else {
                      if (
                        _0x103fx8[_0x40e2[42]] ==
                        template[_0x40e2[3]][_0x40e2[46]]
                      ) {
                        echoss[_0x40e2[44]](echoss[_0x40e2[3]].TAIWAN);
                      } else {
                        if (
                          _0x103fx8[_0x40e2[42]] ==
                          template[_0x40e2[3]][_0x40e2[47]]
                        ) {
                          echoss[_0x40e2[44]](echoss[_0x40e2[3]].CHINESE);
                        } else {
                          echoss[_0x40e2[44]](echoss[_0x40e2[3]].ENGLISH);
                        }
                      }
                    }
                  }
                  if (
                    _0x103fx8[_0x40e2[48]] == template[_0x40e2[2]][_0x40e2[49]]
                  ) {
                    echoss[_0x40e2[52]](
                      _0x103fx8[_0x40e2[50]],
                      _0x103fxb,
                      echoss[_0x40e2[2]].KOREA,
                      _0x103fx8[_0x40e2[51]]
                    );
                  } else {
                    if (
                      _0x103fx8[_0x40e2[48]] ==
                      template[_0x40e2[2]][_0x40e2[53]]
                    ) {
                      echoss[_0x40e2[52]](
                        _0x103fx8[_0x40e2[50]],
                        _0x103fxb,
                        echoss[_0x40e2[2]].JAPAN,
                        _0x103fx8[_0x40e2[51]]
                      );
                    } else {
                      if (
                        _0x103fx8[_0x40e2[48]] ==
                        template[_0x40e2[2]][_0x40e2[46]]
                      ) {
                        echoss[_0x40e2[52]](
                          _0x103fx8[_0x40e2[50]],
                          _0x103fxb,
                          echoss[_0x40e2[2]].TAIWAN,
                          _0x103fx8[_0x40e2[51]]
                        );
                      } else {
                        if (
                          _0x103fx8[_0x40e2[48]] ==
                          template[_0x40e2[2]][_0x40e2[54]]
                        ) {
                          echoss[_0x40e2[52]](
                            _0x103fx8[_0x40e2[50]],
                            _0x103fxb,
                            echoss[_0x40e2[2]].CHINA,
                            _0x103fx8[_0x40e2[51]]
                          );
                        } else {
                          if (
                            _0x103fx8[_0x40e2[48]] ==
                            template[_0x40e2[2]][_0x40e2[55]]
                          ) {
                            echoss[_0x40e2[52]](
                              _0x103fx8[_0x40e2[50]],
                              _0x103fxb,
                              echoss[_0x40e2[2]].EUROPE,
                              _0x103fx8[_0x40e2[51]]
                            );
                          } else {
                            if (
                              _0x103fx8[_0x40e2[48]] ==
                              template[_0x40e2[2]][_0x40e2[56]]
                            ) {
                              echoss[_0x40e2[52]](
                                _0x103fx8[_0x40e2[50]],
                                _0x103fxb,
                                echoss[_0x40e2[2]].APSE1,
                                _0x103fx8[_0x40e2[51]]
                              );
                            } else {
                              if (
                                _0x103fx8[_0x40e2[48]] ==
                                template[_0x40e2[2]][_0x40e2[57]]
                              ) {
                                echoss[_0x40e2[52]](
                                  _0x103fx8[_0x40e2[50]],
                                  _0x103fxb,
                                  echoss[_0x40e2[2]].APSE2,
                                  _0x103fx8[_0x40e2[51]]
                                );
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  var _0x103fxc =
                    _0x103fx8[_0x40e2[50]][_0x40e2[59]][_0x40e2[58]];
                  if (
                    _0x103fx8[_0x40e2[50]][_0x40e2[59]][_0x40e2[58]] ==
                    undefined
                  ) {
                    _0x103fxc = {};
                  }
                  var _0x103fxd = _0x40e2[60];
                  if (
                    _0x103fx8[_0x40e2[48]] === template[_0x40e2[2]][_0x40e2[54]]
                  ) {
                    _0x103fxd = _0x40e2[61];
                  } else {
                    if (
                      _0x103fx8[_0x40e2[48]] ===
                        template[_0x40e2[2]][_0x40e2[56]] ||
                      _0x103fx8[_0x40e2[48]] ===
                        template[_0x40e2[2]][_0x40e2[57]]
                    ) {
                      _0x103fxd = _0x40e2[62];
                    } else {
                      if (
                        _0x103fx8[_0x40e2[48]] ===
                        template[_0x40e2[2]][_0x40e2[55]]
                      ) {
                        _0x103fxd = _0x40e2[63];
                      }
                    }
                  }
                  _0x103fxc[_0x40e2[64]] = _0x103fxd + _0x40e2[65];
                  _0x103fxc[_0x40e2[66]] = _0x103fxd + _0x40e2[67];
                  _0x103fxc[_0x40e2[68]] = _0x103fxd + _0x40e2[69];
                  _0x103fxc[_0x40e2[70]] = _0x103fxd + _0x40e2[71];
                  _0x103fxc[_0x40e2[72]] = _0x103fxd + _0x40e2[73];
                  _0x103fxc[_0x40e2[74]] = _0x103fxd + _0x40e2[75];
                  if (template[_0x40e2[14]] == null) {
                    _0x103fxc[_0x40e2[76]] = _0x103fxd + _0x40e2[77];
                    _0x103fxc[_0x40e2[78]] = _0x103fxd + _0x40e2[79];
                    _0x103fxc[_0x40e2[80]] = _0x103fxd + _0x40e2[81];
                    _0x103fxc[_0x40e2[82]] = _0x103fxd + _0x40e2[83];
                    _0x103fxc[_0x40e2[84]] = _0x103fxd + _0x40e2[85];
                  } else {
                    _0x103fxc[_0x40e2[86]] = template[_0x40e2[14]];
                  }
                  _0x103fx8[_0x40e2[50]][_0x40e2[38]]({
                    echossData: _0x103fxc,
                  });
                },
                _0x103fx9
              );
            };
            template[_0x40e2[88]] = function (_0x103fxe) {
              var _0x103fxf = /^#[0-9A-Fa-f]{6}/;
              if (_0x103fxf[_0x40e2[89]](_0x103fxe)) {
                template[_0x40e2[6]] = _0x103fxe;
              } else {
                console[_0x40e2[91]](_0x40e2[90]);
              }
            };
            template[_0x40e2[92]] = function (_0x103fx10) {
              var _0x103fx11 = parseFloat(_0x103fx10);
              if (_0x103fx11 >= 0 && _0x103fx11 <= 1) {
                template[_0x40e2[8]] = _0x103fx10;
              } else {
                console[_0x40e2[91]](_0x40e2[93]);
              }
            };
            template[_0x40e2[94]] = function (_0x103fx12) {
              template[_0x40e2[10]] = _0x103fx12;
            };
            template[_0x40e2[95]] = function (_0x103fx13) {
              if (
                _0x103fx13 == _0x40e2[12] ||
                _0x103fx13 == _0x40e2[96] ||
                _0x103fx13 == _0x40e2[97] ||
                _0x103fx13 == _0x40e2[98]
              ) {
                template[_0x40e2[11]] = _0x103fx13;
              } else {
                console[_0x40e2[91]](_0x40e2[99]);
              }
            };
            template[_0x40e2[100]] = function (_0x103fx14) {
              if (
                _0x103fx14 == _0x40e2[12] ||
                _0x103fx14 == _0x40e2[96] ||
                _0x103fx14 == _0x40e2[97] ||
                _0x103fx14 == _0x40e2[98]
              ) {
                template[_0x40e2[13]] = _0x103fx14;
              } else {
                console[_0x40e2[91]](_0x40e2[101]);
              }
            };
            template[_0x40e2[102]] = function (_0x103fx15) {
              if (
                template[_0x40e2[11]] == _0x40e2[12] ||
                template[_0x40e2[11]] == _0x40e2[97]
              ) {
                template[_0x40e2[14]] = _0x103fx15;
              } else {
                console[_0x40e2[91]](_0x40e2[103]);
              }
            };
            template[_0x40e2[104]] = function (_0x103fx16) {
              if (
                _0x103fx16 == _0x40e2[12] ||
                _0x103fx16 == _0x40e2[96] ||
                _0x103fx16 == _0x40e2[97] ||
                _0x103fx16 == _0x40e2[98]
              ) {
                template[_0x40e2[15]] = _0x103fx16;
              } else {
                console[_0x40e2[91]](_0x40e2[105]);
              }
            };
            template[_0x40e2[106]] = function (_0x103fx17) {
              if (_0x103fx17 != null && _0x103fx17 != _0x40e2[5]) {
                template[_0x40e2[19]] = wx[_0x40e2[107]]();
                template[_0x40e2[19]][_0x40e2[108]] = _0x103fx17;
              }
            };
            template[_0x40e2[109]] = function (_0x103fx18) {
              template[_0x40e2[16]] = _0x103fx18;
              if (
                _0x103fx18[_0x40e2[110]]() != _0x40e2[17] &&
                _0x103fx18[_0x40e2[110]]() != _0x40e2[111]
              ) {
                console[_0x40e2[91]](_0x40e2[112]);
              }
            };
            template[_0x40e2[113]] = function () {
              if (
                template[_0x40e2[11]] != _0x40e2[96] &&
                template[_0x40e2[11]] != _0x40e2[98] &&
                template[_0x40e2[13]] != _0x40e2[12] &&
                template[_0x40e2[13]] != _0x40e2[97]
              ) {
                echoss[_0x40e2[39]][_0x40e2[38]]({
                  ckitLoading: false,
                  ckitSuccess: true,
                });
                setTimeout(function () {
                  echoss[_0x40e2[39]][_0x40e2[38]]({
                    ckitSuccess: false,
                    ckitClose: true,
                  });
                  echoss[_0x40e2[21]][_0x40e2[40]](false);
                }, 2000);
              }
            };
            template[_0x40e2[114]] = function () {};
            template[_0x40e2[115]] = function (_0x103fx19) {};
            template[_0x40e2[37]] = function (_0x103fx1a, _0x103fx1b) {};
          })();
        },
        {},
      ],
    },
    {},
    [1]
  );
  return template;
});
echoss[_0x40e2[124]] = function () {
  echoss[_0x40e2[39]][_0x40e2[38]]({
    ckitInit: true,
    ckitClose: false,
    ckitSuccess: false,
    ckitBackgroundColor: template[_0x40e2[6]],
    ckitOpacity: template[_0x40e2[8]],
    ckitDescription: template[_0x40e2[10]],
    ckitCenterNumber: 1,
  });
  if (template[_0x40e2[18]] != null) {
    clearInterval(template[_0x40e2[18]]);
    template[_0x40e2[18]] = null;
  }
  template[_0x40e2[18]] = setInterval(function () {
    echoss[_0x40e2[39]][_0x40e2[38]]({
      ckitCenterNumber:
        (parseInt(echoss[_0x40e2[39]][_0x40e2[126]](_0x40e2[125])) % 4) + 1,
    });
  }, 800);
  template[_0x40e2[38]] = null;
  if (
    template[_0x40e2[15]] != _0x40e2[96] &&
    template[_0x40e2[15]] != _0x40e2[98]
  ) {
    if (template[_0x40e2[16]][_0x40e2[110]]() == _0x40e2[17]) {
      template[_0x40e2[38]] = function (_0x103fx8, _0x103fx27, _0x103fx28) {
        echoss[_0x40e2[27]][_0x40e2[127]](_0x103fx8, _0x103fx27, _0x103fx28);
      };
    } else {
      if (template[_0x40e2[16]][_0x40e2[110]]() == _0x40e2[111]) {
        template[_0x40e2[38]] = function (_0x103fx8, _0x103fx27, _0x103fx28) {
          echoss[_0x40e2[27]][_0x40e2[128]](_0x103fx8, _0x103fx27, _0x103fx28);
        };
      }
    }
  }
  echoss[_0x40e2[21]][_0x40e2[129]](
    function () {
      if (
        template[_0x40e2[15]] != _0x40e2[96] &&
        template[_0x40e2[15]] != _0x40e2[98] &&
        template[_0x40e2[38]] != null
      ) {
        echoss[_0x40e2[27]][_0x40e2[129]]();
        echoss[_0x40e2[27]][_0x40e2[130]](true);
        var _0x103fx29 = template[_0x40e2[4]] + _0x40e2[131] + _0x40e2[132];
        template[_0x40e2[38]](
          {
            aprvData: _0x103fx29,
            funcCd: _0x40e2[133],
            isuDivCd: echoss[_0x40e2[27]][_0x40e2[135]][_0x40e2[134]],
            cntYn: _0x40e2[96],
          },
          function () {
            esp[_0x40e2[139]](
              function (_0x103fx19) {
                echoss[_0x40e2[27]][_0x40e2[136]]();
                _0x103fx19 = esp[_0x40e2[137]](_0x103fx19);
                template[_0x40e2[115]](_0x103fx19);
                echoss[_0x40e2[27]][_0x40e2[138]]();
                if (
                  template[_0x40e2[11]] != _0x40e2[96] &&
                  template[_0x40e2[11]] != _0x40e2[98]
                ) {
                  if (
                    template[_0x40e2[13]] != _0x40e2[96] &&
                    template[_0x40e2[13]] != _0x40e2[98]
                  ) {
                    echoss[_0x40e2[39]][_0x40e2[38]]({ ckitSuccess: true });
                    setTimeout(function () {
                      echoss[_0x40e2[39]][_0x40e2[38]]({
                        ckitSuccess: false,
                        ckitClose: true,
                      });
                      echoss[_0x40e2[21]][_0x40e2[40]](false);
                    }, 2000);
                  }
                } else {
                  echoss[_0x40e2[39]][_0x40e2[38]]({ ckitClose: true });
                  echoss[_0x40e2[21]][_0x40e2[40]](false);
                }
              },
              function (_0x103fx1a, _0x103fx1b) {
                echoss[_0x40e2[27]][_0x40e2[136]]();
                template[_0x40e2[37]](_0x103fx1a, _0x103fx1b);
              }
            );
          },
          function (_0x103fx1a, _0x103fx1b) {
            template[_0x40e2[37]](_0x103fx1a, _0x103fx1b);
          }
        );
        echoss[_0x40e2[27]][_0x40e2[140]]();
      }
      echoss[_0x40e2[21]][_0x40e2[40]](true);
    },
    function (_0x103fx1a, _0x103fx1b) {
      template[_0x40e2[37]](_0x40e2[141], _0x40e2[142]);
      echoss[_0x40e2[39]][_0x40e2[38]]({ ckitClose: true });
      echoss[_0x40e2[21]][_0x40e2[40]](false);
    }
  );
  template[_0x40e2[124]]();
};
echoss[_0x40e2[143]] = function (_0x103fx1a, _0x103fx1b) {
  template[_0x40e2[37]](_0x103fx1a, _0x103fx1b);
};
var startStampTimestamp = null;
echoss[_0x40e2[21]][_0x40e2[144]] = function (_0x103fx1a, _0x103fx1b) {
  template[_0x40e2[37]](_0x103fx1a, _0x103fx1b);
};
echoss[_0x40e2[21]][_0x40e2[114]] = function () {
  if (
    template[_0x40e2[11]] != _0x40e2[96] &&
    template[_0x40e2[11]] != _0x40e2[98]
  ) {
    startStampTimestamp = Date[_0x40e2[145]]();
    echoss[_0x40e2[39]][_0x40e2[38]]({ ckitLoading: true });
  }
  if (
    template[_0x40e2[19]] != null &&
    template[_0x40e2[19]][_0x40e2[108]] != null &&
    template[_0x40e2[19]][_0x40e2[108]] != _0x40e2[5]
  ) {
    template[_0x40e2[19]][_0x40e2[146]]();
  }
  template[_0x40e2[114]]();
};
echoss[_0x40e2[21]][_0x40e2[147]] = function (_0x103fx1a, _0x103fx1b) {
  template[_0x40e2[37]](_0x103fx1a, _0x103fx1b);
  if (
    template[_0x40e2[11]] != _0x40e2[96] &&
    template[_0x40e2[11]] != _0x40e2[98]
  ) {
    echoss[_0x40e2[39]][_0x40e2[38]]({ ckitLoading: false });
  }
};
echoss[_0x40e2[21]][_0x40e2[148]] = function (_0x103fx2b) {
  if (
    template[_0x40e2[11]] != _0x40e2[96] &&
    template[_0x40e2[11]] != _0x40e2[98]
  ) {
    esp[_0x40e2[154]](
      _0x103fx2b,
      function (_0x103fx19) {
        var _0x103fx2c = Date[_0x40e2[145]]() - startStampTimestamp;
        setTimeout(
          function () {
            _0x103fx19 = esp[_0x40e2[137]](_0x103fx19);
            template[_0x40e2[115]](_0x103fx19);
            if (
              template[_0x40e2[15]] == _0x40e2[96] ||
              template[_0x40e2[15]] == _0x40e2[98]
            ) {
              echoss[_0x40e2[39]][_0x40e2[38]]({
                echossIconColor: _0x40e2[149],
              });
            }
            if (
              template[_0x40e2[15]] != _0x40e2[96] &&
              template[_0x40e2[15]] != _0x40e2[98]
            ) {
              echoss[_0x40e2[27]][_0x40e2[138]]();
            }
            if (
              template[_0x40e2[13]] != _0x40e2[96] &&
              template[_0x40e2[13]] != _0x40e2[98]
            ) {
              echoss[_0x40e2[39]][_0x40e2[38]]({
                ckitLoading: false,
                ckitSuccess: true,
              });
              setTimeout(function () {
                echoss[_0x40e2[39]][_0x40e2[38]]({
                  ckitSuccess: false,
                  ckitClose: true,
                });
                echoss[_0x40e2[21]][_0x40e2[40]](false);
              }, 2000);
            }
          },
          _0x103fx2c < 1200 ? 1200 - _0x103fx2c : 1
        );
      },
      function (_0x103fx1a, _0x103fx1b) {
        var _0x103fx2c = Date[_0x40e2[145]]() - startStampTimestamp;
        setTimeout(
          function () {
            template[_0x40e2[37]](_0x103fx1a, _0x103fx1b);
            echoss[_0x40e2[39]][_0x40e2[38]]({ ckitLoading: false });
            if (
              template[_0x40e2[15]] != _0x40e2[96] &&
              template[_0x40e2[15]] != _0x40e2[98]
            ) {
              if (_0x103fx1a === _0x40e2[150]) {
                echoss[_0x40e2[27]][_0x40e2[152]](
                  echoss[_0x40e2[27]][_0x40e2[151]].TRY_AGAIN,
                  _0x40e2[150]
                );
              } else {
                if (_0x103fx1a === _0x40e2[153]) {
                  echoss[_0x40e2[27]][_0x40e2[152]](
                    echoss[_0x40e2[27]][_0x40e2[151]].NOT_FOUND_STORE,
                    _0x40e2[153]
                  );
                }
              }
            }
          },
          _0x103fx2c < 1200 ? 1200 - _0x103fx2c : 1
        );
      }
    );
  } else {
    esp[_0x40e2[154]](
      _0x103fx2b,
      function (_0x103fx19) {
        _0x103fx19 = esp[_0x40e2[137]](_0x103fx19);
        template[_0x40e2[115]](_0x103fx19);
        echoss[_0x40e2[39]][_0x40e2[38]]({ ckitClose: true });
        echoss[_0x40e2[21]][_0x40e2[40]](false);
      },
      function (_0x103fx1a, _0x103fx1b) {
        template[_0x40e2[37]](_0x103fx1a, _0x103fx1b);
        if (
          template[_0x40e2[15]] != _0x40e2[96] &&
          template[_0x40e2[15]] != _0x40e2[98]
        ) {
          if (_0x103fx1a === _0x40e2[150]) {
            echoss[_0x40e2[27]][_0x40e2[152]](
              echoss[_0x40e2[27]][_0x40e2[151]].TRY_AGAIN,
              _0x40e2[150]
            );
          } else {
            if (_0x103fx1a === _0x40e2[153]) {
              echoss[_0x40e2[27]][_0x40e2[152]](
                echoss[_0x40e2[27]][_0x40e2[151]].NOT_FOUND_STORE,
                _0x40e2[153]
              );
            }
          }
        }
      }
    );
  }
};
exports[_0x40e2[155]] = template;
