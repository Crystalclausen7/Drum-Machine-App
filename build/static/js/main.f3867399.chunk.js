(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{30:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},42:function(e,a,t){e.exports=t(73)},47:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(20),o=t.n(s),c=(t(47),t(10)),m=t(2),l=t(22),i={volume:50,box_display:"",power:!0,bank:"one"};var u=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"VOLUME":return Object.assign({},e,{volume:a.volume});case"POWER":return Object.assign({},e,{power:a.power});case"PADBANK":return Object.assign({},e,{bank:a.padbank});case"BOX_DISPLAY":return Object.assign({},e,{box_display:a.box_display});default:return e}})),p=t(8),d=t(11),h=t(12),g=t(14),f=t(13),y=t(15),b=(t(52),function(e){return{type:"POWER",power:!e}}),k=function(e){return{type:"VOLUME",volume:e}},v=function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(e){var r;return Object(d.a)(this,t),(r=a.call(this,e)).state={background:"#f349"},r.audioRef=n.a.createRef(),r.play=r.play.bind(Object(y.a)(r)),r.handleKeyPress=r.handleKeyPress.bind(Object(y.a)(r)),r}return Object(h.a)(t,[{key:"componentWillMount",value:function(){var e=Math.floor(3*Math.random());this.setState({background:["#f39","#3b27ba","#13ca91"][e]})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"play",value:function(){this.props.power&&(this.audioRef.volume=parseFloat(this.props.volume/100),this.audioRef.play(),this.props.change_display({type:"BOX_DISPLAY",box_display:this.props.name}))}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.play()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"drum-pad",style:{backgroundColor:this.state.background,boxShadow:"0px 0px 15px ".concat(this.state.background)},onClick:this.play},n.a.createElement("audio",{className:"clip",id:this.props.keyTrigger,src:this.props.src,ref:function(a){e.audioRef=a}}),n.a.createElement("p",{className:"text"},this.props.keyTrigger))}}]),t}(n.a.Component),E=Object(p.b)((function(e){return{power:e.power,bank:e.bank,box_display:e.box_display,volume:e.volume}}),(function(e){return{change_power:function(a){e(b(a.power))},change_volume:function(a){e(k(a.volume))},change_display:function(a){e({type:"BOX_DISPLAY",box_display:a.box_display})},change_bank:function(a){e({type:"PADBANK",bank:a.bank})}}}))(v),w=(t(53),[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]),O=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3    "},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],j=function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"drum-machine"},"one"===this.props.bank?w.map((function(a,t){return n.a.createElement(E,{name:a.id,key:a.id,src:a.url,keyCode:a.keyCode,power:e.props.power,keyTrigger:a.keyTrigger,id:a.keyTrigger,className:"pads"})})):O.map((function(a,t){return n.a.createElement(E,{key:t,keyCode:a.keyCode,name:a.id,src:a.url,power:e.props.power,id:a.keyTrigger,keyTrigger:a.keyTrigger,className:"pads"})})))}}]),t}(n.a.Component),C=(t(54),function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"box-display"},this.props.box_display)}}]),t}(n.a.Component)),_=Object(p.b)((function(e){return{box_display:e.box_display}}))(C),N=function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(e){var r;return Object(d.a)(this,t),(r=a.call(this,e)).setVolume=r.setVolume.bind(Object(y.a)(r)),r}return Object(h.a)(t,[{key:"setVolume",value:function(e){console.log(e.target.value),this.props.change_volume({type:"VOLUME",volume:e.target.value})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{type:"range",value:this.props.volume,onChange:this.setVolume}),n.a.createElement("p",{style:{color:"white"}},"Volume: ",this.props.volume))}}]),t}(n.a.Component),S=Object(p.b)((function(e){return{volume:e.volume}}),(function(e){return{change_volume:function(a){return e(k(a.volume))}}}))(N),T=t(9);t(30);var x=Object(p.b)((function(e){return{power:e.power}}),(function(e){return{change_power:function(a){e(b(a.power))}}}))((function(e){var a=Object(r.useState)(localStorage.getItem("loggedIn")),t=Object(T.a)(a,2),s=t[0],o=t[1];return Object(r.useEffect)((function(){})),n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},"Drum Machine"),n.a.createElement("div",{className:"App-body"},"true"===s?n.a.createElement("button",{onClick:function(){localStorage.setItem("loggedIn","false"),o(localStorage.getItem("loggedIn"))}},"Logout"):n.a.createElement(m.a,{to:"/loginpage"}),n.a.createElement(S,null),n.a.createElement(_,null),n.a.createElement(j,{power:e.power,dispatch:e.dispatch})))})),H=t(17),P=t(18),z=t(24),A=t.n(z);t(39);var I=function(){var e=Object(r.useState)(),a=Object(T.a)(e,2),t=a[0],s=a[1],o=Object(r.useState)(!1),l=Object(T.a)(o,2),i=l[0],u=l[1];function p(e){var a=e.target,r=a.name,n=a.value;s(Object(P.a)(Object(P.a)({},t),{},Object(H.a)({},r,n)))}return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"main"},n.a.createElement("p",{className:"sign",align:"center"},"Sign in"),n.a.createElement("form",{className:"form1"},n.a.createElement("input",{className:"un ",name:"username",type:"text",align:"center",placeholder:"Username",onChange:p}),n.a.createElement("input",{className:"pass",name:"password",type:"password",align:"center",placeholder:"Password",onChange:p}),n.a.createElement("a",{className:"submit",align:"center",onClick:function(){A.a.get("/api/".concat(t.username)).then((function(e){e.data[0].username===t.username&&e.data[0].password===t.password&&(localStorage.setItem("loggedIn","true"),u(!0))}))}},"Sign in"))),i?n.a.createElement(m.a,{to:"/drummachine"}):n.a.createElement(c.b,{to:"/"},"Register"))};var K=t(24),D=function(e,a){var t=Object(r.useState)({username:"",email:"",password:"",password2:""}),n=Object(T.a)(t,2),s=n[0],o=n[1],c=Object(r.useState)({}),m=Object(T.a)(c,2),l=m[0],i=m[1],u=Object(r.useState)(!1),p=Object(T.a)(u,2),d=p[0],h=p[1];return Object(r.useEffect)((function(){0===Object.keys(l).length&&d&&e()}),[l]),{handleChange:function(e){var a=e.target,t=a.name,r=a.value;o(Object(P.a)(Object(P.a)({},s),{},Object(H.a)({},t,r)))},values:s,handleSubmit:function(e){e.preventDefault(),i(a(s)),K.post("/api/users",{username:s.username,password:s.password}).then((function(e){})).catch((function(e){console.log(e)})),h(!0)},errors:l}};function F(e){var a={};return e.username.trim()||(a.username="Username required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Email address is invalid"):a.email="Email required",e.password?e.password.length<6&&(a.password="Password needs to be 6 characters or more"):a.password="Password is required",e.password2?e.password2!==e.password&&(a.password2="Passwords do not match"):a.password2="Password is required",a}t(40);var L=function(e){var a=e.submitForm,t=D(a,F),r=t.handleChange,s=t.values,o=t.handleSubmit,m=t.errors;return n.a.createElement("div",{className:"form-content-right"},n.a.createElement("form",{className:"form",onSubmit:o},n.a.createElement("h1",null,"Register Here"),n.a.createElement("div",{className:"form-inputs"},n.a.createElement("label",{htmlFor:"username",className:"form-label"},"Username"),n.a.createElement("input",{id:"username",type:"text",name:"username",className:"form-input",placeholder:"Enter your username",value:s.username,onChange:r}),m.username&&n.a.createElement("p",null,m.username)),n.a.createElement("div",{className:"form-inputs"},n.a.createElement("label",{htmlFor:"email",className:"form-label"},"Email"),n.a.createElement("input",{id:"email",type:"email",name:"email",className:"form-input",placeholder:"Enter your email",value:s.email,onChange:r}),m.email&&n.a.createElement("p",null,m.email)),n.a.createElement("div",{className:"form-inputs"},n.a.createElement("label",{htmlFor:"password",className:"form-label"},"Password"),n.a.createElement("input",{id:"password",type:"password",name:"password",className:"form-input",placeholder:"Enter your password",value:s.password,onChange:r}),m.password&&n.a.createElement("p",null,m.password)),n.a.createElement("div",{className:"form-inputs"},n.a.createElement("label",{htmlFor:"password2",className:"form-label"},"Confirm Password"),n.a.createElement("input",{id:"password2",type:"password",name:"password2",className:"form-input",placeholder:"Enter your password2",value:s.password2,onChange:r}),m.password2&&n.a.createElement("p",null,m.password2)),n.a.createElement("button",{className:"form-input-btn",type:"submit"},"Sign up"),n.a.createElement("span",{className:"form-input-login"},"Already have an account? Login ",n.a.createElement(c.b,{to:"/loginpage"},"here"))))},R=function(){return n.a.createElement(m.a,{to:"/drummachine"})},B=function(){var e=Object(r.useState)(!1),a=Object(T.a)(e,2),t=a[0],s=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"form-container"},n.a.createElement("span",{className:"close-btn"},"x"),n.a.createElement("div",{className:"form-content-left"},n.a.createElement("img",{src:"img/Image from iOS.jpg",alt:"spaceship",className:"form-img"})),t?n.a.createElement(R,null):n.a.createElement(L,{submitForm:function(){s(!0)}})))};var M=function(e){return n.a.createElement(m.d,null,n.a.createElement(m.b,{exact:!0,path:"/"},n.a.createElement(B,null)),n.a.createElement(m.b,{exact:!0,path:"/drummachine"},n.a.createElement(x,null)),n.a.createElement(m.b,{exact:!0,path:"/loginpage"},n.a.createElement(I,null)))};o.a.render(n.a.createElement(c.a,null,n.a.createElement(p.a,{store:u},n.a.createElement(m.b,{path:"/"},n.a.createElement(M,null)))),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.f3867399.chunk.js.map