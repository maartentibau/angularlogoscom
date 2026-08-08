import{$ as Ie,$a as p,$b as _a,A as Ao,Aa as Go,B as Ae,Ba as x,Bb as _e,C as Qr,Ca as He,Cb as sa,D as To,Da as se,Db as ii,E as jt,Ea as Wo,Eb as la,F as Io,Fa as Zo,Fb as da,G as mt,Ga as Ht,Gb as ca,H as de,Ha as A,Hb as ua,I as ge,Ia as Yo,Ib as Y,J as ce,Ja as $t,Jb as N,K as D,Ka as Ko,Kb as oi,L as Oo,La as Jr,Lb as ma,M as ft,Ma as F,Mb as ai,N as ue,Na as z,Nb as Ve,O as j,Oa as S,Ob as Wt,P as Fo,Pa as Qo,Pb as fa,Q as f,Qa as me,Qb as tt,R as I,Ra as Un,Rb as ha,S as d,Sa as Xo,Sb as ne,T as On,Ta as Jo,Tb as pa,U as Po,Ua as qt,Ub as si,V as Te,Va as ye,Vb as ga,W as ve,Wa as L,Wb as Ge,X as ko,Xa as V,Xb as va,Y as Lo,Ya as ea,Yb as ba,Z as ht,Za as ta,Zb as ya,_ as Vo,_a as le,_b as zn,a as m,aa as q,ab as v,ac as Sa,b as T,ba as pt,bb as P,bc as Ca,c as ct,ca as Uo,cb as $e,d as Co,da as K,db as qe,dc as xa,e as An,ea as O,eb as ke,ec as Na,f as k,fa as Xr,fb as na,fc as wa,g as ie,ga as Fn,gb as jn,gc as Ma,h as oe,ha as M,hb as ee,hc as Ea,i as ae,ia as zt,ib as te,ic as Da,j as _,ja as jo,jb as Le,jc as Ra,k as xo,ka as gt,kb as B,kc as li,l as Zr,la as zo,lb as ei,lc as Aa,m as No,ma as vt,mb as ti,n as U,na as et,nb as Q,o as wo,oa as Pn,ob as X,p as Be,pa as be,pb as ra,q as Tn,qa as kn,qb as ia,r as In,ra as Bo,rb as ni,s as Mo,sa as y,sb as ri,t as Eo,ta as H,tb as $,u as Re,ua as Ho,ub as oa,v as Yr,va as Ln,vb as C,w as Kr,wa as Vn,wb as Gt,x as Do,xa as $o,xb as aa,y as ut,ya as Bt,z as Ro,za as qo}from"./chunk-AUG65O6V.js";var Zt=class{_doc;constructor(r){this._doc=r}manager},Bn=(()=>{class t extends Zt{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,i,o){return e.addEventListener(n,i,o),()=>this.removeEventListener(e,n,i,o)}removeEventListener(e,n,i,o){return e.removeEventListener(n,i,o)}static \u0275fac=function(n){return new(n||t)(I(q))};static \u0275prov=ue({token:t,factory:t.\u0275fac})}return t})(),qn=new f(""),mi=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof Bn));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof Bn);o&&this._plugins.push(o)}addEventListener(e,n,i,o){return this._findPluginFor(n).addEventListener(e,n,i,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new D(-5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(I(qn),I(O))};static \u0275prov=ue({token:t,factory:t.\u0275fac})}return t})(),di="ng-app-id";function Ta(t){for(let r of t)r.remove()}function Ia(t,r){let e=r.createElement("style");return e.textContent=t,e}function ld(t,r,e,n){let i=t.head?.querySelectorAll(`style[${di}="${r}"],link[${di}="${r}"]`);if(!i||i.length===0)return!1;for(let o of i)o.removeAttribute(di),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function ui(t,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var fi=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,i,o={}){this.doc=e,this.appId=n,this.nonce=i,ld(e,n,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,n){for(let i of e)this.addUsage(i,this.inline,Ia);n?.forEach(i=>this.addUsage(i,this.external,ui))}removeStyles(e,n){for(let i of e)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,n,i){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,n){let i=n.get(e);i&&(i.usage--,i.usage<=0&&(Ta(i.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Ta(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(e,Ia(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(e,ui(n,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let n of[...this.inline.values(),...this.external.values()]){let i=[];for(let o of n.elements)o.parentNode===e?o.remove():i.push(o);n.elements=i}}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(I(q),I(zt),I(vt,8),I(gt))};static \u0275prov=ue({token:t,factory:t.\u0275fac})}return t})(),ci={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},hi=/%COMP%/g;var Fa="%COMP%",dd=`_nghost-${Fa}`,cd=`_ngcontent-${Fa}`,ud=!0,md=new f("",{factory:()=>ud}),fd=new f("");function hd(t){return cd.replace(hi,t)}function pd(t){return dd.replace(hi,t)}function Pa(t,r){return r.map(e=>e.replace(hi,t))}var pi=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,n,i,o,a,l,s=null,c=null,u=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=l,this.nonce=s,this.tracingService=c,this.cssVarNamespace=u??"",this.defaultRenderer=new Yt(e,a,l,this.tracingService,this.cssVarNamespace)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,n);return i instanceof $n?i.applyToHost(e):i instanceof Kt&&i.applyStyles(),i}getOrCreateRenderer(e,n){let i=this.rendererByCompId,o=i.get(n.id);if(!o){let a=this.doc,l=this.ngZone,s=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,g=this.tracingService;switch(n.encapsulation){case Ln.Emulated:o=new $n(s,c,n,this.appId,u,a,l,g,this.cssVarNamespace);break;case Ln.ShadowDom:return new Hn(s,e,n,a,l,this.nonce,g,this.cssVarNamespace,c);case Ln.ExperimentalIsolatedShadowDom:return new Hn(s,e,n,a,l,this.nonce,g,this.cssVarNamespace);default:o=new Kt(s,c,n,u,a,l,g,this.cssVarNamespace);break}i.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(I(mi),I(Ht),I(zt),I(md),I(q),I(O),I(vt),I(Go,8),I(fd,8))};static \u0275prov=ue({token:t,factory:t.\u0275fac})}return t})(),Yt=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,n,i,o=""){this.eventManager=r,this.doc=e,this.ngZone=n,this.tracingService=i,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(ci[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(Oa(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){r&&(Oa(r)?r.content:r).insertBefore(e,n)}removeChild(r,e){e.remove()}selectRootElement(r,e){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new D(-5104,!1);return e||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,i){if(i){e=i+":"+e;let o=ci[i];o?r.setAttributeNS(o,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){let i=ci[n];i?r.removeAttributeNS(i,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,i){let o=e.startsWith("--");o&&(e=e.replace("%NS%",this.cssVarNamespace)),o||i&(Bt.DashCase|Bt.Important)?r.style.setProperty(e,n,i&Bt.Important?"important":""):r.style[e]=n}removeStyle(r,e,n){let i=e.startsWith("--");i&&(e=e.replace("%NS%",this.cssVarNamespace)),i||n&Bt.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,n){r!=null&&(r[e]=n)}setValue(r,e){r.nodeValue=e}listen(r,e,n,i){if(typeof r=="string"&&(r=Ge().getGlobalEventTarget(this.doc,r),!r))throw new D(-5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(r,e,o)),this.eventManager.addEventListener(r,e,o,i)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function Oa(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Hn=class extends Yt{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,n,i,o,a,l,s,c){super(r,i,o,l,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=n.styles;u=Pa(n.id,u).map(h=>h.replace(/%NS%/g,s));for(let h of u){let R=document.createElement("style");a&&R.setAttribute("nonce",a),R.textContent=h,this.shadowRoot.appendChild(R)}let g=n.getExternalStyles?.();if(g)for(let h of g){let R=ui(h,i);a&&R.setAttribute("nonce",a),this.shadowRoot.appendChild(R)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Kt=class extends Yt{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,n,i,o,a,l,s,c){super(r,o,a,l,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let u=n.styles,g=c?Pa(c,u):u;this.styles=g.map(h=>h.replace(/%NS%/g,s)),this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&qo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},$n=class extends Kt{contentAttr;hostAttr;constructor(r,e,n,i,o,a,l,s,c){let u=i+"-"+n.id;super(r,e,n,o,a,l,s,c,u),this.contentAttr=hd(u),this.hostAttr=pd(u)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,""),n}};var Gn=class t extends ba{supportsDOMEvents=!0;static makeCurrent(){va(new t)}onAndCancel(r,e,n,i){return r.addEventListener(e,n,i),()=>{r.removeEventListener(e,n,i)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=gd();return e==null?null:vd(e)}resetBaseElement(){Qt=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return xa(document.cookie,r)}},Qt=null;function gd(){return Qt=Qt||document.head.querySelector("base"),Qt?Qt.getAttribute("href"):null}function vd(t){return new URL(t,document.baseURI).pathname}var ka=["alt","control","meta","shift"],bd={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},yd={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},La=(()=>{class t extends Zt{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,i,o){let a=t.parseEventName(n),l=t.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ge().onAndCancel(e,a.domEventName,l,o))}static parseEventName(e){let n=e.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let o=t._normalizeKey(n.pop()),a="",l=n.indexOf("code");if(l>-1&&(n.splice(l,1),a="code."),ka.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),a+=c+".")}),a+=o,n.length!=0||o.length===0)return null;let s={};return s.domEventName=i,s.fullKey=a,s}static matchEventFullKeyCode(e,n){let i=bd[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),ka.forEach(a=>{if(a!==i){let l=yd[a];l(e)&&(o+=a+".")}}),o+=i,o===n)}static eventCallback(e,n,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(I(q))};static \u0275prov=ue({token:t,factory:t.\u0275fac})}return t})();async function gi(t,r,e){let n=m({rootComponent:t},_d(r,e));return ha(n)}function _d(t,r){return{platformRef:r?.platformRef,appProviders:[...wd,...t?.providers??[]],platformProviders:Nd}}function Sd(){Gn.makeCurrent()}function Cd(){return new Xr}function xd(){return Ho(document),document}var Nd=[{provide:gt,useValue:Na},{provide:jo,useValue:Sd,multi:!0},{provide:q,useFactory:xd}];var wd=[{provide:Po,useValue:"root"},{provide:Xr,useFactory:Cd},{provide:qn,useClass:Bn,multi:!0},{provide:qn,useClass:La,multi:!0},pi,{provide:Ht,useClass:fi},{provide:fi,useExisting:Ht},mi,{provide:He,useExisting:pi},[]];var Va=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(I(q))};static \u0275prov=ue({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var b="primary",mn=Symbol("RouteTitle"),Si=class{params;constructor(r){this.params=r||{}}has(r){return Object.prototype.hasOwnProperty.call(this.params,r)}get(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e[0]:e}return null}getAll(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function rt(t){return new Si(t)}function vi(t,r,e){for(let n=0;n<t.length;n++){let i=t[n],o=r[n];if(i[0]===":")e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function Za(t,r,e){let n=e.path.split("/"),i=n.indexOf("**");if(i===-1){if(n.length>t.length||e.pathMatch==="full"&&(r.hasChildren()||n.length<t.length))return null;let s={},c=t.slice(0,n.length);return vi(n,c,s)?{consumed:c,posParams:s}:null}if(i!==n.lastIndexOf("**"))return null;let o=n.slice(0,i),a=n.slice(i+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&r.hasChildren()&&e.path!=="**")return null;let l={};return!vi(o,t.slice(0,o.length),l)||!vi(a,t.slice(t.length-a.length),l)?null:{consumed:t,posParams:l}}function Xn(t){return new Promise((r,e)=>{t.pipe(Ae()).subscribe({next:n=>r(n),error:n=>e(n)})})}function Dd(t,r){if(t.length!==r.length)return!1;for(let e=0;e<t.length;++e)if(!Oe(t[e],r[e]))return!1;return!0}function Oe(t,r){let e=t?Ci(t):void 0,n=r?Ci(r):void 0;if(!e||!n||e.length!=n.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!Ya(t[i],r[i]))return!1;return!0}function Ci(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Ya(t,r){if(Array.isArray(t)&&Array.isArray(r)){if(t.length!==r.length)return!1;let e=[...t].sort(),n=[...r].sort();return e.every((i,o)=>n[o]===i)}else return t===r}function Rd(t){return t.length>0?t[t.length-1]:null}function at(t){return Zr(t)?t:$t(t)?ae(Promise.resolve(t)):_(t)}function Ka(t){return Zr(t)?Xn(t):Promise.resolve(t)}var Ad={exact:Ja,subset:es},Qa={exact:Td,subset:Id,ignored:()=>!0},Xa={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},xi={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Ua(t,r,e){return Ad[e.paths](t.root,r.root,e.matrixParams)&&Qa[e.queryParams](t.queryParams,r.queryParams)&&!(e.fragment==="exact"&&t.fragment!==r.fragment)}function Td(t,r){return Oe(t,r)}function Ja(t,r,e){if(!nt(t.segments,r.segments)||!Yn(t.segments,r.segments,e)||t.numberOfChildren!==r.numberOfChildren)return!1;for(let n in r.children)if(!t.children[n]||!Ja(t.children[n],r.children[n],e))return!1;return!0}function Id(t,r){return Object.keys(r).length<=Object.keys(t).length&&Object.keys(r).every(e=>Ya(t[e],r[e]))}function es(t,r,e){return ts(t,r,r.segments,e)}function ts(t,r,e,n){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!nt(i,e)||r.hasChildren()||!Yn(i,e,n))}else if(t.segments.length===e.length){if(!nt(t.segments,e)||!Yn(t.segments,e,n))return!1;for(let i in r.children)if(!t.children[i]||!es(t.children[i],r.children[i],n))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!nt(t.segments,i)||!Yn(t.segments,i,n)||!t.children[b]?!1:ts(t.children[b],r,o,n)}}function Yn(t,r,e){return r.every((n,i)=>Qa[e](t[i].parameters,n.parameters))}var he=class{root;queryParams;fragment;_queryParamMap;constructor(r=new w([],{}),e={},n=null){this.root=r,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=rt(this.queryParams),this._queryParamMap}toString(){return Pd.serialize(this)}},w=class{segments;children;parent=null;constructor(r,e){this.segments=r,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Kn(this)}},We=class{path;parameters;_parameterMap;constructor(r,e){this.path=r,this.parameters=e}get parameterMap(){return this._parameterMap??=rt(this.parameters),this._parameterMap}toString(){return rs(this)}};function Od(t,r){return nt(t,r)&&t.every((e,n)=>Oe(e.parameters,r[n].parameters))}function nt(t,r){return t.length!==r.length?!1:t.every((e,n)=>e.path===r[n].path)}function Fd(t,r){let e=[];return Object.entries(t.children).forEach(([n,i])=>{n===b&&(e=e.concat(r(i,n)))}),Object.entries(t.children).forEach(([n,i])=>{n!==b&&(e=e.concat(r(i,n)))}),e}var Mt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>new Ze})}return t})(),Ze=class{parse(r){let e=new wi(r);return new he(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(r){let e=`/${Xt(r.root,!0)}`,n=Vd(r.queryParams),i=typeof r.fragment=="string"?`#${kd(r.fragment)}`:"";return`${e}${n}${i}`}},Pd=new Ze;function Kn(t){return t.segments.map(r=>rs(r)).join("/")}function Xt(t,r){if(!t.hasChildren())return Kn(t);if(r){let e=t.children[b]?Xt(t.children[b],!1):"",n=[];return Object.entries(t.children).forEach(([i,o])=>{i!==b&&n.push(`${i}:${Xt(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=Fd(t,(n,i)=>i===b?[Xt(t.children[b],!1)]:[`${i}:${Xt(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[b]!=null?`${Kn(t)}/${e[0]}`:`${Kn(t)}/(${e.join("//")})`}}function ns(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Wn(t){return ns(t).replace(/%3B/gi,";")}function kd(t){return encodeURI(t)}function Ni(t){return ns(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Qn(t){return decodeURIComponent(t)}function ja(t){return Qn(t.replace(/\+/g,"%20"))}function rs(t){return`${Ni(t.path)}${Ld(t.parameters)}`}function Ld(t){return Object.entries(t).map(([r,e])=>`;${Ni(r)}=${Ni(e)}`).join("")}function Vd(t){let r=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(i=>`${Wn(e)}=${Wn(i)}`).join("&"):`${Wn(e)}=${Wn(n)}`).filter(e=>e);return r.length?`?${r.join("&")}`:""}var Ud=/^[^\/()?;#]+/;function bi(t){let r=t.match(Ud);return r?r[0]:""}var jd=/^[^\/()?;=#]+/;function zd(t){let r=t.match(jd);return r?r[0]:""}var Bd=/^[^=?&#]+/;function Hd(t){let r=t.match(Bd);return r?r[0]:""}var $d=/^[^&#]+/;function qd(t){let r=t.match($d);return r?r[0]:""}var wi=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new w([],{}):new w([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional("?"))do this.parseQueryParam(r);while(this.consumeOptional("&"));return r}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(r=0){if(r>50)throw new D(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,r));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,r)),(e.length>0||Object.keys(n).length>0)&&(i[b]=new w(e,n)),i}parseSegment(){let r=bi(this.remaining);if(r===""&&this.peekStartsWith(";"))throw new D(4009,!1);return this.capture(r),new We(Qn(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(";");)this.parseParam(r);return r}parseParam(r){let e=zd(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let i=bi(this.remaining);i&&(n=i,this.capture(n))}r[Qn(e)]=Qn(n)}parseQueryParam(r){let e=Hd(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let a=qd(this.remaining);a&&(n=a,this.capture(n))}let i=ja(e),o=ja(n);if(Object.hasOwn(r,i)){let a=r[i];Array.isArray(a)||(a=[a],r[i]=a),a.push(o)}else r[i]=o}parseParens(r,e){let n=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=bi(this.remaining),o=this.remaining[i.length];if(o!=="/"&&o!==")"&&o!==";")throw new D(4010,!1);let a;i.indexOf(":")>-1?(a=i.slice(0,i.indexOf(":")),this.capture(a),this.capture(":")):r&&(a=b);let l=this.parseChildren(e+1);n[a??b]=Object.keys(l).length===1&&l[b]?l[b]:new w([],l),this.consumeOptional("//")}return n}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new D(4011,!1)}};function is(t){return t.segments.length>0?new w([],{[b]:t}):t}function os(t){let r=Object.create(null);for(let[n,i]of Object.entries(t.children)){let o=os(i);if(n===b&&o.segments.length===0&&o.hasChildren())for(let[a,l]of Object.entries(o.children))r[a]=l;else(o.segments.length>0||o.hasChildren())&&(r[n]=o)}let e=new w(t.segments,r);return Gd(e)}function Gd(t){if(t.numberOfChildren===1&&t.children[b]){let r=t.children[b];return new w(t.segments.concat(r.segments),r.children)}return t}function Ye(t){return t instanceof he}function as(t,r,e=null,n=null,i=new Ze){let o=ss(t);return ls(o,r,e,n,i)}function ss(t){let r;function e(o){let a={};for(let s of o.children){let c=e(s);a[s.outlet]=c}let l=new w(o.url,a);return o===t&&(r=l),l}let n=e(t.root),i=is(n);return r??i}function ls(t,r,e,n,i){let o=t;for(;o.parent;)o=o.parent;if(r.length===0)return yi(o,o,o,e,n,i);let a=Wd(r);if(a.toRoot())return yi(o,o,new w([],{}),e,n,i);let l=Zd(a,o,t),s=l.processChildren?en(l.segmentGroup,l.index,a.commands):cs(l.segmentGroup,l.index,a.commands);return yi(o,l.segmentGroup,s,e,n,i)}function Jn(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function rn(t){return typeof t=="object"&&t!=null&&t.outlets}function za(t,r,e){t||="\u0275";let n=new he;return n.queryParams={[t]:r},e.parse(e.serialize(n)).queryParams[t]}function yi(t,r,e,n,i,o){let a={};for(let[c,u]of Object.entries(n??{}))a[c]=Array.isArray(u)?u.map(g=>za(c,g,o)):za(c,u,o);let l;t===r?l=e:l=ds(t,r,e);let s=is(os(l));return new he(s,a,i)}function ds(t,r,e){let n=Object.create(null);return Object.entries(t.children).forEach(([i,o])=>{o===r?n[i]=e:n[i]=ds(o,r,e)}),new w(t.segments,n)}var er=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,e,n){if(this.isAbsolute=r,this.numberOfDoubleDots=e,this.commands=n,r&&n.length>0&&Jn(n[0]))throw new D(4003,!1);let i=n.find(rn);if(i&&i!==Rd(n))throw new D(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Wd(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new er(!0,0,t);let r=0,e=!1,n=t.reduce((i,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let l={};return Object.entries(o.outlets).forEach(([s,c])=>{l[s]=typeof c=="string"?c.split("/"):c}),[...i,{outlets:l}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:a===0?(o.split("/").forEach((l,s)=>{s==0&&l==="."||(s==0&&l===""?e=!0:l===".."?r++:l!=""&&i.push(l))}),i):[...i,o]},[]);return new er(e,r,n)}var yt=class{segmentGroup;processChildren;index;constructor(r,e,n){this.segmentGroup=r,this.processChildren=e,this.index=n}};function Zd(t,r,e){if(t.isAbsolute)return new yt(r,!0,0);if(!e)return new yt(r,!1,NaN);if(e.parent===null)return new yt(e,!0,0);let n=Jn(t.commands[0])?0:1,i=e.segments.length-1+n;return Yd(e,i,t.numberOfDoubleDots)}function Yd(t,r,e){let n=t,i=r,o=e;for(;o>i;){if(o-=i,n=n.parent,!n)throw new D(4005,!1);i=n.segments.length}return new yt(n,!1,i-o)}function Kd(t){return rn(t[0])?t[0].outlets:{[b]:t}}function cs(t,r,e){if(t??=new w([],{}),t.segments.length===0&&t.hasChildren())return en(t,r,e);let n=Qd(t,r,e),i=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new w(t.segments.slice(0,n.pathIndex),{});return o.children[b]=new w(t.segments.slice(n.pathIndex),t.children),en(o,0,i)}else return n.match&&i.length===0?new w(t.segments,{}):n.match&&!t.hasChildren()?Mi(t,r,e):n.match?en(t,0,i):Mi(t,r,e)}function en(t,r,e){if(e.length===0)return new w(t.segments,{});{let n=Kd(e),i=Object.create(null);if(Object.keys(n).some(o=>o!==b)&&t.children[b]&&t.numberOfChildren===1&&t.children[b].segments.length===0){let o=en(t.children[b],r,e);return new w(t.segments,o.children)}return Object.entries(n).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(i[o]=cs(t.children[o],r,a))}),Object.entries(t.children).forEach(([o,a])=>{n[o]===void 0&&(i[o]=a)}),new w(t.segments,i)}}function Qd(t,r,e){let n=0,i=r,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(n>=e.length)return o;let a=t.segments[i],l=e[n];if(rn(l))break;let s=`${l}`,c=n<e.length-1?e[n+1]:null;if(i>0&&s===void 0)break;if(s&&c&&typeof c=="object"&&c.outlets===void 0){if(!Ha(s,c,a))return o;n+=2}else{if(!Ha(s,{},a))return o;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function Mi(t,r,e){let n=t.segments.slice(0,r),i=0;for(;i<e.length;){let o=e[i];if(rn(o)){let s=Xd(o.outlets);return new w(n,s)}if(i===0&&Jn(e[0])){let s=t.segments[r];n.push(new We(s.path,Ba(e[0]))),i++;continue}let a=rn(o)?o.outlets[b]:`${o}`,l=i<e.length-1?e[i+1]:null;a&&l&&Jn(l)?(n.push(new We(a,Ba(l))),i+=2):(n.push(new We(a,{})),i++)}return new w(n,{})}function Xd(t){let r={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(r[e]=Mi(new w([],{}),0,n))}),r}function Ba(t){let r={};return Object.entries(t).forEach(([e,n])=>r[e]=`${n}`),r}function Ha(t,r,e){return t==e.path&&Oe(r,e.parameters)}var tn="imperative",G=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(G||{}),pe=class{id;url;constructor(r,e){this.id=r,this.url=e}},it=class extends pe{type=G.NavigationStart;navigationTrigger;restoredState;constructor(r,e,n="imperative",i=null){super(r,e),this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Fe=class extends pe{urlAfterRedirects;type=G.NavigationEnd;constructor(r,e,n){super(r,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},J=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(J||{}),on=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(on||{}),Se=class extends pe{reason;code;type=G.NavigationCancel;constructor(r,e,n,i){super(r,e),this.reason=n,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function us(t){return t instanceof Se&&(t.code===J.Redirect||t.code===J.SupersededByNewNavigation)}var je=class extends pe{reason;code;type=G.NavigationSkipped;constructor(r,e,n,i){super(r,e),this.reason=n,this.code=i}},ot=class extends pe{error;target;type=G.NavigationError;constructor(r,e,n,i){super(r,e),this.error=n,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},an=class extends pe{urlAfterRedirects;state;type=G.RoutesRecognized;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},tr=class extends pe{urlAfterRedirects;state;type=G.GuardsCheckStart;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nr=class extends pe{urlAfterRedirects;state;shouldActivate;type=G.GuardsCheckEnd;constructor(r,e,n,i,o){super(r,e),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},rr=class extends pe{urlAfterRedirects;state;type=G.ResolveStart;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ir=class extends pe{urlAfterRedirects;state;type=G.ResolveEnd;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},or=class{route;type=G.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ar=class{route;type=G.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},sr=class{snapshot;type=G.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},lr=class{snapshot;type=G.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},dr=class{snapshot;type=G.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},cr=class{snapshot;type=G.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var St=class{},sn=class{},Ct=class{url;navigationBehaviorOptions;constructor(r,e){this.url=r,this.navigationBehaviorOptions=e}};function Jd(t){return!(t instanceof St)&&!(t instanceof Ct)&&!(t instanceof sn)}var ur=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new Et(this.rootInjector)}},Et=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let i=this.getOrCreateContext(e);i.outlet=n,this.contexts.set(e,i)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new ur(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(I(Te))};static \u0275prov=ue({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),mr=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let e=this.pathFromRoot(r);return e.length>1?e[e.length-2]:null}children(r){let e=Ei(r,this._root);return e?e.children.map(n=>n.value):[]}firstChild(r){let e=Ei(r,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(r){let e=Di(r,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==r)}pathFromRoot(r){return Di(r,this._root).map(e=>e.value)}};function Ei(t,r){if(t===r.value)return r;for(let e of r.children){let n=Ei(t,e);if(n)return n}return null}function Di(t,r){if(t===r.value)return[r];for(let e of r.children){let n=Di(t,e);if(n.length)return n.unshift(r),n}return[]}var fe=class{value;children;constructor(r,e){this.value=r,this.children=e}toString(){return`TreeNode(${this.value})`}};function bt(t){let r={};return t&&t.children.forEach(e=>r[e.value.outlet]=e),r}var ln=class extends mr{snapshot;constructor(r,e){super(r),this.snapshot=e,Li(this,r)}toString(){return this.snapshot.toString()}};function ms(t,r){let e=ec(t,r),n=new ie([new We("",{})]),i=new ie({}),o=new ie({}),a=new ie({}),l=new ie(""),s=new Ne(n,i,a,l,o,b,t,e.root);return s.snapshot=e.root,new ln(new fe(s,[]),e)}function ec(t,r){let e={},n={},i={},a=new xt([],e,i,"",n,b,t,null,{},r);return new dn("",new fe(a,[]))}var Ne=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;_localInjector;constructor(r,e,n,i,o,a,l,s){this.urlSubject=r,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=l,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(U(c=>c[mn]))??_(void 0),this.url=r,this.params=e,this.queryParams=n,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(U(r=>rt(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(U(r=>rt(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}},tc="always";function ki(t,r,e){let n,{routeConfig:i}=t;return r!==null&&(e==="always"||i?.path===""||!r.component&&!r.routeConfig?.loadComponent)?n={params:m(m({},r.params),t.params),data:m(m({},r.data),t.data),resolve:m(m(m(m({},t.data),r.data),i?.data),t._resolvedData)}:n={params:m({},t.params),data:m({},t.data),resolve:m(m({},t.data),t._resolvedData??{})},i&&hs(i)&&(n.resolve[mn]=i.title),n}var xt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[mn]}constructor(r,e,n,i,o,a,l,s,c,u){this.url=r,this.params=e,this.queryParams=n,this.fragment=i,this.data=o,this.outlet=a,this.component=l,this.routeConfig=s,this._resolve=c,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=rt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=rt(this.queryParams),this._queryParamMap}toString(){let r=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${r}', path:'${e}')`}},dn=class extends mr{url;constructor(r,e){super(e),this.url=r,Li(this,e)}toString(){return fs(this._root)}};function Li(t,r){r.value._routerState=t,r.children.forEach(e=>Li(t,e))}function fs(t){let r=t.children.length>0?` { ${t.children.map(fs).join(", ")} } `:"";return`${t.value}${r}`}function _i(t){if(t.snapshot){let r=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Oe(r.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),r.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Oe(r.params,e.params)||t.paramsSubject.next(e.params),Dd(r.url,e.url)||t.urlSubject.next(e.url),Oe(r.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Ri(t,r){let e=Oe(t.params,r.params)&&Od(t.url,r.url),n=!t.parent!=!r.parent;return e&&!n&&(!t.parent||Ri(t.parent,r.parent))}function hs(t){return typeof t.title=="string"||t.title===null}var ps=new f(""),fn=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=b;activateEvents=new K;deactivateEvents=new K;attachEvents=new K;detachEvents=new K;routerOutletData=Ve();parentContexts=d(Et);location=d(Yo);changeDetector=d(tt);inputBinder=d(gr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:i}=e.name;if(n)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new D(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new D(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new D(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new D(4013,!1);this._activatedRoute=e;let i=this.location,a=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,s=new Ai(e,l,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:s,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[be]})}return t})(),Ai=class{route;childContexts;parent;outletData;constructor(r,e,n,i){this.route=r,this.childContexts=e,this.parent=n,this.outletData=i}get(r,e){return r===Ne?this.route:r===Et?this.childContexts:r===ps?this.outletData:this.parent.get(r,e)}},gr=new f("");var Vi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,i){n&1&&P(0,"router-outlet")},dependencies:[fn],encapsulation:2,changeDetection:1})}return t})();function Ui(t){let r=t.children&&t.children.map(Ui),e=r?T(m({},t),{children:r}):m({},t);return!e.component&&!e.loadComponent&&(r||e.loadChildren)&&e.outlet&&e.outlet!==b&&(e.component=Vi),e}function nc(t,r,e){let n=new Set,i=cn(t,r._root,e?e._root:void 0,n);return{newlyCreatedRoutes:n,state:new ln(i,r)}}function cn(t,r,e,n){if(e&&t.shouldReuseRoute(r.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=r.value;let o=rc(t,r,e,n);return new fe(i,o)}else{if(t.shouldAttach(r.value)){let a=t.retrieve(r.value);if(a!==null){let l=a.route;return l.value._futureSnapshot=r.value,l.children=r.children.map(s=>cn(t,s,void 0,n)),l}}let i=ic(r.value);n.add(i);let o=r.children.map(a=>cn(t,a,void 0,n));return new fe(i,o)}}function rc(t,r,e,n){return r.children.map(i=>{for(let o of e.children)if(t.shouldReuseRoute(i.value,o.value.snapshot))return cn(t,i,o,n);return cn(t,i,void 0,n)})}function ic(t){return new Ne(new ie(t.url),new ie(t.params),new ie(t.queryParams),new ie(t.fragment),new ie(t.data),t.outlet,t.component,t)}var Nt=class{redirectTo;navigationBehaviorOptions;constructor(r,e){this.redirectTo=r,this.navigationBehaviorOptions=e}},gs="ngNavigationCancelingError";function fr(t,r){let{redirectTo:e,navigationBehaviorOptions:n}=Ye(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,i=vs(!1,J.Redirect);return i.url=e,i.navigationBehaviorOptions=n,i}function vs(t,r){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[gs]=!0,e.cancellationCode=r,e}function oc(t){return bs(t)&&Ye(t.url)}function bs(t){return!!t&&t[gs]}var Ti=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,e,n,i,o){this.routeReuseStrategy=r,this.futureState=e,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=o}activate(r){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,r),_i(this.futureState.root),this.activateChildRoutes(e,n,r)}deactivateChildRoutes(r,e,n){let i=bt(e);r.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],n),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(r,e,n){let i=r.value,o=e?e.value:null;if(i===o)if(i.component){let a=n.getContext(i.outlet);a&&this.deactivateChildRoutes(r,e,a.children)}else this.deactivateChildRoutes(r,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(r,e){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,e):this.deactivateRouteAndOutlet(r,e)}detachAndStoreRouteSubtree(r,e){let n=e.getContext(r.value.outlet),i=n&&r.value.component?n.children:e,o=bt(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(n&&n.outlet){let a=n.outlet.detach(),l=n.children.onOutletDeactivated();this.routeReuseStrategy.store(r.value.snapshot,{componentRef:a,route:r,contexts:l})}}deactivateRouteAndOutlet(r,e){let n=e.getContext(r.value.outlet),i=n&&r.value.component?n.children:e,o=bt(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null),r.value._localInjector?.destroy()}activateChildRoutes(r,e,n){let i=bt(e);r.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],n),this.forwardEvent(new cr(o.value.snapshot))}),r.children.length&&this.forwardEvent(new lr(r.value.snapshot))}activateRoutes(r,e,n){let i=r.value,o=e?e.value:null;if(_i(i),i===o)if(i.component){let a=n.getOrCreateContext(i.outlet);this.activateChildRoutes(r,e,a.children)}else this.activateChildRoutes(r,e,n);else if(i.component){let a=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let l=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(l.contexts),a.attachRef=l.componentRef,a.route=l.route.value,a.outlet&&a.outlet.attach(l.componentRef,l.route.value),_i(l.route.value),this.activateChildRoutes(r,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(r,null,a.children)}else this.activateChildRoutes(r,null,n)}},hr=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}},_t=class{component;route;constructor(r,e){this.component=r,this.route=e}};function ac(t,r,e){let n=t._root,i=r?r._root:null;return Jt(n,i,e,[n.value])}function sc(t){let r=t.routeConfig?t.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:t,guards:r}}function Dt(t,r){let e=Symbol(),n=r.get(t,e);return n===e?typeof t=="function"&&!Fo(t)?t:r.get(t):n}function Jt(t,r,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=bt(r);return t.children.forEach(a=>{lc(a,o[a.value.outlet],e,n.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,l])=>nn(l,e.getContext(a),i)),i}function lc(t,r,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=r?r.value:null,l=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=dc(a,o,o.routeConfig.runGuardsAndResolvers);s?i.canActivateChecks.push(new hr(n)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Jt(t,r,l?l.children:null,n,i):Jt(t,r,e,n,i),s&&l&&l.outlet&&l.outlet.isActivated&&i.canDeactivateChecks.push(new _t(l.outlet.component,a))}else a&&nn(r,l,i),i.canActivateChecks.push(new hr(n)),o.component?Jt(t,null,l?l.children:null,n,i):Jt(t,null,e,n,i);return i}function dc(t,r,e){if(typeof e=="function")return ve(r._environmentInjector,()=>e(t,r));switch(e){case"pathParamsChange":return!nt(t.url,r.url);case"pathParamsOrQueryParamsChange":return!nt(t.url,r.url)||!Oe(t.queryParams,r.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ri(t,r)||!Oe(t.queryParams,r.queryParams);default:return!Ri(t,r)}}function nn(t,r,e){let n=bt(t),i=t.value;Object.entries(n).forEach(([o,a])=>{i.component?r?nn(a,r.children.getContext(o),e):nn(a,null,e):nn(a,r,e)}),i.component?r&&r.outlet&&r.outlet.isActivated?e.canDeactivateChecks.push(new _t(r.outlet.component,i)):e.canDeactivateChecks.push(new _t(null,i)):e.canDeactivateChecks.push(new _t(null,i))}function hn(t){return typeof t=="function"}function cc(t){return typeof t=="boolean"}function uc(t){return t&&hn(t.canLoad)}function mc(t){return t&&hn(t.canActivate)}function fc(t){return t&&hn(t.canActivateChild)}function hc(t){return t&&hn(t.canDeactivate)}function pc(t){return t&&hn(t.canMatch)}function ys(t){return t instanceof No||t?.name==="EmptyError"}var Zn=Symbol("INITIAL_VALUE");function wt(){return de(t=>wo(t.map(r=>r.pipe(ut(1),mt(Zn)))).pipe(U(r=>{for(let e of r)if(e!==!0){if(e===Zn)return Zn;if(e===!1||gc(e))return e}return!0}),Re(r=>r!==Zn),ut(1)))}function gc(t){return Ye(t)||t instanceof Nt}function _s(t){return t.aborted?_(void 0).pipe(ut(1)):new An(r=>{let e=()=>{r.next(),r.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function Ss(t){return ge(_s(t))}function vc(t){return Be(r=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:o}}=r;return o.length===0&&i.length===0?_(T(m({},r),{guardsResult:!0})):bc(o,e,n).pipe(Be(a=>a&&cc(a)?yc(e,i,t):_(a)),U(a=>T(m({},r),{guardsResult:a})))})}function bc(t,r,e){return ae(t).pipe(Be(n=>Nc(n.component,n.route,e,r)),Ae(n=>n!==!0,!0))}function yc(t,r,e){return ae(r).pipe(Kr(n=>Tn(Sc(n.route.parent,e),_c(n.route,e),xc(t,n.path),Cc(t,n.route))),Ae(n=>n!==!0,!0))}function _c(t,r){return t!==null&&r&&r(new dr(t)),_(!0)}function Sc(t,r){return t!==null&&r&&r(new sr(t)),_(!0)}function Cc(t,r){let e=r.routeConfig?r.routeConfig.canActivate:null;if(!e||e.length===0)return _(!0);let n=e.map(i=>In(()=>{let o=r._environmentInjector,a=Dt(i,o),l=mc(a)?a.canActivate(r,t):ve(o,()=>a(r,t));return at(l).pipe(Ae())}));return _(n).pipe(wt())}function xc(t,r){let e=r[r.length-1],i=r.slice(0,r.length-1).reverse().map(o=>sc(o)).filter(o=>o!==null).map(o=>In(()=>{let a=o.guards.map(l=>{let s=o.node._environmentInjector,c=Dt(l,s),u=fc(c)?c.canActivateChild(e,t):ve(s,()=>c(e,t));return at(u).pipe(Ae())});return _(a).pipe(wt())}));return _(i).pipe(wt())}function Nc(t,r,e,n){let i=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!i||i.length===0)return _(!0);let o=i.map(a=>{let l=r._environmentInjector,s=Dt(a,l),c=hc(s)?s.canDeactivate(t,r,e,n):ve(l,()=>s(t,r,e,n));return at(c).pipe(Ae())});return _(o).pipe(wt())}function wc(t,r,e,n,i){let o=r.canLoad;if(o===void 0||o.length===0)return _(!0);let a=o.map(l=>{let s=Dt(l,t),c=uc(s)?s.canLoad(r,e):ve(t,()=>s(r,e)),u=at(c);return i?u.pipe(Ss(i)):u});return _(a).pipe(wt(),Cs(n))}function Cs(t){return Co(ce(r=>{if(typeof r!="boolean")throw fr(t,r)}),U(r=>r===!0))}function Mc(t,r,e,n,i,o){let a=r.canMatch;if(!a||a.length===0)return _(!0);let l=a.map(s=>{let c=Dt(s,t),u=pc(c)?c.canMatch(r,e,i):ve(t,()=>c(r,e,i));return at(u).pipe(Ss(o))});return _(l).pipe(wt(),Cs(n))}var Ue=class t extends Error{segmentGroup;constructor(r){super(),this.segmentGroup=r||null,Object.setPrototypeOf(this,t.prototype)}},un=class t extends Error{urlTree;constructor(r){super(),this.urlTree=r,Object.setPrototypeOf(this,t.prototype)}};function Ec(t){throw new D(4e3,!1)}function Dc(t){throw vs(!1,J.GuardRejected)}var Ii=class{urlSerializer;urlTree;constructor(r,e){this.urlSerializer=r,this.urlTree=e}async lineralizeSegments(r,e){let n=[],i=e.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return n;if(i.numberOfChildren>1||!i.children[b])throw Ec(`${r.redirectTo}`);i=i.children[b]}}async applyRedirectCommands(r,e,n,i,o){let a=await Rc(e,i,o);if(a instanceof he)throw new un(a);let l=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),r,n);if(a[0]==="/")throw new un(l);return l}applyRedirectCreateUrlTree(r,e,n,i){let o=this.createSegmentGroup(r,e.root,n,i);return new he(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(r,e){let n={};return Object.entries(r).forEach(([i,o])=>{if(typeof o=="string"&&o[0]===":"){let l=o.substring(1);n[i]=e[l]}else n[i]=o}),n}createSegmentGroup(r,e,n,i){let o=this.createSegments(r,e.segments,n,i),a=Object.create(null);return Object.entries(e.children).forEach(([l,s])=>{a[l]=this.createSegmentGroup(r,s,n,i)}),new w(o,a)}createSegments(r,e,n,i){return e.map(o=>o.path[0]===":"?this.findPosParam(r,o,i):this.findOrReturn(o,n))}findPosParam(r,e,n){let i=n[e.path.substring(1)];if(!i)throw new D(4001,!1);return i}findOrReturn(r,e){let n=0;for(let i of e){if(i.path===r.path)return e.splice(n),i;n++}return r}};function Rc(t,r,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return Xn(at(ve(e,()=>n(r))))}function Ac(t,r){return t.providers&&!t._injector&&(t._injector=Jr(t.providers,r,`Route: ${t.path}`)),t._injector??r}function xe(t){return t.outlet||b}function Tc(t,r){let e=t.filter(n=>xe(n)===r);return e.push(...t.filter(n=>xe(n)!==r)),e}var Oi={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function xs(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function Ic(t,r,e,n,i,o,a){let l=Ns(t,r,e);if(!l.matched)return _(l);let s=xs(o(l));return n=Ac(r,n),Mc(n,r,e,i,s,a).pipe(U(c=>c===!0?l:m({},Oi)))}function Ns(t,r,e){if(r.path==="")return r.pathMatch==="full"&&(t.hasChildren()||e.length>0)?m({},Oi):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(r.matcher||Za)(e,t,r);if(!i)return m({},Oi);let o={};Object.entries(i.posParams??{}).forEach(([l,s])=>{o[l]=s.path});let a=i.consumed.length>0?m(m({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function $a(t,r,e,n,i){return e.length>0&&Pc(t,e,n,i)?{segmentGroup:new w(r,Fc(n,new w(e,t.children))),slicedSegments:[]}:e.length===0&&kc(t,e,n)?{segmentGroup:new w(t.segments,Oc(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new w(t.segments,t.children),slicedSegments:e}}function Oc(t,r,e,n){let i={};for(let o of e)if(vr(t,r,o)&&!n[xe(o)]){let a=new w([],{});i[xe(o)]=a}return m(m({},n),i)}function Fc(t,r){let e={};e[b]=r;for(let n of t)if(n.path===""&&xe(n)!==b){let i=new w([],{});e[xe(n)]=i}return e}function Pc(t,r,e,n){return e.some(i=>!vr(t,r,i)||!(xe(i)!==b)?!1:!(n!==void 0&&xe(i)===n))}function kc(t,r,e){return e.some(n=>vr(t,r,n))}function vr(t,r,e){return(t.hasChildren()||r.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Lc(t,r,e){return r.length===0&&!t.children[e]}var Fi=class{};async function Vc(t,r,e,n,i,o,a,l){return new Pi(t,r,e,n,i,a,o,l).recognize()}var Uc=31,Pi=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(r,e,n,i,o,a,l,s){this.injector=r,this.configLoader=e,this.rootComponentType=n,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=l,this.abortSignal=s,this.applyRedirects=new Ii(this.urlSerializer,this.urlTree)}noMatchError(r){return new D(4002,`'${r.segmentGroup}'`)}async recognize(){let r=$a(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(r),i=new fe(n,e),o=new dn("",i),a=as(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(r){let e=new xt([],Object.freeze({}),Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),b,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,r,b,e),rootSnapshot:e}}catch(n){if(n instanceof un)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Ue?this.noMatchError(n):n}}async processSegmentGroup(r,e,n,i,o){if(n.segments.length===0&&n.hasChildren())return this.processChildren(r,e,n,o);let a=await this.processSegment(r,e,n,n.segments,i,!0,o);return a instanceof fe?[a]:[]}async processChildren(r,e,n,i){let o=[];for(let s of Object.keys(n.children))s==="primary"?o.unshift(s):o.push(s);let a=[];for(let s of o){let c=n.children[s],u=Tc(e,s),g=await this.processSegmentGroup(r,u,c,s,i);a.push(...g)}let l=ws(a);return jc(l),l}async processSegment(r,e,n,i,o,a,l){for(let s of e)try{return await this.processSegmentAgainstRoute(s._injector??r,e,s,n,i,o,a,l)}catch(c){if(c instanceof Ue||ys(c))continue;throw c}if(Lc(n,i,o))return new Fi;throw new Ue(n)}async processSegmentAgainstRoute(r,e,n,i,o,a,l,s){if(xe(n)!==a&&(a===b||!vr(i,o,n)))throw new Ue(i);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(r,i,n,o,a,s);if(this.allowRedirects&&l)return this.expandSegmentAgainstRouteUsingRedirect(r,i,e,n,o,a,s);throw new Ue(i)}async expandSegmentAgainstRouteUsingRedirect(r,e,n,i,o,a,l){let{matched:s,parameters:c,consumedSegments:u,positionalParamSegments:g,remainingSegments:h}=Ns(e,i,o);if(!s)throw new Ue(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Uc&&(this.allowRedirects=!1));let R=this.createSnapshot(r,i,o,c,l);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let W=await this.applyRedirects.applyRedirectCommands(u,i.redirectTo,g,xs(R),r),Z=await this.applyRedirects.lineralizeSegments(i,W);return this.processSegment(r,n,e,Z.concat(h),a,!1,l)}createSnapshot(r,e,n,i,o){let a=new xt(n,i,Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Bc(e),xe(e),e.component??e._loadedComponent??null,e,Hc(e),r),l=ki(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(l.params),a.data=Object.freeze(l.data),a}async matchSegmentAgainstRoute(r,e,n,i,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let l=De=>this.createSnapshot(r,n,De.consumedSegments,De.parameters,a),s=await Xn(Ic(e,n,i,r,this.urlSerializer,l,this.abortSignal));if(n.path==="**"&&(e.children={}),!s?.matched)throw new Ue(e);r=n._injector??r;let{routes:c}=await this.getChildConfig(r,n,i),u=n._loadedInjector??r,{parameters:g,consumedSegments:h,remainingSegments:R}=s,W=this.createSnapshot(r,n,h,g,a),{segmentGroup:Z,slicedSegments:Ee}=$a(e,h,R,c,o);if(Ee.length===0&&Z.hasChildren()){let De=await this.processChildren(u,c,Z,W);return new fe(W,De)}if(c.length===0&&Ee.length===0)return new fe(W,[]);let dt=xe(n)===o,ze=await this.processSegment(u,c,Z,Ee,dt?b:o,!0,W);return new fe(W,ze instanceof fe?[ze]:[])}async getChildConfig(r,e,n){if(e.children)return{routes:e.children,injector:r};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(r).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Xn(wc(r,e,n,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(r,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Dc(e)}return{routes:[],injector:r}}};function jc(t){t.sort((r,e)=>r.value.outlet===b?-1:e.value.outlet===b?1:r.value.outlet.localeCompare(e.value.outlet))}function zc(t){let r=t.value.routeConfig;return r&&r.path===""}function ws(t){let r=[],e=new Set;for(let n of t){if(!zc(n)){r.push(n);continue}let i=r.find(o=>n.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...n.children),e.add(i)):r.push(n)}for(let n of e){let i=ws(n.children);r.push(new fe(n.value,i))}return r.filter(n=>!e.has(n))}function Bc(t){return t.data||{}}function Hc(t){return t.resolve||{}}function $c(t,r,e,n,i,o,a){return Be(async l=>{let{state:s,tree:c}=await Vc(t,r,e,n,l.extractedUrl,i,o,a);return T(m({},l),{targetSnapshot:s,urlAfterRedirects:c})})}function qc(t){return Be(r=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=r;if(!n.length)return _(r);let i=new Set(n.map(l=>l.route)),o=new Set;for(let l of i)if(!o.has(l))for(let s of Ms(l))o.add(s);let a=0;return ae(o).pipe(Kr(l=>i.has(l)?Gc(l,e,t):(l.data=ki(l,l.parent,t).resolve,_(void 0))),ce(()=>a++),Qr(1),Be(l=>a===o.size?_(r):oe))})}function Ms(t){let r=t.children.map(e=>Ms(e)).flat();return[t,...r]}function Gc(t,r,e){let n=t.routeConfig,i=t._resolve;return n?.title!==void 0&&!hs(n)&&(i[mn]=n.title),In(()=>(t.data=ki(t,t.parent,e).resolve,Wc(i,t,r).pipe(U(o=>(t._resolvedData=o,t.data=m(m({},t.data),o),null)))))}function Wc(t,r,e){let n=Ci(t);if(n.length===0)return _({});let i={};return ae(n).pipe(Be(o=>Zc(t[o],r,e).pipe(Ae(),ce(a=>{if(a instanceof Nt)throw fr(new Ze,a);i[o]=a}))),Qr(1),U(()=>i),Yr(o=>ys(o)?oe:xo(o)))}function Zc(t,r,e){let n=r._environmentInjector,i=Dt(t,n),o=i.resolve?i.resolve(r,e):ve(n,()=>i(r,e));return at(o)}function qa(t){return de(r=>{let e=t(r);return e?ae(e).pipe(U(()=>r)):_(r)})}var ji=(()=>{class t{buildTitle(e){let n,i=e.root;for(;i!==void 0;)n=this.getResolvedTitleForRoute(i)??n,i=i.children.find(o=>o.outlet===b);return n}getResolvedTitleForRoute(e){return e.data[mn]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>d(Es)})}return t})(),Es=(()=>{class t extends ji{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(I(Va))};static \u0275prov=ue({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Rt=new f("",{factory:()=>({})}),pn=new f(""),Ds=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(ua);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let i=(async()=>{try{let o=await Ka(ve(e,()=>n.loadComponent())),a=await As(ai(o));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,i),i}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let i=(async()=>{try{let o=await Rs(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,i),i}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();async function Rs(t,r,e,n){let i=await Ka(ve(e,()=>t.loadChildren())),o=await As(ai(i)),a;o instanceof Ko||Array.isArray(o)?a=o:a=await r.compileModuleAsync(o),n&&n(t);let l,s,c=!1,u;return Array.isArray(a)?(s=a,c=!0):(l=a.create(e).injector,u=a,s=l.get(pn,[],{optional:!0,self:!0}).flat()),{routes:s.map(Ui),injector:l,factory:u}}async function As(t){return t}var br=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>d(Yc)})}return t})(),Yc=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),Ts=new f("");var Is=new f(""),Kc=()=>{},Os=new f(""),Fs=(()=>{class t{currentNavigation=M(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=M(null);events=new k;transitionAbortWithErrorSubject=new k;configLoader=d(Ds);environmentInjector=d(Te);destroyRef=d(pt);urlSerializer=d(Mt);rootContexts=d(Et);location=d(zn);inputBindingEnabled=d(gr,{optional:!0})!==null;titleStrategy=d(ji);options=d(Rt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||tc;urlHandlingStrategy=d(br);createViewTransition=d(Ts,{optional:!0});navigationErrorHandler=d(Os,{optional:!0});activatedRouteInjectorFeature=d(Is,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>_(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new or(i)),n=i=>this.events.next(new ar(i));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;N(()=>{this.transitions?.next(T(m({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new ie(null),this.transitions.pipe(Re(n=>n!==null),de(n=>{let i=!0,o=!1,a=new AbortController,l=()=>!o&&this.currentTransition?.id===n.id;return _(n).pipe(de(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",J.SupersededByNewNavigation),oe;this.currentTransition=n;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?T(m({},c),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),g=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&g!=="reload")return this.events.next(new je(s.id,this.urlSerializer.serialize(s.rawUrl),"",on.IgnoredSameUrlNavigation)),s.resolve(!1),oe;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return _(s).pipe(de(h=>(this.events.next(new it(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),h.id!==this.navigationId?oe:Promise.resolve(h))),$c(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),ce(h=>{n.targetSnapshot=h.targetSnapshot,n.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation.update(R=>(R.finalUrl=h.urlAfterRedirects,R)),this.events.next(new sn)}),de(h=>ae(n.routesRecognizeHandler.deferredHandle??_(void 0)).pipe(U(()=>h))),ce(()=>{let h=new an(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(h)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:h,extractedUrl:R,source:W,restoredState:Z,extras:Ee}=s,dt=new it(h,this.urlSerializer.serialize(R),W,Z);this.events.next(dt);let ze=ms(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=T(m({},s),{targetSnapshot:ze,urlAfterRedirects:R,extras:T(m({},Ee),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(De=>(De.finalUrl=R,De)),_(n)}else return this.events.next(new je(s.id,this.urlSerializer.serialize(s.extractedUrl),"",on.IgnoredByUrlHandlingStrategy)),s.resolve(!1),oe}),U(s=>{let c=new tr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=n=T(m({},s),{guards:ac(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),vc(s=>this.events.next(s)),de(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw fr(this.urlSerializer,s.guardsResult);let c=new nr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!l())return oe;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",J.GuardRejected),oe;if(s.guards.canActivateChecks.length===0)return _(s);let u=new rr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(u),!l())return oe;let g=!1;return _(s).pipe(qc(this.paramsInheritanceStrategy),ce({next:()=>{g=!0;let h=new ir(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(h)},complete:()=>{g||this.cancelNavigationTransition(s,"",J.NoDataFromResolver)}}))}),qa(s=>{let c=g=>{let h=[];if(g.routeConfig?._loadedComponent)g.component=g.routeConfig?._loadedComponent;else if(g.routeConfig?.loadComponent){let R=g._environmentInjector;h.push(this.configLoader.loadComponent(R,g.routeConfig).then(W=>{g.component=W}))}for(let R of g.children)h.push(...c(R));return h},u=c(s.targetSnapshot.root);return u.length===0?_(s):ae(Promise.all(u).then(()=>s))}),de(s=>{let{newlyCreatedRoutes:c,state:u}=nc(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=n=s=T(m({},s),{targetRouterState:u,newlyCreatedRoutes:c}),this.currentNavigation.update(g=>(g.targetRouterState=u,g)),_(s)}),this.activatedRouteInjectorFeature?.operator()??(s=>s),qa(()=>this.afterPreactivation()),de(()=>{let{currentSnapshot:s,targetSnapshot:c}=n,u=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return u?ae(u).pipe(U(()=>n)):_(n)}),ut(1),de(s=>{i=!1,this.events.next(new St);let c=n.beforeActivateHandler.deferredHandle;return c?ae(c.then(()=>s)):_(s)}),ce(s=>{new Ti(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),l()&&(o=!0,this.currentNavigation.update(c=>(c.abort=Kc,c)),this.lastSuccessfulNavigation.set(N(this.currentNavigation)),this.events.next(new Fe(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ge(_s(a.signal).pipe(Re(()=>!o&&i),ce(()=>{this.cancelNavigationTransition(n,a.signal.reason+"",J.Aborted)}))),ce({complete:()=>{o=!0}}),ge(this.transitionAbortWithErrorSubject.pipe(ce(s=>{throw s}))),Ao(()=>{a.abort(),o||this.cancelNavigationTransition(n,"",J.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Yr(s=>{if(o=!0,Ga(n),this.destroyed)return n.resolve(!1),oe;if(bs(s))this.events.next(new Se(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),oc(s)?this.events.next(new Ct(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let c=new ot(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let u=ve(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(u instanceof Nt){let{message:g,cancellationCode:h}=fr(this.urlSerializer,u);this.events.next(new Se(n.id,this.urlSerializer.serialize(n.extractedUrl),g,h)),this.events.next(new Ct(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(u){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(u)}}return oe}))}))}cancelNavigationTransition(e,n,i){Ga(e);let o=new Se(e.id,this.urlSerializer.serialize(e.extractedUrl),n,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=N(this.currentNavigation),i=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==i?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();function Qc(t){return t!==tn}function Ga(t){if(t.newlyCreatedRoutes)for(let r of t.newlyCreatedRoutes)r._localInjector?.destroy()}var Ps=new f("");var ks=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>d(Xc)})}return t})(),pr=class{shouldDetach(r){return!1}store(r,e){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,e){return r.routeConfig===e.routeConfig}shouldDestroyInjector(r){return!0}},Xc=(()=>{class t extends pr{static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),yr=(()=>{class t{urlSerializer=d(Mt);options=d(Rt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(zn);urlHandlingStrategy=d(br);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new he;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=i??o;return a instanceof he?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:i}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,i),this.routerState=e):this.rawUrlTree=i}routerState=ms(null,d(Te));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:()=>d(Jc)})}return t})(),Jc=(()=>{class t extends yr{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof it?this.updateStateMemento():e instanceof je?this.commitTransition(n):e instanceof an?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof St?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Se&&!us(e)?this.restoreHistory(n):e instanceof ot?this.restoreHistory(n,!0):e instanceof Fe&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:i,id:o}=n,{replaceUrl:a,state:l}=i;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,c=m(m({},l),this.generateNgRouterState(o,s,n));this.location.replaceState(e,"",c)}else{let s=m(m({},l),this.generateNgRouterState(o,this.browserPageId+1,n));this.location.go(e,"",s)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,i){return this.canceledNavigationResolution==="computed"?m({navigationId:e,\u0275routerPageId:n},this.routerUrlState(i)):m({navigationId:e},this.routerUrlState(i))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();function zi(t,r){t.events.pipe(Re(e=>e instanceof Fe||e instanceof Se||e instanceof ot||e instanceof je),U(e=>e instanceof Fe||e instanceof je?0:(e instanceof Se?e.code===J.Redirect||e.code===J.SupersededByNewNavigation:!1)?2:1),Re(e=>e!==2),ut(1)).subscribe(()=>{r()})}var Ke=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(Xo);stateManager=d(yr);options=d(Rt,{optional:!0})||{};pendingTasks=d(Uo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(Fs);urlSerializer=d(Mt);location=d(zn);urlHandlingStrategy=d(br);injector=d(Te);_events=new k;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(ks);injectorCleanup=d(Ps,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(pn,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(gr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ct;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let i=this.navigationTransitions.currentTransition,o=N(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof Se&&n.code!==J.Redirect&&n.code!==J.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Fe)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof Ct){let a=n.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(n.url,i.currentRawUrl),s=m({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Qc(i.source)},a);this.scheduleNavigation(l,tn,null,s,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Jd(n)&&this._events.next(n)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),tn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,i,o)=>{this.navigateToSyncWithBrowser(e,i,n,o)})}navigateToSyncWithBrowser(e,n,i,o){let a=i?.navigationId?i:null,l=i?.\u0275routerUrl??e;if(i?.\u0275routerUrl&&(o=T(m({},o),{browserUrl:e})),i){let c=m({},i);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let s=this.parseUrl(l);this.scheduleNavigation(s,n,a,o).catch(c=>{this.disposed||this.injector.get(Fn)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return N(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Ui),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:l,preserveFragment:s}=n,c=s?this.currentUrlTree.fragment:a,u=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":u=m(m({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let g;try{let h=i?i.snapshot:this.routerState.snapshot.root;g=ss(h)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),g=this.currentUrlTree.root}return ls(g,e,u,c??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let i=Ye(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,tn,null,n)}navigate(e,n={skipLocationChange:!1}){return eu(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Oo(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let i;if(n===!0?i=m({},Xa):n===!1?i=m({},xi):i=m(m({},xi),n),Ye(e))return Ua(this.currentUrlTree,e,i);let o=this.parseUrl(e);return Ua(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((n,[i,o])=>(o!=null&&(n[i]=o),n),{})}scheduleNavigation(e,n,i,o,a){if(this.disposed)return Promise.resolve(!1);let l,s,c;a?(l=a.resolve,s=a.reject,c=a.promise):c=new Promise((g,h)=>{l=g,s=h});let u=this.pendingTasks.add();return zi(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:l,reject:s,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();function eu(t){for(let r=0;r<t.length;r++)if(t[r]==null)throw new D(4008,!1)}var ru=(()=>{class t{router=d(Ke);stateManager=d(yr);fragment=M("");queryParams=M({});path=M("");serializer=d(Mt);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Fe&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new he(n)))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),_r=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=d(new ma("href"),{optional:!0});reactiveHref=oi(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return N(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return N(this._target)}_target=M(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return N(this._queryParams)}_queryParams=M(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return N(this._fragment)}_fragment=M(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return N(this._queryParamsHandling)}_queryParamsHandling=M(void 0);set state(e){this._state.set(e)}get state(){return N(this._state)}_state=M(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return N(this._info)}_info=M(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return N(this._relativeTo)}_relativeTo=M(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return N(this._preserveFragment)}_preserveFragment=M(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return N(this._skipLocationChange)}_skipLocationChange=M(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return N(this._replaceUrl)}_replaceUrl=M(!1);browserUrl=Ve(void 0);isAnchorElement;onChanges=new k;applicationErrorHandler=d(Fn);options=d(Rt,{optional:!0});reactiveRouterState=d(ru);constructor(e,n,i,o,a,l){this.router=e,this.route=n,this.tabIndexAttribute=i,this.renderer=o,this.el=a,this.locationStrategy=l;let s=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s==="a"||s==="area"||!!(typeof customElements=="object"&&customElements.get(s)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=M(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Ye(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,i,o,a){let l=this._urlTree();if(l===null||this.isAnchorElement&&(e!==0||n||i||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let s=this.browserUrl(),c=m({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(l,c)?.catch(u=>{this.applicationErrorHandler(u)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let i=this.renderer,o=this.el.nativeElement;n!==null?i.setAttribute(o,e,n):i.removeAttribute(o,e)}_urlTree=Y(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i==="preserve"||i==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let n=this.routerLinkInput();return n===null||!this.router.createUrlTree?null:Ye(n)?n:this.router.createUrlTree(n,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,n)=>this.computeHref(e)===this.computeHref(n)});get urlTree(){return N(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(n){return new(n||t)(A(Ke),A(Ne),Bo("tabindex"),A(se),A(H),A(ya))};static \u0275dir=S({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,i){n&1&&ee("click",function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),n&2&&ye("href",i.reactiveHref(),$o)("target",i._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ne],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ne],replaceUrl:[2,"replaceUrl","replaceUrl",ne],browserUrl:[1,"browserUrl"],routerLink:"routerLink"},features:[be]})}return t})();var iu=new f("");function Bi(t,...r){return On([{provide:pn,multi:!0,useValue:t},{provide:Ne,useFactory:ou},{provide:Jo,multi:!0,useFactory:au},r.map(e=>e.\u0275providers)])}function ou(){return d(Ke).routerState.root}function au(){let t=d(Ie);return r=>{let e=t.get(qt);if(r!==e.components[0])return;let n=t.get(Ke),i=t.get(su);t.get(lu)===1&&n.initialNavigation(),t.get(du,null,{optional:!0})?.setUpPreloading(),t.get(iu,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var su=new f("",{factory:()=>new k}),lu=new f("",{factory:()=>1});var du=new f("");var Sr=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"main"],[1,"content"]],template:function(e,n){e&1&&(p(0,"div",0)(1,"div",1),P(2,"router-outlet"),v()())},dependencies:[fn],styles:["[_nghost-%COMP%] > div[_ngcontent-%COMP%]{height:100vh;width:100%;display:flex;align-items:center;justify-content:flex-start;flex-direction:column}.content[_ngcontent-%COMP%]{flex:1 1 auto;width:100%;max-width:1440px;box-sizing:border-box;padding:2rem;display:flex;flex-direction:column}"]})};function gn(t){return t.buttons===0||t.detail===0}function vn(t){let r=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var $i;function Ls(){if($i==null){let t=typeof document<"u"?document.head:null;$i=!!(t&&(t.createShadowRoot||t.attachShadow))}return $i}function qi(t){if(Ls()){let r=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function we(t){if(t.composedPath)try{return t.composedPath()[0]}catch{}return t.target}var Gi;try{Gi=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Gi=!1}var re=(()=>{class t{_platformId=d(gt);isBrowser=this._platformId?wa(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Gi)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var bn;function Vs(){if(bn==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>bn=!0}))}finally{bn=bn||!1}return bn}function At(t){return Vs()?t:!!t.capture}function Me(t){return t instanceof H?t.nativeElement:t}var Us=new f("cdk-input-modality-detector-options"),js={ignoreKeys:[18,17,224,91,16]},zs=650,Wi={passive:!0,capture:!0},Bs=(()=>{class t{_platform=d(re);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ie(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=we(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<zs||(this._modality.next(gn(e)?"keyboard":"mouse"),this._mostRecentTarget=we(e))};_onTouchstart=e=>{if(vn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=we(e)};constructor(){let e=d(O),n=d(q),i=d(Us,{optional:!0});if(this._options=m(m({},js),i),this.modalityDetected=this._modality.pipe(Io(1)),this.modalityChanged=this.modalityDetected.pipe(Ro()),this._platform.isBrowser){let o=d(He).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,Wi),o.listen(n,"mousedown",this._onMousedown,Wi),o.listen(n,"touchstart",this._onTouchstart,Wi)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})(),yn=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(yn||{}),Hs=new f("cdk-focus-monitor-default-options"),Cr=At({passive:!0,capture:!0}),Zi=(()=>{class t{_ngZone=d(O);_platform=d(re);_inputModalityDetector=d(Bs);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(q);_stopInputModalityDetector=new k;constructor(){let e=d(Hs,{optional:!0});this._detectionMode=e?.detectionMode||yn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=we(e);for(let i=n;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,n=!1){let i=Me(e);if(!this._platform.isBrowser||i.nodeType!==1)return _();let o=qi(i)||this._document,a=this._elementInfo.get(i);if(a)return n&&(a.checkChildren=!0),a.subject;let l={checkChildren:n,subject:new k,rootNode:o};return this._elementInfo.set(i,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let n=Me(e),i=this._elementInfo.get(n);i&&(i.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(i))}focusVia(e,n,i){let o=Me(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([l,s])=>this._originChanged(l,n,s)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===yn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===yn.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?zs:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,n){let i=this._elementInfo.get(n),o=we(e);!i||!i.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),i)}_onBlur(e,n){let i=this._elementInfo.get(n);!i||i.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(i,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,i=this._rootNodeFocusListenerCount.get(n)||0;i||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Cr),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Cr)}),this._rootNodeFocusListenerCount.set(n,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ge(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let i=this._rootNodeFocusListenerCount.get(n);i>1?this._rootNodeFocusListenerCount.set(n,i-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Cr),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Cr),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,i){this._setClasses(e,n),this._emitOrigin(i,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&n.push([o,i])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var xr=new WeakMap,st=(()=>{class t{_appRef;_injector=d(Ie);_environmentInjector=d(Te);load(e){let n=this._appRef=this._appRef||this._injector.get(qt),i=xr.get(n);i||(i={loaders:new Set,refs:[]},xr.set(n,i),n.onDestroy(()=>{xr.get(n)?.refs.forEach(o=>o.destroy()),xr.delete(n)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(ga(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var $s=new Set,lt,Yi=(()=>{class t{_platform=d(re);_nonce=d(vt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):uu}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&cu(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();function cu(t,r){if(!$s.has(t))try{lt||(lt=document.createElement("style"),r&&lt.setAttribute("nonce",r),lt.setAttribute("type","text/css"),document.head.appendChild(lt)),lt.sheet&&(lt.sheet.insertRule(`@media ${t.replace(/[{}]/g,"")} {body{ }}`,0),$s.add(t))}catch(e){console.error(e)}}function uu(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var mu=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var qs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=j({providers:[mu]})}return t})();var Gs=new Map,Qe=class t{_appId=d(zt);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){this._appId!=="ng"&&(r+=this._appId);let n=Gs.get(r);return n===void 0?n=0:n++,Gs.set(r,n),`${r}${e?t._infix+"-":""}${n}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})};var Tt,Ws=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ki(){if(Tt)return Tt;if(typeof document!="object"||!document)return Tt=new Set(Ws),Tt;let t=document.createElement("input");return Tt=new Set(Ws.filter(r=>(t.setAttribute("type",r),t.type===r))),Tt}var fu=new f("MATERIAL_ANIMATIONS"),Zs=null;function hu(){return d(fu,{optional:!0})?.animationsDisabled||d(zo,{optional:!0})==="NoopAnimations"?"di-disabled":(Zs??=d(Yi).matchMedia("(prefers-reduced-motion)").matches,Zs?"reduced-motion":"enabled")}function It(){return hu()!=="enabled"}function Ot(t){return t!=null&&`${t}`!="false"}var Ce=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Ce||{}),Qi=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ce.HIDDEN;constructor(r,e,n,i=!1){this._renderer=r,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},Ys=At({passive:!0,capture:!0}),Xi=class{_events=new Map;addHandler(r,e,n,i){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(i):o.set(n,new Set([i]))}else this._events.set(e,new Map([[n,new Set([i])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ys)})}removeHandler(r,e,n){let i=this._events.get(r);if(!i)return;let o=i.get(e);o&&(o.delete(n),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,Ys)))}_delegateEventHandler=r=>{let e=we(r);e&&this._events.get(r.type)?.forEach((n,i)=>{(i===e||i.contains(e))&&n.forEach(o=>o.handleEvent(r))})}},_n={enterDuration:225,exitDuration:150},gu=800,Ks=At({passive:!0,capture:!0}),Qs=["mousedown","touchstart"],Xs=["mouseup","mouseleave","touchend","touchcancel"],vu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return t})(),Nr=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Xi;constructor(r,e,n,i,o){this._target=r,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=Me(n)),o&&o.get(st).load(vu)}fadeInRipple(r,e,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=m(m({},_n),n.animation);n.centered&&(r=i.left+i.width/2,e=i.top+i.height/2);let a=n.radius||bu(r,e,i),l=r-i.left,s=e-i.top,c=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${l-a}px`,u.style.top=`${s-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u);let g=window.getComputedStyle(u),h=g.transitionProperty,R=g.transitionDuration,W=h==="none"||R==="0s"||R==="0s, 0s"||i.width===0&&i.height===0,Z=new Qi(this,u,n,W);u.style.transform="scale3d(1, 1, 1)",Z.state=Ce.FADING_IN,n.persistent||(this._mostRecentTransientRipple=Z);let Ee=null;return!W&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let dt=()=>{Ee&&(Ee.fallbackTimer=null),clearTimeout(De),this._finishRippleTransition(Z)},ze=()=>this._destroyRipple(Z),De=setTimeout(ze,c+100);u.addEventListener("transitionend",dt),u.addEventListener("transitioncancel",ze),Ee={onTransitionEnd:dt,onTransitionCancel:ze,fallbackTimer:De}}),this._activeRipples.set(Z,Ee),(W||!c)&&this._finishRippleTransition(Z),Z}fadeOutRipple(r){if(r.state===Ce.FADING_OUT||r.state===Ce.HIDDEN)return;let e=r.element,n=m(m({},_n),r.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",r.state=Ce.FADING_OUT,(r._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=Me(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Qs.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(r){r.type==="mousedown"?this._onMousedown(r):r.type==="touchstart"?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Xs.forEach(e=>{this._triggerElement.addEventListener(e,this,Ks)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===Ce.FADING_IN?this._startFadeOutTransition(r):r.state===Ce.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:n}=r.config;r.state=Ce.VISIBLE,!n&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=Ce.HIDDEN,e!==null&&(r.element.removeEventListener("transitionend",e.onTransitionEnd),r.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=gn(r),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+gu;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!vn(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===Ce.VISIBLE||r.config.terminateOnPointerUp&&r.state===Ce.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(Qs.forEach(e=>t._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(Xs.forEach(e=>r.removeEventListener(e,this,Ks)),this._pointerUpEventsRegistered=!1))}};function bu(t,r,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(n*n+i*i)}var Js=new f("mat-ripple-global-options");var yu={capture:!0},_u=["focus","mousedown","mouseenter","touchstart"],Ji="mat-ripple-loader-uninitialized",eo="mat-ripple-loader-class-name",el="mat-ripple-loader-centered",wr="mat-ripple-loader-disabled",tl=(()=>{class t{_document=d(q);_animationsDisabled=It();_globalRippleOptions=d(Js,{optional:!0});_platform=d(re);_ngZone=d(O);_injector=d(Ie);_eventCleanups;_hosts=new Map;constructor(){let e=d(He).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>_u.map(n=>e.listen(this._document,n,this._onInteraction,yu)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(Ji,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(eo))&&e.setAttribute(eo,n.className||""),n.centered&&e.setAttribute(el,""),n.disabled&&e.setAttribute(wr,"")}setDisabled(e,n){let i=this._hosts.get(e);i?(i.target.rippleDisabled=n,!n&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):n?e.setAttribute(wr,""):e.removeAttribute(wr)}_onInteraction=e=>{let n=we(e);if(n instanceof HTMLElement){let i=n.closest(`[${Ji}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(eo)),e.append(n);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??_n.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??_n.exitDuration,l={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(wr),rippleConfig:{centered:e.hasAttribute(el),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},s=new Nr(l,this._ngZone,n,this._platform,this._injector),c=!l.rippleDisabled;c&&s.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:s,hasSetUpEvents:c}),e.removeAttribute(Ji)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var nl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return t})();var Su=["*",[["","progressIndicator",""]]],Cu=["*","[progressIndicator]"];function xu(t,r){t&1&&($e(0,"div",1),B(1,1),qe())}var Nu=new f("MAT_BUTTON_CONFIG");function rl(t){return t==null?void 0:pa(t)}var to=(()=>{class t{_elementRef=d(H);_ngZone=d(O);_animationsDisabled=It();_config=d(Nu,{optional:!0});_focusMonitor=d(Zi);_cleanupClick;_renderer=d(se);_rippleLoader=d(tl);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Ve(!1,{transform:ne});constructor(){d(st).load(nl);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(n,i){n&2&&(ye("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),oa(i.color?"mat-"+i.color:""),$("mat-mdc-button-progress-indicator-shown",i.showProgress())("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ne],disabled:[2,"disabled","disabled",ne],ariaDisabled:[2,"aria-disabled","ariaDisabled",ne],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ne],tabIndex:[2,"tabIndex","tabIndex",rl],_tabindex:[2,"tabindex","_tabindex",rl],showProgress:[1,"showProgress"]}})}return t})(),Sn=(()=>{class t extends to{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[me],ngContentSelectors:Cu,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(Le(Su),ke(0,"span",0),B(1),L(2,xu,2,0,"div",1),ke(3,"span",2)(4,"span",3)),n&2&&(x(2),V(i.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return t})();var wu=new f("cdk-dir-doc",{providedIn:"root",factory:()=>d(q)}),Mu=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function il(t){let r=t?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?Mu.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var no=(()=>{class t{get value(){return this.valueSignal()}valueSignal=M("ltr");change=new K;constructor(){let e=d(wu,{optional:!0});if(e){let n=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(il(n||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var Pe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=j({})}return t})();var ol=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=j({imports:[Pe]})}return t})();var Eu=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],Du=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function Ru(t,r){t&1&&($e(0,"div",2),B(1,3),qe())}var al=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),sl=(()=>{class t extends to{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Au(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?al.get(this._appearance):null,o=al.get(e);i&&n.remove(...i),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[me],ngContentSelectors:Du,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(Le(Eu),ke(0,"span",0),B(1),$e(2,"span",1),B(3,1),qe(),B(4,2),L(5,Ru,2,0,"div",2),ke(6,"span",3)(7,"span",4)),n&2&&($("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab),x(5),V(i.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return t})();function Au(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Ft=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=j({imports:[ol,Pe]})}return t})();var Tu=["*"];var Iu=new f("MAT_CARD_CONFIG"),ll=(()=>{class t{appearance;constructor(){let e=d(Iu,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,i){n&2&&$("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Tu,decls:1,vars:0,template:function(n,i){n&1&&(Le(),B(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return t})(),dl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var cl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var ul=(()=>{class t{align="start";static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(n,i){n&2&&$("mat-mdc-card-actions-align-end",i.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})();var ml=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=j({imports:[Pe]})}return t})();var bl=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(A(se),A(H))};static \u0275dir=S({type:t})}return t})(),Fu=(()=>{class t extends bl{static \u0275fac=(()=>{let e;return function(i){return(e||(e=kn(t)))(i||t)}})();static \u0275dir=S({type:t,features:[me]})}return t})(),yl=new f("");var Pu={provide:yl,useExisting:ft(()=>Lr),multi:!0};function ku(){let t=Ge()?Ge().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Lu=new f(""),Lr=(()=>{class t extends bl{_compositionMode;_composing=!1;constructor(e,n,i){super(e,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!ku())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(A(se),A(H),A(Lu,8))};static \u0275dir=S({type:t,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&ee("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},standalone:!1,features:[_e([Pu]),me]})}return t})();function so(t){return t==null||lo(t)===0}function lo(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Vr=new f(""),co=new f(""),Vu=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,En=class{static min(r){return Uu(r)}static max(r){return ju(r)}static required(r){return _l(r)}static requiredTrue(r){return zu(r)}static email(r){return Bu(r)}static minLength(r){return Hu(r)}static maxLength(r){return $u(r)}static pattern(r){return qu(r)}static nullValidator(r){return Er()}static compose(r){return Ml(r)}static composeAsync(r){return El(r)}};function Uu(t){return r=>{if(r.value==null||t==null)return null;let e=parseFloat(r.value);return!isNaN(e)&&e<t?{min:{min:t,actual:r.value}}:null}}function ju(t){return r=>{if(r.value==null||t==null)return null;let e=parseFloat(r.value);return!isNaN(e)&&e>t?{max:{max:t,actual:r.value}}:null}}function _l(t){return so(t.value)?{required:!0}:null}function zu(t){return t.value===!0?null:{required:!0}}function Bu(t){return so(t.value)||Vu.test(t.value)?null:{email:!0}}function Hu(t){return r=>{let e=r.value?.length??lo(r.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function $u(t){return r=>{let e=r.value?.length??lo(r.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function qu(t){if(!t)return Er;let r,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),r=new RegExp(e)):(e=t.toString(),r=t),n=>{if(so(n.value))return null;let i=n.value;return r.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function Er(t){return null}function Sl(t){return t!=null}function Cl(t){return $t(t)?ae(t):t}function xl(t){let r={};return t.forEach(e=>{r=e!=null?m(m({},r),e):r}),Object.keys(r).length===0?null:r}function Nl(t,r){return r.map(e=>e(t))}function Gu(t){return!t.validate}function wl(t){return t.map(r=>Gu(r)?r:e=>r.validate(e))}function Ml(t){if(!t)return null;let r=t.filter(Sl);return r.length==0?null:function(e){return xl(Nl(e,r))}}function uo(t){return t!=null?Ml(wl(t)):null}function El(t){if(!t)return null;let r=t.filter(Sl);return r.length==0?null:function(e){let n=Nl(e,r).map(Cl);return Mo(n).pipe(U(xl))}}function mo(t){return t!=null?El(wl(t)):null}function fl(t,r){return t===null?[r]:Array.isArray(t)?[...t,r]:[t,r]}function Dl(t){return t._rawValidators}function Rl(t){return t._rawAsyncValidators}function io(t){return t?Array.isArray(t)?t:[t]:[]}function Dr(t,r){return Array.isArray(t)?t.includes(r):t===r}function hl(t,r){let e=io(r);return io(t).forEach(i=>{Dr(e,i)||e.push(i)}),e}function pl(t,r){return io(r).filter(e=>!Dr(t,e))}var Rr=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(r){this._rawValidators=r||[],this._composedValidatorFn=uo(this._rawValidators)}_setAsyncValidators(r){this._rawAsyncValidators=r||[],this._composedAsyncValidatorFn=mo(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(r){this._onDestroyCallbacks.push(r)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(r=>r()),this._onDestroyCallbacks=[]}reset(r=void 0){this.control?.reset(r)}hasError(r,e){return this.control?this.control.hasError(r,e):!1}getError(r,e){return this.control?this.control.getError(r,e):null}},Lt=class extends Rr{name;get formDirective(){return null}get path(){return null}};var Cn="VALID",Mr="INVALID",Pt="PENDING",xn="DISABLED",Xe=class{},Ar=class extends Xe{value;source;constructor(r,e){super(),this.value=r,this.source=e}},wn=class extends Xe{pristine;source;constructor(r,e){super(),this.pristine=r,this.source=e}},Mn=class extends Xe{touched;source;constructor(r,e){super(),this.touched=r,this.source=e}},kt=class extends Xe{status;source;constructor(r,e){super(),this.status=r,this.source=e}},Tr=class extends Xe{source;constructor(r){super(),this.source=r}},Vt=class extends Xe{source;constructor(r){super(),this.source=r}};function Al(t){return(Ur(t)?t.validators:t)||null}function Wu(t){return Array.isArray(t)?uo(t):t||null}function Tl(t,r){return(Ur(r)?r.asyncValidators:t)||null}function Zu(t){return Array.isArray(t)?mo(t):t||null}function Ur(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Yu(t,r,e){let n=t.controls;if(!(r?Object.keys(n):n).length)throw new D(1e3,"");if(!Il(n,e))throw new D(1001,"")}function Ku(t,r,e){t._forEachChild((n,i)=>{if(e[i]===void 0)throw new D(-1002,"")})}var Ir=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=M(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(r,e){this._assignValidators(r),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(r){this._rawValidators=this._composedValidatorFn=r,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(r){this._rawAsyncValidators=this._composedAsyncValidatorFn=r}get parent(){return this._parent}get status(){return N(this.statusReactive)}set status(r){N(()=>this.statusReactive.set(r))}_status=Y(()=>this.statusReactive());statusReactive=M(void 0);get valid(){return this.status===Cn}get invalid(){return this.status===Mr}get pending(){return this.status===Pt}get disabled(){return this.status===xn}get enabled(){return this.status!==xn}errors;get pristine(){return N(this.pristineReactive)}set pristine(r){N(()=>this.pristineReactive.set(r))}_pristine=Y(()=>this.pristineReactive());pristineReactive=M(!0);get dirty(){return!this.pristine}get touched(){return N(this.touchedReactive)}set touched(r){N(()=>this.touchedReactive.set(r))}_touched=Y(()=>this.touchedReactive());touchedReactive=M(!1);get untouched(){return!this.touched}_events=new k;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(r){this._assignValidators(r)}setAsyncValidators(r){this._assignAsyncValidators(r)}addValidators(r){this.setValidators(hl(r,this._rawValidators))}addAsyncValidators(r){this.setAsyncValidators(hl(r,this._rawAsyncValidators))}removeValidators(r){this.setValidators(pl(r,this._rawValidators))}removeAsyncValidators(r){this.setAsyncValidators(pl(r,this._rawAsyncValidators))}hasValidator(r){return Dr(this._rawValidators,r)}hasAsyncValidator(r){return Dr(this._rawAsyncValidators,r)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(r={}){let e=this.touched===!1;this.touched=!0;let n=r.sourceControl??this;r.onlySelf||this._parent?.markAsTouched(T(m({},r),{sourceControl:n})),e&&r.emitEvent!==!1&&this._events.next(new Mn(!0,n))}markAllAsDirty(r={}){this.markAsDirty({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(r))}markAllAsTouched(r={}){this.markAsTouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(r))}markAsUntouched(r={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=r.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:n})}),r.onlySelf||this._parent?._updateTouched(r,n),e&&r.emitEvent!==!1&&this._events.next(new Mn(!1,n))}markAsDirty(r={}){let e=this.pristine===!0;this.pristine=!1;let n=r.sourceControl??this;r.onlySelf||this._parent?.markAsDirty(T(m({},r),{sourceControl:n})),e&&r.emitEvent!==!1&&this._events.next(new wn(!1,n))}markAsPristine(r={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=r.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:r.emitEvent})}),r.onlySelf||this._parent?._updatePristine(r,n),e&&r.emitEvent!==!1&&this._events.next(new wn(!0,n))}markAsPending(r={}){this.status=Pt;let e=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new kt(this.status,e)),this.statusChanges.emit(this.status)),r.onlySelf||this._parent?.markAsPending(T(m({},r),{sourceControl:e}))}disable(r={}){let e=this._parentMarkedDirty(r.onlySelf);this.status=xn,this.errors=null,this._forEachChild(i=>{i.disable(T(m({},r),{onlySelf:!0}))}),this._updateValue();let n=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new Ar(this.value,n)),this._events.next(new kt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(T(m({},r),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(r={}){let e=this._parentMarkedDirty(r.onlySelf);this.status=Cn,this._forEachChild(n=>{n.enable(T(m({},r),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent}),this._updateAncestors(T(m({},r),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(r,e){r.onlySelf||(this._parent?.updateValueAndValidity(r),r.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(r){this._parent=r}getRawValue(){return this.value}updateValueAndValidity(r={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Cn||this.status===Pt)&&this._runAsyncValidator(n,r.emitEvent)}let e=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new Ar(this.value,e)),this._events.next(new kt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),r.onlySelf||this._parent?.updateValueAndValidity(T(m({},r),{sourceControl:e}))}_updateTreeValidity(r={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(r)),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?xn:Cn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(r,e){if(this.asyncValidator){this.status=Pt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:r!==!1};let n=Cl(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:r})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let r=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,r}return!1}setErrors(r,e={}){this.errors=r,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(r){let e=r;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,i)=>n&&n._find(i),this)}getError(r,e){let n=e?this.get(e):this;return n?.errors?n.errors[r]:null}hasError(r,e){return!!this.getError(r,e)}get root(){let r=this;for(;r._parent;)r=r._parent;return r}_updateControlsErrors(r,e,n){this.status=this._calculateStatus(),r&&this.statusChanges.emit(this.status),(r||n)&&this._events.next(new kt(this.status,e)),this._parent&&this._parent._updateControlsErrors(r,e,n)}_initObservables(){this.valueChanges=new K,this.statusChanges=new K}_calculateStatus(){return this._allControlsDisabled()?xn:this.errors?Mr:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Pt)?Pt:this._anyControlsHaveStatus(Mr)?Mr:Cn}_anyControlsHaveStatus(r){return this._anyControls(e=>e.status===r)}_anyControlsDirty(){return this._anyControls(r=>r.dirty)}_anyControlsTouched(){return this._anyControls(r=>r.touched)}_updatePristine(r,e){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,r.onlySelf||this._parent?._updatePristine(r,e),i&&this._events.next(new wn(this.pristine,e))}_updateTouched(r={},e){this.touched=this._anyControlsTouched(),this._events.next(new Mn(this.touched,e)),r.onlySelf||this._parent?._updateTouched(r,e)}_onDisabledChange=[];_registerOnCollectionChange(r){this._onCollectionChange=r}_setUpdateStrategy(r){Ur(r)&&r.updateOn!=null&&(this._updateOn=r.updateOn)}_parentMarkedDirty(r){return!r&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(r){return null}_assignValidators(r){this._rawValidators=Array.isArray(r)?r.slice():r,this._composedValidatorFn=Wu(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(r){this._rawAsyncValidators=Array.isArray(r)?r.slice():r,this._composedAsyncValidatorFn=Zu(this._rawAsyncValidators)}_updateHasRequiredValidator(){N(()=>this._hasRequired.set(this.hasValidator(En.required)))}};function Il(t,r){return Object.hasOwn(t,r)}function Qu(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function Xu(t,r,e,n){switch(e){case"name":t.setAttribute(r,e,n);break;case"disabled":case"readonly":case"required":n?t.setAttribute(r,e,""):t.removeAttribute(r,e);break;case"max":case"min":case"minLength":case"maxLength":n!==void 0?t.setAttribute(r,e,n.toString()):t.removeAttribute(r,e);break}}var oo=class{kind;context;control;message;constructor({kind:r,context:e,control:n}){this.kind=r,this.context=e,this.control=n}};var Ju=(()=>{class t{_validator=Er;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Er,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,features:[be]})}return t})();var em={provide:Vr,useExisting:ft(()=>Ol),multi:!0};var Ol=(()=>{class t extends Ju{required;inputName="required";normalizeInput=ne;createValidator=e=>_l;enabled(e){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=kn(t)))(i||t)}})();static \u0275dir=S({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,i){n&2&&ye("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[_e([em]),me]})}return t})();var tm=new f(""),jr=new f("",{factory:()=>fo}),fo="always";function nm(t,r,e=fo){ho(t,r),r.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&r.valueAccessor.setDisabledState?.(t.disabled),im(t,r),am(t,r),om(t,r),rm(t,r)}function Or(t,r,e=!0){let n=()=>{};r?.valueAccessor?.registerOnChange(n),r?.valueAccessor?.registerOnTouched(n),Pr(t,r),t&&(r._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Fr(t,r){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(r)})}function rm(t,r){if(r.valueAccessor.setDisabledState){let e=n=>{r.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),r._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function ho(t,r){let e=Dl(t);r.validator!==null?t.setValidators(fl(e,r.validator)):typeof e=="function"&&t.setValidators([e]);let n=Rl(t);r.asyncValidator!==null?t.setAsyncValidators(fl(n,r.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let i=()=>t.updateValueAndValidity();Fr(r._rawValidators,i),Fr(r._rawAsyncValidators,i)}function Pr(t,r){let e=!1;if(t!==null){if(r.validator!==null){let i=Dl(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==r.validator);o.length!==i.length&&(e=!0,t.setValidators(o))}}if(r.asyncValidator!==null){let i=Rl(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==r.asyncValidator);o.length!==i.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return Fr(r._rawValidators,n),Fr(r._rawAsyncValidators,n),e}function im(t,r){r.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Fl(t,r)})}function om(t,r){r.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Fl(t,r),t.updateOn!=="submit"&&t.markAsTouched()})}function Fl(t,r){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),r.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function am(t,r){let e=(n,i)=>{r.valueAccessor.writeValue(n),i&&r.viewToModelUpdate(n)};t.registerOnChange(e),r._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Pl(t,r){t==null,ho(t,r)}function sm(t,r){return Pr(t,r)}function lm(t,r){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(r,e.currentValue)}function dm(t){return Object.getPrototypeOf(t.constructor)===Fu}function kl(t,r){t._syncPendingControls(),r.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function cm(t,r){if(!r)return null;Array.isArray(r);let e,n,i;return r.forEach(o=>{o.constructor===Lr?e=o:dm(o)?n=o:i=o}),i||n||e||null}function um(t,r){let e=t.indexOf(r);e>-1&&t.splice(e,1)}var mm={provide:tm,useFactory:()=>{let t=d(Je,{self:!0});return{setParseErrors:r=>{t.setParseErrorSource(r)},set onReset(r){t.onReset=r}}}},Je=class extends Rr{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(r){this.userOnReset=r,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Vt&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=cm(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(r,e,n){super(),this.injector=r,this.renderer=e,this.rawValueAccessors=n,this.injector?.get(pt)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let r=this.injector?.get(tt);if(!this.control||!r)return;let e=r.markForCheck.bind(r);this.subscription=new ct,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(n=>{n instanceof Vt&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(r){!r.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!r.customControl||(this.isCustomControlBased=!0,r.listenToCustomControlModel(i=>{this.control?.setValue(i,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(i)}),r.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Qu(r.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof Ol))}ngControlUpdate(r,e){if(!this.isCustomControlBased)return;let n=this.control,i=this.customControlBindings;Object.is(i.value,n.value)||(i.value=n.value,r.setCustomControlModelInput(n.value)),this.bindControlProperty(r,i,"touched",n.touched),this.bindControlProperty(r,i,"dirty",n.dirty),this.bindControlProperty(r,i,"valid",n.valid),this.bindControlProperty(r,i,"invalid",n.invalid),this.bindControlProperty(r,i,"pending",n.pending),this.bindControlProperty(r,i,"disabled",n.disabled),this.shouldBindRequired&&this.bindControlProperty(r,i,"required",this.isRequired);let o=n.errors;if(i.errors!==o){i.errors=o;let a=this._convertErrors(o);r.setInputOnDirectives("errors",a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(r,e,n,i){if(e[n]===i)return;e[n]=i;let o=r.setInputOnDirectives(n,i);this.isNativeFormElement&&!o&&(n==="disabled"||n==="required")&&this.renderer&&Xu(this.renderer,r.nativeElement,n,i)}_convertErrors(r){if(r===null)return[];let e=this.control;return Object.entries(r).map(([n,i])=>new oo({context:i,kind:n,control:e}))}setParseErrorSource(r){if(r===void 0)return;let e=null,n=Y(()=>{let i=r();return i.length===0?null:i.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>e).bind(this),et(()=>{e=n(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(r){this.parseErrorsValidator&&(r?.removeValidators(this.parseErrorsValidator),r?.updateValueAndValidity({emitEvent:!1}))}},ao=class{_cd;constructor(r){this._cd=r}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Ll=(()=>{class t extends ao{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(A(Je,2))};static \u0275dir=S({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&$("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[me]})}return t})();var kr=class extends Ir{constructor(r,e,n){super(Al(e),Tl(n,e)),this.controls=r,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(r,e){let n=this._find(r);return n||(this.controls[r]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(r,e,n={}){this.registerControl(r,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(r,e={}){let n=this._find(r);n&&n._registerOnCollectionChange(()=>{}),delete this.controls[r],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(r,e,n={}){let i=this._find(r);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[r],e&&this.registerControl(r,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(r){return this._find(r)?.enabled===!0}setValue(r,e={}){N(()=>{Ku(this,!0,r),Object.keys(r).forEach(n=>{Yu(this,!0,n),this.controls[n].setValue(r[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(r,e={}){r!=null&&(Object.keys(r).forEach(n=>{let i=this._find(n);i&&i.patchValue(r[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(r={},e={}){this._forEachChild((n,i)=>{n.reset(r?r[i]:null,T(m({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Vt(this))}getRawValue(){return this._reduceChildren({},(r,e,n)=>(r[n]=e.getRawValue(),r))}_syncPendingControls(){let r=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return r&&this.updateValueAndValidity({onlySelf:!0}),r}_forEachChild(r){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&r(n,e)})}_setUpControls(){this._forEachChild(r=>{r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(r){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&r(n))return!0;return!1}_reduceValue(){let r={};return this._reduceChildren(r,(e,n,i)=>((n.enabled||this.disabled)&&(e[i]=n.value),e))}_reduceChildren(r,e){let n=r;return this._forEachChild((i,o)=>{n=e(n,i,o)}),n}_allControlsDisabled(){for(let r of Object.keys(this.controls))if(this.controls[r].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(r){return Il(this.controls,r)?this.controls[r]:null}};var fm={provide:Lt,useExisting:ft(()=>po)},Nn=Promise.resolve(),po=(()=>{class t extends Lt{callSetDisabledState;get submitted(){return N(this.submittedReactive)}_submitted=Y(()=>this.submittedReactive());submittedReactive=M(!1);_directives=new Set;form;ngSubmit=new K;options;constructor(e,n,i){super(),this.callSetDisabledState=i,this.form=new kr({},uo(e),mo(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Nn.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Nn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Nn.then(()=>{let n=this._findContainer(e.path),i=new kr({});Pl(i,e),n.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Nn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){Nn.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),kl(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Tr(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(A(Vr,10),A(co,10),A(jr,8))};static \u0275dir=S({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,i){n&1&&ee("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[_e([fm]),me]})}return t})();function gl(t,r){let e=t.indexOf(r);e>-1&&t.splice(e,1)}function vl(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var go=class extends Ir{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(r=null,e,n){super(Al(e),Tl(n,e)),this._applyFormState(r),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ur(e)&&(e.nonNullable||e.initialValueIsDefault)&&(vl(r)?this.defaultValue=r.value:this.defaultValue=r)}setValue(r,e={}){N(()=>{this.value=this._pendingValue=r,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(r,e={}){this.setValue(r,e)}reset(r=this.defaultValue,e={}){this._applyFormState(r),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Vt(this))}_updateValue(){}_anyControls(r){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(r){this._onChange.push(r)}_unregisterOnChange(r){gl(this._onChange,r)}registerOnDisabledChange(r){this._onDisabledChange.push(r)}_unregisterOnDisabledChange(r){gl(this._onDisabledChange,r)}_forEachChild(r){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(r){vl(r)?(this.value=this._pendingValue=r.value,r.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=r}};var hm=t=>t instanceof go;var pm=(()=>{class t extends Lt{callSetDisabledState;get submitted(){return N(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Y(()=>this._submittedReactive());_submittedReactive=M(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Pr(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return e._setupWithForm(n,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Or(e.control||null,e,!1),um(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,kl(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Tr(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,i=this.form.get(e.path);n!==i&&(Or(n||null,e),hm(i)&&e._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Pl(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&sm(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ho(this.form,this),this._oldForm&&Pr(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(A(Vr,10),A(co,10),A(jr,8))};static \u0275dir=S({type:t,features:[me,be]})}return t})();var Vl=new f(""),gm={provide:Je,useExisting:ft(()=>vo)},vo=(()=>{class t extends Je{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new K;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,i,o,a,l,s){super(s,l,i),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){if(this._isControlChanged(e)){let n=e.form.previousValue;n&&(Or(n,this,!1),this.removeParseErrorsValidator(n)),this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,nm(this.form,this,this.callSetDisabledState)),this.form.updateValueAndValidity({emitEvent:!1})}lm(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Or(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!0)}static \u0275fac=function(n){return new(n||t)(A(Vr,10),A(co,10),A(yl,10),A(Vl,8),A(jr,8),A(se,8),A(Ie,8))};static \u0275dir=S({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[_e([gm,mm]),me,be,Qo(null)]})}return t})();var vm={provide:Lt,useExisting:ft(()=>bo)},bo=(()=>{class t extends pm{form=null;ngSubmit=new K;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=kn(t)))(i||t)}})();static \u0275dir=S({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,i){n&1&&ee("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[_e([vm]),me]})}return t})();var bm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=j({})}return t})();var Ul=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Vl,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:jr,useValue:e.callSetDisabledState??fo}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=j({imports:[bm]})}return t})();var yo=class{_box;_destroyed=new k;_resizeSubject=new k;_resizeObserver;_elementObservables=new Map;constructor(r){this._box=r,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(r){return this._elementObservables.has(r)||this._elementObservables.set(r,new An(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(r,{box:this._box}),()=>{this._resizeObserver?.unobserve(r),n.unsubscribe(),this._elementObservables.delete(r)}}).pipe(Re(e=>e.some(n=>n.target===r)),jt({bufferSize:1,refCount:!0}),ge(this._destroyed))),this._elementObservables.get(r)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},jl=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=d(O);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let i=n?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new yo(i)),this._observers.get(i).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var _m=["notch"],Sm=["*"],zl=["iconPrefixContainer"],Bl=["textPrefixContainer"],Hl=["iconSuffixContainer"],$l=["textSuffixContainer"],Cm=["textField"],xm=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Nm=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function wm(t,r){t&1&&P(0,"span",21)}function Mm(t,r){if(t&1&&(p(0,"label",20),B(1,1),L(2,wm,1,0,"span",21),v()),t&2){let e=te(2);le("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ye("for",e._control.disableAutomaticLabeling?null:e._control.id),x(2),V(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Em(t,r){if(t&1&&L(0,Mm,3,5,"label",20),t&2){let e=te();V(e._hasFloatingLabel()?0:-1)}}function Dm(t,r){t&1&&P(0,"div",7)}function Rm(t,r){}function Am(t,r){if(t&1&&Un(0,Rm,0,0,"ng-template",13),t&2){te(2);let e=ri(1);le("ngTemplateOutlet",e)}}function Tm(t,r){if(t&1&&(p(0,"div",9),L(1,Am,1,1,null,13),v()),t&2){let e=te();le("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),x(),V(e._forceDisplayInfixLabel()?-1:1)}}function Im(t,r){t&1&&(p(0,"div",10,2),B(2,2),v())}function Om(t,r){t&1&&(p(0,"div",11,3),B(2,3),v())}function Fm(t,r){}function Pm(t,r){if(t&1&&Un(0,Fm,0,0,"ng-template",13),t&2){te();let e=ri(1);le("ngTemplateOutlet",e)}}function km(t,r){t&1&&(p(0,"div",14,4),B(2,4),v())}function Lm(t,r){t&1&&(p(0,"div",15,5),B(2,5),v())}function Vm(t,r){t&1&&P(0,"div",16)}function Um(t,r){t&1&&(p(0,"div",18),B(1,6),v())}function jm(t,r){if(t&1&&(p(0,"mat-hint",22),C(1),v()),t&2){let e=te(2);le("id",e._hintLabelId),x(),Gt(e.hintLabel)}}function zm(t,r){if(t&1&&(p(0,"div",19),L(1,jm,2,2,"mat-hint",22),B(2,7),P(3,"div",23),B(4,8),v()),t&2){let e=te();x(),V(e.hintLabel?1:-1)}}var Ut=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["mat-label"]]})}return t})(),Bm=new f("MatError");var Br=(()=>{class t{align="start";id=d(Qe).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,i){n&2&&(jn("id",i.id),ye("align",null),$("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),Hm=new f("MatPrefix");var Ql=new f("MatSuffix"),Hr=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[_e([{provide:Ql,useExisting:t}])]})}return t})(),Xl=new f("FloatingLabelParent"),ql=(()=>{class t{_elementRef=d(H);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(jl);_ngZone=d(O);_parent=d(Xl);_resizeSubscription=new ct;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return $m(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,i){n&2&&$("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function $m(t){let r=t;if(r.offsetParent!==null)return r.scrollWidth;let e=r.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var Gl="mdc-line-ripple--active",zr="mdc-line-ripple--deactivating",Wl=(()=>{class t{_elementRef=d(H);_cleanupTransitionEnd;constructor(){let e=d(O),n=d(se);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(zr),e.add(Gl)}deactivate(){this._elementRef.nativeElement.classList.add(zr)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,i=n.contains(zr);e.propertyName==="opacity"&&i&&n.remove(Gl,zr)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),Zl=(()=>{class t{_elementRef=d(H);_ngZone=d(O);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,i){if(n&1&&ti(_m,5),n&2){let o;Q(o=X())&&(i._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,i){n&2&&$("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:Sm,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,i){n&1&&(Le(),ke(0,"div",1),$e(1,"div",2,0),B(3),qe(),ke(4,"div",3))},encapsulation:2})}return t})(),_o=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t})}return t})();var So=new f("MatFormField"),qm=new f("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Yl="fill",Gm="auto",Kl="fixed",Wm="translateY(-50%)",Dn=(()=>{class t{_elementRef=d(H);_changeDetectorRef=d(tt);_platform=d(re);_idGenerator=d(Qe);_ngZone=d(O);_defaults=d(qm,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Wt("iconPrefixContainer");_textPrefixContainerSignal=Wt("textPrefixContainer");_iconSuffixContainerSignal=Wt("iconSuffixContainer");_textSuffixContainerSignal=Wt("textSuffixContainer");_prefixSuffixContainers=Y(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=fa(Ut);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ot(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Gm}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||Yl;this._appearanceSignal.set(n)}_appearanceSignal=M(Yl);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Kl}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Kl}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new k;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=It();constructor(){let e=this._defaults,n=d(no);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),et(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Y(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(i+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(mt([void 0,void 0]),U(()=>[n.errorState,n.userAriaDescribedBy]),To(),Re(([[o,a],[l,s]])=>o!==l||a!==s)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(ge(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Eo(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){si({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Y(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,a=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,i;if(n){let o=this._describedByIds||e;i=e.concat(n.filter(a=>a&&!o.includes(a)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,l=n?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",g=`${a+l}px`,R=`calc(${u} * (${g} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,W=`var(--mat-mdc-form-field-label-transform, ${Wm} translateX(${R}))`,Z=a+l+s+c;return[W,Z]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,i,o){if(n&1&&(ra(o,i._labelChild,Ut,5),ei(o,_o,5)(o,Hm,5)(o,Ql,5)(o,Bm,5)(o,Br,5)),n&2){ni();let a;Q(a=X())&&(i._formFieldControl=a.first),Q(a=X())&&(i._prefixChildren=a),Q(a=X())&&(i._suffixChildren=a),Q(a=X())&&(i._errorChildren=a),Q(a=X())&&(i._hintChildren=a)}},viewQuery:function(n,i){if(n&1&&(ia(i._iconPrefixContainerSignal,zl,5)(i._textPrefixContainerSignal,Bl,5)(i._iconSuffixContainerSignal,Hl,5)(i._textSuffixContainerSignal,$l,5),ti(Cm,5)(zl,5)(Bl,5)(Hl,5)($l,5)(ql,5)(Zl,5)(Wl,5)),n&2){ni(4);let o;Q(o=X())&&(i._textField=o.first),Q(o=X())&&(i._iconPrefixContainer=o.first),Q(o=X())&&(i._textPrefixContainer=o.first),Q(o=X())&&(i._iconSuffixContainer=o.first),Q(o=X())&&(i._textSuffixContainer=o.first),Q(o=X())&&(i._floatingLabel=o.first),Q(o=X())&&(i._notchedOutline=o.first),Q(o=X())&&(i._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,i){n&2&&$("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[_e([{provide:So,useExisting:t},{provide:Xl,useExisting:t}])],ngContentSelectors:Nm,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,i){if(n&1&&(Le(xm),Un(0,Em,1,1,"ng-template",null,0,ca),p(2,"div",6,1),ee("click",function(a){return i._control.onContainerClick(a)}),L(4,Dm,1,0,"div",7),p(5,"div",8),L(6,Tm,2,2,"div",9),L(7,Im,3,0,"div",10),L(8,Om,3,0,"div",11),p(9,"div",12),L(10,Pm,1,1,null,13),B(11),v(),L(12,km,3,0,"div",14),L(13,Lm,3,0,"div",15),v(),L(14,Vm,1,0,"div",16),v(),p(15,"div",17),L(16,Um,2,0,"div",18)(17,zm,5,1,"div",19),v()),n&2){let o;x(2),$("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),x(2),V(!i._hasOutline()&&!i._control.disabled?4:-1),x(2),V(i._hasOutline()?6:-1),x(),V(i._hasIconPrefix?7:-1),x(),V(i._hasTextPrefix?8:-1),x(2),V(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),x(2),V(i._hasTextSuffix?12:-1),x(),V(i._hasIconSuffix?13:-1),x(),V(i._hasOutline()?-1:14),x(),$("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let a=i._getSubscriptMessageType();x(),V((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[ql,Zl,_a,Wl,Br],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return t})();var Rn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=j({imports:[qs,Dn,Pe]})}return t})();var Km=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return t})(),Qm={passive:!0},Jl=(()=>{class t{_platform=d(re);_ngZone=d(O);_renderer=d(He).createRenderer(null,null);_styleLoader=d(st);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return oe;this._styleLoader.load(Km);let n=Me(e),i=this._monitoredElements.get(n);if(i)return i.subject;let o=new k,a="cdk-text-field-autofilled",l=c=>{c.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},s=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",l,Qm)));return this._monitoredElements.set(n,{subject:o,unlisten:s}),o}stopMonitoring(e){let n=Me(e),i=this._monitoredElements.get(n);i&&(i.unlisten(),i.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var ed=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=j({})}return t})();var td=new f("");var nd=new f("MAT_INPUT_VALUE_ACCESSOR");var rd=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}isSignalErrorState(e){if(!e)return!1;let n=e().invalid(),i=e().touched();return n&&i}static \u0275fac=function(n){return new(n||t)};static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var $r=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(r,e,n,i,o){this._defaultMatcher=r,this._parentFormGroup=n,this._parentForm=i,this._stateChanges=o,e?Pn(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let r=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==r&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(r){if(this.formField&&r?.isSignalErrorState)return r.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,n=this.ngControl?this.ngControl.control:null;return r?.isErrorState(n,e)??!1}};var Xm=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Jm=new f("MAT_INPUT_CONFIG"),id=(()=>{class t{_elementRef=d(H);_platform=d(re);ngControl=d(Je,{optional:!0,self:!0});_autofillMonitor=d(Jl);_ngZone=d(O);_formField=d(So,{optional:!0});_renderer=d(se);_uid=d(Qe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(Jm,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new k;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Ot(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(En.required)??!1}set required(e){this._required=Ot(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Ki().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Ot(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Ki().has(e));constructor(){let e=d(po,{optional:!0}),n=d(bo,{optional:!0}),i=d(rd),o=d(nd,{optional:!0,self:!0}),a=d(td,{optional:!0,self:!0}),l=this._elementRef.nativeElement,s=l.nodeName.toLowerCase();o?Pn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new $r(i,a||this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&et(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Xm.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,i){n&1&&ee("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),n&2&&(jn("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),ye("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),$("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ne]},exportAs:["matInput"],features:[_e([{provide:_o,useExisting:t}]),be]})}return t})(),od=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=j({imports:[Rn,Rn,ed,Pe]})}return t})();function tf(t,r){if(t&1){let e=na();p(0,"button",3),ee("click",function(){ko(e);let i=te();return Lo(i.clear())}),ht(),p(1,"svg",4),P(2,"path",5),v()()}}var qr=class t{searchTerm=Ve.required();searchControl=new go("",{nonNullable:!0});searchTermChange=Da(this.searchControl.valueChanges);ngOnChanges(){this.searchControl.setValue(this.searchTerm()||"",{emitEvent:!1})}clear(){this.searchControl.setValue("")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-search"]],inputs:{searchTerm:[1,"searchTerm"]},outputs:{searchTermChange:"searchTermChange"},features:[be],decls:5,vars:2,consts:[["subscriptSizing","dynamic"],["matInput","","subscriptSizing","0",3,"formControl"],["matSuffix","","mat-icon-button","","aria-label","Clear","type","button"],["matSuffix","","mat-icon-button","","aria-label","Clear","type","button",3,"click"],["xmlns","http://www.w3.org/2000/svg","height","1em","viewBox","0 0 384 512"],["d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]],template:function(e,n){e&1&&(p(0,"mat-form-field",0)(1,"mat-label"),C(2,"Search"),v(),P(3,"input",1),Wo(),L(4,tf,3,0,"button",2),v()),e&2&&(x(3),le("formControl",n.searchControl),Zo(),x(),V(n.searchControl.value?4:-1))},dependencies:[od,id,Dn,Ut,Hr,Ft,Sn,Rn,Ul,Lr,Ll,vo],styles:["[_nghost-%COMP%]{display:block;margin:3rem 0 1rem}mat-form-field[_ngcontent-%COMP%]{margin:0 5%;width:90%;color:#c3002f;border-radius:.3rem;box-shadow:0 .5rem 1rem #00000026}mat-form-field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{color:#c3002f}  .mat-form-field-underline{display:none}  .mat-form-field-wrapper{padding-bottom:0}"]})};var nf=()=>({"=0":"no results","=1":"one result",other:"# results"}),rf=(t,r)=>r.name;function of(t,r){if(t&1&&(C(0," Your search returned "),p(1,"strong"),C(2),ii(3,"i18nPlural"),v(),C(4,". ")),t&2){let e=te();x(2),Gt(da(3,1,e.logoCount(),sa(4,nf)))}}function af(t,r){if(t&1&&(C(0," This list contains "),p(1,"strong"),C(2),v(),C(3,". "),p(4,"a",4),C(5,"Do you want to add yours?"),v()),t&2){let e=te();x(2),aa("",e.logoCount()," logos")}}function sf(t,r){if(t&1&&(p(0,"a",6),ht(),p(1,"svg",11),P(2,"path",13),v()()),t&2){let e=te().$implicit;le("href",e.website,Vn)}}function lf(t,r){if(t&1&&(p(0,"mat-card",3)(1,"mat-card-content"),P(2,"img",5),v(),p(3,"mat-card-title"),C(4),v(),p(5,"mat-card-actions"),L(6,sf,3,1,"a",6),p(7,"a",7),ht(),p(8,"svg",8),P(9,"path",9),v()(),Vo(),p(10,"a",10),ht(),p(11,"svg",11),P(12,"path",12),v()()()()),t&2){let e=r.$implicit,n=te();x(2),le("ngSrc",`${e.imageUrl}${n.randomSeed}`)("title",e.name)("alt",`The logo of ${e.name}`),x(2),Gt(e.name),x(2),V(e.website?6:-1),x(),le("href",e.githubUrl,Vn),x(3),le("href",e.rawUrl,Vn)}}var Gr=class t{#e=d(Aa);#t=d(Ke);searchTerm$=new k;firstSearchTerm$=d(Ne).queryParamMap.pipe(U(r=>r.get("q")),Ae(r=>!!r),ge(this.searchTerm$));finalSearchTerm=li(Tn(this.firstSearchTerm$,this.searchTerm$).pipe(jt(1)));logos=li(Ra(this.finalSearchTerm).pipe(Do(300),ce(r=>this.setSearchQueryParam(r)),mt(""),de(r=>this.#e.getLogosFiltered(r)),jt(1)),{initialValue:void 0});randomSeed=`?v=${Math.floor(Math.random()*10)}`;logoCount=Y(()=>this.logos()?.length??0);searchTermChangeHandler(r){this.searchTerm$.next(r)}setSearchQueryParam(r){let e=r?{q:r}:{};this.#t.navigate([],{queryParams:e})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-logos-list"]],decls:8,vars:4,consts:[[3,"searchTermChange","searchTerm"],[1,"result-count"],[1,"card-container"],[1,"logo"],["href","https://github.com/maartentibau/angular-logos/pulls","target","_blank","rel","noreferrer"],["height","100","width","100",3,"ngSrc","title","alt"],["mat-icon-button","","target","_blank","title","Website","rel","noreferrer",3,"href"],["mat-icon-button","","target","_blank","title","Show on GitHub","rel","noreferrer",3,"href"],["xmlns","http://www.w3.org/2000/svg","height","1em","viewBox","0 0 496 512"],["d","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"],["mat-icon-button","","target","_blank","title","Show raw","rel","noreferrer",3,"href"],["xmlns","http://www.w3.org/2000/svg","height","1em","viewBox","0 0 512 512"],["d","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"],["d","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]],template:function(e,n){e&1&&(p(0,"app-search",0),ii(1,"async"),ee("searchTermChange",function(o){return n.searchTermChangeHandler(o)}),v(),p(2,"div",1),L(3,of,5,5)(4,af,6,1),v(),p(5,"div",2),ea(6,lf,13,7,"mat-card",3,rf),v()),e&2&&(le("searchTerm",la(1,2,n.firstSearchTerm$)),x(3),V(n.finalSearchTerm()?3:4),x(3),ta(n.logos()))},dependencies:[qr,ml,ll,ul,cl,dl,Ft,Sn,Ma,Sa,Ca],styles:["[_nghost-%COMP%]{flex:1 1 auto}.result-count[_ngcontent-%COMP%]{text-align:center}.card-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,180px);grid-gap:20px;padding:20px 0;justify-content:center}.logo[_ngcontent-%COMP%]{width:180px;display:grid;grid-gap:10px;align-items:center}.logo[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{text-align:center}.logo[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;max-width:100%}.logo[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{text-align:center;font-size:1rem;padding:0 10px}.logo[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{margin:0;text-align:right;font-size:1.4rem;display:flex;justify-content:space-evenly}.logo[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.6rem}"]})};var Wr=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-logos"]],decls:49,vars:0,consts:[[1,"intro"],["routerLink","/"],["src","/assets/angular.png","alt","Angular Logo"],[1,"copyright-note"],[1,"actions"],["mat-raised-button","","color","primary","href","https://github.com/maartentibau/angular-logos/pulls","target","_blank","role","button","rel","noreferrer",1,"contribute","remove-underline"],[1,"credits"],["href","https://twitter.com/maartentibau","target","_blank","rel","noreferrer"],["href","https://twitter.com/fmalcher01","target","_blank","rel","noreferrer"],["href","https://github.com/maartentibau/angularlogoscom","target","_blank","rel","noreferrer"],["href","https://github.com/maartentibau/angular-logos","target","_blank","rel","noreferrer"]],template:function(e,n){e&1&&(p(0,"div",0)(1,"h1")(2,"a",1),P(3,"img",2),C(4," Angular Logos "),v()(),p(5,"p")(6,"strong"),C(7,"Welcome to Angular Logos"),v(),C(8," \u2013 a website dedicated to collecting all logos and badges that are inspired by the original Angular logo."),P(9,"br"),C(10," The logos that can be found on this website can be related to conferences, Meetup groups, NPM packages or anything else that exists within the Angular universe. "),v(),p(11,"p",3),C(12,"Note: All logos on this site are the property of their respective owners."),v(),P(13,"hr"),p(14,"div",4)(15,"div")(16,"p")(17,"strong"),C(18,"Want to add your logo?"),v(),P(19,"br"),C(20," Create a Pull Request on our GitHub repo or file an issue. "),v(),p(21,"a",5),C(22,"Add your logo"),v()()()(),P(23,"app-logos-list"),p(24,"div",6),P(25,"hr"),p(26,"p")(27,"strong"),C(28,"Angular Logos"),v(),C(29," \u2013 Created with \u2764\uFE0F by "),p(30,"a",7),C(31,"Maarten Tibau"),v(),C(32," & "),p(33,"a",8),C(34,"Ferdinand Malcher"),v(),P(35,"br")(36,"br"),p(37,"strong"),C(38,"GitHub: "),v(),C(39," ["),p(40,"a",9),C(41,"Gallery"),v(),C(42," | "),p(43,"a",10),C(44,"Logos"),v(),C(45,"] "),v(),p(46,"p")(47,"strong"),C(48,"All logos on this site are the property of their respective owners. Please clear any copyright issues with the owners before using the logos."),v()()())},dependencies:[_r,Ft,sl,Gr],styles:[".intro[_ngcontent-%COMP%]{padding:2rem;flex:0 0 auto;background-color:#0000000a;border-radius:.3rem;box-shadow:0 .5rem 1rem #00000026}.intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0;text-align:left;color:#e90464;font-size:2.5rem;font-weight:700}.intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{line-height:3rem;text-decoration:none;color:inherit}.intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:4rem;margin-bottom:-1rem}.intro[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:2em}@media only screen and (max-width:650px){.intro[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{flex-direction:column;gap:1em}}.intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem;line-height:1.4rem}.intro[_ngcontent-%COMP%]   a.contribute[_ngcontent-%COMP%]{background-color:#e90464;color:#fff}.intro[_ngcontent-%COMP%]   a.remove-underline[_ngcontent-%COMP%]{text-decoration:none}.intro[_ngcontent-%COMP%]   p.copyright-note[_ngcontent-%COMP%]{font-weight:700;font-size:1.2em}.credits[_ngcontent-%COMP%]{flex:0 0 auto;font-size:.8rem}"]})};var ad=[{path:"",component:Wr},{path:"metacheck",loadComponent:()=>import("./chunk-3G2SUR4S.js").then(t=>t.MetacheckComponent)},{path:"**",redirectTo:"/"}];var sd={providers:[Bi(ad),Ea()]};gi(Sr,sd).catch(t=>console.error(t));
