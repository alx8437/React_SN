(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1:function(e,t,a){e.exports={nav:"Navbar_nav__nb4z-",icon:"Navbar_icon__2869X",iconWrapper:"Navbar_iconWrapper__1SVNK",active:"Navbar_active__2ikh5",nonActive:"Navbar_nonActive__1r-xZ"}},13:function(e,t,a){e.exports={postWrapper:"MyPosts_postWrapper__1mDLF",postBlock:"MyPosts_postBlock__1KAM7",posts:"MyPosts_posts__Z1m1m",textarea:"MyPosts_textarea__1MU1q",button:"MyPosts_button__2-_Oj"}},23:function(e,t,a){e.exports={wrapper:"Users_wrapper__1bsaf",userPhoto:"Users_userPhoto__1geMq",pageActive:"Users_pageActive__2sXqp",pageChange:"Users_pageChange__1EfBl"}},26:function(e,t,a){e.exports=a.p+"static/media/userNoPhoto.3645b2b6.png"},27:function(e,t,a){e.exports={dialogWrapper:"Dialogs_dialogWrapper__41OJi",sendMessage:"Dialogs_sendMessage__2UYO0"}},28:function(e,t,a){e.exports={header:"Header_header__2uvE4",headerWrapper:"Header_headerWrapper__3S8sQ",login:"Header_login__3Z-ll"}},33:function(e,t,a){e.exports={content:"ProfileInfo_content__vDwoh",otherResurces:"ProfileInfo_otherResurces__1vIlP"}},34:function(e,t,a){e.exports={item:"Post_item__3DWo-",messageWrapper:"Post_messageWrapper__1DKM7"}},45:function(e,t,a){e.exports={wrapper:"News_wrapper__qjMLk"}},46:function(e,t,a){e.exports={wrapper:"Music_wrapper__XntBp"}},47:function(e,t,a){e.exports={wrapper:"Settings_wrapper__3dAOM"}},48:function(e,t,a){e.exports={dialogsItem:"DialogItem_dialogsItem__2_5ek"}},49:function(e,t,a){e.exports={messages:"Message_messages__3NWxh"}},51:function(e,t,a){e.exports=a.p+"static/media/preloader.aaab3f0f.gif"},52:function(e,t,a){e.exports={profileWrapper:"Profile_profileWrapper__xnTY5"}},53:function(e,t,a){e.exports=a.p+"static/media/logo.b4b06117.png"},54:function(e,t,a){e.exports={wrapper:"Login_wrapper__2wCFN"}},56:function(e,t,a){e.exports=a(84)},58:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(5),o=(a(58),a(1)),c=a.n(o),l=a(12),i=function(){return r.a.createElement("nav",{className:c.a.nav},r.a.createElement("div",{className:c.a.item},r.a.createElement("div",{className:c.a.iconWrapper},r.a.createElement("div",{className:c.a.icon},r.a.createElement(l.c,{color:"#8DC63F"})," "),r.a.createElement(s.b,{to:"/profile",className:c.a.nonActive,activeClassName:c.a.active},"Profile"))),r.a.createElement("div",{className:c.a.item},r.a.createElement("div",{className:c.a.iconWrapper},r.a.createElement("div",{className:c.a.icon},r.a.createElement(l.b,{color:"#662D91"})),r.a.createElement(s.b,{to:"/dialogs",className:c.a.nonActive,activeClassName:c.a.active},"Messages"))),r.a.createElement("div",{className:c.a.item},r.a.createElement("div",{className:c.a.iconWrapper},r.a.createElement("div",{className:c.a.icon},r.a.createElement(l.e,{color:"#EE5187"})),r.a.createElement(s.b,{to:"/news",className:c.a.nonActive,activeClassName:c.a.active},"News"))),r.a.createElement("div",{className:c.a.item},r.a.createElement("div",{className:c.a.iconWrapper},r.a.createElement("div",{className:c.a.icon},r.a.createElement(l.d,{color:"#F7941E"})),r.a.createElement(s.b,{to:"/music",className:c.a.nonActive,activeClassName:c.a.active},"Music"))),r.a.createElement("div",{className:c.a.item},r.a.createElement("div",{className:c.a.iconWrapper},r.a.createElement("div",{className:c.a.icon},r.a.createElement(l.a,{color:"#1C75BC"})),r.a.createElement(s.b,{to:"/settings",className:c.a.nonActive,activeClassName:c.a.active},"Settings"))),r.a.createElement("div",{className:c.a.item},r.a.createElement("div",{className:c.a.iconWrapper},r.a.createElement("div",{className:c.a.icon},r.a.createElement(l.g,{color:"#9E1F63"})),r.a.createElement(s.b,{to:"/users",className:c.a.nonActive,activeClassName:c.a.active},"Users"))),r.a.createElement("div",{className:c.a.item},r.a.createElement("div",{className:c.a.iconWrapper},r.a.createElement("div",{className:c.a.icon},r.a.createElement(l.f,{color:"#a8dadc"})),r.a.createElement(s.b,{to:"/login",className:c.a.nonActive,activeClassName:c.a.active},"Login"))))},u=a(4),m=a(45),p=a.n(m),d=function(e){return r.a.createElement("div",{className:p.a.wrapper},"News")},g=a(46),f=a.n(g),E=function(e){return r.a.createElement("div",{className:f.a.wrapper},"Music")},h=a(47),v=a.n(h),_=function(e){return r.a.createElement("div",{className:v.a.wrapper},"Settings")},b=a(17),N=a(2),w={messages:[{id:1,message:"Hello!"},{id:2,message:"How are you?"},{id:3,message:"I am fine, thanks!"},{id:4,message:"Where are you from?"},{id:5,message:"I am from Moscow in Russian"},{id:6,message:"Nice to meet you!"}],newMessageText:"",dialog:[{id:1,name:"July"},{id:2,name:"Robert"},{id:3,name:"John"},{id:4,name:"Thomas"},{id:5,name:"Nadin"},{id:6,name:"Raichel"},{id:7,name:"Rob"}]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE-TEXT":return Object(N.a)(Object(N.a)({},e),{},{newMessageText:t.newTextMessage});case"SEND_MESSAGE":return Object(N.a)(Object(N.a)({},e),{},{messages:[].concat(Object(b.a)(e.messages),[{id:6,message:e.newMessageText}]),newMessageText:""});default:return e}},P=a(27),T=a.n(P),C=a(48),j=a.n(C),S=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",{className:j.a.dialogsItem},r.a.createElement(s.b,{to:t},e.name))},U=a(49),k=a.n(U),A=function(e){return r.a.createElement("div",{className:k.a.messages},e.message)},y=function(e){var t=e.dialogsPage.dialog.map((function(e){return r.a.createElement(S,{name:e.name,id:e.id})})),a=e.dialogsPage.messages.map((function(e){return r.a.createElement(A,{message:e.message})}));return e.isAuth?r.a.createElement("div",{className:T.a.dialogs},r.a.createElement("div",{className:T.a.dialogWrapper},r.a.createElement("div",null,t),r.a.createElement("div",null,a)),r.a.createElement("div",{className:T.a.sendMessage},r.a.createElement("textarea",{onChange:function(t){var a=t.currentTarget.value;e.onMessageChange(a)},value:e.dialogsPage.newMessageText,placeholder:"enter your message"}),r.a.createElement("button",{onClick:function(){e.addNewMessage()}},"send"))):r.a.createElement(u.a,{to:"/login"})},I=a(10),x=Object(I.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.authUser.isAuth}}),(function(e){return{addNewMessage:function(){e({type:"SEND_MESSAGE"})},onMessageChange:function(t){e(function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",newTextMessage:e}}(t))}}}))(y),M=a(15),W=a(16),F=a(19),R=a(18),L=a(21),D=L.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"e655fc0d-99c3-4c81-8dea-0837243fe8bf"}}),G=function(e,t){return D.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},H=function(e){return D.delete("follow/".concat(e)).then((function(e){return e.data}))},z=function(e){return D.post("follow/".concat(e),{}).then((function(e){return e.data}))},B=function(e){return D.get("profile/".concat(e))},X=function(){return D.get("auth/me").then((function(e){return e.data}))},J={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},K=function(e){return{type:"SET_IS_FETCHING",isFetching:e}},q=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(N.a)(Object(N.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(N.a)(Object(N.a)({},e),{},{followed:!1}):e}))});case"UNFOLLOW":return Object(N.a)(Object(N.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(N.a)(Object(N.a)({},e),{},{followed:!0}):e}))});case"SET_USERS":return Object(N.a)(Object(N.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(N.a)(Object(N.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USER_COUNT":return Object(N.a)(Object(N.a)({},e),{},{totalUsersCount:t.count});case"SET_IS_FETCHING":return Object(N.a)(Object(N.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(N.a)(Object(N.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(b.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},Z=a(23),Q=a.n(Z),V=a(26),$=a.n(V),ee=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],n=1;n<=t;n+=1)a.push(n);return r.a.createElement("div",{className:Q.a.wrapper},r.a.createElement("div",{className:Q.a.pageChange},a.map((function(t){return r.a.createElement("span",{onClick:function(){e.onPageChanged(t)},className:t===e.currentPage?Q.a.pageActive:""},t)}))),e.users.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(s.b,{to:"/profile/"+t.id},r.a.createElement("img",{className:Q.a.userPhoto,src:null===t.photos.small?$.a:t.photos.small}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.toggleIsFollow.some((function(e){return e===t.id})),onClick:function(){e.unFollowedThunkCreator(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.toggleIsFollow.some((function(e){return e===t.id})),onClick:function(){e.followedThunkCreator(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"u.location.country"),r.a.createElement("div",null,"u.location.city"))))})))},te=a(51),ae=a.n(te),ne=function(e){return r.a.createElement("img",{src:ae.a,alt:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})},re=function(e){Object(F.a)(a,e);var t=Object(R.a)(a);function a(){var e;Object(M.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsersThunkCreator(t,e.props.pageSize)},e}return Object(W.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,!0===this.props.isFetching?r.a.createElement(ne,null):null,r.a.createElement(ee,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,users:this.props.users,followUser:this.props.followUser,toggleIsFollow:this.props.toggleIsFollow,unFollowedThunkCreator:this.props.unFollowedThunkCreator,followedThunkCreator:this.props.followedThunkCreator}))}}]),a}(r.a.Component),se=Object(I.b)((function(e){return{users:e.usersReducer.users,pageSize:e.usersReducer.pageSize,totalUsersCount:e.usersReducer.totalUsersCount,currentPage:e.usersReducer.currentPage,isFetching:e.usersReducer.isFetching,toggleIsFollow:e.usersReducer.followingInProgress}}),{getUsersThunkCreator:function(e,t){return function(a,n){a(K(!0)),G(e,t).then((function(e){a(K(!1)),a({type:"SET_USERS",users:e.items}),a({type:"SET_TOTAL_USER_COUNT",count:e.totalCount})}))}},unFollowedThunkCreator:function(e){return function(t,a){t(q(!0,e)),H(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(q(!1,e))}))}},followedThunkCreator:function(e){return function(t,a){t(q(!0,e)),z(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(q(!1,e))}))}}})(re),oe=a(33),ce=a.n(oe),le=function(e){return e.profile?r.a.createElement("div",null,r.a.createElement("div",{className:ce.a.content},"Profile",r.a.createElement("img",{src:e.profile.photos.large}),r.a.createElement("div",{className:ce.a.otherResurces},r.a.createElement("div",null,"vk - ",e.profile.contacts.vk),r.a.createElement("div",null,"Full name - ",e.profile.fullName),r.a.createElement("div",null,"about - ",e.profile.aboutMe)))):r.a.createElement(ne,null)},ie={posts:[{id:1,post:"How are you?",likeCount:15},{id:2,post:"I'm fine, thanks!",likeCount:20}],newPostText:"",userProfile:null},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:3,post:e.newPostText,likeCount:0};return Object(N.a)(Object(N.a)({},e),{},{posts:[].concat(Object(b.a)(e.posts),[a]),newPostText:""});case"UPDATE-NEW-POST-TEXT":return Object(N.a)(Object(N.a)({},e),{},{newPostText:t.newPostText});case"SET_USER_PROFILE":return Object(N.a)(Object(N.a)({},e),{},{userProfile:t.user});default:return e}},me=a(13),pe=a.n(me),de=a(34),ge=a.n(de),fe=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:ge.a.item},r.a.createElement("img",{src:$.a,alt:"avatar"}),r.a.createElement("div",{className:ge.a.messageWrapper},e.message)),r.a.createElement("div",null,r.a.createElement("span",null,"like ",e.likeCount)))},Ee=function(e){var t=e.profilePage.posts.map((function(e){return r.a.createElement(fe,{message:e.post,likeCount:e.likeCount})}));return r.a.createElement("div",{className:pe.a.postWrapper},r.a.createElement("div",{className:pe.a.postBlock},r.a.createElement("div",{className:pe.a.textarea},r.a.createElement("textarea",{className:pe.a.textarea,placeholder:"Write what your wish",onChange:function(t){var a=t.currentTarget.value;e.onPostChange(a)},value:e.profilePage.newPostText})),r.a.createElement("div",null,r.a.createElement("button",{className:pe.a.button,onClick:function(){e.onAddPost()}},"add post"))),r.a.createElement("div",{className:pe.a.posts},t))},he=Object(I.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{onPostChange:function(t){e(function(e){return{type:"UPDATE-NEW-POST-TEXT",newPostText:e}}(t))},onAddPost:function(){e({type:"ADD-POST"})}}}))(Ee),ve=a(52),_e=a.n(ve),be=function(e){return r.a.createElement("div",{className:_e.a.profileWrapper},r.a.createElement(le,{profile:e.profile}),r.a.createElement(he,null))},Ne=function(e){Object(F.a)(a,e);var t=Object(R.a)(a);function a(){return Object(M.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=8425),this.props.setUserProfileThunk(e)}},{key:"render",value:function(){return this.props.isAuth?r.a.createElement(be,Object.assign({},this.props,{profile:this.props.profile})):r.a.createElement(u.a,{to:"/login"})}}]),a}(r.a.Component),we=Object(u.f)(Ne),Oe=Object(I.b)((function(e){return{profile:e.profilePage.userProfile,isAuth:e.authUser.isAuth}}),{setUserProfileThunk:function(e){return function(t,a){B(e).then((function(e){t({type:"SET_USER_PROFILE",user:e.data})}))}}})(we),Pe=a(28),Te=a.n(Pe),Ce=a(53),je=a.n(Ce),Se=function(e){return r.a.createElement("header",{className:Te.a.header},r.a.createElement("div",{className:Te.a.headerWrapper},r.a.createElement("img",{src:je.a}),r.a.createElement("div",{className:Te.a.login},e.isAuth?e.login:r.a.createElement("div",null,r.a.createElement(s.b,{to:"/login"},"login")))))},Ue={id:null,email:null,login:null,isAuth:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_USER":return Object(N.a)(Object(N.a)(Object(N.a)({},e),t.data),{},{isAuth:!0});default:return e}},Ae=function(e){Object(F.a)(a,e);var t=Object(R.a)(a);function a(){return Object(M.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"componentDidMount",value:function(){var e=this;L.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0,headers:{"API-KEY":"e655fc0d-99c3-4c81-8dea-0837243fe8bf"}}).then((function(t){e.props.setUserAuthThunk(t.data.data)}))}},{key:"render",value:function(){return r.a.createElement(Se,this.props)}}]),a}(r.a.Component),ye=Object(I.b)((function(e){return{login:e.authUser.login,isAuth:e.authUser.isAuth}}),{setUserAuthThunk:function(){return function(e,t){X().then((function(t){0===t.resultCode&&e({type:"SET_AUTH_USER",data:t.data})}))}}})(Ae),Ie=a(54),xe=a.n(Ie),Me=function(e){return r.a.createElement("div",{className:xe.a.wrapper},"Login")},We=function(e){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(ye,null),r.a.createElement("div",{className:"wrapperContent"},r.a.createElement(i,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(u.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Oe,null)}}),r.a.createElement(u.b,{path:"/dialogs",render:function(){return r.a.createElement(x,null)}}),r.a.createElement(u.b,{path:"/users",component:se}),r.a.createElement(u.b,{path:"/news",component:d}),r.a.createElement(u.b,{path:"/music",component:E}),r.a.createElement(u.b,{path:"/settings",component:_}),r.a.createElement(u.b,{path:"/login",component:Me}))))},Fe=a(25),Re=a.n(Fe),Le=a(20),De=a(55),Ge=Object(Le.c)({profilePage:ue,dialogsPage:O,usersReducer:Y,authUser:ke}),He=Object(Le.d)(Ge,Object(Le.a)(De.a));window.store=He;var ze=He;Re.a.render(r.a.createElement(s.a,null,r.a.createElement(I.a,{store:ze},r.a.createElement(We,null))),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.81700070.chunk.js.map