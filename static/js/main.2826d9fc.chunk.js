(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{26:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a(17),c=a.n(n),i=(a(26),a(21)),r=a.p+"static/media/image1.15e32460.jpg",o=a.p+"static/media/image2.9bf875bf.jpg",l=a.p+"static/media/image3.69198338.jpg",j=a.p+"static/media/image4.5e1b4d5e.jpg",d=a.p+"static/media/image5.fbbeb0f1.jpg",p=a.p+"static/media/image6.291e3383.jpg",m=a.p+"static/media/image7.e80d0fe5.jpg",b=a.p+"static/media/image8.4888aa6d.jpg",h=a.p+"static/media/image9.7c20e32a.jpg",u=a.p+"static/media/image10.7319b986.jpg",g=a(9),f=a(11),x=a(12),O=a(10),v=a(8),y=a.n(v),k=a(14),C=a.n(k),S=a.p+"static/media/qrcode.68f02ac9.png",w=a(1),N=function(e){Object(x.a)(a,e);var t=Object(O.a)(a);function a(e){var s;return Object(g.a)(this,a),(s=t.call(this,e)).state={isPost:"",messages:[]},s}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.initializeApp({apiKey:"AIzaSyCTfcRz-5lRaoXb62FYwjVf4ZE0JgYmuFY",authDomain:"aaaaaa-f4c65.firebaseapp.com",databaseURL:"https://aaaaaa-f4c65-default-rtdb.firebaseio.com",projectId:"aaaaaa-f4c65",storageBucket:"aaaaaa-f4c65.appspot.com",messagingSenderId:"33699669583"}),y.a.database().ref("messages").on("value",(function(t){e.getData(t.val())}))}},{key:"getData",value:function(e){var t=e,a=C()(t).keys().map((function(e){var a=C.a.clone(t[e]);return a.key=e,a})).value();this.setState({messages:a})}},{key:"render",value:function(){var e=this.state.messages.map((function(e){return Object(w.jsxs)("li",{style:{marginTop:"15px"},children:[Object(w.jsx)("img",{style:{borderRadius:"50%"},src:e.profile,width:"60"}),Object(w.jsxs)("div",{className:"mybox",children:[Object(w.jsx)("h2",{style:{fontWeight:"bold"},children:e.name}),Object(w.jsx)("hr",{}),Object(w.jsx)("span",{style:{fontWeight:"normal",fontSize:"17px"},children:e.message})]})]})}));return Object(w.jsxs)("div",{className:"card",children:[Object(w.jsxs)("header",{children:[Object(w.jsxs)("center",{children:[Object(w.jsx)("h4",{style:{fontSize:"30px",marginTop:"10px",marginBottom:"10px"},children:"\u0e41\u0e2a\u0e01\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e48\u0e27\u0e21\u0e2d\u0e27\u0e22\u0e1e\u0e23"}),Object(w.jsx)("img",{src:S,width:"150px"})]}),Object(w.jsx)("hr",{}),Object(w.jsx)("div",{style:{height:"790px",overflow:"hidden"},children:Object(w.jsx)("ul",{id:"scroll-text",style:{listStyleType:"none"},children:e})})]}),Object(w.jsx)("footer",{})]})}}]),a}(s.Component),F=a(15),K=a(18),z=a(6),T=a(19),I=a.n(T),R=function(e){Object(x.a)(a,e);var t=Object(O.a)(a);function a(e){var s;return Object(g.a)(this,a),(s=t.call(this,e)).componentClicked=function(){console.log("click")},s.responseFacebook=function(){var e=Object(K.a)(Object(F.a)().mark((function e(t){return Object(F.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState({responsedata:t,profile:t.picture.data.url,name:t.name});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.onChange=s.onChange.bind(Object(z.a)(s)),s.onKeyup=s.onKeyup.bind(Object(z.a)(s)),s.state={responsedata:{},message:"",profile:"",name:""},s.onClick=s.onClick.bind(Object(z.a)(s)),s}return Object(f.a)(a,[{key:"onChange",value:function(e){this.setState({message:e.target.value})}},{key:"onClick",value:function(e){var t=this.state.message;if(""===t)return alert("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"),!1;y.a.database().ref("/messages").push({message:t,name:this.state.name,profile:this.state.profile}),this.setState({message:""}),Swal.fire({title:"\u0e2a\u0e48\u0e07\u0e04\u0e33\u0e2d\u0e27\u0e22\u0e1e\u0e23\u0e40\u0e23\u0e35\u0e22\u0e1a\u0e23\u0e49\u0e2d\u0e22\u0e41\u0e25\u0e49\u0e27!",text:"\u0e2a\u0e21\u0e38\u0e22\u0e01\u0e31\u0e1a\u0e40\u0e08\u0e19\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a!",type:"success"}).then((function(){location.reload()}))}},{key:"onKeyup",value:function(e){}},{key:"render",value:function(){return Object(w.jsx)(w.Fragment,{children:""==this.state.name?Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"container",style:{marginTop:"15px"},children:Object(w.jsxs)("center",{children:[Object(w.jsx)("h2",{children:"\u0e25\u0e07\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e02\u0e49\u0e32\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19"}),Object(w.jsx)("span",{children:"\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e48\u0e27\u0e21\u0e2d\u0e27\u0e22\u0e1e\u0e23"}),Object(w.jsx)("div",{style:{marginTop:"15px",marginBottom:"15px"},children:Object(w.jsx)(I.a,{appId:"1569091403558502",autoLoad:!1,fields:"name,picture",onClick:this.componentClicked,isMobile:!1,callback:this.responseFacebook})}),Object(w.jsx)("img",{src:d,width:"250px",className:"myres"})]})})}):Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{class:"form-container",children:[Object(w.jsxs)("span",{children:["Hello, ",Object(w.jsx)("span",{style:{color:"orange"},children:this.state.name})]}),Object(w.jsx)("h2",{children:"\u0e01\u0e23\u0e2d\u0e01\u0e04\u0e33\u0e2d\u0e27\u0e22\u0e1e\u0e23"}),Object(w.jsx)("form",{children:Object(w.jsx)("textarea",{className:"textarea",placeholder:"\u0e01\u0e23\u0e2d\u0e01\u0e04\u0e33\u0e2d\u0e27\u0e22\u0e1e\u0e23...",cols:"100",onChange:this.onChange,onKeyUp:this.onKeyup,value:this.state.message})}),Object(w.jsx)("input",{onClick:this.onClick,style:{fontFamily:"'Kanit', sans-serif",fontSize:"18px"},type:"button",value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"})]})})})}}]),a}(s.Component),A=R,B=a(20),D=a.n(B),E=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("is_post");"yes"==e&&n(e)})),Object(w.jsx)("div",{className:"App",children:"yes"==a?Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"columns",children:[Object(w.jsx)("div",{className:"column is-3"}),Object(w.jsx)("div",{className:"column is-6",children:Object(w.jsx)(A,{})})]})}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"card-container",children:Object(w.jsx)(N,{})}),Object(w.jsx)(D.a,{images:[r,o,l,j,d,p,m,b,h,u],duration:5,transition:2})]})})};function J(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(E,{})})}var L=document.getElementById("root");c.a.render(Object(w.jsx)(s.StrictMode,{children:Object(w.jsx)(J,{})}),L)}},[[43,1,2]]]);
//# sourceMappingURL=main.2826d9fc.chunk.js.map