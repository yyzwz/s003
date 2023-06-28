"use strict";(self["webpackChunks003"]=self["webpackChunks003"]||[]).push([[8693,8188],{8693:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("编辑资源求购单")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"资源",prop:"resId"}},[t("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择资源..."},model:{value:e.form.resId,callback:function(t){e.$set(e.form,"resId",t)},expression:"form.resId"}},e._l(e.resourceList,(function(a,l){return t("Option",{key:l,attrs:{value:a.id}},[e._v(e._s(a.title)+" - "+e._s(a.modal))])})),1)],1),t("FormItem",{attrs:{label:"紧急程度",prop:"level"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"urgency",transfer:"",clearable:"",placeholder:"请选择资源的紧急程度..."},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}})],1),t("FormItem",{attrs:{label:"需求量",prop:"number"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),t("FormItem",{attrs:{label:"交易价格",prop:"price"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),t("FormItem",{attrs:{label:"销售详情",prop:"content"}},[t("Input",{staticStyle:{width:"570px"},attrs:{type:"textarea",rows:8,"show-word-limit":"",maxlength:"240",clearable:"",placeholder:"请选择资源的出售详情..."},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},r=[],s=a(8126),n=a(8188);const i={name:"edit",components:{dict:n["default"]},props:{data:Object},data(){return{submitLoading:!1,form:{resId:"",resName:"",level:"",number:0,price:0,content:""},formValidate:{},resourceList:[]}},methods:{init(){this.getResourceListFx(),this.handleReset(),this.form=this.data},getResourceListFx(){var e=this;(0,s.rT)().then((t=>{t.success&&(e.resourceList=t.result)}))},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,s.lq)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},o=i;var c=a(1001),u=(0,c.Z)(o,l,r,!1,null,null,null);const d=u.exports},8188:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=function(){var e=this,t=e._self._c;return t("div",[t("Select",{attrs:{size:e.size,loading:e.loading,placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,filterable:e.filterable,transfer:e.transfer,clearable:e.clearable,placement:e.placement,"transfer-class-name":e.transferClassName,prefix:e.prefix,"max-tag-count":e.maxTagCount,"max-tag-placeholder":e.maxTagPlaceholder},on:{"on-change":e.handleChange,"on-query-change":e.handleQueryChange,"on-clear":e.handleClear,"on-open-change":e.handleOpenChange,"on-select":e.handleSelect},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.dictData,(function(a,l){return t("Option",{key:l,attrs:{value:a.value}},[e._v(e._s(a.title))])})),1)],1)},r=[],s=a(7877);const n={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData(e){this.loading=!0,(0,s.i3)(e).then((e=>{this.loading=!1,e.success&&(this.dictData=e.result)}))},handleChange(e){this.$emit("input",e),this.$emit("on-change",e)},handleQueryChange(e){this.$emit("on-query-change",e)},handleClear(){this.$emit("on-clear","")},handleOpenChange(e){this.$emit("on-open-change",e)},handleSelect(e){this.$emit("on-select",e)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)},dict(e){this.getData(e)}},mounted(){this.getData(this.dict)}},i=n;var o=a(1001),c=(0,o.Z)(i,l,r,!1,null,null,null);const u=c.exports},8126:(e,t,a)=>{a.d(t,{FO:()=>c,Q9:()=>i,Yj:()=>s,bm:()=>r,lq:()=>n,rT:()=>o});var l=a(7184);const r=e=>(0,l.A_)("/purchaseOrder/getByPage",e),s=e=>(0,l.j0)("/purchaseOrder/insert",e),n=e=>(0,l.j0)("/purchaseOrder/update",e),i=e=>(0,l.j0)("/purchaseOrder/delByIds",e),o=e=>(0,l.A_)("/resource/getAll",e),c=e=>(0,l.j0)("/purchaseOrder/sell",e)}}]);