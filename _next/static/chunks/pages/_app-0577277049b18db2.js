(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9547)}])},8418:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var i,o=(i=r(7294))&&i.__esModule?i:{default:i},l=r(6273),c=r(387),s=r(7190);var u={};function f(e,n,r,t){if(e&&l.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[n+"%"+r+(a?"%"+a:"")]=!0}}var _=function(e){var n,r=!1!==e.prefetch,t=c.useRouter(),i=o.default.useMemo((function(){var n=a(l.resolveHref(t,e.href,!0),2),r=n[0],i=n[1];return{href:r,as:e.as?l.resolveHref(t,e.as):i||r}}),[t,e.href,e.as]),_=i.href,d=i.as,h=e.children,v=e.replace,p=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var y=(n=o.default.Children.only(h))&&"object"===typeof n&&n.ref,g=a(s.useIntersection({rootMargin:"200px"}),2),j=g[0],x=g[1],k=o.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);o.default.useEffect((function(){var e=x&&r&&l.isLocalURL(_),n="undefined"!==typeof b?b:t&&t.locale,a=u[_+"%"+d+(n?"%"+n:"")];e&&!a&&f(t,_,d,{locale:n})}),[d,_,x,b,r,t]);var N={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,i,o,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==o&&t.indexOf("#")>=0&&(o=!1),n[a?"replace":"push"](r,t,{shallow:i,locale:c,scroll:o}))}(e,t,_,d,v,p,m,b)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l.isLocalURL(_)&&f(t,_,d,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var w="undefined"!==typeof b?b:t&&t.locale,O=t&&t.isLocaleDomain&&l.getDomainLocale(d,w,t&&t.locales,t&&t.domainLocales);N.href=O||l.addBasePath(l.addLocale(d,w,t&&t.defaultLocale))}return o.default.cloneElement(n,N)};n.default=_},7190:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,t=e.disabled||!l,s=i.useRef(),u=a(i.useState(!1),2),f=u[0],_=u[1],d=a(i.useState(n?n.current:null),2),h=d[0],v=d[1],p=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,i=t.observer,o=t.elements;return o.set(e,n),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&_(e)}),{root:h,rootMargin:r}))}),[t,h,r,f]);return i.useEffect((function(){if(!l&&!f){var e=o.requestIdleCallback((function(){return _(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){n&&v(n.current)}),[n]),[p,f]};var i=r(7294),o=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},9547:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var t=r(5893),a=(r(4831),r(2174),r(1258)),i=r.n(a),o=r(3681),l=r.n(o),c=function(){return(0,t.jsx)("div",{className:l().copyright_container,children:(0,t.jsx)("div",{className:i().container,children:(0,t.jsxs)("div",{className:l().copyright,children:["\xa9 Bhaskar Neupane ",(new Date).getFullYear()]})})})},s=r(1664),u=r(2741),f=r.n(u),_=function(e){return(0,t.jsxs)("div",{className:f().logo_maker,id:"logo_maker",children:[(0,t.jsx)("div",{className:f().main_letter_wrapper,children:e.mainChar}),(0,t.jsx)("div",{className:f().name_wrapper,children:e.name})]})},d=r(3161),h=r.n(d),v=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:h().navigation_section,children:[(0,t.jsx)("div",{className:h().top_navbar_container,children:(0,t.jsx)("div",{className:i().container,children:(0,t.jsxs)("nav",{className:h().navbar,children:[(0,t.jsx)("div",{className:h().logo_section,children:(0,t.jsx)(s.default,{href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)(_,{mainChar:"V",name:"askr"})})})}),(0,t.jsxs)("ul",{className:"".concat(h().navigation_links," ").concat(h().link_container),children:[(0,t.jsx)("li",{children:(0,t.jsx)(s.default,{href:"/",children:(0,t.jsx)("a",{children:"About"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(s.default,{href:"/",children:(0,t.jsx)("a",{children:"Projects"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(s.default,{href:"/",children:(0,t.jsx)("a",{children:"Blog"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(s.default,{href:"/",children:(0,t.jsx)("a",{children:"Contact"})})})]})]})})}),(0,t.jsxs)("div",{className:h().bottom_navbar_container,children:[(0,t.jsxs)("ul",{className:"".concat(h().link_container," ").concat(h().bottom_navigation_link),children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://www.linkedin.com/in/vaskrneup/",target:"_blank",rel:"noreferrer",children:(0,t.jsx)("i",{className:"fab fa-linkedin","aria-hidden":!0})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://stackoverflow.com/users/10212936/vaskrneup",target:"_blank",rel:"noreferrer",children:(0,t.jsx)("i",{className:"fab fa-stack-overflow","aria-hidden":!0})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://github.com/vaskrneup",target:"_blank",rel:"noreferrer",children:(0,t.jsx)("i",{className:"fab fa-github","aria-hidden":!0})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://instagram.com/vaskrneup",target:"_blank",rel:"noreferrer",children:(0,t.jsx)("i",{className:"fab fa-instagram","aria-hidden":!0})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://twitter.com/vaskrneup/",target:"_blank",rel:"noreferrer",children:(0,t.jsx)("i",{className:"fab fa-twitter","aria-hidden":!0})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"mailto:bhaskar@vaskrneup.com",target:"_blank",rel:"noreferrer",children:(0,t.jsx)("i",{className:"far fa-envelope","aria-hidden":!0})})})]}),(0,t.jsx)("div",{className:h().hr,children:"\xa0"})]})]})})},p=r(8115),m=r.n(p),b=function(e){var n=e.children,r=e.setMinHeightOfScreen,a=void 0!==r&&r;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v,{}),(0,t.jsx)("div",{className:m().body_container,style:{minHeight:!0===a?"100vh":void 0},children:n}),(0,t.jsx)(c,{})]})};r(7995);function y(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function g(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){y(e,n,r[n])}))}return e}var j=function(e){var n=e.Component,r=e.pageProps;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(b,{children:(0,t.jsx)(n,g({},r))})})}},3681:function(e){e.exports={copyright_container:"Copyright_copyright_container__OmJwA",copyright:"Copyright_copyright__QQDZO"}},8115:function(e){e.exports={container:"Layout_container__7UE5U",animated_line:"Layout_animated_line___i8BX",link:"Layout_link__GHavl",body_container:"Layout_body_container__SPD_w",section:"Layout_section__BVvFH",section_title:"Layout_section_title__VO6dm",section_body:"Layout_section_body__iYO1J"}},3161:function(e){e.exports={container:"Navbar_container__rVhH8",animated_line:"Navbar_animated_line__N5vmV",navigation_links:"Navbar_navigation_links__zjHMy",link:"Navbar_link__UhyJF",navigation_section:"Navbar_navigation_section__XvZ4K",top_navbar_container:"Navbar_top_navbar_container__t3HbM",navbar:"Navbar_navbar___JEvD",logo_section:"Navbar_logo_section__8uw5l",link_container:"Navbar_link_container__E2IGj",bottom_navbar_container:"Navbar_bottom_navbar_container__S_lqt",bottom_navigation_link:"Navbar_bottom_navigation_link__xJC_b",hr:"Navbar_hr__ZTwYE"}},2741:function(e){e.exports={logo_maker:"LogoMaker_logo_maker__OqH86",main_letter_wrapper:"LogoMaker_main_letter_wrapper__3xbdC",name_wrapper:"LogoMaker_name_wrapper__9iCyd"}},1258:function(e){e.exports={container:"Utils_container__8iXDf",animated_line:"Utils_animated_line__u0_us",link:"Utils_link__NWSN_"}},7995:function(){},2174:function(){},4831:function(){},1664:function(e,n,r){e.exports=r(8418)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(387)}));var r=e.O();_N_E=r}]);