(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(98)},42:function(e,t,n){},44:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){},85:function(e,t,n){},87:function(e,t,n){},89:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(29),l=n.n(o),c=(n(42),n(6)),u=n(7),i=n(9),s=n(8),m=n(10),p=(n(44),n(102)),g=n(91),d=n(100),h=n(101),f=n(4),E=(n(51),function(){return r.a.createElement(a.Fragment,null,r.a.createElement("style",null,"@import url('https://fonts.googleapis.com/css?family=Mali');"),r.a.createElement("div",{className:"box"},r.a.createElement("h1",null,"It's about running and stuff.")))}),v=(n(53),n(55),function(){return r.a.createElement("div",{className:"Loader"},"Loading...")}),b=function(e){var t=null;return t=e.loading||e.post?e.loading?r.a.createElement(v,null):r.a.createElement(a.Fragment,null,r.a.createElement("h1",{className:"title"},e.post.title),r.a.createElement("p",null,e.post.body)):r.a.createElement(a.Fragment,null,r.a.createElement("h1",{className:"title"},"No Blog"),r.a.createElement("p",null,"Was found")),r.a.createElement("div",{className:"post"},t)},O=n(22),y=n.n(O),w=n(32),I=n(33),N=n.n(I).a.create({baseURL:"https://running-blog.herokuapp.com/"}),P=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:"LOGOUT"}},j=function(e){return{type:"REDIRECT",redirect:e}},S=function(e){return function(t){t({type:"START_RETRIEVING_PROFILE_DATA"}),N.get("/profile",{headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){var n;t({type:"GET_PROFILE_INFO",message:(n=e.data).message,name:n.name})}).catch(function(e){t({type:"PROFILE_INFO_FAILURE"}),console.log(e)})}},T=function(e){return{type:"UPDATE_CURRENT_PATH",path:e}},k=(n(78),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.props.updateCurrentPath(this.props.location.pathname)}},{key:"componentDidMount",value:function(){this.props.onFetchNewestPost()}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement("div",{className:"blog"},r.a.createElement(b,{post:this.props.posts,loading:this.props.loading}))))}}]),t}(a.Component)),C=Object(f.b)(function(e){return{posts:e.posts.posts,loading:e.posts.loading,loggedIn:e.login.loggedIn}},function(e){return{onFetchNewestPost:function(){return e(function(){var e=Object(w.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"FETCH_POSTS_START"}),e.next=4,N.get("posts/newest-post");case 4:n=e.sent,t({type:"FETCH_POSTS_SUCCESS",posts:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}())},updateCurrentPath:function(t){return e(T(t))}}})(k),F=n(15),_=(n(80),n(82),function(e){var t=null;switch(e.elementType){case"input":t=r.a.createElement("input",{className:"form-control",value:e.value,onChange:e.changed,placeholder:e.inputPlaceholder,name:e.inputName});break;case"textarea":t=r.a.createElement("textarea",{value:e.value,onChange:e.changed});break;case"select":t=r.a.createElement("select",{value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;case"password":t=r.a.createElement("input",{className:"form-control",type:"password",onChange:e.changed,placeholder:e.inputPlaceholder,name:e.inputName});break;default:t=r.a.createElement("input",Object.assign({},e.elementConfig,{value:e.value||"",onChange:e.changed}))}return r.a.createElement("div",null,r.a.createElement("label",{className:"Label"},e.label),t)}),D=n(34),L=function(e,t){return Object(D.a)({},e,t)},A=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={user:{email:"",password:""}},n.changedInput=function(e){e.preventDefault();var t=e.target.name,a=e.target.value,r=L(n.state.user,Object(F.a)({},t,a));n.setState({user:r})},n.processLogin=function(e){e.preventDefault(),n.props.onStartLogin(n.state.user)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.props.loggedIn?r.a.createElement(d.a,{to:"/profile"}):r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"formBox d-flex flex-column align-items-center"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group col-sm-12"},r.a.createElement(_,{inputName:"email",elementType:"input",inputPlaceholder:"Email Address",label:"Email Address",changed:function(t){return e.changedInput(t)}})),r.a.createElement("div",{className:"form-group col-sm-12"},r.a.createElement(_,{inputName:"password",elementType:"password",inputPlaceholder:"Password",label:"Password",changed:function(t){return e.changedInput(t)}})),r.a.createElement("div",{className:"form-group col-sm-12"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(t){return e.processLogin(t)}},"Log In")))))}}]),t}(a.Component),R=Object(f.b)(function(e){return{loading:e.posts.loading,loggedIn:e.login.loggedIn,redirect:e.login.redirectPath}},function(e){return{onStartLogin:function(t){return e(function(e){return function(t){var n={email:e.email,password:e.password};N.post("/auth",n).then(function(e){var n=new Date((new Date).getTime()+72e5);localStorage.setItem("token",e.data.myToken),localStorage.setItem("expirationDate",n),t({type:"LOGIN"})}).catch(function(e){console.log(e)})}}(t))},redirect:function(t){return e(j(t))},getProfileInfo:function(t){return e(S(t))}}})(A),B=(n(85),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={post:{title:"",body:""},token:null},n.changedInput=function(e){e.preventDefault();var t=e.target.name,a=e.target.value,r=L(n.state.post,Object(F.a)({},t,a));n.setState({post:r})},n.sendNewPost=function(e){e.preventDefault(),n.props.createNewPost(n.state.post,n.state.token)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=localStorage.getItem("token")||null;this.setState({token:e}),e?this.props.getProfileInfo(e):this.props.redirect(r.a.createElement(d.a,{to:"/"})),this.props.updateCurrentPath(this.props.location.pathname)}},{key:"render",value:function(){var e=this,t=r.a.createElement(v,null),n=r.a.createElement("div",{className:"d-flex flex-column align-items-center"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group col-sm-12"},r.a.createElement(_,{inputName:"title",elementType:"input",inputPlaceholder:"Title",label:"Title",changed:function(t){return e.changedInput(t)}})),r.a.createElement("div",{className:"form-group col-sm-12"},r.a.createElement(_,{inputName:"body",elementType:"input",inputPlaceholder:"Body",label:"Body",changed:function(t){return e.changedInput(t)}})),r.a.createElement("div",{className:"form-group col-sm-12"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(t){return e.sendNewPost(t)}},"Log In"))));return this.props.loading||(t=r.a.createElement("h1",null,this.props.message,this.props.name)),this.props.newPost&&(n=r.a.createElement(b,{post:this.props.newPost})),r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"profileContainer"},t,this.props.redirectPath,n))}}]),t}(a.Component)),x=Object(f.b)(function(e){return{message:e.profile.message,loggedIn:e.login.loggedIn,redirectPath:e.login.redirectPath,loading:e.profile.loading,currentPath:e.layout.path,name:e.profile.name,newPost:e.posts.newPost}},function(e){return{getProfileInfo:function(t){return e(S(t))},redirect:function(t){return e(j(t))},logout:function(){return e(P())},updateCurrentPath:function(t){return e(T(t))},createNewPost:function(t,n){return e(function(e,t){var n={title:e.title,body:e.body};return function(e){N.post("posts/new",n,{headers:{Authorization:"Bearer ".concat(t)}}).then(function(t){console.log(t),e({type:"NEW_POST_SUCCESS",post:t.data[0]})}).catch(function(e){console.log(e)})}}(t,n))}}})(B),H=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(d.a,{to:"/"})}}]),t}(a.Component),U=Object(f.b)(null,function(e){return{onLogout:function(){return e(P())}}})(H),W=(n(87),n(103)),G=(n(89),function(e){var t,n;return n="/"===e.current?r.a.createElement("h3",{className:"loginButton"},r.a.createElement(W.a,{to:"/profile"},"Profile")):"/profile"===e.current?r.a.createElement("h3",{className:"loginButton"},r.a.createElement(W.a,{to:"/home"},"Home")):r.a.createElement(a.Fragment,null,r.a.createElement("h3",{className:"loginButton"},r.a.createElement(W.a,{to:"/home"},"Home")),r.a.createElement("h3",{className:"loginButton"},r.a.createElement(W.a,{to:"/profile"},"Profile"))),t=e.loggedIn?r.a.createElement(a.Fragment,null,n,r.a.createElement("h3",{className:"loginButton"},r.a.createElement(W.a,{to:"/logout"},"Log Out"))):r.a.createElement("h3",{className:"loginButton"},r.a.createElement(W.a,{to:"/login"},"Log In")),r.a.createElement(a.Fragment,null,t)}),M=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"DrawerToggle",onClick:e.toggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("h3",{className:"headerH3"},r.a.createElement(W.a,{to:"/home"},"Running Blog Thing")),r.a.createElement("div",{className:"innerHeader desktopOnly"},r.a.createElement(G,{loggedIn:e.loggedIn,current:e.current}))))},z=(n(92),n(94),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),V=function(e){var t=["SideDrawer","Close"];return e.open&&(t=["SideDrawer","Open"]),r.a.createElement(a.Fragment,null,r.a.createElement(z,{show:e.open,clicked:e.toggle}),r.a.createElement("div",{className:t.join(" "),onClick:e.toggle},r.a.createElement("nav",null,r.a.createElement(G,{loggedIn:e.loggedIn,current:e.current}))))},J=(n(96),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.props.checkLogin()}},{key:"render",value:function(){var e=r.a.createElement("main",null,this.props.children);return this.state.showSideDrawer&&(e=r.a.createElement("main",{className:"noScrollMain"},this.props.children)),r.a.createElement(a.Fragment,null,r.a.createElement(M,{loggedIn:this.props.loggedIn,toggle:this.sideDrawerToggleHandler,current:this.props.currentPath}),r.a.createElement(V,{loggedIn:this.props.loggedIn,open:this.state.showSideDrawer,toggle:this.sideDrawerToggleHandler,current:this.props.currentPath}),e)}}]),t}(a.Component)),$=Object(f.b)(function(e){return{loggedIn:e.login.loggedIn,currentPath:e.layout.path}},function(e){return{checkLogin:function(){return e(function(e){var t=localStorage.getItem("token")||null,n=new Date(localStorage.getItem("expirationDate")||null);t||e(P()),(!n||n<=new Date)&&e(P())})}}})(J),q=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=localStorage.getItem("token");this.props.getAllPostsByAuthor(e)}},{key:"render",value:function(){return r.a.createElement("h1",null,"Hello")}}]),t}(a.Component),K=Object(f.b)(null,function(e){return{getAllPostsByAuthor:function(t){return e((n=t,function(e){N.get("/posts/all-by-author",{headers:{Authorization:"Bearer ".concat(n)}}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}));var n}}})(q),Q=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=r.a.createElement(p.a,null,r.a.createElement(g.a,{path:"/login",component:R}),r.a.createElement(g.a,{path:"/",exact:!0,component:C}),r.a.createElement(d.a,{to:"/"}));return this.props.loggedIn&&(e=r.a.createElement(p.a,null,r.a.createElement(g.a,{path:"/logout",component:U}),r.a.createElement(g.a,{path:"/login",component:R}),r.a.createElement(g.a,{path:"/profile",component:x}),r.a.createElement(g.a,{path:"/myposts",component:K}),r.a.createElement(g.a,{path:"/",exact:!0,component:C}),r.a.createElement(d.a,{to:"/"}))),r.a.createElement("div",null,r.a.createElement($,null,e))}}]),t}(a.Component),X=Object(h.a)(Object(f.b)(function(e){return{loggedIn:e.login.loggedIn}},null)(Q));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(99),Z=n(13),ee=n(36),te={posts:null,loading:!1,newPost:null},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS_START":return function(e,t){return L(e,{loading:!0})}(e);case"FETCH_POSTS_SUCCESS":return function(e,t){return L(e,{posts:t.posts,loading:!1})}(e,t);case"NEW_POST_SUCCESS":return function(e,t){return L(e,{newPost:t.post})}(e,t);default:return e}},ae={loggedIn:null!=localStorage.getItem("token"),redirectPath:null},re=function(e,t){return L(e,{loggedIn:null!=localStorage.getItem("token")})},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return re(e);case"REDIRECT":return function(e,t){return L(e,{redirectPath:t.redirect})}(e,t);case"LOGOUT":return re(e);default:return e}},le={message:null,loading:!1,name:null},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROFILE_INFO":return function(e,t){return L(e,{message:t.message,loading:!1,name:t.name})}(e,t);case"START_RETRIEVING_PROFILE_DATA":return function(e,t){return L(e,{loading:!0})}(e);case"PROFILE_INFO_FAILURE":return function(e){return L(e,{loading:!1})}(e);default:return e}},ue={path:null},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CURRENT_PATH":return function(e,t){return L(e,{path:t.path})}(e,t);default:return e}},se=Z.d,me=Object(Z.c)({posts:ne,login:oe,profile:ce,layout:ie}),pe=Object(Z.e)(me,se(Object(Z.a)(ee.a))),ge=r.a.createElement(f.a,{store:pe},r.a.createElement(Y.a,null,r.a.createElement(X,null)));l.a.render(ge,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,2,1]]]);
//# sourceMappingURL=main.10ef4072.chunk.js.map