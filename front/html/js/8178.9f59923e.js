"use strict";(self["webpackChunks003"]=self["webpackChunks003"]||[]).push([[8178,2520,8693,8188],{2520:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var a=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("添加资源求购单")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"资源",prop:"resId"}},[t("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择资源..."},model:{value:e.form.resId,callback:function(t){e.$set(e.form,"resId",t)},expression:"form.resId"}},e._l(e.resourceList,(function(s,a){return t("Option",{key:a,attrs:{value:s.id}},[e._v(e._s(s.title)+" - "+e._s(s.modal))])})),1)],1),t("FormItem",{attrs:{label:"紧急程度",prop:"level"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"urgency",transfer:"",clearable:"",placeholder:"请选择资源的紧急程度..."},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}})],1),t("FormItem",{attrs:{label:"需求量",prop:"number"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),t("FormItem",{attrs:{label:"交易价格",prop:"price"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),t("FormItem",{attrs:{label:"销售详情",prop:"content"}},[t("Input",{staticStyle:{width:"570px"},attrs:{type:"textarea",rows:8,"show-word-limit":"",maxlength:"240",clearable:"",placeholder:"请选择资源的出售详情..."},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},i=[],l=s(8126),r=s(8188);const o={name:"add",components:{dict:r["default"]},data(){return{submitLoading:!1,form:{resId:"",resName:"",level:"",number:0,price:0,content:""},formValidate:{},resourceList:[]}},methods:{init(){this.getResourceListFx()},getResourceListFx(){var e=this;(0,l.rT)().then((t=>{t.success&&(e.resourceList=t.result)}))},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,l.Yj)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},n=o;var c=s(1001),d=(0,c.Z)(n,a,i,!1,null,null,null);const m=d.exports},8693:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var a=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("编辑资源求购单")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"资源",prop:"resId"}},[t("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择资源..."},model:{value:e.form.resId,callback:function(t){e.$set(e.form,"resId",t)},expression:"form.resId"}},e._l(e.resourceList,(function(s,a){return t("Option",{key:a,attrs:{value:s.id}},[e._v(e._s(s.title)+" - "+e._s(s.modal))])})),1)],1),t("FormItem",{attrs:{label:"紧急程度",prop:"level"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"urgency",transfer:"",clearable:"",placeholder:"请选择资源的紧急程度..."},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}})],1),t("FormItem",{attrs:{label:"需求量",prop:"number"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),t("FormItem",{attrs:{label:"交易价格",prop:"price"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),t("FormItem",{attrs:{label:"销售详情",prop:"content"}},[t("Input",{staticStyle:{width:"570px"},attrs:{type:"textarea",rows:8,"show-word-limit":"",maxlength:"240",clearable:"",placeholder:"请选择资源的出售详情..."},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},i=[],l=s(8126),r=s(8188);const o={name:"edit",components:{dict:r["default"]},props:{data:Object},data(){return{submitLoading:!1,form:{resId:"",resName:"",level:"",number:0,price:0,content:""},formValidate:{},resourceList:[]}},methods:{init(){this.getResourceListFx(),this.handleReset(),this.form=this.data},getResourceListFx(){var e=this;(0,l.rT)().then((t=>{t.success&&(e.resourceList=t.result)}))},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,l.lq)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},n=o;var c=s(1001),d=(0,c.Z)(n,a,i,!1,null,null,null);const m=d.exports},8178:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},["add"==e.currView?t("add",{on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),"edit"==e.currView?t("edit",{attrs:{data:e.formData},on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),t("Card",{directives:[{name:"show",rawName:"v-show",value:"index"==e.currView,expression:"currView=='index'"}]},[t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)}}},[t("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{ref:"searchForm",staticStyle:{display:"flex"},attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{attrs:{label:"",prop:"resName"}},[t("Input",{staticStyle:{width:"120px"},attrs:{type:"text",placeholder:"资源名称",clearable:""},model:{value:e.searchForm.resName,callback:function(t){e.$set(e.searchForm,"resName",t)},expression:"searchForm.resName"}})],1),t("Form-item",{attrs:{label:"",prop:"releaseName"}},[t("Input",{staticStyle:{width:"120px"},attrs:{type:"text",placeholder:"发布人姓名",clearable:""},model:{value:e.searchForm.releaseName,callback:function(t){e.$set(e.searchForm,"releaseName",t)},expression:"searchForm.releaseName"}})],1),t("Form-item",{staticClass:"br",staticStyle:{"margin-left":"10px"}},[t("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:""},on:{click:e.handleSearch}},[e._v("搜索")]),t("Button",{attrs:{type:"warning",size:"small",icon:"md-refresh",ghost:""},on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"info",size:"small",icon:"md-add",ghost:"",disabled:!e.$route.meta.permTypes.includes("add")},on:{click:e.add}},[e._v("添加")]),t("Button",{attrs:{type:"error",icon:"md-trash",size:"small",ghost:"",disabled:!e.$route.meta.permTypes.includes("delete")},on:{click:e.delAll}},[e._v("删除")]),t("Button",{attrs:{type:"success",icon:"md-paper-plane",size:"small",ghost:""},on:{click:e.excelData}},[e._v("导出")])],1),t("Form-item",{staticStyle:{position:"fixed",right:"50px",top:"130px"}},[t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"info",icon:"md-settings",size:"small",ghost:""},on:{click:function(t){e.showFilterPanelFlag=!e.showFilterPanelFlag}}},[e._v(" 列筛选")]),t("Modal",{attrs:{title:"使用教程"},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[t("p",[e._v("1.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("2.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("3.XXXXXXXXXXXXXXXXXXXXXXXX")])])],1)],1)],1)],1),t("Row",{staticClass:"operation",staticStyle:{position:"relative"}},[t("transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showFilterPanelFlag,expression:"showFilterPanelFlag"}],staticClass:"filter-panel"},[t("CheckboxGroup",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.mycolumns,(function(e){return t("div",{key:e.key},[t("Checkbox",{staticStyle:{margin:"2px 5px"},attrs:{label:e.title}})],1)})),0)],1)])],1),t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openTip,expression:"openTip"}]}),t("Row",[t("Table",{ref:"table",attrs:{loading:e.loading,height:e.tableHeight,border:"",stripe:"",size:"small",columns:e.columns,data:e.data,sortable:"custom","row-class-name":e.rowClassNmae},on:{"on-sort-change":e.changeSort,"on-selection-change":e.changeSelect,"on-row-click":e.rowClick}})],1),t("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[t("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[15,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)],1)},i=[],l=s(8126),r=s(2520),o=s(8693);const n={name:"single-window",components:{add:r["default"],edit:o["default"]},data(){return{tableHeight:0,selected:["选择","序号","资源名称","发布人姓名","紧急程度","需求量","交易价格","需求详情","订单状态","创建时间","创建者","修改时间","修改者","操作"],modal1:!1,openSearch:!0,openTip:!0,formData:{},currView:"index",loading:!0,searchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"desc"},selectList:[],selectCount:0,selectRow:0,columns:[{type:"selection",width:60,title:"选择",align:"center",fixed:"left"},{title:"序号",width:85,align:"center",fixed:"left",sortType:!0,render:(e,t)=>e("span",t.index+(this.searchForm.pageNumber-1)*this.searchForm.pageSize+1)},{title:"资源ID",key:"resId",minWidth:200,tooltip:!0,sortable:!1},{title:"资源名称",key:"resName",minWidth:200,tooltip:!0,sortable:!1},{title:"发布人ID",key:"releaseId",minWidth:200,tooltip:!0,sortable:!1},{title:"发布人姓名",key:"releaseName",minWidth:200,tooltip:!0,sortable:!1},{title:"紧急程度",key:"level",minWidth:200,tooltip:!0,sortable:!1},{title:"需求量",key:"number",minWidth:120,tooltip:!0,sortable:!1},{title:"交易价格",key:"price",minWidth:120,tooltip:!0,sortable:!1},{title:"需求详情",key:"content",minWidth:400,tooltip:!0,sortable:!1},{title:"订单状态",key:"status",minWidth:120,tooltip:!0,sortable:!1,render:(e,t)=>t.row.status?e("div",[e("span",{style:{color:"#3CB371"}},"已交易")]):e("div",[e("span",{style:{color:"#ff9900"}},"未交易")])},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc",minWidth:180,align:"center",tooltip:!0},{title:"创建者",key:"createBy",sortable:!0,sortType:"desc",minWidth:100,align:"center",tooltip:!0},{title:"修改时间",key:"updateTime",minWidth:180,align:"center",tooltip:!0},{title:"修改者",key:"updateBy",minWidth:100,align:"center",tooltip:!0},{title:"操作",key:"action",align:"center",width:300,fixed:"right",render:(e,t)=>{var s=this;return e("div",[e("Button",{props:{type:"success",size:"small",icon:"ios-settings",ghost:!0,disabled:t.row.status>0||!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("enable"))},style:{marginRight:"5px"},on:{click:()=>{this.sellPurchaseOrderFx(t.row)}}},"交易"),e("Button",{props:{type:"primary",size:"small",icon:"ios-create-outline",ghost:!0,disabled:!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("edit"))},style:{marginRight:"5px"},on:{click:()=>{this.edit(t.row)}}},"编辑"),e("Button",{props:{type:"error",size:"small",icon:"md-trash",ghost:!0,disabled:!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("delete"))},on:{click:()=>{this.remove(t.row)}}},"删除")])}}],data:[],pageNumber:1,pageSize:10,total:0,showFilterPanelFlag:!1}},methods:{init(){this.getDataList()},sellPurchaseOrderFx(e){var t=this;this.$Modal.confirm({title:"确认交易",content:"您确认要交易 ?",loading:!0,onOk:()=>{(0,l.FO)({id:e.id}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("交易成功"),t.getDataList())}))}})},submited(){this.currView="index",this.getDataList()},changePage(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize(e){this.searchForm.pageSize=e,this.getDataList()},rowClick(e,t){this.selectRow=e},rowClassNmae(e,t){return e.id==this.selectRow.id?"rowClassNmaeColor":""},excelData(){this.$refs.table.exportCsv({filename:"导出结果"})},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},changeSort(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"===e.order&&(this.searchForm.order=""),this.getDataList()},clearSelectAll(){this.$refs.table.selectAll(!1)},changeSelect(e){this.selectList=e,this.selectCount=e.length},getDataList(){this.loading=!0,(0,l.bm)(this.searchForm).then((e=>{this.loading=!1,e.success&&(this.data=e.result.records,this.total=e.result.total)}))},add(){this.currView="add"},edit(e){for(let a in e)null==e[a]&&(e[a]="");let t=JSON.stringify(e),s=JSON.parse(t);this.formData=s,this.currView="edit"},remove(e){this.$Modal.confirm({title:"确认删除",content:"您确认要删除 ?",loading:!0,onOk:()=>{(0,l.Q9)({ids:e.id}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.getDataList())}))}})},delAll(){this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:()=>{let e="";this.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),(0,l.Q9)({ids:e}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.clearSelectAll(),this.getDataList())}))}})}},mounted(){this.init(),this.tableHeight=Number(window.innerHeight-273),this.mycolumns=this.columns;let e=[];for(var t=0;t<this.selected.length;t++)for(var s=this.selected[t],a=0;a<this.columns.length;a++)this.columns[a].title==s&&e.push(this.columns[a]);this.columns=e},watch:{selected:function(e){let t=[];for(var s=0;s<this.mycolumns.length;s++){var a=this.mycolumns[s];(void 0==a.title||e.includes(a.title))&&t.push(a)}this.columns=t}}},c=n;var d=s(1001),m=(0,d.Z)(c,a,i,!1,null,null,null);const h=m.exports},8188:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=function(){var e=this,t=e._self._c;return t("div",[t("Select",{attrs:{size:e.size,loading:e.loading,placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,filterable:e.filterable,transfer:e.transfer,clearable:e.clearable,placement:e.placement,"transfer-class-name":e.transferClassName,prefix:e.prefix,"max-tag-count":e.maxTagCount,"max-tag-placeholder":e.maxTagPlaceholder},on:{"on-change":e.handleChange,"on-query-change":e.handleQueryChange,"on-clear":e.handleClear,"on-open-change":e.handleOpenChange,"on-select":e.handleSelect},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.dictData,(function(s,a){return t("Option",{key:a,attrs:{value:s.value}},[e._v(e._s(s.title))])})),1)],1)},i=[],l=s(7877);const r={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData(e){this.loading=!0,(0,l.i3)(e).then((e=>{this.loading=!1,e.success&&(this.dictData=e.result)}))},handleChange(e){this.$emit("input",e),this.$emit("on-change",e)},handleQueryChange(e){this.$emit("on-query-change",e)},handleClear(){this.$emit("on-clear","")},handleOpenChange(e){this.$emit("on-open-change",e)},handleSelect(e){this.$emit("on-select",e)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)},dict(e){this.getData(e)}},mounted(){this.getData(this.dict)}},o=r;var n=s(1001),c=(0,n.Z)(o,a,i,!1,null,null,null);const d=c.exports},8126:(e,t,s)=>{s.d(t,{FO:()=>c,Q9:()=>o,Yj:()=>l,bm:()=>i,lq:()=>r,rT:()=>n});var a=s(7184);const i=e=>(0,a.A_)("/purchaseOrder/getByPage",e),l=e=>(0,a.j0)("/purchaseOrder/insert",e),r=e=>(0,a.j0)("/purchaseOrder/update",e),o=e=>(0,a.j0)("/purchaseOrder/delByIds",e),n=e=>(0,a.A_)("/resource/getAll",e),c=e=>(0,a.j0)("/purchaseOrder/sell",e)}}]);