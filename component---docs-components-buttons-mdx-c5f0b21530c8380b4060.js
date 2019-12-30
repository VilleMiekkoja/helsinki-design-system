(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{yJeh:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return r})),n.d(e,"default",(function(){return l}));n("gs/B"),n("uydD"),n("Cwzy"),n("odAc"),n("OksV"),n("ho3K");var o=n("bBUn"),a=n("9Rvw"),s=n("qbsg"),b=n("OBWD");n("yf0F"),n("rvLQ"),n("ow5V"),n("z29+"),n("l1C2");function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/buttons.mdx"}});var u={_frontmatter:r},i=a.a;function l(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,o,a={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["components"]);return Object(o.b)(i,c({},u,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"buttons"},"Buttons"),Object(o.b)("hr",null),Object(o.b)("p",null,"Buttons allow an application to communicate action and direct user intent. Clear labeling and icons (where needed) are used to communicate the actions the buttons perform to the user."),Object(o.b)("p",null,Object(o.b)("a",c({parentName:"p"},{href:"/helsinki-design-system/core/examples/buttons.html"}),"Buttons in hds-core"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",c({parentName:"p"},{href:"/helsinki-design-system/storybook/?path=/story/button--default"}),"Buttons in hds-react")),Object(o.b)("h2",{id:"styles"},"Styles"),Object(o.b)("h3",{id:"using-color-in-buttons"},"Using color in buttons"),Object(o.b)("p",null,"Choose the primary button color by determining your main user interface colors from the brand colors. Use the primary button color also as secondary button color (border and text color). In supplementary button, the text color (and icon if used) is the same as the one used in primary and secondary buttons."),Object(o.b)("p",null,"When using strong brand colors in the user interface, you can use the button color based on the background color, since not all of the colors make the content accessible."),Object(o.b)("p",null,"There are different kinds of buttons in the buttons library:"),Object(o.b)("h4",{id:"core"},"Core:"),Object(o.b)(s.c,{__position:0,__code:'<button type="button" class="hds-button hds-button--primary">\n  <span class="hds-button__label text-medium">Primary</span>\n</button>\n<button type="button" class="hds-button hds-button--secondary">\n  <span class="hds-button__label text-medium">Secondary</span>\n</button>\n<button type="button" class="hds-button hds-button--tertiary">\n  <span class="hds-button__label text-medium">Tertiary</span>\n</button>\n<button type="button" class="hds-button hds-button--supplementary">\n  <span class="hds-button__label text-medium">Supplementary</span>\n</button>',__scope:{props:n,DefaultLayout:a.a,Playground:s.c,Button:b.a,IconShare:b.c,IconAngleRight:b.b},mdxType:"Playground"},Object(o.b)("button",{type:"button",className:"hds-button hds-button--primary"},Object(o.b)("span",{className:"hds-button__label text-medium"},"Primary")),Object(o.b)("button",{type:"button",className:"hds-button hds-button--secondary"},Object(o.b)("span",{className:"hds-button__label text-medium"},"Secondary")),Object(o.b)("button",{type:"button",className:"hds-button hds-button--tertiary"},Object(o.b)("span",{className:"hds-button__label text-medium"},"Tertiary")),Object(o.b)("button",{type:"button",className:"hds-button hds-button--supplementary"},Object(o.b)("span",{className:"hds-button__label text-medium"},"Supplementary"))),Object(o.b)("h4",{id:"react"},"React:"),Object(o.b)(s.c,{__position:1,__code:'<Button>Primary</Button>\n<Button color="secondary">Secondary</Button>\n<Button color="tertiary">Tertiary</Button>\n<Button color="supplementary">Supplementary</Button>',__scope:{props:n,DefaultLayout:a.a,Playground:s.c,Button:b.a,IconShare:b.c,IconAngleRight:b.b},mdxType:"Playground"},Object(o.b)(b.a,{mdxType:"Button"},"Primary"),Object(o.b)(b.a,{color:"secondary",mdxType:"Button"},"Secondary"),Object(o.b)(b.a,{color:"tertiary",mdxType:"Button"},"Tertiary"),Object(o.b)(b.a,{color:"supplementary",mdxType:"Button"},"Supplementary")),Object(o.b)("h3",{id:"primary"},"Primary"),Object(o.b)("p",null,"Directs the user’s attention to the primary action the application is suggesting that the user take. The solid background color as a visual style is used to highlight the most important actions. To avoid confusing users, don’t use more than one primary button within a section or view."),Object(o.b)("h3",{id:"secondary"},"Secondary"),Object(o.b)("p",null,"Provides a lighter weight button style. Used to indicate a secondary action that compliments a primary action or to reduce visual noise when there are many actions of equal importance on the page."),Object(o.b)("h3",{id:"tertiary"},"Tertiary"),Object(o.b)("p",null,"Provides an alternative color button style."),Object(o.b)("h3",{id:"supplementary"},"Supplementary"),Object(o.b)("p",null,"Is used in multiple scenarios. Used as supplementary buttons. They can be used for example inside components, like cards or such."),Object(o.b)("h2",{id:"sizes"},"Sizes"),Object(o.b)("p",null,"The buttons come in two sizes; default and small. They can be also used with icons inside them."),Object(o.b)("h4",{id:"core-1"},"Core:"),Object(o.b)(s.c,{__position:2,__code:'<button type="button" class="hds-button hds-button--primary">\n  <span class="hds-button__label text-medium">Primary</span>\n</button>\n<br />\n<br />\n<button\n  type="button"\n  class="hds-button hds-button--primary hds-button--small"\n>\n  <span class="hds-button__label text-medium">Primary</span>\n</button>',__scope:{props:n,DefaultLayout:a.a,Playground:s.c,Button:b.a,IconShare:b.c,IconAngleRight:b.b},mdxType:"Playground"},Object(o.b)("button",{type:"button",className:"hds-button hds-button--primary"},Object(o.b)("span",{className:"hds-button__label text-medium"},"Primary")),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("button",{type:"button",className:"hds-button hds-button--primary hds-button--small"},Object(o.b)("span",{className:"hds-button__label text-medium"},"Primary"))),Object(o.b)("h4",{id:"react-1"},"React:"),Object(o.b)(s.c,{__position:3,__code:'<Button size="default">Primary</Button>\n<br />\n<br />\n<Button size="small">Primary</Button>',__scope:{props:n,DefaultLayout:a.a,Playground:s.c,Button:b.a,IconShare:b.c,IconAngleRight:b.b},mdxType:"Playground"},Object(o.b)(b.a,{size:"default",mdxType:"Button"},"Primary"),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{size:"small",mdxType:"Button"},"Primary")),Object(o.b)("h2",{id:"icons"},"Icons"),Object(o.b)("p",null,"The buttons can have icons attached before and after the label text. For some cases, both slots can be used at the same time."),Object(o.b)("h4",{id:"core-2"},"Core:"),Object(o.b)(s.c,{__position:4,__code:'<button type="button" class="hds-button hds-button--primary">\n  <span aria-hidden="true" class="hds-icon hds-icon--share"></span>\n  <span class="hds-button__label text-medium">Share</span>\n</button>\n<button type="button" class="hds-button hds-button--secondary">\n  <span class="hds-button__label text-medium">Continue</span>\n  <span aria-hidden="true" class="hds-icon hds-icon--angle-right"></span>\n</button>\n<button type="button" class="hds-button hds-button--tertiary">\n  <span aria-hidden="true" class="hds-icon hds-icon--share"></span>\n  <span class="hds-button__label text-medium">Share</span>\n  <span aria-hidden="true" class="hds-icon hds-icon--angle-right"></span>\n</button>',__scope:{props:n,DefaultLayout:a.a,Playground:s.c,Button:b.a,IconShare:b.c,IconAngleRight:b.b},mdxType:"Playground"},Object(o.b)("button",{type:"button",className:"hds-button hds-button--primary"},Object(o.b)("span",{"aria-hidden":"true",className:"hds-icon hds-icon--share"}),Object(o.b)("span",{className:"hds-button__label text-medium"},"Share")),Object(o.b)("button",{type:"button",className:"hds-button hds-button--secondary"},Object(o.b)("span",{className:"hds-button__label text-medium"},"Continue"),Object(o.b)("span",{"aria-hidden":"true",className:"hds-icon hds-icon--angle-right"})),Object(o.b)("button",{type:"button",className:"hds-button hds-button--tertiary"},Object(o.b)("span",{"aria-hidden":"true",className:"hds-icon hds-icon--share"}),Object(o.b)("span",{className:"hds-button__label text-medium"},"Share"),Object(o.b)("span",{"aria-hidden":"true",className:"hds-icon hds-icon--angle-right"}))),Object(o.b)("h4",{id:"react-2"},"React"),Object(o.b)(s.c,{__position:5,__code:'<Button iconLeft={<IconShare />}>Share</Button>\n<Button iconRight={<IconAngleRight />} color="secondary">\n  Continue\n</Button>\n<Button\n  iconLeft={<IconShare />}\n  iconRight={<IconAngleRight />}\n  color="tertiary"\n>\n  Share\n</Button>',__scope:{props:n,DefaultLayout:a.a,Playground:s.c,Button:b.a,IconShare:b.c,IconAngleRight:b.b},mdxType:"Playground"},Object(o.b)(b.a,{iconLeft:Object(o.b)(b.c,{mdxType:"IconShare"}),mdxType:"Button"},"Share"),Object(o.b)(b.a,{iconRight:Object(o.b)(b.b,{mdxType:"IconAngleRight"}),color:"secondary",mdxType:"Button"},"Continue"),Object(o.b)(b.a,{iconLeft:Object(o.b)(b.c,{mdxType:"IconShare"}),iconRight:Object(o.b)(b.b,{mdxType:"IconAngleRight"}),color:"tertiary",mdxType:"Button"},"Share")),Object(o.b)("h2",{id:"grouping"},"Grouping"),Object(o.b)("h3",{id:"constrained-content"},"Constrained content"),Object(o.b)("p",null,"A modal, card element or such and buttons are aligned to right, but horizontally next to each other: primary on right, secondary on left"),Object(o.b)("h3",{id:"unconstrained-content"},"Unconstrained content"),Object(o.b)("p",null,"Buttons aligned to left, but horizontally next to each other: primary on left, secondary on right."),Object(o.b)("h3",{id:"narrow-content"},"Narrow content"),Object(o.b)("p",null,"Buttons aligned vertically on top of each other: primary on top, secondary below."),Object(o.b)("h3",{id:"call-to-action"},"Call to action"),Object(o.b)("p",null,"Do not use generic language that is not related to the action and not relating to the intent of the user. Use clear call to actions that also describes what can be found, or will happen after the user clicks the button."))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/buttons.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-buttons-mdx-c5f0b21530c8380b4060.js.map