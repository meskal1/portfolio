"use strict";(self.webpackChunkportfolio123=self.webpackChunkportfolio123||[]).push([[22],{22:function(e,t,n){n.r(t),n.d(t,{Contact:function(){return T}});var r=n(152);var a=n(791),o=n(293),c=n.n(o),s="Contact_contacts__6rF0s",i="Contact_contacts__container__a5nvf",l="Contact_contacts__content__4JDOo",u="Contact_contacts__text_container__cam8I",d="Contact_contacts__title__ZJBqv",m="Contact_contacts__text__GWKxA",_="Contact_contacts__form_container__CyjiU",f="Contact_switcher_container__sCNvS",v="Contact_switcher__TI7ki",h="Contact_contacts__form__BODwv",p="Contact_contacts__block_input__7-Rrl",b="Contact_contacts__input_name__MvGif",g="Contact_contacts__label_name__jGvwy",C="Contact_placeholder__jtjN+",j="Contact_contacts__input_email__mGTL+",S="Contact_contacts__label_email__3-PNT",x="Contact_contacts__label_message__ftXM5",y="Contact_contacts__textarea__Bcz0N",E="Contact_contacts__form_button__EoroJ",O="Contact_bg_ForAutocompliteText__OnyFL",N="Contact_fontSizeCyrillic__d7G-7",w="Contact_errorBorder__ejhDL",k="Contact_errorButton__4gdeN",I="Contact_animationIsLoading__qI66j",P="Contact_animationIsLoaded__0BRRz",A="Contact_modalContainer__baLEb",M="Contact_modalText__YBfl-",L=n(184),T=(0,a.memo)((function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=c()({bindTo:document.getElementById("wrapper")}),n=t.openPortal,o=t.closePortal,T=t.isOpen,F=t.Portal;console.log("rendered contact \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u043a\u043e\u043d\u043a\u043f\u0443 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u0443 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443");var Z=(0,a.useState)(localStorage.getItem("isOffAutocomplite")||"off"),B=(0,r.Z)(Z,2),R=B[0],D=B[1],G=(0,a.useState)("on"===localStorage.getItem("isOffAutocomplite")),q=(0,r.Z)(G,2),z=q[0],U=q[1],W=(0,a.useState)(I),H=(0,r.Z)(W,2),J=H[0],Y=H[1],$=(0,a.useState)(""),K=(0,r.Z)($,2),V=K[0],X=K[1],Q=(0,a.useState)(""),ee=(0,r.Z)(Q,2),te=ee[0],ne=ee[1],re=(0,a.useState)(""),ae=(0,r.Z)(re,2),oe=ae[0],ce=ae[1],se=(0,a.useState)(""),ie=(0,r.Z)(se,2),le=ie[0],ue=ie[1],de=(0,a.useState)(sessionStorage.getItem("textField")||""),me=(0,r.Z)(de,2),_e=me[0],fe=me[1],ve=(0,a.useState)(""),he=(0,r.Z)(ve,2),pe=he[0],be=he[1],ge=(0,a.useState)(""),Ce=(0,r.Z)(ge,2),je=Ce[0],Se=Ce[1],xe=/[\u0430-\u044f\u0451\u0410-\u042f\u0401]/,ye=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[ a-zA-Z0-9-]+(?:\.[ a-zA-Z0-9-]+) *$/,Ee=(0,a.useState)(sessionStorage.getItem("nameField")||""),Oe=(0,r.Z)(Ee,2),Ne=Oe[0],we=Oe[1],ke=(0,a.useState)(sessionStorage.getItem("emailField")||""),Ie=(0,r.Z)(ke,2),Pe=Ie[0],Ae=Ie[1];return(0,a.useEffect)((function(){Ne.match(xe)?ue(N):ue(""),_e.match(xe)?be(N):be(""),Ne&&ne(""),Pe&&ce(""),_e&&Se("")}),[Ne,Pe,_e]),(0,L.jsx)(L.Fragment,{children:(0,L.jsx)("section",{className:s,children:(0,L.jsx)("div",{className:i,children:(0,L.jsxs)("div",{className:l,children:[(0,L.jsxs)("div",{className:u,children:[(0,L.jsx)("h2",{className:d,children:"Contact"}),(0,L.jsx)("p",{className:m,children:"Contact me if you have a job or just say hi :)"})]}),(0,L.jsxs)("div",{className:_,children:[(0,L.jsxs)("label",{className:f,htmlFor:"checkbox",children:["autocomplete",(0,L.jsx)("input",{type:"checkbox",id:"checkbox",onChange:function(){"off"===R?(D("on"),U(!0),localStorage.setItem("isOffAutocomplite","on")):(D("off"),U(!1),localStorage.setItem("isOffAutocomplite","off"))},checked:z}),(0,L.jsx)("span",{className:v})]}),(0,L.jsxs)("form",{className:h,action:"",children:[(0,L.jsxs)("div",{className:p,children:[(0,L.jsx)("label",{className:O}),(0,L.jsx)("input",{className:"".concat(b," ").concat(le," ").concat(te),id:"name",required:!0,name:"name",type:"text",autoComplete:R,value:Ne,onChange:function(e){var t=e.currentTarget.value.replace(/[^a-zA-Z\u0430-\u044f\u0451\u0410-\u042f\u0401 -]/,"").slice(0,50);t.match(xe)?ue(N):ue(""),we(t),sessionStorage.setItem("nameField",t)}}),(0,L.jsx)("label",{className:g,children:"NAME"}),(0,L.jsx)("label",{className:C,htmlFor:"name",children:"NAME"})]}),(0,L.jsxs)("div",{className:p,children:[(0,L.jsx)("label",{className:O}),(0,L.jsx)("input",{className:"".concat(j," ").concat(oe),required:!0,name:"email",id:"email",type:"text",autoComplete:R,value:Pe,onChange:function(e){var t=e.currentTarget.value.replace(/[\u0430-\u044f\u0451\u0410-\u042f\u0401]/,"").slice(0,200);Ae(t),sessionStorage.setItem("emailField",t)},onBlur:function(){!Pe.match(ye)&&Pe&&ce(w)}}),(0,L.jsx)("label",{className:S,children:"EMAIL"}),(0,L.jsx)("label",{className:C,htmlFor:"email",children:"EMAIL"})]}),(0,L.jsxs)("div",{className:p,children:[(0,L.jsx)("textarea",{required:!0,className:"".concat(y," ").concat(pe," ").concat(je),name:"message",id:"message",value:_e,onChange:function(e){var t=e.currentTarget.value.slice(0,3e3);t.match(xe)?be(N):be(""),fe(t),sessionStorage.setItem("textField",t)}}),(0,L.jsx)("label",{className:x,children:"MESSAGE"}),(0,L.jsx)("label",{className:C,htmlFor:"message",children:"MESSAGE"})]})]})]}),T&&(0,L.jsx)(F,{children:(0,L.jsx)("div",{className:A,children:(0,L.jsx)("span",{className:M,children:"Successfully sent"})})}),(0,L.jsx)("button",{className:"".concat(E," ").concat(V," ").concat(J),type:"submit",form:"contacts",onClick:function(e){var t;Ne&&Pe&&_e&&Pe.match(ye)?(n(e),null===(t=document.querySelector("body"))||void 0===t||t.style.setProperty("overflow","hidden"),setTimeout((function(){var e;o(),null===(e=document.querySelector("body"))||void 0===e||e.removeAttribute("style"),we(""),sessionStorage.setItem("nameField",""),Ae(""),sessionStorage.setItem("emailField",""),fe(""),sessionStorage.setItem("textField","")}),2e3)):X(k);Ne||ne(w),Pe&&Pe.match(ye)||ce(w),_e||Se(w)},onAnimationEnd:function(){Y(P),X("")},children:"SEND ME MESSAGE"})]})})})})}))},293:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(791),s=n(164),i=o(n(775));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,o=void 0===n||n,l=e.closeOnEsc,u=void 0===l||l,d=e.bindTo,m=e.isOpen,_=void 0!==m&&m,f=e.onOpen,v=e.onClose,h=e.onPortalClick,p=a(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),b=i.default(),g=b.isServer,C=b.isBrowser,j=c.useState(_),S=j[0],x=j[1],y=c.useRef(S),E=c.useCallback((function(e){y.current=e,x(e)}),[]),O=c.useRef(),N=c.useRef(C?document.createElement("div"):null);c.useEffect((function(){C&&!N.current&&(N.current=document.createElement("div"))}),[C,N]);var w=c.useMemo((function(){if(!g)return d&&s.findDOMNode(d)||document.body}),[g,d]),k=function(e){if(!e)return{portal:N,targetEl:O,event:e};var t=e||{};t.persist&&t.persist(),t.portal=N,t.targetEl=O,t.event=e;var n=e.currentTarget;return!O.current&&n&&n!==document&&(O.current=t.currentTarget),t},I=Object.entries(p).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){g||r(k(e))},e}),{}),P=c.useCallback((function(e){if(!g){var n=k(e);if(null==O.current)throw setTimeout((function(){return E(!0)}),0),Error(t.errorMessage1);f&&f(n),E(!0)}}),[g,N,E,O,f]),A=c.useCallback((function(e){if(!g){var t=k(e);v&&y.current&&v(t),y.current&&E(!1)}}),[g,v,E]),M=c.useCallback((function(e){return y.current?A(e):P(e)}),[A,P]),L=c.useCallback((function(e){return"Escape"===e.key&&u?A(e):void 0}),[u,A]),T=c.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(N)||0!==e.button||!y.current||t(O)||o&&A(e)}),[g,A,o,N]),F=c.useCallback((function(e){if(!g&&N.current instanceof HTMLElement){var t=k(e);N.current.contains(t.target)&&h&&h(t),T(e)}}),[T]),Z=c.useRef({});c.useEffect((function(){if(!g&&w instanceof HTMLElement&&N.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=N.current;return w.appendChild(N.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];p[t]&&(Z.current[t]=function(e){return p[t](k(e))},document.addEventListener(n,Z.current[t]))})),document.addEventListener("keydown",L),document.addEventListener("mousedown",F),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];p[t]&&(document.removeEventListener(n,Z.current[t]),delete Z.current[t])})),document.removeEventListener("keydown",L),document.removeEventListener("mousedown",F),w.removeChild(t)}}}),[g,T,L,w,N]);var B=c.useCallback((function(e){var t=e.children;return null!=N.current?s.createPortal(t,N.current):null}),[N]);return Object.assign([P,A,y.current,B,M,O,N],r(r({isOpen:y.current,openPortal:P,ref:O,closePortal:A,togglePortal:M,Portal:B,portalRef:N},I),{bind:r({ref:O},I)}))}},775:function(e,t){var n,r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(n=t.Device||(t.Device={}));var a=n.Browser,o=n.Server,c=n.Native,s=!("undefined"===typeof window||!window.document||!window.document.createElement),i="undefined"!=typeof navigator&&"ReactNative"==navigator.product?c:s?a:o,l={isBrowser:i===a,isServer:i===o,isNative:i===c,device:i,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:i===a&&!!window.addEventListener,canUseViewport:i===a&&!!window.screen},u=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return r(r({},e),t)}),{})}((e=l,Object.keys(e).map((function(t){return e[t]})),l));var e},d=u();t.weAreServer=function(){l.isServer=!0,d=u()},t.useSSR=function(){return d},t.default=t.useSSR}}]);
//# sourceMappingURL=22.2f92f3a4.chunk.js.map