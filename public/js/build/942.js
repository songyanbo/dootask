"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[942],{85916:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(1519),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,".component-only-office[data-v-1ec144f0]{align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0}.component-only-office .placeholder[data-v-1ec144f0]{flex:1;height:100%;width:100%}.component-only-office .office-loading[data-v-1ec144f0]{align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;z-index:2}",""]);const r=o},17942:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var n=i(20629);function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const a={name:"OnlyOffice",props:{id:{type:String,default:function(){return"office_"+Math.round(1e4*Math.random())}},code:{type:String,default:""},value:{type:[Object,Array],default:function(){return{}}},readOnly:{type:Boolean,default:!1},documentKey:Function},data:function(){return{loadIng:0,docEditor:null}},mounted:function(){},beforeDestroy:function(){null!==this.docEditor&&(this.docEditor.destroyEditor(),this.docEditor=null)},computed:r(r({},(0,n.rn)(["userToken","userInfo","themeIsDark"])),{},{fileType:function(){return this.getType(this.value.type)},fileName:function(){return this.value.name}}),watch:{"value.id":{handler:function(e){var t=this;e&&(this.loadIng++,$A.loadScript($A.apiUrl("../office/web-apps/apps/api/documents/api.js"),(function(e){if(t.loadIng--,null===e)if(t.documentKey){var i=t.documentKey();i&&i.then?i.then(t.loadFile):t.loadFile()}else t.handleClose();else $A.modalAlert("组件加载失败！")})))},immediate:!0}},methods:{getType:function(e){switch(e){case"word":return"docx";case"excel":return"xlsx";case"ppt":return"pptx"}return e},loadFile:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";null!==this.docEditor&&(this.docEditor.destroyEditor(),this.docEditor=null);var i="zh";switch(this.getLanguage()){case"CN":case"TC":i="zh";break;default:i="en"}var n=this.code||this.value.id,o=$A.strExists(this.fileName,".")?this.fileName:this.fileName+"."+this.fileType,r={document:{fileType:this.fileType,key:"".concat(this.fileType,"-").concat(n,"-").concat(t),title:o,url:"http://nginx/api/file/content/?id=".concat(n,"&token=").concat(this.userToken)},editorConfig:{mode:"edit",lang:i,user:{id:this.userInfo.userid,name:this.userInfo.nickname},customization:{uiTheme:this.themeIsDark?"theme-dark":"theme-classic-light"},callbackUrl:"http://nginx/api/file/content/office?id=".concat(n,"&token=").concat(this.userToken)}};if(/\/hideenOfficeTitle\//.test(window.navigator.userAgent)&&(r.document.title=" "),$A.leftExists(n,"msgFile_")?r.document.url="http://nginx/api/dialog/msg/download/?msg_id=".concat($A.leftDelete(n,"msgFile_"),"&token=").concat(this.userToken):$A.leftExists(n,"taskFile_")&&(r.document.url="http://nginx/api/project/task/filedown/?file_id=".concat($A.leftDelete(n,"taskFile_"),"&token=").concat(this.userToken)),this.readOnly&&(r.editorConfig.mode="view",r.editorConfig.callbackUrl=null,!r.editorConfig.user.id)){var c=$A.getStorageInt("viewer");c||(c=$A.randNum(1e3,99999),$A.setStorage("viewer",c)),r.editorConfig.user.id="viewer_"+c,r.editorConfig.user.name="Viewer_"+c}this.$nextTick((function(){e.docEditor=new DocsAPI.DocEditor(e.id,r)}))}}};var l=i(93379),s=i.n(l),d=i(85916),u={insert:"head",singleton:!1};s()(d.Z,u);d.Z.locals;const f=(0,i(51900).Z)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"component-only-office"},[i("div",{staticClass:"placeholder",attrs:{id:this.id}}),e._v(" "),e.loadIng>0?i("div",{staticClass:"office-loading"},[i("Loading")],1):e._e()])}),[],!1,null,"1ec144f0",null).exports}}]);