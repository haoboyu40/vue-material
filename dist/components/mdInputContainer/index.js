!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}({0:function(e,t,n){e.exports=n(13)},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(t,n){return!!t.$el&&(t.$el.classList.contains(n)?t:0!==t._uid&&e(t.$parent,n))};t.default=n},2:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.constructor===Array};t.default=n},3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:[String,Number],disabled:Boolean,required:Boolean,maxlength:[Number,String],placeholder:String},watch:{value:function(){this.setParentValue()},disabled:function(){this.setParentDisabled()},required:function(){this.setParentRequired()},placeholder:function(){this.setParentPlaceholder()},maxlength:function(){this.handleMaxLength()}},methods:{handleMaxLength:function(){this.parentContainer.enableCounter=this.maxlength>0,this.parentContainer.counterLength=this.maxlength},setParentValue:function(){this.parentContainer.setValue(this.$el.value)},setParentDisabled:function(){this.parentContainer.isDisabled=this.disabled},setParentRequired:function(){this.parentContainer.isRequired=this.required},setParentPlaceholder:function(){this.parentContainer.hasPlaceholder=!!this.placeholder},onFocus:function(){this.parentContainer.isFocused=!0},onBlur:function(){this.parentContainer.isFocused=!1,this.setParentValue()},onInput:function(){this.setParentValue(),this.parentContainer.inputLength=this.$el.value.length,this.$emit("change",this.$el.value),this.$emit("input",this.$el.value)}}}},4:function(e,t,n){var i,o,r;/*!
		Autosize 3.0.18
		license: MIT
		http://www.jacklmoore.com/autosize
	*/
!function(n,a){o=[t,e],i=a,r="function"==typeof i?i.apply(t,o):i,!(void 0!==r&&(e.exports=r))}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),s="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(s)&&(s=0),u()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t,o()}function i(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function o(){var t=e.style.height,n=i(e),o=document.documentElement&&document.documentElement.scrollTop;e.style.height="auto";var r=e.scrollHeight+s;return 0===e.scrollHeight?void(e.style.height=t):(e.style.height=r+"px",d=e.clientWidth,n.forEach(function(e){e.node.scrollTop=e.scrollTop}),void(o&&(document.documentElement.scrollTop=o)))}function u(){o();var t=window.getComputedStyle(e,null),i=Math.round(parseFloat(t.height)),r=Math.round(parseFloat(e.style.height));if(i!==r?"visible"!==t.overflowY&&n("visible"):"hidden"!==t.overflowY&&n("hidden"),l!==i){l=i;var u=a("autosize:resized");try{e.dispatchEvent(u)}catch(e){}}}if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var s=null,d=e.clientWidth,l=null,c=function(){e.clientWidth!==d&&u()},p=function(t){window.removeEventListener("resize",c,!1),e.removeEventListener("input",u,!1),e.removeEventListener("keyup",u,!1),e.removeEventListener("autosize:destroy",p,!1),e.removeEventListener("autosize:update",u,!1),Object.keys(t).forEach(function(n){e.style[n]=t[n]}),r.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",p,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",u,!1),window.addEventListener("resize",c,!1),e.addEventListener("input",u,!1),e.addEventListener("autosize:update",u,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",r.set(e,{destroy:p,update:u}),t()}}function i(e){var t=r.get(e);t&&t.destroy()}function o(e){var t=r.get(e);t&&t.update()}var r="function"==typeof Map?new Map:function(){var e=[],t=[];return{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,i){e.indexOf(n)===-1&&(e.push(n),t.push(i))},delete:function(n){var i=e.indexOf(n);i>-1&&(e.splice(i,1),t.splice(i,1))}}}(),a=function(e){return new Event(e)};try{new Event("test")}catch(e){a=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var u=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(u=function(e){return e},u.destroy=function(e){return e},u.update=function(e){return e}):(u=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},u.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e},u.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e}),t.exports=u})},13:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-input-container",a.default),e.component("md-input",s.default),e.component("md-textarea",l.default),e.material.styles.push(p.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(132),a=i(r),u=n(131),s=i(u),d=n(133),l=i(d),c=n(100),p=i(c)},43:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),r=i(o),a=n(1),u=i(a);t.default={mixins:[r.default],props:{type:{type:String,default:"text"}},mounted:function(){if(this.parentContainer=(0,u.default)(this.$parent,"md-input-container"),!this.parentContainer)throw this.$destroy(),new Error("You should wrap the md-input in a md-input-container");this.setParentDisabled(),this.setParentRequired(),this.setParentPlaceholder(),this.setParentValue(),this.handleMaxLength()}}},44:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o);t.default={props:{mdInline:Boolean,mdDisabled:Boolean,mdHasPassword:Boolean},data:function(){return{value:"",input:!1,inputType:!1,showPassword:!1,enableCounter:!1,hasSelect:!1,hasPlaceholder:!1,isDisabled:!1,isRequired:!1,isFocused:!1,counterLength:0,inputLength:0}},computed:{hasValue:function(){return(0,r.default)(this.value)?this.value.length>0:Boolean(this.value)},classes:function(){return{"md-input-inline":this.mdInline,"md-has-password":this.mdHasPassword,"md-has-select":this.hasSelect,"md-has-value":this.hasValue,"md-input-placeholder":this.hasPlaceholder,"md-input-disabled":this.isDisabled,"md-input-required":this.isRequired,"md-input-focused":this.isFocused}}},methods:{togglePasswordType:function(){"input"===this.input.tagName.toLowerCase()&&("password"===this.inputType?(this.input.type="text",this.showPassword=!0):(this.input.type="password",this.showPassword=!1),this.input.focus())},setValue:function(e){this.value=e}},mounted:function(){if(this.input=this.$el.querySelectorAll("input, textarea, select")[0],!this.input)throw this.$destroy(),new Error("Missing input/select/textarea inside md-input-container");this.inputType=this.input.type}}},45:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=i(o),a=n(3),u=i(a),s=n(1),d=i(s);t.default={mixins:[u.default],mounted:function(){if(this.parentContainer=(0,d.default)(this.$parent,"md-input-container"),!this.parentContainer)throw this.$destroy(),new Error("You should wrap the md-textarea in a md-input-container");this.setParentDisabled(),this.setParentRequired(),this.setParentPlaceholder(),this.setParentValue(),this.handleMaxLength(),this.$el.getAttribute("rows")||this.$el.setAttribute("rows","1"),(0,r.default)(this.$el)},beforeDestroy:function(){r.default.destroy(this.$el)}}},82:function(e,t){},100:function(e,t){e.exports=".THEME_NAME .md-input-container.md-input-invalid:after,.THEME_NAME.md-input-container.md-input-invalid:after{background-color:WARN-COLOR}.THEME_NAME .md-input-container.md-input-invalid label,.THEME_NAME .md-input-container.md-input-invalid .md-error,.THEME_NAME .md-input-container.md-input-invalid .md-count,.THEME_NAME .md-input-container.md-input-invalid input,.THEME_NAME .md-input-container.md-input-invalid textarea,.THEME_NAME.md-input-container.md-input-invalid label,.THEME_NAME.md-input-container.md-input-invalid .md-error,.THEME_NAME.md-input-container.md-input-invalid .md-count,.THEME_NAME.md-input-container.md-input-invalid input,.THEME_NAME.md-input-container.md-input-invalid textarea{color:WARN-COLOR}.THEME_NAME .md-input-container.md-input-focused.md-input-inline label,.THEME_NAME.md-input-container.md-input-focused.md-input-inline label{color:rgba(0,0,0,0.54)}.THEME_NAME .md-input-container.md-input-focused.md-input-required label:after,.THEME_NAME.md-input-container.md-input-focused.md-input-required label:after{color:WARN-COLOR}.THEME_NAME .md-input-container.md-input-focused:after,.THEME_NAME.md-input-container.md-input-focused:after{height:2px;background-color:PRIMARY-COLOR}.THEME_NAME .md-input-container.md-input-focused input,.THEME_NAME .md-input-container.md-input-focused textarea,.THEME_NAME.md-input-container.md-input-focused input,.THEME_NAME.md-input-container.md-input-focused textarea{color:PRIMARY-COLOR;text-shadow:0 0 0 BACKGROUND-CONTRAST;-webkit-text-fill-color:transparent}.THEME_NAME .md-input-container.md-input-focused label,.THEME_NAME.md-input-container.md-input-focused label{color:PRIMARY-COLOR}\n"},131:function(e,t,n){var i,o;i=n(43);var r=n(183);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=i},132:function(e,t,n){var i,o;n(82),i=n(44);var r=n(180);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=i},133:function(e,t,n){var i,o;i=n(45);var r=n(187);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=i},180:function(e,t){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"md-input-container",class:e.classes},[e._t("default")," ",e.enableCounter?e._h("span",{staticClass:"md-count"},[e._s(e.inputLength)+" / "+e._s(e.counterLength)]):e._e()," ",e.mdHasPassword?e._h("md-button",{staticClass:"md-icon-button md-toggle-password",on:{click:e.togglePasswordType}},[e._h("md-icon",[e._s(e.showPassword?"visibility_off":"visibility")])]):e._e()])},staticRenderFns:[]}},183:function(e,t){e.exports={render:function(){var e=this;return e._h("input",{staticClass:"md-input",attrs:{type:e.type,disabled:e.disabled,required:e.required,placeholder:e.placeholder,maxlength:e.maxlength},domProps:{value:e.value},on:{focus:e.onFocus,blur:e.onBlur,input:e.onInput,keydown:[function(t){38===t.keyCode&&e.onInput(t)},function(t){40===t.keyCode&&e.onInput(t)}]}})},staticRenderFns:[]}},187:function(e,t){e.exports={render:function(){var e=this;return e._h("textarea",{staticClass:"md-input",attrs:{disabled:e.disabled,required:e.required,placeholder:e.placeholder,maxlength:e.maxlength},domProps:{value:e.value},on:{focus:e.onFocus,blur:e.onBlur,input:e.onInput}})},staticRenderFns:[]}}})});