"use strict";(self["webpackChunkcontrole_de_som"]=self["webpackChunkcontrole_de_som"]||[]).push([[504],{734:function(t,e,n){n.d(e,{cY:function(){return w},FA:function(){return D},g:function(){return x},u:function(){return l},Uj:function(){return u},Fy:function(){return b},bD:function(){return O},T9:function(){return v},yU:function(){return y},mS:function(){return h},Ku:function(){return M},ZQ:function(){return _},zJ:function(){return L},zW:function(){return C},nr:function(){return T},Ov:function(){return S},gE:function(){return P},eX:function(){return I}});const r=()=>{},s=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,i||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const c=s<t.length,u=c?n[t.charAt(s)]:64;++s;const l=s<t.length,h=l?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==u||null==h)throw new a;const f=e<<2|o>>4;if(r.push(f),64!==u){const t=o<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(t){const e=s(t);return o.encodeByteArray(e,!0)},u=function(t){return c(t).replace(/\./g,"")},l=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */const f=()=>h().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/ControleDeSom/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},g=()=>{try{return r()||f()||d()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>g()?.emulatorHosts?.[t],y=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>g()?.config;
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
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
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
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){const t=g()?.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function T(){return!E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S(){return!E()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function C(){try{return"object"===typeof indexedDB}catch(t){return!1}}function I(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}
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
const A="FirebaseError";class x extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=A,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?k(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new x(r,o,n);return a}}function k(t,e){return t.replace(N,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const N=/\{\$([^}]+)}/g;
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
 */function O(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(R(n)&&R(i)){if(!O(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function R(t){return null!==t&&"object"===typeof t}
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
 */function L(t){try{const e=t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t;return e.endsWith(".cloudworkstations.dev")}catch{return!1}}async function P(t){const e=await fetch(t,{credentials:"include"});return e.ok}
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
 */},953:function(t,e,n){n.d(e,{C4:function(){return S},EW:function(){return Mt},Gc:function(){return vt},IG:function(){return It},Kh:function(){return yt},Pr:function(){return Ot},R1:function(){return kt},Tm:function(){return Et},X2:function(){return u},a1:function(){return xt},bl:function(){return C},fE:function(){return Tt},g8:function(){return _t},hZ:function(){return P},i9:function(){return Dt},ju:function(){return St},lJ:function(){return At},qA:function(){return F},u4:function(){return L},ux:function(){return Ct},wB:function(){return Ut},yC:function(){return o}});var r=n(33);
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let s,i;class o{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=s,!t&&s&&(this.index=(s.scopes||(s.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=s;try{return s=this,t()}finally{s=e}}else 0}on(){1===++this._on&&(this.prevScope=s,s=this)}off(){this._on>0&&0===--this._on&&(s=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){let e,n;for(this._active=!1,e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0}}}function a(){return s}const c=new WeakSet;class u{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,s&&s.active&&s.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||d(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,I(this),m(this);const t=i,e=E;i=this,E=!0;try{return this.fn()}finally{0,y(this),i=t,E=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)b(t);this.deps=this.depsTail=void 0,I(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){v(this)&&this.run()}get dirty(){return v(this)}}let l,h,f=0;function d(t,e=!1){if(t.flags|=8,e)return t.next=h,void(h=t);t.next=l,l=t}function p(){f++}function g(){if(--f>0)return;if(h){let t=h;h=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(l){let n=l;l=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=r}}if(t)throw t}function m(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function y(t){let e,n=t.depsTail,r=n;while(r){const t=r.prevDep;-1===r.version?(r===n&&(n=t),b(r),_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=t}t.deps=e,t.depsTail=n}function v(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(w(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function w(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===A)return;if(t.globalVersion=A,!t.isSSR&&128&t.flags&&(!t.deps&&!t._dirty||!v(t)))return;t.flags|=2;const e=t.dep,n=i,s=E;i=t,E=!0;try{m(t);const n=t.fn(t._value);(0===e.version||(0,r.$H)(n,t._value))&&(t.flags|=128,t._value=n,e.version++)}catch(o){throw e.version++,o}finally{i=n,E=s,y(t),t.flags&=-3}}function b(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)b(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function _(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let E=!0;const T=[];function S(){T.push(E),E=!1}function C(){const t=T.pop();E=void 0===t||t}function I(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=i;i=void 0;try{e()}finally{i=t}}}let A=0;class x{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class D{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!i||!E||i===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==i)e=this.activeLink=new x(i,this),i.deps?(e.prevDep=i.depsTail,i.depsTail.nextDep=e,i.depsTail=e):i.deps=i.depsTail=e,k(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=i.depsTail,e.nextDep=void 0,i.depsTail.nextDep=e,i.depsTail=e,i.deps===e&&(i.deps=t)}return e}trigger(t){this.version++,A++,this.notify(t)}notify(t){p();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{g()}}}function k(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)k(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const N=new WeakMap,O=Symbol(""),R=Symbol(""),M=Symbol("");function L(t,e,n){if(E&&i){let e=N.get(t);e||N.set(t,e=new Map);let r=e.get(n);r||(e.set(n,r=new D),r.map=e,r.key=n),r.track()}}function P(t,e,n,s,i,o){const a=N.get(t);if(!a)return void A++;const c=t=>{t&&t.trigger()};if(p(),"clear"===e)a.forEach(c);else{const i=(0,r.cy)(t),o=i&&(0,r.yI)(n);if(i&&"length"===n){const t=Number(s);a.forEach((e,n)=>{("length"===n||n===M||!(0,r.Bm)(n)&&n>=t)&&c(e)})}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(M)),e){case"add":i?o&&c(a.get("length")):(c(a.get(O)),(0,r.CE)(t)&&c(a.get(R)));break;case"delete":i||(c(a.get(O)),(0,r.CE)(t)&&c(a.get(R)));break;case"set":(0,r.CE)(t)&&c(a.get(O));break}}g()}function V(t){const e=Ct(t);return e===t?e:(L(e,"iterate",M),Tt(t)?e:e.map(At))}function F(t){return L(t=Ct(t),"iterate",M),t}function U(t,e){return Et(t)?_t(t)?xt(At(e)):xt(e):At(e)}const j={__proto__:null,[Symbol.iterator](){return $(this,Symbol.iterator,t=>U(this,t))},concat(...t){return V(this).concat(...t.map(t=>(0,r.cy)(t)?V(t):t))},entries(){return $(this,"entries",t=>(t[1]=U(this,t[1]),t))},every(t,e){return q(this,"every",t,e,void 0,arguments)},filter(t,e){return q(this,"filter",t,e,t=>t.map(t=>U(this,t)),arguments)},find(t,e){return q(this,"find",t,e,t=>U(this,t),arguments)},findIndex(t,e){return q(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return q(this,"findLast",t,e,t=>U(this,t),arguments)},findLastIndex(t,e){return q(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return q(this,"forEach",t,e,void 0,arguments)},includes(...t){return K(this,"includes",t)},indexOf(...t){return K(this,"indexOf",t)},join(t){return V(this).join(t)},lastIndexOf(...t){return K(this,"lastIndexOf",t)},map(t,e){return q(this,"map",t,e,void 0,arguments)},pop(){return G(this,"pop")},push(...t){return G(this,"push",t)},reduce(t,...e){return z(this,"reduce",t,e)},reduceRight(t,...e){return z(this,"reduceRight",t,e)},shift(){return G(this,"shift")},some(t,e){return q(this,"some",t,e,void 0,arguments)},splice(...t){return G(this,"splice",t)},toReversed(){return V(this).toReversed()},toSorted(t){return V(this).toSorted(t)},toSpliced(...t){return V(this).toSpliced(...t)},unshift(...t){return G(this,"unshift",t)},values(){return $(this,"values",t=>U(this,t))}};function $(t,e,n){const r=F(t),s=r[e]();return r===t||Tt(t)||(s._next=s.next,s.next=()=>{const t=s._next();return t.done||(t.value=n(t.value)),t}),s}const B=Array.prototype;function q(t,e,n,r,s,i){const o=F(t),a=o!==t&&!Tt(t),c=o[e];if(c!==B[e]){const e=c.apply(t,i);return a?At(e):e}let u=n;o!==t&&(a?u=function(e,r){return n.call(this,U(t,e),r,t)}:n.length>2&&(u=function(e,r){return n.call(this,e,r,t)}));const l=c.call(o,u,r);return a&&s?s(l):l}function z(t,e,n,r){const s=F(t),i=s!==t&&!Tt(t);let o=n,a=!1;s!==t&&(i?(a=0===r.length,o=function(e,r,s){return a&&(a=!1,e=U(t,e)),n.call(this,e,U(t,r),s,t)}):n.length>3&&(o=function(e,r,s){return n.call(this,e,r,s,t)}));const c=s[e](o,...r);return a?U(t,c):c}function K(t,e,n){const r=Ct(t);L(r,"iterate",M);const s=r[e](...n);return-1!==s&&!1!==s||!St(n[0])?s:(n[0]=Ct(n[0]),r[e](...n))}function G(t,e,n=[]){S(),p();const r=Ct(t)[e].apply(t,n);return g(),C(),r}const H=(0,r.pD)("__proto__,__v_isRef,__isVue"),W=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>"arguments"!==t&&"caller"!==t).map(t=>Symbol[t]).filter(r.Bm));function Q(t){(0,r.Bm)(t)||(t=String(t));const e=Ct(this);return L(e,"has",t),e.hasOwnProperty(t)}class X{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if("__v_skip"===e)return t["__v_skip"];const s=this._isReadonly,i=this._isShallow;if("__v_isReactive"===e)return!s;if("__v_isReadonly"===e)return s;if("__v_isShallow"===e)return i;if("__v_raw"===e)return n===(s?i?pt:dt:i?ft:ht).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.cy)(t);if(!s){let t;if(o&&(t=j[e]))return t;if("hasOwnProperty"===e)return Q}const a=Reflect.get(t,e,Dt(t)?t:n);if((0,r.Bm)(e)?W.has(e):H(e))return a;if(s||L(t,"get",e),i)return a;if(Dt(a)){const t=o&&(0,r.yI)(e)?a:a.value;return s&&(0,r.Gv)(t)?wt(t):t}return(0,r.Gv)(a)?s?wt(a):yt(a):a}}class Y extends X{constructor(t=!1){super(!1,t)}set(t,e,n,s){let i=t[e];const o=(0,r.cy)(t)&&(0,r.yI)(e);if(!this._isShallow){const t=Et(i);if(Tt(n)||Et(n)||(i=Ct(i),n=Ct(n)),!o&&Dt(i)&&!Dt(n))return t||(i.value=n),!0}const a=o?Number(e)<t.length:(0,r.$3)(t,e),c=Reflect.set(t,e,n,Dt(t)?t:s);return t===Ct(s)&&(a?(0,r.$H)(n,i)&&P(t,"set",e,n,i):P(t,"add",e,n)),c}deleteProperty(t,e){const n=(0,r.$3)(t,e),s=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&P(t,"delete",e,void 0,s),i}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&W.has(e)||L(t,"has",e),n}ownKeys(t){return L(t,"iterate",(0,r.cy)(t)?"length":O),Reflect.ownKeys(t)}}class J extends X{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Z=new Y,tt=new J,et=new Y(!0),nt=t=>t,rt=t=>Reflect.getPrototypeOf(t);function st(t,e,n){return function(...s){const i=this["__v_raw"],o=Ct(i),a=(0,r.CE)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=i[t](...s),h=n?nt:e?xt:At;return!e&&L(o,"iterate",u?R:O),(0,r.X$)(Object.create(l),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}}})}}function it(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function ot(t,e){const n={get(n){const s=this["__v_raw"],i=Ct(s),o=Ct(n);t||((0,r.$H)(n,o)&&L(i,"get",n),L(i,"get",o));const{has:a}=rt(i),c=e?nt:t?xt:At;return a.call(i,n)?c(s.get(n)):a.call(i,o)?c(s.get(o)):void(s!==i&&s.get(n))},get size(){const e=this["__v_raw"];return!t&&L(Ct(e),"iterate",O),e.size},has(e){const n=this["__v_raw"],s=Ct(n),i=Ct(e);return t||((0,r.$H)(e,i)&&L(s,"has",e),L(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)},forEach(n,r){const s=this,i=s["__v_raw"],o=Ct(i),a=e?nt:t?xt:At;return!t&&L(o,"iterate",O),i.forEach((t,e)=>n.call(r,a(t),a(e),s))}};(0,r.X$)(n,t?{add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear")}:{add(t){const n=Ct(this),s=rt(n),i=Ct(t),o=e||Tt(t)||Et(t)?t:i,a=s.has.call(n,o)||(0,r.$H)(t,o)&&s.has.call(n,t)||(0,r.$H)(i,o)&&s.has.call(n,i);return a||(n.add(o),P(n,"add",o,o)),this},set(t,n){e||Tt(n)||Et(n)||(n=Ct(n));const s=Ct(this),{has:i,get:o}=rt(s);let a=i.call(s,t);a||(t=Ct(t),a=i.call(s,t));const c=o.call(s,t);return s.set(t,n),a?(0,r.$H)(n,c)&&P(s,"set",t,n,c):P(s,"add",t,n),this},delete(t){const e=Ct(this),{has:n,get:r}=rt(e);let s=n.call(e,t);s||(t=Ct(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&P(e,"delete",t,void 0,i),o},clear(){const t=Ct(this),e=0!==t.size,n=void 0,r=t.clear();return e&&P(t,"clear",void 0,void 0,n),r}});const s=["keys","values","entries",Symbol.iterator];return s.forEach(r=>{n[r]=st(r,t,e)}),n}function at(t,e){const n=ot(t,e);return(e,s,i)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get((0,r.$3)(n,s)&&s in e?n:e,s,i)}const ct={get:at(!1,!1)},ut={get:at(!1,!0)},lt={get:at(!0,!1)};const ht=new WeakMap,ft=new WeakMap,dt=new WeakMap,pt=new WeakMap;function gt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:gt((0,r.Zf)(t))}function yt(t){return Et(t)?t:bt(t,!1,Z,ct,ht)}function vt(t){return bt(t,!1,et,ut,ft)}function wt(t){return bt(t,!0,tt,lt,dt)}function bt(t,e,n,s,i){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=mt(t);if(0===o)return t;const a=i.get(t);if(a)return a;const c=new Proxy(t,2===o?s:n);return i.set(t,c),c}function _t(t){return Et(t)?_t(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Et(t){return!(!t||!t["__v_isReadonly"])}function Tt(t){return!(!t||!t["__v_isShallow"])}function St(t){return!!t&&!!t["__v_raw"]}function Ct(t){const e=t&&t["__v_raw"];return e?Ct(e):t}function It(t){return!(0,r.$3)(t,"__v_skip")&&Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const At=t=>(0,r.Gv)(t)?yt(t):t,xt=t=>(0,r.Gv)(t)?wt(t):t;function Dt(t){return!!t&&!0===t["__v_isRef"]}function kt(t){return Dt(t)?t.value:t}const Nt={get:(t,e,n)=>"__v_raw"===e?t:kt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Dt(s)&&!Dt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ot(t){return _t(t)?t:new Proxy(t,Nt)}class Rt{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new D(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=A-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||i===this))return d(this,!0),!0}get value(){const t=this.dep.track();return w(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Mt(t,e,n=!1){let s,i;(0,r.Tn)(t)?s=t:(s=t.get,i=t.set);const o=new Rt(s,i,n);return o}const Lt={},Pt=new WeakMap;let Vt;function Ft(t,e=!1,n=Vt){if(n){let e=Pt.get(n);e||Pt.set(n,e=[]),e.push(t)}else 0}function Ut(t,e,n=r.MZ){const{immediate:s,deep:i,once:o,scheduler:c,augmentJob:l,call:h}=n,f=t=>i?t:Tt(t)||!1===i||0===i?jt(t,1):jt(t);let d,p,g,m,y=!1,v=!1;if(Dt(t)?(p=()=>t.value,y=Tt(t)):_t(t)?(p=()=>f(t),y=!0):(0,r.cy)(t)?(v=!0,y=t.some(t=>_t(t)||Tt(t)),p=()=>t.map(t=>Dt(t)?t.value:_t(t)?f(t):(0,r.Tn)(t)?h?h(t,2):t():void 0)):p=(0,r.Tn)(t)?e?h?()=>h(t,2):t:()=>{if(g){S();try{g()}finally{C()}}const e=Vt;Vt=d;try{return h?h(t,3,[m]):t(m)}finally{Vt=e}}:r.tE,e&&i){const t=p,e=!0===i?1/0:i;p=()=>jt(t(),e)}const w=a(),b=()=>{d.stop(),w&&w.active&&(0,r.TF)(w.effects,d)};if(o&&e){const t=e;e=(...e)=>{t(...e),b()}}let _=v?new Array(t.length).fill(Lt):Lt;const E=t=>{if(1&d.flags&&(d.dirty||t))if(e){const t=d.run();if(i||y||(v?t.some((t,e)=>(0,r.$H)(t,_[e])):(0,r.$H)(t,_))){g&&g();const n=Vt;Vt=d;try{const n=[t,_===Lt?void 0:v&&_[0]===Lt?[]:_,m];_=t,h?h(e,3,n):e(...n)}finally{Vt=n}}}else d.run()};return l&&l(E),d=new u(p),d.scheduler=c?()=>c(E,!1):E,m=t=>Ft(t,!1,d),g=d.onStop=()=>{const t=Pt.get(d);if(t){if(h)h(t,4);else for(const e of t)e();Pt.delete(d)}},e?s?E(!0):_=d.run():c?c(E.bind(null,!0),!0):d.run(),b.pause=d.pause.bind(d),b.resume=d.resume.bind(d),b.stop=b,b}function jt(t,e=1/0,n){if(e<=0||!(0,r.Gv)(t)||t["__v_skip"])return t;if(n=n||new Map,(n.get(t)||0)>=e)return t;if(n.set(t,e),e--,Dt(t))jt(t.value,e,n);else if((0,r.cy)(t))for(let r=0;r<t.length;r++)jt(t[r],e,n);else if((0,r.vM)(t)||(0,r.CE)(t))t.forEach(t=>{jt(t,e,n)});else if((0,r.Qd)(t)){for(const r in t)jt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&jt(t[r],e,n)}return t}},641:function(t,e,n){n.d(e,{$u:function(){return gt},CE:function(){return Qe},Df:function(){return Q},FK:function(){return Fe},Gy:function(){return q},K9:function(){return Ie},Lk:function(){return en},MZ:function(){return W},OW:function(){return H},Q3:function(){return cn},QP:function(){return K},bF:function(){return nn},dY:function(){return m},eW:function(){return an},nI:function(){return vn},pI:function(){return Tt},qL:function(){return o},uX:function(){return ze}});var r=n(953),s=n(33);function i(t,e,n,r){try{return r?t(...r):t()}catch(s){a(s,e,n)}}function o(t,e,n,r){if((0,s.Tn)(t)){const o=i(t,e,n,r);return o&&(0,s.yL)(o)&&o.catch(t=>{a(t,e,n)}),o}if((0,s.cy)(t)){const s=[];for(let i=0;i<t.length;i++)s.push(o(t[i],e,n,r));return s}}function a(t,e,n,o=!0){const a=e?e.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||s.MZ;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(s){const e=s.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;s=s.parent}if(u)return(0,r.C4)(),i(u,null,10,[t,o,a]),void(0,r.bl)()}c(t,n,a,o,l)}function c(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const u=[];let l=-1;const h=[];let f=null,d=0;const p=Promise.resolve();let g=null;function m(t){const e=g||p;return t?e.then(this?t.bind(this):t):e}function y(t){let e=l+1,n=u.length;while(e<n){const r=e+n>>>1,s=u[r],i=T(s);i<t||i===t&&2&s.flags?e=r+1:n=r}return e}function v(t){if(!(1&t.flags)){const e=T(t),n=u[u.length-1];!n||!(2&t.flags)&&e>=T(n)?u.push(t):u.splice(y(e),0,t),t.flags|=1,w()}}function w(){g||(g=p.then(S))}function b(t){(0,s.cy)(t)?h.push(...t):f&&-1===t.id?f.splice(d+1,0,t):1&t.flags||(h.push(t),t.flags|=1),w()}function _(t,e,n=l+1){for(0;n<u.length;n++){const e=u[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,u.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function E(t){if(h.length){const t=[...new Set(h)].sort((t,e)=>T(t)-T(e));if(h.length=0,f)return void f.push(...t);for(f=t,d=0;d<f.length;d++){const t=f[d];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}f=null,d=0}}const T=t=>null==t.id?2&t.flags?-1:1/0:t.id;function S(t){s.tE;try{for(l=0;l<u.length;l++){const t=u[l];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),i(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;l<u.length;l++){const t=u[l];t&&(t.flags&=-2)}l=-1,u.length=0,E(t),g=null,(u.length||h.length)&&S(t)}}let C=!1;let I=null,A=null;function x(t){const e=I;return I=t,A=t&&t.type.__scopeId||null,e}function D(t,e=I,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&He(-1);const s=x(e);let i;try{i=t(...n)}finally{x(s),r._d&&He(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function k(t,e,n,s){const i=t.dirs,a=e&&e.dirs;for(let c=0;c<i.length;c++){const u=i[c];a&&(u.oldValue=a[c].value);let l=u.dir[s];l&&((0,r.C4)(),o(l,n,8,[t.el,u,t,e]),(0,r.bl)())}}function N(t,e){if(yn){let n=yn.provides;const r=yn.parent&&yn.parent.provides;r===n&&(n=yn.provides=Object.create(r)),n[t]=e}}function O(t,e,n=!1){const r=vn();if(r||Ht){let i=Ht?Ht._context.provides:r?null==r.parent||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&(0,s.Tn)(e)?e.call(r&&r.proxy):e}else 0}const R=Symbol.for("v-scx"),M=()=>{{const t=O(R);return t}};function L(t,e,n){return P(t,e,n)}function P(t,e,n=s.MZ){const{immediate:i,deep:a,flush:c,once:u}=n;const l=(0,s.X$)({},n);const h=e&&i||!e&&"post"!==c;let f;if(In)if("sync"===c){const t=M();f=t.__watcherHandles||(t.__watcherHandles=[])}else if(!h){const t=()=>{};return t.stop=s.tE,t.resume=s.tE,t.pause=s.tE,t}const d=yn;l.call=(t,e,n)=>o(t,d,e,n);let p=!1;"post"===c?l.scheduler=t=>{Ce(t,d&&d.suspense)}:"sync"!==c&&(p=!0,l.scheduler=(t,e)=>{e?t():v(t)}),l.augmentJob=t=>{e&&(t.flags|=4),p&&(t.flags|=2,d&&(t.id=d.uid,t.i=d))};const g=(0,r.wB)(t,e,l);return In&&(f?f.push(g):h&&g()),g}function V(t,e,n){const r=this.proxy,i=(0,s.Kg)(t)?t.includes(".")?F(r,t):()=>r[t]:t.bind(r,r);let o;(0,s.Tn)(e)?o=e:(o=e.handler,n=e);const a=_n(this),c=P(i,o.bind(r),n);return a(),c}function F(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}const U=Symbol("_vte"),j=t=>t.__isTeleport;const $=Symbol("_leaveCb"),B=Symbol("_enterCb");function q(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dt(()=>{t.isMounted=!0}),mt(()=>{t.isUnmounting=!0}),t}const z=[Function,Array],K={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:z,onEnter:z,onAfterEnter:z,onEnterCancelled:z,onBeforeLeave:z,onLeave:z,onAfterLeave:z,onLeaveCancelled:z,onBeforeAppear:z,onAppear:z,onAfterAppear:z,onAppearCancelled:z};function G(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function H(t,e,n,r,i){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:w,onAfterAppear:b,onAppearCancelled:_}=e,E=String(t.key),T=G(n,t),S=(t,e)=>{t&&o(t,r,9,e)},I=(t,e)=>{const n=e[1];S(t,e),(0,s.cy)(t)?t.every(t=>t.length<=1)&&n():t.length<=1&&n()},A={mode:c,persisted:u,beforeEnter(e){let r=l;if(!n.isMounted){if(!a)return;r=v||l}e[$]&&e[$](!0);const s=T[E];s&&Je(t,s)&&s.el[$]&&s.el[$](),S(r,[e])},enter(e){if(!C&&T[E]===t)return;let r=h,s=f,i=d;if(!n.isMounted){if(!a)return;r=w||h,s=b||f,i=_||d}let o=!1;e[B]=t=>{o||(o=!0,S(t?i:s,[e]),A.delayedLeave&&A.delayedLeave(),e[B]=void 0)};const c=e[B].bind(null,!1);r?I(r,[e,c]):c()},leave(e,r){const s=String(t.key);if(e[B]&&e[B](!0),n.isUnmounting)return r();S(p,[e]);let i=!1;e[$]=n=>{i||(i=!0,r(),S(n?y:m,[e]),e[$]=void 0,T[s]===t&&delete T[s])};const o=e[$].bind(null,!1);T[s]=t,g?I(g,[e,o]):o()},clone(t){const s=H(t,e,n,r,i);return i&&i(s),s}};return A}function W(t,e){6&t.shapeFlag&&t.component?(t.transition=e,W(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Q(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===Fe?(128&o.patchFlag&&s++,r=r.concat(Q(o.children,e,a))):(e||o.type!==je)&&r.push(null!=a?on(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function X(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Y(t,e){let n;return!(!(n=Object.getOwnPropertyDescriptor(t,e))||n.configurable)}const J=new WeakMap;function Z(t,e,n,o,a=!1){if((0,s.cy)(t))return void t.forEach((t,r)=>Z(t,e&&((0,s.cy)(e)?e[r]:e),n,o,a));if(et(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&Z(t,e,n,o.component.subTree));const c=4&o.shapeFlag?Rn(o.component):o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===s.MZ?l.refs={}:l.refs,p=l.setupState,g=(0,r.ux)(p),m=p===s.MZ?s.NO:t=>!Y(d,t)&&(0,s.$3)(g,t),y=(t,e)=>!e||!Y(d,e);if(null!=f&&f!==h)if(tt(e),(0,s.Kg)(f))d[f]=null,m(f)&&(p[f]=null);else if((0,r.i9)(f)){const t=e;y(f,t.k)&&(f.value=null),t.k&&(d[t.k]=null)}if((0,s.Tn)(h))i(h,l,12,[u,d]);else{const e=(0,s.Kg)(h),i=(0,r.i9)(h);if(e||i){const r=()=>{if(t.f){const n=e?m(h)?p[h]:d[h]:y(h)||!t.k?h.value:d[t.k];if(a)(0,s.cy)(n)&&(0,s.TF)(n,c);else if((0,s.cy)(n))n.includes(c)||n.push(c);else if(e)d[h]=[c],m(h)&&(p[h]=d[h]);else{const e=[c];y(h,t.k)&&(h.value=e),t.k&&(d[t.k]=e)}}else e?(d[h]=u,m(h)&&(p[h]=u)):i&&(y(h,t.k)&&(h.value=u),t.k&&(d[t.k]=u))};if(u){const e=()=>{r(),J.delete(t)};e.id=-1,J.set(t,e),Ce(e,n)}else tt(t),r()}else 0}}function tt(t){const e=J.get(t);e&&(e.flags|=8,J.delete(t))}(0,s.We)().requestIdleCallback,(0,s.We)().cancelIdleCallback;const et=t=>!!t.type.__asyncLoader;const nt=t=>t.type.__isKeepAlive;RegExp,RegExp;function rt(t,e){return(0,s.cy)(t)?t.some(t=>rt(t,e)):(0,s.Kg)(t)?t.split(",").includes(e):!!(0,s.gd)(t)&&(t.lastIndex=0,t.test(e))}function st(t,e){ot(t,"a",e)}function it(t,e){ot(t,"da",e)}function ot(t,e,n=yn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(lt(e,r,n),n){let t=n.parent;while(t&&t.parent)nt(t.parent.vnode)&&at(r,e,n,t),t=t.parent}}function at(t,e,n,r){const i=lt(e,t,r,!0);yt(()=>{(0,s.TF)(r[e],i)},n)}function ct(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ut(t){return 128&t.shapeFlag?t.ssContent:t}function lt(t,e,n=yn,s=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...s)=>{(0,r.C4)();const i=_n(n),a=o(e,n,t,s);return i(),(0,r.bl)(),a});return s?i.unshift(a):i.push(a),a}}const ht=t=>(e,n=yn)=>{In&&"sp"!==t||lt(t,(...t)=>e(...t),n)},ft=ht("bm"),dt=ht("m"),pt=ht("bu"),gt=ht("u"),mt=ht("bum"),yt=ht("um"),vt=ht("sp"),wt=ht("rtg"),bt=ht("rtc");function _t(t,e=yn){lt("ec",t,e)}const Et=Symbol.for("v-ndc");function Tt(t,e,n,i){let o;const a=n&&n[i],c=(0,s.cy)(t);if(c||(0,s.Kg)(t)){const n=c&&(0,r.g8)(t);let s=!1,i=!1;n&&(s=!(0,r.fE)(t),i=(0,r.Tm)(t),t=(0,r.qA)(t)),o=new Array(t.length);for(let c=0,u=t.length;c<u;c++)o[c]=e(s?i?(0,r.a1)((0,r.lJ)(t[c])):(0,r.lJ)(t[c]):t[c],c,void 0,a&&a[c])}else if("number"===typeof t){o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,a&&a[n])}else if((0,s.Gv)(t))if(t[Symbol.iterator])o=Array.from(t,(t,n)=>e(t,n,void 0,a&&a[n]));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];o[r]=e(t[s],s,r,a&&a[r])}}else o=[];return n&&(n[i]=o),o}const St=t=>t?Tn(t)?Rn(t):St(t.parent):null,Ct=(0,s.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>St(t.parent),$root:t=>St(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Mt(t),$forceUpdate:t=>t.f||(t.f=()=>{v(t.update)}),$nextTick:t=>t.n||(t.n=m.bind(t.proxy)),$watch:t=>V.bind(t)}),It=(t,e)=>t!==s.MZ&&!t.__isScriptSetup&&(0,s.$3)(t,e),At={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:i,data:o,props:a,accessCache:c,type:u,appContext:l}=t;if("$"!==e[0]){const t=c[e];if(void 0!==t)switch(t){case 1:return i[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(It(i,e))return c[e]=1,i[e];if(o!==s.MZ&&(0,s.$3)(o,e))return c[e]=2,o[e];if((0,s.$3)(a,e))return c[e]=3,a[e];if(n!==s.MZ&&(0,s.$3)(n,e))return c[e]=4,n[e];Dt&&(c[e]=0)}}const h=Ct[e];let f,d;return h?("$attrs"===e&&(0,r.u4)(t.attrs,"get",""),h(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==s.MZ&&(0,s.$3)(n,e)?(c[e]=4,n[e]):(d=l.config.globalProperties,(0,s.$3)(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return It(i,e)?(i[e]=n,!0):r!==s.MZ&&(0,s.$3)(r,e)?(r[e]=n,!0):!(0,s.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,props:o,type:a}},c){let u;return!!(n[c]||t!==s.MZ&&"$"!==c[0]&&(0,s.$3)(t,c)||It(e,c)||(0,s.$3)(o,c)||(0,s.$3)(r,c)||(0,s.$3)(Ct,c)||(0,s.$3)(i.config.globalProperties,c)||(u=a.__cssModules)&&u[c])},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,s.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xt(t){return(0,s.cy)(t)?t.reduce((t,e)=>(t[e]=null,t),{}):t}let Dt=!0;function kt(t){const e=Mt(t),n=t.proxy,i=t.ctx;Dt=!1,e.beforeCreate&&Ot(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:E,render:T,renderTracked:S,renderTriggered:C,errorCaptured:I,serverPrefetch:A,expose:x,inheritAttrs:D,components:k,directives:O,filters:R}=e,M=null;if(h&&Nt(h,i,M),c)for(const r in c){const t=c[r];(0,s.Tn)(t)&&(i[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,s.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(Dt=!0,a)for(const r in a){const t=a[r],e=(0,s.Tn)(t)?t.bind(n,n):(0,s.Tn)(t.get)?t.get.bind(n,n):s.tE;0;const o=!(0,s.Tn)(t)&&(0,s.Tn)(t.set)?t.set.bind(n):s.tE,c=Pn({get:e,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Rt(u[r],i,n,r);if(l){const t=(0,s.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach(e=>{N(e,t[e])})}function L(t,e){(0,s.cy)(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(f&&Ot(f,t,"c"),L(ft,d),L(dt,p),L(pt,g),L(gt,m),L(st,y),L(it,v),L(_t,I),L(bt,S),L(wt,C),L(mt,b),L(yt,E),L(vt,A),(0,s.cy)(x))if(x.length){const e=t.exposed||(t.exposed={});x.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e,enumerable:!0})})}else t.exposed||(t.exposed={});T&&t.render===s.tE&&(t.render=T),null!=D&&(t.inheritAttrs=D),k&&(t.components=k),O&&(t.directives=O),A&&X(t)}function Nt(t,e,n=s.tE){(0,s.cy)(t)&&(t=Ut(t));for(const i in t){const n=t[i];let o;o=(0,s.Gv)(n)?"default"in n?O(n.from||i,n.default,!0):O(n.from||i):O(n),(0,r.i9)(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[i]=o}}function Ot(t,e,n){o((0,s.cy)(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rt(t,e,n,r){let i=r.includes(".")?F(n,r):()=>n[r];if((0,s.Kg)(t)){const n=e[t];(0,s.Tn)(n)&&L(i,n)}else if((0,s.Tn)(t))L(i,t.bind(n));else if((0,s.Gv)(t))if((0,s.cy)(t))t.forEach(t=>Rt(t,e,n,r));else{const r=(0,s.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,s.Tn)(r)&&L(i,r,t)}else 0}function Mt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:i.length||n||r?(u={},i.length&&i.forEach(t=>Lt(u,t,a,!0)),Lt(u,e,a)):u=e,(0,s.Gv)(e)&&o.set(e,u),u}function Lt(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Lt(t,i,n,!0),s&&s.forEach(e=>Lt(t,e,n,!0));for(const o in e)if(r&&"expose"===o);else{const r=Pt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Pt={data:Vt,props:Bt,emits:Bt,methods:$t,computed:$t,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:$t,directives:$t,watch:qt,provide:Vt,inject:Ft};function Vt(t,e){return e?t?function(){return(0,s.X$)((0,s.Tn)(t)?t.call(this,this):t,(0,s.Tn)(e)?e.call(this,this):e)}:e:t}function Ft(t,e){return $t(Ut(t),Ut(e))}function Ut(t){if((0,s.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function jt(t,e){return t?[...new Set([].concat(t,e))]:e}function $t(t,e){return t?(0,s.X$)(Object.create(null),t,e):e}function Bt(t,e){return t?(0,s.cy)(t)&&(0,s.cy)(e)?[...new Set([...t,...e])]:(0,s.X$)(Object.create(null),xt(t),xt(null!=e?e:{})):e}function qt(t,e){if(!t)return e;if(!e)return t;const n=(0,s.X$)(Object.create(null),t);for(const r in e)n[r]=jt(t[r],e[r]);return n}function zt(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kt=0;function Gt(t,e){return function(n,r=null){(0,s.Tn)(n)||(n=(0,s.X$)({},n)),null==r||(0,s.Gv)(r)||(r=null);const i=zt(),a=new WeakSet,c=[];let u=!1;const l=i.app={_uid:Kt++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Vn,get config(){return i.config},set config(t){0},use(t,...e){return a.has(t)||(t&&(0,s.Tn)(t.install)?(a.add(t),t.install(l,...e)):(0,s.Tn)(t)&&(a.add(t),t(l,...e))),l},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),l},component(t,e){return e?(i.components[t]=e,l):i.components[t]},directive(t,e){return e?(i.directives[t]=e,l):i.directives[t]},mount(s,o,a){if(!u){0;const c=l._ceVNode||nn(n,r);return c.appContext=i,!0===a?a="svg":!1===a&&(a=void 0),o&&e?e(c,s):t(c,s,a),u=!0,l._container=s,s.__vue_app__=l,Rn(c.component)}},onUnmount(t){c.push(t)},unmount(){u&&(o(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(t,e){return i.provides[t]=e,l},runWithContext(t){const e=Ht;Ht=l;try{return t()}finally{Ht=e}}};return l}}let Ht=null;const Wt=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,s.PT)(e)}Modifiers`]||t[`${(0,s.Tg)(e)}Modifiers`];function Qt(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||s.MZ;let i=n;const a=e.startsWith("update:"),c=a&&Wt(r,e.slice(7));let u;c&&(c.trim&&(i=n.map(t=>(0,s.Kg)(t)?t.trim():t)),c.number&&(i=n.map(s.bB)));let l=r[u=(0,s.rU)(e)]||r[u=(0,s.rU)((0,s.PT)(e))];!l&&a&&(l=r[u=(0,s.rU)((0,s.Tg)(e))]),l&&o(l,t,6,i);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,i)}}const Xt=new WeakMap;function Yt(t,e,n=!1){const r=n?Xt:e.emitsCache,i=r.get(t);if(void 0!==i)return i;const o=t.emits;let a={},c=!1;if(!(0,s.Tn)(t)){const r=t=>{const n=Yt(t,e,!0);n&&(c=!0,(0,s.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,s.cy)(o)?o.forEach(t=>a[t]=null):(0,s.X$)(a,o),(0,s.Gv)(t)&&r.set(t,a),a):((0,s.Gv)(t)&&r.set(t,null),null)}function Jt(t,e){return!(!t||!(0,s.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,s.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,s.$3)(t,(0,s.Tg)(e))||(0,s.$3)(t,e))}function Zt(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[o],slots:c,attrs:u,emit:l,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t,v=x(t);let w,b;try{if(4&n.shapeFlag){const t=i||r,e=t;w=un(h.call(e,t,f,d,g,p,m)),b=u}else{const t=e;0,w=un(t.length>1?t(d,{attrs:u,slots:c,emit:l}):t(d,null)),b=e.props?u:te(u)}}catch(E){Be.length=0,a(E,t,1),w=nn(je)}let _=w;if(b&&!1!==y){const t=Object.keys(b),{shapeFlag:e}=_;t.length&&7&e&&(o&&t.some(s.CP)&&(b=ee(b,o)),_=on(_,b,!1,!0))}return n.dirs&&(_=on(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&W(_,n.transition),w=_,x(v),w}const te=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,s.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},ee=(t,e)=>{const n={};for(const r in t)(0,s.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function ne(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||re(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?re(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(se(o,r,n)&&!Jt(u,n))return!0}}return!1}function re(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(se(e,t,i)&&!Jt(n,i))return!0}return!1}function se(t,e,n){const r=t[n],i=e[n];return"style"===n&&(0,s.Gv)(r)&&(0,s.Gv)(i)?!(0,s.BX)(r,i):r!==i}function ie({vnode:t,parent:e,suspense:n},r){while(e){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===t&&(n.suspense.vnode.el=n.el=r,t=n),n!==t)break;(t=e.vnode).el=r,e=e.parent}n&&n.activeBranch===t&&(n.vnode.el=r)}const oe={},ae=()=>Object.create(oe),ce=t=>Object.getPrototypeOf(t)===oe;function ue(t,e,n,s=!1){const i={},o=ae();t.propsDefaults=Object.create(null),he(t,e,i,o);for(const r in t.propsOptions[0])r in i||(i[r]=void 0);n?t.props=s?i:(0,r.Gc)(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function le(t,e,n,i){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.ux)(o),[l]=t.propsOptions;let h=!1;if(!(i||c>0)||16&c){let r;he(t,e,o,a)&&(h=!0);for(const i in u)e&&((0,s.$3)(e,i)||(r=(0,s.Tg)(i))!==i&&(0,s.$3)(e,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(o[i]=fe(l,u,i,void 0,t,!0)):delete o[i]);if(a!==u)for(const t in a)e&&(0,s.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(Jt(t.emitsOptions,i))continue;const c=e[i];if(l)if((0,s.$3)(a,i))c!==a[i]&&(a[i]=c,h=!0);else{const e=(0,s.PT)(i);o[e]=fe(l,u,e,c,t,!1)}else c!==a[i]&&(a[i]=c,h=!0)}}h&&(0,r.hZ)(t.attrs,"set","")}function he(t,e,n,i){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,s.SU)(r))continue;const l=e[r];let h;o&&(0,s.$3)(o,h=(0,s.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:Jt(t.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,u=!0)}if(a){const e=(0,r.ux)(n),i=c||s.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=fe(o,e,c,i[c],t,!(0,s.$3)(i,c))}}return u}function fe(t,e,n,r,i,o){const a=t[n];if(null!=a){const t=(0,s.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,s.Tn)(t)){const{propsDefaults:s}=i;if(n in s)r=s[n];else{const o=_n(i);r=s[n]=t.call(null,e),o()}}else r=t;i.ce&&i.ce._setProp(n,r)}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,s.Tg)(n)||(r=!0))}return r}const de=new WeakMap;function pe(t,e,n=!1){const r=n?de:e.propsCache,i=r.get(t);if(i)return i;const o=t.props,a={},c=[];let u=!1;if(!(0,s.Tn)(t)){const r=t=>{u=!0;const[n,r]=pe(t,e,!0);(0,s.X$)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,s.Gv)(t)&&r.set(t,s.Oj),s.Oj;if((0,s.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,s.PT)(o[h]);ge(t)&&(a[t]=s.MZ)}else if(o){0;for(const t in o){const e=(0,s.PT)(t);if(ge(e)){const n=o[t],r=a[e]=(0,s.cy)(n)||(0,s.Tn)(n)?{type:n}:(0,s.X$)({},n),i=r.type;let u=!1,l=!0;if((0,s.cy)(i))for(let t=0;t<i.length;++t){const e=i[t],n=(0,s.Tn)(e)&&e.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,s.Tn)(i)&&"Boolean"===i.name;r[0]=u,r[1]=l,(u||(0,s.$3)(r,"default"))&&c.push(e)}}}const l=[a,c];return(0,s.Gv)(t)&&r.set(t,l),l}function ge(t){return"$"!==t[0]&&!(0,s.SU)(t)}const me=t=>"_"===t||"_ctx"===t||"$stable"===t,ye=t=>(0,s.cy)(t)?t.map(un):[un(t)],ve=(t,e,n)=>{if(e._n)return e;const r=D((...t)=>ye(e(...t)),n);return r._c=!1,r},we=(t,e,n)=>{const r=t._ctx;for(const i in t){if(me(i))continue;const n=t[i];if((0,s.Tn)(n))e[i]=ve(i,n,r);else if(null!=n){0;const t=ye(n);e[i]=()=>t}}},be=(t,e)=>{const n=ye(e);t.slots.default=()=>n},_e=(t,e,n)=>{for(const r in e)!n&&me(r)||(t[r]=e[r])},Ee=(t,e,n)=>{const r=t.slots=ae();if(32&t.vnode.shapeFlag){const t=e._;t?(_e(r,e,n),n&&(0,s.yQ)(r,"_",t,!0)):we(e,r)}else e&&be(t,e)},Te=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,a=s.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:_e(i,e,n):(o=!e.$stable,we(e,i)),a=e}else e&&(be(t,e),a={default:1});if(o)for(const s in i)me(s)||null!=a[s]||delete i[s]};function Se(){}const Ce=Ve;function Ie(t){return Ae(t)}function Ae(t,e){Se();const n=(0,s.We)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=s.tE,insertStaticContent:m}=t,y=(t,e,n,r=null,s=null,i=null,o=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Je(t,e)&&(r=Y(t),G(t,s,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Ue:w(t,e,n,r);break;case je:b(t,e,n,r);break;case $e:null==t&&T(e,n,r,o);break;case Fe:M(t,e,n,r,s,i,o,a,c);break;default:1&h?I(t,e,n,r,s,i,o,a,c):6&h?L(t,e,n,r,s,i,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,s,i,o,a,c,rt)}null!=l&&s?Z(l,t&&t.ref,i,e||t,!e):null==l&&t&&null!=t.ref&&Z(t.ref,null,i,t,!0)},w=(t,e,n,r)=>{if(null==t)i(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?i(e.el=l(e.children||""),n,r):e.el=t.el},T=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},S=({el:t,anchor:e},n,r)=>{let s;while(t&&t!==e)s=p(t),i(t,n,r),t=s;i(e,n,r)},C=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},I=(t,e,n,r,s,i,o,a,c)=>{if("svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t)A(e,n,r,s,i,o,a,c);else{const n=t.el&&t.el._isVueCE?t.el:null;try{n&&n._beginPatch(),N(t,e,s,i,o,a,c)}finally{n&&n._endPatch()}}},A=(t,e,n,r,o,u,l,h)=>{let d,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=t;if(d=t.el=c(t.type,u,g&&g.is,g),8&m?f(d,t.children):16&m&&D(t.children,d,null,r,o,xe(t,u),l,h),v&&k(t,null,r,"created"),x(d,t,t.scopeId,l,r),g){for(const t in g)"value"===t||(0,s.SU)(t)||a(d,t,null,g[t],u,r);"value"in g&&a(d,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&dn(p,r,t)}v&&k(t,null,r,"beforeMount");const w=ke(o,y);if(w&&y.beforeEnter(d),i(d,e,n),(p=g&&g.onVnodeMounted)||w||v){Ce(()=>{try{p&&dn(p,r,t),w&&y.enter(d),v&&k(t,null,r,"mounted")}finally{0}},o)}},x=(t,e,n,r,s)=>{if(n&&g(t,n),r)for(let i=0;i<r.length;i++)g(t,r[i]);if(s){let n=s.subTree;if(e===n||Pe(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=s.vnode;x(t,e,e.scopeId,e.slotScopeIds,s.parent)}}},D=(t,e,n,r,s,i,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?ln(t[u]):un(t[u]);y(null,c,e,n,r,s,i,o,a)}},N=(t,e,n,r,i,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||s.MZ,g=e.props||s.MZ;let m;if(n&&De(n,!1),(m=g.onVnodeBeforeUpdate)&&dn(m,n,e,t),d&&k(e,t,n,"beforeUpdate"),n&&De(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&f(u,""),h?O(t.dynamicChildren,h,u,n,r,xe(e,i),o):c||B(t,e,u,null,n,r,xe(e,i),o,!1),l>0){if(16&l)R(u,p,g,n,i);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,i),4&l&&a(u,"style",p.style,g.style,i),8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const r=t[e],s=p[r],o=g[r];o===s&&"value"!==r||a(u,r,s,o,i,n)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||R(u,p,g,n,i);((m=g.onVnodeUpdated)||d)&&Ce(()=>{m&&dn(m,n,e,t),d&&k(e,t,n,"updated")},r)},O=(t,e,n,r,s,i,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Fe||!Je(c,u)||198&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,s,i,o,!0)}},R=(t,e,n,r,i)=>{if(e!==n){if(e!==s.MZ)for(const o in e)(0,s.SU)(o)||o in n||a(t,o,e[o],null,i,r);for(const o in n){if((0,s.SU)(o))continue;const c=n[o],u=e[o];c!==u&&"value"!==o&&a(t,o,u,c,i,r)}"value"in n&&a(t,"value",e.value,n.value,i)}},M=(t,e,n,r,s,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(i(h,n,r),i(f,n,r),D(e.children||[],n,f,s,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren&&t.dynamicChildren.length===p.length?(O(t.dynamicChildren,p,n,s,o,a,c),(null!=e.key||s&&e===s.subTree)&&Ne(t,e,!0)):B(t,e,n,f,s,o,a,c,l)},L=(t,e,n,r,s,i,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?s.ctx.activate(e,n,r,o,c):P(e,n,r,s,i,o,c):V(t,e,c)},P=(t,e,n,r,s,i,o)=>{const a=t.component=mn(t,r,s);if(nt(t)&&(a.ctx.renderer=rt),An(a,!1,o),a.asyncDep){if(s&&s.registerDep(a,F,o),!t.el){const r=a.subTree=nn(je);b(null,r,e,n),t.placeholder=r.el}}else F(a,t,e,n,s,i,o)},V=(t,e,n)=>{const r=e.component=t.component;if(ne(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,e,n);r.next=e,r.update()}else e.el=t.el,r.vnode=e},F=(t,e,n,i,o,a,c)=>{const u=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:i,vnode:u}=t;{const n=Re(t);if(n)return e&&(e.el=u.el,j(t,e,c)),void n.asyncDep.then(()=>{Ce(()=>{t.isUnmounted||h()},o)})}let l,f=e;0,De(t,!1),e?(e.el=u.el,j(t,e,c)):e=u,n&&(0,s.DY)(n),(l=e.props&&e.props.onVnodeBeforeUpdate)&&dn(l,i,e,u),De(t,!0);const p=Zt(t);0;const g=t.subTree;t.subTree=p,y(g,p,d(g.el),Y(g),t,o,a),e.el=p.el,null===f&&ie(t,p.el),r&&Ce(r,o),(l=e.props&&e.props.onVnodeUpdated)&&Ce(()=>dn(l,i,e,u),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f,root:d,type:p}=t,g=et(e);if(De(t,!1),l&&(0,s.DY)(l),!g&&(r=u&&u.onVnodeBeforeMount)&&dn(r,f,e),De(t,!0),c&&it){const e=()=>{t.subTree=Zt(t),it(c,t.subTree,t,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,t,e):e()}else{d.ce&&d.ce._hasShadowRoot()&&d.ce._injectChildStyle(p,t.parent?t.parent.type:void 0);const r=t.subTree=Zt(t);0,y(null,r,n,i,t,o,a),e.el=r.el}if(h&&Ce(h,o),!g&&(r=u&&u.onVnodeMounted)){const t=e;Ce(()=>dn(r,f,t),o)}(256&e.shapeFlag||f&&et(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&Ce(t.a,o),t.isMounted=!0,e=n=i=null}};t.scope.on();const l=t.effect=new r.X2(u);t.scope.off();const h=t.update=l.run.bind(l),f=t.job=l.runIfDirty.bind(l);f.i=t,f.id=t.uid,l.scheduler=()=>v(f),De(t,!0),h()},j=(t,e,n)=>{e.component=t;const s=t.vnode.props;t.vnode=e,t.next=null,le(t,e.props,s,n),Te(t,e.children,n),(0,r.C4)(),_(t),(0,r.bl)()},B=(t,e,n,r,s,i,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void z(u,h,n,r,s,i,o,a,c);if(256&d)return void q(u,h,n,r,s,i,o,a,c)}8&p?(16&l&&X(u,s,i),h!==u&&f(n,h)):16&l?16&p?z(u,h,n,r,s,i,o,a,c):X(u,s,i,!0):(8&l&&f(n,""),16&p&&D(h,n,r,s,i,o,a,c))},q=(t,e,n,r,i,o,a,c,u)=>{t=t||s.Oj,e=e||s.Oj;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?ln(e[d]):un(e[d]);y(t[d],r,n,null,i,o,a,c,u)}l>h?X(t,i,o,!0,!1,f):D(e,n,r,i,o,a,c,u,f)},z=(t,e,n,r,i,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],s=e[l]=u?ln(e[l]):un(e[l]);if(!Je(r,s))break;y(r,s,n,null,i,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],s=e[d]=u?ln(e[d]):un(e[d]);if(!Je(r,s))break;y(r,s,n,null,i,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,s=t<h?e[t].el:r;while(l<=d)y(null,e[l]=u?ln(e[l]):un(e[l]),n,s,i,o,a,c,u),l++}}else if(l>d)while(l<=f)G(t[l],i,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?ln(e[l]):un(e[l]);null!=t.key&&m.set(t.key,l)}let v,w=0;const b=d-g+1;let _=!1,E=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(w>=b){G(r,i,o,!0);continue}let s;if(null!=r.key)s=m.get(r.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&Je(r,e[v])){s=v;break}void 0===s?G(r,i,o,!0):(T[s-g]=l+1,s>=E?E=s:_=!0,y(r,e[s],n,null,i,o,a,c,u),w++)}const S=_?Oe(T):s.Oj;for(v=S.length-1,l=b-1;l>=0;l--){const t=g+l,s=e[t],f=e[t+1],d=t+1<h?f.el||Le(f):r;0===T[l]?y(null,s,n,d,i,o,a,c,u):_&&(v<0||l!==S[v]?K(s,n,d,2):v--)}}},K=(t,e,n,r,s=null)=>{const{el:a,type:c,transition:u,children:l,shapeFlag:h}=t;if(6&h)return void K(t.component.subTree,e,n,r);if(128&h)return void t.suspense.move(e,n,r);if(64&h)return void c.move(t,e,n,rt);if(c===Fe){i(a,e,n);for(let t=0;t<l.length;t++)K(l[t],e,n,r);return void i(t.anchor,e,n)}if(c===$e)return void S(t,e,n);const f=2!==r&&1&h&&u;if(f)if(0===r)u.beforeEnter(a),i(a,e,n),Ce(()=>u.enter(a),s);else{const{leave:r,delayLeave:s,afterLeave:c}=u,l=()=>{t.ctx.isUnmounted?o(a):i(a,e,n)},h=()=>{a._isLeaving&&a[$](!0),r(a,()=>{l(),c&&c()})};s?s(a,l,h):h()}else i(a,e,n)},G=(t,e,n,s=!1,i=!1)=>{const{type:o,props:a,ref:c,children:u,dynamicChildren:l,shapeFlag:h,patchFlag:f,dirs:d,cacheIndex:p,memo:g}=t;if(-2===f&&(i=!1),null!=c&&((0,r.C4)(),Z(c,null,n,t,!0),(0,r.bl)()),null!=p&&(e.renderCache[p]=void 0),256&h)return void e.ctx.deactivate(t);const m=1&h&&d,y=!et(t);let v;if(y&&(v=a&&a.onVnodeBeforeUnmount)&&dn(v,e,t),6&h)Q(t.component,n,s);else{if(128&h)return void t.suspense.unmount(n,s);m&&k(t,null,e,"beforeUnmount"),64&h?t.type.remove(t,e,n,rt,s):l&&!l.hasOnce&&(o!==Fe||f>0&&64&f)?X(l,e,n,!1,!0):(o===Fe&&384&f||!i&&16&h)&&X(u,e,n),s&&H(t)}const w=null!=g&&null==p;(y&&(v=a&&a.onVnodeUnmounted)||m||w)&&Ce(()=>{v&&dn(v,e,t),m&&k(t,null,e,"unmounted"),w&&(t.el=null)},n)},H=t=>{const{type:e,el:n,anchor:r,transition:s}=t;if(e===Fe)return void W(n,r);if(e===$e)return void C(t);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:r}=s,o=()=>e(n,i);r?r(t.el,i,o):o()}else i()},W=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Q=(t,e,n)=>{const{bum:r,scope:i,job:o,subTree:a,um:c,m:u,a:l}=t;Me(u),Me(l),r&&(0,s.DY)(r),i.stop(),o&&(o.flags|=8,G(a,t,e,n)),c&&Ce(c,e),Ce(()=>{t.isUnmounted=!0},e)},X=(t,e,n,r=!1,s=!1,i=0)=>{for(let o=i;o<t.length;o++)G(t[o],e,n,r,s)},Y=t=>{if(6&t.shapeFlag)return Y(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[U];return n?p(n):e};let J=!1;const tt=(t,e,n)=>{let r;null==t?e._vnode&&(G(e._vnode,null,null,!0),r=e._vnode.component):y(e._vnode||null,t,e,null,null,null,n),e._vnode=t,J||(J=!0,_(r),E(),J=!1)},rt={p:y,um:G,m:K,r:H,mt:P,mc:D,pc:B,pbc:O,n:Y,o:t};let st,it;return e&&([st,it]=e(rt)),{render:tt,hydrate:st,createApp:Gt(tt,st)}}function xe({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function De({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ke(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ne(t,e,n=!1){const r=t.children,i=e.children;if((0,s.cy)(r)&&(0,s.cy)(i))for(let s=0;s<r.length;s++){const t=r[s];let e=i[s];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[s]=ln(i[s]),e.el=t.el),n||-2===e.patchFlag||Ne(t,e)),e.type===Ue&&(-1===e.patchFlag&&(e=i[s]=ln(e)),e.el=t.el),e.type!==je||e.el||(e.el=t.el)}}function Oe(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=e[o];return n}function Re(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Re(e)}function Me(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Le(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Le(e.subTree):null}const Pe=t=>t.__isSuspense;function Ve(t,e){e&&e.pendingBranch?(0,s.cy)(t)?e.effects.push(...t):e.effects.push(t):b(t)}const Fe=Symbol.for("v-fgt"),Ue=Symbol.for("v-txt"),je=Symbol.for("v-cmt"),$e=Symbol.for("v-stc"),Be=[];let qe=null;function ze(t=!1){Be.push(qe=t?null:[])}function Ke(){Be.pop(),qe=Be[Be.length-1]||null}let Ge=1;function He(t,e=!1){Ge+=t,t<0&&qe&&e&&(qe.hasOnce=!0)}function We(t){return t.dynamicChildren=Ge>0?qe||s.Oj:null,Ke(),Ge>0&&qe&&qe.push(t),t}function Qe(t,e,n,r,s,i){return We(en(t,e,n,r,s,i,!0))}function Xe(t,e,n,r,s){return We(nn(t,e,n,r,s,!0))}function Ye(t){return!!t&&!0===t.__v_isVNode}function Je(t,e){return t.type===e.type&&t.key===e.key}const Ze=({key:t})=>null!=t?t:null,tn=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,s.Kg)(t)||(0,r.i9)(t)||(0,s.Tn)(t)?{i:I,r:t,k:e,f:!!n}:t:null);function en(t,e=null,n=null,r=0,i=null,o=(t===Fe?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ze(e),ref:e&&tn(e),scopeId:A,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:I};return c?(hn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,s.Kg)(n)?8:16),Ge>0&&!a&&qe&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&qe.push(u),u}const nn=rn;function rn(t,e=null,n=null,i=0,o=null,a=!1){if(t&&t!==Et||(t=je),Ye(t)){const r=on(t,e,!0);return n&&hn(r,n),Ge>0&&!a&&qe&&(6&r.shapeFlag?qe[qe.indexOf(t)]=r:qe.push(r)),r.patchFlag=-2,r}if(Ln(t)&&(t=t.__vccOpts),e){e=sn(e);let{class:t,style:n}=e;t&&!(0,s.Kg)(t)&&(e.class=(0,s.C4)(t)),(0,s.Gv)(n)&&((0,r.ju)(n)&&!(0,s.cy)(n)&&(n=(0,s.X$)({},n)),e.style=(0,s.Tr)(n))}const c=(0,s.Kg)(t)?1:Pe(t)?128:j(t)?64:(0,s.Gv)(t)?4:(0,s.Tn)(t)?2:0;return en(t,e,n,i,o,c,a,!0)}function sn(t){return t?(0,r.ju)(t)||ce(t)?(0,s.X$)({},t):t:null}function on(t,e,n=!1,r=!1){const{props:i,ref:o,patchFlag:a,children:c,transition:u}=t,l=e?fn(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ze(l),ref:e&&e.ref?n&&o?(0,s.cy)(o)?o.concat(tn(e)):[o,tn(e)]:tn(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&on(t.ssContent),ssFallback:t.ssFallback&&on(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&W(h,u.clone(h)),h}function an(t=" ",e=0){return nn(Ue,null,t,e)}function cn(t="",e=!1){return e?(ze(),Xe(je,null,t)):nn(je,null,t)}function un(t){return null==t||"boolean"===typeof t?nn(je):(0,s.cy)(t)?nn(Fe,null,t.slice()):Ye(t)?ln(t):nn(Ue,null,String(t))}function ln(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:on(t)}function hn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,s.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),hn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||ce(e)?3===r&&I&&(1===I.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=I}}else(0,s.Tn)(e)?(e={default:e,_ctx:I},n=32):(e=String(e),64&r?(n=16,e=[an(e)]):n=8);t.children=e,t.shapeFlag|=n}function fn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,s.C4)([e.class,r.class]));else if("style"===t)e.style=(0,s.Tr)([e.style,r.style]);else if((0,s.Mp)(t)){const n=e[t],i=r[t];!i||n===i||(0,s.cy)(n)&&n.includes(i)?null!=i||null!=n||(0,s.CP)(t)||(e[t]=i):e[t]=n?[].concat(n,i):i}else""!==t&&(e[t]=r[t])}return e}function dn(t,e,n,r=null){o(t,e,7,[n,r])}const pn=zt();let gn=0;function mn(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||pn,a={uid:gn++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pe(i,o),emitsOptions:Yt(i,o),emit:null,emitted:null,propsDefaults:s.MZ,inheritAttrs:i.inheritAttrs,ctx:s.MZ,data:s.MZ,props:s.MZ,attrs:s.MZ,slots:s.MZ,refs:s.MZ,setupState:s.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Qt.bind(null,a),t.ce&&t.ce(a),a}let yn=null;const vn=()=>yn||I;let wn,bn;{const t=(0,s.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach(e=>e(t)):r[0](t)}};wn=e("__VUE_INSTANCE_SETTERS__",t=>yn=t),bn=e("__VUE_SSR_SETTERS__",t=>In=t)}const _n=t=>{const e=yn;return wn(t),t.scope.on(),()=>{t.scope.off(),wn(e)}},En=()=>{yn&&yn.scope.off(),wn(null)};function Tn(t){return 4&t.vnode.shapeFlag}let Sn,Cn,In=!1;function An(t,e=!1,n=!1){e&&bn(e);const{props:r,children:s}=t.vnode,i=Tn(t);ue(t,r,i,e),Ee(t,s,n||e);const o=i?xn(t,e):void 0;return e&&bn(!1),o}function xn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,At);const{setup:o}=n;if(o){(0,r.C4)();const n=t.setupContext=o.length>1?On(t):null,c=_n(t),u=i(o,t,0,[t.props,n]),l=(0,s.yL)(u);if((0,r.bl)(),c(),!l&&!t.sp||et(t)||X(t),l){if(u.then(En,En),e)return u.then(n=>{Dn(t,n,e)}).catch(e=>{a(e,t,0)});t.asyncDep=u}else Dn(t,u,e)}else kn(t,e)}function Dn(t,e,n){(0,s.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,s.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),kn(t,n)}function kn(t,e,n){const i=t.type;if(!t.render){if(!e&&Sn&&!i.render){const e=i.template||Mt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=(0,s.X$)((0,s.X$)({isCustomElement:n,delimiters:o},r),a);i.render=Sn(e,c)}}t.render=i.render||s.tE,Cn&&Cn(t)}{const e=_n(t);(0,r.C4)();try{kt(t)}finally{(0,r.bl)(),e()}}}const Nn={get(t,e){return(0,r.u4)(t,"get",""),t[e]}};function On(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,Nn),slots:t.slots,emit:t.emit,expose:e}}function Rn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in Ct?Ct[n](t):void 0},has(t,e){return e in t||e in Ct}})):t.proxy}function Mn(t,e=!0){return(0,s.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Ln(t){return(0,s.Tn)(t)&&"__vccOpts"in t}const Pn=(t,e)=>{const n=(0,r.EW)(t,e,In);return n};const Vn="3.5.32"},3751:function(t,e,n){n.d(e,{D$:function(){return G},Ef:function(){return X}});var r=n(641),s=(n(953),n(33));
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let i;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{i=o.createPolicy("vue",{createHTML:t=>t})}catch(Z){}const a=i?t=>i.createHTML(t):t=>t,c="http://www.w3.org/2000/svg",u="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,h=l&&l.createElement("template"),f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s="svg"===e?l.createElementNS(c,t):"mathml"===e?l.createElementNS(u,t):n?l.createElement(t,{is:n}):l.createElement(t);return"select"===t&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(e.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t);const s=h.content;if("svg"===r||"mathml"===r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},d=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function g(t,e,n){const r=t[d];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const m=Symbol("_vod"),y=Symbol("_vsh");const v=Symbol("");const w=/(?:^|;)\s*display\s*:/;function b(t,e,n){const r=t.style,i=(0,s.Kg)(n);let o=!1;if(n&&!i){if(e)if((0,s.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&E(r,e,"")}else for(const t in e)null==n[t]&&E(r,t,"");for(const t in n)"display"===t&&(o=!0),E(r,t,n[t])}else if(i){if(e!==n){const t=r[v];t&&(n+=";"+t),r.cssText=n,o=w.test(n)}}else e&&t.removeAttribute("style");m in t&&(t[m]=o?r.display:"",t[y]&&(r.display="none"))}const _=/\s*!important$/;function E(t,e,n){if((0,s.cy)(n))n.forEach(n=>E(t,e,n));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=C(t,e);_.test(n)?t.setProperty((0,s.Tg)(r),n.replace(_,""),"important"):t[r]=n}}const T=["Webkit","Moz","ms"],S={};function C(t,e){const n=S[e];if(n)return n;let r=(0,s.PT)(e);if("filter"!==r&&r in t)return S[e]=r;r=(0,s.ZH)(r);for(let s=0;s<T.length;s++){const n=T[s]+r;if(n in t)return S[e]=n}return e}const I="http://www.w3.org/1999/xlink";function A(t,e,n,r,i,o=(0,s.J$)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(I,e.slice(6,e.length)):t.setAttributeNS(I,e,n):null==n||o&&!(0,s.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,s.Bm)(n)?String(n):n)}function x(t,e,n,r,i){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?a(n):n));const o=t.tagName;if("value"===e&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?t.getAttribute("value")||"":t.value,s=null==n?"checkbox"===t.type?"on":"":String(n);return r===s&&"_value"in t||(t.value=s),null==n&&t.removeAttribute(e),void(t._value=n)}let c=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,s.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{t[e]=n}catch(Z){0}c&&t.removeAttribute(i||e)}function D(t,e,n,r){t.addEventListener(e,n,r)}function k(t,e,n,r){t.removeEventListener(e,n,r)}const N=Symbol("_vei");function O(t,e,n,r,s=null){const i=t[N]||(t[N]={}),o=i[e];if(r&&o)o.value=r;else{const[n,a]=M(e);if(r){const o=i[e]=F(r,s);D(t,n,o,a)}else o&&(k(t,n,o,a),i[e]=void 0)}}const R=/(?:Once|Passive|Capture)$/;function M(t){let e;if(R.test(t)){let n;e={};while(n=t.match(R))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,s.Tg)(t.slice(2));return[n,e]}let L=0;const P=Promise.resolve(),V=()=>L||(P.then(()=>L=0),L=Date.now());function F(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(U(t,n.value),e,5,[t])};return n.value=t,n.attached=V(),n}function U(t,e){if((0,s.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t&&t(e))}return e}const j=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$=(t,e,n,r,i,o)=>{const a="svg"===i;"class"===e?g(t,r,a):"style"===e?b(t,n,r):(0,s.Mp)(e)?(0,s.CP)(e)||O(t,e,n,r,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):B(t,e,r,a))?(x(t,e,r),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||A(t,e,r,a,o,"value"!==e)):t._isVueCE&&(q(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!(0,s.Kg)(r)))?x(t,(0,s.PT)(e),r,o,e):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),A(t,e,r,a))};function B(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&j(e)&&(0,s.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e||"autocorrect"===e)return!1;if("sandbox"===e&&"IFRAME"===t.tagName)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!j(e)||!(0,s.Kg)(n))&&e in t}function q(t,e){const n=t._def.props;if(!n)return!1;const r=(0,s.PT)(e);return Array.isArray(n)?n.some(t=>(0,s.PT)(t)===r):Object.keys(n).some(t=>(0,s.PT)(t)===r)}"undefined"!==typeof HTMLElement&&HTMLElement;const z=["ctrl","shift","alt","meta"],K={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>z.some(n=>t[`${n}Key`]&&!e.includes(n))},G=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(n,...r)=>{for(let t=0;t<e.length;t++){const r=K[e[t]];if(r&&r(n,e))return}return t(n,...r)})},H=(0,s.X$)({patchProp:$},f);let W;function Q(){return W||(W=(0,r.K9)(H))}const X=(...t)=>{const e=Q().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=J(t);if(!r)return;const i=e._component;(0,s.Tn)(i)||i.render||i.template||(i.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,Y(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Y(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function J(t){if((0,s.Kg)(t)){const e=document.querySelector(t);return e}return t}},33:function(t,e,n){
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function r(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}n.d(e,{$3:function(){return d},$H:function(){return V},BH:function(){return K},BX:function(){return nt},Bm:function(){return _},C4:function(){return Y},CE:function(){return g},CP:function(){return u},DY:function(){return F},Gv:function(){return E},J$:function(){return Z},Kg:function(){return b},MZ:function(){return s},Mp:function(){return c},NO:function(){return a},Oj:function(){return i},PT:function(){return O},Qd:function(){return A},Ro:function(){return $},SU:function(){return D},TF:function(){return h},Tg:function(){return M},Tn:function(){return w},Tr:function(){return G},We:function(){return q},X$:function(){return l},Y2:function(){return tt},ZH:function(){return L},Zf:function(){return I},bB:function(){return j},cy:function(){return p},gd:function(){return v},pD:function(){return r},rU:function(){return P},tE:function(){return o},u3:function(){return rt},vM:function(){return m},v_:function(){return it},yI:function(){return x},yL:function(){return T},yQ:function(){return U}});const s={},i=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),u=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(t,e)=>f.call(t,e),p=Array.isArray,g=t=>"[object Map]"===C(t),m=t=>"[object Set]"===C(t),y=t=>"[object Date]"===C(t),v=t=>"[object RegExp]"===C(t),w=t=>"function"===typeof t,b=t=>"string"===typeof t,_=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,T=t=>(E(t)||w(t))&&w(t.then)&&w(t.catch),S=Object.prototype.toString,C=t=>S.call(t),I=t=>C(t).slice(8,-1),A=t=>"[object Object]"===C(t),x=t=>b(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,D=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},N=/-\w/g,O=k(t=>t.replace(N,t=>t.slice(1).toUpperCase())),R=/\B([A-Z])/g,M=k(t=>t.replace(R,"-$1").toLowerCase()),L=k(t=>t.charAt(0).toUpperCase()+t.slice(1)),P=k(t=>{const e=t?`on${L(t)}`:"";return e}),V=(t,e)=>!Object.is(t,e),F=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},U=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},$=t=>{const e=b(t)?Number(t):NaN;return isNaN(e)?t:e};let B;const q=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",K=r(z);function G(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=b(r)?X(r):G(r);if(s)for(const t in s)e[t]=s[t]}return e}if(b(t)||E(t))return t}const H=/;(?![^(]*\))/g,W=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(Q,"").split(H).forEach(t=>{if(t){const n=t.split(W);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Y(t){let e="";if(b(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=Y(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=_(t),r=_(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const n in t){const r=t.hasOwnProperty(n),s=e.hasOwnProperty(n);if(r&&!s||!r&&s||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex(t=>nt(t,e))}const st=t=>!(!t||!0!==t["__v_isRef"]),it=t=>b(t)?t:null==t?"":p(t)||E(t)&&(t.toString===S||!w(t.toString))?st(t)?it(t.value):JSON.stringify(t,ot,2):String(t),ot=(t,e)=>st(e)?ot(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n],r)=>(t[at(e,r)+" =>"]=n,t),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>at(t))}:_(e)?at(e):!E(e)||p(e)||A(e)?e:String(e),at=(t,e="")=>{var n;return _(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},6262:function(t,e){e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n}},9306:function(t,e,n){var r=n(4901),s=n(6823),i=TypeError;t.exports=function(t){if(r(t))return t;throw new i(s(t)+" is not a function")}},679:function(t,e,n){var r=n(1625),s=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new s("Incorrect invocation")}},8551:function(t,e,n){var r=n(34),s=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw new i(s(t)+" is not an object")}},9617:function(t,e,n){var r=n(5397),s=n(5610),i=n(6198),o=function(t){return function(e,n,o){var a=r(e),c=i(a);if(0===c)return!t&&-1;var u,l=s(o,c);if(t&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},6319:function(t,e,n){var r=n(8551),s=n(9539);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(o){s(t,"throw",o)}}},2195:function(t,e,n){var r=n(9504),s=r({}.toString),i=r("".slice);t.exports=function(t){return i(s(t),8,-1)}},6955:function(t,e,n){var r=n(2140),s=n(4901),i=n(2195),o=n(8227),a=o("toStringTag"),c=Object,u="Arguments"===i(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?i(e):"Object"===(r=i(e))&&s(e.callee)?"Arguments":r}},7740:function(t,e,n){var r=n(9297),s=n(5031),i=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=s(e),c=o.f,u=i.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},2211:function(t,e,n){var r=n(9039);t.exports=!r(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})},2529:function(t){t.exports=function(t,e){return{value:t,done:e}}},6699:function(t,e,n){var r=n(3724),s=n(4913),i=n(6980);t.exports=r?function(t,e,n){return s.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},4659:function(t,e,n){var r=n(3724),s=n(4913),i=n(6980);t.exports=function(t,e,n){r?s.f(t,e,i(0,n)):t[e]=n}},2106:function(t,e,n){var r=n(283),s=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),s.f(t,e,n)}},6840:function(t,e,n){var r=n(4901),s=n(4913),i=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&i(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:s.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},6279:function(t,e,n){var r=n(6840);t.exports=function(t,e,n){for(var s in e)r(t,s,e[s],n);return t}},9433:function(t,e,n){var r=n(4576),s=Object.defineProperty;t.exports=function(t,e){try{s(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},3724:function(t,e,n){var r=n(9039);t.exports=!r(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})},4055:function(t,e,n){var r=n(4576),s=n(34),i=r.document,o=s(i)&&s(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},8727:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2839:function(t,e,n){var r=n(4576),s=r.navigator,i=s&&s.userAgent;t.exports=i?String(i):""},9519:function(t,e,n){var r,s,i=n(4576),o=n(2839),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),s=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!s&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(s=+r[1]))),t.exports=s},6518:function(t,e,n){var r=n(4576),s=n(7347).f,i=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=s(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&i(d,"sham",!0),o(l,h,d,t)}}},9039:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},6080:function(t,e,n){var r=n(7476),s=n(9306),i=n(616),o=r(r.bind);t.exports=function(t,e){return s(t),void 0===e?t:i?o(t,e):function(){return t.apply(e,arguments)}}},616:function(t,e,n){var r=n(9039);t.exports=!r(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})},9565:function(t,e,n){var r=n(616),s=Function.prototype.call;t.exports=r?s.bind(s):function(){return s.apply(s,arguments)}},350:function(t,e,n){var r=n(3724),s=n(9297),i=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=s(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},7476:function(t,e,n){var r=n(2195),s=n(9504);t.exports=function(t){if("Function"===r(t))return s(t)}},9504:function(t,e,n){var r=n(616),s=Function.prototype,i=s.call,o=r&&s.bind.bind(i,i);t.exports=r?o:function(t){return function(){return i.apply(t,arguments)}}},7751:function(t,e,n){var r=n(4576),s=n(4901),i=function(t){return s(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},851:function(t,e,n){var r=n(6955),s=n(5966),i=n(4117),o=n(6269),a=n(8227),c=a("iterator");t.exports=function(t){if(!i(t))return s(t,c)||s(t,"@@iterator")||o[r(t)]}},81:function(t,e,n){var r=n(9565),s=n(9306),i=n(8551),o=n(6823),a=n(851),c=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(s(n))return i(r(n,t));throw new c(o(t)+" is not iterable")}},5966:function(t,e,n){var r=n(9306),s=n(4117);t.exports=function(t,e){var n=t[e];return s(n)?void 0:r(n)}},4576:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){var r=n(9504),s=n(8981),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(s(t),e)}},421:function(t){t.exports={}},397:function(t,e,n){var r=n(7751);t.exports=r("document","documentElement")},5917:function(t,e,n){var r=n(3724),s=n(9039),i=n(4055);t.exports=!r&&!s(function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},7055:function(t,e,n){var r=n(9504),s=n(9039),i=n(2195),o=Object,a=r("".split);t.exports=s(function(){return!o("z").propertyIsEnumerable(0)})?function(t){return"String"===i(t)?a(t,""):o(t)}:o},3706:function(t,e,n){var r=n(9504),s=n(4901),i=n(7629),o=r(Function.toString);s(i.inspectSource)||(i.inspectSource=function(t){return o(t)}),t.exports=i.inspectSource},1181:function(t,e,n){var r,s,i,o=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return i(t)?s(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=s(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw new g(p);return e.facade=t,w.set(t,e),e},s=function(t){return w.get(t)||{}},i=function(t){return w.has(t)}}else{var b=f("state");d[b]=!0,r=function(t,e){if(l(t,b))throw new g(p);return e.facade=t,u(t,b,e),e},s=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:r,get:s,has:i,enforce:y,getterFor:v}},4209:function(t,e,n){var r=n(8227),s=n(6269),i=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(s.Array===t||o[i]===t)}},4901:function(t){var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){var r=n(9039),s=n(4901),i=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n===l||n!==u&&(s(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},4117:function(t){t.exports=function(t){return null===t||void 0===t}},34:function(t,e,n){var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},6395:function(t){t.exports=!1},757:function(t,e,n){var r=n(7751),s=n(4901),i=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return s(e)&&i(e.prototype,a(t))}},2652:function(t,e,n){var r=n(6080),s=n(9565),i=n(8551),o=n(6823),a=n(4209),c=n(6198),u=n(1625),l=n(81),h=n(851),f=n(9539),d=TypeError,p=function(t,e){this.stopped=t,this.result=e},g=p.prototype;t.exports=function(t,e,n){var m,y,v,w,b,_,E,T=n&&n.that,S=!(!n||!n.AS_ENTRIES),C=!(!n||!n.IS_RECORD),I=!(!n||!n.IS_ITERATOR),A=!(!n||!n.INTERRUPTED),x=r(e,T),D=function(t){var e=m;return m=void 0,e&&f(e,"normal"),new p(!0,t)},k=function(t){return S?(i(t),A?x(t[0],t[1],D):x(t[0],t[1])):A?x(t,D):x(t)};if(C)m=t.iterator;else if(I)m=t;else{if(y=h(t),!y)throw new d(o(t)+" is not iterable");if(a(y)){for(v=0,w=c(t);w>v;v++)if(b=k(t[v]),b&&u(g,b))return b;return new p(!1)}m=l(t,y)}_=C?t.next:m.next;while(!(E=s(_,m)).done){var N=E.value;try{b=k(N)}catch(O){if(!m)throw O;f(m,"throw",O)}if("object"==typeof b&&b&&u(g,b))return b}return new p(!1)}},1385:function(t,e,n){var r=n(9539);t.exports=function(t,e,n){for(var s=t.length-1;s>=0;s--)if(void 0!==t[s])try{n=r(t[s].iterator,e,n)}catch(i){e="throw",n=i}if("throw"===e)throw n;return n}},9539:function(t,e,n){var r=n(9565),s=n(8551),i=n(5966);t.exports=function(t,e,n){var o,a;s(t);try{if(o=i(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return s(o),n}},9462:function(t,e,n){var r=n(9565),s=n(2360),i=n(6699),o=n(6279),a=n(8227),c=n(1181),u=n(5966),l=n(7657).IteratorPrototype,h=n(2529),f=n(9539),d=n(1385),p=a("toStringTag"),g="IteratorHelper",m="WrapForValidIterator",y="normal",v="throw",w=c.set,b=function(t){var e=c.getterFor(t?m:g);return o(s(l),{next:function(){var n=e(this);if(t)return n.nextHandler();if(n.done)return h(void 0,!0);try{var r=n.nextHandler();return n.returnHandlerResult?r:h(r,n.done)}catch(s){throw n.done=!0,s}},return:function(){var n=e(this),s=n.iterator,i=n.done;if(n.done=!0,t){var o=u(s,"return");return o?r(o,s):h(void 0,!0)}if(i)return h(void 0,!0);if(n.inner)try{f(n.inner.iterator,y)}catch(a){return f(s,v,a)}if(n.openIters)try{d(n.openIters,y)}catch(a){if(s)return f(s,v,a);throw a}return s&&f(s,y),h(void 0,!0)}})},_=b(!0),E=b(!1);i(E,p,"Iterator Helper"),t.exports=function(t,e,n){var r=function(r,s){s?(s.iterator=r.iterator,s.next=r.next):s=r,s.type=e?m:g,s.returnHandlerResult=!!n,s.nextHandler=t,s.counter=0,s.done=!1,w(this,s)};return r.prototype=e?_:E,r}},684:function(t){t.exports=function(t,e){var n="function"==typeof Iterator&&Iterator.prototype[t];if(n)try{n.call({next:null},e).next()}catch(r){return!0}}},4549:function(t,e,n){var r=n(4576);t.exports=function(t,e){var n=r.Iterator,s=n&&n.prototype,i=s&&s[t],o=!1;if(i)try{i.call({next:function(){return{done:!0}},return:function(){o=!0}},-1)}catch(a){a instanceof e||(o=!1)}if(!o)return i}},7657:function(t,e,n){var r,s,i,o=n(9039),a=n(4901),c=n(34),u=n(2360),l=n(2787),h=n(6840),f=n(8227),d=n(6395),p=f("iterator"),g=!1;[].keys&&(i=[].keys(),"next"in i?(s=l(l(i)),s!==Object.prototype&&(r=s)):g=!0);var m=!c(r)||o(function(){var t={};return r[p].call(t)!==t});m?r={}:d&&(r=u(r)),a(r[p])||h(r,p,function(){return this}),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},6269:function(t){t.exports={}},6198:function(t,e,n){var r=n(8014);t.exports=function(t){return r(t.length)}},283:function(t,e,n){var r=n(9504),s=n(9039),i=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),v=a&&!s(function(){return 8!==p(function(){},"length",{value:8}).length}),w=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(s){}var r=h(t);return o(r,"source")||(r.source=y(w,"string"==typeof e?e:"")),t};Function.prototype.toString=b(function(){return i(this)&&f(this).source||u(this)},"toString")},2248:function(t,e,n){var r=n(9504),s=Map.prototype;t.exports={Map:Map,set:r(s.set),get:r(s.get),has:r(s.has),remove:r(s["delete"]),proto:s}},741:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},2360:function(t,e,n){var r,s=n(8551),i=n(6801),o=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(t){return f+p+h+t+f+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?v(r):w():v(r);var t=o.length;while(t--)delete b[d][o[t]];return b()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=s(t),n=new m,m[d]=null,n[g]=t):n=b(),void 0===e?n:i.f(n,e)}},6801:function(t,e,n){var r=n(3724),s=n(8686),i=n(4913),o=n(8551),a=n(5397),c=n(1072);e.f=r&&!s?Object.defineProperties:function(t,e){o(t);var n,r=a(e),s=c(e),u=s.length,l=0;while(u>l)i.f(t,n=s[l++],r[n]);return t}},4913:function(t,e,n){var r=n(3724),s=n(5917),i=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?i?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),s)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){var r=n(3724),s=n(9565),i=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!s(i.f,t,e),t[e])}},8480:function(t,e,n){var r=n(1828),s=n(8727),i=s.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},3717:function(t,e){e.f=Object.getOwnPropertySymbols},2787:function(t,e,n){var r=n(9297),s=n(4901),i=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=i(t);if(r(e,c))return e[c];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},1625:function(t,e,n){var r=n(9504);t.exports=r({}.isPrototypeOf)},1828:function(t,e,n){var r=n(9504),s=n(9297),i=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);t.exports=function(t,e){var n,r=i(t),u=0,l=[];for(n in r)!s(a,n)&&s(r,n)&&c(l,n);while(e.length>u)s(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},1072:function(t,e,n){var r=n(1828),s=n(8727);t.exports=Object.keys||function(t){return r(t,s)}},8773:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!n.call({1:2},1);e.f=s?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},4270:function(t,e,n){var r=n(9565),s=n(4901),i=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&s(n=t.toString)&&!i(a=r(n,t)))return a;if(s(n=t.valueOf)&&!i(a=r(n,t)))return a;if("string"!==e&&s(n=t.toString)&&!i(a=r(n,t)))return a;throw new o("Can't convert object to primitive value")}},5031:function(t,e,n){var r=n(7751),s=n(9504),i=n(8480),o=n(3717),a=n(8551),c=s([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=o.f;return n?c(e,n(t)):e}},7750:function(t,e,n){var r=n(4117),s=TypeError;t.exports=function(t){if(r(t))throw new s("Can't call method on "+t);return t}},6119:function(t,e,n){var r=n(5745),s=n(3392),i=r("keys");t.exports=function(t){return i[t]||(i[t]=s(t))}},7629:function(t,e,n){var r=n(6395),s=n(4576),i=n(9433),o="__core-js_shared__",a=t.exports=s[o]||i(o,{});(a.versions||(a.versions=[])).push({version:"3.49.0",mode:r?"pure":"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},4495:function(t,e,n){var r=n(9519),s=n(9039),i=n(4576),o=i.String;t.exports=!!Object.getOwnPropertySymbols&&!s(function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41})},5610:function(t,e,n){var r=n(1291),s=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?s(n+e,0):i(n,e)}},5397:function(t,e,n){var r=n(7055),s=n(7750);t.exports=function(t){return r(s(t))}},1291:function(t,e,n){var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},8014:function(t,e,n){var r=n(1291),s=Math.min;t.exports=function(t){var e=r(t);return e>0?s(e,9007199254740991):0}},8981:function(t,e,n){var r=n(7750),s=Object;t.exports=function(t){return s(r(t))}},2777:function(t,e,n){var r=n(9565),s=n(34),i=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!s(t)||i(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!s(n)||i(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6969:function(t,e,n){var r=n(2777),s=n(757);t.exports=function(t){var e=r(t,"string");return s(e)?e:e+""}},2140:function(t,e,n){var r=n(8227),s=r("toStringTag"),i={};i[s]="z",t.exports="[object z]"===String(i)},6823:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3392:function(t,e,n){var r=n(9504),s=0,i=Math.random(),o=r(1.1.toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++s+i,36)}},7040:function(t,e,n){var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){var r=n(3724),s=n(9039);t.exports=r&&s(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})},8622:function(t,e,n){var r=n(4576),s=n(4901),i=r.WeakMap;t.exports=s(i)&&/native code/.test(String(i))},8227:function(t,e,n){var r=n(4576),s=n(5745),i=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=s("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return i(l,t)||(l[t]=a&&i(u,t)?u[t]:h("Symbol."+t)),l[t]}},8111:function(t,e,n){var r=n(6518),s=n(4576),i=n(679),o=n(8551),a=n(4901),c=n(2787),u=n(2106),l=n(4659),h=n(9039),f=n(9297),d=n(8227),p=n(7657).IteratorPrototype,g=n(3724),m=n(6395),y="constructor",v="Iterator",w=d("toStringTag"),b=TypeError,_=s[v],E=m||!a(_)||_.prototype!==p||!h(function(){_({})}),T=function(){if(i(this,p),c(this)===p)throw new b("Abstract class Iterator not directly constructable")},S=function(t,e){g?u(p,t,{configurable:!0,get:function(){return e},set:function(e){if(o(this),this===p)throw new b("You can't redefine this property");f(this,t)?this[t]=e:l(this,t,e)}}):p[t]=e};f(p,w)||S(w,v),!E&&f(p,y)&&p[y]!==Object||S(y,T),T.prototype=p,r({global:!0,constructor:!0,forced:E},{Iterator:T})},2489:function(t,e,n){var r=n(6518),s=n(9565),i=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(6395),h=n(9539),f=n(684),d=n(4549),p=!l&&!f("filter",function(){}),g=!l&&!p&&d("filter",TypeError),m=l||p||g,y=c(function(){var t,e,n,r=this.iterator,i=this.predicate,a=this.next;while(1){if(t=o(s(a,r)),e=this.done=!!t.done,e)return;if(n=t.value,u(r,i,[n,this.counter++],!0))return n}});r({target:"Iterator",proto:!0,real:!0,forced:m},{filter:function(t){o(this);try{i(t)}catch(e){h(this,"throw",e)}return g?s(g,this,t):new y(a(this),{predicate:t})}})},116:function(t,e,n){var r=n(6518),s=n(9565),i=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("find",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{find:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return s(h,this,t);var e=c(this),n=0;return i(e,function(e,r){if(t(e,n++))return r(e)},{IS_RECORD:!0,INTERRUPTED:!0}).result}})},7588:function(t,e,n){var r=n(6518),s=n(9565),i=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("forEach",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{forEach:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return s(h,this,t);var e=c(this),n=0;i(e,function(e){t(e,n++)},{IS_RECORD:!0})}})},1701:function(t,e,n){var r=n(6518),s=n(9565),i=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(9539),h=n(684),f=n(4549),d=n(6395),p=!d&&!h("map",function(){}),g=!d&&!p&&f("map",TypeError),m=d||p||g,y=c(function(){var t=this.iterator,e=o(s(this.next,t)),n=this.done=!!e.done;if(!n)return u(t,this.mapper,[e.value,this.counter++],!0)});r({target:"Iterator",proto:!0,real:!0,forced:m},{map:function(t){o(this);try{i(t)}catch(e){l(this,"throw",e)}return g?s(g,this,t):new y(a(this),{mapper:t})}})},3579:function(t,e,n){var r=n(6518),s=n(9565),i=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("some",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{some:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return s(h,this,t);var e=c(this),n=0;return i(e,function(e,r){if(t(e,n++))return r()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},2731:function(t,e,n){var r=n(6518),s=n(9306),i=n(2248),o=n(6395),a=i.get,c=i.has,u=i.set;r({target:"Map",proto:!0,real:!0,forced:o},{getOrInsertComputed:function(t,e){var n=c(this,t);if(s(e),n)return a(this,t);0===t&&1/t===-1/0&&(t=0);var r=e(t);return u(this,t,r),r}})},5367:function(t,e,n){var r=n(6518),s=n(2248),i=n(6395),o=s.get,a=s.has,c=s.set;r({target:"Map",proto:!0,real:!0,forced:i},{getOrInsert:function(t,e){return a(this,t)?o(this,t):(c(this,t,e),e)}})},879:function(t,e,n){n.d(e,{MF:function(){return wt},j6:function(){return pt},xZ:function(){return gt},om:function(){return dt},Sx:function(){return _t},Wp:function(){return bt},KO:function(){return Et}});var r=n(1711),s=n(722),i=n(734);const o=(t,e)=>e.some(e=>t instanceof e);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(E(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)});return e.then(e=>{e instanceof IDBCursor&&h.set(e,t)}).catch(()=>{}),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)});f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function S(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{i&&t.addEventListener("close",()=>i()),s&&t.addEventListener("versionchange",t=>s(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}const C=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],A=new Map;function x(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!C.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return A.set(e,i),i}w(t=>({...t,get:(e,n,r)=>x(e,n)||t.get(e,n,r),has:(e,n)=>!!x(e,n)||t.has(e,n)}));
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
class D{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(k(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function k(t){const e=t.getComponent();return"VERSION"===e?.type}const N="@firebase/app",O="0.14.11",R=new s.Vy("@firebase/app"),M="@firebase/app-compat",L="@firebase/analytics-compat",P="@firebase/analytics",V="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",j="@firebase/auth-compat",$="@firebase/database",B="@firebase/data-connect",q="@firebase/database-compat",z="@firebase/functions",K="@firebase/functions-compat",G="@firebase/installations",H="@firebase/installations-compat",W="@firebase/messaging",Q="@firebase/messaging-compat",X="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",rt="@firebase/ai",st="@firebase/firestore-compat",it="firebase",ot="12.12.0",at="[DEFAULT]",ct={[N]:"fire-core",[M]:"fire-core-compat",[P]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[V]:"fire-app-check-compat",[U]:"fire-auth",[j]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-data-connect",[q]:"fire-rtdb-compat",[z]:"fire-fn",[K]:"fire-fn-compat",[G]:"fire-iid",[H]:"fire-iid-compat",[W]:"fire-fcm",[Q]:"fire-fcm-compat",[X]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[st]:"fire-fst-compat",[rt]:"fire-vertex","fire-js":"fire-js",[it]:"fire-js-all"},ut=new Map,lt=new Map,ht=new Map;function ft(t,e){try{t.container.addComponent(e)}catch(n){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dt(t){const e=t.name;if(ht.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of ut.values())ft(n,t);for(const n of lt.values())ft(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return null!==t&&void 0!==t&&void 0!==t.settings}
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
const mt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},yt=new i.FA("app","Firebase",mt);
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
const wt=ot;function bt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const s={name:at,automaticDataCollectionEnabled:!0,...e},o=s.name;if("string"!==typeof o||!o)throw yt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,i.T9)()),!n)throw yt.create("no-options");const a=ut.get(o);if(a){if((0,i.bD)(n,a.options)&&(0,i.bD)(s,a.config))return a;throw yt.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ht.values())c.addComponent(r);const u=new vt(n,s,c);return ut.set(o,u),u}function _t(t=at){const e=ut.get(t);if(!e&&t===at&&(0,i.T9)())return bt();if(!e)throw yt.create("no-app",{appName:t});return e}function Et(t,e,n){let s=ct[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${s}" with version "${e}":`];return i&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void R.warn(t.join(" "))}dt(new r.uA(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}
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
const Tt="firebase-heartbeat-database",St=1,Ct="firebase-heartbeat-store";let It=null;function At(){return It||(It=S(Tt,St,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ct)}catch(n){console.warn(n)}}}}).catch(t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})})),It}async function xt(t){try{const e=await At(),n=e.transaction(Ct),r=await n.objectStore(Ct).get(kt(t));return await n.done,r}catch(e){if(e instanceof i.g)R.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e?.message});R.warn(t.message)}}}async function Dt(t,e){try{const n=await At(),r=n.transaction(Ct,"readwrite"),s=r.objectStore(Ct);await s.put(e,kt(t)),await r.done}catch(n){if(n instanceof i.g)R.warn(n.message);else{const t=yt.create("idb-set",{originalErrorMessage:n?.message});R.warn(t.message)}}}function kt(t){return`${t.name}!${t.options.appId}`}
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
 */const Nt=1024,Ot=30;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Pt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Mt();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(t=>t.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats.length>Ot){const t=Ft(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){R.warn(t)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const t=Mt(),{heartbeatsToSend:e,unsentEntries:n}=Lt(this._heartbeatsCache.heartbeats),r=(0,i.Uj)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return R.warn(t),""}}}function Mt(){const t=new Date;return t.toISOString().substring(0,10)}function Lt(t,e=Nt){const n=[];let r=t.slice();for(const s of t){const t=n.find(t=>t.agent===s.agent);if(t){if(t.dates.push(s.date),Vt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.zW)()&&(0,i.eX)().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await xt(this.app);return t?.heartbeats?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){const e=await this._canUseIndexedDBPromise;if(e){const e=await this.read();return Dt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){const e=await this._canUseIndexedDBPromise;if(e){const e=await this.read();return Dt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}}}function Vt(t){return(0,i.Uj)(JSON.stringify({version:2,heartbeats:t})).length}function Ft(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
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
 */function Ut(t){dt(new r.uA("platform-logger",t=>new D(t),"PRIVATE")),dt(new r.uA("heartbeat",t=>new Rt(t),"PRIVATE")),Et(N,O,t),Et(N,O,"esm2020"),Et("fire-js","")}Ut("")},1711:function(t,e,n){n.d(e,{h1:function(){return u},uA:function(){return s}});var r=n(734);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const i="[DEFAULT]";
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),n=t?.optional??!1;if(!this.isInitialized(e)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:e})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),r=this.onInitCallbacks.get(n)??new Set;r.add(t),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&t(s,n),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},722:function(t,e,n){n.d(e,{$b:function(){return s},Vy:function(){return u}});
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
const r=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}},223:function(t,e,n){n.d(e,{Wp:function(){return r.Wp}});var r=n(879),s="firebase",i="12.12.0";
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
(0,r.KO)(s,i,"app")},3345:function(t,e,n){n.d(e,{gS:function(){return Tu},rJ:function(){return mc},kd:function(){return Eu},H9:function(){return yc},aU:function(){return Ec},aQ:function(){return Su},My:function(){return hu},P:function(){return au},mZ:function(){return _u}});var r,s,i=n(879),o=n(1711),a=n(734),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={};(function(){var t;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(t,e){function n(){}n.prototype=e.prototype,t.F=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.D=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function o(t,e,n){n||(n=0);const r=Array(16);if("string"===typeof e)for(var s=0;s<16;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;s<16;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];let i,o=t.g[3];i=e+(o^n&(s^o))+r[0]+3614090360&4294967295,e=n+(i<<7&4294967295|i>>>25),i=o+(s^e&(n^s))+r[1]+3905402710&4294967295,o=e+(i<<12&4294967295|i>>>20),i=s+(n^o&(e^n))+r[2]+606105819&4294967295,s=o+(i<<17&4294967295|i>>>15),i=n+(e^s&(o^e))+r[3]+3250441966&4294967295,n=s+(i<<22&4294967295|i>>>10),i=e+(o^n&(s^o))+r[4]+4118548399&4294967295,e=n+(i<<7&4294967295|i>>>25),i=o+(s^e&(n^s))+r[5]+1200080426&4294967295,o=e+(i<<12&4294967295|i>>>20),i=s+(n^o&(e^n))+r[6]+2821735955&4294967295,s=o+(i<<17&4294967295|i>>>15),i=n+(e^s&(o^e))+r[7]+4249261313&4294967295,n=s+(i<<22&4294967295|i>>>10),i=e+(o^n&(s^o))+r[8]+1770035416&4294967295,e=n+(i<<7&4294967295|i>>>25),i=o+(s^e&(n^s))+r[9]+2336552879&4294967295,o=e+(i<<12&4294967295|i>>>20),i=s+(n^o&(e^n))+r[10]+4294925233&4294967295,s=o+(i<<17&4294967295|i>>>15),i=n+(e^s&(o^e))+r[11]+2304563134&4294967295,n=s+(i<<22&4294967295|i>>>10),i=e+(o^n&(s^o))+r[12]+1804603682&4294967295,e=n+(i<<7&4294967295|i>>>25),i=o+(s^e&(n^s))+r[13]+4254626195&4294967295,o=e+(i<<12&4294967295|i>>>20),i=s+(n^o&(e^n))+r[14]+2792965006&4294967295,s=o+(i<<17&4294967295|i>>>15),i=n+(e^s&(o^e))+r[15]+1236535329&4294967295,n=s+(i<<22&4294967295|i>>>10),i=e+(s^o&(n^s))+r[1]+4129170786&4294967295,e=n+(i<<5&4294967295|i>>>27),i=o+(n^s&(e^n))+r[6]+3225465664&4294967295,o=e+(i<<9&4294967295|i>>>23),i=s+(e^n&(o^e))+r[11]+643717713&4294967295,s=o+(i<<14&4294967295|i>>>18),i=n+(o^e&(s^o))+r[0]+3921069994&4294967295,n=s+(i<<20&4294967295|i>>>12),i=e+(s^o&(n^s))+r[5]+3593408605&4294967295,e=n+(i<<5&4294967295|i>>>27),i=o+(n^s&(e^n))+r[10]+38016083&4294967295,o=e+(i<<9&4294967295|i>>>23),i=s+(e^n&(o^e))+r[15]+3634488961&4294967295,s=o+(i<<14&4294967295|i>>>18),i=n+(o^e&(s^o))+r[4]+3889429448&4294967295,n=s+(i<<20&4294967295|i>>>12),i=e+(s^o&(n^s))+r[9]+568446438&4294967295,e=n+(i<<5&4294967295|i>>>27),i=o+(n^s&(e^n))+r[14]+3275163606&4294967295,o=e+(i<<9&4294967295|i>>>23),i=s+(e^n&(o^e))+r[3]+4107603335&4294967295,s=o+(i<<14&4294967295|i>>>18),i=n+(o^e&(s^o))+r[8]+1163531501&4294967295,n=s+(i<<20&4294967295|i>>>12),i=e+(s^o&(n^s))+r[13]+2850285829&4294967295,e=n+(i<<5&4294967295|i>>>27),i=o+(n^s&(e^n))+r[2]+4243563512&4294967295,o=e+(i<<9&4294967295|i>>>23),i=s+(e^n&(o^e))+r[7]+1735328473&4294967295,s=o+(i<<14&4294967295|i>>>18),i=n+(o^e&(s^o))+r[12]+2368359562&4294967295,n=s+(i<<20&4294967295|i>>>12),i=e+(n^s^o)+r[5]+4294588738&4294967295,e=n+(i<<4&4294967295|i>>>28),i=o+(e^n^s)+r[8]+2272392833&4294967295,o=e+(i<<11&4294967295|i>>>21),i=s+(o^e^n)+r[11]+1839030562&4294967295,s=o+(i<<16&4294967295|i>>>16),i=n+(s^o^e)+r[14]+4259657740&4294967295,n=s+(i<<23&4294967295|i>>>9),i=e+(n^s^o)+r[1]+2763975236&4294967295,e=n+(i<<4&4294967295|i>>>28),i=o+(e^n^s)+r[4]+1272893353&4294967295,o=e+(i<<11&4294967295|i>>>21),i=s+(o^e^n)+r[7]+4139469664&4294967295,s=o+(i<<16&4294967295|i>>>16),i=n+(s^o^e)+r[10]+3200236656&4294967295,n=s+(i<<23&4294967295|i>>>9),i=e+(n^s^o)+r[13]+681279174&4294967295,e=n+(i<<4&4294967295|i>>>28),i=o+(e^n^s)+r[0]+3936430074&4294967295,o=e+(i<<11&4294967295|i>>>21),i=s+(o^e^n)+r[3]+3572445317&4294967295,s=o+(i<<16&4294967295|i>>>16),i=n+(s^o^e)+r[6]+76029189&4294967295,n=s+(i<<23&4294967295|i>>>9),i=e+(n^s^o)+r[9]+3654602809&4294967295,e=n+(i<<4&4294967295|i>>>28),i=o+(e^n^s)+r[12]+3873151461&4294967295,o=e+(i<<11&4294967295|i>>>21),i=s+(o^e^n)+r[15]+530742520&4294967295,s=o+(i<<16&4294967295|i>>>16),i=n+(s^o^e)+r[2]+3299628645&4294967295,n=s+(i<<23&4294967295|i>>>9),i=e+(s^(n|~o))+r[0]+4096336452&4294967295,e=n+(i<<6&4294967295|i>>>26),i=o+(n^(e|~s))+r[7]+1126891415&4294967295,o=e+(i<<10&4294967295|i>>>22),i=s+(e^(o|~n))+r[14]+2878612391&4294967295,s=o+(i<<15&4294967295|i>>>17),i=n+(o^(s|~e))+r[5]+4237533241&4294967295,n=s+(i<<21&4294967295|i>>>11),i=e+(s^(n|~o))+r[12]+1700485571&4294967295,e=n+(i<<6&4294967295|i>>>26),i=o+(n^(e|~s))+r[3]+2399980690&4294967295,o=e+(i<<10&4294967295|i>>>22),i=s+(e^(o|~n))+r[10]+4293915773&4294967295,s=o+(i<<15&4294967295|i>>>17),i=n+(o^(s|~e))+r[1]+2240044497&4294967295,n=s+(i<<21&4294967295|i>>>11),i=e+(s^(n|~o))+r[8]+1873313359&4294967295,e=n+(i<<6&4294967295|i>>>26),i=o+(n^(e|~s))+r[15]+4264355552&4294967295,o=e+(i<<10&4294967295|i>>>22),i=s+(e^(o|~n))+r[6]+2734768916&4294967295,s=o+(i<<15&4294967295|i>>>17),i=n+(o^(s|~e))+r[13]+1309151649&4294967295,n=s+(i<<21&4294967295|i>>>11),i=e+(s^(n|~o))+r[4]+4149444226&4294967295,e=n+(i<<6&4294967295|i>>>26),i=o+(n^(e|~s))+r[11]+3174756917&4294967295,o=e+(i<<10&4294967295|i>>>22),i=s+(e^(o|~n))+r[2]+718787259&4294967295,s=o+(i<<15&4294967295|i>>>17),i=n+(o^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(i<<21&4294967295|i>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+o&4294967295}function a(t,e){var n=l;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function c(t,e){this.h=e;const n=[];let r=!0;for(let s=t.length-1;s>=0;s--){const i=0|t[s];r&&i==e||(n[s]=i,r=!1)}this.g=n}e(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.v=function(t,e){void 0===e&&(e=t.length);const n=e-this.blockSize,r=this.C;let s=this.h,i=0;for(;i<e;){if(0==s)for(;i<=n;)o(this,t,i),i+=this.blockSize;if("string"===typeof t){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){o(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){o(this,r),s=0;break}}this.h=s,this.o+=e},i.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;e=8*this.o;for(var n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.v(t),t=Array(16),e=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)t[e++]=this.g[n]>>>r&255;return t};var l={};function h(t){return-128<=t&&t<128?a(t,function(t){return new c([0|t],t<0?-1:0)}):new c([0|t],t<0?-1:0)}function f(t){if(isNaN(t)||!isFinite(t))return p;if(t<0)return w(f(-t));const e=[];let n=1;for(let r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new c(e,0)}function d(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,e<2||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return w(d(t.substring(1),e));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const n=f(Math.pow(e,8));let r=p;for(let i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i);const o=parseInt(t.substring(i,i+s),e);s<8?(s=f(Math.pow(e,s)),r=r.j(s).add(f(o))):(r=r.j(n),r=r.add(f(o)))}return r}var p=h(0),g=h(1),m=h(16777216);function y(t){if(0!=t.h)return!1;for(let e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function v(t){return-1==t.h}function w(t){const e=t.g.length,n=[];for(let r=0;r<e;r++)n[r]=~t.g[r];return new c(n,~t.h).add(g)}function b(t,e){return t.add(w(e))}function _(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function T(t,e){if(y(e))throw Error("division by zero");if(y(t))return new E(p,p);if(v(t))return e=T(w(t),e),new E(w(e.g),w(e.h));if(v(e))return e=T(t,w(e)),new E(w(e.g),e.h);if(t.g.length>30){if(v(t)||v(e))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=e;r.l(t)<=0;)n=S(n),r=S(r);var s=C(n,1),i=C(r,1);for(r=C(r,2),n=C(n,2);!y(r);){var o=i.add(r);o.l(t)<=0&&(s=s.add(n),i=o),r=C(r,1),n=C(n,1)}return e=b(t,s.j(e)),new E(s,e)}for(s=p;t.l(e)>=0;){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=r<=48?1:Math.pow(2,r-48),i=f(n),o=i.j(e);v(o)||o.l(t)>0;)n-=r,i=f(n),o=i.j(e);y(i)&&(i=g),s=s.add(i),t=b(t,o)}return new E(s,t)}function S(t){const e=t.g.length+1,n=[];for(let r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new c(n,t.h)}function C(t,e){const n=e>>5;e%=32;const r=t.g.length-n,s=[];for(let i=0;i<r;i++)s[i]=e>0?t.i(i+n)>>>e|t.i(i+n+1)<<32-e:t.i(i+n);return new c(s,t.h)}t=c.prototype,t.m=function(){if(v(this))return-w(this).m();let t=0,e=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);t+=(r>=0?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,t<2||36<t)throw Error("radix out of range: "+t);if(y(this))return"0";if(v(this))return"-"+w(this).toString(t);const e=f(Math.pow(t,6));var n=this;let r="";for(;;){const s=T(n,e).g;n=b(n,s.j(e));let i=((n.g.length>0?n.g[0]:n.h)>>>0).toString(t);if(n=s,y(n))return i+r;for(;i.length<6;)i="0"+i;r=i+r}},t.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=b(this,t),v(t)?-1:y(t)?0:1},t.abs=function(){return v(this)?w(this):this},t.add=function(t){const e=Math.max(this.g.length,t.g.length),n=[];let r=0;for(let s=0;s<=e;s++){let e=r+(65535&this.i(s))+(65535&t.i(s)),i=(e>>>16)+(this.i(s)>>>16)+(t.i(s)>>>16);r=i>>>16,e&=65535,i&=65535,n[s]=i<<16|e}return new c(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(y(this)||y(t))return p;if(v(this))return v(t)?w(this).j(w(t)):w(w(this).j(t));if(v(t))return w(this.j(w(t)));if(this.l(m)<0&&t.l(m)<0)return f(this.m()*t.m());const e=this.g.length+t.g.length,n=[];for(var r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(let e=0;e<t.g.length;e++){const s=this.i(r)>>>16,i=65535&this.i(r),o=t.i(e)>>>16,a=65535&t.i(e);n[2*r+2*e]+=i*a,_(n,2*r+2*e),n[2*r+2*e+1]+=s*a,_(n,2*r+2*e+1),n[2*r+2*e+1]+=i*o,_(n,2*r+2*e+1),n[2*r+2*e+2]+=s*o,_(n,2*r+2*e+2)}for(t=0;t<e;t++)n[t]=n[2*t+1]<<16|n[2*t];for(t=e;t<2*e;t++)n[t]=0;return new c(n,0)},t.B=function(t){return T(this,t).h},t.and=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new c(n,this.h&t.h)},t.or=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new c(n,this.h|t.h)},t.xor=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new c(n,this.h^t.h)},i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,s=u.Md5=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=d,r=u.Integer=c}).apply("undefined"!==typeof c?c:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var l,h,f,d,p,g,m,y,v=n(722),w="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},b={};(function(){var t,e=Object.defineProperty;function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof w&&w];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function s(t,n){if(n)t:{var s=r;t=t.split(".");for(var i=0;i<t.length-1;i++){var o=t[i];if(!(o in s))break t;s=s[o]}t=t[t.length-1],i=s[t],n=n(i),n!=i&&null!=n&&e(s,t,{configurable:!0,writable:!0,value:n})}}s("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}});
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var i=i||{},o=this||self;function a(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function c(t,e,n){return t.call.apply(t.bind,arguments)}function u(t,e,n){return u=c,u.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Ob=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}var T="undefined"!==typeof AsyncContext&&"function"===typeof AsyncContext.Snapshot?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function S(t){const e=t.length;if(e>0){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t,e){for(let r=1;r<arguments.length;r++){const e=arguments[r];var n=typeof e;if(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null","array"==n||"object"==n&&"number"==typeof e.length){n=t.length||0;const r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}class I{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return this.h>0?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function A(t){o.setTimeout(()=>{throw t},0)}function x(){var t=M;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class D{constructor(){this.h=this.g=null}add(t,e){const n=k.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var k=new I(()=>new N,t=>t.reset());class N{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let O,R=!1,M=new D,L=()=>{const t=Promise.resolve(void 0);O=()=>{t.then(P)}};function P(){for(var t;t=x();){try{t.h.call(t.g)}catch(n){A(n)}var e=k;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}R=!1}function V(){this.u=this.u,this.C=this.C}function F(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},F.prototype.h=function(){this.defaultPrevented=!0};var U=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};o.addEventListener("test",t,e),o.removeEventListener("test",t,e)}catch(n){}return t}();function j(t){return/^[\s\xa0]*$/.test(t)}function $(t,e){F.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}_($,F),$.prototype.init=function(t,e){const n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget,e||("mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)),this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&$.Z.h.call(this)},$.prototype.h=function(){$.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),q=0;function z(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++q,this.da=this.fa=!1}function K(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function G(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function H(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function W(t){const e={};for(const n in t)e[n]=t[n];return e}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function X(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<Q.length;e++)n=Q[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Y(t){this.src=t,this.g={},this.h=0}function J(t,e){const n=e.type;if(n in t.g){var r,s=t.g[n],i=Array.prototype.indexOf.call(s,e,void 0);(r=i>=0)&&Array.prototype.splice.call(s,i,1),r&&(K(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Z(t,e,n,r){for(let s=0;s<t.length;++s){const i=t[s];if(!i.da&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}Y.prototype.add=function(t,e,n,r,s){const i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);const o=Z(t,e,r,s);return o>-1?(e=t[o],n||(e.fa=!1)):(e=new z(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var tt="closure_lm_"+(1e6*Math.random()|0),et={};function rt(t,e,n,r,s){if(r&&r.once)return ot(t,e,n,r,s);if(Array.isArray(e)){for(let i=0;i<e.length;i++)rt(t,e[i],n,r,s);return null}return n=dt(n),t&&t[B]?t.J(e,n,a(r)?!!r.capture:!!r,s):st(t,e,n,!1,r,s)}function st(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");const o=a(s)?!!s.capture:!!s;let c=ht(t);if(c||(t[tt]=c=new Y(t)),n=c.add(e,n,r,o,i),n.proxy)return n;if(r=it(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)U||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(ut(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function it(){function t(n){return e.call(t.src,t.listener,n)}const e=lt;return t}function ot(t,e,n,r,s){if(Array.isArray(e)){for(let i=0;i<e.length;i++)ot(t,e[i],n,r,s);return null}return n=dt(n),t&&t[B]?t.K(e,n,a(r)?!!r.capture:!!r,s):st(t,e,n,!0,r,s)}function at(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)at(t,e[i],n,r,s);else r=a(r)?!!r.capture:!!r,n=dt(n),t&&t[B]?(t=t.i,i=String(e).toString(),i in t.g&&(e=t.g[i],n=Z(e,n,r,s),n>-1&&(K(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[i],t.h--)))):t&&(t=ht(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Z(e,n,r,s)),(n=t>-1?e[t]:null)&&ct(n))}function ct(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[B])J(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ut(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ht(e))?(J(n,t),0==n.h&&(n.src=null,e[tt]=null)):K(t)}}}function ut(t){return t in et?et[t]:et[t]="on"+t}function lt(t,e){if(t.da)t=!0;else{e=new $(e,this);const n=t.listener,r=t.ha||t.src;t.fa&&ct(t),t=n.call(r,e)}return t}function ht(t){return t=t[tt],t instanceof Y?t:null}var ft="__closure_events_fn_"+(1e9*Math.random()>>>0);function dt(t){return"function"===typeof t?t:(t[ft]||(t[ft]=function(e){return t.handleEvent(e)}),t[ft])}function pt(){V.call(this),this.i=new Y(this),this.M=this,this.G=null}function gt(t,e){var n,r=t.G;if(r)for(n=[];r;r=r.G)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new F(e,t);else if(e instanceof F)e.target=e.target||t;else{var s=e;e=new F(r,t),X(e,s)}let i,o;if(s=!0,n)for(o=n.length-1;o>=0;o--)i=e.g=n[o],s=mt(i,r,!0,e)&&s;if(i=e.g=t,s=mt(i,r,!0,e)&&s,s=mt(i,r,!1,e)&&s,n)for(o=0;o<n.length;o++)i=e.g=n[o],s=mt(i,r,!1,e)&&s}function mt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();let s=!0;for(let i=0;i<e.length;++i){const o=e[i];if(o&&!o.da&&o.capture==n){const e=o.listener,n=o.ha||o.src;o.fa&&J(t.i,o),s=!1!==e.call(n,r)&&s}}return s&&!r.defaultPrevented}function yt(t,e){if("function"!==typeof t){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=u(t.handleEvent,t)}return Number(e)>2147483647?-1:o.setTimeout(t,e||0)}function vt(t){t.g=yt(()=>{t.g=null,t.i&&(t.i=!1,vt(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}_(pt,V),pt.prototype[B]=!0,pt.prototype.removeEventListener=function(t,e,n,r){at(this,t,e,n,r)},pt.prototype.N=function(){if(pt.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const n=t.g[e];for(let t=0;t<n.length;t++)K(n[t]);delete t.g[e],t.h--}}this.G=null},pt.prototype.J=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},pt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class wt extends V{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:vt(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bt(t){V.call(this),this.h=t,this.g={}}_(bt,V);var _t=[];function Et(t){G(t.g,function(t,e){this.g.hasOwnProperty(e)&&ct(t)},t),t.g={}}bt.prototype.N=function(){bt.Z.N.call(this),Et(this)},bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tt=o.JSON.stringify,St=o.JSON.parse,Ct=class{stringify(t){return o.JSON.stringify(t,void 0)}parse(t){return o.JSON.parse(t,void 0)}};function It(){}function At(){}var xt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Dt(){F.call(this,"d")}function kt(){F.call(this,"c")}_(Dt,F),_(kt,F);var Nt={},Ot=null;function Rt(){return Ot=Ot||new pt}function Mt(t){F.call(this,Nt.Ia,t)}function Lt(t){const e=Rt();gt(e,new Mt(e))}function Pt(t,e){F.call(this,Nt.STAT_EVENT,t),this.stat=e}function Vt(t){const e=Rt();gt(e,new Pt(e,t))}function Ft(t,e){F.call(this,Nt.Ja,t),this.size=e}function Ut(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){t()},e)}function jt(){this.g=!0}function $t(t,e,n,r,s,i){t.info(function(){if(t.g)if(i){var o="",a=i.split("&");for(let t=0;t<a.length;t++){var c=a[t].split("=");if(c.length>1){const t=c[0];c=c[1];const e=t.split("_");o=e.length>=2&&"type"==e[1]?o+(t+"=")+c+"&":o+(t+"=redacted&")}}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o})}function Bt(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o})}function qt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Kt(t,n)+(r?" "+r:"")})}function zt(t,e){t.info(function(){return"TIMEOUT: "+e})}function Kt(t,e){if(!t.g)return e;if(!e)return null;try{const i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var n=i[t];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(let t=1;t<r.length;t++)r[t]=""}}}return Tt(i)}catch(i){return e}}Nt.Ia="serverreachability",_(Mt,F),Nt.STAT_EVENT="statevent",_(Pt,F),Nt.Ja="timingevent",_(Ft,F),jt.prototype.ua=function(){this.g=!1},jt.prototype.info=function(){};var Gt,Ht={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wt={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Qt(){}function Xt(t){return encodeURIComponent(String(t))}function Yt(t){var e=1;t=t.split(":");const n=[];for(;e>0&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Jt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.S=r||1,this.V=new bt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Zt}function Zt(){this.i=null,this.g="",this.h=!1}_(Qt,It),Qt.prototype.g=function(){return new XMLHttpRequest},Gt=new Qt;var te={},ee={};function ne(t,e,n){t.M=1,t.A=De(Se(e)),t.u=n,t.R=!0,re(t,null)}function re(t,e){t.F=Date.now(),ae(t),t.B=Se(t.A);var n=t.B,r=t.S;Array.isArray(r)||(r=[String(r)]),qe(n.i,"t",r),t.C=0,n=t.j.L,t.h=new Zt,t.g=Ln(t.j,n?e:null,!t.u),t.P>0&&(t.O=new wt(u(t.Y,t,t.g),t.P)),e=t.V,n=t.g,r=t.ba;var s="readystatechange";Array.isArray(s)||(s&&(_t[0]=s.toString()),s=_t);for(let i=0;i<s.length;i++){const t=rt(n,s[i],r||e.handleEvent,!1,e.h||e);if(!t)break;e.g[t.key]=t}e=t.J?W(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),Lt(),$t(t.i,t.v,t.B,t.l,t.S,t.u)}function se(t){if(!ie(t))return t.g.la();const e=dn(t.g);if(""===e)return"";let n="";const r=e.length,s=4==fn(t.g);if(!t.h.i){if("undefined"===typeof TextDecoder)return he(t),le(t),"";t.h.i=new o.TextDecoder}for(let i=0;i<r;i++)t.h.h=!0,n+=t.h.i.decode(e[i],{stream:!(s&&i==r-1)});return e.length=0,t.h.g+=n,t.C=0,t.h.g}function ie(t){return!!t.g&&("GET"==t.v&&2!=t.M&&t.j.Aa)}function oe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ee:(n=Number(e.substring(n,r)),isNaN(n)?te:(r+=1,r+n>e.length?ee:(e=e.slice(r,r+n),t.C=r+n,e)))}function ae(t){t.T=Date.now()+t.H,ce(t,t.H)}function ce(t,e){if(null!=t.D)throw Error("WatchDog timer not null");t.D=Ut(u(t.aa,t),e)}function ue(t){t.D&&(o.clearTimeout(t.D),t.D=null)}function le(t){0==t.j.I||t.K||kn(t.j,t)}function he(t){ue(t);var e=t.O;e&&"function"==typeof e.dispose&&e.dispose(),t.O=null,Et(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function fe(t,e){try{var n=t.j;if(0!=n.I&&(n.g==t||ye(n.h,t)))if(!t.L&&ye(n.h,t)&&3==n.I){try{var r=n.Ba.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.v){if(n.g){if(!(n.g.F+3e3<t.F))break t;Dn(n),vn(n)}In(n),Vt(18)}}else n.xa=s[1],0<n.xa-n.K&&s[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Ut(u(n.Va,n),6e3));me(n.h)<=1&&n.ta&&(n.ta=void 0)}else On(n,11)}else if((t.L||n.g==t)&&Dn(n),!j(e))for(s=n.Ba.g.parse(e),e=0;e<s.length;e++){let u=s[e];const l=u[0];if(!(l<=n.K))if(n.K=l,u=u[1],2==n.I)if("c"==u[0]){n.M=u[1],n.ba=u[2];const e=u[3];null!=e&&(n.ka=e,n.j.info("VER="+n.ka));const s=u[4];null!=s&&(n.za=s,n.j.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&l>0&&(r=1.5*l,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(ve(i,i.h),i.h=null))}if(r.G){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.wa=t,xe(r.J,r.G,t))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-t.F,n.j.info("Handshake RTT: "+n.T+"ms")),r=n;var o=t;if(r.na=Mn(r,r.L?r.ba:null,r.W),o.L){we(r.h,o);var a=o,c=r.O;c&&(a.H=c),a.D&&(ue(a),ae(a)),r.g=o}else Cn(r);n.i.length>0&&bn(n)}else"stop"!=u[0]&&"close"!=u[0]||On(n,7);else 3==n.I&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?On(n,7):yn(n):"noop"!=u[0]&&n.l&&n.l.qa(u),n.A=0)}Lt(4)}catch(l){}}Jt.prototype.ba=function(t){t=t.target;const e=this.O;e&&3==fn(t)?e.j():this.Y(t)},Jt.prototype.Y=function(t){try{if(t==this.g)t:{const a=fn(this.g),c=this.g.ya(),u=this.g.ca();if(!(a<3)&&(3!=a||this.g&&(this.h.h||this.g.la()||dn(this.g)))){this.K||4!=a||7==c||Lt(8==c||u<=0?3:2),ue(this);var e=this.g.ca();this.X=e;var n=se(this);if(this.o=200==e,Bt(this.i,this.v,this.B,this.l,this.S,a,e),this.o){if(this.U&&!this.L){e:{if(this.g){var r,s=this.g;if((r=s.g?s.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(r)){var i=r;break e}}i=null}if(!(t=i)){this.o=!1,this.m=3,Vt(12),he(this),le(this);break t}qt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fe(this,t)}if(this.R){let e;for(t=!0;!this.K&&this.C<n.length;){if(e=oe(this,n),e==ee){4==a&&(this.m=4,Vt(14),t=!1),qt(this.i,this.l,null,"[Incomplete Response]");break}if(e==te){this.m=4,Vt(15),qt(this.i,this.l,n,"[Invalid Chunk]"),t=!1;break}qt(this.i,this.l,e,null),fe(this,e)}if(ie(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=a||0!=n.length||this.h.h||(this.m=1,Vt(16),t=!1),this.o=this.o&&t,t){if(n.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),An(o),o.P=!0,Vt(11))}}else qt(this.i,this.l,n,"[Invalid Chunked Response]"),he(this),le(this)}else qt(this.i,this.l,n,null),fe(this,n);4==a&&he(this),this.o&&!this.K&&(4==a?kn(this.j,this):(this.o=!1,ae(this)))}else pn(this.g),400==e&&n.indexOf("Unknown SID")>0?(this.m=3,Vt(12)):(this.m=0,Vt(13)),he(this),le(this)}}}catch(a){}},Jt.prototype.cancel=function(){this.K=!0,he(this)},Jt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(zt(this.i,this.B),2!=this.M&&(Lt(),Vt(17)),he(this),this.m=2,le(this)):ce(this,this.T-t)};var de=class{constructor(t,e){this.g=t,this.map=e}};function pe(t){this.l=t||10,o.PerformanceNavigationTiming?(t=o.performance.getEntriesByType("navigation"),t=t.length>0&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ge(t){return!!t.h||!!t.g&&t.g.size>=t.j}function me(t){return t.h?1:t.g?t.g.size:0}function ye(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ve(t,e){t.g?t.g.add(e):t.h=e}function we(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function be(t){if(null!=t.h)return t.i.concat(t.h.G);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.G);return e}return S(t.i)}pe.prototype.cancel=function(){if(this.i=be(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var _e=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ee(t,e){if(t){t=t.split("&");for(let n=0;n<t.length;n++){const r=t[n].indexOf("=");let s,i=null;r>=0?(s=t[n].substring(0,r),i=t[n].substring(r+1)):s=t[n],e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Te(t){let e;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,t instanceof Te?(this.l=t.l,Ce(this,t.j),this.o=t.o,this.g=t.g,Ie(this,t.u),this.h=t.h,Ae(this,ze(t.i)),this.m=t.m):t&&(e=String(t).match(_e))?(this.l=!1,Ce(this,e[1]||"",!0),this.o=ke(e[2]||""),this.g=ke(e[3]||"",!0),Ie(this,e[4]),this.h=ke(e[5]||"",!0),Ae(this,e[6]||"",!0),this.m=ke(e[7]||"")):(this.l=!1,this.i=new Fe(null,this.l))}function Se(t){return new Te(t)}function Ce(t,e,n){t.j=n?ke(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ie(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function Ae(t,e,n){e instanceof Fe?(t.i=e,Ge(t.i,t.l)):(n||(e=Ne(e,Pe)),t.i=new Fe(e,t.l))}function xe(t,e,n){t.i.set(e,n)}function De(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ke(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ne(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Oe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Oe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Te.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(Ne(e,Re,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Ne(e,Re,!0),"@"),t.push(Xt(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.u,null!=n&&t.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ne(n,"/"==n.charAt(0)?Le:Me,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Ne(n,Ve)),t.join("")},Te.prototype.resolve=function(t){const e=Se(this);let n=!!t.j;n?Ce(e,t.j):n=!!t.o,n?e.o=t.o:n=!!t.g,n?e.g=t.g:n=null!=t.u;var r=t.h;if(n)Ie(e,t.u);else if(n=!!t.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var s=e.h.lastIndexOf("/");-1!=s&&(r=e.h.slice(0,s+1)+r)}if(s=r,".."==s||"."==s)r="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){r=0==s.lastIndexOf("/",0),s=s.split("/");const t=[];for(let e=0;e<s.length;){const n=s[e++];"."==n?r&&e==s.length&&t.push(""):".."==n?((t.length>1||1==t.length&&""!=t[0])&&t.pop(),r&&e==s.length&&t.push("")):(t.push(n),r=!0)}r=t.join("/")}else r=s}return n?e.h=r:n=""!==t.i.toString(),n?Ae(e,ze(t.i)):n=!!t.m,n&&(e.m=t.m),e};var Re=/[#\/\?@]/g,Me=/[#\?:]/g,Le=/[#\?]/g,Pe=/[#\?@]/g,Ve=/#/g;function Fe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ue(t){t.g||(t.g=new Map,t.h=0,t.i&&Ee(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function je(t,e){Ue(t),e=Ke(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $e(t,e){return Ue(t),e=Ke(t,e),t.g.has(e)}function Be(t,e){Ue(t);let n=[];if("string"===typeof e)$e(t,e)&&(n=n.concat(t.g.get(Ke(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)n=n.concat(t[e]);return n}function qe(t,e,n){je(t,e),n.length>0&&(t.i=null,t.g.set(Ke(t,e),S(n)),t.h+=n.length)}function ze(t){const e=new Fe;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function Ke(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ge(t,e){e&&!t.j&&(Ue(t),t.i=null,t.g.forEach(function(t,e){const n=e.toLowerCase();e!=n&&(je(this,e),qe(this,n,t))},t)),t.j=e}function He(t,e){const n=new jt;if(o.Image){const r=new Image;r.onload=v(Qe,n,"TestLoadImage: loaded",!0,e,r),r.onerror=v(Qe,n,"TestLoadImage: error",!1,e,r),r.onabort=v(Qe,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=v(Qe,n,"TestLoadImage: timeout",!1,e,r),o.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function We(t,e){const n=new jt,r=new AbortController,s=setTimeout(()=>{r.abort(),Qe(n,"TestPingServer: timeout",!1,e)},1e4);fetch(t,{signal:r.signal}).then(t=>{clearTimeout(s),t.ok?Qe(n,"TestPingServer: ok",!0,e):Qe(n,"TestPingServer: server error",!1,e)}).catch(()=>{clearTimeout(s),Qe(n,"TestPingServer: error",!1,e)})}function Qe(t,e,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(i){}}function Xe(){this.g=new Ct}function Ye(t){this.i=t.Sb||null,this.h=t.ab||!1}function Je(t,e){pt.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Ze(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}function tn(t){t.readyState=4,t.l=null,t.j=null,t.B=null,en(t)}function en(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function nn(t){let e="";return G(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function rn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=nn(n),"string"===typeof t?null!=n&&Xt(n):xe(t,e,n))}function sn(t){pt.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}t=Fe.prototype,t.add=function(t,e){Ue(this),this.i=null,t=Ke(this,t);let n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ue(this),this.g.forEach(function(n,r){n.forEach(function(n){t.call(e,n,r,this)},this)},this)},t.set=function(t,e){return Ue(this),this.i=null,t=Ke(this,t),$e(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=Be(this,t),t.length>0?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let r=0;r<e.length;r++){var n=e[r];const s=Xt(n);n=Be(this,n);for(let e=0;e<n.length;e++){let r=s;""!==n[e]&&(r+="="+Xt(n[e])),t.push(r)}}return this.i=t.join("&")},_(Ye,It),Ye.prototype.g=function(){return new Je(this.i,this.h)},_(Je,pt),t=Je.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,en(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||o).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,tn(this)),this.readyState=0},t.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if("undefined"!==typeof o.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ze(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?tn(this):en(this),3==this.readyState&&Ze(this)}},t.Oa=function(t){this.g&&(this.response=this.responseText=t,tn(this))},t.Na=function(t){this.g&&(this.response=t,tn(this))},t.ga=function(){this.g&&tn(this)},t.setRequestHeader=function(t,e){this.A.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Je.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),_(sn,pt);var on=/^https?$/i,an=["POST","PUT"];function cn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,un(t),hn(t)}function un(t){t.A||(t.A=!0,gt(t,"complete"),gt(t,"error"))}function ln(t){if(t.h&&"undefined"!=typeof i)if(t.v&&4==fn(t))setTimeout(t.Ca.bind(t),0);else if(gt(t,"readystatechange"),4==fn(t)){t.h=!1;try{const i=t.ca();t:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===i){let e=String(t.D).match(_e)[1]||null;!e&&o.self&&o.self.location&&(e=o.self.location.protocol.slice(0,-1)),r=!on.test(e?e.toLowerCase():"")}n=r}if(n)gt(t,"complete"),gt(t,"success");else{t.o=6;try{var s=fn(t)>2?t.g.statusText:""}catch(a){s=""}t.l=s+" ["+t.ca()+"]",un(t)}}finally{hn(t)}}}function hn(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const r=t.g;t.g=null,e||gt(t,"ready");try{r.onreadystatechange=null}catch(n){}}}function fn(t){return t.g?t.g.readyState:0}function dn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(E){return null}}function pn(t){const e={};t=(t.g&&fn(t)>=2&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(j(t[r]))continue;var n=Yt(t[r]);const s=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}H(e,function(t){return t.join(", ")})}function gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mn(t){this.za=0,this.i=[],this.j=new jt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gn("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gn("baseRetryDelayMs",5e3,t),this.Za=gn("retryDelaySeedMs",1e4,t),this.Ta=gn("forwardChannelMaxRetries",2,t),this.va=gn("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new pe(t&&t.concurrentRequestLimit),this.Ba=new Xe,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function yn(t){if(wn(t),3==t.I){var e=t.V++,n=Se(t.J);if(xe(n,"SID",t.M),xe(n,"RID",e),xe(n,"TYPE","terminate"),Tn(t,n),e=new Jt(t,t.j,e),e.M=2,e.A=De(Se(n)),n=!1,o.navigator&&o.navigator.sendBeacon)try{n=o.navigator.sendBeacon(e.A.toString(),"")}catch(r){}!n&&o.Image&&((new Image).src=e.A,n=!0),n||(e.g=Ln(e.j,null),e.g.ea(e.A)),e.F=Date.now(),ae(e)}Rn(t)}function vn(t){t.g&&(An(t),t.g.cancel(),t.g=null)}function wn(t){vn(t),t.v&&(o.clearTimeout(t.v),t.v=null),Dn(t),t.h.cancel(),t.m&&("number"===typeof t.m&&o.clearTimeout(t.m),t.m=null)}function bn(t){if(!ge(t.h)&&!t.m){t.m=!0;var e=t.Ea;O||L(),R||(O(),R=!0),M.add(e,t),t.D=0}}function _n(t,e){return!(me(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.G.concat(t.i),!0):!(1==t.I||2==t.I||t.D>=(t.Sa?0:t.Ta))&&(t.m=Ut(u(t.Ea,t,e),Nn(t,t.D)),t.D++,!0))}function En(t,e){var n;n=e?e.l:t.V++;const r=Se(t.J);xe(r,"SID",t.M),xe(r,"RID",n),xe(r,"AID",t.K),Tn(t,r),t.u&&t.o&&rn(r,t.u,t.o),n=new Jt(t,t.j,n,t.D+1),null===t.u&&(n.J=t.o),e&&(t.i=e.G.concat(t.i)),e=Sn(t,n,1e3),n.H=Math.round(.5*t.va)+Math.round(.5*t.va*Math.random()),ve(t.h,n),ne(n,r,e)}function Tn(t,e){t.H&&G(t.H,function(t,n){xe(e,n,t)}),t.l&&G({},function(t,n){xe(e,n,t)})}function Sn(t,e,n){n=Math.min(t.i.length,n);const r=t.l?u(t.l.Ka,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?n>0?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let c=!0;for(let u=0;u<n;u++){var i=s[u].g;const n=s[u].map;if(i-=e,i<0)e=Math.max(0,s[u].g-100),c=!1;else try{i="req"+i+"_"||0;try{var o=n instanceof Map?n:Object.entries(n);for(const[e,n]of o){let r=n;a(n)&&(r=Tt(n)),t.push(i+e+"="+encodeURIComponent(r))}}catch(nt){throw t.push(i+"type="+encodeURIComponent("_badmap")),nt}}catch(nt){r&&r(n)}}if(c){o=t.join("&");break t}}o=void 0}return t=t.i.splice(0,n),e.G=t,o}function Cn(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;O||L(),R||(O(),R=!0),M.add(e,t),t.A=0}}function In(t){return!(t.g||t.v||t.A>=3)&&(t.Y++,t.v=Ut(u(t.Da,t),Nn(t,t.A)),t.A++,!0)}function An(t){null!=t.B&&(o.clearTimeout(t.B),t.B=null)}function xn(t){t.g=new Jt(t,t.j,"rpc",t.Y),null===t.u&&(t.g.J=t.o),t.g.P=0;var e=Se(t.na);xe(e,"RID","rpc"),xe(e,"SID",t.M),xe(e,"AID",t.K),xe(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&xe(e,"TO",t.ia),xe(e,"TYPE","xmlhttp"),Tn(t,e),t.u&&t.o&&rn(e,t.u,t.o),t.O&&(t.g.H=t.O);var n=t.g;t=t.ba,n.M=1,n.A=De(Se(e)),n.u=null,n.R=!0,re(n,t)}function Dn(t){null!=t.C&&(o.clearTimeout(t.C),t.C=null)}function kn(t,e){var n=null;if(t.g==e){Dn(t),An(t),t.g=null;var r=2}else{if(!ye(t.h,e))return;n=e.G,we(t.h,e),r=1}if(0!=t.I)if(e.o)if(1==r){n=e.u?e.u.length:0,e=Date.now()-e.F;var s=t.D;r=Rt(),gt(r,new Ft(r,n)),bn(t)}else Cn(t);else if(s=e.m,3==s||0==s&&e.X>0||!(1==r&&_n(t,e)||2==r&&In(t)))switch(n&&n.length>0&&(e=t.h,e.i=e.i.concat(n)),s){case 1:On(t,5);break;case 4:On(t,10);break;case 3:On(t,6);break;default:On(t,2)}}function Nn(t,e){let n=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(n*=2),n*e}function On(t,e){if(t.j.info("Error code "+e),2==e){var n=u(t.bb,t),r=t.Ua;const e=!r;r=new Te(r||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||Ce(r,"https"),De(r),e?He(r.toString(),n):We(r.toString(),n)}else Vt(2);t.I=0,t.l&&t.l.pa(e),Rn(t),wn(t)}function Rn(t){if(t.I=0,t.ja=[],t.l){const e=be(t.h);0==e.length&&0==t.i.length||(C(t.ja,e),C(t.ja,t.i),t.h.i.length=0,S(t.i),t.i.length=0),t.l.oa()}}function Mn(t,e,n){var r=n instanceof Te?Se(n):new Te(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Ie(r,r.u);else{var s=o.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;const t=new Te(null);r&&Ce(t,r),e&&(t.g=e),s&&Ie(t,s),n&&(t.h=n),r=t}return n=t.G,e=t.wa,n&&e&&xe(r,n,e),xe(r,"VER",t.ka),Tn(t,r),r}function Ln(t,e,n){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Aa&&!t.ma?new sn(new Ye({ab:n})):new sn(t.ma),e.Fa(t.L),e}function Pn(){}function Vn(){}function Fn(t,e){pt.call(this),this.g=new mn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!j(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!j(e)&&(this.g.G=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $n(this)}function Un(t){Dt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function jn(){kt.call(this),this.status=1}function $n(t){this.g=t}t=sn.prototype,t.Fa=function(t){this.H=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Gt.g(),this.g.onreadystatechange=T(u(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(i){return void cn(this,i)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),s=o.FormData&&t instanceof o.FormData,!(Array.prototype.indexOf.call(an,e,void 0)>=0)||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(i){cn(this,i)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,gt(this,"complete"),gt(this,"abort"),hn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hn(this,!0)),sn.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ln(this):this.Xa())},t.Xa=function(){ln(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return fn(this)>2?this.g.status:-1}catch(t){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.La=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),St(e)}},t.ya=function(){return this.o},t.Ha=function(){return"string"===typeof this.l?this.l:String(this.l)},t=mn.prototype,t.ka=8,t.I=1,t.connect=function(t,e,n,r){Vt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=Mn(this,null,this.W),bn(this)},t.Ea=function(t){if(this.m)if(this.m=null,1==this.I){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Jt(this,this.j,t);let i=this.o;if(this.U&&(i?(i=W(i),X(i,this.U)):i=this.U),null!==this.u||this.R||(s.J=i,i=null),this.S)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,e>4096){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Sn(this,s,e),n=Se(this.J),xe(n,"RID",t),xe(n,"CVER",22),this.G&&xe(n,"X-HTTP-Session-Id",this.G),Tn(this,n),i&&(this.R?e="headers="+Xt(nn(i))+"&"+e:this.u&&rn(n,this.u,i)),ve(this.h,s),this.Ra&&xe(n,"TYPE","init"),this.S?(xe(n,"$req",e),xe(n,"SID","null"),s.U=!0,ne(s,n,null)):ne(s,n,e),this.I=2}}else 3==this.I&&(t?En(this,t):0==this.i.length||ge(this.h)||En(this))},t.Da=function(){if(this.v=null,xn(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=Ut(u(this.Wa,this),t)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Vt(10),vn(this),xn(this))},t.Va=function(){null!=this.C&&(this.C=null,vn(this),In(this),Vt(19))},t.bb=function(t){t?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=Pn.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},Vn.prototype.g=function(t,e){return new Fn(t,e)},_(Fn,pt),Fn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Fn.prototype.close=function(){yn(this.g)},Fn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tt(t),t=n);e.i.push(new de(e.Ya++,t)),3==e.I&&bn(e)},Fn.prototype.N=function(){this.g.l=null,delete this.j,yn(this.g),delete this.g,Fn.Z.N.call(this)},_(Un,Dt),_(jn,kt),_($n,Pn),$n.prototype.ra=function(){gt(this.g,"a")},$n.prototype.qa=function(t){gt(this.g,new Un(t))},$n.prototype.pa=function(t){gt(this.g,new jn)},$n.prototype.oa=function(){gt(this.g,"b")},Vn.prototype.createWebChannel=Vn.prototype.g,Fn.prototype.send=Fn.prototype.o,Fn.prototype.open=Fn.prototype.m,Fn.prototype.close=Fn.prototype.close,y=b.createWebChannelTransport=function(){return new Vn},m=b.getStatEventTarget=function(){return Rt()},g=b.Event=Nt,p=b.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ht.NO_ERROR=0,Ht.TIMEOUT=8,Ht.HTTP_ERROR=6,d=b.ErrorCode=Ht,Wt.COMPLETE="complete",f=b.EventType=Wt,At.EventType=xt,xt.OPEN="a",xt.CLOSE="b",xt.ERROR="c",xt.MESSAGE="d",pt.prototype.listen=pt.prototype.J,h=b.WebChannel=At,b.FetchXmlHttpFactory=Ye,sn.prototype.listenOnce=sn.prototype.K,sn.prototype.getLastError=sn.prototype.Ha,sn.prototype.getLastErrorCode=sn.prototype.ya,sn.prototype.getStatus=sn.prototype.ca,sn.prototype.getResponseJson=sn.prototype.La,sn.prototype.getResponseText=sn.prototype.la,sn.prototype.send=sn.prototype.ea,sn.prototype.setWithCredentials=sn.prototype.Fa,l=b.XhrIo=sn}).apply("undefined"!==typeof w?w:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});
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
 */function k(t,e,n){let r="Unexpected state";"string"==typeof e?r=e:n=e,N(t,r,n)}function N(t,e,n){let r=`FIRESTORE (${E}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(t){r+=" CONTEXT: "+n}throw A(r),new Error(r)}function O(t,e,n,r){let s="Unexpected state";"string"==typeof n?s=n:r=n,t||N(e,s,r)}function R(t,e){return t}
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class P{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
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
 */class V{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class F{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_.UNAUTHENTICATED))}shutdown(){}}class U{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class j{constructor(t){this.t=t,this.currentUser=_.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){O(void 0===this.o,42304);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new P;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new P,t.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const e=s;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new P)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(O("string"==typeof e.accessToken,31837,{l:e}),new V(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return O(null===t||"string"==typeof t,2055,{h:t}),new _(t)}}class ${constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=_.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class B{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new $(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(_.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class q{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,i.xZ)(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){O(void 0===this.o,3512);const n=t=>{null!=t.error&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,I("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?r(t):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new q(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(O("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new q(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
 */class G{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=K(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%62))}return n}}function H(t,e){return t<e?-1:t>e?1:0}function W(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.charAt(r),s=e.charAt(r);if(n!==s)return Y(n)===Y(s)?H(n,s):Y(n)?1:-1}return H(t.length,e.length)}const Q=55296,X=57343;function Y(t){const e=t.charCodeAt(0);return e>=Q&&e<=X}function J(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
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
const Z="__name__";class tt{constructor(t,e,n){void 0===e?e=0:e>t.length&&k(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&k(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===tt.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof tt?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=tt.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return H(t.length,e.length)}static compareSegments(t,e){const n=tt.isNumericId(t),r=tt.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?tt.extractNumericId(t).compare(tt.extractNumericId(e)):W(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return r.fromString(t.substring(4,t.length-2))}}class et extends tt{construct(t,e,n){return new et(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new L(M.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new et(e)}static emptyPath(){return new et([])}}const nt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends tt{construct(t,e,n){return new rt(t,e,n)}static isValidIdentifier(t){return nt.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Z}static keyField(){return new rt([Z])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new L(M.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new L(M.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new L(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new L(M.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rt(e)}static emptyPath(){return new rt([])}}
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
 */class st{constructor(t){this.path=t}static fromPath(t){return new st(et.fromString(t))}static fromName(t){return new st(et.fromString(t).popFirst(5))}static empty(){return new st(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===et.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new st(new et(t.slice()))}}
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
 */function it(t,e,n){if(!n)throw new L(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ot(t,e,n,r){if(!0===e&&!0===r)throw new L(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function at(t){if(!st.isDocumentKey(t))throw new L(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ct(t){if(st.isDocumentKey(t))throw new L(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ut(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function lt(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":k(12329,{type:typeof t})}function ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lt(t);throw new L(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function dt(t,e){if(!ut(t))throw new L(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(void 0!==i&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new L(M.INVALID_ARGUMENT,n);return!0}
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
 */const pt=-62135596800,gt=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(t){return mt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*gt);return new mt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<pt)throw new L(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gt}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:mt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(dt(t,mt._jsonSchema))return new mt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-pt;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}mt._jsonSchemaVersion="firestore/timestamp/1.0",mt._jsonSchema={type:ft("string",mt._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};
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
 */const vt=-1;class wt{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}wt.UNKNOWN_ID=-1;function bt(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=yt.fromTimestamp(1e9===r?new mt(n+1,0):new mt(n,r));return new Et(s,st.empty(),e)}function _t(t){return new Et(t.readTime,t.key,vt)}class Et{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Et(yt.min(),st.empty(),vt)}static max(){return new Et(yt.max(),st.empty(),vt)}}function Tt(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=st.comparator(t.documentKey,e.documentKey),0!==n?n:H(t.largestBatchId,e.largestBatchId)
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
 */class At{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&k(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new At((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof At?e:At.resolve(e)}catch(t){return At.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):At.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):At.reject(e)}static resolve(t){return new At((e,n)=>{e(t)})}static reject(t){return new At((e,n)=>{n(t)})}static waitFor(t){return new At((e,n)=>{let r=0,s=0,i=!1;t.forEach(t=>{++r,t.next(()=>{++s,i&&s===r&&e()},t=>n(t))}),i=!0,s===r&&e()})}static or(t){let e=At.resolve(!1);for(const n of t)e=e.next(t=>t?At.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new At((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next(t=>{i[c]=t,++o,o===s&&n(i)},t=>r(t))}})}static doWhile(t,e){return new At((n,r)=>{const s=()=>{!0===t()?e().next(()=>{s()},r):n()};s()})}}
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
 */
const Nt=-1;function Ot(t){return null==t}function Rt(t){return 0===t&&1/t==-1/0}function Mt(t){return"number"==typeof t&&Number.isInteger(t)&&!Rt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
const Lt="";function Pt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ft(e)),e=Vt(t.get(n),e);return Ft(e)}function Vt(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case Lt:n+="";break;default:n+=e}}return n}function Ft(t){return t+Lt+""}
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
const Ut="remoteDocuments",jt="owner",$t="mutationQueues",Bt="mutations";
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
 */const qt="documentMutations",zt="remoteDocumentsV14",Kt="remoteDocumentGlobal",Gt="targets",Ht="targetDocuments",Wt="targetGlobal",Qt="collectionParents",Xt="clientMetadata",Yt="bundles",Jt="namedQueries",Zt="indexConfiguration",te="indexState",ee="indexEntries",ne="documentOverlays",re="globals",se=[$t,Bt,qt,Ut,Gt,jt,Wt,Ht,Xt,Kt,Qt,Yt,Jt],ie=[$t,Bt,qt,zt,Gt,jt,Wt,Ht,Xt,Kt,Qt,Yt,Jt,ne],oe=ie,ae=[...oe,Zt,te,ee];
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
 */class he{constructor(t,e){this.comparator=t,this.root=e||de.EMPTY}insert(t,e){return new he(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,de.BLACK,null,null))}remove(t){return new he(this.comparator,this.root.remove(t,this.comparator).copy(null,null,de.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fe(this.root,t,this.comparator,!1)}getReverseIterator(){return new fe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fe(this.root,t,this.comparator,!0)}}class fe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class de{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:de.RED,this.left=null!=r?r:de.EMPTY,this.right=null!=s?s:de.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new de(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return de.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw k(43730,{key:this.key,value:this.value});if(this.right.isRed())throw k(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw k(27949);return t+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1,de.EMPTY=new class{constructor(){this.size=0}get key(){throw k(57766)}get value(){throw k(16141)}get color(){throw k(16727)}get left(){throw k(29726)}get right(){throw k(36894)}copy(t,e,n,r,s){return this}insert(t,e,n){return new de(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const we=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function be(t){if(O(!!t,39018),"string"==typeof t){let e=0;const n=we.exec(t);if(O(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ee(t){return"string"==typeof t?ve.fromBase64String(t):ve.fromUint8Array(t)}
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
 */class ke{constructor(t,e,n,r,s,i,o,a,c,u,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=l}}const Ne="(default)";class Oe{constructor(t,e){this.projectId=t,this.database=e||Ne}static empty(){return new Oe("","")}get isDefaultDatabase(){return this.database===Ne}isEqual(t){return t instanceof Oe&&t.projectId===this.projectId&&t.database===this.database}}function Re(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new L(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oe(t.options.projectId,e)}
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
 */const Me="__type__",Le="__max__",Pe={mapValue:{fields:{__type__:{stringValue:Le}}}},Ve="__vector__",Fe="value";function Ue(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ae(t)?4:nn(t)?9007199254740991:tn(t)?10:11:k(28295,{value:t})}function je(t,e){if(t===e)return!0;const n=Ue(t);if(n!==Ue(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return De(t).isEqual(De(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=be(t.timestampValue),r=be(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ee(t.bytesValue).isEqual(Ee(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return _e(t.geoPointValue.latitude)===_e(e.geoPointValue.latitude)&&_e(t.geoPointValue.longitude)===_e(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return _e(t.integerValue)===_e(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=_e(t.doubleValue),r=_e(e.doubleValue);return n===r?Rt(n)===Rt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return J(t.arrayValue.values||[],e.arrayValue.values||[],je);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ce(n)!==ce(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!je(n[s],r[s])))return!1;return!0}(t,e);default:return k(52216,{left:t})}}function $e(t,e){return void 0!==(t.values||[]).find(t=>je(t,e))}function Be(t,e){if(t===e)return 0;const n=Ue(t),r=Ue(e);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=_e(t.integerValue||t.doubleValue),r=_e(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return qe(t.timestampValue,e.timestampValue);case 4:return qe(De(t),De(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ee(t),r=Ee(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=H(n[s],r[s]);if(0!==t)return t}return H(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=H(_e(t.latitude),_e(e.latitude));return 0!==n?n:H(_e(t.longitude),_e(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ze(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=e.fields||{},s=n[Fe]?.arrayValue,i=r[Fe]?.arrayValue,o=H(s?.values?.length||0,i?.values?.length||0);return 0!==o?o:ze(s,i)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Pe.mapValue&&e===Pe.mapValue)return 0;if(t===Pe.mapValue)return 1;if(e===Pe.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=W(r[o],i[o]);if(0!==t)return t;const e=Be(n[r[o]],s[i[o]]);if(0!==e)return e}return H(r.length,i.length)}(t.mapValue,e.mapValue);default:throw k(23264,{he:n})}}function qe(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return H(t,e);const n=be(t),r=be(e),s=H(n.seconds,r.seconds);return 0!==s?s:H(n.nanos,r.nanos)}function ze(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=Be(n[s],r[s]);if(t)return t}return H(n.length,r.length)}function Ke(t){return Ge(t)}function Ge(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=be(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Ee(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return st.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ge(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${Ge(t.fields[s])}`;return n+"}"}(t.mapValue):k(61005,{value:t})}function He(t){switch(Ue(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xe(t);return e?16+He(e):16;case 5:return 2*t.stringValue.length;case 6:return Ee(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce((t,e)=>t+He(e),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return ue(t.fields,(t,n)=>{e+=t.length+He(n)}),e}(t.mapValue);default:throw k(13486,{value:t})}}function We(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qe(t){return!!t&&"integerValue"in t}function Xe(t){return!!t&&"arrayValue"in t}function Ye(t){return!!t&&"nullValue"in t}function Je(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ze(t){return!!t&&"mapValue"in t}function tn(t){const e=(t?.mapValue?.fields||{})[Me]?.stringValue;return e===Ve}function en(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ue(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=en(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=en(t.arrayValue.values[n]);return e}return{...t}}function nn(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Le}
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
class rn{constructor(t){this.value=t}static empty(){return new rn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ze(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=en(e)}setAll(t){let e=rt.emptyPath(),n={},r=[];t.forEach((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=en(t):r.push(s.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Ze(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return je(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ze(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ue(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new rn(en(this.value))}}function sn(t){const e=[];return ue(t.fields,(t,n)=>{const r=new rt([t]);if(Ze(n)){const t=sn(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new me(e)
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
 */}class on{constructor(t,e,n,r,s,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new on(t,0,yt.min(),yt.min(),yt.min(),rn.empty(),0)}static newFoundDocument(t,e,n,r){return new on(t,1,e,yt.min(),n,r,0)}static newNoDocument(t,e){return new on(t,2,e,yt.min(),yt.min(),rn.empty(),0)}static newUnknownDocument(t,e){return new on(t,3,e,yt.min(),yt.min(),rn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(yt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=yt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof on&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class an{constructor(t,e){this.position=t,this.inclusive=e}}function cn(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?st.comparator(st.fromName(o.referenceValue),n.key):Be(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function un(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!je(t.position[n],e.position[n]))return!1;return!0}
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
 */class ln{constructor(t,e="asc"){this.field=t,this.dir=e}}function hn(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class fn{}class dn extends fn{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new _n(t,e,n):"array-contains"===e?new Cn(t,n):"in"===e?new In(t,n):"not-in"===e?new An(t,n):"array-contains-any"===e?new xn(t,n):new dn(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new En(t,n):new Tn(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison(Be(e,this.value)):null!==e&&Ue(this.value)===Ue(e)&&this.matchesComparison(Be(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return k(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends fn{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new pn(t,e)}matches(t){return gn(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function gn(t){return"and"===t.op}function mn(t){return yn(t)&&gn(t)}function yn(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function vn(t){if(t instanceof dn)return t.field.canonicalString()+t.op.toString()+Ke(t.value);if(mn(t))return t.filters.map(t=>vn(t)).join(",");{const e=t.filters.map(t=>vn(t)).join(",");return`${t.op}(${e})`}}function wn(t,e){return t instanceof dn?function(t,e){return e instanceof dn&&t.op===e.op&&t.field.isEqual(e.field)&&je(t.value,e.value)}(t,e):t instanceof pn?function(t,e){return e instanceof pn&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,r)=>t&&wn(n,e.filters[r]),!0)}(t,e):void k(19439)}function bn(t){return t instanceof dn?function(t){return`${t.field.canonicalString()} ${t.op} ${Ke(t.value)}`}(t):t instanceof pn?function(t){return t.op.toString()+" {"+t.getFilters().map(bn).join(" ,")+"}"}(t):"Filter"}class _n extends dn{constructor(t,e,n){super(t,e,n),this.key=st.fromName(n.referenceValue)}matches(t){const e=st.comparator(t.key,this.key);return this.matchesComparison(e)}}class En extends dn{constructor(t,e){super(t,"in",e),this.keys=Sn("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Tn extends dn{constructor(t,e){super(t,"not-in",e),this.keys=Sn("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Sn(t,e){return(e.arrayValue?.values||[]).map(t=>st.fromName(t.referenceValue))}class Cn extends dn{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Xe(e)&&$e(e.arrayValue,this.value)}}class In extends dn{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&$e(this.value.arrayValue,e)}}class An extends dn{constructor(t,e){super(t,"not-in",e)}matches(t){if($e(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!$e(this.value.arrayValue,e)}}class xn extends dn{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Xe(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>$e(this.value.arrayValue,t))}}
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
 */class Dn{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.Te=null}}function kn(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Dn(t,e,n,r,s,i,o)}function Nn(t){const e=R(t);if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>vn(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),Ot(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>Ke(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>Ke(t)).join(",")),e.Te=t}return e.Te}function On(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hn(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wn(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!un(t.startAt,e.startAt)&&un(t.endAt,e.endAt)}function Rn(t){return st.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class Mn{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Ln(t,e,n,r,s,i,o,a){return new Mn(t,e,n,r,s,i,o,a)}function Pn(t){return new Mn(t)}function Vn(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Fn(t){return st.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Un(t){return null!==t.collectionGroup}function jn(t){const e=R(t);if(null===e.Ee){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new pe(rt.comparator);return t.filters.forEach(t=>{t.getFlattenedFilters().forEach(t=>{t.isInequality()&&(e=e.add(t.field))})}),e}(e);r.forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ee.push(new ln(r,n))}),t.has(rt.keyField().canonicalString())||e.Ee.push(new ln(rt.keyField(),n))}return e.Ee}function $n(t){const e=R(t);return e.Ie||(e.Ie=Bn(e,jn(t))),e.Ie}function Bn(t,e){if("F"===t.limitType)return kn(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(t=>{const e="desc"===t.dir?"asc":"desc";return new ln(t.field,e)});const n=t.endAt?new an(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new an(t.startAt.position,t.startAt.inclusive):null;return kn(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function qn(t,e){const n=t.filters.concat([e]);return new Mn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zn(t,e){const n=t.explicitOrderBy.concat([e]);return new Mn(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Kn(t,e,n){return new Mn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gn(t,e){return On($n(t),$n(e))&&t.limitType===e.limitType}function Hn(t){return`${Nn($n(t))}|lt:${t.limitType}`}function Wn(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>bn(t)).join(", ")}]`),Ot(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>Ke(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>Ke(t)).join(",")),`Target(${e})`}($n(t))}; limitType=${t.limitType})`}function Qn(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):st.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of jn(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=cn(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,jn(t),e))&&!(t.endAt&&!function(t,e,n){const r=cn(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,jn(t),e))}(t,e)}function Xn(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yn(t){return(e,n)=>{let r=!1;for(const s of jn(t)){const t=Jn(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function Jn(t,e,n){const r=t.field.isKeyField()?st.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?Be(r,s):k(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return k(19790,{direction:t.dir})}}
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
 */class Zn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ue(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return le(this.inner)}size(){return this.innerSize}}
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
 */const tr=new he(st.comparator);function er(){return tr}const nr=new he(st.comparator);function rr(...t){let e=nr;for(const n of t)e=e.insert(n.key,n);return e}function sr(t){let e=nr;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function ir(){return ar()}function or(){return ar()}function ar(){return new Zn(t=>t.toString(),(t,e)=>t.isEqual(e))}const cr=new he(st.comparator),ur=new pe(st.comparator);function lr(...t){let e=ur;for(const n of t)e=e.add(n);return e}const hr=new pe(H);function fr(){return hr}
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
 */function dr(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rt(e)?"-0":e}}function pr(t){return{integerValue:""+t}}function gr(t,e){return Mt(e)?pr(e):dr(t,e)}
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
 */class mr{constructor(){this._=void 0}}function yr(t,e,n){return t instanceof br?function(t,e){const n={fields:{[Se]:{stringValue:Te},[Ie]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Ae(e)&&(e=xe(e)),e&&(n.fields[Ce]=e),{mapValue:n}}(n,e):t instanceof _r?Er(t,e):t instanceof Tr?Sr(t,e):function(t,e){const n=wr(t,e),r=Ir(n)+Ir(t.Ae);return Qe(n)&&Qe(t.Ae)?pr(r):dr(t.serializer,r)}(t,e)}function vr(t,e,n){return t instanceof _r?Er(t,e):t instanceof Tr?Sr(t,e):n}function wr(t,e){return t instanceof Cr?function(t){return Qe(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class br extends mr{}class _r extends mr{constructor(t){super(),this.elements=t}}function Er(t,e){const n=Ar(e);for(const r of t.elements)n.some(t=>je(t,r))||n.push(r);return{arrayValue:{values:n}}}class Tr extends mr{constructor(t){super(),this.elements=t}}function Sr(t,e){let n=Ar(e);for(const r of t.elements)n=n.filter(t=>!je(t,r));return{arrayValue:{values:n}}}class Cr extends mr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Ir(t){return _e(t.integerValue||t.doubleValue)}function Ar(t){return Xe(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function xr(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof _r&&e instanceof _r||t instanceof Tr&&e instanceof Tr?J(t.elements,e.elements,je):t instanceof Cr&&e instanceof Cr?je(t.Ae,e.Ae):t instanceof br&&e instanceof br}(t.transform,e.transform)}class Dr{constructor(t,e){this.version=t,this.transformResults=e}}class kr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kr}static exists(t){return new kr(void 0,t)}static updateTime(t){return new kr(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nr(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Or{}function Rr(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new qr(t.key,kr.none()):new Fr(t.key,t.data,kr.none());{const n=t.data,r=rn.empty();let s=new pe(rt.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new Ur(t.key,r,new me(s.toArray()),kr.none())}}function Mr(t,e,n){t instanceof Fr?function(t,e,n){const r=t.value.clone(),s=$r(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(t,e,n){if(!Nr(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=$r(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(jr(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Lr(t,e,n,r){return t instanceof Fr?function(t,e,n,r){if(!Nr(t.precondition,e))return n;const s=t.value.clone(),i=Br(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(t,e,n,r){if(!Nr(t.precondition,e))return n;const s=Br(t.fieldTransforms,r,e),i=e.data;return i.setAll(jr(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return Nr(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Pr(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=wr(r.transform,t||null);null!=s&&(null===n&&(n=rn.empty()),n.set(r.field,s))}return n||null}function Vr(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&J(t,e,(t,e)=>xr(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fr extends Or{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ur extends Or{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jr(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $r(t,e,n){const r=new Map;O(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,vr(o,a,n[s]))}return r}function Br(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,yr(t,i,e))}return r}class qr extends Or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zr extends Or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Kr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Mr(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Lr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Lr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=or();return this.mutations.forEach(r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Rr(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(yt.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),lr())}isEqual(t){return this.batchId===t.batchId&&J(this.mutations,t.mutations,(t,e)=>Vr(t,e))&&J(this.baseMutations,t.baseMutations,(t,e)=>Vr(t,e))}}class Gr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){O(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let r=function(){return cr}();const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Gr(t,e,n,r)}}
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
 */class Hr{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class Wr{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
 */var Qr,Xr;function Yr(t){switch(t){case M.OK:return k(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return k(15467,{code:t})}}function Jr(t){if(void 0===t)return A("GRPC error has no .code"),M.UNKNOWN;switch(t){case Qr.OK:return M.OK;case Qr.CANCELLED:return M.CANCELLED;case Qr.UNKNOWN:return M.UNKNOWN;case Qr.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Qr.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Qr.INTERNAL:return M.INTERNAL;case Qr.UNAVAILABLE:return M.UNAVAILABLE;case Qr.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Qr.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Qr.NOT_FOUND:return M.NOT_FOUND;case Qr.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Qr.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Qr.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Qr.ABORTED:return M.ABORTED;case Qr.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Qr.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Qr.DATA_LOSS:return M.DATA_LOSS;default:return k(39323,{code:t})}}(Xr=Qr||(Qr={}))[Xr.OK=0]="OK",Xr[Xr.CANCELLED=1]="CANCELLED",Xr[Xr.UNKNOWN=2]="UNKNOWN",Xr[Xr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xr[Xr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xr[Xr.NOT_FOUND=5]="NOT_FOUND",Xr[Xr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xr[Xr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xr[Xr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xr[Xr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xr[Xr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xr[Xr.ABORTED=10]="ABORTED",Xr[Xr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xr[Xr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xr[Xr.INTERNAL=13]="INTERNAL",Xr[Xr.UNAVAILABLE=14]="UNAVAILABLE",Xr[Xr.DATA_LOSS=15]="DATA_LOSS";
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
let Zr=null;
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
function ts(){return new TextEncoder}
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
 */const es=new r([4294967295,4294967295],0);function ns(t){const e=ts().encode(t),n=new s;return n.update(e),new Uint8Array(n.digest())}function rs(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new r([n,s],0),new r([i,o],0)]}class ss{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new is(`Invalid padding: ${e}`);if(n<0)throw new is(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new is(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new is(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=r.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(r.fromNumber(n)));return 1===s.compare(es)&&(s=new r([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.ge)return!1;const e=ns(t),[n,r]=rs(e);for(let s=0;s<this.hashCount;s++){const t=this.ye(n,r,s);if(!this.we(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),i=new ss(s,r,e);return n.forEach(t=>i.insert(t)),i}insert(t){if(0===this.ge)return;const e=ns(t),[n,r]=rs(e);for(let s=0;s<this.hashCount;s++){const t=this.ye(n,r,s);this.Se(t)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class os{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,as.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new os(yt.min(),r,new he(H),er(),lr())}}class as{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new as(n,e,lr(),lr(),lr())}}
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
 */class cs{constructor(t,e,n,r){this.be=t,this.removedTargetIds=e,this.key=n,this.De=r}}class us{constructor(t,e){this.targetId=t,this.Ce=e}}class ls{constructor(t,e,n=ve.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class hs{constructor(){this.ve=0,this.Fe=ps(),this.Me=ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=lr(),e=lr(),n=lr();return this.Fe.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:k(38017,{changeType:s})}}),new as(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=ps()}Ke(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,O(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class fs{constructor(t){this.Ge=t,this.ze=new Map,this.je=er(),this.Je=ds(),this.He=ds(),this.Ze=new he(H)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.Qe(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:k(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((t,n)=>{this.rt(n)&&e(n)})}st(t){const e=t.targetId,n=t.Ce.count,r=this.ot(e);if(r){const s=r.target;if(Rn(s))if(0===n){const t=new st(s.path);this.et(e,t,on.newNoDocument(t,yt.min()))}else O(1===n,20013,{expectedCount:n});else{const r=this._t(e);if(r!==n){const n=this.ut(t),s=n?this.ct(n,t,r):1;if(0!==s){this.it(e);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,t)}Zr?.o(function(t,e,n,r,s){const i={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},o=e.unchangedNames;return o&&(i.bloomFilter={applied:0===s,hashCount:o?.hashCount??0,bitmapLength:o?.bits?.bitmap?.length??0,padding:o?.bits?.padding??0,mightContain:t=>r?.mightContain(t)??!1}),i}
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
 */(r,t.Ce,this.Ge.ht(),n,s))}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let i,o;try{i=Ee(n).toUint8Array()}catch(t){if(t instanceof ye)return x("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new ss(i,r,s)}catch(t){return x(t instanceof is?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.ge?null:o}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let r=0;return n.forEach(n=>{const s=this.Ge.ht(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.et(e,n,null),r++)}),r}Tt(t){const e=new Map;this.ze.forEach((n,r)=>{const s=this.ot(r);if(s){if(n.current&&Rn(s.target)){const e=new st(s.target.path);this.Et(e).has(r)||this.It(r,e)||this.et(r,e,on.newNoDocument(e,t))}n.Be&&(e.set(r,n.ke()),n.qe())}});let n=lr();this.He.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.ot(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.je.forEach((e,n)=>n.setReadTime(t));const r=new os(t,e,this.Ze,this.je,n);return this.je=er(),this.Je=ds(),this.He=ds(),this.Ze=new he(H),r}Ye(t,e){if(!this.rt(t))return;const n=this.It(t,e.key)?2:0;this.nt(t).Ke(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const r=this.nt(t);this.It(t,e)?r.Ke(e,1):r.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new hs,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new pe(H),this.He=this.He.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new pe(H),this.Je=this.Je.insert(t,e)),e}rt(t){const e=null!==this.ot(t);return e||I("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new hs),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}It(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function ds(){return new he(st.comparator)}function ps(){return new he(st.comparator)}const gs=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),ms=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),ys=(()=>{const t={and:"AND",or:"OR"};return t})();class vs{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ws(t,e){return t.useProto3Json||Ot(e)?e:{value:e}}function bs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _s(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Es(t,e){return bs(t,e.toTimestamp())}function Ts(t){return O(!!t,49232),yt.fromTimestamp(function(t){const e=be(t);return new mt(e.seconds,e.nanos)}(t))}function Ss(t,e){return Cs(t,e).canonicalString()}function Cs(t,e){const n=function(t){return new et(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Is(t){const e=et.fromString(t);return O(Qs(e),10190,{key:e.toString()}),e}function As(t,e){return Ss(t.databaseId,e.path)}function xs(t,e){const n=Is(e);if(n.get(1)!==t.databaseId.projectId)throw new L(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new st(Os(n))}function Ds(t,e){return Ss(t.databaseId,e)}function ks(t){const e=Is(t);return 4===e.length?et.emptyPath():Os(e)}function Ns(t){return new et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Os(t){return O(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}function Rs(t,e,n){return{name:As(t,e),fields:n.value.mapValue.fields}}function Ms(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:k(39313,{state:t})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.useProto3Json?(O(void 0===e||"string"==typeof e,58123),ve.fromBase64String(e||"")):(O(void 0===e||e instanceof Buffer||e instanceof Uint8Array,16193),ve.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?M.UNKNOWN:Jr(t.code);return new L(e,t.message||"")}(o);n=new ls(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xs(t,r.document.name),i=Ts(r.document.updateTime),o=r.document.createTime?Ts(r.document.createTime):yt.min(),a=new rn({mapValue:{fields:r.document.fields}}),c=on.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new cs(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xs(t,r.document),i=r.readTime?Ts(r.readTime):yt.min(),o=on.newNoDocument(s,i),a=r.removedTargetIds||[];n=new cs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xs(t,r.document),i=r.removedTargetIds||[];n=new cs([],i,s,null)}else{if(!("filter"in e))return k(11601,{Vt:e});{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:s}=t,i=new Wr(r,s),o=t.targetId;n=new us(o,i)}}return n}function Ls(t,e){let n;if(e instanceof Fr)n={update:Rs(t,e.key,e.value)};else if(e instanceof qr)n={delete:As(t,e.key)};else if(e instanceof Ur)n={update:Rs(t,e.key,e.data),updateMask:Ws(e.fieldMask)};else{if(!(e instanceof zr))return k(16599,{dt:e.type});n={verify:As(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof br)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof _r)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Tr)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Cr)return{fieldPath:e.field.canonicalString(),increment:n.Ae};throw k(20930,{transform:e.transform})}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Es(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:k(27497)}(t,e.precondition)),n}function Ps(t,e){return t&&t.length>0?(O(void 0!==e,14353),t.map(t=>function(t,e){let n=t.updateTime?Ts(t.updateTime):Ts(e);return n.isEqual(yt.min())&&(n=Ts(e)),new Dr(n,t.transformResults||[])}(t,e))):[]}function Vs(t,e){return{documents:[Ds(t,e.path)]}}function Fs(t,e){const n={structuredQuery:{}},r=e.path;let s;null!==e.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ds(t,s);const i=function(t){if(0!==t.length)return Hs(pn.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Ks(t.field),direction:Bs(t.dir)}}(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ws(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ft:n,parent:s}}function Us(t){let e=ks(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){O(1===r,65062);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=$s(t);return e instanceof pn&&mn(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map(t=>function(t){return new ln(Gs(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ot(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new an(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new an(n,e)}(n.endAt)),Ln(e,s,o,i,a,"F",c,u)}function js(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return k(28987,{purpose:t})}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function $s(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Gs(t.unaryFilter.field);return dn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Gs(t.unaryFilter.field);return dn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Gs(t.unaryFilter.field);return dn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Gs(t.unaryFilter.field);return dn.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return k(61313);default:return k(60726)}}(t):void 0!==t.fieldFilter?function(t){return dn.create(Gs(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return k(58110);default:return k(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return pn.create(t.compositeFilter.filters.map(t=>$s(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return k(1026)}}(t.compositeFilter.op))}(t):k(30097,{filter:t})}function Bs(t){return gs[t]}function qs(t){return ms[t]}function zs(t){return ys[t]}function Ks(t){return{fieldPath:t.canonicalString()}}function Gs(t){return rt.fromServerFormat(t.fieldPath)}function Hs(t){return t instanceof dn?function(t){if("=="===t.op){if(Je(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NAN"}};if(Ye(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Je(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NOT_NAN"}};if(Ye(t.value))return{unaryFilter:{field:Ks(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ks(t.field),op:qs(t.op),value:t.value}}}(t):t instanceof pn?function(t){const e=t.getFilters().map(t=>Hs(t));return 1===e.length?e[0]:{compositeFilter:{op:zs(t.op),filters:e}}}(t):k(54877,{filter:t})}function Ws(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Qs(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}function Xs(t){return!!t&&"function"==typeof t._toProto&&"ProtoValue"===t._protoValueType}
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
class Ys{constructor(t,e,n,r,s=yt.min(),i=yt.min(),o=ve.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Ys(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ys(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
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
 */class Js{constructor(t){this.yt=t}}function Zs(t){const e=Us({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Kn(e,e.limit,"L"):e}
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
class ti{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(_e(t.integerValue));else if("doubleValue"in t){const n=_e(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),Rt(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),"string"==typeof n&&(n=be(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(Ee(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?nn(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):tn(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Kt(t.arrayValue,e),this.Nt(e)):k(19022,{Ut:t})}Ot(t,e){this.Ft(e,25),this.$t(t,e)}$t(t,e){e.xt(t)}qt(t,e){const n=t.fields||{};this.Ft(e,55);for(const r of Object.keys(n))this.Ot(r,e),this.Ct(n[r],e)}kt(t,e){const n=t.fields||{};this.Ft(e,53);const r=Fe,s=n[r].arrayValue?.values?.length||0;this.Ft(e,15),e.Mt(_e(s)),this.Ot(r,e),this.Ct(n[r],e)}Kt(t,e){const n=t.values||[];this.Ft(e,50);for(const r of n)this.Ct(r,e)}Lt(t,e){this.Ft(e,37),st.fromName(t).path.forEach(t=>{this.Ft(e,60),this.$t(t,e)})}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}ti.Wt=new ti;
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
class ei{constructor(){this.bn=new ni}addToCollectionParentIndex(t,e){return this.bn.add(e),At.resolve()}getCollectionParents(t,e){return At.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return At.resolve()}deleteFieldIndex(t,e){return At.resolve()}deleteAllFieldIndexes(t){return At.resolve()}createTargetIndexes(t,e){return At.resolve()}getDocumentsMatchingTarget(t,e){return At.resolve(null)}getIndexType(t,e){return At.resolve(0)}getFieldIndexes(t,e){return At.resolve([])}getNextCollectionGroupToUpdate(t){return At.resolve(null)}getMinOffset(t,e){return At.resolve(Et.min())}getMinOffsetFromCollectionGroup(t,e){return At.resolve(Et.min())}updateCollectionGroup(t,e,n){return At.resolve()}updateIndexEntries(t,e){return At.resolve()}}class ni{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new pe(et.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new pe(et.comparator)).toArray()}}
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
const ri={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},si=41943040;class ii{static withCacheSize(t){return new ii(t,ii.DEFAULT_COLLECTION_PERCENTILE,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 */ii.DEFAULT_COLLECTION_PERCENTILE=10,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ii.DEFAULT=new ii(si,ii.DEFAULT_COLLECTION_PERCENTILE,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ii.DISABLED=new ii(-1,0,0);
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
class oi{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new oi(0)}static ar(){return new oi(-1)}}
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
const ai="LruGarbageCollector",ci=1048576;function ui([t,e],[n,r]){const s=H(t,n);return 0===s?H(e,r):s}class li{constructor(t){this.Pr=t,this.buffer=new pe(ui),this.Tr=0}Er(){return++this.Tr}Ir(t){const e=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();ui(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class hi{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(t){I(ai,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dt(t)?I(ai,"Ignoring IndexedDB error during garbage collection: ",t):await It(t)}await this.Ar(3e5)})}}class fi{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return At.resolve(kt.ce);const n=new li(e);return this.Vr.forEachTarget(t,t=>n.Ir(t.sequenceNumber)).next(()=>this.Vr.mr(t,t=>n.Ir(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector","Garbage collection skipped; disabled"),At.resolve(ri)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ri):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let n,r,s,i,o,a,c;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(I("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,i=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(t,n,e))).next(e=>(s=e,a=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(c=Date.now(),C()<=v.$b.DEBUG&&I("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(a-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),At.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:t})))}}function di(t,e){return new fi(t,e)}
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
class pi{constructor(){this.changes=new Zn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,on.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?At.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class gi{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class mi{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&Lr(n.mutation,t,me.empty(),mt.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,lr()).next(()=>e))}getLocalViewOfDocuments(t,e,n=lr()){const r=ir();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=rr();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=ir();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,lr()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let s=er();const i=ar(),o=function(){return ar()}();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Ur)?s=s.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),Lr(o.mutation,e,o.mutation.getFieldMask(),mt.now())):i.set(e.key,me.empty())}),this.recalculateAndSaveOverlays(t,s).next(t=>(t.forEach((t,e)=>i.set(t,e)),e.forEach((t,e)=>o.set(t,new gi(e,i.get(t)??null))),o))}recalculateAndSaveOverlays(t,e){const n=ar();let r=new he((t,e)=>t-e),s=lr();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const s of t)s.keys().forEach(t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||me.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||lr()).add(t);r=r.insert(s.batchId,a)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=or();c.forEach(t=>{if(!s.has(t)){const r=Rr(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}}),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return At.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n,r){return Fn(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Un(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):At.resolve(ir());let o=vt,a=s;return i.next(e=>At.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?At.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,s)).next(()=>this.computeViews(t,a,e,lr())).next(t=>({batchId:o,changes:sr(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new st(e)).next(t=>{let e=rr();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let i=rr();return this.indexManager.getCollectionParents(t,s).next(o=>At.forEach(o,o=>{const a=function(t,e){return new Mn(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(s));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(t=>{s.forEach((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,on.newInvalidDocument(r)))});let n=rr();return t.forEach((t,r)=>{const i=s.get(t);void 0!==i&&Lr(i.mutation,r,me.empty(),mt.now()),Qn(e,r)&&(n=n.insert(t,r))}),n})}}
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
 */class yi{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return At.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Ts(t.createTime)}}(e)),At.resolve()}getNamedQuery(t,e){return At.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(t){return{name:t.name,query:Zs(t.bundledQuery),readTime:Ts(t.readTime)}}(e)),At.resolve()}}
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
 */class vi{constructor(){this.overlays=new he(st.comparator),this.Lr=new Map}getOverlay(t,e){return At.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ir();return At.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.St(t,e,r)}),At.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Lr.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.Lr.delete(n)),At.resolve()}getOverlaysForCollection(t,e,n){const r=ir(),s=e.length+1,i=new st(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return At.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new he((t,e)=>t-e);const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=ir(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ir(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>o.set(t,e)),o.size()>=r)break;return At.resolve(o)}St(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Hr(e,n));let s=this.Lr.get(e);void 0===s&&(s=lr(),this.Lr.set(e,s)),this.Lr.set(e,s.add(n.key))}}
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
 */class wi{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(t){return At.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,At.resolve()}}
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
 */class bi{constructor(){this.kr=new pe(_i.qr),this.Kr=new pe(_i.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const n=new _i(t,e);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Wr(new _i(t,e))}Qr(t,e){t.forEach(t=>this.removeReference(t,e))}Gr(t){const e=new st(new et([])),n=new _i(e,t),r=new _i(e,t+1),s=[];return this.Kr.forEachInRange([n,r],t=>{this.Wr(t),s.push(t.key)}),s}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const e=new st(new et([])),n=new _i(e,t),r=new _i(e,t+1);let s=lr();return this.Kr.forEachInRange([n,r],t=>{s=s.add(t.key)}),s}containsKey(t){const e=new _i(t,0),n=this.kr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class _i{constructor(t,e){this.key=t,this.Jr=e}static qr(t,e){return st.comparator(t.key,e.key)||H(t.Jr,e.Jr)}static Ur(t,e){return H(t.Jr,e.Jr)||st.comparator(t.key,e.key)}}
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
 */class Ei{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new pe(_i.qr)}checkEmpty(t){return At.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Kr(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.Hr=this.Hr.add(new _i(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return At.resolve(i)}lookupMutationBatch(t,e){return At.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Xr(n),s=r<0?0:r;return At.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return At.resolve(0===this.mutationQueue.length?Nt:this.Yn-1)}getAllMutationBatches(t){return At.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new _i(e,0),r=new _i(e,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([n,r],t=>{const e=this.Zr(t.Jr);s.push(e)}),At.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new pe(H);return e.forEach(t=>{const e=new _i(t,0),r=new _i(t,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([e,r],t=>{n=n.add(t.Jr)})}),At.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;st.isDocumentKey(s)||(s=s.child(""));const i=new _i(new st(s),0);let o=new pe(H);return this.Hr.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Jr)),!0)},i),At.resolve(this.Yr(o))}Yr(t){const e=[];return t.forEach(t=>{const n=this.Zr(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){O(0===this.ei(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Hr;return At.forEach(e.mutations,r=>{const s=new _i(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Hr=n})}nr(t){}containsKey(t,e){const n=new _i(e,0),r=this.Hr.firstAfterOrEqual(n);return At.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,At.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class Ti{constructor(t){this.ti=t,this.docs=function(){return new he(st.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.ti(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return At.resolve(n?n.document.mutableCopy():on.newInvalidDocument(e))}getEntries(t,e){let n=er();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():on.newInvalidDocument(t))}),At.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=er();const i=e.path,o=new st(i.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||Tt(_t(o),n)<=0||(r.has(o.key)||Qn(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return At.resolve(s)}getAllFromCollectionGroup(t,e,n,r){k(9500)}ni(t,e){return At.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Si(this)}getSize(t){return At.resolve(this.size)}}class Si extends pi{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Mr.addEntry(t,r)):this.Mr.removeEntry(n)}),At.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}
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
 */class Ci{constructor(t){this.persistence=t,this.ri=new Zn(t=>Nn(t),On),this.lastRemoteSnapshotVersion=yt.min(),this.highestTargetId=0,this.ii=0,this.si=new bi,this.targetCount=0,this.oi=oi._r()}forEachTarget(t,e){return this.ri.forEach((t,n)=>e(n)),At.resolve()}getLastRemoteSnapshotVersion(t){return At.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return At.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),At.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ii&&(this.ii=e),At.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new oi(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,At.resolve()}updateTargetData(t,e){return this.lr(e),At.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,At.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.ri.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ri.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),At.waitFor(s).next(()=>r)}getTargetCount(t){return At.resolve(this.targetCount)}getTargetData(t,e){const n=this.ri.get(e)||null;return At.resolve(n)}addMatchingKeys(t,e,n){return this.si.$r(e,n),At.resolve()}removeMatchingKeys(t,e,n){this.si.Qr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(e=>{s.push(r.markPotentiallyOrphaned(t,e))}),At.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),At.resolve()}getMatchingKeysForTargetId(t,e){const n=this.si.jr(e);return At.resolve(n)}containsKey(t,e){return At.resolve(this.si.containsKey(e))}}
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
 */class Ii{constructor(t,e){this._i={},this.overlays={},this.ai=new kt(0),this.ui=!1,this.ui=!0,this.ci=new wi,this.referenceDelegate=t(this),this.li=new Ci(this),this.indexManager=new ei,this.remoteDocumentCache=function(t){return new Ti(t)}(t=>this.referenceDelegate.hi(t)),this.serializer=new Js(e),this.Pi=new yi(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vi,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this._i[t.toKey()];return n||(n=new Ei(e,this.referenceDelegate),this._i[t.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,n){I("MemoryPersistence","Starting transaction:",t);const r=new Ai(this.ai.next());return this.referenceDelegate.Ti(),n(r).next(t=>this.referenceDelegate.Ei(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ii(t,e){return At.or(Object.values(this._i).map(n=>()=>n.containsKey(t,e)))}}class Ai extends Ct{constructor(t){super(),this.currentSequenceNumber=t}}class xi{constructor(t){this.persistence=t,this.Ri=new bi,this.Ai=null}static Vi(t){return new xi(t)}get di(){if(this.Ai)return this.Ai;throw k(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.di.delete(n.toString()),At.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.di.add(n.toString()),At.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),At.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(t=>this.di.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.di.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ei(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return At.forEach(this.di,n=>{const r=st.fromPath(n);return this.mi(t,r).next(t=>{t||e.removeEntry(r,yt.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(t=>{t?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return At.or([()=>At.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ii(t,e)])}}class Di{constructor(t,e){this.persistence=t,this.fi=new Zn(t=>Pt(t.path),(t,e)=>t.isEqual(e)),this.garbageCollector=di(this,e)}static Vi(t,e){return new Di(t,e)}Ti(){}Ei(t){return At.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}pr(t){let e=0;return this.mr(t,t=>{e++}).next(()=>e)}mr(t,e){return At.forEach(this.fi,(n,r)=>this.wr(t,n,r).next(t=>t?At.resolve():e(r)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.ni(t,r=>this.wr(t,r,e).next(t=>{t||(n++,s.removeEntry(r,yt.min()))})).next(()=>s.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),At.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),At.resolve()}removeReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),At.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),At.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=He(t.data.value)),e}wr(t,e,n){return At.or([()=>this.persistence.Ii(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.fi.get(e);return At.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
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
class ki{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Ts=n,this.Es=r}static Is(t,e){let n=lr(),r=lr();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new ki(t,e.fromCache,n,r)}}
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
 */class Ni{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
 */class Oi{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return(0,a.nr)()?8:xt((0,a.ZQ)())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.gs(t,e).next(t=>{s.result=t}).next(()=>{if(!s.result)return this.ps(t,e,r,n).next(t=>{s.result=t})}).next(()=>{if(s.result)return;const n=new Ni;return this.ys(t,e,n).next(r=>{if(s.result=r,this.As)return this.ws(t,e,n,r.size)})}).next(()=>s.result)}ws(t,e,n,r){return n.documentReadCount<this.Vs?(C()<=v.$b.DEBUG&&I("QueryEngine","SDK will not create cache indexes for query:",Wn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),At.resolve()):(C()<=v.$b.DEBUG&&I("QueryEngine","Query:",Wn(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(C()<=v.$b.DEBUG&&I("QueryEngine","The SDK decides to create cache indexes for query:",Wn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,$n(e))):At.resolve())}gs(t,e){if(Vn(e))return At.resolve(null);let n=$n(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=Kn(e,null,"F"),n=$n(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const s=lr(...r);return this.fs.getDocuments(t,s).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const i=this.Ss(e,r);return this.bs(e,i,s,n.readTime)?this.gs(t,Kn(e,null,"F")):this.Ds(t,i,e,n)}))})))}ps(t,e,n,r){return Vn(e)||r.isEqual(yt.min())?At.resolve(null):this.fs.getDocuments(t,n).next(s=>{const i=this.Ss(e,s);return this.bs(e,i,n,r)?At.resolve(null):(C()<=v.$b.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Wn(e)),this.Ds(t,i,e,bt(r,vt)).next(t=>t))})}Ss(t,e){let n=new pe(Yn(t));return e.forEach((e,r)=>{Qn(t,r)&&(n=n.add(r))}),n}bs(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ys(t,e,n){return C()<=v.$b.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",Wn(e)),this.fs.getDocumentsMatchingQuery(t,e,Et.min(),n)}Ds(t,e,n,r){return this.fs.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
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
 */const Ri="LocalStore",Mi=3e8;class Li{constructor(t,e,n,r){this.persistence=t,this.Cs=e,this.serializer=r,this.vs=new he(H),this.Fs=new Zn(t=>Nn(t),On),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(n)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new mi(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Pi(t,e,n,r){return new Li(t,e,n,r)}async function Vi(t,e){const n=R(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(s=>(r=s,n.Os(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const s=[],i=[];let o=lr();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({Ns:t,removedBatchIds:s,addedBatchIds:i}))})})}function Fi(t,e){const n=R(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=At.resolve();return i.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const i=n.docVersions.get(t);O(null!==i,48541),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,s))}(n,t,e,s).next(()=>s.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=lr();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}function Ui(t){const e=R(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function ji(t,e){const n=R(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const o=[];e.targetChanges.forEach((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.li.removeMatchingKeys(t,i.removedDocuments,a).next(()=>n.li.addMatchingKeys(t,i.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(ve.EMPTY_BYTE_STRING,yt.min()).withLastLimboFreeSnapshotVersion(yt.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){if(0===t.resumeToken.approximateByteSize())return!0;const r=e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds();if(r>=Mi)return!0;const s=n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size;return s>0}(c,u,i)&&o.push(n.li.updateTargetData(t,u))});let a=er(),c=lr();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push($i(t,i,e.documentUpdates).next(t=>{a=t.Bs,c=t.Ls})),!r.isEqual(yt.min())){const e=n.li.getLastRemoteSnapshotVersion(t).next(e=>n.li.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return At.waitFor(o).next(()=>i.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.vs=s,t))}function $i(t,e,n){let r=lr(),s=lr();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=er();return n.forEach((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(yt.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):I(Ri,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Bs:r,Ls:s}})}function Bi(t,e){const n=R(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=Nt),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function qi(t,e){const n=R(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.li.getTargetData(t,e).next(s=>s?(r=s,At.resolve(r)):n.li.allocateTargetId(t).next(s=>(r=new Ys(e,s,"TargetPurposeListen",t.currentSequenceNumber),n.li.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.vs.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(t.targetId,t),n.Fs.set(e,t.targetId)),t})}async function zi(t,e,n){const r=R(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,t=>r.persistence.referenceDelegate.removeTarget(t,s))}catch(t){if(!Dt(t))throw t;I(Ri,`Failed to update sequence numbers for target ${e}: ${t}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Ki(t,e,n){const r=R(t);let s=yt.min(),i=lr();return r.persistence.runTransaction("Execute query","readwrite",t=>function(t,e,n){const r=R(t),s=r.Fs.get(n);return void 0!==s?At.resolve(r.vs.get(s)):r.li.getTargetData(e,n)}(r,t,$n(e)).next(e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>r.Cs.getDocumentsMatchingQuery(t,e,n?s:yt.min(),n?i:lr())).next(t=>(Gi(r,Xn(e),t),{documents:t,ks:i})))}function Gi(t,e,n){let r=t.Ms.get(e)||yt.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Ms.set(e,r)}class Hi{constructor(){this.activeTargetIds=fr()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wi{constructor(){this.vo=new Hi,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,n){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Hi,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Qi{Mo(t){}shutdown(){}}
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
 */const Xi="ConnectivityMonitor";class Yi{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){I(Xi,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){I(Xi,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Ji=null;function Zi(){return null===Ji?Ji=function(){return 268435456+Math.round(2147483648*Math.random())}():Ji++,"0x"+Ji.toString(16)
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
 */}const to="RestConnection",eo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class no{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===Ne?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(t,e,n,r,s){const i=Zi(),o=this.Qo(t,e.toUriEncodedString());I(to,`Sending RPC '${t}' ${i}:`,o,n);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,r,s);const{host:u}=new URL(o),l=(0,a.zJ)(u);return this.zo(t,o,c,n,l).then(e=>(I(to,`Received RPC '${t}' ${i}: `,e),e),e=>{throw x(to,`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e})}jo(t,e,n,r,s,i){return this.Wo(t,e,n,r,s)}Go(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+E}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Qo(t,e){const n=eo[t];let r=`${this.Ko}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}
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
 */class ro{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}
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
 */const so="WebChannelConnection",io=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};class oo extends no{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!oo.c_){const t=m();io(t,g.STAT_EVENT,t=>{t.stat===p.PROXY?I(so,"STAT_EVENT: detected buffering proxy"):t.stat===p.NOPROXY&&I(so,"STAT_EVENT: detected no buffering proxy")}),oo.c_=!0}}zo(t,e,n,r,s){const i=Zi();return new Promise((s,o)=>{const a=new l;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case d.NO_ERROR:const e=a.getResponseJson();I(so,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case d.TIMEOUT:I(so,`RPC '${t}' ${i} timed out`),o(new L(M.DEADLINE_EXCEEDED,"Request time out"));break;case d.HTTP_ERROR:const n=a.getStatus();if(I(so,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=t?.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(e)>=0?e:M.UNKNOWN}(e.status);o(new L(t,e.message))}else o(new L(M.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(M.UNAVAILABLE,"Connection failed."));break;default:k(9055,{l_:t,streamId:i,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{I(so,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(r);I(so,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)})}T_(t,e,n){const r=Zi(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},a=this.longPollingOptions.timeoutSeconds;void 0!==a&&(o.longPollingTimeout=Math.round(1e3*a)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Go(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const c=s.join("");I(so,`Creating RPC '${t}' stream ${r}: ${c}`,o);const u=i.createWebChannel(c,o);this.E_(u);let l=!1,f=!1;const d=new ro({Jo:e=>{f?I(so,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(I(so,`Opening RPC '${t}' stream ${r} transport.`),u.open(),l=!0),I(so,`RPC '${t}' stream ${r} sending:`,e),u.send(e))},Ho:()=>u.close()});return io(u,h.EventType.OPEN,()=>{f||(I(so,`RPC '${t}' stream ${r} transport opened.`),d.i_())}),io(u,h.EventType.CLOSE,()=>{f||(f=!0,I(so,`RPC '${t}' stream ${r} transport closed`),d.o_(),this.I_(u))}),io(u,h.EventType.ERROR,e=>{f||(f=!0,x(so,`RPC '${t}' stream ${r} transport errored. Name:`,e.name,"Message:",e.message),d.o_(new L(M.UNAVAILABLE,"The operation could not be completed")))}),io(u,h.EventType.MESSAGE,e=>{if(!f){const n=e.data[0];O(!!n,16349);const s=n,i=s?.error||s[0]?.error;if(i){I(so,`RPC '${t}' stream ${r} received error:`,i);const e=i.status;let n=function(t){const e=Qr[t];if(void 0!==e)return Jr(e)}(e),s=i.message;"NOT_FOUND"===e&&s.includes("database")&&s.includes("does not exist")&&s.includes(this.databaseId.database)&&x(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=M.INTERNAL,s="Unknown error status: "+e+" with message "+i.message),f=!0,d.o_(new L(n,s)),u.close()}else I(so,`RPC '${t}' stream ${r} received:`,n),d.__(n)}}),oo.u_(),setTimeout(()=>{d.s_()},0),d}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,n){super.Go(t,e,n),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return y()}}
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
 */function ao(t){return new oo(t)}
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
 */function co(){return"undefined"!=typeof document?document:null}
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
 */function uo(t){return new vs(t,!0)}
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
 */oo.c_=!1;class lo{constructor(t,e,n=1e3,r=1.5,s=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=r,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,e-n);r>0&&I("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
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
 */const ho="PersistentStream";class fo{constructor(t,e,n,r,s,i,o,a){this.Ci=t,this.S_=n,this.b_=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new lo(t,e)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.K_(),this.U_(),this.M_.cancel(),this.D_++,4!==t?this.M_.reset():e&&e.code===M.RESOURCE_EXHAUSTED?(A(e.toString()),A("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===M.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.D_===e&&this.G_(t,n)},e=>{t(()=>{const t=new L(M.UNKNOWN,"Fetching auth token failed: "+e.message);return this.z_(t)})})}G_(t,e){const n=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(t=>{n(()=>this.z_(t))}),this.stream.onMessage(t=>{n(()=>1==++this.F_?this.J_(t):this.onNext(t))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return I(ho,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(I(ho,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class po extends fo{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Ms(this.serializer,t),n=function(t){if(!("targetChange"in t))return yt.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?yt.min():e.readTime?Ts(e.readTime):yt.min()}(t);return this.listener.H_(e,n)}Z_(t){const e={};e.database=Ns(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Rn(r)?{documents:Vs(t,r)}:{query:Fs(t,r).ft},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=_s(t,e.resumeToken);const r=ws(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(yt.min())>0){n.readTime=bs(t,e.snapshotVersion.toTimestamp());const r=ws(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=js(this.serializer,t);n&&(e.labels=n),this.q_(e)}X_(t){const e={};e.database=Ns(this.serializer),e.removeTarget=t,this.q_(e)}}class go extends fo{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return O(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,O(!t.writeResults||0===t.writeResults.length,55816),this.listener.ta()}onNext(t){O(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Ps(t.writeResults,t.commitTime),n=Ts(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=Ns(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Ls(this.serializer,t))};this.q_(e)}}
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
 */class mo{}class yo extends mo{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new L(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Wo(t,Cs(e,n),r,s,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(M.UNKNOWN,t.toString())})}jo(t,e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.jo(t,Cs(e,n),r,i,o,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(M.UNKNOWN,t.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function vo(t,e,n,r){return new yo(t,e,n,r)}class wo{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,"Online"===t&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(A(e),this.aa=!1):I("OnlineStateTracker",e)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
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
 */const bo="RemoteStore";class _o{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(t=>{n.enqueueAndForget(async()=>{ko(this)&&(I(bo,"Restarting streams for network reachability change."),await async function(t){const e=R(t);e.Ia.add(4),await To(e),e.Va.set("Unknown"),e.Ia.delete(4),await Eo(e)}(this))})}),this.Va=new wo(n,r)}}async function Eo(t){if(ko(t))for(const e of t.Ra)await e(!0)}async function To(t){for(const e of t.Ra)await e(!1)}function So(t,e){const n=R(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Do(n)?xo(n):Qo(n).O_()&&Io(n,e))}function Co(t,e){const n=R(t),r=Qo(n);n.Ea.delete(e),r.O_()&&Ao(n,e),0===n.Ea.size&&(r.O_()?r.L_():ko(n)&&n.Va.set("Unknown"))}function Io(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(yt.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qo(t).Z_(e)}function Ao(t,e){t.da.$e(e),Qo(t).X_(e)}function xo(t){t.da=new fs({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Qo(t).start(),t.Va.ua()}function Do(t){return ko(t)&&!Qo(t).x_()&&t.Ea.size>0}function ko(t){return 0===R(t).Ia.size}function No(t){t.da=void 0}async function Oo(t){t.Va.set("Online")}async function Ro(t){t.Ea.forEach((e,n)=>{Io(t,e)})}async function Mo(t,e){No(t),Do(t)?(t.Va.ha(e),xo(t)):t.Va.set("Unknown")}async function Lo(t,e,n){if(t.Va.set("Online"),e instanceof ls&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Ea.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Ea.delete(r),t.da.removeTarget(r))}(t,e)}catch(n){I(bo,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Po(t,n)}else if(e instanceof cs?t.da.Xe(e):e instanceof us?t.da.st(e):t.da.tt(e),!n.isEqual(yt.min()))try{const e=await Ui(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.da.Tt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.Ea.get(r);s&&t.Ea.set(r,s.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach((e,n)=>{const r=t.Ea.get(e);if(!r)return;t.Ea.set(e,r.withResumeToken(ve.EMPTY_BYTE_STRING,r.snapshotVersion)),Ao(t,e);const s=new Ys(r.target,e,n,r.sequenceNumber);Io(t,s)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){I(bo,"Failed to raise snapshot:",e),await Po(t,e)}}async function Po(t,e,n){if(!Dt(e))throw e;t.Ia.add(1),await To(t),t.Va.set("Offline"),n||(n=()=>Ui(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{I(bo,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Eo(t)})}function Vo(t,e){return e().catch(n=>Po(t,n,e))}async function Fo(t){const e=R(t),n=Xo(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Nt;for(;Uo(e);)try{const t=await Bi(e.localStore,r);if(null===t){0===e.Ta.length&&n.L_();break}r=t.batchId,jo(e,t)}catch(t){await Po(e,t)}$o(e)&&Bo(e)}function Uo(t){return ko(t)&&t.Ta.length<10}function jo(t,e){t.Ta.push(e);const n=Xo(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function $o(t){return ko(t)&&!Xo(t).x_()&&t.Ta.length>0}function Bo(t){Xo(t).start()}async function qo(t){Xo(t).ra()}async function zo(t){const e=Xo(t);for(const n of t.Ta)e.ea(n.mutations)}async function Ko(t,e,n){const r=t.Ta.shift(),s=Gr.from(r,e,n);await Vo(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Fo(t)}async function Go(t,e){e&&Xo(t).Y_&&await async function(t,e){if(function(t){return Yr(t)&&t!==M.ABORTED}(e.code)){const n=t.Ta.shift();Xo(t).B_(),await Vo(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Fo(t)}}(t,e),$o(t)&&Bo(t)}async function Ho(t,e){const n=R(t);n.asyncQueue.verifyOperationInProgress(),I(bo,"RemoteStore received new credentials");const r=ko(n);n.Ia.add(3),await To(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Eo(n)}async function Wo(t,e){const n=R(t);e?(n.Ia.delete(2),await Eo(n)):e||(n.Ia.add(2),await To(n),n.Va.set("Unknown"))}function Qo(t){return t.ma||(t.ma=function(t,e,n){const r=R(t);return r.sa(),new po(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
 */}(t.datastore,t.asyncQueue,{Zo:Oo.bind(null,t),Yo:Ro.bind(null,t),t_:Mo.bind(null,t),H_:Lo.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Do(t)?xo(t):t.Va.set("Unknown")):(await t.ma.stop(),No(t))})),t.ma}function Xo(t){return t.fa||(t.fa=function(t,e,n){const r=R(t);return r.sa(),new go(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:qo.bind(null,t),t_:Go.bind(null,t),ta:zo.bind(null,t),na:Ko.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Fo(t)):(await t.fa.stop(),t.Ta.length>0&&(I(bo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa
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
 */}class Yo{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new P,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new Yo(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new L(M.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jo(t,e){if(A("AsyncQueue",`${e}: ${t}`),Dt(t))return new L(M.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Zo{static emptySet(t){return new Zo(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||st.comparator(e.key,n.key):(t,e)=>st.comparator(t.key,e.key),this.keyedMap=rr(),this.sortedSet=new he(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Zo))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Zo;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class ta{constructor(){this.ga=new he(st.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?0!==t.type&&3===n.type?this.ga=this.ga.insert(e,t):3===t.type&&1!==n.type?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.ga=this.ga.remove(e):1===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):k(63341,{Vt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class ea{constructor(t,e,n,r,s,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,s){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new ea(t,e,Zo.emptySet(e),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Gn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class na{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class ra{constructor(){this.queries=sa(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(t,e){const n=R(t),r=n.queries;n.queries=sa(),r.forEach((t,n)=>{for(const r of n.Sa)r.onError(e)})}(this,new L(M.ABORTED,"Firestore shutting down"))}}function sa(){return new Zn(t=>Hn(t),Gn)}async function ia(t,e){const n=R(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new na,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(t){const n=Jo(t,`Initialization of query '${Wn(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&ua(n)}async function oa(t,e){const n=R(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const t=i.Sa.indexOf(e);t>=0&&(i.Sa.splice(t,1),0===i.Sa.length?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function aa(t,e){const n=R(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.Sa)t.Fa(s)&&(r=!0);e.wa=s}}r&&ua(n)}function ca(t,e,n){const r=R(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function ua(t){t.Ca.forEach(t=>{t.next()})}var la,ha;(ha=la||(la={})).Ma="default",ha.Cache="cache";class fa{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ea(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==e;return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}ka(t){t=ea.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==la.Cache}}
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
class da{constructor(t){this.key=t}}class pa{constructor(t){this.key=t}}class ga{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=lr(),this.mutatedKeys=lr(),this.eu=Yn(t),this.tu=new Zo(this.eu)}get nu(){return this.Za}ru(t,e){const n=e?e.iu:new ta,r=e?e.tu:this.tu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=Qn(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.su(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.eu(l,a)>0||c&&this.eu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(i=i.add(l),s=f?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{tu:i,iu:n,bs:o,mutatedKeys:s}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const s=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const i=t.iu.ya();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return k(20277,{Vt:t})}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.eu(t.doc,e.doc)),this.ou(n),r=r??!1;const o=e&&!r?this._u():[],a=0===this.Ya.size&&this.current&&!r?1:0,c=a!==this.Xa;return this.Xa=a,0!==i.length||c?{snapshot:new ea(this.query,t.tu,s,i,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ta,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=lr(),this.tu.forEach(t=>{this.uu(t.key)&&(this.Ya=this.Ya.add(t.key))});const e=[];return t.forEach(t=>{this.Ya.has(t)||e.push(new pa(t))}),this.Ya.forEach(n=>{t.has(n)||e.push(new da(n))}),e}cu(t){this.Za=t.ks,this.Ya=lr();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return ea.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}}const ma="SyncEngine";class ya{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class va{constructor(t){this.key=t,this.hu=!1}}class wa{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Pu={},this.Tu=new Zn(t=>Hn(t),Gn),this.Eu=new Map,this.Iu=new Set,this.Ru=new he(st.comparator),this.Au=new Map,this.Vu=new bi,this.du={},this.mu=new Map,this.fu=oi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function ba(t,e,n=!0){const r=Ba(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Ea(r,e,n,!0),s}async function _a(t,e){const n=Ba(t);await Ea(n,e,!0,!1)}async function Ea(t,e,n,r){const s=await qi(t.localStore,$n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await Ta(t,e,i,"current"===o,s.resumeToken)),t.isPrimaryClient&&n&&So(t.remoteStore,s),a}async function Ta(t,e,n,r,s){t.pu=(e,n,r)=>async function(t,e,n,r){let s=e.view.ru(n);s.bs&&(s=await Ki(t.localStore,e.query,!1).then(({documents:t})=>e.view.ru(t,s)));const i=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(s,t.isPrimaryClient,i,o);return Pa(t,e.targetId,a.au),a.snapshot}(t,e,n,r);const i=await Ki(t.localStore,e,!0),o=new ga(e,i.ks),a=o.ru(i.documents),c=as.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,s),u=o.applyChanges(a,t.isPrimaryClient,c);Pa(t,n,u.au);const l=new ya(e,n,o);return t.Tu.set(e,l),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),u.snapshot}async function Sa(t,e,n){const r=R(t),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(t=>!Gn(t,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Co(r.remoteStore,s.targetId),Ma(r,s.targetId)}).catch(It)):(Ma(r,s.targetId),await zi(r.localStore,s.targetId,!0))}async function Ca(t,e){const n=R(t),r=n.Tu.get(e),s=n.Eu.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Co(n.remoteStore,r.targetId))}async function Ia(t,e,n){const r=qa(t);try{const t=await function(t,e){const n=R(t),r=mt.now(),s=e.reduce((t,e)=>t.add(e.key),lr());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=er(),c=lr();return n.xs.getEntries(t,s).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(s=>{i=s;const o=[];for(const t of e){const e=Pr(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Ur(t.key,e,sn(e.value.mapValue),kr.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:sr(i)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.du[t.currentUser.toKey()];r||(r=new he(H)),r=r.insert(e,n),t.du[t.currentUser.toKey()]=r}(r,t.batchId,n),await Ua(r,t.changes),await Fo(r.remoteStore)}catch(t){const e=Jo(t,"Failed to persist write");n.reject(e)}}async function Aa(t,e){const n=R(t);try{const t=await ji(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Au.get(e);r&&(O(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.hu=!0:t.modifiedDocuments.size>0?O(r.hu,14607):t.removedDocuments.size>0&&(O(r.hu,42227),r.hu=!1))}),await Ua(n,t,e)}catch(t){await It(t)}}function xa(t,e,n){const r=R(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Tu.forEach((n,r)=>{const s=r.view.va(e);s.snapshot&&t.push(s.snapshot)}),function(t,e){const n=R(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const s of n.Sa)s.va(e)&&(r=!0)}),r&&ua(n)}(r.eventManager,e),t.length&&r.Pu.H_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Da(t,e,n){const r=R(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let t=new he(st.comparator);t=t.insert(i,on.newNoDocument(i,yt.min()));const n=lr().add(i),s=new os(yt.min(),new Map,new he(H),t,n);await Aa(r,s),r.Ru=r.Ru.remove(i),r.Au.delete(e),Fa(r)}else await zi(r.localStore,e,!1).then(()=>Ma(r,e,n)).catch(It)}async function ka(t,e){const n=R(t),r=e.batch.batchId;try{const t=await Fi(n.localStore,e);Ra(n,r,null),Oa(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ua(n,t)}catch(t){await It(t)}}async function Na(t,e,n){const r=R(t);try{const t=await function(t,e){const n=R(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(O(null!==e,37113),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);Ra(r,e,n),Oa(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ua(r,t)}catch(n){await It(n)}}function Oa(t,e){(t.mu.get(e)||[]).forEach(t=>{t.resolve()}),t.mu.delete(e)}function Ra(t,e,n){const r=R(t);let s=r.du[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Ma(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(e=>{t.Vu.containsKey(e)||La(t,e)})}function La(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);null!==n&&(Co(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Fa(t))}function Pa(t,e,n){for(const r of n)r instanceof da?(t.Vu.addReference(r.key,e),Va(t,r)):r instanceof pa?(I(ma,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||La(t,r.key)):k(19791,{wu:r})}function Va(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(I(ma,"New document in limbo: "+n),t.Iu.add(r),Fa(t))}function Fa(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new st(et.fromString(e)),r=t.fu.next();t.Au.set(r,new va(n)),t.Ru=t.Ru.insert(n,r),So(t.remoteStore,new Ys($n(Pn(n.path)),r,"TargetPurposeLimboResolution",kt.ce))}}async function Ua(t,e,n){const r=R(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((t,a)=>{o.push(r.pu(a,e,n).then(t=>{if((t||n)&&r.isPrimaryClient){const e=t?!t.fromCache:n?.targetChanges.get(a.targetId)?.current;r.sharedClientState.updateQueryState(a.targetId,e?"current":"not-current")}if(t){s.push(t);const e=ki.Is(a.targetId,t);i.push(e)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(t,e){const n=R(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>At.forEach(e,e=>At.forEach(e.Ts,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>At.forEach(e.Es,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Dt(t))throw t;I(Ri,"Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.vs.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.vs=n.vs.insert(t,s)}}}(r.localStore,i))}async function ja(t,e){const n=R(t);if(!n.currentUser.isEqual(e)){I(ma,"User change. New user:",e.toKey());const t=await Vi(n.localStore,e);n.currentUser=e,function(t,e){t.mu.forEach(t=>{t.forEach(t=>{t.reject(new L(M.CANCELLED,e))})}),t.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ua(n,t.Ns)}}function $a(t,e){const n=R(t),r=n.Au.get(e);if(r&&r.hu)return lr().add(r.key);{let t=lr();const r=n.Eu.get(e);if(!r)return t;for(const e of r){const r=n.Tu.get(e);t=t.unionWith(r.view.nu)}return t}}function Ba(t){const e=R(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Aa.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$a.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Da.bind(null,e),e.Pu.H_=aa.bind(null,e.eventManager),e.Pu.yu=ca.bind(null,e.eventManager),e}function qa(t){const e=R(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ka.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Na.bind(null,e),e}class za{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=uo(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Pi(this.persistence,new Oi,t.initialUser,this.serializer)}Cu(t){return new Ii(xi.Vi,this.serializer)}Du(t){return new Wi}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}za.provider={build:()=>new za};class Ka extends za{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){O(this.persistence.referenceDelegate instanceof Di,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new hi(n,t.asyncQueue,e)}Cu(t){const e=void 0!==this.cacheSizeBytes?ii.withCacheSize(this.cacheSizeBytes):ii.DEFAULT;return new Ii(t=>Di.Vi(t,e),this.serializer)}}class Ga{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>xa(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ja.bind(null,this.syncEngine),await Wo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ra}()}createDatastore(t){const e=uo(t.databaseInfo.databaseId),n=ao(t.databaseInfo);return vo(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,s){return new _o(t,e,n,r,s)}(this.localStore,this.datastore,t.asyncQueue,t=>xa(this.syncEngine,t,0),function(){return Yi.v()?new Yi:new Qi}())}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new wa(t,e,n,r,s,i);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await async function(t){const e=R(t);I(bo,"RemoteStore shutting down."),e.Ia.add(5),await To(e),e.Aa.shutdown(),e.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ga.provider={build:()=>new Ga};
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
class Ha{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):A("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}
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
const Wa="FirestoreClient";class Qa{constructor(t,e,n,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this._databaseInfo=r,this.user=_.UNAUTHENTICATED,this.clientId=G.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async t=>{I(Wa,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(I(Wa,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new P;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Jo(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Xa(t,e){t.asyncQueue.verifyOperationInProgress(),I(Wa,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Vi(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ya(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ja(t);I(Wa,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(t=>Ho(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>Ho(e.remoteStore,n)),t._onlineComponents=e}async function Ja(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){I(Wa,"Using user provided OfflineComponentProvider");try{await Xa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;x("Error using user provided cache. Falling back to memory cache: "+n),await Xa(t,new za)}}else I(Wa,"Using default OfflineComponentProvider"),await Xa(t,new Ka(void 0));return t._offlineComponents}async function Za(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(I(Wa,"Using user provided OnlineComponentProvider"),await Ya(t,t._uninitializedComponentsProvider._online)):(I(Wa,"Using default OnlineComponentProvider"),await Ya(t,new Ga))),t._onlineComponents}function tc(t){return Za(t).then(t=>t.syncEngine)}async function ec(t){const e=await Za(t),n=e.eventManager;return n.onListen=ba.bind(null,e.syncEngine),n.onUnlisten=Sa.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_a.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ca.bind(null,e.syncEngine),n}function nc(t,e,n,r){const s=new Ha(r),i=new fa(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>ia(await ec(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>oa(await ec(t),i))}}function rc(t,e){const n=new P;return t.asyncQueue.enqueueAndForget(async()=>Ia(await tc(t),e,n)),n.promise}
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
function sc(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const ic="ComponentProvider",oc=new Map;function ac(t,e,n,r,s){return new ke(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,sc(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}
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
 */const cc="firestore.googleapis.com",uc=!0;class lc{constructor(t){if(void 0===t.host){if(void 0!==t.ssl)throw new L(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cc,this.ssl=uc}else this.host=t.host,this.ssl=t.ssl??uc;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=si;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<ci)throw new L(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ot("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sc(t.experimentalLongPollingOptions??{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new L(M.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class hc{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new L(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lc(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new F;switch(t.type){case"firstParty":return new B(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new L(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=oc.get(t);e&&(I(ic,"Removing Datastore"),oc.delete(t),e.terminate())}(this),Promise.resolve()}}function fc(t,e,n,r={}){t=ht(t,hc);const s=(0,a.zJ)(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(0,a.gE)(`https://${c}`),i.host!==cc&&i.host!==c&&x("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!(0,a.bD)(u,o)&&(t._setSettings(u),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=_.MOCK_USER;else{e=(0,a.Fy)(r.mockUserToken,t._app?.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new L(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new _(s)}t._authCredentials=new U(new V(e,n))}}
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
 */class dc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new dc(this.firestore,t,this._query)}}class pc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pc(this.firestore,t,this._key)}toJSON(){return{type:pc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(dt(e,pc._jsonSchema))return new pc(t,n||null,new st(et.fromString(e.referencePath)))}}pc._jsonSchemaVersion="firestore/documentReference/1.0",pc._jsonSchema={type:ft("string",pc._jsonSchemaVersion),referencePath:ft("string")};class gc extends dc{constructor(t,e,n){super(t,e,Pn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pc(this.firestore,null,new st(t))}withConverter(t){return new gc(this.firestore,t,this._path)}}function mc(t,e,...n){if(t=(0,a.Ku)(t),it("collection","path",e),t instanceof hc){const r=et.fromString(e,...n);return ct(r),new gc(t,null,r)}{if(!(t instanceof pc||t instanceof gc))throw new L(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return ct(r),new gc(t.firestore,null,r)}}function yc(t,e,...n){if(t=(0,a.Ku)(t),1===arguments.length&&(e=G.newId()),it("doc","path",e),t instanceof hc){const r=et.fromString(e,...n);return at(r),new pc(t,null,new st(r))}{if(!(t instanceof pc||t instanceof gc))throw new L(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return at(r),new pc(t.firestore,t instanceof gc?t.converter:null,new st(r))}}
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
const vc="AsyncQueue";class wc{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new lo(this,"async_queue_retry"),this._c=()=>{const t=co();t&&I(vc,"Visibility state changed to "+t.visibilityState),this.M_.w_()},this.ac=t;const e=co();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=co();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new P;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!Dt(t))throw t;I(vc,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(t=>{throw this.nc=t,this.rc=!1,A("INTERNAL UNHANDLED ERROR: ",bc(t)),t}).then(t=>(this.rc=!1,t))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const r=Yo.createAndSchedule(this,t,e,n,t=>this.hc(t));return this.tc.push(r),r}uc(){this.nc&&k(47125,{Pc:bc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do{t=this.ac,await t}while(t!==this.ac)}Ec(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function bc(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e
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
 */}class _c extends hc{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new wc,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new wc(t),this._firestoreClient=void 0,await t}}}function Ec(t,e){const n="object"==typeof t?t:(0,i.Sx)(),r="string"==typeof t?t:e||Ne,s=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,a.yU)("firestore");t&&fc(s,...t)}return s}function Tc(t){if(t._terminated)throw new L(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Sc(t),t._firestoreClient}function Sc(t){const e=t._freezeSettings(),n=ac(t._databaseId,t._app?.options.appId||"",t._persistenceKey,t._app?.options.apiKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Qa(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(t){const e=t?._online.build();return{_offline:t?._offline.build(e),_online:e}}(t._componentsProvider))}
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
class Cc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Cc(ve.fromBase64String(t))}catch(t){throw new L(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Cc(ve.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Cc._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(dt(t,Cc._jsonSchema))return Cc.fromBase64String(t.bytes)}}Cc._jsonSchemaVersion="firestore/bytes/1.0",Cc._jsonSchema={type:ft("string",Cc._jsonSchemaVersion),bytes:ft("string")};
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
class Ic{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new L(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Ac{constructor(t){this._methodName=t}}
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
 */class xc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xc._jsonSchemaVersion}}static fromJSON(t){if(dt(t,xc._jsonSchema))return new xc(t.latitude,t.longitude)}}xc._jsonSchemaVersion="firestore/geoPoint/1.0",xc._jsonSchema={type:ft("string",xc._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};
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
class Dc{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Dc._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(dt(t,Dc._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(t=>"number"==typeof t))return new Dc(t.vectorValues);throw new L(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dc._jsonSchemaVersion="firestore/vectorValue/1.0",Dc._jsonSchema={type:ft("string",Dc._jsonSchemaVersion),vectorValues:ft("object")};
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
const kc=/^__.*__$/;class Nc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ur(t,this.data,this.fieldMask,e,this.fieldTransforms):new Fr(t,this.data,e,this.fieldTransforms)}}class Oc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ur(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Rc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k(40011,{dataSource:t})}}class Mc{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Mc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){const e=this.path?.child(t),n=this.i({path:e,arrayElement:!1});return n.mc(t),n}fc(t){const e=this.path?.child(t),n=this.i({path:e,arrayElement:!1});return n.Ac(),n}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return Qc(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(0===t.length)throw this.yc("Document fields must not be empty");if(Rc(this.dataSource)&&kc.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class Lc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||uo(t)}I(t,e,n,r=!1){return new Mc({dataSource:t,methodName:e,targetDoc:n,path:rt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pc(t){const e=t._freezeSettings(),n=uo(t._databaseId);return new Lc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vc(t,e,n,r,s,i={}){const o=t.I(i.merge||i.mergeFields?2:0,e,n,s);Kc("Data must be an object, but it was:",o,r);const a=qc(r,o);let c,u;if(i.merge)c=new me(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=Gc(e,r,n);if(!o.contains(s))throw new L(M.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Xc(t,s)||t.push(s)}c=new me(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new Nc(new rn(a),c,u)}class Fc extends Ac{_toFieldTransform(t){if(2!==t.dataSource)throw 1===t.dataSource?t.yc(`${this._methodName}() can only appear at the top level of your update data`):t.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Fc}}function Uc(t,e,n,r){const s=t.I(1,e,n);Kc("Data must be an object, but it was:",s,r);const i=[],o=rn.empty();ue(r,(t,r)=>{const c=Wc(e,t,n);r=(0,a.Ku)(r);const u=s.fc(c);if(r instanceof Fc)i.push(c);else{const t=Bc(r,u);null!=t&&(i.push(c),o.set(c,t))}});const c=new me(i);return new Oc(o,c,s.fieldTransforms)}function jc(t,e,n,r,s,i){const o=t.I(1,e,n),c=[Gc(e,r,n)],u=[s];if(i.length%2!=0)throw new L(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<i.length;a+=2)c.push(Gc(e,i[a])),u.push(i[a+1]);const l=[],h=rn.empty();for(let d=c.length-1;d>=0;--d)if(!Xc(l,c[d])){const t=c[d];let e=u[d];e=(0,a.Ku)(e);const n=o.fc(t);if(e instanceof Fc)l.push(t);else{const r=Bc(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new me(l);return new Oc(h,f,o.fieldTransforms)}function $c(t,e,n,r=!1){return Bc(n,t.I(r?4:3,e))}function Bc(t,e){if(zc(t=(0,a.Ku)(t)))return Kc("Unsupported field value:",e,t),qc(t,e);if(t instanceof Ac)return function(t,e){if(!Rc(e.dataSource))throw e.yc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.yc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&4!==e.dataSource)throw e.yc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=Bc(s,e.gc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return gr(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=mt.fromDate(t);return{timestampValue:bs(e.serializer,n)}}if(t instanceof mt){const n=new mt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:bs(e.serializer,n)}}if(t instanceof xc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Cc)return{bytesValue:_s(e.serializer,t._byteString)};if(t instanceof pc){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.yc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ss(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof Dc)return function(t,e){const n=t instanceof Dc?t.toArray():t,r={fields:{[Me]:{stringValue:Ve},[Fe]:{arrayValue:{values:n.map(t=>{if("number"!=typeof t)throw e.yc("VectorValues must only contain numeric values.");return dr(e.serializer,t)})}}}};return{mapValue:r}}(t,e);if(Xs(t))return t._toProto(e.serializer);throw e.yc(`Unsupported field value: ${lt(t)}`)}(t,e)}function qc(t,e){const n={};return le(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ue(t,(t,r)=>{const s=Bc(r,e.dc(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}function zc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof xc||t instanceof Cc||t instanceof pc||t instanceof Ac||t instanceof Dc||Xs(t))}function Kc(t,e,n){if(!zc(n)||!ut(n)){const r=lt(n);throw"an object"===r?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Gc(t,e,n){if((e=(0,a.Ku)(e))instanceof Ic)return e._internalPath;if("string"==typeof e)return Wc(t,e);throw Qc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Hc=new RegExp("[~\\*/\\[\\]]");function Wc(t,e,n){if(e.search(Hc)>=0)throw Qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ic(...e.split("."))._internalPath}catch(r){throw Qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new L(M.INVALID_ARGUMENT,a+t+c)}function Xc(t,e){return t.some(t=>t.isEqual(e))}
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
class Yc{convertValue(t,e="none"){switch(Ue(t)){case 0:return null;case 1:return t.booleanValue;case 2:return _e(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw k(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ue(t,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertVectorValue(t){const e=t.fields?.[Fe].arrayValue?.values?.map(t=>_e(t.doubleValue));return new Dc(e)}convertGeoPoint(t){return new xc(_e(t.latitude),_e(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=xe(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(De(t));default:return null}}convertTimestamp(t){const e=be(t);return new mt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=et.fromString(t);O(Qs(n),9688,{name:t});const r=new Oe(n.get(1),n.get(3)),s=new st(n.popFirst(5));return r.isEqual(e)||A(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
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
 */class Jc extends Yc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Cc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new pc(this.firestore,null,e)}}
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
 */const Zc="@firebase/firestore",tu="4.14.0";
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
 */function eu(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
class nu{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ru(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){const e=this._document.data.field(Gc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ru extends nu{data(){return super.data()}}
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
 */function su(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new L(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iu{}class ou extends iu{}function au(t,e,...n){let r=[];e instanceof iu&&r.push(e),r=r.concat(n),function(t){const e=t.filter(t=>t instanceof uu).length,n=t.filter(t=>t instanceof cu).length;if(e>1||e>0&&n>0)throw new L(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
 */(r);for(const s of r)t=s._apply(t);return t}class cu extends ou{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new cu(t,e,n)}_apply(t){const e=this._parse(t);return pu(t._query,e),new dc(t.firestore,t.converter,qn(t._query,e))}_parse(t){const e=Pc(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new L(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){du(o,i);const e=[];for(const n of o)e.push(fu(r,t,n));a={arrayValue:{values:e}}}else a=fu(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||du(o,i),a=$c(n,e,o,"in"===i||"not-in"===i);const c=dn.create(s,i,a);return c}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class uu extends iu{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new uu(t,e)}_parse(t){const e=this._queryConstraints.map(e=>e._parse(t)).filter(t=>t.getFilters().length>0);return 1===e.length?e[0]:pn.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const s of r)pu(n,s),n=qn(n,s)}(t._query,e),new dc(t.firestore,t.converter,qn(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class lu extends ou{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new lu(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new L(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new L(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new ln(e,n);return r}(t._query,this._field,this._direction);return new dc(t.firestore,t.converter,zn(t._query,e))}}function hu(t,e="asc"){const n=e,r=Gc("orderBy",t);return lu._create(r,n)}function fu(t,e,n){if("string"==typeof(n=(0,a.Ku)(n))){if(""===n)throw new L(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Un(e)&&-1!==n.indexOf("/"))throw new L(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(et.fromString(n));if(!st.isDocumentKey(r))throw new L(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return We(t,new st(r))}if(n instanceof pc)return We(t,n._key);throw new L(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lt(n)}.`)}function du(t,e){if(!Array.isArray(t)||0===t.length)throw new L(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pu(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new L(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function gu(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class mu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class yu extends nu{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new vu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Gc("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=yu._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e):e}}yu._jsonSchemaVersion="firestore/documentSnapshot/1.0",yu._jsonSchema={type:ft("string",yu._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class vu extends yu{data(t={}){return super.data(t)}}class wu{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new mu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new vu(this._firestore,this._userDataWriter,n.key,n,new mu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const r=new vu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new mu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new vu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new mu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:bu(e.type),doc:r,oldIndex:s,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=wu._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=G.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],r=[];return this.docs.forEach(t=>{null!==t._document&&(e.push(t._document),n.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),r.push(t.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function bu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return k(61501,{type:t})}}
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
wu._jsonSchemaVersion="firestore/querySnapshot/1.0",wu._jsonSchema={type:ft("string",wu._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};function _u(t,e,n,...r){t=ht(t,pc);const s=ht(t.firestore,_c),i=Pc(s);let o;return o="string"==typeof(e=(0,a.Ku)(e))||e instanceof Ic?jc(i,"updateDoc",t._key,e,n,r):Uc(i,"updateDoc",t._key,e),Cu(s,[o.toMutation(t._key,kr.exists(!0))])}function Eu(t){return Cu(ht(t.firestore,_c),[new qr(t._key,kr.none())])}function Tu(t,e){const n=ht(t.firestore,_c),r=yc(t),s=gu(t.converter,e),i=Pc(t.firestore);return Cu(n,[Vc(i,"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,kr.exists(!1))]).then(()=>r)}function Su(t,...e){t=(0,a.Ku)(t);let n={includeMetadataChanges:!1,source:"default"},r=0;"object"!=typeof e[r]||eu(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(eu(e[r])){const t=e[r];e[r]=t.next?.bind(t),e[r+1]=t.error?.bind(t),e[r+2]=t.complete?.bind(t)}let i,o,c;if(t instanceof pc)o=ht(t.firestore,_c),c=Pn(t._key.path),i={next:n=>{e[r]&&e[r](Iu(o,t,n))},error:e[r+1],complete:e[r+2]};else{const n=ht(t,dc);o=ht(n.firestore,_c),c=n._query;const s=new Jc(o);i={next:t=>{e[r]&&e[r](new wu(o,s,n,t))},error:e[r+1],complete:e[r+2]},su(t._query)}const u=Tc(o);return nc(u,c,s,i)}function Cu(t,e){const n=Tc(t);return rc(n,e)}function Iu(t,e,n){const r=n.docs.get(e._key),s=new Jc(t);return new yu(t,s,e._key,r,new mu(n.hasPendingWrites,n.fromCache),e.converter)}new WeakMap;
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
 */!function(t,e=!0){T(i.MF),(0,i.om)(new o.uA("firestore",(t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new _c(new j(t.getProvider("auth-internal")),new z(s,t.getProvider("app-check-internal")),Re(s,n),s);return r={useFetchStreams:e,...r},i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(Zc,tu,t),(0,i.KO)(Zc,tu,"esm2020")}()}}]);