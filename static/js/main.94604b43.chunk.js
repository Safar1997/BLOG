(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{266:function(e,t,a){e.exports=a(454)},271:function(e,t,a){},291:function(e,t,a){},454:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),i=a.n(c),o=(a(271),a(83)),u=a(5),l=a(77),s=a(229),p=a(10),m=a(260),d=a(23),f=a(462),E=a(4),b=a.n(E),g=a(13),v=a(467),h=a(230),y=a.n(h).a.create({baseURL:"https://conduit.productionready.io/api/"});y.interceptors.request.use((function(e){var t=(JSON.parse(localStorage.getItem("user"))||{}).token;return t&&(e.headers.Authorization="Token ".concat(t)),e}),(function(e){return Promise.reject(e)}));var O,j,S,x=function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.post("/users/login",{user:t});case 2:return a=e.sent,localStorage.setItem("user",JSON.stringify(a.data.user)),e.abrupt("return",a.data.user);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.post("/users",{user:t});case 2:return a=e.sent,e.abrupt("return",a.data.user);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/articles",{params:t});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(g.a)(b.a.mark((function e(t,a){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.put("/articles/".concat(t),{article:a});case 2:return r=e.sent,n=r.data.article,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),I=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.post("/articles",{article:t});case 2:return a=e.sent,r=a.data.article,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.delete("/articles/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.post("/articles/".concat(t,"/favorite"));case 2:return a=e.sent,r=a.data.article,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.delete("/articles/".concat(t,"/favorite"));case 2:return a=e.sent,r=a.data.article,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=a(32),A=Object(k.a)({basename:"/ultraBlog"}),U=Object(v.a)("USER_LOGIN_REQUEST"),N=Object(v.a)("USER_LOGIN_SUCCESS"),D=Object(v.a)("USER_LOGIN_FAILURE"),z=Object(v.a)("USER_LOGOUT"),F=Object(v.a)("USER_REGISTR_REQUEST"),q=Object(v.a)("USER_REGISTR_SUCCESS"),P=Object(v.a)("USER_REGISTR_FAILURE"),V=Object(v.a)("ARTICLES_REQUEST"),G=Object(v.a)("ARTICLES_SUCCESS"),B=Object(v.a)("ARTICLES_FAILURE"),M=Object(v.a)("EDIT_ARTICLE_REQUEST"),Q=Object(v.a)("EDIT_ARTICLE_SUCCESS"),J=Object(v.a)("EDIT_ARTICLE_FAILURE"),H=Object(v.a)("DELETE_ARTICLE_REQUEST"),X=Object(v.a)("DELETE_ARTICLE_SUCCESS"),W=Object(v.a)("DELETE_ARTICLE_FAILURE"),Y=Object(v.a)("ADD_ARTICLE_REQUEST"),Z=Object(v.a)("ADD_ARTICLE_SUCCESS"),$=Object(v.a)("ADD_ARTICLE_FAILURE"),K=Object(v.a)("SET_FAVORITE_REQUEST"),ee=Object(v.a)("SET_FAVORITE_SUCCESS"),te=Object(v.a)("SET_FAVORITE_FAILURE"),ae=Object(v.a)("UNSET_FAVORITE_REQUEST"),re=Object(v.a)("UNSET_FAVORITE_SUCCESS"),ne=Object(v.a)("UNSET_FAVORITE_FAILURE"),ce=Object(v.a)("CHANGE_CURRENT_PAGE"),ie=Object(v.a)("SET_ARTICLES_PARAMS"),oe=function(e){return function(){var t=Object(g.a)(b.a.mark((function t(a){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(U()),t.prev=1,t.next=4,x(e);case 4:r=t.sent,a(N({userData:r})),A.push("/home"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a(D(t.t0.response.data));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},ue=function(e){return function(){var t=Object(g.a)(b.a.mark((function t(a){var r,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(F()),t.prev=1,t.next=4,w(e);case 4:r=e.email,n=e.password,a(oe({email:r,password:n})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(P(t.t0.response.data));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},le=function(e){return function(){var t=Object(g.a)(b.a.mark((function t(a){var r,n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(V()),t.prev=1,a(ie({params:e})),t.next=5,T(e);case 5:r=t.sent,n=r.articles,c=r.articlesCount,a(G({articles:n,articlesCount:c})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a(B(t.t0.response.data));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},se=Object(f.a)((O={},Object(p.a)(O,ie,(function(e,t){var a=t.payload.params;return Object(d.a)({},e,{params:a})})),Object(p.a)(O,ee,(function(e,t){var a=t.payload.article,r=e.articles.map((function(e){return e.slug===a.slug?a:e}));return Object(d.a)({},e,{articles:r})})),Object(p.a)(O,re,(function(e,t){var a=t.payload.article,r=e.articles.map((function(e){return e.slug===a.slug?a:e}));return Object(d.a)({},e,{articles:r})})),Object(p.a)(O,M,(function(e){return Object(d.a)({},e,{isLoading:!0})})),Object(p.a)(O,Q,(function(e,t){var a=t.payload.article,r=e.articles.map((function(e){return e.slug===a.slug?a:e}));return Object(d.a)({},e,{articles:r,isLoading:!1})})),Object(p.a)(O,Y,(function(e){return Object(d.a)({},e,{isLoading:!0})})),Object(p.a)(O,Z,(function(e,t){var a=t.payload.article,r=[].concat(Object(m.a)(e.articles),[a]);return Object(d.a)({},e,{articles:r,isLoading:!1})})),Object(p.a)(O,X,(function(e,t){var a=t.payload.slug,r=e.articles.filter((function(e){return e.slug!==a}));return Object(d.a)({},e,{articles:r})})),Object(p.a)(O,V,(function(e){return Object(d.a)({},e,{isLoading:!0})})),Object(p.a)(O,G,(function(e,t){var a=t.payload,r=a.articles,n=a.articlesCount;return Object(d.a)({},e,{articles:r,articlesCount:n,isLoading:!1})})),Object(p.a)(O,B,(function(e){return Object(d.a)({},e,{articles:[]})})),O),{articles:[],articlesCount:0,isLoading:!1,params:{limit:10}}),pe=Object(f.a)(Object(p.a)({},ce,(function(e,t){var a=t.payload.pageNumber;return Object(d.a)({},e,{currentPage:a})})),{currentPage:1,pageSize:10}),me=JSON.parse(localStorage.getItem("user")),de=me?{loggedIn:!0,isLoading:!1,user:me}:{loggedIn:!1,isLoading:!1},fe=Object(f.a)((j={},Object(p.a)(j,U,(function(e){return Object(d.a)({},e,{isLoading:!0})})),Object(p.a)(j,N,(function(e,t){return{isLoading:!1,loggedIn:!0,user:t.payload.userData}})),Object(p.a)(j,D,(function(){return{loggedIn:!1}})),Object(p.a)(j,z,(function(){return localStorage.removeItem("user"),{loggedIn:!1}})),j),de),Ee=Object(f.a)((S={},Object(p.a)(S,N,(function(){return""})),Object(p.a)(S,q,(function(){return""})),Object(p.a)(S,D,(function(e,t){return t.payload.errors})),Object(p.a)(S,P,(function(e,t){return t.payload.errors})),Object(p.a)(S,J,(function(e,t){var a=t.payload;return t.payload.errors||a})),Object(p.a)(S,$,(function(e,t){var a=t.payload;return t.payload.errors||a})),Object(p.a)(S,W,(function(e,t){var a=t.payload;return t.payload.errors||a})),S),{}),be=Object(l.c)({user:fe,errors:Ee,articles:se,pageSettings:pe}),ge=Object(l.e)(be,Object(l.d)(Object(l.a)(s.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),ve=(a(291),a(169),a(263)),he=a(457),ye=a(463),Oe=a(45),je=function(e){var t=Object(u.c)((function(e){return e.user})).loggedIn,a=Object(u.b)();return n.a.createElement(ye.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px",display:"flex"}},n.a.createElement(ye.a.Item,{key:"/home"},n.a.createElement(Oe.a,{to:"/home"},"Home")),!t&&n.a.createElement(ye.a.Item,{key:"/login",style:{marginLeft:"auto"}},n.a.createElement(Oe.a,{to:"/login"},"Login")),t&&n.a.createElement(ye.a.Item,{style:{marginLeft:"auto"},onClick:function(){a(z()),a(le({limit:10}))}},"Log out"))},Se=a(460),xe=a(455),we=a(461),Te=a(459),Le=a(465),Ie=a(468),Re=function(e){var t=e.article,a=Object(u.b)(),r=t.favorited,c=t.favoritesCount,i=t.slug,o=function(){return a(function(e){return function(){var t=Object(g.a)(b.a.mark((function t(a){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(K()),t.prev=1,t.next=4,_(e);case 4:r=t.sent,a(ee({article:r})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(te(t.t0.response.data));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(i))};return n.a.createElement("div",null,n.a.createElement(Ie.a,{twoToneColor:r?"#eb2f96":"#52c41a",style:{fontSize:"20px"},onClick:r?function(){return a(function(e){return function(){var t=Object(g.a)(b.a.mark((function t(a){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(ae()),t.prev=1,t.next=4,C(e);case 4:r=t.sent,a(re({article:r})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(ne(t.t0.response.data));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(i))}:o}),n.a.createElement("span",{style:{fontSize:"22px"}},c))},_e=a(53),Ce=Te.a.Meta,ke=function(e){var t=e.article,a=t.title,r=t.author,c=t.description,i=t.createdAt,o=t.slug,u=t.tagList,l=Object(we.a)(new Date(i),new Date);return n.a.createElement(Te.a,{hoverable:!0,title:a,extra:n.a.createElement(Re,{article:t})},n.a.createElement("p",null,c),n.a.createElement(Oe.a,{to:"/articles/".concat(o),onClick:function(){localStorage.setItem("openedArticle",JSON.stringify(t))}},"Read more..."),n.a.createElement(Ce,{description:"Created ".concat(l," ago")}),n.a.createElement(Ce,{description:"Author ".concat(r.username)}),u.length>0&&n.a.createElement("p",null,"\u0422\u044d\u0433\u0438:",u.map((function(e){return n.a.createElement(Le.a,{key:_e.uniqueId()},e)}))))},Ae=function(){var e=Object(u.b)();Object(r.useEffect)((function(){le({limit:10})(e)}),[]);var t=Object(u.c)((function(e){return{articles:e.articles.articles,isLoading:e.articles.isLoading}})),a=t.articles,c=t.isLoading,i=a.map((function(e){return n.a.createElement(ke,{key:e.slug,article:e})}));return c?n.a.createElement(xe.a,{tip:"Loading...",style:{width:"100%"},size:"large"}):n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(350px, 1fr))",gridGap:"10px"}},i)},Ue=a(456),Ne=a(196),De=a(469),ze=Te.a.Meta,Fe=function(){var e=Object(u.c)((function(e){return{pageSize:e.pageSettings.pageSize,params:e.articles.params,user:e.user.user}})),t=e.pageSize,a=e.user,r=Object(u.b)();return n.a.createElement(Te.a,{hoverable:!0,style:{width:240,marginRight:"10px"},title:n.a.createElement(Ue.a,{size:64,icon:n.a.createElement(De.a,null)})},n.a.createElement(ze,{title:a.username,description:a.email}),n.a.createElement(Ne.a,{style:{marginTop:"20px",width:"100%"},type:"primary",onClick:function(){r(le({author:a.username}))}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u043e\u0438 \u0441\u0442\u0430\u0442\u044c\u0438"),n.a.createElement(Ne.a,{style:{marginTop:"20px",width:"100%"},type:"primary",onClick:function(){return r(le({limit:t}))}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"),n.a.createElement(Ne.a,{style:{marginTop:"20px",width:"100%"},type:"primary",onClick:function(){return r(le({limit:t,favorited:a.username}))}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0432\u0448\u0438\u0435\u0441\u044f"),n.a.createElement(Ne.a,{style:{marginTop:"20px",width:"100%"},type:"primary",onClick:function(){return A.push("/add")}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0430\u0442\u044c\u044e"))},qe=function(){var e=Object(u.c)((function(e){return e.user})).loggedIn,t=Object(u.b)(),a=Object(u.c)((function(e){return{articles:e.articles.articles,articlesCount:e.articles.articlesCount,currentPage:e.pageSettings.currentPage,pageSize:e.pageSettings.pageSize,params:e.articles.params}})),c=a.currentPage,i=a.pageSize,o=a.articlesCount,l=a.params;Object(r.useEffect)((function(){t(le({limit:10}))}),[]);return n.a.createElement("div",{style:{padding:"40px",display:"flex"}},e&&n.a.createElement(Fe,null),n.a.createElement("div",{style:{flexGrow:"1"}},n.a.createElement(Ae,null),o>i&&n.a.createElement(Se.a,{style:{marginTop:"30px"},current:c,total:o,pageSize:i,onChange:function(e){var a;t((a=e,function(){var e=Object(g.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(ce({pageNumber:a}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),t(le(Object(d.a)({},l,{offset:(e-1)*i})))}})))},Pe=a(464),Ve=a(466),Ge=a(29),Be=a(470),Me=a(471),Qe=a(26),Je=function(){var e=Object(u.c)((function(e){return e})).errors,t=Object.keys(e).reduce((function(t,a){return"".concat(t,"\n").concat(a,": ").concat(e[a].join(","))}),""),a=Object(u.b)(),r=function(e,t,a,r,c){return n.a.createElement(Ge.a,{name:e},(function(e){var i=e.field,o=e.meta;return n.a.createElement("div",null,n.a.createElement(r,Object.assign({prefix:c,type:t,placeholder:a},i,{style:{marginBottom:"10px"}})),o.touched&&o.error&&n.a.createElement("div",{className:"error",style:{color:"red",marginTop:"-10px"}},o.error))}))},c=Qe.b().shape({email:Qe.c().email("Must be a valid email address").required("Email is required"),password:Qe.c().required("Password is required")});return n.a.createElement(Ge.d,{initialValues:{password:"",email:"",loged:!1},onSubmit:function(e,t){a(oe(e)),t.setSubmitting(!1)},validationSchema:c},(function(a){var c=a.isSubmitting;return n.a.createElement(Ge.c,{onSubmit:a.handleSubmit,style:{margin:"0 auto",width:"300px",marginTop:"200px"}},r("email","email","input email",Pe.a,n.a.createElement(Be.a,null)),r("password","password","input password",Pe.a.Password,n.a.createElement(Me.a,null)),n.a.createElement("div",null),n.a.createElement(Ne.a,{disabled:c,type:"primary",htmlType:"submit",style:{width:"100%",marginBottom:"10px"}},"Log in"),n.a.createElement(Oe.a,{to:"/SignUp"},"SignUp"),!Object(_e.isEmpty)(e)&&n.a.createElement(Ve.a,{type:"error",message:t}))}))},He=function(){return n.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}},n.a.createElement(Je,null))},Xe=function(){var e=Object(u.c)((function(e){return e})).errors,t=Object.keys(e).reduce((function(t,a){return"".concat(t,"\n").concat(a,": ").concat(e[a].join(","))}),""),a=Object(u.b)(),r=function(e,t,a,r,c){return n.a.createElement(Ge.a,{name:e},(function(e){var i=e.field,o=e.meta;return n.a.createElement("div",null,n.a.createElement(r,Object.assign({prefix:c,type:t,placeholder:a},i,{style:{marginBottom:"10px"}})),o.touched&&o.error&&n.a.createElement("div",{className:"error",style:{color:"red",marginTop:"-10px"}},o.error))}))},c=Qe.b({username:Qe.c().max(50,"Must 50 characters or less").required("You must enter Name"),password:Qe.c().matches(/^[a-zA-Z0-9]{0,}$/,"Password have only latin letters and digits").min(8,"Password is too short - should be 8 chars minimum.").max(40,"Must be 40 characters or less").matches(/[0-9]+/,"Password must contain at least one digit").matches(/[A-Z]+/,"Password must contain an one uppercase character").required("You must enter password"),email:Qe.c().email("Invalid email address").required("You must enter email")});return n.a.createElement(Ge.d,{initialValues:{username:"",password:"",email:""},onSubmit:function(){var e=Object(g.a)(b.a.mark((function e(t,r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(ue(t)),r.setSubmitting(!1);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),validationSchema:c},(function(a){var c=a.isSubmitting;return n.a.createElement(Ge.c,{onSubmit:a.handleSubmit,style:{margin:"0 auto",width:"300px",marginTop:"200px"}},r("username","input","input Name",Pe.a,n.a.createElement(De.a,null)),r("email","email","input email",Pe.a,n.a.createElement(Be.a,null)),r("password","password","input password",Pe.a.Password,n.a.createElement(Me.a,null)),n.a.createElement("div",null),n.a.createElement(Ne.a,{disabled:c,type:"primary",htmlType:"submit",style:{width:"100%",marginBottom:"10px"}},"Sign Up"),n.a.createElement(Oe.a,{to:"/Login"}," Login "),!Object(_e.isEmpty)(e)&&n.a.createElement(Ve.a,{type:"error",message:t}))}))},We=function(){return n.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement(Xe,null))},Ye=a(259),Ze=a(472),$e=a(473),Ke=function(e){var t=e.article,a=e.user,r=t.author,c=void 0===r?{}:r,i=t.slug,o=Object(u.b)();return n.a.createElement("div",{style:{display:"flex",alignItems:"center"}},n.a.createElement("span",{style:{marginRight:"20px"}},n.a.createElement(Re,{article:t})),a.username===c.username&&n.a.createElement("div",null,n.a.createElement(Ne.a,{type:"primary",size:"large",shape:"circle",icon:n.a.createElement(Ze.a,null),onClick:function(){A.push("/articles/".concat(i,"/edit"))}}),n.a.createElement(Ne.a,{type:"danger",size:"large",shape:"circle",icon:n.a.createElement($e.a,null),onClick:function(){o(function(e){return function(){var t=Object(g.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(H()),t.prev=1,t.next=4,R(e);case 4:a(X({slug:e})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),a(W(t.t0.response.data));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}(i)),A.push("/")}})))};Ke.defaultProps={article:{},user:{}};var et=Ke,tt=Te.a.Meta,at=function(e){var t=e.match.params.slug,a=Object(u.c)((function(e){return{article:e.articles.articles.find((function(e){return e.slug===t}))||{},user:e.user.user}})),r=a.user,c=a.article,i=void 0===c?{}:c,o=i.author,l=void 0===o?{}:o,s=Object(we.a)(new Date(i.createdAt||0),new Date,{locale:Ye.a}),p=i.tagList&&i.tagList.map((function(e){return n.a.createElement(Le.a,{key:e},e)}));return n.a.createElement("div",{style:{padding:"30px"}},n.a.createElement(Te.a,{hoverable:!0,title:i.title,extra:n.a.createElement(et,{article:i,user:r})},n.a.createElement("p",{style:{minHeight:"200px"}},i.body),n.a.createElement(tt,{description:"\u0421\u043e\u0437\u0434\u0430\u043d\u0430 ".concat(s," \u043d\u0430\u0437\u0430\u0434. \u0410\u0432\u0442\u043e\u0440 - ").concat(l.username)}),p&&p.length>0&&n.a.createElement("p",null,"\u0422\u044d\u0433\u0438: ",p)))},rt=a(458),nt=a(474),ct=a(475),it=rt.a.Item,ot=Object(Ge.e)({mapPropsToValues:function(e){var t=e.initialValues,a=void 0===t?{}:t,r=e.title,n=e.description,c=e.body,i=e.tagList;return{title:a.title||r||"",description:a.description||n||"",body:a.body||c||"",tagList:a.tagList||i||[""]}},validationSchema:Qe.b().shape({title:Qe.c().required("Title is required"),description:Qe.c().required("Description is required"),body:Qe.c().required("Body is required"),tagList:Qe.a().of(Qe.c().required("Enter a tagname")).min(1,"Must be minimum one tag")}),handleSubmit:function(e,t){var a=t.props,r=t.setSubmitting;a.actionToDispatch(e),r(!1)}})((function(e){e.props;var t=e.values,a=e.errors,r=e.touched,c=e.isSubmitting,i=e.handleSubmit,o=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"],u=n.a.createRef();return n.a.createElement(Ge.c,{onSubmit:i,style:{margin:"0 auto",width:"500px"}},n.a.createElement(it,{validateStatus:r.title&&a.title?"error":null,help:r.title&&a.title?a.title:null},n.a.createElement(Ge.a,{name:"title"},(function(e){var t=e.field,a=e.form;a.touched,a.errors,e.meta;return n.a.createElement("div",null,n.a.createElement(Pe.a,Object.assign({prefix:n.a.createElement(nt.a,null),type:"text",placeholder:"Input title"},t)))}))),n.a.createElement(it,{validateStatus:r.description&&a.description?"error":null,help:r.description&&a.description?a.description:null},n.a.createElement(Ge.a,{name:"description"},(function(e){var t=e.field,a=e.form;a.touched,a.errors,e.meta;return n.a.createElement("div",null,n.a.createElement(Pe.a,Object.assign({prefix:n.a.createElement(ct.a,null),type:"text",placeholder:"Input description"},t)))}))),n.a.createElement(it,{validateStatus:r.body&&a.body?"error":null,help:r.body&&a.body?a.body:null},n.a.createElement(Ge.a,{name:"body"},(function(e){var t=e.field,a=e.form;a.touched,a.errors,e.meta;return n.a.createElement("div",null,n.a.createElement(Pe.a.TextArea,Object.assign({autoSize:{minRows:8,maxRows:8},type:"text",placeholder:"Input body"},t)))}))),n.a.createElement(rt.a.Item,{validateStatus:r.tagList&&a.tagList?"error":null,help:r.tagList&&a.tagList?a.tagList:null},n.a.createElement(Ge.b,{name:"tagList",render:function(e){var a=e.remove,r=e.push,c=t.tagList&&t.tagList.map((function(e,t){return n.a.createElement(Le.a,{color:o[(r=1,c=11,Math.floor(Math.random()*(c-r+1)+r))],style:{marginBottom:"10px",float:"left"},key:_e.uniqueId(),closable:!0,name:"tagList[".concat(t,"]"),onClose:function(){return a(t)}},e);var r,c}));return n.a.createElement("div",null,c,n.a.createElement(Pe.a,{ref:u}),n.a.createElement(Ne.a,{type:"primary",style:{marginTop:"20px",float:"left"},onClick:function(){r(u.current.state.value),u.current.state.value=""}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u0433"))}})),n.a.createElement(it,null,n.a.createElement(Ne.a,{htmlType:"submit",type:"primary",disabled:c,style:{width:"100%",marginBottom:"10px",marginTop:"10px"}},"Save changes")))})),ut=function(e){var t=e.match.params.slug,a=Object(u.b)(),r=Object(u.c)((function(e){return{article:e.articles.articles.find((function(e){return e.slug===t})),isLoading:e.articles.isLoading}})),c=r.article,i=r.isLoading,o=JSON.parse(localStorage.getItem("openedArticle")),l=Object(_e.isEmpty)(c)?o:c,s=l.title,p=l.body,m=l.description,d=l.tagList;return n.a.createElement("div",{className:"wrapper",style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"70px"}},i?n.a.createElement(xe.a,{style:{width:"100%"},size:"large"}):n.a.createElement("div",{className:"content",style:{width:"500px"}},n.a.createElement("div",{style:{display:"flex",width:"100%"}},n.a.createElement("h1",{style:{marginLeft:"auto"}}," \u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438")),n.a.createElement(ot,{initialValues:{title:s,body:p,description:m,tagList:d},actionToDispatch:function(e){return a(function(e,t){return function(){var a=Object(g.a)(b.a.mark((function a(r){var n;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(M()),a.prev=1,a.next=4,L(e,t);case 4:n=a.sent,r(Q({article:n})),A.push("/articles/".concat(e)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),r(J(a.t0.response.data));case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()}(t,e))}})))},lt=function(){var e=Object(u.b)();return n.a.createElement("div",{className:"wrapper",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"100px"}},n.a.createElement("div",{className:"content",style:{width:"500px"}},n.a.createElement("div",{style:{display:"flex",width:"100%"}},n.a.createElement("h1",{style:{marginLeft:"auto"}}," Adding an atricle")),n.a.createElement(ot,{actionToDispatch:function(t){return e((a=t,function(){var e=Object(g.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Y()),e.prev=1,e.next=4,I(a);case 4:r=e.sent,t(Z({article:r})),A.push("/articles/".concat(r.slug)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t($(e.t0.response.data));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()));var a}})))},st=he.a.Header,pt=he.a.Content,mt=function(e){var t=e.component,a=e.pathToRedirect,r=e.conditionFunc,c=Object(ve.a)(e,["component","pathToRedirect","conditionFunc"]);return n.a.createElement(o.b,Object.assign({},c,{render:function(e){return r()?n.a.createElement(t,e):n.a.createElement(o.a,{to:a})}}))},dt=function(){var e=Object(u.c)((function(e){return e.user})).loggedIn;return n.a.createElement(he.a,{className:"layout",style:{maxWidth:"1440px"}},n.a.createElement(st,null,n.a.createElement("div",{className:"logo"}),n.a.createElement(je,null)),n.a.createElement(pt,null,n.a.createElement(o.d,null,n.a.createElement(o.b,{exact:!0,path:"/"},n.a.createElement(o.a,{to:"/home"})),n.a.createElement(mt,{path:"/add",component:lt,pathToRedirect:"/login",conditionFunc:function(){return e}}),n.a.createElement(mt,{path:"/articles/:slug/edit",component:ut,pathToRedirect:"/login",conditionFunc:function(){return e}}),n.a.createElement(o.b,{path:"/home",component:qe}),n.a.createElement(o.b,{path:"/login",component:He}),n.a.createElement(o.b,{path:"/signup",component:We}),n.a.createElement(o.b,{exact:!0,path:"/articles/:slug",component:at}))))};var ft=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u.a,{store:ge},n.a.createElement(o.c,{history:A},n.a.createElement(dt,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(ft,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[266,1,2]]]);
//# sourceMappingURL=main.94604b43.chunk.js.map