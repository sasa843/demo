(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(2),s=n.n(a),c=n(4),r=n.n(c),u=(n(21),n(13)),d=n(8),o=n(9),l=n(5),m=n(15),h=n(14),j=(n.p,n(22),n(23),n(10)),b=n(11);var p=function(t){var e=t.items.map((function(e){return Object(i.jsx)("div",{className:"list",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("input",{type:"text",id:e.key,value:e.text,onChange:function(n){return t.updateItem(n.target.value,e.key)}}),Object(i.jsx)("span",{children:Object(i.jsx)(j.a,{className:"faIcons",icon:"trash",onClick:function(){return t.deleteItems(e.key)}})})]})},e.key)}));return Object(i.jsx)("div",{children:Object(i.jsx)(b.a,{duration:400,easing:"ease-in-out",children:e})})},f=n(3),v=n(12);f.b.add(v.a);var x=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).state={item:[],currentItem:{text:"",key:""}},i.deleteItems=i.deleteItems.bind(Object(l.a)(i)),i.updateItem=i.updateItem.bind(Object(l.a)(i)),i}return Object(o.a)(n,[{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(""!==e.text){var n=[].concat(Object(u.a)(this.state.item),[e]);this.setState({item:n,currentItem:{text:"",key:""}})}}},{key:"deleteItems",value:function(t){var e=this.state.item.filter((function(e){return e.key!==t}));this.setState({item:e})}},{key:"updateItem",value:function(t,e){var n=this.state.item;n.map((function(n){n.key==e&&(n.text=t)})),this.setState({item:n})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem.bind(this),children:[Object(i.jsx)("input",{type:"text",placeholder:"Enter Task",value:this.state.currentItem.text,onChange:this.handleInput.bind(this)}),Object(i.jsx)("button",{type:"submit",children:"Add"})]})}),Object(i.jsx)(p,{items:this.state.item,deleteItems:this.deleteItems,updateItem:this.updateItem})]})}}]),n}(s.a.Component),I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),I()}},[[29,1,2]]]);
//# sourceMappingURL=main.5c04b91f.chunk.js.map