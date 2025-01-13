(function(){var t={1163:function(t,e,s){"use strict";s(3792),s(3362),s(9085),s(9391);var a=s(5471),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("Header"),e("router-view",{staticClass:"content"}),e("Footer")],1)},o=[],i=function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar-desktop"},[e("span",{staticClass:"nav-home"},[e("router-link",{attrs:{to:"/"}},[t._v("markbarbuto")]),e("span",{staticClass:"nav-socials"},[e("a",{attrs:{href:"https://www.github.com/markbarbuto/",target:"_blank"}},[e("font-awesome-icon",{staticClass:"social-icon",attrs:{icon:["fab","github"],size:"xs"}})],1),e("a",{attrs:{href:"https://www.linkedin.com/in/mark-barbuto-680124204/",target:"_blank"}},[e("font-awesome-icon",{staticClass:"social-icon",attrs:{icon:["fab","linkedin"],size:"xs"}})],1),e("a",{attrs:{href:"https://open.spotify.com/user/badieshisha",target:"_blank"}},[e("font-awesome-icon",{staticClass:"social-icon",attrs:{icon:["fab","spotify"],size:"xs"}})],1),e("a",{attrs:{href:"https://www.youtube.com/@markbarbuto22",target:"_blank"}},[e("font-awesome-icon",{staticClass:"social-icon",attrs:{icon:["fab","youtube"],size:"xs"}})],1)])],1),e("nav",{staticClass:"nav-links"},[e("span",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/gallery"}},[t._v("gallery")])],1),e("span",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/about"}},[t._v("about")])],1),t._m(0)])])},r=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"nav-item"},[e("a",{attrs:{href:"mailto:markbarbuto@outlook.com"}},[t._v("contact")])])}],c={name:"Header"},l=c,u=s(1656),d=(0,u.A)(l,i,r,!1,null,"6f646e8a",null),m=d.exports,f=function(){var t=this;t._self._c;return t._m(0)},g=[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("p",[t._v("© 2024 Mark Barbuto.")])])}],p={name:"Footer"},h=p,v=(0,u.A)(h,f,g,!1,null,"f812ba2e",null),j=v.exports,b={name:"App",components:{Header:m,Footer:j}},y=b,_=(0,u.A)(y,n,o,!1,null,null,null),C=_.exports,k=s(173),w=s(7845),x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-container"},[e("div",{staticClass:"home-content-container"},[t._m(0),e("div",{staticClass:"home-content"},[t._m(1),e("div",{staticClass:"home-succulent",style:{transform:"rotate(".concat(t.rotation,"deg)")},on:{mousedown:t.startDrag,mousemove:t.onDrag,mouseup:t.endDrag,mouseleave:t.endDrag}},[e("img",{staticClass:"home-succulent-img",attrs:{src:"/assets/succulent.png",alt:"succulent",draggable:"false"}})])])]),e("div",{staticClass:"arrow-down"},[e("a",{staticClass:"arrow-down-link",attrs:{href:"#featured"}},[e("font-awesome-icon",{attrs:{icon:["fas","circle-chevron-down"],size:"2xl"}})],1)]),e("Featured")],1)},D=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-background"},[e("img",{staticClass:"home-background-blur",attrs:{src:"/assets/backgroundblur.png"}}),e("div",{staticClass:"home-desktop"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-heading-body"},[e("span",{staticClass:"home-greeting"},[t._v("hello, this is my portfolio.")]),e("span",{staticClass:"home-description"},[t._v(" I am a software developer, among many other things; click around and find out ")])])}],z={data:function(){return{isDragging:!1,startAngle:0,rotation:0,centerX:0,centerY:0}},methods:{startDrag:function(t){var e=t.target.getBoundingClientRect();this.centerX=e.left+e.width/2,this.centerY=e.top+e.height/2,this.isDragging=!0,this.startAngle=this.calculateAngle(t.clientX,t.clientY)},onDrag:function(t){if(this.isDragging){var e=this.calculateAngle(t.clientX,t.clientY),s=e-this.startAngle;s>180&&(s-=360),s<-180&&(s+=360),Math.abs(s)<=90&&(this.rotation+=s,this.startAngle=e)}},endDrag:function(){this.isDragging=!1},calculateAngle:function(t,e){var s=t-this.centerX,a=e-this.centerY;return Math.atan2(a,s)*(180/Math.PI)}}},M=(s(113),s(6910),s(6099),s(8992),s(2577),s(114)),A=s(7552),O=(s(2675),s(9463),(0,M.A)((function t(e,s,a,n,o,i,r){(0,A.A)(this,t),this.id=e,this.image=s,this.title=a,this.category=n,this.createdDate=o,this.completedDate=i,this.description=r}))),S=(s(2811),Object.freeze({CODING:"coding",MODELLING:"3D modelling",MUSIC:"music production"})),I=S;function T(t,e,s){return(new Date).setFullYear(t,e-1,s)}var Y=[new O("music-journal-app","/assets/music-journal-app.png","Music Journal App",I.CODING,T(2024,5,1),null,"An app where you can journal about your favourite songs")],F=[new O("home-office-3d-design","/assets/home-office-3d-design.jpg","Home Office & Lounge",I.MODELLING,T(2024,12,1),null,"3D design of my home office & lounge that I would like to renovate")],L=[new O("overdrive-postmalone-song","/assets/overdrive-postmalone-song.png","Overdrive - Post Malone",I.MUSIC,T(2024,6,12),T(2024,7,7),"My recreation of this song in FL Studio"),new O("te-lo-mereces-juanlumontoya-song","/assets/te-lo-mereces-juanlumontoya-song.png","Te Lo Mereces - Juanlu Montoya",I.MUSIC,T(2024,10,18),null,"My recreation of this song in FL Studio"),new O("somestevelacy-song","/assets/some-song.png","Some - Steve Lacy",I.MUSIC,T(2024,4,4),T(2024,5,21),"My recreation of this song in FL Studio")],N=[Y.find((function(t){return"music-journal-app"===t.id})),F.find((function(t){return"home-office-3d-design"===t.id})),L.find((function(t){return"overdrive-postmalone-song"===t.id}))];function G(t){var e;return null!==(e=t.completedDate)&&void 0!==e?e:t.createdDate}var E={coding_projects:Y.sort((function(t,e){return G(e)-G(t)})),modelling_projects:F.sort((function(t,e){return G(e)-G(t)})),music_projects:L.sort((function(t,e){return G(e)-G(t)})),featured:N},P=E,U=(s(7495),s(5440),function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-featured",attrs:{id:"featured"}},[t._m(0),e("div",{staticClass:"featured-items"},t._l(t.projects.featured,(function(s){return e("div",{key:s.id,staticClass:"featured-item"},[e("div",{staticClass:"featured-item-heading"},[e("div",{staticClass:"featured-item-category",class:{coding:s.category===t.Category.CODING,modelling:s.category===t.Category.MODELLING,music:s.category===t.Category.MUSIC}},[t._v(" "+t._s(s.category)+" ")]),e("div",{staticClass:"featured-item-date"},[t._v(t._s(s.completedDate?t.moment(s.completedDate).format("YYYY-MM-DD"):"ongoing"))])]),e("router-link",{attrs:{to:{path:"/gallery/"+s.category.replace(" ","-")+"/"+s.id}}},[e("img",{staticClass:"featured-item-image",attrs:{src:s.image,alt:s.title,onerror:"this.src='/assets/project-placeholder.svg'; this.className='featured-item-image-placeholder'"}})]),e("div",{staticClass:"featured-item-content"},[e("div",{staticClass:"featured-item-title"},[e("router-link",{attrs:{to:{path:"/gallery/"+s.category+"/"+s.id}}},[t._v(t._s(s.title))])],1),e("div",{staticClass:"featured-item-description"},[t._v(t._s(s.description))])])],1)})),0),e("div",{staticClass:"view-gallery"},[e("router-link",{staticClass:"view-gallery-button",attrs:{to:"/gallery"}},[t._v("view gallery")])],1)])}),X=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-heading"},[e("a",{staticClass:"featured-heading-text",attrs:{href:"#featured"}},[t._v("featured")])])}],H={name:"Featured",data:function(){return{projects:P,Category:I}}},B=H,q=(0,u.A)(B,U,X,!1,null,"a72986da",null),J=q.exports,R={name:"Home",metaInfo:{title:"markbarbuto | home"},components:{Featured:J},mixins:[z],data:function(){return{projects:P,Category:I}}},$=R,K=(0,u.A)($,x,D,!1,null,"78b31854",null),Q=K.exports,V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"gallery-container"},[e("div",{staticClass:"section-heading"},[t._v("gallery")]),e("div",{staticClass:"tabs"},[e("button",{staticClass:"tab",class:{active:"coding"===t.currentTab},on:{click:function(e){t.currentTab="coding"}}},[t._v("coding")]),e("button",{staticClass:"tab",class:{active:"modelling"===t.currentTab},on:{click:function(e){t.currentTab="modelling"}}},[t._v("3D modelling")]),e("button",{staticClass:"tab",class:{active:"music"===t.currentTab},on:{click:function(e){t.currentTab="music"}}},[t._v("music production")])]),e("div",{staticClass:"tab-content"},t._l(t.currentTabComponent,(function(s){return e("div",{key:s.id,staticClass:"gallery-item"},[e("div",{staticClass:"gallery-item-heading"},[e("div",{staticClass:"gallery-item-date"},[t._v(t._s(s.completedDate?t.moment(s.completedDate).format("YYYY-MM-DD"):"ongoing"))])]),e("router-link",{attrs:{to:{path:"/gallery/"+s.category.replace(" ","-")+"/"+s.id}}},[e("img",{staticClass:"gallery-item-image",attrs:{src:s.image,alt:s.title,onerror:"this.src='/assets/project-placeholder.svg'; this.className='gallery-item-image-placeholder'"}})]),e("div",{staticClass:"gallery-item-content"},[e("div",{staticClass:"gallery-item-title"},[e("router-link",{attrs:{to:{path:"/gallery/"+s.category+"/"+s.id}}},[t._v(t._s(s.title))])],1),e("div",{staticClass:"gallery-item-description"},[t._v(t._s(s.description))])])],1)})),0)])},W=[],Z=(s(2008),s(4520),{name:"Gallery",metaInfo:{title:"markbarbuto | gallery"},data:function(){return{currentTab:"coding",projects:P,Category:I}},computed:{currentTabComponent:function(){return{coding:P.coding_projects,modelling:P.modelling_projects,music:P.music_projects}[this.currentTab]},filteredProjects:function(){var t=this;return this.projects.filter((function(e){return e.category===t.currentTab}))}}}),tt=Z,et=(0,u.A)(tt,V,W,!1,null,"386579a5",null),st=et.exports,at=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-container"},[e("div",{staticClass:"section-heading"},[t._v(" about ")]),t._m(0),e("div",{staticClass:"about-content-container",staticStyle:{"padding-top":"100px"}},[e("div",{staticClass:"about-content"},[e("img",{staticClass:"about-image",attrs:{src:"/assets/905gunners-mark.png",alt:"905gunners-mark"}}),e("span",{staticClass:"about-description"},[e("p",{staticStyle:{display:"inline-flex"}},[t._v("i am also part of the 905gunners "),e("font-awesome-icon",{staticClass:"social-icon",staticStyle:{"margin-left":"5px","margin-top":"2px"},attrs:{icon:["fas","futbol"],size:"lg"}}),e("img",{staticClass:"icon-905gunners",attrs:{src:"/assets/905gunners.png",alt:"905gunners"}})],1),e("p",[t._v("we are a soccer team that plays weekly, and we post our matches each week as well as other soccer-related content. so check it out here "),e("a",{attrs:{href:"https://www.youtube.com/@905-Gunners",target:"_blank"}},[e("font-awesome-icon",{staticClass:"social-icon",attrs:{icon:["fab","youtube"]}})],1),t._v("  "),e("a",{attrs:{href:"https://www.instagram.com/905.gunners/",target:"_blank"}},[e("font-awesome-icon",{staticClass:"social-icon",attrs:{icon:["fab","instagram"]}})],1),t._v("  "),e("a",{attrs:{href:"https://www.tiktok.com/@905gunners",target:"_blank"}},[e("font-awesome-icon",{staticClass:"social-icon",attrs:{icon:["fab","tiktok"],size:"sm"}})],1)]),e("p",[t._v("here's a player shot i made of myself. i made one of these for each player on our team and printed them onto a deck of cards.")]),e("p",[t._v("we also like to collaborate with other social media presences and join local events.")])])])]),t._m(1)])},nt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-content-container"},[e("div",{staticClass:"about-content"},[e("span",{staticClass:"about-description"},[e("p",[t._v(" alright mark, let's keep this short and sweet. ")]),e("p",[t._v(" my name is mark barbuto. ")]),e("p",[t._v(" i graduated from university of toronto with a bachelor's degree in computer science. ")]),e("p",[t._v(" i am currently a software developer at BALANCED+, and started in july of 2024. ")]),e("p",[t._v(" soccer is my thing. and music; just creating things in general. art. that's the word that describes me the best. just look at me. i am art. ")])]),e("img",{staticClass:"about-image",attrs:{src:"/assets/mark.jpg",alt:"mark"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-content-container",staticStyle:{"padding-top":"100px"}},[e("div",{staticClass:"about-content"},[e("span",{staticClass:"about-description"},[e("p",[t._v("lastly, i recently discovered my desire to travel.")]),e("p",[t._v("these pictures were taken in spain in the summer of 2024. all of these photos were taken in different towns in mallorca, one of the small balearic island off the east coast of spain. ")]),e("p",[t._v("the largest photo is my favourite because of its vibrant colours and i think the subject is perfectly placed.")]),e("p",[t._v("anyway, thanks for stopping by.")])]),e("div",{staticClass:"images"},[e("img",{staticClass:"about-image",staticStyle:{position:"relative","z-index":"3",top:"-50px",left:"50px"},attrs:{src:"/assets/mallorca2.jpg",alt:"mallorca"}}),e("img",{staticClass:"about-image",staticStyle:{position:"relative","z-index":"2",top:"-100px",left:"200px"},attrs:{src:"/assets/mallorca3.jpg",alt:"mallorca"}}),e("img",{staticClass:"about-image",staticStyle:{position:"relative","z-index":"1",top:"-450px",left:"-50px"},attrs:{src:"/assets/mallorca.jpg",alt:"mallorca"}})])])])}],ot={name:"About",metaInfo:{title:"markbarbuto | about"}},it=ot,rt=(0,u.A)(it,at,nt,!1,null,"775f81cb",null),ct=rt.exports,lt=function(){var t=this;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"not-found-container"},[e("h3",[t._v("oops! page not found")]),e("div",{staticClass:"not-found-code-container"},[e("h1",{staticClass:"not-found-code"},[t._v("404")])]),e("div",{staticClass:"not-found-text-container"},[e("h2",{staticClass:"not-found-text"},[t._v(" sorry, i didn't make this page yet oops ")])])])}],dt={name:"NotFound",metaInfo:{title:"404 - not found"}},mt=dt,ft=(0,u.A)(mt,lt,ut,!1,null,"0aaf972e",null),gt=ft.exports;a["default"].use(k.Ay),a["default"].use(w.A);var pt=new k.Ay({mode:"history",routes:[{name:"home",path:"/",component:Q},{name:"gallery",path:"/gallery",component:st},{name:"about",path:"/about",component:ct},{name:"404 - Not Found",path:"**",component:gt,fallback:!0}]}),ht=s(6005),vt=s.n(ht),jt=s(5093),bt=s.n(jt),yt=s(7107),_t=s(1273),Ct=s(6188),kt=s(7875);yt.Yv.add(Ct.X7I,kt.Cvc),a["default"].component("font-awesome-icon",_t.gc),a["default"].prototype.moment=bt(),a["default"].use(vt()),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(C)},router:pt}).$mount("#app")},5358:function(t,e,s){var a={"./af":5177,"./af.js":5177,"./ar":1509,"./ar-dz":1488,"./ar-dz.js":1488,"./ar-kw":8676,"./ar-kw.js":8676,"./ar-ly":2353,"./ar-ly.js":2353,"./ar-ma":4496,"./ar-ma.js":4496,"./ar-ps":6947,"./ar-ps.js":6947,"./ar-sa":2682,"./ar-sa.js":2682,"./ar-tn":9756,"./ar-tn.js":9756,"./ar.js":1509,"./az":5533,"./az.js":5533,"./be":8959,"./be.js":8959,"./bg":7777,"./bg.js":7777,"./bm":4903,"./bm.js":4903,"./bn":1290,"./bn-bd":7357,"./bn-bd.js":7357,"./bn.js":1290,"./bo":1545,"./bo.js":1545,"./br":1470,"./br.js":1470,"./bs":4429,"./bs.js":4429,"./ca":7306,"./ca.js":7306,"./cs":6464,"./cs.js":6464,"./cv":6016,"./cv.js":6016,"./cy":4226,"./cy.js":4226,"./da":3601,"./da.js":3601,"./de":7853,"./de-at":6111,"./de-at.js":6111,"./de-ch":4697,"./de-ch.js":4697,"./de.js":7853,"./dv":708,"./dv.js":708,"./el":4691,"./el.js":4691,"./en-au":3872,"./en-au.js":3872,"./en-ca":8298,"./en-ca.js":8298,"./en-gb":6195,"./en-gb.js":6195,"./en-ie":6584,"./en-ie.js":6584,"./en-il":5543,"./en-il.js":5543,"./en-in":9033,"./en-in.js":9033,"./en-nz":9402,"./en-nz.js":9402,"./en-sg":3004,"./en-sg.js":3004,"./eo":2934,"./eo.js":2934,"./es":7650,"./es-do":838,"./es-do.js":838,"./es-mx":7730,"./es-mx.js":7730,"./es-us":6575,"./es-us.js":6575,"./es.js":7650,"./et":3035,"./et.js":3035,"./eu":3508,"./eu.js":3508,"./fa":119,"./fa.js":119,"./fi":527,"./fi.js":527,"./fil":5995,"./fil.js":5995,"./fo":2477,"./fo.js":2477,"./fr":5498,"./fr-ca":6435,"./fr-ca.js":6435,"./fr-ch":7892,"./fr-ch.js":7892,"./fr.js":5498,"./fy":7071,"./fy.js":7071,"./ga":1734,"./ga.js":1734,"./gd":217,"./gd.js":217,"./gl":7329,"./gl.js":7329,"./gom-deva":2124,"./gom-deva.js":2124,"./gom-latn":3383,"./gom-latn.js":3383,"./gu":5050,"./gu.js":5050,"./he":1713,"./he.js":1713,"./hi":3861,"./hi.js":3861,"./hr":6308,"./hr.js":6308,"./hu":609,"./hu.js":609,"./hy-am":7160,"./hy-am.js":7160,"./id":4063,"./id.js":4063,"./is":9374,"./is.js":9374,"./it":8383,"./it-ch":1827,"./it-ch.js":1827,"./it.js":8383,"./ja":3827,"./ja.js":3827,"./jv":9722,"./jv.js":9722,"./ka":1794,"./ka.js":1794,"./kk":7088,"./kk.js":7088,"./km":6870,"./km.js":6870,"./kn":4451,"./kn.js":4451,"./ko":3164,"./ko.js":3164,"./ku":8174,"./ku-kmr":6181,"./ku-kmr.js":6181,"./ku.js":8174,"./ky":8474,"./ky.js":8474,"./lb":9680,"./lb.js":9680,"./lo":5867,"./lo.js":5867,"./lt":5766,"./lt.js":5766,"./lv":9532,"./lv.js":9532,"./me":8076,"./me.js":8076,"./mi":1848,"./mi.js":1848,"./mk":306,"./mk.js":306,"./ml":3739,"./ml.js":3739,"./mn":9053,"./mn.js":9053,"./mr":6169,"./mr.js":6169,"./ms":3386,"./ms-my":2297,"./ms-my.js":2297,"./ms.js":3386,"./mt":7075,"./mt.js":7075,"./my":2264,"./my.js":2264,"./nb":2274,"./nb.js":2274,"./ne":8235,"./ne.js":8235,"./nl":2572,"./nl-be":3784,"./nl-be.js":3784,"./nl.js":2572,"./nn":4566,"./nn.js":4566,"./oc-lnc":9330,"./oc-lnc.js":9330,"./pa-in":9849,"./pa-in.js":9849,"./pl":4418,"./pl.js":4418,"./pt":9834,"./pt-br":8303,"./pt-br.js":8303,"./pt.js":9834,"./ro":4457,"./ro.js":4457,"./ru":2271,"./ru.js":2271,"./sd":1221,"./sd.js":1221,"./se":3478,"./se.js":3478,"./si":7538,"./si.js":7538,"./sk":5784,"./sk.js":5784,"./sl":6637,"./sl.js":6637,"./sq":6794,"./sq.js":6794,"./sr":5719,"./sr-cyrl":3322,"./sr-cyrl.js":3322,"./sr.js":5719,"./ss":6e3,"./ss.js":6e3,"./sv":1011,"./sv.js":1011,"./sw":748,"./sw.js":748,"./ta":1025,"./ta.js":1025,"./te":1885,"./te.js":1885,"./tet":8861,"./tet.js":8861,"./tg":6571,"./tg.js":6571,"./th":5802,"./th.js":5802,"./tk":9527,"./tk.js":9527,"./tl-ph":9231,"./tl-ph.js":9231,"./tlh":1052,"./tlh.js":1052,"./tr":5096,"./tr.js":5096,"./tzl":9846,"./tzl.js":9846,"./tzm":1765,"./tzm-latn":7711,"./tzm-latn.js":7711,"./tzm.js":1765,"./ug-cn":8414,"./ug-cn.js":8414,"./uk":6618,"./uk.js":6618,"./ur":158,"./ur.js":158,"./uz":7609,"./uz-latn":2475,"./uz-latn.js":2475,"./uz.js":7609,"./vi":1135,"./vi.js":1135,"./x-pseudo":4051,"./x-pseudo.js":4051,"./yo":2218,"./yo.js":2218,"./zh-cn":2648,"./zh-cn.js":2648,"./zh-hk":1632,"./zh-hk.js":1632,"./zh-mo":1541,"./zh-mo.js":1541,"./zh-tw":304,"./zh-tw.js":304};function n(t){var e=o(t);return s(e)}function o(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id=5358}},e={};function s(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}s.m=t,function(){var t=[];s.O=function(e,a,n,o){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],o=t[u][2];for(var r=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(s.O).every((function(t){return s.O[t](a[c])}))?a.splice(c--,1):(r=!1,o<i&&(i=o));if(r){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,n,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,i=a[0],r=a[1],c=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(c)var u=c(s)}for(e&&e(a);l<i.length;l++)o=i[l],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(u)},a=self["webpackChunkpersonal_website"]=self["webpackChunkpersonal_website"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(1163)}));a=s.O(a)})();
//# sourceMappingURL=app-legacy.caa06c09.js.map