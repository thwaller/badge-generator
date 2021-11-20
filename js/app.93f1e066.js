(function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);g&&g(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({catalogue:"catalogue",generic:"generic",image:"image",package:"package",repo:"repo"}[e]||e)+"."+{catalogue:"6f124aa1",generic:"f28ec8eb",image:"88a98fa7",package:"12b9dae1",repo:"77fd8a1c"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={generic:1,image:1,package:1,repo:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({catalogue:"catalogue",generic:"generic",image:"image",package:"package",repo:"repo"}[e]||e)+"."+{catalogue:"31d6cfe0",generic:"26a14b27",image:"8fdfb1b9",package:"26a14b27",repo:"26a14b27"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],g.parentNode.removeChild(g),n(c)},g.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(g)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(g);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var g=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/badge-generator/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var g=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0356":function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"g",(function(){return l}));const r="https://img.shields.io",o={DASH:r+"/badge",PARAM:r+"/static/v1",GH:r+"/github",PKG_JSON_DEPENDENCY:r+"/github/package-json/dependency-version",GO_MODULE:r+"/github/go-mod/go-version"};var a;(function(e){e["Python"]="https://pypi.org/project",e["Node"]="https://www.npmjs.com/package",e["Ruby"]="https://rubygems.org/gems",e["Go"]="https://pkg.go.dev"})(a||(a={}));const c="https://github.com",i="github.io",s="main",u="/LICENSE",l={include_prereleases:"",sort:"semver"}},"17a3":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c}));const r="42b983",o="Magically generate Markdown badges for your docs",a={FOR_THE_BADGE:"for-the-badge",SOCIAL:"social"};var c;(function(e){e["Default"]="blue",e["Green"]="2ea44f",e["LogoDefault"]="white"})(c||(c={}))},"2eda":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("a5a3"),o=n("0356"),a=n("b8e9"),c=n("5167"),i=n("7cba"),s=n("8dd6");function u(e,t){return`## License\n\nReleased under ${e} by ${t}.\n  `}class l{constructor(e,t,n,r){if(this.username=e,this.repoName=t,this.licenseType=n,this.badgeColor=r,!e)throw new Error("`username` cannot be empty");if(!t)throw new Error("`repoName` cannot be empty")}_nameWithOwner(){return`${this.username}/${this.repoName}`}ghURL(){return`${o["b"]}/${this._nameWithOwner()}`}_ghPagesURL(){const e=`${this.username}.${o["c"]}`,t="https://"+e.toLowerCase();return this.repoName===e?t:`${t}/${this.repoName}/`}ghPagesBadge(){const e=this._ghPagesURL();return Object(c["a"])(r["d"].label,r["d"].message,r["d"].color,r["d"].isLarge,e)}_issuesURL(){return this.ghURL()+"/issues"}_templateURL(){return this.ghURL()+"/generate"}useThisTemplateBadge(){const e=this._templateURL();return Object(c["a"])(r["i"].label,r["i"].message,r["i"].color,r["i"].isLarge,e,r["i"].logo,"",!1,r["i"].altText)}_tagBadgeUrl(e){const t=`${e}/${this._nameWithOwner()}`,n=`${o["f"].GH}/${t}`,r={...o["g"]};return this.badgeColor&&(r.color=this.badgeColor),Object(a["a"])(n,r)}tagBadge(e){const t="GitHub "+e,n=this._tagBadgeUrl(e),r=this.ghURL()+"/releases/";return Object(i["b"])({altText:t,imageTarget:n,linkTarget:r})}_licenseTarget(e){if(e)return"#license";const t=this.ghURL();return`${t}/blob/${o["a"]}/LICENSE`}licenseBadge(e){if(!this.licenseType)return"";const t=this.badgeColor||r["f"].color,n=this._licenseTarget(e),o=!1;return Object(c["a"])(r["f"].label,this.licenseType,t,r["f"].isLarge,n,"","",o,r["f"].altText)}licenseMessage(){if(!this.licenseType)return"";const e=Object(i["c"])(this.licenseType,o["d"]),t=Object(i["c"])("@"+this.username,`${o["b"]}/${this.username}`);return u(e,t)}ghBadge(){const e=this.username,t=this.repoName,n=this.ghURL(),o=!0,a=this.badgeColor;return Object(c["a"])(e,t,a,r["c"].isLarge,n,r["c"].logo,r["c"].logoColor,o,void 0,r["c"].hoverTitle)}ghCounterBadge(e){const t=`${e} - ${this.repoName}`,n=Object(s["b"])(e,{username:this.username,repoName:this.repoName}),r="issues"===e?this._issuesURL():this.ghURL();return Object(i["b"])({altText:t,imageTarget:n,linkTarget:r})}}},"326b":function(e,t,n){"use strict";n("525d")},5167:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("b8e9"),o=n("7cba"),a=n("8dd6");function c(e,t,n,c=!1,i="",s="",u="",l=!1,d="",g=""){if(!t)throw new Error("`message` may not be empty");d=d||Object(r["b"])(e,t);const b={label:e,message:t,color:n},h=Object(a["c"])({isLarge:c,logo:s,logoColor:u}),f=l?Object(a["f"])(b,h):Object(a["e"])(b,h);return Object(o["b"])({altText:d,imageTarget:f,linkTarget:i,hoverTitle:g})}},"525d":function(e,t,n){},"7cba":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n("d4cd"),o=n.n(r);const a=new o.a({html:!0});function c(e,t,n=""){return n&&(t=`${t} "${n}"`),`[${e}](${t})`}function i({altText:e,imageTarget:t,hoverTitle:n}){return n&&(t=`${t} "${n}"`),`![${e}](${t})`}function s({altText:e,imageTarget:t,hoverTitle:n,linkTarget:r}){const o=i({altText:e,imageTarget:t});return r?c(o,r,n):o}function u(e){return a.render(e)}function l(e){return e.replaceAll("<p>","").replaceAll("</p>","\n").replaceAll("<em>","<i>").replaceAll("</em>","</i>").replaceAll("<strong>","<b>").replaceAll("</strong>","</b>").replaceAll("&amp;","&")}},"8dd6":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return b})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return f}));var r,o=n("17a3"),a=n("0356"),c=n("b8e9");function i(e,t){return e=e.replace(/-/g,"--").replace(/_/g,"__"),t&&(e=e.replace(/ /g,"_")),e}function s(e){return e.replace(/%3E/g,">").replace(/%3C/g,"<").replace(/%3D/g,"=")}function u(e,t=!0){e=i(e,t);const n=encodeURIComponent(e);return s(n)}function l(e){const t=u(e.message);let n=e.label;const r=e.color||o["b"].Default,a=[t,r];return n&&(n=u(n),a.unshift(n)),a.join("-")}function d(e){const t={};return e.isLarge&&(t.style=o["d"].FOR_THE_BADGE),e.logo&&(t.logo=e.logo,e.logoColor&&(t.logoColor=e.logoColor)),t}function g(e,t){const n=e.color||o["b"].Default,r={label:e.label,message:e.message,color:n,...t};return Object(c["a"])(a["f"].PARAM,r)}function b(e,t){const n=l(e),r=`${a["f"].DASH}/${n}`;return Object(c["a"])(r,t)}function h(e,t){const n=`${e}/${t.username}/${t.repoName}`,r=`${a["f"].GH}/${n}`;return"issues"===e?r:Object(c["a"])(r,{style:o["d"].SOCIAL})}function f(e,t,n){const o=n===r.Prod?`${e.username}/${e.repoName}/${t}`:`${e.username}/${e.repoName}/dev/${t}`;return`${a["f"].PKG_JSON_DEPENDENCY}/${o}`}(function(e){e[e["Prod"]=0]="Prod",e[e["Dev"]=1]="Dev"})(r||(r={}))},a5a3:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"h",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"i",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"e",(function(){return g}));var r=n("17a3");const o={username:"MichaelCurrin",repoName:"badge-generator"},a={username:"MichaelCurrin",repoName:"badge-generator"},c={label:"dependency",color:r["b"].Default,isLarge:!1},i={label:"License",color:r["b"].Default,isLarge:!1,altText:"License"},s={color:r["b"].Default,isLarge:!1,logo:"github",logoColor:"",hoverTitle:"Go to GitHub repo"},u={label:"View site",message:"GH Pages",color:r["b"].Green,isLarge:!0},l={label:"Generate",message:"Use this template",color:r["b"].Green,isLarge:!0,altText:"Use this template"},d={IS_LARGE:!1},g={isLarge:!1,logo:"go",logoColor:"white",linkTarget:"https://golang.org",altText:"Made with Go"}},b538:function(e,t,n){},b8e9:function(e,t,n){"use strict";function r(e,t){const n=new URL(e);for(const[r,o]of Object.entries(t))n.searchParams.append(r,o);return decodeURI(n.href)}function o(e,t){return e?[e,t].join(" - "):t}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))},bd36:function(e,t,n){"use strict";n("b538")},c2da:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("1487"),o=n.n(r),a=n("7a23");const c={class:"container-lg"},i=["href"],s={id:"nav"},u={class:"toggle"};function l(e,t,n,r,o,l){const d=Object(a["z"])("router-link"),g=Object(a["z"])("ThemeToggle"),b=Object(a["z"])("router-view");return Object(a["s"])(),Object(a["e"])("div",null,[Object(a["f"])("header",c,[Object(a["f"])("a",{id:"logo",href:e.baseUrl},"Badge Generator",8,i),Object(a["f"])("div",s,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(e.routes,(e,t)=>(Object(a["s"])(),Object(a["e"])("span",{key:e.path},[Object(a["f"])("span",null,Object(a["B"])(0!==t?" | ":""),1),Object(a["i"])(d,{to:e.path},{default:Object(a["F"])(()=>[Object(a["h"])(Object(a["B"])(e.name),1)]),_:2},1032,["to"])]))),128)),Object(a["f"])("span",u,[Object(a["i"])(g)])])]),Object(a["i"])(b)])}n("b11d");const d=e=>(Object(a["v"])("data-v-0b3824b5"),e=e(),Object(a["t"])(),e),g={for:"checkbox",class:"switch-label"},b=d(()=>Object(a["f"])("span",null,"🌙",-1)),h=d(()=>Object(a["f"])("span",null,"☀️",-1));function f(e,t,n,r,o,c){return Object(a["s"])(),Object(a["e"])("div",null,[Object(a["f"])("input",{onChange:t[0]||(t[0]=(...t)=>e.toggleTheme&&e.toggleTheme(...t)),id:"checkbox",type:"checkbox",class:"switch-checkbox"},null,32),Object(a["f"])("label",g,[b,h,Object(a["f"])("div",{class:Object(a["o"])(["switch-toggle",{"switch-toggle-checked":"dark-theme"===e.userTheme}])},null,2)])])}var p=Object(a["j"])({name:"ThemeToggle",mounted(){const e=this.getMediaPreference();this.setTheme(e)},data(){return{userTheme:"light-theme"}},methods:{toggleTheme(){const e=localStorage.getItem("user-theme"),t="light-theme"===e?"dark-theme":"light-theme";this.setTheme(t)},setTheme(e){localStorage.setItem("user-theme",e),this.userTheme=e,document.documentElement.className=e},getMediaPreference(){const e=window.matchMedia("(prefers-color-scheme: dark)").matches;return e?"dark-theme":"light-theme"}}}),m=(n("bd36"),n("6b0d")),v=n.n(m);const O=v()(p,[["render",f],["__scopeId","data-v-0b3824b5"]]);var j=O;const y=e=>(Object(a["v"])("data-v-1eb75b84"),e=e(),Object(a["t"])(),e),T={class:"home container-lg"},w={class:"row"},k={class:"col-12"},L=y(()=>Object(a["f"])("h1",null,"Home",-1)),$={class:"hero"},_=["src"],C=y(()=>Object(a["f"])("br",null,null,-1)),E=Object(a["g"])('<div class="row" data-v-1eb75b84><div class="col-12" data-v-1eb75b84><p data-v-1eb75b84> This is an online tool which generates badges (or &quot;shields&quot;) based on your inputs. You can preview the badges on the tool and then copy the Markdown/HTML to your GitHub repo&#39;s <b data-v-1eb75b84>README.md</b> file. Those metadata badges can help people learn about your repo at a glance and make it look professional. </p><p data-v-1eb75b84> This tool adds <b data-v-1eb75b84>convenience</b> and <b data-v-1eb75b84>productivity</b> to your life so you can make badges quickly and easily and get on with the coding. </p><p data-v-1eb75b84> The power here is in narrowing the choices and putting less burden on your to figure out rules and syntax or read long URLs. For badges that you need to create regularly, there&#39;s no need to look at <i data-v-1eb75b84>shields.io</i> to figure out how it works or to write the markdown by hand (and do all the tedious things like escaping characters and learning the syntax for each badge. </p><p data-v-1eb75b84> I use this tool regularly for myself - I hope you will too. If you want to contribute, issues and PRs are welcome. </p><p data-v-1eb75b84>PS. This site works best on a desktop screen size.</p></div></div>',1);function P(e,t,n,r,o,c){const i=Object(a["z"])("Markdown");return Object(a["s"])(),Object(a["e"])("div",T,[Object(a["f"])("div",w,[Object(a["f"])("div",k,[L,Object(a["f"])("div",$,[Object(a["f"])("img",{id:"logo",src:e.baseUrl+"hero.jpeg",alt:"Website banner logo"},null,8,_),C,Object(a["i"])(i,{content:e.repoBadge},null,8,["content"]),Object(a["f"])("p",null,[Object(a["f"])("i",null,Object(a["B"])(e.description),1)])])])]),E])}var N=n("e6e0"),R=n("17a3"),U=n("2eda"),A=n("a5a3");const M=new U["a"](A["a"].username,A["a"].repoName,void 0,R["a"]);var x=Object(a["j"])({name:"Home",components:{Markdown:N["a"]},data(){return{repoBadge:M.ghBadge(),description:R["c"],baseUrl:"/badge-generator/"}}});n("dcdf");const D=v()(x,[["render",P],["__scopeId","data-v-1eb75b84"]]);var G=D,S=n("6c02");const B=[{path:"/",name:"Home",component:G},{path:"/repo",name:"Repo",component:()=>n.e("repo").then(n.bind(null,"7b65"))},{path:"/generic",name:"Generic",component:()=>n.e("generic").then(n.bind(null,"f3c2"))},{path:"/package",name:"Package",component:()=>n.e("package").then(n.bind(null,"b086"))},{path:"/image",name:"Image",component:()=>n.e("image").then(n.bind(null,"feec"))},{path:"/catalogue",name:"Catalogue",component:()=>n.e("catalogue").then(n.bind(null,"afe0"))}],H=Object(S["a"])({history:Object(S["b"])(),routes:B});var I=H,q=Object(a["j"])({name:"App",components:{ThemeToggle:j},data(){return{routes:B,baseUrl:"/badge-generator/"}}});n("326b");const z=v()(q,[["render",l]]);var F=z;const J=Object(a["c"])(F);J.use(I),J.use(o.a.vuePlugin),J.mount("#app")},dcdf:function(e,t,n){"use strict";n("c2da")},e6e0:function(e,t,n){"use strict";var r=n("7a23");const o=["innerHTML"];function a(e,t,n,a,c,i){return Object(r["s"])(),Object(r["e"])("div",{innerHTML:e.mdToHTML(e.content)},null,8,o)}var c=n("7cba"),i=Object(r["j"])({name:"Markdown",props:{content:{type:String,required:!0}},methods:{mdToHTML:c["d"]}}),s=n("6b0d"),u=n.n(s);const l=u()(i,[["render",a]]);t["a"]=l}});
//# sourceMappingURL=app.93f1e066.js.map