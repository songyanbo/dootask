"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[572],{71209:(t,i,s)=>{s.d(i,{Z:()=>o});var e=s(1519),a=s.n(e)()((function(t){return t[1]}));a.push([t.id,".valid-wrap{align-items:center;display:flex;height:100vh;justify-content:center;width:100vw}.valid-box{background-color:#fff;border-radius:10px;padding:5px 15px 20px;width:500px}.valid-box .valid-title{border-bottom:1px solid #e8eaec;line-height:1;padding:14px 16px}.valid-box .validation-text{color:#333;font-size:14px;padding:10px}",""]);const o=a},70572:(t,i,s)=>{s.r(i),s.d(i,{default:()=>c});const e={name:"validEmail",components:{},data:function(){return{success:!1,error:!1}},mounted:function(){this.verificationEmail()},watch:{},methods:{verificationEmail:function(){var t=this;this.$store.dispatch("call",{url:"users/email/verification",data:{code:this.$route.query.code}}).then((function(i){i.data;t.success=!0,t.error=!1})).catch((function(){t.success=!1,t.error=!0}))}}};var a=s(93379),o=s.n(a),r=s(71209),n={insert:"head",singleton:!1};o()(r.Z,n);r.Z.locals;const c=(0,s(51900).Z)(e,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"valid-wrap"},[s("div",{staticClass:"valid-box"},[s("div",{staticClass:"valid-title"},[t._v(t._s(t.$L("验证邮箱")))]),t._v(" "),t.success||t.error?t._e():s("Spin",{attrs:{size:"large"}}),t._v(" "),t.success?s("div",{staticClass:"validation-text"},[s("p",[t._v(t._s(t.$L("您的邮箱已通过验证")))]),t._v(" "),s("p",[t._v(t._s(t.$L("今后您可以通过此邮箱重置您的账号密码")))])]):t._e(),t._v(" "),t.error?s("div",{staticClass:"validation-text"},[s("div",[t._v(t._s(t.$L("您的邮箱未通过验证，可能的原因：")))]),t._v(" "),s("div",[t._v(t._s(t.$L("1.验证码已过期")))]),t._v(" "),s("div",[t._v(t._s(t.$L("2.重复使用验证码")))])]):t._e(),t._v(" "),t.success?s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Button",{attrs:{type:"primary",long:""},on:{click:function(i){return t.$A.userLogoutV2()}}},[t._v(t._s(t.$L("返回首页")))])],1):t._e()],1)])}),[],!1,null,null,null).exports}}]);