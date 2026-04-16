"use strict";(self["webpackChunkcontrole_de_som"]=self["webpackChunkcontrole_de_som"]||[]).push([[504],{2455:function(t,e,n){n.d(e,{cY:function(){return w},FA:function(){return D},g:function(){return x},u:function(){return l},Uj:function(){return u},Fy:function(){return b},bD:function(){return O},T9:function(){return v},yU:function(){return y},mS:function(){return h},Ku:function(){return M},ZQ:function(){return _},zJ:function(){return P},zW:function(){return C},nr:function(){return T},Ov:function(){return S},gE:function(){return L},eX:function(){return I}});n(4423),n(4114),n(8111),n(7588),n(1701),n(9577),n(6632),n(4226),n(9486),n(456),n(4979);const r=()=>{},i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==u||null==h)throw new a;const f=e<<2|o>>4;if(r.push(f),64!==u){const t=o<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(t){const e=i(t);return o.encodeByteArray(e,!0)},u=function(t){return c(t).replace(/\./g,"")},l=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>h().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},g=()=>{try{return r()||f()||d()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>g()?.emulatorHosts?.[t],y=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>g()?.config;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){const t=g()?.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function T(){return!E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S(){return!E()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function C(){try{return"object"===typeof indexedDB}catch(t){return!1}}function I(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A="FirebaseError";class x extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=A,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?k(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new x(r,o,n);return a}}function k(t,e){return t.replace(N,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(R(n)&&R(s)){if(!O(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function R(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){try{const e=t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t;return e.endsWith(".cloudworkstations.dev")}catch{return!1}}async function L(t){const e=await fetch(t,{credentials:"include"});return e.ok}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */},144:function(t,e,n){n.d(e,{C4:function(){return S},EW:function(){return Mt},Gc:function(){return vt},IG:function(){return It},Kh:function(){return yt},Pr:function(){return Ot},R1:function(){return kt},Tm:function(){return Et},X2:function(){return u},a1:function(){return xt},bl:function(){return C},fE:function(){return Tt},g8:function(){return _t},hZ:function(){return L},i9:function(){return Dt},ju:function(){return St},lJ:function(){return At},qA:function(){return F},u4:function(){return P},ux:function(){return Ct},wB:function(){return Ut},yC:function(){return o}});n(4114),n(8111),n(2489),n(7588),n(1701),n(3579),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8454),n(9452);var r=n(4232);let i,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){1===++this._on&&(this.prevScope=i,i=this)}off(){this._on>0&&0===--this._on&&(i=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){let e,n;for(this._active=!1,e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0}}}function a(){return i}const c=new WeakSet;class u{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||d(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,I(this),m(this);const t=s,e=E;s=this,E=!0;try{return this.fn()}finally{0,y(this),s=t,E=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)b(t);this.deps=this.depsTail=void 0,I(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){v(this)&&this.run()}get dirty(){return v(this)}}let l,h,f=0;function d(t,e=!1){if(t.flags|=8,e)return t.next=h,void(h=t);t.next=l,l=t}function p(){f++}function g(){if(--f>0)return;if(h){let t=h;h=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(l){let n=l;l=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=r}}if(t)throw t}function m(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function y(t){let e,n=t.depsTail,r=n;while(r){const t=r.prevDep;-1===r.version?(r===n&&(n=t),b(r),_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=t}t.deps=e,t.depsTail=n}function v(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(w(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function w(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===A)return;if(t.globalVersion=A,!t.isSSR&&128&t.flags&&(!t.deps&&!t._dirty||!v(t)))return;t.flags|=2;const e=t.dep,n=s,i=E;s=t,E=!0;try{m(t);const n=t.fn(t._value);(0===e.version||(0,r.$H)(n,t._value))&&(t.flags|=128,t._value=n,e.version++)}catch(o){throw e.version++,o}finally{s=n,E=i,y(t),t.flags&=-3}}function b(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)b(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function _(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let E=!0;const T=[];function S(){T.push(E),E=!1}function C(){const t=T.pop();E=void 0===t||t}function I(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=s;s=void 0;try{e()}finally{s=t}}}let A=0;class x{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class D{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!s||!E||s===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==s)e=this.activeLink=new x(s,this),s.deps?(e.prevDep=s.depsTail,s.depsTail.nextDep=e,s.depsTail=e):s.deps=s.depsTail=e,k(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=s.depsTail,e.nextDep=void 0,s.depsTail.nextDep=e,s.depsTail=e,s.deps===e&&(s.deps=t)}return e}trigger(t){this.version++,A++,this.notify(t)}notify(t){p();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{g()}}}function k(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)k(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const N=new WeakMap,O=Symbol(""),R=Symbol(""),M=Symbol("");function P(t,e,n){if(E&&s){let e=N.get(t);e||N.set(t,e=new Map);let r=e.get(n);r||(e.set(n,r=new D),r.map=e,r.key=n),r.track()}}function L(t,e,n,i,s,o){const a=N.get(t);if(!a)return void A++;const c=t=>{t&&t.trigger()};if(p(),"clear"===e)a.forEach(c);else{const s=(0,r.cy)(t),o=s&&(0,r.yI)(n);if(s&&"length"===n){const t=Number(i);a.forEach((e,n)=>{("length"===n||n===M||!(0,r.Bm)(n)&&n>=t)&&c(e)})}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(M)),e){case"add":s?o&&c(a.get("length")):(c(a.get(O)),(0,r.CE)(t)&&c(a.get(R)));break;case"delete":s||(c(a.get(O)),(0,r.CE)(t)&&c(a.get(R)));break;case"set":(0,r.CE)(t)&&c(a.get(O));break}}g()}function V(t){const e=Ct(t);return e===t?e:(P(e,"iterate",M),Tt(t)?e:e.map(At))}function F(t){return P(t=Ct(t),"iterate",M),t}function U(t,e){return Et(t)?_t(t)?xt(At(e)):xt(e):At(e)}const j={__proto__:null,[Symbol.iterator](){return B(this,Symbol.iterator,t=>U(this,t))},concat(...t){return V(this).concat(...t.map(t=>(0,r.cy)(t)?V(t):t))},entries(){return B(this,"entries",t=>(t[1]=U(this,t[1]),t))},every(t,e){return z(this,"every",t,e,void 0,arguments)},filter(t,e){return z(this,"filter",t,e,t=>t.map(t=>U(this,t)),arguments)},find(t,e){return z(this,"find",t,e,t=>U(this,t),arguments)},findIndex(t,e){return z(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return z(this,"findLast",t,e,t=>U(this,t),arguments)},findLastIndex(t,e){return z(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return z(this,"forEach",t,e,void 0,arguments)},includes(...t){return K(this,"includes",t)},indexOf(...t){return K(this,"indexOf",t)},join(t){return V(this).join(t)},lastIndexOf(...t){return K(this,"lastIndexOf",t)},map(t,e){return z(this,"map",t,e,void 0,arguments)},pop(){return H(this,"pop")},push(...t){return H(this,"push",t)},reduce(t,...e){return q(this,"reduce",t,e)},reduceRight(t,...e){return q(this,"reduceRight",t,e)},shift(){return H(this,"shift")},some(t,e){return z(this,"some",t,e,void 0,arguments)},splice(...t){return H(this,"splice",t)},toReversed(){return V(this).toReversed()},toSorted(t){return V(this).toSorted(t)},toSpliced(...t){return V(this).toSpliced(...t)},unshift(...t){return H(this,"unshift",t)},values(){return B(this,"values",t=>U(this,t))}};function B(t,e,n){const r=F(t),i=r[e]();return r===t||Tt(t)||(i._next=i.next,i.next=()=>{const t=i._next();return t.done||(t.value=n(t.value)),t}),i}const $=Array.prototype;function z(t,e,n,r,i,s){const o=F(t),a=o!==t&&!Tt(t),c=o[e];if(c!==$[e]){const e=c.apply(t,s);return a?At(e):e}let u=n;o!==t&&(a?u=function(e,r){return n.call(this,U(t,e),r,t)}:n.length>2&&(u=function(e,r){return n.call(this,e,r,t)}));const l=c.call(o,u,r);return a&&i?i(l):l}function q(t,e,n,r){const i=F(t),s=i!==t&&!Tt(t);let o=n,a=!1;i!==t&&(s?(a=0===r.length,o=function(e,r,i){return a&&(a=!1,e=U(t,e)),n.call(this,e,U(t,r),i,t)}):n.length>3&&(o=function(e,r,i){return n.call(this,e,r,i,t)}));const c=i[e](o,...r);return a?U(t,c):c}function K(t,e,n){const r=Ct(t);P(r,"iterate",M);const i=r[e](...n);return-1!==i&&!1!==i||!St(n[0])?i:(n[0]=Ct(n[0]),r[e](...n))}function H(t,e,n=[]){S(),p();const r=Ct(t)[e].apply(t,n);return g(),C(),r}const G=(0,r.pD)("__proto__,__v_isRef,__isVue"),W=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>"arguments"!==t&&"caller"!==t).map(t=>Symbol[t]).filter(r.Bm));function Q(t){(0,r.Bm)(t)||(t=String(t));const e=Ct(this);return P(e,"has",t),e.hasOwnProperty(t)}class X{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if("__v_skip"===e)return t["__v_skip"];const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(i?s?pt:dt:s?ft:ht).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.cy)(t);if(!i){let t;if(o&&(t=j[e]))return t;if("hasOwnProperty"===e)return Q}const a=Reflect.get(t,e,Dt(t)?t:n);if((0,r.Bm)(e)?W.has(e):G(e))return a;if(i||P(t,"get",e),s)return a;if(Dt(a)){const t=o&&(0,r.yI)(e)?a:a.value;return i&&(0,r.Gv)(t)?wt(t):t}return(0,r.Gv)(a)?i?wt(a):yt(a):a}}class Y extends X{constructor(t=!1){super(!1,t)}set(t,e,n,i){let s=t[e];const o=(0,r.cy)(t)&&(0,r.yI)(e);if(!this._isShallow){const t=Et(s);if(Tt(n)||Et(n)||(s=Ct(s),n=Ct(n)),!o&&Dt(s)&&!Dt(n))return t||(s.value=n),!0}const a=o?Number(e)<t.length:(0,r.$3)(t,e),c=Reflect.set(t,e,n,Dt(t)?t:i);return t===Ct(i)&&(a?(0,r.$H)(n,s)&&L(t,"set",e,n,s):L(t,"add",e,n)),c}deleteProperty(t,e){const n=(0,r.$3)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&L(t,"delete",e,void 0,i),s}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&W.has(e)||P(t,"has",e),n}ownKeys(t){return P(t,"iterate",(0,r.cy)(t)?"length":O),Reflect.ownKeys(t)}}class J extends X{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Z=new Y,tt=new J,et=new Y(!0),nt=t=>t,rt=t=>Reflect.getPrototypeOf(t);function it(t,e,n){return function(...i){const s=this["__v_raw"],o=Ct(s),a=(0,r.CE)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?nt:e?xt:At;return!e&&P(o,"iterate",u?R:O),(0,r.X$)(Object.create(l),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}}})}}function st(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function ot(t,e){const n={get(n){const i=this["__v_raw"],s=Ct(i),o=Ct(n);t||((0,r.$H)(n,o)&&P(s,"get",n),P(s,"get",o));const{has:a}=rt(s),c=e?nt:t?xt:At;return a.call(s,n)?c(i.get(n)):a.call(s,o)?c(i.get(o)):void(i!==s&&i.get(n))},get size(){const e=this["__v_raw"];return!t&&P(Ct(e),"iterate",O),e.size},has(e){const n=this["__v_raw"],i=Ct(n),s=Ct(e);return t||((0,r.$H)(e,s)&&P(i,"has",e),P(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)},forEach(n,r){const i=this,s=i["__v_raw"],o=Ct(s),a=e?nt:t?xt:At;return!t&&P(o,"iterate",O),s.forEach((t,e)=>n.call(r,a(t),a(e),i))}};(0,r.X$)(n,t?{add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear")}:{add(t){const n=Ct(this),i=rt(n),s=Ct(t),o=e||Tt(t)||Et(t)?t:s,a=i.has.call(n,o)||(0,r.$H)(t,o)&&i.has.call(n,t)||(0,r.$H)(s,o)&&i.has.call(n,s);return a||(n.add(o),L(n,"add",o,o)),this},set(t,n){e||Tt(n)||Et(n)||(n=Ct(n));const i=Ct(this),{has:s,get:o}=rt(i);let a=s.call(i,t);a||(t=Ct(t),a=s.call(i,t));const c=o.call(i,t);return i.set(t,n),a?(0,r.$H)(n,c)&&L(i,"set",t,n,c):L(i,"add",t,n),this},delete(t){const e=Ct(this),{has:n,get:r}=rt(e);let i=n.call(e,t);i||(t=Ct(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&L(e,"delete",t,void 0,s),o},clear(){const t=Ct(this),e=0!==t.size,n=void 0,r=t.clear();return e&&L(t,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach(r=>{n[r]=it(r,t,e)}),n}function at(t,e){const n=ot(t,e);return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,s)}const ct={get:at(!1,!1)},ut={get:at(!1,!0)},lt={get:at(!0,!1)};const ht=new WeakMap,ft=new WeakMap,dt=new WeakMap,pt=new WeakMap;function gt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:gt((0,r.Zf)(t))}function yt(t){return Et(t)?t:bt(t,!1,Z,ct,ht)}function vt(t){return bt(t,!1,et,ut,ft)}function wt(t){return bt(t,!0,tt,lt,dt)}function bt(t,e,n,i,s){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=mt(t);if(0===o)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,2===o?i:n);return s.set(t,c),c}function _t(t){return Et(t)?_t(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Et(t){return!(!t||!t["__v_isReadonly"])}function Tt(t){return!(!t||!t["__v_isShallow"])}function St(t){return!!t&&!!t["__v_raw"]}function Ct(t){const e=t&&t["__v_raw"];return e?Ct(e):t}function It(t){return!(0,r.$3)(t,"__v_skip")&&Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const At=t=>(0,r.Gv)(t)?yt(t):t,xt=t=>(0,r.Gv)(t)?wt(t):t;function Dt(t){return!!t&&!0===t["__v_isRef"]}function kt(t){return Dt(t)?t.value:t}const Nt={get:(t,e,n)=>"__v_raw"===e?t:kt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Dt(i)&&!Dt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ot(t){return _t(t)?t:new Proxy(t,Nt)}class Rt{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new D(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=A-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return d(this,!0),!0}get value(){const t=this.dep.track();return w(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Mt(t,e,n=!1){let i,s;(0,r.Tn)(t)?i=t:(i=t.get,s=t.set);const o=new Rt(i,s,n);return o}const Pt={},Lt=new WeakMap;let Vt;function Ft(t,e=!1,n=Vt){if(n){let e=Lt.get(n);e||Lt.set(n,e=[]),e.push(t)}else 0}function Ut(t,e,n=r.MZ){const{immediate:i,deep:s,once:o,scheduler:c,augmentJob:l,call:h}=n,f=t=>s?t:Tt(t)||!1===s||0===s?jt(t,1):jt(t);let d,p,g,m,y=!1,v=!1;if(Dt(t)?(p=()=>t.value,y=Tt(t)):_t(t)?(p=()=>f(t),y=!0):(0,r.cy)(t)?(v=!0,y=t.some(t=>_t(t)||Tt(t)),p=()=>t.map(t=>Dt(t)?t.value:_t(t)?f(t):(0,r.Tn)(t)?h?h(t,2):t():void 0)):p=(0,r.Tn)(t)?e?h?()=>h(t,2):t:()=>{if(g){S();try{g()}finally{C()}}const e=Vt;Vt=d;try{return h?h(t,3,[m]):t(m)}finally{Vt=e}}:r.tE,e&&s){const t=p,e=!0===s?1/0:s;p=()=>jt(t(),e)}const w=a(),b=()=>{d.stop(),w&&w.active&&(0,r.TF)(w.effects,d)};if(o&&e){const t=e;e=(...e)=>{t(...e),b()}}let _=v?new Array(t.length).fill(Pt):Pt;const E=t=>{if(1&d.flags&&(d.dirty||t))if(e){const t=d.run();if(s||y||(v?t.some((t,e)=>(0,r.$H)(t,_[e])):(0,r.$H)(t,_))){g&&g();const n=Vt;Vt=d;try{const n=[t,_===Pt?void 0:v&&_[0]===Pt?[]:_,m];_=t,h?h(e,3,n):e(...n)}finally{Vt=n}}}else d.run()};return l&&l(E),d=new u(p),d.scheduler=c?()=>c(E,!1):E,m=t=>Ft(t,!1,d),g=d.onStop=()=>{const t=Lt.get(d);if(t){if(h)h(t,4);else for(const e of t)e();Lt.delete(d)}},e?i?E(!0):_=d.run():c?c(E.bind(null,!0),!0):d.run(),b.pause=d.pause.bind(d),b.resume=d.resume.bind(d),b.stop=b,b}function jt(t,e=1/0,n){if(e<=0||!(0,r.Gv)(t)||t["__v_skip"])return t;if(n=n||new Map,(n.get(t)||0)>=e)return t;if(n.set(t,e),e--,Dt(t))jt(t.value,e,n);else if((0,r.cy)(t))for(let r=0;r<t.length;r++)jt(t[r],e,n);else if((0,r.vM)(t)||(0,r.CE)(t))t.forEach(t=>{jt(t,e,n)});else if((0,r.Qd)(t)){for(const r in t)jt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&jt(t[r],e,n)}return t}},6768:function(t,e,n){n.d(e,{$u:function(){return gt},CE:function(){return Qe},Df:function(){return Q},FK:function(){return Fe},Gy:function(){return z},K9:function(){return Ie},Lk:function(){return tn},MZ:function(){return W},OW:function(){return G},QP:function(){return K},bF:function(){return en},dY:function(){return m},eW:function(){return on},nI:function(){return mn},pI:function(){return Tt},qL:function(){return o},uX:function(){return qe}});n(4423),n(4114),n(8111),n(1148),n(2489),n(7588),n(1701),n(8237),n(3579),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8454),n(9452);var r=n(144),i=n(4232);function s(t,e,n,r){try{return r?t(...r):t()}catch(i){a(i,e,n)}}function o(t,e,n,r){if((0,i.Tn)(t)){const o=s(t,e,n,r);return o&&(0,i.yL)(o)&&o.catch(t=>{a(t,e,n)}),o}if((0,i.cy)(t)){const i=[];for(let s=0;s<t.length;s++)i.push(o(t[s],e,n,r));return i}}function a(t,e,n,o=!0){const a=e?e.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||i.MZ;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;i=i.parent}if(u)return(0,r.C4)(),s(u,null,10,[t,o,a]),void(0,r.bl)()}c(t,n,a,o,l)}function c(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const u=[];let l=-1;const h=[];let f=null,d=0;const p=Promise.resolve();let g=null;function m(t){const e=g||p;return t?e.then(this?t.bind(this):t):e}function y(t){let e=l+1,n=u.length;while(e<n){const r=e+n>>>1,i=u[r],s=T(i);s<t||s===t&&2&i.flags?e=r+1:n=r}return e}function v(t){if(!(1&t.flags)){const e=T(t),n=u[u.length-1];!n||!(2&t.flags)&&e>=T(n)?u.push(t):u.splice(y(e),0,t),t.flags|=1,w()}}function w(){g||(g=p.then(S))}function b(t){(0,i.cy)(t)?h.push(...t):f&&-1===t.id?f.splice(d+1,0,t):1&t.flags||(h.push(t),t.flags|=1),w()}function _(t,e,n=l+1){for(0;n<u.length;n++){const e=u[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,u.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function E(t){if(h.length){const t=[...new Set(h)].sort((t,e)=>T(t)-T(e));if(h.length=0,f)return void f.push(...t);for(f=t,d=0;d<f.length;d++){const t=f[d];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}f=null,d=0}}const T=t=>null==t.id?2&t.flags?-1:1/0:t.id;function S(t){i.tE;try{for(l=0;l<u.length;l++){const t=u[l];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),s(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;l<u.length;l++){const t=u[l];t&&(t.flags&=-2)}l=-1,u.length=0,E(t),g=null,(u.length||h.length)&&S(t)}}let C=!1;let I=null,A=null;function x(t){const e=I;return I=t,A=t&&t.type.__scopeId||null,e}function D(t,e=I,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Ge(-1);const i=x(e);let s;try{s=t(...n)}finally{x(i),r._d&&Ge(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function k(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[t.el,u,t,e]),(0,r.bl)())}}function N(t,e){if(gn){let n=gn.provides;const r=gn.parent&&gn.parent.provides;r===n&&(n=gn.provides=Object.create(r)),n[t]=e}}function O(t,e,n=!1){const r=mn();if(r||Gt){let s=Gt?Gt._context.provides:r?null==r.parent||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r&&r.proxy):e}else 0}const R=Symbol.for("v-scx"),M=()=>{{const t=O(R);return t}};function P(t,e,n){return L(t,e,n)}function L(t,e,n=i.MZ){const{immediate:s,deep:a,flush:c,once:u}=n;const l=(0,i.X$)({},n);const h=e&&s||!e&&"post"!==c;let f;if(Sn)if("sync"===c){const t=M();f=t.__watcherHandles||(t.__watcherHandles=[])}else if(!h){const t=()=>{};return t.stop=i.tE,t.resume=i.tE,t.pause=i.tE,t}const d=gn;l.call=(t,e,n)=>o(t,d,e,n);let p=!1;"post"===c?l.scheduler=t=>{Ce(t,d&&d.suspense)}:"sync"!==c&&(p=!0,l.scheduler=(t,e)=>{e?t():v(t)}),l.augmentJob=t=>{e&&(t.flags|=4),p&&(t.flags|=2,d&&(t.id=d.uid,t.i=d))};const g=(0,r.wB)(t,e,l);return Sn&&(f?f.push(g):h&&g()),g}function V(t,e,n){const r=this.proxy,s=(0,i.Kg)(t)?t.includes(".")?F(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.Tn)(e)?o=e:(o=e.handler,n=e);const a=wn(this),c=L(s,o.bind(r),n);return a(),c}function F(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}const U=Symbol("_vte"),j=t=>t.__isTeleport;const B=Symbol("_leaveCb"),$=Symbol("_enterCb");function z(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dt(()=>{t.isMounted=!0}),mt(()=>{t.isUnmounting=!0}),t}const q=[Function,Array],K={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:q,onEnter:q,onAfterEnter:q,onEnterCancelled:q,onBeforeLeave:q,onLeave:q,onAfterLeave:q,onLeaveCancelled:q,onBeforeAppear:q,onAppear:q,onAfterAppear:q,onAppearCancelled:q};function H(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function G(t,e,n,r,s){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:w,onAfterAppear:b,onAppearCancelled:_}=e,E=String(t.key),T=H(n,t),S=(t,e)=>{t&&o(t,r,9,e)},I=(t,e)=>{const n=e[1];S(t,e),(0,i.cy)(t)?t.every(t=>t.length<=1)&&n():t.length<=1&&n()},A={mode:c,persisted:u,beforeEnter(e){let r=l;if(!n.isMounted){if(!a)return;r=v||l}e[B]&&e[B](!0);const i=T[E];i&&Ye(t,i)&&i.el[B]&&i.el[B](),S(r,[e])},enter(e){if(!C&&T[E]===t)return;let r=h,i=f,s=d;if(!n.isMounted){if(!a)return;r=w||h,i=b||f,s=_||d}let o=!1;e[$]=t=>{o||(o=!0,S(t?s:i,[e]),A.delayedLeave&&A.delayedLeave(),e[$]=void 0)};const c=e[$].bind(null,!1);r?I(r,[e,c]):c()},leave(e,r){const i=String(t.key);if(e[$]&&e[$](!0),n.isUnmounting)return r();S(p,[e]);let s=!1;e[B]=n=>{s||(s=!0,r(),S(n?y:m,[e]),e[B]=void 0,T[i]===t&&delete T[i])};const o=e[B].bind(null,!1);T[i]=t,g?I(g,[e,o]):o()},clone(t){const i=G(t,e,n,r,s);return s&&s(i),i}};return A}function W(t,e){6&t.shapeFlag&&t.component?(t.transition=e,W(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Q(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Fe?(128&o.patchFlag&&i++,r=r.concat(Q(o.children,e,a))):(e||o.type!==je)&&r.push(null!=a?sn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function X(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Y(t,e){let n;return!(!(n=Object.getOwnPropertyDescriptor(t,e))||n.configurable)}const J=new WeakMap;function Z(t,e,n,o,a=!1){if((0,i.cy)(t))return void t.forEach((t,r)=>Z(t,e&&((0,i.cy)(e)?e[r]:e),n,o,a));if(et(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&Z(t,e,n,o.component.subTree));const c=4&o.shapeFlag?Nn(o.component):o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState,g=(0,r.ux)(p),m=p===i.MZ?i.NO:t=>!Y(d,t)&&(0,i.$3)(g,t),y=(t,e)=>!e||!Y(d,e);if(null!=f&&f!==h)if(tt(e),(0,i.Kg)(f))d[f]=null,m(f)&&(p[f]=null);else if((0,r.i9)(f)){const t=e;y(f,t.k)&&(f.value=null),t.k&&(d[t.k]=null)}if((0,i.Tn)(h))s(h,l,12,[u,d]);else{const e=(0,i.Kg)(h),s=(0,r.i9)(h);if(e||s){const r=()=>{if(t.f){const n=e?m(h)?p[h]:d[h]:y(h)||!t.k?h.value:d[t.k];if(a)(0,i.cy)(n)&&(0,i.TF)(n,c);else if((0,i.cy)(n))n.includes(c)||n.push(c);else if(e)d[h]=[c],m(h)&&(p[h]=d[h]);else{const e=[c];y(h,t.k)&&(h.value=e),t.k&&(d[t.k]=e)}}else e?(d[h]=u,m(h)&&(p[h]=u)):s&&(y(h,t.k)&&(h.value=u),t.k&&(d[t.k]=u))};if(u){const e=()=>{r(),J.delete(t)};e.id=-1,J.set(t,e),Ce(e,n)}else tt(t),r()}else 0}}function tt(t){const e=J.get(t);e&&(e.flags|=8,J.delete(t))}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const et=t=>!!t.type.__asyncLoader;const nt=t=>t.type.__isKeepAlive;RegExp,RegExp;function rt(t,e){return(0,i.cy)(t)?t.some(t=>rt(t,e)):(0,i.Kg)(t)?t.split(",").includes(e):!!(0,i.gd)(t)&&(t.lastIndex=0,t.test(e))}function it(t,e){ot(t,"a",e)}function st(t,e){ot(t,"da",e)}function ot(t,e,n=gn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(lt(e,r,n),n){let t=n.parent;while(t&&t.parent)nt(t.parent.vnode)&&at(r,e,n,t),t=t.parent}}function at(t,e,n,r){const s=lt(e,t,r,!0);yt(()=>{(0,i.TF)(r[e],s)},n)}function ct(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ut(t){return 128&t.shapeFlag?t.ssContent:t}function lt(t,e,n=gn,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{(0,r.C4)();const s=wn(n),a=o(e,n,t,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const ht=t=>(e,n=gn)=>{Sn&&"sp"!==t||lt(t,(...t)=>e(...t),n)},ft=ht("bm"),dt=ht("m"),pt=ht("bu"),gt=ht("u"),mt=ht("bum"),yt=ht("um"),vt=ht("sp"),wt=ht("rtg"),bt=ht("rtc");function _t(t,e=gn){lt("ec",t,e)}const Et=Symbol.for("v-ndc");function Tt(t,e,n,s){let o;const a=n&&n[s],c=(0,i.cy)(t);if(c||(0,i.Kg)(t)){const n=c&&(0,r.g8)(t);let i=!1,s=!1;n&&(i=!(0,r.fE)(t),s=(0,r.Tm)(t),t=(0,r.qA)(t)),o=new Array(t.length);for(let c=0,u=t.length;c<u;c++)o[c]=e(i?s?(0,r.a1)((0,r.lJ)(t[c])):(0,r.lJ)(t[c]):t[c],c,void 0,a&&a[c])}else if("number"===typeof t){o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(t))if(t[Symbol.iterator])o=Array.from(t,(t,n)=>e(t,n,void 0,a&&a[n]));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,a&&a[r])}}else o=[];return n&&(n[s]=o),o}const St=t=>t?_n(t)?Nn(t):St(t.parent):null,Ct=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>St(t.parent),$root:t=>St(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Mt(t),$forceUpdate:t=>t.f||(t.f=()=>{v(t.update)}),$nextTick:t=>t.n||(t.n=m.bind(t.proxy)),$watch:t=>V.bind(t)}),It=(t,e)=>t!==i.MZ&&!t.__isScriptSetup&&(0,i.$3)(t,e),At={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;if("$"!==e[0]){const t=c[e];if(void 0!==t)switch(t){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(It(s,e))return c[e]=1,s[e];if(o!==i.MZ&&(0,i.$3)(o,e))return c[e]=2,o[e];if((0,i.$3)(a,e))return c[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return c[e]=4,n[e];Dt&&(c[e]=0)}}const h=Ct[e];let f,d;return h?("$attrs"===e&&(0,r.u4)(t.attrs,"get",""),h(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==i.MZ&&(0,i.$3)(n,e)?(c[e]=4,n[e]):(d=l.config.globalProperties,(0,i.$3)(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return It(s,e)?(s[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:o,type:a}},c){let u;return!!(n[c]||t!==i.MZ&&"$"!==c[0]&&(0,i.$3)(t,c)||It(e,c)||(0,i.$3)(o,c)||(0,i.$3)(r,c)||(0,i.$3)(Ct,c)||(0,i.$3)(s.config.globalProperties,c)||(u=a.__cssModules)&&u[c])},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xt(t){return(0,i.cy)(t)?t.reduce((t,e)=>(t[e]=null,t),{}):t}let Dt=!0;function kt(t){const e=Mt(t),n=t.proxy,s=t.ctx;Dt=!1,e.beforeCreate&&Ot(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:E,render:T,renderTracked:S,renderTriggered:C,errorCaptured:I,serverPrefetch:A,expose:x,inheritAttrs:D,components:k,directives:O,filters:R}=e,M=null;if(h&&Nt(h,s,M),c)for(const r in c){const t=c[r];(0,i.Tn)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(Dt=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,c=Mn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Rt(u[r],s,n,r);if(l){const t=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach(e=>{N(e,t[e])})}function P(t,e){(0,i.cy)(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(f&&Ot(f,t,"c"),P(ft,d),P(dt,p),P(pt,g),P(gt,m),P(it,y),P(st,v),P(_t,I),P(bt,S),P(wt,C),P(mt,b),P(yt,E),P(vt,A),(0,i.cy)(x))if(x.length){const e=t.exposed||(t.exposed={});x.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e,enumerable:!0})})}else t.exposed||(t.exposed={});T&&t.render===i.tE&&(t.render=T),null!=D&&(t.inheritAttrs=D),k&&(t.components=k),O&&(t.directives=O),A&&X(t)}function Nt(t,e,n=i.tE){(0,i.cy)(t)&&(t=Ut(t));for(const s in t){const n=t[s];let o;o=(0,i.Gv)(n)?"default"in n?O(n.from||s,n.default,!0):O(n.from||s):O(n),(0,r.i9)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function Ot(t,e,n){o((0,i.cy)(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rt(t,e,n,r){let s=r.includes(".")?F(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&P(s,n)}else if((0,i.Tn)(t))P(s,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach(t=>Rt(t,e,n,r));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&P(s,r,t)}else 0}function Mt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach(t=>Pt(u,t,a,!0)),Pt(u,e,a)):u=e,(0,i.Gv)(e)&&o.set(e,u),u}function Pt(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Pt(t,s,n,!0),i&&i.forEach(e=>Pt(t,e,n,!0));for(const o in e)if(r&&"expose"===o);else{const r=Lt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Lt={data:Vt,props:$t,emits:$t,methods:Bt,computed:Bt,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:Bt,directives:Bt,watch:zt,provide:Vt,inject:Ft};function Vt(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function Ft(t,e){return Bt(Ut(t),Ut(e))}function Ut(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function jt(t,e){return t?[...new Set([].concat(t,e))]:e}function Bt(t,e){return t?(0,i.X$)(Object.create(null),t,e):e}function $t(t,e){return t?(0,i.cy)(t)&&(0,i.cy)(e)?[...new Set([...t,...e])]:(0,i.X$)(Object.create(null),xt(t),xt(null!=e?e:{})):e}function zt(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=jt(t[r],e[r]);return n}function qt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kt=0;function Ht(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=qt(),a=new WeakSet,c=[];let u=!1;const l=s.app={_uid:Kt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Pn,get config(){return s.config},set config(t){0},use(t,...e){return a.has(t)||(t&&(0,i.Tn)(t.install)?(a.add(t),t.install(l,...e)):(0,i.Tn)(t)&&(a.add(t),t(l,...e))),l},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),l},component(t,e){return e?(s.components[t]=e,l):s.components[t]},directive(t,e){return e?(s.directives[t]=e,l):s.directives[t]},mount(i,o,a){if(!u){0;const c=l._ceVNode||en(n,r);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&e?e(c,i):t(c,i,a),u=!0,l._container=i,i.__vue_app__=l,Nn(c.component)}},onUnmount(t){c.push(t)},unmount(){u&&(o(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(t,e){return s.provides[t]=e,l},runWithContext(t){const e=Gt;Gt=l;try{return t()}finally{Gt=e}}};return l}}let Gt=null;const Wt=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,i.PT)(e)}Modifiers`]||t[`${(0,i.Tg)(e)}Modifiers`];function Qt(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let s=n;const a=e.startsWith("update:"),c=a&&Wt(r,e.slice(7));let u;c&&(c.trim&&(s=n.map(t=>(0,i.Kg)(t)?t.trim():t)),c.number&&(s=n.map(i.bB)));let l=r[u=(0,i.rU)(e)]||r[u=(0,i.rU)((0,i.PT)(e))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}const Xt=new WeakMap;function Yt(t,e,n=!1){const r=n?Xt:e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=Yt(t,e,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach(t=>a[t]=null):(0,i.X$)(a,o),(0,i.Gv)(t)&&r.set(t,a),a):((0,i.Gv)(t)&&r.set(t,null),null)}function Jt(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}function Zt(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:u,emit:l,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t,v=x(t);let w,b;try{if(4&n.shapeFlag){const t=s||r,e=t;w=an(h.call(e,t,f,d,g,p,m)),b=u}else{const t=e;0,w=an(t.length>1?t(d,{attrs:u,slots:c,emit:l}):t(d,null)),b=e.props?u:te(u)}}catch(E){$e.length=0,a(E,t,1),w=en(je)}let _=w;if(b&&!1!==y){const t=Object.keys(b),{shapeFlag:e}=_;t.length&&7&e&&(o&&t.some(i.CP)&&(b=ee(b,o)),_=sn(_,b,!1,!0))}return n.dirs&&(_=sn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&W(_,n.transition),w=_,x(v),w}const te=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},ee=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function ne(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||re(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?re(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(ie(o,r,n)&&!Jt(u,n))return!0}}return!1}function re(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(ie(e,t,s)&&!Jt(n,s))return!0}return!1}function ie(t,e,n){const r=t[n],s=e[n];return"style"===n&&(0,i.Gv)(r)&&(0,i.Gv)(s)?!(0,i.BX)(r,s):r!==s}function se({vnode:t,parent:e,suspense:n},r){while(e){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===t&&(n.suspense.vnode.el=n.el=r,t=n),n!==t)break;(t=e.vnode).el=r,e=e.parent}n&&n.activeBranch===t&&(n.vnode.el=r)}const oe={},ae=()=>Object.create(oe),ce=t=>Object.getPrototypeOf(t)===oe;function ue(t,e,n,i=!1){const s={},o=ae();t.propsDefaults=Object.create(null),he(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:(0,r.Gc)(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function le(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.ux)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;he(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.$3)(e,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=fe(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(Jt(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i.PT)(s);o[e]=fe(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(t.attrs,"set","")}function he(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const l=e[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:Jt(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=fe(o,e,c,s[c],t,!(0,i.$3)(s,c))}}return u}function fe(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(t)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=wn(s);r=i[n]=t.call(null,e),o()}}else r=t;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const de=new WeakMap;function pe(t,e,n=!1){const r=n?de:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.Tn)(t)){const r=t=>{u=!0;const[n,r]=pe(t,e,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(t)&&r.set(t,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,i.PT)(o[h]);ge(t)&&(a[t]=i.MZ)}else if(o){0;for(const t in o){const e=(0,i.PT)(t);if(ge(e)){const n=o[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let u=!1,l=!0;if((0,i.cy)(s))for(let t=0;t<s.length;++t){const e=s[t],n=(0,i.Tn)(e)&&e.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=u,r[1]=l,(u||(0,i.$3)(r,"default"))&&c.push(e)}}}const l=[a,c];return(0,i.Gv)(t)&&r.set(t,l),l}function ge(t){return"$"!==t[0]&&!(0,i.SU)(t)}const me=t=>"_"===t||"_ctx"===t||"$stable"===t,ye=t=>(0,i.cy)(t)?t.map(an):[an(t)],ve=(t,e,n)=>{if(e._n)return e;const r=D((...t)=>ye(e(...t)),n);return r._c=!1,r},we=(t,e,n)=>{const r=t._ctx;for(const s in t){if(me(s))continue;const n=t[s];if((0,i.Tn)(n))e[s]=ve(s,n,r);else if(null!=n){0;const t=ye(n);e[s]=()=>t}}},be=(t,e)=>{const n=ye(e);t.slots.default=()=>n},_e=(t,e,n)=>{for(const r in e)!n&&me(r)||(t[r]=e[r])},Ee=(t,e,n)=>{const r=t.slots=ae();if(32&t.vnode.shapeFlag){const t=e._;t?(_e(r,e,n),n&&(0,i.yQ)(r,"_",t,!0)):we(e,r)}else e&&be(t,e)},Te=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:_e(s,e,n):(o=!e.$stable,we(e,s)),a=e}else e&&(be(t,e),a={default:1});if(o)for(const i in s)me(i)||null!=a[i]||delete s[i]};function Se(){}const Ce=Ve;function Ie(t){return Ae(t)}function Ae(t,e){Se();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=t,y=(t,e,n,r=null,i=null,s=null,o=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Ye(t,e)&&(r=Y(t),H(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Ue:w(t,e,n,r);break;case je:b(t,e,n,r);break;case Be:null==t&&T(e,n,r,o);break;case Fe:M(t,e,n,r,i,s,o,a,c);break;default:1&h?I(t,e,n,r,i,s,o,a,c):6&h?P(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,rt)}null!=l&&i?Z(l,t&&t.ref,s,e||t,!e):null==l&&t&&null!=t.ref&&Z(t.ref,null,s,t,!0)},w=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},T=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},S=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},C=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},I=(t,e,n,r,i,s,o,a,c)=>{if("svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t)A(e,n,r,i,s,o,a,c);else{const n=t.el&&t.el._isVueCE?t.el:null;try{n&&n._beginPatch(),N(t,e,i,s,o,a,c)}finally{n&&n._endPatch()}}},A=(t,e,n,r,o,u,l,h)=>{let d,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=t;if(d=t.el=c(t.type,u,g&&g.is,g),8&m?f(d,t.children):16&m&&D(t.children,d,null,r,o,xe(t,u),l,h),v&&k(t,null,r,"created"),x(d,t,t.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.SU)(t)||a(d,t,null,g[t],u,r);"value"in g&&a(d,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&hn(p,r,t)}v&&k(t,null,r,"beforeMount");const w=ke(o,y);if(w&&y.beforeEnter(d),s(d,e,n),(p=g&&g.onVnodeMounted)||w||v){Ce(()=>{try{p&&hn(p,r,t),w&&y.enter(d),v&&k(t,null,r,"mounted")}finally{0}},o)}},x=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n||Le(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=i.vnode;x(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},D=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?cn(t[u]):an(t[u]);y(null,c,e,n,r,i,s,o,a)}},N=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;if(n&&De(n,!1),(m=g.onVnodeBeforeUpdate)&&hn(m,n,e,t),d&&k(e,t,n,"beforeUpdate"),n&&De(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&f(u,""),h?O(t.dynamicChildren,h,u,n,r,xe(e,s),o):c||$(t,e,u,null,n,r,xe(e,s),o,!1),l>0){if(16&l)R(u,p,g,n,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const r=t[e],i=p[r],o=g[r];o===i&&"value"!==r||a(u,r,i,o,s,n)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||R(u,p,g,n,s);((m=g.onVnodeUpdated)||d)&&Ce(()=>{m&&hn(m,n,e,t),d&&k(e,t,n,"updated")},r)},O=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Fe||!Ye(c,u)||198&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},R=(t,e,n,r,s)=>{if(e!==n){if(e!==i.MZ)for(const o in e)(0,i.SU)(o)||o in n||a(t,o,e[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const c=n[o],u=e[o];c!==u&&"value"!==o&&a(t,o,u,c,s,r)}"value"in n&&a(t,"value",e.value,n.value,s)}},M=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(s(h,n,r),s(f,n,r),D(e.children||[],n,f,i,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren&&t.dynamicChildren.length===p.length?(O(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&Ne(t,e,!0)):$(t,e,n,f,i,o,a,c,l)},P=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):L(e,n,r,i,s,o,c):V(t,e,c)},L=(t,e,n,r,i,s,o)=>{const a=t.component=pn(t,r,i);if(nt(t)&&(a.ctx.renderer=rt),Cn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,F,o),!t.el){const r=a.subTree=en(je);b(null,r,e,n),t.placeholder=r.el}}else F(a,t,e,n,i,s,o)},V=(t,e,n)=>{const r=e.component=t.component;if(ne(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,e,n);r.next=e,r.update()}else e.el=t.el,r.vnode=e},F=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:s,vnode:u}=t;{const n=Re(t);if(n)return e&&(e.el=u.el,j(t,e,c)),void n.asyncDep.then(()=>{Ce(()=>{t.isUnmounted||h()},o)})}let l,f=e;0,De(t,!1),e?(e.el=u.el,j(t,e,c)):e=u,n&&(0,i.DY)(n),(l=e.props&&e.props.onVnodeBeforeUpdate)&&hn(l,s,e,u),De(t,!0);const p=Zt(t);0;const g=t.subTree;t.subTree=p,y(g,p,d(g.el),Y(g),t,o,a),e.el=p.el,null===f&&se(t,p.el),r&&Ce(r,o),(l=e.props&&e.props.onVnodeUpdated)&&Ce(()=>hn(l,s,e,u),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f,root:d,type:p}=t,g=et(e);if(De(t,!1),l&&(0,i.DY)(l),!g&&(r=u&&u.onVnodeBeforeMount)&&hn(r,f,e),De(t,!0),c&&st){const e=()=>{t.subTree=Zt(t),st(c,t.subTree,t,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,t,e):e()}else{d.ce&&d.ce._hasShadowRoot()&&d.ce._injectChildStyle(p,t.parent?t.parent.type:void 0);const r=t.subTree=Zt(t);0,y(null,r,n,s,t,o,a),e.el=r.el}if(h&&Ce(h,o),!g&&(r=u&&u.onVnodeMounted)){const t=e;Ce(()=>hn(r,f,t),o)}(256&e.shapeFlag||f&&et(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&Ce(t.a,o),t.isMounted=!0,e=n=s=null}};t.scope.on();const l=t.effect=new r.X2(u);t.scope.off();const h=t.update=l.run.bind(l),f=t.job=l.runIfDirty.bind(l);f.i=t,f.id=t.uid,l.scheduler=()=>v(f),De(t,!0),h()},j=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,le(t,e.props,i,n),Te(t,e.children,n),(0,r.C4)(),_(t),(0,r.bl)()},$=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void q(u,h,n,r,i,s,o,a,c);if(256&d)return void z(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&f(n,h)):16&l?16&p?q(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&f(n,""),16&p&&D(h,n,r,i,s,o,a,c))},z=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Oj,e=e||i.Oj;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?cn(e[d]):an(e[d]);y(t[d],r,n,null,s,o,a,c,u)}l>h?X(t,s,o,!0,!1,f):D(e,n,r,s,o,a,c,u,f)},q=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?cn(e[l]):an(e[l]);if(!Ye(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?cn(e[d]):an(e[d]);if(!Ye(r,i))break;y(r,i,n,null,s,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)y(null,e[l]=u?cn(e[l]):an(e[l]),n,i,s,o,a,c,u),l++}}else if(l>d)while(l<=f)H(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?cn(e[l]):an(e[l]);null!=t.key&&m.set(t.key,l)}let v,w=0;const b=d-g+1;let _=!1,E=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(w>=b){H(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&Ye(r,e[v])){i=v;break}void 0===i?H(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:_=!0,y(r,e[i],n,null,s,o,a,c,u),w++)}const S=_?Oe(T):i.Oj;for(v=S.length-1,l=b-1;l>=0;l--){const t=g+l,i=e[t],f=e[t+1],d=t+1<h?f.el||Pe(f):r;0===T[l]?y(null,i,n,d,s,o,a,c,u):_&&(v<0||l!==S[v]?K(i,n,d,2):v--)}}},K=(t,e,n,r,i=null)=>{const{el:a,type:c,transition:u,children:l,shapeFlag:h}=t;if(6&h)return void K(t.component.subTree,e,n,r);if(128&h)return void t.suspense.move(e,n,r);if(64&h)return void c.move(t,e,n,rt);if(c===Fe){s(a,e,n);for(let t=0;t<l.length;t++)K(l[t],e,n,r);return void s(t.anchor,e,n)}if(c===Be)return void S(t,e,n);const f=2!==r&&1&h&&u;if(f)if(0===r)u.beforeEnter(a),s(a,e,n),Ce(()=>u.enter(a),i);else{const{leave:r,delayLeave:i,afterLeave:c}=u,l=()=>{t.ctx.isUnmounted?o(a):s(a,e,n)},h=()=>{a._isLeaving&&a[B](!0),r(a,()=>{l(),c&&c()})};i?i(a,l,h):h()}else s(a,e,n)},H=(t,e,n,i=!1,s=!1)=>{const{type:o,props:a,ref:c,children:u,dynamicChildren:l,shapeFlag:h,patchFlag:f,dirs:d,cacheIndex:p,memo:g}=t;if(-2===f&&(s=!1),null!=c&&((0,r.C4)(),Z(c,null,n,t,!0),(0,r.bl)()),null!=p&&(e.renderCache[p]=void 0),256&h)return void e.ctx.deactivate(t);const m=1&h&&d,y=!et(t);let v;if(y&&(v=a&&a.onVnodeBeforeUnmount)&&hn(v,e,t),6&h)Q(t.component,n,i);else{if(128&h)return void t.suspense.unmount(n,i);m&&k(t,null,e,"beforeUnmount"),64&h?t.type.remove(t,e,n,rt,i):l&&!l.hasOnce&&(o!==Fe||f>0&&64&f)?X(l,e,n,!1,!0):(o===Fe&&384&f||!s&&16&h)&&X(u,e,n),i&&G(t)}const w=null!=g&&null==p;(y&&(v=a&&a.onVnodeUnmounted)||m||w)&&Ce(()=>{v&&hn(v,e,t),m&&k(t,null,e,"unmounted"),w&&(t.el=null)},n)},G=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Fe)return void W(n,r);if(e===Be)return void C(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},W=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Q=(t,e,n)=>{const{bum:r,scope:s,job:o,subTree:a,um:c,m:u,a:l}=t;Me(u),Me(l),r&&(0,i.DY)(r),s.stop(),o&&(o.flags|=8,H(a,t,e,n)),c&&Ce(c,e),Ce(()=>{t.isUnmounted=!0},e)},X=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)H(t[o],e,n,r,i)},Y=t=>{if(6&t.shapeFlag)return Y(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[U];return n?p(n):e};let J=!1;const tt=(t,e,n)=>{let r;null==t?e._vnode&&(H(e._vnode,null,null,!0),r=e._vnode.component):y(e._vnode||null,t,e,null,null,null,n),e._vnode=t,J||(J=!0,_(r),E(),J=!1)},rt={p:y,um:H,m:K,r:G,mt:L,mc:D,pc:$,pbc:O,n:Y,o:t};let it,st;return e&&([it,st]=e(rt)),{render:tt,hydrate:it,createApp:Ht(tt,it)}}function xe({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function De({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ke(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ne(t,e,n=!1){const r=t.children,s=e.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=cn(s[i]),e.el=t.el),n||-2===e.patchFlag||Ne(t,e)),e.type===Ue&&(-1===e.patchFlag&&(e=s[i]=cn(e)),e.el=t.el),e.type!==je||e.el||(e.el=t.el)}}function Oe(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function Re(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Re(e)}function Me(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Pe(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Pe(e.subTree):null}const Le=t=>t.__isSuspense;function Ve(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):b(t)}const Fe=Symbol.for("v-fgt"),Ue=Symbol.for("v-txt"),je=Symbol.for("v-cmt"),Be=Symbol.for("v-stc"),$e=[];let ze=null;function qe(t=!1){$e.push(ze=t?null:[])}function Ke(){$e.pop(),ze=$e[$e.length-1]||null}let He=1;function Ge(t,e=!1){He+=t,t<0&&ze&&e&&(ze.hasOnce=!0)}function We(t){return t.dynamicChildren=He>0?ze||i.Oj:null,Ke(),He>0&&ze&&ze.push(t),t}function Qe(t,e,n,r,i,s){return We(tn(t,e,n,r,i,s,!0))}function Xe(t){return!!t&&!0===t.__v_isVNode}function Ye(t,e){return t.type===e.type&&t.key===e.key}const Je=({key:t})=>null!=t?t:null,Ze=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:I,r:t,k:e,f:!!n}:t:null);function tn(t,e=null,n=null,r=0,s=null,o=(t===Fe?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Je(e),ref:e&&Ze(e),scopeId:A,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:I};return c?(un(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),He>0&&!a&&ze&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&ze.push(u),u}const en=nn;function nn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==Et||(t=je),Xe(t)){const r=sn(t,e,!0);return n&&un(r,n),He>0&&!a&&ze&&(6&r.shapeFlag?ze[ze.indexOf(t)]=r:ze.push(r)),r.patchFlag=-2,r}if(Rn(t)&&(t=t.__vccOpts),e){e=rn(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const c=(0,i.Kg)(t)?1:Le(t)?128:j(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return tn(t,e,n,s,o,c,a,!0)}function rn(t){return t?(0,r.ju)(t)||ce(t)?(0,i.X$)({},t):t:null}function sn(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=t,l=e?ln(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Je(l),ref:e&&e.ref?n&&o?(0,i.cy)(o)?o.concat(Ze(e)):[o,Ze(e)]:Ze(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sn(t.ssContent),ssFallback:t.ssFallback&&sn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&W(h,u.clone(h)),h}function on(t=" ",e=0){return en(Ue,null,t,e)}function an(t){return null==t||"boolean"===typeof t?en(je):(0,i.cy)(t)?en(Fe,null,t.slice()):Xe(t)?cn(t):en(Ue,null,String(t))}function cn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:sn(t)}function un(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),un(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||ce(e)?3===r&&I&&(1===I.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=I}}else(0,i.Tn)(e)?(e={default:e,_ctx:I},n=32):(e=String(e),64&r?(n=16,e=[on(e)]):n=8);t.children=e,t.shapeFlag|=n}function ln(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.cy)(n)&&n.includes(s)?null!=s||null!=n||(0,i.CP)(t)||(e[t]=s):e[t]=n?[].concat(n,s):s}else""!==t&&(e[t]=r[t])}return e}function hn(t,e,n,r=null){o(t,e,7,[n,r])}const fn=qt();let dn=0;function pn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||fn,a={uid:dn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pe(s,o),emitsOptions:Yt(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Qt.bind(null,a),t.ce&&t.ce(a),a}let gn=null;const mn=()=>gn||I;let yn,vn;{const t=(0,i.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach(e=>e(t)):r[0](t)}};yn=e("__VUE_INSTANCE_SETTERS__",t=>gn=t),vn=e("__VUE_SSR_SETTERS__",t=>Sn=t)}const wn=t=>{const e=gn;return yn(t),t.scope.on(),()=>{t.scope.off(),yn(e)}},bn=()=>{gn&&gn.scope.off(),yn(null)};function _n(t){return 4&t.vnode.shapeFlag}let En,Tn,Sn=!1;function Cn(t,e=!1,n=!1){e&&vn(e);const{props:r,children:i}=t.vnode,s=_n(t);ue(t,r,s,e),Ee(t,i,n||e);const o=s?In(t,e):void 0;return e&&vn(!1),o}function In(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,At);const{setup:o}=n;if(o){(0,r.C4)();const n=t.setupContext=o.length>1?kn(t):null,c=wn(t),u=s(o,t,0,[t.props,n]),l=(0,i.yL)(u);if((0,r.bl)(),c(),!l&&!t.sp||et(t)||X(t),l){if(u.then(bn,bn),e)return u.then(n=>{An(t,n,e)}).catch(e=>{a(e,t,0)});t.asyncDep=u}else An(t,u,e)}else xn(t,e)}function An(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),xn(t,n)}function xn(t,e,n){const s=t.type;if(!t.render){if(!e&&En&&!s.render){const e=s.template||Mt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=En(e,c)}}t.render=s.render||i.tE,Tn&&Tn(t)}{const e=wn(t);(0,r.C4)();try{kt(t)}finally{(0,r.bl)(),e()}}}const Dn={get(t,e){return(0,r.u4)(t,"get",""),t[e]}};function kn(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,Dn),slots:t.slots,emit:t.emit,expose:e}}function Nn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in Ct?Ct[n](t):void 0},has(t,e){return e in t||e in Ct}})):t.proxy}function On(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Rn(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const Mn=(t,e)=>{const n=(0,r.EW)(t,e,Sn);return n};const Pn="3.5.32"},5130:function(t,e,n){n.d(e,{Ef:function(){return G}});n(4423),n(4114),n(8111),n(2489),n(7588),n(1701),n(3579),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8454),n(9452);var r=n(6768),i=(n(144),n(4232));
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:t=>t})}catch(X){}const a=s?t=>s.createHTML(t):t=>t,c="http://www.w3.org/2000/svg",u="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,h=l&&l.createElement("template"),f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?l.createElementNS(c,t):"mathml"===e?l.createElementNS(u,t):n?l.createElement(t,{is:n}):l.createElement(t);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t);const i=h.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},d=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function g(t,e,n){const r=t[d];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const m=Symbol("_vod"),y=Symbol("_vsh");const v=Symbol("");const w=/(?:^|;)\s*display\s*:/;function b(t,e,n){const r=t.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(e)if((0,i.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&E(r,e,"")}else for(const t in e)null==n[t]&&E(r,t,"");for(const t in n)"display"===t&&(o=!0),E(r,t,n[t])}else if(s){if(e!==n){const t=r[v];t&&(n+=";"+t),r.cssText=n,o=w.test(n)}}else e&&t.removeAttribute("style");m in t&&(t[m]=o?r.display:"",t[y]&&(r.display="none"))}const _=/\s*!important$/;function E(t,e,n){if((0,i.cy)(n))n.forEach(n=>E(t,e,n));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=C(t,e);_.test(n)?t.setProperty((0,i.Tg)(r),n.replace(_,""),"important"):t[r]=n}}const T=["Webkit","Moz","ms"],S={};function C(t,e){const n=S[e];if(n)return n;let r=(0,i.PT)(e);if("filter"!==r&&r in t)return S[e]=r;r=(0,i.ZH)(r);for(let i=0;i<T.length;i++){const n=T[i]+r;if(n in t)return S[e]=n}return e}const I="http://www.w3.org/1999/xlink";function A(t,e,n,r,s,o=(0,i.J$)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(I,e.slice(6,e.length)):t.setAttributeNS(I,e,n):null==n||o&&!(0,i.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,i.Bm)(n)?String(n):n)}function x(t,e,n,r,s){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?a(n):n));const o=t.tagName;if("value"===e&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?t.getAttribute("value")||"":t.value,i=null==n?"checkbox"===t.type?"on":"":String(n);return r===i&&"_value"in t||(t.value=i),null==n&&t.removeAttribute(e),void(t._value=n)}let c=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{t[e]=n}catch(X){0}c&&t.removeAttribute(s||e)}function D(t,e,n,r){t.addEventListener(e,n,r)}function k(t,e,n,r){t.removeEventListener(e,n,r)}const N=Symbol("_vei");function O(t,e,n,r,i=null){const s=t[N]||(t[N]={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=M(e);if(r){const o=s[e]=F(r,i);D(t,n,o,a)}else o&&(k(t,n,o,a),s[e]=void 0)}}const R=/(?:Once|Passive|Capture)$/;function M(t){let e;if(R.test(t)){let n;e={};while(n=t.match(R))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.Tg)(t.slice(2));return[n,e]}let P=0;const L=Promise.resolve(),V=()=>P||(L.then(()=>P=0),P=Date.now());function F(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(U(t,n.value),e,5,[t])};return n.value=t,n.attached=V(),n}function U(t,e){if((0,i.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t&&t(e))}return e}const j=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,B=(t,e,n,r,s,o)=>{const a="svg"===s;"class"===e?g(t,r,a):"style"===e?b(t,n,r):(0,i.Mp)(e)?(0,i.CP)(e)||O(t,e,n,r,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):$(t,e,r,a))?(x(t,e,r),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||A(t,e,r,a,o,"value"!==e)):t._isVueCE&&(z(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!(0,i.Kg)(r)))?x(t,(0,i.PT)(e),r,o,e):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),A(t,e,r,a))};function $(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&j(e)&&(0,i.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e||"autocorrect"===e)return!1;if("sandbox"===e&&"IFRAME"===t.tagName)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!j(e)||!(0,i.Kg)(n))&&e in t}function z(t,e){const n=t._def.props;if(!n)return!1;const r=(0,i.PT)(e);return Array.isArray(n)?n.some(t=>(0,i.PT)(t)===r):Object.keys(n).some(t=>(0,i.PT)(t)===r)}"undefined"!==typeof HTMLElement&&HTMLElement;const q=(0,i.X$)({patchProp:B},f);let K;function H(){return K||(K=(0,r.K9)(q))}const G=(...t)=>{const e=H().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=Q(t);if(!r)return;const s=e._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,W(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function W(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function Q(t){if((0,i.Kg)(t)){const e=document.querySelector(t);return e}return t}},4232:function(t,e,n){n.d(e,{$3:function(){return d},$H:function(){return V},BH:function(){return K},BX:function(){return nt},Bm:function(){return _},C4:function(){return Y},CE:function(){return g},CP:function(){return u},DY:function(){return F},Gv:function(){return E},J$:function(){return Z},Kg:function(){return b},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return O},Qd:function(){return A},Ro:function(){return B},SU:function(){return D},TF:function(){return h},Tg:function(){return M},Tn:function(){return w},Tr:function(){return H},We:function(){return z},X$:function(){return l},Y2:function(){return tt},ZH:function(){return P},Zf:function(){return I},bB:function(){return j},cy:function(){return p},gd:function(){return v},pD:function(){return r},rU:function(){return L},tE:function(){return o},u3:function(){return rt},vM:function(){return m},v_:function(){return st},yI:function(){return x},yL:function(){return T},yQ:function(){return U}});n(4114),n(8111),n(2489),n(7588);
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function r(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}const i={},s=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),u=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(t,e)=>f.call(t,e),p=Array.isArray,g=t=>"[object Map]"===C(t),m=t=>"[object Set]"===C(t),y=t=>"[object Date]"===C(t),v=t=>"[object RegExp]"===C(t),w=t=>"function"===typeof t,b=t=>"string"===typeof t,_=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,T=t=>(E(t)||w(t))&&w(t.then)&&w(t.catch),S=Object.prototype.toString,C=t=>S.call(t),I=t=>C(t).slice(8,-1),A=t=>"[object Object]"===C(t),x=t=>b(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,D=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},N=/-\w/g,O=k(t=>t.replace(N,t=>t.slice(1).toUpperCase())),R=/\B([A-Z])/g,M=k(t=>t.replace(R,"-$1").toLowerCase()),P=k(t=>t.charAt(0).toUpperCase()+t.slice(1)),L=k(t=>{const e=t?`on${P(t)}`:"";return e}),V=(t,e)=>!Object.is(t,e),F=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},U=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},B=t=>{const e=b(t)?Number(t):NaN;return isNaN(e)?t:e};let $;const z=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const q="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",K=r(q);function H(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=b(r)?X(r):H(r);if(i)for(const t in i)e[t]=i[t]}return e}if(b(t)||E(t))return t}const G=/;(?![^(]*\))/g,W=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(Q,"").split(G).forEach(t=>{if(t){const n=t.split(W);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Y(t){let e="";if(b(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=Y(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=_(t),r=_(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex(t=>nt(t,e))}const it=t=>!(!t||!0!==t["__v_isRef"]),st=t=>b(t)?t:null==t?"":p(t)||E(t)&&(t.toString===S||!w(t.toString))?it(t)?st(t.value):JSON.stringify(t,ot,2):String(t),ot=(t,e)=>it(e)?ot(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n],r)=>(t[at(e,r)+" =>"]=n,t),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>at(t))}:_(e)?at(e):!E(e)||p(e)||A(e)?e:String(e),at=(t,e="")=>{var n;return _(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},1241:function(t,e){e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},9306:function(t,e,n){var r=n(4901),i=n(6823),s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not a function")}},3506:function(t,e,n){var r=n(3925),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s("Can't set "+i(t)+" as a prototype")}},7080:function(t,e,n){var r=n(4402).has;t.exports=function(t){return r(t),t}},3463:function(t){var e=TypeError;t.exports=function(t){if("string"==typeof t)return t;throw new e("Argument is not a string")}},4328:function(t,e,n){var r=n(4995),i=new r.WeakMap,s=r.set,o=r.remove;t.exports=function(t){return s(i,t,1),o(i,t),t}},6557:function(t,e,n){var r=n(4995).has;t.exports=function(t){return r(t),t}},6469:function(t,e,n){var r=n(8227),i=n(2360),s=n(4913).f,o=r("unscopables"),a=Array.prototype;void 0===a[o]&&s(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},679:function(t,e,n){var r=n(1625),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},3972:function(t,e,n){var r=n(34),i=String,s=TypeError;t.exports=function(t){if(void 0===t||r(t))return t;throw new s(i(t)+" is not an object or undefined")}},8551:function(t,e,n){var r=n(34),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not an object")}},4154:function(t,e,n){var r=n(6955),i=TypeError;t.exports=function(t){if("Uint8Array"===r(t))return t;throw new i("Argument is not an Uint8Array")}},7811:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(t,e,n){var r=n(4576),i=n(6706),s=n(2195),o=r.ArrayBuffer,a=r.TypeError;t.exports=o&&i(o.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==s(t))throw new a("ArrayBuffer expected");return t.byteLength}},3238:function(t,e,n){var r=n(4576),i=n(7811),s=n(7394),o=r.DataView;t.exports=function(t){if(!i||0!==s(t))return!1;try{return new o(t),!1}catch(e){return!0}}},5169:function(t,e,n){var r=n(3238),i=TypeError;t.exports=function(t){if(r(t))throw new i("ArrayBuffer is detached");return t}},4644:function(t,e,n){var r,i,s,o=n(7811),a=n(3724),c=n(4576),u=n(4901),l=n(34),h=n(9297),f=n(6955),d=n(6823),p=n(6699),g=n(6840),m=n(2106),y=n(1625),v=n(2787),w=n(2967),b=n(8227),_=n(3392),E=n(1181),T=E.enforce,S=E.get,C=c.Int8Array,I=C&&C.prototype,A=c.Uint8ClampedArray,x=A&&A.prototype,D=C&&v(C),k=I&&v(I),N=Object.prototype,O=c.TypeError,R=b("toStringTag"),M=_("TYPED_ARRAY_TAG"),P="TypedArrayConstructor",L=o&&!!w&&"Opera"!==f(c.opera),V=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(F,e)||h(U,e)},B=function(t){var e=v(t);if(l(e)){var n=S(e);return n&&h(n,P)?n[P]:B(e)}},$=function(t){if(!l(t))return!1;var e=f(t);return h(F,e)||h(U,e)},z=function(t){if($(t))return t;throw new O("Target is not a typed array")},q=function(t){if(u(t)&&(!w||y(D,t)))return t;throw new O(d(t)+" is not a typed array constructor")},K=function(t,e,n,r){if(a){if(n)for(var i in F){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}k[t]&&!n||g(k,t,n?e:L&&I[t]||e,r)}},H=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in F)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(D[t]&&!n)return;try{return g(D,t,n?e:L&&D[t]||e)}catch(s){}}for(r in F)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in F)i=c[r],s=i&&i.prototype,s?T(s)[P]=i:L=!1;for(r in U)i=c[r],s=i&&i.prototype,s&&(T(s)[P]=i);if((!L||!u(D)||D===Function.prototype)&&(D=function(){throw new O("Incorrect invocation")},L))for(r in F)c[r]&&w(c[r],D);if((!L||!k||k===N)&&(k=D.prototype,L))for(r in F)c[r]&&w(c[r].prototype,k);if(L&&v(x)!==k&&w(x,k),a&&!h(k,R))for(r in V=!0,m(k,R,{configurable:!0,get:function(){return l(this)?this[M]:void 0}}),F)c[r]&&p(c[r].prototype,M,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:V&&M,aTypedArray:z,aTypedArrayConstructor:q,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:H,getTypedArrayConstructor:B,isView:j,isTypedArray:$,TypedArray:D,TypedArrayPrototype:k}},9617:function(t,e,n){var r=n(5397),i=n(5610),s=n(6198),o=function(t){return function(e,n,o){var a=r(e),c=s(a);if(0===c)return!t&&-1;var u,l=i(o,c);if(t&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4527:function(t,e,n){var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},2804:function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=e+"+/",r=e+"-_",i=function(t){for(var e={},n=0;n<64;n++)e[t.charAt(n)]=n;return e};t.exports={i2c:n,c2i:i(n),i2cUrl:r,c2iUrl:i(r)}},6319:function(t,e,n){var r=n(8551),i=n(9539);t.exports=function(t,e,n,s){try{return s?e(r(n)[0],n[1]):e(n)}catch(o){i(t,"throw",o)}}},2195:function(t,e,n){var r=n(9504),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},6955:function(t,e,n){var r=n(2140),i=n(4901),s=n(2195),o=n(8227),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"===(r=s(e))&&i(e.callee)?"Arguments":r}},7740:function(t,e,n){var r=n(9297),i=n(5031),s=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},2211:function(t,e,n){var r=n(9039);t.exports=!r(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})},2529:function(t){t.exports=function(t,e){return{value:t,done:e}}},6699:function(t,e,n){var r=n(3724),i=n(4913),s=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},4659:function(t,e,n){var r=n(3724),i=n(4913),s=n(6980);t.exports=function(t,e,n){r?i.f(t,e,s(0,n)):t[e]=n}},2106:function(t,e,n){var r=n(283),i=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},6840:function(t,e,n){var r=n(4901),i=n(4913),s=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},6279:function(t,e,n){var r=n(6840);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},9433:function(t,e,n){var r=n(4576),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},3724:function(t,e,n){var r=n(9039);t.exports=!r(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})},4055:function(t,e,n){var r=n(4576),i=n(34),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},6837:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw new e("Maximum allowed index exceeded");return t}},5002:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8727:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2839:function(t,e,n){var r=n(4576),i=r.navigator,s=i&&i.userAgent;t.exports=s?String(s):""},9519:function(t,e,n){var r,i,s=n(4576),o=n(2839),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},6193:function(t,e,n){var r=n(9504),i=Error,s=r("".replace),o=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},6518:function(t,e,n){var r=n(4576),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},9039:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},8745:function(t,e,n){var r=n(616),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},6080:function(t,e,n){var r=n(7476),i=n(9306),s=n(616),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},616:function(t,e,n){var r=n(9039);t.exports=!r(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})},9565:function(t,e,n){var r=n(616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(t,e,n){var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(t,e,n){var r=n(9504),i=n(9306);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},7476:function(t,e,n){var r=n(2195),i=n(9504);t.exports=function(t){if("Function"===r(t))return i(t)}},9504:function(t,e,n){var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},944:function(t){var e=TypeError;t.exports=function(t){var n=t&&t.alphabet;if(void 0===n||"base64"===n||"base64url"===n)return n||"base64";throw new e("Incorrect `alphabet` option")}},7751:function(t,e,n){var r=n(4576),i=n(4901),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},851:function(t,e,n){var r=n(6955),i=n(5966),s=n(4117),o=n(6269),a=n(8227),c=a("iterator");t.exports=function(t){if(!s(t))return i(t,c)||i(t,"@@iterator")||o[r(t)]}},81:function(t,e,n){var r=n(9565),i=n(9306),s=n(8551),o=n(6823),a=n(851),c=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(i(n))return s(r(n,t));throw new c(o(t)+" is not iterable")}},5966:function(t,e,n){var r=n(9306),i=n(4117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},3789:function(t,e,n){var r=n(9306),i=n(8551),s=n(9565),o=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,f=function(t,e){this.set=t,this.size=h(e,0),this.has=r(t.has),this.keys=r(t.keys)};f.prototype={getIterator:function(){return a(i(s(this.keys,this.set)))},includes:function(t){return s(this.has,this.set,t)}},t.exports=function(t){i(t);var e=+t.size;if(e!==e)throw new l(c);var n=o(e);if(n<0)throw new u(c);return new f(t,n)}},4576:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},421:function(t){t.exports={}},397:function(t,e,n){var r=n(7751);t.exports=r("document","documentElement")},5917:function(t,e,n){var r=n(3724),i=n(9039),s=n(4055);t.exports=!r&&!i(function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a})},7055:function(t,e,n){var r=n(9504),i=n(9039),s=n(2195),o=Object,a=r("".split);t.exports=i(function(){return!o("z").propertyIsEnumerable(0)})?function(t){return"String"===s(t)?a(t,""):o(t)}:o},3167:function(t,e,n){var r=n(4901),i=n(34),s=n(2967);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},3706:function(t,e,n){var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},1181:function(t,e,n){var r,i,s,o=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw new g(p);return e.facade=t,w.set(t,e),e},i=function(t){return w.get(t)||{}},s=function(t){return w.has(t)}}else{var b=f("state");d[b]=!0,r=function(t,e){if(l(t,b))throw new g(p);return e.facade=t,u(t,b,e),e},i=function(t){return l(t,b)?t[b]:{}},s=function(t){return l(t,b)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},4209:function(t,e,n){var r=n(8227),i=n(6269),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},4376:function(t,e,n){var r=n(2195);t.exports=Array.isArray||function(t){return"Array"===r(t)}},1108:function(t,e,n){var r=n(6955);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},4901:function(t){var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n===l||n!==u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},4117:function(t){t.exports=function(t){return null===t||void 0===t}},34:function(t,e,n){var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},3925:function(t,e,n){var r=n(34);t.exports=function(t){return r(t)||null===t}},6395:function(t){t.exports=!1},757:function(t,e,n){var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},507:function(t,e,n){var r=n(9565);t.exports=function(t,e,n){var i,s,o=n?t:t.iterator,a=t.next;while(!(i=r(a,o)).done)if(s=e(i.value),void 0!==s)return s}},2652:function(t,e,n){var r=n(6080),i=n(9565),s=n(8551),o=n(6823),a=n(4209),c=n(6198),u=n(1625),l=n(81),h=n(851),f=n(9539),d=TypeError,p=function(t,e){this.stopped=t,this.result=e},g=p.prototype;t.exports=function(t,e,n){var m,y,v,w,b,_,E,T=n&&n.that,S=!(!n||!n.AS_ENTRIES),C=!(!n||!n.IS_RECORD),I=!(!n||!n.IS_ITERATOR),A=!(!n||!n.INTERRUPTED),x=r(e,T),D=function(t){var e=m;return m=void 0,e&&f(e,"normal"),new p(!0,t)},k=function(t){return S?(s(t),A?x(t[0],t[1],D):x(t[0],t[1])):A?x(t,D):x(t)};if(C)m=t.iterator;else if(I)m=t;else{if(y=h(t),!y)throw new d(o(t)+" is not iterable");if(a(y)){for(v=0,w=c(t);w>v;v++)if(b=k(t[v]),b&&u(g,b))return b;return new p(!1)}m=l(t,y)}_=C?t.next:m.next;while(!(E=i(_,m)).done){var N=E.value;try{b=k(N)}catch(O){if(!m)throw O;f(m,"throw",O)}if("object"==typeof b&&b&&u(g,b))return b}return new p(!1)}},1385:function(t,e,n){var r=n(9539);t.exports=function(t,e,n){for(var i=t.length-1;i>=0;i--)if(void 0!==t[i])try{n=r(t[i].iterator,e,n)}catch(s){e="throw",n=s}if("throw"===e)throw n;return n}},9539:function(t,e,n){var r=n(9565),i=n(8551),s=n(5966);t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return i(o),n}},9462:function(t,e,n){var r=n(9565),i=n(2360),s=n(6699),o=n(6279),a=n(8227),c=n(1181),u=n(5966),l=n(7657).IteratorPrototype,h=n(2529),f=n(9539),d=n(1385),p=a("toStringTag"),g="IteratorHelper",m="WrapForValidIterator",y="normal",v="throw",w=c.set,b=function(t){var e=c.getterFor(t?m:g);return o(i(l),{next:function(){var n=e(this);if(t)return n.nextHandler();if(n.done)return h(void 0,!0);try{var r=n.nextHandler();return n.returnHandlerResult?r:h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=e(this),i=n.iterator,s=n.done;if(n.done=!0,t){var o=u(i,"return");return o?r(o,i):h(void 0,!0)}if(s)return h(void 0,!0);if(n.inner)try{f(n.inner.iterator,y)}catch(a){return f(i,v,a)}if(n.openIters)try{d(n.openIters,y)}catch(a){if(i)return f(i,v,a);throw a}return i&&f(i,y),h(void 0,!0)}})},_=b(!0),E=b(!1);s(E,p,"Iterator Helper"),t.exports=function(t,e,n){var r=function(r,i){i?(i.iterator=r.iterator,i.next=r.next):i=r,i.type=e?m:g,i.returnHandlerResult=!!n,i.nextHandler=t,i.counter=0,i.done=!1,w(this,i)};return r.prototype=e?_:E,r}},684:function(t){t.exports=function(t,e){var n="function"==typeof Iterator&&Iterator.prototype[t];if(n)try{n.call({next:null},e).next()}catch(r){return!0}}},4549:function(t,e,n){var r=n(4576);t.exports=function(t,e){var n=r.Iterator,i=n&&n.prototype,s=i&&i[t],o=!1;if(s)try{s.call({next:function(){return{done:!0}},return:function(){o=!0}},-1)}catch(a){a instanceof e||(o=!1)}if(!o)return s}},7657:function(t,e,n){var r,i,s,o=n(9039),a=n(4901),c=n(34),u=n(2360),l=n(2787),h=n(6840),f=n(8227),d=n(6395),p=f("iterator"),g=!1;[].keys&&(s=[].keys(),"next"in s?(i=l(l(s)),i!==Object.prototype&&(r=i)):g=!0);var m=!c(r)||o(function(){var t={};return r[p].call(t)!==t});m?r={}:d&&(r=u(r)),a(r[p])||h(r,p,function(){return this}),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},6269:function(t){t.exports={}},6198:function(t,e,n){var r=n(8014);t.exports=function(t){return r(t.length)}},283:function(t,e,n){var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),v=a&&!i(function(){return 8!==p(function(){},"length",{value:8}).length}),w=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=y(w,"string"==typeof e?e:"")),t};Function.prototype.toString=b(function(){return s(this)&&f(this).source||u(this)},"toString")},2248:function(t,e,n){var r=n(9504),i=Map.prototype;t.exports={Map:Map,set:r(i.set),get:r(i.get),has:r(i.has),remove:r(i["delete"]),proto:i}},741:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},2603:function(t,e,n){var r=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},2360:function(t,e,n){var r,i=n(8551),s=n(6801),o=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(t){return f+p+h+t+f+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?v(r):w():v(r);var t=o.length;while(t--)delete b[d][o[t]];return b()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=b(),void 0===e?n:s.f(n,e)}},6801:function(t,e,n){var r=n(3724),i=n(8686),s=n(4913),o=n(8551),a=n(5397),c=n(1072);e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)s.f(t,n=i[l++],r[n]);return t}},4913:function(t,e,n){var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},8480:function(t,e,n){var r=n(1828),i=n(8727),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},3717:function(t,e){e.f=Object.getOwnPropertySymbols},2787:function(t,e,n){var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},1625:function(t,e,n){var r=n(9504);t.exports=r({}.isPrototypeOf)},1828:function(t,e,n){var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},1072:function(t,e,n){var r=n(1828),i=n(8727);t.exports=Object.keys||function(t){return r(t,i)}},8773:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2967:function(t,e,n){var r=n(6706),i=n(34),s=n(7750),o=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(e?t(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(t,e,n){var r=n(9565),i=n(4901),s=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw new o("Can't convert object to primitive value")}},5031:function(t,e,n){var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},9167:function(t,e,n){var r=n(4576);t.exports=r},7750:function(t,e,n){var r=n(4117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},9286:function(t,e,n){var r=n(4402),i=n(8469),s=r.Set,o=r.add;t.exports=function(t){var e=new s;return i(t,function(t){o(e,t)}),e}},3440:function(t,e,n){var r=n(7080),i=n(4402),s=n(9286),o=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;t.exports=function(t){var e=r(this),n=a(t),i=s(e);return o(i)<=n.size?c(i,function(t){n.includes(t)&&h(i,t)}):u(n.getIterator(),function(t){l(i,t)&&h(i,t)}),i}},4402:function(t,e,n){var r=n(9504),i=Set.prototype;t.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(t,e,n){var r=n(7080),i=n(4402),s=n(5170),o=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;t.exports=function(t){var e=r(this),n=o(t),i=new u;return s(e)>n.size?c(n.getIterator(),function(t){h(e,t)&&l(i,t)}):a(e,function(t){n.includes(t)&&l(i,t)}),i}},4449:function(t,e,n){var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(8469),c=n(507),u=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<=n.size)return!1!==a(e,function(t){if(n.includes(t))return!1},!0);var l=n.getIterator();return!1!==c(l,function(t){if(i(e,t))return u(l.iterator,"normal",!1)})}},3838:function(t,e,n){var r=n(7080),i=n(5170),s=n(8469),o=n(3789);t.exports=function(t){var e=r(this),n=o(t);return!(i(e)>n.size)&&!1!==s(e,function(t){if(!n.includes(t))return!1},!0)}},8527:function(t,e,n){var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(507),c=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<n.size)return!1;var u=n.getIterator();return!1!==a(u,function(t){if(!i(e,t))return c(u.iterator,"normal",!1)})}},8469:function(t,e,n){var r=n(9504),i=n(507),s=n(4402),o=s.Set,a=s.proto,c=r(a.forEach),u=r(a.keys),l=u(new o).next;t.exports=function(t,e,n){return n?i({iterator:u(t),next:l},e):c(t,e)}},4916:function(t,e,n){var r=n(7751),i=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},s=function(t){return{size:t,has:function(){return!0},keys:function(){throw new Error("e")}}};t.exports=function(t,e){var n=r("Set");try{(new n)[t](i(0));try{return(new n)[t](i(-1)),!1}catch(a){if(!e)return!0;try{return(new n)[t](s(-1/0)),!1}catch(c){var o=new n([1,2]);return e(o[t](s(1/0)))}}}catch(c){return!1}}},9835:function(t){t.exports=function(t){try{var e=new Set,n={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return e.clear(),e.add(4),function(){return{done:!0}}}})}},r=e[t](n);return 1===r.size&&4===r.values().next().value}catch(i){return!1}}},5170:function(t,e,n){var r=n(6706),i=n(4402);t.exports=r(i.proto,"size","get")||function(t){return t.size}},3650:function(t,e,n){var r=n(7080),i=n(4402),s=n(9286),o=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;t.exports=function(t){var e=r(this),n=o(t).getIterator(),i=s(e);return a(n,function(t){u(e,t)?l(i,t):c(i,t)}),i}},4204:function(t,e,n){var r=n(7080),i=n(4402).add,s=n(9286),o=n(3789),a=n(507);t.exports=function(t){var e=r(this),n=o(t).getIterator(),c=s(e);return a(n,function(t){i(c,t)}),c}},6119:function(t,e,n){var r=n(5745),i=n(3392),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},7629:function(t,e,n){var r=n(6395),i=n(4576),s=n(9433),o="__core-js_shared__",a=t.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.49.0",mode:r?"pure":"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},4495:function(t,e,n){var r=n(9519),i=n(9039),s=n(4576),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i(function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41})},5610:function(t,e,n){var r=n(1291),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5854:function(t,e,n){var r=n(2777),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},5397:function(t,e,n){var r=n(7055),i=n(7750);t.exports=function(t){return r(i(t))}},1291:function(t,e,n){var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},8014:function(t,e,n){var r=n(1291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},8981:function(t,e,n){var r=n(7750),i=Object;t.exports=function(t){return i(r(t))}},2777:function(t,e,n){var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6969:function(t,e,n){var r=n(2777),i=n(757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},2140:function(t,e,n){var r=n(8227),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},655:function(t,e,n){var r=n(6955),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},6823:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3392:function(t,e,n){var r=n(9504),i=0,s=Math.random(),o=r(1.1.toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},9143:function(t,e,n){var r=n(4576),i=n(9504),s=n(3972),o=n(3463),a=n(9297),c=n(2804),u=n(944),l=n(5169),h=c.c2i,f=c.c2iUrl,d=r.SyntaxError,p=r.TypeError,g=i("".charAt),m=function(t,e){for(var n=t.length;e<n;e++){var r=g(t,e);if(" "!==r&&"\t"!==r&&"\n"!==r&&"\f"!==r&&"\r"!==r)break}return e},y=function(t,e,n){var r=t.length;r<4&&(t+=2===r?"AA":"A");var i=(e[g(t,0)]<<18)+(e[g(t,1)]<<12)+(e[g(t,2)]<<6)+e[g(t,3)],s=[i>>16&255,i>>8&255,255&i];if(2===r){if(n&&0!==s[1])throw new d("Extra bits");return[s[0]]}if(3===r){if(n&&0!==s[2])throw new d("Extra bits");return[s[0],s[1]]}return s},v=function(t,e,n){for(var r=e.length,i=0;i<r;i++)t[n+i]=e[i];return n+r};t.exports=function(t,e,n,r){o(t),s(e);var i="base64"===u(e)?h:f,c=e?e.lastChunkHandling:void 0;if(void 0===c&&(c="loose"),"loose"!==c&&"strict"!==c&&"stop-before-partial"!==c)throw new p("Incorrect `lastChunkHandling` option");n&&l(n.buffer);var w=t.length,b=n||[],_=0,E=0,T="",S=0;if(r)while(1){if(S=m(t,S),S===w){if(T.length>0){if("stop-before-partial"===c)break;if("loose"!==c)throw new d("Missing padding");if(1===T.length)throw new d("Malformed padding: exactly one additional character");_=v(b,y(T,i,!1),_)}E=w;break}var C=g(t,S);if(++S,"="===C){if(T.length<2)throw new d("Padding is too early");if(S=m(t,S),2===T.length){if(S===w){if("stop-before-partial"===c)break;throw new d("Malformed padding: only one =")}"="===g(t,S)&&(++S,S=m(t,S))}if(S<w)throw new d("Unexpected character after padding");_=v(b,y(T,i,"strict"===c),_),E=w;break}if(!a(i,C))throw new d("Unexpected character");var I=r-_;if(1===I&&2===T.length||2===I&&3===T.length)break;if(T+=C,4===T.length&&(_=v(b,y(T,i,!1),_),T="",E=S,_===r))break}return{bytes:b,read:E,written:_}}},2303:function(t,e,n){var r=n(4576),i=n(9504),s=r.Uint8Array,o=r.SyntaxError,a=Math.min,c=i("".match);t.exports=function(t,e){var n=t.length;if(n%2!==0)throw new o("String should be an even number of characters");for(var r=e?a(e.length,n/2):n/2,i=e||new s(r),u=c(t,/.{2}/g),l=0;l<r;l++){var h=+("0x"+u[l]+"0");if(h!==h)throw new o("String should only contain hex characters");i[l]=h>>4}return{bytes:i,read:l<<1}}},7040:function(t,e,n){var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){var r=n(3724),i=n(9039);t.exports=r&&i(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})},8622:function(t,e,n){var r=n(4576),i=n(4901),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},4995:function(t,e,n){var r=n(9504),i=WeakMap.prototype;t.exports={WeakMap:WeakMap,set:r(i.set),get:r(i.get),has:r(i.has),remove:r(i["delete"])}},511:function(t,e,n){var r=n(9167),i=n(9297),s=n(1951),o=n(4913).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:s.f(t)})}},1951:function(t,e,n){var r=n(8227);e.f=r},8227:function(t,e,n){var r=n(4576),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(u,t)?u[t]:h("Symbol."+t)),l[t]}},4423:function(t,e,n){var r=n(6518),i=n(9617).includes,s=n(9039),o=n(6469),a=s(function(){return!Array(1).includes()}),c=s(function(){return[,1].includes(void 0,1)});r({target:"Array",proto:!0,forced:a||c},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},4114:function(t,e,n){var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),u=c(function(){return 4294967297!==[].push.call({length:4294967296},1)}),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},8111:function(t,e,n){var r=n(6518),i=n(4576),s=n(679),o=n(8551),a=n(4901),c=n(2787),u=n(2106),l=n(4659),h=n(9039),f=n(9297),d=n(8227),p=n(7657).IteratorPrototype,g=n(3724),m=n(6395),y="constructor",v="Iterator",w=d("toStringTag"),b=TypeError,_=i[v],E=m||!a(_)||_.prototype!==p||!h(function(){_({})}),T=function(){if(s(this,p),c(this)===p)throw new b("Abstract class Iterator not directly constructable")},S=function(t,e){g?u(p,t,{configurable:!0,get:function(){return e},set:function(e){if(o(this),this===p)throw new b("You can't redefine this property");f(this,t)?this[t]=e:l(this,t,e)}}):p[t]=e};f(p,w)||S(w,v),!E&&f(p,y)&&p[y]!==Object||S(y,T),T.prototype=p,r({global:!0,constructor:!0,forced:E},{Iterator:T})},6382:function(t,e,n){var r=n(9565),i=n(6840),s=n(5966),o=n(9297),a=n(8227),c=n(7657).IteratorPrototype,u=a("dispose");o(c,u)||i(c,u,function(){var t=s(this,"return");t&&r(t,this)})},1148:function(t,e,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("every",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{every:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return!s(e,function(e,r){if(!t(e,n++))return r()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},2489:function(t,e,n){var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(6395),h=n(9539),f=n(684),d=n(4549),p=!l&&!f("filter",function(){}),g=!l&&!p&&d("filter",TypeError),m=l||p||g,y=c(function(){var t,e,n,r=this.iterator,s=this.predicate,a=this.next;while(1){if(t=o(i(a,r)),e=this.done=!!t.done,e)return;if(n=t.value,u(r,s,[n,this.counter++],!0))return n}});r({target:"Iterator",proto:!0,real:!0,forced:m},{filter:function(t){o(this);try{s(t)}catch(e){h(this,"throw",e)}return g?i(g,this,t):new y(a(this),{predicate:t})}})},116:function(t,e,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("find",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{find:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return s(e,function(e,r){if(t(e,n++))return r(e)},{IS_RECORD:!0,INTERRUPTED:!0}).result}})},7588:function(t,e,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("forEach",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{forEach:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;s(e,function(e){t(e,n++)},{IS_RECORD:!0})}})},1701:function(t,e,n){var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(9539),h=n(684),f=n(4549),d=n(6395),p=!d&&!h("map",function(){}),g=!d&&!p&&f("map",TypeError),m=d||p||g,y=c(function(){var t=this.iterator,e=o(i(this.next,t)),n=this.done=!!e.done;if(!n)return u(t,this.mapper,[e.value,this.counter++],!0)});r({target:"Iterator",proto:!0,real:!0,forced:m},{map:function(t){o(this);try{s(t)}catch(e){l(this,"throw",e)}return g?i(g,this,t):new y(a(this),{mapper:t})}})},8237:function(t,e,n){var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767),c=n(9539),u=n(4549),l=n(8745),h=n(9039),f=TypeError,d=h(function(){[].keys().reduce(function(){},void 0)}),p=!d&&u("reduce",f);r({target:"Iterator",proto:!0,real:!0,forced:d||p},{reduce:function(t){o(this);try{s(t)}catch(h){c(this,"throw",h)}var e=arguments.length<2,n=e?void 0:arguments[1];if(p)return l(p,this,e?[t]:[t,n]);var r=a(this),u=0;if(i(r,function(r){e?(e=!1,n=r):n=t(n,r,u),u++},{IS_RECORD:!0}),e)throw new f("Reduce of empty iterator with no initial value");return n}})},3579:function(t,e,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("some",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{some:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return s(e,function(e,r){if(t(e,n++))return r()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},1806:function(t,e,n){var r=n(6518),i=n(8551),s=n(4659),o=n(2652),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[],e=0;return o(a(i(this)),function(n){s(t,e++,n)},{IS_RECORD:!0}),t}})},2731:function(t,e,n){var r=n(6518),i=n(9306),s=n(2248),o=n(6395),a=s.get,c=s.has,u=s.set;r({target:"Map",proto:!0,real:!0,forced:o},{getOrInsertComputed:function(t,e){var n=c(this,t);if(i(e),n)return a(this,t);0===t&&1/t===-1/0&&(t=0);var r=e(t);return u(this,t,r),r}})},5367:function(t,e,n){var r=n(6518),i=n(2248),s=n(6395),o=i.get,a=i.has,c=i.set;r({target:"Map",proto:!0,real:!0,forced:s},{getOrInsert:function(t,e){return a(this,t)?o(this,t):(c(this,t,e),e)}})},7642:function(t,e,n){var r=n(6518),i=n(3440),s=n(9039),o=n(4916),a=!o("difference",function(t){return 0===t.size}),c=a||s(function(){var t={size:1,has:function(){return!0},keys:function(){var t=0;return{next:function(){var n=t++>1;return e.has(1)&&e.clear(),{done:n,value:2}}}}},e=new Set([1,2,3,4]);return 3!==e.difference(t).size});r({target:"Set",proto:!0,real:!0,forced:c},{difference:i})},8004:function(t,e,n){var r=n(6518),i=n(9039),s=n(8750),o=n(4916),a=!o("intersection",function(t){return 2===t.size&&t.has(1)&&t.has(2)})||i(function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))});r({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},3853:function(t,e,n){var r=n(6518),i=n(4449),s=n(4916),o=!s("isDisjointFrom",function(t){return!t});r({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:i})},5876:function(t,e,n){var r=n(6518),i=n(3838),s=n(4916),o=!s("isSubsetOf",function(t){return t});r({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:i})},2475:function(t,e,n){var r=n(6518),i=n(8527),s=n(4916),o=!s("isSupersetOf",function(t){return!t});r({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:i})},5024:function(t,e,n){var r=n(6518),i=n(3650),s=n(9835),o=n(4916),a=!o("symmetricDifference")||!s("symmetricDifference");r({target:"Set",proto:!0,real:!0,forced:a},{symmetricDifference:i})},1698:function(t,e,n){var r=n(6518),i=n(4204),s=n(9835),o=n(4916),a=!o("union")||!s("union");r({target:"Set",proto:!0,real:!0,forced:a},{union:i})},7324:function(t,e,n){var r=n(4576),i=n(511),s=n(4913).f,o=n(7347).f,a=r.Symbol;if(i("dispose"),a){var c=o(a,"dispose");c.enumerable&&c.configurable&&c.writable&&s(a,"dispose",{value:c.value,enumerable:!1,configurable:!1,writable:!1})}},9577:function(t,e,n){var r=n(4644),i=n(1108),s=n(6198),o=n(1291),a=n(5854),c=r.aTypedArray,u=r.getTypedArrayConstructor,l=r.exportTypedArrayMethod,h=RangeError,f=function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}(),d=f&&function(){try{new Int8Array(1)["with"](-.5,1)}catch(t){return!0}}();l("with",{with:function(t,e){var n=c(this),r=s(n),l=o(t),f=l<0?r+l:l,d=i(n)?a(e):+e;if(f>=r||f<0)throw new h("Incorrect index");for(var p=new(u(n))(r),g=0;g<r;g++)p[g]=g===f?d:n[g];return p}}["with"],!f||d)},6632:function(t,e,n){var r=n(6518),i=n(4576),s=n(9143),o=n(4154),a=i.Uint8Array,c=!a||!a.prototype.setFromBase64||!function(){var t=new a([255,255,255,255,255]);try{return void t.setFromBase64("",null)}catch(e){}try{return void t.setFromBase64("a")}catch(e){}try{t.setFromBase64("MjYyZg===")}catch(e){return 50===t[0]&&54===t[1]&&50===t[2]&&255===t[3]&&255===t[4]}}();a&&r({target:"Uint8Array",proto:!0,forced:c},{setFromBase64:function(t){o(this);var e=s(t,arguments.length>1?arguments[1]:void 0,this,this.length);return{read:e.read,written:e.written}}})},4226:function(t,e,n){var r=n(6518),i=n(4576),s=n(3463),o=n(4154),a=n(5169),c=n(2303);function u(){try{var t=new ArrayBuffer(16,{maxByteLength:1024});new Uint8Array(t).setFromHex("cafed00d")}catch(e){return!0}}i.Uint8Array&&r({target:"Uint8Array",proto:!0,forced:u()},{setFromHex:function(t){o(this),s(t),a(this.buffer);var e=c(t,this).read;return{read:e,written:e/2}}})},9486:function(t,e,n){var r=n(6518),i=n(4576),s=n(9504),o=n(3972),a=n(4154),c=n(5169),u=n(2804),l=n(944),h=u.i2c,f=u.i2cUrl,d=s("".charAt),p=i.Uint8Array,g=!p||!p.prototype.toBase64||!function(){try{var t=new p;t.toBase64(null)}catch(e){return!0}}();p&&r({target:"Uint8Array",proto:!0,forced:g},{toBase64:function(){var t=a(this),e=arguments.length?o(arguments[0]):void 0,n="base64"===l(e)?h:f,r=!!e&&!!e.omitPadding;c(this.buffer);for(var i,s="",u=0,p=t.length,g=function(t){return d(n,i>>6*t&63)};u+2<p;u+=3)i=(t[u]<<16)+(t[u+1]<<8)+t[u+2],s+=g(3)+g(2)+g(1)+g(0);return u+2===p?(i=(t[u]<<16)+(t[u+1]<<8),s+=g(3)+g(2)+g(1)+(r?"":"=")):u+1===p&&(i=t[u]<<16,s+=g(3)+g(2)+(r?"":"==")),s}})},456:function(t,e,n){var r=n(6518),i=n(4576),s=n(9504),o=n(4154),a=n(5169),c=s(1.1.toString),u=s([].join),l=Array,h=i.Uint8Array,f=!h||!h.prototype.toHex||!function(){try{var t=new h([255,255,255,255,255,255,255,255]);return"ffffffffffffffff"===t.toHex()}catch(e){return!1}}();h&&r({target:"Uint8Array",proto:!0,forced:f},{toHex:function(){o(this),a(this.buffer);for(var t=l(this.length),e=0,n=this.length;e<n;e++){var r=c(this[e],16);t[e]=1===r.length?"0"+r:r}return u(t,"")}})},9452:function(t,e,n){var r=n(6518),i=n(9306),s=n(6557),o=n(4328),a=n(4995),c=n(6395),u=a.get,l=a.has,h=a.set,f=c||!function(){try{WeakMap.prototype.getOrInsertComputed&&(new WeakMap).getOrInsertComputed(1,function(){throw 1})}catch(t){return t instanceof TypeError}}();r({target:"WeakMap",proto:!0,real:!0,forced:f},{getOrInsertComputed:function(t,e){if(c||s(this),o(t),i(e),l(this,t))return u(this,t);var n=e(t);return h(this,t,n),n}})},8454:function(t,e,n){var r=n(6518),i=n(4995),s=n(6395),o=i.get,a=i.has,c=i.set;r({target:"WeakMap",proto:!0,real:!0,forced:s},{getOrInsert:function(t,e){return a(this,t)?o(this,t):(c(this,t,e),e)}})},4979:function(t,e,n){var r=n(6518),i=n(4576),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),f=n(5002),d=n(6193),p=n(3724),g=n(6395),m="DOMException",y=s("Error"),v=s(m),w=function(){u(this,b);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new v(e,n),i=new y(e);return i.name=m,a(r,"stack",o(1,d(i.stack,1))),l(r,this,w),r},b=w.prototype=v.prototype,_="stack"in new y(m),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),S=!!T&&!(T.writable&&T.configurable),C=_&&!S&&!E;r({global:!0,constructor:!0,forced:g||C},{DOMException:C?w:v});var I=s(m),A=I.prototype;if(A.constructor!==I)for(var x in g||a(A,"constructor",o(1,I)),f)if(c(f,x)){var D=f[x],k=D.s;c(I,k)||a(I,k,o(6,D.c))}},262:function(t,e,n){n.d(e,{MF:function(){return wt},j6:function(){return pt},xZ:function(){return gt},om:function(){return dt},Sx:function(){return _t},Wp:function(){return bt},KO:function(){return Et}});n(4114),n(8111),n(2489),n(1701),n(3579),n(5367),n(2731);var r=n(798),i=n(6189),s=n(2455);n(4423),n(8454),n(9452),n(4979);const o=(t,e)=>e.some(e=>t instanceof e);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&h.set(e,t)}).catch(()=>{}),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function S(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{s&&t.addEventListener("close",()=>s()),i&&t.addEventListener("versionchange",t=>i(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}const C=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],A=new Map;function x(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!C.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return A.set(e,s),s}w(t=>({...t,get:(e,n,r)=>x(e,n)||t.get(e,n,r),has:(e,n)=>!!x(e,n)||t.has(e,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(k(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function k(t){const e=t.getComponent();return"VERSION"===e?.type}const N="@firebase/app",O="0.14.11",R=new i.Vy("@firebase/app"),M="@firebase/app-compat",P="@firebase/analytics-compat",L="@firebase/analytics",V="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",$="@firebase/data-connect",z="@firebase/database-compat",q="@firebase/functions",K="@firebase/functions-compat",H="@firebase/installations",G="@firebase/installations-compat",W="@firebase/messaging",Q="@firebase/messaging-compat",X="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",rt="@firebase/ai",it="@firebase/firestore-compat",st="firebase",ot="12.12.0",at="[DEFAULT]",ct={[N]:"fire-core",[M]:"fire-core-compat",[L]:"fire-analytics",[P]:"fire-analytics-compat",[F]:"fire-app-check",[V]:"fire-app-check-compat",[U]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-data-connect",[z]:"fire-rtdb-compat",[q]:"fire-fn",[K]:"fire-fn-compat",[H]:"fire-iid",[G]:"fire-iid-compat",[W]:"fire-fcm",[Q]:"fire-fcm-compat",[X]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[it]:"fire-fst-compat",[rt]:"fire-vertex","fire-js":"fire-js",[st]:"fire-js-all"},ut=new Map,lt=new Map,ht=new Map;function ft(t,e){try{t.container.addComponent(e)}catch(n){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dt(t){const e=t.name;if(ht.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of ut.values())ft(n,t);for(const n of lt.values())ft(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return null!==t&&void 0!==t&&void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},yt=new s.FA("app","Firebase",mt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt=ot;function bt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i={name:at,automaticDataCollectionEnabled:!0,...e},o=i.name;if("string"!==typeof o||!o)throw yt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw yt.create("no-options");const a=ut.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw yt.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ht.values())c.addComponent(r);const u=new vt(n,i,c);return ut.set(o,u),u}function _t(t=at){const e=ut.get(t);if(!e&&t===at&&(0,s.T9)())return bt();if(!e)throw yt.create("no-app",{appName:t});return e}function Et(t,e,n){let i=ct[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void R.warn(t.join(" "))}dt(new r.uA(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tt="firebase-heartbeat-database",St=1,Ct="firebase-heartbeat-store";let It=null;function At(){return It||(It=S(Tt,St,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ct)}catch(n){console.warn(n)}}}}).catch(t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})})),It}async function xt(t){try{const e=await At(),n=e.transaction(Ct),r=await n.objectStore(Ct).get(kt(t));return await n.done,r}catch(e){if(e instanceof s.g)R.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e?.message});R.warn(t.message)}}}async function Dt(t,e){try{const n=await At(),r=n.transaction(Ct,"readwrite"),i=r.objectStore(Ct);await i.put(e,kt(t)),await r.done}catch(n){if(n instanceof s.g)R.warn(n.message);else{const t=yt.create("idb-set",{originalErrorMessage:n?.message});R.warn(t.message)}}}function kt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=1024,Ot=30;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Lt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Mt();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(t=>t.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats.length>Ot){const t=Ft(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){R.warn(t)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const t=Mt(),{heartbeatsToSend:e,unsentEntries:n}=Pt(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return R.warn(t),""}}}function Mt(){const t=new Date;return t.toISOString().substring(0,10)}function Pt(t,e=Nt){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),Vt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Lt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await xt(this.app);return t?.heartbeats?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){const e=await this._canUseIndexedDBPromise;if(e){const e=await this.read();return Dt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){const e=await this._canUseIndexedDBPromise;if(e){const e=await this.read();return Dt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}}}function Vt(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}function Ft(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){dt(new r.uA("platform-logger",t=>new D(t),"PRIVATE")),dt(new r.uA("heartbeat",t=>new Rt(t),"PRIVATE")),Et(N,O,t),Et(N,O,"esm2020"),Et("fire-js","")}Ut("")},798:function(t,e,n){n.d(e,{h1:function(){return u},uA:function(){return i}});n(8111),n(2489),n(1701),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(2455);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),n=t?.optional??!1;if(!this.isInitialized(e)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:e})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),r=this.onInitCallbacks.get(n)??new Set;r.add(t),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&t(i,n),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},6189:function(t,e,n){n.d(e,{$b:function(){return i},Vy:function(){return u}});n(4114),n(8111),n(2489),n(1701);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},6400:function(t,e,n){n.d(e,{Wp:function(){return r.Wp}});var r=n(262),i="firebase",s="12.12.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},4289:function(t,e,n){n.d(e,{rJ:function(){return dc},H9:function(){return pc},aU:function(){return wc},aQ:function(){return su},mZ:function(){return iu}});n(4114),n(8111),n(2489),n(7588),n(1701),n(5367),n(2731),n(8454),n(9452);var r,i,s=n(262),o=n(798),a=(n(4423),n(1148),n(116),n(8237),n(3579),n(1806),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(9577),n(6632),n(4226),n(9486),n(456),n(4979),n(2455)),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.F=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.D=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function o(t,e,n){n||(n=0);const r=Array(16);if("string"===typeof e)for(var i=0;i<16;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;i<16;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];let s,o=t.g[3];s=e+(o^n&(i^o))+r[0]+3614090360&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}function a(t,e){var n=l;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function c(t,e){this.h=e;const n=[];let r=!0;for(let i=t.length-1;i>=0;i--){const s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.v=function(t,e){void 0===e&&(e=t.length);const n=e-this.blockSize,r=this.C;let i=this.h,s=0;for(;s<e;){if(0==i)for(;s<=n;)o(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=e},s.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;e=8*this.o;for(var n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.v(t),t=Array(16),e=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)t[e++]=this.g[n]>>>r&255;return t};var l={};function h(t){return-128<=t&&t<128?a(t,function(t){return new c([0|t],t<0?-1:0)}):new c([0|t],t<0?-1:0)}function f(t){if(isNaN(t)||!isFinite(t))return p;if(t<0)return w(f(-t));const e=[];let n=1;for(let r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new c(e,0)}function d(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,e<2||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return w(d(t.substring(1),e));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const n=f(Math.pow(e,8));let r=p;for(let s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s);const o=parseInt(t.substring(s,s+i),e);i<8?(i=f(Math.pow(e,i)),r=r.j(i).add(f(o))):(r=r.j(n),r=r.add(f(o)))}return r}var p=h(0),g=h(1),m=h(16777216);function y(t){if(0!=t.h)return!1;for(let e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function v(t){return-1==t.h}function w(t){const e=t.g.length,n=[];for(let r=0;r<e;r++)n[r]=~t.g[r];return new c(n,~t.h).add(g)}function b(t,e){return t.add(w(e))}function _(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function T(t,e){if(y(e))throw Error("division by zero");if(y(t))return new E(p,p);if(v(t))return e=T(w(t),e),new E(w(e.g),w(e.h));if(v(e))return e=T(t,w(e)),new E(w(e.g),e.h);if(t.g.length>30){if(v(t)||v(e))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=e;r.l(t)<=0;)n=S(n),r=S(r);var i=C(n,1),s=C(r,1);for(r=C(r,2),n=C(n,2);!y(r);){var o=s.add(r);o.l(t)<=0&&(i=i.add(n),s=o),r=C(r,1),n=C(n,1)}return e=b(t,i.j(e)),new E(i,e)}for(i=p;t.l(e)>=0;){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=r<=48?1:Math.pow(2,r-48),s=f(n),o=s.j(e);v(o)||o.l(t)>0;)n-=r,s=f(n),o=s.j(e);y(s)&&(s=g),i=i.add(s),t=b(t,o)}return new E(i,t)}function S(t){const e=t.g.length+1,n=[];for(let r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new c(n,t.h)}function C(t,e){const n=e>>5;e%=32;const r=t.g.length-n,i=[];for(let s=0;s<r;s++)i[s]=e>0?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new c(i,t.h)}t=c.prototype,t.m=function(){if(v(this))return-w(this).m();let t=0,e=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);t+=(r>=0?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,t<2||36<t)throw Error("radix out of range: "+t);if(y(this))return"0";if(v(this))return"-"+w(this).toString(t);const e=f(Math.pow(t,6));var n=this;let r="";for(;;){const i=T(n,e).g;n=b(n,i.j(e));let s=((n.g.length>0?n.g[0]:n.h)>>>0).toString(t);if(n=i,y(n))return s+r;for(;s.length<6;)s="0"+s;r=s+r}},t.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=b(this,t),v(t)?-1:y(t)?0:1},t.abs=function(){return v(this)?w(this):this},t.add=function(t){const e=Math.max(this.g.length,t.g.length),n=[];let r=0;for(let i=0;i<=e;i++){let e=r+(65535&this.i(i))+(65535&t.i(i)),s=(e>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=s>>>16,e&=65535,s&=65535,n[i]=s<<16|e}return new c(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(y(this)||y(t))return p;if(v(this))return v(t)?w(this).j(w(t)):w(w(this).j(t));if(v(t))return w(this.j(w(t)));if(this.l(m)<0&&t.l(m)<0)return f(this.m()*t.m());const e=this.g.length+t.g.length,n=[];for(var r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(let e=0;e<t.g.length;e++){const i=this.i(r)>>>16,s=65535&this.i(r),o=t.i(e)>>>16,a=65535&t.i(e);n[2*r+2*e]+=s*a,_(n,2*r+2*e),n[2*r+2*e+1]+=i*a,_(n,2*r+2*e+1),n[2*r+2*e+1]+=s*o,_(n,2*r+2*e+1),n[2*r+2*e+2]+=i*o,_(n,2*r+2*e+2)}for(t=0;t<e;t++)n[t]=n[2*t+1]<<16|n[2*t];for(t=e;t<2*e;t++)n[t]=0;return new c(n,0)},t.B=function(t){return T(this,t).h},t.and=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new c(n,this.h&t.h)},t.or=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new c(n,this.h|t.h)},t.xor=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new c(n,this.h^t.h)},s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,i=u.Md5=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=d,r=u.Integer=c}).apply("undefined"!==typeof c?c:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var l,h,f,d,p,g,m,y,v=n(6189),w=(n(7324),n(6382),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),b={};(function(){var t,e=Object.defineProperty;function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof w&&w];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(t,n){if(n)t:{var i=r;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}t=t[t.length-1],s=i[t],n=n(s),n!=s&&null!=n&&e(i,t,{configurable:!0,writable:!0,value:n})}}i("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}});
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var s=s||{},o=this||self;function a(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function c(t,e,n){return t.call.apply(t.bind,arguments)}function u(t,e,n){return u=c,u.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Ob=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}var T="undefined"!==typeof AsyncContext&&"function"===typeof AsyncContext.Snapshot?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function S(t){const e=t.length;if(e>0){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t,e){for(let r=1;r<arguments.length;r++){const e=arguments[r];var n=typeof e;if(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null","array"==n||"object"==n&&"number"==typeof e.length){n=t.length||0;const r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}class I{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return this.h>0?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function A(t){o.setTimeout(()=>{throw t},0)}function x(){var t=M;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class D{constructor(){this.h=this.g=null}add(t,e){const n=k.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var k=new I(()=>new N,t=>t.reset());class N{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let O,R=!1,M=new D,P=()=>{const t=Promise.resolve(void 0);O=()=>{t.then(L)}};function L(){for(var t;t=x();){try{t.h.call(t.g)}catch(n){A(n)}var e=k;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}R=!1}function V(){this.u=this.u,this.C=this.C}function F(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},F.prototype.h=function(){this.defaultPrevented=!0};var U=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};o.addEventListener("test",t,e),o.removeEventListener("test",t,e)}catch(n){}return t}();function j(t){return/^[\s\xa0]*$/.test(t)}function B(t,e){F.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}_(B,F),B.prototype.init=function(t,e){const n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget,e||("mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)),this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&B.Z.h.call(this)},B.prototype.h=function(){B.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),z=0;function q(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++z,this.da=this.fa=!1}function K(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function H(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function G(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function W(t){const e={};for(const n in t)e[n]=t[n];return e}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function X(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<Q.length;e++)n=Q[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Y(t){this.src=t,this.g={},this.h=0}function J(t,e){const n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=s>=0)&&Array.prototype.splice.call(i,s,1),r&&(K(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Z(t,e,n,r){for(let i=0;i<t.length;++i){const s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}Y.prototype.add=function(t,e,n,r,i){const s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);const o=Z(t,e,r,i);return o>-1?(e=t[o],n||(e.fa=!1)):(e=new q(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var tt="closure_lm_"+(1e6*Math.random()|0),et={};function rt(t,e,n,r,i){if(r&&r.once)return ot(t,e,n,r,i);if(Array.isArray(e)){for(let s=0;s<e.length;s++)rt(t,e[s],n,r,i);return null}return n=dt(n),t&&t[$]?t.J(e,n,a(r)?!!r.capture:!!r,i):it(t,e,n,!1,r,i)}function it(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");const o=a(i)?!!i.capture:!!i;let c=ht(t);if(c||(t[tt]=c=new Y(t)),n=c.add(e,n,r,o,s),n.proxy)return n;if(r=st(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)U||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ut(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function st(){function t(n){return e.call(t.src,t.listener,n)}const e=lt;return t}function ot(t,e,n,r,i){if(Array.isArray(e)){for(let s=0;s<e.length;s++)ot(t,e[s],n,r,i);return null}return n=dt(n),t&&t[$]?t.K(e,n,a(r)?!!r.capture:!!r,i):it(t,e,n,!0,r,i)}function at(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)at(t,e[s],n,r,i);else r=a(r)?!!r.capture:!!r,n=dt(n),t&&t[$]?(t=t.i,s=String(e).toString(),s in t.g&&(e=t.g[s],n=Z(e,n,r,i),n>-1&&(K(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[s],t.h--)))):t&&(t=ht(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Z(e,n,r,i)),(n=t>-1?e[t]:null)&&ct(n))}function ct(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[$])J(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ut(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ht(e))?(J(n,t),0==n.h&&(n.src=null,e[tt]=null)):K(t)}}}function ut(t){return t in et?et[t]:et[t]="on"+t}function lt(t,e){if(t.da)t=!0;else{e=new B(e,this);const n=t.listener,r=t.ha||t.src;t.fa&&ct(t),t=n.call(r,e)}return t}function ht(t){return t=t[tt],t instanceof Y?t:null}var ft="__closure_events_fn_"+(1e9*Math.random()>>>0);function dt(t){return"function"===typeof t?t:(t[ft]||(t[ft]=function(e){return t.handleEvent(e)}),t[ft])}function pt(){V.call(this),this.i=new Y(this),this.M=this,this.G=null}function gt(t,e){var n,r=t.G;if(r)for(n=[];r;r=r.G)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new F(e,t);else if(e instanceof F)e.target=e.target||t;else{var i=e;e=new F(r,t),X(e,i)}let s,o;if(i=!0,n)for(o=n.length-1;o>=0;o--)s=e.g=n[o],i=mt(s,r,!0,e)&&i;if(s=e.g=t,i=mt(s,r,!0,e)&&i,i=mt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=mt(s,r,!1,e)&&i}function mt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();let i=!0;for(let s=0;s<e.length;++s){const o=e[s];if(o&&!o.da&&o.capture==n){const e=o.listener,n=o.ha||o.src;o.fa&&J(t.i,o),i=!1!==e.call(n,r)&&i}}return i&&!r.defaultPrevented}function yt(t,e){if("function"!==typeof t){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=u(t.handleEvent,t)}return Number(e)>2147483647?-1:o.setTimeout(t,e||0)}function vt(t){t.g=yt(()=>{t.g=null,t.i&&(t.i=!1,vt(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}_(pt,V),pt.prototype[$]=!0,pt.prototype.removeEventListener=function(t,e,n,r){at(this,t,e,n,r)},pt.prototype.N=function(){if(pt.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const n=t.g[e];for(let t=0;t<n.length;t++)K(n[t]);delete t.g[e],t.h--}}this.G=null},pt.prototype.J=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},pt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class wt extends V{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:vt(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bt(t){V.call(this),this.h=t,this.g={}}_(bt,V);var _t=[];function Et(t){H(t.g,function(t,e){this.g.hasOwnProperty(e)&&ct(t)},t),t.g={}}bt.prototype.N=function(){bt.Z.N.call(this),Et(this)},bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tt=o.JSON.stringify,St=o.JSON.parse,Ct=class{stringify(t){return o.JSON.stringify(t,void 0)}parse(t){return o.JSON.parse(t,void 0)}};function It(){}function At(){}var xt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Dt(){F.call(this,"d")}function kt(){F.call(this,"c")}_(Dt,F),_(kt,F);var Nt={},Ot=null;function Rt(){return Ot=Ot||new pt}function Mt(t){F.call(this,Nt.Ia,t)}function Pt(t){const e=Rt();gt(e,new Mt(e))}function Lt(t,e){F.call(this,Nt.STAT_EVENT,t),this.stat=e}function Vt(t){const e=Rt();gt(e,new Lt(e,t))}function Ft(t,e){F.call(this,Nt.Ja,t),this.size=e}function Ut(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){t()},e)}function jt(){this.g=!0}function Bt(t,e,n,r,i,s){t.info(function(){if(t.g)if(s){var o="",a=s.split("&");for(let t=0;t<a.length;t++){var c=a[t].split("=");if(c.length>1){const t=c[0];c=c[1];const e=t.split("_");o=e.length>=2&&"type"==e[1]?o+(t+"=")+c+"&":o+(t+"=redacted&")}}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o})}function $t(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o})}function zt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Kt(t,n)+(r?" "+r:"")})}function qt(t,e){t.info(function(){return"TIMEOUT: "+e})}function Kt(t,e){if(!t.g)return e;if(!e)return null;try{const s=JSON.parse(e);if(s)for(t=0;t<s.length;t++)if(Array.isArray(s[t])){var n=s[t];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(let t=1;t<r.length;t++)r[t]=""}}}return Tt(s)}catch(s){return e}}Nt.Ia="serverreachability",_(Mt,F),Nt.STAT_EVENT="statevent",_(Lt,F),Nt.Ja="timingevent",_(Ft,F),jt.prototype.ua=function(){this.g=!1},jt.prototype.info=function(){};var Ht,Gt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wt={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Qt(){}function Xt(t){return encodeURIComponent(String(t))}function Yt(t){var e=1;t=t.split(":");const n=[];for(;e>0&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Jt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.S=r||1,this.V=new bt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Zt}function Zt(){this.i=null,this.g="",this.h=!1}_(Qt,It),Qt.prototype.g=function(){return new XMLHttpRequest},Ht=new Qt;var te={},ee={};function ne(t,e,n){t.M=1,t.A=De(Se(e)),t.u=n,t.R=!0,re(t,null)}function re(t,e){t.F=Date.now(),ae(t),t.B=Se(t.A);var n=t.B,r=t.S;Array.isArray(r)||(r=[String(r)]),ze(n.i,"t",r),t.C=0,n=t.j.L,t.h=new Zt,t.g=Pn(t.j,n?e:null,!t.u),t.P>0&&(t.O=new wt(u(t.Y,t,t.g),t.P)),e=t.V,n=t.g,r=t.ba;var i="readystatechange";Array.isArray(i)||(i&&(_t[0]=i.toString()),i=_t);for(let s=0;s<i.length;s++){const t=rt(n,i[s],r||e.handleEvent,!1,e.h||e);if(!t)break;e.g[t.key]=t}e=t.J?W(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),Pt(),Bt(t.i,t.v,t.B,t.l,t.S,t.u)}function ie(t){if(!se(t))return t.g.la();const e=dn(t.g);if(""===e)return"";let n="";const r=e.length,i=4==fn(t.g);if(!t.h.i){if("undefined"===typeof TextDecoder)return he(t),le(t),"";t.h.i=new o.TextDecoder}for(let s=0;s<r;s++)t.h.h=!0,n+=t.h.i.decode(e[s],{stream:!(i&&s==r-1)});return e.length=0,t.h.g+=n,t.C=0,t.h.g}function se(t){return!!t.g&&("GET"==t.v&&2!=t.M&&t.j.Aa)}function oe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ee:(n=Number(e.substring(n,r)),isNaN(n)?te:(r+=1,r+n>e.length?ee:(e=e.slice(r,r+n),t.C=r+n,e)))}function ae(t){t.T=Date.now()+t.H,ce(t,t.H)}function ce(t,e){if(null!=t.D)throw Error("WatchDog timer not null");t.D=Ut(u(t.aa,t),e)}function ue(t){t.D&&(o.clearTimeout(t.D),t.D=null)}function le(t){0==t.j.I||t.K||kn(t.j,t)}function he(t){ue(t);var e=t.O;e&&"function"==typeof e.dispose&&e.dispose(),t.O=null,Et(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function fe(t,e){try{var n=t.j;if(0!=n.I&&(n.g==t||ye(n.h,t)))if(!t.L&&ye(n.h,t)&&3==n.I){try{var r=n.Ba.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.v){if(n.g){if(!(n.g.F+3e3<t.F))break t;Dn(n),vn(n)}In(n),Vt(18)}}else n.xa=i[1],0<n.xa-n.K&&i[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Ut(u(n.Va,n),6e3));me(n.h)<=1&&n.ta&&(n.ta=void 0)}else On(n,11)}else if((t.L||n.g==t)&&Dn(n),!j(e))for(i=n.Ba.g.parse(e),e=0;e<i.length;e++){let u=i[e];const l=u[0];if(!(l<=n.K))if(n.K=l,u=u[1],2==n.I)if("c"==u[0]){n.M=u[1],n.ba=u[2];const e=u[3];null!=e&&(n.ka=e,n.j.info("VER="+n.ka));const i=u[4];null!=i&&(n.za=i,n.j.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&l>0&&(r=1.5*l,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(ve(s,s.h),s.h=null))}if(r.G){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.wa=t,xe(r.J,r.G,t))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-t.F,n.j.info("Handshake RTT: "+n.T+"ms")),r=n;var o=t;if(r.na=Mn(r,r.L?r.ba:null,r.W),o.L){we(r.h,o);var a=o,c=r.O;c&&(a.H=c),a.D&&(ue(a),ae(a)),r.g=o}else Cn(r);n.i.length>0&&bn(n)}else"stop"!=u[0]&&"close"!=u[0]||On(n,7);else 3==n.I&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?On(n,7):yn(n):"noop"!=u[0]&&n.l&&n.l.qa(u),n.A=0)}Pt(4)}catch(l){}}Jt.prototype.ba=function(t){t=t.target;const e=this.O;e&&3==fn(t)?e.j():this.Y(t)},Jt.prototype.Y=function(t){try{if(t==this.g)t:{const a=fn(this.g),c=this.g.ya(),u=this.g.ca();if(!(a<3)&&(3!=a||this.g&&(this.h.h||this.g.la()||dn(this.g)))){this.K||4!=a||7==c||Pt(8==c||u<=0?3:2),ue(this);var e=this.g.ca();this.X=e;var n=ie(this);if(this.o=200==e,$t(this.i,this.v,this.B,this.l,this.S,a,e),this.o){if(this.U&&!this.L){e:{if(this.g){var r,i=this.g;if((r=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(r)){var s=r;break e}}s=null}if(!(t=s)){this.o=!1,this.m=3,Vt(12),he(this),le(this);break t}zt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fe(this,t)}if(this.R){let e;for(t=!0;!this.K&&this.C<n.length;){if(e=oe(this,n),e==ee){4==a&&(this.m=4,Vt(14),t=!1),zt(this.i,this.l,null,"[Incomplete Response]");break}if(e==te){this.m=4,Vt(15),zt(this.i,this.l,n,"[Invalid Chunk]"),t=!1;break}zt(this.i,this.l,e,null),fe(this,e)}if(se(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=a||0!=n.length||this.h.h||(this.m=1,Vt(16),t=!1),this.o=this.o&&t,t){if(n.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),An(o),o.P=!0,Vt(11))}}else zt(this.i,this.l,n,"[Invalid Chunked Response]"),he(this),le(this)}else zt(this.i,this.l,n,null),fe(this,n);4==a&&he(this),this.o&&!this.K&&(4==a?kn(this.j,this):(this.o=!1,ae(this)))}else pn(this.g),400==e&&n.indexOf("Unknown SID")>0?(this.m=3,Vt(12)):(this.m=0,Vt(13)),he(this),le(this)}}}catch(a){}},Jt.prototype.cancel=function(){this.K=!0,he(this)},Jt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(qt(this.i,this.B),2!=this.M&&(Pt(),Vt(17)),he(this),this.m=2,le(this)):ce(this,this.T-t)};var de=class{constructor(t,e){this.g=t,this.map=e}};function pe(t){this.l=t||10,o.PerformanceNavigationTiming?(t=o.performance.getEntriesByType("navigation"),t=t.length>0&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ge(t){return!!t.h||!!t.g&&t.g.size>=t.j}function me(t){return t.h?1:t.g?t.g.size:0}function ye(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ve(t,e){t.g?t.g.add(e):t.h=e}function we(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function be(t){if(null!=t.h)return t.i.concat(t.h.G);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.G);return e}return S(t.i)}pe.prototype.cancel=function(){if(this.i=be(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var _e=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ee(t,e){if(t){t=t.split("&");for(let n=0;n<t.length;n++){const r=t[n].indexOf("=");let i,s=null;r>=0?(i=t[n].substring(0,r),s=t[n].substring(r+1)):i=t[n],e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Te(t){let e;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,t instanceof Te?(this.l=t.l,Ce(this,t.j),this.o=t.o,this.g=t.g,Ie(this,t.u),this.h=t.h,Ae(this,qe(t.i)),this.m=t.m):t&&(e=String(t).match(_e))?(this.l=!1,Ce(this,e[1]||"",!0),this.o=ke(e[2]||""),this.g=ke(e[3]||"",!0),Ie(this,e[4]),this.h=ke(e[5]||"",!0),Ae(this,e[6]||"",!0),this.m=ke(e[7]||"")):(this.l=!1,this.i=new Fe(null,this.l))}function Se(t){return new Te(t)}function Ce(t,e,n){t.j=n?ke(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ie(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function Ae(t,e,n){e instanceof Fe?(t.i=e,He(t.i,t.l)):(n||(e=Ne(e,Le)),t.i=new Fe(e,t.l))}function xe(t,e,n){t.i.set(e,n)}function De(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ke(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ne(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Oe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Oe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Te.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(Ne(e,Re,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Ne(e,Re,!0),"@"),t.push(Xt(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.u,null!=n&&t.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ne(n,"/"==n.charAt(0)?Pe:Me,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Ne(n,Ve)),t.join("")},Te.prototype.resolve=function(t){const e=Se(this);let n=!!t.j;n?Ce(e,t.j):n=!!t.o,n?e.o=t.o:n=!!t.g,n?e.g=t.g:n=null!=t.u;var r=t.h;if(n)Ie(e,t.u);else if(n=!!t.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var i=e.h.lastIndexOf("/");-1!=i&&(r=e.h.slice(0,i+1)+r)}if(i=r,".."==i||"."==i)r="";else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){r=0==i.lastIndexOf("/",0),i=i.split("/");const t=[];for(let e=0;e<i.length;){const n=i[e++];"."==n?r&&e==i.length&&t.push(""):".."==n?((t.length>1||1==t.length&&""!=t[0])&&t.pop(),r&&e==i.length&&t.push("")):(t.push(n),r=!0)}r=t.join("/")}else r=i}return n?e.h=r:n=""!==t.i.toString(),n?Ae(e,qe(t.i)):n=!!t.m,n&&(e.m=t.m),e};var Re=/[#\/\?@]/g,Me=/[#\?:]/g,Pe=/[#\?]/g,Le=/[#\?@]/g,Ve=/#/g;function Fe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ue(t){t.g||(t.g=new Map,t.h=0,t.i&&Ee(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function je(t,e){Ue(t),e=Ke(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Be(t,e){return Ue(t),e=Ke(t,e),t.g.has(e)}function $e(t,e){Ue(t);let n=[];if("string"===typeof e)Be(t,e)&&(n=n.concat(t.g.get(Ke(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)n=n.concat(t[e]);return n}function ze(t,e,n){je(t,e),n.length>0&&(t.i=null,t.g.set(Ke(t,e),S(n)),t.h+=n.length)}function qe(t){const e=new Fe;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function Ke(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function He(t,e){e&&!t.j&&(Ue(t),t.i=null,t.g.forEach(function(t,e){const n=e.toLowerCase();e!=n&&(je(this,e),ze(this,n,t))},t)),t.j=e}function Ge(t,e){const n=new jt;if(o.Image){const r=new Image;r.onload=v(Qe,n,"TestLoadImage: loaded",!0,e,r),r.onerror=v(Qe,n,"TestLoadImage: error",!1,e,r),r.onabort=v(Qe,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=v(Qe,n,"TestLoadImage: timeout",!1,e,r),o.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function We(t,e){const n=new jt,r=new AbortController,i=setTimeout(()=>{r.abort(),Qe(n,"TestPingServer: timeout",!1,e)},1e4);fetch(t,{signal:r.signal}).then(t=>{clearTimeout(i),t.ok?Qe(n,"TestPingServer: ok",!0,e):Qe(n,"TestPingServer: server error",!1,e)}).catch(()=>{clearTimeout(i),Qe(n,"TestPingServer: error",!1,e)})}function Qe(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Xe(){this.g=new Ct}function Ye(t){this.i=t.Sb||null,this.h=t.ab||!1}function Je(t,e){pt.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Ze(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}function tn(t){t.readyState=4,t.l=null,t.j=null,t.B=null,en(t)}function en(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function nn(t){let e="";return H(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function rn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=nn(n),"string"===typeof t?null!=n&&Xt(n):xe(t,e,n))}function sn(t){pt.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}t=Fe.prototype,t.add=function(t,e){Ue(this),this.i=null,t=Ke(this,t);let n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ue(this),this.g.forEach(function(n,r){n.forEach(function(n){t.call(e,n,r,this)},this)},this)},t.set=function(t,e){return Ue(this),this.i=null,t=Ke(this,t),Be(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=$e(this,t),t.length>0?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let r=0;r<e.length;r++){var n=e[r];const i=Xt(n);n=$e(this,n);for(let e=0;e<n.length;e++){let r=i;""!==n[e]&&(r+="="+Xt(n[e])),t.push(r)}}return this.i=t.join("&")},_(Ye,It),Ye.prototype.g=function(){return new Je(this.i,this.h)},_(Je,pt),t=Je.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,en(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||o).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,tn(this)),this.readyState=0},t.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if("undefined"!==typeof o.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ze(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?tn(this):en(this),3==this.readyState&&Ze(this)}},t.Oa=function(t){this.g&&(this.response=this.responseText=t,tn(this))},t.Na=function(t){this.g&&(this.response=t,tn(this))},t.ga=function(){this.g&&tn(this)},t.setRequestHeader=function(t,e){this.A.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Je.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),_(sn,pt);var on=/^https?$/i,an=["POST","PUT"];function cn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,un(t),hn(t)}function un(t){t.A||(t.A=!0,gt(t,"complete"),gt(t,"error"))}function ln(t){if(t.h&&"undefined"!=typeof s)if(t.v&&4==fn(t))setTimeout(t.Ca.bind(t),0);else if(gt(t,"readystatechange"),4==fn(t)){t.h=!1;try{const s=t.ca();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){let e=String(t.D).match(_e)[1]||null;!e&&o.self&&o.self.location&&(e=o.self.location.protocol.slice(0,-1)),r=!on.test(e?e.toLowerCase():"")}n=r}if(n)gt(t,"complete"),gt(t,"success");else{t.o=6;try{var i=fn(t)>2?t.g.statusText:""}catch(a){i=""}t.l=i+" ["+t.ca()+"]",un(t)}}finally{hn(t)}}}function hn(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const r=t.g;t.g=null,e||gt(t,"ready");try{r.onreadystatechange=null}catch(n){}}}function fn(t){return t.g?t.g.readyState:0}function dn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(E){return null}}function pn(t){const e={};t=(t.g&&fn(t)>=2&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(j(t[r]))continue;var n=Yt(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}G(e,function(t){return t.join(", ")})}function gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mn(t){this.za=0,this.i=[],this.j=new jt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gn("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gn("baseRetryDelayMs",5e3,t),this.Za=gn("retryDelaySeedMs",1e4,t),this.Ta=gn("forwardChannelMaxRetries",2,t),this.va=gn("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new pe(t&&t.concurrentRequestLimit),this.Ba=new Xe,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function yn(t){if(wn(t),3==t.I){var e=t.V++,n=Se(t.J);if(xe(n,"SID",t.M),xe(n,"RID",e),xe(n,"TYPE","terminate"),Tn(t,n),e=new Jt(t,t.j,e),e.M=2,e.A=De(Se(n)),n=!1,o.navigator&&o.navigator.sendBeacon)try{n=o.navigator.sendBeacon(e.A.toString(),"")}catch(r){}!n&&o.Image&&((new Image).src=e.A,n=!0),n||(e.g=Pn(e.j,null),e.g.ea(e.A)),e.F=Date.now(),ae(e)}Rn(t)}function vn(t){t.g&&(An(t),t.g.cancel(),t.g=null)}function wn(t){vn(t),t.v&&(o.clearTimeout(t.v),t.v=null),Dn(t),t.h.cancel(),t.m&&("number"===typeof t.m&&o.clearTimeout(t.m),t.m=null)}function bn(t){if(!ge(t.h)&&!t.m){t.m=!0;var e=t.Ea;O||P(),R||(O(),R=!0),M.add(e,t),t.D=0}}function _n(t,e){return!(me(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.G.concat(t.i),!0):!(1==t.I||2==t.I||t.D>=(t.Sa?0:t.Ta))&&(t.m=Ut(u(t.Ea,t,e),Nn(t,t.D)),t.D++,!0))}function En(t,e){var n;n=e?e.l:t.V++;const r=Se(t.J);xe(r,"SID",t.M),xe(r,"RID",n),xe(r,"AID",t.K),Tn(t,r),t.u&&t.o&&rn(r,t.u,t.o),n=new Jt(t,t.j,n,t.D+1),null===t.u&&(n.J=t.o),e&&(t.i=e.G.concat(t.i)),e=Sn(t,n,1e3),n.H=Math.round(.5*t.va)+Math.round(.5*t.va*Math.random()),ve(t.h,n),ne(n,r,e)}function Tn(t,e){t.H&&H(t.H,function(t,n){xe(e,n,t)}),t.l&&H({},function(t,n){xe(e,n,t)})}function Sn(t,e,n){n=Math.min(t.i.length,n);const r=t.l?u(t.l.Ka,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?n>0?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let c=!0;for(let u=0;u<n;u++){var s=i[u].g;const n=i[u].map;if(s-=e,s<0)e=Math.max(0,i[u].g-100),c=!1;else try{s="req"+s+"_"||0;try{var o=n instanceof Map?n:Object.entries(n);for(const[e,n]of o){let r=n;a(n)&&(r=Tt(n)),t.push(s+e+"="+encodeURIComponent(r))}}catch(nt){throw t.push(s+"type="+encodeURIComponent("_badmap")),nt}}catch(nt){r&&r(n)}}if(c){o=t.join("&");break t}}o=void 0}return t=t.i.splice(0,n),e.G=t,o}function Cn(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;O||P(),R||(O(),R=!0),M.add(e,t),t.A=0}}function In(t){return!(t.g||t.v||t.A>=3)&&(t.Y++,t.v=Ut(u(t.Da,t),Nn(t,t.A)),t.A++,!0)}function An(t){null!=t.B&&(o.clearTimeout(t.B),t.B=null)}function xn(t){t.g=new Jt(t,t.j,"rpc",t.Y),null===t.u&&(t.g.J=t.o),t.g.P=0;var e=Se(t.na);xe(e,"RID","rpc"),xe(e,"SID",t.M),xe(e,"AID",t.K),xe(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&xe(e,"TO",t.ia),xe(e,"TYPE","xmlhttp"),Tn(t,e),t.u&&t.o&&rn(e,t.u,t.o),t.O&&(t.g.H=t.O);var n=t.g;t=t.ba,n.M=1,n.A=De(Se(e)),n.u=null,n.R=!0,re(n,t)}function Dn(t){null!=t.C&&(o.clearTimeout(t.C),t.C=null)}function kn(t,e){var n=null;if(t.g==e){Dn(t),An(t),t.g=null;var r=2}else{if(!ye(t.h,e))return;n=e.G,we(t.h,e),r=1}if(0!=t.I)if(e.o)if(1==r){n=e.u?e.u.length:0,e=Date.now()-e.F;var i=t.D;r=Rt(),gt(r,new Ft(r,n)),bn(t)}else Cn(t);else if(i=e.m,3==i||0==i&&e.X>0||!(1==r&&_n(t,e)||2==r&&In(t)))switch(n&&n.length>0&&(e=t.h,e.i=e.i.concat(n)),i){case 1:On(t,5);break;case 4:On(t,10);break;case 3:On(t,6);break;default:On(t,2)}}function Nn(t,e){let n=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(n*=2),n*e}function On(t,e){if(t.j.info("Error code "+e),2==e){var n=u(t.bb,t),r=t.Ua;const e=!r;r=new Te(r||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||Ce(r,"https"),De(r),e?Ge(r.toString(),n):We(r.toString(),n)}else Vt(2);t.I=0,t.l&&t.l.pa(e),Rn(t),wn(t)}function Rn(t){if(t.I=0,t.ja=[],t.l){const e=be(t.h);0==e.length&&0==t.i.length||(C(t.ja,e),C(t.ja,t.i),t.h.i.length=0,S(t.i),t.i.length=0),t.l.oa()}}function Mn(t,e,n){var r=n instanceof Te?Se(n):new Te(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Ie(r,r.u);else{var i=o.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;const t=new Te(null);r&&Ce(t,r),e&&(t.g=e),i&&Ie(t,i),n&&(t.h=n),r=t}return n=t.G,e=t.wa,n&&e&&xe(r,n,e),xe(r,"VER",t.ka),Tn(t,r),r}function Pn(t,e,n){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Aa&&!t.ma?new sn(new Ye({ab:n})):new sn(t.ma),e.Fa(t.L),e}function Ln(){}function Vn(){}function Fn(t,e){pt.call(this),this.g=new mn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!j(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!j(e)&&(this.g.G=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bn(this)}function Un(t){Dt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function jn(){kt.call(this),this.status=1}function Bn(t){this.g=t}t=sn.prototype,t.Fa=function(t){this.H=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ht.g(),this.g.onreadystatechange=T(u(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(s){return void cn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),i=o.FormData&&t instanceof o.FormData,!(Array.prototype.indexOf.call(an,e,void 0)>=0)||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(s){cn(this,s)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,gt(this,"complete"),gt(this,"abort"),hn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hn(this,!0)),sn.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ln(this):this.Xa())},t.Xa=function(){ln(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return fn(this)>2?this.g.status:-1}catch(t){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.La=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),St(e)}},t.ya=function(){return this.o},t.Ha=function(){return"string"===typeof this.l?this.l:String(this.l)},t=mn.prototype,t.ka=8,t.I=1,t.connect=function(t,e,n,r){Vt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=Mn(this,null,this.W),bn(this)},t.Ea=function(t){if(this.m)if(this.m=null,1==this.I){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Jt(this,this.j,t);let s=this.o;if(this.U&&(s?(s=W(s),X(s,this.U)):s=this.U),null!==this.u||this.R||(i.J=s,s=null),this.S)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,e>4096){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Sn(this,i,e),n=Se(this.J),xe(n,"RID",t),xe(n,"CVER",22),this.G&&xe(n,"X-HTTP-Session-Id",this.G),Tn(this,n),s&&(this.R?e="headers="+Xt(nn(s))+"&"+e:this.u&&rn(n,this.u,s)),ve(this.h,i),this.Ra&&xe(n,"TYPE","init"),this.S?(xe(n,"$req",e),xe(n,"SID","null"),i.U=!0,ne(i,n,null)):ne(i,n,e),this.I=2}}else 3==this.I&&(t?En(this,t):0==this.i.length||ge(this.h)||En(this))},t.Da=function(){if(this.v=null,xn(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=Ut(u(this.Wa,this),t)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Vt(10),vn(this),xn(this))},t.Va=function(){null!=this.C&&(this.C=null,vn(this),In(this),Vt(19))},t.bb=function(t){t?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=Ln.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},Vn.prototype.g=function(t,e){return new Fn(t,e)},_(Fn,pt),Fn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Fn.prototype.close=function(){yn(this.g)},Fn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tt(t),t=n);e.i.push(new de(e.Ya++,t)),3==e.I&&bn(e)},Fn.prototype.N=function(){this.g.l=null,delete this.j,yn(this.g),delete this.g,Fn.Z.N.call(this)},_(Un,Dt),_(jn,kt),_(Bn,Ln),Bn.prototype.ra=function(){gt(this.g,"a")},Bn.prototype.qa=function(t){gt(this.g,new Un(t))},Bn.prototype.pa=function(t){gt(this.g,new jn)},Bn.prototype.oa=function(){gt(this.g,"b")},Vn.prototype.createWebChannel=Vn.prototype.g,Fn.prototype.send=Fn.prototype.o,Fn.prototype.open=Fn.prototype.m,Fn.prototype.close=Fn.prototype.close,y=b.createWebChannelTransport=function(){return new Vn},m=b.getStatEventTarget=function(){return Rt()},g=b.Event=Nt,p=b.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Gt.NO_ERROR=0,Gt.TIMEOUT=8,Gt.HTTP_ERROR=6,d=b.ErrorCode=Gt,Wt.COMPLETE="complete",f=b.EventType=Wt,At.EventType=xt,xt.OPEN="a",xt.CLOSE="b",xt.ERROR="c",xt.MESSAGE="d",pt.prototype.listen=pt.prototype.J,h=b.WebChannel=At,b.FetchXmlHttpFactory=Ye,sn.prototype.listenOnce=sn.prototype.K,sn.prototype.getLastError=sn.prototype.Ha,sn.prototype.getLastErrorCode=sn.prototype.ya,sn.prototype.getStatus=sn.prototype.ca,sn.prototype.getResponseJson=sn.prototype.La,sn.prototype.getResponseText=sn.prototype.la,sn.prototype.send=sn.prototype.ea,sn.prototype.setWithCredentials=sn.prototype.Fa,l=b.XhrIo=sn}).apply("undefined"!==typeof w?w:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_.UNAUTHENTICATED=new _(null),_.GOOGLE_CREDENTIALS=new _("google-credentials-uid"),_.FIRST_PARTY=new _("first-party-uid"),_.MOCK_USER=new _("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let E="12.12.0";function T(t){E=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new v.Vy("@firebase/firestore");function C(){return S.logLevel}function I(t,...e){if(S.logLevel<=v.$b.DEBUG){const n=e.map(D);S.debug(`Firestore (${E}): ${t}`,...n)}}function A(t,...e){if(S.logLevel<=v.$b.ERROR){const n=e.map(D);S.error(`Firestore (${E}): ${t}`,...n)}}function x(t,...e){if(S.logLevel<=v.$b.WARN){const n=e.map(D);S.warn(`Firestore (${E}): ${t}`,...n)}}function D(t){if("string"==typeof t)return t;try{return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e,n){let r="Unexpected state";"string"==typeof e?r=e:n=e,N(t,r,n)}function N(t,e,n){let r=`FIRESTORE (${E}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(t){r+=" CONTEXT: "+n}throw A(r),new Error(r)}function O(t,e,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,t||N(e,i,r)}function R(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class F{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_.UNAUTHENTICATED))}shutdown(){}}class U{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class j{constructor(t){this.t=t,this.currentUser=_.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){O(void 0===this.o,42304);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new L;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new L,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new L)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(O("string"==typeof e.accessToken,31837,{l:e}),new V(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return O(null===t||"string"==typeof t,2055,{h:t}),new _(t)}}class B{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=_.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ${constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new B(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(_.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class z{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,s.xZ)(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){O(void 0===this.o,3512);const n=t=>{null!=t.error&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,I("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?r(t):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new z(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(O("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new z(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=K(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%62))}return n}}function G(t,e){return t<e?-1:t>e?1:0}function W(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.charAt(r),i=e.charAt(r);if(n!==i)return Y(n)===Y(i)?G(n,i):Y(n)?1:-1}return G(t.length,e.length)}const Q=55296,X=57343;function Y(t){const e=t.charCodeAt(0);return e>=Q&&e<=X}function J(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="__name__";class tt{constructor(t,e,n){void 0===e?e=0:e>t.length&&k(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&k(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===tt.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof tt?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=tt.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return G(t.length,e.length)}static compareSegments(t,e){const n=tt.isNumericId(t),r=tt.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?tt.extractNumericId(t).compare(tt.extractNumericId(e)):W(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return r.fromString(t.substring(4,t.length-2))}}class et extends tt{construct(t,e,n){return new et(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new P(M.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new et(e)}static emptyPath(){return new et([])}}const nt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends tt{construct(t,e,n){return new rt(t,e,n)}static isValidIdentifier(t){return nt.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Z}static keyField(){return new rt([Z])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new P(M.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new P(M.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new P(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new P(M.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rt(e)}static emptyPath(){return new rt([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.path=t}static fromPath(t){return new it(et.fromString(t))}static fromName(t){return new it(et.fromString(t).popFirst(5))}static empty(){return new it(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===et.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new it(new et(t.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e,n){if(!n)throw new P(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ot(t,e,n,r){if(!0===e&&!0===r)throw new P(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function at(t){if(!it.isDocumentKey(t))throw new P(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ct(t){if(it.isDocumentKey(t))throw new P(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ut(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function lt(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":k(12329,{type:typeof t})}function ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lt(t);throw new P(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function dt(t,e){if(!ut(t))throw new P(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new P(M.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=-62135596800,gt=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(t){return mt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*gt);return new mt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new P(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new P(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<pt)throw new P(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new P(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gt}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:mt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(dt(t,mt._jsonSchema))return new mt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-pt;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}mt._jsonSchemaVersion="firestore/timestamp/1.0",mt._jsonSchema={type:ft("string",mt._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{static fromTimestamp(t){return new yt(t)}static min(){return new yt(new mt(0,0))}static max(){return new yt(new mt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=-1;class wt{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}wt.UNKNOWN_ID=-1;function bt(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=yt.fromTimestamp(1e9===r?new mt(n+1,0):new mt(n,r));return new Et(i,it.empty(),e)}function _t(t){return new Et(t.readTime,t.key,vt)}class Et{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Et(yt.min(),it.empty(),vt)}static max(){return new Et(yt.max(),it.empty(),vt)}}function Tt(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=it.comparator(t.documentKey,e.documentKey),0!==n?n:G(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const St="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ct{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==St)throw t;I("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&k(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new At((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof At?e:At.resolve(e)}catch(t){return At.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):At.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):At.reject(e)}static resolve(t){return new At((e,n)=>{e(t)})}static reject(t){return new At((e,n)=>{n(t)})}static waitFor(t){return new At((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=At.resolve(!1);for(const n of t)e=e.next(t=>t?At.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new At((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next(t=>{s[c]=t,++o,o===i&&n(s)},t=>r(t))}})}static doWhile(t,e){return new At((n,r)=>{const i=()=>{!0===t()?e().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Dt(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ae(t),this.ue=t=>e.writeSequenceNumber(t))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}kt.ce=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=-1;function Ot(t){return null==t}function Rt(t){return 0===t&&1/t==-1/0}function Mt(t){return"number"==typeof t&&Number.isInteger(t)&&!Rt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pt="";function Lt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ft(e)),e=Vt(t.get(n),e);return Ft(e)}function Vt(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case Pt:n+="";break;default:n+=e}}return n}function Ft(t){return t+Pt+""}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ut="remoteDocuments",jt="owner",Bt="mutationQueues",$t="mutations";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="documentMutations",qt="remoteDocumentsV14",Kt="remoteDocumentGlobal",Ht="targets",Gt="targetDocuments",Wt="targetGlobal",Qt="collectionParents",Xt="clientMetadata",Yt="bundles",Jt="namedQueries",Zt="indexConfiguration",te="indexState",ee="indexEntries",ne="documentOverlays",re="globals",ie=[Bt,$t,zt,Ut,Ht,jt,Wt,Gt,Xt,Kt,Qt,Yt,Jt],se=[Bt,$t,zt,qt,Ht,jt,Wt,Gt,Xt,Kt,Qt,Yt,Jt,ne],oe=se,ae=[...oe,Zt,te,ee];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ue(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function le(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e){this.comparator=t,this.root=e||de.EMPTY}insert(t,e){return new he(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,de.BLACK,null,null))}remove(t){return new he(this.comparator,this.root.remove(t,this.comparator).copy(null,null,de.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fe(this.root,t,this.comparator,!1)}getReverseIterator(){return new fe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fe(this.root,t,this.comparator,!0)}}class fe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class de{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:de.RED,this.left=null!=r?r:de.EMPTY,this.right=null!=i?i:de.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new de(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return de.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw k(43730,{key:this.key,value:this.value});if(this.right.isRed())throw k(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw k(27949);return t+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1,de.EMPTY=new class{constructor(){this.size=0}get key(){throw k(57766)}get value(){throw k(16141)}get color(){throw k(16727)}get left(){throw k(29726)}get right(){throw k(36894)}copy(t,e,n,r,i){return this}insert(t,e,n){return new de(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(t){this.comparator=t,this.data=new he(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ge(this.data.getIterator())}getIteratorFrom(t){return new ge(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof pe))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pe(this.comparator);return e.data=t,e}}class ge{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(t){this.fields=t,t.sort(rt.comparator)}static empty(){return new me([])}unionWith(t){let e=new pe(rt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new me(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return J(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ye("Invalid base64 string: "+t):t}}(t);return new ve(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ve(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const we=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function be(t){if(O(!!t,39018),"string"==typeof t){let e=0;const n=we.exec(t);if(O(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ee(t){return"string"==typeof t?ve.fromBase64String(t):ve.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="server_timestamp",Se="__type__",Ce="__previous_value__",Ie="__local_write_time__";function Ae(t){const e=(t?.mapValue?.fields||{})[Se]?.stringValue;return e===Te}function xe(t){const e=t.mapValue.fields[Ce];return Ae(e)?xe(e):e}function De(t){const e=be(t.mapValue.fields[Ie].timestampValue);return new mt(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,e,n,r,i,s,o,a,c,u,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=l}}const Ne="(default)";class Oe{constructor(t,e){this.projectId=t,this.database=e||Ne}static empty(){return new Oe("","")}get isDefaultDatabase(){return this.database===Ne}isEqual(t){return t instanceof Oe&&t.projectId===this.projectId&&t.database===this.database}}function Re(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new P(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oe(t.options.projectId,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="__type__",Pe="__max__",Le={mapValue:{fields:{__type__:{stringValue:Pe}}}},Ve="__vector__",Fe="value";function Ue(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ae(t)?4:en(t)?9007199254740991:Ze(t)?10:11:k(28295,{value:t})}function je(t,e){if(t===e)return!0;const n=Ue(t);if(n!==Ue(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return De(t).isEqual(De(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=be(t.timestampValue),r=be(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ee(t.bytesValue).isEqual(Ee(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return _e(t.geoPointValue.latitude)===_e(e.geoPointValue.latitude)&&_e(t.geoPointValue.longitude)===_e(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return _e(t.integerValue)===_e(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=_e(t.doubleValue),r=_e(e.doubleValue);return n===r?Rt(n)===Rt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return J(t.arrayValue.values||[],e.arrayValue.values||[],je);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ce(n)!==ce(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!je(n[i],r[i])))return!1;return!0}(t,e);default:return k(52216,{left:t})}}function Be(t,e){return void 0!==(t.values||[]).find(t=>je(t,e))}function $e(t,e){if(t===e)return 0;const n=Ue(t),r=Ue(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=_e(t.integerValue||t.doubleValue),r=_e(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ze(t.timestampValue,e.timestampValue);case 4:return ze(De(t),De(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ee(t),r=Ee(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=G(n[i],r[i]);if(0!==t)return t}return G(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=G(_e(t.latitude),_e(e.latitude));return 0!==n?n:G(_e(t.longitude),_e(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qe(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=e.fields||{},i=n[Fe]?.arrayValue,s=r[Fe]?.arrayValue,o=G(i?.values?.length||0,s?.values?.length||0);return 0!==o?o:qe(i,s)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Le.mapValue&&e===Le.mapValue)return 0;if(t===Le.mapValue)return 1;if(e===Le.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=W(r[o],s[o]);if(0!==t)return t;const e=$e(n[r[o]],i[s[o]]);if(0!==e)return e}return G(r.length,s.length)}(t.mapValue,e.mapValue);default:throw k(23264,{he:n})}}function ze(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return G(t,e);const n=be(t),r=be(e),i=G(n.seconds,r.seconds);return 0!==i?i:G(n.nanos,r.nanos)}function qe(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=$e(n[i],r[i]);if(t)return t}return G(n.length,r.length)}function Ke(t){return He(t)}function He(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=be(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Ee(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return it.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=He(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${He(t.fields[i])}`;return n+"}"}(t.mapValue):k(61005,{value:t})}function Ge(t){switch(Ue(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xe(t);return e?16+Ge(e):16;case 5:return 2*t.stringValue.length;case 6:return Ee(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce((t,e)=>t+Ge(e),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return ue(t.fields,(t,n)=>{e+=t.length+Ge(n)}),e}(t.mapValue);default:throw k(13486,{value:t})}}function We(t){return!!t&&"integerValue"in t}function Qe(t){return!!t&&"arrayValue"in t}function Xe(t){return!!t&&"nullValue"in t}function Ye(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Je(t){return!!t&&"mapValue"in t}function Ze(t){const e=(t?.mapValue?.fields||{})[Me]?.stringValue;return e===Ve}function tn(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ue(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=tn(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=tn(t.arrayValue.values[n]);return e}return{...t}}function en(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Pe}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn{constructor(t){this.value=t}static empty(){return new nn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Je(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=tn(e)}setAll(t){let e=rt.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=tn(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Je(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return je(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Je(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ue(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new nn(tn(this.value))}}function rn(t){const e=[];return ue(t.fields,(t,n)=>{const r=new rt([t]);if(Je(n)){const t=rn(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new me(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class sn{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new sn(t,0,yt.min(),yt.min(),yt.min(),nn.empty(),0)}static newFoundDocument(t,e,n,r){return new sn(t,1,e,yt.min(),n,r,0)}static newNoDocument(t,e){return new sn(t,2,e,yt.min(),yt.min(),nn.empty(),0)}static newUnknownDocument(t,e){return new sn(t,3,e,yt.min(),yt.min(),nn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(yt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=yt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof sn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,e){this.position=t,this.inclusive=e}}function an(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?it.comparator(it.fromName(o.referenceValue),n.key):$e(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function cn(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!je(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,e="asc"){this.field=t,this.dir=e}}function ln(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{}class fn extends hn{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new bn(t,e,n):"array-contains"===e?new Sn(t,n):"in"===e?new Cn(t,n):"not-in"===e?new In(t,n):"array-contains-any"===e?new An(t,n):new fn(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new _n(t,n):new En(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison($e(e,this.value)):null!==e&&Ue(this.value)===Ue(e)&&this.matchesComparison($e(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return k(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends hn{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new dn(t,e)}matches(t){return pn(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function pn(t){return"and"===t.op}function gn(t){return mn(t)&&pn(t)}function mn(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function yn(t){if(t instanceof fn)return t.field.canonicalString()+t.op.toString()+Ke(t.value);if(gn(t))return t.filters.map(t=>yn(t)).join(",");{const e=t.filters.map(t=>yn(t)).join(",");return`${t.op}(${e})`}}function vn(t,e){return t instanceof fn?function(t,e){return e instanceof fn&&t.op===e.op&&t.field.isEqual(e.field)&&je(t.value,e.value)}(t,e):t instanceof dn?function(t,e){return e instanceof dn&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,r)=>t&&vn(n,e.filters[r]),!0)}(t,e):void k(19439)}function wn(t){return t instanceof fn?function(t){return`${t.field.canonicalString()} ${t.op} ${Ke(t.value)}`}(t):t instanceof dn?function(t){return t.op.toString()+" {"+t.getFilters().map(wn).join(" ,")+"}"}(t):"Filter"}class bn extends fn{constructor(t,e,n){super(t,e,n),this.key=it.fromName(n.referenceValue)}matches(t){const e=it.comparator(t.key,this.key);return this.matchesComparison(e)}}class _n extends fn{constructor(t,e){super(t,"in",e),this.keys=Tn("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class En extends fn{constructor(t,e){super(t,"not-in",e),this.keys=Tn("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Tn(t,e){return(e.arrayValue?.values||[]).map(t=>it.fromName(t.referenceValue))}class Sn extends fn{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qe(e)&&Be(e.arrayValue,this.value)}}class Cn extends fn{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Be(this.value.arrayValue,e)}}class In extends fn{constructor(t,e){super(t,"not-in",e)}matches(t){if(Be(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!Be(this.value.arrayValue,e)}}class An extends fn{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qe(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>Be(this.value.arrayValue,t))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.Te=null}}function Dn(t,e=null,n=[],r=[],i=null,s=null,o=null){return new xn(t,e,n,r,i,s,o)}function kn(t){const e=R(t);if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>yn(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),Ot(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>Ke(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>Ke(t)).join(",")),e.Te=t}return e.Te}function Nn(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ln(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vn(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cn(t.startAt,e.startAt)&&cn(t.endAt,e.endAt)}function On(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rn{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Mn(t,e,n,r,i,s,o,a){return new Rn(t,e,n,r,i,s,o,a)}function Pn(t){return new Rn(t)}function Ln(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Vn(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Fn(t){return null!==t.collectionGroup}function Un(t){const e=R(t);if(null===e.Ee){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new pe(rt.comparator);return t.filters.forEach(t=>{t.getFlattenedFilters().forEach(t=>{t.isInequality()&&(e=e.add(t.field))})}),e}(e);r.forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ee.push(new un(r,n))}),t.has(rt.keyField().canonicalString())||e.Ee.push(new un(rt.keyField(),n))}return e.Ee}function jn(t){const e=R(t);return e.Ie||(e.Ie=Bn(e,Un(t))),e.Ie}function Bn(t,e){if("F"===t.limitType)return Dn(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(t=>{const e="desc"===t.dir?"asc":"desc";return new un(t.field,e)});const n=t.endAt?new on(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new on(t.startAt.position,t.startAt.inclusive):null;return Dn(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $n(t,e,n){return new Rn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zn(t,e){return Nn(jn(t),jn(e))&&t.limitType===e.limitType}function qn(t){return`${kn(jn(t))}|lt:${t.limitType}`}function Kn(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>wn(t)).join(", ")}]`),Ot(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>Ke(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>Ke(t)).join(",")),`Target(${e})`}(jn(t))}; limitType=${t.limitType})`}function Hn(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):it.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Un(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=an(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Un(t),e))&&!(t.endAt&&!function(t,e,n){const r=an(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Un(t),e))}(t,e)}function Gn(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Wn(t){return(e,n)=>{let r=!1;for(const i of Un(t)){const t=Qn(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Qn(t,e,n){const r=t.field.isKeyField()?it.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?$e(r,i):k(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return k(19790,{direction:t.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ue(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return le(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new he(it.comparator);function Jn(){return Yn}const Zn=new he(it.comparator);function tr(...t){let e=Zn;for(const n of t)e=e.insert(n.key,n);return e}function er(t){let e=Zn;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function nr(){return ir()}function rr(){return ir()}function ir(){return new Xn(t=>t.toString(),(t,e)=>t.isEqual(e))}const sr=new he(it.comparator),or=new pe(it.comparator);function ar(...t){let e=or;for(const n of t)e=e.add(n);return e}const cr=new pe(G);function ur(){return cr}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rt(e)?"-0":e}}function hr(t){return{integerValue:""+t}}function fr(t,e){return Mt(e)?hr(e):lr(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this._=void 0}}function pr(t,e,n){return t instanceof yr?function(t,e){const n={fields:{[Se]:{stringValue:Te},[Ie]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Ae(e)&&(e=xe(e)),e&&(n.fields[Ce]=e),{mapValue:n}}(n,e):t instanceof vr?wr(t,e):t instanceof br?_r(t,e):function(t,e){const n=mr(t,e),r=Tr(n)+Tr(t.Ae);return We(n)&&We(t.Ae)?hr(r):lr(t.serializer,r)}(t,e)}function gr(t,e,n){return t instanceof vr?wr(t,e):t instanceof br?_r(t,e):n}function mr(t,e){return t instanceof Er?function(t){return We(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class yr extends dr{}class vr extends dr{constructor(t){super(),this.elements=t}}function wr(t,e){const n=Sr(e);for(const r of t.elements)n.some(t=>je(t,r))||n.push(r);return{arrayValue:{values:n}}}class br extends dr{constructor(t){super(),this.elements=t}}function _r(t,e){let n=Sr(e);for(const r of t.elements)n=n.filter(t=>!je(t,r));return{arrayValue:{values:n}}}class Er extends dr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Tr(t){return _e(t.integerValue||t.doubleValue)}function Sr(t){return Qe(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof vr&&e instanceof vr||t instanceof br&&e instanceof br?J(t.elements,e.elements,je):t instanceof Er&&e instanceof Er?je(t.Ae,e.Ae):t instanceof yr&&e instanceof yr}(t.transform,e.transform)}class Ir{constructor(t,e){this.version=t,this.transformResults=e}}class Ar{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ar}static exists(t){return new Ar(void 0,t)}static updateTime(t){return new Ar(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xr(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Dr{}function kr(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new jr(t.key,Ar.none()):new Pr(t.key,t.data,Ar.none());{const n=t.data,r=nn.empty();let i=new pe(rt.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Lr(t.key,r,new me(i.toArray()),Ar.none())}}function Nr(t,e,n){t instanceof Pr?function(t,e,n){const r=t.value.clone(),i=Fr(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(t,e,n){if(!xr(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Fr(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Vr(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Or(t,e,n,r){return t instanceof Pr?function(t,e,n,r){if(!xr(t.precondition,e))return n;const i=t.value.clone(),s=Ur(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(t,e,n,r){if(!xr(t.precondition,e))return n;const i=Ur(t.fieldTransforms,r,e),s=e.data;return s.setAll(Vr(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return xr(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Rr(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=mr(r.transform,t||null);null!=i&&(null===n&&(n=nn.empty()),n.set(r.field,i))}return n||null}function Mr(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&J(t,e,(t,e)=>Cr(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pr extends Dr{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Lr extends Dr{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vr(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fr(t,e,n){const r=new Map;O(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,gr(o,a,n[i]))}return r}function Ur(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,pr(t,s,e))}return r}class jr extends Dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Br extends Dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Nr(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Or(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Or(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=rr();return this.mutations.forEach(r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=kr(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(yt.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ar())}isEqual(t){return this.batchId===t.batchId&&J(this.mutations,t.mutations,(t,e)=>Mr(t,e))&&J(this.baseMutations,t.baseMutations,(t,e)=>Mr(t,e))}}class zr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){O(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let r=function(){return sr}();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new zr(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hr,Gr;function Wr(t){switch(t){case M.OK:return k(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return k(15467,{code:t})}}function Qr(t){if(void 0===t)return A("GRPC error has no .code"),M.UNKNOWN;switch(t){case Hr.OK:return M.OK;case Hr.CANCELLED:return M.CANCELLED;case Hr.UNKNOWN:return M.UNKNOWN;case Hr.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Hr.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Hr.INTERNAL:return M.INTERNAL;case Hr.UNAVAILABLE:return M.UNAVAILABLE;case Hr.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Hr.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Hr.NOT_FOUND:return M.NOT_FOUND;case Hr.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Hr.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Hr.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Hr.ABORTED:return M.ABORTED;case Hr.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Hr.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Hr.DATA_LOSS:return M.DATA_LOSS;default:return k(39323,{code:t})}}(Gr=Hr||(Hr={}))[Gr.OK=0]="OK",Gr[Gr.CANCELLED=1]="CANCELLED",Gr[Gr.UNKNOWN=2]="UNKNOWN",Gr[Gr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Gr[Gr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Gr[Gr.NOT_FOUND=5]="NOT_FOUND",Gr[Gr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Gr[Gr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Gr[Gr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Gr[Gr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Gr[Gr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Gr[Gr.ABORTED=10]="ABORTED",Gr[Gr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Gr[Gr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Gr[Gr.INTERNAL=13]="INTERNAL",Gr[Gr.UNAVAILABLE=14]="UNAVAILABLE",Gr[Gr.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xr=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yr(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new r([4294967295,4294967295],0);function Zr(t){const e=Yr().encode(t),n=new i;return n.update(e),new Uint8Array(n.digest())}function ti(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class ei{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ni(`Invalid padding: ${e}`);if(n<0)throw new ni(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new ni(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new ni(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=r.fromNumber(this.ge)}ye(t,e,n){let i=t.add(e.multiply(r.fromNumber(n)));return 1===i.compare(Jr)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.ge)return!1;const e=Zr(t),[n,r]=ti(e);for(let i=0;i<this.hashCount;i++){const t=this.ye(n,r,i);if(!this.we(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new ei(i,r,e);return n.forEach(t=>s.insert(t)),s}insert(t){if(0===this.ge)return;const e=Zr(t),[n,r]=ti(e);for(let i=0;i<this.hashCount;i++){const t=this.ye(n,r,i);this.Se(t)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,ii.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ri(yt.min(),r,new he(G),Jn(),ar())}}class ii{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ii(n,e,ar(),ar(),ar())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,n,r){this.be=t,this.removedTargetIds=e,this.key=n,this.De=r}}class oi{constructor(t,e){this.targetId=t,this.Ce=e}}class ai{constructor(t,e,n=ve.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class ci{constructor(){this.ve=0,this.Fe=hi(),this.Me=ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=ar(),e=ar(),n=ar();return this.Fe.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:k(38017,{changeType:i})}}),new ii(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=hi()}Ke(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,O(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class ui{constructor(t){this.Ge=t,this.ze=new Map,this.je=Jn(),this.Je=li(),this.He=li(),this.Ze=new he(G)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.Qe(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:k(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((t,n)=>{this.rt(n)&&e(n)})}st(t){const e=t.targetId,n=t.Ce.count,r=this.ot(e);if(r){const i=r.target;if(On(i))if(0===n){const t=new it(i.path);this.et(e,t,sn.newNoDocument(t,yt.min()))}else O(1===n,20013,{expectedCount:n});else{const r=this._t(e);if(r!==n){const n=this.ut(t),i=n?this.ct(n,t,r):1;if(0!==i){this.it(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,t)}Xr?.o(function(t,e,n,r,i){const s={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},o=e.unchangedNames;return o&&(s.bloomFilter={applied:0===i,hashCount:o?.hashCount??0,bitmapLength:o?.bits?.bitmap?.length??0,padding:o?.bits?.padding??0,mightContain:t=>r?.mightContain(t)??!1}),s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t.Ce,this.Ge.ht(),n,i))}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=Ee(n).toUint8Array()}catch(t){if(t instanceof ye)return x("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new ei(s,r,i)}catch(t){return x(t instanceof ni?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.ge?null:o}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let r=0;return n.forEach(n=>{const i=this.Ge.ht(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.et(e,n,null),r++)}),r}Tt(t){const e=new Map;this.ze.forEach((n,r)=>{const i=this.ot(r);if(i){if(n.current&&On(i.target)){const e=new it(i.target.path);this.Et(e).has(r)||this.It(r,e)||this.et(r,e,sn.newNoDocument(e,t))}n.Be&&(e.set(r,n.ke()),n.qe())}});let n=ar();this.He.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.ot(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.je.forEach((e,n)=>n.setReadTime(t));const r=new ri(t,e,this.Ze,this.je,n);return this.je=Jn(),this.Je=li(),this.He=li(),this.Ze=new he(G),r}Ye(t,e){if(!this.rt(t))return;const n=this.It(t,e.key)?2:0;this.nt(t).Ke(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const r=this.nt(t);this.It(t,e)?r.Ke(e,1):r.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new ci,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new pe(G),this.He=this.He.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new pe(G),this.Je=this.Je.insert(t,e)),e}rt(t){const e=null!==this.ot(t);return e||I("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ci),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}It(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function li(){return new he(it.comparator)}function hi(){return new he(it.comparator)}const fi=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),di=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),pi=(()=>{const t={and:"AND",or:"OR"};return t})();class gi{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function mi(t,e){return t.useProto3Json||Ot(e)?e:{value:e}}function yi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vi(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wi(t,e){return yi(t,e.toTimestamp())}function bi(t){return O(!!t,49232),yt.fromTimestamp(function(t){const e=be(t);return new mt(e.seconds,e.nanos)}(t))}function _i(t,e){return Ei(t,e).canonicalString()}function Ei(t,e){const n=function(t){return new et(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Ti(t){const e=et.fromString(t);return O(Hi(e),10190,{key:e.toString()}),e}function Si(t,e){return _i(t.databaseId,e.path)}function Ci(t,e){const n=Ti(e);if(n.get(1)!==t.databaseId.projectId)throw new P(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new it(Di(n))}function Ii(t,e){return _i(t.databaseId,e)}function Ai(t){const e=Ti(t);return 4===e.length?et.emptyPath():Di(e)}function xi(t){return new et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Di(t){return O(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}function ki(t,e,n){return{name:Si(t,e),fields:n.value.mapValue.fields}}function Ni(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:k(39313,{state:t})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(O(void 0===e||"string"==typeof e,58123),ve.fromBase64String(e||"")):(O(void 0===e||e instanceof Buffer||e instanceof Uint8Array,16193),ve.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?M.UNKNOWN:Qr(t.code);return new P(e,t.message||"")}(o);n=new ai(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ci(t,r.document.name),s=bi(r.document.updateTime),o=r.document.createTime?bi(r.document.createTime):yt.min(),a=new nn({mapValue:{fields:r.document.fields}}),c=sn.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new si(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ci(t,r.document),s=r.readTime?bi(r.readTime):yt.min(),o=sn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new si([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ci(t,r.document),s=r.removedTargetIds||[];n=new si([],s,i,null)}else{if(!("filter"in e))return k(11601,{Vt:e});{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Kr(r,i),o=t.targetId;n=new oi(o,s)}}return n}function Oi(t,e){let n;if(e instanceof Pr)n={update:ki(t,e.key,e.value)};else if(e instanceof jr)n={delete:Si(t,e.key)};else if(e instanceof Lr)n={update:ki(t,e.key,e.data),updateMask:Ki(e.fieldMask)};else{if(!(e instanceof Br))return k(16599,{dt:e.type});n={verify:Si(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof yr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof vr)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof br)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Er)return{fieldPath:e.field.canonicalString(),increment:n.Ae};throw k(20930,{transform:e.transform})}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:wi(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:k(27497)}(t,e.precondition)),n}function Ri(t,e){return t&&t.length>0?(O(void 0!==e,14353),t.map(t=>function(t,e){let n=t.updateTime?bi(t.updateTime):bi(e);return n.isEqual(yt.min())&&(n=bi(e)),new Ir(n,t.transformResults||[])}(t,e))):[]}function Mi(t,e){return{documents:[Ii(t,e.path)]}}function Pi(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ii(t,i);const s=function(t){if(0!==t.length)return qi(dn.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:$i(t.field),direction:Ui(t.dir)}}(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=mi(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ft:n,parent:i}}function Li(t){let e=Ai(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){O(1===r,65062);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Fi(t);return e instanceof dn&&gn(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map(t=>function(t){return new un(zi(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ot(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new on(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new on(n,e)}(n.endAt)),Mn(e,i,o,s,a,"F",c,u)}function Vi(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return k(28987,{purpose:t})}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Fi(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=zi(t.unaryFilter.field);return fn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=zi(t.unaryFilter.field);return fn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=zi(t.unaryFilter.field);return fn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=zi(t.unaryFilter.field);return fn.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return k(61313);default:return k(60726)}}(t):void 0!==t.fieldFilter?function(t){return fn.create(zi(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return k(58110);default:return k(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return dn.create(t.compositeFilter.filters.map(t=>Fi(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return k(1026)}}(t.compositeFilter.op))}(t):k(30097,{filter:t})}function Ui(t){return fi[t]}function ji(t){return di[t]}function Bi(t){return pi[t]}function $i(t){return{fieldPath:t.canonicalString()}}function zi(t){return rt.fromServerFormat(t.fieldPath)}function qi(t){return t instanceof fn?function(t){if("=="===t.op){if(Ye(t.value))return{unaryFilter:{field:$i(t.field),op:"IS_NAN"}};if(Xe(t.value))return{unaryFilter:{field:$i(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ye(t.value))return{unaryFilter:{field:$i(t.field),op:"IS_NOT_NAN"}};if(Xe(t.value))return{unaryFilter:{field:$i(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$i(t.field),op:ji(t.op),value:t.value}}}(t):t instanceof dn?function(t){const e=t.getFilters().map(t=>qi(t));return 1===e.length?e[0]:{compositeFilter:{op:Bi(t.op),filters:e}}}(t):k(54877,{filter:t})}function Ki(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Hi(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}function Gi(t){return!!t&&"function"==typeof t._toProto&&"ProtoValue"===t._protoValueType}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wi{constructor(t,e,n,r,i=yt.min(),s=yt.min(),o=ve.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Wi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t){this.yt=t}}function Xi(t){const e=Li({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?$n(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(_e(t.integerValue));else if("doubleValue"in t){const n=_e(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),Rt(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),"string"==typeof n&&(n=be(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(Ee(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?en(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):Ze(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Kt(t.arrayValue,e),this.Nt(e)):k(19022,{Ut:t})}Ot(t,e){this.Ft(e,25),this.$t(t,e)}$t(t,e){e.xt(t)}qt(t,e){const n=t.fields||{};this.Ft(e,55);for(const r of Object.keys(n))this.Ot(r,e),this.Ct(n[r],e)}kt(t,e){const n=t.fields||{};this.Ft(e,53);const r=Fe,i=n[r].arrayValue?.values?.length||0;this.Ft(e,15),e.Mt(_e(i)),this.Ot(r,e),this.Ct(n[r],e)}Kt(t,e){const n=t.values||[];this.Ft(e,50);for(const r of n)this.Ct(r,e)}Lt(t,e){this.Ft(e,37),it.fromName(t).path.forEach(t=>{this.Ft(e,60),this.$t(t,e)})}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}Yi.Wt=new Yi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(){this.bn=new Zi}addToCollectionParentIndex(t,e){return this.bn.add(e),At.resolve()}getCollectionParents(t,e){return At.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return At.resolve()}deleteFieldIndex(t,e){return At.resolve()}deleteAllFieldIndexes(t){return At.resolve()}createTargetIndexes(t,e){return At.resolve()}getDocumentsMatchingTarget(t,e){return At.resolve(null)}getIndexType(t,e){return At.resolve(0)}getFieldIndexes(t,e){return At.resolve([])}getNextCollectionGroupToUpdate(t){return At.resolve(null)}getMinOffset(t,e){return At.resolve(Et.min())}getMinOffsetFromCollectionGroup(t,e){return At.resolve(Et.min())}updateCollectionGroup(t,e,n){return At.resolve()}updateIndexEntries(t,e){return At.resolve()}}class Zi{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new pe(et.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new pe(et.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ts={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},es=41943040;class ns{static withCacheSize(t){return new ns(t,ns.DEFAULT_COLLECTION_PERCENTILE,ns.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ns.DEFAULT_COLLECTION_PERCENTILE=10,ns.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ns.DEFAULT=new ns(es,ns.DEFAULT_COLLECTION_PERCENTILE,ns.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ns.DISABLED=new ns(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new rs(0)}static ar(){return new rs(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const is="LruGarbageCollector",ss=1048576;function os([t,e],[n,r]){const i=G(t,n);return 0===i?G(e,r):i}class as{constructor(t){this.Pr=t,this.buffer=new pe(os),this.Tr=0}Er(){return++this.Tr}Ir(t){const e=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();os(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class cs{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(t){I(is,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dt(t)?I(is,"Ignoring IndexedDB error during garbage collection: ",t):await It(t)}await this.Ar(3e5)})}}class us{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return At.resolve(kt.ce);const n=new as(e);return this.Vr.forEachTarget(t,t=>n.Ir(t.sequenceNumber)).next(()=>this.Vr.mr(t,t=>n.Ir(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector","Garbage collection skipped; disabled"),At.resolve(ts)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ts):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(I("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,s=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(t,n,e))).next(e=>(i=e,a=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(c=Date.now(),C()<=v.$b.DEBUG&&I("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(a-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),At.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})))}}function ls(t,e){return new us(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hs{constructor(){this.changes=new Xn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,sn.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?At.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fs{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&Or(n.mutation,t,me.empty(),mt.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,ar()).next(()=>e))}getLocalViewOfDocuments(t,e,n=ar()){const r=nr();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=tr();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=nr();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,ar()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let i=Jn();const s=ir(),o=function(){return ir()}();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Lr)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Or(o.mutation,e,o.mutation.getFieldMask(),mt.now())):s.set(e.key,me.empty())}),this.recalculateAndSaveOverlays(t,i).next(t=>(t.forEach((t,e)=>s.set(t,e)),e.forEach((t,e)=>o.set(t,new fs(e,s.get(t)??null))),o))}recalculateAndSaveOverlays(t,e){const n=ir();let r=new he((t,e)=>t-e),i=ar();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const i of t)i.keys().forEach(t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||me.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||ar()).add(t);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=rr();c.forEach(t=>{if(!i.has(t)){const r=kr(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}}),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return At.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n,r){return Vn(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Fn(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):At.resolve(nr());let o=vt,a=i;return s.next(e=>At.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?At.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,i)).next(()=>this.computeViews(t,a,e,ar())).next(t=>({batchId:o,changes:er(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new it(e)).next(t=>{let e=tr();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=tr();return this.indexManager.getCollectionParents(t,i).next(o=>At.forEach(o,o=>{const a=function(t,e){return new Rn(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next(t=>{t.forEach((t,e)=>{s=s.insert(t,e)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r))).next(t=>{i.forEach((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,sn.newInvalidDocument(r)))});let n=tr();return t.forEach((t,r)=>{const s=i.get(t);void 0!==s&&Or(s.mutation,r,me.empty(),mt.now()),Hn(e,r)&&(n=n.insert(t,r))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return At.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:bi(t.createTime)}}(e)),At.resolve()}getNamedQuery(t,e){return At.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(t){return{name:t.name,query:Xi(t.bundledQuery),readTime:bi(t.readTime)}}(e)),At.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.overlays=new he(it.comparator),this.Lr=new Map}getOverlay(t,e){return At.resolve(this.overlays.get(e))}getOverlays(t,e){const n=nr();return At.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.St(t,e,r)}),At.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Lr.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.Lr.delete(n)),At.resolve()}getOverlaysForCollection(t,e,n){const r=nr(),i=e.length+1,s=new it(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return At.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new he((t,e)=>t-e);const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=nr(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=nr(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>o.set(t,e)),o.size()>=r)break;return At.resolve(o)}St(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new qr(e,n));let i=this.Lr.get(e);void 0===i&&(i=ar(),this.Lr.set(e,i)),this.Lr.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(t){return At.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,At.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.kr=new pe(vs.qr),this.Kr=new pe(vs.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const n=new vs(t,e);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Wr(new vs(t,e))}Qr(t,e){t.forEach(t=>this.removeReference(t,e))}Gr(t){const e=new it(new et([])),n=new vs(e,t),r=new vs(e,t+1),i=[];return this.Kr.forEachInRange([n,r],t=>{this.Wr(t),i.push(t.key)}),i}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const e=new it(new et([])),n=new vs(e,t),r=new vs(e,t+1);let i=ar();return this.Kr.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new vs(t,0),n=this.kr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class vs{constructor(t,e){this.key=t,this.Jr=e}static qr(t,e){return it.comparator(t.key,e.key)||G(t.Jr,e.Jr)}static Ur(t,e){return G(t.Jr,e.Jr)||it.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new pe(vs.qr)}checkEmpty(t){return At.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new $r(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Hr=this.Hr.add(new vs(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return At.resolve(s)}lookupMutationBatch(t,e){return At.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Xr(n),i=r<0?0:r;return At.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return At.resolve(0===this.mutationQueue.length?Nt:this.Yn-1)}getAllMutationBatches(t){return At.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new vs(e,0),r=new vs(e,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,r],t=>{const e=this.Zr(t.Jr);i.push(e)}),At.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new pe(G);return e.forEach(t=>{const e=new vs(t,0),r=new vs(t,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([e,r],t=>{n=n.add(t.Jr)})}),At.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;it.isDocumentKey(i)||(i=i.child(""));const s=new vs(new it(i),0);let o=new pe(G);return this.Hr.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Jr)),!0)},s),At.resolve(this.Yr(o))}Yr(t){const e=[];return t.forEach(t=>{const n=this.Zr(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){O(0===this.ei(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Hr;return At.forEach(e.mutations,r=>{const i=new vs(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Hr=n})}nr(t){}containsKey(t,e){const n=new vs(e,0),r=this.Hr.firstAfterOrEqual(n);return At.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,At.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t){this.ti=t,this.docs=function(){return new he(it.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.ti(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return At.resolve(n?n.document.mutableCopy():sn.newInvalidDocument(e))}getEntries(t,e){let n=Jn();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():sn.newInvalidDocument(t))}),At.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Jn();const s=e.path,o=new it(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Tt(_t(o),n)<=0||(r.has(o.key)||Hn(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return At.resolve(i)}getAllFromCollectionGroup(t,e,n,r){k(9500)}ni(t,e){return At.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new _s(this)}getSize(t){return At.resolve(this.size)}}class _s extends hs{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Mr.addEntry(t,r)):this.Mr.removeEntry(n)}),At.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t){this.persistence=t,this.ri=new Xn(t=>kn(t),Nn),this.lastRemoteSnapshotVersion=yt.min(),this.highestTargetId=0,this.ii=0,this.si=new ys,this.targetCount=0,this.oi=rs._r()}forEachTarget(t,e){return this.ri.forEach((t,n)=>e(n)),At.resolve()}getLastRemoteSnapshotVersion(t){return At.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return At.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),At.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ii&&(this.ii=e),At.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new rs(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,At.resolve()}updateTargetData(t,e){return this.lr(e),At.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,At.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.ri.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ri.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),At.waitFor(i).next(()=>r)}getTargetCount(t){return At.resolve(this.targetCount)}getTargetData(t,e){const n=this.ri.get(e)||null;return At.resolve(n)}addMatchingKeys(t,e,n){return this.si.$r(e,n),At.resolve()}removeMatchingKeys(t,e,n){this.si.Qr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),At.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),At.resolve()}getMatchingKeysForTargetId(t,e){const n=this.si.jr(e);return At.resolve(n)}containsKey(t,e){return At.resolve(this.si.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t,e){this._i={},this.overlays={},this.ai=new kt(0),this.ui=!1,this.ui=!0,this.ci=new ms,this.referenceDelegate=t(this),this.li=new Es(this),this.indexManager=new Ji,this.remoteDocumentCache=function(t){return new bs(t)}(t=>this.referenceDelegate.hi(t)),this.serializer=new Qi(e),this.Pi=new ps(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new gs,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this._i[t.toKey()];return n||(n=new ws(e,this.referenceDelegate),this._i[t.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,n){I("MemoryPersistence","Starting transaction:",t);const r=new Ss(this.ai.next());return this.referenceDelegate.Ti(),n(r).next(t=>this.referenceDelegate.Ei(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ii(t,e){return At.or(Object.values(this._i).map(n=>()=>n.containsKey(t,e)))}}class Ss extends Ct{constructor(t){super(),this.currentSequenceNumber=t}}class Cs{constructor(t){this.persistence=t,this.Ri=new ys,this.Ai=null}static Vi(t){return new Cs(t)}get di(){if(this.Ai)return this.Ai;throw k(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.di.delete(n.toString()),At.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.di.add(n.toString()),At.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),At.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(t=>this.di.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.di.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ei(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return At.forEach(this.di,n=>{const r=it.fromPath(n);return this.mi(t,r).next(t=>{t||e.removeEntry(r,yt.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(t=>{t?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return At.or([()=>At.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ii(t,e)])}}class Is{constructor(t,e){this.persistence=t,this.fi=new Xn(t=>Lt(t.path),(t,e)=>t.isEqual(e)),this.garbageCollector=ls(this,e)}static Vi(t,e){return new Is(t,e)}Ti(){}Ei(t){return At.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}pr(t){let e=0;return this.mr(t,t=>{e++}).next(()=>e)}mr(t,e){return At.forEach(this.fi,(n,r)=>this.wr(t,n,r).next(t=>t?At.resolve():e(r)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(t,r=>this.wr(t,r,e).next(t=>{t||(n++,i.removeEntry(r,yt.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),At.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),At.resolve()}removeReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),At.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),At.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ge(t.data.value)),e}wr(t,e,n){return At.or([()=>this.persistence.Ii(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.fi.get(e);return At.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Ts=n,this.Es=r}static Is(t,e){let n=ar(),r=ar();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new As(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return(0,a.nr)()?8:xt((0,a.ZQ)())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.gs(t,e).next(t=>{i.result=t}).next(()=>{if(!i.result)return this.ps(t,e,r,n).next(t=>{i.result=t})}).next(()=>{if(i.result)return;const n=new xs;return this.ys(t,e,n).next(r=>{if(i.result=r,this.As)return this.ws(t,e,n,r.size)})}).next(()=>i.result)}ws(t,e,n,r){return n.documentReadCount<this.Vs?(C()<=v.$b.DEBUG&&I("QueryEngine","SDK will not create cache indexes for query:",Kn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),At.resolve()):(C()<=v.$b.DEBUG&&I("QueryEngine","Query:",Kn(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(C()<=v.$b.DEBUG&&I("QueryEngine","The SDK decides to create cache indexes for query:",Kn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,jn(e))):At.resolve())}gs(t,e){if(Ln(e))return At.resolve(null);let n=jn(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=$n(e,null,"F"),n=jn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const i=ar(...r);return this.fs.getDocuments(t,i).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const s=this.Ss(e,r);return this.bs(e,s,i,n.readTime)?this.gs(t,$n(e,null,"F")):this.Ds(t,s,e,n)}))})))}ps(t,e,n,r){return Ln(e)||r.isEqual(yt.min())?At.resolve(null):this.fs.getDocuments(t,n).next(i=>{const s=this.Ss(e,i);return this.bs(e,s,n,r)?At.resolve(null):(C()<=v.$b.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Kn(e)),this.Ds(t,s,e,bt(r,vt)).next(t=>t))})}Ss(t,e){let n=new pe(Wn(t));return e.forEach((e,r)=>{Hn(t,r)&&(n=n.add(r))}),n}bs(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(t,e,n){return C()<=v.$b.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",Kn(e)),this.fs.getDocumentsMatchingQuery(t,e,Et.min(),n)}Ds(t,e,n,r){return this.fs.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="LocalStore",Ns=3e8;class Os{constructor(t,e,n,r){this.persistence=t,this.Cs=e,this.serializer=r,this.vs=new he(G),this.Fs=new Xn(t=>kn(t),Nn),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(n)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ds(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Rs(t,e,n,r){return new Os(t,e,n,r)}async function Ms(t,e){const n=R(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(i=>(r=i,n.Os(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const i=[],s=[];let o=ar();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({Ns:t,removedBatchIds:i,addedBatchIds:s}))})})}function Ps(t,e){const n=R(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=At.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);O(null!==s,48541),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=ar();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}function Ls(t){const e=R(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function Vs(t,e){const n=R(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const o=[];e.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.li.removeMatchingKeys(t,s.removedDocuments,a).next(()=>n.li.addMatchingKeys(t,s.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(ve.EMPTY_BYTE_STRING,yt.min()).withLastLimboFreeSnapshotVersion(yt.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){if(0===t.resumeToken.approximateByteSize())return!0;const r=e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds();if(r>=Ns)return!0;const i=n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size;return i>0}(c,u,s)&&o.push(n.li.updateTargetData(t,u))});let a=Jn(),c=ar();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Fs(t,s,e.documentUpdates).next(t=>{a=t.Bs,c=t.Ls})),!r.isEqual(yt.min())){const e=n.li.getLastRemoteSnapshotVersion(t).next(e=>n.li.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return At.waitFor(o).next(()=>s.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.vs=i,t))}function Fs(t,e,n){let r=ar(),i=ar();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=Jn();return n.forEach((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(yt.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):I(ks,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{Bs:r,Ls:i}})}function Us(t,e){const n=R(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=Nt),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function js(t,e){const n=R(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.li.getTargetData(t,e).next(i=>i?(r=i,At.resolve(r)):n.li.allocateTargetId(t).next(i=>(r=new Wi(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.li.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.vs.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(t.targetId,t),n.Fs.set(e,t.targetId)),t})}async function Bs(t,e,n){const r=R(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Dt(t))throw t;I(ks,`Failed to update sequence numbers for target ${e}: ${t}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function $s(t,e,n){const r=R(t);let i=yt.min(),s=ar();return r.persistence.runTransaction("Execute query","readwrite",t=>function(t,e,n){const r=R(t),i=r.Fs.get(n);return void 0!==i?At.resolve(r.vs.get(i)):r.li.getTargetData(e,n)}(r,t,jn(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Cs.getDocumentsMatchingQuery(t,e,n?i:yt.min(),n?s:ar())).next(t=>(zs(r,Gn(e),t),{documents:t,ks:s})))}function zs(t,e,n){let r=t.Ms.get(e)||yt.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Ms.set(e,r)}class qs{constructor(){this.activeTargetIds=ur()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ks{constructor(){this.vo=new qs,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,n){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new qs,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{Mo(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="ConnectivityMonitor";class Ws{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){I(Gs,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){I(Gs,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs=null;function Xs(){return null===Qs?Qs=function(){return 268435456+Math.round(2147483648*Math.random())}():Qs++,"0x"+Qs.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ys="RestConnection",Js={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Zs{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===Ne?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(t,e,n,r,i){const s=Xs(),o=this.Qo(t,e.toUriEncodedString());I(Ys,`Sending RPC '${t}' ${s}:`,o,n);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,r,i);const{host:u}=new URL(o),l=(0,a.zJ)(u);return this.zo(t,o,c,n,l).then(e=>(I(Ys,`Received RPC '${t}' ${s}: `,e),e),e=>{throw x(Ys,`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e})}jo(t,e,n,r,i,s){return this.Wo(t,e,n,r,i)}Go(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+E}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Qo(t,e){const n=Js[t];let r=`${this.Ko}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="WebChannelConnection",no=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};class ro extends Zs{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!ro.c_){const t=m();no(t,g.STAT_EVENT,t=>{t.stat===p.PROXY?I(eo,"STAT_EVENT: detected buffering proxy"):t.stat===p.NOPROXY&&I(eo,"STAT_EVENT: detected no buffering proxy")}),ro.c_=!0}}zo(t,e,n,r,i){const s=Xs();return new Promise((i,o)=>{const a=new l;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case d.NO_ERROR:const e=a.getResponseJson();I(eo,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),i(e);break;case d.TIMEOUT:I(eo,`RPC '${t}' ${s} timed out`),o(new P(M.DEADLINE_EXCEEDED,"Request time out"));break;case d.HTTP_ERROR:const n=a.getStatus();if(I(eo,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=t?.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(e)>=0?e:M.UNKNOWN}(e.status);o(new P(t,e.message))}else o(new P(M.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(M.UNAVAILABLE,"Connection failed."));break;default:k(9055,{l_:t,streamId:s,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{I(eo,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(r);I(eo,`RPC '${t}' ${s} sending request:`,r),a.send(e,"POST",c,n,15)})}T_(t,e,n){const r=Xs(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},a=this.longPollingOptions.timeoutSeconds;void 0!==a&&(o.longPollingTimeout=Math.round(1e3*a)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Go(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const c=i.join("");I(eo,`Creating RPC '${t}' stream ${r}: ${c}`,o);const u=s.createWebChannel(c,o);this.E_(u);let l=!1,f=!1;const d=new to({Jo:e=>{f?I(eo,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(I(eo,`Opening RPC '${t}' stream ${r} transport.`),u.open(),l=!0),I(eo,`RPC '${t}' stream ${r} sending:`,e),u.send(e))},Ho:()=>u.close()});return no(u,h.EventType.OPEN,()=>{f||(I(eo,`RPC '${t}' stream ${r} transport opened.`),d.i_())}),no(u,h.EventType.CLOSE,()=>{f||(f=!0,I(eo,`RPC '${t}' stream ${r} transport closed`),d.o_(),this.I_(u))}),no(u,h.EventType.ERROR,e=>{f||(f=!0,x(eo,`RPC '${t}' stream ${r} transport errored. Name:`,e.name,"Message:",e.message),d.o_(new P(M.UNAVAILABLE,"The operation could not be completed")))}),no(u,h.EventType.MESSAGE,e=>{if(!f){const n=e.data[0];O(!!n,16349);const i=n,s=i?.error||i[0]?.error;if(s){I(eo,`RPC '${t}' stream ${r} received error:`,s);const e=s.status;let n=function(t){const e=Hr[t];if(void 0!==e)return Qr(e)}(e),i=s.message;"NOT_FOUND"===e&&i.includes("database")&&i.includes("does not exist")&&i.includes(this.databaseId.database)&&x(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=M.INTERNAL,i="Unknown error status: "+e+" with message "+s.message),f=!0,d.o_(new P(n,i)),u.close()}else I(eo,`RPC '${t}' stream ${r} received:`,n),d.__(n)}}),ro.u_(),setTimeout(()=>{d.s_()},0),d}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,n){super.Go(t,e,n),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){return new ro(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){return new gi(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ro.c_=!1;class ao{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,e-n);r>0&&I("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="PersistentStream";class uo{constructor(t,e,n,r,i,s,o,a){this.Ci=t,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ao(t,e)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.K_(),this.U_(),this.M_.cancel(),this.D_++,4!==t?this.M_.reset():e&&e.code===M.RESOURCE_EXHAUSTED?(A(e.toString()),A("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===M.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.D_===e&&this.G_(t,n)},e=>{t(()=>{const t=new P(M.UNKNOWN,"Fetching auth token failed: "+e.message);return this.z_(t)})})}G_(t,e){const n=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(t=>{n(()=>this.z_(t))}),this.stream.onMessage(t=>{n(()=>1==++this.F_?this.J_(t):this.onNext(t))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return I(co,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(I(co,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lo extends uo{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Ni(this.serializer,t),n=function(t){if(!("targetChange"in t))return yt.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?yt.min():e.readTime?bi(e.readTime):yt.min()}(t);return this.listener.H_(e,n)}Z_(t){const e={};e.database=xi(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=On(r)?{documents:Mi(t,r)}:{query:Pi(t,r).ft},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=vi(t,e.resumeToken);const r=mi(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(yt.min())>0){n.readTime=yi(t,e.snapshotVersion.toTimestamp());const r=mi(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=Vi(this.serializer,t);n&&(e.labels=n),this.q_(e)}X_(t){const e={};e.database=xi(this.serializer),e.removeTarget=t,this.q_(e)}}class ho extends uo{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return O(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,O(!t.writeResults||0===t.writeResults.length,55816),this.listener.ta()}onNext(t){O(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Ri(t.writeResults,t.commitTime),n=bi(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=xi(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Oi(this.serializer,t))};this.q_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{}class po extends fo{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new P(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Wo(t,Ei(e,n),r,i,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(M.UNKNOWN,t.toString())})}jo(t,e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.jo(t,Ei(e,n),r,s,o,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(M.UNKNOWN,t.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function go(t,e,n,r){return new po(t,e,n,r)}class mo{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,"Online"===t&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(A(e),this.aa=!1):I("OnlineStateTracker",e)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="RemoteStore";class vo{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(t=>{n.enqueueAndForget(async()=>{Ao(this)&&(I(yo,"Restarting streams for network reachability change."),await async function(t){const e=R(t);e.Ia.add(4),await bo(e),e.Va.set("Unknown"),e.Ia.delete(4),await wo(e)}(this))})}),this.Va=new mo(n,r)}}async function wo(t){if(Ao(t))for(const e of t.Ra)await e(!0)}async function bo(t){for(const e of t.Ra)await e(!1)}function _o(t,e){const n=R(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Io(n)?Co(n):Ho(n).O_()&&To(n,e))}function Eo(t,e){const n=R(t),r=Ho(n);n.Ea.delete(e),r.O_()&&So(n,e),0===n.Ea.size&&(r.O_()?r.L_():Ao(n)&&n.Va.set("Unknown"))}function To(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(yt.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ho(t).Z_(e)}function So(t,e){t.da.$e(e),Ho(t).X_(e)}function Co(t){t.da=new ui({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ho(t).start(),t.Va.ua()}function Io(t){return Ao(t)&&!Ho(t).x_()&&t.Ea.size>0}function Ao(t){return 0===R(t).Ia.size}function xo(t){t.da=void 0}async function Do(t){t.Va.set("Online")}async function ko(t){t.Ea.forEach((e,n)=>{To(t,e)})}async function No(t,e){xo(t),Io(t)?(t.Va.ha(e),Co(t)):t.Va.set("Unknown")}async function Oo(t,e,n){if(t.Va.set("Online"),e instanceof ai&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Ea.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Ea.delete(r),t.da.removeTarget(r))}(t,e)}catch(n){I(yo,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ro(t,n)}else if(e instanceof si?t.da.Xe(e):e instanceof oi?t.da.st(e):t.da.tt(e),!n.isEqual(yt.min()))try{const e=await Ls(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.da.Tt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Ea.get(r);i&&t.Ea.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach((e,n)=>{const r=t.Ea.get(e);if(!r)return;t.Ea.set(e,r.withResumeToken(ve.EMPTY_BYTE_STRING,r.snapshotVersion)),So(t,e);const i=new Wi(r.target,e,n,r.sequenceNumber);To(t,i)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){I(yo,"Failed to raise snapshot:",e),await Ro(t,e)}}async function Ro(t,e,n){if(!Dt(e))throw e;t.Ia.add(1),await bo(t),t.Va.set("Offline"),n||(n=()=>Ls(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{I(yo,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await wo(t)})}function Mo(t,e){return e().catch(n=>Ro(t,n,e))}async function Po(t){const e=R(t),n=Go(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Nt;for(;Lo(e);)try{const t=await Us(e.localStore,r);if(null===t){0===e.Ta.length&&n.L_();break}r=t.batchId,Vo(e,t)}catch(t){await Ro(e,t)}Fo(e)&&Uo(e)}function Lo(t){return Ao(t)&&t.Ta.length<10}function Vo(t,e){t.Ta.push(e);const n=Go(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Fo(t){return Ao(t)&&!Go(t).x_()&&t.Ta.length>0}function Uo(t){Go(t).start()}async function jo(t){Go(t).ra()}async function Bo(t){const e=Go(t);for(const n of t.Ta)e.ea(n.mutations)}async function $o(t,e,n){const r=t.Ta.shift(),i=zr.from(r,e,n);await Mo(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Po(t)}async function zo(t,e){e&&Go(t).Y_&&await async function(t,e){if(function(t){return Wr(t)&&t!==M.ABORTED}(e.code)){const n=t.Ta.shift();Go(t).B_(),await Mo(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Po(t)}}(t,e),Fo(t)&&Uo(t)}async function qo(t,e){const n=R(t);n.asyncQueue.verifyOperationInProgress(),I(yo,"RemoteStore received new credentials");const r=Ao(n);n.Ia.add(3),await bo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await wo(n)}async function Ko(t,e){const n=R(t);e?(n.Ia.delete(2),await wo(n)):e||(n.Ia.add(2),await bo(n),n.Va.set("Unknown"))}function Ho(t){return t.ma||(t.ma=function(t,e,n){const r=R(t);return r.sa(),new lo(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Zo:Do.bind(null,t),Yo:ko.bind(null,t),t_:No.bind(null,t),H_:Oo.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Io(t)?Co(t):t.Va.set("Unknown")):(await t.ma.stop(),xo(t))})),t.ma}function Go(t){return t.fa||(t.fa=function(t,e,n){const r=R(t);return r.sa(),new ho(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:jo.bind(null,t),t_:zo.bind(null,t),ta:Bo.bind(null,t),na:$o.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Po(t)):(await t.fa.stop(),t.Ta.length>0&&(I(yo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Wo{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new L,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Wo(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new P(M.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qo(t,e){if(A("AsyncQueue",`${e}: ${t}`),Dt(t))return new P(M.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{static emptySet(t){return new Xo(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||it.comparator(e.key,n.key):(t,e)=>it.comparator(t.key,e.key),this.keyedMap=tr(),this.sortedSet=new he(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Xo))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Xo;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.ga=new he(it.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?0!==t.type&&3===n.type?this.ga=this.ga.insert(e,t):3===t.type&&1!==n.type?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.ga=this.ga.remove(e):1===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):k(63341,{Vt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class Jo{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach(t=>{s.push({type:0,doc:t})}),new Jo(t,e,Xo.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class ta{constructor(){this.queries=ea(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(t,e){const n=R(t),r=n.queries;n.queries=ea(),r.forEach((t,n)=>{for(const r of n.Sa)r.onError(e)})}(this,new P(M.ABORTED,"Firestore shutting down"))}}function ea(){return new Xn(t=>qn(t),zn)}async function na(t,e){const n=R(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new Zo,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(t){const n=Qo(t,`Initialization of query '${Kn(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&oa(n)}async function ra(t,e){const n=R(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const t=s.Sa.indexOf(e);t>=0&&(s.Sa.splice(t,1),0===s.Sa.length?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ia(t,e){const n=R(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.Sa)t.Fa(i)&&(r=!0);e.wa=i}}r&&oa(n)}function sa(t,e,n){const r=R(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function oa(t){t.Ca.forEach(t=>{t.next()})}var aa,ca;(ca=aa||(aa={})).Ma="default",ca.Cache="cache";class ua{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Jo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==e;return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}ka(t){t=Jo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==aa.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class la{constructor(t){this.key=t}}class ha{constructor(t){this.key=t}}class fa{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ar(),this.mutatedKeys=ar(),this.eu=Wn(t),this.tu=new Xo(this.eu)}get nu(){return this.Za}ru(t,e){const n=e?e.iu:new Yo,r=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=Hn(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.su(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.eu(l,a)>0||c&&this.eu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{tu:s,iu:n,bs:o,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const s=t.iu.ya();s.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return k(20277,{Vt:t})}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.eu(t.doc,e.doc)),this.ou(n),r=r??!1;const o=e&&!r?this._u():[],a=0===this.Ya.size&&this.current&&!r?1:0,c=a!==this.Xa;return this.Xa=a,0!==s.length||c?{snapshot:new Jo(this.query,t.tu,i,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Yo,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=ar(),this.tu.forEach(t=>{this.uu(t.key)&&(this.Ya=this.Ya.add(t.key))});const e=[];return t.forEach(t=>{this.Ya.has(t)||e.push(new ha(t))}),this.Ya.forEach(n=>{t.has(n)||e.push(new la(n))}),e}cu(t){this.Za=t.ks,this.Ya=ar();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Jo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}}const da="SyncEngine";class pa{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ga{constructor(t){this.key=t,this.hu=!1}}class ma{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Pu={},this.Tu=new Xn(t=>qn(t),zn),this.Eu=new Map,this.Iu=new Set,this.Ru=new he(it.comparator),this.Au=new Map,this.Vu=new ys,this.du={},this.mu=new Map,this.fu=rs.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function ya(t,e,n=!0){const r=Ua(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await wa(r,e,n,!0),i}async function va(t,e){const n=Ua(t);await wa(n,e,!0,!1)}async function wa(t,e,n,r){const i=await js(t.localStore,jn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await ba(t,e,s,"current"===o,i.resumeToken)),t.isPrimaryClient&&n&&_o(t.remoteStore,i),a}async function ba(t,e,n,r,i){t.pu=(e,n,r)=>async function(t,e,n,r){let i=e.view.ru(n);i.bs&&(i=await $s(t.localStore,e.query,!1).then(({documents:t})=>e.view.ru(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return Ra(t,e.targetId,a.au),a.snapshot}(t,e,n,r);const s=await $s(t.localStore,e,!0),o=new fa(e,s.ks),a=o.ru(s.documents),c=ii.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);Ra(t,n,u.au);const l=new pa(e,n,o);return t.Tu.set(e,l),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),u.snapshot}async function _a(t,e,n){const r=R(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(t=>!zn(t,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Eo(r.remoteStore,i.targetId),Na(r,i.targetId)}).catch(It)):(Na(r,i.targetId),await Bs(r.localStore,i.targetId,!0))}async function Ea(t,e){const n=R(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Eo(n.remoteStore,r.targetId))}async function Ta(t,e,n){const r=ja(t);try{const t=await function(t,e){const n=R(t),r=mt.now(),i=e.reduce((t,e)=>t.add(e.key),ar());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=Jn(),c=ar();return n.xs.getEntries(t,i).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(i=>{s=i;const o=[];for(const t of e){const e=Rr(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Lr(t.key,e,rn(e.value.mapValue),Ar.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:er(s)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.du[t.currentUser.toKey()];r||(r=new he(G)),r=r.insert(e,n),t.du[t.currentUser.toKey()]=r}(r,t.batchId,n),await La(r,t.changes),await Po(r.remoteStore)}catch(t){const e=Qo(t,"Failed to persist write");n.reject(e)}}async function Sa(t,e){const n=R(t);try{const t=await Vs(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Au.get(e);r&&(O(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.hu=!0:t.modifiedDocuments.size>0?O(r.hu,14607):t.removedDocuments.size>0&&(O(r.hu,42227),r.hu=!1))}),await La(n,t,e)}catch(t){await It(t)}}function Ca(t,e,n){const r=R(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Tu.forEach((n,r)=>{const i=r.view.va(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=R(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.Sa)i.va(e)&&(r=!0)}),r&&oa(n)}(r.eventManager,e),t.length&&r.Pu.H_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ia(t,e,n){const r=R(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let t=new he(it.comparator);t=t.insert(s,sn.newNoDocument(s,yt.min()));const n=ar().add(s),i=new ri(yt.min(),new Map,new he(G),t,n);await Sa(r,i),r.Ru=r.Ru.remove(s),r.Au.delete(e),Pa(r)}else await Bs(r.localStore,e,!1).then(()=>Na(r,e,n)).catch(It)}async function Aa(t,e){const n=R(t),r=e.batch.batchId;try{const t=await Ps(n.localStore,e);ka(n,r,null),Da(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await La(n,t)}catch(t){await It(t)}}async function xa(t,e,n){const r=R(t);try{const t=await function(t,e){const n=R(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(O(null!==e,37113),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);ka(r,e,n),Da(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await La(r,t)}catch(n){await It(n)}}function Da(t,e){(t.mu.get(e)||[]).forEach(t=>{t.resolve()}),t.mu.delete(e)}function ka(t,e,n){const r=R(t);let i=r.du[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Na(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(e=>{t.Vu.containsKey(e)||Oa(t,e)})}function Oa(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);null!==n&&(Eo(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Pa(t))}function Ra(t,e,n){for(const r of n)r instanceof la?(t.Vu.addReference(r.key,e),Ma(t,r)):r instanceof ha?(I(da,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||Oa(t,r.key)):k(19791,{wu:r})}function Ma(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(I(da,"New document in limbo: "+n),t.Iu.add(r),Pa(t))}function Pa(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new it(et.fromString(e)),r=t.fu.next();t.Au.set(r,new ga(n)),t.Ru=t.Ru.insert(n,r),_o(t.remoteStore,new Wi(jn(Pn(n.path)),r,"TargetPurposeLimboResolution",kt.ce))}}async function La(t,e,n){const r=R(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((t,a)=>{o.push(r.pu(a,e,n).then(t=>{if((t||n)&&r.isPrimaryClient){const e=t?!t.fromCache:n?.targetChanges.get(a.targetId)?.current;r.sharedClientState.updateQueryState(a.targetId,e?"current":"not-current")}if(t){i.push(t);const e=As.Is(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(t,e){const n=R(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>At.forEach(e,e=>At.forEach(e.Ts,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>At.forEach(e.Es,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Dt(t))throw t;I(ks,"Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.vs.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.vs=n.vs.insert(t,i)}}}(r.localStore,s))}async function Va(t,e){const n=R(t);if(!n.currentUser.isEqual(e)){I(da,"User change. New user:",e.toKey());const t=await Ms(n.localStore,e);n.currentUser=e,function(t,e){t.mu.forEach(t=>{t.forEach(t=>{t.reject(new P(M.CANCELLED,e))})}),t.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await La(n,t.Ns)}}function Fa(t,e){const n=R(t),r=n.Au.get(e);if(r&&r.hu)return ar().add(r.key);{let t=ar();const r=n.Eu.get(e);if(!r)return t;for(const e of r){const r=n.Tu.get(e);t=t.unionWith(r.view.nu)}return t}}function Ua(t){const e=R(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sa.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fa.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ia.bind(null,e),e.Pu.H_=ia.bind(null,e.eventManager),e.Pu.yu=sa.bind(null,e.eventManager),e}function ja(t){const e=R(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Aa.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xa.bind(null,e),e}class Ba{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=oo(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Rs(this.persistence,new Ds,t.initialUser,this.serializer)}Cu(t){return new Ts(Cs.Vi,this.serializer)}Du(t){return new Ks}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ba.provider={build:()=>new Ba};class $a extends Ba{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){O(this.persistence.referenceDelegate instanceof Is,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new cs(n,t.asyncQueue,e)}Cu(t){const e=void 0!==this.cacheSizeBytes?ns.withCacheSize(this.cacheSizeBytes):ns.DEFAULT;return new Ts(t=>Is.Vi(t,e),this.serializer)}}class za{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ca(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Va.bind(null,this.syncEngine),await Ko(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ta}()}createDatastore(t){const e=oo(t.databaseInfo.databaseId),n=io(t.databaseInfo);return go(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new vo(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,t=>Ca(this.syncEngine,t,0),function(){return Ws.v()?new Ws:new Hs}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new ma(t,e,n,r,i,s);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await async function(t){const e=R(t);I(yo,"RemoteStore shutting down."),e.Ia.add(5),await bo(e),e.Aa.shutdown(),e.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}za.provider={build:()=>new za};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):A("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ka="FirestoreClient";class Ha{constructor(t,e,n,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this._databaseInfo=r,this.user=_.UNAUTHENTICATED,this.clientId=H.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async t=>{I(Ka,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(I(Ka,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new L;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Qo(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ga(t,e){t.asyncQueue.verifyOperationInProgress(),I(Ka,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Ms(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wa(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Qa(t);I(Ka,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(t=>qo(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>qo(e.remoteStore,n)),t._onlineComponents=e}async function Qa(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){I(Ka,"Using user provided OfflineComponentProvider");try{await Ga(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;x("Error using user provided cache. Falling back to memory cache: "+n),await Ga(t,new Ba)}}else I(Ka,"Using default OfflineComponentProvider"),await Ga(t,new $a(void 0));return t._offlineComponents}async function Xa(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(I(Ka,"Using user provided OnlineComponentProvider"),await Wa(t,t._uninitializedComponentsProvider._online)):(I(Ka,"Using default OnlineComponentProvider"),await Wa(t,new za))),t._onlineComponents}function Ya(t){return Xa(t).then(t=>t.syncEngine)}async function Ja(t){const e=await Xa(t),n=e.eventManager;return n.onListen=ya.bind(null,e.syncEngine),n.onUnlisten=_a.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=va.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ea.bind(null,e.syncEngine),n}function Za(t,e,n,r){const i=new qa(r),s=new ua(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>na(await Ja(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>ra(await Ja(t),s))}}function tc(t,e){const n=new L;return t.asyncQueue.enqueueAndForget(async()=>Ta(await Ya(t),e,n)),n.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ec(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const nc="ComponentProvider",rc=new Map;function ic(t,e,n,r,i){return new ke(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,ec(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="firestore.googleapis.com",oc=!0;class ac{constructor(t){if(void 0===t.host){if(void 0!==t.ssl)throw new P(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sc,this.ssl=oc}else this.host=t.host,this.ssl=t.ssl??oc;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=es;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<ss)throw new P(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ot("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ec(t.experimentalLongPollingOptions??{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new P(M.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new P(M.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new P(M.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class cc{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ac({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new P(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new P(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ac(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new F;switch(t.type){case"firstParty":return new $(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new P(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=rc.get(t);e&&(I(nc,"Removing Datastore"),rc.delete(t),e.terminate())}(this),Promise.resolve()}}function uc(t,e,n,r={}){t=ht(t,cc);const i=(0,a.zJ)(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;i&&(0,a.gE)(`https://${c}`),s.host!==sc&&s.host!==c&&x("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:c,ssl:i,emulatorOptions:r};if(!(0,a.bD)(u,o)&&(t._setSettings(u),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=_.MOCK_USER;else{e=(0,a.Fy)(r.mockUserToken,t._app?.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new P(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new _(i)}t._authCredentials=new U(new V(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new lc(this.firestore,t,this._query)}}class hc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new hc(this.firestore,t,this._key)}toJSON(){return{type:hc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(dt(e,hc._jsonSchema))return new hc(t,n||null,new it(et.fromString(e.referencePath)))}}hc._jsonSchemaVersion="firestore/documentReference/1.0",hc._jsonSchema={type:ft("string",hc._jsonSchemaVersion),referencePath:ft("string")};class fc extends lc{constructor(t,e,n){super(t,e,Pn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new hc(this.firestore,null,new it(t))}withConverter(t){return new fc(this.firestore,t,this._path)}}function dc(t,e,...n){if(t=(0,a.Ku)(t),st("collection","path",e),t instanceof cc){const r=et.fromString(e,...n);return ct(r),new fc(t,null,r)}{if(!(t instanceof hc||t instanceof fc))throw new P(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return ct(r),new fc(t.firestore,null,r)}}function pc(t,e,...n){if(t=(0,a.Ku)(t),1===arguments.length&&(e=H.newId()),st("doc","path",e),t instanceof cc){const r=et.fromString(e,...n);return at(r),new hc(t,null,new it(r))}{if(!(t instanceof hc||t instanceof fc))throw new P(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return at(r),new hc(t.firestore,t instanceof fc?t.converter:null,new it(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gc="AsyncQueue";class mc{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ao(this,"async_queue_retry"),this._c=()=>{const t=so();t&&I(gc,"Visibility state changed to "+t.visibilityState),this.M_.w_()},this.ac=t;const e=so();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=so();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new L;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!Dt(t))throw t;I(gc,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(t=>{throw this.nc=t,this.rc=!1,A("INTERNAL UNHANDLED ERROR: ",yc(t)),t}).then(t=>(this.rc=!1,t))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const r=Wo.createAndSchedule(this,t,e,n,t=>this.hc(t));return this.tc.push(r),r}uc(){this.nc&&k(47125,{Pc:yc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do{t=this.ac,await t}while(t!==this.ac)}Ec(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function yc(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class vc extends cc{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new mc,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new mc(t),this._firestoreClient=void 0,await t}}}function wc(t,e){const n="object"==typeof t?t:(0,s.Sx)(),r="string"==typeof t?t:e||Ne,i=(0,s.j6)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=(0,a.yU)("firestore");t&&uc(i,...t)}return i}function bc(t){if(t._terminated)throw new P(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_c(t),t._firestoreClient}function _c(t){const e=t._freezeSettings(),n=ic(t._databaseId,t._app?.options.appId||"",t._persistenceKey,t._app?.options.apiKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Ha(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(t){const e=t?._online.build();return{_offline:t?._offline.build(e),_online:e}}(t._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ec{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ec(ve.fromBase64String(t))}catch(t){throw new P(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ec(ve.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ec._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(dt(t,Ec._jsonSchema))return Ec.fromBase64String(t.bytes)}}Ec._jsonSchemaVersion="firestore/bytes/1.0",Ec._jsonSchema={type:ft("string",Ec._jsonSchemaVersion),bytes:ft("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new P(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new P(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new P(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Cc._jsonSchemaVersion}}static fromJSON(t){if(dt(t,Cc._jsonSchema))return new Cc(t.latitude,t.longitude)}}Cc._jsonSchemaVersion="firestore/geoPoint/1.0",Cc._jsonSchema={type:ft("string",Cc._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Ic._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(dt(t,Ic._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(t=>"number"==typeof t))return new Ic(t.vectorValues);throw new P(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ic._jsonSchemaVersion="firestore/vectorValue/1.0",Ic._jsonSchema={type:ft("string",Ic._jsonSchemaVersion),vectorValues:ft("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ac=/^__.*__$/;class xc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Lr(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Dc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k(40011,{dataSource:t})}}class kc{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new kc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){const e=this.path?.child(t),n=this.i({path:e,arrayElement:!1});return n.mc(t),n}fc(t){const e=this.path?.child(t),n=this.i({path:e,arrayElement:!1});return n.Ac(),n}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return zc(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(0===t.length)throw this.yc("Document fields must not be empty");if(Dc(this.dataSource)&&Ac.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class Nc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||oo(t)}I(t,e,n,r=!1){return new kc({dataSource:t,methodName:e,targetDoc:n,path:rt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oc(t){const e=t._freezeSettings(),n=oo(t._databaseId);return new Nc(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Rc extends Sc{_toFieldTransform(t){if(2!==t.dataSource)throw 1===t.dataSource?t.yc(`${this._methodName}() can only appear at the top level of your update data`):t.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Rc}}function Mc(t,e,n,r){const i=t.I(1,e,n);Uc("Data must be an object, but it was:",i,r);const s=[],o=nn.empty();ue(r,(t,r)=>{const c=$c(e,t,n);r=(0,a.Ku)(r);const u=i.fc(c);if(r instanceof Rc)s.push(c);else{const t=Lc(r,u);null!=t&&(s.push(c),o.set(c,t))}});const c=new me(s);return new xc(o,c,i.fieldTransforms)}function Pc(t,e,n,r,i,s){const o=t.I(1,e,n),c=[jc(e,r,n)],u=[i];if(s.length%2!=0)throw new P(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(jc(e,s[a])),u.push(s[a+1]);const l=[],h=nn.empty();for(let d=c.length-1;d>=0;--d)if(!qc(l,c[d])){const t=c[d];let e=u[d];e=(0,a.Ku)(e);const n=o.fc(t);if(e instanceof Rc)l.push(t);else{const r=Lc(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new me(l);return new xc(h,f,o.fieldTransforms)}function Lc(t,e){if(Fc(t=(0,a.Ku)(t)))return Uc("Unsupported field value:",e,t),Vc(t,e);if(t instanceof Sc)return function(t,e){if(!Dc(e.dataSource))throw e.yc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.yc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&4!==e.dataSource)throw e.yc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Lc(i,e.gc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return fr(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=mt.fromDate(t);return{timestampValue:yi(e.serializer,n)}}if(t instanceof mt){const n=new mt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:yi(e.serializer,n)}}if(t instanceof Cc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ec)return{bytesValue:vi(e.serializer,t._byteString)};if(t instanceof hc){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.yc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:_i(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof Ic)return function(t,e){const n=t instanceof Ic?t.toArray():t,r={fields:{[Me]:{stringValue:Ve},[Fe]:{arrayValue:{values:n.map(t=>{if("number"!=typeof t)throw e.yc("VectorValues must only contain numeric values.");return lr(e.serializer,t)})}}}};return{mapValue:r}}(t,e);if(Gi(t))return t._toProto(e.serializer);throw e.yc(`Unsupported field value: ${lt(t)}`)}(t,e)}function Vc(t,e){const n={};return le(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ue(t,(t,r)=>{const i=Lc(r,e.dc(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Fc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof Cc||t instanceof Ec||t instanceof hc||t instanceof Sc||t instanceof Ic||Gi(t))}function Uc(t,e,n){if(!Fc(n)||!ut(n)){const r=lt(n);throw"an object"===r?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function jc(t,e,n){if((e=(0,a.Ku)(e))instanceof Tc)return e._internalPath;if("string"==typeof e)return $c(t,e);throw zc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Bc=new RegExp("[~\\*/\\[\\]]");function $c(t,e,n){if(e.search(Bc)>=0)throw zc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tc(...e.split("."))._internalPath}catch(r){throw zc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new P(M.INVALID_ARGUMENT,a+t+c)}function qc(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kc{convertValue(t,e="none"){switch(Ue(t)){case 0:return null;case 1:return t.booleanValue;case 2:return _e(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw k(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ue(t,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertVectorValue(t){const e=t.fields?.[Fe].arrayValue?.values?.map(t=>_e(t.doubleValue));return new Ic(e)}convertGeoPoint(t){return new Cc(_e(t.latitude),_e(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=xe(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(De(t));default:return null}}convertTimestamp(t){const e=be(t);return new mt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=et.fromString(t);O(Hi(n),9688,{name:t});const r=new Oe(n.get(1),n.get(3)),i=new it(n.popFirst(5));return r.isEqual(e)||A(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends Kc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ec(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new hc(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="@firebase/firestore",Wc="4.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */(t,["next","error","complete"])}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xc{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new hc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Yc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){const e=this._document.data.field(jc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Yc extends Xc{data(){return super.data()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new P(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zc{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class tu extends Xc{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new eu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(jc("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new P(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=tu._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e):e}}tu._jsonSchemaVersion="firestore/documentSnapshot/1.0",tu._jsonSchema={type:ft("string",tu._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class eu extends tu{data(t={}){return super.data(t)}}class nu{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Zc(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new eu(this._firestore,this._userDataWriter,n.key,n,new Zc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new P(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const r=new eu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Zc(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new eu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Zc(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:ru(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new P(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=nu._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=H.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],r=[];return this.docs.forEach(t=>{null!==t._document&&(e.push(t._document),n.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),r.push(t.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function ru(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return k(61501,{type:t})}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
nu._jsonSchemaVersion="firestore/querySnapshot/1.0",nu._jsonSchema={type:ft("string",nu._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};function iu(t,e,n,...r){t=ht(t,hc);const i=ht(t.firestore,vc),s=Oc(i);let o;return o="string"==typeof(e=(0,a.Ku)(e))||e instanceof Tc?Pc(s,"updateDoc",t._key,e,n,r):Mc(s,"updateDoc",t._key,e),ou(i,[o.toMutation(t._key,Ar.exists(!0))])}function su(t,...e){t=(0,a.Ku)(t);let n={includeMetadataChanges:!1,source:"default"},r=0;"object"!=typeof e[r]||Qc(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Qc(e[r])){const t=e[r];e[r]=t.next?.bind(t),e[r+1]=t.error?.bind(t),e[r+2]=t.complete?.bind(t)}let s,o,c;if(t instanceof hc)o=ht(t.firestore,vc),c=Pn(t._key.path),s={next:n=>{e[r]&&e[r](au(o,t,n))},error:e[r+1],complete:e[r+2]};else{const n=ht(t,lc);o=ht(n.firestore,vc),c=n._query;const i=new Hc(o);s={next:t=>{e[r]&&e[r](new nu(o,i,n,t))},error:e[r+1],complete:e[r+2]},Jc(t._query)}const u=bc(o);return Za(u,c,i,s)}function ou(t,e){const n=bc(t);return tc(n,e)}function au(t,e,n){const r=n.docs.get(e._key),i=new Hc(t);return new tu(t,i,e._key,r,new Zc(n.hasPendingWrites,n.fromCache),e.converter)}new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){T(s.MF),(0,s.om)(new o.uA("firestore",(t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new vc(new j(t.getProvider("auth-internal")),new q(i,t.getProvider("app-check-internal")),Re(i,n),i);return r={useFetchStreams:e,...r},s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(Gc,Wc,t),(0,s.KO)(Gc,Wc,"esm2020")}()}}]);
//# sourceMappingURL=chunk-vendors.105fd8da.js.map