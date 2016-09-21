webpackJsonp([18,17],{0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}var u=t(10),i=o(u),r=t(13),s=o(r),a=t(12),c=o(a),f=t(86),p=o(f),l=i["default"].extend({components:{uniqueCake:p["default"]},store:s["default"]});c["default"].start(l,"#unique")},4:function(n,e){n.exports=Zepto},5:function(n,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.userInit=function(n){return n.dispatch("USERINIT")},e.userInfo=function(n){return n.dispatch("USERINFO")},e.waresInfo=function(n){return n.dispatch("WARESINFO")},e.wareInit=function(n){return n.dispatch("WAREINIT")},e.wareInfo=function(n,e){return n.dispatch("WAREINFO",e)},e.orderInit=function(n){return n.dispatch("ORDERINIT")},e.orderWares=function(n,e){return n.dispatch("ORDERWARES",e)}},12:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(e,"__esModule",{value:!0});var u=t(10),i=o(u),r=t(103),s=o(r);i["default"].use(s["default"]);var a=new s["default"]({history:!0});a.map({"/":{component:function(n){t.e(16,function(e){var t=[e(85)];n.apply(null,t)}.bind(this))},subRoutes:{"/index":{component:function(n){t.e(9,function(e){var t=[e(91)];n.apply(null,t)}.bind(this))}},"/ware":{component:function(n){t.e(8,function(e){var t=[e(90)];n.apply(null,t)}.bind(this))}},"/shopcar":{component:function(n){t.e(12,function(e){var t=[e(93)];n.apply(null,t)}.bind(this))}},"/person":{component:function(n){t.e(2,function(e){var t=[e(92)];n.apply(null,t)}.bind(this))}}}},"/ware/:wareId":{component:function(n){t.e(6,function(e){var t=[e(101)];n.apply(null,t)}.bind(this))}},"/order/:wareId":{component:function(n){t.e(0,function(e){var t=[e(102)];n.apply(null,t)}.bind(this))}},"/person/fastLogin":{component:function(n){t.e(14,function(e){var t=[e(88)];n.apply(null,t)}.bind(this))}},"/person/regist":{component:function(n){t.e(3,function(e){var t=[e(99)];n.apply(null,t)}.bind(this))}},"/person/login":{component:function(n){t.e(5,function(e){var t=[e(97)];n.apply(null,t)}.bind(this))}},"/person/orders":{component:function(n){t.e(4,function(e){var t=[e(98)];n.apply(null,t)}.bind(this))}},"/person/addresses":{component:function(n){t.e(7,function(e){var t=[e(95)];n.apply(null,t)}.bind(this))}},"/person/addresses/new":{component:function(n){t.e(1,function(e){var t=[e(94)];n.apply(null,t)}.bind(this))}},"/person/coupons":{component:function(n){t.e(11,function(e){var t=[e(96)];n.apply(null,t)}.bind(this))}},"/fedBack":{component:function(n){t.e(13,function(e){var t=[e(89)];n.apply(null,t)}.bind(this))}},"/aboutUs":{component:function(n){t.e(15,function(e){var t=[e(87)];n.apply(null,t)}.bind(this))}},"/userAgreement":{component:function(n){t.e(10,function(e){var t=[e(100)];n.apply(null,t)}.bind(this))}}}),a.redirect({"*":"/index"}),a.alias({"/":"/index"}),e["default"]=a},13:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(e,"__esModule",{value:!0});var u=t(30),i=o(u),r=t(10),s=o(r),a=t(104),c=o(a),f=t(4),p=o(f);s["default"].use(c["default"]);var l=function y(){(0,i["default"])(this,y),this.info={},this.weight=1,this.dish="",this.sum=1},d=function m(){(0,i["default"])(this,m),this.nickname="",this.type=1,this.orders=[],this.shopcar=[],this.addresses=[],this.coupons=[]},h=function b(){(0,i["default"])(this,b),this.wares=[],this.msg="",this.addressId="",this.receivingTime="",this.payway=0,this.price=0},v={user:new d,wares:[],ware:new l,order:new h},w={USERINIT:function(n){n.user=new d},USERINFO:function(n){p["default"].ajax({type:"get",url:"/request/user",dataType:"json",success:function(e){n.user=e},error:function(){return p["default"].toast("用户信息获取失败")}})},WARESINFO:function(n){p["default"].ajax({type:"get",url:"/request/ware",success:function(e){n.wares=e},error:function(){return p["default"].toast("商品信息获取失败")}})},WAREINIT:function(n){n.ware=new l},WAREINFO:function(n,e){p["default"].ajax({type:"get",url:"/request/ware/"+e,success:function(e){n.ware.info=e},error:function(){return p["default"].toast("商品信息获取失败")}})},ORDERINIT:function(n){n.order=new h},ORDERWARES:function(n,e){n.order.wares.push(e)}},I=new c["default"].Store({state:v,mutations:w});e["default"]=I},14:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(5);e["default"]={ready:function(){this.userInfo(),this.waresInfo()},vuex:{actions:{userInfo:o.userInfo,waresInfo:o.waresInfo}}}},49:function(n,e){},68:function(n,e){n.exports="<router-view keep-alive=keep-alive transition=fade></router-view>"},86:function(n,e,t){var o,u;t(49),o=t(14),u=t(68),n.exports=o||{},n.exports.__esModule&&(n.exports=n.exports["default"]),u&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=u)}});