"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{681:function(n,t,e){e.r(t);var r=e(439),c=e(791),o=e(689),u=e(79),i=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],a=t[1],s=(0,o.UO)().movieId,f="movie/".concat(s,"/reviews?api_key=");return(0,c.useEffect)((function(){(0,u.Z)(f).then((function(n){return a(n.results[0].url)})).catch((function(n){console.log(n)}))}),[f]),console.log(e),(0,i.jsx)("div",{children:(0,i.jsx)("a",{href:e,children:"reviews"})})}},390:function(n,t,e){e.d(t,{$:function(){return c},_:function(){return r}});var r="https://api.themoviedb.org/3/",c="acac49daeae449d51e6ac182f82d5604"},79:function(n,t,e){var r=e(861),c=e(757),o=e.n(c),u=e(390);function i(){return(i=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u._).concat(t).concat(u.$)).then((function(n){return n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}t.Z=function(n){return i.apply(this,arguments)}},861:function(n,t,e){function r(n,t,e,r,c,o,u){try{var i=n[o](u),a=i.value}catch(s){return void e(s)}i.done?t(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,o){var u=n.apply(t,e);function i(n){r(u,c,o,i,a,"next",n)}function a(n){r(u,c,o,i,a,"throw",n)}i(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=681.ebd5f5b6.chunk.js.map