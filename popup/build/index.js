!function(e){var t={};function r(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(s,o,function(t){return e[t]}.bind(null,o));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.React},function(e,t){e.exports=window.wp.components},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blocks},function(e,t,r){"use strict";r.r(t);var s={};r.r(s),r.d(s,"getIds",(function(){return S})),r.d(s,"requestId",(function(){return w})),r.d(s,"getNextId",(function(){return N}));var o={};r.r(o),r.d(o,"createId",(function(){return z})),r.d(o,"deleteId",(function(){return A}));var l=r(3),n=r.n(l),a=r(0),i=r(7),c=r(5),p=r(1),u=r.n(p),b=r(4),d=r(6),h=r.n(d),m=r(2);class g extends u.a.Component{getChoices(e){let t=[];return e.forEach((e,r)=>{t[r]={attribute:e.attribute,value:e.value||e.default}}),t}getChoice(e,t){for(let r of t)if(r.attribute===e)return r}render(){let e=this.props.maxRadioOptions||5,t=this.props.options,r=this.props.onChange,s=this.getChoices(t),o=[...Array(t.length).keys()].map(o=>Object(a.createElement)(f,{key:o,maxRadioOptions:e,label:t[o].label,help:t[o].help,choices:t[o].choices,multiple:t[o].multiple,invertValue:t[o].invertValue,min:t[o].min,max:t[o].max,step:t[o].step,markStep:t[o].markStep,markRender:t[o].markRender,tooltipRender:t[o].tooltipRender,value:this.getChoice(t[o].attribute,s).value,disabled:t[o].disabled,callback:e=>{"function"==typeof t[o].onChange&&(e=t[o].onChange(e)),r({[t[o].attribute]:e})}}));return Object(a.createElement)(a.Fragment,null,o)}}class f extends u.a.Component{render(){let e=this.props.maxRadioOptions,t=this.props.value,r=this.props.label,s=this.props.help,o=this.props.choices,l=this.props.min,n=this.props.max,i=this.props.step,c=this.props.markStep,p=this.props.markRender,u=this.props.tooltipRender,b=this.props.multiple,d=this.props.invertValue||!1,h=this.props.disabled,g=this.props.callback;return Object(a.createElement)(a.Fragment,null,Array.isArray(t)?Object(a.createElement)(x,this.props):o?b?Object(a.createElement)(C,{label:r,help:s,options:o,value:t,callback:g,disabled:h}):o.length<=e?Object(a.createElement)(m.RadioControl,{label:r,help:s,selected:t,onChange:g,options:o,disabled:h}):Object(a.createElement)(m.SelectControl,{label:r,help:s,value:t,onChange:g,options:o,disabled:h}):isNaN(l)||isNaN(n)||isNaN(i)?Object(a.createElement)(m.ToggleControl,{label:r,help:s,checked:d!=Boolean(t),onChange:e=>g(d!=e),disabled:h}):Object(a.createElement)(O,{label:r,help:s,value:t,min:l,max:n,step:i,markStep:c,markRender:p,tooltipRender:u,disabled:h,callback:g}))}}class x extends u.a.Component{getProps(e,t){var r={...e};for(let[e,s]of Object.entries(r))Array.isArray(s)&&(r[e]=s[t]);return r}render(){let e=this.props.value,t=this.props.callback,r=[...Array(e.length).keys()].map(r=>Object(a.createElement)(f,n()({},this.getProps(this.props,r),{key:r,callback:s=>{let o=[...e];o[r]=s,t(o)}})));return Object(a.createElement)(a.Fragment,null,r)}}class C extends u.a.Component{constructor(e){super(e),this.id="ncs4-components-checkboxgroup-"+String(document.getElementsByClassName("ncs4-components-checkboxgroup").length)}render(){let e=this.props.label,t=this.props.help,r=this.props.value,s=this.props.options,o=this.props.disabled,l=this.props.callback,n=[...Array(s.length).keys()].map(e=>Object(a.createElement)(m.CheckboxControl,{key:e,label:s[e].label,checked:r.includes(s[e].value),disabled:o,name:this.id,onChange:t=>{var o=[...r];if(t)o.push(s[e].value);else{let t=o.indexOf(s[e].value);t>-1&&o.splice(t,1)}l(o)}}));return Object(a.createElement)("div",{className:"ncs4-components-checkboxgroup"},Object(a.createElement)("label",{className:"components-base-control__label css-pezhm9-StyledLabel e1puf3u2",for:this.id},e),Object(a.createElement)("p",{className:"components-base-control__help css-1gbp77-StyledHelp e1puf3u3"},t),n)}}class O extends u.a.Component{createMarks(e,t,r,s){var o=Array(Math.floor((t-e)/r)+1);for(let t=0;t<o.length;t++)o[t]={value:e,label:s(e)},e+=r;return o}render(){let e=this.props.label,t=this.props.help,r=this.props.value,s=this.props.min,o=this.props.max,l=this.props.step||1,n=this.props.markStep||l,i=this.props.markRender||(e=>String(e)),c=this.props.disabled,p=this.props.tooltipRender||i,u=this.props.callback;return Object(a.createElement)(m.RangeControl,{label:e,help:t,value:r,min:s,max:o,step:l,marks:this.createMarks(s,o,n,i),renderTooltipContent:p,disabled:c,onChange:u})}}u.a.Component;class v extends u.a.Component{validateNumber(e){return!Boolean(e)||v.reg.test(e)}render(){let e=this.validateNumber(this.props.value);return Object(a.createElement)(m.TextControl,{value:this.props.value,onChange:e=>{this.props.onChange(e)},label:"Phone",help:e?null:"Unrecognized phone number format (perhaps you've made a typo?)"})}}h()(v,"reg",/^(\+?[0-9]{1,4})?[ \-.]*[0-9]{3}[ \-.]*[0-9]{3}[ \-.]*[0-9]{4}$/);class y extends u.a.Component{validateEmail(e){return!Boolean(e)||y.reg.test(e)}render(){let e=this.validateEmail(this.props.value);return Object(a.createElement)(m.TextControl,{value:this.props.value,onChange:e=>{this.props.onChange(e),this.validateEmail(e)&&this.props.onChangeComplete(e)},label:"Email",help:e?null:"Invalid email address"})}}function j(e,t){return e&&t?"has-"+e+"-"+t:null}h()(y,"reg",/^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-zA-Z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);class E extends u.a.Component{render(){let e=this.props.label,t=(this.props.allowGradients,this.props.value),r=this.props.onChange,s=Object(b.select)("core/block-editor").getSettings();return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("p",null,e),Object(a.createElement)(m.ColorPalette,{colors:s.colors,disableCustomColors:s.disableCustomColors,clearable:!s.disableCustomColors,value:t,onChange:e=>{let t=s.colors.filter(t=>t.color===e)[0];r({color:e,slug:t?t.slug:null})}}))}}function k(e){let t=Object(b.select)("core/block-editor").getSettings().colors;return function(e,t){let r=t.filter(t=>t.slug===e)[0];return r?r.color:null}(e.slug,t)}const S=e=>e.ids||[],w=(e,t)=>{t=Number(t);let r=e.ids.length;if(t<0)return N(e);if(0===r)return-1;for(let s=0;s<r;s++)if(e.ids[s]===t)return N(e);return-1},N=e=>{for(let t=0;t<e.ids.length;t++){const r=e.ids[t];if(0===t&&0!==r)return r;if(t+1<e.ids.length&&e.ids[t+1]-1>r||t+1>=e.ids.length)return r+1}return 0};function z(e){return{type:"CREATE",id:e}}function A(e){return{type:"DELETE",id:e}}class P extends u.a.Component{render(){let e=this.props.attributes,t="popup-"+String(e.id),r=e.bgColor.slug?null:e.bgColor.color,s=e.textColor.slug?null:e.textColor.color,o=`\n      #${t}:target {\n        display: block;\n      }\n    `;return Object(a.createElement)(a.Fragment,null,this.props.backend?Object(a.createElement)("a",{className:"ncs4-popup-button "+this.props.className,href:"#"},e.buttonTitle):Object(a.createElement)("a",{className:"ncs4-popup-button "+this.props.className,href:"#"+t},e.buttonTitle),Object(a.createElement)("div",{id:t,className:"ncs4-popup__wrapper",style:{textAlign:"left"}},Object(a.createElement)("a",{className:"ncs4-popup-overlay",href:"#!",style:{opacity:e.overlayOpacity}}),Object(a.createElement)("div",{className:"ncs4-popup-content__wrapper"},Object(a.createElement)("div",{className:["ncs4-popup-content",j(e.bgColor.slug,"background-color"),j(e.textColor.slug,"color"),e.optionSize].join(" "),style:{backgroundColor:r,"--palette-bg-color":r,color:s,"--palette-color":s}},this.props.children)),Object(a.createElement)("style",null,o)))}}h()(P,"classType","ncs4-custom-blocks_popup-type"),h()(P,"sizeOptions",[{value:"size-alert",label:"Alert"},{value:"size-small",label:"Small"},{value:"size-body",label:"Medium (body size)"},{value:"size-large",label:"Large"}]);class _ extends u.a.Component{render(){let e=this.props.attributes,t=this.props.callback;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(m.PanelBody,{title:"Button settings",initialOpen:!0},Object(a.createElement)(m.TextControl,{label:"Button title",placeholder:"Show",value:e.buttonTitle,onChange:e=>{t({buttonTitle:e})}})),Object(a.createElement)(m.PanelBody,{title:"Popup area settings",initialOpen:!0},Object(a.createElement)(E,{label:"Popup background",value:e.bgColor.color,onChange:e=>{t({bgColor:e})}}),Object(a.createElement)(E,{label:"Popup text",value:e.textColor.color,onChange:e=>{t({textColor:e})}}),Object(a.createElement)(g,{options:[{attribute:"overlayOpacity",label:"Overlay opacity",value:Math.round(100*e.overlayOpacity),min:0,max:100,step:1,markStep:20,markRender:e=>String(e)+"%",onChange:e=>e/100},{attribute:"optionSize",label:"Content size",value:e.optionSize,choices:P.sizeOptions}],onChange:e=>{t(e)}})))}}Object(b.registerStore)("ncs4/popup",{selectors:s,actions:o,reducer:(e={ids:[]},{id:t,type:r})=>{switch(t=Number(t),r){case"CREATE":let r=[],s=0,o=!1;for(let l=0;l<e.ids.length;l++)!o&&e.ids[l]>t&&(r[s]=t,o=!0,s++),r[s]=e.ids[l],s++;return o||(r[r.length]=t),{...e,ids:r};case"DELETE":return{...e,ids:e.ids.filter(e=>e!==t)};default:return e}}});class T extends u.a.Component{constructor(e){super(e),this.attributes=e.attributes,this.clientId=e.clientId,this.setAttributes=e.setAttributes,this.setStateAttributes=this.setStateAttributes.bind(this),this.handleSelected=this.handleSelected.bind(this),this.state={showModal:!1,overlayOpacity:this.attributes.overlayOpacity,bgColor:this.attributes.bgColor,textColor:this.attributes.textColor,buttonTitle:this.attributes.buttonTitle,id:this.attributes.id,optionSize:this.attributes.optionSize},this.state.optionSize||this.setStateAttributes({optionSize:sizeOptions.default()}),wp.data.subscribe(this.handleSelected)}componentDidMount(){!function(e,t=-1){let r=Object(b.select)("ncs4/popup"),{createId:s,deleteId:o}=Object(b.dispatch)("ncs4/popup"),l=r.requestId(t);-1!==l?(e(l),s(l)):(e(t),s(t))}(e=>this.setStateAttributes({id:e}),this.state.id),this.setStateAttributes({bgColor:{color:k(this.state.bgColor),slug:this.state.bgColor.slug}}),this.setStateAttributes({textColor:{color:k(this.state.textColor),slug:this.state.textColor.slug}})}componentWillUnmount(){!function(e){let{deleteId:t}=Object(b.dispatch)("ncs4/popup");t(e)}(this.state.id)}createClassName(e){return["ncs4-popup",P.classType,this.state.showModal?"is-selected":null].join(" ")+" "+e}setStateAttributes(e){this.setState(e,()=>{this.setAttributes(e)})}handleSelected(){let e=Object(b.select)("core/block-editor").getSelectedBlock();e&&(this.state.showModal||e.clientId!==this.clientId?this.state.showModal&&e.clientId!==this.clientId&&this.setState({showModal:!1}):this.setState({showModal:!0}))}render(){return Object(a.createElement)("div",n()({},this.props.blockProps,{className:this.createClassName(this.props.blockProps.className)}),Object(a.createElement)(P,{attributes:this.state},Object(a.createElement)(c.InnerBlocks,null)),Object(a.createElement)(c.InspectorControls,null,Object(a.createElement)(_,{attributes:this.state,callback:this.setStateAttributes})))}}class I extends u.a.Component{constructor(e){super(e),this.visible=e.visible||e.attributes.showOnLoad||!1}createClassName(e){return["ncs4-popup",P.classType].join(" ")+" "+e}render(){return Object(a.createElement)("div",n()({},this.props.blockProps,{className:this.createClassName(this.props.blockProps.className)}),Object(a.createElement)(P,{attributes:this.props.attributes},Object(a.createElement)(c.InnerBlocks.Content,null)))}}Object(i.registerBlockType)("ncs4-custom-blocks/popup",{apiVersion:2,title:"Popup",icon:"testimonial",category:"layout",attributes:{overlayOpacity:{type:"number",default:.9},bgColor:{type:"object",default:{color:null,slug:"white-bright"}},textColor:{type:"object",default:{color:null,slug:"secondary-1c"}},buttonTitle:{type:"string",default:"Show"},id:{type:"number"},optionSize:{type:"string",default:"size-body"}},edit:e=>Object(a.createElement)(T,n()({},e,{blockProps:Object(c.useBlockProps)()})),save:e=>Object(a.createElement)(I,n()({},e,{blockProps:c.useBlockProps.save()}))})}]);