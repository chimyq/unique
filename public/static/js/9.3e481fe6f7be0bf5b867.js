webpackJsonp([9,17],{48:function(e,s,t){"use strict";function d(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(s,"__esModule",{value:!0});var a=t(4),r=d(a),i=t(5),n=d(i),o=t(3);s["default"]={mounted:function(){this.$nextTick(function(){this.backurl=this.$route.query.backurl||this.backurl})},data:function(){return{backurl:{path:""}}},computed:(0,r["default"])({},(0,o.mapGetters)({user:"getUserInfo"})),methods:{defaultAddress:function(e){if("SPAN"!==e.target.tagName){for(var s=(0,n["default"])(e.currentTarget).data("addressId"),t=this.user.addresses.length-1;t>=0;t--)this.user.addresses[t].state=0;this.user.addresses[s].state=1,n["default"].ajax({type:"post",url:"/request/user/address/default",dataType:"json",data:{addressId:this.user.addresses[s]._id},success:function(e){0===e.state&&n["default"].toast("数据同步失败，请稍后再试")}})}},deleteAddress:function(e){var s=this,t=(0,n["default"])(e.target).parent().parent().data("addressId");1===this.user.addresses[t].state?n["default"].toast("当前地址为默认地址，不可删除"):n["default"].confirm("确认删除？",function(){n["default"].ajax({type:"post",url:"/request/user/address/delete",dataType:"json",data:{addressId:s.user.addresses[t]._id},success:function(e){return 0===e.state?n["default"].toast("数据同步失败，请稍后再试"):void s.user.addresses.splice(t,1)}})})},editAddress:function(){console.log("lalala")}}}},92:function(e,s,t){s=e.exports=t(1)(),s.push([e.id,"#myAddresses .content{background-color:#fdfefe}#myAddresses .content-block{margin:0;padding:0}#myAddresses .ready-address{margin:.6rem 1.2rem;height:2.4rem}#myAddresses .ready-address p{font-size:.65rem}#myAddresses .ready-address .label{width:20%!important}#myAddresses .ready-address .icon{font-size:.7rem}#myAddresses .input{font-size:.8rem!important;line-height:2.15rem!important}#myAddresses .badge{margin:.2rem}#myAddresses .ready-address h4,#myAddresses .ready-address p{margin:0;font-weight:400}#myAddresses .add,#myAddresses .add:active{display:block;width:100%;height:2.2rem;line-height:2.2rem;text-align:center;background-color:#1975c8;color:#000;font-size:.8rem;margin-top:.4rem}.address-detail{width:64%}",""])},110:function(e,s,t){var d=t(92);"string"==typeof d&&(d=[[e.id,d,""]]);t(2)(d,{});d.locals&&(e.exports=d.locals)},135:function(e,s,t){var d,a;t(110),d=t(48);var r=t(147);a=d=d||{},"object"!=typeof d["default"]&&"function"!=typeof d["default"]||(a=d=d["default"]),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=d},147:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"view",attrs:{id:"myAddresses"}},[_h("header",{staticClass:"bar bar-nav"},[_h("a",{staticClass:"icon icon-left pull-left",attrs:{href:backurl}}),_m(0)]),_h("div",{staticClass:"content"},[_h("div",{staticClass:"content-inner"},[_h("ul",[_l(user.addresses,function(e,s){return _h("li",{staticClass:"clearfix ready-address",attrs:{"data-address-id":s,transition:"fade"},on:{click:defaultAddress}},[_h("span",{staticClass:"pull-left address-detail"},[_h("h4",[_s(e.phone)+"（"+_s(e.receiver)+"）"]),_h("p",[_s(e.site)])]),_h("div",{staticClass:"pull-right address-operation"},[_h("span",{staticClass:"address-edit icon icon-edit",on:{click:editAddress}},["编辑"]),_h("span",{staticClass:"address-delete icon icon-remove",on:{click:deleteAddress}},["删除"])]),1==e.state?_h("span",{staticClass:"badge pull-right"},["默认"]):_e()])})]),_h("router-link",{staticClass:"add",attrs:{to:{path:"/person/addresses/new"}}},["新增"])])])])},staticRenderFns:[function(){with(this)return _h("h1",{staticClass:"title"},["收货地址"])}]}}});