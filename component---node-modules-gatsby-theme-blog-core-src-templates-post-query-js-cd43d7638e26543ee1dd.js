(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},X8hv:function(t,e,r){function n(t,e,r){return(n=c()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var c=new(Function.bind.apply(t,n));return r&&o(c,r.prototype),c}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r("xtjI"),r("Dq+y"),r("Ggvi"),r("rzGZ"),r("m210"),r("4DPX"),r("YbXK"),r("cFtU"),r("pJf4"),r("q8oJ"),r("8npG"),r("nWfQ"),r("nWfQ"),r("pJf4"),r("q8oJ"),r("YbXK"),r("cFtU"),r("m210"),r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var p=r("q1tI"),s=r("7ljp"),b=s.useMDXComponents,O=s.mdx,y=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,c=t.children,o=function(t,e){if(null==t)return{};var r,n,c={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(c[r]=t[r]);return c}(t,["scope","components","children"]),u=b(r),a=y(e),f=p.useMemo((function(){if(!c)return null;var t=l({React:p,mdx:O},a),e=Object.keys(t),r=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(i(e),[""+c])).apply(void 0,[{}].concat(i(r)))}),[c,e]);return p.createElement(f,l({components:u},o))}},xjC2:function(t,e,r){"use strict";r.r(e),r.d(e,"query",(function(){return y}));r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("q1tI");var n=r("txSG"),c=r("Wbzz"),o=r("s/18"),i=r("qKvR"),u=function(t){var e=t.previous,r=t.next;return Object(i.c)("footer",{css:Object(n.f)({mt:4,pt:3})},Object(i.c)(n.c.hr,null),Object(i.c)(o.a,null),(e||r)&&Object(i.c)(n.b,{as:"ul",css:Object(n.f)({flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0})},Object(i.c)("li",null,e&&Object(i.c)(n.c.a,{as:c.a,to:e.slug,rel:"prev"},"← ",e.title)),Object(i.c)("li",null,r&&Object(i.c)(n.c.a,{as:c.a,to:r.slug,rel:"next"},r.title," →"))))},a=r("PqFP"),l=r("dlzO"),f=r("A2+M"),p=function(t){var e=t.data,r=e.post,c=e.site.siteMetadata.title,o=t.location,p=t.previous,s=t.next;return Object(i.c)(a.a,{location:o,title:c},Object(i.c)(l.a,{title:r.title,description:r.excerpt}),Object(i.c)("main",null,Object(i.c)(n.c.h1,null,r.title),Object(i.c)(n.c.p,{css:Object(n.f)({fontSize:1,mt:-3,mb:3})},r.date),Object(i.c)(f.MDXRenderer,null,r.body)),Object(i.c)(u,{previous:p,next:s}))};function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.default=function(t){var e=t.location,r=t.data,n=r.blogPost,c=r.previous,o=r.next;return Object(i.c)(p,{data:b({},r,{post:n}),location:e,previous:c,next:o})};var y="602541989"}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-blog-core-src-templates-post-query-js-cd43d7638e26543ee1dd.js.map