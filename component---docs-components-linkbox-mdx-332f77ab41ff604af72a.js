(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{xOTD:function(e,n,i){"use strict";i.r(n),i.d(n,"_frontmatter",(function(){return x})),i.d(n,"default",(function(){return k}));var t=i("cxan"),a=i("+wNj"),l=(i("ERkP"),i("ZVZ0")),s=i("9Rvw"),o=i("qbsg"),b=i("dMJO"),r=i("NMWT"),h=i("vD+s"),d=i("fSvc"),x=(i("l1C2"),{});void 0!==x&&x&&x===Object(x)&&Object.isExtensible(x)&&!x.hasOwnProperty("__filemeta")&&Object.defineProperty(x,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/linkbox.mdx"}});var p={_frontmatter:x},c=s.a;function k(e){var n,i,k,g,m,L,y=e.components,f=Object(a.a)(e,["components"]);return Object(l.b)(c,Object(t.a)({},p,f,{components:y,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"linkbox"},"Linkbox"),Object(l.b)(b.a,{type:"alert",mdxType:"StatusLabel"},"Draft"),Object(l.b)(b.a,{type:"success",style:{marginLeft:"var(--spacing-xs)"},mdxType:"StatusLabel"},"Accessible"),Object(l.b)(h.a,{mdxType:"LargeParagraph"},"Linkboxes are used to combine multiple elements into a single interactable element. While they are visually similar to HDS Cards, Linkboxes are always a single clickable link and they cannot contain other interactable elements."),Object(l.b)("h2",{id:"principles"},"Principles"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Linkbox must always be interactable in its entirety.")," This means that Linkboxes must not include multiple interactable elements (e.g. buttons or multiple links). The Linkbox element only gets focused once."),Object(l.b)("li",{parentName:"ul"},"To emphasize its interactability, the Linkbox includes a mandatory icon. Depending on the link type the icon is either an arrow or an external link icon. Do not remove or modify these icons.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"To read more about HDS recommendations about links, see ",Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"/components/link"}),"HDS Link documentation"),"."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Linkboxes work very well for listing heterogenous content")," such as news items, blog posts, or upcoming events."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use Linkboxes sparingly.")," While they can drastically improve service's understandability and readability, overusing them may result in confusing and complex user interfaces.")),Object(l.b)("h3",{id:"should-i-use-a-linkbox-or-a-card"},"Should I use a Linkbox or a Card?"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use the Linkbox component when"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"the whole element needs to be interactable"),Object(l.b)("li",{parentName:"ul"},"the element does not include multiple interactable elements"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use the ",Object(l.b)("a",Object(t.a)({parentName:"strong"},{href:"/components/card"}),"Card component")," when"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"the whole Card does not need to be interactable"),Object(l.b)("li",{parentName:"ul"},"the Card contains multiple interactable elements (e.g. buttons or links)")))),Object(l.b)("h2",{id:"accessibility"},"Accessibility"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Linkbox must have the link as its last element (in the DOM tree). This way assistive technologies will eventually find the Linkbox link."),Object(l.b)("li",{parentName:"ul"},"The colour contrast between the Linkbox and its background must comply with ",Object(l.b)(d.a,{href:"https://www.w3.org/TR/WCAG21/#contrast-minimum",external:!0,mdxType:"Link"},"WCAG AA Level contrast ratios"),". If needed, you may use a Linkbox border to increase the contrast to its background.")),Object(l.b)("h2",{id:"usage--variations"},"Usage & variations"),Object(l.b)("h3",{id:"empty"},"Empty"),Object(l.b)("p",null,"The default empty Linkbox variant can be used to build Linkboxes with custom content."),Object(l.b)(o.c,{__position:2,__code:"<div style={{ backgroundColor: '#efefef', margin: '-20px', padding: '20px' }}>\n  <div style={{ width: '320px' }}>\n    <Linkbox\n      linkboxAriaLabel=\"Linkbox: Helsinki Design System\"\n      linkAriaLabel=\"HDS\"\n      href=\"https://hds.hel.fi\"\n    >\n      <div style={{ height: '106px' }} />\n    </Linkbox>\n  </div>\n  <div style={{ width: '320px', marginTop: 'var(--spacing-s)' }}>\n    <Linkbox\n      linkboxAriaLabel=\"Linkbox: Helsinki Design System\"\n      linkAriaLabel=\"HDS\"\n      href=\"https://hds.hel.fi\"\n      withBorder\n    >\n      <div style={{ height: '106px' }} />\n    </Linkbox>\n  </div>\n  <div style={{ width: '320px', marginTop: 'var(--spacing-s)' }}>\n    <Linkbox\n      linkboxAriaLabel=\"Linkbox: Helsinki Design System\"\n      linkAriaLabel=\"HDS\"\n      href=\"https://hds.hel.fi\"\n      noBackground\n    >\n      <div style={{ height: '106px' }} />\n    </Linkbox>\n  </div>\n</div>",__scope:(n={props:f,DefaultLayout:s.a,Playground:o.c,StatusLabel:b.a,Linkbox:r.a,LargeParagraph:h.a,Link:d.a},n.DefaultLayout=s.a,n._frontmatter=x,n),mdxType:"Playground"},Object(l.b)("div",{style:{backgroundColor:"#efefef",margin:"-20px",padding:"20px"}},Object(l.b)("div",{style:{width:"320px"}},Object(l.b)(r.a,{linkboxAriaLabel:"Linkbox: Helsinki Design System",linkAriaLabel:"HDS",href:"https://hds.hel.fi",mdxType:"Linkbox"},Object(l.b)("div",{style:{height:"106px"}}))),Object(l.b)("div",{style:{width:"320px",marginTop:"var(--spacing-s)"}},Object(l.b)(r.a,{linkboxAriaLabel:"Linkbox: Helsinki Design System",linkAriaLabel:"HDS",href:"https://hds.hel.fi",withBorder:!0,mdxType:"Linkbox"},Object(l.b)("div",{style:{height:"106px"}}))),Object(l.b)("div",{style:{width:"320px",marginTop:"var(--spacing-s)"}},Object(l.b)(r.a,{linkboxAriaLabel:"Linkbox: Helsinki Design System",linkAriaLabel:"HDS",href:"https://hds.hel.fi",noBackground:!0,mdxType:"Linkbox"},Object(l.b)("div",{style:{height:"106px"}}))))),Object(l.b)("h4",{id:"react-code-example"},"React code example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),'<Linkbox linkboxAriaLabel="Linkbox: Helsinki Design System" linkAriaLabel="HDS" href="https://hds.hel.fi">\n  <div style={{ height: \'106px\' }} />\n</Linkbox>\n\n<Linkbox linkboxAriaLabel="Linkbox: Helsinki Design System" linkAriaLabel="HDS" href="https://hds.hel.fi" withBorder>\n  <div style={{ height: \'106px\' }} />\n</Linkbox>\n\n<Linkbox linkboxAriaLabel="Linkbox: Helsinki Design System" linkAriaLabel="HDS" href="https://hds.hel.fi" noBackground>\n  <div style={{ height: \'106px\' }} />\n</Linkbox>\n')),Object(l.b)("h3",{id:"with-heading-and-body-text"},"With heading and body text"),Object(l.b)("p",null,"Additionally, HDS offers styling for basic heading and body text inside the Linkbox component. These can be used instead of custom elements."),Object(l.b)(o.c,{__position:3,__code:'<div style={{ backgroundColor: \'#efefef\', margin: \'-20px\', padding: \'20px\' }}>\n  <div style={{ width: \'320px\' }}>\n    <Linkbox\n      linkboxAriaLabel="Linkbox: Helsinki Design System"\n      linkAriaLabel="HDS"\n      href="https://hds.hel.fi"\n      heading="Linkbox title"\n      text="Linkbox text"\n    />\n  </div>\n  <div style={{ width: \'320px\', marginTop: \'var(--spacing-s)\' }}>\n    <Linkbox\n      linkboxAriaLabel="Linkbox: Helsinki Design System"\n      linkAriaLabel="HDS"\n      href="https://hds.hel.fi"\n      heading="Linkbox title"\n      text="Linkbox text"\n      withBorder\n    />\n  </div>\n  <div style={{ width: \'320px\', marginTop: \'var(--spacing-s)\' }}>\n    <Linkbox\n      linkboxAriaLabel="Linkbox: Helsinki Design System"\n      linkAriaLabel="HDS"\n      href="https://hds.hel.fi"\n      heading="Linkbox title"\n      text="Linkbox text"\n      noBackground\n    />\n  </div>\n</div>',__scope:(i={props:f,DefaultLayout:s.a,Playground:o.c,StatusLabel:b.a,Linkbox:r.a,LargeParagraph:h.a,Link:d.a},i.DefaultLayout=s.a,i._frontmatter=x,i),mdxType:"Playground"},Object(l.b)("div",{style:{backgroundColor:"#efefef",margin:"-20px",padding:"20px"}},Object(l.b)("div",{style:{width:"320px"}},Object(l.b)(r.a,{linkboxAriaLabel:"Linkbox: Helsinki Design System",linkAriaLabel:"HDS",href:"https://hds.hel.fi",heading:"Linkbox title",text:"Linkbox text",mdxType:"Linkbox"})),Object(l.b)("div",{style:{width:"320px",marginTop:"var(--spacing-s)"}},Object(l.b)(r.a,{linkboxAriaLabel:"Linkbox: Helsinki Design System",linkAriaLabel:"HDS",href:"https://hds.hel.fi",heading:"Linkbox title",text:"Linkbox text",withBorder:!0,mdxType:"Linkbox"})),Object(l.b)("div",{style:{width:"320px",marginTop:"var(--spacing-s)"}},Object(l.b)(r.a,{linkboxAriaLabel:"Linkbox: Helsinki Design System",linkAriaLabel:"HDS",href:"https://hds.hel.fi",heading:"Linkbox title",text:"Linkbox text",noBackground:!0,mdxType:"Linkbox"})))),Object(l.b)("h4",{id:"react-code-example-1"},"React code example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),'<Linkbox \n  linkboxAriaLabel="Linkbox: Helsinki Design System"\n  linkAriaLabel="HDS"\n  href="https://hds.hel.fi" \n  heading="Linkbox title" \n  text="Linkbox text"\n/>\n\n<Linkbox\n  linkboxAriaLabel="Linkbox: Helsinki Design System"\n  linkAriaLabel="HDS"\n  href="https://hds.hel.fi"\n  heading="Linkbox title"\n  text="Linkbox text"\n  withBorder\n/>\n\n<Linkbox\n  linkboxAriaLabel="Linkbox: Helsinki Design System"\n  linkAriaLabel="HDS"\n  href="https://hds.hel.fi"\n  heading="Linkbox title"\n  text="Linkbox text"\n  noBackground\n/>\n')),Object(l.b)("h3",{id:"internal-and-external-linkboxes"},"Internal and external Linkboxes"),Object(l.b)("p",null,"Depending on the link type the icon is either an arrow or an external link icon. Use the property ",Object(l.b)("inlineCode",{parentName:"p"},"external")," to alter the icon depending on the link type. You can also add ",Object(l.b)("inlineCode",{parentName:"p"},"openInNewTab")," property to make the link open in a new browser tab."),Object(l.b)(o.c,{__position:4,__code:'<div style={{ backgroundColor: \'#efefef\', margin: \'-20px\', padding: \'20px\' }}>\n  <div style={{ width: \'320px\' }}>\n    <Linkbox\n      linkboxAriaLabel="Linkbox: Helsinki Design System"\n      linkAriaLabel="HDS"\n      href="https://hds.hel.fi"\n      heading="Internal link"\n      text="This link points to a page belonging to the same website as the current page."\n      withBorder\n    />\n  </div>\n  <div style={{ width: \'320px\', marginTop: \'var(--spacing-s)\' }}>\n    <Linkbox\n      linkboxAriaLabel="Linkbox: Helsinki Design System"\n      linkAriaLabel="HDS"\n      href="https://hds.hel.fi"\n      heading="External link"\n      text="This link points to another page."\n      external\n      withBorder\n    />\n  </div>\n  <div style={{ width: \'320px\', marginTop: \'var(--spacing-s)\' }}>\n    <Linkbox\n      linkboxAriaLabel="Linkbox: Helsinki Design System"\n      linkAriaLabel="HDS"\n      external\n      href="https://hds.hel.fi"\n      heading="External link"\n      openInNewTab\n      text="This link points to another page and opens in a new tab."\n      external\n      withBorder\n    />\n  </div>\n</div>',__scope:(k={props:f,DefaultLayout:s.a,Playground:o.c,StatusLabel:b.a,Linkbox:r.a,LargeParagraph:h.a,Link:d.a},k.DefaultLayout=s.a,k._frontmatter=x,k),mdxType:"Playground"},Object(l.b)("div",{style:{backgroundColor:"#efefef",margin:"-20px",padding:"20px"}},Object(l.b)("div",{style:{width:"320px"}},Object(l.b)(r.a,{linkboxAriaLabel:"Linkbox: Helsinki Design System",linkAriaLabel:"HDS",href:"https://hds.hel.fi",heading:"Internal link",text:"This link points to a page belonging to the same website as the current page.",withBorder:!0,mdxType:"Linkbox"})),Object(l.b)("div",{style:{width:"320px",marginTop:"var(--spacing-s)"}},Object(l.b)(r.a,{linkboxAriaLabel:"Linkbox: Helsinki Design System",linkAriaLabel:"HDS",href:"https://hds.hel.fi",heading:"External link",text:"This link points to another page.",external:!0,withBorder:!0,mdxType:"Linkbox"})),Object(l.b)("div",{style:{width:"320px",marginTop:"var(--spacing-s)"}},Object(l.b)(r.a,((g={linkboxAriaLabel:"Linkbox: Helsinki Design System",linkAriaLabel:"HDS",external:!0,href:"https://hds.hel.fi",heading:"External link",openInNewTab:!0,text:"This link points to another page and opens in a new tab."}).external=!0,g.withBorder=!0,g.mdxType="Linkbox",g))))),Object(l.b)("h4",{id:"react-code-example-2"},"React code example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),'<Linkbox \n  linkboxAriaLabel="Linkbox: Helsinki Design System"\n  linkAriaLabel="HDS"\n  href="https://hds.hel.fi" \n  heading="Internal link" \n  text="This link points to a page belonging to the same website as the current page."\n  withBorder\n/>\n\n<Linkbox\n  linkboxAriaLabel="Linkbox: Helsinki Design System"\n  linkAriaLabel="HDS"\n  href="https://hds.hel.fi"\n  heading="External link" \n  text="This link points to another page."\n  external\n  withBorder\n/>\n\n<Linkbox\n  linkboxAriaLabel="Linkbox: Helsinki Design System"\n  linkAriaLabel="HDS"\n  external\n  href="https://hds.hel.fi"\n  heading="External link" \n  openInNewTab\n  text="This link points to another page and opens in a new tab."\n  withBorder\n/>\n')),Object(l.b)("h3",{id:"with-image"},"With image"),Object(l.b)("p",null,"HDS offers styling for a Linkbox with an image as its content."),Object(l.b)(o.c,{__position:5,__code:"<div style={{ backgroundColor: '#efefef', margin: '-20px', padding: '20px' }}>\n  <div style={{ maxWidth: '384px' }}>\n    <Linkbox\n      linkboxAriaLabel=\"Linkbox: Helsinki Design System\"\n      linkAriaLabel=\"HDS\"\n      href=\"https://hds.hel.fi\"\n      heading=\"Linkbox title\"\n      text=\"Linkbox text\"\n      imgProps={{\n        src: '../../static/assets/placeholders/image/image-m@3x.png',\n        width: 384,\n        height: 245,\n      }}\n    />\n  </div>\n</div>",__scope:(m={props:f,DefaultLayout:s.a,Playground:o.c,StatusLabel:b.a,Linkbox:r.a,LargeParagraph:h.a,Link:d.a},m.DefaultLayout=s.a,m._frontmatter=x,m),mdxType:"Playground"},Object(l.b)("div",{style:{backgroundColor:"#efefef",margin:"-20px",padding:"20px"}},Object(l.b)("div",{style:{maxWidth:"384px"}},Object(l.b)(r.a,{linkboxAriaLabel:"Linkbox: Helsinki Design System",linkAriaLabel:"HDS",href:"https://hds.hel.fi",heading:"Linkbox title",text:"Linkbox text",imgProps:{src:"../../static/assets/placeholders/image/image-m@3x.png",width:384,height:245},mdxType:"Linkbox"})))),Object(l.b)("h4",{id:"react-code-example-3"},"React code example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),'<Linkbox\n  linkboxAriaLabel="Linkbox: Helsinki Design System"\n  linkAriaLabel="HDS"\n  href="https://hds.hel.fi"\n  heading="Linkbox title"\n  text="Linkbox text"\n  imgProps={{ src: [img path], width: 384, height: 245 }}\n/>\n')),Object(l.b)("h3",{id:"linkbox-size-variants"},"Linkbox size variants"),Object(l.b)("p",null,"HDS Linkbox includes three (3) size variants; small, default, and large. You can use different sizes depending on the screen size or use case. Size variants differ in (default) heading size and inner spacing. Use the ",Object(l.b)("inlineCode",{parentName:"p"},"size")," property to alter the size."),Object(l.b)(o.c,{__position:6,__code:'<div style={{ backgroundColor: \'#efefef\', margin: \'-20px\', padding: \'20px\' }}>\n  <div style={{ maxWidth: \'284px\' }}>\n    <Linkbox\n      linkboxAriaLabel="Linkbox: Helsinki Design System"\n      linkAriaLabel="HDS"\n      href="https://hds.hel.fi"\n      heading="Small Linkbox"\n      text="Linkbox text"\n      imgProps={{\n        src: \'../../static/assets/placeholders/image/image-s@3x.png\',\n        width: 284,\n        height: 181,\n      }}\n      size="small"\n      withBorder\n    />\n  </div>\n  <div style={{ maxWidth: \'384px\', marginTop: \'var(--spacing-s)\' }}>\n    <Linkbox\n      linkboxAriaLabel="Linkbox: Helsinki Design System"\n      linkAriaLabel="HDS"\n      href="https://hds.hel.fi"\n      heading="Default Linkbox"\n      text="Linkbox text"\n      imgProps={{\n        src: \'../../static/assets/placeholders/image/image-s@3x.png\',\n        width: 384,\n        height: 245,\n      }}\n      withBorder\n    />\n  </div>\n  <div style={{ maxWidth: \'567px\', marginTop: \'var(--spacing-s)\' }}>\n    <Linkbox\n      linkboxAriaLabel="Linkbox: Helsinki Design System"\n      linkAriaLabel="HDS"\n      href="https://hds.hel.fi"\n      heading="Large Linkbox"\n      text="Linkbox text"\n      imgProps={{\n        src: \'../../static/assets/placeholders/image/image-l@3x.png\',\n        width: 567,\n        height: 363,\n      }}\n      withBorder\n      size="large"\n    />\n  </div>\n</div>',__scope:(L={props:f,DefaultLayout:s.a,Playground:o.c,StatusLabel:b.a,Linkbox:r.a,LargeParagraph:h.a,Link:d.a},L.DefaultLayout=s.a,L._frontmatter=x,L),mdxType:"Playground"},Object(l.b)("div",{style:{backgroundColor:"#efefef",margin:"-20px",padding:"20px"}},Object(l.b)("div",{style:{maxWidth:"284px"}},Object(l.b)(r.a,{linkboxAriaLabel:"Linkbox: Helsinki Design System",linkAriaLabel:"HDS",href:"https://hds.hel.fi",heading:"Small Linkbox",text:"Linkbox text",imgProps:{src:"../../static/assets/placeholders/image/image-s@3x.png",width:284,height:181},size:"small",withBorder:!0,mdxType:"Linkbox"})),Object(l.b)("div",{style:{maxWidth:"384px",marginTop:"var(--spacing-s)"}},Object(l.b)(r.a,{linkboxAriaLabel:"Linkbox: Helsinki Design System",linkAriaLabel:"HDS",href:"https://hds.hel.fi",heading:"Default Linkbox",text:"Linkbox text",imgProps:{src:"../../static/assets/placeholders/image/image-s@3x.png",width:384,height:245},withBorder:!0,mdxType:"Linkbox"})),Object(l.b)("div",{style:{maxWidth:"567px",marginTop:"var(--spacing-s)"}},Object(l.b)(r.a,{linkboxAriaLabel:"Linkbox: Helsinki Design System",linkAriaLabel:"HDS",href:"https://hds.hel.fi",heading:"Large Linkbox",text:"Linkbox text",imgProps:{src:"../../static/assets/placeholders/image/image-l@3x.png",width:567,height:363},withBorder:!0,size:"large",mdxType:"Linkbox"})))),Object(l.b)("h4",{id:"react-code-example-4"},"React code example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),'<Linkbox\n  linkboxAriaLabel="Linkbox: Helsinki Design System"\n  linkAriaLabel="HDS"\n  href="https://hds.hel.fi"\n  heading="Small Linkbox"\n  text="Linkbox text"\n  imgProps={{ src: [img path], width: 284, height: 181 }}\n  size="small"\n  withBorder\n/>\n\n<Linkbox\n  linkboxAriaLabel="Linkbox: Helsinki Design System"\n  linkAriaLabel="HDS"\n  href="https://hds.hel.fi"\n  heading="Default Linkbox"\n  text="Linkbox text"\n  imgProps={{ src: [img path], width: 384, height: 245 }}\n  withBorder\n/>\n\n<Linkbox\n  linkboxAriaLabel="Linkbox: Helsinki Design System"\n  linkAriaLabel="HDS"\n  href="https://hds.hel.fi"\n  heading="Large Linkbox"\n  text="Linkbox text"\n  imgProps={{ src: [img path], width: 567, height: 363 }}\n  withBorder\n  size="large"\n/>\n')),Object(l.b)("h2",{id:"demos--api"},"Demos & API"),Object(l.b)("h3",{id:"core"},"Core"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Not included in hds-core!")),Object(l.b)("h3",{id:"react"},"React"),Object(l.b)("p",null,Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"/storybook/react/?path=/story/components-linkbox-empty-for-custom-content--default"}),"Linkboxes in hds-react")),Object(l.b)("p",null,Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"/storybook/react/?path=/docs/components-linkbox-empty-for-custom-content--default"}),"Linkboxes API")))}void 0!==k&&k&&k===Object(k)&&Object.isExtensible(k)&&!k.hasOwnProperty("__filemeta")&&Object.defineProperty(k,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/linkbox.mdx"}}),k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-linkbox-mdx-332f77ab41ff604af72a.js.map