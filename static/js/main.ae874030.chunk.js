(this.webpackJsonpreact_exercise=this.webpackJsonpreact_exercise||[]).push([[0],{42:function(e,t,a){},64:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},79:function(e,t,a){e.exports=a(94)},84:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"addTodo",(function(){return F})),a.d(n,"removeTodo",(function(){return _}));var r={};a.r(r),a.d(r,"login",(function(){return X})),a.d(r,"logout",(function(){return Z}));var o=a(0),c=a.n(o),i=a(6),l=a.n(i),s=(a(84),a(15)),m=a(24),u=a(19),d=a(20),h=a(23),E=a(64),p=a.n(E),f=(a(42),a(45)),v=a.n(f),b=a(65),g=a.n(b),O=a(127),w=a(123);function j(e){return o.createElement("span",null,e.text)}var y=function(e){var t=e.slot;return o.createElement(w.a,{variant:"contained",color:e.color,onClick:e.onClick},t," ",e.text)},x=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).render=function(){return c.a.createElement(O.a,{container:!0,spacing:3},c.a.createElement(O.a,{item:!0,md:12,xs:12,style:{textAlign:"center"}},c.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"})),c.a.createElement(O.a,{item:!0,md:6,xs:12,className:"center"},c.a.createElement(y,{variant:"contained",color:"primary",text:"hello",slot:c.a.createElement(v.a,null)})),c.a.createElement(O.a,{item:!0,md:6,xs:12,className:"center"},c.a.createElement(y,{variant:"contained",color:"secondary",text:"hi",slot:c.a.createElement(g.a,null)})),c.a.createElement(O.a,{item:!0,md:12,xs:12,className:"center"},a.state.time,c.a.createElement(j,{text:"ba la ba ba ba"})," Version 0.2"))},a.state={color:"red"};var n=new Date;return a.state.time="\u4eca\u5929\u662f"+n.getFullYear()+"/"+(n.getMonth()+1)+"/"+n.getDate(),a}return Object(h.a)(t,e),t}(c.a.Component),k=(a(89),a(11)),L=a(66),C=a.n(L),I=a(131),S=a(132),P=a(129),T=a(138),D=a(128),A=a(130),N=a(39),F=function(e){return{type:"ADD_ITEM",payload:e}},_=function(e){return{type:"DEL_ITEM",id:e}},M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).removeItem=function(e,t){a.props.removeTodo(t)},a.handleChange=function(e){a.setState({task:e.target.value})},a.addList=function(e){if(e.preventDefault(),a.state.task){var t={text:a.state.task,id:C()()};a.setState({task:"",isShowError:!1}),a.props.addTodo(t)}else a.setState({isShowError:!0})},a.render=function(){var e=a.props,t=e.todoList,n=e.removeTodo;return o.createElement(O.a,{container:!0},o.createElement(O.a,{item:!0,md:12}),o.createElement(O.a,{item:!0,md:5}),o.createElement(O.a,{item:!0,md:7},o.createElement("form",{noValidate:!0,autoComplete:"off"},o.createElement(D.a,null,o.createElement(T.a,{label:"\u4ee3\u8fa6\u4e8b\u9805",onChange:a.handleChange,value:a.state.task}),a.state.isShowError?o.createElement(A.a,{error:!0,margin:"dense",variant:"outlined"},"\u8acb\u8f38\u5165\u5f85\u8fa6\u4e8b\u9805"):null),o.createElement(y,{onClick:a.addList,color:"primary",text:"Add"}))),o.createElement(O.a,{item:!0,md:5}),o.createElement(O.a,{item:!0,md:7},o.createElement(P.a,{className:"taskList"},t.map((function(e,t){return o.createElement(I.a,{key:e.id},o.createElement(S.a,{id:e.id,primary:e.text}),o.createElement(w.a,{variant:"contained",color:"secondary",onClick:function(){return n(e.id)}},"Delete"))})))))},a.state={task:"",isShowError:!1},a.addList=a.addList.bind(Object(k.a)(a)),a.handleChange=a.handleChange.bind(Object(k.a)(a)),a.removeItem=a.removeItem.bind(Object(k.a)(a)),a}return Object(h.a)(t,e),t}(o.Component),G=Object(N.b)((function(e){return{todoList:e.todo}}),n)(M),W=a(31),V=a(134),Y=a(69),B=a.n(Y),J=a(133),R=a(36),U=a(70),H=a.n(U),$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).setPath=function(e,t){a.setState({path:t})},e.initPath?a.state={path:e.initPath}:a.state={path:"/"},a.setPath=a.setPath.bind(Object(k.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(J.a,{value:this.state.path,onChange:this.setPath,showLabels:!0},c.a.createElement(V.a,{label:"Home",icon:c.a.createElement(v.a,null),value:"/",component:R.b,to:"/"}),c.a.createElement(V.a,{label:"ToDoList",icon:c.a.createElement(B.a,null),value:"/todo",component:R.b,to:"/todo"}),c.a.createElement(V.a,{label:"MyForm",icon:c.a.createElement(H.a,null),value:"/myForm",component:R.b,to:"myForm"}))}}]),t}(c.a.Component),q=a(13),z=a(135),K=a(136),Q=a(47),X=function(e){return{type:"LOGIN",payload:e}},Z=function(){return{type:"LOGOUT"}},ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleInput=function(e){var t=e.target.name;a.setState(Object(q.a)({},t,e.target.value))},a.checkForm=function(e){return e.preventDefault(),""===a.state.account?(a.setState({showAccountError:!0}),!1):(a.setState({showAccountError:!1}),""===a.state.password?(a.setState({showPasswordError:!0}),!1):(a.setState({showPasswordError:!1}),a.setState({isLogin:!0}),void a.props.login(a.state.account)))},a.Reset=function(e){a.setState({account:"",password:"",showAccountError:!1,showPasswordError:!1})},a.render=function(){var e=null;return e=a.state.isLogin?o.createElement(z.a,{variant:"outlined"},o.createElement(K.a,null,o.createElement(Q.a,{variant:"h5",component:"h2"},"Welcome ",a.state.account))):o.createElement(O.a,{item:!0,md:7},o.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:a.checkForm},o.createElement(O.a,{item:!0,md:12},o.createElement(D.a,null,o.createElement(T.a,{variant:"outlined",name:"account",label:"Name",onChange:a.handleInput,value:a.state.account})),a.state.showAccountError?o.createElement(A.a,{error:!0,margin:"dense",variant:"outlined"},"Your account"):null),o.createElement(O.a,{item:!0,md:12},"\xa0"),o.createElement(O.a,{item:!0,md:12},o.createElement(D.a,null,o.createElement(T.a,{type:"password",name:"password",label:"Password",variant:"outlined",onChange:a.handleInput,value:a.state.password})),a.state.showPasswordError?o.createElement(A.a,{error:"true",margin:"dense",variant:"outlined"},"Your password"):null),o.createElement(O.a,{style:{marginLeft:"145px",marginTop:"20px"}},o.createElement(w.a,{color:"primary",type:"submit",variant:"contained"},"\u767b\u5165"),"\xa0",o.createElement(w.a,{color:"secondary",onClick:a.Reset,variant:"contained"},"\u91cd\u8a2d")))),o.createElement(O.a,{container:!0},o.createElement(O.a,{item:!0,md:12}),o.createElement(O.a,{item:!0,md:5}),e)},a.state={account:e.account?e.account:"",password:"",showAccountError:!1,showPasswordError:!1,isLogin:!!e.isLogin&&e.isLogin},a.checkForm=a.checkForm.bind(Object(k.a)(a)),a.handleInput=a.handleInput.bind(Object(k.a)(a)),a}return Object(h.a)(t,e),t}(o.Component),te=Object(N.b)((function(e){return{account:e.loginInfo.user?e.loginInfo.user.name:"",isLogin:!!e.loginInfo.user}}),r)(ee),ae=a(137),ne={height:"90vh"},re=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={pathName:a.props.location?a.props.location.pathname:"/"},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(ae.a,{component:"main",maxWidth:"lg"},c.a.createElement(ae.a,{style:ne},c.a.createElement(W.a,{path:"/",exact:!0,component:function(e){return c.a.createElement(x,e)}}),c.a.createElement(W.a,{path:"/todo",component:function(e){return c.a.createElement(G,e)}}),c.a.createElement(W.a,{path:"/myForm",component:function(e){return c.a.createElement(te,e)}})),c.a.createElement($,{initPath:this.state.pathName}))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=a(38),ce=a(22),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":var a=t.payload;return[{id:a.id,text:a.text}].concat(Object(ce.a)(e));case"DEL_ITEM":return e.filter((function(e){return e.id!==t.id}));default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":var a=t.payload;return{user:{name:a,role:"Admin"}};case"LOGOUT":return null;default:return e}},se=Object(oe.b)({loginInfo:le,todo:ie}),me=Object(oe.c)(se);l.a.render(c.a.createElement(N.a,{store:me},c.a.createElement(R.a,{basename:"/react_exercise",style:{height:"80vh"}},c.a.createElement(W.c,null,c.a.createElement(re,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[79,1,2]]]);
//# sourceMappingURL=main.ae874030.chunk.js.map