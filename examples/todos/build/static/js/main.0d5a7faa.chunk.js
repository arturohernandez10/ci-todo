(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},34:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(12),l=n(5),o=n(4),a=0,u="SHOW_ALL",d="SHOW_COMPLETED",f="SHOW_ACTIVE",m=function(e){var t=e.active,n=e.children,r=e.onClick;return i.a.createElement("button",{onClick:r,disabled:t,style:{marginLeft:"4px"}},n)},s=Object(o.b)(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}})(m),E=function(){return i.a.createElement("div",null,i.a.createElement("span",null,"Show: "),i.a.createElement(s,{filter:u},"All"),i.a.createElement(s,{filter:f},"Active"),i.a.createElement(s,{filter:d},"Completed"))},v=Object(o.b)()(function(e){var t,n=e.dispatch;return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:function(e){var r;e.preventDefault(),t.value.trim()&&(n((r=t.value,{type:"ADD_TODO",id:a++,text:r})),t.value="")}},i.a.createElement("input",{ref:function(e){return t=e}}),i.a.createElement("button",{type:"submit"},"Add Todo")))}),b=function(e){var t=e.onClick,n=e.completed,r=e.text;return i.a.createElement("li",{onClick:t,style:{textDecoration:n?"line-through":"none"}},r)},p=function(e){var t=e.todos,n=e.toggleTodo;return i.a.createElement("ul",null,t.map(function(e){return i.a.createElement(b,Object.assign({key:e.id},e,{onClick:function(){return n(e.id)}}))}))},O=Object(o.b)(function(e){return{todos:function(e,t){switch(t){case u:return e;case d:return e.filter(function(e){return e.completed});case f:return e.filter(function(e){return!e.completed});default:throw new Error("Unknown filter: "+t)}}(e.todos,e.visibilityFilter)}},function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}})(p),h=function(){return i.a.createElement("div",null,i.a.createElement(v,null),i.a.createElement(O,null),i.a.createElement(E,null))},T=n(18),y=n(17),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(y.a)(e).concat([{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map(function(e){return e.id===t.id?Object(T.a)({},e,{completed:!e.completed}):e});default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},I=Object(l.combineReducers)({todos:w,visibilityFilter:g}),j=n(16);fetch("./database").then(function(e){e.body.json().then(function(e){var t=Object(l.createStore)(I,e,Object(j.devToolsEnhancer)());Object(c.render)(i.a.createElement(o.a,{store:t},i.a.createElement(h,null)),document.getElementById("root"))})})}},[[19,2,1]]]);
//# sourceMappingURL=main.0d5a7faa.chunk.js.map