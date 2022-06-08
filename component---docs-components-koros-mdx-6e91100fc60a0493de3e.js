(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"5RL3":function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return g})),o.d(t,"default",(function(){return f}));var r=o("cxan"),n=o("zjfJ"),a=o("+wNj"),s=(o("ERkP"),o("ZVZ0")),i=o("9Rvw"),c=o("qbsg"),l=o("7UOt"),b=o("uZuF"),p=o("vD+s"),d=o("fSvc"),h=(o("l1C2"),["components"]);function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function m(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var g={};void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!Object.prototype.hasOwnProperty.call(g,"__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/koros.mdx"}});var y={_frontmatter:g},O=i.a;function f(e){var t,o,n,u=e.components,f=Object(a.a)(e,h);return Object(s.b)(O,Object(r.a)({},y,f,{components:u,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"koros"},"Koros"),Object(s.b)(l.a,{type:"info",mdxType:"StatusLabel"},"Stable"),Object(s.b)(l.a,{type:"success",style:{marginLeft:"var(--spacing-xs)"},mdxType:"StatusLabel"},"Accessible"),Object(s.b)(p.a,{mdxType:"LargeParagraph"},"Koros, also known as Wave motifs, are part of the visual identity of City of Helsinki. The Koros can be used as visual elements, for example as part of the hero image or the footer and as a divider of content in the user interface."),Object(s.b)("h2",{id:"principles"},"Principles"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Koros width should always match the screen width."),Object(s.b)("li",{parentName:"ul"},"Koros is a very powerful visual element. Use them sparingly in one view."),Object(s.b)("li",{parentName:"ul"},"Koros should only be used as filled. Do not use empty fill koros with borders."),Object(s.b)("li",{parentName:"ul"},"Use koros as part of a background. Do not create new visual elements using koros."),Object(s.b)("li",{parentName:"ul"},"It is allowed to animate Koros shapes (not included in the HDS yet)."),Object(s.b)("li",{parentName:"ul"},"A koro shape can be rotated in 45 degree increments. For more information see the ",Object(s.b)("a",{parentName:"li",href:"#angled"},"Angled koro variant documentation")," below.")),Object(s.b)("h2",{id:"accessibility"},"Accessibility"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"It is allowed to use Koros in all brand colours. When choosing colours, refer to ",Object(s.b)("a",{parentName:"li",href:"/v1.0/design-tokens/colour",title:"Colour"},"colour guidelines")," to ensure accessibility.")),Object(s.b)("h2",{id:"usage-and-variations"},"Usage and variations"),Object(s.b)("h3",{id:"default"},"Default"),Object(s.b)("p",null,"There are six Koro styles. An added visual interest is brought to the identity by means of the Koros. Using Koros adds high visual impact and makes the user interface recognisable as part of Helsinki city services. You can read more about using Koros in ",Object(s.b)(d.a,{href:"https://brand.hel.fi/en/wave-motifs/",external:!0,mdxType:"Link"},"Helsinki Visual Identity Guidelines - Wave motifs"),"."),Object(s.b)(c.c,{__position:3,__code:'<Koros type="basic" />\n<br />\n<Koros type="beat" />\n<br />\n<Koros type="pulse" />\n<br />\n<Koros type="wave" />\n<br />\n<Koros type="storm" />\n<br />\n<Koros type="calm" />',__scope:(t={props:f,DefaultLayout:i.a,Playground:c.c,Koros:b.a,StatusLabel:l.a,LargeParagraph:p.a,Link:d.a},t.DefaultLayout=i.a,t._frontmatter=g,t),mdxType:"Playground"},Object(s.b)(b.a,{type:"basic",mdxType:"Koros"}),Object(s.b)("br",null),Object(s.b)(b.a,{type:"beat",mdxType:"Koros"}),Object(s.b)("br",null),Object(s.b)(b.a,{type:"pulse",mdxType:"Koros"}),Object(s.b)("br",null),Object(s.b)(b.a,{type:"wave",mdxType:"Koros"}),Object(s.b)("br",null),Object(s.b)(b.a,{type:"storm",mdxType:"Koros"}),Object(s.b)("br",null),Object(s.b)(b.a,{type:"calm",mdxType:"Koros"})),Object(s.b)("h4",{id:"core-code-example"},"Core code example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-html"},'<div class="hds-koros">\n  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="85">\n    <defs>\n      <pattern id="korosBasic" x="0" y="0" width="106" height="85" patternUnits="userSpaceOnUse">\n        <path\n          transform="scale(5.3)"\n          d="M0,800h20V0c-4.9,0-5,2.6-9.9,2.6S5,0,0,0V800z"\n        />\n      </pattern>\n    </defs>\n    <rect fill="url(#korosBasic)" width="100%" height="85" />\n  </svg>\n</div>\n\n<!–– To see examples of other Koro shapes, please refer to the Core Storybook ––>\n')),Object(s.b)("h4",{id:"react-code-example"},"React code example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-tsx"},'<Koros type="basic" />\n<Koros type="beat" />\n<Koros type="pulse" />\n<Koros type="wave" />\n<Koros type="storm" />\n<Koros type="calm" />\n')),Object(s.b)("h3",{id:"dense"},"Dense"),Object(s.b)("p",null,"The dense Koro variant introduces a smaller wave size with the same shapes. You can choose either the Default or the Dense variant for your project. Read more about Koro usage on the ",Object(s.b)("a",{parentName:"p",href:"/v1.0/visual-assets/koros"},"HDS Visual Assets - Koros page"),"."),Object(s.b)(c.c,{__position:4,__code:'<Koros dense type="basic" />\n<br />\n<Koros dense type="beat" />\n<br />\n<Koros dense type="pulse" />\n<br />\n<Koros dense type="wave" />\n<br />\n<Koros dense type="storm" />\n<br />\n<Koros dense type="calm" />',__scope:(o={props:f,DefaultLayout:i.a,Playground:c.c,Koros:b.a,StatusLabel:l.a,LargeParagraph:p.a,Link:d.a},o.DefaultLayout=i.a,o._frontmatter=g,o),mdxType:"Playground"},Object(s.b)(b.a,{dense:!0,type:"basic",mdxType:"Koros"}),Object(s.b)("br",null),Object(s.b)(b.a,{dense:!0,type:"beat",mdxType:"Koros"}),Object(s.b)("br",null),Object(s.b)(b.a,{dense:!0,type:"pulse",mdxType:"Koros"}),Object(s.b)("br",null),Object(s.b)(b.a,{dense:!0,type:"wave",mdxType:"Koros"}),Object(s.b)("br",null),Object(s.b)(b.a,{dense:!0,type:"storm",mdxType:"Koros"}),Object(s.b)("br",null),Object(s.b)(b.a,{dense:!0,type:"calm",mdxType:"Koros"})),Object(s.b)("h4",{id:"core-code-example-1"},"Core code example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-html"},'<div class="hds-koros">\n  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="85">\n    <defs>\n      <pattern id="korosBasic" x="0" y="0" width="35" height="85" patternUnits="userSpaceOnUse">\n        <path\n          transform="scale(1.8)"\n          d="M0,800h20V0c-4.9,0-5,2.6-9.9,2.6S5,0,0,0V800z"\n        />\n      </pattern>\n    </defs>\n    <rect fill="url(#korosBasic)" width="100%" height="85" />\n  </svg>\n</div>\n\n<!–– To see examples of other Koro shapes, please refer to the Core Storybook ––>\n')),Object(s.b)("h4",{id:"react-code-example-1"},"React code example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-tsx"},'<Koros dense type="basic" />\n<Koros dense type="beat" />\n<Koros dense type="pulse" />\n<Koros dense type="wave" />\n<Koros dense type="storm" />\n<Koros dense type="calm" />\n')),Object(s.b)("h3",{id:"angled"},"Angled"),Object(s.b)("p",null,"Koro shapes can be angled in 45 degree increments. The allowed angle properties are ",Object(s.b)("inlineCode",{parentName:"p"},"45deg"),", ",Object(s.b)("inlineCode",{parentName:"p"},"90deg"),", ",Object(s.b)("inlineCode",{parentName:"p"},"135deg"),", ",Object(s.b)("inlineCode",{parentName:"p"},"180deg"),", ",Object(s.b)("inlineCode",{parentName:"p"},"225deg"),", ",Object(s.b)("inlineCode",{parentName:"p"},"270deg")," and ",Object(s.b)("inlineCode",{parentName:"p"},"315deg"),". Angles outside of these options should be avoided."),Object(s.b)(c.c,{__position:5,__code:"() => {\n  const rootStyle = {\n    '--koros-height': '85px',\n    '--hero-height': '300px',\n    '--hero-width': '500px',\n  }\n  return (\n    <div\n      style={{\n        ...rootStyle,\n        backgroundColor: 'var(--color-silver-light)',\n        height: 'var(--hero-height)',\n        maxWidth: '100%',\n        overflow: 'hidden',\n        position: 'relative',\n        width: 'var(--hero-width)',\n      }}\n    >\n      <div\n        style={{\n          backgroundColor: 'var(--color-coat-of-arms)',\n          clipPath: 'polygon(0 0, var(--hero-height) 0, 0 100%, 0% 100%)',\n          height: '100%',\n        }}\n      />\n      <Koros\n        style={{\n          fill: 'var(--color-coat-of-arms)',\n          left: 'calc(-1 * var(--koros-height))',\n          position: 'absolute',\n          top: 'var(--koros-height)',\n          transformOrigin: 'center',\n          width: 'calc(2 * var(--hero-height))',\n        }}\n        rotate=\"135deg\"\n      />\n    </div>\n  )\n}",__scope:(n={props:f,DefaultLayout:i.a,Playground:c.c,Koros:b.a,StatusLabel:l.a,LargeParagraph:p.a,Link:d.a},n.DefaultLayout=i.a,n._frontmatter=g,n),mdxType:"Playground"},(function(){return Object(s.b)("div",{style:m(m({},{"--koros-height":"85px","--hero-height":"300px","--hero-width":"500px"}),{},{backgroundColor:"var(--color-silver-light)",height:"var(--hero-height)",maxWidth:"100%",overflow:"hidden",position:"relative",width:"var(--hero-width)"})},Object(s.b)("div",{style:{backgroundColor:"var(--color-coat-of-arms)",clipPath:"polygon(0 0, var(--hero-height) 0, 0 100%, 0% 100%)",height:"100%"}}),Object(s.b)(b.a,{style:{fill:"var(--color-coat-of-arms)",left:"calc(-1 * var(--koros-height))",position:"absolute",top:"var(--koros-height)",transformOrigin:"center",width:"calc(2 * var(--hero-height))"},rotate:"135deg",mdxType:"Koros"}))})),Object(s.b)("h4",{id:"core-code-example-2"},"Core code example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-html"},'<style type="text/css">\n  .hds-custom-koros {\n    fill: var(--color-coat-of-arms);\n  }\n</style>\n\n<div class="hds-koros hds-koros--135deg hds-custom-koros" style="transform-origin: left; position: absolute; left: calc((100% / 1.4) + 43px);">\n <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="85">\n   <defs>\n     <pattern id="korosBasic135deg" x="0" y="0" width="106" height="85" patternUnits="userSpaceOnUse">\n       <path transform="scale(5.3)" d="M0,800h20V0c-4.9,0-5,2.6-9.9,2.6S5,0,0,0V800z" />\n     </pattern>\n   </defs>\n   <rect fill="url(#korosBasic135deg)" width="100%" height="85" />\n </svg>\n</div>\n')),Object(s.b)("h4",{id:"react-code-example-2"},"React code example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-tsx"},"const rootStyle = { '--koros-height': '85px', '--hero-height': '300px', '--hero-width': '500px' };\n\nreturn (\n  <div\n    style={{\n      ...rootStyle,\n      backgroundColor: 'var(--color-silver-light)',\n      height: 'var(--hero-height)',\n      maxWidth: '100%',\n      overflow: 'hidden',\n      position: 'relative',\n      width: 'var(--hero-width)',\n    }}\n  >\n    <div\n      style={{\n        backgroundColor: 'var(--color-coat-of-arms)',\n        clipPath: 'polygon(0 0, var(--hero-height) 0, 0 100%, 0% 100%)',\n        height: '100%',\n      }}\n    />\n    <Koros\n      style={{\n        fill: 'var(--color-coat-of-arms)',\n        left: 'calc(-1 * var(--koros-height))',\n        position: 'absolute',\n        top: 'var(--koros-height)',\n        transformOrigin: 'center',\n        width: 'calc(2 * var(--hero-height))',\n      }}\n      rotate=\"135deg\"\n    />\n  </div>\n);\n")),Object(s.b)("h2",{id:"demos--api"},"Demos & API"),Object(s.b)("h3",{id:"core"},"Core"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"/v1.0/storybook/core/?path=/story/components-koros--basic"},"Koros in hds-core")),Object(s.b)("h3",{id:"react"},"React"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"/v1.0/storybook/react/?path=/docs/components-koros--basic"},"Koros in hds-react")),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"/v1.0/storybook/react/?path=/docs/components-koros--basic"},"Koros API")))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!Object.prototype.hasOwnProperty.call(f,"__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/koros.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-koros-mdx-6e91100fc60a0493de3e.js.map