(this.webpackJsonpssc=this.webpackJsonpssc||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/spog.2ef8f0ae.png"},36:function(e,t,a){e.exports=a(61)},41:function(e,t,a){},47:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),i=a.n(s),o=a(2),c=a(3),l=a(5),u=a(4),d=(a(41),a(15)),p=a(6),h=a(9),m=a(16),f=a(7),g=a(8),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("input",{className:"input ".concat(this.props.modal?"input--large":"").concat(this.props.full?"input--full":""),type:this.props.type,placeholder:this.props.placeholder,onChange:this.props.onChange,name:this.props.name})}}]),a}(n.Component),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onChange=e.onChange.bind(Object(f.a)(e)),e}return Object(c.a)(a,[{key:"onChange",value:function(e){this.props.onChange(e.target.name,e.target.value)}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault()},className:"form ".concat(this.props.modal?"form--modal":"").concat(this.props.full?"form--full":"")},this.props.inputs.map((function(t){return r.a.createElement(b,{type:t.type,label:t.label,placeholder:t.placeholder,onChange:e.onChange,key:t.label,name:t.name,full:e.props.full,modal:e.props.modal})})),this.props.children)}}]),a}(n.Component),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{className:"button ".concat(this.props.large?"button--large":""),onClick:this.props.onClick},this.props.text)}}]),a}(n.Component);function E(e){return{type:"UPDATE_AUTH",auth:e}}var y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={username:"",password:""},e.onChange=e.onChange.bind(Object(f.a)(e)),e.onClick=e.onClick.bind(Object(f.a)(e)),e}return Object(c.a)(a,[{key:"onClick",value:function(e){e.preventDefault();var t=this.state,a=t.username,n=t.password;if(!a||!n)return alert("Please enter your username and password");if("password"===n){if("user"===a)return this.props.updateAuth({user:{username:"user",email:"user@test.co"}}),this.setState({redirectTo:"ssc/order"});if("admin"===a)return this.props.updateAuth({user:{username:"admin",email:"admin@test.co"},isAdmin:!0}),this.setState({redirectTo:"ssc/admin"})}alert("Incorrect details")}},{key:"onChange",value:function(e,t){this.setState(Object(m.a)({},e,t))}},{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(p.a,{to:this.state.redirectTo}):r.a.createElement("div",{className:"centered"},r.a.createElement("div",{className:"title"},"Login"),r.a.createElement("div",{className:"clues"},r.a.createElement("p",null,"Admin: admin&password"),r.a.createElement("p",null,"User: user&password")),r.a.createElement(v,{onChange:this.onChange,inputs:[{type:"text",name:"username",placeholder:"Enter your username",label:"Username"},{type:"password",name:"password",placeholder:"Enter your password",label:"Password"}]},r.a.createElement(O,{onClick:this.onClick,text:"Login"})))}}]),a}(n.Component),k=Object(h.b)((function(e){return{auth:e.auth,loading:e.loading,prevPage:e.prevPage}}),(function(e){return{updateAuth:Object(g.a)(E,e)}}))(y),j=a(33),C=a.n(j),A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"page_loading"},r.a.createElement("img",{src:C.a,className:"App-logo",alt:"logo"}))}}]),a}(n.Component),N=(a(47),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.add?r.a.createElement("div",{className:"card card--add",onClick:this.props.onClick},r.a.createElement("div",{className:"card_body card--add_body"},"Add a ",this.props.title),r.a.createElement("p",{className:"add"},"+")):r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card_title"},this.props.title),r.a.createElement("div",{className:"card_body"},this.props.children))}}]),a}(n.Component)),z=a(25);a(57);z.setAppElement("#root");var S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(z,{isOpen:this.props.open,onRequestClose:this.props.toggle,style:{content:{maxWidth:"580px",maxHeight:"300px"},overlay:{display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(0, 0, 0, 0.53)",zIndex:1e3}},contentLabel:"Example Modal"},r.a.createElement("div",{className:"inner"},this.props.children))}}]),a}(n.Component),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={loading:!0,size:""},e.handleOrder=e.handleOrder.bind(Object(f.a)(e)),e.handleCustomOrder=e.handleCustomOrder.bind(Object(f.a)(e)),e.onChange=e.onChange.bind(Object(f.a)(e)),e.toggleOrderSuccessModal=e.toggleOrderSuccessModal.bind(Object(f.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({loading:!1})}),1500)}},{key:"onChange",value:function(e,t){this.setState(Object(m.a)({},e,t))}},{key:"handleOrder",value:function(e){return this.props.auth.user?this.props.auth.isAdmin?alert("Login to a user account."):void this.setState({size:this.props.packs.find((function(t){return t.id===Number(e)})).size,isOrderSuccessModalOpen:!0}):this.setState({redirectTo:"ssc/login"})}},{key:"handleCustomOrder",value:function(){var e=this;if(!this.props.auth.user)return this.setState({redirectTo:"ssc/login"});if(this.props.auth.isAdmin)return alert("Login to a user account.");if(!this.state.size)return alert("Please enter a qty.");if(!Number(this.state.size))return alert("Please enter a numeric value.");if(this.props.packs.find((function(t){return t.size===Number(e.state.size)})))return this.setState({isOrderSuccessModalOpen:!0});for(var t=Number(this.state.size),a=[],n=0,r=function(){var r=e.getBestPacksForSize(t),s=!0;if(r.forEach((function(e){1!==e.qty&&(s=!1)})),s)return{v:e.setState({itemised:[{qty:1,pack:r[0].pack}],total:r[0].pack.size,isOrderSuccessModalOpen:!0})};var i=r.sort((function(e,t){return e.qty-t.qty})).sort((function(e,t){return e.sweets-t.sweets})),o=!1;i.forEach((function(e,a){if(!o){var n=t-e.sweets;if(Math.abs(0-n)<t)o=e.pack;else{if(i[a+1])return;o=e.pack}}}));var c=Object.keys(a).find((function(e){return a[e].pack.size===o.size}));c?a[c].qty++:a.push({qty:1,pack:o}),n+=o.size,t-=o.size};t>0;){var s=r();if("object"===typeof s)return s.v}this.setState({itemised:a,total:n,isOrderSuccessModalOpen:!0})}},{key:"getBestPacksForSize",value:function(e){var t=[];return this.props.packs.forEach((function(a){var n=Math.ceil(e/a.size);t.push({pack:a,qty:n,sweets:n*a.size})})),t}},{key:"toggleOrderSuccessModal",value:function(){this.setState({isOrderSuccessModalOpen:!this.state.isOrderSuccessModalOpen})}},{key:"render",value:function(){var e=this;return this.state.redirectTo?r.a.createElement(p.a,{to:this.state.redirectTo}):this.state.loading?r.a.createElement(A,null):r.a.createElement("div",{className:"page col"},r.a.createElement("p",{className:"title"},"Custom Order",this.props.auth.user?"":r.a.createElement("span",null,"- ",r.a.createElement(d.b,{to:"/ssc/login"},"Login")," to order")),r.a.createElement(N,{title:"Custom Order"},r.a.createElement(v,{onChange:this.onChange,full:!0,inputs:[{type:"text",name:"size",placeholder:"Enter the qty",label:"Qty"}]}),r.a.createElement(O,{text:"Order",onClick:this.handleCustomOrder})),r.a.createElement("p",{className:"title title--upper_space"},"Our Products"),r.a.createElement("div",{className:"cards"},this.props.packs.map((function(t){return r.a.createElement(N,{title:t.id,key:t.id},r.a.createElement("p",{className:"title"},"Qty: ",t.size),r.a.createElement(O,{text:"Order",onClick:function(){e.handleOrder(t.id)}}))}))),r.a.createElement(S,{open:this.state.isOrderSuccessModalOpen,toggle:this.toggleOrderSuccessModal},r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:"title"},"Order Successful"),r.a.createElement("p",{className:"title"},"Qty ordered: ",this.state.size),this.state.itemised&&r.a.createElement(n.Fragment,null,this.state.itemised.map((function(e,t){return r.a.createElement("p",{key:t,className:"item"},"x",e.qty," - ",e.pack.size)})),r.a.createElement("p",{className:"title"},"Qty shipped: ",this.state.total)),r.a.createElement(O,{text:"Buy more sweets",onClick:this.toggleOrderSuccessModal,large:!0}))))}}]),a}(n.Component),w=Object(h.b)((function(e){return{auth:e.auth,loading:e.loading,packs:e.packs}}))(P);function M(e){return{type:"ADD_PACK",size:e}}function _(e){return{type:"REMOVE_PACK",id:e}}var x,T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={loading:!0,isAddModalOpen:!1,size:""},e.handleDelete=e.handleDelete.bind(Object(f.a)(e)),e.handleAdd=e.handleAdd.bind(Object(f.a)(e)),e.toggleAddModal=e.toggleAddModal.bind(Object(f.a)(e)),e.onChange=e.onChange.bind(Object(f.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({loading:!1})}),1500)}},{key:"handleDelete",value:function(e){if(window.confirm("Are you sure you want to delete pack ".concat(e,"?")))return this.props.removePack(e)}},{key:"handleAdd",value:function(){var e=this;return this.state.size?this.props.packs.find((function(t){return t.size===Number(e.state.size)}))?alert("That qty. already exists"):(this.props.addPack(this.state.size),void this.toggleAddModal()):alert("Please enter a qty")}},{key:"onChange",value:function(e,t){this.setState(Object(m.a)({},e,t))}},{key:"toggleAddModal",value:function(){this.setState({isAddModalOpen:!this.state.isAddModalOpen})}},{key:"render",value:function(){var e=this;return this.state.loading?r.a.createElement(A,null):r.a.createElement("div",{className:"page"},r.a.createElement("p",{className:"title"},"Packs"),r.a.createElement("div",{className:"cards"},r.a.createElement(N,{add:!0,title:"Pack",onClick:this.toggleAddModal}),this.props.packs.map((function(t){return r.a.createElement(N,{title:t.id,key:t.id},r.a.createElement("p",{className:"title"},"Qty: ",t.size),r.a.createElement(O,{text:"Delete",onClick:function(){e.handleDelete(t.id)}}))}))),r.a.createElement(S,{open:this.state.isAddModalOpen,toggle:this.toggleAddModal},r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:"title"},"Add a pack"),r.a.createElement(v,{onChange:this.onChange,modal:!0,inputs:[{type:"text",name:"size",placeholder:"Enter the qty",label:"Qty"}]},r.a.createElement(O,{onClick:this.handleAdd,text:"Add",large:!0})))))}}]),a}(n.Component),D=Object(h.b)((function(e){return{auth:e.auth,loading:e.loading,packs:e.packs}}),(function(e){return{removePack:Object(g.a)(_,e),addPack:Object(g.a)(M,e)}}))(T),L=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={loading:!0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.updateAuth({}),this.setState({loading:!1})}},{key:"render",value:function(){return this.state.loading?r.a.createElement(A,null):r.a.createElement(p.a,{to:"/"})}}]),a}(n.Component),q=Object(h.b)((function(e){return{auth:e.auth,loading:e.loading}}),(function(e){return{updateAuth:Object(g.a)(E,e)}}))(L);function U(e){return{type:"UPDATE_PREV_PAGE",path:e}}var Q=Object(p.g)(x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={},e.handleLogin=e.handleLogin.bind(Object(f.a)(e)),e.handleLogout=e.handleLogout.bind(Object(f.a)(e)),e.handleAdmin=e.handleAdmin.bind(Object(f.a)(e)),e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&(this.setState({redirectTo:!1}),"/admin"===this.props.location.pathname?this.props.updatePrevPage("/admin"):this.props.updatePrevPage(!1))}},{key:"handleLogout",value:function(){this.setState({redirectTo:"ssc/logout"})}},{key:"handleLogin",value:function(){this.setState({redirectTo:"ssc/login"})}},{key:"handleAdmin",value:function(){this.setState({redirectTo:"ssc/admin"})}},{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(p.a,{to:this.state.redirectTo}):r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header_options"},(!this.props.auth.user||this.props.auth.user&&this.props.auth.isAdmin&&"/admin"!==this.props.location.pathname)&&"/login"!==this.props.location.pathname?r.a.createElement("p",{className:"header_options_option",onClick:this.handleAdmin},"Admin"):r.a.createElement("p",{className:"header_options_option"}),this.props.auth.user?r.a.createElement("p",{className:"header_options_option",onClick:this.handleLogout},"Logout"):"/login"!==this.props.location.pathname?r.a.createElement("p",{className:"header_options_option",onClick:this.handleLogin},"Login"):null),r.a.createElement(d.b,{to:"/ssc"},r.a.createElement("p",{className:"header_text"},"Simons Sweet Co.")))}}]),a}(n.Component))||x,B=Object(h.b)((function(e){return{auth:e.auth,loading:e.loading}}),(function(e){return{updatePrevPage:Object(g.a)(U,e)}}))(Q),I=(a(58),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(B,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/ssc/logout",exact:!0,component:q}),r.a.createElement(p.b,{path:"/ssc/login",exact:!0,render:function(){return e.props.auth.user?r.a.createElement(p.a,{to:"/ssc"}):r.a.createElement(k,null)}}),r.a.createElement(p.b,{exact:!0,path:"/ssc/admin",render:function(){return e.props.auth.isAdmin?r.a.createElement(D,null):r.a.createElement(p.a,{to:"/ssc/login"})}}),r.a.createElement(p.b,{exact:!0,component:w}))))}}]),a}(n.Component)),R=Object(h.b)((function(e){return{auth:e.auth,loading:e.loading}}))(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G={isAdmin:!1,user:!1};var K={page:!0};var V=[{id:1,size:250},{id:2,size:500},{id:3,size:1e3},{id:4,size:2e3},{id:5,size:5e3}];var F=Object(g.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_AUTH":return t.auth;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PAGE_LOADING":var a=Object.assign({},e);return a.page=t.loading,a;default:return e}},prevPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PREV_PAGE":return t.path;default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,a=[];switch(t.type){case"ADD_PACK":var n=1;return e.forEach((function(e){a.push({id:n,size:e.size}),n++})),a.push({id:n,size:Number(t.size)}),a;case"REMOVE_PACK":return e.forEach((function(e,n){e.id!==Number(t.id)&&a.push({id:n+1,size:e.size})})),a;default:return e}}}),H=a(26),W=a(34),J={key:"root",storage:a.n(W).a,whitelist:["auth","packs"]},$=Object(H.a)(J,F),X=Object(g.c)($),Y=Object(H.b)(X),Z=a(35);i.a.render(r.a.createElement(h.a,{store:X},r.a.createElement(Z.a,{loading:null,persistor:Y},r.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.f62063e8.chunk.js.map