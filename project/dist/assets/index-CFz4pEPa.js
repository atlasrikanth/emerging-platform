(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var Vh={exports:{}},Hs={},Wh={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oi=Symbol.for("react.element"),e1=Symbol.for("react.portal"),t1=Symbol.for("react.fragment"),n1=Symbol.for("react.strict_mode"),r1=Symbol.for("react.profiler"),o1=Symbol.for("react.provider"),a1=Symbol.for("react.context"),i1=Symbol.for("react.forward_ref"),s1=Symbol.for("react.suspense"),u1=Symbol.for("react.memo"),l1=Symbol.for("react.lazy"),Od=Symbol.iterator;function c1(e){return e===null||typeof e!="object"?null:(e=Od&&e[Od]||e["@@iterator"],typeof e=="function"?e:null)}var Uh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$h=Object.assign,jh={};function Ko(e,t,n){this.props=e,this.context=t,this.refs=jh,this.updater=n||Uh}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ko.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hh(){}Hh.prototype=Ko.prototype;function Gc(e,t,n){this.props=e,this.context=t,this.refs=jh,this.updater=n||Uh}var qc=Gc.prototype=new Hh;qc.constructor=Gc;$h(qc,Ko.prototype);qc.isPureReactComponent=!0;var Fd=Array.isArray,Gh=Object.prototype.hasOwnProperty,Kc={current:null},qh={key:!0,ref:!0,__self:!0,__source:!0};function Kh(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Gh.call(t,r)&&!qh.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:oi,type:e,key:a,ref:i,props:o,_owner:Kc.current}}function p1(e,t){return{$$typeof:oi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xc(e){return typeof e=="object"&&e!==null&&e.$$typeof===oi}function d1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Md=/\/+/g;function Tu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?d1(""+e.key):t.toString(36)}function Wi(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case oi:case e1:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Tu(i,0):r,Fd(o)?(n="",e!=null&&(n=e.replace(Md,"$&/")+"/"),Wi(o,t,n,"",function(l){return l})):o!=null&&(Xc(o)&&(o=p1(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Md,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Fd(e))for(var s=0;s<e.length;s++){a=e[s];var u=r+Tu(a,s);i+=Wi(a,t,n,u,o)}else if(u=c1(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=r+Tu(a,s++),i+=Wi(a,t,n,u,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function mi(e,t,n){if(e==null)return e;var r=[],o=0;return Wi(e,r,"","",function(a){return t.call(n,a,o++)}),r}function f1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},Ui={transition:null},h1={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Ui,ReactCurrentOwner:Kc};function Xh(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:mi,forEach:function(e,t,n){mi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mi(e,function(){t++}),t},toArray:function(e){return mi(e,function(t){return t})||[]},only:function(e){if(!Xc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Component=Ko;pe.Fragment=t1;pe.Profiler=r1;pe.PureComponent=Gc;pe.StrictMode=n1;pe.Suspense=s1;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h1;pe.act=Xh;pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$h({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Kc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Gh.call(t,u)&&!qh.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var l=0;l<u;l++)s[l]=arguments[l+2];r.children=s}return{$$typeof:oi,type:e.type,key:o,ref:a,props:r,_owner:i}};pe.createContext=function(e){return e={$$typeof:a1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o1,_context:e},e.Consumer=e};pe.createElement=Kh;pe.createFactory=function(e){var t=Kh.bind(null,e);return t.type=e,t};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:i1,render:e}};pe.isValidElement=Xc;pe.lazy=function(e){return{$$typeof:l1,_payload:{_status:-1,_result:e},_init:f1}};pe.memo=function(e,t){return{$$typeof:u1,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=Ui.transition;Ui.transition={};try{e()}finally{Ui.transition=t}};pe.unstable_act=Xh;pe.useCallback=function(e,t){return ft.current.useCallback(e,t)};pe.useContext=function(e){return ft.current.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};pe.useEffect=function(e,t){return ft.current.useEffect(e,t)};pe.useId=function(){return ft.current.useId()};pe.useImperativeHandle=function(e,t,n){return ft.current.useImperativeHandle(e,t,n)};pe.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return ft.current.useMemo(e,t)};pe.useReducer=function(e,t,n){return ft.current.useReducer(e,t,n)};pe.useRef=function(e){return ft.current.useRef(e)};pe.useState=function(e){return ft.current.useState(e)};pe.useSyncExternalStore=function(e,t,n){return ft.current.useSyncExternalStore(e,t,n)};pe.useTransition=function(){return ft.current.useTransition()};pe.version="18.3.1";Wh.exports=pe;var gt=Wh.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1=gt,v1=Symbol.for("react.element"),g1=Symbol.for("react.fragment"),y1=Object.prototype.hasOwnProperty,x1=m1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w1={key:!0,ref:!0,__self:!0,__source:!0};function Yh(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)y1.call(t,r)&&!w1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:v1,type:e,key:a,ref:i,props:o,_owner:x1.current}}Hs.Fragment=g1;Hs.jsx=Yh;Hs.jsxs=Yh;Vh.exports=Hs;var he=Vh.exports,Qh={exports:{}},Pt={},Zh={exports:{}},Jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,P){var L=O.length;O.push(P);e:for(;0<L;){var q=L-1>>>1,K=O[q];if(0<o(K,P))O[q]=P,O[L]=K,L=q;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var P=O[0],L=O.pop();if(L!==P){O[0]=L;e:for(var q=0,K=O.length,te=K>>>1;q<te;){var ne=2*(q+1)-1,ie=O[ne],oe=ne+1,ue=O[oe];if(0>o(ie,L))oe<K&&0>o(ue,ie)?(O[q]=ue,O[oe]=L,q=oe):(O[q]=ie,O[ne]=L,q=ne);else if(oe<K&&0>o(ue,L))O[q]=ue,O[oe]=L,q=oe;else break e}}return P}function o(O,P){var L=O.sortIndex-P.sortIndex;return L!==0?L:O.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],l=[],c=1,p=null,d=3,f=!1,m=!1,v=!1,y=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(O){for(var P=n(l);P!==null;){if(P.callback===null)r(l);else if(P.startTime<=O)r(l),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(l)}}function w(O){if(v=!1,x(O),!m)if(n(u)!==null)m=!0,$(b);else{var P=n(l);P!==null&&H(w,P.startTime-O)}}function b(O,P){m=!1,v&&(v=!1,h(N),N=-1),f=!0;var L=d;try{for(x(P),p=n(u);p!==null&&(!(p.expirationTime>P)||O&&!D());){var q=p.callback;if(typeof q=="function"){p.callback=null,d=p.priorityLevel;var K=q(p.expirationTime<=P);P=e.unstable_now(),typeof K=="function"?p.callback=K:p===n(u)&&r(u),x(P)}else r(u);p=n(u)}if(p!==null)var te=!0;else{var ne=n(l);ne!==null&&H(w,ne.startTime-P),te=!1}return te}finally{p=null,d=L,f=!1}}var S=!1,k=null,N=-1,R=5,T=-1;function D(){return!(e.unstable_now()-T<R)}function F(){if(k!==null){var O=e.unstable_now();T=O;var P=!0;try{P=k(!0,O)}finally{P?U():(S=!1,k=null)}}else S=!1}var U;if(typeof g=="function")U=function(){g(F)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,V=W.port2;W.port1.onmessage=F,U=function(){V.postMessage(null)}}else U=function(){y(F,0)};function $(O){k=O,S||(S=!0,U())}function H(O,P){N=y(function(){O(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){m||f||(m=!0,$(b))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(O){switch(d){case 1:case 2:case 3:var P=3;break;default:P=d}var L=d;d=P;try{return O()}finally{d=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var L=d;d=O;try{return P()}finally{d=L}},e.unstable_scheduleCallback=function(O,P,L){var q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?q+L:q):L=q,O){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=L+K,O={id:c++,callback:P,priorityLevel:O,startTime:L,expirationTime:K,sortIndex:-1},L>q?(O.sortIndex=L,t(l,O),n(u)===null&&O===n(l)&&(v?(h(N),N=-1):v=!0,H(w,L-q))):(O.sortIndex=K,t(u,O),m||f||(m=!0,$(b))),O},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(O){var P=d;return function(){var L=d;d=P;try{return O.apply(this,arguments)}finally{d=L}}}})(Jh);Zh.exports=Jh;var b1=Zh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C1=gt,Mt=b1;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var em=new Set,Oa={};function Kr(e,t){zo(e,t),zo(e+"Capture",t)}function zo(e,t){for(Oa[e]=t,e=0;e<t.length;e++)em.add(t[e])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nl=Object.prototype.hasOwnProperty,S1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pd={},Ld={};function E1(e){return Nl.call(Ld,e)?!0:Nl.call(Pd,e)?!1:S1.test(e)?Ld[e]=!0:(Pd[e]=!0,!1)}function N1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k1(e,t,n,r){if(t===null||typeof t>"u"||N1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yc=/[\-:]([a-z])/g;function Qc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yc,Qc);tt[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yc,Qc);tt[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yc,Qc);tt[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zc(e,t,n,r){var o=tt.hasOwnProperty(t)?tt[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(k1(t,n,o,r)&&(n=null),r||o===null?E1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $n=C1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vi=Symbol.for("react.element"),ho=Symbol.for("react.portal"),mo=Symbol.for("react.fragment"),Jc=Symbol.for("react.strict_mode"),kl=Symbol.for("react.profiler"),tm=Symbol.for("react.provider"),nm=Symbol.for("react.context"),ep=Symbol.for("react.forward_ref"),Il=Symbol.for("react.suspense"),Rl=Symbol.for("react.suspense_list"),tp=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),rm=Symbol.for("react.offscreen"),Bd=Symbol.iterator;function na(e){return e===null||typeof e!="object"?null:(e=Bd&&e[Bd]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Object.assign,Au;function ma(e){if(Au===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Au=t&&t[1]||""}return`
`+Au+e}var _u=!1;function Du(e,t){if(!e||_u)return"";_u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var o=l.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,s=a.length-1;1<=i&&0<=s&&o[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==a[s]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{_u=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ma(e):""}function I1(e){switch(e.tag){case 5:return ma(e.type);case 16:return ma("Lazy");case 13:return ma("Suspense");case 19:return ma("SuspenseList");case 0:case 2:case 15:return e=Du(e.type,!1),e;case 11:return e=Du(e.type.render,!1),e;case 1:return e=Du(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mo:return"Fragment";case ho:return"Portal";case kl:return"Profiler";case Jc:return"StrictMode";case Il:return"Suspense";case Rl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nm:return(e.displayName||"Context")+".Consumer";case tm:return(e._context.displayName||"Context")+".Provider";case ep:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tp:return t=e.displayName||null,t!==null?t:Tl(e.type)||"Memo";case Kn:t=e._payload,e=e._init;try{return Tl(e(t))}catch{}}return null}function R1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(t);case 8:return t===Jc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function om(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T1(e){var t=om(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gi(e){e._valueTracker||(e._valueTracker=T1(e))}function am(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=om(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function es(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Al(e,t){var n=t.checked;return Oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function im(e,t){t=t.checked,t!=null&&Zc(e,"checked",t,!1)}function _l(e,t){im(e,t);var n=hr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Dl(e,t.type,hr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Dl(e,t,n){(t!=="number"||es(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var va=Array.isArray;function Io(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return Oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(va(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hr(n)}}function sm(e,t){var n=hr(t.value),r=hr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ud(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function um(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?um(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yi,lm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yi=yi||document.createElement("div"),yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A1=["Webkit","ms","Moz","O"];Object.keys(ba).forEach(function(e){A1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ba[t]=ba[e]})});function cm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ba.hasOwnProperty(e)&&ba[e]?(""+t).trim():t+"px"}function pm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=cm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var _1=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ml(e,t){if(t){if(_1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function Pl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ll=null;function np(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,Ro=null,To=null;function $d(e){if(e=si(e)){if(typeof Bl!="function")throw Error(G(280));var t=e.stateNode;t&&(t=Ys(t),Bl(e.stateNode,e.type,t))}}function dm(e){Ro?To?To.push(e):To=[e]:Ro=e}function fm(){if(Ro){var e=Ro,t=To;if(To=Ro=null,$d(e),t)for(e=0;e<t.length;e++)$d(t[e])}}function hm(e,t){return e(t)}function mm(){}var Ou=!1;function vm(e,t,n){if(Ou)return e(t,n);Ou=!0;try{return hm(e,t,n)}finally{Ou=!1,(Ro!==null||To!==null)&&(mm(),fm())}}function Ma(e,t){var n=e.stateNode;if(n===null)return null;var r=Ys(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var zl=!1;if(Mn)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){zl=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{zl=!1}function D1(e,t,n,r,o,a,i,s,u){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(c){this.onError(c)}}var Ca=!1,ts=null,ns=!1,Vl=null,O1={onError:function(e){Ca=!0,ts=e}};function F1(e,t,n,r,o,a,i,s,u){Ca=!1,ts=null,D1.apply(O1,arguments)}function M1(e,t,n,r,o,a,i,s,u){if(F1.apply(this,arguments),Ca){if(Ca){var l=ts;Ca=!1,ts=null}else throw Error(G(198));ns||(ns=!0,Vl=l)}}function Xr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jd(e){if(Xr(e)!==e)throw Error(G(188))}function P1(e){var t=e.alternate;if(!t){if(t=Xr(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return jd(o),e;if(a===r)return jd(o),t;a=a.sibling}throw Error(G(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function ym(e){return e=P1(e),e!==null?xm(e):null}function xm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xm(e);if(t!==null)return t;e=e.sibling}return null}var wm=Mt.unstable_scheduleCallback,Hd=Mt.unstable_cancelCallback,L1=Mt.unstable_shouldYield,B1=Mt.unstable_requestPaint,We=Mt.unstable_now,z1=Mt.unstable_getCurrentPriorityLevel,rp=Mt.unstable_ImmediatePriority,bm=Mt.unstable_UserBlockingPriority,rs=Mt.unstable_NormalPriority,V1=Mt.unstable_LowPriority,Cm=Mt.unstable_IdlePriority,Gs=null,vn=null;function W1(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Gs,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:j1,U1=Math.log,$1=Math.LN2;function j1(e){return e>>>=0,e===0?32:31-(U1(e)/$1|0)|0}var xi=64,wi=4194304;function ga(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function os(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=ga(s):(a&=i,a!==0&&(r=ga(a)))}else i=n&~o,i!==0?r=ga(i):a!==0&&(r=ga(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-en(t),o=1<<n,r|=e[n],t&=~o;return r}function H1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-en(a),s=1<<i,u=o[i];u===-1?(!(s&n)||s&r)&&(o[i]=H1(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sm(){var e=xi;return xi<<=1,!(xi&4194240)&&(xi=64),e}function Fu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-en(t),e[t]=n}function q1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-en(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function op(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-en(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var we=0;function Em(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nm,ap,km,Im,Rm,Ul=!1,bi=[],rr=null,or=null,ar=null,Pa=new Map,La=new Map,Yn=[],K1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gd(e,t){switch(e){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Pa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(t.pointerId)}}function oa(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=si(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function X1(e,t,n,r,o){switch(t){case"focusin":return rr=oa(rr,e,t,n,r,o),!0;case"dragenter":return or=oa(or,e,t,n,r,o),!0;case"mouseover":return ar=oa(ar,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Pa.set(a,oa(Pa.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,La.set(a,oa(La.get(a)||null,e,t,n,r,o)),!0}return!1}function Tm(e){var t=Ar(e.target);if(t!==null){var n=Xr(t);if(n!==null){if(t=n.tag,t===13){if(t=gm(n),t!==null){e.blockedOn=t,Rm(e.priority,function(){km(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ll=r,n.target.dispatchEvent(r),Ll=null}else return t=si(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function qd(e,t,n){$i(e)&&n.delete(t)}function Y1(){Ul=!1,rr!==null&&$i(rr)&&(rr=null),or!==null&&$i(or)&&(or=null),ar!==null&&$i(ar)&&(ar=null),Pa.forEach(qd),La.forEach(qd)}function aa(e,t){e.blockedOn===t&&(e.blockedOn=null,Ul||(Ul=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,Y1)))}function Ba(e){function t(o){return aa(o,e)}if(0<bi.length){aa(bi[0],e);for(var n=1;n<bi.length;n++){var r=bi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rr!==null&&aa(rr,e),or!==null&&aa(or,e),ar!==null&&aa(ar,e),Pa.forEach(t),La.forEach(t),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)Tm(n),n.blockedOn===null&&Yn.shift()}var Ao=$n.ReactCurrentBatchConfig,as=!0;function Q1(e,t,n,r){var o=we,a=Ao.transition;Ao.transition=null;try{we=1,ip(e,t,n,r)}finally{we=o,Ao.transition=a}}function Z1(e,t,n,r){var o=we,a=Ao.transition;Ao.transition=null;try{we=4,ip(e,t,n,r)}finally{we=o,Ao.transition=a}}function ip(e,t,n,r){if(as){var o=$l(e,t,n,r);if(o===null)ju(e,t,r,is,n),Gd(e,r);else if(X1(o,e,t,n,r))r.stopPropagation();else if(Gd(e,r),t&4&&-1<K1.indexOf(e)){for(;o!==null;){var a=si(o);if(a!==null&&Nm(a),a=$l(e,t,n,r),a===null&&ju(e,t,r,is,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else ju(e,t,r,null,n)}}var is=null;function $l(e,t,n,r){if(is=null,e=np(r),e=Ar(e),e!==null)if(t=Xr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return is=e,null}function Am(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z1()){case rp:return 1;case bm:return 4;case rs:case V1:return 16;case Cm:return 536870912;default:return 16}default:return 16}}var Jn=null,sp=null,ji=null;function _m(){if(ji)return ji;var e,t=sp,n=t.length,r,o="value"in Jn?Jn.value:Jn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return ji=o.slice(e,1<r?1-r:void 0)}function Hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ci(){return!0}function Kd(){return!1}function Lt(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ci:Kd,this.isPropagationStopped=Kd,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),t}var Xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},up=Lt(Xo),ii=Oe({},Xo,{view:0,detail:0}),J1=Lt(ii),Mu,Pu,ia,qs=Oe({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ia&&(ia&&e.type==="mousemove"?(Mu=e.screenX-ia.screenX,Pu=e.screenY-ia.screenY):Pu=Mu=0,ia=e),Mu)},movementY:function(e){return"movementY"in e?e.movementY:Pu}}),Xd=Lt(qs),ex=Oe({},qs,{dataTransfer:0}),tx=Lt(ex),nx=Oe({},ii,{relatedTarget:0}),Lu=Lt(nx),rx=Oe({},Xo,{animationName:0,elapsedTime:0,pseudoElement:0}),ox=Lt(rx),ax=Oe({},Xo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ix=Lt(ax),sx=Oe({},Xo,{data:0}),Yd=Lt(sx),ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function px(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cx[e])?!!t[e]:!1}function lp(){return px}var dx=Oe({},ii,{key:function(e){if(e.key){var t=ux[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lp,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fx=Lt(dx),hx=Oe({},qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=Lt(hx),mx=Oe({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lp}),vx=Lt(mx),gx=Oe({},Xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),yx=Lt(gx),xx=Oe({},qs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wx=Lt(xx),bx=[9,13,27,32],cp=Mn&&"CompositionEvent"in window,Sa=null;Mn&&"documentMode"in document&&(Sa=document.documentMode);var Cx=Mn&&"TextEvent"in window&&!Sa,Dm=Mn&&(!cp||Sa&&8<Sa&&11>=Sa),Zd=" ",Jd=!1;function Om(e,t){switch(e){case"keyup":return bx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vo=!1;function Sx(e,t){switch(e){case"compositionend":return Fm(t);case"keypress":return t.which!==32?null:(Jd=!0,Zd);case"textInput":return e=t.data,e===Zd&&Jd?null:e;default:return null}}function Ex(e,t){if(vo)return e==="compositionend"||!cp&&Om(e,t)?(e=_m(),ji=sp=Jn=null,vo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dm&&t.locale!=="ko"?null:t.data;default:return null}}var Nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nx[e.type]:t==="textarea"}function Mm(e,t,n,r){dm(r),t=ss(t,"onChange"),0<t.length&&(n=new up("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ea=null,za=null;function kx(e){Gm(e,0)}function Ks(e){var t=xo(e);if(am(t))return e}function Ix(e,t){if(e==="change")return t}var Pm=!1;if(Mn){var Bu;if(Mn){var zu="oninput"in document;if(!zu){var tf=document.createElement("div");tf.setAttribute("oninput","return;"),zu=typeof tf.oninput=="function"}Bu=zu}else Bu=!1;Pm=Bu&&(!document.documentMode||9<document.documentMode)}function nf(){Ea&&(Ea.detachEvent("onpropertychange",Lm),za=Ea=null)}function Lm(e){if(e.propertyName==="value"&&Ks(za)){var t=[];Mm(t,za,e,np(e)),vm(kx,t)}}function Rx(e,t,n){e==="focusin"?(nf(),Ea=t,za=n,Ea.attachEvent("onpropertychange",Lm)):e==="focusout"&&nf()}function Tx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ks(za)}function Ax(e,t){if(e==="click")return Ks(t)}function _x(e,t){if(e==="input"||e==="change")return Ks(t)}function Dx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rn=typeof Object.is=="function"?Object.is:Dx;function Va(e,t){if(rn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Nl.call(t,o)||!rn(e[o],t[o]))return!1}return!0}function rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function of(e,t){var n=rf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rf(n)}}function Bm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zm(){for(var e=window,t=es();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=es(e.document)}return t}function pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ox(e){var t=zm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bm(n.ownerDocument.documentElement,n)){if(r!==null&&pp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=of(n,a);var i=of(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fx=Mn&&"documentMode"in document&&11>=document.documentMode,go=null,jl=null,Na=null,Hl=!1;function af(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hl||go==null||go!==es(r)||(r=go,"selectionStart"in r&&pp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Na&&Va(Na,r)||(Na=r,r=ss(jl,"onSelect"),0<r.length&&(t=new up("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=go)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yo={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},Vu={},Vm={};Mn&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function Xs(e){if(Vu[e])return Vu[e];if(!yo[e])return e;var t=yo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vm)return Vu[e]=t[n];return e}var Wm=Xs("animationend"),Um=Xs("animationiteration"),$m=Xs("animationstart"),jm=Xs("transitionend"),Hm=new Map,sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(e,t){Hm.set(e,t),Kr(t,[e])}for(var Wu=0;Wu<sf.length;Wu++){var Uu=sf[Wu],Mx=Uu.toLowerCase(),Px=Uu[0].toUpperCase()+Uu.slice(1);yr(Mx,"on"+Px)}yr(Wm,"onAnimationEnd");yr(Um,"onAnimationIteration");yr($m,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(jm,"onTransitionEnd");zo("onMouseEnter",["mouseout","mouseover"]);zo("onMouseLeave",["mouseout","mouseover"]);zo("onPointerEnter",["pointerout","pointerover"]);zo("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function uf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,M1(r,t,void 0,e),e.currentTarget=null}function Gm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,l=s.currentTarget;if(s=s.listener,u!==a&&o.isPropagationStopped())break e;uf(o,s,l),a=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,l=s.currentTarget,s=s.listener,u!==a&&o.isPropagationStopped())break e;uf(o,s,l),a=u}}}if(ns)throw e=Vl,ns=!1,Vl=null,e}function Ee(e,t){var n=t[Yl];n===void 0&&(n=t[Yl]=new Set);var r=e+"__bubble";n.has(r)||(qm(t,e,2,!1),n.add(r))}function $u(e,t,n){var r=0;t&&(r|=4),qm(n,e,r,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function Wa(e){if(!e[Ei]){e[Ei]=!0,em.forEach(function(n){n!=="selectionchange"&&(Lx.has(n)||$u(n,!1,e),$u(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,$u("selectionchange",!1,t))}}function qm(e,t,n,r){switch(Am(t)){case 1:var o=Q1;break;case 4:o=Z1;break;default:o=ip}n=o.bind(null,t,n,e),o=void 0,!zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ju(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Ar(s),i===null)return;if(u=i.tag,u===5||u===6){r=a=i;continue e}s=s.parentNode}}r=r.return}vm(function(){var l=a,c=np(n),p=[];e:{var d=Hm.get(e);if(d!==void 0){var f=up,m=e;switch(e){case"keypress":if(Hi(n)===0)break e;case"keydown":case"keyup":f=fx;break;case"focusin":m="focus",f=Lu;break;case"focusout":m="blur",f=Lu;break;case"beforeblur":case"afterblur":f=Lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=vx;break;case Wm:case Um:case $m:f=ox;break;case jm:f=yx;break;case"scroll":f=J1;break;case"wheel":f=wx;break;case"copy":case"cut":case"paste":f=ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Qd}var v=(t&4)!==0,y=!v&&e==="scroll",h=v?d!==null?d+"Capture":null:d;v=[];for(var g=l,x;g!==null;){x=g;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,h!==null&&(w=Ma(g,h),w!=null&&v.push(Ua(g,w,x)))),y)break;g=g.return}0<v.length&&(d=new f(d,m,null,n,c),p.push({event:d,listeners:v}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",d&&n!==Ll&&(m=n.relatedTarget||n.fromElement)&&(Ar(m)||m[Pn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(m=n.relatedTarget||n.toElement,f=l,m=m?Ar(m):null,m!==null&&(y=Xr(m),m!==y||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=l),f!==m)){if(v=Xd,w="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=Qd,w="onPointerLeave",h="onPointerEnter",g="pointer"),y=f==null?d:xo(f),x=m==null?d:xo(m),d=new v(w,g+"leave",f,n,c),d.target=y,d.relatedTarget=x,w=null,Ar(c)===l&&(v=new v(h,g+"enter",m,n,c),v.target=x,v.relatedTarget=y,w=v),y=w,f&&m)t:{for(v=f,h=m,g=0,x=v;x;x=ao(x))g++;for(x=0,w=h;w;w=ao(w))x++;for(;0<g-x;)v=ao(v),g--;for(;0<x-g;)h=ao(h),x--;for(;g--;){if(v===h||h!==null&&v===h.alternate)break t;v=ao(v),h=ao(h)}v=null}else v=null;f!==null&&lf(p,d,f,v,!1),m!==null&&y!==null&&lf(p,y,m,v,!0)}}e:{if(d=l?xo(l):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var b=Ix;else if(ef(d))if(Pm)b=_x;else{b=Tx;var S=Rx}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=Ax);if(b&&(b=b(e,l))){Mm(p,b,n,c);break e}S&&S(e,d,l),e==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&Dl(d,"number",d.value)}switch(S=l?xo(l):window,e){case"focusin":(ef(S)||S.contentEditable==="true")&&(go=S,jl=l,Na=null);break;case"focusout":Na=jl=go=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,af(p,n,c);break;case"selectionchange":if(Fx)break;case"keydown":case"keyup":af(p,n,c)}var k;if(cp)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else vo?Om(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Dm&&n.locale!=="ko"&&(vo||N!=="onCompositionStart"?N==="onCompositionEnd"&&vo&&(k=_m()):(Jn=c,sp="value"in Jn?Jn.value:Jn.textContent,vo=!0)),S=ss(l,N),0<S.length&&(N=new Yd(N,e,null,n,c),p.push({event:N,listeners:S}),k?N.data=k:(k=Fm(n),k!==null&&(N.data=k)))),(k=Cx?Sx(e,n):Ex(e,n))&&(l=ss(l,"onBeforeInput"),0<l.length&&(c=new Yd("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:l}),c.data=k))}Gm(p,t)})}function Ua(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ss(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Ma(e,n),a!=null&&r.unshift(Ua(e,a,o)),a=Ma(e,t),a!=null&&r.push(Ua(e,a,o))),e=e.return}return r}function ao(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lf(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,l=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&l!==null&&(s=l,o?(u=Ma(n,a),u!=null&&i.unshift(Ua(n,u,s))):o||(u=Ma(n,a),u!=null&&i.push(Ua(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Bx=/\r\n?/g,zx=/\u0000|\uFFFD/g;function cf(e){return(typeof e=="string"?e:""+e).replace(Bx,`
`).replace(zx,"")}function Ni(e,t,n){if(t=cf(t),cf(e)!==t&&n)throw Error(G(425))}function us(){}var Gl=null,ql=null;function Kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xl=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,pf=typeof Promise=="function"?Promise:void 0,Wx=typeof queueMicrotask=="function"?queueMicrotask:typeof pf<"u"?function(e){return pf.resolve(null).then(e).catch(Ux)}:Xl;function Ux(e){setTimeout(function(){throw e})}function Hu(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ba(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ba(t)}function ir(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),hn="__reactFiber$"+Yo,$a="__reactProps$"+Yo,Pn="__reactContainer$"+Yo,Yl="__reactEvents$"+Yo,$x="__reactListeners$"+Yo,jx="__reactHandles$"+Yo;function Ar(e){var t=e[hn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pn]||n[hn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[hn])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function si(e){return e=e[hn]||e[Pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function Ys(e){return e[$a]||null}var Ql=[],wo=-1;function xr(e){return{current:e}}function Ne(e){0>wo||(e.current=Ql[wo],Ql[wo]=null,wo--)}function Ce(e,t){wo++,Ql[wo]=e.current,e.current=t}var mr={},ut=xr(mr),xt=xr(!1),Vr=mr;function Vo(e,t){var n=e.type.contextTypes;if(!n)return mr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function wt(e){return e=e.childContextTypes,e!=null}function ls(){Ne(xt),Ne(ut)}function ff(e,t,n){if(ut.current!==mr)throw Error(G(168));Ce(ut,t),Ce(xt,n)}function Km(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(G(108,R1(e)||"Unknown",o));return Oe({},n,r)}function cs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mr,Vr=ut.current,Ce(ut,e),Ce(xt,xt.current),!0}function hf(e,t,n){var r=e.stateNode;if(!r)throw Error(G(169));n?(e=Km(e,t,Vr),r.__reactInternalMemoizedMergedChildContext=e,Ne(xt),Ne(ut),Ce(ut,e)):Ne(xt),Ce(xt,n)}var In=null,Qs=!1,Gu=!1;function Xm(e){In===null?In=[e]:In.push(e)}function Hx(e){Qs=!0,Xm(e)}function wr(){if(!Gu&&In!==null){Gu=!0;var e=0,t=we;try{var n=In;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}In=null,Qs=!1}catch(o){throw In!==null&&(In=In.slice(e+1)),wm(rp,wr),o}finally{we=t,Gu=!1}}return null}var bo=[],Co=0,ps=null,ds=0,Bt=[],zt=0,Wr=null,_n=1,Dn="";function Nr(e,t){bo[Co++]=ds,bo[Co++]=ps,ps=e,ds=t}function Ym(e,t,n){Bt[zt++]=_n,Bt[zt++]=Dn,Bt[zt++]=Wr,Wr=e;var r=_n;e=Dn;var o=32-en(r)-1;r&=~(1<<o),n+=1;var a=32-en(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,_n=1<<32-en(t)+o|n<<o|r,Dn=a+e}else _n=1<<a|n<<o|r,Dn=e}function dp(e){e.return!==null&&(Nr(e,1),Ym(e,1,0))}function fp(e){for(;e===ps;)ps=bo[--Co],bo[Co]=null,ds=bo[--Co],bo[Co]=null;for(;e===Wr;)Wr=Bt[--zt],Bt[zt]=null,Dn=Bt[--zt],Bt[zt]=null,_n=Bt[--zt],Bt[zt]=null}var Ft=null,_t=null,ke=!1,Qt=null;function Qm(e,t){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ft=e,_t=ir(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ft=e,_t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wr!==null?{id:_n,overflow:Dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ft=e,_t=null,!0):!1;default:return!1}}function Zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jl(e){if(ke){var t=_t;if(t){var n=t;if(!mf(e,t)){if(Zl(e))throw Error(G(418));t=ir(n.nextSibling);var r=Ft;t&&mf(e,t)?Qm(r,n):(e.flags=e.flags&-4097|2,ke=!1,Ft=e)}}else{if(Zl(e))throw Error(G(418));e.flags=e.flags&-4097|2,ke=!1,Ft=e}}}function vf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ft=e}function ki(e){if(e!==Ft)return!1;if(!ke)return vf(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Kl(e.type,e.memoizedProps)),t&&(t=_t)){if(Zl(e))throw Zm(),Error(G(418));for(;t;)Qm(e,t),t=ir(t.nextSibling)}if(vf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_t=ir(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=Ft?ir(e.stateNode.nextSibling):null;return!0}function Zm(){for(var e=_t;e;)e=ir(e.nextSibling)}function Wo(){_t=Ft=null,ke=!1}function hp(e){Qt===null?Qt=[e]:Qt.push(e)}var Gx=$n.ReactCurrentBatchConfig;function sa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=o.refs;i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function Ii(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gf(e){var t=e._init;return t(e._payload)}function Jm(e){function t(h,g){if(e){var x=h.deletions;x===null?(h.deletions=[g],h.flags|=16):x.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function r(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function o(h,g){return h=cr(h,g),h.index=0,h.sibling=null,h}function a(h,g,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<g?(h.flags|=2,g):x):(h.flags|=2,g)):(h.flags|=1048576,g)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,g,x,w){return g===null||g.tag!==6?(g=Ju(x,h.mode,w),g.return=h,g):(g=o(g,x),g.return=h,g)}function u(h,g,x,w){var b=x.type;return b===mo?c(h,g,x.props.children,w,x.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Kn&&gf(b)===g.type)?(w=o(g,x.props),w.ref=sa(h,g,x),w.return=h,w):(w=Zi(x.type,x.key,x.props,null,h.mode,w),w.ref=sa(h,g,x),w.return=h,w)}function l(h,g,x,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=el(x,h.mode,w),g.return=h,g):(g=o(g,x.children||[]),g.return=h,g)}function c(h,g,x,w,b){return g===null||g.tag!==7?(g=Pr(x,h.mode,w,b),g.return=h,g):(g=o(g,x),g.return=h,g)}function p(h,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ju(""+g,h.mode,x),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vi:return x=Zi(g.type,g.key,g.props,null,h.mode,x),x.ref=sa(h,null,g),x.return=h,x;case ho:return g=el(g,h.mode,x),g.return=h,g;case Kn:var w=g._init;return p(h,w(g._payload),x)}if(va(g)||na(g))return g=Pr(g,h.mode,x,null),g.return=h,g;Ii(h,g)}return null}function d(h,g,x,w){var b=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return b!==null?null:s(h,g,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vi:return x.key===b?u(h,g,x,w):null;case ho:return x.key===b?l(h,g,x,w):null;case Kn:return b=x._init,d(h,g,b(x._payload),w)}if(va(x)||na(x))return b!==null?null:c(h,g,x,w,null);Ii(h,x)}return null}function f(h,g,x,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(x)||null,s(g,h,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case vi:return h=h.get(w.key===null?x:w.key)||null,u(g,h,w,b);case ho:return h=h.get(w.key===null?x:w.key)||null,l(g,h,w,b);case Kn:var S=w._init;return f(h,g,x,S(w._payload),b)}if(va(w)||na(w))return h=h.get(x)||null,c(g,h,w,b,null);Ii(g,w)}return null}function m(h,g,x,w){for(var b=null,S=null,k=g,N=g=0,R=null;k!==null&&N<x.length;N++){k.index>N?(R=k,k=null):R=k.sibling;var T=d(h,k,x[N],w);if(T===null){k===null&&(k=R);break}e&&k&&T.alternate===null&&t(h,k),g=a(T,g,N),S===null?b=T:S.sibling=T,S=T,k=R}if(N===x.length)return n(h,k),ke&&Nr(h,N),b;if(k===null){for(;N<x.length;N++)k=p(h,x[N],w),k!==null&&(g=a(k,g,N),S===null?b=k:S.sibling=k,S=k);return ke&&Nr(h,N),b}for(k=r(h,k);N<x.length;N++)R=f(k,h,N,x[N],w),R!==null&&(e&&R.alternate!==null&&k.delete(R.key===null?N:R.key),g=a(R,g,N),S===null?b=R:S.sibling=R,S=R);return e&&k.forEach(function(D){return t(h,D)}),ke&&Nr(h,N),b}function v(h,g,x,w){var b=na(x);if(typeof b!="function")throw Error(G(150));if(x=b.call(x),x==null)throw Error(G(151));for(var S=b=null,k=g,N=g=0,R=null,T=x.next();k!==null&&!T.done;N++,T=x.next()){k.index>N?(R=k,k=null):R=k.sibling;var D=d(h,k,T.value,w);if(D===null){k===null&&(k=R);break}e&&k&&D.alternate===null&&t(h,k),g=a(D,g,N),S===null?b=D:S.sibling=D,S=D,k=R}if(T.done)return n(h,k),ke&&Nr(h,N),b;if(k===null){for(;!T.done;N++,T=x.next())T=p(h,T.value,w),T!==null&&(g=a(T,g,N),S===null?b=T:S.sibling=T,S=T);return ke&&Nr(h,N),b}for(k=r(h,k);!T.done;N++,T=x.next())T=f(k,h,N,T.value,w),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?N:T.key),g=a(T,g,N),S===null?b=T:S.sibling=T,S=T);return e&&k.forEach(function(F){return t(h,F)}),ke&&Nr(h,N),b}function y(h,g,x,w){if(typeof x=="object"&&x!==null&&x.type===mo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case vi:e:{for(var b=x.key,S=g;S!==null;){if(S.key===b){if(b=x.type,b===mo){if(S.tag===7){n(h,S.sibling),g=o(S,x.props.children),g.return=h,h=g;break e}}else if(S.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Kn&&gf(b)===S.type){n(h,S.sibling),g=o(S,x.props),g.ref=sa(h,S,x),g.return=h,h=g;break e}n(h,S);break}else t(h,S);S=S.sibling}x.type===mo?(g=Pr(x.props.children,h.mode,w,x.key),g.return=h,h=g):(w=Zi(x.type,x.key,x.props,null,h.mode,w),w.ref=sa(h,g,x),w.return=h,h=w)}return i(h);case ho:e:{for(S=x.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(h,g.sibling),g=o(g,x.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else t(h,g);g=g.sibling}g=el(x,h.mode,w),g.return=h,h=g}return i(h);case Kn:return S=x._init,y(h,g,S(x._payload),w)}if(va(x))return m(h,g,x,w);if(na(x))return v(h,g,x,w);Ii(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(h,g.sibling),g=o(g,x),g.return=h,h=g):(n(h,g),g=Ju(x,h.mode,w),g.return=h,h=g),i(h)):n(h,g)}return y}var Uo=Jm(!0),ev=Jm(!1),fs=xr(null),hs=null,So=null,mp=null;function vp(){mp=So=hs=null}function gp(e){var t=fs.current;Ne(fs),e._currentValue=t}function ec(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _o(e,t){hs=e,mp=So=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(yt=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(mp!==e)if(e={context:e,memoizedValue:t,next:null},So===null){if(hs===null)throw Error(G(308));So=e,hs.dependencies={lanes:0,firstContext:e}}else So=So.next=e;return t}var _r=null;function yp(e){_r===null?_r=[e]:_r.push(e)}function tv(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,yp(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ln(e,r)}function Ln(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xn=!1;function xp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function On(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ln(e,n)}return o=r.interleaved,o===null?(t.next=t,yp(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ln(e,n)}function Gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,op(e,n)}}function yf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ms(e,t,n,r){var o=e.updateQueue;Xn=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,l=u.next;u.next=null,i===null?a=l:i.next=l,i=u;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=l:s.next=l,c.lastBaseUpdate=u))}if(a!==null){var p=o.baseState;i=0,c=l=u=null,s=a;do{var d=s.lane,f=s.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,v=s;switch(d=t,f=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){p=m.call(f,p,d);break e}p=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,d=typeof m=="function"?m.call(f,p,d):m,d==null)break e;p=Oe({},p,d);break e;case 2:Xn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=o.effects,d===null?o.effects=[s]:d.push(s))}else f={eventTime:f,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=f,u=p):c=c.next=f,i|=d;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;d=s,s=d.next,d.next=null,o.lastBaseUpdate=d,o.shared.pending=null}}while(!0);if(c===null&&(u=p),o.baseState=u,o.firstBaseUpdate=l,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);$r|=i,e.lanes=i,e.memoizedState=p}}function xf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(G(191,o));o.call(r)}}}var ui={},gn=xr(ui),ja=xr(ui),Ha=xr(ui);function Dr(e){if(e===ui)throw Error(G(174));return e}function wp(e,t){switch(Ce(Ha,t),Ce(ja,e),Ce(gn,ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fl(t,e)}Ne(gn),Ce(gn,t)}function $o(){Ne(gn),Ne(ja),Ne(Ha)}function rv(e){Dr(Ha.current);var t=Dr(gn.current),n=Fl(t,e.type);t!==n&&(Ce(ja,e),Ce(gn,n))}function bp(e){ja.current===e&&(Ne(gn),Ne(ja))}var _e=xr(0);function vs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qu=[];function Cp(){for(var e=0;e<qu.length;e++)qu[e]._workInProgressVersionPrimary=null;qu.length=0}var qi=$n.ReactCurrentDispatcher,Ku=$n.ReactCurrentBatchConfig,Ur=0,De=null,je=null,Xe=null,gs=!1,ka=!1,Ga=0,qx=0;function nt(){throw Error(G(321))}function Sp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rn(e[n],t[n]))return!1;return!0}function Ep(e,t,n,r,o,a){if(Ur=a,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qi.current=e===null||e.memoizedState===null?Qx:Zx,e=n(r,o),ka){a=0;do{if(ka=!1,Ga=0,25<=a)throw Error(G(301));a+=1,Xe=je=null,t.updateQueue=null,qi.current=Jx,e=n(r,o)}while(ka)}if(qi.current=ys,t=je!==null&&je.next!==null,Ur=0,Xe=je=De=null,gs=!1,t)throw Error(G(300));return e}function Np(){var e=Ga!==0;return Ga=0,e}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?De.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ht(){if(je===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Xe===null?De.memoizedState:Xe.next;if(t!==null)Xe=t,je=e;else{if(e===null)throw Error(G(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Xe===null?De.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function qa(e,t){return typeof t=="function"?t(e):t}function Xu(e){var t=Ht(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=je,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var s=i=null,u=null,l=a;do{var c=l.lane;if((Ur&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:e(r,l.action);else{var p={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(s=u=p,i=r):u=u.next=p,De.lanes|=c,$r|=c}l=l.next}while(l!==null&&l!==a);u===null?i=r:u.next=s,rn(r,t.memoizedState)||(yt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,De.lanes|=a,$r|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yu(e){var t=Ht(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);rn(a,t.memoizedState)||(yt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ov(){}function av(e,t){var n=De,r=Ht(),o=t(),a=!rn(r.memoizedState,o);if(a&&(r.memoizedState=o,yt=!0),r=r.queue,kp(uv.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Ka(9,sv.bind(null,n,r,o,t),void 0,null),Qe===null)throw Error(G(349));Ur&30||iv(n,t,o)}return o}function iv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sv(e,t,n,r){t.value=n,t.getSnapshot=r,lv(t)&&cv(e)}function uv(e,t,n){return n(function(){lv(t)&&cv(e)})}function lv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rn(e,n)}catch{return!0}}function cv(e){var t=Ln(e,1);t!==null&&tn(t,e,1,-1)}function wf(e){var t=pn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:e},t.queue=e,e=e.dispatch=Yx.bind(null,De,e),[t.memoizedState,e]}function Ka(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pv(){return Ht().memoizedState}function Ki(e,t,n,r){var o=pn();De.flags|=e,o.memoizedState=Ka(1|t,n,void 0,r===void 0?null:r)}function Zs(e,t,n,r){var o=Ht();r=r===void 0?null:r;var a=void 0;if(je!==null){var i=je.memoizedState;if(a=i.destroy,r!==null&&Sp(r,i.deps)){o.memoizedState=Ka(t,n,a,r);return}}De.flags|=e,o.memoizedState=Ka(1|t,n,a,r)}function bf(e,t){return Ki(8390656,8,e,t)}function kp(e,t){return Zs(2048,8,e,t)}function dv(e,t){return Zs(4,2,e,t)}function fv(e,t){return Zs(4,4,e,t)}function hv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mv(e,t,n){return n=n!=null?n.concat([e]):null,Zs(4,4,hv.bind(null,t,e),n)}function Ip(){}function vv(e,t){var n=Ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gv(e,t){var n=Ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yv(e,t,n){return Ur&21?(rn(n,t)||(n=Sm(),De.lanes|=n,$r|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yt=!0),e.memoizedState=n)}function Kx(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=Ku.transition;Ku.transition={};try{e(!1),t()}finally{we=n,Ku.transition=r}}function xv(){return Ht().memoizedState}function Xx(e,t,n){var r=lr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wv(e))bv(t,n);else if(n=tv(e,t,n,r),n!==null){var o=pt();tn(n,e,r,o),Cv(n,t,r)}}function Yx(e,t,n){var r=lr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wv(e))bv(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(o.hasEagerState=!0,o.eagerState=s,rn(s,i)){var u=t.interleaved;u===null?(o.next=o,yp(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=tv(e,t,o,r),n!==null&&(o=pt(),tn(n,e,r,o),Cv(n,t,r))}}function wv(e){var t=e.alternate;return e===De||t!==null&&t===De}function bv(e,t){ka=gs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,op(e,n)}}var ys={readContext:jt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},Qx={readContext:jt,useCallback:function(e,t){return pn().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:bf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ki(4194308,4,hv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ki(4,2,e,t)},useMemo:function(e,t){var n=pn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xx.bind(null,De,e),[r.memoizedState,e]},useRef:function(e){var t=pn();return e={current:e},t.memoizedState=e},useState:wf,useDebugValue:Ip,useDeferredValue:function(e){return pn().memoizedState=e},useTransition:function(){var e=wf(!1),t=e[0];return e=Kx.bind(null,e[1]),pn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=De,o=pn();if(ke){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),Qe===null)throw Error(G(349));Ur&30||iv(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,bf(uv.bind(null,r,a,e),[e]),r.flags|=2048,Ka(9,sv.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=pn(),t=Qe.identifierPrefix;if(ke){var n=Dn,r=_n;n=(r&~(1<<32-en(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ga++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zx={readContext:jt,useCallback:vv,useContext:jt,useEffect:kp,useImperativeHandle:mv,useInsertionEffect:dv,useLayoutEffect:fv,useMemo:gv,useReducer:Xu,useRef:pv,useState:function(){return Xu(qa)},useDebugValue:Ip,useDeferredValue:function(e){var t=Ht();return yv(t,je.memoizedState,e)},useTransition:function(){var e=Xu(qa)[0],t=Ht().memoizedState;return[e,t]},useMutableSource:ov,useSyncExternalStore:av,useId:xv,unstable_isNewReconciler:!1},Jx={readContext:jt,useCallback:vv,useContext:jt,useEffect:kp,useImperativeHandle:mv,useInsertionEffect:dv,useLayoutEffect:fv,useMemo:gv,useReducer:Yu,useRef:pv,useState:function(){return Yu(qa)},useDebugValue:Ip,useDeferredValue:function(e){var t=Ht();return je===null?t.memoizedState=e:yv(t,je.memoizedState,e)},useTransition:function(){var e=Yu(qa)[0],t=Ht().memoizedState;return[e,t]},useMutableSource:ov,useSyncExternalStore:av,useId:xv,unstable_isNewReconciler:!1};function Xt(e,t){if(e&&e.defaultProps){t=Oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function tc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={isMounted:function(e){return(e=e._reactInternals)?Xr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pt(),o=lr(e),a=On(r,o);a.payload=t,n!=null&&(a.callback=n),t=sr(e,a,o),t!==null&&(tn(t,e,o,r),Gi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pt(),o=lr(e),a=On(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=sr(e,a,o),t!==null&&(tn(t,e,o,r),Gi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),r=lr(e),o=On(n,r);o.tag=2,t!=null&&(o.callback=t),t=sr(e,o,r),t!==null&&(tn(t,e,r,n),Gi(t,e,r))}};function Cf(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!Va(n,r)||!Va(o,a):!0}function Sv(e,t,n){var r=!1,o=mr,a=t.contextType;return typeof a=="object"&&a!==null?a=jt(a):(o=wt(t)?Vr:ut.current,r=t.contextTypes,a=(r=r!=null)?Vo(e,o):mr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Js,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Sf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function nc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},xp(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=jt(a):(a=wt(t)?Vr:ut.current,o.context=Vo(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(tc(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Js.enqueueReplaceState(o,o.state,null),ms(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function jo(e,t){try{var n="",r=t;do n+=I1(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Qu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function rc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ew=typeof WeakMap=="function"?WeakMap:Map;function Ev(e,t,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ws||(ws=!0,fc=r),rc(e,t)},n}function Nv(e,t,n){n=On(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){rc(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){rc(e,t),typeof r!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ef(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ew;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=hw.bind(null,e,t,n),t.then(e,e))}function Nf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kf(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=On(-1,1),t.tag=2,sr(n,t,1))),n.lanes|=1),e)}var tw=$n.ReactCurrentOwner,yt=!1;function lt(e,t,n,r){t.child=e===null?ev(t,null,n,r):Uo(t,e.child,n,r)}function If(e,t,n,r,o){n=n.render;var a=t.ref;return _o(t,o),r=Ep(e,t,n,r,a,o),n=Np(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bn(e,t,o)):(ke&&n&&dp(t),t.flags|=1,lt(e,t,r,o),t.child)}function Rf(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Mp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,kv(e,t,a,r,o)):(e=Zi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Va,n(i,r)&&e.ref===t.ref)return Bn(e,t,o)}return t.flags|=1,e=cr(a,r),e.ref=t.ref,e.return=t,t.child=e}function kv(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Va(a,r)&&e.ref===t.ref)if(yt=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(yt=!0);else return t.lanes=e.lanes,Bn(e,t,o)}return oc(e,t,n,r,o)}function Iv(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(No,It),It|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(No,It),It|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Ce(No,It),It|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ce(No,It),It|=r;return lt(e,t,o,n),t.child}function Rv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function oc(e,t,n,r,o){var a=wt(n)?Vr:ut.current;return a=Vo(t,a),_o(t,o),n=Ep(e,t,n,r,a,o),r=Np(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bn(e,t,o)):(ke&&r&&dp(t),t.flags|=1,lt(e,t,n,o),t.child)}function Tf(e,t,n,r,o){if(wt(n)){var a=!0;cs(t)}else a=!1;if(_o(t,o),t.stateNode===null)Xi(e,t),Sv(t,n,r),nc(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,l=n.contextType;typeof l=="object"&&l!==null?l=jt(l):(l=wt(n)?Vr:ut.current,l=Vo(t,l));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==l)&&Sf(t,i,r,l),Xn=!1;var d=t.memoizedState;i.state=d,ms(t,r,i,o),u=t.memoizedState,s!==r||d!==u||xt.current||Xn?(typeof c=="function"&&(tc(t,n,c,r),u=t.memoizedState),(s=Xn||Cf(t,n,s,r,d,u,l))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=l,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,nv(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Xt(t.type,s),i.props=l,p=t.pendingProps,d=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=jt(u):(u=wt(n)?Vr:ut.current,u=Vo(t,u));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==p||d!==u)&&Sf(t,i,r,u),Xn=!1,d=t.memoizedState,i.state=d,ms(t,r,i,o);var m=t.memoizedState;s!==p||d!==m||xt.current||Xn?(typeof f=="function"&&(tc(t,n,f,r),m=t.memoizedState),(l=Xn||Cf(t,n,l,r,d,m,u)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,m,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,m,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),i.props=r,i.state=m,i.context=u,r=l):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return ac(e,t,n,r,a,o)}function ac(e,t,n,r,o,a){Rv(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&hf(t,n,!1),Bn(e,t,a);r=t.stateNode,tw.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Uo(t,e.child,null,a),t.child=Uo(t,null,s,a)):lt(e,t,s,a),t.memoizedState=r.state,o&&hf(t,n,!0),t.child}function Tv(e){var t=e.stateNode;t.pendingContext?ff(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ff(e,t.context,!1),wp(e,t.containerInfo)}function Af(e,t,n,r,o){return Wo(),hp(o),t.flags|=256,lt(e,t,n,r),t.child}var ic={dehydrated:null,treeContext:null,retryLane:0};function sc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Av(e,t,n){var r=t.pendingProps,o=_e.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ce(_e,o&1),e===null)return Jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=nu(i,r,0,null),e=Pr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=sc(n),t.memoizedState=ic,e):Rp(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return nw(e,t,i,r,s,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=cr(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?a=cr(s,a):(a=Pr(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?sc(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=ic,r}return a=e.child,e=a.sibling,r=cr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rp(e,t){return t=nu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ri(e,t,n,r){return r!==null&&hp(r),Uo(t,e.child,null,n),e=Rp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nw(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=Qu(Error(G(422))),Ri(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=nu({mode:"visible",children:r.children},o,0,null),a=Pr(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Uo(t,e.child,null,i),t.child.memoizedState=sc(i),t.memoizedState=ic,a);if(!(t.mode&1))return Ri(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(G(419)),r=Qu(a,r,void 0),Ri(e,t,i,r)}if(s=(i&e.childLanes)!==0,yt||s){if(r=Qe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Ln(e,o),tn(r,e,o,-1))}return Fp(),r=Qu(Error(G(421))),Ri(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=mw.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,_t=ir(o.nextSibling),Ft=t,ke=!0,Qt=null,e!==null&&(Bt[zt++]=_n,Bt[zt++]=Dn,Bt[zt++]=Wr,_n=e.id,Dn=e.overflow,Wr=t),t=Rp(t,r.children),t.flags|=4096,t)}function _f(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ec(e.return,t,n)}function Zu(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function _v(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(lt(e,t,r.children,n),r=_e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_f(e,n,t);else if(e.tag===19)_f(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(_e,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&vs(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Zu(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&vs(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Zu(t,!0,n,null,a);break;case"together":Zu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$r|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=cr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rw(e,t,n){switch(t.tag){case 3:Tv(t),Wo();break;case 5:rv(t);break;case 1:wt(t.type)&&cs(t);break;case 4:wp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Ce(fs,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(_e,_e.current&1),t.flags|=128,null):n&t.child.childLanes?Av(e,t,n):(Ce(_e,_e.current&1),e=Bn(e,t,n),e!==null?e.sibling:null);Ce(_e,_e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _v(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ce(_e,_e.current),r)break;return null;case 22:case 23:return t.lanes=0,Iv(e,t,n)}return Bn(e,t,n)}var Dv,uc,Ov,Fv;Dv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uc=function(){};Ov=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Dr(gn.current);var a=null;switch(n){case"input":o=Al(e,o),r=Al(e,r),a=[];break;case"select":o=Oe({},o,{value:void 0}),r=Oe({},r,{value:void 0}),a=[];break;case"textarea":o=Ol(e,o),r=Ol(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=us)}Ml(n,r);var i;n=null;for(l in o)if(!r.hasOwnProperty(l)&&o.hasOwnProperty(l)&&o[l]!=null)if(l==="style"){var s=o[l];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Oa.hasOwnProperty(l)?a||(a=[]):(a=a||[]).push(l,null));for(l in r){var u=r[l];if(s=o!=null?o[l]:void 0,r.hasOwnProperty(l)&&u!==s&&(u!=null||s!=null))if(l==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(a||(a=[]),a.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Ee("scroll",e),a||s===u||(a=[])):(a=a||[]).push(l,u))}n&&(a=a||[]).push("style",n);var l=a;(t.updateQueue=l)&&(t.flags|=4)}};Fv=function(e,t,n,r){n!==r&&(t.flags|=4)};function ua(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ow(e,t,n){var r=t.pendingProps;switch(fp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return wt(t.type)&&ls(),rt(t),null;case 3:return r=t.stateNode,$o(),Ne(xt),Ne(ut),Cp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qt!==null&&(vc(Qt),Qt=null))),uc(e,t),rt(t),null;case 5:bp(t);var o=Dr(Ha.current);if(n=t.type,e!==null&&t.stateNode!=null)Ov(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(G(166));return rt(t),null}if(e=Dr(gn.current),ki(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[hn]=t,r[$a]=a,e=(t.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(o=0;o<ya.length;o++)Ee(ya[o],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":zd(r,a),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ee("invalid",r);break;case"textarea":Wd(r,a),Ee("invalid",r)}Ml(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Ni(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Ni(r.textContent,s,e),o=["children",""+s]):Oa.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Ee("scroll",r)}switch(n){case"input":gi(r),Vd(r,a,!0);break;case"textarea":gi(r),Ud(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=us)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=um(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[hn]=t,e[$a]=r,Dv(e,t,!1,!1),t.stateNode=e;e:{switch(i=Pl(n,r),n){case"dialog":Ee("cancel",e),Ee("close",e),o=r;break;case"iframe":case"object":case"embed":Ee("load",e),o=r;break;case"video":case"audio":for(o=0;o<ya.length;o++)Ee(ya[o],e);o=r;break;case"source":Ee("error",e),o=r;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),o=r;break;case"details":Ee("toggle",e),o=r;break;case"input":zd(e,r),o=Al(e,r),Ee("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Oe({},r,{value:void 0}),Ee("invalid",e);break;case"textarea":Wd(e,r),o=Ol(e,r),Ee("invalid",e);break;default:o=r}Ml(n,o),s=o;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?pm(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&lm(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Fa(e,u):typeof u=="number"&&Fa(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Oa.hasOwnProperty(a)?u!=null&&a==="onScroll"&&Ee("scroll",e):u!=null&&Zc(e,a,u,i))}switch(n){case"input":gi(e),Vd(e,r,!1);break;case"textarea":gi(e),Ud(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Io(e,!!r.multiple,a,!1):r.defaultValue!=null&&Io(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=us)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)Fv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(G(166));if(n=Dr(Ha.current),Dr(gn.current),ki(t)){if(r=t.stateNode,n=t.memoizedProps,r[hn]=t,(a=r.nodeValue!==n)&&(e=Ft,e!==null))switch(e.tag){case 3:Ni(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ni(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=t,t.stateNode=r}return rt(t),null;case 13:if(Ne(_e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&_t!==null&&t.mode&1&&!(t.flags&128))Zm(),Wo(),t.flags|=98560,a=!1;else if(a=ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(G(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(G(317));a[hn]=t}else Wo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),a=!1}else Qt!==null&&(vc(Qt),Qt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||_e.current&1?Ge===0&&(Ge=3):Fp())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return $o(),uc(e,t),e===null&&Wa(t.stateNode.containerInfo),rt(t),null;case 10:return gp(t.type._context),rt(t),null;case 17:return wt(t.type)&&ls(),rt(t),null;case 19:if(Ne(_e),a=t.memoizedState,a===null)return rt(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)ua(a,!1);else{if(Ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=vs(e),i!==null){for(t.flags|=128,ua(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(_e,_e.current&1|2),t.child}e=e.sibling}a.tail!==null&&We()>Ho&&(t.flags|=128,r=!0,ua(a,!1),t.lanes=4194304)}else{if(!r)if(e=vs(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ua(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ke)return rt(t),null}else 2*We()-a.renderingStartTime>Ho&&n!==1073741824&&(t.flags|=128,r=!0,ua(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=We(),t.sibling=null,n=_e.current,Ce(_e,r?n&1|2:n&1),t):(rt(t),null);case 22:case 23:return Op(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?It&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function aw(e,t){switch(fp(t),t.tag){case 1:return wt(t.type)&&ls(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $o(),Ne(xt),Ne(ut),Cp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bp(t),null;case 13:if(Ne(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));Wo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(_e),null;case 4:return $o(),null;case 10:return gp(t.type._context),null;case 22:case 23:return Op(),null;case 24:return null;default:return null}}var Ti=!1,at=!1,iw=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Eo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(e,t,r)}else n.current=null}function lc(e,t,n){try{n()}catch(r){Le(e,t,r)}}var Df=!1;function sw(e,t){if(Gl=as,e=zm(),pp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,l=0,c=0,p=e,d=null;t:for(;;){for(var f;p!==n||o!==0&&p.nodeType!==3||(s=i+o),p!==a||r!==0&&p.nodeType!==3||(u=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(f=p.firstChild)!==null;)d=p,p=f;for(;;){if(p===e)break t;if(d===n&&++l===o&&(s=i),d===a&&++c===r&&(u=i),(f=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=f}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ql={focusedElem:e,selectionRange:n},as=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,y=m.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:Xt(t.type,v),y);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(w){Le(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return m=Df,Df=!1,m}function Ia(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&lc(t,n,a)}o=o.next}while(o!==r)}}function eu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function cc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mv(e){var t=e.alternate;t!==null&&(e.alternate=null,Mv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[hn],delete t[$a],delete t[Yl],delete t[$x],delete t[jx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pv(e){return e.tag===5||e.tag===3||e.tag===4}function Of(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=us));else if(r!==4&&(e=e.child,e!==null))for(pc(e,t,n),e=e.sibling;e!==null;)pc(e,t,n),e=e.sibling}function dc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(dc(e,t,n),e=e.sibling;e!==null;)dc(e,t,n),e=e.sibling}var Ze=null,Yt=!1;function qn(e,t,n){for(n=n.child;n!==null;)Lv(e,t,n),n=n.sibling}function Lv(e,t,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Gs,n)}catch{}switch(n.tag){case 5:at||Eo(n,t);case 6:var r=Ze,o=Yt;Ze=null,qn(e,t,n),Ze=r,Yt=o,Ze!==null&&(Yt?(e=Ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(Yt?(e=Ze,n=n.stateNode,e.nodeType===8?Hu(e.parentNode,n):e.nodeType===1&&Hu(e,n),Ba(e)):Hu(Ze,n.stateNode));break;case 4:r=Ze,o=Yt,Ze=n.stateNode.containerInfo,Yt=!0,qn(e,t,n),Ze=r,Yt=o;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&lc(n,t,i),o=o.next}while(o!==r)}qn(e,t,n);break;case 1:if(!at&&(Eo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Le(n,t,s)}qn(e,t,n);break;case 21:qn(e,t,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,qn(e,t,n),at=r):qn(e,t,n);break;default:qn(e,t,n)}}function Ff(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new iw),t.forEach(function(r){var o=vw.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Ze=s.stateNode,Yt=!1;break e;case 3:Ze=s.stateNode.containerInfo,Yt=!0;break e;case 4:Ze=s.stateNode.containerInfo,Yt=!0;break e}s=s.return}if(Ze===null)throw Error(G(160));Lv(a,i,o),Ze=null,Yt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(l){Le(o,t,l)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bv(t,e),t=t.sibling}function Bv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),cn(e),r&4){try{Ia(3,e,e.return),eu(3,e)}catch(v){Le(e,e.return,v)}try{Ia(5,e,e.return)}catch(v){Le(e,e.return,v)}}break;case 1:qt(t,e),cn(e),r&512&&n!==null&&Eo(n,n.return);break;case 5:if(qt(t,e),cn(e),r&512&&n!==null&&Eo(n,n.return),e.flags&32){var o=e.stateNode;try{Fa(o,"")}catch(v){Le(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&im(o,a),Pl(s,i);var l=Pl(s,a);for(i=0;i<u.length;i+=2){var c=u[i],p=u[i+1];c==="style"?pm(o,p):c==="dangerouslySetInnerHTML"?lm(o,p):c==="children"?Fa(o,p):Zc(o,c,p,l)}switch(s){case"input":_l(o,a);break;case"textarea":sm(o,a);break;case"select":var d=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var f=a.value;f!=null?Io(o,!!a.multiple,f,!1):d!==!!a.multiple&&(a.defaultValue!=null?Io(o,!!a.multiple,a.defaultValue,!0):Io(o,!!a.multiple,a.multiple?[]:"",!1))}o[$a]=a}catch(v){Le(e,e.return,v)}}break;case 6:if(qt(t,e),cn(e),r&4){if(e.stateNode===null)throw Error(G(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(v){Le(e,e.return,v)}}break;case 3:if(qt(t,e),cn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ba(t.containerInfo)}catch(v){Le(e,e.return,v)}break;case 4:qt(t,e),cn(e);break;case 13:qt(t,e),cn(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(_p=We())),r&4&&Ff(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(at=(l=at)||c,qt(t,e),at=l):qt(t,e),cn(e),r&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!c&&e.mode&1)for(Y=e,c=e.child;c!==null;){for(p=Y=c;Y!==null;){switch(d=Y,f=d.child,d.tag){case 0:case 11:case 14:case 15:Ia(4,d,d.return);break;case 1:Eo(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){Le(r,n,v)}}break;case 5:Eo(d,d.return);break;case 22:if(d.memoizedState!==null){Pf(p);continue}}f!==null?(f.return=d,Y=f):Pf(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{o=p.stateNode,l?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=p.stateNode,u=p.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=cm("display",i))}catch(v){Le(e,e.return,v)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(v){Le(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qt(t,e),cn(e),r&4&&Ff(e);break;case 21:break;default:qt(t,e),cn(e)}}function cn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pv(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Fa(o,""),r.flags&=-33);var a=Of(e);dc(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Of(e);pc(e,s,i);break;default:throw Error(G(161))}}catch(u){Le(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uw(e,t,n){Y=e,zv(e)}function zv(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var o=Y,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Ti;if(!i){var s=o.alternate,u=s!==null&&s.memoizedState!==null||at;s=Ti;var l=at;if(Ti=i,(at=u)&&!l)for(Y=o;Y!==null;)i=Y,u=i.child,i.tag===22&&i.memoizedState!==null?Lf(o):u!==null?(u.return=i,Y=u):Lf(o);for(;a!==null;)Y=a,zv(a),a=a.sibling;Y=o,Ti=s,at=l}Mf(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,Y=a):Mf(e)}}function Mf(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:at||eu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!at)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Xt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&xf(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xf(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var l=t.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&Ba(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}at||t.flags&512&&cc(t)}catch(d){Le(t,t.return,d)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Pf(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Lf(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{eu(4,t)}catch(u){Le(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){Le(t,o,u)}}var a=t.return;try{cc(t)}catch(u){Le(t,a,u)}break;case 5:var i=t.return;try{cc(t)}catch(u){Le(t,i,u)}}}catch(u){Le(t,t.return,u)}if(t===e){Y=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Y=s;break}Y=t.return}}var lw=Math.ceil,xs=$n.ReactCurrentDispatcher,Tp=$n.ReactCurrentOwner,$t=$n.ReactCurrentBatchConfig,ge=0,Qe=null,Ue=null,et=0,It=0,No=xr(0),Ge=0,Xa=null,$r=0,tu=0,Ap=0,Ra=null,mt=null,_p=0,Ho=1/0,kn=null,ws=!1,fc=null,ur=null,Ai=!1,er=null,bs=0,Ta=0,hc=null,Yi=-1,Qi=0;function pt(){return ge&6?We():Yi!==-1?Yi:Yi=We()}function lr(e){return e.mode&1?ge&2&&et!==0?et&-et:Gx.transition!==null?(Qi===0&&(Qi=Sm()),Qi):(e=we,e!==0||(e=window.event,e=e===void 0?16:Am(e.type)),e):1}function tn(e,t,n,r){if(50<Ta)throw Ta=0,hc=null,Error(G(185));ai(e,n,r),(!(ge&2)||e!==Qe)&&(e===Qe&&(!(ge&2)&&(tu|=n),Ge===4&&Qn(e,et)),bt(e,r),n===1&&ge===0&&!(t.mode&1)&&(Ho=We()+500,Qs&&wr()))}function bt(e,t){var n=e.callbackNode;G1(e,t);var r=os(e,e===Qe?et:0);if(r===0)n!==null&&Hd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hd(n),t===1)e.tag===0?Hx(Bf.bind(null,e)):Xm(Bf.bind(null,e)),Wx(function(){!(ge&6)&&wr()}),n=null;else{switch(Em(r)){case 1:n=rp;break;case 4:n=bm;break;case 16:n=rs;break;case 536870912:n=Cm;break;default:n=rs}n=qv(n,Vv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vv(e,t){if(Yi=-1,Qi=0,ge&6)throw Error(G(327));var n=e.callbackNode;if(Do()&&e.callbackNode!==n)return null;var r=os(e,e===Qe?et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Cs(e,r);else{t=r;var o=ge;ge|=2;var a=Uv();(Qe!==e||et!==t)&&(kn=null,Ho=We()+500,Mr(e,t));do try{dw();break}catch(s){Wv(e,s)}while(!0);vp(),xs.current=a,ge=o,Ue!==null?t=0:(Qe=null,et=0,t=Ge)}if(t!==0){if(t===2&&(o=Wl(e),o!==0&&(r=o,t=mc(e,o))),t===1)throw n=Xa,Mr(e,0),Qn(e,r),bt(e,We()),n;if(t===6)Qn(e,r);else{if(o=e.current.alternate,!(r&30)&&!cw(o)&&(t=Cs(e,r),t===2&&(a=Wl(e),a!==0&&(r=a,t=mc(e,a))),t===1))throw n=Xa,Mr(e,0),Qn(e,r),bt(e,We()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(G(345));case 2:kr(e,mt,kn);break;case 3:if(Qn(e,r),(r&130023424)===r&&(t=_p+500-We(),10<t)){if(os(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){pt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Xl(kr.bind(null,e,mt,kn),t);break}kr(e,mt,kn);break;case 4:if(Qn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-en(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lw(r/1960))-r,10<r){e.timeoutHandle=Xl(kr.bind(null,e,mt,kn),r);break}kr(e,mt,kn);break;case 5:kr(e,mt,kn);break;default:throw Error(G(329))}}}return bt(e,We()),e.callbackNode===n?Vv.bind(null,e):null}function mc(e,t){var n=Ra;return e.current.memoizedState.isDehydrated&&(Mr(e,t).flags|=256),e=Cs(e,t),e!==2&&(t=mt,mt=n,t!==null&&vc(t)),e}function vc(e){mt===null?mt=e:mt.push.apply(mt,e)}function cw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!rn(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t){for(t&=~Ap,t&=~tu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-en(t),r=1<<n;e[n]=-1,t&=~r}}function Bf(e){if(ge&6)throw Error(G(327));Do();var t=os(e,0);if(!(t&1))return bt(e,We()),null;var n=Cs(e,t);if(e.tag!==0&&n===2){var r=Wl(e);r!==0&&(t=r,n=mc(e,r))}if(n===1)throw n=Xa,Mr(e,0),Qn(e,t),bt(e,We()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kr(e,mt,kn),bt(e,We()),null}function Dp(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(Ho=We()+500,Qs&&wr())}}function jr(e){er!==null&&er.tag===0&&!(ge&6)&&Do();var t=ge;ge|=1;var n=$t.transition,r=we;try{if($t.transition=null,we=1,e)return e()}finally{we=r,$t.transition=n,ge=t,!(ge&6)&&wr()}}function Op(){It=No.current,Ne(No)}function Mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vx(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(fp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ls();break;case 3:$o(),Ne(xt),Ne(ut),Cp();break;case 5:bp(r);break;case 4:$o();break;case 13:Ne(_e);break;case 19:Ne(_e);break;case 10:gp(r.type._context);break;case 22:case 23:Op()}n=n.return}if(Qe=e,Ue=e=cr(e.current,null),et=It=t,Ge=0,Xa=null,Ap=tu=$r=0,mt=Ra=null,_r!==null){for(t=0;t<_r.length;t++)if(n=_r[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}_r=null}return e}function Wv(e,t){do{var n=Ue;try{if(vp(),qi.current=ys,gs){for(var r=De.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}gs=!1}if(Ur=0,Xe=je=De=null,ka=!1,Ga=0,Tp.current=null,n===null||n.return===null){Ge=1,Xa=t,Ue=null;break}e:{var a=e,i=n.return,s=n,u=t;if(t=et,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=s,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Nf(i);if(f!==null){f.flags&=-257,kf(f,i,s,a,t),f.mode&1&&Ef(a,l,t),t=f,u=l;var m=t.updateQueue;if(m===null){var v=new Set;v.add(u),t.updateQueue=v}else m.add(u);break e}else{if(!(t&1)){Ef(a,l,t),Fp();break e}u=Error(G(426))}}else if(ke&&s.mode&1){var y=Nf(i);if(y!==null){!(y.flags&65536)&&(y.flags|=256),kf(y,i,s,a,t),hp(jo(u,s));break e}}a=u=jo(u,s),Ge!==4&&(Ge=2),Ra===null?Ra=[a]:Ra.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Ev(a,u,t);yf(a,h);break e;case 1:s=u;var g=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ur===null||!ur.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=Nv(a,s,t);yf(a,w);break e}}a=a.return}while(a!==null)}jv(n)}catch(b){t=b,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function Uv(){var e=xs.current;return xs.current=ys,e===null?ys:e}function Fp(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Qe===null||!($r&268435455)&&!(tu&268435455)||Qn(Qe,et)}function Cs(e,t){var n=ge;ge|=2;var r=Uv();(Qe!==e||et!==t)&&(kn=null,Mr(e,t));do try{pw();break}catch(o){Wv(e,o)}while(!0);if(vp(),ge=n,xs.current=r,Ue!==null)throw Error(G(261));return Qe=null,et=0,Ge}function pw(){for(;Ue!==null;)$v(Ue)}function dw(){for(;Ue!==null&&!L1();)$v(Ue)}function $v(e){var t=Gv(e.alternate,e,It);e.memoizedProps=e.pendingProps,t===null?jv(e):Ue=t,Tp.current=null}function jv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=aw(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,Ue=null;return}}else if(n=ow(n,t,It),n!==null){Ue=n;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Ge===0&&(Ge=5)}function kr(e,t,n){var r=we,o=$t.transition;try{$t.transition=null,we=1,fw(e,t,n,r)}finally{$t.transition=o,we=r}return null}function fw(e,t,n,r){do Do();while(er!==null);if(ge&6)throw Error(G(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(q1(e,a),e===Qe&&(Ue=Qe=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ai||(Ai=!0,qv(rs,function(){return Do(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=$t.transition,$t.transition=null;var i=we;we=1;var s=ge;ge|=4,Tp.current=null,sw(e,n),Bv(n,e),Ox(ql),as=!!Gl,ql=Gl=null,e.current=n,uw(n),B1(),ge=s,we=i,$t.transition=a}else e.current=n;if(Ai&&(Ai=!1,er=e,bs=o),a=e.pendingLanes,a===0&&(ur=null),W1(n.stateNode),bt(e,We()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ws)throw ws=!1,e=fc,fc=null,e;return bs&1&&e.tag!==0&&Do(),a=e.pendingLanes,a&1?e===hc?Ta++:(Ta=0,hc=e):Ta=0,wr(),null}function Do(){if(er!==null){var e=Em(bs),t=$t.transition,n=we;try{if($t.transition=null,we=16>e?16:e,er===null)var r=!1;else{if(e=er,er=null,bs=0,ge&6)throw Error(G(331));var o=ge;for(ge|=4,Y=e.current;Y!==null;){var a=Y,i=a.child;if(Y.flags&16){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var l=s[u];for(Y=l;Y!==null;){var c=Y;switch(c.tag){case 0:case 11:case 15:Ia(8,c,a)}var p=c.child;if(p!==null)p.return=c,Y=p;else for(;Y!==null;){c=Y;var d=c.sibling,f=c.return;if(Mv(c),c===l){Y=null;break}if(d!==null){d.return=f,Y=d;break}Y=f}}}var m=a.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(v!==null)}}Y=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,Y=i;else e:for(;Y!==null;){if(a=Y,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ia(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,Y=h;break e}Y=a.return}}var g=e.current;for(Y=g;Y!==null;){i=Y;var x=i.child;if(i.subtreeFlags&2064&&x!==null)x.return=i,Y=x;else e:for(i=g;Y!==null;){if(s=Y,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:eu(9,s)}}catch(b){Le(s,s.return,b)}if(s===i){Y=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,Y=w;break e}Y=s.return}}if(ge=o,wr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Gs,e)}catch{}r=!0}return r}finally{we=n,$t.transition=t}}return!1}function zf(e,t,n){t=jo(n,t),t=Ev(e,t,1),e=sr(e,t,1),t=pt(),e!==null&&(ai(e,1,t),bt(e,t))}function Le(e,t,n){if(e.tag===3)zf(e,e,n);else for(;t!==null;){if(t.tag===3){zf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ur===null||!ur.has(r))){e=jo(n,e),e=Nv(t,e,1),t=sr(t,e,1),e=pt(),t!==null&&(ai(t,1,e),bt(t,e));break}}t=t.return}}function hw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,Qe===e&&(et&n)===n&&(Ge===4||Ge===3&&(et&130023424)===et&&500>We()-_p?Mr(e,0):Ap|=n),bt(e,t)}function Hv(e,t){t===0&&(e.mode&1?(t=wi,wi<<=1,!(wi&130023424)&&(wi=4194304)):t=1);var n=pt();e=Ln(e,t),e!==null&&(ai(e,t,n),bt(e,n))}function mw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hv(e,n)}function vw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(t),Hv(e,n)}var Gv;Gv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)yt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return yt=!1,rw(e,t,n);yt=!!(e.flags&131072)}else yt=!1,ke&&t.flags&1048576&&Ym(t,ds,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xi(e,t),e=t.pendingProps;var o=Vo(t,ut.current);_o(t,n),o=Ep(null,t,r,e,o,n);var a=Np();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,wt(r)?(a=!0,cs(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,xp(t),o.updater=Js,t.stateNode=o,o._reactInternals=t,nc(t,r,e,n),t=ac(null,t,r,!0,a,n)):(t.tag=0,ke&&a&&dp(t),lt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=yw(r),e=Xt(r,e),o){case 0:t=oc(null,t,r,e,n);break e;case 1:t=Tf(null,t,r,e,n);break e;case 11:t=If(null,t,r,e,n);break e;case 14:t=Rf(null,t,r,Xt(r.type,e),n);break e}throw Error(G(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xt(r,o),oc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xt(r,o),Tf(e,t,r,o,n);case 3:e:{if(Tv(t),e===null)throw Error(G(387));r=t.pendingProps,a=t.memoizedState,o=a.element,nv(e,t),ms(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=jo(Error(G(423)),t),t=Af(e,t,r,n,o);break e}else if(r!==o){o=jo(Error(G(424)),t),t=Af(e,t,r,n,o);break e}else for(_t=ir(t.stateNode.containerInfo.firstChild),Ft=t,ke=!0,Qt=null,n=ev(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wo(),r===o){t=Bn(e,t,n);break e}lt(e,t,r,n)}t=t.child}return t;case 5:return rv(t),e===null&&Jl(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Kl(r,o)?i=null:a!==null&&Kl(r,a)&&(t.flags|=32),Rv(e,t),lt(e,t,i,n),t.child;case 6:return e===null&&Jl(t),null;case 13:return Av(e,t,n);case 4:return wp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Uo(t,null,r,n):lt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xt(r,o),If(e,t,r,o,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,Ce(fs,r._currentValue),r._currentValue=i,a!==null)if(rn(a.value,i)){if(a.children===o.children&&!xt.current){t=Bn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=On(-1,n&-n),u.tag=2;var l=a.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),ec(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(G(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ec(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}lt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,_o(t,n),o=jt(o),r=r(o),t.flags|=1,lt(e,t,r,n),t.child;case 14:return r=t.type,o=Xt(r,t.pendingProps),o=Xt(r.type,o),Rf(e,t,r,o,n);case 15:return kv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xt(r,o),Xi(e,t),t.tag=1,wt(r)?(e=!0,cs(t)):e=!1,_o(t,n),Sv(t,r,o),nc(t,r,o,n),ac(null,t,r,!0,e,n);case 19:return _v(e,t,n);case 22:return Iv(e,t,n)}throw Error(G(156,t.tag))};function qv(e,t){return wm(e,t)}function gw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,t,n,r){return new gw(e,t,n,r)}function Mp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yw(e){if(typeof e=="function")return Mp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ep)return 11;if(e===tp)return 14}return 2}function cr(e,t){var n=e.alternate;return n===null?(n=Wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zi(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")Mp(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case mo:return Pr(n.children,o,a,t);case Jc:i=8,o|=8;break;case kl:return e=Wt(12,n,t,o|2),e.elementType=kl,e.lanes=a,e;case Il:return e=Wt(13,n,t,o),e.elementType=Il,e.lanes=a,e;case Rl:return e=Wt(19,n,t,o),e.elementType=Rl,e.lanes=a,e;case rm:return nu(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tm:i=10;break e;case nm:i=9;break e;case ep:i=11;break e;case tp:i=14;break e;case Kn:i=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=Wt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Pr(e,t,n,r){return e=Wt(7,e,r,t),e.lanes=n,e}function nu(e,t,n,r){return e=Wt(22,e,r,t),e.elementType=rm,e.lanes=n,e.stateNode={isHidden:!1},e}function Ju(e,t,n){return e=Wt(6,e,null,t),e.lanes=n,e}function el(e,t,n){return t=Wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xw(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Pp(e,t,n,r,o,a,i,s,u){return e=new xw(e,t,n,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Wt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xp(a),e}function ww(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ho,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Kv(e){if(!e)return mr;e=e._reactInternals;e:{if(Xr(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(wt(n))return Km(e,n,t)}return t}function Xv(e,t,n,r,o,a,i,s,u){return e=Pp(n,r,!0,e,o,a,i,s,u),e.context=Kv(null),n=e.current,r=pt(),o=lr(n),a=On(r,o),a.callback=t??null,sr(n,a,o),e.current.lanes=o,ai(e,o,r),bt(e,r),e}function ru(e,t,n,r){var o=t.current,a=pt(),i=lr(o);return n=Kv(n),t.context===null?t.context=n:t.pendingContext=n,t=On(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sr(o,t,i),e!==null&&(tn(e,o,i,a),Gi(e,o,i)),i}function Ss(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lp(e,t){Vf(e,t),(e=e.alternate)&&Vf(e,t)}function bw(){return null}var Yv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bp(e){this._internalRoot=e}ou.prototype.render=Bp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));ru(e,t,null,null)};ou.prototype.unmount=Bp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jr(function(){ru(null,e,null,null)}),t[Pn]=null}};function ou(e){this._internalRoot=e}ou.prototype.unstable_scheduleHydration=function(e){if(e){var t=Im();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yn.length&&t!==0&&t<Yn[n].priority;n++);Yn.splice(n,0,e),n===0&&Tm(e)}};function zp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wf(){}function Cw(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var l=Ss(i);a.call(l)}}var i=Xv(t,r,e,0,null,!1,!1,"",Wf);return e._reactRootContainer=i,e[Pn]=i.current,Wa(e.nodeType===8?e.parentNode:e),jr(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var l=Ss(u);s.call(l)}}var u=Pp(e,0,!1,null,null,!1,!1,"",Wf);return e._reactRootContainer=u,e[Pn]=u.current,Wa(e.nodeType===8?e.parentNode:e),jr(function(){ru(t,u,n,r)}),u}function iu(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var s=o;o=function(){var u=Ss(i);s.call(u)}}ru(t,i,e,o)}else i=Cw(n,t,e,o,r);return Ss(i)}Nm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ga(t.pendingLanes);n!==0&&(op(t,n|1),bt(t,We()),!(ge&6)&&(Ho=We()+500,wr()))}break;case 13:jr(function(){var r=Ln(e,1);if(r!==null){var o=pt();tn(r,e,1,o)}}),Lp(e,1)}};ap=function(e){if(e.tag===13){var t=Ln(e,134217728);if(t!==null){var n=pt();tn(t,e,134217728,n)}Lp(e,134217728)}};km=function(e){if(e.tag===13){var t=lr(e),n=Ln(e,t);if(n!==null){var r=pt();tn(n,e,t,r)}Lp(e,t)}};Im=function(){return we};Rm=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};Bl=function(e,t,n){switch(t){case"input":if(_l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ys(r);if(!o)throw Error(G(90));am(r),_l(r,o)}}}break;case"textarea":sm(e,n);break;case"select":t=n.value,t!=null&&Io(e,!!n.multiple,t,!1)}};hm=Dp;mm=jr;var Sw={usingClientEntryPoint:!1,Events:[si,xo,Ys,dm,fm,Dp]},la={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ew={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ym(e),e===null?null:e.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||bw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{Gs=_i.inject(Ew),vn=_i}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sw;Pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zp(t))throw Error(G(200));return ww(e,t,null,n)};Pt.createRoot=function(e,t){if(!zp(e))throw Error(G(299));var n=!1,r="",o=Yv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Pp(e,1,!1,null,null,n,!1,r,o),e[Pn]=t.current,Wa(e.nodeType===8?e.parentNode:e),new Bp(t)};Pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=ym(t),e=e===null?null:e.stateNode,e};Pt.flushSync=function(e){return jr(e)};Pt.hydrate=function(e,t,n){if(!au(t))throw Error(G(200));return iu(null,e,t,!0,n)};Pt.hydrateRoot=function(e,t,n){if(!zp(e))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=Yv;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Xv(t,null,e,1,n??null,o,!1,a,i),e[Pn]=t.current,Wa(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ou(t)};Pt.render=function(e,t,n){if(!au(t))throw Error(G(200));return iu(null,e,t,!1,n)};Pt.unmountComponentAtNode=function(e){if(!au(e))throw Error(G(40));return e._reactRootContainer?(jr(function(){iu(null,null,e,!1,function(){e._reactRootContainer=null,e[Pn]=null})}),!0):!1};Pt.unstable_batchedUpdates=Dp;Pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!au(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return iu(e,t,n,!1,r)};Pt.version="18.3.1-next-f1338f8080-20240426";function Qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qv)}catch(e){console.error(e)}}Qv(),Qh.exports=Pt;var Nw=Qh.exports,Zv,Uf=Nw;Zv=Uf.createRoot,Uf.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),li=(e,t)=>{const n=gt.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:s="",children:u,...l},c)=>gt.createElement("svg",{ref:c,...kw,width:o,height:o,stroke:r,strokeWidth:i?Number(a)*24/Number(o):a,className:["lucide",`lucide-${Iw(e)}`,s].join(" "),...l},[...t.map(([p,d])=>gt.createElement(p,d)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=li("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=li("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=li("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=li("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=li("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var eg=function(e,t){return(eg=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)r.hasOwnProperty(o)&&(n[o]=r[o])})(e,t)};function on(e,t){function n(){this.constructor=e}eg(e,t),e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function Z(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(l){try{u(r.next(l))}catch(c){a(c)}}function s(l){try{u(r.throw(l))}catch(c){a(c)}}function u(l){l.done?o(l.value):new n(function(c){c(l.value)}).then(i,s)}u((r=r.apply(e,[])).next())})}function J(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){i=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(c[0]===6&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(p){c=[6,p],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([u,l])}}}var Dw=function(){function e(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return e.prototype.setPlatform=function(t,n){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+n+"."),this.platformName=t,this.platform=n},e.prototype.registerFlag=function(t,n,r){if(this.flagRegistry[t]={evaluationFn:n,setHook:r},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},e.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},e.prototype.getNumber=function(t){return this.get(t)},e.prototype.getBool=function(t){return this.get(t)},e.prototype.getFlags=function(){return this.flags},Object.defineProperty(e.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),e.prototype.set=function(t,n){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)},e.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},e.prototype.setFlags=function(t){this.flags=Object.assign({},t)},e.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},e.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var n,r,o=(n=this.global.location.search,r={},n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return Ow(r,i[0],i[1]),i.join("=")}),r);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];t.urlFlags[s]=function(l,c){if((c=c.toLowerCase())==="true"||c==="false")return c==="true";if(""+ +c===c)return+c;throw new Error("Could not parse value flag value "+c+" for flag "+l+".")}(s,u)})}},e}();function Ow(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}function z(){return tg}var tg=null,Es=new Map,gc=new Map;function ng(e,t){var n=og(e,t);return Es.get(n)}function $f(e){return gc.get(e)}function jf(e){for(var t=Es.entries(),n=[];;){var r=t.next(),o=r.done,a=r.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===e&&n.push(s)}return n}function rg(e){var t=e.kernelName,n=e.backendName,r=og(t,n);if(Es.has(r))throw new Error("The kernel '"+t+"' for backend '"+n+"' is already registered");Es.set(r,e)}function Fw(e){var t=e.kernelName;gc.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),gc.set(t,e)}function og(e,t){return t+"_"+e}function Hf(e){for(var t=e.length,n=0,r=0;t>0;)r=Math.random()*t|0,n=e[--t],e[t]=e[r],e[r]=n}function Ns(e,t,n){return Math.max(e,Math.min(t,n))}function Vp(e){return e%2==0?e:e+1}function ag(e){for(var t=0,n=0;n<e.length;n++)t+=e[n];return t}function I(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function xe(e,t,n){n===void 0&&(n=""),I(qe(e,t),function(){return n+" Shapes "+e+" and "+t+" must match"})}function Yr(e){I(e!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function Hr(e,t,n){if(t===void 0&&(t=[]),n===void 0&&(n=!1),t==null&&(t=[]),Array.isArray(e)||nn(e)&&!n)for(var r=0;r<e.length;++r)Hr(e[r],t,n);else t.push(e);return t}function Q(e){if(e.length===0)return 1;for(var t=e[0],n=1;n<e.length;n++)t*=e[n];return t}function qe(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Be(e){return e%1==0}function ig(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;var t=Math.exp(2*e);return(t-1)/(t+1)}function ks(e){var t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function Lr(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function yc(e,t,n){return t===void 0&&(t=function(r){return 0}),new Promise(function(r,o){var a=0,i=function(){if(e())r();else{a++;var s=t(a);n!=null&&a>=n?o():setTimeout(i,s)}};i()})}function sg(e,t){for(var n=1,r=-1,o=0;o<e.length;++o)if(e[o]>=0)n*=e[o];else if(e[o]===-1){if(r!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+o);r=o}else if(e[o]<0)throw Error("Shapes can not be < 0. Found "+e[o]+" at dim "+o);if(r===-1){if(t>0&&t!==n)throw Error("Size("+t+") must match the product of shape "+e);return e}if(n===0)throw Error("Cannot infer the missing size in ["+e+"] when there are 0 elements");if(t%n!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+n);var a=e.slice();return a[r]=t/n,a}function $e(e,t){var n=t.length;return I((e=e==null?t.map(function(r,o){return o}):[].concat(e)).every(function(r){return r>=-n&&r<n}),function(){return"All values in axis param must be in range [-"+n+", "+n+") but got axis "+e}),I(e.every(function(r){return Be(r)}),function(){return"All values in axis param must be integers but got axis "+e}),e.map(function(r){return r<0?n+r:r})}function Zn(e,t){for(var n=[],r=[],o=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||o?null:$e(t,e).sort(),i=0,s=0;s<e.length;++s){if(a!=null){if(a[i]===s&&e[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+e[s]+"' is not 1");(a[i]==null||a[i]>s)&&e[s]===1&&(n.push(e[s]),r.push(s)),a[i]<=s&&i++}e[s]!==1&&(n.push(e[s]),r.push(s))}return{newShape:n,keptDims:r}}function Gr(e,t){var n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else{if(e!=="bool")throw new Error("Unknown data type "+e);n=new Uint8Array(t)}return n}function Ya(e,t){var n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else{if(e!=="string")throw new Error("Unknown data type "+e);n=new Array(t)}return n}function ug(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(isNaN(r)||!isFinite(r))throw Error("A tensor of type "+t+" being uploaded contains "+r+".")}}function lg(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function cg(e,t){return t!=="complex64"&&(t!=="float32"||e==="complex64")&&(t!=="int32"||e==="float32"||e==="complex64")&&(t!=="bool"||e!=="bool")}function nn(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array}function Wp(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error("Unknown dtype "+e)}function pg(e){if(e==null)return 0;var t=0;return e.forEach(function(n){return t+=n.length}),t}function su(e){return typeof e=="string"||e instanceof String}function dg(e){return typeof e=="boolean"}function fg(e){return typeof e=="number"}function Qo(e){return Array.isArray(e)?Qo(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array?"int32":fg(e)?"float32":su(e)?"string":dg(e)?"bool":"float32"}function Is(e){return!!(e&&e.constructor&&e.call&&e.apply)}function Rs(e,t){for(var n=t;n<e;++n)if(e%n==0)return n;return e}function Ct(e){var t=e.length;if(t<2)return[];var n=new Array(t-1);n[t-2]=e[t-1];for(var r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function Up(e,t,n){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=Hr(e)),n&&ug(e,t),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){for(var r=new Uint8Array(e.length),o=0;o<r.length;++o)Math.round(e[o])!==0&&(r[o]=1);return r}throw new Error("Unknown data type "+t)}function xc(e,t){if(e.length===0)return t[0];var n=e.reduce(function(r,o){return r*o});if(n===0)return[];if(n!==t.length)throw new Error("["+e+"] does not match the input size.");return function r(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],l=0;l<u;l++)s[l]=i[o+l];else{u=a[0];var c=a.slice(1),p=c.reduce(function(d,f){return d*f});for(l=0;l<u;l++)s[l]=r(o+l*p,c,i)}return s}(0,e,t)}function $p(e,t){for(var n=Zo(e,t),r=0;r<n.length;r++)n[r]=1;return n}function Zo(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error("Unknown data type "+t)}function Zt(){return z().platform.now()}function jp(e){e.forEach(function(t){I(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+e+"]."})})}function hg(e,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",z().platform.encode(e,t)}function Qa(e,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",z().platform.decode(e,t)}function Ts(e,t,n){if(t===0)return 0;if(t===1)return e[0];for(var r=e[e.length-1],o=0;o<e.length-1;++o)r+=n[o]*e[o];return r}function Hp(e,t,n){if(t===0)return[];if(t===1)return[e];for(var r=new Array(t),o=0;o<r.length-1;++o)r[o]=Math.floor(e/n[o]),e-=r[o]*n[o];return r[r.length-1]=e,r}var vr=Object.freeze({shuffle:Hf,clamp:Ns,nearestLargerEven:Vp,sum:ag,randUniform:function(e,t){var n=Math.random();return t*n+(1-n)*e},distSquared:function(e,t){for(var n=0,r=0;r<e.length;r++){var o=Number(e[r])-Number(t[r]);n+=o*o}return n},assert:I,assertShapesMatch:xe,assertNonNull:Yr,flatten:Hr,sizeFromShape:Q,isScalarShape:function(e){return e.length===0},arraysEqual:qe,isInt:Be,tanh:ig,sizeToSquarishShape:ks,createShuffledIndices:function(e){for(var t=new Uint32Array(e),n=0;n<e;++n)t[n]=n;return Hf(t),t},rightPad:Lr,repeatedTry:yc,inferFromImplicitShape:sg,parseAxisParam:$e,squeezeShape:Zn,getTypedArrayFromDType:Gr,getArrayFromDType:Ya,checkConversionForErrors:ug,isValidDtype:lg,hasEncodingLoss:cg,isTypedArray:nn,bytesPerElement:Wp,bytesFromStringArray:pg,isString:su,isBoolean:dg,isNumber:fg,inferDtype:Qo,isFunction:Is,nearestDivisor:Rs,computeStrides:Ct,toTypedArray:Up,toNestedArray:xc,makeOnesTypedArray:$p,makeZerosTypedArray:Zo,now:Zt,assertNonNegativeIntegerDimensions:jp,fetch:function(e,t){return z().platform.fetch(e,t)},encodeString:hg,decodeString:Qa,locToIndex:Ts,indexToLoc:Hp}),Mw=function(){function e(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new Pw)}return e.prototype.profileKernel=function(t,n,r){var o,a=this,i=this.backendTimer.time(function(){o=r()});return o.forEach(function(s){s.data().then(function(u){(function(l,c,p){if(c!=="float32")return!1;for(var d=0;d<l.length;d++){var f=l[d];if(isNaN(f)||!isFinite(f))return console.warn("Found "+f+" in the result of '"+p+"'"),!0}})(u,s.dtype,t),i.then(function(l){var c="";l.getExtraProfileInfo!=null&&(c=l.getExtraProfileInfo()),a.logger.logKernelProfile(t,s,u,l.kernelMs,n,c)})})}),o},e}(),Pw=function(){function e(){}return e.prototype.logKernelProfile=function(t,n,r,o,a,i){var s=typeof o=="number"?Lr(o+"ms",9):o.error,u=Lr(t,25),l=n.rank,c=n.size,p=Lr(n.shape.toString(),14),d="";for(var f in a){var m=a[f].shape||n.shape,v=m.length;d+=f+": "+v+"D "+(v>0?m:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+l+"D "+p+"	%c"+c+"	%c"+d+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},e}(),Gf=20,ca=3,tl=7;function Lw(e,t,n,r){var o=Ct(t),a=function(l,c,p,d){var f=Q(c),m=d[d.length-1],v=new Array(m).fill(0),y=c.length,h=p==="complex64"?da(l):l;if(y>1)for(var g=0;g<f/m;g++)for(var x=g*m,w=0;w<m;w++)v[w]=Math.max(v[w],pa(h[x+w],0,p).length);return v}(e,t,n,o),i=t.length,s=function l(c,p,d,f,m,v){v===void 0&&(v=!0);var y=d==="complex64"?2:1,h=p[0],g=p.length;if(g===0)return d==="complex64"?[pa(da(c)[0],0,d)]:d==="bool"?[mg(c[0])]:[c[0].toString()];if(g===1){if(h>Gf){var x=ca*y,w=Array.from(c.slice(0,x)),b=Array.from(c.slice((h-ca)*y,h*y));return d==="complex64"&&(w=da(w),b=da(b)),["["+w.map(function(V,$){return pa(V,m[$],d)}).join(", ")+", ..., "+b.map(function(V,$){return pa(V,m[h-ca+$],d)}).join(", ")+"]"]}return["["+(d==="complex64"?da(c):Array.from(c)).map(function(V,$){return pa(V,m[$],d)}).join(", ")+"]"]}var S=p.slice(1),k=f.slice(1),N=f[0]*y,R=[];if(h>Gf){for(var T=0;T<ca;T++){var D=(F=T*N)+N;R.push.apply(R,l(c.slice(F,D),S,d,k,m,!1))}for(R.push("..."),T=h-ca;T<h;T++)D=(F=T*N)+N,R.push.apply(R,l(c.slice(F,D),S,d,k,m,T===h-1))}else for(T=0;T<h;T++){var F;D=(F=T*N)+N,R.push.apply(R,l(c.slice(F,D),S,d,k,m,T===h-1))}var U=g===2?",":"";for(R[0]="["+R[0]+U,T=1;T<R.length-1;T++)R[T]=" "+R[T]+U;var W=`,
`;for(T=2;T<g;T++)W+=`
`;return R[R.length-1]=" "+R[R.length-1]+"]"+(v?"":W),R}(e,t,n,o,a),u=["Tensor"];return r&&(u.push("  dtype: "+n),u.push("  rank: "+i),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(l){return"    "+l}).join(`
`)),u.join(`
`)}function pa(e,t,n){return Lr(Array.isArray(e)?parseFloat(e[0].toFixed(tl))+" + "+parseFloat(e[1].toFixed(tl))+"j":su(e)?"'"+e+"'":n==="bool"?mg(e):parseFloat(e.toFixed(tl)).toString(),t)}function mg(e){return e===0?"false":"true"}function da(e){for(var t=[],n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var Za=function(){function e(t,n,r){var o=this;if(this.dtype=n,this.shape=t.slice(),this.size=Q(t),r!=null){var a=r.length;I(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Ya(n,this.size),this.strides=Ct(t)}return e.prototype.set=function(t){for(var n=this,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];r.length===0&&(r=[0]),I(r.length===this.rank,function(){return"The number of provided coordinates ("+r.length+") must match the rank ("+n.rank+")"});var a=this.locToIndex(r);this.values[a]=t},e.prototype.get=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];t.length===0&&(t=[0]);for(var r=0,o=0,a=t;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[r]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}r++}for(var u=t[t.length-1],l=0;l<t.length-1;++l)u+=this.strides[l]*t[l];return this.values[u]},e.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var n=t[t.length-1],r=0;r<t.length-1;++r)n+=this.strides[r]*t[r];return n},e.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var n=new Array(this.shape.length),r=0;r<n.length-1;++r)n[r]=Math.floor(t/this.strides[r]),t-=n[r]*this.strides[r];return n[n.length-1]=t,n},Object.defineProperty(e.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),e.prototype.toTensor=function(){return mn().makeTensor(this.values,this.shape,this.dtype)},e}(),mn=null,B=null,vg=null,Ae=function(){function e(t,n,r,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=Q(t),this.strides=Ct(t),this.dataId=r,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return e.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},e.prototype.asScalar=function(){return this.throwIfDisposed(),I(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},e.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},e.prototype.as2D=function(t,n){return this.throwIfDisposed(),this.reshape([t,n])},e.prototype.as3D=function(t,n,r){return this.throwIfDisposed(),this.reshape([t,n,r])},e.prototype.as4D=function(t,n,r,o){return this.throwIfDisposed(),this.reshape([t,n,r,o])},e.prototype.as5D=function(t,n,r,o,a){return this.throwIfDisposed(),this.reshape([t,n,r,o,a])},e.prototype.asType=function(t){return this.throwIfDisposed(),B.cast(this,t)},Object.defineProperty(e.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),e.prototype.buffer=function(){return Z(this,void 0,void 0,function(){var t;return J(this,function(n){switch(n.label){case 0:return[4,this.data()];case 1:return t=n.sent(),[2,B.buffer(this.shape,this.dtype,t)]}})})},e.prototype.bufferSync=function(){return B.buffer(this.shape,this.dtype,this.dataSync())},e.prototype.array=function(){return Z(this,void 0,void 0,function(){var t;return J(this,function(n){switch(n.label){case 0:return[4,this.data()];case 1:return t=n.sent(),[2,xc(this.shape,t)]}})})},e.prototype.arraySync=function(){return xc(this.shape,this.dataSync())},e.prototype.data=function(){return Z(this,void 0,void 0,function(){var t,n;return J(this,function(r){switch(r.label){case 0:return this.throwIfDisposed(),t=mn().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:n=r.sent();try{return[2,n.map(function(o){return Qa(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}r.label=2;case 2:return[2,t]}})})},e.prototype.dataSync=function(){this.throwIfDisposed();var t=mn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(n){return Qa(n)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},e.prototype.bytes=function(){return Z(this,void 0,void 0,function(){var t;return J(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),[4,mn().read(this.dataId)];case 1:return t=n.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},e.prototype.dispose=function(){this.isDisposed||(mn().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(e.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),e.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},e.prototype.toFloat=function(){return this.asType("float32")},e.prototype.toInt=function(){return this.asType("int32")},e.prototype.toBool=function(){return this.asType("bool")},e.prototype.print=function(t){return t===void 0&&(t=!1),B.print(this,t)},e.prototype.reshape=function(t){return this.throwIfDisposed(),B.reshape(this,t)},e.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},e.prototype.expandDims=function(t){return t===void 0&&(t=0),B.expandDims(this,t)},e.prototype.cumsum=function(t,n,r){return t===void 0&&(t=0),n===void 0&&(n=!1),r===void 0&&(r=!1),B.cumsum(this,t,n,r)},e.prototype.squeeze=function(t){return this.throwIfDisposed(),B.squeeze(this,t)},e.prototype.clone=function(){return this.throwIfDisposed(),B.clone(this)},e.prototype.toString=function(t){return t===void 0&&(t=!1),Lw(this.dataSync(),this.shape,this.dtype,t)},e.prototype.gather=function(t,n){return n===void 0&&(n=0),this.throwIfDisposed(),B.gather(this,t,n)},e.prototype.matMul=function(t,n,r){return n===void 0&&(n=!1),r===void 0&&(r=!1),this.throwIfDisposed(),B.matMul(this,t,n,r)},e.prototype.dot=function(t){return this.throwIfDisposed(),B.dot(this,t)},e.prototype.norm=function(t,n,r){return t===void 0&&(t="euclidean"),n===void 0&&(n=null),r===void 0&&(r=!1),this.throwIfDisposed(),B.norm(this,t,n,r)},e.prototype.slice=function(t,n){return this.throwIfDisposed(),B.slice(this,t,n)},e.prototype.reverse=function(t){return this.throwIfDisposed(),B.reverse(this,t)},e.prototype.concat=function(t,n){return n===void 0&&(n=0),this.throwIfDisposed(),t instanceof e&&(t=[t]),B.concat([this].concat(t),n)},e.prototype.split=function(t,n){return n===void 0&&(n=0),this.throwIfDisposed(),B.split(this,t,n)},e.prototype.stack=function(t,n){return n===void 0&&(n=0),B.stack([this,t],n)},e.prototype.unstack=function(t){return t===void 0&&(t=0),B.unstack(this,t)},e.prototype.batchNormalization=function(t,n,r,o,a){return r===void 0&&(r=.001),vg("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,n,a,o,r)},e.prototype.all=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),B.all(this,t,n)},e.prototype.any=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),B.any(this,t,n)},e.prototype.logSumExp=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),B.logSumExp(this,t,n)},e.prototype.sum=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),B.sum(this,t,n)},e.prototype.prod=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),B.prod(this,t,n)},e.prototype.mean=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),B.mean(this,t,n)},e.prototype.min=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),B.min(this,t,n)},e.prototype.max=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),B.max(this,t,n)},e.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),B.argMin(this,t)},e.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),B.argMax(this,t)},e.prototype.cast=function(t){return this.throwIfDisposed(),B.cast(this,t)},e.prototype.addStrict=function(t){return this.throwIfDisposed(),B.addStrict(this,t)},e.prototype.atan2=function(t){return this.throwIfDisposed(),B.atan2(this,t)},e.prototype.sub=function(t){return this.throwIfDisposed(),B.sub(this,t)},e.prototype.subStrict=function(t){return this.throwIfDisposed(),B.subStrict(this,t)},e.prototype.pow=function(t){return this.throwIfDisposed(),B.pow(this,t)},e.prototype.powStrict=function(t){return this.throwIfDisposed(),B.powStrict(this,t)},e.prototype.mul=function(t){return this.throwIfDisposed(),B.mul(this,t)},e.prototype.mulStrict=function(t){return this.throwIfDisposed(),B.mulStrict(this,t)},e.prototype.floorDiv=function(t){return this.throwIfDisposed(),B.floorDiv(this,t)},e.prototype.divStrict=function(t){return this.throwIfDisposed(),B.divStrict(this,t)},e.prototype.minimum=function(t){return this.throwIfDisposed(),B.minimum(this,t)},e.prototype.minimumStrict=function(t){return this.throwIfDisposed(),B.minimumStrict(this,t)},e.prototype.maximum=function(t){return this.throwIfDisposed(),B.maximum(this,t)},e.prototype.maximumStrict=function(t){return this.throwIfDisposed(),B.maximumStrict(this,t)},e.prototype.mod=function(t){return this.throwIfDisposed(),B.mod(this,t)},e.prototype.modStrict=function(t){return this.throwIfDisposed(),B.modStrict(this,t)},e.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),B.squaredDifferenceStrict(this,t)},e.prototype.notEqual=function(t){return this.throwIfDisposed(),B.notEqual(this,t)},e.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),B.notEqualStrict(this,t)},e.prototype.less=function(t){return this.throwIfDisposed(),B.less(this,t)},e.prototype.lessStrict=function(t){return this.throwIfDisposed(),B.lessStrict(this,t)},e.prototype.equal=function(t){return this.throwIfDisposed(),B.equal(this,t)},e.prototype.equalStrict=function(t){return this.throwIfDisposed(),B.equalStrict(this,t)},e.prototype.lessEqual=function(t){return this.throwIfDisposed(),B.lessEqual(this,t)},e.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),B.lessEqualStrict(this,t)},e.prototype.greater=function(t){return this.throwIfDisposed(),B.greater(this,t)},e.prototype.greaterStrict=function(t){return this.throwIfDisposed(),B.greaterStrict(this,t)},e.prototype.greaterEqual=function(t){return this.throwIfDisposed(),B.greaterEqual(this,t)},e.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),B.greaterEqualStrict(this,t)},e.prototype.logicalAnd=function(t){return this.throwIfDisposed(),B.logicalAnd(this,t)},e.prototype.logicalOr=function(t){return this.throwIfDisposed(),B.logicalOr(this,t)},e.prototype.logicalNot=function(){return this.throwIfDisposed(),B.logicalNot(this)},e.prototype.logicalXor=function(t){return this.throwIfDisposed(),B.logicalXor(this,t)},e.prototype.where=function(t,n){return this.throwIfDisposed(),B.where(t,this,n)},e.prototype.neg=function(){return this.throwIfDisposed(),B.neg(this)},e.prototype.ceil=function(){return this.throwIfDisposed(),B.ceil(this)},e.prototype.floor=function(){return this.throwIfDisposed(),B.floor(this)},e.prototype.sign=function(){return this.throwIfDisposed(),B.sign(this)},e.prototype.isNaN=function(){return this.throwIfDisposed(),B.isNaN(this)},e.prototype.isInf=function(){return this.throwIfDisposed(),B.isInf(this)},e.prototype.isFinite=function(){return this.throwIfDisposed(),B.isFinite(this)},e.prototype.exp=function(){return this.throwIfDisposed(),B.exp(this)},e.prototype.expm1=function(){return this.throwIfDisposed(),B.expm1(this)},e.prototype.log=function(){return this.throwIfDisposed(),B.log(this)},e.prototype.log1p=function(){return this.throwIfDisposed(),B.log1p(this)},e.prototype.sqrt=function(){return this.throwIfDisposed(),B.sqrt(this)},e.prototype.rsqrt=function(){return this.throwIfDisposed(),B.rsqrt(this)},e.prototype.square=function(){return this.throwIfDisposed(),B.square(this)},e.prototype.reciprocal=function(){return this.throwIfDisposed(),B.reciprocal(this)},e.prototype.abs=function(){return this.throwIfDisposed(),B.abs(this)},e.prototype.clipByValue=function(t,n){return this.throwIfDisposed(),B.clipByValue(this,t,n)},e.prototype.relu=function(){return this.throwIfDisposed(),B.relu(this)},e.prototype.relu6=function(){return this.throwIfDisposed(),B.relu6(this)},e.prototype.elu=function(){return this.throwIfDisposed(),B.elu(this)},e.prototype.selu=function(){return this.throwIfDisposed(),B.selu(this)},e.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),B.leakyRelu(this,t)},e.prototype.prelu=function(t){return this.throwIfDisposed(),B.prelu(this,t)},e.prototype.sigmoid=function(){return this.throwIfDisposed(),B.sigmoid(this)},e.prototype.logSigmoid=function(){return this.throwIfDisposed(),B.logSigmoid(this)},e.prototype.softplus=function(){return this.throwIfDisposed(),B.softplus(this)},e.prototype.zerosLike=function(){return this.throwIfDisposed(),B.zerosLike(this)},e.prototype.onesLike=function(){return this.throwIfDisposed(),B.onesLike(this)},e.prototype.sin=function(){return this.throwIfDisposed(),B.sin(this)},e.prototype.cos=function(){return this.throwIfDisposed(),B.cos(this)},e.prototype.tan=function(){return this.throwIfDisposed(),B.tan(this)},e.prototype.asin=function(){return this.throwIfDisposed(),B.asin(this)},e.prototype.acos=function(){return this.throwIfDisposed(),B.acos(this)},e.prototype.atan=function(){return this.throwIfDisposed(),B.atan(this)},e.prototype.sinh=function(){return this.throwIfDisposed(),B.sinh(this)},e.prototype.cosh=function(){return this.throwIfDisposed(),B.cosh(this)},e.prototype.tanh=function(){return this.throwIfDisposed(),B.tanh(this)},e.prototype.asinh=function(){return this.throwIfDisposed(),B.asinh(this)},e.prototype.acosh=function(){return this.throwIfDisposed(),B.acosh(this)},e.prototype.atanh=function(){return this.throwIfDisposed(),B.atanh(this)},e.prototype.erf=function(){return this.throwIfDisposed(),B.erf(this)},e.prototype.round=function(){return this.throwIfDisposed(),B.round(this)},e.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),B.step(this,t)},e.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),B.softmax(this,t)},e.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),B.logSoftmax(this,t)},e.prototype.resizeBilinear=function(t,n){return n===void 0&&(n=!1),this.throwIfDisposed(),B.image.resizeBilinear(this,t,n)},e.prototype.resizeNearestNeighbor=function(t,n){return n===void 0&&(n=!1),this.throwIfDisposed(),B.image.resizeNearestNeighbor(this,t,n)},e.prototype.conv1d=function(t,n,r,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),B.conv1d(this,t,n,r,o,a,i)},e.prototype.conv2d=function(t,n,r,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),B.conv2d(this,t,n,r,o,a,i)},e.prototype.conv2dTranspose=function(t,n,r,o,a){return this.throwIfDisposed(),B.conv2dTranspose(this,t,n,r,o,a)},e.prototype.depthwiseConv2D=function(t,n,r,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),B.depthwiseConv2d(this,t,n,r,o,a,i)},e.prototype.separableConv2d=function(t,n,r,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),B.separableConv2d(this,t,n,r,o,a,i)},e.prototype.avgPool=function(t,n,r,o){return this.throwIfDisposed(),B.avgPool(this,t,n,r,o)},e.prototype.maxPool=function(t,n,r,o){return this.throwIfDisposed(),B.maxPool(this,t,n,r,o)},e.prototype.localResponseNormalization=function(t,n,r,o){return t===void 0&&(t=5),n===void 0&&(n=1),r===void 0&&(r=1),o===void 0&&(o=.5),B.localResponseNormalization(this,t,n,r,o)},e.prototype.pool=function(t,n,r,o,a){return this.throwIfDisposed(),B.pool(this,t,n,r,o,a)},e.prototype.variable=function(t,n,r){return t===void 0&&(t=!0),this.throwIfDisposed(),mn().makeVariable(this,t,n,r)},e.prototype.unsortedSegmentSum=function(t,n){return this.throwIfDisposed(),B.unsortedSegmentSum(this,t,n)},e.prototype.batchToSpaceND=function(t,n){return this.throwIfDisposed(),B.batchToSpaceND(this,t,n)},e.prototype.spaceToBatchND=function(t,n){return this.throwIfDisposed(),B.spaceToBatchND(this,t,n)},e.prototype.topk=function(t,n){return t===void 0&&(t=1),n===void 0&&(n=!0),this.throwIfDisposed(),B.topk(this,t,n)},e.prototype.stridedSlice=function(t,n,r,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),B.stridedSlice(this,t,n,r,o,a,i,s,u)},e.prototype.depthToSpace=function(t,n){return this.throwIfDisposed(),B.depthToSpace(this,t,n)},e.prototype.fft=function(){return this.throwIfDisposed(),B.spectral.fft(this)},e.prototype.ifft=function(){return this.throwIfDisposed(),B.spectral.ifft(this)},e.prototype.rfft=function(){return this.throwIfDisposed(),B.spectral.rfft(this)},e.prototype.irfft=function(){return this.throwIfDisposed(),B.spectral.irfft(this)},e}();Object.defineProperty(Ae,Symbol.hasInstance,{value:function(e){return!!e&&e.dataId!=null&&e.shape!=null&&e.dtype!=null}});var qf,wc,bc,Cc,Sc,As=function(e){function t(n,r,o,a){var i=e.call(this,n.shape,n.dtype,n.dataId,a)||this;return i.trainable=r,i.name=o,i}return on(t,e),t.prototype.assign=function(n){if(n.dtype!==this.dtype)throw new Error("dtype of the new value ("+n.dtype+") and previous value ("+this.dtype+") must match");if(!qe(n.shape,this.shape))throw new Error("shape of the new value ("+n.shape+") and previous value ("+this.shape+") must match");mn().disposeTensor(this),this.dataId=n.dataId,mn().incRef(this,null)},t.prototype.dispose=function(){mn().disposeVariable(this),this.isDisposedInternal=!0},t}(Ae);Object.defineProperty(As,Symbol.hasInstance,{value:function(e){return e instanceof Ae&&e.assign!=null&&e.assign instanceof Function}}),function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"}(qf||(qf={})),function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"}(wc||(wc={})),function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"}(bc||(bc={})),function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"}(Cc||(Cc={})),function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"}(Sc||(Sc={}));var Bw={float32:Cc,int32:wc,bool:bc,complex64:Sc};function Je(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error("Can not upcast "+e+" with "+t)}return Bw[e][t]}function nl(e){return Je(e,"int32")}function Fe(e,t){if(e.dtype===t.dtype)return[e,t];var n=Je(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function zw(e,t){I(e.dtype===t.dtype,function(){return"The dtypes of the first("+e.dtype+") and second("+t.dtype+") input must match"})}function gg(e){var t=[];return function n(r,o,a){if(r!=null){if(r instanceof Ae)return void o.push(r);if(i=r,!(!Array.isArray(i)&&typeof i!="object")){var i,s=r;for(var u in s){var l=s[u];a.has(l)||(a.add(l),n(l,o,a))}}}}(e,t,new Set),t}var rl,Kf=function(){function e(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return e.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},e}(),Vw=function(){function e(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Kf}return e.prototype.ready=function(){return Z(this,void 0,void 0,function(){var t,n,r;return J(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),n=0,o.label=1;case 1:return n<t.length?(r=t[n],[4,this.initializeBackend(r).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(r)]:[3,4];case 3:return o.sent(),[2];case 4:return n++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(e.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),n=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+n+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(n)}return this.backendInstance},enumerable:!0,configurable:!0}),e.prototype.backendNames=function(){return Object.keys(this.registryFactory)},e.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},e.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},e.prototype.registerBackend=function(t,n,r){return r===void 0&&(r=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:n,priority:r},!0)},e.prototype.setBackend=function(t){return Z(this,void 0,void 0,function(){var n,r,o;return J(this,function(a){switch(a.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,n=this.initializeBackend(t),r=n.success,n.asyncInit?[4,r]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=r,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Mw(this.backendInstance),[2,!0]}})})},e.prototype.setupRegisteredKernels=function(){var t=this;jf(this.backendName).forEach(function(n){n.setupFunc!=null&&n.setupFunc(t.backendInstance)})},e.prototype.disposeRegisteredKernels=function(t){var n=this;jf(t).forEach(function(r){r.disposeFunc!=null&&r.disposeFunc(n.registry[t])})},e.prototype.initializeBackend=function(t){var n=this,r=this.registryFactory[t];if(r==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=r.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<n.pendingBackendInitId)&&(n.registry[t]=s,n.pendingBackendInit=null,!0)}).catch(function(s){return!(a<n.pendingBackendInitId)&&(n.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},e.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},e.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(n,r){return t.registryFactory[r].priority-t.registryFactory[n].priority})},e.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),n=0;n<t.length;n++){var r=t[n],o=this.initializeBackend(r),a=o.success,i=o.asyncInit;if(i||a)return{name:r,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},e.prototype.moveData=function(t,n){var r=this.state.tensorInfo.get(n),o=r.backend,a=this.readSync(n);o.disposeData(n),r.backend=t,t.move(n,a,r.shape,r.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},e.prototype.tidy=function(t,n){var r,o=this,a=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=t}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(r)},function(){return(r=n())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r})},e.prototype.scopedRun=function(t,n,r){t();try{var o=r();return n(),o}catch(a){throw n(),a}},e.prototype.nextTensorId=function(){return e.nextTensorId++},e.prototype.nextVariableId=function(){return e.nextVariableId++},e.prototype.clone=function(t){var n=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),r={x:t};return this.addTapeNode(this.state.activeScope.name,r,[n],function(o){return{x:function(){return o.toFloat()}}},[],{}),n},e.prototype.runKernel=function(t,n,r,o,a){return this.runKernelFunc(null,n,null,t,r,o,a)},e.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},e.prototype.checkKernelForMemLeak=function(t,n,r){var o=this.backend.numDataIds(),a=0;r.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-n-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},e.prototype.runKernelFunc=function(t,n,r,o,a,i,s){var u,l=this,c=[],p=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var d,f=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,y=ng(o,this.backendName);if(y!=null)d=function(){var g=l.backend.numDataIds();v=y.kernelFunc({inputs:n,attrs:a,backend:l.backend});var x=Array.isArray(v)?v:[v];l.shouldCheckForMemLeaks()&&l.checkKernelForMemLeak(o,g,x);var w=x.map(function(k){var N=k.dataId,R=k.shape,T=k.dtype;return l.makeTensorFromDataId(N,R,T)});if(p){var b=l.getTensorsForGradient(o,n,w);if(b==null){s==null&&(s=[]);var S=w.filter(function(k,N){return s[N]});b=(i||[]).slice().concat(S)}c=l.saveTensorsForBackwardMode(b)}return w};else{var h=function(g){p&&(c=g.map(function(x){return l.keep(l.clone(x))}))};d=function(){var g=l.backend.numDataIds();v=l.tidy(function(){return t(l.backend,h)});var x=Array.isArray(v)?v:[v];return l.shouldCheckForMemLeaks()&&l.checkKernelForMemLeak(o,g,x),x}}return this.scopedRun(function(){return l.state.kernelDepth++},function(){return l.state.kernelDepth--},function(){u=l.ENV.getBool("DEBUG")?l.profiler.profileKernel(o,n,function(){return d()}):d()}),p&&this.addTapeNode(o,n,u,r,c,a),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-f,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(n).map(function(g){return n[g].shape}),outputShapes:u.map(function(g){return g.shape})}),Array.isArray(v)?u:u[0]},e.prototype.saveTensorsForBackwardMode=function(t){var n=this;return t.map(function(r){return n.keep(n.clone(r))})},e.prototype.getTensorsForGradient=function(t,n,r){var o=$f(t);if(o!=null){var a=o.inputsToSave||[],i=o.outputsToSave||[],s=void 0;o.saveAllInputs?(I(Array.isArray(n),function(){return"saveAllInputs is true, expected inputs to be an array."}),s=Object.keys(n).map(function(l){return n[l]})):s=a.map(function(l){return n[l]});var u=r.filter(function(l,c){return i[c]});return s.concat(u)}return null},e.prototype.makeTensor=function(t,n,r,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",o=o||this.backend;var a=t;r==="string"&&su(t[0])&&(a=t.map(function(c){return hg(c)}));var i=o.write(a,n,r),s=new Ae(n,r,i,this.nextTensorId());if(this.incRef(s,o),r==="string"){var u=this.state.tensorInfo.get(i),l=pg(a);this.state.numBytes+=l-u.bytes,u.bytes=l}return s},e.prototype.makeTensorFromDataId=function(t,n,r,o){var a=new Ae(n,r=r||"float32",t,this.nextTensorId());return this.incRef(a,o),a},e.prototype.makeVariable=function(t,n,r,o){n===void 0&&(n=!0),r=r||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var a=new As(t,n,r,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},e.prototype.incRef=function(t,n){var r=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,r===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*Wp(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof As||this.track(t)},e.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var n=this.state.tensorInfo.get(t.dataId);n.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=n.bytes),this.state.numDataBuffers--,n.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},e.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var n=this.state.registeredVariables[t];this.disposeVariable(n)}},e.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},e.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},e.prototype.profile=function(t){return Z(this,void 0,void 0,function(){var n,r;return J(this,function(o){return this.state.profiling=!0,n=this.state.numBytes,r=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r,[2,this.state.activeProfile]})})},e.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},e.prototype.addTapeNode=function(t,n,r,o,a,i){var s=this,u={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:r,saved:a},l=$f(t);l!=null&&(o=l.gradFunc),o!=null&&(u.gradient=function(c){return c=c.map(function(p,d){if(p==null){var f=r[d],m=Zo(f.size,f.dtype);return s.makeTensor(m,f.shape,f.dtype)}return p}),o(c.length>1?c:c[0],a,i)}),this.state.activeTape.push(u)},e.prototype.keep=function(t){return t.kept=!0,t},e.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},e.prototype.endTape=function(){this.state.gradientDepth--},e.prototype.startScope=function(t){var n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n},e.prototype.endScope=function(t){for(var n=this,r=gg(t),o=new Set(r.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach(function(u){u.kept||u.scopeId!==s.id||n.track(u)})},e.prototype.gradients=function(t,n,r,o){var a=this;if(o===void 0&&(o=!1),I(n.length>0,function(){return"gradients() received an empty list of xs."}),r!=null&&r.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+r.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",t)});I(i instanceof Ae,function(){return"The result y returned by f() must be a tensor."});var s=function(u,l,c){for(var p={},d={},f=0;f<l.length;f++)p[l[f].id]=!0;for(f=0;f<u.length;f++){var m=(S=u[f]).inputs;for(var v in m){for(var y=m[v],h=!1,g=0;g<l.length;g++)if(p[y.id]){S.outputs.forEach(function(T){return p[T.id]=!0}),h=!0,d[S.id]=!0;break}if(h)break}}var x={};x[c.id]=!0;var w={};for(f=u.length-1;f>=0;f--)for(m=(S=u[f]).inputs,g=0;g<S.outputs.length;g++)if(x[S.outputs[g].id]){for(var v in m)x[m[v].id]=!0,w[S.id]=!0;break}var b=[];for(f=0;f<u.length;f++){var S;if(d[(S=u[f]).id]&&w[S.id]){var k={};for(var v in S.inputs){var N=S.inputs[v];p[N.id]&&(k[v]=N)}var R=Object.assign({},S);R.inputs=k,R.outputs=S.outputs,b.push(R)}}return b}(this.state.activeTape,n,i);if(!o&&s.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,l,c={};c[i.id]=r??(u=i.shape,l=$p(Q(u),"float32"),_.makeTensor(l,u,"float32")),function(d,f,m){for(var v=function(h){var g=f[h],x=[];if(g.outputs.forEach(function(k){var N=d[k.id];N!=null?x.push(N):x.push(null)}),g.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+g.kernelName+".");var w=g.gradient(x),b=function(k){if(!(k in w))throw new Error("Cannot backprop through input "+k+". Available gradients found: "+Object.keys(w)+".");var N=m(function(){return w[k]()});if(N.dtype!=="float32")throw new Error("Error in gradient for op "+g.kernelName+". The gradient of input "+k+" must have 'float32' dtype, but has '"+N.dtype+"'");var R=g.inputs[k];if(!qe(N.shape,R.shape))throw new Error("Error in gradient for op "+g.kernelName+". The gradient of input '"+k+"' has shape '"+N.shape+"', which does not match the shape of the input '"+R.shape+"'");if(d[R.id]==null)d[R.id]=N;else{var T=d[R.id];d[R.id]=T.add(N),T.dispose()}};for(var S in g.inputs)b(S)},y=f.length-1;y>=0;y--)v(y)}(c,s,function(d){return a.tidy(d)});var p=n.map(function(d){return c[d.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(d){for(var f=0,m=d.saved;f<m.length;f++)m[f].dispose()}),a.state.activeTape=null),{value:i,grads:p}})},e.prototype.customGrad=function(t){var n=this;return I(Is(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var r,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];I(o.every(function(s){return s instanceof Ae}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),n.runKernelFunc(function(s,u){return I((r=t.apply(void 0,o.concat([u]))).value instanceof Ae,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),I(Is(r.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),r.value},i,function(s,u){var l=r.gradFunc(s,u),c=Array.isArray(l)?l:[l];I(c.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),I(c.every(function(d){return d instanceof Ae}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var p={};return c.forEach(function(d,f){p[f]=function(){return d}}),p})}},e.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},e.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},e.prototype.time=function(t){return Z(this,void 0,void 0,function(){var n,r;return J(this,function(o){switch(o.label){case 0:return n=Zt(),[4,this.backend.time(t)];case 1:return(r=o.sent()).wallMs=Zt()-n,[2,r]}})})},e.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(e.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),e.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Kf,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},e.nextTensorId=0,e.nextVariableId=0,e}(),_=function(){var e=function(){if(rl==null){var n=void 0;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else{if(typeof self>"u")throw new Error("Could not find a global object");n=self}rl=n}return rl}();if(e._tfengine==null){var t=new Dw(e);e._tfengine=new Vw(t)}return function(n){tg=n}(e._tfengine.ENV),mn=function(){return e._tfengine},e._tfengine}();function yg(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Nn=z();Nn.registerFlag("DEBUG",function(){return!1},function(e){e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Nn.registerFlag("IS_BROWSER",function(){return yg()}),Nn.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),Nn.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),Nn.registerFlag("PROD",function(){return!1}),Nn.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return Nn.getBool("DEBUG")}),Nn.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),Nn.registerFlag("IS_TEST",function(){return!1});var Ja,Dt,Tt,Ir={},ol={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Ww(e,t){Ir[e]=t}function xn(e){e in Ir||(Ir[e]=function(n){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var r=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(n);return r.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete Ir[n]},!1),n===1?r.getContext("webgl",ol)||r.getContext("experimental-webgl",ol):r.getContext("webgl2",ol)}(e));var t=Ir[e];return t.isContextLost()?(delete Ir[e],xn(e)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),Ir[e])}function uu(e,t){return[t,e]}function Aa(e){var t=Q(e);return ks(Math.ceil(t/4))}function ci(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function Gp(e,t){var n,r,o,a,i,s,u,l,c,p=e;return z().getNumber("WEBGL_VERSION")===2?(n=p.R32F,r=p.R16F,o=p.RGBA16F,a=p.RGBA32F,i=p.RED,s=4,u=1,l=p.HALF_FLOAT,c=p.FLOAT):(n=e.RGBA,r=e.RGBA,o=e.RGBA,a=p.RGBA,i=e.RGBA,s=4,u=4,l=t!=null?t.HALF_FLOAT_OES:null,c=e.FLOAT),{internalFormatFloat:n,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:e.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:l,textureTypeFloat:c}}function ee(e,t,n){var r=n();return t&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+Hw(o,a))}(e),r}(function(e){e[e.DENSE=0]="DENSE",e[e.SHARED_BATCH=1]="SHARED_BATCH"})(Ja||(Ja={})),function(e){e[e.RENDER=0]="RENDER",e[e.UPLOAD=1]="UPLOAD",e[e.PIXELS=2]="PIXELS",e[e.DOWNLOAD=3]="DOWNLOAD"}(Dt||(Dt={})),function(e){e[e.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",e[e.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",e[e.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",e[e.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",e[e.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(Tt||(Tt={}));var Uw=596e-10,$w=65504;function jw(e){return!!(z().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||e===0||Uw<Math.abs(e)&&Math.abs(e)<$w)}function Hw(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function Di(e,t,n){return jn(e,t,function(){return e.getExtension(n)},'Extension "'+n+'" not supported on this browser.')}function Gw(e,t,n){var r=jn(e,t,function(){return e.createShader(e.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(ee(e,t,function(){return e.shaderSource(r,n)}),ee(e,t,function(){return e.compileShader(r)}),e.getShaderParameter(r,e.COMPILE_STATUS)===!1)throw console.log(e.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function qw(e,t,n){var r=jn(e,t,function(){return e.createShader(e.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(ee(e,t,function(){return e.shaderSource(r,n)}),ee(e,t,function(){return e.compileShader(r)}),e.getShaderParameter(r,e.COMPILE_STATUS)===!1)throw function(o,a){var i=Kw.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),l=u.length.toString().length+2,c=u.map(function(y,h){return Lr((h+1).toString(),l)+y}),p=0,d=0;d<c.length;d++)p=Math.max(c[d].length,p);var f=c.slice(0,s-1),m=c.slice(s-1,s),v=c.slice(s);console.log(f.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+Lr(m[0],p),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(v.join(`
`))}(n,e.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var al,il,Kw=/ERROR: [0-9]+:([0-9]+):/g;function Xw(e,t){return jn(e,t,function(){return e.createProgram()},"Unable to create WebGLProgram.")}function Yw(e,t,n){if(ee(e,t,function(){return e.linkProgram(n)}),e.getProgramParameter(n,e.LINK_STATUS)===!1)throw console.log(e.getProgramInfoLog(n)),new Error("Failed to link vertex and fragment shaders.")}function sl(e,t,n){if(ee(e,t,function(){return e.validateProgram(n)}),e.getProgramParameter(n,e.VALIDATE_STATUS)===!1)throw console.log(e.getProgramInfoLog(n)),new Error("Shader program validation failed.")}function Qw(e,t,n){var r=jn(e,t,function(){return e.createBuffer()},"Unable to create WebGLBuffer");return ee(e,t,function(){return e.bindBuffer(e.ARRAY_BUFFER,r)}),ee(e,t,function(){return e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW)}),r}function Zw(e,t,n){var r=jn(e,t,function(){return e.createBuffer()},"Unable to create WebGLBuffer");return ee(e,t,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r)}),ee(e,t,function(){return e.bufferData(e.ELEMENT_ARRAY_BUFFER,n,e.STATIC_DRAW)}),r}function Jw(e,t){return jn(e,t,function(){return e.createTexture()},"Unable to create WebGLTexture.")}function eb(e,t){var n=z().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||t<=0){var r="["+e+"x"+t+"]";throw new Error("Requested texture size "+r+" is invalid.")}if(e>n||t>n)throw r="["+e+"x"+t+"]",new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+("["+n+"x"+n+"]")+".")}function tb(e,t){return jn(e,t,function(){return e.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Xf(e,t,n,r,o,a,i,s){var u=e.getAttribLocation(n,r);return u!==-1&&(ee(e,t,function(){return e.bindBuffer(e.ARRAY_BUFFER,o)}),ee(e,t,function(){return e.vertexAttribPointer(u,a,e.FLOAT,!1,i,s)}),ee(e,t,function(){return e.enableVertexAttribArray(u)}),!0)}function nb(e,t,n,r){sb(e,r),ee(e,t,function(){return e.activeTexture(e.TEXTURE0+r)}),ee(e,t,function(){return e.bindTexture(e.TEXTURE_2D,n)})}function rb(e,t,n,r){return jn(e,t,function(){return e.getUniformLocation(n,r)},'uniform "'+r+'" not present in program.')}function ob(e,t,n){return e.getUniformLocation(t,n)}function ab(e,t,n,r,o,a){ee(e,t,function(){return nb(e,t,r,a)}),ee(e,t,function(){return e.uniform1i(o,a)})}function ul(e,t,n,r){ee(e,t,function(){return e.bindFramebuffer(e.FRAMEBUFFER,r)}),ee(e,t,function(){return e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)})}function Yf(e,t,n){ee(e,t,function(){return e.bindFramebuffer(e.FRAMEBUFFER,n)}),ee(e,t,function(){return e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0)})}function Oi(e){var t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+ib(e,t))}function ib(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function jn(e,t,n,r){var o=ee(e,t,function(){return n()});if(o==null)throw new Error(r);return o}function sb(e,t){var n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+n+"]")+".")}function _s(e,t){return t===void 0&&(t=2),Q(e.slice(0,e.length-t))}function Ds(e){if(e.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function ll(e){var t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[_s(e)].concat(Ds(e))),t}function ub(e,t){var n;t===void 0&&(t=!1);var r=z().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(r*=2,(e=e.map(function(l,c){return c>=e.length-2?Vp(e[c]):e[c]})).length===1&&(e=[2,e[0]])),e.length!==2){var o=Zn(e);e=o.newShape}var a=Q(e);if(e.length<=1&&a<=r)return[1,a];if(e.length===2&&e[0]<=r&&e[1]<=r)return e;if(e.length===3&&e[0]*e[1]<=r&&e[2]<=r)return[e[0]*e[1],e[2]];if(e.length===3&&e[0]<=r&&e[1]*e[2]<=r)return[e[0],e[1]*e[2]];if(e.length===4&&e[0]*e[1]*e[2]<=r&&e[3]<=r)return[e[0]*e[1]*e[2],e[3]];if(e.length===4&&e[0]<=r&&e[1]*e[2]*e[3]<=r)return[e[0],e[1]*e[2]*e[3]];if(t){var i=_s(e),s=2,u=2;return e.length&&(s=(n=Ds(e))[0],u=n[1]),ks(a=i*(s/2)*(u/2)).map(function(l){return 2*l})}return ks(a)}function Fi(e){return e%2==0}function Mi(e,t){if(qe(e=e.slice(-2),t=t.slice(-2))||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){var n=e.slice(-1)[0],r=t.slice(-1)[0];if(n===r||Fi(n)&&Fi(r)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&Fi(e[0])&&Fi(t[0])}function lb(e){if(al==null){var t=xn(e);al=t.getParameter(t.MAX_TEXTURE_SIZE)}return al}function cb(e){if(il==null){var t=xn(e);il=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,il)}function pb(e){if(e===0)return 0;var t=xn(e);return Ut(t,"EXT_disjoint_timer_query_webgl2")&&e===2?2:Ut(t,"EXT_disjoint_timer_query")?1:0}function Ut(e,t){return e.getExtension(t)!=null}function Qf(e){try{if(xn(e)!=null)return!0}catch{return!1}return!1}function db(e){if(e===0)return!1;var t=xn(e);if(e===1){if(!Ut(t,"OES_texture_float"))return!1}else if(!Ut(t,"EXT_color_buffer_float"))return!1;return Ec(t)}function fb(e){if(e===0)return!1;var t=xn(e);if(e!==1){if(Ut(t,"EXT_color_buffer_float"))return Ec(t);if(Ut(t,"EXT_color_buffer_half_float")){var n=t.getExtension("EXT_color_buffer_half_float");return function(r,o){var a=Gp(r,o),i=r.createTexture();r.bindTexture(r.TEXTURE_2D,i),r.texImage2D(r.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,i,0);var u=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(i),r.deleteFramebuffer(s),u}(t,n)}return!1}return!!Ut(t,"OES_texture_float")&&!!Ut(t,"WEBGL_color_buffer_float")&&Ec(t)}function Ec(e){var t=Gp(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);var o=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),o}function hb(e){return e===2&&xn(e).fenceSync!=null}var re=z();function xg(e){z().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function le(e,t){return _.tidy(e,t)}function St(e){gg(e).forEach(function(t){return t.dispose()})}function mb(e){return _.keep(e)}function Os(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];z().getBool("IS_TEST")||console.warn.apply(console,e)}function br(e,t){var n=e;if(nn(e))return t==="string"?[]:[e.length];if(!Array.isArray(e))return[];for(var r=[];Array.isArray(n)||nn(n)&&t!=="string";)r.push(n.length),n=n[0];return Array.isArray(e)&&z().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!nn(a))return void I(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});I(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),I(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),l=0;l<a.length;++l)o(a[l],u,s.concat(l))}(e,r,[]),r}function Zf(e,t,n,r){if(e!=null&&(e!=="numeric"&&e!==t||e==="numeric"&&t==="string"))throw new Error("Argument '"+n+"' passed to '"+r+"' must be "+e+" tensor, but got "+t+" tensor")}function E(e,t,n,r){if(r===void 0&&(r="numeric"),e instanceof Ae)return Zf(r,e.dtype,t,n),e;var o=Qo(e);if(o!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(o=r),Zf(r,o,t,n),e==null||!nn(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){var a=e==null?"null":e.constructor.name;throw new Error("Argument '"+t+"' passed to '"+n+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=br(e,o);nn(e)||Array.isArray(e)||(e=[e]);var s=o!=="string"?Up(e,o,z().getBool("DEBUG")):Hr(e,[],!0);return _.makeTensor(s,i,o)}function Fs(e,t,n,r){if(r===void 0&&(r="numeric"),!Array.isArray(e))throw new Error("Argument "+t+" passed to "+n+" must be a `Tensor[]` or `TensorLike[]`");return e.map(function(o,a){return E(o,t+"["+a+"]",n)},r)}function wg(e,t){for(var n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function vb(e,t,n){for(var r=e.length+t.length,o=[],a=0,i=0,s=0;s<r;s++)n.indexOf(s)===-1?o.push(e[a++]):o.push(t[i++]);return o}function ot(e,t){for(var n=[],r=e.length,o=0;o<r;o++)t.indexOf(o)===-1&&n.push(e[o]);return[n,t.map(function(a){return e[a]})]}function Et(e,t){return vb(e,t.map(function(n){return 1}),t)}function Rt(e,t,n){I(wg(t,n),function(){return e+" supports only inner-most axes for now. Got axes "+t+" and rank-"+n+" input."})}function wn(e,t){if(wg(e,t))return null;for(var n=[],r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);return e.forEach(function(o){return n.push(o)}),n}function qp(e){return e.map(function(t,n){return[n,t]}).sort(function(t,n){return t[1]-n[1]}).map(function(t){return t[0]})}function bn(e,t){for(var n=[],r=t-e;r<t;++r)n.push(r);return n}function gb(e,t){var n=e[0].length;e.forEach(function(o,a){I(o.length===n,function(){return"Error in concat"+n+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+n+")"})}),I(t>=0&&t<n,function(){return"Error in concat"+n+"D: axis must be between 0 and "+(n-1)+"."});var r=e[0];e.forEach(function(o,a){for(var i=0;i<n;i++)I(i===t||o[i]===r[i],function(){return"Error in concat"+n+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+r+") along the non-concatenated axis "+a+"."})})}function Go(e,t){for(var n=e[0].slice(),r=1;r<e.length;r++)n[t]+=e[r][t];return n}function A(e){var t=Object.keys(e);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var n=t[0],r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];_.startScope(n);try{var s=r.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),_.endScope(s),s}catch(u){throw _.endScope(null),u}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}re.registerFlag("HAS_WEBGL",function(){return re.getNumber("WEBGL_VERSION")>0}),re.registerFlag("WEBGL_VERSION",function(){return Qf(2)?2:Qf(1)?1:0}),re.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return re.get("WEBGL_VERSION")===2}),re.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),re.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),re.registerFlag("WEBGL_PACK",function(){return re.getBool("HAS_WEBGL")}),re.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_PACK_CLIP",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),re.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_PACK_REDUCE",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_LAZILY_UNPACK",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_CONV_IM2COL",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return lb(re.getNumber("WEBGL_VERSION"))}),re.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return cb(re.getNumber("WEBGL_VERSION"))}),re.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var e=re.getNumber("WEBGL_VERSION");return e===0?0:pb(e)}),re.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return re.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(e=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))));var e}),re.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return db(re.getNumber("WEBGL_VERSION"))}),re.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!re.getBool("WEBGL_FORCE_F16_TEXTURES")&&re.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),re.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return fb(re.getNumber("WEBGL_VERSION"))}),re.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return hb(re.getNumber("WEBGL_VERSION"))}),re.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return re.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),vg=xg;var Ke=A({complex_:function(e,t){var n=E(e,"real","complex"),r=E(t,"imag","complex");return xe(n.shape,r.shape,"real and imag shapes, "+n.shape+" and "+r.shape+", must match in call to tf.complex()."),_.runKernelFunc(function(o){return o.complex(n,r)},{$real:n,$imag:r})}}),At=A({real_:function(e){var t=E(e,"input","real");return _.runKernelFunc(function(n){return n.real(t)},{$input:t})}}),Jt=A({imag_:function(e){var t=E(e,"input","imag");return _.runKernelFunc(function(n){return n.imag(t)},{$input:t})}});function Ye(e,t,n){return Cr(e,t,br(e,n),n)}function Cr(e,t,n,r){if(r==null&&(r=Qo(e)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!nn(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){jp(t);var o=Q(t),a=Q(n);I(o===a,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<n.length;++i){var s=n[i],u=i!==n.length-1||s!==Q(t.slice(i));I(n[i]===t[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+n+") does not match the provided shape ("+t+"). "})}}return nn(e)||Array.isArray(e)||(e=[e]),t=t||n,e=r!=="string"?Up(e,r,z().getBool("DEBUG")):Hr(e,[],!0),_.makeTensor(e,t,r)}function X(e,t){if((nn(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&nn(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Cr(e,[],[],t)}function zn(e,t){Yr(e);var n=br(e,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Cr(e,null,n,t)}function Br(e,t,n){if(Yr(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var r=br(e,n);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Cr(e,t,r,n)}function bg(e,t,n){if(Yr(e),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var r=br(e,n);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Cr(e,t,r,n)}function Rr(e,t,n){if(Yr(e),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var r=br(e,n);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Cr(e,t,r,n)}function yb(e,t,n){if(Yr(e),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var r=br(e,n);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Cr(e,t,r,n)}function xb(e,t,n){if(Yr(e),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var r=br(e,n);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return Cr(e,t=t||r,r,n)}function wb(e,t,n,r){return t===void 0&&(t=!0),_.makeVariable(e,t,n,r)}function Qr(e,t){if(t===void 0&&(t="float32"),t==="complex64"){var n=Qr(e,"float32"),r=Te(e,"float32");return Ke(n,r)}var o=$p(Q(e),t);return _.makeTensor(o,e,t)}function Te(e,t){if(t===void 0&&(t="float32"),t==="complex64"){var n=Te(e,"float32"),r=Te(e,"float32");return Ke(n,r)}var o=Zo(Q(e),t);return _.makeTensor(o,e,t)}function lu(e,t,n){return _.runKernelFunc(function(r){return r.fill(e,t,n)},{})}function Cg(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");return _.runKernelFunc(function(r){return r.linspace(e,t,n)},{})}function ei(e,t,n,r){if(n===void 0&&(n=1),r===void 0&&(r="float32"),n===0)throw new Error("Cannot have a step of zero");if(e===t||e<t&&n<0||t<e&&n>1)return Te([0],r);var o=Zo(Math.abs(Math.ceil((t-e)/n)),r);t<e&&n===1&&(n=-1),o[0]=e;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return zn(o,r)}var Kp=A({onesLike_:function(e){var t=E(e,"x","onesLike");if(t.dtype==="complex64"){var n=Kp(At(t)),r=me(Jt(t));return Ke(n,r)}return _.runKernelFunc(function(o){return o.onesLike(t)},{x:t},function(o,a){return{x:function(){return me(o)}}},"OnesLike")}}),me=A({zerosLike_:function(e){var t=E(e,"x","zerosLike");return _.runKernelFunc(function(n){return n.zerosLike(t)},{x:t},function(n,r){return{x:function(){return me(n)}}},"ZerosLike")}}),Gt=A({concat_:function(e,t){t===void 0&&(t=0),I(e.length>=1,function(){return"Pass at least one tensor to concat"});var n=Fs(e,"tensors","concat");n[0].dtype==="complex64"&&n.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=$e(t,n[0].shape)[0];var r=Go(n.map(function(s){return s.shape}),t);if(Q(r)===0)return Ye([],r);if((n=n.filter(function(s){return s.size>0})).length===1)return n[0];var o=n.map(function(s){return s.shape});gb(o,t);var a=n,i={axis:t};return _.runKernelFunc(function(s){return s.concat(n,t)},a,function(s){var u=o.map(function(l){return l[t]});return cu(s,u,t).map(function(l){return function(){return l}})},"Concat",i)}}),bb=A({concat1d_:function(e){return Gt(e,0)}}),Cb=A({concat2d_:function(e,t){return Gt(e,t)}}),Sb=A({concat3d_:function(e,t){return Gt(e,t)}}),Eb=A({concat4d_:function(e,t){return Gt(e,t)}}),cu=A({split_:function(e,t,n){n===void 0&&(n=0);var r,o=E(e,"x","split");return n=$e(n,o.shape)[0],typeof t=="number"?(I(o.shape[n]%t==0,function(){return"Number of splits must evenly divide the axis."}),r=new Array(t).fill(o.shape[n]/t)):(I(o.shape[n]===t.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),r=t),_.runKernelFunc(function(a){return a.split(o,r,n)},{$x:o},function(a){return{$x:function(){return Gt(a,n)}}})}});function ae(e,t,n){return t===void 0&&(t="float32"),t=t||"float32",jp(e),new Za(e,t,n)}function Nb(e,t){t===void 0&&(t=!1),console.log(e.toString(t))}var Xp=A({batchToSpaceND_:function(e,t,n){var r=E(e,"x","batchToSpaceND"),o=t.reduce(function(a,i){return a*i});return I(r.rank>=1+t.length,function(){return"input rank is "+r.rank+" but should be > than blockShape.length "+t.length}),I(n.length===t.length,function(){return"crops.length is "+n.length+" but should be equal to blockShape.length  "+t.length}),I(r.shape[0]%o==0,function(){return"input tensor batch is "+r.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),_.runKernelFunc(function(a){return a.batchToSpaceND(r,t,n)},{$x:r},function(a){return{$x:function(){return a.spaceToBatchND(t,n)}}})}}),Sg=A({cast_:function(e,t){var n=E(e,"x","cast");if(!lg(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");var r={dtype:t};return _.runKernelFunc(function(o){return o.cast(n,t)},{x:n},function(o){return{x:function(){return o.clone()}}},"Cast",r)}}),kb=A({cumsum_:function(e,t,n,r){t===void 0&&(t=0),n===void 0&&(n=!1),r===void 0&&(r=!1);var o=E(e,"x","cumsum"),a=wn([t|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=bn(1,o.rank)[0],u=_.runKernelFunc(function(l){return l.cumsum(i,s,n,r)},{permutedX:i},function(l){return{permutedX:function(){return l.cumsum(t,n,!r)}}});return a!=null&&(u=u.transpose(a)),u}}),Eg=A({depthToSpace_:function(e,t,n){n===void 0&&(n="NHWC");var r=E(e,"x","depthToSpace"),o=n==="NHWC"?r.shape[1]:r.shape[2],a=n==="NHWC"?r.shape[2]:r.shape[3],i=n==="NHWC"?r.shape[3]:r.shape[1];return I(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+r.shape}),I(a*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+t+` for depthToSpace with input shape
          `+r.shape}),I(i%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+i+" for depthToSpace with input shape "+r.shape}),_.runKernelFunc(function(s){return s.depthToSpace(r,t,n)},{$x:r})}}),Rn=A({expandDims_:function(e,t){t===void 0&&(t=0);var n=E(e,"x","expandDims",null);I(t<=n.rank,function(){return"Axis must be <= rank of the tensor"});var r=n.shape.slice();return t<0&&(I(-(n.rank+1)<=t,function(){return"Axis must be in the interval ["+-(n.rank+1)+", "+n.rank+"]"}),t=n.rank+t+1),r.splice(t,0,1),fn(n,r)}}),fn=A({reshape_:function(e,t){var n=E(e,"x","reshape",null);t=sg(t,n.size),I(n.size===Q(t),function(){return"new shape and old shape must have the same number of elements."});var r={shape:t};return _.runKernelFunc(function(o){return o.reshape(n,t)},{x:n},function(o){return{x:function(){return o.reshape(n.shape)}}},"Reshape",r)}}),Yp=A({spaceToBatchND_:function(e,t,n){var r=E(e,"x","spaceToBatchND");return I(r.rank>=1+t.length,function(){return"input rank "+r.rank+" should be > than [blockShape] "+t.length}),I(n.length===t.length,function(){return"paddings.shape[0] "+n.length+" must be equal to [blockShape] "+t.length}),I(r.shape.reduce(function(o,a,i){return i>0&&i<=t.length?o&&(a+n[i-1][0]+n[i-1][1])%t[i-1]==0:o},!0),function(){return"input spatial dimensions "+r.shape.slice(1)+" with paddings "+n.toString()+" must be divisible by blockShapes "+t.toString()}),_.runKernelFunc(function(o){return o.spaceToBatchND(r,t,n)},{$x:r},function(o){return{$x:function(){return o.batchToSpaceND(t,n)}}})}}),Qp=A({squeeze_:function(e,t){var n=E(e,"x","squeeze");return fn(n,Zn(n.shape,t).newShape)}}),Vn=A({stack_:function(e,t){t===void 0&&(t=0);var n=Fs(e,"tensors","stack");if(I(n.length>=1,function(){return"Pass at least one tensor to tf.stack"}),n.length===1)return n[0].expandDims(t);var r=n[0].rank,o=n[0].shape,a=n[0].dtype;I(t<=r,function(){return"Axis must be <= rank of the tensor"}),n.forEach(function(s){xe(o,s.shape,"All tensors passed to stack must have matching shapes")}),n.forEach(function(s){I(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=n.map(function(s){return s.expandDims(t)});return Gt(i,t)}}),pi=A({unstack_:function(e,t){t===void 0&&(t=0),t=t||0;var n=E(e,"x","unstack");I(t>=-n.shape.length&&t<n.shape.length,function(){return"Axis = "+t+" is not in [-"+n.shape.length+", "+n.shape.length+")"}),t<0&&(t+=n.shape.length);var r={axis:t};return _.runKernelFunc(function(o){return o.unstack(n,t)},{x:n},function(o){return{x:function(){return Vn(o,t)}}},"Unpack",r)}}),Ng=function(e,t){return Z(this,void 0,void 0,function(){var n,r,o,a,i,s,u,l,c,p;return J(this,function(d){switch(d.label){case 0:return n=E(e,"x","setdiff1d"),r=E(t,"y","setdiff1d"),I(n.dtype===r.dtype,function(){return"x and y should have the same dtype, but got x ("+n.dtype+") and y ("+r.dtype+")."}),I(n.rank===1,function(){return"x should be 1D tensor, but got x ("+n.shape+")."}),I(r.rank===1,function(){return"y should be 1D tensor, but got y ("+r.shape+")."}),[4,n.data()];case 1:return o=d.sent(),[4,r.data()];case 2:for(a=d.sent(),i=new Set(a),s=0,c=0;c<o.length;c++)i.has(o[c])||s++;for(u=new Za([s],n.dtype),l=new Za([s],"int32"),c=0,p=0;c<o.length;c++)i.has(o[c])||(u.values[p]=o[c],l.values[p]=c,p++);return[2,[u.toTensor(),l.toTensor()]]}})})};function Ms(e,t,n,r){r===void 0&&(r=!0);var o=[];if(r)(o=o.concat(t.slice(0))).push(e[0]/n),o=o.concat(e.slice(1));else{o=o.concat(e[0]);for(var a=t.length,i=0;i<a;++i)o=o.concat([e[i+1]/t[i],t[i]]);o=o.concat(e.slice(a+1))}return o}function Ps(e,t,n){n===void 0&&(n=!0);var r=[];if(n){r.push(t);for(var o=t+1;o<e;++o)o<=2*t?(r.push(o),r.push(o-(t+1))):r.push(o)}else{var a=[],i=[];for(o=1;o<e;++o)o>=2*t+1||o%2==1?i.push(o):a.push(o);r.push.apply(r,a),r.push(0),r.push.apply(r,i)}return r}function Ls(e,t,n,r){r===void 0&&(r=!0);var o=[];r?o.push(e[0]/n):o.push(e[0]*n);for(var a=1;a<e.length;++a)a<=t.length?r?o.push(t[a-1]*e[a]):o.push(e[a]/t[a-1]):o.push(e[a]);return o}function kg(e,t){for(var n=[0],r=0;r<t;++r)n.push(e[r][0]);return n}function Ig(e,t,n){for(var r=e.slice(0,1),o=0;o<n;++o)r.push(e[o+1]-t[o][0]-t[o][1]);return r}var Rg="Add",pu="Div",du="SquaredDifference",Tg="BroadcastTo",Ag="OneHot",_g="Identity",Dg="Tile",Og="PadV2",Wn=A({add_:function(e,t){var n,r=E(e,"a","add"),o=E(t,"b","add");n=Fe(r,o),r=n[0],o=n[1];var a={a:r,b:o};return _.runKernelFunc(function(i,s){var u=i.add(r,o);return s([r,o]),u},a,null,Rg)}});function tr(e,t){for(var n=e.length,r=[],o=0;o<n;o++){var a=n-1-o,i=e[a]||1;(t[t.length-1-o]||1)>1&&i===1&&r.unshift(a)}return r}function He(e,t){for(var n=[],r=0;r<t.length;r++){var o=e[e.length-r-1],a=t.length-r-1,i=t[a];(o==null||o===1&&i>1)&&n.unshift(a)}return n}function ce(e,t){for(var n=[],r=Math.max(e.length,t.length),o=0;o<r;o++){var a=e[e.length-o-1];a==null&&(a=1);var i=t[t.length-o-1];if(i==null&&(i=1),a===1)n.unshift(i);else if(i===1)n.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+e+" and "+t+".");n.unshift(a)}}return n}var Fg=A({abs_:function(e){var t=E(e,"x","abs");return t.dtype==="complex64"?_.runKernelFunc(function(n){return n.complexAbs(t)},{$x:t}):_.runKernelFunc(function(n,r){var o=n.abs(t);return r([t]),o},{x:t},function(n,r){var o=r[0];return{x:function(){return n.mul(o.toFloat().step(-1))}}},"Abs")}}),Mg=A({acos_:function(e){var t=E(e,"x","acos");return _.runKernelFunc(function(n,r){var o=n.acos(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.divStrict(X(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),Pg=A({acosh_:function(e){var t=E(e,"x","acosh");return _.runKernelFunc(function(n,r){var o=n.acosh(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),Lg=A({asin_:function(e){var t=E(e,"x","asin");return _.runKernelFunc(function(n,r){var o=n.asin(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.divStrict(X(1).sub(o.toFloat().square()).sqrt())}}})}}),Bg=A({asinh_:function(e){var t=E(e,"x","asinh");return _.runKernelFunc(function(n,r){var o=n.asinh(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.divStrict(X(1).add(o.toFloat().square()).sqrt())}}})}}),zg=A({atan_:function(e){var t=E(e,"x","atan");return _.runKernelFunc(function(n,r){var o=n.atan(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.div(o.toFloat().square().add(1))}}})}}),Vg=A({atanh_:function(e){var t=E(e,"x","atanh");return _.runKernelFunc(function(n,r){var o=n.atanh(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.div(X(1).sub(o.toFloat().square()))}}})}}),Wg=A({ceil_:function(e){var t=E(e,"x","ceil");return _.runKernelFunc(function(n){return n.ceil(t)},{$x:t},function(n){return{$x:function(){return me(n)}}})}}),Ug=A({clipByValue_:function(e,t,n){var r=E(e,"x","clipByValue");I(t<=n,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+n+")."});var o=[r],a={min:t,max:n};return _.runKernelFunc(function(i,s){var u=i.clip(r,t,n);return s([r]),u},{x:r},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(n)),me(i))}}},"ClipByValue",a,o)}}),$g=A({cos_:function(e){var t=E(e,"x","cos"),n=[t];return _.runKernelFunc(function(r,o){var a=r.cos(t);return o([t]),a},{x:t},function(r,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(r)}}},"Cos",{},n)}}),jg=A({cosh_:function(e){var t=E(e,"x","cosh");return _.runKernelFunc(function(n,r){var o=n.cosh(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return o.toFloat().sinh().mulStrict(n)}}})}}),Hg=A({erf_:function(e){var t=E(e,"x","erf");return I(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),_.runKernelFunc(function(n,r){var o=n.erf(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Gg=A({exp_:function(e){var t=E(e,"x","exp");return _.runKernelFunc(function(n,r){var o=n.exp(t);return r([o]),o},{x:t},function(n,r){return{x:function(){return n.mulStrict(r[0])}}},"Exp",{},[],[!0])}}),qg=A({expm1_:function(e){var t=E(e,"x","expm1");return _.runKernelFunc(function(n,r){var o=n.expm1(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.mul(o.exp())}}})}}),Kg=A({floor_:function(e){var t=E(e,"x","floor");return _.runKernelFunc(function(n){return n.floor(t)},{$x:t},function(n){return{$x:function(){return me(n)}}})}}),Xg=A({log_:function(e){var t=E(e,"x","log"),n=[t];return _.runKernelFunc(function(r,o){var a=r.log(t);return o([t]),a},{x:t},function(r,o){var a=o[0];return{x:function(){return r.div(a.toFloat())}}},"Log",{},n)}}),Yg=A({log1p_:function(e){var t=E(e,"x","log1p");return _.runKernelFunc(function(n,r){var o=n.log1p(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.div(o.add(1))}}})}}),Ib=A({logSigmoid_:function(e){var t=E(e,"x","logSigmoid");return _.runKernelFunc(function(n,r){var o=n.softplus(t.neg()).neg();return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.mul(o.neg().sigmoid())}}})}}),fu=A({neg_:function(e){var t=E(e,"x","neg"),n=[t];return _.runKernelFunc(function(r){return r.neg(t)},{x:t},function(r){return{x:function(){return r.neg()}}},"Neg",{},n)}}),Qg=A({reciprocal_:function(e){var t=E(e,"x","reciprocal");return _.runKernelFunc(function(n,r){var o=n.reciprocal(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.div(o.square().neg())}}})}}),Zg=A({round_:function(e){var t=E(e,"x","round");return _.runKernelFunc(function(n){return n.round(t)},{$x:t},function(n){return{$x:function(){return me(n)}}})}}),Zp=A({rsqrt_:function(e){var t=E(e,"x","rsqrt"),n=[t];return _.runKernelFunc(function(r,o){var a=r.rsqrt(t);return o([t]),a},{x:t},function(r,o){var a=o[0];return{x:function(){return r.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},n)}}),Jg=A({sigmoid_:function(e){var t=E(e,"x","sigmoid");return _.runKernelFunc(function(n,r){var o=n.sigmoid(t);return r([o]),o},{x:t},function(n,r){var o=r[0];return{x:function(){return n.mul(o.mul(X(1).sub(o)))}}},"Sigmoid")}}),ey=A({sign_:function(e){var t=E(e,"x","sign");return _.runKernelFunc(function(n){return n.sign(t)},{$x:t},function(n){return{$x:function(){return me(n)}}})}}),Rb=A({isNaN_:function(e){var t=E(e,"x","isNaN");return _.runKernelFunc(function(n){return n.isNaN(t)},{$x:t},function(n){return{$x:function(){return me(n)}}})}}),Tb=A({isInf_:function(e){var t=E(e,"x","isInf");return _.runKernelFunc(function(n){return n.isInf(t)},{$x:t},function(n){return{$x:function(){return me(n)}}})}}),Ab=A({isFinite_:function(e){var t=E(e,"x","isFinite");return _.runKernelFunc(function(n){return n.isFinite(t)},{$x:t},function(n){return{$x:function(){return me(n)}}})}}),ty=A({sin_:function(e){var t=E(e,"x","sin"),n=[t];return _.runKernelFunc(function(r,o){var a=r.sin(t);return o([t]),a},{x:t},function(r,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(r)}}},"Sin",{},n)}}),ny=A({sinh_:function(e){var t=E(e,"x","sinh");return _.runKernelFunc(function(n,r){var o=n.sinh(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return o.toFloat().cosh().mulStrict(n)}}})}}),ry=A({softplus_:function(e){var t=E(e,"x","softplus");return _.runKernelFunc(function(n,r){var o=n.softplus(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.mul(o.sigmoid())}}})}}),oy=A({sqrt_:function(e){var t=E(e,"x","sqrt");return _.runKernelFunc(function(n,r){var o=n.sqrt(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.div(o.toFloat().sqrt().mul(2))}}})}}),_b=A({step_:function(e,t){t===void 0&&(t=0);var n=E(e,"x","step");return _.runKernelFunc(function(r){return r.step(n,t)},{$x:n},function(r){return{$x:function(){return me(r)}}})}}),ay=A({tan_:function(e){var t=E(e,"x","tan");return _.runKernelFunc(function(n,r){var o=n.tan(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.div(o.cos().square())}}})}}),iy=A({tanh_:function(e){var t=E(e,"x","tanh");return _.runKernelFunc(function(n,r){var o=n.tanh(t);return r([o]),o},{x:t},function(n,r){var o=r[0];return{x:function(){return X(1).sub(o.square()).mulStrict(n)}}},"Tanh",{},null,[!0])}}),Db=A({addStrict_:function(e,t){var n=E(e,"a","addStrict"),r=E(t,"b","addStrict");return xe(n.shape,r.shape,"Error in addStrict: "),n.add(r)}}),sy=A({atan2_:function(e,t){var n,r=E(e,"a","atan2"),o=E(t,"b","atan2");n=Fe(r,o),r=n[0],o=n[1];var a=ce(r.shape,o.shape);return _.runKernelFunc(function(i,s){var u=i.atan2(r,o);return s([r,o]),u},{$a:r,$b:o},function(i,s){var u=s[0],l=s[1];return{$a:function(){var c=Wn(u.square(),l.square()),p=i.mul(l.div(c)),d=He(u.shape,a);return d.length>0&&(p=p.sum(d)),p.reshape(u.shape)},$b:function(){var c=Wn(u.square(),l.square()),p=fu(i.mul(u.div(c))),d=He(l.shape,a);return d.length>0&&(p=p.sum(d)),p.reshape(l.shape)}}})}}),Ob=A({divStrict_:function(e,t){var n=E(e,"a","div"),r=E(t,"b","div");return xe(n.shape,r.shape,"Error in divideStrict: "),n.div(r)}}),Jp=A({floorDiv_:function(e,t){var n,r=E(e,"a","floorDiv"),o=E(t,"b","floorDiv");n=Fe(r,o),r=n[0],o=n[1];var a=ce(r.shape,o.shape);return _.runKernelFunc(function(i,s){var u=i.floorDiv(r,o);return s([r,o]),u},{a:r,b:o},function(i,s){var u=s[0],l=s[1];return{a:function(){var c=i.div(l.toFloat()),p=He(u.shape,a);return p.length>0?c.sum(p).reshape(u.shape):c},b:function(){var c=i.mul(u.toFloat()),p=He(l.shape,a);p.length>0&&(c=c.sum(p).reshape(l.shape));var d=l.square();return c.div(d.toFloat()).neg()}}},"FloorDiv")}}),hu=A({maximum_:function(e,t){var n,r=E(e,"a","maximum"),o=E(t,"b","maximum");return n=Fe(r,o),r=n[0],o=n[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),ce(r.shape,o.shape),_.runKernelFunc(function(a,i){var s=a.maximum(r,o);return i([r,o]),s},{a:r,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),Fb=A({maximumStrict_:function(e,t){var n=E(e,"a","maximumStrict"),r=E(t,"b","maximumStrict");return xe(n.shape,r.shape,"Error in maximumStrict: "),n.maximum(r)}}),ed=A({minimum_:function(e,t){var n,r=E(e,"a","minimum"),o=E(t,"b","minimum");return n=Fe(r,o),r=n[0],o=n[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),ce(r.shape,o.shape),_.runKernelFunc(function(a,i){var s=a.minimum(r,o);return i([r,o]),s},{a:r,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),Mb=A({minimumStrict_:function(e,t){var n=E(e,"a","minimumStrict"),r=E(t,"b","minimumStrict");return xe(n.shape,r.shape,"Error in minimumStrict: "),n.minimum(r)}}),uy=A({mod_:function(e,t){var n,r=E(e,"a","mod"),o=E(t,"b","mod");n=Fe(r,o),r=n[0],o=n[1];var a=ce(r.shape,o.shape);return _.runKernelFunc(function(i,s){var u=i.mod(r,o);return s([r,o]),u},{$a:r,$b:o},function(i,s){var u=s[0],l=s[1];return{$a:function(){var c=He(u.shape,a);return c.length>0?i.sum(c).reshape(u.shape):i},$b:function(){var c=i.mul(u.div(l).floor().neg()),p=He(l.shape,a);return p.length>0?c.sum(p).reshape(l.shape):c}}})}}),Pb=A({modStrict_:function(e,t){var n=E(e,"a","modStrict"),r=E(t,"b","modStrict");return xe(n.shape,r.shape,"Error in modStrict: "),n.mod(r)}}),Ve=A({mul_:function(e,t){var n,r=E(e,"a","mul"),o=E(t,"b","mul");n=Fe(r,o),r=n[0],o=n[1];var a=ce(r.shape,o.shape);return _.runKernelFunc(function(i,s){var u=i.multiply(r,o);return s([r,o]),u},{a:r,b:o},function(i,s){var u=s[0],l=s[1];return{a:function(){var c=i.mul(l.toFloat()),p=He(u.shape,a);return p.length>0?c.sum(p).reshape(u.shape):c},b:function(){var c=i.mul(u.toFloat()),p=He(l.shape,a);return p.length>0?c.sum(p).reshape(l.shape):c}}},"Mul")}}),Lb=A({mulStrict_:function(e,t){var n=E(e,"a","mul"),r=E(t,"b","mul");return xe(n.shape,r.shape,"Error in multiplyStrict: "),n.mul(r)}}),ti=A({pow_:function(e,t){var n,r=E(e,"base","pow"),o=E(t,"exp","pow");n=Fe(r,o),r=n[0],o=n[1];var a=ce(r.shape,o.shape),i=[r,o];return _.runKernelFunc(function(s,u){var l=s.pow(r,o);return u([r,o,l]),l},{a:r,b:o},function(s,u){var l=u[0],c=u[1],p=u[2];return{a:function(){var d=c.toFloat(),f=s.mul(d.mul(l.pow(d.sub(X(1))))),m=He(l.shape,a);return m.length>0&&(f=f.sum(m)),f.reshape(l.shape)},b:function(){var d=l.greater(0),f=l.log().where(d,me(l)),m=s.mul(p.mul(f)),v=He(c.shape,a);return v.length>0&&(m=m.sum(v)),m.reshape(c.shape)}}},"Pow",{},i,[!0])}}),Bb=A({powStrict_:function(e,t){return xe(e.shape,t.shape,"Error in powStrict: "),e.pow(t)}}),zb=A({squaredDifferenceStrict_:function(e,t){var n=E(e,"a","squaredDifferenceStrict"),r=E(t,"b","squaredDifferenceStrict");return xe(n.shape,r.shape,"Error in squaredDifferenceStrict: "),n.squaredDifference(r)}}),Fn=A({sub_:function(e,t){var n,r=E(e,"a","sub"),o=E(t,"b","sub");n=Fe(r,o),r=n[0],o=n[1];var a=ce(r.shape,o.shape);return _.runKernelFunc(function(i){return i.subtract(r,o)},{a:r,b:o},function(i){return{a:function(){var s=i,u=He(r.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=i,u=He(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),Vb=A({subStrict_:function(e,t){var n=E(e,"a","subStrict"),r=E(t,"b","subStrict");return xe(n.shape,r.shape,"Error in subStrict: "),n.sub(r)}}),Un=A({div_:function(e,t){var n,r=E(e,"a","div"),o=E(t,"b","div");if(n=Fe(r,o),r=n[0],o=n[1],r.dtype==="int32"&&o.dtype==="int32")return Jp(r,o);var a={a:r,b:o};return _.runKernelFunc(function(i,s){var u=i.realDivide(r,o);return s([r,o]),u},a,null,pu,{})}});function ly(e,t){if(e.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+e.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>e.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+e.rank);if(e.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+e.shape+".");for(var n=t.shape,r=n[n.length-1],o=1,a=0;a<n.length-1;++a)o*=n[a];var i=e.shape,s=n.slice();s.pop();var u=1;for(a=r;a<e.rank;++a)u*=i[a],s.push(i[a]);var l=Ct(e.shape).map(function(c){return c/u}).concat([1]).slice(0,r);return[s,o,u,l]}var cy=30;function cl(e){return e<=cy?e:Rs(e,Math.floor(Math.sqrt(e)))}function Wb(e,t,n){var r=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+n.shape+", indices.shape: "+t.shape+", shape: "+e+", sliceDim: "+r+", and batchDim: "+o+".";if(n.rank<o)throw new Error(a+" update.rank < "+o+". ");if(e.length<r+(n.rank-o))throw new Error(a+" Output shape length < "+(r+(n.rank-o)));if(n.rank!==o+e.length-r)throw new Error(a+" update.rank != "+(o+e.length-r));for(var i=0;i<o;++i)if(n.shape[i]!==t.shape[i])throw new Error(a+" updates.shape["+i+"] ("+n.shape[i]+") != indices.shape["+i+"] ("+t.shape[i]+").");for(i=0;i<n.rank-o;++i)if(n.shape[i+o]!==e[i+r])throw new Error(a+" updates.shape["+(i+o)+"] ("+n.shape[i+o]+") != shape["+(i+o)+"] ("+e[i+o]+")")}function Ub(e,t,n){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(e.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+e.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(n.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+n);if(n.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(e.size===0)throw new Error("Updates specified for empty output. updates shape: "+e.shape)}Wb(n,t,e)}function Bs(e,t,n){for(var r=t.shape.length,o=r>1?t.shape[r-1]:1,a=n.length,i=1,s=o;s<a;++s)i*=n[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:Q(t.shape)/u,sliceSize:i,strides:Ct(n.slice(0,o)).concat([1]),outputSize:Q(n)}}function $b(e,t,n){I(e.rank===t.length,function(){return"Error in slice"+e.rank+"D: Length of begin "+t+" must match the rank of the array ("+e.rank+")."}),I(e.rank===n.length,function(){return"Error in slice"+e.rank+"D: Length of size "+n+" must match the rank of the array ("+e.rank+")."});for(var r=function(a){I(t[a]+n[a]<=e.shape[a],function(){return"Error in slice"+e.rank+"D: begin["+a+"] + size["+a+"] ("+(t[a]+n[a])+") would overflow input.shape["+a+"] ("+e.shape[a]+")"})},o=0;o<e.rank;++o)r(o)}function Jf(e){for(var t=[],n=0;e>0;)1&e&&t.push(n),e/=2,n++;return t}function td(e,t,n){for(var r=[],o=0;o<e.length;o++)r[o]=Math.ceil((t[o]-e[o])/n[o]);return r}function jb(e,t,n,r,o){var a=t[o],i=n[o]||1;(e&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=r[o];return a<0&&(a+=s),a=Ns(0,a,s-1)}function Hb(e,t,n,r,o){var a=t[o],i=n[o]||1;(e&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=r[o];return a<0&&(a+=s),a=i>0?Ns(0,a,s):Ns(-1,a,s-1)}function py(e,t,n){for(var r=n.length,o=0;o<n.length;o++)if(n[o]>1){r=o;break}for(o=r+1;o<n.length;o++)if(t[o]>0||n[o]!==e[o])return!1;return!0}function dy(e,t){for(var n=e.length>0?e[e.length-1]:1,r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function Gb(e,t){I(Is(e),function(){return"The f passed in variableGrads(f) must be a function"}),I(t==null||Array.isArray(t)&&t.every(function(c){return c instanceof As}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var n=t!=null;if(!n)for(var r in t=[],_.registeredVariables)t.push(_.registeredVariables[r]);var o=n?t.filter(function(c){return!c.trainable}):null,a=t.length;I((t=t.filter(function(c){return c.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=_.gradients(e,t,null,!0),s=i.value,u=i.grads;I(u.some(function(c){return c!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),I(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var l={};return t.forEach(function(c,p){u[p]!=null&&(l[c.name]=u[p])}),o!=null&&o.forEach(function(c){return l[c.name]=null}),{value:s,grads:l}}function mu(e){return _.customGrad(e)}var vu=A({softmax_:function(e,t){t===void 0&&(t=-1);var n=E(e,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and dim was "+t);return _.runKernelFunc(function(r,o){var a=r.softmax(n,t);return o([a]),a},{logits:n},function(r,o){var a=o[0],i=r.mul(a);return{logits:function(){return i.sub(i.sum([t],!0).mul(a))}}},"Softmax",{dim:t},[],[!0])}}),fy=A({logSoftmax_:function(e,t){t===void 0&&(t=-1);var n=E(e,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and axis was "+t);return mu(function(r,o){var a=r.max(t,!0),i=r.sub(a),s=i.toFloat().sub(i.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,l){var c=l[0].exp();return u.sub(u.sum(t,!0).mul(c))}}})(n)}}),Vt=A({transpose_:function(e,t){var n=E(e,"x","transpose");if(t==null&&(t=n.shape.map(function(o,a){return a}).reverse()),I(n.rank===t.length,function(){return"Error in transpose: rank of input "+n.rank+" must match length of perm "+t+"."}),t.forEach(function(o){I(o>=0&&o<n.rank,function(){return"All entries in 'perm' must be between 0 and "+(n.rank-1)+" but got "+t})}),n.rank<=1)return n.clone();var r={perm:t};return _.runKernelFunc(function(o){return o.transpose(n,t)},{x:n},null,"Transpose",r)}}),hy=function(){function e(t,n){this.backend=t,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}return e.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},e.prototype.set=function(t,n){this.dataIdsCount++,this.data.set(t,n)},e.prototype.has=function(t){return this.data.has(t)},e.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},e.prototype.numDataIds=function(){return this.dataIdsCount},e}(),my=function(){function e(){}return e.prototype.time=function(t){return M("time")},e.prototype.read=function(t){return M("read")},e.prototype.readSync=function(t){return M("readSync")},e.prototype.numDataIds=function(){return M("numDataIds")},e.prototype.disposeData=function(t){return M("disposeData")},e.prototype.write=function(t,n,r){return M("write")},e.prototype.move=function(t,n,r,o){return M("move")},e.prototype.memory=function(){return M("memory")},e.prototype.floatPrecision=function(){return M("floatPrecision")},e.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},e.prototype.batchMatMul=function(t,n,r,o){return M("batchMatMul")},e.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,M("fusedBatchMatMul")},e.prototype.slice=function(t,n,r){return M("slice")},e.prototype.stridedSlice=function(t,n,r,o){return M("stridedSlice")},e.prototype.unstack=function(t,n){return M("unstack")},e.prototype.reverse=function(t,n){return M("reverse")},e.prototype.concat=function(t,n){return M("concat")},e.prototype.neg=function(t){return M("neg")},e.prototype.add=function(t,n){return M("add")},e.prototype.addN=function(t){return M("addN")},e.prototype.subtract=function(t,n){return M("subtract")},e.prototype.multiply=function(t,n){return M("multiply")},e.prototype.realDivide=function(t,n){return M("realDivide")},e.prototype.floorDiv=function(t,n){return M("floorDiv")},e.prototype.sum=function(t,n){return M("sum")},e.prototype.prod=function(t,n){return M("prod")},e.prototype.unsortedSegmentSum=function(t,n,r){return M("unsortedSegmentSum")},e.prototype.argMin=function(t,n){return M("argMin")},e.prototype.argMax=function(t,n){return M("argMax")},e.prototype.equal=function(t,n){return M("equal")},e.prototype.notEqual=function(t,n){return M("notEqual")},e.prototype.less=function(t,n){return M("less")},e.prototype.lessEqual=function(t,n){return M("lessEqual")},e.prototype.greater=function(t,n){return M("greater")},e.prototype.greaterEqual=function(t,n){return M("greaterEqual")},e.prototype.logicalNot=function(t){return M("logicalNot")},e.prototype.logicalAnd=function(t,n){return M("logicalAnd")},e.prototype.logicalOr=function(t,n){return M("logicalOr")},e.prototype.where=function(t){return M("where")},e.prototype.select=function(t,n,r){return M("select")},e.prototype.topk=function(t,n,r){return M("topk")},e.prototype.min=function(t,n){return M("min")},e.prototype.minimum=function(t,n){return M("minimum")},e.prototype.mod=function(t,n){return M("mod")},e.prototype.max=function(t,n){return M("max")},e.prototype.maximum=function(t,n){return M("maximum")},e.prototype.all=function(t,n){return M("all")},e.prototype.any=function(t,n){return M("any")},e.prototype.squaredDifference=function(t,n){return M("squaredDifference")},e.prototype.ceil=function(t){return M("ceil")},e.prototype.floor=function(t){return M("floor")},e.prototype.round=function(t){return M("round")},e.prototype.sign=function(t){return M("sign")},e.prototype.isNaN=function(t){return M("isNaN")},e.prototype.isInf=function(t){return M("isInf")},e.prototype.isFinite=function(t){return M("isFinite")},e.prototype.pow=function(t,n){return M("pow")},e.prototype.exp=function(t){return M("exp")},e.prototype.expm1=function(t){return M("expm1")},e.prototype.softmax=function(t,n){return M("softmax")},e.prototype.log=function(t){return M("log")},e.prototype.log1p=function(t){return M("log1p")},e.prototype.sqrt=function(t){return M("sqrt")},e.prototype.rsqrt=function(t){return M("rsqrt")},e.prototype.square=function(t){return M("square")},e.prototype.reciprocal=function(t){return M("reciprocal")},e.prototype.relu=function(t){return M("relu")},e.prototype.relu6=function(t){return M("relu6")},e.prototype.prelu=function(t,n){return M("prelu")},e.prototype.elu=function(t){return M("elu")},e.prototype.eluDer=function(t,n){return M("eluDer")},e.prototype.selu=function(t){return M("selu")},e.prototype.int=function(t){return M("int")},e.prototype.clip=function(t,n,r){return M("clip")},e.prototype.abs=function(t){return M("abs")},e.prototype.complexAbs=function(t){return M("complexAbs")},e.prototype.sigmoid=function(t){return M("sigmoid")},e.prototype.softplus=function(t){return M("softplus")},e.prototype.sin=function(t){return M("sin")},e.prototype.cos=function(t){return M("cos")},e.prototype.tan=function(t){return M("tan")},e.prototype.asin=function(t){return M("asin")},e.prototype.acos=function(t){return M("acos")},e.prototype.atan=function(t){return M("atan")},e.prototype.atan2=function(t,n){return M("atan2")},e.prototype.sinh=function(t){return M("sinh")},e.prototype.cosh=function(t){return M("cosh")},e.prototype.tanh=function(t){return M("tanh")},e.prototype.asinh=function(t){return M("asinh")},e.prototype.acosh=function(t){return M("acosh")},e.prototype.atanh=function(t){return M("atanh")},e.prototype.erf=function(t){return M("erf")},e.prototype.step=function(t,n){return M("step")},e.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,M("fusedConv2d")},e.prototype.conv2d=function(t,n,r){return M("conv2d")},e.prototype.conv2dDerInput=function(t,n,r){return M("conv2dDerInput")},e.prototype.conv2dDerFilter=function(t,n,r){return M("conv2dDerFilter")},e.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,M("fusedDepthwiseConv2D")},e.prototype.depthwiseConv2D=function(t,n,r){return M("depthwiseConv2D")},e.prototype.depthwiseConv2DDerInput=function(t,n,r){return M("depthwiseConv2DDerInput")},e.prototype.depthwiseConv2DDerFilter=function(t,n,r){return M("depthwiseConv2DDerFilter")},e.prototype.conv3d=function(t,n,r){return M("conv3d")},e.prototype.conv3dDerInput=function(t,n,r){return M("conv3dDerInput")},e.prototype.conv3dDerFilter=function(t,n,r){return M("conv3dDerFilter")},e.prototype.maxPool=function(t,n){return M("maxPool")},e.prototype.maxPoolBackprop=function(t,n,r,o){return M("maxPoolBackprop")},e.prototype.avgPool=function(t,n){return M("avgPool")},e.prototype.avgPoolBackprop=function(t,n,r){return M("avgPoolBackprop")},e.prototype.avgPool3d=function(t,n){return M("avgPool3d")},e.prototype.avgPool3dBackprop=function(t,n,r){return M("avgPool3dBackprop")},e.prototype.maxPool3d=function(t,n){return M("maxPool3d")},e.prototype.maxPool3dBackprop=function(t,n,r,o){return M("maxPool3dBackprop")},e.prototype.reshape=function(t,n){return M("reshape")},e.prototype.cast=function(t,n){return M("cast")},e.prototype.tile=function(t,n){return M("tile")},e.prototype.pad=function(t,n,r){return M("pad")},e.prototype.transpose=function(t,n){return M("transpose")},e.prototype.gather=function(t,n,r){return M("gather")},e.prototype.gatherND=function(t,n){return M("gatherND")},e.prototype.scatterND=function(t,n,r){return M("scatterND")},e.prototype.batchToSpaceND=function(t,n,r){return M("batchToSpaceND")},e.prototype.spaceToBatchND=function(t,n,r){return M("spaceToBatchND")},e.prototype.resizeBilinear=function(t,n,r,o){return M("resizeBilinear")},e.prototype.resizeBilinearBackprop=function(t,n,r){return M("resizeBilinearBackprop")},e.prototype.resizeNearestNeighbor=function(t,n,r,o){return M("resizeNearestNeighbor")},e.prototype.resizeNearestNeighborBackprop=function(t,n,r){return M("resizeNearestNeighborBackprop")},e.prototype.batchNormalization=function(t,n,r,o,a,i){return M("batchNormalization")},e.prototype.localResponseNormalization4D=function(t,n,r,o,a){return M("localResponseNormalization4D")},e.prototype.LRNGrad=function(t,n,r,o,a,i,s){return M("LRNGrad")},e.prototype.multinomial=function(t,n,r,o){return M("multinomial")},e.prototype.oneHot=function(t,n,r,o){return M("oneHot")},e.prototype.cumsum=function(t,n,r,o){return M("cumsum")},e.prototype.nonMaxSuppression=function(t,n,r,o,a){return M("nonMaxSuppression")},e.prototype.fft=function(t){return M("fft")},e.prototype.ifft=function(t){return M("ifft")},e.prototype.complex=function(t,n){return M("complex")},e.prototype.real=function(t){return M("real")},e.prototype.imag=function(t){return M("imag")},e.prototype.cropAndResize=function(t,n,r,o,a,i){return M("cropAndResize")},e.prototype.depthToSpace=function(t,n,r){return M("depthToSpace")},e.prototype.split=function(t,n,r){return M("split")},e.prototype.sparseToDense=function(t,n,r,o){return M("sparseToDense")},e.prototype.diag=function(t){return M("diag")},e.prototype.fill=function(t,n,r){return M("fill")},e.prototype.onesLike=function(t){return M("onesLike")},e.prototype.zerosLike=function(t){return M("zerosLike")},e.prototype.linspace=function(t,n,r){return M("linspace")},e.prototype.dispose=function(){return M("dispose")},e}();function M(e){throw new Error("'"+e+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function qr(e,t,n,r,o,a,i){i===void 0&&(i="channelsLast");var s,u=Ws(t),l=u[0],c=u[1];if(i==="channelsLast")s=[l,c,e[3],e[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[l,c,e[1],e[1]]}return Zr(e,s,n,r,o,a,!1,i)}function zs(e,t,n,r,o,a,i){i===void 0&&(i="NDHWC");var s,u,l=Nc(t),c=l[0],p=l[1],d=l[2];if(i==="NDHWC")u="channelsLast",s=[c,p,d,e[4],e[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[c,p,d,e[1],e[1]]}return Vs(e,s,n,r,o,!1,u,a)}function Zr(e,t,n,r,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],l=u[0],c=u[1],p=u[2],d=u[3];if(s==="channelsLast")l=e[0],c=e[1],p=e[2],d=e[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);l=e[0],d=e[1],c=e[2],p=e[3]}var f,m=t[0],v=t[1],y=t[3],h=Ws(n),g=h[0],x=h[1],w=Ws(r),b=w[0],S=w[1],k=Oo(m,b),N=Oo(v,S),R=function(W,V,$,H,O,P,L,q){var K,te,ne;if(typeof W=="number"){K={top:W,bottom:W,left:W,right:W,type:W===0?"VALID":"NUMBER"};var ie=function(fe,be,ye,Me,Ie){Me==null&&(Me=vy(fe,be,ye));var Re=fe[0],sn=fe[1],un=_a((Re-be+2*Me)/ye+1,Ie);I(Be(un),function(){return"The output # of rows ("+un+") must be an integer. Change the stride and/or zero pad parameters"});var Nt=_a((sn-be+2*Me)/ye+1,Ie);return I(Be(Nt),function(){return"The output # of columns ("+Nt+") must be an integer. Change the stride and/or zero pad parameters"}),[un,Nt]}([V,$],P,H,W,q);te=ie[0],ne=ie[1]}else if(W==="same"){te=Math.ceil(V/H),ne=Math.ceil($/O);var oe=Math.max(0,(te-1)*H+P-V),ue=Math.max(0,(ne-1)*O+L-$),de=Math.floor(oe/2),ve=oe-de,ze=Math.floor(ue/2);K={top:de,bottom:ve,left:ze,right:ue-ze,type:"SAME"}}else{if(W!=="valid")throw Error("Unknown padding parameter: "+W);K={top:0,bottom:0,left:0,right:0,type:"VALID"},te=Math.ceil((V-P+1)/H),ne=Math.ceil(($-L+1)/O)}return{padInfo:K,outHeight:te,outWidth:ne}}(o,c,p,g,x,k,N,a),T=R.padInfo,D=R.outHeight,F=R.outWidth,U=i?y*d:y;return s==="channelsFirst"?f=[l,U,D,F]:s==="channelsLast"&&(f=[l,D,F,U]),{batchSize:l,dataFormat:s,inHeight:c,inWidth:p,inChannels:d,outHeight:D,outWidth:F,outChannels:U,padInfo:T,strideHeight:g,strideWidth:x,filterHeight:m,filterWidth:v,effectiveFilterHeight:k,effectiveFilterWidth:N,dilationHeight:b,dilationWidth:S,inShape:e,outShape:f,filterShape:t}}function Vs(e,t,n,r,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],l=u[0],c=u[1],p=u[2],d=u[3],f=u[4];if(i==="channelsLast")l=e[0],c=e[1],p=e[2],d=e[3],f=e[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);l=e[0],f=e[1],c=e[2],p=e[3],d=e[4]}var m,v=t[0],y=t[1],h=t[2],g=t[4],x=Nc(n),w=x[0],b=x[1],S=x[2],k=Nc(r),N=k[0],R=k[1],T=k[2],D=Oo(v,N),F=Oo(y,R),U=Oo(h,T),W=function(L,q,K,te,ne,ie,oe,ue,de,ve,ze){var fe,be,ye,Me;if(typeof L=="number"){fe={top:L,bottom:L,left:L,right:L,front:L,back:L,type:L===0?"VALID":"NUMBER"};var Ie=function(ro,En,Eu,oo,ln,Nu){ln==null&&(ln=vy(ro,En,oo));var Q0=ro[0],Z0=ro[1],J0=ro[2],ku=_a((Q0-En+2*ln)/oo+1,Nu);I(Be(ku),function(){return"The output # of depths ("+ku+") must be an integer. Change the stride and/or zero pad parameters"});var Iu=_a((Z0-En+2*ln)/oo+1,Nu);I(Be(Iu),function(){return"The output # of rows ("+Iu+") must be an integer. Change the stride and/or zero pad parameters"});var Ru=_a((J0-En+2*ln)/oo+1,Nu);return I(Be(Ru),function(){return"The output # of columns ("+Ru+") must be an integer. Change the stride and/or zero pad parameters"}),[ku,Iu,Ru,Eu]}([q,K,te,1],ue,1,ne,L,ze);be=Ie[0],ye=Ie[1],Me=Ie[2]}else if(L==="same"){be=Math.ceil(q/ne),ye=Math.ceil(K/ie),Me=Math.ceil(te/oe);var Re=(be-1)*ne+ue-q,sn=(ye-1)*ie+de-K,un=(Me-1)*oe+ve-te,Nt=Math.floor(Re/2),no=Re-Nt,Cn=Math.floor(sn/2),Gn=sn-Cn,Sn=Math.floor(un/2);fe={top:Cn,bottom:Gn,left:Sn,right:un-Sn,front:Nt,back:no,type:"SAME"}}else{if(L!=="valid")throw Error("Unknown padding parameter: "+L);fe={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},be=Math.ceil((q-ue+1)/ne),ye=Math.ceil((K-de+1)/ie),Me=Math.ceil((te-ve+1)/oe)}return{padInfo:fe,outDepth:be,outHeight:ye,outWidth:Me}}(o,c,p,d,w,b,S,D,F,U,s),V=W.padInfo,$=W.outDepth,H=W.outHeight,O=W.outWidth,P=a?g*f:g;return i==="channelsFirst"?m=[l,P,$,H,O]:i==="channelsLast"&&(m=[l,$,H,O,P]),{batchSize:l,dataFormat:i,inDepth:c,inHeight:p,inWidth:d,inChannels:f,outDepth:$,outHeight:H,outWidth:O,outChannels:P,padInfo:V,strideDepth:w,strideHeight:b,strideWidth:S,filterDepth:v,filterHeight:y,filterWidth:h,effectiveFilterDepth:D,effectiveFilterHeight:F,effectiveFilterWidth:U,dilationDepth:N,dilationHeight:R,dilationWidth:T,inShape:e,outShape:m,filterShape:t}}function vy(e,t,n,r){r===void 0&&(r=1);var o=Oo(t,r);return Math.floor((e[0]*(n-1)-n+o)/2)}function Ws(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function Nc(e){return typeof e=="number"?[e,e,e]:e}function Oo(e,t){return t<=1?e:e+(e-1)*(t-1)}function _a(e,t){if(!t)return e;switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error("Unknown roundingMode "+t)}}function qo(e){var t=Ws(e),n=t[0],r=t[1],o=t[2];return n===1&&r===1&&o===1}function dt(e,t){return qo(e)||qo(t)}function nd(e){if(e==="NHWC")return"channelsLast";if(e==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+e)}function gy(e,t,n){if(t==="complex64"){if(e.dtype==="complex64")return e.clone();var r=Te(e.shape),o=e.toFloat(),a=n.complex(o,r);return r.dispose(),o.dispose(),a}if(!cg(e.dtype,t))return _.makeTensorFromDataId(e.dataId,e.shape,t);if(e.dtype==="complex64"){var i=n.real(e);return a=i.cast(t),i.dispose(),a}if(t==="int32")return n.int(e);if(t==="bool"){var s=X(0,e.dtype);return a=n.notEqual(e,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+e.dtype+" to "+t)}function kc(e,t){return _.makeTensorFromDataId(e.dataId,t,e.dtype)}function yy(e,t,n){var r=(t-e)/(n-1),o=Zo(n,"float32");o[0]=e;for(var a=1;a<o.length;a++)o[a]=o[a-1]+r;return zn(o,"float32")}function Ic(e,t){if(e.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+e.length+", imag: "+t.length+".");for(var n=new Float32Array(2*e.length),r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function eh(e,t){return{real:e[2*t],imag:e[2*t+1]}}function qb(e,t,n,r){e[2*r]=t,e[2*r+1]=n}function Kb(e,t,n){var r=(n?2:-2)*Math.PI*(e/t);return{real:Math.cos(r),imag:Math.sin(r)}}function Xb(e,t,n){var r=function(a,i,s){return function(u,l,c){for(var p=0,d=u.length,f=0,m=!1;p<d;){var v=c(l,u[f=p+(d-p>>>1)]);v>0?p=f+1:(d=f,m=!v)}return m?p:-p-1}(a,i,s||Yb)}(e,t,n),o=r<0?-(r+1):r;e.splice(o,0,t)}function Yb(e,t){return e>t?1:e<t?-1:0}function rd(e,t,n,r,o){return xy(e,t,n,r,o,0).selectedIndices}function od(e,t,n,r,o,a){var i=xy(e,t,n,r,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function xy(e,t,n,r,o,a,i,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(w,b){return{score:w,boxIndex:b,suppressBeginIndex:0}}).filter(function(w){return w.score>o}).sort(th),l=a>0?-.5/a:0,c=[],p=[];c.length<n&&u.length>0;){var d=u.pop(),f=d.score,m=d.boxIndex,v=d.suppressBeginIndex;if(f<o)break;for(var y=!1,h=c.length-1;h>=v;--h){var g=Qb(e,m,c[h]);if(g>=r){y=!0;break}if(d.score=d.score*Zb(r,l,g),d.score<=o)break}d.suppressBeginIndex=c.length,y||(d.score===f?(c.push(m),p.push(d.score)):d.score>o&&Xb(u,d,th))}var x=c.length;return s&&(c.fill(0,x),p.fill(0,x)),{selectedIndices:zn(c,"int32"),selectedScores:zn(p,"float32"),numValidOutputs:X(x,"int32")}}function Qb(e,t,n){var r=e.subarray(4*t,4*t+4),o=e.subarray(4*n,4*n+4),a=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(o[0],o[2]),c=Math.min(o[1],o[3]),p=Math.max(o[0],o[2]),d=Math.max(o[1],o[3]),f=(s-a)*(u-i),m=(p-l)*(d-c);if(f<=0||m<=0)return 0;var v=Math.max(a,l),y=Math.max(i,c),h=Math.min(s,p),g=Math.min(u,d),x=Math.max(h-v,0)*Math.max(g-y,0);return x/(f+m-x)}function Zb(e,t,n){var r=Math.exp(t*n*n);return n<=e?r:0}function th(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}function wy(e,t,n){var r=new Array(e.rank).fill(0),o=e.shape.slice();return t.map(function(a){o[n]=a;var i=e.slice(r,o);return r[n]+=a,i})}function by(e,t){for(var n=new Array(e.rank),r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];var o=ae(n,e.dtype);for(r=0;r<o.values.length;++r){for(var a=o.indexToLoc(r),i=new Array(e.rank),s=0;s<i.length;s++)i[s]=a[s]%e.shape[s];var u=e.locToIndex(i);o.values[r]=e.values[u]}return o.toTensor()}function Cy(e,t,n,r,o){for(var a=t[t.length-1],i=[e.length/a,a],s=i[0],u=i[1],l=Gr(n,s*r),c=Gr("int32",s*r),p=0;p<s;p++){for(var d=p*u,f=e.subarray(d,d+u),m=[],v=0;v<f.length;v++)m.push({value:f[v],index:v});m.sort(function(w,b){return b.value-w.value});var y=p*r,h=l.subarray(y,y+r),g=c.subarray(y,y+r);for(v=0;v<r;v++)h[v]=m[v].value,g[v]=m[v].index}var x=t.slice();return x[x.length-1]=r,[Ye(l,x,n),Ye(c,x,"int32")]}function ad(e,t){for(var n=[],r=0;r<t.length;r++)t[r]&&n.push(r);var o=ae(e,"int32"),a=ae([n.length,e.length],"int32");for(r=0;r<n.length;r++){var i=o.indexToLoc(n[r]),s=r*e.length;a.values.set(i,s)}return a.toTensor()}var Jb=function(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map(function(o,a){return"T"+a});var n=[];this.variableNames.forEach(function(o){n.push("float v"+o+" = get"+o+"AtOutCoords();")});var r=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+n.join(`
        `)+`

        float result = `+r+`;
        setOutput(result);
      }
    `},e2=function(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map(function(o,a){return"T"+a});var n=[];this.variableNames.forEach(function(o){n.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var r=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+n.join(`
        `)+`

        vec4 result = `+r+`;
        setOutput(result);
      }
    `},t2=function(e,t,n){this.variableNames=["A"];var r=e.windowSize,o=e.batchSize,a=e.inSize,i=Math.ceil(a/r);n||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=t==="max"?">":"<",u=n?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+r+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+r+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function Sy(e,t){return["x","y","z","w","u","v"].slice(0,t).map(function(n){return e+"."+n})}function vt(e,t){return t===1?[e]:Sy(e,t)}function it(){var e,t,n,r,o,a,i,s,u,l;return z().getNumber("WEBGL_VERSION")===2?(e="#version 300 es",t="in",n="out",r="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e="",t="attribute",n="varying",r="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:l}}function Or(e,t,n){n===void 0&&(n="index");var r=Ct(t);return r.map(function(o,a){return"int "+e[a]+" = "+n+" / "+o+"; "+(a===r.length-1?"int "+e[a+1]+" = "+n+" - "+e[a]+" * "+o:"index -= "+e[a]+" * "+o)+";"}).join("")}function id(e){var t=Ct(e).map(function(n){return n.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var Ey=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function n2(e,t,n,r){var o=[];e.forEach(function(f){var m=Q(f.shapeInfo.logicalShape);f.shapeInfo.isUniform?o.push("uniform float "+f.name+(m>1?"["+m+"]":"")+";"):(o.push("uniform sampler2D "+f.name+";"),o.push("uniform int offset"+f.name+";"))});var a,i,s=o.join(`
`),u=e.map(function(f){return function(m,v,y){y===void 0&&(y=!1);var h="";h+=y?Ny(m):lo(m);var g=m.shapeInfo.logicalShape,x=v.logicalShape;return g.length<=x.length&&(h+=y?function(w,b){var S,k=w.name,N=k.charAt(0).toUpperCase()+k.slice(1),R="get"+N+"AtOutCoords",T=w.shapeInfo.logicalShape.length,D=b.logicalShape.length,F=tr(w.shapeInfo.logicalShape,b.logicalShape),U=Se(D),W=D-T,V=["x","y","z","w","u","v"];S=T===0?"":D<2&&F.length>=1?"coords = 0;":F.map(function(K){return"coords."+V[K+W]+" = 0;"}).join(`
`);var $="";$=D<2&&T>0?"coords":w.shapeInfo.logicalShape.map(function(K,te){return"coords."+V[te+W]}).join(", ");var H="return outputValue;",O=Q(w.shapeInfo.logicalShape)===1,P=Q(b.logicalShape)===1;if(T!==1||O||P){if(O&&!P)H=D===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(F.length){var L=T-2,q=T-1;F.indexOf(L)>-1&&F.indexOf(q)>-1?H="return vec4(outputValue.x);":F.indexOf(L)>-1?H="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":F.indexOf(q)>-1&&(H="return vec4(outputValue.xx, outputValue.zz);")}}else H=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+R+`() {
      `+U+` coords = getOutputCoords();
      `+S+`
      vec4 outputValue = get`+N+"("+$+`);
      `+H+`
    }
  `}(m,v):function(w,b){var S=w.name,k=S.charAt(0).toUpperCase()+S.slice(1),N="get"+k+"AtOutCoords",R=b.texShape,T=w.shapeInfo.texShape,D=w.shapeInfo.logicalShape.length,F=b.logicalShape.length;if(!w.shapeInfo.isUniform&&D===F&&w.shapeInfo.flatOffset==null&&qe(T,R))return`
      float `+N+`() {
        return sampleTexture(`+S+`, resultUV);
      }
    `;var U,W=Se(F),V=tr(w.shapeInfo.logicalShape,b.logicalShape),$=F-D,H=["x","y","z","w","u","v"];U=D===0?"":F<2&&V.length>=1?"coords = 0;":V.map(function(P){return"coords."+H[P+$]+" = 0;"}).join(`
`);var O="";return O=F<2&&D>0?"coords":w.shapeInfo.logicalShape.map(function(P,L){return"coords."+H[L+$]}).join(", "),`
    float `+N+`() {
      `+W+` coords = getOutputCoords();
      `+U+`
      return get`+k+"("+O+`);
    }
  `}(m,v)),h}(f,t,r)}).join(`
`),l=t.texShape,c=it(),p=function(f){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+f.texture2D+`(textureSampler, uv).r;
    }
  `}(c),d=function(f){return f.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+f.varyingFs+` vec2 resultUV;
    `+f.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+f.defineSpecialNaN+`
    `+f.defineSpecialInf+`
    `+f.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+r2+`
    `+o2+`
    `+a2+`
  `}(c);return t.isPacked?(a=function(f,m){switch(f.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(w,b){var S=[Math.ceil(b[0]/2),Math.ceil(b[1]/2)];return S[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+S[1]+`.0);
      }
    `:S[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+S[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+S[0]+", "+S[1]+`));
      return 2 * (resTexRC.x * `+S[1]+` + resTexRC.y);
    }
  `}(0,m);case 2:return function(w,b){var S=[Math.ceil(b[0]/2),Math.ceil(b[1]/2)];if(qe(w,b))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+S[0]+", "+S[1]+`));
      }
    `;var k=Math.ceil(w[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+S[0]+", "+S[1]+`));

      int index = resTexRC.x * `+S[1]+` + resTexRC.y;
      int r = 2 * (index / `+k+`);
      int c = imod(index, `+k+`) * 2;

      return ivec2(r, c);
    }
  `}(f,m);case 3:return v=f,y=m,h=[Math.ceil(y[0]/2),Math.ceil(y[1]/2)],g=Math.ceil(v[2]/2),x=g*Math.ceil(v[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+h[0]+", "+h[1]+`));
      int index = resTexRC.x * `+h[1]+` + resTexRC.y;

      int b = index / `+x+`;
      index -= b * `+x+`;

      int r = 2 * (index / `+g+`);
      int c = imod(index, `+g+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(w,b){for(var S=[Math.ceil(b[0]/2),Math.ceil(b[1]/2)],k=Math.ceil(w[w.length-1]/2),N=k*Math.ceil(w[w.length-2]/2),R=N,T="",D="b, r, c",F=2;F<w.length-1;F++)R*=w[w.length-F-1],T=`
      int b`+F+" = index / "+R+`;
      index -= b`+F+" * "+R+`;
    `+T,D="b"+F+", "+D;return`
    ivec`+w.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+S[0]+", "+S[1]+`));
      int index = resTexRC.x * `+S[1]+` + resTexRC.y;

      `+T+`

      int b = index / `+N+`;
      index -= b * `+N+`;

      int r = 2 * (index / `+k+`);
      int c = imod(index, `+k+`) * 2;

      return ivec`+w.length+"("+D+`);
    }
  `}(f,m)}var v,y,h,g,x}(t.logicalShape,l),i=function(f){return`
    void setOutput(vec4 val) {
      `+f.output+` = val;
    }
  `}(c)):(a=function(f,m){switch(f.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(h,g){return g[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+g[1]+`.0);
      }
    `:g[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+g[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      return resTexRC.x * `+g[1]+` + resTexRC.y;
    }
  `}(0,m);case 2:return function(h,g){return qe(h,g)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+g[0]+", "+g[1]+`));
      }
    `:h[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+g[0]+", "+g[1]+`));
        int index = resTexRC.x * `+g[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:h[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+g[0]+", "+g[1]+`));
        int index = resTexRC.x * `+g[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;
      int r = index / `+h[1]+`;
      int c = index - r * `+h[1]+`;
      return ivec2(r, c);
    }
  `}(f,m);case 3:return v=m,y=Or(["r","c","d"],f),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+v[0]+", "+v[1]+`));
      int index = resTexRC.x * `+v[1]+` + resTexRC.y;
      `+y+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(h,g){var x=Or(["r","c","d","d2"],h);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;
      `+x+`
      return ivec4(r, c, d, d2);
    }
  `}(f,m);case 5:return function(h,g){var x=Or(["r","c","d","d2","d3"],h);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+g[0]+`,
                             `+g[1]+`));

      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      `+x+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(f,m);case 6:return function(h,g){var x=Or(["r","c","d","d2","d3","d4"],h);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      `+x+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(f,m);default:throw new Error(f.length+"-D output sampling is not yet supported")}var v,y}(t.logicalShape,l),i=function(f){return`
    void setOutput(float val) {
      `+f.output+` = vec4(val, 0, 0, 0);
    }
  `}(c)),r&&(d+=i2),[d,p,i,s,a,u,n].join(`
`)}function lo(e){var t=e.shapeInfo.logicalShape;switch(t.length){case 0:return function(n){var r=n.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(n.shapeInfo.isUniform)return"float "+o+"() {return "+r+";}";var a=n.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=n.shapeInfo.texShape,l=u[0],c=u[1],p=Er(r);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+l+", "+c+", "+p+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(e);case 1:return function(n){var r=n.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(n.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+io(n)+`
      }
    `;var a=n.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=Er(r);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+r+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(e);case 2:return function(n){var r=n.shapeInfo.logicalShape,o=n.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n.shapeInfo.texShape;if(i!=null&&qe(r,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var l=Zn(r),c=l.newShape,p=l.keptDims,d=c;if(d.length<r.length){var f=co(n,d);return`
      `+lo(f)+`
      float `+a+`(int row, int col) {
        return `+a+"("+po(["row","col"],p)+`);
      }
    `}if(n.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+r[1]+`, 1)));
        `+io(n)+`
      }
    `;var m=i[0],v=i[1],y=Er(o);return v===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+y+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+m+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:m===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+y+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+v+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+r[1]+" + col + "+y+`;
    vec2 uv = uvFromFlat(`+m+", "+v+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(e);case 3:return function(n){var r=n.shapeInfo.logicalShape,o=n.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=r[1]*r[2],s=r[2],u=Zn(r),l=u.newShape,c=u.keptDims,p=l;if(p.length<r.length){var d=co(n,p);return`
        `+lo(d)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+po(["row","col","depth"],c)+`);
        }
      `}if(n.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+io(n)+`
      }
    `;var f=n.shapeInfo.texShape,m=f[0],v=f[1],y=n.shapeInfo.flatOffset;if(v===i&&y==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+v+".0, "+m+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(v===s&&y==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+r[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+v+".0, "+m+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var h=Er(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+h+`;
        vec2 uv = uvFromFlat(`+m+", "+v+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(e);case 4:return function(n){var r=n.shapeInfo.logicalShape,o=n.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=r[3],s=r[2]*i,u=r[1]*s,l=Zn(r),c=l.newShape,p=l.keptDims;if(c.length<r.length){var d=co(n,c);return`
      `+lo(d)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+po(["row","col","depth","depth2"],p)+`);
      }
    `}if(n.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+io(n)+`
      }
    `;var f=n.shapeInfo.flatOffset,m=n.shapeInfo.texShape,v=m[0],y=m[1];if(y===u&&f==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+y+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(y===i&&f==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+r[1]*r[2]+", "+r[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+y+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var h=Er(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+v+", "+y+", index + "+h+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(e);case 5:return function(n){var r=n.shapeInfo.logicalShape,o=n.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=r[4],s=r[3]*i,u=r[2]*s,l=r[1]*u,c=Zn(r),p=c.newShape,d=c.keptDims;if(p.length<r.length){var f=co(n,p);return`
      `+lo(f)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+po(["row","col","depth","depth2","depth3"],d)+`);
      }
    `}if(n.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+l+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+io(n)+`
      }
    `;var m=n.shapeInfo.flatOffset,v=n.shapeInfo.texShape,y=v[0],h=v[1];if(h===l&&m==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+h+".0, "+y+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(h===i&&m==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]+`,
               `+r[2]*r[3]+", "+r[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+h+".0, "+y+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=Er(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+l+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+g+`;
      vec2 uv = uvFromFlat(`+y+", "+h+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(e);case 6:return function(n){var r=n.shapeInfo.logicalShape,o=n.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=Zn(r),s=i.newShape,u=i.keptDims;if(s.length<r.length){var l=co(n,s);return`
      `+lo(l)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+po(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var c=r[5],p=r[4]*c,d=r[3]*p,f=r[2]*d,m=r[1]*f;if(n.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+m+", "+f+", "+d+", "+p+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+c+`, 1)));
        `+io(n)+`
      }
    `;var v=n.shapeInfo.flatOffset,y=n.shapeInfo.texShape,h=y[0],g=y[1];if(g===m&&v==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+f+", "+d+", "+p+", "+c+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+h+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===c&&v==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]*r[4]+`,
               `+r[2]*r[3]*r[4]+`,
               `+r[3]*r[4]+`,
               `+r[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+h+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=Er(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+m+" + col * "+f+" + depth * "+d+` +
          depth2 * `+p+" + depth3 * "+c+" + depth4 + "+x+`;
      vec2 uv = uvFromFlat(`+h+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(e);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function Ny(e){var t,n,r;switch(e.shapeInfo.logicalShape.length){case 0:return t=e.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1),r=it(),`
    vec4 `+n+`() {
      return `+r.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],l=it();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+l.texture2D+"("+a+`, uv);
    }
  `}(e);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,l=u[0],c=u[1],p=it();if(u!=null&&qe(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+c+".0, "+l+`.0);

        return `+p.texture2D+"("+i+`, uv);
      }
    `;var d=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],f=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+f+", "+d[0]+", "+d[1]+`, row, col);
      return `+p.texture2D+"("+i+`, uv);
    }
  `}(e);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,l=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var c=a.slice(1),p=co(o,c);return`
        `+Ny(p)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+po(["b","row","col"],[1,2])+`);
        }
      `}var d=l[0],f=l[1],m=Math.ceil(a[2]/2),v=m*Math.ceil(a[1]/2),y=it();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+d+", "+f+", "+v+", "+m+`, b, row, col);
      return `+y.texture2D+"("+i+`, uv);
    }
  `}(e);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),l=o.shapeInfo.texShape,c=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)],p=c[0],d=c[1],f=Math.ceil(a[i-1]/2),m=f*Math.ceil(a[i-2]/2),v="int b, int row, int col",y="b * "+m+" + (row / 2) * "+f+" + (col / 2)",h=2;h<i-1;h++)v="int b"+h+", "+v,m*=a[i-h-1],y="b"+h+" * "+m+" + "+y;var g=it();return`
    vec4 `+u+"("+v+`) {
      int index = `+y+`;
      int texR = index / `+d+`;
      int texC = index - texR * `+d+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+d+", "+p+`);
      return `+g.texture2D+"("+s+`, uv);
    }
  `}(e)}}var r2=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,o2=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,a2=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,i2=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Er(e){return"offset"+e}function io(e){var t=e.name,n=Q(e.shapeInfo.logicalShape);return n<2?"return "+t+";":`
    for (int i = 0; i < `+n+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function Se(e){if(e<=1)return"int";if(e===2)return"ivec2";if(e===3)return"ivec3";if(e===4)return"ivec4";if(e===5)return"ivec5";if(e===6)return"ivec6";throw Error("GPU for rank "+e+" is not yet supported")}function co(e,t){var n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function po(e,t){return t.map(function(n){return e[n]}).join(", ")}var s2=function(e,t,n,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,I(e.length>2,function(){return"Packed arg"+(n.charAt(0).toUpperCase()+n.slice(1))+" supports only inputs with rank above 2."});var o=e[e.length-1],a=Math.ceil(o/t);this.outputShape=e.slice(0,-1),a>1&&this.outputShape.push(a),r||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,l=u.length,c=Se(l),p=vt("coords",l);if(a===1){var d=Se(s=l+1);i=`
        `+d+" sourceLocR = "+d+"("+p.join()+`, 0);
        ++`+p[l-1]+`;
        `+d+" sourceLocG = "+d+"("+p.join()+`, 0);
        ++`+p[l-2]+`;
        `+d+" sourceLocA = "+d+"("+p.join()+`, 0);
        --`+p[l-1]+`;
        `+d+" sourceLocB = "+d+"("+p.join()+`, 0);
        --`+p[l-2]+";"}else s=l,i=`
        `+c+` sourceLocR = coords;
        ++`+p[l-1]+`;
        `+c+` sourceLocG = coords;
        ++`+p[l-2]+`;
        `+c+` sourceLocA = coords;
        --`+p[l-1]+`;
        `+c+` sourceLocB = coords;
        --`+p[l-2]+";";var f=["x","y","z","w","u","v"].slice(0,s),m="."+f[s-1],v=f.map(function(N){return"int "+N}),y=vt("sourceLocR",s-1).concat("inIdx.r"),h=vt("sourceLocG",s-1).concat("inIdx.g"),g=vt("sourceLocB",s-1).concat("inIdx.b"),x=vt("sourceLocA",s-1).concat("inIdx.a"),w=n==="max"?"greaterThan":"lessThan",b=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+y.join()+`),
                             getBestIndicesAChannel(`+h.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+x.join()+")));",S=`vec4(
            getAChannel(`+y.join()+`),
            hasNextCol ? getAChannel(`+h.join()+`) : 0.,
            hasNextRow ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+x.join()+") : 0.)",k=r?"":`
      float getBestIndicesAChannel(`+v.join()+`) {
        return getChannel(getBestIndicesA(`+f.join()+`),
                                          vec2(`+f.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+v.join()+`) {
        return getChannel(getA(`+f.join()+`),
                               vec2(`+f.slice(-2).join()+`));
      }
      `+k+`
      void main() {
        `+c+` coords = getOutputCoords();
        bool hasNextCol = `+p[l-1]+" < "+(u[l-1]-1)+`;
        bool hasNextRow = `+p[l-2]+" < "+(u[l-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+m+", sourceLocG"+m+`,
          sourceLocB`+m+", sourceLocA"+m+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+S+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+b+`
          vec4 candidate = `+S+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+w+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},u2=function(e){this.variableNames=["dy"],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,o=e.strideWidth,a=e.dilationHeight,i=e.dilationWidth,s=e.effectiveFilterHeight,u=e.effectiveFilterWidth,l=s-1-e.padInfo.top,c=u-1-e.padInfo.left,p=1/(t*n);this.userCode=`
      const ivec2 pads = ivec2(`+l+", "+c+`);
      const float avgMultiplier = float(`+p+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},l2=function(e){this.variableNames=["dy"],this.outputShape=e.inShape;var t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,o=e.strideDepth,a=e.strideHeight,i=e.strideWidth,s=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,c=e.effectiveFilterDepth,p=e.effectiveFilterHeight,d=e.effectiveFilterWidth,f=c-1-e.padInfo.front,m=p-1-e.padInfo.top,v=d-1-e.padInfo.left,y=1/(t*n*r);this.userCode=`
      const ivec3 pads = ivec3(`+f+", "+m+", "+v+`);
      const float avgMultiplier = float(`+y+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+c+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+e.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+p+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+d+`;
                wC += `+l+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},c2=function(e,t,n,r,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],ce(e,t),ce(e,n);var i="0.0";r!=null&&(ce(e,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(ce(e,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},p2=function(e,t,n,r,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],ce(e,t),ce(e,n);var i="vec4(0.0)";r!=null&&(ce(e,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(ce(e,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},d2="return areal * breal - aimag * bimag;",f2="return areal * bimag + aimag * breal;",nh=function(e,t,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=ce(t,n),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+e+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},pl="return a + b;",dl="return a - b;",rh="return a * b;",h2=`
if (a == b) {
  return 1.0;
};
return a / b;`,ky="return (a < 0.) ? b * a : a;",Pe=function(e,t,n){this.variableNames=["A","B"],this.outputShape=ce(t,n),this.userCode=`
      float binaryOperation(float a, float b) {
        `+e+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},m2=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,Iy=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,dn=function(e,t,n,r){r===void 0&&(r=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=ce(t,n);var o=this.outputShape.length,a="";if(r)if(o===0||Q(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+Se(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=vt("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+e+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},v2=function(){function e(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return e.prototype.getCustomSetupFunc=function(t,n){var r=this;return function(o,a){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(a,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(r.minLoc,t),o.gl.uniform1f(r.maxLoc,n)}},e}(),g2=function(){function e(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return e.prototype.getCustomSetupFunc=function(t,n){var r=this;return function(o,a){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(a,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(r.minLoc,t),o.gl.uniform1f(r.maxLoc,n)}},e}(),y2=function(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},x2=function(e){this.outputShape=[],this.outputShape=Go(e,1),this.variableNames=e.map(function(s,u){return"T"+u});var t=new Array(e.length-1);t[0]=e[0][1];for(var n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];var r=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(n=1;n<t.length;n++){var o=t[n-1];r.push("else if (yC < "+t[n]+") setOutput(getT"+n+"(yR, yC-"+o+"));")}var a=t.length,i=t[t.length-1];r.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+r.join(`
        `)+`
      }
    `},w2=function(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Go(e,t);var n=this.outputShape,r=n.length,o=Se(r),a=vt("coords",r),i=["x","y","z","w","u","v"].slice(0,r);this.variableNames=e.map(function(y,h){return"T"+h});var s=new Array(e.length-1);s[0]=e[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+e[u][t];var l=i[t],c=i.slice(-2),p=i.join(),d="if ("+l+" < "+s[0]+`) {
        return getChannel(
            getT0(`+p+"), vec2("+c.join()+`));
        }`;for(u=1;u<s.length;u++){var f=s[u-1];d+=`
        if (`+l+" < "+s[u]+"  && "+l+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+Pi(i,l,f)+`),
            vec2(`+Pi(c,l,f)+`));
        }`}var m=s.length,v=s[s.length-1];d+=`
        return getChannel(
          getT`+m+"("+Pi(i,l,v)+`),
          vec2(`+Pi(c,l,v)+"));",this.userCode=`
      float getValue(`+i.map(function(y){return"int "+y})+`) {
        `+d+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[r-1]+" = "+a[r-1]+` + 1;
        if (`+a[r-1]+" < "+n[r-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[r-2]+" = "+a[r-2]+` + 1;
        if (`+a[r-2]+" < "+n[r-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[r-1]+" = "+a[r-1]+` - 1;
        if (`+a[r-2]+" < "+n[r-2]+` &&
            `+a[r-1]+" < "+n[r-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function Pi(e,t,n){var r=e.indexOf(t);return e.map(function(o,a){return a===r?o+" - "+n:o}).join()}var b2=function(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;var t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,a=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yR = 0; yR < `+e.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+e.outWidth+`; yC++) {
              int xC = wC + yC * `+n+" - "+o+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},C2=function(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,o=e.strideWidth,a=e.dataFormat==="channelsLast",i=t-1-e.padInfo.top,s=n-1-e.padInfo.left,u=a?1:2,l=a?2:3,c=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+c+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+l+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+n+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+n+` - 1 - wC;

            for (int d2 = 0; d2 < `+e.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},S2=function(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;var t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,o=e.padInfo.front,a=e.padInfo.top,i=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yF = 0; yF < `+e.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+e.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+e.outHeight+`; yR++) {
              int xR = wR + yR * `+n+" - "+a+`;

              if (xR < 0 || xR >= `+e.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+e.outWidth+`; yC++) {
                int xC = wC + yC * `+r+" - "+i+`;

                if (xC < 0 || xC >= `+e.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},E2=function(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;var t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,o=e.strideDepth,a=e.strideHeight,i=e.strideWidth,s=t-1-e.padInfo.front,u=n-1-e.padInfo.top,l=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+l+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+e.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+n+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+n+` - 1 - wR;

            for (int wC = 0; wC < `+r+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+r+` - 1 - wC;

              for (int d2 = 0; d2 < `+e.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},N2=function(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;var t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,a=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yR = 0; yR < `+e.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+e.outWidth+`; yC++) {
              int xC = wC + yC * `+n+" - "+o+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},k2=function(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,o=e.strideWidth,a=t-1-e.padInfo.top,i=n-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+n+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+n+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},oh=function(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=e.outShape;var o=e.padInfo.top,a=e.padInfo.left,i=e.strideHeight,s=e.strideWidth,u=e.dilationHeight,l=e.dilationWidth,c=e.filterHeight,p=e.filterWidth,d=4*Math.floor(e.inChannels/4),f=e.inChannels%4,m=e.dataFormat==="channelsLast",v=m?1:2,y=m?2:3,h=m?3:1,g="",x="";n&&(g=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`
          float activation(float x) {
            `+n+`
          }
        `,x="result = activation(result);");var w=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+g+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+h+`];

        ivec2 xRCCorner =
            ivec2(coords[`+v+"], coords["+y+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+c+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+e.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+p+`; wC++) {
            int xC = xCCorner + wC * `+l+`;

            if (xC < 0 || xC >= `+e.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+d+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+m+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(f===1)+`) {

              if (`+m+`) {
                dotProd +=
                    getX(batch, xR, xC, `+d+`) *
                    getW(wR, wC, `+d+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+d+`, xR, xC) *
                    getW(wR, wC, `+d+`, d2);
              }

            } else if (`+(f===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+d+`, d2),
                getW(wR, wC, `+d+` + 1, d2)
              );

              if (`+m+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+d+`),
                  getX(batch, xR, xC, `+d+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+d+`, xR, xC),
                  getX(batch, `+d+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(f===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+d+`, d2),
                getW(wR, wC, `+d+` + 1, d2),
                getW(wR, wC, `+d+` + 2, d2)
              );

              if (`+m+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+d+`),
                  getX(batch, xR, xC, `+d+` + 1),
                  getX(batch, xR, xC, `+d+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+d+`, xR, xC),
                  getX(batch, `+d+` + 1, xR, xC),
                  getX(batch, `+d+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+w+`
        `+x+`
        setOutput(result);
      }
    `},I2=function(e){this.variableNames=["x","W"],this.outputShape=e.outShape;var t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,o=e.strideDepth,a=e.strideHeight,i=e.strideWidth,s=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,c=e.filterDepth,p=e.filterHeight,d=e.filterWidth,f=4*Math.floor(e.inChannels/4),m=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+t+", "+n+", "+r+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+c+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+e.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+p+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+d+`; wC++) {
              int xC = xCCorner + wC * `+l+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+f+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(m===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+f+`) *
                  getW(wF, wR, wC, `+f+`, d2);
              } else if (`+(m===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+f+`),
                  getX(batch, xF, xR, xC, `+f+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+f+`, d2),
                  getW(wF, wR, wC, `+f+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(m===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+f+`),
                  getX(batch, xF, xR, xC, `+f+` + 1),
                  getX(batch, xF, xR, xC, `+f+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+f+`, d2),
                  getW(wF, wR, wC, `+f+` + 1, d2),
                  getW(wF, wR, wC, `+f+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},ah=function(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=e.outShape;var o=e.inHeight,a=e.inWidth,i=e.padInfo.top,s=e.padInfo.left,u=e.strideHeight,l=e.strideWidth,c=e.dilationHeight,p=e.dilationWidth,d=e.filterHeight,f=e.filterWidth,m=e.outChannels/e.inChannels,v="",y="";n&&(v=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`
          float activation(float x) {
            `+n+`
          }
        `,y="result = activation(result);");var h=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+v+`

      const ivec2 strides = ivec2(`+u+", "+l+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+m+`;
        int q = d2 - d1 * `+m+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+d+`; wR++) {
          int xR = xRCorner + wR * `+c+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+p+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+h+`
        `+y+`
        setOutput(result);
      }
    `},ih=function(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.outShape;for(var o=e.inHeight,a=e.inWidth,i=e.padInfo.top,s=e.padInfo.left,u=e.strideHeight,l=e.strideWidth,c=e.dilationHeight,p=e.dilationWidth,d=e.filterHeight,f=e.filterWidth,m=f,v="int xR; int xC; int xCOffset;",y=0;y<d;y++)for(var h=0;h<f;h++)v+=`
          vec4 xTexelR`+y+"C"+2*h+` = vec4(0.);
          vec4 wR`+y+"C"+h+` = vec4(0.);
          vec4 xR`+y+"C"+h+" = vec4(0.);";for(y=0;y<d;y++)for(var g=0;g<m;g++){if(v+=`
          xR = xRCorner + `+y*c+`;
          xC = xCCorner + `+(h=2*g)*p+`;
        `,l===1){if(h<f&&(v+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+y+"C"+h+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+y+"C"+h+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+y+"C"+h+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+y+"C"+h+" = vec4(previous.zw, xTexelR"+y+"C"+h+`.xy);
                } else {
                  xR`+y+"C"+h+" = vec4(0, 0, xTexelR"+y+"C"+h+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+y+"C"+h+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+y+"C"+h+` = vec4(0.);
                }

                xR`+y+"C"+h+" = xTexelR"+y+"C"+h+`;
              `,h+1<f)){var x=s%2==0?Vp(p):p;p%2==0&&s%2==1||p%2!=0&&s%2!=1?(v+=`
                  xCOffset = xC + `+s%2+" + "+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+y+"C"+(h+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,p>1&&(v+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+y+"C"+h+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+y+"C"+h+` = vec4(0.);
                    }
                  `),v+=`
                  xR`+y+"C"+(h+1)+` = vec4(
                    xTexelR`+y+"C"+h+".zw, xTexelR"+y+"C"+(h+2)+`.xy);
                `):v+=`
                  xCOffset = xC + `+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+y+"C"+(h+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+y+"C"+(h+1)+" = xTexelR"+y+"C"+(h+2)+`;
                `}}else h<f&&(v+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(v+=`
                xCOffset = xC + 1 - `+l+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+y+"C"+h+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+y+"C"+h+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+y+"C"+(h+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+y+"C"+(h+2)+` = vec4(0.);
                }

                xR`+y+"C"+h+` = vec4(
                  xTexelR`+y+"C"+h+".zw, xTexelR"+y+"C"+(h+2)+`.zw);
              `,h+1<f&&(v+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+l+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+y+"C"+(h+1)+" = vec4(xTexelR"+y+"C"+(h+2)+`.xy, final.xy);
                `)):(v+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+y+"C"+h+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+y+"C"+h+` = vec4(0.);
                }

                xCOffset = xC + `+l+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+y+"C"+(h+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+y+"C"+(h+2)+` = vec4(0.);
                }

                xR`+y+"C"+h+` = vec4(
                  xTexelR`+y+"C"+h+".xy, xTexelR"+y+"C"+(h+2)+`.xy);
              `,h+1<f&&(v+=`
                  xR`+y+"C"+(h+1)+` = vec4(
                    xTexelR`+y+"C"+h+".zw, xTexelR"+y+"C"+(h+2)+`.zw);
                `)),v+="}");h<f&&(v+=`
            vec4 wTexelR`+y+"C"+h+" = getW("+y+", "+h+`, d1, q);
            wR`+y+"C"+h+" = vec4(wTexelR"+y+"C"+h+".xz, wTexelR"+y+"C"+h+`.xz);
          `,h+1<f&&(v+=`
              vec4 wTexelR`+y+"C"+(h+1)+" = getW("+y+", "+(h+1)+`, d1, q);
              wR`+y+"C"+(h+1)+` =
                vec4(wTexelR`+y+"C"+(h+1)+".xz, wTexelR"+y+"C"+(h+1)+".xz);"))}for(y=0;y<d;y++)for(h=0;h<f;h++)v+="dotProd += xR"+y+"C"+h+" * wR"+y+"C"+h+";";var w="",b="";n&&(w=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`vec4 activation(vec4 x) {
          `+n+`
        }`,b="result = activation(result);");var S=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+w+`

      const ivec2 strides = ivec2(`+u+", "+l+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+v+`

        vec4 result = dotProd;
        `+S+`
        `+b+`
        setOutput(result);
      }
    `},R2=function(e,t,n,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=e[0],i=e[1],s=e[2],u=e[3],l=t[0],c=n[0],p=n[1];this.outputShape=[l,c,p,u];var d=r==="bilinear"?1:0,f=[i-1+".0",s-1+".0"],m=f[0],v=f[1],y=c>1?[""+(i-1)/(c-1),"(y2-y1) * height_ratio","y1*"+m+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+m],h=y[0],g=y[1],x=y[2],w=p>1?[""+(s-1)/(p-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],b=w[0],S=w[1],k=w[2];this.userCode=`
      const float height_ratio = float(`+h+`);
      const float width_ratio = float(`+b+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+g+`;
        float width_scale = `+S+`;

        float in_y = `+x+`;
        if( in_y < 0.0 || in_y > `+m+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+k+`;
        if( in_x < 0.0 || in_x > `+v+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+d+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},T2=function(e,t,n){this.variableNames=["x"],this.outputShape=e;var r=e.length,o=e[e.length-1],a=n?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(n?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+Se(r)+` coords = getOutputCoords();
        int end = `+sh(r,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+sh(r,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(r,"coords")+`);
        }
        setOutput(val);
      }
    `};function sh(e,t){if(e===1)return""+t;if(e===2)return t+".y";if(e===3)return t+".z";if(e===4)return t+".w";throw Error("Cumulative sum for rank "+e+" is not yet supported")}var A2=function(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Ja.DENSE;var t=Aa(e),n=it();this.outputShape=e,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Or(["r","c","d"],e)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+n.output+` = result;
      }
    `},_2=function(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Ja.DENSE;var t=Aa(e),n=it();this.outputShape=e,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Or(["r","c","d"],e)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+n.output+` = result;
      }
    `},D2=function(){function e(t,n,r){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=n,this.dataFormat=r,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+n+`;
      int offset_h = imod(h, `+n+`);
      int in_w = w / `+n+`;
      int offset_w = imod(w, `+n+`);
      int offset_d = (offset_h * `+n+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return e.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},e.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},e.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},e.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},e.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},e}(),O2=function(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},F2=function(e){this.variableNames=["A"],this.outTexUsage=Dt.DOWNLOAD;var t=it();this.outputShape=e,this.userCode=`
      `+Ey+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},M2=function(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Dt.DOWNLOAD;var t=it();this.outputShape=e,this.userCode=`
      `+Ey+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},P2=function(e,t,n){n===void 0&&(n=!1),this.variableNames=["A"];var r=it(),o=t[0],a=t[1];this.outputShape=e;var i="result";n&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+id(e)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+r.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+r.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},L2=function(e,t,n){n===void 0&&(n=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var r=it(),o=t[0],a=t[1];this.outputShape=e;var i="",s="result";n&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var l=0;l<=1;l++){var c=2*u+l;i+=`
          localCoords = coords;
          if(localCoords[2] + `+l+" < "+e[2]+`) {
            localCoords[2] += `+l+`;
            if(localCoords[1] + `+u+" < "+e[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+r.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+c+`] = values[0];
              } else if(offset == 1) {
                result[`+c+`] = values[1];
              } else if(offset == 2) {
                result[`+c+`] = values[2];
              } else {
                result[`+c+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+id(e)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+r.output+" = "+s+`;
      }
    `},B2="return real * expR - imag * expI;",z2="return real * expI + imag * expR;",uh=function(e,t,n){this.variableNames=["real","imag"];var r=t[1];this.outputShape=t;var o=n?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=n?r+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+e+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+r+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+r+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},V2=function(){function e(t,n){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return e.prototype.getCustomSetupFunc=function(t){var n=this;return function(r,o){n.valueLoc==null&&(n.valueLoc=r.getUniformLocationNoThrow(o,"value")),r.gl.uniform1f(n.valueLoc,t)}},e}(),W2=function(e,t,n){this.variableNames=["A","indices"];var r=e.slice();r[n]=t,this.outputShape=r,this.rank=r.length;var o=Se(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var l=["resRC.x","resRC.y","resRC.z","resRC.w"],c=[],p=0;p<i.length;p++)p===s?c.push("int(getIndices("+l[p]+"))"):c.push(""+l[p]);return c.join()}(e,n);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},U2=function(e,t,n){this.sliceDim=e,this.strides=t,this.variableNames=["x","indices"],this.outputShape=n;var r=Se(t.length),o=Se(n.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+r+" strides = "+r+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function $2(e,t){var n=it();return Gw(e,t,n.version+`
    precision highp float;
    `+n.attribute+` vec3 clipSpacePos;
    `+n.attribute+` vec2 uv;
    `+n.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function j2(e,t){return Qw(e,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function H2(e,t){return Zw(e,t,new Uint16Array([0,1,2,2,1,3]))}function di(e,t,n,r,o,a,i){eb(n,r);var s=Jw(e,t),u=e.TEXTURE_2D;return ee(e,t,function(){return e.bindTexture(u,s)}),ee(e,t,function(){return e.texParameteri(u,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)}),ee(e,t,function(){return e.texParameteri(u,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}),ee(e,t,function(){return e.texParameteri(u,e.TEXTURE_MIN_FILTER,e.NEAREST)}),ee(e,t,function(){return e.texParameteri(u,e.TEXTURE_MAG_FILTER,e.NEAREST)}),ee(e,t,function(){return e.texImage2D(u,0,o,n,r,0,a,i,null)}),ee(e,t,function(){return e.bindTexture(e.TEXTURE_2D,null)}),s}function G2(e,t,n,r,o){var a=uu(n,r);return di(e,t,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,e.FLOAT)}function q2(e,t,n,r,o){var a=uu(n,r);return di(e,t,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function K2(e,t,n,r,o){var a=uu(n,r);return di(e,t,a[0],a[1],e.RGBA,e.RGBA,e.UNSIGNED_BYTE)}function X2(e,t,n,r,o){var a=ci(n,r);return di(e,t,a[0],a[1],o.internalFormatPackedFloat,e.RGBA,e.FLOAT)}function Y2(e,t,n,r,o){var a=ci(n,r);return di(e,t,a[0],a[1],o.internalFormatPackedHalfFloat,e.RGBA,o.textureTypeHalfFloat)}function Q2(e,t,n,r){return ee(e,t,function(){return e.bindBuffer(e.ARRAY_BUFFER,r)}),Xf(e,t,n,"clipSpacePos",r,3,20,0)&&Xf(e,t,n,"uv",r,2,20,12)}function Z2(e,t,n,r,o,a,i){var s,u,l;ee(e,t,function(){return e.bindTexture(e.TEXTURE_2D,n)}),a instanceof Uint8Array?(s=new Uint8Array(r*o*4),u=e.UNSIGNED_BYTE,l=e.RGBA):(s=new Float32Array(r*o*4),u=e.FLOAT,l=i.internalFormatPackedFloat),s.set(a),ee(e,t,function(){return e.texImage2D(e.TEXTURE_2D,0,l,r,o,0,e.RGBA,u,s)}),ee(e,t,function(){return e.bindTexture(e.TEXTURE_2D,null)})}function J2(e,t,n,r){ee(e,t,function(){return e.bindTexture(e.TEXTURE_2D,n)}),r.data instanceof Uint8Array?ee(e,t,function(){return e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r.width,r.height,0,e.RGBA,e.UNSIGNED_BYTE,r.data)}):ee(e,t,function(){return e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r)}),ee(e,t,function(){return e.bindTexture(e.TEXTURE_2D,null)})}function eC(e,t,n,r,o){var a=e.createBuffer();ee(e,t,function(){return e.bindBuffer(e.PIXEL_PACK_BUFFER,a)});var i=16*n*r;return ee(e,t,function(){return e.bufferData(e.PIXEL_PACK_BUFFER,i,e.STREAM_READ)}),ee(e,t,function(){return e.readPixels(0,0,r,n,e.RGBA,e.FLOAT,0)}),ee(e,t,function(){return e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}),a}function tC(e,t,n){var r=e,o=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,o),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),o}function nC(e,t,n,r,o){var a=uu(n,r),i=a[0],s=a[1],u=new Uint8Array(n*r*4);return ee(e,t,function(){return e.readPixels(0,0,i,s,o.downloadTextureFormat,e.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function rC(e,t,n,r,o,a,i,s){var u=e,l=new Float32Array(function(c,p){var d=ci(c,p);return d[0]*d[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,l),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),l}function oC(e,t,n,r){var o=new Float32Array(n*r*4);return ee(e,t,function(){return e.readPixels(0,0,r,n,e.RGBA,e.FLOAT,o)}),o}var aC=function(){function e(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var n=z().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,Ww(n,t)):this.gl=xn(n);var r="WEBGL_color_buffer_float";if(z().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=Di(this.gl,this.debug,"OES_texture_float"),Ut(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=Di(this.gl,this.debug,"OES_texture_half_float");else if(z().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),Ut(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=Di(this.gl,this.debug,"EXT_color_buffer_half_float");else if(z().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",Ut(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else{if(!Ut(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=j2(this.gl,this.debug),this.indexBuffer=H2(this.gl,this.debug),this.framebuffer=tb(this.gl,this.debug),this.textureConfig=Gp(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(e.prototype,"debug",{get:function(){return z().getBool("DEBUG")},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var n=this.gl;ee(n,this.debug,function(){return n.finish()}),ee(n,this.debug,function(){return n.bindFramebuffer(n.FRAMEBUFFER,null)}),ee(n,this.debug,function(){return n.deleteFramebuffer(t.framebuffer)}),ee(n,this.debug,function(){return n.bindBuffer(n.ARRAY_BUFFER,null)}),ee(n,this.debug,function(){return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,null)}),ee(n,this.debug,function(){return n.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},e.prototype.createFloat32MatrixTexture=function(t,n){return this.throwIfDisposed(),G2(this.gl,this.debug,t,n,this.textureConfig)},e.prototype.createFloat16MatrixTexture=function(t,n){return this.throwIfDisposed(),q2(this.gl,this.debug,t,n,this.textureConfig)},e.prototype.createUnsignedBytesMatrixTexture=function(t,n){return this.throwIfDisposed(),K2(this.gl,this.debug,t,n,this.textureConfig)},e.prototype.uploadPixelDataToTexture=function(t,n){this.throwIfDisposed(),J2(this.gl,this.debug,t,n)},e.prototype.uploadDenseMatrixToTexture=function(t,n,r,o){this.throwIfDisposed(),Z2(this.gl,this.debug,t,n,r,o,this.textureConfig)},e.prototype.createFloat16PackedMatrixTexture=function(t,n){return this.throwIfDisposed(),Y2(this.gl,this.debug,t,n,this.textureConfig)},e.prototype.createPackedMatrixTexture=function(t,n){return this.throwIfDisposed(),X2(this.gl,this.debug,t,n,this.textureConfig)},e.prototype.deleteMatrixTexture=function(t){var n=this;this.throwIfDisposed(),this.outputTexture===t&&(Yf(this.gl,this.debug,this.framebuffer),this.outputTexture=null),ee(this.gl,this.debug,function(){return n.gl.deleteTexture(t)})},e.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,n,r){var o=this;return this.downloadMatrixDriver(t,function(){return nC(o.gl,o.debug,n,r,o.textureConfig)})},e.prototype.downloadPackedMatrixFromBuffer=function(t,n,r,o,a,i){return rC(this.gl,t,0,0,0,a,i,this.textureConfig)},e.prototype.downloadFloat32MatrixFromBuffer=function(t,n){return tC(this.gl,t,n)},e.prototype.createBufferFromTexture=function(t,n,r){this.bindTextureToFrameBuffer(t);var o=eC(this.gl,this.debug,n,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},e.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},e.prototype.createFence=function(t){var n,r,o=this;if(z().getBool("WEBGL_FENCE_API_ENABLED")){var a=t,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),r=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},n=i}else z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(n=this.beginQuery(),this.endQuery(),r=function(){return o.isQueryAvailable(n,z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):r=function(){return!0};return{query:n,isFencePassed:r}},e.prototype.downloadMatrixFromPackedTexture=function(t,n,r){var o=this;return this.downloadMatrixDriver(t,function(){return oC(o.gl,o.debug,n,r)})},e.prototype.createProgram=function(t){this.throwIfDisposed();var n=this.gl,r=qw(n,this.debug,t),o=$2(n,this.debug),a=Xw(n,this.debug);return ee(n,this.debug,function(){return n.attachShader(a,o)}),ee(n,this.debug,function(){return n.attachShader(a,r)}),Yw(n,this.debug,a),this.debug&&sl(n,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=Q2(n,this.debug,this.program,this.vertexBuffer)),a},e.prototype.deleteProgram=function(t){var n=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&ee(this.gl,this.debug,function(){return n.gl.deleteProgram(t)})},e.prototype.setProgram=function(t){var n=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&sl(this.gl,this.debug,this.program),ee(this.gl,this.debug,function(){return n.gl.useProgram(t)})},e.prototype.getUniformLocation=function(t,n,r){return r===void 0&&(r=!0),this.throwIfDisposed(),r?rb(this.gl,this.debug,t,n):ob(this.gl,t,n)},e.prototype.getAttributeLocation=function(t,n){var r=this;return this.throwIfDisposed(),ee(this.gl,this.debug,function(){return r.gl.getAttribLocation(t,n)})},e.prototype.getUniformLocationNoThrow=function(t,n){return this.throwIfDisposed(),this.gl.getUniformLocation(t,n)},e.prototype.setInputMatrixTexture=function(t,n,r){this.throwIfDisposed(),this.throwIfNoProgram(),ab(this.gl,this.debug,this.program,t,n,r)},e.prototype.setOutputMatrixTexture=function(t,n,r){this.setOutputMatrixTextureDriver(t,r,n)},e.prototype.setOutputPackedMatrixTexture=function(t,n,r){this.throwIfDisposed();var o=ci(n,r),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(t,a,i)},e.prototype.setOutputMatrixWriteRegion=function(t,n,r,o){this.setOutputMatrixWriteRegionDriver(r,t,o,n)},e.prototype.setOutputPackedMatrixWriteRegion=function(t,n,r,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},e.prototype.debugValidate=function(){this.program!=null&&sl(this.gl,this.debug,this.program),Oi(this.gl)},e.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),ee(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},e.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),ee(this.gl,this.debug,function(){return t.gl.finish()})},e.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Di(this.gl,this.debug,z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},e.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},e.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},e.prototype.beginQuery=function(){if(z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,n=this.getQueryTimerExtensionWebGL2(),r=t.createQuery();return t.beginQuery(n.TIME_ELAPSED_EXT,r),r}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},e.prototype.endQuery=function(){if(z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var n=this.gl,r=this.getQueryTimerExtensionWebGL2();n.endQuery(r.TIME_ELAPSED_EXT)}},e.prototype.waitForQueryAndGetTime=function(t){return Z(this,void 0,void 0,function(){var n=this;return J(this,function(r){switch(r.label){case 0:return[4,yc(function(){return n.disposed||n.isQueryAvailable(t,z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return r.sent(),[2,this.getQueryTime(t,z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},e.prototype.getQueryTime=function(t,n){if(n===0)return null;if(n===2){var r=this.gl;return r.getQueryParameter(t,r.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},e.prototype.isQueryAvailable=function(t,n){if(n===0)return!0;if(n===2){var r=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=r.getQueryParameter(t,r.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},e.prototype.pollFence=function(t){var n=this;return new Promise(function(r){n.addItemToPoll(function(){return t.isFencePassed()},function(){return r()})})},e.prototype.pollItems=function(){for(var t=function(r){for(var o=0;o<r.length&&r[o]();++o);return o-1}(this.itemsToPoll.map(function(r){return r.isDoneFn})),n=0;n<=t;++n)(0,this.itemsToPoll[n].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},e.prototype.addItemToPoll=function(t,n){var r=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:n}),this.itemsToPoll.length>1||yc(function(){return r.pollItems(),r.itemsToPoll.length===0})},e.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),ul(this.gl,this.debug,t,this.framebuffer),this.debug&&Oi(this.gl)},e.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(ul(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Oi(this.gl)):Yf(this.gl,this.debug,this.framebuffer)},e.prototype.downloadMatrixDriver=function(t,n){this.bindTextureToFrameBuffer(t);var r=n();return this.unbindTextureToFrameBuffer(),r},e.prototype.setOutputMatrixTextureDriver=function(t,n,r){this.throwIfDisposed();var o=this.gl;ul(o,this.debug,t,this.framebuffer),this.debug&&Oi(o),this.outputTexture=t,ee(o,this.debug,function(){return o.viewport(0,0,n,r)}),ee(o,this.debug,function(){return o.scissor(0,0,n,r)})},e.prototype.setOutputMatrixWriteRegionDriver=function(t,n,r,o){var a=this;this.throwIfDisposed(),ee(this.gl,this.debug,function(){return a.gl.scissor(t,n,r,o)})},e.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},e.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},e}();function lh(e,t){if(e.length!==t.length)throw Error("Binary was compiled with "+e.length+" inputs, but was executed with "+t.length+" inputs");e.forEach(function(n,r){var o=n.logicalShape,a=t[r],i=a.shape;if(!qe(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!n.isUniform||!a.isUniform){var s=n.texShape,u=a.isUniform?null:a.texData.texShape;if(!qe(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var iC=function(e,t,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;for(var r=n.filterWidth,o=n.inChannels,a=n.strideWidth,i=n.strideHeight,s=n.padInfo,u=n.outWidth,l=n.dilationWidth,c=n.dilationHeight,p=n.dataFormat,d=s.left,f=s.top,m=o*r,v=it(),y=p==="channelsLast",h=y?0:1,g=y?1:2,x="",w=0;w<=1;w++)for(var b=0;b<=1;b++)x+=`
          blockIndex = rc.y + `+b+`;
          pos = rc.x + `+w+`;

          if(blockIndex < `+e[1]+" && pos < "+e[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+f+`;
            d0 = offsetY + `+c+" * (pos / "+m+`);

            if(d0 < `+t[h]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+d+`.);
              d1 = offsetX + `+l+" * (int(mod(float(pos), "+m+".) / "+o+`.));

              if(d1 < `+t[g]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+y+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*w+b)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*w+b)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+x+`

        `+v.output+` = result;
      }
    `},sC=function(e,t,n,r,o){this.variableNames=["x"],this.outputShape=[];var a,i=t,s=e[3]-1;this.outputShape=e;var u="float("+n+") + float("+r+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},uC=function(e,t,n,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+r+") * norm + float("+n+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+r+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},lC=function(e,t,n,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=t,s=e[3]-1;this.outputShape=e;var u="float("+n+") + float("+r+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},cC=function(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;var t=e.strideHeight,n=e.strideWidth,r=e.dilationHeight,o=e.effectiveFilterHeight,a=e.effectiveFilterWidth,i=o-1-e.padInfo.top,s=a-1-e.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+r+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+n+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},pC=function(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;var t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,o=e.dilationDepth,a=e.dilationHeight,i=e.dilationWidth,s=e.effectiveFilterDepth,u=e.effectiveFilterHeight,l=e.effectiveFilterWidth,c=s-1-e.padInfo.front,p=u-1-e.padInfo.top,d=l-1-e.padInfo.left,f=s*u*l-1;this.userCode=`
      const ivec3 pads = ivec3(`+c+", "+p+", "+d+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+e.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+n+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+l+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+r+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+f+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+l+` +
                  wR * `+l+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},fl=function(e,t,n,r,o,a,i){n===void 0&&(n=!1),r===void 0&&(r=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=n?e[1]:e[2],u=Math.ceil(s/2),l=n?"i * 2, rc.y":"rc.y, i * 2",c=r?"rc.z, i * 2":"i * 2, rc.z",p=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],d=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],f="",m="";a&&(f=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,m="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+f+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+l+`);
          vec4 b = getMatrixB(rc.x, `+c+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+p[0]+" * "+d[0]+`);
          result += (`+p[1]+" * "+d[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+v+`

        `+m+`

        setOutput(result);
      }
    `},dC=function(){function e(t,n,r){this.variableNames=["probs"],this.outputShape=[t,r],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(n-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(n-1)+`));
      }
    `}return e.prototype.getCustomSetupFunc=function(t){var n=this;return function(r,o){n.seedLoc==null&&(n.seedLoc=r.getUniformLocation(o,"seed")),r.gl.uniform1f(n.seedLoc,t)}},e}(),fC=function(e,t,n,r){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+r+"), float("+n+`),
                      float(index == coords.y)));
      }
    `},hC=function(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e;var t=e.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var n=vt("rc",t),r=Se(t),o=function(s,u,l){if(s===1)return"rc > "+u[0];for(var c="",p=s-2;p<s;p++)c+=l[p]+" >= "+u[p],p<s-1&&(c+="||");return c}(t,e,n),a=function(s,u,l,c){if(s===1)return"";var p=c.slice(-2);return`
    int r = `+p[0]+`;
    int c = `+p[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+l+`;
  `}(t,e[e.length-1],e[e.length-2],n),i=function(s,u){var l=s.length,c=function(p,d){for(var f=[],m=0;m<=1;m++)for(var v=0;v<=1;v++){for(var y=(m===0?"r":"rp1")+", "+(v===0?"c":"cp1"),h=2;h<p;h++)y=d[d.length-1-h]+","+y;f.push(y)}return f}(l,u);return l===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+c[0]+`),
          cEdge ? 0. : getA(`+c[1]+`),
          rEdge ? 0. : getA(`+c[2]+`),
          rEdge || cEdge ? 0. : getA(`+c[3]+")"}(e,n);this.userCode=`
        void main() {
          `+r+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},mC=function(e,t,n){this.variableNames=["x"],this.outputShape=t.map(function(u,l){return u[0]+e[l]+u[1]});var r=e.length,o=Se(r),a=t.map(function(u){return u[0]}).join(","),i=t.map(function(u,l){return u[0]+e[l]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=r!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+n+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+n+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},vC=function(e,t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(y,h){return y[0]+e[h]+y[1]});for(var r=e.length,o=Se(r),a=t.map(function(y){return y[0]}).join(","),i=t.map(function(y,h){return y[0]+e[h]}).join(","),s=vt("rc",r),u=vt("source",r),l=s[r-1]+" < "+this.outputShape[r-1],c=r===1?"source":"vec2("+u.slice(-2).join()+")",p=[o+" rc = outputLoc;",s[r-1]+` += 1;
       if(`+l+`) {
      `,r===1?"":`}
       rc = outputLoc;
       `+s[r-2]+` += 1;
       if(`+s[r-2]+" < "+this.outputShape[r-2]+") {",r===1?"":"  "+s[r-1]+` += 1;
         if(`+l+") {"],d=r===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",f="",m=0,v=r===1?2:4;m<v;m++)f+=`
        `+p[m]+`
        if (`+d+`) {
          result[`+m+"] = float("+n+`);
        } else {
          `+o+` source = rc - start;
          result[`+m+"] = getChannel(getX("+u.join()+"), "+c+`);
        }
      `;f+=r===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+f+`
        setOutput(result);
      }
    `},Da=function(e,t,n,r,o){if(r===void 0&&(r=!1),o===void 0&&(o=!1),this.variableNames=["x"],t==="avg"&&n)throw new Error("Cannot compute positions for average pool.");var a=e.filterWidth,i=e.strideHeight,s=e.strideWidth,u=e.dilationHeight,l=e.dilationWidth,c=e.effectiveFilterHeight,p=e.effectiveFilterWidth,d=e.padInfo.top,f=e.padInfo.left;this.outputShape=e.outShape;var m=t==="avg",v="((batch  * "+e.inHeight+" + xR) * "+e.inWidth+" + xC) * "+e.inChannels+" + d",y="(xR * "+e.inWidth+" + xC) * "+e.inChannels+" + d",h="0.0";if(m||(h="-1.0 / 1e-20"),n)this.userCode=`
        const ivec2 strides = ivec2(`+i+", "+s+`);
        const ivec2 pads = ivec2(`+d+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+c+`;
              wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+p+`;
                wC += `+l+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = `+(r?o?v:y:"wR * "+p+" + wC")+`;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var g=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(g="avgValue / count");var x=4*Math.floor(a/4),w=a%4,b=`
      if (`+m+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+d+", "+f+`);
      const float initializationValue = `+h+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+e.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+h+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+c+`;
            wR += `+u+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+e.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+x+`; wC += 4) {
            int xC = xCCorner + wC * `+l+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+l+`, d),
              getValue(batch, xR, xC + 2 * `+l+`, d),
              getValue(batch, xR, xC + 3 * `+l+`, d)
            );

            `+b+`
          }

          int xC = xCCorner + `+x+`;
          if (`+(w===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+b+`
          } else if (`+(w===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+l+`, d),
              initializationValue,
              initializationValue
            );

            `+b+`
          } else if (`+(w===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+l+`, d),
              getValue(batch, xR, xC + 2 * `+l+`, d),
              initializationValue
            );

            `+b+`
          }
        }
        setOutput(`+g+`);
      }
    `}},hl=function(e,t,n,r,o){if(r===void 0&&(r=!1),o===void 0&&(o=!1),this.variableNames=["x"],t==="avg"&&n)throw new Error("Cannot compute positions for average pool.");var a=e.filterWidth,i=e.strideDepth,s=e.strideHeight,u=e.strideWidth,l=e.dilationDepth,c=e.dilationHeight,p=e.dilationWidth,d=e.effectiveFilterDepth,f=e.effectiveFilterHeight,m=e.effectiveFilterWidth,v=e.padInfo.front,y=e.padInfo.top,h=e.padInfo.left;this.outputShape=e.outShape;var g=t==="avg",x="0.0";if(g||(x="-1.0 / 1e-20"),n)this.userCode=`
        const ivec3 strides =
            ivec3(`+i+", "+s+", "+u+`);
        const ivec3 pads = ivec3(`+v+", "+y+", "+h+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+d+`;
              wD += `+l+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+e.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+c+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+e.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+m+`;
                  wC += `+p+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+e.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = `+(r?o?"(((batch * "+e.inDepth+" + xD) * "+e.inHeight+" + xR) * "+e.inWidth+" + xC) * "+e.inChannels+" + ch":"((xD * "+e.inHeight+" + xR) * "+e.inWidth+" + xC) * "+e.inChannels+" + ch":"wD * "+f+" * "+m+` +
                      wR * `+m+" + wC")+`;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var w=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(w="avgValue / count");var b=4*Math.floor(a/4),S=a%4,k=`
      if (`+g+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+i+", "+s+", "+u+`);
      const ivec3 pads = ivec3(`+v+", "+y+", "+h+`);
      const float initializationValue = `+x+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+e.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+x+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+d+`;
            wD += `+l+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+e.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+c+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+p+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+p+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+p+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+p+`, ch)
              );

              `+k+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(S===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+k+`
            } else if (`+(S===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+p+`, ch),
                initializationValue,
                initializationValue
              );

              `+k+`
            } else if (`+(S===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+p+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+p+`, ch),
                initializationValue
              );

              `+k+`
            }
          }
          setOutput(`+w+`);
        }
      }
    `}},gC=function(e,t){this.variableNames=["x"];var n=e.windowSize,r=e.batchSize,o=e.inSize,a=Math.ceil(o/n);this.outputShape=[r,a];var i="0.0",s="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",s="min"):t==="max"&&(i="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var l=4*Math.floor(n/4),c=n%4,p=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,d="vec4";t==="all"?(i="1.0",p=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,d="bvec4"):t==="any"&&(i="0.0",p=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,d="bvec4");var f="";o%n>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+f+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+l+`; i += 4) {
          int inIdx = inOffset + i;
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+p+`
        }

        int inIdx = inOffset + `+l+`;
        if (`+(c===1)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+p+`
        } else if (`+(c===2)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+p+`
        } else if (`+(c===3)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+p+`
        }
        setOutput(`+u+`);
      }
    `},yC=function(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;for(var n="",r=0;r<4;r++){var o="thisRC = rc;";r%2==1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),n+=`
        `+o+`
        `+(r>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+r+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(r>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+Or(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+id(e)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+e[1]+`;
        int cols = `+e[2]+`;

        `+n+`

        setOutput(result);
      }
    `},xC=function(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],a=r[2],i=e.shape,s=i[1],u=i[2],l=[n&&s>1?o-1:o,n&&u>1?a-1:a],c=[n&&s>1?s-1:s,n&&u>1?u-1:u],p=l[0]/c[0],d=l[1]/c[1],f=1/p,m=1/d,v=2*Math.ceil(f)+2,y=2*Math.ceil(m)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+p+`);
        const float widthScale = float(`+d+`);

        const float invHeightScale = float(`+f+`);
        const float invWidthScale = float(`+m+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+y+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},wC=function(e,t,n,r){this.variableNames=["A"],this.outputShape=[];var o=e[0],a=e[1],i=e[2],s=e[3];this.outputShape=[o,t,n,s];var u=[r&&t>1?a-1:a,r&&n>1?i-1:i],l=[r&&t>1?t-1:t,r&&n>1?n-1:n];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/l[0]+`,
          `+u[1]/l[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},bC=function(e,t,n,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=e[0],a=e[1],i=e[2],s=e[3];this.outputShape=[o,t,n,s];var u=[r&&t>1?a-1:a,r&&n>1?i-1:i],l=[r&&t>1?t-1:t,r&&n>1?n-1:n];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/l[0]+`,
          `+u[1]/l[1]+`,
          `+u[1]/l[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(n-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},CC=function(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],a=r[2],i=e.shape,s=i[1],u=i[2],l=[n&&s>1?o-1:o,n&&u>1?a-1:a],c=[n&&s>1?s-1:s,n&&u>1?u-1:u],p=l[0]/c[0],d=l[1]/c[1],f=1/p,m=1/d,v=2*Math.ceil(f)+2,y=2*Math.ceil(m)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+p+`);
        const float widthScale = float(`+d+`);

        const float invHeightScale = float(`+f+`);
        const float invWidthScale = float(`+m+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+y+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+l[0]+`) *
                (float(dyR) / float(`+c[0]+`));

            float sourceFracCol =
                float(`+l[1]+`) *
                  (float(dyC) / float(`+c[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+n+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+n+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},SC=function(e,t,n,r){this.variableNames=["A"],this.outputShape=[];var o=e[0],a=e[1],i=e[2],s=e[3];this.outputShape=[o,t,n,s];var u=[r&&t>1?a-1:a,r&&n>1?i-1:i],l=[r&&t>1?t-1:t,r&&n>1?n-1:n],c=r?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/l[0]+`,
          `+u[1]/l[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+c+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},EC=function(e,t){this.variableNames=["x"];var n=e.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");if(this.outputShape=e,n!==1){var r=e.map(function(a,i){return function(s){return t.indexOf(s)!==-1&&e[s]!==1?e[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=Se(n);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+r+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+e[0]+` - coord - 1));
        }
      `},NC=function(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var n=e.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");this.outputShape=e;var r=vt("rc",n),o=r[n-1]+" + 1 < "+this.outputShape[n-1],a=r[n-2]+" + 1 < "+this.outputShape[n-2],i=Se(n);function s(u){var l=e.map(function(c,p){return function(d,f){return t.indexOf(d)!==-1&&e[d]!==1?e[d]+" - "+f[d]+" - 1":""+f[d]}(p,u)});return"getChannel(getX("+l.join(",")+"), vec2("+l.slice(-2).join(",")+"))"}this.userCode=n===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+e[0]+` - rc - 1),
            `+e[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+e[0]+` - (rc  + 1) - 1),
                `+e[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(r.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[n-1]="("+u[n-1]+" + 1)",s(u)}(r.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[n-2]="("+u[n-2]+" + 1)",s(u)}(r.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[n-1]="("+u[n-1]+" + 1)",u[n-2]="("+u[n-2]+" + 1)",s(u)}(r.slice())+`;
            }
          }
          setOutput(result);
        }
    `},ch=function(e,t,n,r,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=Se(o.length),u=Se(a.length),l="";n===1?l="i":n===2&&(l="i, j");var c="getIndices("+l+")",p="";r===1?p="i":r===2&&(p="i, coords[1]");var d="getUpdates("+p+")",f=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+e+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+c+`);
              flattenedIndex += index * `+f+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+d+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},kC=function(e,t){this.variableNames=["x","segmentIds"];var n=e.windowSize,r=e.batchSize,o=e.inSize,a=e.numSegments,i=a*Math.ceil(o/n);this.outputShape=[r,i];var s=4*Math.floor(n/4),u=n%4,l=`
        sumValue += dot(values, segFilter);
    `,c="";o%n>0&&(c=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var p="";o%n>0&&(p=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+c+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+p+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+n+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+l+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+l+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+l+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+l+`
        }
        setOutput(sumValue);
      }
    `},IC=function(e,t,n){var r,o;if(this.variableNames=["c","a","b"],this.outputShape=t,n>4)throw Error("Where for rank "+n+" is not yet supported");if(n===1)o="resRC",r="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+a[u]),u<e&&i.push(""+a[u]);r=i.join(),o=s.join()}var l=Se(n);this.userCode=`
      void main() {
        `+l+` resRC = getOutputCoords();
        float cVal = getC(`+r+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},RC=function(){function e(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var n,r=Se(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return ml.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);n=`
        `+r+` sourceLoc;
        `+r+` coords = getOutputCoords();
        `+t.map(function(i,s){return"sourceLoc."+ml[s]+" = start["+s+"] + coords."+ml[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+n+`
        setOutput(getSource(`+a+`));
      }
    `}return e.prototype.getCustomSetupFunc=function(t){var n=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,o){n.startLoc==null&&(n.startLoc=r.getUniformLocationNoThrow(o,"start"),n.startLoc==null)||r.gl.uniform1iv(n.startLoc,t)}},e}(),ml=["x","y","z","w","u","v"],TC=function(){function e(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var n=Se(this.rank),r=vt("coords",this.rank),o=vt("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+r[this.rank-1]+`;
      if (++`+r[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,l=this.rank<=4?`sourceLoc = coords +
            `+n+"("+t.map(function(c,p){return"start["+p+"]"}).join()+");":t.map(function(c,p){return o[p]+" = "+r[p]+" + start["+p+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+n+` coords = getOutputCoords();
        `+n+` sourceLoc;
        `+l+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return e.prototype.getCustomSetupFunc=function(t){var n=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,o){n.startLoc==null&&(n.startLoc=r.getUniformLocationNoThrow(o,"start"),n.startLoc==null)||r.gl.uniform1iv(n.startLoc,t)}},e}(),AC=function(e,t,n){this.variableNames=["x"],this.outputShape=n;var r=n.length,o=Se(n.length),a=Se(n.length),i="";if(r===1)i="coords * strides + begin";else{var s=0;i=n.map(function(u,l){return s++,n.length===1?"coords * strides["+l+"] + begin["+l+"]":"coords["+(s-1)+"] * strides["+l+"] + begin["+l+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+e+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},_C=function(){function e(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return e.prototype.acquireTexture=function(t,n,r){var o,a=ph(n,r),i=dh(t,a,r);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===Tt.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):a===Tt.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):a===Tt.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):a===Tt.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):a===Tt.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[i].push(o),o},e.prototype.releaseTexture=function(t,n,r,o){if(this.freeTextures!=null){var a=dh(n,ph(r,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(t),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},e.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},e.prototype.getNumUsedTextures=function(){return this.numUsedTextures},e.prototype.getNumFreeTextures=function(){return this.numFreeTextures},e.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var n in this.freeTextures)this.freeTextures[n].forEach(function(r){t.gpgpu.deleteMatrixTexture(r)});for(var n in this.usedTextures)this.usedTextures[n].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},e}();function ph(e,t){if(e===Dt.UPLOAD)return Tt.PACKED_2X2_FLOAT32;if(e===Dt.RENDER||e==null)return function(n){return z().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?Tt.PACKED_2X2_FLOAT32:Tt.UNPACKED_FLOAT32:n?Tt.PACKED_2X2_FLOAT16:Tt.UNPACKED_FLOAT16}(t);if(e===Dt.DOWNLOAD||e===Dt.PIXELS)return Tt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+e)}function dh(e,t,n){return e[0]+"_"+e[1]+"_"+t+"_"+n}var DC=function(e,t){this.variableNames=["A"];for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;var o=Se(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],l=[],c=0;c<i.length;c++)l.push("imod("+u[c]+", "+i[c]+")");return l.join()}(e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},sd=1.7580993408473768,ud=1.0507009873554805,se=function(e,t){this.variableNames=["A"],this.outputShape=e,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},an="if (isnan(x)) return x;",OC="return x;",fh="return abs(x);",Ry=an+`
  return (x < 0.0) ? 0.0 : x;
`,Ty=an+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Ay="return (x >= 0.0) ? x : (exp(x) - 1.0);",FC=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+sd+`;
  float scale = `+ud+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,hh="return -x;",mh="return ceil(x);",vh="return floor(x);",gh="return exp(x);",yh="return exp(x) - 1.0;",MC=an+`
  return sin(x);
`,PC=an+`
  return cos(x);
`,LC=an+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,BC=an+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,zC=an+`
  return atan(x);
`,VC=an+"return log(x + sqrt(x * x + 1.0));",WC=an+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,UC=an+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Li="return x;",$C="return x;",_y=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Dy=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Oy=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,fa=function(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},jC=function(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e;var t=e.length,n=vt("rc",t),r=Se(t),o=function(s,u){if(s===1)return"rc";for(var l="",c=0;c<s;c++)l+=u[c],c<s-1&&(l+=",");return l}(t,n),a=n.slice(-2),i=t<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+r+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},Bi={};function zi(e,t){if(t===void 0&&(t=!1),e==="linear")return t?$C:OC;if(e==="relu")return t?_y:Ry;if(e==="elu")return t?Oy:Ay;if(e==="relu6")return t?Dy:Ty;if(e==="prelu")return t?Iy:ky;throw new Error("Activation "+e+" has not been implemented for the WebGL backend.")}var HC=600,GC=function(e){function t(n){var r,o=e.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!z().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(n==null){var a=xn(z().getNumber("WEBGL_VERSION"));o.binaryCache=((r=z().getNumber("WEBGL_VERSION"))in Bi||(Bi[r]={}),Bi[r]),o.gpgpu=new aC(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=n,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=n.gl.canvas;return o.textureManager=new _C(o.gpgpu),o.numMBBeforeWarning=z().global.screen==null?1024:z().global.screen.height*z().global.screen.width*window.devicePixelRatio*HC/1024/1024,o.texData=new hy(o,_),o}return on(t,e),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(n,r,o){if(z().getBool("DEBUG")&&this.checkNumericalProblems(n),o==="complex64"&&n!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:r,dtype:o,values:n,usage:Dt.UPLOAD}),a},t.prototype.move=function(n,r,o,a){if(z().getBool("DEBUG")&&this.checkNumericalProblems(r),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(n,{shape:o,dtype:a,values:r,usage:Dt.UPLOAD})},t.prototype.readSync=function(n){var r=this.texData.get(n),o=r.values,a=r.dtype,i=r.complexTensors,s=r.slice,u=r.shape,l=r.isPacked;if(s!=null){var c=void 0;c=l?new fa(u,Li):new se(u,Li);var p=this.runWebGLProgram(c,[{dataId:n,shape:u,dtype:a}],a),d=this.readSync(p.dataId);return this.disposeData(p.dataId),d}if(o!=null)return this.convertAndCacheOnCPU(n);if(a==="string")return o;var f,m,v=this.activeTimers!=null;return v&&(f=Zt()),a==="complex64"?m=Ic(i.real.dataSync(),i.imag.dataSync()):m=this.getValuesFromTexture(n),v&&(this.downloadWaitMs+=Zt()-f),this.convertAndCacheOnCPU(n,m)},t.prototype.read=function(n){return Z(this,void 0,void 0,function(){var r,o,a,i,s,u,l,c,p,d,f,m,v,y,h,g,x,w,b,S,k,N;return J(this,function(R){switch(R.label){case 0:if(this.pendingRead.has(n))return r=this.pendingRead.get(n),[2,new Promise(function(T){return r.push(T)})];if(o=this.texData.get(n),a=o.values,i=o.shape,s=o.slice,u=o.dtype,l=o.complexTensors,c=o.isPacked,s!=null)return p=void 0,p=c?new fa(i,Li):new se(i,Li),d=this.runWebGLProgram(p,[{dataId:n,shape:i,dtype:u}],u),f=this.read(d.dataId),this.disposeData(d.dataId),[2,f];if(a!=null)return[2,this.convertAndCacheOnCPU(n)];if(!z().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&z().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return m=null,u!=="complex64"&&z().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(n),y=this.texData.get(v.dataId),m=(N=this.gpgpu).createBufferFromTexture.apply(N,[y.texture].concat(Aa(i)))),this.pendingRead.set(n,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:R.sent(),R.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([l.real.data(),l.imag.data()])];case 3:return g=R.sent(),x=g[0],w=g[1],h=Ic(x,w),[3,5];case 4:m==null?h=this.getValuesFromTexture(n):(b=Q(i),h=this.gpgpu.downloadFloat32MatrixFromBuffer(m,b)),R.label=5;case 5:return v!=null&&this.disposeData(v.dataId),S=this.convertAndCacheOnCPU(n,h),k=this.pendingRead.get(n),this.pendingRead.delete(n),k.forEach(function(T){return T(S)}),this.pendingDisposal.has(n)&&(this.pendingDisposal.delete(n),this.disposeData(n),this.pendingDeletes--),[2,S]}})})},t.prototype.checkNumericalProblems=function(n){if(n!=null)for(var r=0;r<n.length;r++){var o=n[r];if(!jw(o))throw z().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(n){var r,o=this.texData.get(n),a=o.shape,i=o.dtype,s=o.isPacked,u=Q(a);if(z().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var l=this.decode(n),c=this.texData.get(l.dataId),p=(r=this.gpgpu).downloadMatrixFromPackedTexture.apply(r,[c.texture].concat(Aa(a))).subarray(0,u);return this.disposeData(l.dataId),p}var d=z().getBool("WEBGL_PACK")&&s===!0,f=d?ll(a):a,m=d?new M2(f):new F2(f),v=this.runWebGLProgram(m,[{shape:f,dtype:i,dataId:n}],"float32"),y=this.texData.get(v.dataId),h=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(y.texture,y.texShape[0],y.texShape[1]).subarray(0,u);return this.disposeData(v.dataId),h},t.prototype.time=function(n){return Z(this,void 0,void 0,function(){var r,o,a,i,s,u,l;return J(this,function(c){switch(c.label){case 0:return r=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,n(),i=Hr(this.activeTimers.map(function(p){return p.query})).filter(function(p){return p!=null}),s=Hr(this.activeTimers.map(function(p){return p.name})).filter(function(p){return p!=null}),this.activeTimers=r,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return l=c.sent(),u.kernelMs=ag(l),u.getExtraProfileInfo=function(){return l.map(function(p,d){return{name:s[d],ms:p}}).map(function(p){return p.name+": "+p.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},c.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Zt(),endMs:null}},t.prototype.endTimer=function(n){return z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),n):(n.endMs=Zt(),n)},t.prototype.getQueryTime=function(n){return Z(this,void 0,void 0,function(){var r;return J(this,function(o){return z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(n)]:[2,(r=n).endMs-r.startMs]})})},t.prototype.disposeData=function(n){if(!this.pendingDisposal.has(n)){if(this.pendingRead.has(n))return this.pendingDisposal.add(n),void this.pendingDeletes++;if(this.texData.has(n)){this.releaseGPUData(n);var r=this.texData.get(n).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.texData.delete(n)}}},t.prototype.releaseGPUData=function(n){var r=this.texData.get(n),o=r.texture,a=r.dtype,i=r.texShape,s=r.usage,u=r.isPacked,l=r.slice,c=l&&l.origDataId||n,p=this.dataRefCount.get(c);p>1?this.dataRefCount.set(c,p-1):(this.dataRefCount.delete(c),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var d=this.texData.get(n);d.texture=null,d.texShape=null,d.isPacked=!1,d.slice=null},t.prototype.getTexture=function(n){return this.uploadToGPU(n),this.texData.get(n).texture},t.prototype.getDataInfo=function(n){return this.texData.get(n)},t.prototype.getCPUBackend=function(){return z().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=_.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(n,r){var o=this;return r===void 0&&(r=128),this.getCPUBackend()!=null&&n.every(function(a){return o.texData.get(a.dataId).texture==null&&Q(a.shape)<r})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(n,r){var o=this.makeOutput(n.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:_.keep(n.clone()),imag:_.keep(r.clone())},o},t.prototype.real=function(n){return this.texData.get(n.dataId).complexTensors.real.clone()},t.prototype.imag=function(n){return this.texData.get(n.dataId).complexTensors.imag.clone()},t.prototype.slice=function(n,r,o){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.slice(n,r,o);if(Q(o)===0)return Ye([],o,n.dtype);var a=this.texData.get(n.dataId).isPacked,i=py(n.shape,r,o);if(a||!i){var s=z().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new TC(o):new RC(o),u=s.getCustomSetupFunc(r);return this.compileAndRun(s,[n],null,u)}return this.uploadToGPU(n.dataId),this.shallowSlice(n,r,o)},t.prototype.shallowSlice=function(n,r,o){var a=this.texData.get(n.dataId),i=this.makeOutput(o,n.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=n.dtype;var u=dy(r,n.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||n.dataId};var l=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,l+1),i},t.prototype.stridedSlice=function(n,r,o,a){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.stridedSlice(n,r,o,a);var i=td(r,o,a);if(i.some(function(u){return u===0}))return Ye([],i);var s=new AC(r,a,i);return this.compileAndRun(s,[n])},t.prototype.reverse=function(n,r){var o=z().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new NC(n.shape,r):new EC(n.shape,r);return this.compileAndRun(o,[n])},t.prototype.concat=function(n,r){if(n[0].dtype==="complex64"){var o=n.map(function(f){return At(f)}),a=n.map(function(f){return Jt(f)});return Ke(this.concat(o,r),this.concat(a,r))}if(this.shouldExecuteOnCPU(n))return this.cpuBackend.concat(n,r);if(n.length===1)return n[0];if(n.length>z().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(n.length/2),s=this.concat(n.slice(0,i),r),u=this.concat(n.slice(i),r);return this.concat([s,u],r)}if(z().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&n[0].rank>1){var l=new w2(n.map(function(f){return f.shape}),r);return this.compileAndRun(l,n)}var c=Go(n.map(function(f){return f.shape}),r),p=n.map(function(f){return f.as2D(-1,Q(f.shape.slice(r)))}),d=new x2(p.map(function(f){return f.shape}));return this.compileAndRun(d,p).reshape(c)},t.prototype.neg=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.neg(n);if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,hh,n.dtype);var r=new se(n.shape,hh);return this.compileAndRun(r,[n])},t.prototype.batchMatMul=function(n,r,o,a){var i=o?n.shape[2]:n.shape[1],s=a?r.shape[1]:r.shape[2],u=o?n.shape[1]:n.shape[2],l=n.shape[0];if((i===1||s===1)&&u>1e3){o&&(n=Vt(n,[0,2,1])),a&&(r=Vt(r,[0,2,1]));var c=s===1?n:n.as3D(l,u,1),p=s===1?2:1,d=s===1?r.as3D(l,1,u):r;return this.multiply(c,d).sum(p,!0)}var f=Je(n.dtype,r.dtype),m=new fl(n.shape,[l,i,s],o,a);return this.compileAndRun(m,[n,r],f)},t.prototype.fusedBatchMatMul=function(n){var r=n.a,o=n.b,a=n.transposeA,i=n.transposeB,s=n.bias,u=n.activation,l=n.preluActivationWeights,c=a?r.shape[2]:r.shape[1],p=i?o.shape[1]:o.shape[2],d=r.shape[0],f=Je(r.dtype,o.dtype),m=s!=null,v=l!=null,y=u?zi(u,!0):null,h=new fl(r.shape,[d,c,p],a,i,m,y,v),g=[r,o];return s&&g.push(s),l&&g.push(l),this.compileAndRun(h,g,f)},t.prototype.multiply=function(n,r){if(n.dtype==="complex64"){var o=this.texData.get(n.dataId),a=this.texData.get(r.dataId),i=new nh(d2,n.shape,r.shape),s=new nh(f2,n.shape,r.shape),u=[this.makeComplexComponentTensorInfo(n,o.complexTensors.real),this.makeComplexComponentTensorInfo(n,o.complexTensors.imag),this.makeComplexComponentTensorInfo(r,a.complexTensors.real),this.makeComplexComponentTensorInfo(r,a.complexTensors.imag)],l=this.compileAndRun(i,u),c=this.compileAndRun(s,u),p=this.complex(l,c);return l.dispose(),c.dispose(),p}if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.multiply(n,r);if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,rh,n.dtype);var d=new Pe(rh,n.shape,r.shape);return this.compileAndRun(d,[n,r],n.dtype)},t.prototype.batchNormalization=function(n,r,o,a,i,s){var u=[n,r,o],l=null;s!=null&&(l=s.shape,u.push(s));var c=null;if(i!=null&&(c=i.shape,u.push(i)),z().getBool("WEBGL_PACK_NORMALIZATION")){var p=new p2(n.shape,r.shape,o.shape,l,c,a);return this.compileAndRun(p,u)}var d=new c2(n.shape,r.shape,o.shape,l,c,a);return this.compileAndRun(d,u)},t.prototype.localResponseNormalization4D=function(n,r,o,a,i){var s=z().getBool("WEBGL_PACK_NORMALIZATION")?new lC(n.shape,r,o,a,i):new sC(n.shape,r,o,a,i);return this.compileAndRun(s,[n])},t.prototype.LRNGrad=function(n,r,o,a,i,s,u){var l=new uC(r.shape,a,i,s,u);return this.compileAndRun(l,[r,o,n])},t.prototype.tile=function(n,r){if(n.dtype==="string"){var o=this.readSync(n.dataId).map(function(i){return Qa(i)});return by(ae(n.shape,n.dtype,o),r)}var a=new DC(n.shape,r);return this.compileAndRun(a,[n])},t.prototype.pad=function(n,r,o){var a=z().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new vC(n.shape,r,o):new mC(n.shape,r,o);return this.compileAndRun(a,[n])},t.prototype.gather=function(n,r,o){if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.gather(n,r,o);var a=new W2(n.shape,r.size,o);return this.compileAndRun(a,[n,r])},t.prototype.batchToSpaceND=function(n,r,o){I(n.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=r.reduce(function(p,d){return p*d}),i=Ms(n.shape,r,a),s=Ps(i.length,r.length),u=Ls(n.shape,r,a),l=kg(o,r.length),c=Ig(u,o,r.length);return Vt(n.reshape(i),s).reshape(u).slice(l,c)},t.prototype.spaceToBatchND=function(n,r,o){I(n.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=r.reduce(function(d,f){return d*f}),i=[[0,0]];i.push.apply(i,o);for(var s=1+r.length;s<n.shape.length;++s)i.push([0,0]);var u=n.pad(i),l=Ms(u.shape,r,a,!1),c=Ps(l.length,r.length,!1),p=Ls(u.shape,r,a,!1);return Vt(u.reshape(l),c).reshape(p)},t.prototype.reduce=function(n,r,o){var a=n.shape[0],i=n.shape[1],s=cl(i),u=new gC({windowSize:s,inSize:i,batchSize:a},r),l=this.compileAndRun(u,[n],o);return l.shape[1]===1?l:this.reduce(l,r,o)},t.prototype.argReduce=function(n,r,o){o===void 0&&(o=null);var a=n.shape[0],i=n.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=cl(i),u=new t2({windowSize:s,inSize:i,batchSize:a},r,o==null),l=[n];o!=null&&l.push(o);var c=this.compileAndRun(u,l,"int32");return c.shape[1]===1?c:this.argReduce(n,r,c)},t.prototype.argReducePacked=function(n,r,o){o===void 0&&(o=null);var a=o!=null?o.shape:n.shape,i=cl(a[a.length-1]),s=new s2(a,i,r,o==null),u=o==null?[n]:[n,o],l=this.compileAndRun(s,u,"int32");return l.rank===n.rank?this.argReducePacked(n,r,l):l},t.prototype.sum=function(n,r){Rt("sum",r,n.rank);var o=ot(n.shape,r),a=o[0],i=Q(o[1]),s=n.as2D(-1,i),u=nl(n.dtype);return this.reduce(s,"sum",u).reshape(a)},t.prototype.prod=function(n,r){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.prod(n,r);var o=ot(n.shape,r),a=o[0],i=Q(o[1]),s=n.as2D(-1,i),u=nl(n.dtype);return this.reduce(s,"prod",u).reshape(a)},t.prototype.unsortedSegmentSum=function(n,r,o){var a=0,i=wn([a],n.rank),s=n;i!=null&&(s=Vt(n,i),a=bn(1,n.rank)[0]);var u=function(f,m,v){for(var y=[],h=f.length,g=0;g<h;g++)g!==m?y.push(f[g]):y.push(v);return y}(s.shape,a,o),l=Q([s.shape[a]]),c=s.as2D(-1,l),p=nl(n.dtype),d=this.segOpCompute(c,"unsortedSegmentSum",r,p,o).reshape(u);return i!=null&&(d=Vt(d,qp(i))),d},t.prototype.segOpCompute=function(n,r,o,a,i){var s=n.shape[0],u=n.shape[1],l=function(d,f){var m,v=!1;for(d<=cy?(m=d,v=!0):m=Rs(d,Math.floor(Math.sqrt(d)));!v;)m>f||m===d?v=!0:m=Rs(d,m+1);return m}(u,i),c=new kC({windowSize:l,inSize:u,batchSize:s,numSegments:i}),p=this.compileAndRun(c,[n,o],a);return p.shape[1]===i?p:(o=ei(0,i).tile([u/l]),this.segOpCompute(p,r,o,a,i))},t.prototype.argMinMaxReduce=function(n,r,o){var a=[r];if(Rt("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,n.rank),!z().getBool("WEBGL_PACK_REDUCE")||n.rank<=2){var i=ot(n.shape,a),s=i[0],u=Q(i[1]),l=n.as2D(-1,u);return this.argReduce(l,o).reshape(s)}return this.argReducePacked(n,o)},t.prototype.argMin=function(n,r){return this.argMinMaxReduce(n,r,"min")},t.prototype.argMax=function(n,r){return this.argMinMaxReduce(n,r,"max")},t.prototype.cumsum=function(n,r,o,a){if(r!==n.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(n.rank-1)+" but got axis="+r);var i=new T2(n.shape,o,a);return this.compileAndRun(i,[n])},t.prototype.equal=function(n,r){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return vec4(equal(a, b));
`,"bool");var o=new Pe("return float(a == b);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.notEqual=function(n,r){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Pe("return float(a != b);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.less=function(n,r){if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.less(n,r);if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Pe("return float(a < b);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.lessEqual=function(n,r){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Pe("return float(a <= b);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.greater=function(n,r){if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.greater(n,r);if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Pe("return float(a > b);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.greaterEqual=function(n,r){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Pe("return float(a >= b);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.logicalNot=function(n){var r=new se(n.shape,"return float(!(x >= 1.0));");return this.compileAndRun(r,[n])},t.prototype.logicalAnd=function(n,r){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Pe("return float(a >= 1.0 && b >= 1.0);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.logicalOr=function(n,r){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Pe("return float(a >= 1.0 || b >= 1.0);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.select=function(n,r,o){var a=new IC(n.rank,r.shape,r.rank);return this.compileAndRun(a,[n,r,o],Je(r.dtype,o.dtype))},t.prototype.where=function(n){Os("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var r=n.dataSync();return ad(n.shape,r)},t.prototype.topk=function(n,r,o){return Cy(n.dataSync(),n.shape,n.dtype,r)},t.prototype.min=function(n,r){Rt("min",r,n.rank);var o=ot(n.shape,r),a=o[0],i=Q(o[1]),s=n.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},t.prototype.minimum=function(n,r){if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.minimum(n,r);var o=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,r.shape):new Pe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,n.shape,r.shape);return this.compileAndRun(o,[n,r])},t.prototype.mod=function(n,r){var o=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,r.shape):new Pe(`if (b == 0.0) return NAN;
  return mod(a, b);`,n.shape,r.shape);return this.compileAndRun(o,[n,r])},t.prototype.max=function(n,r){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.max(n,r);Rt("max",r,n.rank);var o=ot(n.shape,r),a=o[0],i=Q(o[1]),s=n.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},t.prototype.maximum=function(n,r){if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.maximum(n,r);var o=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,r.shape):new Pe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,n.shape,r.shape);return this.compileAndRun(o,[n,r])},t.prototype.all=function(n,r){Rt("all",r,n.rank);var o=ot(n.shape,r),a=o[0],i=Q(o[1]),s=n.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},t.prototype.any=function(n,r){Rt("any",r,n.rank);var o=ot(n.shape,r),a=o[0],i=Q(o[1]),s=n.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},t.prototype.floorDiv=function(n,r){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Pe(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,n.shape,r.shape);return this.compileAndRun(o,[n,r],"int32")},t.prototype.add=function(n,r){if(n.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(n,r,pl);if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.add(n,r);var o=Je(n.dtype,r.dtype);if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,pl,o);var a=new Pe(pl,n.shape,r.shape);return this.compileAndRun(a,[n,r],o)},t.prototype.packedUnaryOp=function(n,r,o){var a=new fa(n.shape,r);return this.compileAndRun(a,[n],o)},t.prototype.packedBinaryOp=function(n,r,o,a,i){i===void 0&&(i=!1);var s=new dn(o,n.shape,r.shape,i);return this.compileAndRun(s,[n,r],a)},t.prototype.complexSeparableBinaryOp=function(n,r,o){var a=this,i=this.texData.get(n.dataId),s=this.texData.get(r.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(d){var f=d[0],m=d[1],v=a.makeComplexComponentTensorInfo(n,f),y=a.makeComplexComponentTensorInfo(r,m),h=new Pe(o,n.shape,r.shape);return a.compileAndRun(h,[v,y],Je(f.dtype,m.dtype))}),l=u[0],c=u[1],p=this.complex(l,c);return l.dispose(),c.dispose(),p},t.prototype.makeComplexComponentTensorInfo=function(n,r){return{dataId:r.dataId,dtype:r.dtype,shape:n.shape}},t.prototype.addN=function(n){if(n.length===1)return n[0];if(n.length>z().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var r=Math.floor(n.length/2),o=this.addN(n.slice(0,r)),a=this.addN(n.slice(r));return this.addN([o,a])}var i=n.map(function(l){return l.dtype}).reduce(function(l,c){return Je(l,c)}),s=n.map(function(l){return l.shape}),u=z().getBool("WEBGL_PACK")?new e2(n[0].shape,s):new Jb(n[0].shape,s);return this.compileAndRun(u,n,i)},t.prototype.subtract=function(n,r){if(n.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(n,r,dl);if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.subtract(n,r);var o=Je(n.dtype,r.dtype);if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,dl,n.dtype);var a=new Pe(dl,n.shape,r.shape);return this.compileAndRun(a,[n,r],o)},t.prototype.pow=function(n,r){var o=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,r.shape):new Pe(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,n.shape,r.shape),a=Je(n.dtype,r.dtype);return this.compileAndRun(o,[n,r],a)},t.prototype.ceil=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.ceil(n);if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,mh,n.dtype);var r=new se(n.shape,mh);return this.compileAndRun(r,[n])},t.prototype.floor=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.floor(n);if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,vh,n.dtype);var r=new se(n.shape,vh);return this.compileAndRun(r,[n])},t.prototype.sign=function(n){var r=new se(n.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(r,[n])},t.prototype.isNaN=function(n){var r=new se(n.shape,"return float(isnan(x));");return this.compileAndRun(r,[n],"bool")},t.prototype.isInf=function(n){var r=new se(n.shape,"return float(isinf(x));");return this.compileAndRun(r,[n],"bool")},t.prototype.isFinite=function(n){var r=new se(n.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(r,[n],"bool")},t.prototype.round=function(n){var r=new se(n.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(r,[n])},t.prototype.exp=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.exp(n);if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,gh,n.dtype);var r=new se(n.shape,gh);return this.compileAndRun(r,[n])},t.prototype.expm1=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.expm1(n);if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,yh,n.dtype);var r=new se(n.shape,yh);return this.compileAndRun(r,[n])},t.prototype.softmax=function(n,r){var o=$e([r],n.shape),a=this.max(n,o),i=Et(a.shape,o),s=this.subtract(n,a.reshape(i)),u=this.exp(s),l=this.sum(u,o).reshape(i);return Un(u,l)},t.prototype.log=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.log(n);if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,n.dtype);var r=new se(n.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(r,[n])},t.prototype.log1p=function(n){var r=new se(n.shape,"return log(1.0 + x);");return this.compileAndRun(r,[n])},t.prototype.sqrt=function(n){var r=new se(n.shape,"return sqrt(x);");return this.compileAndRun(r,[n])},t.prototype.rsqrt=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.rsqrt(n);var r=new se(n.shape,"return inversesqrt(x);");return this.compileAndRun(r,[n])},t.prototype.reciprocal=function(n){var r=new se(n.shape,"return 1.0 / x;");return this.compileAndRun(r,[n])},t.prototype.relu=function(n){var r;return r=z().getBool("WEBGL_PACK")?new fa(n.shape,_y):new se(n.shape,Ry),this.compileAndRun(r,[n])},t.prototype.relu6=function(n){var r;return r=z().getBool("WEBGL_PACK")?new fa(n.shape,Dy):new se(n.shape,Ty),this.compileAndRun(r,[n])},t.prototype.prelu=function(n,r){var o=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn(Iy,n.shape,r.shape):new Pe(ky,n.shape,r.shape);return this.compileAndRun(o,[n,r])},t.prototype.elu=function(n){if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,Oy,n.dtype);var r=new se(n.shape,Ay);return this.compileAndRun(r,[n])},t.prototype.eluDer=function(n,r){var o=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,n.shape,r.shape):new Pe("return (b >= 1.0) ? a : a * (b + 1.0);",n.shape,r.shape);return this.compileAndRun(o,[n,r])},t.prototype.selu=function(n){var r=new se(n.shape,FC);return this.compileAndRun(r,[n])},t.prototype.int=function(n){var r=new se(n.shape,"return float(int(x));");return this.compileAndRun(r,[n],"int32")},t.prototype.clip=function(n,r,o){var a,i=(a=z().getBool("WEBGL_PACK_CLIP")?new g2(n.shape):new v2(n.shape)).getCustomSetupFunc(r,o);return this.compileAndRun(a,[n],null,i)},t.prototype.abs=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.abs(n);if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,fh,n.dtype);var r=new se(n.shape,fh);return this.compileAndRun(r,[n])},t.prototype.complexAbs=function(n){var r=this.texData.get(n.dataId),o=new y2(n.shape),a=[this.makeComplexComponentTensorInfo(n,r.complexTensors.real),this.makeComplexComponentTensorInfo(n,r.complexTensors.imag)];return this.compileAndRun(o,a)},t.prototype.sigmoid=function(n){var r=new se(n.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(r,[n])},t.prototype.softplus=function(n){var r=new se(n.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(r,[n])},t.prototype.sin=function(n){var r=new se(n.shape,MC);return this.compileAndRun(r,[n])},t.prototype.cos=function(n){var r=new se(n.shape,PC);return this.compileAndRun(r,[n])},t.prototype.tan=function(n){var r=new se(n.shape,"return tan(x);");return this.compileAndRun(r,[n])},t.prototype.asin=function(n){var r=new se(n.shape,LC);return this.compileAndRun(r,[n])},t.prototype.acos=function(n){var r=new se(n.shape,BC);return this.compileAndRun(r,[n])},t.prototype.atan=function(n){var r=new se(n.shape,zC);return this.compileAndRun(r,[n])},t.prototype.atan2=function(n,r){var o=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,r.shape):new Pe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,n.shape,r.shape);return this.compileAndRun(o,[n,r])},t.prototype.sinh=function(n){var r=new se(n.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[n])},t.prototype.cosh=function(n){var r=new se(n.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[n])},t.prototype.tanh=function(n){var r=new se(n.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(r,[n])},t.prototype.asinh=function(n){var r=new se(n.shape,VC);return this.compileAndRun(r,[n])},t.prototype.acosh=function(n){var r=new se(n.shape,WC);return this.compileAndRun(r,[n])},t.prototype.atanh=function(n){var r=new se(n.shape,UC);return this.compileAndRun(r,[n])},t.prototype.erf=function(n){var r=new se(n.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(r,[n])},t.prototype.step=function(n,r){var o=new se(n.shape,function(a){return a===void 0&&(a=0),an+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(r));return this.compileAndRun(o,[n])},t.prototype.conv2dByMatMul=function(n,r,o,a,i,s){var u=n.shape,l=this.texData.get(n.dataId),c=o.inChannels,p=u[0]*u[1]*u[2],d=o.outChannels,f=o.dataFormat==="channelsLast",m=(p===1||d===1)&&c>1e3,v=u[2]%2!=0&&!!l.isPacked;if(m||!z().getBool("WEBGL_LAZILY_UNPACK")||!z().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!v){var y=f?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],h=this.reshape(n,[1,y,o.inChannels]),g=this.reshape(r,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:h,b:g,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var x=f?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),w={dataId:n.dataId,shape:[1,x,o.inChannels],dtype:n.dtype},b=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,I(Mi(l.shape,w.shape),function(){return"packed reshape "+l.shape+" to "+w.shape+" isn't free"});var S=this.reshape(r,[1,o.inChannels,o.outChannels]),k=this.fusedBatchMatMul({a:w,b:S,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),N=this.texData.get(k.dataId);return I(N.isPacked,function(){return"batchMatMul result is expected to be packed"}),l.shape=b,N.shape=o.outShape,_.makeTensorFromDataId(k.dataId,o.outShape,k.dtype)},t.prototype.conv2dWithIm2Row=function(n,r,o,a,i,s){var u=o.filterWidth,l=o.filterHeight,c=o.inChannels,p=o.outWidth,d=o.outHeight,f=o.dataFormat==="channelsLast",m=u*l*c,v=d*p,y=[m,v],h=n.squeeze([0]),g=r.reshape([1,m,-1]),x=new iC(y,h.shape,o),w=this.compileAndRun(x,[h]).reshape([1,y[0],y[1]]),b=a!=null,S=s!=null,k=i?zi(i,!0):null,N=new fl(w.shape,[1,v,o.outChannels],!0,!1,b,k,S),R=[w,g];a&&R.push(a),S&&R.push(s);var T=this.compileAndRun(N,R);return f?T.reshape([1,d,p,o.outChannels]):T.reshape([1,o.outChannels,d,p])},t.prototype.fusedConv2d=function(n){var r=n.input,o=n.filter,a=n.convInfo,i=n.bias,s=n.activation,u=n.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(r,o,a,i,s,u);if(z().getBool("WEBGL_CONV_IM2COL")&&r.shape[0]===1)return this.conv2dWithIm2Row(r,o,a,i,s,u);var l=i!=null,c=u!=null,p=s?zi(s,!1):null,d=new oh(a,l,p,c),f=[r,o];return i&&f.push(i),u&&f.push(u),this.compileAndRun(d,f)},t.prototype.conv2d=function(n,r,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(n,r,o);if(z().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,r,o);var a=new oh(o);return this.compileAndRun(a,[n,r])},t.prototype.conv2dDerInput=function(n,r,o){var a=new C2(o);return this.compileAndRun(a,[n,r])},t.prototype.conv2dDerFilter=function(n,r,o){var a=new b2(o);return this.compileAndRun(a,[n,r])},t.prototype.fusedDepthwiseConv2D=function(n){var r,o=n.input,a=n.filter,i=n.convInfo,s=n.bias,u=n.activation,l=n.preluActivationWeights,c=z().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,p=u?zi(u,c):null,d=[o,a],f=s!=null,m=l!=null;return f&&d.push(s),m&&d.push(l),c?(r=new ih(i,f,p,m),this.compileAndRun(r,d)):(r=new ah(i,f,p,m),this.compileAndRun(r,d))},t.prototype.depthwiseConv2D=function(n,r,o){var a;return z().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new ih(o),this.compileAndRun(a,[n,r])):(a=new ah(o),this.compileAndRun(a,[n,r]))},t.prototype.depthwiseConv2DDerInput=function(n,r,o){var a=new k2(o);return this.compileAndRun(a,[n,r])},t.prototype.depthwiseConv2DDerFilter=function(n,r,o){var a=new N2(o);return this.compileAndRun(a,[n,r])},t.prototype.conv3d=function(n,r,o){var a=new I2(o);return this.compileAndRun(a,[n,r])},t.prototype.conv3dDerInput=function(n,r,o){var a=new E2(o);return this.compileAndRun(a,[n,r])},t.prototype.conv3dDerFilter=function(n,r,o){var a=new S2(o);return this.compileAndRun(a,[n,r])},t.prototype.maxPool=function(n,r){var o=new Da(r,"max",!1);return this.compileAndRun(o,[n])},t.prototype.avgPool=function(n,r){var o=new Da(r,"avg",!1);return this.compileAndRun(o,[n],"float32")},t.prototype.maxPoolBackprop=function(n,r,o,a){var i=new Da(a,"max",!0),s=this.compileAndRun(i,[r]),u=new cC(a),l=this.compileAndRun(u,[n,s],r.dtype);return s.dispose(),l},t.prototype.avgPoolBackprop=function(n,r,o){var a=new u2(o);return this.compileAndRun(a,[n],r.dtype)},t.prototype.cast=function(n,r){return gy(n,r,this)},t.prototype.unstack=function(n,r){for(var o=n.shape[r],a=new Array(n.rank-1),i=0,s=0;s<n.rank;s++)s!==r&&(a[i++]=n.shape[s]);var u=new Array(n.rank).fill(0),l=n.shape.slice();l[r]=1;var c=new Array(o);for(s=0;s<c.length;s++)u[r]=s,c[s]=this.slice(n,u,l).reshape(a);return c},t.prototype.avgPool3d=function(n,r){var o=new hl(r,"avg",!1);return this.compileAndRun(o,[n],"float32")},t.prototype.avgPool3dBackprop=function(n,r,o){var a=new l2(o);return this.compileAndRun(a,[n],r.dtype)},t.prototype.maxPool3d=function(n,r){var o=new hl(r,"max",!1);return this.compileAndRun(o,[n],"float32")},t.prototype.maxPool3dBackprop=function(n,r,o,a){var i=new hl(a,"max",!0),s=this.compileAndRun(i,[r]),u=new pC(a),l=this.compileAndRun(u,[n,s],r.dtype);return s.dispose(),l},t.prototype.reshape=function(n,r){var o=this.texData.get(n.dataId);if(o.isPacked&&!Mi(n.shape,r)&&(o.texture===null||!Mi(o.shape,r))){var a=this.packedReshape(n,r);return _.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return kc(n,r)},t.prototype.resizeBilinear=function(n,r,o,a){var i=z().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new bC(n.shape,r,o,a):new wC(n.shape,r,o,a);return this.compileAndRun(i,[n],"float32")},t.prototype.resizeBilinearBackprop=function(n,r,o){var a=new xC(n,r,o);return this.compileAndRun(a,[n])},t.prototype.resizeNearestNeighbor=function(n,r,o,a){var i=new SC(n.shape,r,o,a);return this.compileAndRun(i,[n])},t.prototype.resizeNearestNeighborBackprop=function(n,r,o){var a=new CC(n,r,o);return this.compileAndRun(a,[n])},t.prototype.multinomial=function(n,r,o,a){var i=r?n:vu(n),s=i.shape[0],u=i.shape[1],l=new dC(s,u,o),c=l.getCustomSetupFunc(a);return this.compileAndRun(l,[i],"int32",c)},t.prototype.oneHot=function(n,r,o,a){var i=new fC(n.size,r,o,a);return this.compileAndRun(i,[n])},t.prototype.diag=function(n){var r=new O2(n.size);return this.compileAndRun(r,[n])},t.prototype.nonMaxSuppression=function(n,r,o,a,i){return Os("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),rd(n.dataSync(),r.dataSync(),o,a,i)},t.prototype.cropAndResize=function(n,r,o,a,i,s){var u=new R2(n.shape,r.shape,a,i,s);return this.compileAndRun(u,[n,r,o],"float32")},t.prototype.depthToSpace=function(n,r,o){I(r>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+r});var a=n.shape[0],i=o==="NHWC"?n.shape[1]:n.shape[2],s=o==="NHWC"?n.shape[2]:n.shape[3],u=o==="NHWC"?n.shape[3]:n.shape[1],l=i*r,c=s*r,p=u/(r*r),d=new D2(o==="NHWC"?[a,l,c,p]:[a,p,l,c],r,o);return this.compileAndRun(d,[n])},t.prototype.split=function(n,r,o){return wy(n,r,o)},t.prototype.scatterND=function(n,r,o){var a=Bs(0,n,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,l=a.strides,c=a.outputSize,p=[c/u,u],d=n.reshape([s,i]),f=r.reshape([s,u]);if(c===0)return kc(Ye([]),o);var m=X(0),v=new ch(s,i,d.rank,f.rank,l,p);return this.compileAndRun(v,[f,d,m]).reshape(o)},t.prototype.sparseToDense=function(n,r,o,a){var i=Bs(0,n,o),s=i.sliceRank,u=i.numUpdates,l=i.strides,c=i.outputSize,p=new ch(u,s,n.rank,r.rank,l,[c,1]);return this.compileAndRun(p,[r,n,a]).reshape(o)},t.prototype.fft=function(n){return this.fftImpl(n,!1)},t.prototype.ifft=function(n){return this.fftImpl(n,!0)},t.prototype.fftImpl=function(n,r){var o=this.texData.get(n.dataId),a=new uh(B2,n.shape,r),i=new uh(z2,n.shape,r),s=[this.makeComplexComponentTensorInfo(n,o.complexTensors.real),this.makeComplexComponentTensorInfo(n,o.complexTensors.imag)],u=this.compileAndRun(a,s),l=this.compileAndRun(i,s),c=this.complex(u,l).as2D(n.shape[0],n.shape[1]);return u.dispose(),l.dispose(),c},t.prototype.gatherND=function(n,r){var o=r.shape,a=o[o.length-1],i=ly(n,r),s=i[0],u=i[1],l=i[2],c=i[3],p=r.reshape([u,a]),d=n.reshape([n.size/l,l]),f=new U2(a,c,[u,l]);return this.compileAndRun(f,[d,p]).reshape(s)},t.prototype.fill=function(n,r,o){if((o=o||Qo(r))==="string"){var a=Ya(o,Q(n));return a.fill(r),_.makeTensor(a,n,o,this)}var i=new V2(n,r),s=i.getCustomSetupFunc(r);return this.compileAndRun(i,[],o,s)},t.prototype.onesLike=function(n){if(n.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(n.shape,1,n.dtype)},t.prototype.zerosLike=function(n){return this.fill(n.shape,n.dtype==="string"?"":0,n.dtype)},t.prototype.linspace=function(n,r,o){return yy(n,r,o)},t.prototype.makeTensorInfo=function(n,r){var o=this.write(null,n,r);return this.texData.get(o).usage=null,{dataId:o,shape:n,dtype:r}},t.prototype.makeOutput=function(n,r){var o=this.makeTensorInfo(n,r).dataId;return _.makeTensorFromDataId(o,n,r,this)},t.prototype.unpackTensor=function(n){var r=new jC(n.shape);return this.runWebGLProgram(r,[n],n.dtype)},t.prototype.packTensor=function(n){var r=new hC(n.shape);return this.runWebGLProgram(r,[n],n.dtype,null,!0)},t.prototype.packedReshape=function(n,r){var o=[_s(n.shape)].concat(Ds(n.shape)),a={dtype:n.dtype,shape:o,dataId:n.dataId},i=[_s(r)].concat(Ds(r)),s=new yC(i,o),u=this.runWebGLProgram(s,[a],n.dtype,null,!0);return{dataId:u.dataId,shape:r,dtype:u.dtype}},t.prototype.decode=function(n){var r,o=this.texData.get(n),a=o.isPacked,i=o.shape,s=o.dtype,u=ll(i);return r=a?new _2(u):new A2(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(r,[{shape:u,dtype:s,dataId:n}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(n,r,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(n.outputShape,o),l=this.texData.get(u.dataId);if(n.packedOutput&&(l.isPacked=!0),n.outPackingScheme===Ja.DENSE){var c=Aa(n.outputShape);l.texShape=c.map(function(x){return 2*x})}if(n.outTexUsage!=null&&(l.usage=n.outTexUsage),Q(u.shape)===0)return l.values=Gr(u.dtype,0),u;var p=[],d=r.map(function(x){if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var w=s.texData.get(x.dataId);if(w.texture==null){if(!n.packedInputs&&Q(x.shape)<=z().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:w.values};n.packedInputs&&(w.isPacked=!0,w.shape=x.shape)}else if(!!w.isPacked!=!!n.packedInputs)x=w.isPacked?s.unpackTensor(x):s.packTensor(x),p.push(x),w=s.texData.get(x.dataId);else if(w.isPacked&&!Mi(w.shape,x.shape)){var b=x,S=x.shape;x.shape=w.shape,x=s.packedReshape(x,S),p.push(x),w=s.texData.get(x.dataId),b.shape=S}return s.uploadToGPU(x.dataId),{shape:x.shape,texData:w,isUniform:!1}});this.uploadToGPU(u.dataId);var f,m={shape:u.shape,texData:l,isUniform:!1},v=function(x,w,b){var S="";w.concat(b).forEach(function(R){var T=R.texData!=null&&R.texData.slice!=null&&R.texData.slice.flatOffset>0,D=R.isUniform?"uniform":R.texData.texShape;S+=R.shape+"_"+D+"_"+T});var k=x.userCode,N=x.constructor.name;return N+="_"+S+"_"+k}(n,d,m),y=this.getAndSaveBinary(v,function(){return function(x,w,b,S){var k=w.userCode,N=b.map(function(O,P){var L={logicalShape:O.shape,texShape:O.isUniform?null:O.texData.texShape,isUniform:O.isUniform,isPacked:!O.isUniform&&O.texData.isPacked,flatOffset:null};return O.texData!=null&&O.texData.slice!=null&&O.texData.slice.flatOffset>0&&(L.flatOffset=O.texData.slice.flatOffset),{name:w.variableNames[P],shapeInfo:L}}),R=N.map(function(O){return O.shapeInfo}),T={logicalShape:S.shape,texShape:S.texData.texShape,isUniform:!1,isPacked:S.texData.isPacked,flatOffset:null},D=n2(N,T,k,w.packedInputs),F=x.createProgram(D),U=null,W=x.getUniformLocation(F,"NAN",!1);z().getNumber("WEBGL_VERSION")===1&&(U=x.getUniformLocation(F,"INFINITY",!1));for(var V={},$=0;$<w.variableNames.length;$++){var H=w.variableNames[$];V[H]=x.getUniformLocation(F,H,!1),V["offset"+H]=x.getUniformLocation(F,"offset"+H,!1)}return{program:w,source:D,webGLProgram:F,uniformLocations:V,inShapeInfos:R,outShapeInfo:T,infLoc:U,nanLoc:W}}(s.gpgpu,n,d,m)}),h=this.activeTimers!=null;if(h&&(f=this.startTimer()),function(x,w,b,S,k){lh(w.inShapeInfos,b),lh([w.outShapeInfo],[S]);var N=S.texData.texture,R=S.texData.texShape;S.texData.isPacked?x.setOutputPackedMatrixTexture(N,R[0],R[1]):x.setOutputMatrixTexture(N,R[0],R[1]),x.setProgram(w.webGLProgram),z().getNumber("WEBGL_VERSION")===1&&w.infLoc!==null&&x.gl.uniform1f(w.infLoc,1/0),w.nanLoc!==null&&x.gl.uniform1f(w.nanLoc,NaN),b.forEach(function(T,D){var F=w.program.variableNames[D],U=w.uniformLocations[F],W=w.uniformLocations["offset"+F];if(U!=null)if(T.isUniform)if(Q(T.shape)<2)x.gl.uniform1f(U,T.uniformValues[0]);else{var V=T.uniformValues;V instanceof Float32Array||(V=new Float32Array(V)),x.gl.uniform1fv(U,V)}else T.texData.slice!=null&&W!=null&&x.gl.uniform1i(W,T.texData.slice.flatOffset),x.setInputMatrixTexture(T.texData.texture,U,D)}),k!=null&&k(x,w.webGLProgram),x.executeProgram()}(this.gpgpu,y,d,m,a),p.forEach(function(x){return s.disposeData(x.dataId)}),h&&(f=this.endTimer(f),this.activeTimers.push({name:n.constructor.name,query:this.getQueryTime(f)})),!z().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&i===!1){var g=this.unpackTensor(u);return this.disposeData(u.dataId),g}return u},t.prototype.compileAndRun=function(n,r,o,a,i){i===void 0&&(i=!1),o=o||r[0].dtype;var s=this.runWebGLProgram(n,r,o,a,i);return _.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(n,r){return n in this.binaryCache||(this.binaryCache[n]=r()),this.binaryCache[n]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var n=this;this.disposed||(z().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(r){n.gpgpu.deleteProgram(n.binaryCache[r].webGLProgram),delete n.binaryCache[r]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var n=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=le(function(){if(!z().get("WEBGL_RENDER_FLOAT32_ENABLED")){var r=z().getBool("DEBUG");z().set("DEBUG",!1);var o=n.abs(X(1e-8)).dataSync()[0];if(z().set("DEBUG",r),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(n){var r,o=this.texData.get(n),a=o.shape,i=o.dtype,s=o.values,u=o.texture,l=o.usage,c=o.isPacked;if(u==null){var p,d=this.activeTimers!=null;d&&(p=Zt());var f=o.texShape;if(f==null&&(f=ub(a,c),o.texShape=f),s!=null){var m=ll(a),v=void 0,y=f[1],h=f[0],g=s instanceof Uint8Array;c?(y=(r=ci(f[0],f[1]))[0],h=r[1],v=new L2(m,[h,y],g)):v=new P2(m,[h,y],g);var x=this.makeTensorInfo([h,y],i);this.texData.get(x.dataId).usage=g?Dt.PIXELS:Dt.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(x.dataId),y,h,s);var w=this.runWebGLProgram(v,[x],i,null,!0),b=this.texData.get(w.dataId);o.texture=b.texture,o.texShape=b.texShape,o.isPacked=b.isPacked,o.usage=b.usage,this.disposeData(x.dataId),this.texData.delete(w.dataId),o.values=null,d&&(this.uploadWaitMs+=Zt()-p)}else{var S=this.acquireTexture(f,l,i,c);o.texture=S}}},t.prototype.convertAndCacheOnCPU=function(n,r){var o=this.texData.get(n),a=o.dtype;return this.releaseGPUData(n),r!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),l=0;l<u.length;++l)u[l]=Math.round(i[l]);return u}throw new Error("Unknown dtype "+s)}(r,a)),o.values},t.prototype.acquireTexture=function(n,r,o,a){if(this.numBytesInGPU+=this.computeBytes(n,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(n,r,a)},t.prototype.computeBytes=function(n,r){return n[0]*n[1]*Wp(r)},t}(my);yg()&&_.registerBackend("webgl",function(){return new GC},2);function Jr(e,t){return e(t={exports:{}},t.exports),t.exports}var qC=Jr(function(e){(function(t,n,r){function o(s){var u,l=this,c=(u=4022871197,function(p){p=p.toString();for(var d=0;d<p.length;d++){var f=.02519603282416938*(u+=p.charCodeAt(d));f-=u=f>>>0,u=(f*=u)>>>0,u+=4294967296*(f-=u)}return 23283064365386963e-26*(u>>>0)});l.next=function(){var p=2091639*l.s0+23283064365386963e-26*l.c;return l.s0=l.s1,l.s1=l.s2,l.s2=p-(l.c=0|p)},l.c=1,l.s0=c(" "),l.s1=c(" "),l.s2=c(" "),l.s0-=c(s),l.s0<0&&(l.s0+=1),l.s1-=c(s),l.s1<0&&(l.s1+=1),l.s2-=c(s),l.s2<0&&(l.s2+=1),c=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var l=new o(s),c=u&&u.state,p=l.next;return p.int32=function(){return 4294967296*l.next()|0},p.double=function(){return p()+11102230246251565e-32*(2097152*p()|0)},p.quick=p,c&&(typeof c=="object"&&a(c,l),p.state=function(){return a(l,{})}),p}n&&n.exports?n.exports=i:this.alea=i})(0,e)}),KC=Jr(function(e){(function(t,n,r){function o(s){var u=this,l="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var p=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^p^p>>>8},s===(0|s)?u.x=s:l+=s;for(var c=0;c<l.length+64;c++)u.x^=0|l.charCodeAt(c),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var l=new o(s),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=((l.next()>>>11)+(l.next()>>>0)/4294967296)/2097152;while(d===0);return d},p.int32=l.next,p.quick=p,c&&(typeof c=="object"&&a(c,l),p.state=function(){return a(l,{})}),p}n&&n.exports?n.exports=i:this.xor128=i})(0,e)}),XC=Jr(function(e){(function(t,n,r){function o(s){var u=this,l="";u.next=function(){var p=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^p^p<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:l+=s;for(var c=0;c<l.length+64;c++)u.x^=0|l.charCodeAt(c),c==l.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var l=new o(s),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=((l.next()>>>11)+(l.next()>>>0)/4294967296)/2097152;while(d===0);return d},p.int32=l.next,p.quick=p,c&&(typeof c=="object"&&a(c,l),p.state=function(){return a(l,{})}),p}n&&n.exports?n.exports=i:this.xorwow=i})(0,e)}),YC=Jr(function(e){(function(t,n,r){function o(s){var u=this;u.next=function(){var l,c,p=u.x,d=u.i;return l=p[d],c=(l^=l>>>7)^l<<24,c^=(l=p[d+1&7])^l>>>10,c^=(l=p[d+3&7])^l>>>3,c^=(l=p[d+4&7])^l<<7,l=p[d+7&7],c^=(l^=l<<13)^l<<9,p[d]=c,u.i=d+1&7,c},function(l,c){var p,d=[];if(c===(0|c))d[0]=c;else for(c=""+c,p=0;p<c.length;++p)d[7&p]=d[7&p]<<15^c.charCodeAt(p)+d[p+1&7]<<13;for(;d.length<8;)d.push(0);for(p=0;p<8&&d[p]===0;++p);for(p==8?d[7]=-1:d[p],l.x=d,l.i=0,p=256;p>0;--p)l.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var l=new o(s),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=((l.next()>>>11)+(l.next()>>>0)/4294967296)/2097152;while(d===0);return d},p.int32=l.next,p.quick=p,c&&(c.x&&a(c,l),p.state=function(){return a(l,{})}),p}n&&n.exports?n.exports=i:this.xorshift7=i})(0,e)}),QC=Jr(function(e){(function(t,n,r){function o(s){var u=this;u.next=function(){var l,c,p=u.w,d=u.X,f=u.i;return u.w=p=p+1640531527|0,c=d[f+34&127],l=d[f=f+1&127],c^=c<<13,l^=l<<17,c^=c>>>15,l^=l>>>12,c=d[f]=c^l,u.i=f,c+(p^p>>>16)|0},function(l,c){var p,d,f,m,v,y=[],h=128;for(c===(0|c)?(d=c,c=null):(c+="\0",d=0,h=Math.max(h,c.length)),f=0,m=-32;m<h;++m)c&&(d^=c.charCodeAt((m+32)%c.length)),m===0&&(v=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,m>=0&&(v=v+1640531527|0,f=(p=y[127&m]^=d+v)==0?f+1:0);for(f>=128&&(y[127&(c&&c.length||0)]=-1),f=127,m=512;m>0;--m)d=y[f+34&127],p=y[f=f+1&127],d^=d<<13,p^=p<<17,d^=d>>>15,p^=p>>>12,y[f]=d^p;l.w=v,l.X=y,l.i=f}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var l=new o(s),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=((l.next()>>>11)+(l.next()>>>0)/4294967296)/2097152;while(d===0);return d},p.int32=l.next,p.quick=p,c&&(c.X&&a(c,l),p.state=function(){return a(l,{})}),p}n&&n.exports?n.exports=i:this.xor4096=i})(0,e)}),ZC=Jr(function(e){(function(t,n,r){function o(s){var u=this,l="";u.next=function(){var p=u.b,d=u.c,f=u.d,m=u.a;return p=p<<25^p>>>7^d,d=d-f|0,f=f<<24^f>>>8^m,m=m-p|0,u.b=p=p<<20^p>>>12^d,u.c=d=d-f|0,u.d=f<<16^d>>>16^m,u.a=m-p|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):l+=s;for(var c=0;c<l.length+20;c++)u.b^=0|l.charCodeAt(c),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var l=new o(s),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=((l.next()>>>11)+(l.next()>>>0)/4294967296)/2097152;while(d===0);return d},p.int32=l.next,p.quick=p,c&&(typeof c=="object"&&a(c,l),p.state=function(){return a(l,{})}),p}n&&n.exports?n.exports=i:this.tychei=i})(0,e)}),Tr=Jr(function(e){(function(t,n){var r,o=this,a=256,i=6,s="random",u=n.pow(a,i),l=n.pow(2,52),c=2*l,p=a-1;function d(h,g,x){var w=[],b=v(function N(R,T){var D,F=[],U=typeof R;if(T&&U=="object")for(D in R)try{F.push(N(R[D],T-1))}catch{}return F.length?F:U=="string"?R:R+"\0"}((g=g==1?{entropy:!0}:g||{}).entropy?[h,y(t)]:h??function(){try{var N;return r&&(N=r.randomBytes)?N=N(a):(N=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(N)),y(N)}catch{var R=o.navigator,T=R&&R.plugins;return[+new Date,o,T,o.screen,y(t)]}}(),3),w),S=new f(w),k=function(){for(var N=S.g(i),R=u,T=0;N<l;)N=(N+T)*a,R*=a,T=S.g(1);for(;N>=c;)N/=2,R/=2,T>>>=1;return(N+T)/R};return k.int32=function(){return 0|S.g(4)},k.quick=function(){return S.g(4)/4294967296},k.double=k,v(y(S.S),t),(g.pass||x||function(N,R,T,D){return D&&(D.S&&m(D,S),N.state=function(){return m(S,{})}),T?(n[s]=N,R):N})(k,b,"global"in g?g.global:this==n,g.state)}function f(h){var g,x=h.length,w=this,b=0,S=w.i=w.j=0,k=w.S=[];for(x||(h=[x++]);b<a;)k[b]=b++;for(b=0;b<a;b++)k[b]=k[S=p&S+h[b%x]+(g=k[b])],k[S]=g;(w.g=function(N){for(var R,T=0,D=w.i,F=w.j,U=w.S;N--;)R=U[D=p&D+1],T=T*a+U[p&(U[D]=U[F=p&F+R])+(U[F]=R)];return w.i=D,w.j=F,T})(a)}function m(h,g){return g.i=h.i,g.j=h.j,g.S=h.S.slice(),g}function v(h,g){for(var x,w=h+"",b=0;b<w.length;)g[p&b]=p&(x^=19*g[p&b])+w.charCodeAt(b++);return y(g)}function y(h){return String.fromCharCode.apply(0,h)}if(n["seed"+s]=d,v(n.random(),t),e.exports){e.exports=d;try{r=require("crypto")}catch{}}})([],Math)});Tr.alea=qC,Tr.xor128=KC,Tr.xorwow=XC,Tr.xorshift7=YC,Tr.xor4096=QC,Tr.tychei=ZC;var gu=Tr.alea,Fy=A({addN_:function(e){I(Array.isArray(e),function(){return"The argument passed to tf.addN() must be a list of tensors"}),I(e.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+e.length});var t=e.map(function(o,a){return E(o,"tensors"+a,"addN")}),n=t[0];t.forEach(function(o){if(o.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!qe(o.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var r=t;return _.runKernelFunc(function(o,a){return o.addN(t)},r,null,"AddN")}});function yu(){xg("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}function My(e){return e.rank===0||e.rank===1?e.as4D(1,1,1,e.size):e.rank===2?e.as4D(1,1,e.shape[0],e.shape[1]):e.rank===3?e.as4D(1,e.shape[0],e.shape[1],e.shape[2]):e}function Py(e,t,n,r,o,a){a==null&&(a=.001);var i,s,u=E(e,"x","batchNorm"),l=E(t,"mean","batchNorm"),c=E(n,"variance","batchNorm");o!=null&&(i=E(o,"scale","batchNorm")),r!=null&&(s=E(r,"offset","batchNorm")),I(l.rank===c.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),I(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),I(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."});var p={x:u,scale:i,offset:s,mean:l,variance:c},d={varianceEpsilon:a};return _.runKernelFunc(function(f,m){var v=My(u),y=f.batchNormalization(v,Vi(l),Vi(c),a,Vi(i),Vi(s));return m([u,l,c,i]),y},p,null,"FusedBatchNorm",d).reshape(u.shape)}function Vi(e){return e==null?null:e.rank===0?e.as1D():e.rank===1?e:e.rank===2?e.as4D(1,1,e.shape[0],e.shape[1]):e.rank===3?e.as4D(1,e.shape[0],e.shape[1],e.shape[2]):e}var JC=A({batchNormalization_:function(e,t,n,r,o,a){return r===void 0&&(r=.001),yu(),Py(e,t,n,a,o,r)}}),Jo=A({batchNorm_:Py});function Ly(e,t,n,r,o,a){var i,s,u=E(e,"x","batchNorm"),l=E(t,"mean","batchNorm"),c=E(n,"variance","batchNorm");return o!=null&&(i=E(o,"scale","batchNorm")),r!=null&&(s=E(r,"offset","batchNorm")),I(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),I(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+l.rank+"."}),I(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+c.rank+"."}),i!=null&&I(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&I(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),Jo(u,l,c,s,i,a)}var eS=A({batchNormalization2d_:function(e,t,n,r,o,a){return r===void 0&&(r=.001),yu(),Ly(e,t,n,a,o,r)}}),tS=A({batchNorm2d_:Ly});function By(e,t,n,r,o,a){var i,s,u=E(e,"x","batchNorm"),l=E(t,"mean","batchNorm"),c=E(n,"variance","batchNorm");return o!=null&&(i=E(o,"scale","batchNorm")),r!=null&&(s=E(r,"offset","batchNorm")),I(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),I(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+l.rank+"."}),I(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+c.rank+"."}),i!=null&&I(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&I(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),Jo(u,l,c,s,i,a)}var nS=A({batchNormalization3d_:function(e,t,n,r,o,a){return r===void 0&&(r=.001),yu(),By(e,t,n,a,o,r)}}),rS=A({batchNorm3d_:By});function zy(e,t,n,r,o,a){var i,s,u=E(e,"x","batchNorm"),l=E(t,"mean","batchNorm"),c=E(n,"variance","batchNorm");return o!=null&&(i=E(o,"scale","batchNorm")),r!=null&&(s=E(r,"offset","batchNorm")),I(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),I(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+l.rank+"."}),I(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+c.rank+"."}),i!=null&&I(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&I(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),Jo(u,l,c,s,i,a)}var oS=A({batchNormalization4d_:function(e,t,n,r,o,a){return r===void 0&&(r=.001),yu(),zy(e,t,n,a,o,r)}}),aS=A({batchNorm4d_:zy}),Vy=A({broadcastTo_:function(e,t){var n=E(e,"broadcastTo","x"),r=n.shape;if(t.some(function(p){return!(p>0)||p%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<n.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+n.rank+".");if(t.length>n.rank){for(var o=n.shape.slice();o.length<t.length;)o.unshift(1);n=n.reshape(o)}for(var a=n.shape,i=Array.from(t),s=t.length-1;s>=0;s--)if(a[s]===t[s])i[s]=1;else if(n.shape[s]!==1)throw new Error("broadcastTo(): ["+r+"] cannot be broadcast to ["+t+"].");var u=i.map(function(p,d){return p>1?d:-1}).filter(function(p){return p>=0});if(u.length===0)return n.clone();var l={x:n},c={shape:t,inputShape:a};return _.runKernelFunc(function(p){return p.tile(n,i)},l,function(p){return{x:function(){return p.sum(u,!0)}}},Tg,c)}}),iS=A({clone_:function(e){var t=E(e,"x","clone",null);return _.runKernelFunc(function(){return _.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{x:t},null,_g)}}),fi=A({logicalAnd_:function(e,t){var n=E(e,"a","logicalAnd","bool"),r=E(t,"b","logicalAnd","bool");return ce(n.shape,r.shape),_.runKernelFunc(function(o){return o.logicalAnd(n,r)},{a:n,b:r},null,"LogicalAnd")}}),Wy=A({logicalNot_:function(e){var t=E(e,"x","logicalNot","bool");return _.runKernelFunc(function(n){return n.logicalNot(t)},{$x:t})}}),ld=A({logicalOr_:function(e,t){var n=E(e,"a","logicalOr","bool"),r=E(t,"b","logicalOr","bool");return ce(n.shape,r.shape),_.runKernelFunc(function(o){return o.logicalOr(n,r)},{$a:n,$b:r})}}),sS=A({logicalXor_:function(e,t){var n=E(e,"a","logicalXor","bool"),r=E(t,"b","logicalXor","bool");return ce(n.shape,r.shape),ld(e,t).logicalAnd(fi(e,t).logicalNot())}}),gr=A({where_:function(e,t,n){var r=E(t,"a","where"),o=E(n,"b","where"),a=E(e,"condition","where","bool");return xe(r.shape,o.shape,"Error in where: "),a.rank===1?I(a.shape[0]===r.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):xe(a.shape,o.shape,"Error in where: "),_.runKernelFunc(function(i,s){var u=i.select(a,r,o);return s([a]),u},{$condition:a,$a:r,$b:o},function(i,s){var u=s[0];return{$condition:function(){return me(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),cd=function(e){return Z(this,void 0,void 0,function(){var t,n,r;return J(this,function(o){switch(o.label){case 0:return[4,(t=E(e,"condition","whereAsync","bool")).data()];case 1:return n=o.sent(),r=ad(t.shape,n),e!==t&&t.dispose(),[2,r]}})})},pd=A({divNoNan_:function(e,t){var n,r=E(e,"a","div"),o=E(t,"b","div");r=(n=Fe(r,o))[0],o=n[1];var a=Un(r,o),i=me(a),s=o.equal(i);return gr(s,i,a)}}),zr=A({tile_:function(e,t){var n=E(e,"x","tile",null);I(n.rank===t.length,function(){return"Error in transpose: rank of input "+n.rank+" must match length of reps "+t+"."});var r=[n],o={x:n},a={reps:t};return _.runKernelFunc(function(i,s){var u=i.tile(n,t);return s([n]),u},o,null,Dg,a,r)}}),Uy=A({eye_:function(e,t,n,r){r===void 0&&(r="float32"),t==null&&(t=e);for(var o=ae([e,t],r),a=e<=t?e:t,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(e,t);if(n==null)return s;if(n.length===1)return zr(Rn(s,0),[n[0],1,1]);if(n.length===2)return zr(Rn(Rn(s,0),0),[n[0],n[1],1,1]);if(n.length===3)return zr(Rn(Rn(Rn(s,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+n.length+"D.")}}),$y=A({multinomial_:function(e,t,n,r){r===void 0&&(r=!1);var o=E(e,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);n=n||Math.random();var s=i===1?o.as2D(1,-1):o,u=_.runKernelFunc(function(l){return l.multinomial(s,r,t,n)},{logits2D:s});return i===1?u.as1D():u}}),ni=A({oneHot_:function(e,t,n,r){if(n===void 0&&(n=1),r===void 0&&(r=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=E(e,"indices","oneHot","int32"),a=o.shape.concat([t]),i={indices:o=o.flatten()},s={depth:t,onValue:n,offValue:r};return _.runKernelFunc(function(u,l){return l([o]),u.oneHot(o,t,n,r)},i,null,Ag,s).reshape(a)}}),Sr=A({pad_:function(e,t,n){n===void 0&&(n=0);var r=E(e,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:n},a={x:r};return _.runKernelFunc(function(i,s){return s([r]),i.pad(r,t,n)},a,null,Og,o)}}),uS=A({pad1d_:function(e,t,n){return n===void 0&&(n=0),I(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),Sr(e,[t],n)}}),lS=A({pad2d_:function(e,t,n){return n===void 0&&(n=0),I(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Sr(e,t,n)}}),cS=A({pad3d_:function(e,t,n){return n===void 0&&(n=0),I(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Sr(e,t,n)}}),pS=A({pad4d_:function(e,t,n){return n===void 0&&(n=0),I(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Sr(e,t,n)}}),dS=A({rand_:function(e,t,n){var r=Q(e),o=null;if(n==null||n==="float32")o=new Float32Array(r);else if(n==="int32")o=new Int32Array(r);else{if(n!=="bool")throw new Error("Unknown data type "+n);o=new Uint8Array(r)}for(var a=0;a<r;a++)o[a]=t();return _.makeTensor(o,e,n)}}),dd=function(){function e(t,n,r,o,a){this.mean=t,this.stdDev=n,this.dtype=r,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=gu(i.toString())}return e.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var n,r,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);n=this.mean+this.stdDev*a*u,r=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(n)||(o=!0)}return this.truncated&&!this.isValidTruncated(r)||(this.nextVal=this.convertValue(r)),this.convertValue(n)},e.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},e.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},e}(),fS=function(){function e(t,n,r,o){this.alpha=t,this.beta=1/n,this.dtype=r;var a=o||Math.random();this.randu=gu(a.toString()),this.randn=new dd(0,1,r,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return e.prototype.nextValue=function(){for(var t,n,r,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,n=1-.331*(t=o*o)*t,r=.5*t+this.d*(1-i+Math.log(i)),(a=this.randu())<n||Math.log(a)<r)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},e.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},e}(),hS=function(){function e(t,n,r,o){var a=this;if(t===void 0&&(t=0),n===void 0&&(n=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=t,this.range=n-t,this.dtype=r,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+n+" <= 1 and dtype is not float");this.random=gu(o)}return e.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},e.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},e}(),mS=A({randomGamma_:function(e,t,n,r,o){if(n===void 0&&(n=1),r===void 0&&(r="float32"),n==null&&(n=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error("Unsupported data type "+r);for(var a=new fS(t,n,r,o),i=ae(e,r),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),vS=A({randomNormal_:function(e,t,n,r,o){if(t===void 0&&(t=0),n===void 0&&(n=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var a=new dd(t,n,r,!1,o),i=ae(e,r),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),fd=A({randomUniform_:function(e,t,n,r,o){t===void 0&&(t=0),n===void 0&&(n=1),r===void 0&&(r="float32");for(var a=ae(e,r),i=new hS(t,n,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),hd=A({square_:function(e){var t=E(e,"x","square"),n=[t];return _.runKernelFunc(function(r,o){return o([t]),r.square(t)},{x:t},null,"Square",{},n,[])}}),md=A({squaredDifference_:function(e,t){var n,r=E(e,"a","squaredDifference"),o=E(t,"b","squaredDifference");n=Fe(r,o),r=n[0],o=n[1],ce(r.shape,o.shape);var a={a:r,b:o},i=[r,o];return _.runKernelFunc(function(s,u){var l=s.squaredDifference(r,o);return u([r,o]),l},a,function(s,u){var l=u[0],c=u[1],p=X(2);return{a:function(){return s.mul(l.sub(c).mul(p))},b:function(){return s.mul(c.sub(l).mul(p))}}},du,{},i,[])}}),jy=A({truncatedNormal_:function(e,t,n,r,o){if(t===void 0&&(t=0),n===void 0&&(n=1),r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");for(var a=new dd(t,n,r,!0,o),i=ae(e,r),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),vd=A({equal_:function(e,t){var n,r=E(e,"a","equal"),o=E(t,"b","equal");return n=Fe(r,o),r=n[0],o=n[1],ce(r.shape,o.shape),_.runKernelFunc(function(a){return a.equal(r,o)},{$a:r,$b:o})}}),gS=A({equalStrict_:function(e,t){var n=E(e,"a","equalStrict"),r=E(t,"b","equalStrict");return xe(n.shape,r.shape,"Error in equalStrict: "),n.equal(r)}}),Hy=A({greater_:function(e,t){var n,r=E(e,"a","greater"),o=E(t,"b","greater");return n=Fe(r,o),r=n[0],o=n[1],ce(r.shape,o.shape),_.runKernelFunc(function(a){return a.greater(r,o)},{a:r,b:o},null,"Greater")}}),gd=A({greaterEqual_:function(e,t){var n,r=E(e,"a","greaterEqual"),o=E(t,"b","greaterEqual");return n=Fe(r,o),r=n[0],o=n[1],ce(r.shape,o.shape),_.runKernelFunc(function(a,i){var s=a.greaterEqual(r,o);return i([r,o]),s},{a:r,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return me(s)},b:function(){return me(u)}}},"GreaterEqual")}}),yS=A({greaterEqualStrict_:function(e,t){var n=E(e,"a","greaterEqualStrict"),r=E(t,"b","greaterEqualStrict");return xe(n.shape,r.shape,"Error in greaterEqualStrict: "),n.greaterEqual(r)}}),xS=A({greaterStrict_:function(e,t){var n=E(e,"a","greaterStrict"),r=E(t,"b","greaterStrict");return xe(n.shape,r.shape,"Error in greaterStrict: "),n.greater(r)}}),Gy=A({less_:function(e,t){var n,r=E(e,"a","less"),o=E(t,"b","less");return n=Fe(r,o),r=n[0],o=n[1],ce(r.shape,o.shape),_.runKernelFunc(function(a){return a.less(r,o)},{a:r,b:o},null,"Less")}}),qy=A({lessEqual_:function(e,t){var n,r=E(e,"a","lessEqual"),o=E(t,"b","lessEqual");return n=Fe(r,o),r=n[0],o=n[1],ce(r.shape,o.shape),_.runKernelFunc(function(a,i){var s=a.lessEqual(r,o);return i([r,o]),s},{a:r,b:o},null,"LessEqual")}}),wS=A({lessEqualStrict_:function(e,t){var n=E(e,"a","lessEqualStrict"),r=E(t,"b","lessEqualStrict");return xe(n.shape,r.shape,"Error in lessEqualStrict: "),n.lessEqual(r)}}),bS=A({lessStrict_:function(e,t){var n=E(e,"a","lessStrict"),r=E(t,"b","lessStrict");return xe(n.shape,r.shape,"Error in lessStrict: "),n.less(r)}}),Ky=A({notEqual_:function(e,t){var n,r=E(e,"a","notEqual"),o=E(t,"b","notEqual");return n=Fe(r,o),r=n[0],o=n[1],ce(r.shape,o.shape),_.runKernelFunc(function(a){return a.notEqual(r,o)},{a:r,b:o},null,"NotEqual")}}),CS=A({notEqualStrict_:function(e,t){var n=E(e,"a","notEqualStrict"),r=E(t,"b","notEqualStrict");return xe(n.shape,r.shape,"Error in notEqualStrict: "),n.notEqual(r)}});function xh(e,t){for(var n=[],r=e;r<t;++r)n.push(r);return n}function wh(e){for(var t=[],n=0;n<e.length;++n)for(var r=0;r<e[n].length;++r)t.push(e[n][r]);return t}var xu=A({gather_:function(e,t,n){n===void 0&&(n=0);var r=E(e,"x","gather"),o=E(t,"indices","gather","int32");n=$e(n,r.shape)[0];var a=function(i,s,u){for(var l=i.shape[u],c=[],p=1,d=1,f=0;f<u;f++)c.push(i.shape[f]),p*=i.shape[f];for(f=0;f<s.rank;f++)c.push(s.shape[f]);for(f=u+1;f<i.rank;f++)c.push(i.shape[f]),d*=i.shape[f];return{batchSize:p,sliceSize:d,dimSize:l,outputShape:c}}(r,o,n);return _.runKernelFunc(function(i,s){var u=i.gather(r,o.flatten(),n);return s([o]),u},{x:r,indices:o},function(i,s){var u=s[0];return{x:function(){var l=r.shape,c=u.size,p=l.slice(0,n),d=p.length,f=l.slice(n,l.length).slice(1),m=f.length,v=xh(0,d),y=xh(d+1,d+1+m),h=wh([p,[c],f]),g=i.reshape(h),x=u.reshape([c]),w=wh([[d],v,y]),b=g.transpose(w),S=Xy(b,x,r.shape[n]),k=qp(w);return S=S.transpose(k)},indices:function(){return u}}},"Gather",{axis:n}).reshape(a.outputShape)}}),Xy=A({unsortedSegmentSum_:function(e,t,n){var r=E(e,"x","unsortedSegmentSum"),o=E(t,"segmentIds","unsortedSegmentSum","int32");return I(Be(n),function(){return"numSegments must be of dtype int"}),_.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(r,o,n);return i([o]),s},{$x:r},function(a,i){var s=i[0];return{$x:function(){return function(u,l){for(var c=hu(l,me(l)),p=xu(u,c),d=gd(l,X(0,"int32")),f=p.rank-d.rank,m=0;m<f;++m)d=Rn(d,m+1);d=fi(d,Qr(p.shape,"bool"));var v=me(p);return gr(d,p,v)}(a,s)}}})}}),SS=function(e,t,n){return Z(this,void 0,void 0,function(){var r,o,a,i,s,u,l,c,p,d,f,m,v;return J(this,function(y){switch(y.label){case 0:for(r=E(e,"tensor","boolMask"),o=E(t,"mask","boolMask","bool"),a=n??0,i=o.rank,s=r.shape,I(i>0,function(){return"mask cannot be scalar"}),xe(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,l=a;l<a+i;l++)u*=s[l];return c=s.slice(0,a).concat([u],s.slice(a+i)),p=r.reshape(c),d=o.reshape([-1]),[4,cd(d)];case 1:return f=y.sent(),m=f.squeeze([1]),v=xu(p,m,a),e!==r&&r.dispose(),t!==o&&o.dispose(),m.dispose(),p.dispose(),d.dispose(),f.dispose(),[2,v]}})})};function Yy(e,t,n,r,o,a,i){a===void 0&&(a="NHWC"),I(e.length===t.rank,function(){return"Length of inShape ("+e.length+") and rank of dy ("+t.rank+") must match"});var s=e,u=t,l=!1;t.rank===3&&(l=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,e[0],e[1],e[2]]),I(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),I(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),I(n.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+n.rank});var c=a==="NHWC"?s[3]:s[1],p=a==="NHWC"?u.shape[3]:u.shape[1];I(c===n.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+c+") must match input depth for filter "+n.shape[2]+"."}),I(p===n.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+p+") must match output depth for filter "+n.shape[3]+"."}),i!=null&&I(Be(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var d=nd(a),f=Zr(s,n.shape,r,1,o,i,!1,d),m=_.runKernelFunc(function(v,y){var h=v.conv2dDerInput(u,n,f);return y([n,u]),h},{dy4D:u,filter:n},function(v,y){var h=y[0],g=y[1];return{dy4D:function(){return ea(v,h,r,o,a,1,i)},filter:function(){return yd(v,g,h.shape,r,o,a,i)}}});return l?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}function vl(e){var t=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(e),n=t[0],r=t[1],o=t[2];return n===1&&r===1&&o===1}function Qy(e,t,n,r,o){I(e.length===t.rank,function(){return"Length of inShape ("+e.length+") and rank of dy ("+t.rank+") must match"});var a=e,i=t,s=!1;t.rank===4&&(s=!0,i=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),a=[1,e[0],e[1],e[2],e[3]]);var u=a[4],l=i.shape[4];I(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),I(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),I(n.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+n.rank}),I(u===n.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+n.shape[3]+"."}),I(l===n.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+l+") must match output depth for filter "+n.shape[4]+"."});var c=Vs(a,n.shape,r,1,o),p=_.runKernelFunc(function(d){return d.conv3dDerInput(i,n,c)},{dy5D:i});return s?p.as4D(p.shape[1],p.shape[2],p.shape[3],p.shape[4]):p}var Zy=A({conv1d_:function(e,t,n,r,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=E(e,"x","conv1d"),u=E(t,"filter","conv1d"),l=s,c=!1;s.rank===2&&(c=!0,l=s.as3D(1,s.shape[0],s.shape[1])),I(l.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+l.rank+"."}),I(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&I(Be(r),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."}),I(l.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+l.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),I(dt(n,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+n+" and dilation '"+a+"'"}),I(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var p=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),d=l.as4D(l.shape[0],1,l.shape[1],l.shape[2]),f=ea(d,p,[1,n],r,"NHWC",[1,a],i);return c?f.as2D(f.shape[2],f.shape[3]):f.as3D(f.shape[0],f.shape[2],f.shape[3])}}),ea=A({conv2d_:function(e,t,n,r,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=E(e,"x","conv2d"),u=E(t,"filter","conv2d"),l=s,c=!1;s.rank===3&&(c=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),I(l.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+l.rank+"."}),I(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&I(Be(r),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."});var p=o==="NHWC"?l.shape[3]:l.shape[1];I(p===u.shape[2],function(){return"Error in conv2d: depth of input ("+p+") must match input depth for filter "+u.shape[2]+"."}),I(dt(n,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"});var d=nd(o),f=Zr(l.shape,u.shape,n,a,r,i,!1,d),m=[u,l],v=_.runKernelFunc(function(y,h){var g=y.conv2d(l,u,f);return h([u,l]),g},{x:l,filter:u},function(y,h){var g=h,x=g[0],w=g[1];return I(qo(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return e0(w.shape,y,x,n,r,o)},filter:function(){return yd(w,y,x.shape,n,r,o)}}},"Conv2D",f,m);return c?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),Jy=A({conv3d_:function(e,t,n,r,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=E(e,"x","conv3d"),s=E(t,"filter","conv3d"),u=i,l=!1;i.rank===4&&(l=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),I(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),I(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),I(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),I(function(d,f){return vl(d)||vl(f)}(n,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"}),I(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var c=Vs(u.shape,s.shape,n,a,r),p=_.runKernelFunc(function(d,f){var m=d.conv3d(u,s,c);return f([u,s]),m},{x:u,$filter:s},function(d,f){I(vl(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var m=f[0],v=f[1];return{x:function(){return Qy(m.shape,d,v,n,r)},$filter:function(){return function(y,h,g,x,w){var b=y;y.rank===4&&(b=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]));var S=h;S.rank===4&&(S=h.as5D(1,h.shape[0],h.shape[1],h.shape[2],h.shape[3])),I(b.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+b.shape+"."}),I(S.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+S.shape+"."}),I(g.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+g+"."}),I(b.shape[4]===g[3],function(){return"Error in conv3dDerFilter: depth of input "+b.shape[4]+") must match input depth in filter ("+g[3]+"."}),I(S.shape[4]===g[4],function(){return"Error in conv3dDerFilter: depth of dy ("+S.shape[4]+") must match output depth for filter ("+g[4]+")."});var k=Vs(b.shape,g,x,1,w);return _.runKernelFunc(function(N){return N.conv3dDerFilter(b,S,k)},{x5D:b,dy5D:S})}(m,d,v.shape,n,r)}}});return l?p.as4D(p.shape[1],p.shape[2],p.shape[3],p.shape[4]):p}}),yd=A({conv2dDerFilter_:function(e,t,n,r,o,a,i){a===void 0&&(a="NHWC");var s=e;e.rank===3&&(s=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),I(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),I(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),I(n.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+n+"."});var l=a==="NHWC"?s.shape[3]:s.shape[1],c=a==="NHWC"?u.shape[3]:u.shape[1];I(l===n[2],function(){return"Error in conv2dDerFilter: depth of input "+l+") must match input depth in filter ("+n[2]+"."}),I(c===n[3],function(){return"Error in conv2dDerFilter: depth of dy ("+c+") must match output depth for filter ("+n[3]+")."}),i!=null&&I(Be(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var p=nd(a),d=Zr(s.shape,n,r,1,o,i,!1,p);return _.runKernelFunc(function(f){return f.conv2dDerFilter(s,u,d)},{x4D:s,dy4D:u})}}),e0=A({conv2dDerInput_:Yy}),wu=A({depthwiseConv2d_:function(e,t,n,r,o,a,i){a===void 0&&(a=[1,1]);var s=E(e,"x","depthwiseConv2d"),u=E(t,"filter","depthwiseConv2d"),l=s,c=!1;s.rank===3&&(c=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),I(l.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+l.rank+"."}),I(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),I(l.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+l.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),I(dt(n,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"}),i!=null&&I(Be(r),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."});var p=Zr(l.shape,u.shape,n,a,r,i,!0),d=[l,u],f=_.runKernelFunc(function(m,v){var y=m.depthwiseConv2D(l,u,p);return v([l,u]),y},{x:l,filter:u},function(m,v){I(qo(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var y=v[0],h=v[1];return{x:function(){return t0(y.shape,m,h,p)},filter:function(){return n0(y,m,h.shape,p)}}},"DepthwiseConv2dNative",p,d);return c?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}}),t0=A({depthwiseConv2dDerInput_:function(e,t,n,r){var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=_.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,n,r)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),n0=A({depthwiseConv2dDerFilter_:function(e,t,n,r){var o=e;e.rank===3&&(o=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var a=t;return a.rank===3&&(a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),_.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,r)},{x4D:o,dy4D:a})}}),ES=A({separableConv2d_:function(e,t,n,r,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=E(e,"x","separableConv2d"),u=E(t,"depthwiseFilter","separableConv2d"),l=E(n,"pointwiseFilter","separableConv2d"),c=s,p=!1;if(s.rank===3&&(p=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");I(c.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+c.rank+"."}),I(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),I(l.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),I(l.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+l.shape[0]+"."}),I(l.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+l.shape[1]+"."});var d=u.shape[2],f=u.shape[3];I(l.shape[2]===d*f,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+d*f+", but got "+l.shape[2]+"."});var m=wu(c,u,r,o,i,a),v=ea(m,l,1,"valid",i);return p?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),r0=A({conv2dTranspose_:function(e,t,n,r,o,a){return Yy(n,E(e,"x","conv2dTranspose"),E(t,"filter","conv2dTranspose"),r,o,"NHWC",a)}}),NS=A({conv3dTranspose_:function(e,t,n,r,o){return Qy(n,E(e,"x","conv3dTranspose"),E(t,"filter","conv3dTranspose"),r,o)}}),xd=A({matMul_:function(e,t,n,r){var o;n===void 0&&(n=!1),r===void 0&&(r=!1);var a=E(e,"a","matMul"),i=E(t,"b","matMul");o=Fe(a,i),a=o[0],i=o[1];var s=n?a.shape[a.rank-2]:a.shape[a.rank-1],u=r?i.shape[i.rank-1]:i.shape[i.rank-2],l=n?a.shape[a.rank-1]:a.shape[a.rank-2],c=r?i.shape[i.rank-2]:i.shape[i.rank-1],p=a.shape.slice(0,-2),d=i.shape.slice(0,-2),f=Q(p),m=Q(d);I(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),I(qe(p,d),function(){return"Error in matMul: outer dimensions ("+p+") and ("+d+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),I(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+n+" and transposeB="+r+" must match."});var v=a.shape.slice(0,-2).concat([l,c]),y=n?a.as3D(f,s,l):a.as3D(f,l,s),h=r?i.as3D(m,c,u):i.as3D(m,u,c),g={transposeA:n,transposeB:r};return _.runKernelFunc(function(x,w){var b=x.batchMatMul(y,h,n,r);return w([y,h]),b},{a:y,b:h},function(x,w){var b=w,S=b[0],k=b[1];return n||r?!n&&r?{a:function(){return x.matMul(k,!1,!1)},b:function(){return x.matMul(S,!0,!1)}}:n&&!r?{a:function(){return k.matMul(x,!1,!0)},b:function(){return S.matMul(x,!1,!1)}}:{a:function(){return k.matMul(x,!0,!0)},b:function(){return x.matMul(S,!0,!0)}}:{a:function(){return x.matMul(k,!1,!0)},b:function(){return S.matMul(x,!0,!1)}}},"BatchMatMul",g).reshape(v)}}),kS=A({dot_:function(e,t){var n=E(e,"t1","dot"),r=E(t,"t2","dot");I(!(n.rank!==1&&n.rank!==2||r.rank!==1&&r.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+n.rank+" and "+r.rank+"."});var o=n.rank===1?n.size:n.shape[1],a=r.rank===1?r.size:r.shape[0];return I(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),n.rank===1&&r.rank===1?n.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():n.rank===1&&r.rank===2?n.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():n.rank===2&&r.rank===1?n.matMul(r.as2D(-1,1)).as1D():n.matMul(r.as2D(r.shape[0],r.shape[1]))}}),IS=A({outerProduct_:function(e,t){var n=E(e,"v1","outerProduct"),r=E(t,"v2","outerProduct");return I(n.rank===1&&r.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+n.rank+" and "+r.rank+"."}),n.as2D(-1,1).matMul(r.as2D(1,-1))}}),ta=A({reverse_:function(e,t){var n=E(e,"x","reverse");if(n.rank===0)return n.clone();var r=$e(t,n.shape);return _.runKernelFunc(function(o){return o.reverse(n,r)},{$x:n},function(o){return{$x:function(){return o.reverse(r)}}}).reshapeAs(n)}}),RS=A({reverse1d_:function(e){var t=E(e,"x","reverse");return I(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),ta(t,0)}}),TS=A({reverse2d_:function(e,t){var n=E(e,"x","reverse");return I(n.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+n.rank+"."}),ta(n,t)}}),AS=A({reverse3d_:function(e,t){var n=E(e,"x","reverse");return I(n.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+n.rank+"."}),ta(n,t)}}),_S=A({reverse4d_:function(e,t){var n=E(e,"x","reverse");return I(n.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+n.rank+"."}),ta(n,t)}});function o0(e,t,n,r,o,a){var i=E(e,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),I(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),I(dt(n,r),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+r+"'"}),a!=null&&I(Be(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var l=qr(s.shape,t,n,r,o,a);if(l.filterWidth===1&&l.filterHeight===1&&qe(l.inShape,l.outShape))return i.clone();var c=[s],p=_.runKernelFunc(function(d,f){var m=d.maxPool(s,l);return f([s,m]),m},{x:s},function(d,f){var m=f[0],v=f[1];return{x:function(){return function(y,h,g,x,w,b,S,k){var N=E(y,"dy","maxPoolBackprop"),R=E(h,"input","maxPoolBackprop"),T=E(g,"output","maxPoolBackprop");I(R.rank===N.rank,function(){return"Rank of input ("+R.rank+") does not match rank of dy ("+N.rank+")"}),I(dt(w,b),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+w+" and dilations '"+b+"'"}),I(N.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+N.rank+"."}),I(R.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+R.rank+"."});var D=qr(R.shape,x,w,b,S,k);return _.runKernelFunc(function(F){return F.maxPoolBackprop(N,R,T,D)},{$dy:N,$input:R})}(d,m,v,t,n,r,o)}}},"MaxPool",l,c);return u?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function a0(e,t,n,r,o,a){var i=E(e,"x","avgPool","float32");I(dt(n,r),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+r+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),I(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&I(Be(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var l=qr(s.shape,t,n,r,o,a);if(l.filterWidth===1&&l.filterHeight===1&&qe(l.inShape,l.outShape))return i.clone();var c=_.runKernelFunc(function(p){return p.avgPool(s,l)},{x:s},function(p){return{x:function(){return function(d,f,m,v,y,h){var g=E(d,"dy","avgPoolBackprop"),x=E(f,"input","avgPoolBackprop");I(x.rank===g.rank,function(){return"Rank of input ("+x.rank+") does not match rank of dy ("+g.rank+")"}),I(dt(v,y),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+y+"'"});var w=x,b=g,S=!1;x.rank===3&&(S=!0,w=x.as4D(1,x.shape[0],x.shape[1],x.shape[2]),b=g.as4D(1,g.shape[0],g.shape[1],g.shape[2])),I(b.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+b.rank+"."}),I(w.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+w.rank+"."});var k=qr(w.shape,m,v,y,h),N=_.runKernelFunc(function(R){return R.avgPoolBackprop(b,w,k)},{dy4D:b,input4D:w});return S?N.as3D(N.shape[1],N.shape[2],N.shape[3]):N}(p,s,t,n,r,o)}}},"AvgPool",l);return c=c.cast(i.dtype),u?c.as3D(c.shape[1],c.shape[2],c.shape[3]):c}var i0=A({maxPool_:function(e,t,n,r,o){return o0(e,t,n,1,r,o)}}),s0=A({avgPool_:function(e,t,n,r,o){return a0(e,t,n,1,r,o)}}),DS=A({pool_:function(e,t,n,r,o,a){o==null&&(o=[1,1]),a==null&&(a=1),r===0&&(r="valid");var i=E(e,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),I(dt(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var l,c=qr(s.shape,t,a,o,r),p=[c.dilationHeight,c.dilationWidth];l=r==="same"?function(w,b){var S=w.map(function(R,T){return R+(R-1)*(b[T]-1)}).map(function(R){return R-1}),k=S.map(function(R){return Math.floor(R/2)}),N=S.map(function(R,T){return R-k[T]});return S.map(function(R,T){return[k[T],N[T]]})}([c.filterHeight,c.filterWidth],p):[[0,0],[0,0]];var d=p[0]===1&&p[1]===1,f=function(w,b,S){var k=S.map(function(W){return W[0]}),N=S.map(function(W){return W[1]}),R=w.concat(k,N),T=b.map(function(W,V){return(W-R[V]%W)%W}),D=N.map(function(W,V){return W+T[V]}),F=b.map(function(W,V){return[k[V],D[V]]}),U=b.map(function(W,V){return[0,T[V]]});return[F,U]}([c.inHeight,c.inWidth],p,l),m=f[0],v=f[1],y=d?r:"valid",h=d?s:Yp(s,p,m),g=(n==="avg"?function(){return a0(h,t,a,1,y)}:function(){return o0(h,t,a,1,y)})(),x=d?g:Xp(g,p,v);return u?x.as3D(x.shape[1],x.shape[2],x.shape[3]):x}}),u0=A({maxPool3d_:function(e,t,n,r,o,a,i){a===void 0&&(a="NDHWC");var s=E(e,"x","maxPool3d"),u=s,l=!1;s.rank===4&&(l=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),I(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),I(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),I(dt(n,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"}),o!=null&&I(Be(r),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var c=zs(u.shape,t,n,i,r,o,a),p=_.runKernelFunc(function(d,f){var m=d.maxPool3d(u,c);return f([u,m]),m},{x:u},function(d,f){var m=f[0],v=f[1];return{x:function(){return function(y,h,g,x,w,b,S,k){var N=E(y,"dy","maxPool3dBackprop"),R=E(h,"input","maxPool3dBackprop"),T=E(g,"output","maxPool3dBackprop"),D=N,F=R,U=T,W=!1;R.rank===4&&(W=!0,D=N.as5D(1,N.shape[0],N.shape[1],N.shape[2],N.shape[3]),F=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3]),U=T.as5D(1,T.shape[0],T.shape[1],T.shape[2],T.shape[3])),I(D.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+D.rank+"."}),I(F.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+F.rank+"."}),I(U.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+U.rank+"."}),b==null&&(b=[1,1,1]),I(dt(w,b),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+w+" and dilations '"+b+"'"}),k!=null&&I(Be(S),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+k+" but got pad "+S+"."});var V=zs(F.shape,x,w,b,S,k),$=_.runKernelFunc(function(H){return H.maxPool3dBackprop(D,F,U,V)},{dy5D:D,input5D:F});return W?$.as4D($.shape[1],$.shape[2],$.shape[3],$.shape[4]):$}(d,m,v,t,n,i,r,o)}}});return l?p.as4D(p.shape[1],p.shape[2],p.shape[3],p.shape[4]):p}}),l0=A({avgPool3d_:function(e,t,n,r,o,a,i){a===void 0&&(a="NDHWC");var s=E(e,"x","avgPool3d","float32"),u=s,l=!1;s.rank===4&&(l=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),I(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),I(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),I(dt(n,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"}),o!=null&&I(Be(r),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var c=zs(u.shape,t,n,i,r,o,a),p=_.runKernelFunc(function(d){return d.avgPool3d(u,c)},{x:u},function(d){return{x:function(){return function(f,m,v,y,h,g,x){var w=E(f,"dy","avgPool3dBackprop"),b=E(m,"input","avgPool3dBackprop"),S=w,k=b,N=!1;b.rank===4&&(N=!0,S=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3]),k=b.as5D(1,b.shape[0],b.shape[1],b.shape[2],b.shape[3])),I(S.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+S.rank+"."}),I(k.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+k.rank+"."}),h==null&&(h=[1,1,1]),I(dt(y,h),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+h+"'"}),x!=null&&I(Be(g),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+x+" but got pad "+g+"."});var R=zs(k.shape,v,y,h,g,x),T=_.runKernelFunc(function(D){return D.avgPool3dBackprop(S,k,R)},{dy5D:S,input5D:k});return N?T.as4D(T.shape[1],T.shape[2],T.shape[3],T.shape[4]):T}(d,u,t,n,i,r,o)}}});return p=p.cast(u.dtype),l?p.as4D(p.shape[1],p.shape[2],p.shape[3],p.shape[4]):p}}),c0=A({maxPoolWithArgmax_:function(e,t,n,r,o){o===void 0&&(o=!1);var a=E(e,"x","maxPoolWithArgmax"),i={filterSize:t,strides:n,pad:r,includeBatchInIndex:o},s=_.runKernel("MaxPoolWithArgmax",{x:a},i);return{result:s[0],indexes:s[1]}}}),yn=A({slice_:function(e,t,n){var r,o,a=E(e,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(r=typeof t=="number"?[t].concat(new Array(a.rank-1).fill(0)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(0)):t.slice()).forEach(function(u){I(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=n==null?new Array(a.rank).fill(-1):typeof n=="number"?[n].concat(new Array(a.rank-1).fill(-1)):n.length<a.rank?n.concat(new Array(a.rank-n.length).fill(-1)):n).map(function(u,l){return u>=0?u:(I(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+l+"."}),a.shape[l]-r[l])}),$b(a,r,o);var i=a.shape,s={begin:r,size:o};return _.runKernelFunc(function(u){return u.slice(a,r,o)},{x:a},function(u){for(var l=[],c=0;c<u.rank;c++)l.push([r[c],i[c]-r[c]-o[c]]);return{x:function(){return Sr(u,l)}}},"Slice",s)}}),OS=A({slice1d_:function(e,t,n){var r=E(e,"x","slice1d");return I(r.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+r.rank+" tensor"}),yn(r,[t],[n])}}),FS=A({slice2d_:function(e,t,n){var r=E(e,"x","slice2d");return I(r.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+r.rank+" tensor"}),yn(r,t,n)}}),MS=A({slice3d_:function(e,t,n){var r=E(e,"x","slice3d");return I(r.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+r.rank+" tensor"}),yn(r,t,n)}}),PS=A({slice4d_:function(e,t,n){var r=E(e,"x","slice4d");return I(r.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+r.rank+" tensor"}),yn(r,t,n)}});function p0(e,t,n,r,o){return t.rank<n.rank&&(t=t.reshape(Et(t.shape,r))),e.rank<n.rank&&(e=e.reshape(Et(e.shape,r))),{x:function(){var a=e.mul(n.equal(t).cast(e.dtype));return o==null?a:a.transpose(o)}}}var d0=A({all_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=E(e,"x","all","bool"),o=$e(t,r.shape),a=o,i=wn(a,r.rank);i!=null&&(r=r.transpose(i),a=bn(a.length,r.rank));var s=_.runKernelFunc(function(l){return l.all(r,a)},{$x:r});if(n){var u=Et(s.shape,o);return s.reshape(u)}return s}}),f0=A({any_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=E(e,"x","any","bool"),o=$e(t,r.shape),a=o,i=wn(a,r.rank);i!=null&&(r=r.transpose(i),a=bn(a.length,r.rank));var s=_.runKernelFunc(function(l){return l.any(r,a)},{$x:r});if(n){var u=Et(s.shape,o);return s.reshape(u)}return s}}),h0=A({argMax_:function(e,t){t===void 0&&(t=0);var n=E(e,"x","argMax");t==null&&(t=0);var r=$e(t,n.shape),o=wn(r,n.rank);o!=null&&(n=n.transpose(o),r=bn(r.length,n.rank));var a={axis:r[0]},i=[n];return _.runKernelFunc(function(s,u){var l=s.argMax(n,r[0]);return u([n]),l},{x:n},function(s,u){var l=u[0];return{x:function(){return me(l)}}},"ArgMax",a,i)}}),m0=A({argMin_:function(e,t){t===void 0&&(t=0);var n=E(e,"x","argMin");t==null&&(t=0);var r=$e(t,n.shape),o=wn(r,n.rank);return o!=null&&(n=n.transpose(o),r=bn(r.length,n.rank)),_.runKernelFunc(function(a,i){var s=a.argMin(n,r[0]);return i([n]),s},{$x:n},function(a,i){var s=i[0];return{$x:function(){return me(s)}}})}}),LS=A({logSumExp_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=E(e,"x","logSumExp"),o=$e(t,r.shape),a=r.max(o,!0),i=r.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(n){var u=Et(s.shape,o);return s.reshape(u)}return s}}),v0=A({max_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=E(e,"x","max"),o=r,a=$e(t,r.shape),i=a,s=wn(i,r.rank);s!=null&&(r=r.transpose(s),i=bn(i.length,r.rank));var u=[r],l=_.runKernelFunc(function(p,d){var f=p.max(r,i);return d([o,f]),f},{x:r},function(p,d){return p0(p,d[1],d[0],a,s)},"Max",{axes:i},u,[!0]);if(n){var c=Et(l.shape,a);l=l.reshape(c)}return l}}),g0=A({mean_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=E(e,"x","mean"),o=$e(t,r.shape),a=Q(ot(r.shape,o)[1]);return mu(function(i){var s=X(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(t,n),gradFunc:function(u){var l=i.shape.slice();return o.forEach(function(c){l[c]=1}),u.reshape(l).mul(Qr(i.shape,"float32")).div(a)}}})(r)}}),y0=A({min_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=E(e,"x","min"),o=r,a=$e(t,r.shape),i=a,s=wn(i,r.rank);s!=null&&(r=r.transpose(s),i=bn(i.length,r.rank));var u=[r],l=_.runKernelFunc(function(p,d){var f=p.min(r,i);return d([o,f]),f},{x:r},function(p,d){return p0(p,d[1],d[0],a,s)},"Min",{axes:i},u,[!0]);if(n){var c=Et(l.shape,a);l=l.reshape(c)}return l}}),BS=A({moments_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=$e(t,(e=E(e,"x","moments")).shape),o=e.mean(r,n),a=o.shape;n||(a=Et(o.shape,r));var i=e.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(r,n)}}}),Tn=A({sum_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=E(e,"x","sum");r.dtype==="bool"&&(r=r.toInt());var o=$e(t,r.shape);return mu(function(a){var i=wn(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=bn(s.length,a.rank));var l=function(f){var m=a.shape.slice();return o.forEach(function(v){m[v]=1}),f.reshape(m).mul(Qr(a.shape,"float32"))},c={axes:s},p=_.runKernelFunc(function(f){return f.sum(u,s)},{x:u},function(f){return{x:function(){return l(f)}}},"Sum",c);if(n){var d=Et(p.shape,o);p=p.reshape(d)}return{value:p,gradFunc:l}})(r)}}),wd=A({prod_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=E(e,"x","prod");r.dtype==="bool"&&(r=r.toInt());var o=$e(t,r.shape),a=wn(o,r.rank),i=o,s=r;a!=null&&(s=r.transpose(a),i=bn(i.length,r.rank));var u=_.runKernelFunc(function(c){return c.prod(s,i)},{permutedX:s});if(n){var l=Et(u.shape,o);u=u.reshape(l)}return u}}),bd=A({elu_:function(e){var t=E(e,"x","elu");return _.runKernelFunc(function(n,r){var o=n.elu(t);return r([o]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return _.runKernelFunc(function(a){return a.eluDer(n,o)},{dy:n,y:o})}}})}}),x0=A({leakyRelu_:function(e,t){t===void 0&&(t=.2);var n=E(e,"x","leakyRelu");return hu(X(t).mul(n),n)}}),Cd=A({prelu_:function(e,t){var n=E(e,"x","prelu"),r=E(t,"alpha","prelu");return _.runKernelFunc(function(o,a){var i=o.prelu(n,r);return a([n,r]),i},{x:n,alpha:r},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return gr(u,o,o.mul(s))},alpha:function(){var l=gr(u,me(o),o.mul(i)),c=He(s.shape,o.shape);return c.length>0&&(l=l.sum(c)),l.reshape(s.shape)}}},"Prelu")}}),Sd=A({relu_:function(e){var t=E(e,"x","relu");return t.dtype==="bool"?t.toInt():_.runKernelFunc(function(n,r){var o=n.relu(t);return r([t]),o},{x:t},function(n,r){var o=r[0];return{x:function(){return n.mulStrict(o.step().toFloat())}}},"Relu")}}),w0=A({relu6_:function(e){var t=E(e,"x","relu6");return t.dtype==="bool"?t.toInt():_.runKernelFunc(function(n,r){var o=n.relu6(t);return r([t]),o},{x:t},function(n,r){var o=r[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return n.mulStrict(a.toFloat())}}},"Relu6")}}),b0=A({selu_:function(e){var t=E(e,"x","selu");return _.runKernelFunc(function(n,r){var o=n.selu(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){var a=o.greater(X(0)),i=X(sd),s=X(ud),u=n.mul(s),l=n.mul(i).mul(o.toFloat().exp());return gr(a,u,l)}}})}}),C0=A({localResponseNormalization_:function(e,t,n,r,o){t===void 0&&(t=5),n===void 0&&(n=1),r===void 0&&(r=1),o===void 0&&(o=.5);var a=E(e,"x","localResponseNormalization");I(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),I(Be(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=_.runKernelFunc(function(l,c){var p=l.localResponseNormalization4D(i,t,n,r,o);return c([i,p]),p},{x4D:i},function(l,c){var p=c[0],d=c[1];return{x4D:function(){return _.runKernelFunc(function(f){return f.LRNGrad(l,p,d,t,n,r,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),S0=A({norm_:function(e,t,n,r){t===void 0&&(t="euclidean"),n===void 0&&(n=null),r===void 0&&(r=!1);var o=function s(u,l,c){if(c===void 0&&(c=null),u.rank===0)return u.abs();if(u.rank!==1&&c===null)return s(u.reshape([-1]),l,c);if(u.rank===1||typeof c=="number"||Array.isArray(c)&&c.length===1){if(l===1)return u.abs().sum(c);if(l===1/0)return u.abs().max(c);if(l===-1/0)return u.abs().min(c);if(l==="euclidean"||l===2)return u.abs().pow(X(2,"int32")).sum(c).sqrt();throw new Error("Error in norm: invalid ord value: "+l)}if(Array.isArray(c)&&c.length===2){if(l===1)return u.abs().sum(c[0]).max(c[1]-1);if(l===1/0)return u.abs().sum(c[1]).max(c[0]);if(l===-1/0)return u.abs().sum(c[1]).min(c[0]);if(l==="fro"||l==="euclidean")return u.square().sum(c).sqrt();throw new Error("Error in norm: invalid ord value: "+l)}throw new Error("Error in norm: invalid axis: "+c)}(e=E(e,"x","norm"),t,n),a=o.shape;if(r){var i=$e(n,e.shape);a=Et(o.shape,i)}return o.reshape(a)}}),zS=A({basicLSTMCell_:function(e,t,n,r,o,a){var i=E(e,"forgetBias","basicLSTMCell"),s=E(t,"lstmKernel","basicLSTMCell"),u=E(n,"lstmBias","basicLSTMCell"),l=E(r,"data","basicLSTMCell"),c=E(o,"c","basicLSTMCell"),p=E(a,"h","basicLSTMCell"),d=l.concat(p,1).matMul(s).add(u),f=d.shape[0],m=d.shape[1]/4,v=[f,m],y=d.slice([0,0],v),h=d.slice([0,m],v),g=d.slice([0,2*m],v),x=d.slice([0,3*m],v),w=y.sigmoid().mulStrict(h.tanh()).addStrict(c.mulStrict(i.add(g).sigmoid())),b=w.tanh().mulStrict(x.sigmoid());return[w,b]}}),VS=A({multiRNNCell_:function(e,t,n,r){for(var o=E(t,"data","multiRNNCell"),a=Fs(n,"c","multiRNNCell"),i=Fs(r,"h","multiRNNCell"),s=o,u=[],l=0;l<e.length;l++){var c=e[l](s,a[l],i[l]);u.push(c[0]),u.push(c[1]),s=c[1]}var p=[],d=[];for(l=0;l<u.length;l+=2)p.push(u[l]),d.push(u[l+1]);return[p,d]}}),WS=A({movingAverage_:function(e,t,n,r,o){o===void 0&&(o=!0);var a=E(e,"v","movingAverage"),i=E(t,"x","movingAverage"),s=E(n,"decay","movingAverage");zw(a,i),I(qe(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=X(1),l=u.sub(s),c=i.sub(a).mul(l);if(o){I(r!=null,function(){return"When using zeroDebias: true, step is required."});var p=E(r,"step","movingAverage");c=c.div(u.sub(ti(s,p)))}return a.add(c)}}),E0=A({stridedSlice_:function(e,t,n,r,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),r==null&&(r=new Array(t.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var l=E(e,"x","stridedSlice"),c=Jf(s),p=l.shape.slice();c.forEach(function(y){t[y]=0,n[y]=1,p.splice(y,0,1)}),l=l.reshape(p);for(var d=0;d<l.rank;d++)t[d]=jb(o,t,r,l.shape,d),n[d]=Hb(a,n,r,l.shape,d),r[d]=r[d]||1;var f=Jf(u);f.forEach(function(y){n[y]=t[y]+1,r[y]=1});var m=td(t,n,r),v=m.filter(function(y,h){return f.indexOf(h)===-1});return r.every(function(y){return y===1})?yn(l,t,m).reshape(v):_.runKernelFunc(function(y){return y.stridedSlice(l,t,n,r)},{$x:l}).reshape(v)}}),N0=A({topk_:function(e,t,n){t===void 0&&(t=1),n===void 0&&(n=!0);var r=E(e,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=r.shape[r.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var a=_.runKernelFunc(function(i){return i.topk(r,t,n)},{$x:r});return{values:a[0],indices:a[1]}}}),k0=A({scatterND_:function(e,t,n){var r=E(e,"indices","scatterND","int32"),o=E(t,"updates","scatterND");return Ub(o,r,n),_.runKernelFunc(function(a){return a.scatterND(r,o,n)},{indices:r,updates:o},null,"ScatterNd",{shape:n})}}),bu=A({fft_:function(e){I(e.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+e.dtype+"."});var t=e.shape[e.shape.length-1],n=e.size/t,r=e.as2D(n,t);return _.runKernelFunc(function(o){return o.fft(r)},{input:e}).reshape(e.shape)}}),ri=A({ifft_:function(e){I(e.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+e.dtype+"."});var t=e.shape[e.shape.length-1],n=e.size/t,r=e.as2D(n,t);return _.runKernelFunc(function(o){return o.ifft(r)},{input:e}).reshape(e.shape)}}),Cu=A({rfft_:function(e,t){I(e.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+e.dtype});var n,r=e.shape[e.shape.length-1],o=e.size/r;if(t!=null&&t<r){var a=e.shape.map(function(h){return 0}),i=e.shape.map(function(h){return h});i[e.shape.length-1]=t,n=e.slice(a,i),r=t}else if(t!=null&&t>r){var s=e.shape.map(function(h){return h});s[e.shape.length-1]=t-r,n=e.concat(Te(s),e.shape.length-1),r=t}else n=e;var u=n.zerosLike(),l=Ke(n,u).as2D(o,r),c=bu(l),p=Math.floor(r/2)+1,d=At(c),f=Jt(c),m=d.split([p,r-p],d.shape.length-1),v=f.split([p,r-p],f.shape.length-1),y=n.shape.slice();return y[n.shape.length-1]=p,Ke(m[0],v[0]).reshape(y)}}),Ed=A({irfft_:function(e){var t=e.shape[e.shape.length-1],n=e.size/t;if(t<=2){var r=e.as2D(n,t),o=ri(r);return At(o)}var a=[n,2*(t-1)],i=At(e).as2D(n,t),s=Jt(e).as2D(n,t),u=i.slice([0,1],[n,t-2]).reverse(1),l=s.slice([0,1],[n,t-2]).reverse(1).mul(X(-1)),c=i.concat(u,1),p=s.concat(l,1);return r=Ke(c,p).as2D(a[0],a[1]),o=ri(r),At(o)}}),US=Object.freeze({fft:bu,ifft:ri,rfft:Cu,irfft:Ed}),Nd=A({sparseToDense_:function(e,t,n,r){r===void 0&&(r=0);var o=E(e,"sparseIndices","sparseToDense","int32"),a=E(t,"sparseValues","sparseToDense"),i=E(r,"defaultValue","sparseToDense",a.dtype);return function(s,u,l,c){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var p=s.rank>0?s.shape[0]:1,d=s.rank>1?s.shape[1]:1;if(l.length!==d)throw new Error("outputShape has incorrect number of elements:, "+l.length+", should be: "+d+".");var f=u.size;if(u.rank!==0&&(u.rank!==1||f!==p))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+p+"]");if(u.dtype!==c.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,n,i),_.runKernelFunc(function(s){return s.sparseToDense(o,a,n,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),I0=A({gatherND_:function(e,t){var n=E(t,"indices","gatherND","int32"),r=E(e,"x","gatherND");return _.runKernelFunc(function(o){return o.gatherND(r,n)},{x:r,indices:n},null,"GatherNd")}}),$S=A({diag_:function(e){var t=E(e,"x","diag").flatten(),n=e.shape.concat(e.shape);return _.runKernelFunc(function(r){return r.diag(t)},{$x:t}).reshape(n)}}),jS=A({dropout_:function(e,t,n,r){var o=E(e,"x","dropout");if(I(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),I(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return e instanceof Ae?o.clone():o;var a=function(u,l){if(l==null)return u.shape.slice();if(qe(u.shape,l))return l;if(u.shape.length===l.length){for(var c=[],p=0;p<u.shape.length;p++)l[p]==null&&u.shape[p]!=null?c.push(u.shape[p]):c.push(l[p]);return c}return l}(o,n),i=1-t,s=fd(a,0,1,"float32",r).add(i).floor().div(i);return o.mul(s)}});function R0(e,t,n){for(var r=1-e%2,o=new Float32Array(e),a=0;a<e;++a){var i=2*Math.PI*a/(e+r-1);o[a]=t-n*Math.cos(i)}return zn(o,"float32")}var kd=A({hannWindow_:function(e){return R0(e,.5,.5)}}),T0=A({hammingWindow_:function(e){return R0(e,.54,.46)}}),Id=A({frame_:function(e,t,n,r,o){r===void 0&&(r=!1),o===void 0&&(o=0);for(var a=0,i=[];a+t<=e.size;)i.push(yn(e,a,t)),a+=n;if(r)for(;a<e.size;){var s=a+t-e.size,u=Gt([yn(e,a,t-s),lu([s],o)]);i.push(u),a+=n}return i.length===0?Br([],[0,t]):Gt(i).as2D(i.length,t)}}),A0=A({stft_:function(e,t,n,r,o){var a;o===void 0&&(o=kd),r==null&&(a=t,r=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=Id(e,t,n),s=Ve(i,o(t)),u=[],l=0;l<i.shape[0];l++)u.push(Cu(s.slice([l,0],[1,t]),r));return Gt(u)}}),HS=Object.freeze({hannWindow:kd,hammingWindow:T0,frame:Id,stft:A0}),st,GS=function(e,t,n){return n===void 0&&(n=1),Z(this,void 0,void 0,function(){var r,o,a,i,s,u,l,c,p,d,f,m,v,y;return J(this,function(h){switch(h.label){case 0:return r=E(e,"predictions","inTopK"),o=E(t,"targets","inTopK"),I(r.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+r.rank}),I(r.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+r.rank+" and targets rank "+o.rank}),xe(r.shape.slice(0,r.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=r.shape[r.shape.length-1],I(n>0&&n<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+n}),[4,r.data()];case 1:return i=h.sent(),[4,o.data()];case 2:for(s=h.sent(),u=[i.length/a,a],c=u[1],p=Gr("bool",l=u[0]),d=0;d<l;d++){for(f=d*c,m=i.subarray(f,f+c),v=[],y=0;y<m.length;y++)v.push({value:m[y],index:y});for(v.sort(function(g,x){return x.value-g.value}),p[d]=0,y=0;y<n;y++)if(v[y].index===s[d]){p[d]=1;break}}return e!==r&&r.dispose(),t!==o&&o.dispose(),[2,Ye(p,o.shape,"bool")]}})})};(function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(st||(st={}));var qS=A({absoluteDifference_:function(e,t,n,r){r===void 0&&(r=st.SUM_BY_NONZERO_WEIGHTS);var o=E(e,"labels","absoluteDifference"),a=E(t,"predictions","absoluteDifference"),i=null;n!=null&&(i=E(n,"weights","absoluteDifference")),xe(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return Hn(s,i,r)}}),Hn=A({computeWeightedLoss_:function(e,t,n){n===void 0&&(n=st.SUM_BY_NONZERO_WEIGHTS);var r=E(e,"losses","computeWeightedLoss"),o=null;t!=null&&(o=E(t,"weights","computeWeightedLoss"));var a=o==null?r:r.mul(o);if(n===st.NONE)return a;if(n===st.SUM)return a.sum();if(n===st.MEAN){if(o==null)return a.mean();var i=r.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(X(i)):s}if(n===st.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(X(r.size));var u=o.mul(Qr(r.shape)).notEqual(X(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+n)}}),KS=A({cosineDistance_:function(e,t,n,r,o){o===void 0&&(o=st.SUM_BY_NONZERO_WEIGHTS);var a=E(e,"labels","cosineDistance"),i=E(t,"predictions","cosineDistance"),s=null;r!=null&&(s=E(r,"weights","cosineDistance")),xe(a.shape,i.shape,"Error in cosineDistance: ");var u=X(1).sub(a.mul(i).sum(n,!0));return Hn(u,s,o)}}),XS=A({hingeLoss_:function(e,t,n,r){r===void 0&&(r=st.SUM_BY_NONZERO_WEIGHTS);var o=E(e,"labels","hingeLoss"),a=E(t,"predictions","hingeLoss"),i=null;n!=null&&(i=E(n,"weights","hingeLoss")),xe(o.shape,a.shape,"Error in hingeLoss: ");var s=X(1);o=X(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return Hn(u,i,r)}}),YS=A({huberLoss_:function(e,t,n,r,o){r===void 0&&(r=1),o===void 0&&(o=st.SUM_BY_NONZERO_WEIGHTS);var a=E(e,"labels","huberLoss"),i=E(t,"predictions","huberLoss"),s=null;n!=null&&(s=E(n,"weights","huberLoss")),xe(a.shape,i.shape,"Error in huberLoss: ");var u=X(r),l=i.sub(a).abs(),c=ed(l,u),p=l.sub(c),d=X(.5).mul(c.square()).add(u.mul(p));return Hn(d,s,o)}}),QS=A({logLoss_:function(e,t,n,r,o){r===void 0&&(r=1e-7),o===void 0&&(o=st.SUM_BY_NONZERO_WEIGHTS);var a=E(e,"labels","logLoss"),i=E(t,"predictions","logLoss"),s=null;n!=null&&(s=E(n,"weights","logLoss")),xe(a.shape,i.shape,"Error in logLoss: ");var u=X(1),l=X(r),c=a.mul(i.add(l).log()).neg().sub(u.sub(a).mul(u.sub(i).add(l).log()));return Hn(c,s,o)}}),ZS=A({meanSquaredError_:function(e,t,n,r){r===void 0&&(r=st.SUM_BY_NONZERO_WEIGHTS);var o=E(e,"labels","meanSquaredError"),a=E(t,"predictions","meanSquaredError"),i=null;n!=null&&(i=E(n,"weights","meanSquaredError")),xe(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return Hn(s,i,r)}}),JS=A({sigmoidCrossEntropy_:function(e,t,n,r,o){r===void 0&&(r=0),o===void 0&&(o=st.SUM_BY_NONZERO_WEIGHTS);var a=E(e,"multiClassLabels","sigmoidCrossEntropy"),i=E(t,"logits","sigmoidCrossEntropy"),s=null;if(n!=null&&(s=E(n,"weights","sigmoidCrossEntropy")),xe(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),r>0){var u=X(r),l=X(1),c=X(.5);a=a.mul(l.sub(u)).add(c.mul(u))}var p=function(d,f){var m=E(d,"labels","sigmoidCrossEntropyWithLogits"),v=E(f,"logits","sigmoidCrossEntropyWithLogits");xe(m.shape,v.shape,"Error in sigmoidCrossEntropyWithLogits: ");var y=v.relu(),h=v.mul(m),g=v.abs().neg().exp().log1p();return y.sub(h).add(g)}(a,i);return Hn(p,s,o)}}),eE=A({softmaxCrossEntropy_:function(e,t,n,r,o){r===void 0&&(r=0),o===void 0&&(o=st.SUM_BY_NONZERO_WEIGHTS);var a=E(e,"onehotLabels","softmaxCrossEntropy"),i=E(t,"logits","softmaxCrossEntropy"),s=null;if(n!=null&&(s=E(n,"weights","softmaxCrossEntropy")),xe(a.shape,i.shape,"Error in softmaxCrossEntropy: "),r>0){var u=X(r),l=X(1),c=X(a.shape[1]);a=a.mul(l.sub(u)).add(u.div(c))}var p=function(d,f,m){if(m===void 0&&(m=-1),m===-1&&(m=f.rank-1),m!==f.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+f.rank+" and dim was "+m);return mu(function(v,y,h){var g=y.logSumExp([m],!0),x=y.toFloat().sub(g);return h([v,x]),{value:x.mul(v).neg().sum([m]),gradFunc:function(w,b){var S=b[0],k=b[1],N=Et(w.shape,[m]);return[w.reshape(N).mul(S.toFloat().sub(k.exp())),w.reshape(N).mul(k.exp().sub(S.toFloat()))]}}})(d,f)}(a,i);return Hn(p,s,o)}}),tE=Object.freeze({get Reduction(){return st},absoluteDifference:qS,computeWeightedLoss:Hn,cosineDistance:KS,hingeLoss:XS,huberLoss:YS,logLoss:QS,meanSquaredError:ZS,sigmoidCrossEntropy:JS,softmaxCrossEntropy:eE});function bh(e,t){return t===void 0&&(t=!1),_.tidy(function(){if(e.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+e.shape.length+"D Tensor.");for(var n=e.shape[0],r=e.shape[1],o=Uy(n),a=e.clone(),i=Br([[1]],[1,1]),s=i.clone(),u=n>=r?r:n,l=function(p){var d,f=a,m=s,v=o;d=_.tidy(function(){var y=a.slice([p,p],[n-p,1]),h=y.norm(),g=a.slice([p,p],[1,1]),x=Br([[-1]]).where(g.greater(0),Br([[1]])),w=g.sub(x.mul(h)),b=y.div(w);s=b.shape[0]===1?i.clone():i.concat(b.slice([1,0],[b.shape[0]-1,b.shape[1]]),0);var S=x.matMul(w).div(h).neg(),k=a.slice([p,0],[n-p,r]),N=S.mul(s),R=s.transpose();if(p===0)a=k.sub(N.matMul(R.matMul(k)));else{var T=k.sub(N.matMul(R.matMul(k)));a=a.slice([0,0],[p,r]).concat(T,0)}var D=N.transpose(),F=o.slice([0,p],[n,o.shape[1]-p]);if(p===0)o=F.sub(F.matMul(s).matMul(D));else{var U=F.sub(F.matMul(s).matMul(D));o=o.slice([0,0],[n,p]).concat(U,1)}return[s,a,o]}),s=d[0],a=d[1],o=d[2],St([f,m,v])},c=0;c<u;++c)l(c);return!t&&n>r&&(o=o.slice([0,0],[n,r]),a=a.slice([0,0],[r,r])),[o,a]})}var nE=A({bandPart_:function(e,t,n){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(n%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+n+".");var r=E(e,"a","bandPart");if(r.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+r.rank+".");var o=r.shape,a=r.shape.slice(-2),i=a[0],s=a[1];if(!(t<=i))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+i+").");if(!(n<=s))throw new Error("bandPart(): numUpper ("+n+") must not be greater than the number of columns ("+s+").");t<0&&(t=i),n<0&&(n=s);var u=ei(0,i,1,"int32").reshape([-1,1]),l=ei(0,s,1,"int32"),c=Fn(u,l),p=fi(c.lessEqual(X(+t,"int32")),c.greaterEqual(X(-n,"int32"))),d=Te([i,s],r.dtype);return Vn(pi(r.reshape([-1,i,s])).map(function(f){return gr(p,f,d)})).reshape(o)}}),rE=A({gramSchmidt_:function(e){var t;if(Array.isArray(e)){t=!1,I(e!=null&&e.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var n=e[0].shape[0],r=function(u){I(e[u].shape[0]===n,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+e[u].shape[0]+" vs. "+n+")"})},o=1;o<e.length;++o)r(o)}else t=!0,e=cu(e,e.shape[0],0).map(function(u){return Qp(u,[0])});I(e.length<=e[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+e.length+") exceeds number of dimensions ("+e[0].shape[0]+")."});var a=[],i=e,s=function(u){a.push(_.tidy(function(){var l=i[u];if(u>0)for(var c=0;c<u;++c){var p=Tn(a[c].mulStrict(l)).mul(a[c]);l=l.sub(p)}return l.div(S0(l,"euclidean"))}))};for(o=0;o<e.length;++o)s(o);return t?Vn(a,0):a}}),oE=A({qr_:function(e,t){if(t===void 0&&(t=!1),e.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+e.rank);if(e.rank===2)return bh(e,t);var n=e.shape.slice(0,e.shape.length-2).reduce(function(i,s){return i*s}),r=pi(e.reshape([n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),o=[],a=[];return r.forEach(function(i){var s=bh(i,t),u=s[0],l=s[1];o.push(u),a.push(l)}),[Vn(o,0).reshape(e.shape),Vn(a,0).reshape(e.shape)]}}),aE=Object.freeze({bandPart:nE,gramSchmidt:rE,qr:oE});function Su(e,t,n,r,o,a){r==null&&(r=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=e.shape[0];return n=Math.min(n,i),I(0<=r&&r<=1,function(){return"iouThreshold must be in [0, 1], but was '"+r+"'"}),I(e.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+e.rank+"'"}),I(e.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+e.shape[1]}),I(t.rank===1,function(){return"scores must be a 1D tensor"}),I(t.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+t.shape[0]}),I(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:n,iouThreshold:r,scoreThreshold:o,softNmsSigma:a}}var iE=A({resizeBilinear_:function(e,t,n){n===void 0&&(n=!1);var r=E(e,"images","resizeBilinear");I(r.rank===3||r.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+r.rank+"."}),I(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=r,a=!1;r.rank===3&&(a=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=t[0],s=t[1],u=_.runKernelFunc(function(l,c){return c([o]),l.resizeBilinear(o,i,s,n)},{x:o},function(l,c){return{x:function(){return _.runKernelFunc(function(p){return p.resizeBilinearBackprop(l,c[0],n)},{})}}},"ResizeBilinear",{alignCorners:n,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),sE=A({resizeNearestNeighbor_:function(e,t,n){n===void 0&&(n=!1);var r=E(e,"images","resizeNearestNeighbor");I(r.rank===3||r.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+r.rank+"."}),I(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),I(r.dtype==="float32"||r.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=r,a=!1;r.rank===3&&(a=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=t[0],s=t[1],u=_.runKernelFunc(function(l,c){return c([o]),l.resizeNearestNeighbor(o,i,s,n)},{batchImages:o},function(l,c){return{batchImages:function(){return _.runKernelFunc(function(p){return p.resizeNearestNeighborBackprop(l,c[0],n)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),uE=A({nonMaxSuppression_:function(e,t,n,r,o){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=E(e,"boxes","nonMaxSuppression"),i=E(t,"scores","nonMaxSuppression"),s=Su(a,i,n,r,o);n=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:n,iouThreshold:r,scoreThreshold:o};return _.runKernelFunc(function(l){return l.nonMaxSuppression(a,i,n,r,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),lE=function(e,t,n,r,o){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),Z(this,void 0,void 0,function(){var a,i,s,u,l,c,p;return J(this,function(d){switch(d.label){case 0:return a=E(e,"boxes","nonMaxSuppressionAsync"),i=E(t,"scores","nonMaxSuppressionAsync"),s=Su(a,i,n,r,o),n=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=d.sent(),l=u[0],c=u[1],p=rd(l,c,n,r,o),a!==e&&a.dispose(),i!==t&&i.dispose(),[2,p]}})})},cE=A({nonMaxSuppressionWithScore_:function(e,t,n,r,o,a){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=E(e,"boxes","nonMaxSuppression"),s=E(t,"scores","nonMaxSuppression"),u=Su(i,s,n,r,o,a),l={maxOutputSize:n=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},c=_.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},l);return{selectedIndices:c[0],selectedScores:c[1]}}}),pE=function(e,t,n,r,o,a){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),Z(this,void 0,void 0,function(){var i,s,u,l,c,p,d;return J(this,function(f){switch(f.label){case 0:return i=E(e,"boxes","nonMaxSuppressionAsync"),s=E(t,"scores","nonMaxSuppressionAsync"),u=Su(i,s,n,r,o,a),n=u.maxOutputSize,r=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return l=f.sent(),c=l[0],p=l[1],d=od(c,p,n,r,o,a),i!==e&&i.dispose(),s!==t&&s.dispose(),[2,d]}})})},dE=A({cropAndResize_:function(e,t,n,r,o,a){var i=E(e,"image","cropAndResize"),s=E(t,"boxes","cropAndResize","float32"),u=E(n,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var l=s.shape[0];return I(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),I(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+l+",4] but had shape "+s.shape+"."}),I(u.rank===1&&u.shape[0]===l,function(){return"Error in cropAndResize: boxInd must be have size ["+l+"] but had shape "+s.shape+"."}),I(r.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+r.length+"."}),I(r[0]>=1&&r[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+r}),I(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),_.runKernelFunc(function(c,p){return c.cropAndResize(i,s,u,r,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:r})}}),Fo=Object.freeze({resizeBilinear:iE,resizeNearestNeighbor:sE,nonMaxSuppression:uE,nonMaxSuppressionAsync:lE,nonMaxSuppressionWithScore:cE,nonMaxSuppressionWithScoreAsync:pE,cropAndResize:dE}),Rd=function(e,t){return!(e>0)||t==="linear"},Td=function(e,t,n){if(n==null||n==="linear")return e;if(n==="relu")return e.mul(t.step());throw new Error("Gradient for activation "+n+" has not been implemented yet.")},Ad=function(e,t){var n=t,r=He(e.shape,t.shape);return r.length>0&&(n=n.sum(r)),n.reshape(e.shape)},_d=function(e,t,n){if(t==="linear")return e;if(t==="relu")return Sd(e);if(t==="elu")return bd(e);if(t==="relu6")return w0(e);if(t==="prelu")return Cd(e,n);throw new Error("Unknown fused activation "+t+".")},fE=A({fusedMatMul_:function(e){var t,n=e.a,r=e.b,o=e.transposeA,a=o!==void 0&&o,i=e.transposeB,s=i!==void 0&&i,u=e.bias,l=e.activation,c=l===void 0?"linear":l,p=e.preluActivationWeights;if(Rd(_.state.gradientDepth,c)===!1){var d=xd(n,r,a,s);return u!=null&&(d=Wn(d,u)),_d(d,c,p)}var f=E(n,"a","fused matMul"),m=E(r,"b","fused matMul");t=Fe(f,m),f=t[0],m=t[1];var v=a?f.shape[f.rank-2]:f.shape[f.rank-1],y=s?m.shape[m.rank-1]:m.shape[m.rank-2],h=a?f.shape[f.rank-1]:f.shape[f.rank-2],g=s?m.shape[m.rank-2]:m.shape[m.rank-1],x=f.shape.slice(0,-2),w=m.shape.slice(0,-2),b=Q(x),S=Q(w);I(f.rank>=2&&m.rank>=2&&f.rank===m.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+f.rank+" and "+m.rank+"."}),I(qe(x,w),function(){return"Error in fused matMul: outer dimensions ("+x+") and ("+w+") of Tensors with shapes "+f.shape+" and "+m.shape+" must match."}),I(v===y,function(){return"Error in fused matMul: inner shapes ("+v+") and ("+y+") of Tensors with shapes "+f.shape+" and "+m.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var k,N,R=f.shape.slice(0,-2).concat([h,g]),T=a?f.as3D(b,v,h):f.as3D(b,h,v),D=s?m.as3D(S,g,y):m.as3D(S,y,g);u!=null&&ce(R,(k=Fe(k=E(u,"bias","fused matMul"),f)[0]).shape),p!=null&&(N=E(p,"prelu weights","fused matMul"));var F={a:T,b:D};u!=null&&(F.bias=k),p!=null&&(F.preluActivationWeights=N);var U=[T,D];return _.runKernelFunc(function(W,V){var $=W.fusedBatchMatMul({a:T,b:D,transposeA:a,transposeB:s,bias:k,activation:c,preluActivationWeights:N});return V([T,D,$]),$},F,function(W,V){var $=V[0],H=V[1],O=V[2],P=Td(W,O,c),L={};return u!=null&&(L={bias:function(){return Ad(k,P)}}),Object.assign(a||s?!a&&s?{a:function(){return P.matMul(H,!1,!1)},b:function(){return P.matMul($,!0,!1)}}:a&&!s?{a:function(){return H.matMul(P,!1,!0)},b:function(){return $.matMul(P,!1,!1)}}:{a:function(){return H.matMul(P,!0,!0)},b:function(){return P.matMul($,!0,!0)}}:{a:function(){return P.matMul(H,!1,!0)},b:function(){return $.matMul(P,!0,!1)}},L)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:c},U,[!0]).reshape(R)}}),hE=A({fusedConv2d_:function(e){var t=e.x,n=e.filter,r=e.strides,o=e.pad,a=e.dataFormat,i=a===void 0?"NHWC":a,s=e.dilations,u=s===void 0?[1,1]:s,l=e.dimRoundingMode,c=e.bias,p=e.activation,d=p===void 0?"linear":p,f=e.preluActivationWeights;if(d=d||"linear",Rd(_.state.gradientDepth,d)===!1){var m=ea(t,n,r,o,i,u,l);return c!=null&&(m=Wn(m,c)),_d(m,d,f)}var v=E(t,"x","conv2d"),y=E(n,"filter","conv2d"),h=v,g=!1;v.rank===3&&(g=!0,h=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),I(h.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+h.rank+"."}),I(y.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+y.rank+"."}),l!=null&&I(Be(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+l+" but got pad "+o+"."}),I(h.shape[3]===y.shape[2],function(){return"Error in conv2d: depth of input ("+h.shape[3]+") must match input depth for filter "+y.shape[2]+"."}),I(dt(r,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),I(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var x,w,b=Zr(h.shape,y.shape,r,u,o,l);c!=null&&(x=Fe(x=E(c,"bias","fused conv2d"),v)[0],ce(b.outShape,x.shape)),f!=null&&(w=E(f,"prelu weights","fused conv2d"));var S={x:h,filter:y};c!=null&&(S.bias=x),f!=null&&(S.preluActivationWeights=w);var k=[y,h],N=_.runKernelFunc(function(R,T){var D=R.fusedConv2d({input:h,filter:y,convInfo:b,bias:x,activation:d,preluActivationWeights:w});return T([y,h,D]),D},S,function(R,T){var D=T,F=D[0],U=D[1],W=D[2],V=Td(R,W,d);I(qo(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var $={};return c!=null&&($={bias:function(){return Ad(x,V)}}),Object.assign({x:function(){return e0(U.shape,V,F,r,o)},filter:function(){return yd(U,V,F.shape,r,o)}},$)},"FusedConv2D",{convInfo:b,activation:d},k,[!0]);return g?N.as3D(N.shape[1],N.shape[2],N.shape[3]):N}}),mE=A({fusedDepthwiseConv2d_:function(e){var t=e.x,n=e.filter,r=e.strides,o=e.pad,a=e.dataFormat,i=a===void 0?"NHWC":a,s=e.dilations,u=s===void 0?[1,1]:s,l=e.dimRoundingMode,c=e.bias,p=e.activation,d=p===void 0?"linear":p,f=e.preluActivationWeights;if(Rd(_.state.gradientDepth,d)===!1){var m=wu(t,n,r,o,i,u,l);return c!=null&&(m=Wn(m,c)),_d(m,d,f)}var v=E(t,"x","depthwiseConv2d"),y=E(n,"filter","depthwiseConv2d"),h=v,g=!1;v.rank===3&&(g=!0,h=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),I(h.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+h.rank+"."}),I(y.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+y.rank+"."}),I(h.shape[3]===y.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+h.shape[3]+") must match the inChannels dimension in filter "+y.shape[2]+"."}),u==null&&(u=[1,1]),I(dt(r,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),l!=null&&I(Be(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+l+" but got pad "+o+"."});var x,w,b=Zr(h.shape,y.shape,r,u,o,l,!0);c!=null&&(x=Fe(x=E(c,"bias","fused conv2d"),v)[0],ce(b.outShape,x.shape)),f!=null&&(w=E(f,"prelu weights","fused depthwiseConv2d"));var S={x:h,filter:y};c!=null&&(S.bias=x),f!=null&&(S.preluActivationWeights=w);var k=[y,h],N=_.runKernelFunc(function(R,T){var D=R.fusedDepthwiseConv2D({input:h,filter:y,convInfo:b,bias:x,activation:d,preluActivationWeights:w});return T([y,h,D]),D},S,function(R,T){I(qo(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var D=T[0],F=T[1],U=T[2],W=Td(R,U,d),V={};return c!=null&&(V={bias:function(){return Ad(x,W)}}),Object.assign({x:function(){return t0(F.shape,W,D,b)},filter:function(){return n0(F,W,D.shape,b)}},V)},"FusedDepthwiseConv2D",{convInfo:b,activation:d},k,[!0]);return g?N.as3D(N.shape[1],N.shape[2],N.shape[3]):N}}),Us=Object.freeze({matMul:fE,conv2d:hE,depthwiseConv2d:mE}),vE=Object.freeze({image:Fo,linalg:aE,losses:tE,spectral:US,fused:Us,signal:HS,add:Wn,addN:Fy,batchNorm:Jo,batchNormalization:JC,batchNorm2d:tS,batchNormalization2d:eS,batchNorm3d:rS,batchNormalization3d:nS,batchNorm4d:aS,batchNormalization4d:oS,broadcastTo:Vy,clone:iS,div:Un,divNoNan:pd,eye:Uy,multinomial:$y,oneHot:ni,pad:Sr,pad1d:uS,pad2d:lS,pad3d:cS,pad4d:pS,rand:dS,randomGamma:mS,randomNormal:vS,randomUniform:fd,square:hd,squaredDifference:md,tile:zr,truncatedNormal:jy,conv1d:Zy,conv2d:ea,conv3d:Jy,depthwiseConv2d:wu,separableConv2d:ES,conv2dTranspose:r0,conv3dTranspose:NS,op:A,booleanMaskAsync:SS,complex:Ke,real:At,imag:Jt,concat:Gt,concat1d:bb,concat2d:Cb,concat3d:Sb,concat4d:Eb,split:cu,matMul:xd,dot:kS,outerProduct:IS,reverse:ta,reverse1d:RS,reverse2d:TS,reverse3d:AS,reverse4d:_S,maxPool:i0,avgPool:s0,pool:DS,maxPool3d:u0,avgPool3d:l0,maxPoolWithArgmax:c0,slice:yn,slice1d:OS,slice2d:FS,slice3d:MS,slice4d:PS,abs:Fg,acos:Mg,acosh:Pg,asin:Lg,asinh:Bg,atan:zg,atanh:Vg,ceil:Wg,clipByValue:Ug,cos:$g,cosh:jg,erf:Hg,exp:Gg,expm1:qg,floor:Kg,log:Xg,log1p:Yg,logSigmoid:Ib,neg:fu,reciprocal:Qg,round:Zg,rsqrt:Zp,sigmoid:Jg,sign:ey,isNaN:Rb,isInf:Tb,isFinite:Ab,sin:ty,sinh:ny,softplus:ry,sqrt:oy,step:_b,tan:ay,tanh:iy,all:d0,any:f0,argMax:h0,argMin:m0,logSumExp:LS,max:v0,mean:g0,min:y0,moments:BS,sum:Tn,prod:wd,equal:vd,equalStrict:gS,greater:Hy,greaterEqual:gd,greaterEqualStrict:yS,greaterStrict:xS,less:Gy,lessEqual:qy,lessEqualStrict:wS,lessStrict:bS,notEqual:Ky,notEqualStrict:CS,addStrict:Db,atan2:sy,divStrict:Ob,floorDiv:Jp,maximum:hu,maximumStrict:Fb,minimum:ed,minimumStrict:Mb,mod:uy,modStrict:Pb,mul:Ve,mulStrict:Lb,pow:ti,powStrict:Bb,squaredDifferenceStrict:zb,sub:Fn,subStrict:Vb,elu:bd,leakyRelu:x0,prelu:Cd,relu:Sd,relu6:w0,selu:b0,logicalAnd:fi,logicalNot:Wy,logicalOr:ld,logicalXor:sS,where:gr,whereAsync:cd,buffer:ae,print:Nb,batchToSpaceND:Xp,cast:Sg,cumsum:kb,depthToSpace:Eg,expandDims:Rn,reshape:fn,spaceToBatchND:Yp,squeeze:Qp,stack:Vn,unstack:pi,setdiff1dAsync:Ng,fill:lu,linspace:Cg,ones:Qr,range:ei,scalar:X,tensor:Ye,tensor1d:zn,tensor2d:Br,tensor3d:bg,tensor4d:Rr,tensor5d:yb,tensor6d:xb,variable:wb,zeros:Te,onesLike:Kp,zerosLike:me,transpose:Vt,softmax:vu,logSoftmax:fy,localResponseNormalization:C0,norm:S0,gather:xu,unsortedSegmentSum:Xy,basicLSTMCell:zS,multiRNNCell:VS,movingAverage:WS,stridedSlice:E0,topk:N0,scatterND:k0,fft:bu,ifft:ri,rfft:Cu,irfft:Ed,sparseToDense:Nd,gatherND:I0,diag:$S,dropout:jS,hannWindow:kd,hammingWindow:T0,frame:Id,stft:A0,inTopKAsync:GS});function j(e,t){Array.isArray(e)||(e=[e]),e.forEach(function(n){n!=null&&I(n.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function Rc(e,t,n,r,o,a){for(var i=o.strideHeight,s=o.strideWidth,u=o.dilationHeight,l=o.dilationWidth,c=o.effectiveFilterHeight,p=o.effectiveFilterWidth,d=o.padInfo.top,f=o.padInfo.left,m=a==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,v=ae(o.outShape,n),y=v.values,h=o.outShape[1]*o.outShape[2]*o.outShape[3],g=o.outShape[2]*o.outShape[3],x=o.outShape[3],w=0;w<o.batchSize;++w)for(var b=w*h,S=w*r[0],k=0;k<o.inChannels;++k)for(var N=0;N<o.outHeight;++N)for(var R=N*i-d,T=Math.max(0,R),D=Math.min(o.inHeight,c+R),F=b+N*g,U=0;U<o.outWidth;++U){for(var W=U*s-f,V=Math.max(0,W),$=Math.min(o.inWidth,p+W),H=m,O=0,P=0,L=T;L<D;L+=u){for(var q=S+L*r[1],K=V;K<$;K+=l){var te=e[q+K*r[2]+k];a==="max"&&te>H?H=te:a==="avg"&&(O+=te,P++)}if(isNaN(H))break}y[F+U*x+k]=a==="avg"?O/P:H}return v}function _0(e,t,n,r,o,a){o===void 0&&(o=!1),a===void 0&&(a=!1);for(var i=ae(r.outShape,"int32"),s=r.strideHeight,u=r.strideWidth,l=r.dilationHeight,c=r.dilationWidth,p=r.effectiveFilterHeight,d=r.effectiveFilterWidth,f=r.padInfo.top,m=r.padInfo.left,v=ae(t,n,e),y=0;y<r.batchSize;++y)for(var h=0;h<r.inChannels;++h)for(var g=0;g<r.outHeight;++g){for(var x=g*s-f,w=x;w<0;)w+=l;for(var b=Math.min(r.inHeight,p+x),S=0;S<r.outWidth;++S){for(var k=S*u-m,N=k;N<0;)N+=c;for(var R=Math.min(r.inWidth,d+k),T=Number.NEGATIVE_INFINITY,D=-1,F=w;F<b;F+=l)for(var U=F-x,W=N;W<R;W+=c){var V=W-k,$=v.get(y,F,W,h);$>T&&(T=$,D=o?a?((y*r.inHeight+F)*r.inWidth+W)*r.inChannels+h:(F*r.inWidth+W)*r.inChannels+h:U*d+V)}i.set(D,y,g,S,h)}}return i}function gl(e,t,n,r){if(n==="linear")return e.linear(t);if(n==="relu")return e.relu(t);if(n==="elu")return e.elu(t);if(n==="relu6")return e.relu6(t);if(n==="prelu")return e.prelu(t,r);throw new Error("Activation "+n+" has not been implemented for the CPU backend.")}var gE=function(e){function t(){var n=e.call(this)||this;return n.blockSize=48,n.firstUse=!0,n.data=new hy(n,_),n}return on(t,e),t.prototype.write=function(n,r,o){this.firstUse&&(this.firstUse=!1,z().get("IS_NODE")&&Os(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:n,dtype:o}),a},t.prototype.move=function(n,r,o,a){this.data.set(n,{values:r,dtype:a})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(n){return Z(this,void 0,void 0,function(){return J(this,function(r){return[2,this.readSync(n)]})})},t.prototype.readSync=function(n){var r=this.data.get(n),o=r.dtype,a=r.complexTensors;return o==="complex64"?Ic(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(n).values},t.prototype.bufferSync=function(n){var r=this.readSync(n.dataId),o=r;if(n.dtype==="string")try{o=r.map(function(a){return Qa(a)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return ae(n.shape,n.dtype,o)},t.prototype.makeOutput=function(n,r,o){var a=this.write(n,r,o);return _.makeTensorFromDataId(a,r,o,this)},t.prototype.disposeData=function(n){if(this.data.has(n)){var r=this.data.get(n).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.data.delete(n)}},t.prototype.time=function(n){return Z(this,void 0,void 0,function(){var r;return J(this,function(o){return r=Zt(),n(),[2,{kernelMs:Zt()-r}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(n,r){var o=this.makeOutput(null,n.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:_.keep(n.clone()),imag:_.keep(r.clone())},o},t.prototype.real=function(n){return this.data.get(n.dataId).complexTensors.real.clone()},t.prototype.imag=function(n){return this.data.get(n.dataId).complexTensors.imag.clone()},t.prototype.slice=function(n,r,o){if(j(n,"slice"),py(n.shape,r,o)){var a=dy(r,n.strides),i=Q(o);return Ye(this.readSync(n.dataId).subarray(a,a+i),o,n.dtype)}for(var s=ae(o,n.dtype),u=this.bufferSync(n),l=0;l<s.size;++l){var c=s.indexToLoc(l).map(function(p,d){return p+r[d]});s.values[l]=u.get.apply(u,c)}return s.toTensor()},t.prototype.stridedSlice=function(n,r,o,a){j(n,"stridedSlice");var i=td(r,o,a);if(i.some(function(f){return f===0}))return Ye([],i);for(var s=ae(i,n.dtype),u=this.bufferSync(n),l=0;l<s.size;l++){for(var c=s.indexToLoc(l),p=new Array(c.length),d=0;d<p.length;d++)p[d]=c[d]*a[d]+r[d];s.set.apply(s,[u.get.apply(u,p)].concat(c))}return s.toTensor()},t.prototype.diag=function(n){for(var r=this.readSync(n.dataId),o=ae([n.size,n.size],n.dtype),a=o.values,i=0;i<r.length;i++)a[i*n.size+i]=r[i];return o.toTensor()},t.prototype.unstack=function(n,r){for(var o=n.shape[r],a=new Array(n.rank-1),i=0,s=0;s<n.rank;s++)s!==r&&(a[i++]=n.shape[s]);var u=new Array(n.rank).fill(0),l=n.shape.slice();l[r]=1;var c=new Array(o);for(s=0;s<c.length;s++)u[r]=s,c[s]=this.slice(n,u,l).reshape(a);return c},t.prototype.reverse=function(n,r){j(n,"reverse");for(var o=ae(n.shape,n.dtype),a=this.bufferSync(n),i=function(u){var l=o.indexToLoc(u),c=l.slice();r.forEach(function(p){return c[p]=n.shape[p]-1-c[p]}),o.set.apply(o,[a.get.apply(a,c)].concat(l))},s=0;s<o.size;s++)i(s);return o.toTensor()},t.prototype.concat=function(n,r){var o=this;if(n[0].dtype==="complex64"){var a=n.map(function(f){return At(f)}),i=n.map(function(f){return Jt(f)});return Ke(this.concat(a,r),this.concat(i,r))}var s=n.map(function(f){var m=Q(f.shape.slice(r));return f.as2D(-1,m)}),u=Go(s.map(function(f){return f.shape}),1),l=ae(u,n[0].dtype).values;if(s[0].shape[0]===1){var c=0;s.forEach(function(f){l.set(o.readSync(f.dataId),c),c+=f.size})}else{var p=0;s.forEach(function(f){for(var m=o.readSync(f.dataId),v=0,y=0;y<f.shape[0];++y)for(var h=y*u[1]+p,g=0;g<f.shape[1];++g)l[h+g]=m[v++];p+=f.shape[1]})}var d=Go(n.map(function(f){return f.shape}),r);return Ye(l,d,n[0].dtype)},t.prototype.neg=function(n){return j(n,"neg"),this.multiply(X(-1),n)},t.prototype.add=function(n,r){return n.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(n.cast("complex64"),r.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(n,r,Je(n.dtype,r.dtype),function(o,a){return o+a})},t.prototype.addN=function(n){var r=this;j(n,"addN");for(var o=n.map(function(c){return r.readSync(c.dataId)}),a=ae(n[0].shape,n[0].dtype),i=a.values,s=0;s<n.length;s++)for(var u=o[s],l=0;l<i.length;l++)i[l]+=u[l];return a.toTensor()},t.prototype.softmax=function(n,r){var o=$e([r],n.shape),a=this.max(n,o),i=Et(a.shape,o),s=this.subtract(n,a.reshape(i)),u=this.exp(s),l=this.sum(u,o).reshape(i);return Un(u,l)},t.prototype.subtract=function(n,r){return n.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(n.cast("complex64"),r.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(n,r,Je(n.dtype,r.dtype),function(o,a){return o-a})},t.prototype.pow=function(n,r){return j([n,r],"pow"),this.broadcastedBinaryOp(n,r,n.dtype,function(o,a){return Math.pow(o,a)})},t.prototype.batchMatMul=function(n,r,o,a){j([n,r],"matMul");for(var i=o?n.shape[1]:n.shape[2],s=o?n.shape[2]:n.shape[1],u=a?r.shape[1]:r.shape[2],l=n.shape[0],c=this.readSync(n.dataId),p=this.readSync(r.dataId),d=o?[n.strides[0],1,n.strides[1]]:[n.strides[0],n.strides[1],1],f=d[0],m=d[1],v=d[2],y=a?[1,r.strides[1],r.strides[0]]:[r.strides[1],1,r.strides[0]],h=y[0],g=y[1],x=y[2],w=s*u,b=ae([l,s,u],n.dtype),S=b.values,k=this.blockSize,N=0;N<l;N++)for(var R=0;R<s;R+=k)for(var T=0;T<u;T+=k)for(var D=0;D<i;D+=k)for(var F=Math.min(R+k,s),U=Math.min(T+k,u),W=Math.min(D+k,i),V=R;V<F;V++)for(var $=T;$<U;$++){for(var H=0,O=D;O<W;O++)H+=c[N*f+V*m+O*v]*p[O*h+$*g+N*x];S[N*w+(V*u+$)]+=H}return b.toTensor()},t.prototype.fusedBatchMatMul=function(n){var r=n.a,o=n.b,a=n.transposeA,i=n.transposeB,s=n.bias,u=n.activation,l=n.preluActivationWeights,c=this.batchMatMul(r,o,a,i);return s&&(c=this.add(c,s)),u&&(c=gl(this,c,u,l)),c},t.prototype.multiply=function(n,r){return n.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(n.cast("complex64"),r.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(n,r,Je(n.dtype,r.dtype),function(o,a){return o*a})},t.prototype.floorDiv=function(n,r){return j([n,r],"floorDiv"),this.broadcastedBinaryOp(n,r,"int32",function(o,a){return Math.floor(o/a)})},t.prototype.sum=function(n,r){j(n,"sum"),Rt("sum",r,n.rank);for(var o=ot(n.shape,r),a=o[0],i=o[1],s=Te(a,Je(n.dtype,"int32")),u=Q(i),l=this.readSync(s.dataId),c=this.readSync(n.dataId),p=0;p<l.length;++p){for(var d=p*u,f=0,m=0;m<u;++m)f+=c[d+m];l[p]=f}return s},t.prototype.prod=function(n,r){j(n,"sum");for(var o=ot(n.shape,r),a=o[0],i=o[1],s=Te(a,Je(n.dtype,"int32")),u=Q(i),l=this.readSync(s.dataId),c=this.readSync(n.dataId),p=0;p<l.length;++p){for(var d=p*u,f=1,m=0;m<u;++m)f*=c[d+m];l[p]=f}return s},t.prototype.unsortedSegmentSum=function(n,r,o){j(n,"unsortedSegmentSum");for(var a=[],i=n.rank-r.rank,s=0;s<i;++s)r=r.expandDims(s+1);for(s=0;s<o;++s){var u=X(s,"int32"),l=vd(u,r).asType("float32").mul(n).sum(0);a.push(l)}return Vn(a)},t.prototype.argMin=function(n,r){j(n,"argMin");var o=[r];Rt("argMin",o,n.rank);for(var a=ot(n.shape,o),i=a[0],s=a[1],u=Te(i,"int32"),l=Q(s),c=this.readSync(u.dataId),p=this.readSync(n.dataId),d=0;d<c.length;++d){for(var f=d*l,m=p[f],v=0,y=0;y<l;++y){var h=p[f+y];h<m&&(m=h,v=y)}c[d]=v}return u},t.prototype.argMax=function(n,r){j(n,"argMax");var o=[r];Rt("argMax",o,n.rank);for(var a=ot(n.shape,o),i=a[0],s=a[1],u=Te(i,"int32"),l=Q(s),c=this.readSync(u.dataId),p=this.readSync(n.dataId),d=0;d<c.length;++d){for(var f=d*l,m=p[f],v=0,y=0;y<l;++y){var h=p[f+y];h>m&&(m=h,v=y)}c[d]=v}return u},t.prototype.cumsum=function(n,r,o,a){if(j(n,"cumsum"),r!==n.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(n.rank-1)+" but got axis="+r);for(var i=Je(n.dtype,"int32"),s=Te(n.shape,i),u=this.readSync(s.dataId),l=this.readSync(n.dataId),c=n.shape[n.rank-1],p=a?function(y,h){return y+c-h-1}:function(y,h){return y+h},d=0;d<l.length;d+=c)for(var f=0;f<c;f++){var m=p(d,f);if(f===0)u[m]=o?0:l[m];else{var v=p(d,f-1);u[m]=o?l[v]+u[v]:l[m]+u[v]}}return s},t.prototype.equal=function(n,r){return j([n,r],"equal"),this.broadcastedBinaryOp(n,r,"bool",function(o,a){return o===a?1:0})},t.prototype.notEqual=function(n,r){return j([n,r],"notEqual"),this.broadcastedBinaryOp(n,r,"bool",function(o,a){return o!==a?1:0})},t.prototype.less=function(n,r){return j([n,r],"less"),this.broadcastedBinaryOp(n,r,"bool",function(o,a){return o<a?1:0})},t.prototype.lessEqual=function(n,r){return j([n,r],"lessEqual"),this.broadcastedBinaryOp(n,r,"bool",function(o,a){return o<=a?1:0})},t.prototype.greater=function(n,r){return j([n,r],"greater"),this.broadcastedBinaryOp(n,r,"bool",function(o,a){return o>a?1:0})},t.prototype.greaterEqual=function(n,r){return j([n,r],"greaterEqual"),this.broadcastedBinaryOp(n,r,"bool",function(o,a){return o>=a?1:0})},t.prototype.logicalNot=function(n){j(n,"logicalNot");for(var r=this.readSync(n.dataId),o=new Uint8Array(r.length),a=0;a<r.length;++a)o[a]=r[a]?0:1;return this.makeOutput(o,n.shape,"bool")},t.prototype.logicalAnd=function(n,r){return j([n,r],"logicalAnd"),this.broadcastedBinaryOp(n,r,"bool",function(o,a){return o&&a})},t.prototype.logicalOr=function(n,r){return j([n,r],"logicalOr"),this.broadcastedBinaryOp(n,r,"bool",function(o,a){return o||a})},t.prototype.select=function(n,r,o){j([n,r,o],"select");for(var a=this.readSync(n.dataId),i=this.readSync(r.dataId),s=this.readSync(o.dataId),u=Te(r.shape,Je(r.dtype,o.dtype)),l=this.readSync(u.dataId),c=0,p=n.rank===0||n.rank>1||r.rank===1?1:Q(r.shape.slice(1)),d=0;d<a.length;d++)for(var f=0;f<p;f++)a[d]===1?l[c++]=i[d]:l[c++]=s[d];return u},t.prototype.where=function(n){j([n],"where");var r=this.readSync(n.dataId);return ad(n.shape,r)},t.prototype.topk=function(n,r,o){return j(n,"topk"),Cy(this.readSync(n.dataId),n.shape,n.dtype,r)},t.prototype.min=function(n,r){j(n,"min"),Rt("min",r,n.rank);for(var o=ot(n.shape,r),a=o[0],i=o[1],s=Te(a,n.dtype),u=Q(i),l=this.readSync(s.dataId),c=this.readSync(n.dataId),p=0;p<l.length;++p){for(var d=p*u,f=c[d],m=0;m<u;++m){var v=c[d+m];v<f&&(f=v)}l[p]=f}return s},t.prototype.minimum=function(n,r){return j([n,r],"minimum"),this.broadcastedBinaryOp(n,r,n.dtype,function(o,a){return Math.min(o,a)})},t.prototype.mod=function(n,r){return j([n,r],"mod"),this.broadcastedBinaryOp(n,r,n.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},t.prototype.max=function(n,r){j(n,"max"),Rt("max",r,n.rank);for(var o=ot(n.shape,r),a=o[0],i=o[1],s=Te(a,n.dtype),u=Q(i),l=this.readSync(s.dataId),c=this.readSync(n.dataId),p=0;p<l.length;++p){for(var d=p*u,f=c[d],m=0;m<u;++m){var v=c[d+m];v>f&&(f=v)}l[p]=f}return s},t.prototype.maximum=function(n,r){return j([n,r],"maximum"),this.broadcastedBinaryOp(n,r,n.dtype,function(o,a){return Math.max(o,a)})},t.prototype.all=function(n,r){j(n,"all"),Rt("all",r,n.rank);for(var o=ot(n.shape,r),a=o[0],i=o[1],s=Te(a,n.dtype),u=Q(i),l=this.readSync(s.dataId),c=this.readSync(n.dataId),p=0;p<l.length;++p){for(var d=p*u,f=c[d],m=0;m<u;++m){var v=c[d+m];f=f&&v}l[p]=f}return s},t.prototype.any=function(n,r){j(n,"any"),Rt("any",r,n.rank);for(var o=ot(n.shape,r),a=o[0],i=o[1],s=Te(a,n.dtype),u=Q(i),l=this.readSync(s.dataId),c=this.readSync(n.dataId),p=0;p<l.length;++p){for(var d=p*u,f=c[d],m=0;m<u;++m){var v=c[d+m];f=f||v}l[p]=f}return s},t.prototype.squaredDifference=function(n,r){return j([n,r],"squaredDifference"),this.broadcastedBinaryOp(n,r,n.dtype,function(o,a){var i=o-a;return i*i})},t.prototype.ceil=function(n){j(n,"ceil");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),a=0;a<r.length;++a)o[a]=Math.ceil(r[a]);return this.makeOutput(o,n.shape,"float32")},t.prototype.floor=function(n){j(n,"floor");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),a=0;a<r.length;++a)o[a]=Math.floor(r[a]);return this.makeOutput(o,n.shape,"float32")},t.prototype.sign=function(n){j(n,"x");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),a=0;a<r.length;++a)r[a]<0?o[a]=-1:r[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,n.shape,"float32")},t.prototype.isNaN=function(n){j(n,"x");for(var r=this.readSync(n.dataId),o=new Uint8Array(r.length),a=0;a<r.length;++a)Number.isNaN(r[a])&&(o[a]=1);return this.makeOutput(o,n.shape,"bool")},t.prototype.isInf=function(n){j(n,"x");for(var r=this.readSync(n.dataId),o=new Uint8Array(r.length),a=0;a<r.length;++a)Math.abs(r[a])===1/0&&(o[a]=1);return this.makeOutput(o,n.shape,"bool")},t.prototype.isFinite=function(n){j(n,"x");for(var r=this.readSync(n.dataId),o=new Uint8Array(r.length),a=0;a<r.length;++a)Number.isFinite(r[a])&&(o[a]=1);return this.makeOutput(o,n.shape,"bool")},t.prototype.round=function(n){j(n,"round");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),a=0;a<r.length;++a){var i=Math.floor(r[a]);r[a]-i<.5?o[a]=Math.floor(r[a]):r[a]-i>.5?o[a]=Math.ceil(r[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,n.shape,"float32")},t.prototype.exp=function(n){j(n,"exp");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),a=0;a<r.length;++a)o[a]=Math.exp(r[a]);return this.makeOutput(o,n.shape,"float32")},t.prototype.expm1=function(n){j(n,"expm1");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),a=0;a<r.length;++a)o[a]=Math.expm1(r[a]);return this.makeOutput(o,n.shape,"float32")},t.prototype.log=function(n){j(n,"log");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),a=0;a<r.length;++a){var i=r[a];o[a]=Math.log(i)}return this.makeOutput(o,n.shape,"float32")},t.prototype.log1p=function(n){j(n,"log1p");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),a=0;a<r.length;++a){var i=r[a];o[a]=Math.log1p(i)}return this.makeOutput(o,n.shape,"float32")},t.prototype.sqrt=function(n){j(n,"sqrt");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),a=0;a<r.length;++a){var i=r[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,n.shape,"float32")},t.prototype.rsqrt=function(n){j(n,"rsqrt");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),a=0;a<r.length;++a){var i=r[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,n.shape,"float32")},t.prototype.reciprocal=function(n){j(n,"reciprocal");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),a=0;a<r.length;++a)o[a]=1/r[a];return this.makeOutput(o,n.shape,"float32")},t.prototype.linear=function(n){return n},t.prototype.relu=function(n){j(n,"relu");for(var r=Te(n.shape,n.dtype),o=this.readSync(r.dataId),a=this.readSync(n.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return r},t.prototype.relu6=function(n){j(n,"relu");for(var r=Te(n.shape,n.dtype),o=this.readSync(r.dataId),a=this.readSync(n.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return r},t.prototype.prelu=function(n,r){return j([n,r],"prelu"),this.broadcastedBinaryOp(n,r,n.dtype,function(o,a){return o<0?a*o:o})},t.prototype.elu=function(n){j(n,"elu");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a){var i=o[a];r[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(r,n.shape,"float32")},t.prototype.eluDer=function(n,r){j([n,r],"eluDer");for(var o=new Float32Array(r.size),a=this.readSync(r.dataId),i=this.readSync(n.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,r.shape,"float32")},t.prototype.selu=function(n){j(n,"selu");for(var r=sd,o=ud,a=new Float32Array(n.size),i=this.readSync(n.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:r*(Math.exp(u)-1)}return this.makeOutput(a,n.shape,"float32")},t.prototype.clip=function(n,r,o){j(n,"clip");for(var a=new Float32Array(n.size),i=this.readSync(n.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<r?r:u}return this.makeOutput(a,n.shape,"float32")},t.prototype.abs=function(n){for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=Math.abs(o[a]);return this.makeOutput(r,n.shape,"float32")},t.prototype.complexAbs=function(n){for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<n.size;++a){var i=o[2*a],s=o[2*a+1];r[a]=Math.hypot(i,s)}return this.makeOutput(r,n.shape,"float32")},t.prototype.int=function(n){j(n,"int");for(var r=new Int32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=o[a];return this.makeOutput(r,n.shape,"int32")},t.prototype.sigmoid=function(n){j(n,"sigmoid");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(r,n.shape,"float32")},t.prototype.softplus=function(n){j(n,"softplus");for(var r=Math.log(11920928955078125e-23)+2,o=new Float32Array(n.size),a=this.readSync(n.dataId),i=0;i<a.length;++i){var s=a[i]>-r,u=a[i]<r,l=Math.exp(a[i]),c=void 0;c=u?l:s?a[i]:Math.log(1+l),o[i]=c}return this.makeOutput(o,n.shape,"float32")},t.prototype.sin=function(n){j(n,"sin");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=Math.sin(o[a]);return this.makeOutput(r,n.shape,"float32")},t.prototype.cos=function(n){j(n,"cos");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=Math.cos(o[a]);return this.makeOutput(r,n.shape,"float32")},t.prototype.tan=function(n){j(n,"tan");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=Math.tan(o[a]);return this.makeOutput(r,n.shape,"float32")},t.prototype.asin=function(n){j(n,"asin");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=Math.asin(o[a]);return this.makeOutput(r,n.shape,"float32")},t.prototype.acos=function(n){j(n,"acos");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=Math.acos(o[a]);return this.makeOutput(r,n.shape,"float32")},t.prototype.atan=function(n){j(n,"atan");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=Math.atan(o[a]);return this.makeOutput(r,n.shape,"float32")},t.prototype.atan2=function(n,r){return j([n,r],"atan2"),this.broadcastedBinaryOp(n,r,n.dtype,function(o,a){return Math.atan2(o,a)})},t.prototype.sinh=function(n){j(n,"sinh");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=Math.sinh(o[a]);return this.makeOutput(r,n.shape,"float32")},t.prototype.cosh=function(n){j(n,"cosh");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=Math.cosh(o[a]);return this.makeOutput(r,n.shape,"float32")},t.prototype.tanh=function(n){j(n,"tanh");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=ig(o[a]);return this.makeOutput(r,n.shape,"float32")},t.prototype.asinh=function(n){j(n,"asinh");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=Math.asinh(o[a]);return this.makeOutput(r,n.shape,"float32")},t.prototype.acosh=function(n){j(n,"acosh");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=Math.acosh(o[a]);return this.makeOutput(r,n.shape,"float32")},t.prototype.atanh=function(n){j(n,"atanh");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)r[a]=Math.atanh(o[a]);return this.makeOutput(r,n.shape,"float32")},t.prototype.erf=function(n){j(n,"erf");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);r[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(r,n.shape,"float32")},t.prototype.step=function(n,r){r===void 0&&(r=0),j(n,"step");for(var o=new Float32Array(n.size),a=this.readSync(n.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:r}return this.makeOutput(o,n.shape,"float32")},t.prototype.fusedConv2d=function(n){var r=n.input,o=n.filter,a=n.convInfo,i=n.bias,s=n.activation,u=n.preluActivationWeights,l=this.conv2d(r,o,a);return i&&(l=this.add(l,i)),s&&(l=gl(this,l,s,u)),l},t.prototype.conv2d=function(n,r,o){j([n,r],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,l=o.padInfo.left,c=o.padInfo.top,p=o.dataFormat==="channelsLast",d=ae(o.outShape,n.dtype),f=n.strides[0],m=p?n.strides[1]:n.strides[2],v=p?n.strides[2]:1,y=p?1:n.strides[1],h=d.strides[0],g=p?d.strides[1]:d.strides[2],x=p?d.strides[2]:1,w=p?1:d.strides[1],b=this.readSync(n.dataId),S=this.readSync(r.dataId),k=d.values,N=0;N<o.batchSize;++N)for(var R=N*f,T=N*h,D=0;D<o.outHeight;++D)for(var F=T+D*g,U=D*o.strideHeight-c,W=0;W<a;W++){var V=U+W*s;if(!(V<0||V>=o.inHeight))for(var $=W*r.strides[0],H=R+V*m,O=0;O<o.outWidth;++O)for(var P=F+O*x,L=O*o.strideWidth-l,q=0;q<i;q++){var K=L+q*u;if(!(K<0||K>=o.inWidth))for(var te=H+K*v,ne=$+q*r.strides[1],ie=0;ie<o.inChannels;++ie){for(var oe=b[te+ie*y],ue=0;ue<o.outChannels;++ue)k[P+ue*w]+=oe*S[ne+ue];ne+=o.outChannels}}}return d.toTensor()},t.prototype.conv3d=function(n,r,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,l=o.dilationHeight,c=o.dilationWidth,p=o.padInfo.front,d=o.padInfo.left,f=o.padInfo.top,m=ae(o.outShape,n.dtype),v=this.readSync(n.dataId),y=this.readSync(r.dataId),h=m.values,g=0;g<o.batchSize;++g)for(var x=g*n.strides[0],w=g*m.strides[0],b=0;b<o.outDepth;++b)for(var S=w+b*m.strides[1],k=b*o.strideDepth-p,N=0;N<a;N++){var R=k+N*u;if(!(R<0||R>=o.inDepth))for(var T=N*r.strides[0],D=x+R*n.strides[1],F=0;F<o.outHeight;++F)for(var U=S+F*m.strides[2],W=F*o.strideHeight-f,V=0;V<i;V++){var $=W+V*l;if(!($<0||$>=o.inHeight))for(var H=T+V*r.strides[1],O=D+$*n.strides[2],P=0;P<o.outWidth;++P)for(var L=U+P*o.outChannels,q=P*o.strideWidth-d,K=0;K<s;K++){var te=q+K*c;if(!(te<0||te>=o.inWidth))for(var ne=H+K*r.strides[2],ie=O+te*o.inChannels,oe=ne,ue=0;ue<o.inChannels;++ue){for(var de=v[ie+ue],ve=0;ve<o.outChannels;++ve)h[L+ve]+=de*y[oe+ve];oe+=o.outChannels}}}}return m.toTensor()},t.prototype.conv2dDerInput=function(n,r,o){j([n,r],"conv2dDerInput");for(var a=ae(o.inShape,"float32"),i=a.values,s=this.readSync(n.dataId),u=this.readSync(r.dataId),l=r.strides,c=l[0],p=l[1],d=l[2],f=o.batchSize,m=o.filterHeight,v=o.filterWidth,y=o.inChannels,h=o.inHeight,g=o.inWidth,x=o.outChannels,w=o.outHeight,b=o.outWidth,S=o.strideHeight,k=o.strideWidth,N=o.dataFormat,R=m-1-o.padInfo.top,T=v-1-o.padInfo.left,D=N==="channelsLast",F=a.strides[0],U=D?a.strides[1]:a.strides[2],W=D?a.strides[2]:1,V=D?1:a.strides[1],$=n.strides[0],H=D?n.strides[1]:n.strides[2],O=D?n.strides[2]:1,P=D?1:n.strides[1],L=0;L<f;++L)for(var q=0;q<y;++q)for(var K=0;K<h;++K)for(var te=K-R,ne=Math.max(0,Math.ceil(te/S)),ie=Math.min(w,(m+te)/S),oe=0;oe<g;++oe){for(var ue=oe-T,de=Math.max(0,Math.ceil(ue/k)),ve=Math.min(b,(v+ue)/k),ze=0,fe=ne;fe<ie;++fe)for(var be=fe*S-te,ye=de;ye<ve;++ye)for(var Me=$*L+H*fe+O*ye,Ie=c*(m-1-be)+p*(v-1-(ye*k-ue))+d*q,Re=0;Re<x;++Re)ze+=s[Me+P*Re]*u[Ie+Re];i[F*L+U*K+W*oe+V*q]=ze}return a.toTensor()},t.prototype.conv3dDerInput=function(n,r,o){for(var a=ae(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],l=s[1],c=s[2],p=s[3],d=this.readSync(n.dataId),f=n.strides,m=f[0],v=f[1],y=f[2],h=f[3],g=this.readSync(r.dataId),x=r.strides,w=x[0],b=x[1],S=x[2],k=x[3],N=o.batchSize,R=o.filterDepth,T=o.filterHeight,D=o.filterWidth,F=o.inChannels,U=o.inDepth,W=o.inHeight,V=o.inWidth,$=o.outChannels,H=o.outDepth,O=o.outHeight,P=o.outWidth,L=o.strideDepth,q=o.strideHeight,K=o.strideWidth,te=R-1-o.padInfo.front,ne=T-1-o.padInfo.top,ie=D-1-o.padInfo.left,oe=0;oe<N;++oe)for(var ue=0;ue<F;++ue)for(var de=0;de<U;++de)for(var ve=de-te,ze=Math.max(0,Math.ceil(ve/L)),fe=Math.min(H,(R+ve)/L),be=0;be<W;++be)for(var ye=be-ne,Me=Math.max(0,Math.ceil(ye/q)),Ie=Math.min(O,(T+ye)/q),Re=0;Re<V;++Re){for(var sn=Re-ie,un=Math.max(0,Math.ceil(sn/K)),Nt=Math.min(P,(D+sn)/K),no=0,Cn=ze;Cn<fe;++Cn)for(var Gn=Cn*L-ve,Sn=Me;Sn<Ie;++Sn)for(var ro=Sn*q-ye,En=un;En<Nt;++En)for(var Eu=m*oe+v*Cn+y*Sn+h*En,oo=w*(R-1-Gn)+b*(T-1-ro)+S*(D-1-(En*K-sn))+k*ue,ln=0;ln<$;++ln)no+=d[Eu+ln]*g[oo+ln];i[u*oe+l*de+c*be+p*Re+ue]=no}return a.toTensor()},t.prototype.conv2dDerFilter=function(n,r,o){j([n,r],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,l=o.dataFormat==="channelsLast",c=ae(o.filterShape,"float32"),p=o.padInfo.left,d=o.padInfo.top,f=this.bufferSync(n),m=this.bufferSync(r),v=0;v<s;++v)for(var y=Math.max(0,Math.ceil((d-v)/a)),h=Math.min(o.outHeight,(o.inHeight+d-v)/a),g=0;g<u;++g)for(var x=Math.max(0,Math.ceil((p-g)/i)),w=Math.min(o.outWidth,(o.inWidth+p-g)/i),b=0;b<o.inChannels;++b)for(var S=0;S<o.outChannels;++S){for(var k=0,N=0;N<o.batchSize;++N)for(var R=y;R<h;++R)for(var T=v+R*a-d,D=x;D<w;++D){var F=g+D*i-p;k+=l?f.get(N,T,F,b)*m.get(N,R,D,S):f.get(N,b,T,F)*m.get(N,S,R,D)}c.set(k,v,g,b,S)}return c.toTensor()},t.prototype.conv3dDerFilter=function(n,r,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,l=o.filterHeight,c=o.filterWidth,p=ae(o.filterShape,"float32"),d=p.values,f=p.strides,m=f[0],v=f[1],y=f[2],h=f[3],g=this.readSync(r.dataId),x=r.strides,w=x[0],b=x[1],S=x[2],k=x[3],N=this.readSync(n.dataId),R=n.strides,T=R[0],D=R[1],F=R[2],U=R[3],W=o.padInfo.front,V=o.padInfo.left,$=o.padInfo.top,H=0;H<u;++H)for(var O=Math.max(0,Math.ceil((W-H)/a)),P=Math.min(o.outDepth,(o.inDepth+W-H)/a),L=H*m,q=0;q<l;++q)for(var K=Math.max(0,Math.ceil(($-q)/i)),te=Math.min(o.outHeight,(o.inHeight+$-q)/i),ne=q*v+L,ie=0;ie<c;++ie)for(var oe=Math.max(0,Math.ceil((V-ie)/s)),ue=Math.min(o.outWidth,(o.inWidth+V-ie)/s),de=ie*y+ne,ve=0;ve<o.inChannels;++ve)for(var ze=ve*h+de,fe=0;fe<o.outChannels;++fe){for(var be=0,ye=0;ye<o.batchSize;++ye)for(var Me=ye*T,Ie=ye*w,Re=O;Re<P;++Re)for(var sn=(H+Re*a-W)*D+Me,un=Re*b+Ie,Nt=K;Nt<te;++Nt)for(var no=(q+Nt*i-$)*F+sn,Cn=Nt*S+un,Gn=oe;Gn<ue;++Gn){var Sn=Gn*k+Cn;be+=N[(ie+Gn*s-V)*U+no+ve]*g[Sn+fe]}d[ze+fe]=be}return p.toTensor()},t.prototype.fusedDepthwiseConv2D=function(n){var r=n.input,o=n.filter,a=n.convInfo,i=n.bias,s=n.activation,u=n.preluActivationWeights,l=this.depthwiseConv2D(r,o,a);return i&&(l=this.add(l,i)),s&&(l=gl(this,l,s,u)),l},t.prototype.depthwiseConv2D=function(n,r,o){j([n,r],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,l=o.padInfo.left,c=o.padInfo.top,p=o.outChannels/o.inChannels,d=ae(o.outShape,n.dtype),f=this.readSync(n.dataId),m=this.readSync(r.dataId),v=d.values,y=0;y<o.batchSize;++y)for(var h=y*n.strides[0],g=y*d.strides[0],x=0;x<o.outHeight;++x)for(var w=g+x*d.strides[1],b=x*o.strideHeight-l,S=0;S<a;++S){var k=b+S*s;if(!(k<0||k>=o.inHeight))for(var N=S*r.strides[0],R=h+k*n.strides[1],T=0;T<o.outWidth;++T)for(var D=w+T*d.strides[2],F=T*o.strideWidth-c,U=0;U<i;++U){var W=F+U*u;if(!(W<0||W>=o.inWidth))for(var V=N+U*r.strides[1],$=R+W*o.inChannels,H=D,O=V,P=0;P<o.inChannels;++P){for(var L=f[$+P],q=0;q<p;++q)v[H+q]+=L*m[O+q];H+=p,O+=p}}}return d.toTensor()},t.prototype.depthwiseConv2DDerInput=function(n,r,o){j([n,r],"depthwiseConv2DDerInput");for(var a=ae(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],l=s[1],c=s[2],p=this.readSync(n.dataId),d=n.strides,f=d[0],m=d[1],v=d[2],y=this.readSync(r.dataId),h=r.strides,g=h[0],x=h[1],w=h[2],b=o.batchSize,S=o.filterHeight,k=o.filterWidth,N=o.inChannels,R=o.inHeight,T=o.inWidth,D=o.outChannels,F=o.outHeight,U=o.outWidth,W=o.strideHeight,V=o.strideWidth,$=S-1-o.padInfo.top,H=k-1-o.padInfo.left,O=D/N,P=0;P<b;++P)for(var L=0;L<N;++L)for(var q=0;q<R;++q)for(var K=q-$,te=Math.max(0,Math.ceil(K/W)),ne=Math.min(F,(S+K)/W),ie=0;ie<T;++ie){for(var oe=ie-H,ue=Math.max(0,Math.ceil(oe/V)),de=Math.min(U,(k+oe)/V),ve=0,ze=te;ze<ne;++ze)for(var fe=ze*W-K,be=ue;be<de;++be)for(var ye=f*P+m*ze+v*be,Me=g*(S-1-fe)+x*(k-1-(be*V-oe))+w*L,Ie=0;Ie<O;++Ie)ve+=p[ye+(L*O+Ie)]*y[Me+Ie];i[u*P+l*q+c*ie+L]=ve}return a.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(n,r,o){j([n,r],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,l=ae(o.filterShape,"float32"),c=o.padInfo.left,p=o.padInfo.top,d=o.outChannels/o.inChannels,f=this.bufferSync(n),m=this.bufferSync(r),v=0;v<s;++v)for(var y=Math.max(0,Math.ceil((p-v)/a)),h=Math.min(o.outHeight,(o.inHeight+p-v)/a),g=0;g<u;++g)for(var x=Math.max(0,Math.ceil((c-g)/i)),w=Math.min(o.outWidth,(o.inWidth+c-g)/i),b=0;b<o.outChannels;++b){for(var S=Math.trunc(b/d),k=b%d,N=0,R=0;R<o.batchSize;++R)for(var T=y;T<h;++T)for(var D=v+T*a-p,F=x;F<w;++F){var U=g+F*i-c;N+=f.get(R,D,U,S)*m.get(R,T,F,b)}l.set(N,v,g,S,k)}return l.toTensor()},t.prototype.tile=function(n,r){return j(n,"tile"),by(this.bufferSync(n),r)},t.prototype.pad=function(n,r,o){j(n,"pad");var a=r.map(function(d,f){return d[0]+n.shape[f]+d[1]}),i=r.map(function(d){return d[0]}),s=this.bufferSync(n),u=ae(a,n.dtype);o!==0&&u.values.fill(o);for(var l=0;l<n.size;l++){var c=s.indexToLoc(l),p=c.map(function(d,f){return d+i[f]});u.set.apply(u,[s.get.apply(s,c)].concat(p))}return u.toTensor()},t.prototype.gather=function(n,r,o){j([n,r],"gather");var a=n.shape.slice(),i=this.readSync(r.dataId);a[o]=i.length;for(var s=ae(a,n.dtype),u=this.bufferSync(n),l=0;l<s.size;++l){var c=s.indexToLoc(l),p=c.slice();p[o]=i[c[o]];var d=u.locToIndex(p);s.values[l]=u.values[d]}return s.toTensor()},t.prototype.batchToSpaceND=function(n,r,o){j([n],"batchToSpaceND");var a=r.reduce(function(p,d){return p*d}),i=Ms(n.shape,r,a),s=Ps(i.length,r.length),u=Ls(n.shape,r,a),l=kg(o,r.length),c=Ig(u,o,r.length);return Vt(n.reshape(i),s).reshape(u).slice(l,c)},t.prototype.spaceToBatchND=function(n,r,o){j([n],"spaceToBatchND");var a=r.reduce(function(d,f){return d*f}),i=[[0,0]];i.push.apply(i,o);for(var s=1+r.length;s<n.shape.length;++s)i.push([0,0]);var u=n.pad(i),l=Ms(u.shape,r,a,!1),c=Ps(l.length,r.length,!1),p=Ls(u.shape,r,a,!1);return Vt(u.reshape(l),c).reshape(p)},t.prototype.maxPool=function(n,r){return j(n,"maxPool"),Rc(this.readSync(n.dataId),n.shape,n.dtype,n.strides,r,"max").toTensor()},t.prototype.maxPoolBackprop=function(n,r,o,a){j([r,o],"maxPoolBackprop");for(var i=this.readSync(r.dataId),s=ae(a.outShape,r.dtype,_0(i,r.shape,r.dtype,a).values),u=a.strideHeight,l=a.strideWidth,c=a.dilationHeight,p=a.dilationWidth,d=a.effectiveFilterHeight,f=a.effectiveFilterWidth,m=f-1-a.padInfo.left,v=d-1-a.padInfo.top,y=ae(r.shape,"float32"),h=this.bufferSync(n),g=0;g<a.batchSize;++g)for(var x=0;x<a.inChannels;++x)for(var w=0;w<a.inHeight;++w)for(var b=0;b<a.inWidth;++b){for(var S=w-v,k=b-m,N=0,R=0;R<d;R+=c){var T=(S+R)/u;if(!(T<0||T>=a.outHeight||Math.floor(T)!==T))for(var D=0;D<f;D+=p){var F=(k+D)/l;if(!(F<0||F>=a.outWidth||Math.floor(F)!==F)){var U=d*f-1-s.get(g,T,F,x)===R*f+D?1:0;U!==0&&(N+=h.get(g,T,F,x)*U)}}}y.set(N,g,w,b,x)}return y.toTensor()},t.prototype.avgPoolBackprop=function(n,r,o){j([n,r],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,l=o.dilationHeight,c=o.dilationWidth,p=o.effectiveFilterHeight,d=o.effectiveFilterWidth,f=d-1-o.padInfo.left,m=p-1-o.padInfo.top,v=ae(r.shape,"float32"),y=1/(s*u),h=this.bufferSync(n),g=0;g<o.batchSize;++g)for(var x=0;x<o.inChannels;++x)for(var w=0;w<o.inHeight;++w)for(var b=0;b<o.inWidth;++b){for(var S=w-m,k=b-f,N=0,R=0;R<p;R+=l){var T=(S+R)/a;if(!(T<0||T>=o.outHeight||Math.floor(T)!==T))for(var D=0;D<d;D+=c){var F=(k+D)/i;F<0||F>=o.outWidth||Math.floor(F)!==F||(N+=h.get(g,T,F,x))}}v.set(N*y,g,w,b,x)}return v.toTensor()},t.prototype.pool3d=function(n,r,o){j(n,"pool3d");for(var a=r.strideDepth,i=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,l=r.dilationHeight,c=r.dilationWidth,p=r.effectiveFilterDepth,d=r.effectiveFilterHeight,f=r.effectiveFilterWidth,m=r.padInfo.front,v=r.padInfo.top,y=r.padInfo.left,h=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,g=this.readSync(n.dataId),x=ae(r.outShape,n.dtype),w=x.values,b=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],S=r.outShape[2]*r.outShape[3]*r.outShape[4],k=r.outShape[3]*r.outShape[4],N=r.outShape[4],R=0;R<r.batchSize;++R)for(var T=R*b,D=R*n.strides[0],F=0;F<r.inChannels;++F)for(var U=0;U<r.outDepth;++U){for(var W=U*a-m,V=W;V<0;)V+=u;for(var $=Math.min(r.inDepth,p+W),H=T+U*S,O=0;O<r.outHeight;++O){for(var P=O*i-v,L=P;L<0;)L+=l;for(var q=Math.min(r.inHeight,d+P),K=H+O*k,te=0;te<r.outWidth;++te){for(var ne=te*s-y,ie=ne;ie<0;)ie+=c;for(var oe=Math.min(r.inWidth,f+ne),ue=K+te*N,de=h,ve=0,ze=0,fe=V;fe<$;fe+=u){for(var be=D+fe*n.strides[1],ye=L;ye<q;ye+=l){for(var Me=be+ye*n.strides[2],Ie=ie;Ie<oe;Ie+=c){var Re=g[Me+Ie*n.strides[3]+F];if(o==="max"&&Re>de?de=Re:o==="avg"&&(ve+=Re,ze++),isNaN(de))break}if(isNaN(de))break}if(isNaN(de))break}w[ue+F]=o==="avg"?ve/ze:de}}}return x.toTensor()},t.prototype.avgPool3d=function(n,r){return j(n,"avgPool3d"),this.pool3d(n,r,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(n,r,o){j([n,r],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,l=o.filterHeight,c=o.filterWidth,p=o.dilationDepth,d=o.dilationHeight,f=o.dilationWidth,m=o.effectiveFilterDepth,v=o.effectiveFilterHeight,y=o.effectiveFilterWidth,h=m-1-o.padInfo.front,g=y-1-o.padInfo.left,x=v-1-o.padInfo.top,w=ae(r.shape,"float32"),b=1/(u*l*c),S=this.bufferSync(n),k=0;k<o.batchSize;++k)for(var N=0;N<o.inChannels;++N)for(var R=0;R<o.inDepth;++R)for(var T=0;T<o.inHeight;++T)for(var D=0;D<o.inWidth;++D){for(var F=R-h,U=T-x,W=D-g,V=0,$=0;$<m;$+=p){var H=(F+$)/a;if(!(H<0||H>=o.outDepth||Math.floor(H)!==H))for(var O=0;O<v;O+=d){var P=(U+O)/i;if(!(P<0||P>=o.outHeight||Math.floor(P)!==P))for(var L=0;L<y;L+=f){var q=(W+L)/s;q<0||q>=o.outWidth||Math.floor(q)!==q||(V+=S.get(k,H,P,q,N))}}}w.set(V*b,k,R,T,D,N)}return w.toTensor()},t.prototype.maxPool3d=function(n,r){return j(n,"maxPool3d"),this.pool3d(n,r,"max").toFloat()},t.prototype.maxPool3dPositions=function(n,r){for(var o=ae(r.outShape,"int32"),a=r.strideDepth,i=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,l=r.dilationHeight,c=r.dilationWidth,p=r.effectiveFilterDepth,d=r.effectiveFilterHeight,f=r.effectiveFilterWidth,m=r.padInfo.front,v=r.padInfo.top,y=r.padInfo.left,h=this.bufferSync(n),g=0;g<r.batchSize;++g)for(var x=0;x<r.inChannels;++x)for(var w=0;w<r.outDepth;++w){for(var b=w*a-m,S=b;S<0;)S+=u;for(var k=Math.min(r.inDepth,p+b),N=0;N<r.outHeight;++N){for(var R=N*i-v,T=R;T<0;)T+=l;for(var D=Math.min(r.inHeight,d+R),F=0;F<r.outWidth;++F){for(var U=F*s-y,W=U;W<0;)W+=c;for(var V=Math.min(r.inWidth,f+U),$=Number.NEGATIVE_INFINITY,H=-1,O=S;O<k;O+=u)for(var P=O-b,L=T;L<D;L+=l)for(var q=L-R,K=W;K<V;K+=c){var te=K-U,ne=h.get(g,O,L,K,x);ne>=$&&($=ne,H=P*d*f+q*d+te)}o.set(H,g,w,N,F,x)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(n,r,o,a){j([r,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(r,a),s=a.strideDepth,u=a.strideHeight,l=a.strideWidth,c=a.dilationDepth,p=a.dilationHeight,d=a.dilationWidth,f=a.effectiveFilterDepth,m=a.effectiveFilterHeight,v=a.effectiveFilterWidth,y=f-1-a.padInfo.front,h=v-1-a.padInfo.left,g=m-1-a.padInfo.top,x=ae(r.shape,"float32"),w=this.bufferSync(i),b=this.bufferSync(n),S=0;S<a.batchSize;++S)for(var k=0;k<a.inChannels;++k)for(var N=0;N<a.inDepth;++N)for(var R=0;R<a.inHeight;++R)for(var T=0;T<a.inWidth;++T){for(var D=N-y,F=R-g,U=T-h,W=0,V=0;V<f;V+=c){var $=(D+V)/s;if(!($<0||$>=a.outDepth||Math.floor($)!==$))for(var H=0;H<m;H+=p){var O=(F+H)/u;if(!(O<0||O>=a.outHeight||Math.floor(O)!==O))for(var P=0;P<v;P+=d){var L=(U+P)/l;if(!(L<0||L>=a.outWidth||Math.floor(L)!==L)){var q=f*m*v-1-w.get(S,$,O,L,k)===V*m*v+H*v+P?1:0;q!==0&&(W+=b.get(S,$,O,L,k)*q)}}}}x.set(W,S,N,R,T,k)}return x.toTensor()},t.prototype.cast=function(n,r){return gy(n,r,this)},t.prototype.reshape=function(n,r){return kc(n,r)},t.prototype.avgPool=function(n,r){return j(n,"avgPool"),j(n,"maxPool"),Rc(this.readSync(n.dataId),n.shape,n.dtype,n.strides,r,"avg").toTensor().toFloat()},t.prototype.resizeBilinear=function(n,r,o,a){j(n,"resizeBilinear");for(var i=n.shape,s=i[0],u=i[1],l=i[2],c=i[3],p=this.readSync(n.dataId),d=new Float32Array(Q([s,r,o,c])),f=[a&&r>1?u-1:u,a&&o>1?l-1:l],m=[a&&r>1?r-1:r,a&&o>1?o-1:o],v=0,y=f[0]/m[0],h=f[1]/m[1],g=0;g<s;g++)for(var x=0;x<r;x++)for(var w=y*x,b=Math.floor(w),S=w-b,k=Math.min(u-1,Math.ceil(w)),N=g*n.strides[0]+b*n.strides[1],R=g*n.strides[0]+k*n.strides[1],T=0;T<o;T++)for(var D=h*T,F=Math.floor(D),U=D-F,W=Math.min(l-1,Math.ceil(D)),V=N+F*n.strides[2],$=R+F*n.strides[2],H=N+W*n.strides[2],O=R+W*n.strides[2],P=0;P<c;P++){var L=p[V+P],q=p[$+P],K=L+(p[H+P]-L)*U,te=K+(q+(p[O+P]-q)*U-K)*S;d[v++]=te}return Ye(d,[s,r,o,c])},t.prototype.resizeBilinearBackprop=function(n,r,o){j([n,r],"resizeBilinearBackprop");for(var a=r.shape,i=a[0],s=a[1],u=a[2],l=a[3],c=n.shape,p=c[1],d=c[2],f=new Float32Array(i*s*u*l),m=[o&&p>1?s-1:s,o&&d>1?u-1:u],v=[o&&p>1?p-1:p,o&&d>1?d-1:d],y=m[0]/v[0],h=m[1]/v[1],g=this.readSync(n.dataId),x=0,w=0;w<i;w++)for(var b=w*r.strides[0],S=0;S<p;S++)for(var k=S*y,N=Math.floor(k),R=Math.min(Math.ceil(k),s-1),T=b+N*r.strides[1],D=b+R*r.strides[1],F=k-N,U=1-F,W=0;W<d;W++)for(var V=W*h,$=Math.floor(V),H=Math.min(Math.ceil(V),u-1),O=V-$,P=1-O,L=T+$*r.strides[2],q=T+H*r.strides[2],K=D+$*r.strides[2],te=D+H*r.strides[2],ne=U*P,ie=U*O,oe=F*P,ue=F*O,de=0;de<l;de++){var ve=g[x++];f[L+de]+=ve*ne,f[q+de]+=ve*ie,f[K+de]+=ve*oe,f[te+de]+=ve*ue}return Rr(f,[i,u,s,l],r.dtype)},t.prototype.resizeNearestNeighbor=function(n,r,o,a){j(n,"resizeNearestNeighbor");for(var i=n.shape,s=i[0],u=i[1],l=i[2],c=i[3],p=this.readSync(n.dataId),d=new Float32Array(s*r*o*c),f=[a&&r>1?u-1:u,a&&o>1?l-1:l],m=[a&&r>1?r-1:r,a&&o>1?o-1:o],v=f[0]/m[0],y=f[1]/m[1],h=0,g=0;g<s;g++)for(var x=g*n.strides[0],w=0;w<r;w++)for(var b=v*w,S=x+Math.min(u-1,a?Math.round(b):Math.floor(b))*n.strides[1],k=0;k<o;k++)for(var N=y*k,R=S+Math.min(l-1,a?Math.round(N):Math.floor(N))*n.strides[2],T=0;T<c;T++){var D=p[R+T];d[h++]=D}return Ye(d,[s,r,o,c],n.dtype)},t.prototype.resizeNearestNeighborBackprop=function(n,r,o){j([n,r],"resizeNearestNeighborBackprop");for(var a=r.shape,i=a[0],s=a[1],u=a[2],l=a[3],c=n.shape,p=c[1],d=c[2],f=new Float32Array(i*s*u*l),m=this.readSync(n.dataId),v=[o&&p>1?s-1:s,o&&d>1?u-1:u],y=[o&&p>1?p-1:p,o&&d>1?d-1:d],h=v[0]/y[0],g=v[1]/y[1],x=1/h,w=1/g,b=2*Math.ceil(x)+2,S=2*Math.ceil(w)+2,k=0;k<i;k++)for(var N=k*r.strides[0],R=0;R<s;R++)for(var T=N+R*r.strides[1],D=Math.floor(R*x),F=Math.floor(D-b/2),U=0;U<u;U++)for(var W=T+U*r.strides[2],V=Math.floor(U*w),$=Math.floor(V-S/2),H=0;H<l;H++){for(var O=0,P=0;P<b;P++){var L=P+F;if(!(L<0||L>=p)){var q=N+L*n.strides[1],K=L*h;if(R===Math.min(s-1,o?Math.round(K):Math.floor(K)))for(var te=0;te<S;te++){var ne=te+$;if(!(ne<0||ne>=d)){var ie=q+ne*n.strides[2],oe=ne*g;U===Math.min(u-1,o?Math.round(oe):Math.floor(oe))&&(O+=m[ie+H])}}}}f[W+H]=O}return Rr(f,r.shape,r.dtype)},t.prototype.batchNormalization=function(n,r,o,a,i,s){j([n,r,o,i,s],"batchNorm");for(var u=this.readSync(n.dataId),l=this.readSync(r.dataId),c=this.readSync(o.dataId),p=i?this.readSync(i.dataId):new Float32Array([1]),d=s?this.readSync(s.dataId):new Float32Array([0]),f=new Float32Array(u.length),m=d.length,v=p.length,y=c.length,h=l.length,g=0,x=0,w=0,b=0,S=0;S<u.length;++S)f[S]=d[g++]+(u[S]-l[x++])*p[w++]/Math.sqrt(c[b++]+a),g>=m&&(g=0),x>=h&&(x=0),w>=v&&(w=0),b>=y&&(b=0);return Rr(f,n.shape)},t.prototype.localResponseNormalization4D=function(n,r,o,a,i){j(n,"localResponseNormalization4D");var s=n.shape[3],u=s-1,l=this.readSync(n.dataId),c=n.size,p=new Float32Array(c);function d(y){for(var h=y%s,g=y-h+Math.max(0,h-r),x=y-h+Math.min(h+r,u),w=0;g<=x;g++){var b=l[g];w+=b*b}return w}for(var f=0;f<c;f++){var m=d(f),v=l[f]*Math.pow(o+a*m,-i);p[f]=v}return Rr(p,n.shape)},t.prototype.LRNGrad=function(n,r,o,a,i,s,u){j(n,"LRNGrad");for(var l=n.shape[3],c=this.readSync(n.dataId),p=this.readSync(r.dataId),d=this.readSync(o.dataId),f=new Float32Array(n.size),m=n.size,v=0;v<m;v++){for(var y=v%l,h=v-y+Math.max(0,y-a),g=v-y+Math.min(l,y+a+1),x=0,w=h;w<g;w++)x+=Math.pow(p[w],2);for(x=s*x+i,w=h;w<g;w++){var b=-2*s*u*p[w]*d[v]/x;v===w&&(b+=Math.pow(x,-u)),b*=c[v],f[w]+=b}}return Rr(f,n.shape)},t.prototype.multinomial=function(n,r,o,a){j(n,"multinomial");for(var i=r?n:vu(n),s=i.shape[0],u=i.shape[1],l=Te([s,o],"int32"),c=this.readSync(l.dataId),p=this.readSync(i.dataId),d=0;d<s;++d){var f=d*u,m=new Float32Array(u-1);m[0]=p[f];for(var v=1;v<m.length;++v)m[v]=m[v-1]+p[f+v];for(var y=gu(a.toString()),h=d*o,g=0;g<o;++g){var x=y();c[h+g]=m.length;for(var w=0;w<m.length;w++)if(x<m[w]){c[h+g]=w;break}}}return l},t.prototype.oneHot=function(n,r,o,a){j(n,"oneHot");var i=new Float32Array(n.size*r);i.fill(a);for(var s=this.readSync(n.dataId),u=0;u<n.size;++u)s[u]>=0&&s[u]<r&&(i[u*r+s[u]]=o);return Br(i,[n.size,r],"int32")},t.prototype.nonMaxSuppression=function(n,r,o,a,i){return j(n,"nonMaxSuppression"),rd(this.readSync(n.dataId),this.readSync(r.dataId),o,a,i)},t.prototype.fft=function(n){return this.fftBatch(n,!1)},t.prototype.ifft=function(n){return this.fftBatch(n,!0)},t.prototype.fftBatch=function(n,r){for(var o=n.shape[0],a=n.shape[1],i=ae(n.shape,"float32"),s=ae(n.shape,"float32"),u=At(n).as2D(o,a),l=Jt(n).as2D(o,a),c=0;c<o;c++)for(var p=u.slice([c,0],[1,a]),d=l.slice([c,0],[1,a]),f=Ke(p,d),m=this.readSync(this.fftImpl(f,r).dataId),v=0;v<a;v++){var y=eh(m,v);i.values[c*a+v]=y.real,s.values[c*a+v]=y.imag}return Ke(i.toTensor(),s.toTensor()).as2D(o,a)},t.prototype.fftImpl=function(n,r){var o=n.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,r).as2D(n.shape[0],n.shape[1]);return r&&(i=Ke(At(i).div(X(a)),Jt(i).div(X(a)))),i}var s=this.readSync(n.dataId),u=function(l){for(var c=new Float32Array(l.length/2),p=new Float32Array(l.length/2),d=0;d<l.length;d+=2)c[d/2]=l[d],p[d/2]=l[d+1];return{real:c,imag:p}}(this.fourierTransformByMatmul(s,a,r));return Ke(u.real,u.imag).as2D(n.shape[0],n.shape[1])},t.prototype.isExponentOf2=function(n){return(n&n-1)==0},t.prototype.fftRadix2=function(n,r,o){if(r===1)return n;var a=this.readSync(n.dataId),i=r/2,s=function(h){for(var g=Math.ceil(h.length/4),x=new Float32Array(g),w=new Float32Array(g),b=0;b<h.length;b+=4)x[Math.floor(b/4)]=h[b],w[Math.floor(b/4)]=h[b+1];return{real:x,imag:w}}(a),u=Ke(s.real,s.imag).as1D(),l=function(h){for(var g=Math.floor(h.length/4),x=new Float32Array(g),w=new Float32Array(g),b=2;b<h.length;b+=4)x[Math.floor(b/4)]=h[b],w[Math.floor(b/4)]=h[b+1];return{real:x,imag:w}}(a),c=Ke(l.real,l.imag).as1D();u=this.fftRadix2(u,i,o),c=this.fftRadix2(c,i,o);var p=function(h,g){for(var x=new Float32Array(h/2),w=new Float32Array(h/2),b=0;b<Math.ceil(h/2);b++){var S=(g?2:-2)*Math.PI*(b/h);x[b]=Math.cos(S),w[b]=Math.sin(S)}return{real:x,imag:w}}(r,o),d=Ke(p.real,p.imag).mul(c),f=u.add(d),m=u.sub(d),v=At(f).concat(At(m)),y=Jt(f).concat(Jt(m));return Ke(v,y).as1D()},t.prototype.fourierTransformByMatmul=function(n,r,o){for(var a=new Float32Array(2*r),i=0;i<r;i++){for(var s=0,u=0,l=0;l<r;l++){var c=Kb(i*l,r,o),p=eh(n,l);s+=p.real*c.real-p.imag*c.imag,u+=p.real*c.imag+p.imag*c.real}o&&(s/=r,u/=r),qb(a,s,u,i)}return a},t.prototype.depthToSpace=function(n,r,o){I(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),I(r>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+r});for(var a=n.shape[0],i=n.shape[1],s=n.shape[2],u=n.shape[3],l=i*r,c=s*r,p=u/(r*r),d=this.readSync(n.dataId),f=new Float32Array(a*l*c*p),m=0,v=0;v<a;++v)for(var y=0;y<l;++y)for(var h=Math.floor(y/r),g=y%r,x=0;x<c;++x)for(var w=Math.floor(x/r),b=(g*r+x%r)*p,S=0;S<p;++S){var k=S+b+u*(w+s*(h+i*v));f[m++]=d[k]}return Rr(f,[a,l,c,p])},t.prototype.broadcastedBinaryOp=function(n,r,o,a){var i=ce(n.shape,r.shape),s=ae(i,o),u=this.readSync(n.dataId),l=this.readSync(r.dataId),c=tr(n.shape,i),p=tr(r.shape,i),d=s.values;if(c.length+p.length===0)for(var f=0;f<d.length;++f)d[f]=a(u[f%u.length],l[f%l.length]);else{var m=this.bufferSync(n),v=this.bufferSync(r),y=function(h){var g=s.indexToLoc(h),x=g.slice(-n.rank);c.forEach(function(k){return x[k]=0});var w=m.locToIndex(x),b=g.slice(-r.rank);p.forEach(function(k){return b[k]=0});var S=v.locToIndex(b);d[h]=a(u[w],l[S])};for(f=0;f<d.length;++f)y(f)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(n,r,o){var a=ce(n.shape,r.shape),i=ae(a,"float32"),s=ae(a,"float32"),u=this.readSync(n.dataId),l=this.readSync(r.dataId),c=tr(n.shape,a),p=tr(r.shape,a),d=i.values,f=s.values;if(c.length+p.length===0)for(var m=0;m<d.length;m++){var v=m%u.length,y=m%l.length,h=o(u[2*v],u[2*v+1],l[2*y],l[2*y+1]);d[m]=h.real,f[m]=h.imag}else{var g=this.bufferSync(this.data.get(n.dataId).complexTensors.real),x=this.bufferSync(this.data.get(r.dataId).complexTensors.real),w=function(b){var S=i.indexToLoc(b),k=S.slice(-n.rank);c.forEach(function(F){return k[F]=0});var N=g.locToIndex(k),R=S.slice(-r.rank);p.forEach(function(F){return R[F]=0});var T=x.locToIndex(R),D=o(u[2*N],u[2*N+1],l[2*T],l[2*T+1]);d[b]=D.real,f[b]=D.imag};for(m=0;m<d.length;m++)w(m)}return this.complex(i.toTensor(),s.toTensor())},t.prototype.split=function(n,r,o){return wy(n,r,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(n,r,o,a,i,s){for(var u=n.shape,l=u[0],c=u[1],p=u[2],d=u[3],f=r.shape[0],m=a[0],v=a[1],y=ae([f,m,v,d],"float32"),h=this.readSync(r.dataId),g=this.readSync(o.dataId),x=this.readSync(n.dataId),w=n.strides,b=y.strides,S=0;S<f;S++){var k=4*S,N=h[k],R=h[k+1],T=h[k+2],D=h[k+3],F=g[S];if(!(F>=l))for(var U=m>1?(T-N)*(c-1)/(m-1):0,W=v>1?(D-R)*(p-1)/(v-1):0,V=0;V<m;V++){var $=m>1?N*(c-1)+V*U:.5*(N+T)*(c-1);if($<0||$>c-1)for(var H=0;H<v;H++)for(var O=0;O<d;O++){var P=O+H*b[2]+V*b[1]+S*b[0];y.values[P]=s}else if(i==="bilinear"){var L=Math.floor($),q=Math.ceil($),K=$-L;for(H=0;H<v;H++)if((fe=v>1?R*(p-1)+H*W:.5*(R+D)*(p-1))<0||fe>p-1)for(O=0;O<d;O++)P=O+H*b[2]+V*b[1]+S*b[0],y.values[P]=s;else{var te=Math.floor(fe),ne=Math.ceil(fe),ie=fe-te;for(O=0;O<d;O++){var oe=x[P=O+te*w[2]+L*w[1]+F*w[0]],ue=x[P=O+ne*w[2]+L*w[1]+F*w[0]],de=x[P=O+te*w[2]+q*w[1]+F*w[0]],ve=oe+(ue-oe)*ie,ze=de+(x[P=O+ne*w[2]+q*w[1]+F*w[0]]-de)*ie;P=O+H*b[2]+V*b[1]+S*b[0],y.values[P]=ve+(ze-ve)*K}}}else for(H=0;H<v;++H){var fe;if((fe=v>1?R*(p-1)+H*W:.5*(R+D)*(p-1))<0||fe>p-1)for(O=0;O<d;O++)P=O+H*b[2]+V*b[1]+S*b[0],y.values[P]=s;else{var be=Math.round(fe),ye=Math.round($);for(O=0;O<d;O++){var Me=O+be*w[2]+ye*w[1]+F*w[0],Ie=O+H*b[2]+V*b[1]+S*b[0];y.values[Ie]=x[Me]}}}}}return y.toTensor()},t.prototype.sparseToDense=function(n,r,o,a){var i=Bs(0,n,o),s=i.sliceRank,u=i.numUpdates,l=i.sliceSize,c=i.strides,p=i.outputSize;return this.scatter(n,r,o,p,l,u,s,c,a,!1)},t.prototype.gatherND=function(n,r){var o=r.shape,a=o[o.length-1],i=ly(n,r),s=i[0],u=i[1],l=i[2],c=i[3];if(u===0)return Ye([],s,n.dtype);for(var p=new Za([u,l],n.dtype),d=this.readSync(r.dataId),f=this.readSync(n.dataId),m=0;m<u;m++){for(var v=[],y=0,h=0;h<a;h++){var g=d[m*a+h];y+=g*c[h],v.push(g)}if(y<0||y>=n.size/l)throw new Error("Invalid indices: "+v+" does not index into "+n.shape);for(var x=0;x<l;x++)p.values[m*l+x]=f[y*l+x]}return p.toTensor().reshape(s)},t.prototype.scatterND=function(n,r,o){var a=Bs(0,n,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,l=a.strides,c=a.outputSize,p=X(0);return this.scatter(n,r,o,c,u,s,i,l,p,!0)},t.prototype.fill=function(n,r,o){var a=Ya(o=o||Qo(r),Q(n));return a.fill(r),_.makeTensor(a,n,o,this)},t.prototype.onesLike=function(n){if(n.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(n.shape,1,n.dtype)},t.prototype.zerosLike=function(n){var r=Ya(n.dtype,Q(n.shape));return this.makeOutput(r,n.shape,n.dtype)},t.prototype.linspace=function(n,r,o){return yy(n,r,o)},t.prototype.scatter=function(n,r,o,a,i,s,u,l,c,p){var d=[a/i,i],f=this.readSync(n.dataId),m=this.readSync(r.dataId);if(a===0)return Ye([],o,r.dtype);var v=new Za(d,r.dtype);v.values.fill(this.readSync(c.dataId)[0]);for(var y=0;y<s;y++){for(var h=[],g=0,x=0;x<u;x++){var w=f[y*u+x];h.push(w),g+=w*l[x]}if(g<0||g>=a/i)throw new Error("Invalid indices: "+h+" does not index into "+o);for(var b=0;b<i;b++)p?v.values[g*i+b]+=m[y*i+b]:v.values[g*i+b]=r.rank===0?m[0]:m[y*i+b]}return v.toTensor().reshape(o)},t}(my);function D0(e,t){return{kernelName:e,backendName:"cpu",kernelFunc:function(n){var r=n.inputs,o=n.backend,a=r,i=a.a,s=a.b,u=o;j([i,s],e);var l=u.data.get(i.dataId).values,c=u.data.get(s.dataId).values,p=t(i.shape,s.shape,l,c,i.dtype),d=p[0],f=p[1];return{dataId:u.write(d,f,i.dtype),shape:f,dtype:i.dtype}}}}function O0(e){return function(t,n,r,o,a){var i=ce(t,n),s=i.length,u=Ct(i),l=Gr(a,Q(i)),c=t.length,p=n.length,d=Ct(t),f=Ct(n),m=tr(t,i),v=tr(n,i);if(m.length+v.length===0)for(var y=0;y<l.length;++y)l[y]=e(r[y%r.length],o[y%o.length]);else{var h=function(g){var x=Hp(g,s,u),w=x.slice(-c);m.forEach(function(N){return w[N]=0});var b=Ts(w,c,d),S=x.slice(-p);v.forEach(function(N){return S[N]=0});var k=Ts(S,p,f);l[g]=e(r[b],o[k])};for(y=0;y<l.length;++y)h(y)}return[l,i]}}_.registerBackend("cpu",function(){return new gE},1);var yE=O0(function(e,t){return e/t}),xE=D0(pu,yE),wE={kernelName:"MaxPoolWithArgmax",backendName:"cpu",kernelFunc:function(e){var t=e.inputs,n=e.attrs,r=e.backend,o=t.x,a=n,i=a.filterSize,s=a.strides,u=a.pad,l=a.includeBatchInIndex,c=r;j(o,"MaxPoolWithArgmax");var p=c.data.get(o.dataId).values,d=qr(o.shape,i,s,[1,1],u),f=function(g,x,w,b,S){var k=Rc(g,0,w,Ct(x),S,"max"),N=_0(g,x,w,S,!0,b);return[k.values,N.values]}(p,o.shape,o.dtype,l,d),m=f[0],v=f[1],y=c.write(m,d.outShape,o.dtype),h=c.write(v,d.outShape,o.dtype);return[{dataId:y,shape:d.outShape,dtype:o.dtype},{dataId:h,shape:d.outShape,dtype:"int32"}]}},bE={kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(e){var t=e.inputs,n=e.backend,r=e.attrs,o=t,a=o.boxes,i=o.scores,s=r,u=s.maxOutputSize,l=s.iouThreshold,c=s.scoreThreshold,p=s.softNmsSigma,d=n;j(a,"NonMaxSuppressionWithScore");var f=od(d.data.get(a.dataId).values,d.data.get(i.dataId).values,u,l,c,p);return[f.selectedIndices,f.selectedScores]}},CE={kernelName:"Square",backendName:"cpu",kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t.x,o=n;j(r,"square");for(var a=o.data.get(r.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},SE=O0(function(e,t){var n=e-t;return n*n});function F0(e,t,n,r,o){for(var a=Q(t),i=t.length,s=Ct(t),u=Ct(o),l=Gr(n,Q(o)),c=0;c<a;++c){for(var p=Hp(c,i,s),d=new Array(p.length),f=0;f<d.length;f++)d[f]=p[r[f]];l[Ts(d,i,u)]=e[c]}return l}for(var yl=0,Ch=[bE,CE,D0(du,SE),xE,{kernelName:"Transpose",backendName:"cpu",kernelFunc:function(e){var t=e.inputs,n=e.attrs,r=e.backend,o=t.x,a=n.perm,i=r;j(o,"transpose");for(var s=o.shape.length,u=new Array(s),l=0;l<u.length;l++)u[l]=o.shape[a[l]];var c=F0(i.data.get(o.dataId).values,o.shape,o.dtype,a,u);return{dataId:i.write(c,u,o.dtype),shape:u,dtype:o.dtype}}},wE];yl<Ch.length;yl++)rg(Ch[yl]);var so,EE=function(e){this.variableNames=["A"];var t=it(),n=e[0],r=e[1];this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+r+".0, "+n+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},NE=function(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=it(),n=e[0],r=e[1];this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+r+".0, "+n+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `},kE=function(e,t){this.variableNames=["A"];for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;var o=Se(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],l=new Array(s),c=0;c<i.length;c++)l[i[c]]=u[c];return l.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},IE=function(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e[t[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=Se(this.rank),a=Sy("rc",this.rank),i=new Array(this.rank);for(r=0;r<t.length;r++)i[t[r]]=a[r];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+n[this.rank-1],l="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+l+`;
      if(`+u+`) {
        result[1] = `+l+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+n[this.rank-2]+`) {
        result[2] = `+l+`;
        if(`+u+`) {
          result[3] = `+l+`;
        }
      }
      setOutput(result);
    }
    `};for(var xl=0,Sh=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(e){var t=e.inputs,n=e.backend,r=e.attrs,o=t.pixels,a=r.numChannels,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],l=u[0],c=u[1],p=[c,l],d=[c,l,a];(s||i)&&(so==null&&(so=document.createElement("canvas").getContext("2d")),so.canvas.width=l,so.canvas.height=c,so.drawImage(o,0,0,l,c),o=so.canvas);var f=n.makeTensorInfo(p,"int32");n.texData.get(f.dataId).usage=Dt.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(f.dataId),o);var m=z().getBool("WEBGL_PACK")?new NE(d):new EE(d),v=n.runWebGLProgram(m,[f],"int32");return n.disposeData(f.dataId),v}},{kernelName:pu,backendName:"webgl",kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t;return function(o,a,i){var s=new Pe(h2,o.shape,a.shape);return z().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&(s=new dn(m2,o.shape,a.shape,!0)),i.runWebGLProgram(s,[o,a],"float32")}(r.a,r.b,n)}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(e){var t=e.inputs,n=e.backend,r=e.attrs;Os("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,a=o.boxes,i=o.scores,s=r,u=s.maxOutputSize,l=s.iouThreshold,c=s.scoreThreshold,p=s.softNmsSigma,d=n,f=od(d.readSync(a.dataId),d.readSync(i.dataId),u,l,c,p);return[f.selectedIndices,f.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t.x,o=n,a=new se(r.shape,"return x * x;");return o.runWebGLProgram(a,[r],r.dtype)}},{kernelName:du,backendName:"webgl",kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t,o=r.a,a=r.b,i=n,s=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new dn("return (a - b) * (a - b);",o.shape,a.shape):new Pe("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}},{kernelName:"Transpose",backendName:"webgl",kernelFunc:function(e){for(var t,n=e.inputs,r=e.attrs,o=e.backend,a=n.x,i=r.perm,s=o,u=a.shape.length,l=new Array(u),c=0;c<l.length;c++)l[c]=a.shape[i[c]];if(s.shouldExecuteOnCPU([a])){var p=F0(s.texData.get(a.dataId).values,a.shape,a.dtype,i,l);t=s.makeTensorInfo(l,a.dtype),s.texData.get(t.dataId).values=p}else t=function(d,f,m){var v=z().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new IE(d.shape,f):new kE(d.shape,f);return m.runWebGLProgram(v,[d],d.dtype)}(a,i,s);return t}},{kernelName:"MaxPoolWithArgmax",backendName:"webgl",kernelFunc:function(e){var t=e.inputs,n=e.attrs,r=e.backend,o=t.x,a=n,i=a.filterSize,s=a.strides,u=a.pad,l=a.includeBatchInIndex,c=r;I(o.shape.length===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+o.shape.length+"."});var p=[1,1];I(dt(s,p),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+s+" and dilations '"+p+"'"});var d=qr(o.shape,i,s,p,u),f=function(m,v,y,h){var g=new Da(y,"max",!1),x=h.runWebGLProgram(g,[m],"float32");return g=new Da(y,"max",!0,!0,v),[x,h.runWebGLProgram(g,[m],"float32")]}(o,l,d,c);return[f[0],f[1]]}}];xl<Sh.length;xl++)rg(Sh[xl]);for(var wl=0,Eh=[{kernelName:Rg,inputsToSave:["a","b"],gradFunc:function(e,t){var n=t[0],r=t[1],o=ce(n.shape,r.shape);return{a:function(){var a=e,i=He(n.shape,o);return i.length>0&&(a=a.sum(i)),a.reshape(n.shape)},b:function(){var a=e,i=He(r.shape,o);return i.length>0&&(a=a.sum(i)),a.reshape(r.shape)}}}},{kernelName:"AddN",saveAllInputs:!0,gradFunc:function(e,t){var n={};return t.forEach(function(r,o){n[o]=function(){return e.clone()}}),n}},{kernelName:Tg,gradFunc:function(e,t,n){for(var r=n,o=r.inputShape,a=r.shape,i=Array.from(a),s=o.length-1;s>=0;s--)if(o[s]===a[s])i[s]=1;else if(o[s]!==1)throw new Error("broadcastTo(): ["+o+"] cannot be broadcast to ["+a+"].");var u=[];for(s=0;s<i.length;s++)i[s]>1&&u.push(s);return{x:function(){return e.sum(u,!0)}}}},{kernelName:pu,inputsToSave:["a","b"],gradFunc:function(e,t){var n=t[0],r=t[1],o=ce(n.shape,r.shape);return{a:function(){var a=Un(e,r.toFloat()),i=He(n.shape,o);return i.length>0?Tn(a,i).reshape(n.shape):a},b:function(){var a=e.mul(n.toFloat()),i=He(r.shape,o);i.length>0&&(a=Tn(a,i).reshape(r.shape));var s=hd(r);return fu(Un(a,s.toFloat()))}}}},{kernelName:"FusedBatchNorm",inputsToSave:["x","mean","variance","scale"],gradFunc:function(e,t,n){var r=n.varianceEpsilon,o=t[0],a=t[1],i=t[2],s=t[3],u=My(o),l=s??X(1),c=He(a.shape,u.shape),p=[];if(a.rank===1){for(var d=0;d<u.shape.length-1;++d)p.push(u.shape[d]);p.push(1)}var f=Fn(o,a),m=Ve(e,l),v=Zp(Wn(i,X(r))),y=Ve(Ve(Ve(v,v),v),X(-.5));return{x:function(){return a.rank===1?fn(Ve(Ve(e,zr(v.as4D(1,1,1,a.shape[0]),p)),l),o.shape):fn(Ve(Ve(e,v),l),o.shape)},mean:function(){var h=Ve(Ve(v,X(-1)),m);return a.rank===1&&(h=Tn(h,c)),fn(h,a.shape)},variance:function(){var h=Ve(Ve(y,f),m);return a.rank===1&&(h=Tn(h,c)),fn(h,a.shape)},scale:function(){var h=Ve(f,v),g=Ve(e,h);return a.rank===1&&(g=Tn(g,c)),fn(g,a.shape)},offset:function(){var h=e;return a.rank===1&&(h=Tn(h,c)),fn(h,a.shape)}}}},{kernelName:_g,gradFunc:function(e){return{x:function(){return e.toFloat()}}}},{kernelName:Ag,inputsToSave:["indices"],gradFunc:function(e,t){var n=t[0];return{indices:function(){return Te(n.shape,"float32")}}}},{kernelName:Og,inputsToSave:["x"],gradFunc:function(e,t,n){var r=t[0],o=n.paddings.map(function(a){return a[0]});return{x:function(){return e.slice(o,r.shape)}}}},{kernelName:"Square",inputsToSave:["x"],gradFunc:function(e,t){var n=t[0];return{x:function(){return e.mul(n.toFloat().mul(2))}}}},{kernelName:du,inputsToSave:["a","b"],gradFunc:function(e,t){var n=t[0],r=t[1],o=X(2);return{a:function(){return Ve(e,Ve(o,Fn(n,r)))},b:function(){return Ve(e,Ve(o,Fn(r,n)))}}}},{kernelName:Dg,inputsToSave:["x"],gradFunc:function(e,t,n){var r=t[0],o=n.reps;return{x:function(){var a=me(r);if(r.rank===1)for(var i=0;i<o[0];++i)a=a.add(e.slice([i*r.shape[0]],[r.shape[0]]));else if(r.rank===2)for(i=0;i<o[0];++i)for(var s=0;s<o[1];++s)a=a.add(e.slice([i*r.shape[0],s*r.shape[1]],[r.shape[0],r.shape[1]]));else if(r.rank===3)for(i=0;i<o[0];++i)for(s=0;s<o[1];++s)for(var u=0;u<o[2];++u)a=a.add(e.slice([i*r.shape[0],s*r.shape[1],u*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else{if(r.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+r.rank+" tensors yet.");for(i=0;i<o[0];++i)for(s=0;s<o[1];++s)for(u=0;u<o[2];++u)for(var l=0;l<o[3];++l)a=a.add(e.slice([i*r.shape[0],s*r.shape[1],u*r.shape[2],l*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]))}return a}}}},{kernelName:"Transpose",gradFunc:function(e,t,n){var r=qp(n.perm);return{x:function(){return Vt(e,r)}}}}];wl<Eh.length;wl++)Fw(Eh[wl]);var RE=function(){function e(){}return e.prototype.fetch=function(t,n){return fetch(t,n)},e.prototype.now=function(){return performance.now()},e.prototype.encode=function(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+n);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},e.prototype.decode=function(t,n){return new TextDecoder(n).decode(t)},e}();z().get("IS_BROWSER")&&z().setPlatform("browser",new RE);var bl,TE=function(){return require("node-fetch")},AE=function(){function e(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return e.prototype.fetch=function(t,n){return z().global.fetch!=null?z().global.fetch(t,n):(bl==null&&(bl=TE()),bl(t,n))},e.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},e.prototype.encode=function(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+n);return this.textEncoder.encode(t)},e.prototype.decode=function(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)},e}();z().get("IS_NODE")&&z().setPlatform("node",new AE);var Tc={float32:4,int32:4,uint16:2,uint8:1,bool:1},$s=4;function M0(e,t){for(var n={},r=0,o=function(s){var u=s.name,l=s.dtype,c=s.shape,p=Q(c),d=void 0;if("quantization"in s){var f=s.quantization;if(f.dtype!=="uint8"&&f.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+f.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var m=Tc[f.dtype],v=e.slice(r,r+p*m),y=f.dtype==="uint8"?new Uint8Array(v):new Uint16Array(v);if(l==="float32")d=Float32Array.from(y,function(S){return S*f.scale+f.min});else{if(l!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+l);d=Int32Array.from(y,function(S){return Math.round(S*f.scale+f.min)})}r+=p*m}else if(l==="string"){var h=Q(s.shape);d=[];for(var g=0;g<h;g++){var x=new Uint32Array(e.slice(r,r+$s))[0];r+=$s;var w=new Uint8Array(e.slice(r,r+x));d.push(w),r+=x}}else{var b=Tc[l];if(v=e.slice(r,r+p*b),l==="float32")d=new Float32Array(v);else if(l==="int32")d=new Int32Array(v);else{if(l!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+l);d=new Uint8Array(v)}r+=p*b}n[u]=Ye(d,c,l)},a=0,i=t;a<i.length;a++)o(i[a]);return n}function _E(e){if(e===null)throw new Error("Invalid input value: "+JSON.stringify(e));var t=0,n=[];e.forEach(function(a){if(t+=a.byteLength,n.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var r=new Uint8Array(t),o=0;return n.forEach(function(a){r.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),r.buffer}var Ac=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Nh(e){return Ac?Buffer.byteLength(e):new Blob([e]).size}function Dd(e){var t=0;e.forEach(function(o){t+=o.byteLength});var n=new Uint8Array(t),r=0;return e.forEach(function(o){n.set(new Uint8Array(o),r),r+=o.byteLength}),n.buffer}function kh(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);var t=e.split("/");return t[t.length-1]}function hi(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:Nh(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:Nh(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}var Ot=function(){function e(){this.saveRouters=[],this.loadRouters=[]}return e.getInstance=function(){return e.instance==null&&(e.instance=new e),e.instance},e.registerSaveRouter=function(t){e.getInstance().saveRouters.push(t)},e.registerLoadRouter=function(t){e.getInstance().loadRouters.push(t)},e.getSaveHandlers=function(t){return e.getHandlers(t,"save")},e.getLoadHandlers=function(t,n){return e.getHandlers(t,"load",n)},e.getHandlers=function(t,n,r){var o=[];return(n==="load"?e.getInstance().loadRouters:e.getInstance().saveRouters).forEach(function(a){var i=a(t,r);i!==null&&o.push(i)}),o},e}(),Mo="://",pr=function(){function e(){this.managers={}}return e.getInstance=function(){return e.instance==null&&(e.instance=new e),e.instance},e.registerManager=function(t,n){I(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(Mo)&&(t=t.slice(0,t.indexOf(Mo))),I(t.length>0,function(){return"scheme must not be an empty string."});var r=e.getInstance();I(r.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),r.managers[t]=n},e.getManager=function(t){var n=this.getInstance().managers[t];if(n==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return n},e.getSchemes=function(){return Object.keys(this.getInstance().managers)},e}();function Ji(e){if(e.indexOf(Mo)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+pr.getSchemes().join(","));return{scheme:e.split(Mo)[0],path:e.split(Mo)[1]}}function Ih(e,t,n){return n===void 0&&(n=!1),Z(this,void 0,void 0,function(){var r,o,a,i,s,u,l,c,p;return J(this,function(d){switch(d.label){case 0:return I(e!==t,function(){return"Old path and new path are the same: '"+e+"'"}),I((r=Ot.getLoadHandlers(e)).length>0,function(){return"Copying failed because no load handler is found for source URL "+e+"."}),I(r.length<2,function(){return"Copying failed because more than one ("+r.length+") load handlers for source URL "+e+"."}),o=r[0],I((a=Ot.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),I(a.length<2,function(){return"Copying failed because more than one ("+r.length+") save handlers for destination URL "+t+"."}),i=a[0],s=Ji(e).scheme,u=Ji(e).path,l=s===Ji(e).scheme,[4,o.load()];case 1:return c=d.sent(),n&&l?[4,pr.getManager(s).removeModel(u)]:[3,3];case 2:d.sent(),d.label=3;case 3:return[4,i.save(c)];case 4:return p=d.sent(),!n||l?[3,6]:[4,pr.getManager(s).removeModel(u)];case 5:d.sent(),d.label=6;case 6:return[2,p.modelArtifactsInfo]}})})}var Fr="models_store",nr="model_info_store";function P0(){if(!z().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var e=window||self,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function _c(e){var t=e.result;t.createObjectStore(Fr,{keyPath:"modelPath"}),t.createObjectStore(nr,{keyPath:"modelPath"})}var Po=function(){function e(t){if(this.indexedDB=P0(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return e.prototype.save=function(t){return Z(this,void 0,void 0,function(){return J(this,function(n){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},e.prototype.load=function(){return Z(this,void 0,void 0,function(){return J(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},e.prototype.databaseAction=function(t,n){var r=this;return new Promise(function(o,a){var i=r.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return _c(i)},i.onsuccess=function(){var s=i.result;if(n==null){var u=s.transaction(Fr,"readonly"),l=u.objectStore(Fr).get(r.modelPath);l.onsuccess=function(){if(l.result==null)return s.close(),a(new Error("Cannot find model with path '"+r.modelPath+"' in IndexedDB."));o(l.result.modelArtifacts)},l.onerror=function(v){return s.close(),a(l.error)},u.oncomplete=function(){return s.close()}}else{var c,p=hi(n),d=s.transaction(nr,"readwrite"),f=d.objectStore(nr),m=f.put({modelPath:r.modelPath,modelArtifactsInfo:p});m.onsuccess=function(){var v=(c=s.transaction(Fr,"readwrite")).objectStore(Fr).put({modelPath:r.modelPath,modelArtifacts:n,modelArtifactsInfo:p});v.onsuccess=function(){return o({modelArtifactsInfo:p})},v.onerror=function(y){var h=(f=d.objectStore(nr)).delete(r.modelPath);h.onsuccess=function(){return s.close(),a(v.error)},h.onerror=function(g){return s.close(),a(v.error)}}},m.onerror=function(v){return s.close(),a(m.error)},d.oncomplete=function(){c==null?s.close():c.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},e.URL_SCHEME="indexeddb://",e}(),Rh=function(e){return z().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Po.URL_SCHEME)?(t=e.slice(Po.URL_SCHEME.length),new Po(t)):null;var t};Ot.registerSaveRouter(Rh),Ot.registerLoadRouter(Rh);var DE=function(){function e(){this.indexedDB=P0()}return e.prototype.listModels=function(){return Z(this,void 0,void 0,function(){var t=this;return J(this,function(n){return[2,new Promise(function(r,o){var a=t.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return _c(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(nr,"readonly"),u=s.objectStore(nr).getAll();u.onsuccess=function(){for(var l={},c=0,p=u.result;c<p.length;c++){var d=p[c];l[d.modelPath]=d.modelArtifactsInfo}r(l)},u.onerror=function(l){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},e.prototype.removeModel=function(t){return Z(this,void 0,void 0,function(){var n=this;return J(this,function(r){var o;return t=(o=t).startsWith(Po.URL_SCHEME)?o.slice(Po.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=n.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return _c(s)},s.onsuccess=function(){var u,l=s.result,c=l.transaction(nr,"readwrite"),p=c.objectStore(nr),d=p.get(t);d.onsuccess=function(){if(d.result==null)return l.close(),i(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var f=p.delete(t),m=function(){var v=(u=l.transaction(Fr,"readwrite")).objectStore(Fr).delete(t);v.onsuccess=function(){return a(d.result.modelArtifactsInfo)},v.onerror=function(y){return i(d.error)}};f.onsuccess=m,f.onerror=function(v){return m(),l.close(),i(d.error)}},d.onerror=function(f){return l.close(),i(d.error)},c.oncomplete=function(){u==null?l.close():u.oncomplete=function(){return l.close()}}},s.onerror=function(u){return i(s.error)}})]})})},e}();if(z().getBool("IS_BROWSER"))try{pr.registerManager(Po.URL_SCHEME,new DE)}catch{}var An="/",fo="tensorflowjs_models",L0="info",OE="model_topology",FE="weight_specs",ME="weight_data",PE="model_metadata";function B0(e){return{info:[fo,e,L0].join(An),topology:[fo,e,OE].join(An),weightSpecs:[fo,e,FE].join(An),weightData:[fo,e,ME].join(An),modelMetadata:[fo,e,PE].join(An)}}function LE(e){var t=e.split(An);if(t.length<3)throw new Error("Invalid key format: "+e);return t.slice(1,t.length-1).join(An)}var Lo=function(){function e(t){if(!z().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=B0(this.modelPath)}return e.prototype.save=function(t){return Z(this,void 0,void 0,function(){var n,r,o;return J(this,function(a){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");n=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),o=hi(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,function(i){if(Ac)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",l=0,c=s.length;l<c;l++)u+=String.fromCharCode(s[l]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},e.prototype.load=function(){return Z(this,void 0,void 0,function(){var t,n,r,o,a,i,s;return J(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(n={},(r=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(n.modelTopology=r,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(n.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),n.format=i.format,n.generatedBy=i.generatedBy,n.convertedBy=i.convertedBy,n.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return n.weightData=function(l){if(Ac){var c=Buffer.from(l,"base64");return c.buffer.slice(c.byteOffset,c.byteOffset+c.byteLength)}for(var p=atob(l),d=new Uint8Array(p.length),f=0;f<p.length;++f)d.set([p.charCodeAt(f)],f);return d.buffer}(s),[2,n]})})},e.URL_SCHEME="localstorage://",e}(),Th=function(e){return z().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Lo.URL_SCHEME)?(t=e.slice(Lo.URL_SCHEME.length),new Lo(t)):null;var t};Ot.registerSaveRouter(Th),Ot.registerLoadRouter(Th);var BE=function(){function e(){I(z().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),I(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return e.prototype.listModels=function(){return Z(this,void 0,void 0,function(){var t,n,r,o,a,i;return J(this,function(s){for(t={},n=fo+An,r=An+L0,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(n)&&a.endsWith(r)&&(i=LE(a),t[i]=JSON.parse(this.LS.getItem(a)));return[2,t]})})},e.prototype.removeModel=function(t){return Z(this,void 0,void 0,function(){var n,r;return J(this,function(o){var a;if(t=(a=t).startsWith(Lo.URL_SCHEME)?a.slice(Lo.URL_SCHEME.length):a,n=B0(t),this.LS.getItem(n.info)==null)throw new Error("Cannot find model at path '"+t+"'");return r=JSON.parse(this.LS.getItem(n.info)),this.LS.removeItem(n.info),this.LS.removeItem(n.topology),this.LS.removeItem(n.weightSpecs),this.LS.removeItem(n.weightData),[2,r]})})},e}();if(z().getBool("IS_BROWSER"))try{pr.registerManager(Lo.URL_SCHEME,new BE)}catch{}var zE="model",VE=".json",WE=".weights.bin";function Ah(e){return new Promise(function(t){return setTimeout(t)}).then(e)}var Cl=function(){function e(t){if(!z().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(e.URL_SCHEME)&&(t=t.slice(e.URL_SCHEME.length)),t!=null&&t.length!==0||(t=zE),this.modelTopologyFileName=t+VE,this.weightDataFileName=t+WE}return e.prototype.save=function(t){return Z(this,void 0,void 0,function(){var n,r,o,a,i,s;return J(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(n=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:r},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,Ah(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=n,[4,Ah(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:hi(t)}]}})})},e.URL_SCHEME="downloads://",e}(),UE=function(){function e(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return e.prototype.load=function(){return Z(this,void 0,void 0,function(){var t,n,r=this;return J(this,function(o){return t=this.files[0],n=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var l=JSON.parse(u.target.result),c=l.modelTopology;if(c!=null){n.length===0&&a({modelTopology:c});var p=l.weightsManifest;if(p!=null){var d;try{d=r.checkManifestAndWeightFiles(p,n)}catch(y){return void i(y)}var f=[],m=[],v=[];p.forEach(function(y){y.paths.forEach(function(h){m.push(h),v.push(null)}),f.push.apply(f,y.weights)}),p.forEach(function(y){y.paths.forEach(function(h){var g=new FileReader;g.onload=function(x){var w=x.target.result,b=m.indexOf(h);v[b]=w,v.indexOf(null)===-1&&a({modelTopology:c,weightSpecs:f,weightData:Dd(v),format:l.format,generatedBy:l.generatedBy,convertedBy:l.convertedBy,userDefinedMetadata:l.userDefinedMetadata})},g.onerror=function(x){return i("Failed to weights data from file of path '"+h+"'.")},g.readAsArrayBuffer(d[h])})})}else i(new Error("weightManifest field is missing from file "+t.name))}else i(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},e.prototype.checkManifestAndWeightFiles=function(t,n){for(var r=[],o=n.map(function(u){return kh(u.name)}),a={},i=0,s=t;i<s.length;i++)s[i].paths.forEach(function(u){var l=kh(u);if(r.indexOf(l)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+l+"'");if(r.push(l),o.indexOf(l)===-1)throw new Error("Weight file with basename '"+l+"' is not provided.");a[u]=n[o.indexOf(l)]});if(r.length!==n.length)throw new Error("Mismatch in the number of files in weights manifest ("+r.length+") and the number of weight files provided ("+n.length+").");return a},e}();function _h(e,t,n,r){(function(a){I(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(e),function(a,i){I(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),I(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),I(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(n=n??0,r=r??1);var o=0;return Promise.all(e.map(function(a){return a.then(function(i){var s=n+ ++o/e.length*(r-n);return t(s),i}),a}))}function z0(e,t){return Z(this,void 0,void 0,function(){var n,r,o,a,i,s,u,l,c;return J(this,function(p){switch(p.label){case 0:return t==null&&(t={}),n=t.fetchFunc==null?z().platform.fetch:t.fetchFunc,r=e.map(function(d){return n(d,t.requestInit,{isBinary:!0})}),o=0,a=.5,t.onProgress!=null?[3,2]:[4,Promise.all(r)];case 1:return i=p.sent(),[3,4];case 2:return[4,_h(r,t.onProgress,o,a)];case 3:i=p.sent(),p.label=4;case 4:return s=i.map(function(d){return d.arrayBuffer()}),u=.5,l=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return c=p.sent(),[3,8];case 6:return[4,_h(s,t.onProgress,u,l)];case 7:c=p.sent(),p.label=8;case 8:return[2,c]}})})}function Dh(e){var t=this;return function(n,r,o){return r===void 0&&(r=""),Z(t,void 0,void 0,function(){var a,i,s,u,l,c,p,d,f,m;return J(this,function(v){switch(v.label){case 0:if(a=n.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],n.forEach(function(y,h){var g=0;y.weights.forEach(function(x){var w="quantization"in x?x.quantization.dtype:x.dtype,b=Tc[w]*Q(x.shape),S=function(){a[h]=!0,i[h]==null&&(i[h]=[]),i[h].push({manifestEntry:x,groupOffset:g,sizeBytes:b})};o!=null?o.forEach(function(k,N){k===x.name&&(S(),s[N]=!0)}):S(),u.push(x.name),g+=b})}),!s.every(function(y){return y}))throw l=o.filter(function(y,h){return!s[h]}),new Error("Could not find weights in manifest with names: "+l.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return c=a.reduce(function(y,h,g){return h&&y.push(g),y},[]),p=[],c.forEach(function(y){n[y].paths.forEach(function(h){var g=r+(r.endsWith("/")?"":"/")+h;p.push(g)})}),[4,e(p)];case 1:return d=v.sent(),f={},m=0,c.forEach(function(y){for(var h=n[y].paths.length,g=0,x=0;x<h;x++)g+=d[m+x].byteLength;for(var w=new ArrayBuffer(g),b=new Uint8Array(w),S=0,k=0;k<h;k++){var N=new Uint8Array(d[m+k]);b.set(N,S),S+=N.byteLength}i[y].forEach(function(R){var T=M0(w.slice(R.groupOffset,R.groupOffset+R.sizeBytes),[R.manifestEntry]);for(var D in T)f[D]=T[D]}),m+=h}),[2,f]}})})}}Ot.registerSaveRouter(function(e){return z().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Cl.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new Cl(t)}(e.slice(Cl.URL_SCHEME.length)):null});var V0=function(){function e(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.onProgress=n.onProgress,n.fetchFunc!=null?(I(typeof n.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=n.fetchFunc):this.fetch=z().platform.fetch,I(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&I(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{}}return e.prototype.save=function(t){return Z(this,void 0,void 0,function(){var n,r,o,a;return J(this,function(i){switch(i.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:r},n.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&n.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,n)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:hi(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},e.prototype.load=function(){return Z(this,void 0,void 0,function(){var t,n,r,o,a,i,s,u,l,c,p,d;return J(this,function(f){switch(f.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=f.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");f.label=2;case 2:return f.trys.push([2,4,,5]),[4,t.json()];case 3:return n=f.sent(),[3,5];case 4:throw f.sent(),r="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?r+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":r+=" Please make sure the server is serving valid JSON for this request.",new Error(r);case 5:if(o=n.modelTopology,a=n.weightsManifest,i=n.generatedBy,s=n.convertedBy,u=n.format,l=n.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:d=f.sent(),c=d[0],p=d[1],f.label=7;case 7:return[2,{modelTopology:o,weightSpecs:c,weightData:p,userDefinedMetadata:l,generatedBy:i,convertedBy:s,format:u}]}})})},e.prototype.loadWeights=function(t){return Z(this,void 0,void 0,function(){var n,r,o,a,i,s,u,l,c,p,d;return J(this,function(f){switch(f.label){case 0:for(n=Array.isArray(this.path)?this.path[1]:this.path,r=function(m){var v=m.lastIndexOf("/"),y=m.lastIndexOf("?"),h=m.substring(0,v),g=y>v?m.substring(y):"";return[h+"/",g]}(n),o=r[0],a=r[1],i=this.weightPathPrefix||o,s=[],u=0,l=t;u<l.length;u++)c=l[u],s.push.apply(s,c.weights);return p=[],t.forEach(function(m){m.paths.forEach(function(v){p.push(i+v+a)})}),[4,z0(p,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return d=f.sent(),[2,[s,Dd(d)]]}})})},e.URL_SCHEME_REGEX=/^https?:\/\//,e}();function Dc(e){return e.match(V0.URL_SCHEME_REGEX)!=null}var Oh=function(e,t){return typeof fetch>"u"?null:(Array.isArray(e)?e.every(function(n){return Dc(n)}):Dc(e))?Oc(e,{onProgress:t}):null};function Oc(e,t){return new V0(e,t)}Ot.registerSaveRouter(Oh),Ot.registerLoadRouter(Oh);var Sl=function(){function e(t){this.modelArtifacts=t}return e.prototype.load=function(){return Z(this,void 0,void 0,function(){return J(this,function(t){return[2,this.modelArtifacts]})})},e}(),$E=function(){function e(t){this.saveHandler=t}return e.prototype.save=function(t){return Z(this,void 0,void 0,function(){return J(this,function(n){return[2,this.saveHandler(t)]})})},e}(),ha=Object.freeze({browserFiles:function(e){return new UE(e)},browserHTTPRequest:function(e,t){return Oc(e,t)},concatenateArrayBuffers:Dd,decodeWeights:M0,encodeWeights:function(e,t){return Z(this,void 0,void 0,function(){var n,r,o,a,i,s=this;return J(this,function(u){switch(u.label){case 0:for(n=[],r=[],o=Array.isArray(e)?e.map(function(l){return l.name}):Object.keys(e),a=function(l){var c=o[l],p=Array.isArray(e)?e[l].tensor:e[c];if(p.dtype!=="float32"&&p.dtype!=="int32"&&p.dtype!=="bool"&&p.dtype!=="string")throw new Error("Unsupported dtype in weight '"+c+"': "+p.dtype);var d={name:c,shape:p.shape,dtype:p.dtype};if(p.dtype==="string"){var f=new Promise(function(m){return Z(s,void 0,void 0,function(){var v,y,h,g,x,w,b;return J(this,function(S){switch(S.label){case 0:return[4,p.bytes()];case 1:for(v=S.sent(),y=v.reduce(function(k,N){return k+N.length},0)+$s*v.length,h=new Uint8Array(y),g=0,x=0;x<v.length;x++)w=v[x],b=new Uint8Array(new Uint32Array([w.length]).buffer),h.set(b,g),g+=$s,h.set(w,g),g+=w.length;return m(h),[2]}})})});r.push(f)}else r.push(p.data());t!=null&&(d.group=t),n.push(d)},i=0;i<o.length;++i)a(i);return[4,Promise.all(r)];case 1:return[2,{data:_E(u.sent()),specs:n}]}})})},fromMemory:function(e,t,n,r){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new Sl(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Sl({modelTopology:e})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Sl({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r}))},getLoadHandlers:function(e,t){return Ot.getLoadHandlers(e,t)},getModelArtifactsInfoForJSON:hi,getSaveHandlers:function(e){return Ot.getSaveHandlers(e)},http:Oc,isHTTPScheme:Dc,loadWeights:function(e,t,n,r){return t===void 0&&(t=""),Z(this,void 0,void 0,function(){return J(this,function(o){return[2,Dh(function(a){return z0(a,{requestInit:r})})(e,t,n)]})})},registerLoadRouter:function(e){return Ot.registerLoadRouter(e)},registerSaveRouter:function(e){return Ot.registerSaveRouter(e)},weightsLoaderFactory:Dh,withSaveHandler:function(e){return new $E(e)},copyModel:function(e,t){return Z(this,void 0,void 0,function(){return J(this,function(n){return[2,Ih(e,t,!1)]})})},listModels:function(){return Z(this,void 0,void 0,function(){var e,t,n,r,o,a,i;return J(this,function(s){switch(s.label){case 0:e=pr.getSchemes(),t={},n=0,r=e,s.label=1;case 1:return n<r.length?(o=r[n],[4,pr.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())t[o+Mo+i]=a[i];s.label=3;case 3:return n++,[3,1];case 4:return[2,t]}})})},moveModel:function(e,t){return Z(this,void 0,void 0,function(){return J(this,function(n){return[2,Ih(e,t,!0)]})})},removeModel:function(e){return Z(this,void 0,void 0,function(){var t;return J(this,function(n){return t=Ji(e),[2,pr.getManager(t.scheme).removeModel(t.path)]})})}}),uo;A({confusionMatrix_:function(e,t,n){var r=E(e,"labels","confusionMatrix"),o=E(t,"predictions","confusionMatrix");I(n==null||n>0&&Number.isInteger(n),function(){return"If provided, numClasses must be a positive integer, but got "+n}),I(r.rank===1,function(){return"Expected the rank of labels to be 1, but got "+r.rank}),I(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),I(r.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+r.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),I(n>0&&Number.isInteger(n),function(){return"numClasses is required to be a positive integer, but got "+n});var a=ni(r.asType("int32"),n),i=ni(o.asType("int32"),n);return a.transpose().matMul(i).asType("int32")}});A({fromPixels_:function(e,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(e==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var n=!1,r=!1,o=!1,a=!1,i=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&e instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)a=!0;else{if(e.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+e.constructor.name);i=!0}if(o&&o&&e.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(ng("FromPixels",_.backendName)!=null)return _.runKernel("FromPixels",{pixels:e},{numChannels:t});var s,u,l=o?[e.videoWidth,e.videoHeight]:[e.width,e.height],c=l[0],p=l[1];if(i?s=e.getContext("2d").getImageData(0,0,c,p).data:r||n?s=e.data:(a||o)&&(uo==null&&(uo=document.createElement("canvas").getContext("2d")),uo.canvas.width=c,uo.canvas.height=p,uo.drawImage(e,0,0,c,p),s=uo.getImageData(0,0,c,p).data),t===4)u=new Int32Array(s);else{var d=c*p;u=new Int32Array(d*t);for(var f=0;f<d;f++)for(var m=0;m<t;++m)u[f*t+m]=s[4*f+m]}return bg(u,[p,c,t],"int32")}});var jE=function(){function e(){}return e.prototype.getClassName=function(){return this.constructor.className},e.fromConfig=function(t,n){return new t(n)},e}(),HE=function(){function e(){this.classNameMap={}}return e.getMap=function(){return e.instance==null&&(e.instance=new e),e.instance},e.register=function(t){e.getMap().classNameMap[t.className]=[t,t.fromConfig]},e}();function eo(e){I(e.className!=null,function(){return"Class being registered does not have the static className property defined."}),I(typeof e.className=="string",function(){return"className is required to be a string, but got type "+typeof e.className}),I(e.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),HE.register(e)}var to=function(e){function t(){return e!==null&&e.apply(this,arguments)||this}return on(t,e),t.prototype.minimize=function(n,r,o){r===void 0&&(r=!1);var a=this.computeGradients(n,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(l){return{name:l.name,tensor:s[l.name]}});this.applyGradients(u)}else this.applyGradients(s);return St(s),r?i:(i.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(n,r){return Gb(n,r)},t.prototype.dispose=function(){this.iterations_!=null&&St(this.iterations_)},t.prototype.saveIterations=function(){return Z(this,void 0,void 0,function(){return J(this,function(n){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:X(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return Z(this,void 0,void 0,function(){return J(this,function(n){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(n){return Z(this,void 0,void 0,function(){return J(this,function(r){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(n){return Z(this,void 0,void 0,function(){var r;return J(this,function(o){switch(o.label){case 0:return r=this,[4,n[0].tensor.data()];case 1:return r.iterations_=o.sent()[0],[2,n.slice(1)]}})})},t}(jE);Object.defineProperty(to,Symbol.hasInstance,{value:function(e){return e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null}});var GE=function(e){function t(n,r,o){o===void 0&&(o=null);var a=e.call(this)||this;return a.learningRate=n,a.rho=r,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=_.backend.epsilon()),a}return on(t,e),t.prototype.applyGradients=function(n){var r=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,a){var i=_.registeredVariables[o];r.accumulatedGrads[a]==null&&(r.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:le(function(){return me(i).variable(!1)})}),r.accumulatedUpdates[a]==null&&(r.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:le(function(){return me(i).variable(!1)})});var s=Array.isArray(n)?n[a].tensor:n[o];if(s!=null){var u=r.accumulatedGrads[a].variable,l=r.accumulatedUpdates[a].variable;le(function(){var c=u.mul(r.rho).add(s.square().mul(1-r.rho)),p=l.add(r.epsilon).sqrt().div(u.add(r.epsilon).sqrt()).mul(s),d=l.mul(r.rho).add(p.square().mul(1-r.rho));u.assign(c),l.assign(d);var f=p.mul(-r.learningRate).add(i);i.assign(f)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(St(this.accumulatedGrads.map(function(n){return n.variable})),St(this.accumulatedUpdates.map(function(n){return n.variable})))},t.prototype.getWeights=function(){return Z(this,void 0,void 0,function(){var n;return J(this,function(r){switch(r.label){case 0:return n=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(n.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(n){return Z(this,void 0,void 0,function(){var r;return J(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(n)];case 1:return n=o.sent(),r=n.length/2,this.accumulatedGrads=n.slice(0,r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=n.slice(r,2*r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(n,r){return new n(r.learningRate,r.rho,r.epsilon)},t.className="Adadelta",t}(to);eo(GE);var qE=function(e){function t(n,r){r===void 0&&(r=.1);var o=e.call(this)||this;return o.learningRate=n,o.initialAccumulatorValue=r,o.accumulatedGrads=[],o}return on(t,e),t.prototype.applyGradients=function(n){var r=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,a){var i=_.registeredVariables[o];r.accumulatedGrads[a]==null&&(r.accumulatedGrads[a]={originalName:o+"/accumulator",variable:le(function(){return lu(i.shape,r.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(n)?n[a].tensor:n[o];if(s!=null){var u=r.accumulatedGrads[a].variable;le(function(){var l=u.add(s.square());u.assign(l);var c=s.div(l.add(_.backend.epsilon()).sqrt()).mul(-r.learningRate).add(i);i.assign(c)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&St(this.accumulatedGrads.map(function(n){return n.variable}))},t.prototype.getWeights=function(){return Z(this,void 0,void 0,function(){return J(this,function(n){switch(n.label){case 0:return[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(this.accumulatedGrads.map(function(r){return{name:r.originalName,tensor:r.variable}}))]}})})},t.prototype.setWeights=function(n){return Z(this,void 0,void 0,function(){return J(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(n)];case 1:return n=r.sent(),this.accumulatedGrads=n.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(n,r){return new n(r.learningRate,r.initialAccumulatorValue)},t.className="Adagrad",t}(to);eo(qE);var KE=function(e){function t(n,r,o,a){a===void 0&&(a=null);var i=e.call(this)||this;return i.learningRate=n,i.beta1=r,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],le(function(){i.accBeta1=X(r).variable(),i.accBeta2=X(o).variable()}),a==null&&(i.epsilon=_.backend.epsilon()),i}return on(t,e),t.prototype.applyGradients=function(n){var r=this,o=Array.isArray(n)?n.map(function(a){return a.name}):Object.keys(n);le(function(){var a=Fn(1,r.accBeta1),i=Fn(1,r.accBeta2);o.forEach(function(s,u){var l=_.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:le(function(){return me(l).variable(!1)})}),r.accumulatedSecondMoment[u]==null&&(r.accumulatedSecondMoment[u]={originalName:s+"/v",variable:le(function(){return me(l).variable(!1)})});var c=Array.isArray(n)?n[u].tensor:n[s];if(c!=null){var p=r.accumulatedFirstMoment[u].variable,d=r.accumulatedSecondMoment[u].variable,f=p.mul(r.beta1).add(c.mul(1-r.beta1)),m=d.mul(r.beta2).add(c.square().mul(1-r.beta2)),v=f.div(a),y=m.div(i);p.assign(f),d.assign(m);var h=v.div(y.sqrt().add(r.epsilon)).mul(-r.learningRate).add(l);l.assign(h)}}),r.accBeta1.assign(r.accBeta1.mul(r.beta1)),r.accBeta2.assign(r.accBeta2.mul(r.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&St(this.accumulatedFirstMoment.map(function(n){return n.variable})),this.accumulatedSecondMoment!=null&&St(this.accumulatedSecondMoment.map(function(n){return n.variable}))},t.prototype.getWeights=function(){return Z(this,void 0,void 0,function(){var n;return J(this,function(r){switch(r.label){case 0:return n=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(n.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(n){return Z(this,void 0,void 0,function(){var r,o=this;return J(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(n)];case 1:return n=a.sent(),le(function(){o.accBeta1.assign(ti(o.beta1,o.iterations_+1)),o.accBeta2.assign(ti(o.beta2,o.iterations_+1))}),r=n.length/2,this.accumulatedFirstMoment=n.slice(0,r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=n.slice(r,2*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(n,r){return new n(r.learningRate,r.beta1,r.beta2,r.epsilon)},t.className="Adam",t}(to);eo(KE);var XE=function(e){function t(n,r,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=e.call(this)||this;return s.learningRate=n,s.beta1=r,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],le(function(){s.iteration=X(0).variable(),s.accBeta1=X(r).variable()}),a==null&&(s.epsilon=_.backend.epsilon()),s}return on(t,e),t.prototype.applyGradients=function(n){var r=this,o=Array.isArray(n)?n.map(function(a){return a.name}):Object.keys(n);le(function(){var a=Fn(1,r.accBeta1),i=Un(-r.learningRate,r.iteration.mul(r.decay).add(1));o.forEach(function(s,u){var l=_.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:me(l).variable(!1)}),r.accumulatedWeightedInfNorm[u]==null&&(r.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:me(l).variable(!1)});var c=Array.isArray(n)?n[u].tensor:n[s];if(c!=null){var p=r.accumulatedFirstMoment[u].variable,d=r.accumulatedWeightedInfNorm[u].variable,f=p.mul(r.beta1).add(c.mul(1-r.beta1)),m=d.mul(r.beta2),v=c.abs(),y=m.maximum(v);p.assign(f),d.assign(y);var h=i.div(a).mul(f.div(y.add(r.epsilon))).add(l);l.assign(h)}}),r.iteration.assign(r.iteration.add(1)),r.accBeta1.assign(r.accBeta1.mul(r.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&St(this.accumulatedFirstMoment.map(function(n){return n.variable})),this.accumulatedWeightedInfNorm!=null&&St(this.accumulatedWeightedInfNorm.map(function(n){return n.variable}))},t.prototype.getWeights=function(){return Z(this,void 0,void 0,function(){return J(this,function(n){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(n){return Z(this,void 0,void 0,function(){return J(this,function(r){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(n,r){return new n(r.learningRate,r.beta1,r.beta2,r.epsilon,r.decay)},t.className="Adamax",t}(to);eo(XE);var W0=function(e){function t(n){var r=e.call(this)||this;return r.learningRate=n,r.setLearningRate(n),r}return on(t,e),t.prototype.applyGradients=function(n){var r=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,a){var i=Array.isArray(n)?n[a].tensor:n[o];if(i!=null){var s=_.registeredVariables[o];le(function(){var u=r.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(n){this.learningRate=n,this.c!=null&&this.c.dispose(),this.c=mb(X(-n))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return Z(this,void 0,void 0,function(){return J(this,function(n){switch(n.label){case 0:return[4,this.saveIterations()];case 1:return[2,[n.sent()]]}})})},t.prototype.setWeights=function(n){return Z(this,void 0,void 0,function(){return J(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(n)];case 1:if((n=r.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(n,r){return new n(r.learningRate)},t.className="SGD",t}(to);eo(W0);var YE=function(e){function t(n,r,o){o===void 0&&(o=!1);var a=e.call(this,n)||this;return a.learningRate=n,a.momentum=r,a.useNesterov=o,a.accumulations=[],a.m=X(a.momentum),a}return on(t,e),t.prototype.applyGradients=function(n){var r=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,a){var i=_.registeredVariables[o];r.accumulations[a]==null&&(r.accumulations[a]={originalName:o+"/momentum",variable:le(function(){return me(i).variable(!1)})});var s=r.accumulations[a].variable,u=Array.isArray(n)?n[a].tensor:n[o];u!=null&&le(function(){var l,c=r.m.mul(s).add(u);l=r.useNesterov?r.c.mul(u.add(c.mul(r.m))).add(i):r.c.mul(c).add(i),s.assign(c),i.assign(l)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&St(this.accumulations.map(function(n){return n.variable}))},t.prototype.setMomentum=function(n){this.momentum=n},t.prototype.getWeights=function(){return Z(this,void 0,void 0,function(){return J(this,function(n){switch(n.label){case 0:return[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(this.accumulations.map(function(r){return{name:r.originalName,tensor:r.variable}}))]}})})},t.prototype.setWeights=function(n){return Z(this,void 0,void 0,function(){return J(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(n)];case 1:return n=r.sent(),this.accumulations=n.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(n,r){return new n(r.learningRate,r.momentum,r.useNesterov)},t.className="Momentum",t}(W0);eo(YE);var QE=function(e){function t(n,r,o,a,i){r===void 0&&(r=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=e.call(this)||this;if(s.learningRate=n,s.decay=r,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=_.backend.epsilon()),n==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return on(t,e),t.prototype.applyGradients=function(n){var r=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,a){var i=_.registeredVariables[o];r.accumulatedMeanSquares[a]==null&&(r.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:le(function(){return me(i).variable(!1)})}),r.accumulatedMoments[a]==null&&(r.accumulatedMoments[a]={originalName:o+"/momentum",variable:le(function(){return me(i).variable(!1)})}),r.accumulatedMeanGrads[a]==null&&r.centered&&(r.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:le(function(){return me(i).variable(!1)})});var s=Array.isArray(n)?n[a].tensor:n[o];if(s!=null){var u=r.accumulatedMeanSquares[a].variable,l=r.accumulatedMoments[a].variable;le(function(){var c=u.mul(r.decay).add(s.square().mul(1-r.decay));if(r.centered){var p=r.accumulatedMeanGrads[a].variable,d=p.mul(r.decay).add(s.mul(1-r.decay)),f=l.mul(r.momentum).add(s.mul(r.learningRate).div(c.sub(d.square().add(r.epsilon)).sqrt()));u.assign(c),p.assign(d),l.assign(f);var m=i.sub(f);i.assign(m)}else{var v=u.mul(r.decay).add(s.square().mul(1-r.decay));f=l.mul(r.momentum).add(s.mul(r.learningRate).div(v.add(r.epsilon).sqrt())),u.assign(v),l.assign(f),m=i.sub(f),i.assign(m)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&St(this.accumulatedMeanSquares.map(function(n){return n.variable})),this.accumulatedMeanGrads!=null&&this.centered&&St(this.accumulatedMeanGrads.map(function(n){return n.variable})),this.accumulatedMoments!=null&&St(this.accumulatedMoments.map(function(n){return n.variable}))},t.prototype.getWeights=function(){return Z(this,void 0,void 0,function(){var n;return J(this,function(r){switch(r.label){case 0:return n=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&n.push.apply(n,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(n.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(n){return Z(this,void 0,void 0,function(){var r;return J(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(n)];case 1:return n=o.sent(),r=this.centered?n.length/3:n.length/2,this.accumulatedMeanSquares=n.slice(0,r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=n.slice(r,2*r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=n.slice(2*r,3*r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(n,r){return new n(r.learningRate,r.decay,r.momentum,r.epsilon,r.centered)},t.className="RMSProp",t}(to);eo(QE);Ae.prototype.add=function(e){return Wn(this,e)},Ae.prototype.broadcastTo=function(e){return Vy(this,e)},Ae.prototype.div=function(e){return Un(this,e)},Ae.prototype.divNoNan=function(e){return pd(this,e)},Ae.prototype.squaredDifference=function(e){return md(this,e)},Ae.prototype.tile=function(e){return zr(this,e)},Ae.prototype.oneHot=function(e,t,n){return t===void 0&&(t=1),n===void 0&&(n=0),ni(this,e,t,n)},Ae.prototype.transpose=function(e){return Vt(this,e)},Ae.prototype.pad=function(e,t){return Sr(this,e,t)},Ae.prototype.batchNorm=function(e,t,n,r,o){return Jo(this,e,t,n,r,o)},B=vE;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Kt,Fh,Fc=function(){return(Fc=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function dr(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(l){try{u(r.next(l))}catch(c){a(c)}}function s(l){try{u(r.throw(l))}catch(c){a(c)}}function u(l){l.done?o(l.value):new n(function(c){c(l.value)}).then(i,s)}u((r=r.apply(e,[])).next())})}function fr(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){i=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(c[0]===6&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(p){c=[6,p],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([u,l])}}}(function(e){e[e.DT_INVALID=0]="DT_INVALID",e[e.DT_FLOAT=1]="DT_FLOAT",e[e.DT_DOUBLE=2]="DT_DOUBLE",e[e.DT_INT32=3]="DT_INT32",e[e.DT_UINT8=4]="DT_UINT8",e[e.DT_INT16=5]="DT_INT16",e[e.DT_INT8=6]="DT_INT8",e[e.DT_STRING=7]="DT_STRING",e[e.DT_COMPLEX64=8]="DT_COMPLEX64",e[e.DT_INT64=9]="DT_INT64",e[e.DT_BOOL=10]="DT_BOOL",e[e.DT_QINT8=11]="DT_QINT8",e[e.DT_QUINT8=12]="DT_QUINT8",e[e.DT_QINT32=13]="DT_QINT32",e[e.DT_BFLOAT16=14]="DT_BFLOAT16",e[e.DT_FLOAT_REF=101]="DT_FLOAT_REF",e[e.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",e[e.DT_INT32_REF=103]="DT_INT32_REF",e[e.DT_UINT8_REF=104]="DT_UINT8_REF",e[e.DT_INT16_REF=105]="DT_INT16_REF",e[e.DT_INT8_REF=106]="DT_INT8_REF",e[e.DT_STRING_REF=107]="DT_STRING_REF",e[e.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",e[e.DT_INT64_REF=109]="DT_INT64_REF",e[e.DT_BOOL_REF=110]="DT_BOOL_REF",e[e.DT_QINT8_REF=111]="DT_QINT8_REF",e[e.DT_QUINT8_REF=112]="DT_QUINT8_REF",e[e.DT_QINT32_REF=113]="DT_QINT32_REF",e[e.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF"})(Kt||(Kt={})),function(e){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(e.CheckpointFormatVersion||(e.CheckpointFormatVersion={}))}(Fh||(Fh={}));var ZE={};function U0(e){return ZE[e]}function C(e,t,n,r){var o=t.inputParams[e];if(o&&o.inputIndexStart!==void 0){var a=o.inputIndexStart,i=o.inputIndexEnd===0?void 0:o.inputIndexEnd===void 0?a+1:o.inputIndexEnd;if(o.type==="tensor")return ct(t.inputNames[o.inputIndexStart],n,r);if(o.type==="tensors")return t.inputNames.slice(a,i).map(function(l){return ct(l,n,r)});var s=Array.prototype.slice.call(ct(t.inputNames.slice(a)[0],n,r).dataSync());return o.type==="number"?s[0]:s}var u=t.attrParams[e];return u&&u.value}function ct(e,t,n){var r=kt(e),o=r[0],a=r[1],i=n.currentContextIds.find(function(s){return!!t[js(o,s)]});return i!==void 0?t[js(o,i)][a]:void 0}function JE(e,t,n){return t[js(e,n.currentContextId)]}function Bo(e,t){var n=kt(e),r=n[0],o=n[1];return[js(r,t&&t.currentContextId),o]}function js(e,t){return t?e+"-"+t:e}function kt(e){var t=e.lastIndexOf(":");return t===-1?[e,0]:[e.substring(0,t),Number(e.substring(t+1))]}function El(e,t){for(var n=[],r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n}var eN=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],tN=Object.freeze({json:eN}),nN=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"clip_value_min",name:"clipValueMin",type:"number"},{tfName:"clip_value_max",name:"clipValueMax",type:"number"}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"clipValueMin",name:"clipValueMin",type:"number",defaultValue:0},{tfName:"clipValueMax",name:"clipValueMax",type:"number",defaultValue:6}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],rN=Object.freeze({json:nN}),oN=[{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"}]}],aN=Object.freeze({json:oN}),iN=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]}],sN=Object.freeze({json:iN}),uN=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],lN=Object.freeze({json:uN}),cN=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],pN=Object.freeze({json:cN}),dN=[{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]}],fN=Object.freeze({json:dN}),hN=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],mN=Object.freeze({json:hN}),vN=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]}],gN=Object.freeze({json:vN}),yN=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],xN=Object.freeze({json:yN}),wN=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],bN=Object.freeze({json:wN}),CN=[{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}],SN=Object.freeze({json:CN}),EN=[{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]}],NN=Object.freeze({json:EN}),kN=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool",notSupported:!0}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}],IN=Object.freeze({json:kN}),RN=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],TN=Object.freeze({json:RN}),AN=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]}],_N=Object.freeze({json:AN}),DN=function(){function e(){var t=[tN,rN,aN,sN,lN,pN,fN,xN,gN,mN,bN,SN,NN,IN,TN,_N],n=[].concat.apply([],t.map(function(r){return r.json}));this.opMappers=n.reduce(function(r,o){return r[o.tfOpName]=o,r},{})}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.transformGraph=function(t,n){var r=this;n===void 0&&(n={});var o=[],a=[],i=t.node.reduce(function(d,f){return d[f.name]=r.mapNode(f),f.op.startsWith("Placeholder")&&o.push(d[f.name]),f.op==="Const"&&a.push(d[f.name]),d},{}),s=[],u=[],l={},c={};n!=null&&(l=this.mapSignatureEntries(n.inputs),c=this.mapSignatureEntries(n.outputs));var p=Object.keys(i);return p.forEach(function(d){var f=i[d];f.inputNames.forEach(function(m){var v=Bo(m)[0];f.inputs.push(i[v]),i[v].children.push(f)})}),Object.keys(c).length===0?p.forEach(function(d){var f=i[d];f.children.length===0&&u.push(f)}):Object.keys(c).forEach(function(d){var f=Bo(d)[0],m=i[f];m!=null&&(m.signatureKey=c[d],u.push(m))}),Object.keys(l).length>0?Object.keys(l).forEach(function(d){var f=Bo(d)[0],m=i[f];m&&(m.signatureKey=l[d],s.push(m))}):s=o,{nodes:i,inputs:s,outputs:u,weights:a,placeholders:o,signature:n}},e.prototype.mapSignatureEntries=function(t){return Object.keys(t||{}).reduce(function(n,r){return n[t[r].name]=r,n},{})},e.prototype.mapNode=function(t){var n=U0(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});var r={name:t.name,op:t.op,category:n.category,inputNames:(t.input||[]).map(function(o){return o.startsWith("^")?o.substr(1):o}),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr};return n.inputs!=null&&(r.inputParams=n.inputs.reduce(function(o,a){return o[a.name]={type:a.type,inputIndexStart:a.start,inputIndexEnd:a.end},o},{})),n.attrs!=null&&(r.attrParams=n.attrs.reduce(function(o,a){var i=a.type,s=void 0;switch(a.type){case"string":(s=Mc(t.attr,a.tfName,a.defaultValue))===void 0&&a.tfDeprecatedName&&(s=Mc(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"string[]":(s=Uc(t.attr,a.tfName,a.defaultValue))===void 0&&a.tfDeprecatedName&&(s=Uc(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"number":(s=Lc(t.attr,a.tfName,a.defaultValue||0))===void 0&&a.tfDeprecatedName&&(s=Lc(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"number[]":(s=Wc(t.attr,a.tfName,a.defaultValue))===void 0&&a.tfDeprecatedName&&(s=Wc(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool":(s=Pc(t.attr,a.tfName,a.defaultValue))===void 0&&a.tfDeprecatedName&&(s=Pc(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool[]":(s=jc(t.attr,a.tfName,a.defaultValue))===void 0&&a.tfDeprecatedName&&(s=jc(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape":(s=Vc(t.attr,a.tfName,a.defaultValue))===void 0&&a.tfDeprecatedName&&(s=Vc(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape[]":(s=$c(t.attr,a.tfName,a.defaultValue))===void 0&&a.tfDeprecatedName&&(s=$c(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype":(s=Bc(t.attr,a.tfName,a.defaultValue))===void 0&&a.tfDeprecatedName&&(s=Bc(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype[]":(s=zc(t.attr,a.tfName,a.defaultValue))===void 0&&a.tfDeprecatedName&&(s=zc(t.attr,a.tfDeprecatedName,a.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error("Unsupported param type: "+a.type+" for op: "+t.op)}return o[a.name]={value:s,type:i},o},{})),r},e}();function ON(e){var t=z().global;if(t.atob!==void 0)return t.atob(e);if(typeof Buffer<"u")return new Buffer(e,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function $0(e,t){var n=Array.isArray(e)?String.fromCharCode.apply(null,e):ON(e);return t?n:n.toLowerCase()}function Mc(e,t,n,r){r===void 0&&(r=!1);var o=e[t];return o!=null?$0(o.s,r):n}function Pc(e,t,n){var r=e[t];return r?r.b:n}function Lc(e,t,n){var r=e[t]||{},o=r.i!=null?r.i:r.f!=null?r.f:n;return typeof o=="number"?o:parseInt(o,10)}function j0(e){switch(typeof e=="string"&&(e=Kt[e]),e){case Kt.DT_FLOAT:return"float32";case Kt.DT_INT32:case Kt.DT_INT64:case Kt.DT_INT8:case Kt.DT_UINT8:return"int32";case Kt.DT_BOOL:return"bool";case Kt.DT_DOUBLE:return"float32";case Kt.DT_STRING:return"string";default:return null}}function Bc(e,t,n){var r=e[t];return r&&r.type?j0(r.type):n}function zc(e,t,n){var r=e[t];return r&&r.list&&r.list.type?r.list.type.map(function(o){return j0(o)}):n}function H0(e){if(!e.unknownRank)return e.dim!=null?e.dim.map(function(t){return typeof t.size=="number"?t.size:parseInt(t.size,10)}):[]}function Vc(e,t,n){var r=e[t];return r&&r.shape?H0(r.shape):n}function Wc(e,t,n){var r=e[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(function(o){return typeof o=="number"?o:parseInt(o,10)}):n}function Uc(e,t,n,r){r===void 0&&(r=!1);var o=e[t];return o&&o.list&&o.list.s?o.list.s.map(function(a){return $0(a,r)}):n}function $c(e,t,n){var r=e[t];return r&&r.list&&r.list.shape?r.list.shape.map(function(o){return H0(o)}):n}function jc(e,t,n){var r=e[t];return r&&r.list&&r.list.b?r.list.b:n}var FN=function(){function e(t,n,r){var o=this;this.node=t,this.tensorMap=n,this.context=r,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(function(a){return o.getInput(a)}),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce(function(a,i){return a[i]=o.getAttr(i),a},{}))}return e.prototype.getInput=function(t){return ct(t,this.tensorMap,this.context)},e.prototype.getAttr=function(t,n){var r=this.node.rawAttrs[t];if(r.tensor!=null)return ct(t,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return Lc(this.node.rawAttrs,t,n);if(r.s!=null)return Mc(this.node.rawAttrs,t,n);if(r.b!=null)return Pc(this.node.rawAttrs,t,n);if(r.shape!=null)return Vc(this.node.rawAttrs,t,n);if(r.type!=null)return Bc(this.node.rawAttrs,t,n);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return Wc(this.node.rawAttrs,t,n);if(r.list.s!=null)return Uc(this.node.rawAttrs,t,n);if(r.list.shape!=null)return $c(this.node.rawAttrs,t,n);if(r.list.b!=null)return jc(this.node.rawAttrs,t,n);if(r.list.type!=null)return zc(this.node.rawAttrs,t,n)}return n},e}(),MN=function(e,t,n){switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[Wn(C("a",e,t,n),C("b",e,t,n))];case"AddN":return[Fy(C("tensors",e,t,n))];case"FloorMod":case"Mod":return[uy(C("a",e,t,n),C("b",e,t,n))];case"Mul":return[Ve(C("a",e,t,n),C("b",e,t,n))];case"RealDiv":case"Div":return[Un(C("a",e,t,n),C("b",e,t,n))];case"DivNoNan":return[pd(C("a",e,t,n),C("b",e,t,n))];case"FloorDiv":return[Jp(C("a",e,t,n),C("b",e,t,n))];case"Sub":return[Fn(C("a",e,t,n),C("b",e,t,n))];case"Minimum":return[ed(C("a",e,t,n),C("b",e,t,n))];case"Maximum":return[hu(C("a",e,t,n),C("b",e,t,n))];case"Pow":return[ti(C("a",e,t,n),C("b",e,t,n))];case"SquaredDifference":return[md(C("a",e,t,n),C("b",e,t,n))];default:throw TypeError("Node type "+e.op+" is not implemented")}},PN=function(e,t,n){switch(e.op){case"Abs":case"ComplexAbs":return[Fg(C("x",e,t,n))];case"Acos":return[Mg(C("x",e,t,n))];case"Acosh":return[Pg(C("x",e,t,n))];case"Asin":return[Lg(C("x",e,t,n))];case"Asinh":return[Bg(C("x",e,t,n))];case"Atan":return[zg(C("x",e,t,n))];case"Atan2":return[sy(C("x",e,t,n),C("y",e,t,n))];case"Atanh":return[Vg(C("x",e,t,n))];case"Ceil":return[Wg(C("x",e,t,n))];case"Complex":return[Ke(C("real",e,t,n),C("imag",e,t,n))];case"Cos":return[$g(C("x",e,t,n))];case"Cosh":return[jg(C("x",e,t,n))];case"Elu":return[bd(C("x",e,t,n))];case"Erf":return[Hg(C("x",e,t,n))];case"Exp":return[Gg(C("x",e,t,n))];case"Expm1":return[qg(C("x",e,t,n))];case"Floor":return[Kg(C("x",e,t,n))];case"Log":return[Xg(C("x",e,t,n))];case"Log1p":return[Yg(C("x",e,t,n))];case"Imag":return[Jt(C("x",e,t,n))];case"Neg":return[fu(C("x",e,t,n))];case"Reciprocal":return[Qg(C("x",e,t,n))];case"Real":return[At(C("x",e,t,n))];case"Relu":return[Sd(C("x",e,t,n))];case"Round":return[Zg(C("x",e,t,n))];case"Selu":return[b0(C("x",e,t,n))];case"Sigmoid":return[Jg(C("x",e,t,n))];case"Sin":return[ty(C("x",e,t,n))];case"Sign":return[ey(C("x",e,t,n))];case"Sinh":return[ny(C("x",e,t,n))];case"Softplus":return[ry(C("x",e,t,n))];case"Sqrt":return[oy(C("x",e,t,n))];case"Square":return[hd(C("x",e,t,n))];case"Tanh":return[iy(C("x",e,t,n))];case"Tan":return[ay(C("x",e,t,n))];case"Relu6":case"ClipByValue":return[Ug(C("x",e,t,n),C("clipValueMin",e,t,n),C("clipValueMax",e,t,n))];case"Rsqrt":return[Zp(ct(e.inputNames[0],t,n))];case"Prod":return[wd(C("x",e,t,n),C("axes",e,t,n))];case"LeakyRelu":return[x0(C("x",e,t,n),C("alpha",e,t,n))];case"Prelu":return[Cd(C("x",e,t,n),C("alpha",e,t,n))];default:throw TypeError("Node type "+e.op+" is not implemented")}},LN=function(){function e(t,n,r,o,a,i,s){this.name=t,this.dtype=n,this.maxSize=r,this.elementShape=o,this.identicalElementShapes=a,this.dynamicSize=i,this.clearAfterRead=s,this.tensors=[],this.closed_=!1,this.id=e.nextId++}return Object.defineProperty(e.prototype,"closed",{get:function(){return this.closed_},enumerable:!0,configurable:!0}),e.prototype.clearAndClose=function(){this.tensors.forEach(function(t){return t.tensor.dispose()}),this.tensors=[],this.closed_=!0},e.prototype.size=function(){return this.tensors.length},e.prototype.read=function(t){if(this.closed_)throw new Error("TensorArray "+this.name+" has already been closed.");if(t<0||t>=this.tensors.length)throw new Error("Tried to read from index "+t+", but array size is: "+this.tensors.length);var n=this.tensors[t];if(n.cleared)throw new Error("TensorArray "+this.name+": Could not read index "+t+" twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).");return this.clearAfterRead&&(n.cleared=!0),n.read=!0,n.tensor},e.prototype.readMany=function(t){var n=this;return t.map(function(r){return n.read(r)})},e.prototype.write=function(t,n){if(this.closed_)throw new Error("TensorArray "+this.name+" has already been closed.");if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error("Tried to write to index "+t+", but array is not resizeable and size is: "+this.maxSize);var r=this.tensors[t]||{};if(n.dtype!==this.dtype)throw new Error("TensorArray "+this.name+": Could not write to TensorArray index "+t+`,
          because the value dtype is `+n.dtype+", but TensorArray dtype is "+this.dtype+".");if(this.size()!==0||this.elementShape!=null&&this.elementShape.length!==0||(this.elementShape=n.shape),this.assertShapesMatchAllowUndefinedSize(this.elementShape,n.shape,"TensorArray "+this.name+": Could not write to TensorArray index "+t+"."),r&&r.read)throw new Error("TensorArray "+this.name+": Could not write to TensorArray index "+t+", because it has already been read.");if(r&&r.written)throw new Error("TensorArray "+this.name+": Could not write to TensorArray index "+t+", because it has already been written.");r.tensor=n,r.written=!0,this.tensors[t]=r},e.prototype.writeMany=function(t,n){var r=this;if(t.length!==n.length)throw new Error("TensorArray "+this.name+": could not write multiple tensors,because the index size: "+t.length+" is not the same as tensors size: "+n.length+".");t.forEach(function(o,a){return r.write(o,n[a])})},e.prototype.gather=function(t,n){if(n&&n!==this.dtype)throw new Error("TensorArray dtype is "+this.dtype+" but gather requested dtype "+n);if(!t){t=[];for(var r=0;r<this.size();r++)t.push(r)}if(t.length===0)return Ye([],[0].concat(this.elementShape));var o=this.readMany(t);return this.assertShapesMatchAllowUndefinedSize(this.elementShape,o[0].shape,"TensorArray shape mismatch: "),Vn(o,0)},e.prototype.concat=function(t){if(t&&t!==this.dtype)throw new Error("TensorArray dtype is "+this.dtype+" but concat requested dtype "+t);if(this.size()===0)return Ye([],[0].concat(this.elementShape));for(var n=[],r=0;r<this.size();r++)n.push(r);var o=this.readMany(n);return this.assertShapesMatchAllowUndefinedSize(this.elementShape,o[0].shape,"TensorArray shape mismatch: tensor array shape ("+this.elementShape+") vs first tensor shape ("+o[0].shape+")"),Gt(o,0)},e.prototype.scatter=function(t,n){if(n.dtype!==this.dtype)throw new Error("TensorArray dtype is "+this.dtype+" but tensor has dtype "+n.dtype);if(t.length!==n.shape[0])throw new Error("Expected len(indices) == tensor.shape[0], but saw: "+t.length+" vs. "+n.shape[0]);var r=Math.max.apply(Math,t);if(!this.dynamicSize&&r>=this.maxSize)throw new Error("Max index must be < array size ("+r+"  vs. "+this.maxSize+")");this.writeMany(t,pi(n,0))},e.prototype.split=function(t,n){var r=this;if(n.dtype!==this.dtype)throw new Error("TensorArray dtype is "+this.dtype+" but tensor has dtype "+n.dtype);var o=0,a=t.map(function(c){return o+=c});if(o!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        `+o+", and tensor's shape is: "+n.shape);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error("TensorArray's size is not equal to the size of lengths ("+this.maxSize+" vs. "+t.length+"), and the TensorArray is not marked as dynamically resizeable");var i=o===0?0:n.size/o,s=[];le(function(){n=n.reshape([1,o,i]);for(var c=0;c<t.length;++c){var p=[0,c===0?0:a[c-1],0],d=[1,t[c],i];s[c]=yn(n,p,d).reshape(r.elementShape)}return s});for(var u=[],l=0;l<t.length;l++)u[l]=l;this.writeMany(u,s)},e.prototype.assertShapesMatchAllowUndefinedSize=function(t,n,r){r===void 0&&(r=""),vr.assert(this.shapesEqualAllowUndefinedSize(t,n),function(){return r+" Shapes "+t+" and "+n+" must match"})},e.prototype.shapesEqualAllowUndefinedSize=function(t,n){if(t.length!==n.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==-1&&n[r]!==-1&&t[r]!==n[r])return!1;return!0},e.nextId=0,e}(),BN=void 0,zN=function(e,t,n){return dr(BN,void 0,void 0,function(){var r,o,a,i,s,u,l,c,p,d,f,m,v,y,h,g,x,w,b,S,k,N,R,T,D,F,U,W,V,$,H,O,P,L,q;return fr(this,function(K){switch(K.label){case 0:switch(e.op){case"LoopCond":return[3,1];case"Switch":return[3,2];case"Merge":return[3,4];case"Enter":return[3,5];case"Exit":return[3,6];case"NextIteration":return[3,7];case"TensorArrayV3":return[3,8];case"TensorArrayWriteV3":return[3,9];case"TensorArrayReadV3":return[3,10];case"TensorArrayGatherV3":return[3,11];case"TensorArrayScatterV3":return[3,12];case"TensorArrayConcatV3":return[3,13];case"TensorArraySplitV3":return[3,14];case"TensorArraySizeV3":return[3,15];case"TensorArrayCloseV3":return[3,16]}return[3,17];case 1:return[2,[C("pred",e,t,n).clone()]];case 2:return r=C("pred",e,t,n),o=C("data",e,t,n),[4,r.data()];case 3:return[2,K.sent()[0]?[void 0,o.clone()]:[o.clone(),void 0]];case 4:return[2,(a=e.inputNames.find(function(te){return ct(te,t,n)!==void 0}))?[ct(a,t,n).clone()]:void 0];case 5:return i=C("frameName",e,t,n),s=C("tensor",e,t,n),n.enterFrame(i),[2,[s.clone()]];case 6:return u=C("tensor",e,t,n),n.exitFrame(),[2,[u.clone()]];case 7:return l=C("tensor",e,t,n),n.nextIteration(),[2,[l.clone()]];case 8:return c=C("size",e,t,n),p=C("dtype",e,t,n),d=C("elementShape",e,t,n),f=C("dynamicSize",e,t,n),m=C("clearAfterRead",e,t,n),v=C("identicalElementShapes",e,t,n),y=C("name",e,t,n),h=new LN(y,p,c,d,v,f,m),n.addTensorArray(h),[2,[X(h.id),X(1)]];case 9:return g=C("tensorArrayId",e,t,n),x=C("index",e,t,n),w=C("tensor",e,t,n),n.getTensorArray(g).write(x,w),[2,[X(1)]];case 10:return b=C("tensorArrayId",e,t,n),S=C("index",e,t,n),[2,[n.getTensorArray(b).read(S)]];case 11:return k=C("tensorArrayId",e,t,n),N=C("indices",e,t,n),R=C("dtype",e,t,n),[2,[n.getTensorArray(k).gather(N,R)]];case 12:return T=C("tensorArrayId",e,t,n),D=C("indices",e,t,n),F=C("tensor",e,t,n),n.getTensorArray(T).scatter(D,F),[2,[X(1)]];case 13:return U=C("tensorArrayId",e,t,n),W=n.getTensorArray(U),V=C("dtype",e,t,n),[2,[W.concat(V)]];case 14:return $=C("tensorArrayId",e,t,n),H=C("tensor",e,t,n),O=C("lengths",e,t,n),n.getTensorArray($).split(O,H),[2,[X(1)]];case 15:return P=C("tensorArrayId",e,t,n),L=n.getTensorArray(P),[2,[X(L.size(),"int32")]];case 16:return q=C("tensorArrayId",e,t,n),n.getTensorArray(q).clearAndClose(),[2,[X(0)]];case 17:throw TypeError("Node type "+e.op+" is not implemented")}})})},VN=function(e,t,n){switch(e.op){case"Conv1D":var r=C("stride",e,t,n),o=C("pad",e,t,n),a=C("dataFormat",e,t,n).toUpperCase(),i=C("dilation",e,t,n);return[Zy(C("x",e,t,n),C("filter",e,t,n),r,o,a,i)];case"Conv2D":r=C("strides",e,t,n),o=C("pad",e,t,n),a=C("dataFormat",e,t,n).toUpperCase();var s=C("dilations",e,t,n);return[ea(C("x",e,t,n),C("filter",e,t,n),[r[1],r[2]],o,a,[s[1],s[2]])];case"_FusedConv2D":case"FusedDepthwiseConv2dNative":var u=C("fusedOps",e,t,n),l=u[0],c=u[1],p=l==="biasadd",d=c==="prelu",f=l==="fusedbatchnorm",m=C("numArgs",e,t,n);if(p){if(d&&m!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!d&&m!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(f)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported.");r=C("strides",e,t,n),o=C("pad",e,t,n),a=C("dataFormat",e,t,n).toUpperCase(),s=C("dilations",e,t,n);var v=C("args",e,t,n),y=v[0],h=v[1];return[(e.op==="_FusedConv2D"?Us.conv2d:Us.depthwiseConv2d)({x:C("x",e,t,n),filter:C("filter",e,t,n),strides:[r[1],r[2]],pad:o,dataFormat:a,dilations:[s[1],s[2]],bias:y,activation:c,preluActivationWeights:h})];case"Conv2DBackpropInput":case"Conv2dTranspose":var g=C("outputShape",e,t,n);return r=C("strides",e,t,n),o=C("pad",e,t,n),[r0(C("x",e,t,n),C("filter",e,t,n),g,[r[1],r[2]],o)];case"DepthwiseConv2dNative":case"DepthwiseConv2d":return r=C("strides",e,t,n),o=C("pad",e,t,n),s=C("dilations",e,t,n),a=C("dataFormat",e,t,n).toUpperCase(),[wu(C("input",e,t,n),C("filter",e,t,n),[r[1],r[2]],o,a,[s[1],s[2]])];case"Conv3D":return r=C("strides",e,t,n),o=C("pad",e,t,n),a=C("dataFormat",e,t,n).toUpperCase(),s=C("dilations",e,t,n),[Jy(C("x",e,t,n),C("filter",e,t,n),[r[1],r[2],r[3]],o,a,[s[1],s[2],s[3]])];case"AvgPool":r=C("strides",e,t,n),o=C("pad",e,t,n);var x=C("kernelSize",e,t,n);return[s0(C("x",e,t,n),[x[1],x[2]],[r[1],r[2]],o)];case"MaxPool":return r=C("strides",e,t,n),o=C("pad",e,t,n),x=C("kernelSize",e,t,n),[i0(C("x",e,t,n),[x[1],x[2]],[r[1],r[2]],o)];case"MaxPoolWithArgmax":r=C("strides",e,t,n),o=C("pad",e,t,n),x=C("kernelSize",e,t,n);var w=C("includeBatchInIndex",e,t,n),b=c0(C("x",e,t,n),[x[1],x[2]],[r[1],r[2]],o,w);return[b.result,b.indexes];case"AvgPool3D":return r=C("strides",e,t,n),o=C("pad",e,t,n),x=C("kernelSize",e,t,n),[l0(C("x",e,t,n),[x[1],x[2],x[3]],[r[1],r[2],r[3]],o)];case"MaxPool3D":return r=C("strides",e,t,n),o=C("pad",e,t,n),x=C("kernelSize",e,t,n),[u0(C("x",e,t,n),[x[1],x[2],x[3]],[r[1],r[2],r[3]],o)];default:throw TypeError("Node type "+e.op+" is not implemented")}},WN=function(e,t,n){switch(e.op){case"Fill":var r=C("shape",e,t,n),o=C("dtype",e,t,n),a=C("value",e,t,n);return[lu(r,a,o)];case"LinSpace":var i=C("start",e,t,n),s=C("stop",e,t,n),u=C("num",e,t,n);return[Cg(i,s,u)];case"Multinomial":var l=C("logits",e,t,n),c=C("numSamples",e,t,n),p=C("seed",e,t,n);return[$y(l,c,p)];case"OneHot":var d=C("indices",e,t,n),f=C("depth",e,t,n),m=C("onValue",e,t,n),v=C("offValue",e,t,n);return[ni(d,f,m,v)];case"Ones":return[Qr(C("shape",e,t,n),C("dtype",e,t,n))];case"OnesLike":return[Kp(C("x",e,t,n))];case"RandomUniform":return[fd(C("shape",e,t,n),C("minval",e,t,n),C("maxval",e,t,n),C("dtype",e,t,n))];case"Range":i=C("start",e,t,n);var y=C("stop",e,t,n),h=C("step",e,t,n);return[ei(i,y,h,C("dtype",e,t,n))];case"TruncatedNormal":r=C("shape",e,t,n);var g=C("mean",e,t,n),x=C("stdDev",e,t,n);return p=C("seed",e,t,n),[jy(r,g,x,C("dtype",e,t,n),p)];case"Zeros":return[Te(C("shape",e,t,n),C("dtype",e,t,n))];case"ZerosLike":return[me(C("x",e,t,n))];default:throw TypeError("Node type "+e.op+" is not implemented")}},UN=void 0,$N=function(e,t,n){return dr(UN,void 0,void 0,function(){var r,o,a,i,s,u,l,c;return fr(this,function(p){switch(p.label){case 0:switch(e.op){case"NonMaxSuppressionV5":case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":return[3,1];case"Where":return[3,5];case"ListDiff":return[3,7]}return[3,8];case 1:return r=C("boxes",e,t,n),o=C("scores",e,t,n),a=C("maxOutputSize",e,t,n),i=C("iouThreshold",e,t,n),s=C("scoreThreshold",e,t,n),e.op!=="NonMaxSuppressionV5"?[3,3]:(u=C("softNmsSigma",e,t,n),[4,Fo.nonMaxSuppressionWithScoreAsync(r,o,a,i,s,u)]);case 2:return[2,[(c=p.sent()).selectedIndices,c.selectedScores]];case 3:return[4,Fo.nonMaxSuppressionAsync(r,o,a,i,s)];case 4:return[2,[p.sent()]];case 5:return l=C("condition",e,t,n).asType("bool"),[4,cd(l)];case 6:return c=[p.sent()],l.dispose(),[2,c];case 7:return[2,Ng(C("x",e,t,n),C("y",e,t,n))];case 8:throw TypeError("Node type "+e.op+" is not implemented")}})})},jN=function(e,t,n){switch(e.op){case"TopKV2":var r=C("x",e,t,n),o=C("k",e,t,n),a=C("sorted",e,t,n),i=N0(r,o,a);return[i.values,i.indices];default:throw TypeError("Node type "+e.op+" is not implemented")}},HN=function(e,t,n){switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":var r=C("default",e,t,n);return[ct(e.name,t,n)||r];case"Placeholder":return[ct(e.name,t,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":return[C("x",e,t,n).clone()];case"IdentityN":return C("x",e,t,n).map(function(l){return l.clone()});case"Snapshot":return[C("x",e,t,n).clone()];case"Shape":return[zn(C("x",e,t,n).shape,"int32")];case"ShapeN":return C("x",e,t,n).map(function(l){return zn(l.shape)});case"Size":return[X(C("x",e,t,n).size,"int32")];case"Rank":return[X(C("x",e,t,n).rank,"int32")];case"NoOp":return[X(1)];case"Print":var o=C("x",e,t,n),a=C("data",e,t,n),i=C("message",e,t,n),s=C("summarize",e,t,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(i);for(var u=0;u<a.length;u++)console.log(Array.prototype.slice.call(a[u].dataSync()).slice(0,s));return[o];default:throw TypeError("Node type "+e.op+" is not implemented")}},GN=function(e,t,n){switch(e.op){case"ResizeBilinear":var r=C("images",e,t,n),o=C("size",e,t,n),a=C("alignCorners",e,t,n);return[Fo.resizeBilinear(r,[o[0],o[1]],a)];case"ResizeNearestNeighbor":return r=C("images",e,t,n),o=C("size",e,t,n),a=C("alignCorners",e,t,n),[Fo.resizeNearestNeighbor(r,[o[0],o[1]],a)];case"CropAndResize":var i=C("image",e,t,n),s=C("boxes",e,t,n),u=C("boxInd",e,t,n),l=C("cropSize",e,t,n),c=C("method",e,t,n),p=C("extrapolationValue",e,t,n);return[Fo.cropAndResize(i,s,u,l,c,p)];default:throw TypeError("Node type "+e.op+" is not implemented")}},qN=function(e,t,n){switch(e.op){case"Equal":return[vd(C("a",e,t,n),C("b",e,t,n))];case"NotEqual":return[Ky(C("a",e,t,n),C("b",e,t,n))];case"Greater":return[Hy(C("a",e,t,n),C("b",e,t,n))];case"GreaterEqual":return[gd(C("a",e,t,n),C("b",e,t,n))];case"Less":return[Gy(C("a",e,t,n),C("b",e,t,n))];case"LessEqual":return[qy(C("a",e,t,n),C("b",e,t,n))];case"LogicalAnd":return[fi(C("a",e,t,n),C("b",e,t,n))];case"LogicalNot":return[Wy(C("a",e,t,n))];case"LogicalOr":return[ld(C("a",e,t,n),C("b",e,t,n))];case"Select":case"SelectV2":return[gr(C("condition",e,t,n),C("a",e,t,n),C("b",e,t,n))];default:throw TypeError("Node type "+e.op+" is not implemented")}},KN=function(e,t,n){switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[xd(C("a",e,t,n),C("b",e,t,n),C("transposeA",e,t,n),C("transposeB",e,t,n))];case"Transpose":return[Vt(C("x",e,t,n),C("perm",e,t,n))];case"_FusedMatMul":var r=C("fusedOps",e,t,n),o=r[0],a=r[1],i=o==="biasadd",s=a==="prelu",u=C("numArgs",e,t,n);if(i){if(s&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!s&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}var l=C("args",e,t,n),c=l[0],p=l[1];return[Us.matMul({a:C("a",e,t,n),b:C("b",e,t,n),transposeA:C("transposeA",e,t,n),transposeB:C("transposeB",e,t,n),bias:c,activation:a,preluActivationWeights:p})];default:throw TypeError("Node type "+e.op+" is not implemented")}},XN=function(e,t,n){switch(e.op){case"FusedBatchNorm":case"FusedBatchNormV2":case"FusedBatchNormV3":return[Jo(C("x",e,t,n),C("mean",e,t,n),C("variance",e,t,n),C("offset",e,t,n),C("scale",e,t,n),C("epsilon",e,t,n))];case"LRN":return[C0(C("x",e,t,n),C("radius",e,t,n),C("bias",e,t,n),C("alpha",e,t,n),C("beta",e,t,n))];case"Softmax":return[vu(C("x",e,t,n))];case"LogSoftmax":return[fy(C("x",e,t,n))];case"SparseToDense":return[Nd(C("sparseIndices",e,t,n),C("outputShape",e,t,n),C("sparseValues",e,t,n),C("defaultValue",e,t,n))];default:throw TypeError("Node type "+e.op+" is not implemented")}},YN=function(e,t,n){switch(e.op){case"Max":var r=C("axis",e,t,n),o=C("keepDims",e,t,n);return[v0(C("x",e,t,n),r,o)];case"Mean":return r=C("axis",e,t,n),o=C("keepDims",e,t,n),[g0(C("x",e,t,n),r,o)];case"Min":return r=C("axis",e,t,n),o=C("keepDims",e,t,n),[y0(C("x",e,t,n),r,o)];case"Sum":return r=C("axis",e,t,n),o=C("keepDims",e,t,n),[Tn(C("x",e,t,n),r,o)];case"All":return r=C("axis",e,t,n),o=C("keepDims",e,t,n),[d0(C("x",e,t,n),r,o)];case"Any":return r=C("axis",e,t,n),o=C("keepDims",e,t,n),[f0(C("x",e,t,n),r,o)];case"ArgMax":return r=C("axis",e,t,n),[h0(C("x",e,t,n),r)];case"ArgMin":return r=C("axis",e,t,n),[m0(C("x",e,t,n),r)];case"Prod":return r=C("axis",e,t,n),o=C("keepDims",e,t,n),[wd(C("x",e,t,n),r,o)];default:throw TypeError("Node type "+e.op+" is not implemented")}},QN=function(e,t,n){switch(e.op){case"ConcatV2":case"Concat":var r=C("n",e,t,n),o=C("axis",e,t,n),a=C("tensors",e,t,n);return a=a.slice(0,r),[Gt(a,o)];case"GatherV2":case"Gather":o=C("axis",e,t,n);var i=C("x",e,t,n),s=C("indices",e,t,n);return[xu(i,s.asType("int32"),o)];case"ReverseV2":case"Reverse":return o=C("axis",e,t,n),i=C("x",e,t,n),[ta(i,o)];case"Slice":var u=C("begin",e,t,n),l=C("size",e,t,n);return[yn(C("x",e,t,n),u,l)];case"StridedSlice":u=C("begin",e,t,n);var c=C("end",e,t,n),p=C("strides",e,t,n),d=C("beginMask",e,t,n),f=C("endMask",e,t,n),m=C("ellipsisMask",e,t,n),v=C("newAxisMask",e,t,n),y=C("shrinkAxisMask",e,t,n),h=C("x",e,t,n);if(u.length===1&&h.shape.length>1)for(var g=1;g<h.shape.length;g++)u.push(0),c.push(h.shape[g]),p.push(p[0]);return[E0(h,u,c,p,d,f,m,v,y)];case"Pack":return le(function(){var T=C("axis",e,t,n),D=C("tensors",e,t,n),F=D[0].shape,U=D[0].squeeze().shape,W=D.map(function(V){var $=vr.arraysEqual(V.shape,F);if(!$&&!vr.arraysEqual(V.squeeze().shape,U))throw new Error("the input tensors shape does not match");return $?V:V.reshape(F)});return[Vn(W,T)]});case"Unpack":return le(function(){var T=C("axis",e,t,n),D=C("tensor",e,t,n);return pi(D,T)});case"Tile":var x=C("reps",e,t,n);return[zr(C("x",e,t,n),x)];case"Split":case"SplitV":o=C("axis",e,t,n);var w=C("numOrSizeSplits",e,t,n);return cu(C("x",e,t,n),w,o);case"ScatterNd":s=C("indices",e,t,n);var b=C("values",e,t,n),S=C("shape",e,t,n);return[k0(s,b,S)];case"GatherNd":var k=C("x",e,t,n);return s=C("indices",e,t,n),[I0(k,s)];case"SparseToDense":s=C("sparseIndices",e,t,n),S=C("outputShape",e,t,n);var N=C("sparseValues",e,t,n),R=C("defaultValue",e,t,n);return[Nd(s,N,S,N.dtype===R.dtype?R:R.asType(N.dtype))];default:throw TypeError("Node type "+e.op+" is not implemented")}},ZN=function(e,t,n){switch(e.op){case"FFT":return[bu(C("x",e,t,n))];case"IFFT":return[ri(C("x",e,t,n))];case"RFFT":return[Cu(C("x",e,t,n))];case"IRFFT":return[Ed(C("x",e,t,n))];default:throw TypeError("Node type "+e.op+" is not implemented")}},JN=function(e,t,n){switch(e.op){case"Cast":return[Sg(C("x",e,t,n),C("dtype",e,t,n))];case"ExpandDims":var r=C("axis",e,t,n);return[Rn(C("x",e,t,n),r)];case"Squeeze":return r=C("axis",e,t,n),[Qp(C("x",e,t,n),r)];case"Reshape":return[fn(C("x",e,t,n),C("shape",e,t,n))];case"PadV2":case"Pad":return[Sr(C("x",e,t,n),El(C("padding",e,t,n),2),C("constantValue",e,t,n))];case"SpaceToBatchND":var o=C("blockShape",e,t,n),a=El(C("paddings",e,t,n),2);return[Yp(C("x",e,t,n),o,a)];case"BatchToSpaceND":o=C("blockShape",e,t,n);var i=El(C("crops",e,t,n),2);return[Xp(C("x",e,t,n),o,i)];case"DepthToSpace":var s=C("blockSize",e,t,n),u=C("dataFormat",e,t,n).toUpperCase();return[Eg(C("x",e,t,n),s,u)];default:throw TypeError("Node type "+e.op+" is not implemented")}};function Mh(e,t,n){var r=function(o,a,i){switch(o.category){case"arithmetic":return le(function(){return MN(o,a,i)});case"basic_math":return le(function(){return PN(o,a,i)});case"control":return zN(o,a,i);case"convolution":return le(function(){return VN(o,a,i)});case"creation":return le(function(){return WN(o,a,i)});case"dynamic":return $N(o,a,i);case"evaluation":return le(function(){return jN(o,a,i)});case"image":return le(function(){return GN(o,a,i)});case"graph":return le(function(){return HN(o,a,i)});case"logical":return le(function(){return qN(o,a,i)});case"matrices":return le(function(){return KN(o,a,i)});case"normalization":return le(function(){return XN(o,a,i)});case"reduction":return le(function(){return YN(o,a,i)});case"slice_join":return le(function(){return QN(o,a,i)});case"spectral":return le(function(){return ZN(o,a,i)});case"transformation":return le(function(){return JN(o,a,i)});case"custom":var s=U0(o.op);if(s&&s.customExecutor)return s.customExecutor(new FN(o,a,i));throw TypeError("Custom op "+o.op+" is not registered.");default:throw TypeError("Unknown op '"+o.op+"'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()")}}(e,t,n);return r instanceof Promise?r.then(function(o){return[].concat(o)}):[].concat(r)}var Ph=function(){function e(t,n){this.weightMap=t,this.tensorArrayMap=n,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}return e.prototype.newFrame=function(t,n){return{id:t,frameName:n,iterationId:0}},Object.defineProperty(e.prototype,"currentContext",{get:function(){return this.contexts},set:function(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentContextId",{get:function(){return this._currentContextIds[0]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentContextIds",{get:function(){return this._currentContextIds},enumerable:!0,configurable:!0}),e.prototype.generateCurrentContextIds=function(){for(var t=[],n=0;n<this.contexts.length-1;n++){var r=this.contexts.slice(0,this.contexts.length-n);t.push(this.contextIdforContexts(r))}t.push(""),this._currentContextIds=t},e.prototype.contextIdforContexts=function(t){return t?t.map(function(n){return n.id===0&&n.iterationId===0?"":n.frameName+"-"+n.iterationId}).join("/"):""},e.prototype.enterFrame=function(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))},e.prototype.exitFrame=function(){if(!(this.contexts&&this.contexts.length>1))throw new Error("Cannot exit frame, the context is empty");this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift()},e.prototype.nextIteration=function(){if(!(this.contexts&&this.contexts.length>0))throw new Error("Cannot increase frame iteration, the context is empty");this.contexts=this.contexts.slice(),this.lastId++;var t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))},e.prototype.getWeight=function(t){return this.weightMap[t]},e.prototype.addTensorArray=function(t){this.tensorArrayMap[t.id]=t},e.prototype.getTensorArray=function(t){return this.tensorArrayMap[t]},e}();function Lh(e,t,n){for(var r=new Set,o=[],a=null,i=null,s=new Set,u=Object.keys(e).map(function(p){return kt(p)[0]}),l=t.slice();l.length>0;){var c=l.pop();(G0(c)||rk(c))&&a==null&&(i=(a=c).children.map(function(p){return p.name}).filter(function(p){return r.has(p)})),r.add(c.name),n[c.name]==null&&u.indexOf(c.name)===-1&&(c.inputs.length!==0?c.inputs.forEach(function(p){s.has(p.name)||(s.add(p.name),l.push(p))}):o.push(c.name))}return{inputs:e,outputs:t,usedNodes:r,missingInputs:o,dynamicNode:a,syncInputs:i}}function ek(e,t,n){var r=n.usedNodes,o=n.inputs,a=[];Object.keys(o).map(function(l){return kt(l)[0]}).map(function(l){return e.nodes[l]}).forEach(function(l){r.has(l.name)&&a.push(l)}),e.weights.forEach(function(l){r.has(l.name)&&a.push(l)});for(var i=new Set,s=[];a.length>0;){var u=a.pop();i.add(u.name),t[u.name]||s.push(u),u.children.forEach(function(l){!i.has(l.name)&&r.has(l.name)&&l.inputs.every(function(c){return i.has(c.name)})&&a.push(l)})}return s}var tk=["Switch","Merge","Enter","Exit","NextIteration"],nk=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"];function G0(e){return tk.indexOf(e.op)>=0}function rk(e){return nk.indexOf(e.op)>=0}var ok=function(){function e(t){this.graph=t,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._outputs=t.outputs,this._inputs=t.inputs,this._signature=t.signature}return Object.defineProperty(e.prototype,"weightMap",{get:function(){return this._weightMap},set:function(t){var n=Object.keys(t).map(function(r){return t[r].map(function(o){return o.id})});this.weightIds=[].concat.apply([],n),this._weightMap=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputs",{get:function(){return this._inputs.map(function(t){return{name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outputs",{get:function(){return this._outputs.map(function(t){return{name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputNodes",{get:function(){return this._inputs.map(function(t){return t.signatureKey||t.name})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outputNodes",{get:function(){return this._outputs.map(function(t){return t.signatureKey||t.name})},enumerable:!0,configurable:!0}),e.prototype.getCompilationKey=function(t,n){var r=t.map(function(a){return a.name}).sort(),o=n.map(function(a){return a.name}).sort();return r.join(this.SEPERATOR)+"--"+o.join(this.SEPERATOR)},e.prototype.compile=function(t,n){var r=Lh(t,n,this.weightMap),o=r.missingInputs,a=r.dynamicNode,i=r.syncInputs;if(a!=null)throw new Error("This execution contains the node '"+a.name+"', which has the dynamic op '"+a.op+"'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs ["+i+"]");if(o.length>0){var s=n.map(function(l){return l.name}),u=Object.keys(t);throw new Error("Cannot compute the outputs ["+s+"] from the provided inputs ["+u+"]. Missing the following inputs: ["+o+"]")}return ek(this.graph,this.weightMap,r)},e.prototype.execute=function(t,n){var r=this;t=this.mapInputs(t);var o=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n);var a=o.map(function(c){return r.graph.nodes[kt(c)[0]]}),i=n.map(function(c){return r.graph.nodes[kt(c)[0]]}),s=this.getCompilationKey(a,i),u=this.compiledMap.get(s);u==null&&(u=this.compile(t,i),this.compiledMap.set(s,u));var l={};return le(function(){var c=new Ph(r._weightMap,l),p=Fc({},r.weightMap);Object.keys(t).forEach(function(h){var g=kt(h),x=g[0],w=[];w[g[1]]=t[h],p[x]=w});for(var d=r.getFrozenTensorIds(p),f={},m=0;m<u.length;m++){var v=u[m];if(!p[v.name]){var y=Mh(v,p,c);if(y instanceof Promise)throw new Error("The execution of the op '"+v.op+"' returned a promise. Please use model.executeAsync() instead.");p[v.name]=y,r.checkTensorForDisposal(v.name,v,p,c,d,n,f)}}return n.map(function(h){return ct(h,p,c)})})},e.prototype.getFrozenTensorIds=function(t){var n=[].concat.apply([],Object.keys(t).map(function(r){return t[r]}).map(function(r){return r.map(function(o){return o.id})}));return new Set(n)},e.prototype.checkTensorForDisposal=function(t,n,r,o,a,i,s){n.category!=="control"&&i.indexOf(t)===-1&&(r[t].forEach(function(u){u!=null&&(s[u.id]=(s[u.id]||0)+n.children.length)}),n.inputs.forEach(function(u){if(u.category!=="control"){var l=JE(u.name,r,o);l!=null&&l.forEach(function(c){if(c&&!a.has(c.id)){var p=s[c.id];p===1?(c.dispose(),delete s[c.id]):p!=null&&s[c.id]--}})}}))},e.prototype.executeAsync=function(t,n){return dr(this,void 0,void 0,function(){var r,o,a,i,s,u,l=this;return fr(this,function(c){switch(c.label){case 0:return t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n),r={},o=new Ph(this._weightMap,r),[4,this.executeWithControlFlow(t,o,n)];case 1:return a=c.sent(),i=n.map(function(p){return ct(p,a,o)}),s=new Set(i.map(function(p){return p.id})),u=new Set(Object.keys(t).map(function(p){return t[p].id})),Object.keys(a).forEach(function(p){a[p].forEach(function(d){!d||d.isDisposed||s.has(d.id)||u.has(d.id)||l.weightIds.indexOf(d.id)!==-1||d.dispose()})}),[2,i]}})})},e.prototype.executeWithControlFlow=function(t,n,r){return dr(this,void 0,void 0,function(){var o,a,i,s,u,l,c,p,d,f,m,v,y,h,g,x,w=this;return fr(this,function(b){switch(b.label){case 0:o=Object.keys(t),a=o.map(function(S){return w.graph.nodes[kt(S)[0]]}),i=r.map(function(S){return w.graph.nodes[kt(S)[0]]}),s=Lh(t,i,this.weightMap),u=s.usedNodes,l=s.missingInputs,c=s.dynamicNode,p=s.syncInputs,d=a.concat(this.graph.weights).map(function(S){return{node:S,contexts:n.currentContext}}),f=Fc({},this.weightMap),Object.keys(t).forEach(function(S){var k=kt(S),N=k[0],R=[];R[k[1]]=t[S],f[N]=R}),m={},v=this.getFrozenTensorIds(f),y={},b.label=1;case 1:return d.length>0?(h=this.processStack(a,d,n,f,y,v,r,m,u),[4,Promise.all(h)]):[3,3];case 2:return b.sent(),[3,1];case 3:if(c==null&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead."),(g=i.filter(function(S){return!G0(S)&&!ct(S.name,f,n)}).map(function(S){return S.name})).length>0)throw x="",c!=null&&(x="Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs ["+p+"]"),new Error("Cannot compute the outputs ["+g+"] from the provided inputs ["+o+"]. Consider providing the following inputs: ["+l+"]. "+x);return[2,f]}})})},e.prototype.processStack=function(t,n,r,o,a,i,s,u,l){for(var c=this,p=[],d=function(){var m=n.pop();r.currentContext=m.contexts;var v="";if(m.node.op==="Enter"&&C("isConstant",m.node,o,r)&&(v=Bo(m.node.name,r)[0]),t.indexOf(m.node)===-1){var y=Mh(m.node,o,r);v||(v=Bo(m.node.name,r)[0]);var h=r.currentContext;y instanceof Promise?p.push(y.then(function(g){return o[v]=g,r.currentContext=h,c.checkTensorForDisposal(v,m.node,o,r,i,s,u),c.processChildNodes(m.node,n,r,o,a,l),g})):(o[v]=y,f.checkTensorForDisposal(v,m.node,o,r,i,s,u),f.processChildNodes(m.node,n,r,o,a,l))}else f.processChildNodes(m.node,n,r,o,a,l)},f=this;n.length>0;)d();return p},e.prototype.processChildNodes=function(t,n,r,o,a,i){t.children.forEach(function(s){var u=Bo(s.name,r)[0];!a[u]&&i.has(s.name)&&(s.op==="Merge"?s.inputNames.some(function(l){return!!ct(l,o,r)})&&(a[u]=!0,n.push({contexts:r.currentContext,node:s})):s.inputNames.every(function(l){return!!ct(l,o,r)})&&(a[u]=!0,n.push({contexts:r.currentContext,node:s})))})},e.prototype.dispose=function(){var t=this;Object.keys(this.weightMap).forEach(function(n){return t.weightMap[n].forEach(function(r){return r.dispose()})})},e.prototype.checkInputShapeAndType=function(t){var n=this;Object.keys(t).forEach(function(r){var o=t[r],a=kt(r)[0],i=n.graph.nodes[a];if(i.attrParams.shape&&i.attrParams.shape.value){var s=i.attrParams.shape.value,u=s.length===o.shape.length&&o.shape.every(function(l,c){return s[c]===-1||s[c]===l});vr.assert(u,function(){return"The shape of dict['"+i.name+"'] provided in model.execute(dict) must be ["+s+"], but was ["+o.shape+"]"})}i.attrParams.dtype&&i.attrParams.dtype.value&&vr.assert(o.dtype===i.attrParams.dtype.value,function(){return"The dtype of dict['"+i.name+"'] provided in model.execute(dict) must be "+i.attrParams.dtype.value+", but was "+o.dtype})})},e.prototype.mapInputs=function(t){var n={};for(var r in t)this._signature!=null&&this._signature.inputs!=null&&this._signature.inputs[r]!=null?n[this._signature.inputs[r].name]=t[r]:n[r]=t[r];return n},e.prototype.checkInputs=function(t){var n=this,r=Object.keys(t).filter(function(o){var a=kt(o)[0];return n.graph.nodes[a]==null});if(r.length>0)throw new Error("The dict provided in model.execute(dict) has keys: ["+r+"] that are not part of graph")},e.prototype.mapOutputs=function(t){var n=this;return t.map(function(r){return n._signature!=null&&n._signature.outputs!=null&&n._signature.outputs[r]!=null?n._signature.outputs[r].name:r},{})},e.prototype.checkOutputs=function(t){var n=this;t.forEach(function(r){var o=kt(r)[0];if(!n.graph.nodes[o])throw new Error("The output '"+r+"' is not found in the graph")})},e}(),ak="?tfjs-format=file",ik="model.json",sk=function(){function e(t,n){n===void 0&&(n={}),this.modelUrl=t,this.loadOptions=n,this.version="n/a",n==null&&(this.loadOptions={})}return Object.defineProperty(e.prototype,"modelVersion",{get:function(){return this.version},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputNodes",{get:function(){return this.executor.inputNodes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outputNodes",{get:function(){return this.executor.outputNodes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputs",{get:function(){return this.executor.inputs},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outputs",{get:function(){return this.executor.outputs},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"weights",{get:function(){return this.executor.weightMap},enumerable:!0,configurable:!0}),e.prototype.findIOHandler=function(){var t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=ha.browserHTTPRequest(t,this.loadOptions);else{var n=ha.getLoadHandlers(t,this.loadOptions.onProgress);if(n.length===0)n.push(ha.browserHTTPRequest(t,this.loadOptions));else if(n.length>1)throw new Error("Found more than one ("+n.length+") load handlers for URL '"+[t]+"'");this.handler=n[0]}},e.prototype.load=function(){return dr(this,void 0,void 0,function(){var t,n,r,o;return fr(this,function(a){switch(a.label){case 0:if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");return t=this,[4,this.handler.load()];case 1:return t.artifacts=a.sent(),n=this.artifacts.modelTopology,r={},this.artifacts.userDefinedMetadata!=null&&(r=this.artifacts.userDefinedMetadata.signature),this.version=n.versions.producer+"."+n.versions.minConsumer,o=ha.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs),this.executor=new ok(DN.Instance.transformGraph(n,r)),this.executor.weightMap=this.convertTensorMapToTensorsMap(o),[2,!0]}})})},e.prototype.save=function(t,n){return dr(this,void 0,void 0,function(){var r;return fr(this,function(o){if(typeof t=="string"){if((r=ha.getSaveHandlers(t)).length===0)throw new Error("Cannot find any save handlers for URL '"+t+"'");if(r.length>1)throw new Error("Found more than one ("+r.length+") save handlers for URL '"+t+"'");t=r[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return[2,t.save(this.artifacts)]})})},e.prototype.predict=function(t,n){return this.execute(t,this.outputNodes)},e.prototype.normalizeInputs=function(t){if(!(t instanceof Ae||Array.isArray(t)))return t;if((t=Array.isArray(t)?t:[t]).length!==this.inputNodes.length)throw new Error("Input tensor count mismatch,the graph model has "+this.inputNodes.length+" placeholders, while there are "+t.length+" input tensors.");return this.inputNodes.reduce(function(n,r,o){return n[r]=t[o],n},{})},e.prototype.normalizeOutputs=function(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]},e.prototype.execute=function(t,n){t=this.normalizeInputs(t),n=this.normalizeOutputs(n);var r=this.executor.execute(t,n);return r.length>1?r:r[0]},e.prototype.executeAsync=function(t,n){return dr(this,void 0,void 0,function(){var r;return fr(this,function(o){switch(o.label){case 0:return t=this.normalizeInputs(t),n=this.normalizeOutputs(n),[4,this.executor.executeAsync(t,n)];case 1:return[2,(r=o.sent()).length>1?r:r[0]]}})})},e.prototype.convertTensorMapToTensorsMap=function(t){return Object.keys(t).reduce(function(n,r){return n[r]=[t[r]],n},{})},e.prototype.dispose=function(){this.executor.dispose()},e}();function uk(e,t){return t===void 0&&(t={}),dr(this,void 0,void 0,function(){var n;return fr(this,function(r){switch(r.label){case 0:if(e==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");return t==null&&(t={}),t.fromTFHub&&e.load==null&&(e.endsWith("/")||(e+="/"),e=""+e+ik+ak),[4,(n=new sk(e,t)).load()];case 1:return r.sent(),[2,n]}})})}/**
    * @license
    * Copyright 2019 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */function xa(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(l){try{u(r.next(l))}catch(c){a(c)}}function s(l){try{u(r.throw(l))}catch(c){a(c)}}function u(l){l.done?o(l.value):new n(function(c){c(l.value)}).then(i,s)}u((r=r.apply(e,[])).next())})}function wa(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){i=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(c[0]===6&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(p){c=[6,p],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([u,l])}}}function q0(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(l){try{u(r.next(l))}catch(c){a(c)}}function s(l){try{u(r.throw(l))}catch(c){a(c)}}function u(l){l.done?o(l.value):new n(function(c){c(l.value)}).then(i,s)}u((r=r.apply(e,[])).next())})}function K0(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){i=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(c[0]===6&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(p){c=[6,p],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([u,l])}}}var X0=function(e){for(var t=[],n=0,r=e;n<r.length;n++){var o=r[n];t.push(o)}return t},Bh=function(){this.parent=null,this.children={},this.end=!1,this.word=[[],0,0]},lk=function(){function e(){this.root=new Bh}return e.prototype.insert=function(t,n,r){for(var o=this.root,a=X0(t),i=0;i<a.length;i++)o.children[a[i]]||(o.children[a[i]]=new Bh,o.children[a[i]].parent=o,o.children[a[i]].word[0]=o.word[0].concat(a[i])),o=o.children[a[i]],i===a.length-1&&(o.end=!0,o.word[1]=n,o.word[2]=r)},e.prototype.commonPrefixSearch=function(t){for(var n=[],r=this.root.children[t[0]],o=0;o<t.length&&r;o++)r.end&&n.push(r.word),r=r.children[t[o+1]];return n.length||n.push([[t[0]],0,0]),n},e}(),zh="▁";function ck(e){var t=e.normalize("NFKC");return zh+t.replace(/ /g,zh)}var pk=6,dk=function(){function e(t){this.vocabulary=t,this.trie=new lk;for(var n=pk;n<this.vocabulary.length;n++)this.trie.insert(this.vocabulary[n][0],this.vocabulary[n][1],n)}return e.prototype.encode=function(t){var n=[],r=[],o=[];t=ck(t);for(var a=X0(t),i=0;i<=a.length;i++)n.push({}),r.push(0),o.push(0);for(i=0;i<a.length;i++)for(var s=this.trie.commonPrefixSearch(a.slice(i)),u=0;u<s.length;u++){var l=s[u],c={key:l[0],score:l[1],index:l[2]};n[i+(p=l[0].length)][i]==null&&(n[i+p][i]=[]),n[i+p][i].push(c)}for(var p=0;p<=a.length;p++)for(var d in n[p]){var f=n[p][d];for(u=0;u<f.length;u++){var m=f[u],v=m.score+o[p-m.key.length];(o[p]===0||v>=o[p])&&(o[p]=v,r[p]=f[u].index)}}for(var y=[],h=r.length-1;h>0;)y.push(r[h]),h-=this.vocabulary[r[h]][0].length;var g=[],x=!1;for(i=0;i<y.length;i++){var w=y[i];x&&w===0||g.push(w),x=w===0}return g.reverse()},e}(),fk="https://storage.googleapis.com/tfjs-models/savedmodel/universal_sentence_encoder/";function hk(e){return q0(this,void 0,void 0,function(){var t;return K0(this,function(n){switch(n.label){case 0:return[4,mk(e)];case 1:return t=n.sent(),[2,new dk(t)]}})})}function mk(e){return e===void 0&&(e=fk+"vocab.json"),q0(this,void 0,void 0,function(){return K0(this,function(t){switch(t.label){case 0:return[4,vr.fetch(e)];case 1:return[2,t.sent().json()]}})})}function vk(e,t){return xa(this,void 0,void 0,function(){var n;return wa(this,function(r){switch(r.label){case 0:return[4,(n=new gk(e,t)).load()];case 1:return r.sent(),[2,n]}})})}var gk=function(){function e(t,n){t===void 0&&(t=.85),n===void 0&&(n=[]),this.threshold=t,this.toxicityLabels=n}return e.prototype.loadModel=function(){return xa(this,void 0,void 0,function(){return wa(this,function(t){return[2,uk("https://tfhub.dev/tensorflow/tfjs-model/toxicity/1/default/1",{fromTFHub:!0})]})})},e.prototype.loadTokenizer=function(){return xa(this,void 0,void 0,function(){return wa(this,function(t){return[2,hk()]})})},e.prototype.load=function(){return xa(this,void 0,void 0,function(){var t,n,r,o=this;return wa(this,function(a){switch(a.label){case 0:return[4,Promise.all([this.loadModel(),this.loadTokenizer()])];case 1:return t=a.sent(),n=t[0],r=t[1],this.model=n,this.tokenizer=r,this.labels=n.outputs.map(function(i){return i.name.split("/")[0]}),this.toxicityLabels.length===0?this.toxicityLabels=this.labels:vr.assert(this.toxicityLabels.every(function(i){return o.labels.indexOf(i)>-1}),function(){return"toxicityLabels argument must contain only items from the model heads "+o.labels.join(", ")+", got "+o.toxicityLabels.join(", ")}),[2]}})})},e.prototype.classify=function(t){return xa(this,void 0,void 0,function(){var n,r,o,a,i,s,u,l=this;return wa(this,function(c){switch(c.label){case 0:for(typeof t=="string"&&(t=[t]),n=t.map(function(p){return l.tokenizer.encode(p)}),r=n.map(function(p,d){return p.map(function(f,m){return[d,m]})}),o=[],a=0;a<r.length;a++)o=o.concat(r[a]);return i=Br(o,[o.length,2],"int32"),s=zn(vr.flatten(n),"int32"),[4,this.model.executeAsync({Placeholder_1:i,Placeholder:s})];case 1:return u=c.sent(),i.dispose(),s.dispose(),[2,u.map(function(p,d){return{data:p,headIndex:d}}).filter(function(p){return l.toxicityLabels.indexOf(l.labels[p.headIndex])>-1}).map(function(p){for(var d=p.data.dataSync(),f=[],m=0;m<t.length;m++){var v=d.slice(2*m,2*m+2),y=null;Math.max(v[0],v[1])>l.threshold&&(y=v[0]<v[1]),f.push({probabilities:v,match:y})}return{label:l.labels[p.headIndex],results:f}})]}})})},e}();const yk=.8,xk=["toxicity","severe_toxicity","identity_attack","insult","threat"];class ko{constructor(){this.model=null}static getInstance(){return ko.instance||(ko.instance=new ko),ko.instance}async getModel(){return this.model||(this.model=await vk(yk,xk)),this.model}async resetModel(){this.model=null}}const Hc=ko.getInstance();class wk{static async analyze(t){if(!t.trim())throw new Error("Content cannot be empty");const r=await(await Hc.getModel()).classify([t]);if(!r||!Array.isArray(r))throw new Error("Invalid model predictions");const o=r.some(s=>{var u;return(u=s.results[0])==null?void 0:u.match}),a=r.filter(s=>{var u;return(u=s.results[0])==null?void 0:u.match}).map(s=>s.label),i=r.reduce((s,u)=>{var l,c;return s+((l=u.results[0])!=null&&l.match?(c=u.results[0])==null?void 0:c.probabilities[1]:0)},0)/r.length;return{toxic:o,severity:i,categories:a,timestamp:new Date}}}const Y0=()=>{const[e,t]=gt.useState(!1),[n,r]=gt.useState(null),o=gt.useCallback(async()=>{try{t(!0),r(null),await Hc.getModel()}catch(i){r("Failed to load moderation model. Please try again."),console.error("Error loading model:",i),await Hc.resetModel()}finally{t(!1)}},[]),a=gt.useCallback(async i=>{try{return t(!0),r(null),await wk.analyze(i)}catch(s){const u=s instanceof Error?s.message:"Failed to analyze content";return r(u),console.error("Error analyzing content:",s),null}finally{t(!1)}},[]);return{isLoading:e,analyzeContent:a,loadModel:o,error:n}},bk=({onContentSubmit:e})=>{const[t,n]=gt.useState(""),{analyzeContent:r,isLoading:o,error:a,loadModel:i}=Y0();gt.useEffect(()=>{i()},[i]);const s=async u=>{if(u.preventDefault(),!t.trim())return;const l=await r(t);l&&(e(t,l),n(""))};return he.jsxs("div",{className:"w-full max-w-2xl",children:[he.jsx("form",{onSubmit:s,className:"w-full",children:he.jsxs("div",{className:"relative",children:[he.jsx("textarea",{value:t,onChange:u=>n(u.target.value),placeholder:"Type your content here...",className:"w-full p-4 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none",rows:4}),he.jsx("button",{type:"submit",disabled:o||!t.trim(),className:"absolute bottom-4 right-4 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed",children:o?he.jsx(Jv,{className:"w-5 h-5 animate-pulse"}):he.jsx(Tw,{className:"w-5 h-5"})})]})}),a&&he.jsx("div",{className:"mt-2 p-2 text-sm text-red-600 bg-red-50 rounded-md",children:a})]})},Ck=({posts:e})=>he.jsx("div",{className:"w-full max-w-2xl space-y-4",children:e.map(t=>he.jsxs("div",{className:`p-4 rounded-lg border ${t.status==="approved"?"border-green-200 bg-green-50":t.status==="rejected"?"border-red-200 bg-red-50":"border-gray-200 bg-white"}`,children:[he.jsxs("div",{className:"flex items-start justify-between",children:[he.jsx("p",{className:"text-gray-800",children:t.content}),he.jsxs("div",{className:"ml-4",children:[t.status==="approved"&&he.jsx(Rw,{className:"w-5 h-5 text-green-500"}),t.status==="rejected"&&he.jsx(_w,{className:"w-5 h-5 text-red-500"}),t.status==="pending"&&he.jsx(Jv,{className:"w-5 h-5 text-yellow-500 animate-pulse"})]})]}),t.analysis&&he.jsxs("div",{className:"mt-2 text-sm",children:[he.jsxs("p",{className:"text-gray-600",children:["Severity: ",(t.analysis.severity*100).toFixed(1),"%"]}),t.analysis.categories.length>0&&he.jsx("div",{className:"flex flex-wrap gap-2 mt-1",children:t.analysis.categories.map(n=>he.jsx("span",{className:"px-2 py-1 text-xs rounded-full bg-red-100 text-red-800",children:n},n))})]})]},t.id))});function Sk(){const[e,t]=gt.useState([]),{loadModel:n,isLoading:r}=Y0();gt.useEffect(()=>{n()},[n]);const o=(a,i)=>{const s={id:Date.now().toString(),content:a,timestamp:new Date,analysis:i,status:i.toxic?"rejected":"approved"};t(u=>[s,...u])};return he.jsx("div",{className:"min-h-screen bg-gray-50",children:he.jsx("div",{className:"container mx-auto px-4 py-8",children:he.jsxs("div",{className:"flex flex-col items-center space-y-8",children:[he.jsxs("div",{className:"flex items-center space-x-2",children:[he.jsx(Aw,{className:"w-8 h-8 text-blue-500"}),he.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Real-time Content Moderation"})]}),r?he.jsxs("div",{className:"text-center",children:[he.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"}),he.jsx("p",{className:"mt-4 text-gray-600",children:"Loading moderation model..."})]}):he.jsxs(he.Fragment,{children:[he.jsx(bk,{onContentSubmit:o}),he.jsx(Ck,{posts:e})]})]})})})}Zv(document.getElementById("root")).render(he.jsx(gt.StrictMode,{children:he.jsx(Sk,{})}));
