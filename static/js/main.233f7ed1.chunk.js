(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{21:function(a,e,t){},38:function(a,e,t){"use strict";t.r(e);var n=t(4),s=t(11),c=t.n(s),i=(t(21),t.p+"static/media/image1.15e32460.jpg"),r=t.p+"static/media/image2.9bf875bf.jpg",o=t.p+"static/media/image3.69198338.jpg",j=t.p+"static/media/image4.5e1b4d5e.jpg",d=t.p+"static/media/image5.70b2b4fc.jpg",m=t(12),l=t(15),b=t(16),p=t(14),u=t(8),g=t.n(u),f=t(9),h=t.n(f),v=t(1),O=function(a){Object(b.a)(t,a);var e=Object(p.a)(t);function t(a){var n;return Object(m.a)(this,t),(n=e.call(this,a)).state={isPost:"",messages:[]},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var a=this;g.a.initializeApp({apiKey:"AIzaSyCTfcRz-5lRaoXb62FYwjVf4ZE0JgYmuFY",authDomain:"aaaaaa-f4c65.firebaseapp.com",databaseURL:"https://aaaaaa-f4c65-default-rtdb.firebaseio.com",projectId:"aaaaaa-f4c65",storageBucket:"aaaaaa-f4c65.appspot.com",messagingSenderId:"33699669583"}),g.a.database().ref("messages").on("value",(function(e){console.log("snapshot",e),console.log("snapshot",JSON.stringify(e.val())),a.getData(e.val())}))}},{key:"getData",value:function(a){var e=a,t=h()(e).keys().map((function(a){var t=h.a.clone(e[a]);return t.key=a,t})).value();this.setState({messages:t})}},{key:"render",value:function(){var a=this.state.messages.map((function(a){return Object(v.jsx)("div",{children:Object(v.jsx)("h3",{children:a.message})})}));return Object(v.jsx)("div",{className:"banner",children:Object(v.jsx)("div",{className:"item",children:Object(v.jsxs)("div",{className:"banner-content",children:[Object(v.jsx)("h1",{className:"banner-title ",children:"AYDIN Co For Framing , Package and delivery"}),a]})})})}}]),t}(n.Component),x=t(13),y=t.n(x),k=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(y.a,{images:[i,r,o,j,d],duration:5,transition:2}),Object(v.jsx)(O,{})]})};function N(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(k,{})})}var D=document.getElementById("root");c.a.render(Object(v.jsx)(n.StrictMode,{children:Object(v.jsx)(N,{})}),D)}},[[38,1,2]]]);
//# sourceMappingURL=main.233f7ed1.chunk.js.map