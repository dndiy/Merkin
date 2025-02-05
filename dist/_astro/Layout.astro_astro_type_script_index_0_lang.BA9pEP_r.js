import{_}from"./preload-helper.ThOiXfk0.js";function o(t,e,i){const s=document.createElement(e);return t&&(s.className=t),i&&i.appendChild(s),s}function E(t,e,i){let s=`translate3d(${t}px,0px,0)`;return void 0!==i&&(s+=` scale3d(${i},${i},1)`),s}function u(t,e,i){t.style.width="number"==typeof e?`${e}px`:e,t.style.height="number"==typeof i?`${i}px`:i}const h={IDLE:"idle",LOADING:"loading",LOADED:"loaded",ERROR:"error"};function S(t){return"button"in t&&1===t.button||t.ctrlKey||t.metaKey||t.altKey||t.shiftKey}function d(t,e,i=document){let s=[];if(t instanceof Element)s=[t];else if(t instanceof NodeList||Array.isArray(t))s=Array.from(t);else{const n="string"==typeof t?t:e;n&&(s=Array.from(i.querySelectorAll(n)))}return s}function I(t){return"function"==typeof t&&t.prototype&&t.prototype.goTo}function m(){return!(!navigator.vendor||!navigator.vendor.match(/apple/i))}class C{constructor(t,e){this.type=t,this.defaultPrevented=!1,e&&Object.assign(this,e)}preventDefault(){this.defaultPrevented=!0}}class L{constructor(){this._listeners={},this._filters={},this.pswp=void 0,this.options=void 0}addFilter(t,e,i=100){var s,n,h;this._filters[t]||(this._filters[t]=[]),null===(s=this._filters[t])||void 0===s||s.push({fn:e,priority:i}),null===(n=this._filters[t])||void 0===n||n.sort(((t,e)=>t.priority-e.priority)),null===(h=this.pswp)||void 0===h||h.addFilter(t,e,i)}removeFilter(t,e){this._filters[t]&&(this._filters[t]=this._filters[t].filter((t=>t.fn!==e))),this.pswp&&this.pswp.removeFilter(t,e)}applyFilters(t,...e){var i;return null===(i=this._filters[t])||void 0===i||i.forEach((t=>{e[0]=t.fn.apply(this,e)})),e[0]}on(t,e){var i,s;this._listeners[t]||(this._listeners[t]=[]),null===(i=this._listeners[t])||void 0===i||i.push(e),null===(s=this.pswp)||void 0===s||s.on(t,e)}off(t,e){var i;this._listeners[t]&&(this._listeners[t]=this._listeners[t].filter((t=>e!==t))),null===(i=this.pswp)||void 0===i||i.off(t,e)}dispatch(t,e){var i;if(this.pswp)return this.pswp.dispatch(t,e);const s=new C(t,e);return null===(i=this._listeners[t])||void 0===i||i.forEach((t=>{t.call(this,s)})),s}}class D{constructor(t,e){if(this.element=o("pswp__img pswp__img--placeholder",t?"img":"div",e),t){const e=this.element;e.decoding="async",e.alt="",e.src=t,e.setAttribute("role","presentation")}this.element.setAttribute("aria-hidden","true")}setDisplayedSize(t,e){this.element&&("IMG"===this.element.tagName?(u(this.element,250,"auto"),this.element.style.transformOrigin="0 0",this.element.style.transform=E(0,0,t/250)):u(this.element,t,e))}destroy(){var t;null!==(t=this.element)&&void 0!==t&&t.parentNode&&this.element.remove(),this.element=null}}class P{constructor(t,e,i){this.instance=e,this.data=t,this.index=i,this.element=void 0,this.placeholder=void 0,this.slide=void 0,this.displayedImageWidth=0,this.displayedImageHeight=0,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.hasSlide=!1,this.isDecoding=!1,this.state=h.IDLE,this.data.type?this.type=this.data.type:this.data.src?this.type="image":this.type="html",this.instance.dispatch("contentInit",{content:this})}removePlaceholder(){this.placeholder&&!this.keepPlaceholder()&&setTimeout((()=>{this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0)}),1e3)}load(t,e){if(this.slide&&this.usePlaceholder())if(this.placeholder){const t=this.placeholder.element;t&&!t.parentElement&&this.slide.container.prepend(t)}else{const t=this.instance.applyFilters("placeholderSrc",!(!this.data.msrc||!this.slide.isFirstSlide)&&this.data.msrc,this);this.placeholder=new D(t,this.slide.container)}this.element&&!e||this.instance.dispatch("contentLoad",{content:this,isLazy:t}).defaultPrevented||(this.isImageContent()?(this.element=o("pswp__img","img"),this.displayedImageWidth&&this.loadImage(t)):(this.element=o("pswp__content","div"),this.element.innerHTML=this.data.html||""),e&&this.slide&&this.slide.updateContentSize(!0))}loadImage(t){var e,i;if(!this.isImageContent()||!this.element||this.instance.dispatch("contentLoadImage",{content:this,isLazy:t}).defaultPrevented)return;const s=this.element;this.updateSrcsetSizes(),this.data.srcset&&(s.srcset=this.data.srcset),s.src=null!==(e=this.data.src)&&void 0!==e?e:"",s.alt=null!==(i=this.data.alt)&&void 0!==i?i:"",this.state=h.LOADING,s.complete?this.onLoaded():(s.onload=()=>{this.onLoaded()},s.onerror=()=>{this.onError()})}setSlide(t){this.slide=t,this.hasSlide=!0,this.instance=t.pswp}onLoaded(){this.state=h.LOADED,this.slide&&this.element&&(this.instance.dispatch("loadComplete",{slide:this.slide,content:this}),this.slide.isActive&&this.slide.heavyAppended&&!this.element.parentNode&&(this.append(),this.slide.updateContentSize(!0)),(this.state===h.LOADED||this.state===h.ERROR)&&this.removePlaceholder())}onError(){this.state=h.ERROR,this.slide&&(this.displayError(),this.instance.dispatch("loadComplete",{slide:this.slide,isError:!0,content:this}),this.instance.dispatch("loadError",{slide:this.slide,content:this}))}isLoading(){return this.instance.applyFilters("isContentLoading",this.state===h.LOADING,this)}isError(){return this.state===h.ERROR}isImageContent(){return"image"===this.type}setDisplayedSize(t,e){if(this.element&&(this.placeholder&&this.placeholder.setDisplayedSize(t,e),!this.instance.dispatch("contentResize",{content:this,width:t,height:e}).defaultPrevented&&(u(this.element,t,e),this.isImageContent()&&!this.isError()))){const i=!this.displayedImageWidth&&t;this.displayedImageWidth=t,this.displayedImageHeight=e,i?this.loadImage(!1):this.updateSrcsetSizes(),this.slide&&this.instance.dispatch("imageSizeChange",{slide:this.slide,width:t,height:e,content:this})}}isZoomable(){return this.instance.applyFilters("isContentZoomable",this.isImageContent()&&this.state!==h.ERROR,this)}updateSrcsetSizes(){if(!this.isImageContent()||!this.element||!this.data.srcset)return;const t=this.element,e=this.instance.applyFilters("srcsetSizesWidth",this.displayedImageWidth,this);(!t.dataset.largestUsedSize||e>parseInt(t.dataset.largestUsedSize,10))&&(t.sizes=e+"px",t.dataset.largestUsedSize=String(e))}usePlaceholder(){return this.instance.applyFilters("useContentPlaceholder",this.isImageContent(),this)}lazyLoad(){this.instance.dispatch("contentLazyLoad",{content:this}).defaultPrevented||this.load(!0)}keepPlaceholder(){return this.instance.applyFilters("isKeepingPlaceholder",this.isLoading(),this)}destroy(){this.hasSlide=!1,this.slide=void 0,!this.instance.dispatch("contentDestroy",{content:this}).defaultPrevented&&(this.remove(),this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0),this.isImageContent()&&this.element&&(this.element.onload=null,this.element.onerror=null,this.element=void 0))}displayError(){if(this.slide){var t,e;let i=o("pswp__error-msg","div");i.innerText=null!==(t=null===(e=this.instance.options)||void 0===e?void 0:e.errorMsg)&&void 0!==t?t:"",i=this.instance.applyFilters("contentErrorElement",i,this),this.element=o("pswp__content pswp__error-msg-container","div"),this.element.appendChild(i),this.slide.container.innerText="",this.slide.container.appendChild(this.element),this.slide.updateContentSize(!0),this.removePlaceholder()}}append(){if(this.isAttached||!this.element)return;if(this.isAttached=!0,this.state===h.ERROR)return void this.displayError();if(this.instance.dispatch("contentAppend",{content:this}).defaultPrevented)return;const t="decode"in this.element;this.isImageContent()?t&&this.slide&&(!this.slide.isActive||m())?(this.isDecoding=!0,this.element.decode().catch((()=>{})).finally((()=>{this.isDecoding=!1,this.appendImage()}))):this.appendImage():this.slide&&!this.element.parentNode&&this.slide.container.appendChild(this.element)}activate(){this.instance.dispatch("contentActivate",{content:this}).defaultPrevented||!this.slide||(this.isImageContent()&&this.isDecoding&&!m()?this.appendImage():this.isError()&&this.load(!1,!0),this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","false"))}deactivate(){this.instance.dispatch("contentDeactivate",{content:this}),this.slide&&this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","true")}remove(){this.isAttached=!1,!this.instance.dispatch("contentRemove",{content:this}).defaultPrevented&&(this.element&&this.element.parentNode&&this.element.remove(),this.placeholder&&this.placeholder.element&&this.placeholder.element.remove())}appendImage(){this.isAttached&&(this.instance.dispatch("contentAppendImage",{content:this}).defaultPrevented||(this.slide&&this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element),(this.state===h.LOADED||this.state===h.ERROR)&&this.removePlaceholder()))}}function A(t,e){if(t.getViewportSizeFn){const i=t.getViewportSizeFn(t,e);if(i)return i}return{x:document.documentElement.clientWidth,y:window.innerHeight}}function c(t,e,i,s,n){let h=0;if(e.paddingFn)h=e.paddingFn(i,s,n)[t];else if(e.padding)h=e.padding[t];else{const i="padding"+t[0].toUpperCase()+t.slice(1);e[i]&&(h=e[i])}return Number(h)||0}function T(t,e,i,s){return{x:e.x-c("left",t,e,i,s)-c("right",t,e,i,s),y:e.y-c("top",t,e,i,s)-c("bottom",t,e,i,s)}}const g=4e3;class z{constructor(t,e,i,s){this.pswp=s,this.options=t,this.itemData=e,this.index=i,this.panAreaSize=null,this.elementSize=null,this.fit=1,this.fill=1,this.vFill=1,this.initial=1,this.secondary=1,this.max=1,this.min=1}update(t,e,i){const s={x:t,y:e};this.elementSize=s,this.panAreaSize=i;const n=i.x/s.x,h=i.y/s.y;this.fit=Math.min(1,n<h?n:h),this.fill=Math.min(1,n>h?n:h),this.vFill=Math.min(1,h),this.initial=this._getInitial(),this.secondary=this._getSecondary(),this.max=Math.max(this.initial,this.secondary,this._getMax()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}_parseZoomLevelOption(t){const e=t+"ZoomLevel",i=this.options[e];if(i)return"function"==typeof i?i(this):"fill"===i?this.fill:"fit"===i?this.fit:Number(i)}_getSecondary(){let t=this._parseZoomLevelOption("secondary");return t||(t=Math.min(1,3*this.fit),this.elementSize&&t*this.elementSize.x>g&&(t=g/this.elementSize.x),t)}_getInitial(){return this._parseZoomLevelOption("initial")||this.fit}_getMax(){return this._parseZoomLevelOption("max")||Math.max(1,4*this.fit)}}function v(t,e,i){const s=e.createContentFromData(t,i);let n;const{options:h}=e;if(h){let o;n=new z(h,t,-1),o=e.pswp?e.pswp.viewportSize:A(h,e);const l=T(h,o,t,i);n.update(s.width,s.height,l)}return s.lazyLoad(),n&&s.setDisplayedSize(Math.ceil(s.width*n.initial),Math.ceil(s.height*n.initial)),s}function b(t,e){const i=e.getItemData(t);if(!e.dispatch("lazyLoadSlide",{index:t,itemData:i}).defaultPrevented)return v(i,e,t)}class x extends L{getNumItems(){var t;let e=0;const i=null===(t=this.options)||void 0===t?void 0:t.dataSource;i&&"length"in i?e=i.length:i&&"gallery"in i&&(i.items||(i.items=this._getGalleryDOMElements(i.gallery)),i.items&&(e=i.items.length));const s=this.dispatch("numItems",{dataSource:i,numItems:e});return this.applyFilters("numItems",s.numItems,i)}createContentFromData(t,e){return new P(t,this,e)}getItemData(t){var e;const i=null===(e=this.options)||void 0===e?void 0:e.dataSource;let s={};Array.isArray(i)?s=i[t]:i&&"gallery"in i&&(i.items||(i.items=this._getGalleryDOMElements(i.gallery)),s=i.items[t]);let n=s;n instanceof Element&&(n=this._domElementToItemData(n));const h=this.dispatch("itemData",{itemData:n||{},index:t});return this.applyFilters("itemData",h.itemData,t)}_getGalleryDOMElements(t){var e,i;return null!==(e=this.options)&&void 0!==e&&e.children||null!==(i=this.options)&&void 0!==i&&i.childSelector?d(this.options.children,this.options.childSelector,t)||[]:[t]}_domElementToItemData(t){const e={element:t},i="A"===t.tagName?t:t.querySelector("a");if(i){e.src=i.dataset.pswpSrc||i.href,i.dataset.pswpSrcset&&(e.srcset=i.dataset.pswpSrcset),e.width=i.dataset.pswpWidth?parseInt(i.dataset.pswpWidth,10):0,e.height=i.dataset.pswpHeight?parseInt(i.dataset.pswpHeight,10):0,e.w=e.width,e.h=e.height,i.dataset.pswpType&&(e.type=i.dataset.pswpType);const n=t.querySelector("img");var s;if(n)e.msrc=n.currentSrc||n.src,e.alt=null!==(s=n.getAttribute("alt"))&&void 0!==s?s:"";(i.dataset.pswpCropped||i.dataset.cropped)&&(e.thumbCropped=!0)}return this.applyFilters("domItemData",e,t,i)}lazyLoadData(t,e){return v(t,this,e)}}class O extends x{constructor(t){super(),this.options=t||{},this._uid=0,this.shouldOpen=!1,this._preloadedContent=void 0,this.onThumbnailsClick=this.onThumbnailsClick.bind(this)}init(){d(this.options.gallery,this.options.gallerySelector).forEach((t=>{t.addEventListener("click",this.onThumbnailsClick,!1)}))}onThumbnailsClick(t){if(S(t)||window.pswp)return;let e={x:t.clientX,y:t.clientY};!e.x&&!e.y&&(e=null);let i=this.getClickedIndex(t);i=this.applyFilters("clickedIndex",i,t,this);const s={gallery:t.currentTarget};i>=0&&(t.preventDefault(),this.loadAndOpen(i,s,e))}getClickedIndex(t){if(this.options.getClickedIndexFn)return this.options.getClickedIndexFn.call(this,t);const e=t.target,i=d(this.options.children,this.options.childSelector,t.currentTarget).findIndex((t=>t===e||t.contains(e)));return-1!==i?i:this.options.children||this.options.childSelector?-1:0}loadAndOpen(t,e,i){if(window.pswp||!this.options)return!1;if(!e&&this.options.gallery&&this.options.children){const t=d(this.options.gallery);t[0]&&(e={gallery:t[0]})}return this.options.index=t,this.options.initialPointerPos=i,this.shouldOpen=!0,this.preload(t,e),!0}preload(t,e){const{options:i}=this;e&&(i.dataSource=e);const s=[],n=typeof i.pswpModule;if(I(i.pswpModule))s.push(Promise.resolve(i.pswpModule));else{if("string"===n)throw new Error("pswpModule as string is no longer supported");if("function"!==n)throw new Error("pswpModule is not valid");s.push(i.pswpModule())}"function"==typeof i.openPromise&&s.push(i.openPromise()),!1!==i.preloadFirstSlide&&t>=0&&(this._preloadedContent=b(t,this));const h=++this._uid;Promise.all(s).then((t=>{if(this.shouldOpen){const e=t[0];this._openPhotoswipe(e,h)}}))}_openPhotoswipe(t,e){if(e!==this._uid&&this.shouldOpen||(this.shouldOpen=!1,window.pswp))return;const i="object"==typeof t?new t.default(this.options):new t(this.options);this.pswp=i,window.pswp=i,Object.keys(this._listeners).forEach((t=>{var e;null===(e=this._listeners[t])||void 0===e||e.forEach((e=>{i.on(t,e)}))})),Object.keys(this._filters).forEach((t=>{var e;null===(e=this._filters[t])||void 0===e||e.forEach((e=>{i.addFilter(t,e.fn,e.priority)}))})),this._preloadedContent&&(i.contentLoader.addToCache(this._preloadedContent),this._preloadedContent=void 0),i.on("destroy",(()=>{this.pswp=void 0,delete window.pswp})),i.init()}destroy(){var t;null===(t=this.pswp)||void 0===t||t.destroy(),this.shouldOpen=!1,this._listeners={},d(this.options.gallery,this.options.gallerySelector).forEach((t=>{t.removeEventListener("click",this.onThumbnailsClick,!1)}))}}let p,M=_((()=>import("./photoswipe.esm.CQ2-2Afl.js")),[]);function y(){p=new O({gallery:".custom-md img, #post-cover img",pswpModule:()=>M,closeSVG:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg>',zoomSVG:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M340-540h-40q-17 0-28.5-11.5T260-580q0-17 11.5-28.5T300-620h40v-40q0-17 11.5-28.5T380-700q17 0 28.5 11.5T420-660v40h40q17 0 28.5 11.5T500-580q0 17-11.5 28.5T460-540h-40v40q0 17-11.5 28.5T380-460q-17 0-28.5-11.5T340-500v-40Zm40 220q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>',padding:{top:20,bottom:20,left:20,right:20},wheelToZoom:!0,arrowPrev:!1,arrowNext:!1,imageClickAction:"close",tapAction:"close",doubleTapAction:"zoom"}),p.addFilter("domItemData",((t,e)=>(e instanceof HTMLImageElement&&(t.src=e.src,t.w=Number(e.naturalWidth||window.innerWidth),t.h=Number(e.naturalHeight||window.innerHeight),t.msrc=e.src),t))),p.init()}const w=()=>{p||y(),window.swup.hooks.on("page:view",(()=>{y()})),window.swup.hooks.on("content:replace",(()=>{p?.destroy?.()}),{before:!0})};window.swup?w():document.addEventListener("swup:enable",w);