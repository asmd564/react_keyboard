(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),r=n.n(s),a=n(4),c=n(5),o=n(7),d=n(6),i=n(1),p=n(0),u=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pressedKey:null},e.pressedKeyHandler=function(t){e.setState({pressedKey:t.key})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.pressedKeyHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.pressedKeyHandler)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(i.Component);n(13);r.a.render(Object(p.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9d1f1479.chunk.js.map