(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-login"],{"129b":function(t,a,i){"use strict";i.r(a);var e=i("b7b2"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},1306:function(t,a,i){"use strict";var e=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("80c8")),o=e(i("8343")),c=e(i("d845")),u={components:{barTitle:n.default},data:function(){return{src:"",account:"",password:""}},onLoad:function(){var t=this;uni.request({url:c.default.config.url+"/common/index/shopInfo",method:"GET",data:{},success:function(a){t.src=a.data.data.logo},fail:function(){},complete:function(){}})},onReady:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{goForget:function(){uni.navigateTo({url:"/pages/my/forget"})},goResiger:function(){uni.navigateTo({url:"/pages/my/register"})},login:function(){var t=this;uni.request({url:c.default.config.url+"/common/index/userLogin",method:"POST",data:{account:t.account,password:t.password},success:function(t){200==t.data.code?(uni.setStorageSync("bear_token",t.data.data.token),uni.reLaunch({url:"/pages/app/index"})):uni.showToast({title:"用户名或密码不正确",icon:"error"})},fail:function(){},complete:function(){}})}}};a.default=u},"171b":function(t,a,i){"use strict";i.r(a);var e=i("d048"),n=i("c968");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("7747");var c,u=i("f0c5"),r=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"a0cfc490",null,!1,e["a"],c);a["default"]=r.exports},1774:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".zaiui-user-login-avatar-view[data-v-a0cfc490]{position:relative;display:flex;align-items:center;justify-content:center;margin-top:%?218.18?%}.zaiui-user-login-avatar-view .cu-avatar[data-v-a0cfc490]{width:%?181.81?%;height:%?181.81?%}.zaiui-btn-view[data-v-a0cfc490]{position:relative;margin-top:%?72.72?%;padding:0 %?45.45?%}.zaiui-btn-view .cu-btn .icon[data-v-a0cfc490]{position:relative;font-size:%?47.27?%;right:%?9.09?%;top:%?-3.63?%}.zaiui-agreement-checked-view[data-v-a0cfc490]{position:relative;padding:%?27.27?% %?45.45?%}.zaiui-agreement-checked-view .zaiui-checked[data-v-a0cfc490]{position:absolute;-webkit-transform:scale(.7);transform:scale(.7)}.zaiui-agreement-checked-view .text-black-view[data-v-a0cfc490]{padding-left:%?54.54?%;line-height:%?47.27?%}.zaiui-foot-ad-view[data-v-a0cfc490]{position:fixed;text-align:center;bottom:%?72.72?%;width:100%}",""]),t.exports=a},"44f8":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-1f1d0f19]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-1f1d0f19]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-1f1d0f19]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-1f1d0f19]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-1f1d0f19]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-1f1d0f19]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-1f1d0f19]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},"4b37":function(t,a,i){"use strict";var e=i("feeb"),n=i.n(e);n.a},"555b":function(t,a,i){var e=i("1774");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("37267903",e,!0,{sourceMap:!1,shadowMode:!1})},7747:function(t,a,i){"use strict";var e=i("555b"),n=i.n(e);n.a},"78e3":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},o=[]},"80c8":function(t,a,i){"use strict";i.r(a);var e=i("78e3"),n=i("129b");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("4b37");var c,u=i("f0c5"),r=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"1f1d0f19",null,!1,e["a"],c);a["default"]=r.exports},b7b2:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=e},c968:function(t,a,i){"use strict";i.r(a);var e=i("1306"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},d048:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!1}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("登录")])],2),i("v-uni-view",{staticClass:"zaiui-user-login-avatar-view"},[i("v-uni-image",{staticClass:"cu-avatar round lg",attrs:{src:t.src}})],1),i("v-uni-view",{staticStyle:{margin:"30rpx 0"}},[i("v-uni-input",{staticStyle:{background:"#EEEEEE",padding:"20rpx 10rpx",height:"90rpx",margin:"0 50rpx"},attrs:{type:"text",focus:"true",placeholder:"输入手机号"},model:{value:t.account,callback:function(a){t.account=a},expression:"account"}}),i("v-uni-input",{staticStyle:{background:"#EEEEEE",padding:"20rpx 10rpx",height:"90rpx",margin:"0 50rpx","margin-top":"20rpx"},attrs:{placeholder:"输入密码",type:"password"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),i("v-uni-view",{staticClass:"flex flex-direction zaiui-btn-view",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.login()}}},[i("v-uni-button",{staticClass:"cu-btn bg-red"},[i("v-uni-text",[t._v("登录")])],1)],1),i("v-uni-view",{staticClass:"zaiui-agreement-checked-view",staticStyle:{display:"none"}},[i("v-uni-view",{staticClass:"text-sm text-black-view"},[i("v-uni-view",{staticClass:"text-red",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goResiger()}}},[t._v("没有账号,立即注册?")])],1)],1),i("v-uni-view",{staticClass:"zaiui-agreement-checked-view"},[i("v-uni-view",{staticClass:"text-sm text-black-view"},[i("v-uni-view",{staticClass:"text-red",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goForget()}}},[t._v("忘记密码")])],1)],1)],1)},o=[]},feeb:function(t,a,i){var e=i("44f8");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("1cdc321e",e,!0,{sourceMap:!1,shadowMode:!1})}}]);