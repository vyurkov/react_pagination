(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,t){"use strict";t.r(a);var c=t(4),n=t.n(c),r=t(3),i=t(1),l=(t(9),t(0)),o=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,r=Math.ceil(a/t),i=Array.from(Array(r).keys()),o=Array.from(Array(t).keys()).map((function(e){var n=c*t-t+(e+1);return n<=a?n:null})).filter((function(e){return null!==e}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("ul",{className:"pagination",children:[Object(l.jsx)("li",{className:"page-item ".concat(1===c&&"disabled"),children:Object(l.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#".concat(c),"aria-disabled":1===c,onClick:function(){return c>1&&n(c-1)},children:"\xab"})}),i.map((function(e){return Object(l.jsx)("li",{className:"page-item ".concat(e+1===c&&"active"),children:Object(l.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e+1),onClick:function(){return n(e+1)},children:e+1})},e+1)})),Object(l.jsx)("li",{className:"page-item ".concat(c===r&&"disabled"),children:Object(l.jsx)("button",{type:"button","data-cy":"nextLink",className:"page-link","aria-disabled":c===r,disabled:c===r,onClick:function(){n(c+1),window.location.href="#".concat(c+1)},children:"\xbb"})})]}),Object(l.jsx)("ul",{children:o.map((function(e){return Object(l.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})};var s=function(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}(1,42).map((function(e){return"Item ".concat(e)})),j=function(){var e=Object(i.useState)(1),a=Object(r.a)(e,2),t=a[0],c=a[1],n=Object(i.useState)(5),j=Object(r.a)(n,2),d=j[0],u=j[1],b=t*d-(d-1),h=Math.min(b+(d-1),s.length);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Items with Pagination"}),Object(l.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(t," (items ").concat(b," - ").concat(h," of ").concat(s.length,")")}),Object(l.jsxs)("div",{className:"form-group row",children:[Object(l.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(l.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:d,onChange:function(e){u(Number(e.target.value)),c(1)},children:[Object(l.jsx)("option",{value:"3",children:"3"}),Object(l.jsx)("option",{value:"5",children:"5"}),Object(l.jsx)("option",{value:"10",children:"10"}),Object(l.jsx)("option",{value:"20",children:"20"})]})}),Object(l.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(l.jsx)(o,{total:s.length,perPage:d,currentPage:t,onPageChange:c})]})};n.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))},9:function(e,a,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.c89af3ed.chunk.js.map