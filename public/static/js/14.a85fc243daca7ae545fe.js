webpackJsonp([14,17],{42:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(4),n=i(s),o=a(5),r=i(o),l=a(3);e["default"]={methods:(0,n["default"])({},(0,l.mapActions)(["userInfo"]),{fastGetIdentify:function(){if("获取验证码"!==(0,r["default"])("#fastGet-identify").val())return!1;var t=(0,r["default"])("#fastLog-phone").val();11===t.length?r["default"].ajax({type:"post",url:"/request/user/fastLogin/identify",data:{phone:t},success:function(t){if(1===t.state){r["default"].toast("验证码已下发至您的手机，请查收");var e=60,a=setInterval(function(){0===e?(clearInterval(a),(0,r["default"])("#fastGet-identify").val("获取验证码")):((0,r["default"])("#fastGet-identify").val(e+"s后重试"),e--)},1e3)}else r["default"].toast("验证码发送失败，请检查号码或稍后再试")}}):r["default"].toast("请输入正确的手机号")},fastLogin:function(){var t=this,e=(0,r["default"])("#fastLog-phone").val(),a=(0,r["default"])("#fastLog-identify").val();11!==e.length?r["default"].toast("请输入正确的手机号"):a?r["default"].ajax({type:"post",url:"/request/user/fastLogin",dataType:"json",data:{phone:e,identify:a},success:function(e){1===e.state?(r["default"].toast("登录成功，正在为您跳转"),t.userInfo(),setTimeout(function(){t.$router.go("/person")},1e3)):r["default"].toast(e.err)}}):r["default"].toast("请输入验证码")}})}},89:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,"#fastLoginPage .content{background-color:#fdfefe}#fastLoginPage .address{margin:.4rem 1.4rem;height:2.4rem}#fastLoginPage .address .label{width:28%!important}#fastLoginPage .input{font-size:.8rem!important;line-height:2.15rem false}#fastLoginPage .signin-turn{font-size:.75rem;color:#ccc;margin:.6rem}#fastLogin-now{text-align:center;background-color:#1a7ace;margin:1.2rem auto 0;height:1.8rem;line-height:1.8rem}#fastLog-identify{width:55%}#fastGet-identify{width:45%;line-height:1.5rem;margin-top:.2rem;padding:0;background-color:#1a7ace;border:none;transition:all .3s ease}#fastGet-identify:active{background-color:#176ab3}",""])},107:function(t,e,a){var i=a(89);"string"==typeof i&&(i=[[t.id,i,""]]);a(2)(i,{});i.locals&&(t.exports=i.locals)},128:function(t,e,a){var i,s;a(107),i=a(42);var n=a(144);s=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(s=i=i["default"]),"function"==typeof s&&(s=s.options),s.render=n.render,s.staticRenderFns=n.staticRenderFns,t.exports=i},144:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"view",attrs:{id:"fastLoginPage"}},[_h("header",{staticClass:"bar bar-nav"},[_h("router-link",{staticClass:"icon icon-left pull-left",attrs:{to:{path:"/person"}}}),_m(0)]),_h("div",{staticClass:"content"},[_h("div",{staticClass:"content-inner"},[_h("ul",[_m(1),_h("li",{staticClass:"address list-block"},[_h("div",{staticClass:"item-inner"},[_m(2),_h("div",{staticClass:"item-input"},[_m(3),_h("input",{staticClass:"pull-right",attrs:{id:"fastGet-identify",type:"button",value:"获取验证码"},on:{click:fastGetIdentify}})])])])]),_h("div",{attrs:{id:"fastLogin-now"},on:{click:fastLogin}},["快速登录"]),_h("router-link",{staticClass:"signin-turn pull-right",attrs:{to:{path:"/person/login"}}},["账号密码登录"]),_m(4)])])])},staticRenderFns:[function(){with(this)return _h("h1",{staticClass:"title"},["快速登录"])},function(){with(this)return _h("li",{staticClass:"address list-block"},[_h("div",{staticClass:"item-inner"},[_h("div",{staticClass:"item-title label"},["手机号："]),_h("div",{staticClass:"item-input"},[_h("input",{staticClass:"input",attrs:{id:"fastLog-phone",type:"number",placeholder:"输入您的手机号"}})])])])},function(){with(this)return _h("div",{staticClass:"item-title label"},["验证码："])},function(){with(this)return _h("input",{staticClass:"input pull-left",attrs:{id:"fastLog-identify",type:"number",placeholder:"请输入验证码"}})},function(){with(this)return _h("a",{staticClass:"signin-turn pull-right",attrs:{href:" https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3eb86a311c6b9da4&amp;redirect_uri=http%3A%2F%2Fcakeees.top&amp;response_type=code&amp;scope=snsapi_userinfo&amp;state=wxoauth#wechat_redirect"}},["微信登录"])}]}}});