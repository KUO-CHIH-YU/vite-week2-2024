import{r as C,e as ht,c as te,w as j,v as q,a as b,d as L,t as V,F as Ne,b as mt,f as yt,o as ne}from"./index-CkkWqgfu.js";function $e(e,t){return function(){return e.apply(t,arguments)}}const{toString:wt}=Object.prototype,{getPrototypeOf:Te}=Object,ae=(e=>t=>{const n=wt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),D=e=>(e=e.toLowerCase(),t=>ae(t)===e),ce=e=>t=>typeof t===e,{isArray:J}=Array,X=ce("undefined");function bt(e){return e!==null&&!X(e)&&e.constructor!==null&&!X(e.constructor)&&k(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ve=D("ArrayBuffer");function gt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ve(e.buffer),t}const Et=ce("string"),k=ce("function"),Je=ce("number"),le=e=>e!==null&&typeof e=="object",St=e=>e===!0||e===!1,re=e=>{if(ae(e)!=="object")return!1;const t=Te(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Rt=D("Date"),Tt=D("File"),Ot=D("Blob"),At=D("FileList"),xt=e=>le(e)&&k(e.pipe),_t=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||k(e.append)&&((t=ae(e))==="formdata"||t==="object"&&k(e.toString)&&e.toString()==="[object FormData]"))},Ct=D("URLSearchParams"),[Nt,Pt,kt,Ft]=["ReadableStream","Request","Response","Headers"].map(D),Ut=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Q(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),J(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function We(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const H=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ke=e=>!X(e)&&e!==H;function ye(){const{caseless:e}=Ke(this)&&this||{},t={},n=(r,s)=>{const o=e&&We(t,s)||s;re(t[o])&&re(r)?t[o]=ye(t[o],r):re(r)?t[o]=ye({},r):J(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Q(arguments[r],n);return t}const Lt=(e,t,n,{allOwnKeys:r}={})=>(Q(t,(s,o)=>{n&&k(s)?e[o]=$e(s,n):e[o]=s},{allOwnKeys:r}),e),Bt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Dt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},vt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&Te(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},jt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},qt=e=>{if(!e)return null;if(J(e))return e;let t=e.length;if(!Je(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},It=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Te(Uint8Array)),Ht=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Mt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},zt=D("HTMLFormElement"),$t=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Pe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Vt=D("RegExp"),Ge=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Q(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Jt=e=>{Ge(e,(t,n)=>{if(k(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(k(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Wt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return J(e)?r(e):r(String(e).split(t)),n},Kt=()=>{},Gt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,de="abcdefghijklmnopqrstuvwxyz",ke="0123456789",Xe={DIGIT:ke,ALPHA:de,ALPHA_DIGIT:de+de.toUpperCase()+ke},Xt=(e=16,t=Xe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Qt(e){return!!(e&&k(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Zt=e=>{const t=new Array(10),n=(r,s)=>{if(le(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=J(r)?[]:{};return Q(r,(i,c)=>{const f=n(i,s+1);!X(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Yt=D("AsyncFunction"),en=e=>e&&(le(e)||k(e))&&k(e.then)&&k(e.catch),Qe=((e,t)=>e?setImmediate:t?((n,r)=>(H.addEventListener("message",({source:s,data:o})=>{s===H&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),H.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",k(H.postMessage)),tn=typeof queueMicrotask<"u"?queueMicrotask.bind(H):typeof process<"u"&&process.nextTick||Qe,a={isArray:J,isArrayBuffer:Ve,isBuffer:bt,isFormData:_t,isArrayBufferView:gt,isString:Et,isNumber:Je,isBoolean:St,isObject:le,isPlainObject:re,isReadableStream:Nt,isRequest:Pt,isResponse:kt,isHeaders:Ft,isUndefined:X,isDate:Rt,isFile:Tt,isBlob:Ot,isRegExp:Vt,isFunction:k,isStream:xt,isURLSearchParams:Ct,isTypedArray:It,isFileList:At,forEach:Q,merge:ye,extend:Lt,trim:Ut,stripBOM:Bt,inherits:Dt,toFlatObject:vt,kindOf:ae,kindOfTest:D,endsWith:jt,toArray:qt,forEachEntry:Ht,matchAll:Mt,isHTMLForm:zt,hasOwnProperty:Pe,hasOwnProp:Pe,reduceDescriptors:Ge,freezeMethods:Jt,toObjectSet:Wt,toCamelCase:$t,noop:Kt,toFiniteNumber:Gt,findKey:We,global:H,isContextDefined:Ke,ALPHABET:Xe,generateString:Xt,isSpecCompliantForm:Qt,toJSONObject:Zt,isAsyncFn:Yt,isThenable:en,setImmediate:Qe,asap:tn};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ze=m.prototype,Ye={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ye[e]={value:e}});Object.defineProperties(m,Ye);Object.defineProperty(Ze,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Ze);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const nn=null;function we(e){return a.isPlainObject(e)||a.isArray(e)}function et(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Fe(e,t,n){return e?e.concat(t).map(function(s,o){return s=et(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function rn(e){return a.isArray(e)&&!e.some(we)}const sn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ue(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,p){return!a.isUndefined(p[y])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(a.isDate(h))return h.toISOString();if(!f&&a.isBlob(h))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(h)||a.isTypedArray(h)?f&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function l(h,y,p){let A=h;if(h&&!p&&typeof h=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),h=JSON.stringify(h);else if(a.isArray(h)&&rn(h)||(a.isFileList(h)||a.endsWith(y,"[]"))&&(A=a.toArray(h)))return y=et(y),A.forEach(function(w,_){!(a.isUndefined(w)||w===null)&&t.append(i===!0?Fe([y],_,o):i===null?y:y+"[]",u(w))}),!1}return we(h)?!0:(t.append(Fe(p,y,o),u(h)),!1)}const d=[],R=Object.assign(sn,{defaultVisitor:l,convertValue:u,isVisitable:we});function T(h,y){if(!a.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(h),a.forEach(h,function(A,x){(!(a.isUndefined(A)||A===null)&&s.call(t,A,a.isString(x)?x.trim():x,y,R))===!0&&T(A,y?y.concat(x):[x])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return T(e),t}function Ue(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Oe(e,t){this._pairs=[],e&&ue(e,this,t)}const tt=Oe.prototype;tt.append=function(t,n){this._pairs.push([t,n])};tt.toString=function(t){const n=t?function(r){return t.call(this,r,Ue)}:Ue;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function on(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function nt(e,t,n){if(!t)return e;const r=n&&n.encode||on,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new Oe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Le{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const rt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},an=typeof URLSearchParams<"u"?URLSearchParams:Oe,cn=typeof FormData<"u"?FormData:null,ln=typeof Blob<"u"?Blob:null,un={isBrowser:!0,classes:{URLSearchParams:an,FormData:cn,Blob:ln},protocols:["http","https","file","blob","url","data"]},Ae=typeof window<"u"&&typeof document<"u",fn=(e=>Ae&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),dn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",pn=Ae&&window.location.href||"http://localhost",hn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ae,hasStandardBrowserEnv:fn,hasStandardBrowserWebWorkerEnv:dn,origin:pn},Symbol.toStringTag,{value:"Module"})),B={...hn,...un};function mn(e,t){return ue(e,new B.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return B.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function yn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function wn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function st(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=wn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(yn(r),s,n,0)}),n}return null}function bn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Z={transitional:rt,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(st(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return mn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return ue(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),bn(t)):t}],transformResponse:[function(t){const n=this.transitional||Z.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:B.classes.FormData,Blob:B.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{Z.headers[e]={}});const gn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),En=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&gn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Be=Symbol("internals");function G(e){return e&&String(e).trim().toLowerCase()}function se(e){return e===!1||e==null?e:a.isArray(e)?e.map(se):String(e)}function Sn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Rn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function pe(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Tn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function On(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class P{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,u){const l=G(f);if(!l)throw new Error("header name must be a non-empty string");const d=a.findKey(s,l);(!d||s[d]===void 0||u===!0||u===void 0&&s[d]!==!1)&&(s[d||f]=se(c))}const i=(c,f)=>a.forEach(c,(u,l)=>o(u,l,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!Rn(t))i(En(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=G(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Sn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=G(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||pe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=G(i),i){const c=a.findKey(r,i);c&&(!n||pe(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||pe(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=se(s),delete n[o];return}const c=t?Tn(o):String(o).trim();c!==o&&delete n[o],n[c]=se(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Be]=this[Be]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=G(i);r[c]||(On(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}P.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(P.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(P);function he(e,t){const n=this||Z,r=t||n,s=P.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ot(e){return!!(e&&e.__CANCEL__)}function W(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(W,m,{__CANCEL__:!0});function it(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function An(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function xn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),l=r[o];i||(i=u),n[s]=f,r[s]=u;let d=o,R=0;for(;d!==s;)R+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const T=l&&u-l;return T?Math.round(R*1e3/T):void 0}}function _n(e,t){let n=0,r=1e3/t,s,o;const i=(u,l=Date.now())=>{n=l,s=null,o&&(clearTimeout(o),o=null),e.apply(null,u)};return[(...u)=>{const l=Date.now(),d=l-n;d>=r?i(u,l):(s=u,o||(o=setTimeout(()=>{o=null,i(s)},r-d)))},()=>s&&i(s)]}const oe=(e,t,n=3)=>{let r=0;const s=xn(50,250);return _n(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,u=s(f),l=i<=c;r=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:u||void 0,estimated:u&&c&&l?(c-i)/u:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},n)},De=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},ve=e=>(...t)=>a.asap(()=>e(...t)),Cn=B.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),Nn=B.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Pn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function kn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function at(e,t){return e&&!Pn(t)?kn(e,t):t}const je=e=>e instanceof P?{...e}:e;function z(e,t){t=t||{};const n={};function r(u,l,d){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:d},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,d){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,d)}else return r(u,l,d)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,d){if(d in t)return r(u,l);if(d in e)return r(void 0,u)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s(je(u),je(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const d=f[l]||s,R=d(e[l],t[l],l);a.isUndefined(R)&&d!==c||(n[l]=R)}),n}const ct=e=>{const t=z({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=P.from(i),t.url=nt(at(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(B.hasStandardBrowserEnv||B.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[u,...l]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...l].join("; "))}}if(B.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Cn(t.url))){const u=s&&o&&Nn.read(o);u&&i.set(s,u)}return t},Fn=typeof XMLHttpRequest<"u",Un=Fn&&function(e){return new Promise(function(n,r){const s=ct(e);let o=s.data;const i=P.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:u}=s,l,d,R,T,h;function y(){T&&T(),h&&h(),s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function A(){if(!p)return;const w=P.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),N={data:!c||c==="text"||c==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:w,config:e,request:p};it(function(U){n(U),y()},function(U){r(U),y()},N),p=null}"onloadend"in p?p.onloadend=A:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(A)},p.onabort=function(){p&&(r(new m("Request aborted",m.ECONNABORTED,e,p)),p=null)},p.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,p)),p=null},p.ontimeout=function(){let _=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const N=s.transitional||rt;s.timeoutErrorMessage&&(_=s.timeoutErrorMessage),r(new m(_,N.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,p)),p=null},o===void 0&&i.setContentType(null),"setRequestHeader"in p&&a.forEach(i.toJSON(),function(_,N){p.setRequestHeader(N,_)}),a.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),c&&c!=="json"&&(p.responseType=s.responseType),u&&([R,h]=oe(u,!0),p.addEventListener("progress",R)),f&&p.upload&&([d,T]=oe(f),p.upload.addEventListener("progress",d),p.upload.addEventListener("loadend",T)),(s.cancelToken||s.signal)&&(l=w=>{p&&(r(!w||w.type?new W(null,e,p):w),p.abort(),p=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l)));const x=An(s.url);if(x&&B.protocols.indexOf(x)===-1){r(new m("Unsupported protocol "+x+":",m.ERR_BAD_REQUEST,e));return}p.send(o||null)})},Ln=(e,t)=>{let n=new AbortController,r;const s=function(f){if(!r){r=!0,i();const u=f instanceof Error?f:this.reason;n.abort(u instanceof m?u:new W(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{s(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},Bn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Dn=async function*(e,t,n){for await(const r of e)yield*Bn(ArrayBuffer.isView(r)?r:await n(String(r)),t)},qe=(e,t,n,r,s)=>{const o=Dn(e,t,s);let i=0,c,f=u=>{c||(c=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:l,value:d}=await o.next();if(l){f(),u.close();return}let R=d.byteLength;if(n){let T=i+=R;n(T)}u.enqueue(new Uint8Array(d))}catch(l){throw f(l),l}},cancel(u){return f(u),o.return()}},{highWaterMark:2})},fe=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",lt=fe&&typeof ReadableStream=="function",be=fe&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),ut=(e,...t)=>{try{return!!e(...t)}catch{return!1}},vn=lt&&ut(()=>{let e=!1;const t=new Request(B.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Ie=64*1024,ge=lt&&ut(()=>a.isReadableStream(new Response("").body)),ie={stream:ge&&(e=>e.body)};fe&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!ie[t]&&(ie[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const jn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await be(e)).byteLength},qn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??jn(t)},In=fe&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:u,headers:l,withCredentials:d="same-origin",fetchOptions:R}=ct(e);u=u?(u+"").toLowerCase():"text";let[T,h]=s||o||i?Ln([s,o],i):[],y,p;const A=()=>{!y&&setTimeout(()=>{T&&T.unsubscribe()}),y=!0};let x;try{if(f&&vn&&n!=="get"&&n!=="head"&&(x=await qn(l,r))!==0){let F=new Request(t,{method:"POST",body:r,duplex:"half"}),U;if(a.isFormData(r)&&(U=F.headers.get("content-type"))&&l.setContentType(U),F.body){const[K,$]=De(x,oe(ve(f)));r=qe(F.body,Ie,K,$,be)}}a.isString(d)||(d=d?"include":"omit"),p=new Request(t,{...R,signal:T,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:d});let w=await fetch(p);const _=ge&&(u==="stream"||u==="response");if(ge&&(c||_)){const F={};["status","statusText","headers"].forEach(Y=>{F[Y]=w[Y]});const U=a.toFiniteNumber(w.headers.get("content-length")),[K,$]=c&&De(U,oe(ve(c),!0))||[];w=new Response(qe(w.body,Ie,K,()=>{$&&$(),_&&A()},be),F)}u=u||"text";let N=await ie[a.findKey(ie,u)||"text"](w,e);return!_&&A(),h&&h(),await new Promise((F,U)=>{it(F,U,{data:N,headers:P.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:p})})}catch(w){throw A(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,p),{cause:w.cause||w}):m.from(w,w&&w.code,e,p)}}),Ee={http:nn,xhr:Un,fetch:In};a.forEach(Ee,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const He=e=>`- ${e}`,Hn=e=>a.isFunction(e)||e===null||e===!1,ft={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Hn(n)&&(r=Ee[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(He).join(`
`):" "+He(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Ee};function me(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new W(null,e)}function Me(e){return me(e),e.headers=P.from(e.headers),e.data=he.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ft.getAdapter(e.adapter||Z.adapter)(e).then(function(r){return me(e),r.data=he.call(e,e.transformResponse,r),r.headers=P.from(r.headers),r},function(r){return ot(r)||(me(e),r&&r.response&&(r.response.data=he.call(e,e.transformResponse,r.response),r.response.headers=P.from(r.response.headers))),Promise.reject(r)})}const dt="1.7.3",xe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{xe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ze={};xe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+dt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!ze[i]&&(ze[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Mn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const Se={assertOptions:Mn,validators:xe},I=Se.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new Le,response:new Le}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=z(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Se.assertOptions(r,{silentJSONParsing:I.transitional(I.boolean),forcedJSONParsing:I.transitional(I.boolean),clarifyTimeoutError:I.transitional(I.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Se.assertOptions(s,{encode:I.function,serialize:I.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],h=>{delete o[h]}),n.headers=P.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let l,d=0,R;if(!f){const h=[Me.bind(this),void 0];for(h.unshift.apply(h,c),h.push.apply(h,u),R=h.length,l=Promise.resolve(n);d<R;)l=l.then(h[d++],h[d++]);return l}R=c.length;let T=n;for(d=0;d<R;){const h=c[d++],y=c[d++];try{T=h(T)}catch(p){y.call(this,p);break}}try{l=Me.call(this,T)}catch(h){return Promise.reject(h)}for(d=0,R=u.length;d<R;)l=l.then(u[d++],u[d++]);return l}getUri(t){t=z(this.defaults,t);const n=at(t.baseURL,t.url);return nt(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(z(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(z(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});class _e{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new W(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new _e(function(s){t=s}),cancel:t}}}function zn(e){return function(n){return e.apply(null,n)}}function $n(e){return a.isObject(e)&&e.isAxiosError===!0}const Re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Re).forEach(([e,t])=>{Re[t]=e});function pt(e){const t=new M(e),n=$e(M.prototype.request,t);return a.extend(n,M.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return pt(z(e,s))},n}const S=pt(Z);S.Axios=M;S.CanceledError=W;S.CancelToken=_e;S.isCancel=ot;S.VERSION=dt;S.toFormData=ue;S.AxiosError=m;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=zn;S.isAxiosError=$n;S.mergeConfig=z;S.AxiosHeaders=P;S.formToJSON=e=>st(a.isHTMLForm(e)?new FormData(e):e);S.getAdapter=ft.getAdapter;S.HttpStatusCode=Re;S.default=S;const Vn=b("h2",null,"註冊",-1),Jn=b("br",null,null,-1),Wn=b("br",null,null,-1),Kn=b("h2",null,"登入",-1),Gn=b("br",null,null,-1),Xn=b("br",null,null,-1),Qn=b("h2",null,"驗證",-1),Zn=b("h2",null,"登出",-1),Yn=b("hr",null,null,-1),er={key:0},tr=b("h1",null,"Todo list",-1),nr=["onChange"],rr=["onClick"],sr=["onClick"],or=["onClick"],ir=b("br",null,null,-1),ar=b("br",null,null,-1),cr=b("br",null,null,-1),v="https://todolist-api.hexschool.io",ur={__name:"week2",setup(e){var Ce;const t=C("abc123@gmail.com"),n=C("Asdf1234"),r=C("Asdf1234");let s=C("");const o=C(""),i=async()=>{try{const g=await S.post(`${v}/users/sign_up`,{email:t.value,password:n.value,nickname:r.value});console.log(g.data),o.value="註冊成功. UID: "+g.data.uid}catch{o.value="錯誤"}},c=C("abc123@gmail.com"),f=C("Asdf1234"),u=C(""),l=C(""),d=C(!1),R=C(""),T=C(""),h=async()=>{try{const g=await S.post(`${v}/users/sign_in`,{email:c.value,password:f.value});u.value="token: "+g.data.token,l.value=g.data.token}catch{u.value="錯誤"}},y=async()=>{try{const g=await S.get(`${v}/users/checkout`,{headers:{authorization:l.value}});s=g.data.uid,(s||document.cookie)&&(document.cookie=`todo=${l.value};`,d.value=!0,N()),R.value="驗證成功 UID: "+g.data.uid}catch{R.value="驗證失敗"}},p=(Ce=document.cookie.split("; ").find(g=>g.startsWith("todo=")))==null?void 0:Ce.split("=")[1];console.log(document.cookie),ht(()=>{p&&(l.value=p,d.value=!0,N())});const A=async()=>{try{const g=await S.post(`${v}/users/sign_out`,{},{headers:{authorization:l.value}});d.value=!1,document.cookie+="=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",T.value=g.data.message}catch(g){T.value="登出失敗"+g.message}},x=C([]),w=C({}),_=C(""),N=async()=>{const g=await S.get(`${v}/todos`,{headers:{authorization:l.value}});x.value=g.data.data},F=async()=>{try{const g=await S.post(`${v}/todos`,{content:_.value},{headers:{authorization:l.value}});console.log(g.data),N()}catch(g){console.log(g.data)}},U=async g=>{try{const E=await S.delete(`${v}/todos/${g}`,{headers:{authorization:l.value}});N()}catch(E){console.log(E.data)}},K=async g=>{console.log(g);try{const E=await S.put(`${v}/todos/${g}`,{content:w.value[g]},{headers:{authorization:l.value}});console.log(E.data),N()}catch(E){console.log(E.data)}},$=(g,E)=>{w.value={...w.value,[E]:g.target.value}},Y=async g=>{try{const E=await S.patch(`${v}/todos/${g}/toggle`,{},{headers:{authorization:l.value}});N()}catch(E){console.log(E.data)}};return(g,E)=>(ne(),te(Ne,null,[Vn,j(b("input",{"onUpdate:modelValue":E[0]||(E[0]=O=>t.value=O),type:"Email",placeholder:"Email"},null,512),[[q,t.value]]),L(" | "),j(b("input",{"onUpdate:modelValue":E[1]||(E[1]=O=>n.value=O),type:"Password",placeholder:"Password"},null,512),[[q,n.value]]),L(" | "),j(b("input",{"onUpdate:modelValue":E[2]||(E[2]=O=>r.value=O),type:"text",placeholder:"Nickname"},null,512),[[q,r.value]]),Jn,Wn,b("button",{onClick:i,type:"button"},"註冊"),b("p",null,V(o.value),1),Kn,j(b("input",{"onUpdate:modelValue":E[3]||(E[3]=O=>c.value=O),type:"Email",placeholder:"Email"},null,512),[[q,c.value]]),L(" | "),j(b("input",{"onUpdate:modelValue":E[4]||(E[4]=O=>f.value=O),type:"Password",placeholder:"Password"},null,512),[[q,f.value]]),L(" | "),Gn,Xn,b("button",{onClick:h,type:"button"},"登入"),b("p",null,V(u.value),1),Qn,j(b("input",{"onUpdate:modelValue":E[5]||(E[5]=O=>l.value=O),type:"text",placeholder:"Token"},null,512),[[q,l.value]]),L(" | "),b("button",{onClick:y,type:"button"},"驗證"),b("p",null,V(R.value),1),Zn,j(b("input",{"onUpdate:modelValue":E[6]||(E[6]=O=>l.value=O),type:"text",placeholder:"Token"},null,512),[[q,l.value]]),L(" | "),b("button",{onClick:A,type:"button"},"登出"),b("p",null,V(T.value),1),Yn,d.value?(ne(),te("div",er,[tr,j(b("input",{"onUpdate:modelValue":E[7]||(E[7]=O=>_.value=O),type:"text",placeholder:"todo"},null,512),[[q,_.value]]),L(" | "),b("button",{onClick:F,type:"button"},"addTodo"),b("ul",null,[(ne(!0),te(Ne,null,mt(x.value,O=>(ne(),te("li",{key:O.id},[L(V(O.content)+" "+V(O.status?"完成":"未完成")+" ",1),b("input",{type:"text",placeholder:"更新值",onChange:ee=>$(ee,O.id)},null,40,nr),L(" | "),b("button",{onClick:ee=>U(O.id),type:"button"},"刪除",8,rr),L(" | "),b("button",{onClick:ee=>K(O.id),type:"button"},"更新",8,sr),L(" | "),b("button",{onClick:ee=>Y(O.id),type:"button"},"切換狀態",8,or)]))),128))])])):yt("",!0),ir,ar,cr],64))}};export{ur as default};
