(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5fab"],{"YP4+":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=[{label:"constant.enabled",value:"1"},{label:"constant.disabled",value:"0"}]},ZySA:function(e,t,n){"use strict";var a=n("6ZY3"),i=n.n(a),r=(n("jUE0"),{bind:function(e,t){e.addEventListener("click",function(n){var a=i()({},t.value),r=i()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),l=r.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var o=l.getBoundingClientRect(),s=l.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":((s=document.createElement("span")).className="waves-ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",l.appendChild(s)),r.type){case"center":s.style.top=o.height/2-s.offsetHeight/2+"px",s.style.left=o.width/2-s.offsetWidth/2+"px";break;default:s.style.top=n.pageY-o.top-s.offsetHeight/2-document.body.scrollTop+"px",s.style.left=n.pageX-o.left-s.offsetWidth/2-document.body.scrollLeft+"px"}return s.style.backgroundColor=r.color,s.className="waves-ripple z-active",!1}},!1)}}),l=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(l)),r.install=l;t.a=r},bDWH:function(e,t,n){"use strict";n.r(t);var a=n("6ZY3"),i=n.n(a),r=n("ny1n"),l=n("ZySA"),o=n("YP4+"),s={name:"roles",directives:{waves:l.a},data:function(){return{list:null,total:null,listLoading:!0,listQuery:{pageNo:1,pageSize:10},menuTree:null,temp:{id:"",name:"",remarks:""},dialogFormVisible:!1,dialogStatus:"",dialogFormTreeVisible:!1,roleId:"",status:o.a,rules:{name:[{required:!0,message:this.$t("role.validation.requiredName"),trigger:"blur"}],remarks:[{required:!0,message:this.$t("role.validation.requiredRemarks"),trigger:"blur"}]}}},created:function(){document.title=this.$t("route."+this.$route.meta.title),this.getRoleList()},methods:{getRoleList:function(){var e=this;this.listLoading=!0,Object(r.m)(this.listQuery).then(function(t){e.list=t.data.roles,e.total=t.data.total,setTimeout(function(){e.listLoading=!1},1500)}).catch(function(t){e.listLoading=!1,console.log(t)})},handleFilter:function(){this.listQuery.pageNo=1,this.getRoleList()},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getRoleList()},handleCurrentChange:function(e){this.listQuery.pageNo=e,this.getRoleList()},resetTemp:function(){this.temp={id:"",remarks:"",name:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t?Object(r.b)(e.temp).then(function(t){e.dialogFormVisible=!1,e.getRoleList()}).catch(function(e){console.log("d")}):console.log("1")})},handleUpdate:function(e){var t=this;this.temp=i()({},e),this.temp.isEditPassword=!1,this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},getTree:function(){var e=this,t=this;Object(r.k)({isShow:1}).then(function(n){e.menuTree=n.data,t.recursion(e.menuTree),Object(r.l)(t.roleId).then(function(e){t.$refs.tree.setCheckedKeys(e.data)}).catch(function(e){})}).catch(function(e){})},recursion:function(e){var t=this;e.forEach(function(e){e.label=e.name,e.children&&t.recursion(e.children)})},updateData:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var n=i()({},e.temp);Object(r.q)(n).then(function(t){e.dialogFormVisible=!1,e.getRoleList()}).catch(function(e){console.log(e)})}})},handleDelete:function(e){var t=this,n=this;this.$confirm(this.$t("warning.text"),this.$t("warning.tips"),{confirmButtonText:this.$t("table.confirm"),cancelButtonText:this.$t("table.cancel"),type:"warning"}).then(function(){Object(r.h)(e.id).then(function(e){t.$message({type:"success",message:n.$t("warning.success")}),t.getRoleList()}).catch(function(e){console.log(e)})}).catch(function(){t.$message({type:"info",message:n.$t("warning.fault")})})},expandedIsShow:function(e){e.expanded=!e.expanded},handleAuthorization:function(e){this.dialogFormTreeVisible=!0,this.roleId=e.id,this.getTree(),console.log(e)},updatePermession:function(){var e=this,t=this,n={checkIds:this.$refs.tree.getCheckedKeys(),noCheckIds:this.$refs.tree.getHalfCheckedKeys()};Object(r.e)(this.roleId,n).then(function(n){e.dialogFormTreeVisible=!1,t.$message({type:"success",message:t.$t("warning.success")})}).catch(function(e){t.$message({type:"error",message:e})})}}},c=n("ZrdR"),u=Object(c.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("role.table.name")},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),e._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},attrs:{placeholder:e.$t("role.table.enable"),clearable:""},on:{change:e.handleFilter},model:{value:e.listQuery.enable,callback:function(t){e.$set(e.listQuery,"enable",t)},expression:"listQuery.enable"}},e._l(e.status,function(t){return n("el-option",{key:t.key,attrs:{label:e.$t(t.label),value:t.value}})})),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n      "+e._s(e.$t("table.search"))+"\n    ")]),e._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(e._s(e.$t("table.add"))+"\n    ")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{type:"index",label:e.$t("table.id"),width:"50"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"220px",label:e.$t("role.table.name")},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:e.$t("role.table.remarks")},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.remarks))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"160px",align:"center",label:e.$t("role.table.createUserName")},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.createUserName))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"160px",align:"center",label:e.$t("role.table.createDate")},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.createDate))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"100px",align:"center",label:e.$t("role.table.enable")},scopedSlots:e._u([{key:"default",fn:function(t){return["1"===t.row.enabled?n("span",[e._v(e._s(e.$t("role.enabled")))]):e._e(),e._v(" "),"2"===t.row.enabled?n("span",[e._v(e._s(e.$t("role.disabled")))]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:e.$t("table.actions"),width:"240","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){e.handleUpdate(t.row)}}},[e._v(e._s(e.$t("table.edit")))]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){e.handleDelete(t.row,"deleted")}}},[e._v(e._s(e.$t("table.delete"))+"\n        ")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(n){e.handleAuthorization(t.row)}}},[e._v("授权\n        ")])]}}])})],1),e._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"","current-page":e.listQuery.pageNo,"page-sizes":[10,20,30,50],"page-size":e.listQuery.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),n("el-dialog",{attrs:{title:"create"===e.dialogStatus?e.$t("user.create"):e.$t("user.update"),visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"right","label-width":"120px"}},[n("el-form-item",{attrs:{label:e.$t("role.table.name"),prop:"name"}},[n("el-input",{attrs:{placeholder:e.$t("role.placeholder.name")},model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("role.table.remarks"),prop:"remarks"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:e.$t("role.placeholder.remarks")},model:{value:e.temp.remarks,callback:function(t){e.$set(e.temp,"remarks",t)},expression:"temp.remarks"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("user.cancel")))]),e._v(" "),"create"==e.dialogStatus?n("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("user.confirm")))]):n("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("user.confirm")))])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:e.$t("user.create"),visible:e.dialogFormTreeVisible},on:{"update:visible":function(t){e.dialogFormTreeVisible=t}}},[n("el-tree",{ref:"tree",attrs:{data:e.menuTree,"node-key":"id","show-checkbox":"","default-expand-all":"","expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.node,i=t.data;return n("span",{staticClass:"custom-tree-node"},[n("span",{on:{click:function(t){e.menuInfo(i)},dblclick:function(t){e.expandedIsShow(a,i)}}},[n("i",{class:a.icon}),n("span",{staticStyle:{"padding-left":"5px"}},[e._v(e._s(a.label))])])])}}])}),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormTreeVisible=!1}}},[e._v(e._s(e.$t("user.cancel")))]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.updatePermession}},[e._v(e._s(e.$t("user.confirm")))])],1)],1)],1)},[],!1,null,null,null);u.options.__file="index.vue";t.default=u.exports},jUE0:function(e,t,n){},ny1n:function(e,t,n){"use strict";n.d(t,"o",function(){return i}),n.d(t,"d",function(){return r}),n.d(t,"r",function(){return l}),n.d(t,"f",function(){return o}),n.d(t,"i",function(){return s}),n.d(t,"m",function(){return c}),n.d(t,"b",function(){return u}),n.d(t,"q",function(){return d}),n.d(t,"h",function(){return f}),n.d(t,"k",function(){return h}),n.d(t,"a",function(){return m}),n.d(t,"p",function(){return p}),n.d(t,"g",function(){return b}),n.d(t,"j",function(){return g}),n.d(t,"l",function(){return v}),n.d(t,"e",function(){return y}),n.d(t,"n",function(){return _}),n.d(t,"c",function(){return k});var a=n("t3Un");function i(e){return Object(a.a)({url:"/users/getUsers",method:"post",data:e})}function r(e){return Object(a.a)({url:"/users/add",method:"post",data:e})}function l(e){return Object(a.a)({url:"/users",method:"put",data:e})}function o(e){return Object(a.a)({url:"/users/checkUser",method:"post",data:e})}function s(e){return Object(a.a)({url:"/users/"+e,method:"delete"})}function c(e){return Object(a.a)({url:"/roles/getRoles",method:"post",data:e})}function u(e){return Object(a.a)({url:"/roles/",method:"post",data:e})}function d(e){return Object(a.a)({url:"/roles/",method:"put",data:e})}function f(e){return Object(a.a)({url:"/roles/"+e,method:"delete"})}function h(e){return Object(a.a)({url:"/menu/tree",method:"post",data:e})}function m(e){return Object(a.a)({url:"/menu",method:"post",data:e})}function p(e){return Object(a.a)({url:"/menu",method:"put",data:e})}function b(e){return Object(a.a)({url:"/menu/"+e,method:"delete"})}function g(e){return Object(a.a)({url:"/menu/isChild/"+e,method:"get"})}function v(e){return Object(a.a)({url:"/roles/menu/"+e,method:"get"})}function y(e,t){return Object(a.a)({url:"/roles/authorization/"+e,method:"post",data:t})}function _(e){return Object(a.a)({url:"/schedule/getSchedules",method:"post",data:e})}function k(e){return Object(a.a)({url:"/schedule/",method:"post",data:e})}}}]);