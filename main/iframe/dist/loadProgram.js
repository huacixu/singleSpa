!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=4)}([function(t,n){function e(t){return Promise.resolve().then(function(){var n=new Error('Cannot find module "'+t+'".');throw n.code="MODULE_NOT_FOUND",n})}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=0},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{name:"navbar",base:!0},{name:"program1",base:!1}]},function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";e.r(n),function(t){e.d(n,"BOOTSTRAPPING",function(){return E}),e.d(n,"LOADING_SOURCE_CODE",function(){return b}),e.d(n,"LOAD_ERROR",function(){return j}),e.d(n,"MOUNTED",function(){return A}),e.d(n,"MOUNTING",function(){return T}),e.d(n,"NOT_BOOTSTRAPPED",function(){return O}),e.d(n,"NOT_LOADED",function(){return y}),e.d(n,"NOT_MOUNTED",function(){return P}),e.d(n,"SKIP_BECAUSE_BROKEN",function(){return D}),e.d(n,"UNMOUNTING",function(){return _}),e.d(n,"UPDATING",function(){return N}),e.d(n,"addErrorHandler",function(){return v}),e.d(n,"checkActivityFunctions",function(){return Ct}),e.d(n,"declareChildApplication",function(){return Ut}),e.d(n,"ensureJQuerySupport",function(){return Et}),e.d(n,"getAppNames",function(){return Dt}),e.d(n,"getAppStatus",function(){return xt}),e.d(n,"getMountedApps",function(){return jt}),e.d(n,"mountRootParcel",function(){return ot}),e.d(n,"navigateToUrl",function(){return pt}),e.d(n,"registerApplication",function(){return Mt}),e.d(n,"removeErrorHandler",function(){return g}),e.d(n,"setBootstrapMaxTime",function(){return q}),e.d(n,"setMountMaxTime",function(){return F}),e.d(n,"setUnloadMaxTime",function(){return K}),e.d(n,"setUnmountMaxTime",function(){return W}),e.d(n,"start",function(){return Kt}),e.d(n,"triggerAppChange",function(){return qt}),e.d(n,"unloadApplication",function(){return Lt}),e.d(n,"unloadChildApplication",function(){return It});var r=Object.freeze({get start(){return Kt},get ensureJQuerySupport(){return Et},get setBootstrapMaxTime(){return q},get setMountMaxTime(){return F},get setUnmountMaxTime(){return W},get setUnloadMaxTime(){return K},get registerApplication(){return Mt},get getMountedApps(){return jt},get getAppStatus(){return xt},get unloadApplication(){return Lt},get checkActivityFunctions(){return Ct},get getAppNames(){return Dt},get declareChildApplication(){return Ut},get unloadChildApplication(){return It},get navigateToUrl(){return pt},get triggerAppChange(){return qt},get addErrorHandler(){return v},get removeErrorHandler(){return g},get mountRootParcel(){return ot},get NOT_LOADED(){return y},get LOADING_SOURCE_CODE(){return b},get NOT_BOOTSTRAPPED(){return O},get BOOTSTRAPPING(){return E},get NOT_MOUNTED(){return P},get MOUNTING(){return T},get UPDATING(){return N},get LOAD_ERROR(){return j},get MOUNTED(){return A},get UNMOUNTING(){return _},get SKIP_BECAUSE_BROKEN(){return D}}),o=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).CustomEvent,i=function(){try{var t=new o("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?o:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e};function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(e,!0).forEach(function(n){a(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function p(t,n,e){return(p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&l(o,e.prototype),o}).apply(null,arguments)}function d(t){var n="function"==typeof Map?new Map:void 0;return(d=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return p(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,t)})(t)}var m=[];function h(t,n){var e=w(t,n);m.length?m.forEach(function(t){return t(e)}):setTimeout(function(){throw e})}function v(t){if("function"!=typeof t)throw Error("a single-spa error handler must be a function");m.push(t)}function g(t){if("function"!=typeof t)throw Error("a single-spa error handler must be a function");var n=!1;return m=m.filter(function(e){var r=e===t;return n=n||r,!r}),n}function w(t,n){var e,r=n.unmountThisParcel?"Parcel":"Application",o="".concat(r," '").concat(n.name,"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}e=t}else{console.warn("While ".concat(n.status,", '").concat(n.name,"' rejected its lifecycle function promise with a non-Error. This will cause stack traces to not be accurate."));try{e=Error(o+JSON.stringify(t))}catch(n){e=t}}e.appName=n.name,e.appOrParcelName=n.name;try{e.name=n.name}catch(t){}return e}var y="NOT_LOADED",b="LOADING_SOURCE_CODE",O="NOT_BOOTSTRAPPED",E="BOOTSTRAPPING",P="NOT_MOUNTED",T="MOUNTING",A="MOUNTED",N="UPDATING",_="UNMOUNTING",S="UNLOADING",j="LOAD_ERROR",D="SKIP_BECAUSE_BROKEN";function x(t){return t.status===A}function U(t){return!x(t)}function M(t){return t.status!==y&&t.status!==b&&t.status!==j}function C(t){return!M(t)}function R(t){try{return t.activeWhen(window.location)}catch(n){h(n,t),t.status=D}}function I(t){try{return!t.activeWhen(window.location)}catch(n){h(n,t),t.status=D}}function L(t){return t!==D&&(!t||t.status!==D)}function B(t){return t.status!==j||(new Date).getTime()-t.loadErrorTime>=200}function G(t){return t.name}var k={bootstrap:{millis:4e3,dieOnTimeout:!1},mount:{millis:3e3,dieOnTimeout:!1},unmount:{millis:3e3,dieOnTimeout:!1},unload:{millis:3e3,dieOnTimeout:!1}};function q(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("bootstrap max time must be a positive integer number of milliseconds");k.bootstrap={millis:t,dieOnTimeout:n}}function F(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("mount max time must be a positive integer number of milliseconds");k.mount={millis:t,dieOnTimeout:n}}function W(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("unmount max time must be a positive integer number of milliseconds");k.unmount={millis:t,dieOnTimeout:n}}function K(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"!=typeof t||t<=0)throw Error("unload max time must be a positive integer number of milliseconds");k.unload={millis:t,dieOnTimeout:n}}function H(t,n,e){var r=1e3;return new Promise(function(o,i){var u=!1,a=!1;function c(t){if(!u)if(!0===t)a=!0,e.dieOnTimeout?i("".concat(n," did not resolve or reject for ").concat(e.millis," milliseconds")):console.error("".concat(n," did not resolve or reject for ").concat(e.millis," milliseconds -- we're no longer going to warn you about it."));else if(!a){var o=t,s=o*r;console.warn("".concat(n," did not resolve or reject within ").concat(s," milliseconds")),s+r<e.millis&&setTimeout(function(){return c(o+1)},r)}}t.then(function(t){u=!0,o(t)}).catch(function(t){u=!0,i(t)}),setTimeout(function(){return c(1)},r),setTimeout(function(){return c(!0)},e.millis)})}function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s({},k,{},t)}function J(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function Q(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!J(n,function(t){return"function"!=typeof t})));var n}function V(t,n){return 0===(t=Array.isArray(t)?t:[t]).length&&(t=[function(){return Promise.resolve()}]),function(e){return new Promise(function(r,o){!function i(u){var a=t[u](e);z(a)?a.then(function(){u===t.length-1?r():i(u+1)}).catch(o):o("".concat(n," at index ").concat(u," did not return a promise"))}(0)})}}function z(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function X(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){return t.status!==O?t:(t.status=E,H(t.bootstrap(at(t)),"Bootstrapping appOrParcel '".concat(t.name,"'"),t.timeouts.bootstrap).then(function(){return t.status=P,t}).catch(function(e){if(t.status=D,n)throw w(e,t);return h(e,t),t}))})}function Y(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){if(t.status!==A)return t;t.status=_;var e=Object.keys(t.parcels).map(function(n){return t.parcels[n].unmountThisParcel()});return Promise.all(e).then(r,function(e){return r().then(function(){var r=Error(e.message);if(n){var o=w(r,t);throw t.status=D,o}h(r,t),t.status=D})}).then(function(){return t});function r(){return H(t.unmount(at(t)),"Unmounting application ".concat(t.name,"'"),t.timeouts.unmount).then(function(){t.status=P}).catch(function(e){if(n){var r=w(e,t);throw t.status=D,r}h(e,t),t.status=D})}})}var Z=!1,tt=!1;function nt(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){return t.status!==P?t:(Z||(window.dispatchEvent(new i("single-spa:before-first-mount")),Z=!0),H(t.mount(at(t)),"Mounting application '".concat(t.name,"'"),t.timeouts.mount).then(function(){return t.status=A,tt||(window.dispatchEvent(new i("single-spa:first-mount")),tt=!0),t}).catch(function(e){return t.status=A,Y(t).then(r,r);function r(){if(n){var r=w(e,t);throw t.status=D,r}return h(e,t),t.status=D,t}}))})}var et=0,rt={parcels:{}};function ot(){return it.apply(rt,arguments)}function it(t,n){var e=this;if(!t||"object"!==u(t)&&"function"!=typeof t)throw Error("Cannot mount parcel without a config object or config loading function");if(t.name&&"string"!=typeof t.name)throw Error("Parcel name must be a string, if provided");if("object"!==u(n))throw Error("Parcel ".concat(name," has invalid customProps -- must be an object"));if(!n.domElement)throw Error("Parcel ".concat(name," cannot be mounted without a domElement provided as a prop"));var r,o=et++,i="function"==typeof t,a=i?t:function(){return Promise.resolve(t)},c={id:o,parcels:{},status:i?b:O,customProps:n,parentName:e.name,unmountThisParcel:function(){if(c.status!==A)throw Error("Cannot unmount parcel '".concat(name,"' -- it is in a ").concat(c.status," status"));return Y(c,!0).then(function(t){return c.parentName&&delete e.parcels[c.id],t}).then(function(t){return f(t),t}).catch(function(t){throw c.status=D,l(t),t})}};e.parcels[o]=c;var s=a();if(!s||"function"!=typeof s.then)throw Error("When mounting a parcel, the config loading function must return a promise that resolves with the parcel config");var f,l,p=(s=s.then(function(t){if(!t)throw Error("When mounting a parcel, the config loading function returned a promise that did not resolve with a parcel config");var n=t.name||"parcel-".concat(o);if(!Q(t.bootstrap))throw Error("Parcel ".concat(n," must have a valid bootstrap function"));if(!Q(t.mount))throw Error("Parcel ".concat(n," must have a valid mount function"));if(!Q(t.unmount))throw Error("Parcel ".concat(n," must have a valid unmount function"));if(t.update&&!Q(t.update))throw Error("Parcel ".concat(n," provided an invalid update function"));var e=V(t.bootstrap),i=V(t.mount),u=V(t.unmount);c.status=O,c.name=n,c.bootstrap=e,c.mount=i,c.unmount=u,c.timeouts=$(t.timeouts),t.update&&(c.update=V(t.update),r.update=function(t){return c.customProps=t,ut(function(t){return Promise.resolve().then(function(){if(t.status!==A)throw Error("Cannot update parcel '".concat(t.name,"' because it is not mounted"));return t.status=N,H(t.update(at(t)),"Updating parcel '".concat(t.name,"'"),t.timeouts.mount).then(function(){return t.status=A,t}).catch(function(n){var e=w(n,t);throw t.status=D,e})})}(c))})})).then(function(){return X(c,!0)}),d=p.then(function(){return nt(c,!0)}),m=new Promise(function(t,n){f=t,l=n});return r={mount:function(){return ut(Promise.resolve().then(function(){if(c.status!==P)throw Error("Cannot mount parcel '".concat(name,"' -- it is in a ").concat(c.status," status"));return e.parcels[o]=c,nt(c)}))},unmount:function(){return ut(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:ut(s),bootstrapPromise:ut(p),mountPromise:ut(d),unmountPromise:ut(m)}}function ut(t){return t.then(function(){return null})}function at(t){var n=s({},t.customProps,{name:t.name,mountParcel:it.bind(t),singleSpa:r});return t.unmountThisParcel&&(n.unmountSelf=t.unmountThisParcel),n}var ct=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}(this,f(n).apply(this,arguments))}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(n,d(Error)),n}();function st(t){return Promise.resolve().then(function(){return t.status!==y&&t.status!==j?t:(t.status=b,Promise.resolve().then(function(){var e=t.loadImpl(at(t));if(!z(e))throw new ct("single-spa loading function did not return a promise. Check the second argument to registerApplication('".concat(t.name,"', loadingFunction, activityFunction)"));return e.then(function(e){var r;return t.loadErrorTime=null,"object"!==u(n=e)&&(r="does not export anything"),Q(n.bootstrap)||(r="does not export a bootstrap function or array of functions"),Q(n.mount)||(r="does not export a mount function or array of functions"),Q(n.unmount)||(r="does not export an unmount function or array of functions"),r?(console.error("The loading function for single-spa application '".concat(t.name,"' resolved with the following, which does not have bootstrap, mount, and unmount functions"),n),h(r,t),t.status=D,t):(n.devtools&&n.devtools.overlays&&(t.devtools.overlays=s({},t.devtools.overlays,{},n.devtools.overlays)),t.status=O,t.bootstrap=V(n.bootstrap,"App '".concat(t.name,"' bootstrap function")),t.mount=V(n.mount,"App '".concat(t.name,"' mount function")),t.unmount=V(n.unmount,"App '".concat(t.name,"' unmount function")),t.unload=V(n.unload||[],"App '".concat(t.name,"' unload function")),t.timeouts=$(n.timeouts),t)})}).catch(function(n){return h(n,t),n instanceof ct?t.status=D:(t.status=j,t.loadErrorTime=(new Date).getTime()),t}));var n})}var ft={hashchange:[],popstate:[]},lt=["hashchange","popstate"];function pt(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error("singleSpaNavigate must be either called with a string url, with an <a> tag as its context, or with an event whose currentTarget is an <a> tag");n=t.currentTarget.href,t.preventDefault()}var r=bt(window.location.href),o=bt(n);if(0===n.indexOf("#"))window.location.hash="#"+o.anchor;else if(r.host!==o.host&&o.host){if(e.isTestingEnv)return{wouldHaveReloadedThePage:!0};window.location.href=n}else!function(t,n){return n===t||n==="/"+t}(o.path+"?"+o.query,r.path+"?"+r.query)?window.history.pushState(null,null,n):window.location.hash="#"+o.anchor}function dt(t){var n=this;if(t){var e=t[0].type;lt.indexOf(e)>=0&&ft[e].forEach(function(e){e.apply(n,t)})}}function mt(){Ft([],arguments)}window.addEventListener("hashchange",mt),window.addEventListener("popstate",mt);var ht=window.addEventListener,vt=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&lt.indexOf(t)>=0)||J(ft[t],function(t){return t===n}))return ht.apply(this,arguments);ft[t].push(n)},window.removeEventListener=function(t,n){if(!("function"==typeof n&&lt.indexOf(t)>=0))return vt.apply(this,arguments);ft[t]=ft[t].filter(function(t){return t!==n})};var gt=window.history.pushState;window.history.pushState=function(t){var n=gt.apply(this,arguments);return mt(yt(t)),n};var wt=window.history.replaceState;function yt(t){try{return new PopStateEvent("popstate",{state:t})}catch(e){var n=document.createEvent("PopStateEvent");return n.initPopStateEvent("popstate",!1,!1,t),n}}function bt(t){for(var n={strictMode:!0,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},e=n.parser.strict.exec(t),r={},o=14;o--;)r[n.key[o]]=e[o]||"";return r[n.q.name]={},r[n.key[12]].replace(n.q.parser,function(t,e,o){e&&(r[n.q.name][e]=o)}),r}window.history.replaceState=function(t){var n=wt.apply(this,arguments);return mt(yt(t)),n},window.singleSpaNavigate=pt;var Ot=!1;function Et(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!Ot){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return Pt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return Pt.call(this,e,window.removeEventListener,t,n,arguments)},Ot=!0}}function Pt(t,n,e,r,o){return"string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach(function(t){lt.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""))}),""===e.trim()?this:t.apply(this,o))}var Tt={};function At(t){return Promise.resolve().then(function(){var n=Tt[t.name];return n?t.status===y?(Nt(t,n),t):t.status===S?n.promise.then(function(){return t}):t.status!==P?t:(t.status=S,H(t.unload(at(t)),"Unloading application '".concat(t.name,"'"),t.timeouts.unload).then(function(){return Nt(t,n),t}).catch(function(e){return function(t,n,e){delete Tt[t.name],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,h(e,t),t.status=D,n.reject(e)}(t,n,e),t})):t})}function Nt(t,n){delete Tt[t.name],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=y,n.resolve()}function _t(t,n,e,r){Tt[t.name]={app:t,resolve:e,reject:r},Object.defineProperty(Tt[t.name],"promise",{get:n})}var St=[];function jt(){return St.filter(x).map(G)}function Dt(){return St.map(G)}function xt(t){var n=J(St,function(n){return n.name===t});return n?n.status:null}function Ut(t,n,e){return console.warn('declareChildApplication is deprecated and will be removed in the next major version, use "registerApplication" instead'),Mt(t,n,e)}function Mt(t,n,e){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("string"!=typeof t||0===t.length)throw Error("The first argument must be a non-empty string 'appName'");if(-1!==Dt().indexOf(t))throw Error("There is already an app declared with name ".concat(t));if("object"!==u(o)||Array.isArray(o))throw Error("customProps must be an object");if(!n)throw Error("The application or loading function is required");if(r="function"!=typeof n?function(){return Promise.resolve(n)}:n,"function"!=typeof e)throw Error("The activeWhen argument must be a function");St.push({loadErrorTime:null,name:t,loadImpl:r,activeWhen:e,status:y,parcels:{},devtools:{overlays:{options:{},selectors:[]}},customProps:o}),Et(),Ft()}function Ct(t){for(var n=[],e=0;e<St.length;e++)St[e].activeWhen(t)&&n.push(St[e].name);return n}function Rt(){return St.filter(L).filter(B).filter(C).filter(R)}function It(t,n){return console.warn('unloadChildApplication is deprecated and will be removed in the next major version, use "unloadApplication" instead'),Lt(t,n)}function Lt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error("unloadApplication requires a string 'appName'");var e=J(St,function(n){return n.name===t});if(!e)throw Error("Could not unload application '".concat(t,"' because no such application has been registered"));var r,o=function(t){return Tt[t]}(e.name);if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise(function(t,n){_t(e,function(){return i},t,n)});return i}return o?(r=o.promise,Bt(e,o.resolve,o.reject)):r=new Promise(function(t,n){_t(e,function(){return r},t,n),Bt(e,t,n)}),r}function Bt(t,n,e){Y(t).then(At).then(function(){n(),setTimeout(function(){Ft()})}).catch(e)}var Gt=!1,kt=[];function qt(){return Ft()}function Ft(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(Gt)return new Promise(function(t,e){kt.push({resolve:t,reject:e,eventArguments:n})});Gt=!0;var e=!0;return Wt?Promise.resolve().then(function(){window.dispatchEvent(new i("single-spa:before-routing-event",u()));var n=Object.keys(Tt).map(function(t){return Tt[t].app}).filter(U).map(At),a=St.filter(L).filter(x).filter(I).map(Y).map(function(t){return t.then(At)}).concat(n);a.length>0&&(e=!1);var c=Promise.all(a),s=Rt(),f=s.map(function(t){return st(t).then(X).then(function(t){return c.then(function(){return nt(t)})})});f.length>0&&(e=!1);var l=St.filter(L).filter(U).filter(M).filter(R).filter(function(t){return s.indexOf(t)<0}).map(function(t){return X(t).then(function(){return c}).then(function(){return nt(t)})});return l.length>0&&(e=!1),c.catch(function(t){throw o(),t}).then(function(){return o(),Promise.all(f.concat(l)).catch(function(n){throw t.forEach(function(t){return t.reject(n)}),n}).then(function(){return r(!1)})})}):Promise.resolve().then(function(){var t=Rt().map(st);return t.length>0&&(e=!1),Promise.all(t).then(r).catch(function(t){throw o(),t})});function r(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=jt();n&&o(),t.forEach(function(t){return t.resolve(r)});try{var a=e?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new i(a,u())),window.dispatchEvent(new i("single-spa:routing-event",u()))}catch(t){setTimeout(function(){throw t})}if(Gt=!1,kt.length>0){var c=kt;kt=[],Ft(c)}return r}function o(){t.forEach(function(t){dt(t.eventArguments)}),dt(n)}function u(){var t={detail:{}};return n&&n[0]&&(t.detail.originalEvent=n[0]),t}}var Wt=!1;function Kt(){Wt=!0,Ft()}setTimeout(function(){Wt||console.warn("singleSpa.start() has not been called, ".concat(5e3,"ms after single-spa was loaded. Before start() is called, apps can be declared and loaded, but not bootstrapped or mounted. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-api.md#start"))},5e3);var Ht={getRawAppData:function(){return[].concat(St)},reroute:Ft,NOT_LOADED:y,toLoadPromise:st,toBootstrapPromise:X,unregisterApplication:function(t){if(!St.find(function(n){return n.name===t}))throw Error("Cannot unregister application '".concat(t,"' because no such application has been registered"));return Lt(t).then(function(){var n=St.findIndex(function(n){return n.name===t});St.splice(n,1)})}};window&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Ht)}.call(this,e(2))},function(t,n,e){"use strict";var r,o=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n}(e(3)),i=e(1);((r=i)&&r.__esModule?r:{default:r}).default.forEach(function(t){!function(t){o.registerApplication(t.name,function(){return e(0)(t.name)},function(n){return!!t.base||n.hash.startsWith("#/"+t.name)})}(t)}),o.start()}]);
//# sourceMappingURL=loadProgram.js.map