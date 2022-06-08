(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"Bq/1":function(a,n,e){"use strict";e.r(n),e.d(n,"_frontmatter",(function(){return h})),e.d(n,"default",(function(){return u}));var t=e("cxan"),i=e("+wNj"),l=(e("ERkP"),e("ZVZ0")),s=e("9Rvw"),o=e("qbsg"),b=e("7UOt"),p=e("j3+u"),c=e("vD+s"),r=(e("GFgI"),e("nBFd"),e("rvLQ"),e("bkMj"),e("a7oK"),e("l1C2"),["components"]),h={};void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!Object.prototype.hasOwnProperty.call(h,"__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/pagination.mdx"}});var d={_frontmatter:h},g=s.a;function u(a){var n,e,u=a.components,m=Object(i.a)(a,r);return Object(l.b)(g,Object(t.a)({},d,m,{components:u,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"pagination"},"Pagination"),Object(l.b)(b.a,{type:"alert",mdxType:"StatusLabel"},"Draft"),Object(l.b)(b.a,{type:"success",style:{marginLeft:"var(--spacing-xs)"},mdxType:"StatusLabel"},"Accessible"),Object(l.b)(c.a,{mdxType:"LargeParagraph"},"The pagination component allows the user to navigate between pages when content is split into several pages."),Object(l.b)(p.a,{label:"Pagination coming soon to the HDS React package",className:"siteNotification",mdxType:"Notification"},"The pagination component is currently only part of the HDS Core package. The React implementation will be released soon."),Object(l.b)("h2",{id:"principles"},"Principles"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Pagination is used when content is divided into multiple pages and the user needs to be able to move between those pages."),Object(l.b)("li",{parentName:"ul"},"You must at least have three (3) pages in the pagination."),Object(l.b)("li",{parentName:"ul"},"Keep the amount of shown pages between screen size changes consistent. ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Aim to show at least 5 pages and 9 pages at maximum in one row."),Object(l.b)("li",{parentName:"ul"},"You can change the amount of shown pages when the view switches from desktop to mobile."))),Object(l.b)("li",{parentName:"ul"},"A good rule of thumb for a maximum amount of items per page is 36. However, this heavily depends on the type of items displayed.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"With smaller items, the number can be larger, e.g. 72."))),Object(l.b)("li",{parentName:"ul"},"The pagination must always include ",Object(l.b)("em",{parentName:"li"},"Previous")," and ",Object(l.b)("em",{parentName:"li"},"Next")," page buttons. Do not hide or omit these buttons."),Object(l.b)("li",{parentName:"ul"},'The HDS pagination component supports truncation, which means hiding part of the pages with the "..." (ellipsis) element.',Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Truncation is recommended if your page numbers start to spread into multiple rows or if you would have more than 9 page numbers in one row."),Object(l.b)("li",{parentName:"ul"},"Truncation can happen either at the start, at the end, or at both ends. See the ",Object(l.b)("a",{parentName:"li",href:"#with-truncation"},"truncation example")," below for more information."))),Object(l.b)("li",{parentName:"ul"},"The pagination component must be aligned to the center of its container.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"On mobile, the previous and next buttons are aligned to their respective edges of the container.")))),Object(l.b)("h3",{id:"should-i-use-pages-or-dynamically-load-more-content"},"Should I use pages or dynamically load more content?"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use pages when"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"the amount of items in one page/view exceeds 36 items"),Object(l.b)("li",{parentName:"ul"},"divided into pages, you will have at least 3 pages"),Object(l.b)("li",{parentName:"ul"},"you are not sure how much content there will be (i.e. there may be 10 pages or 100 pages)"),Object(l.b)("li",{parentName:"ul"},"the user may need to be able to move to the end of the item list"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use dynamic loading when"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"the amount of items in one page/view is less than 36"),Object(l.b)("li",{parentName:"ul"},"divided into pages, you will have less than 3 pages"),Object(l.b)("li",{parentName:"ul"},"you have an estimation of how many items there will be"),Object(l.b)("li",{parentName:"ul"},"the user does not need to be able to move to the end of the item list")))),Object(l.b)("h2",{id:"accessibility"},"Accessibility"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"It is advisable to use colour combinations provided by the implementation.")," These combinations are ensured to comply with WCAG AA requirements. When customising colours, refer to ",Object(l.b)("a",{parentName:"li",href:"/v1.0/design-tokens/colour",title:"Colour"},"colour guidelines")," to ensure accessibility."),Object(l.b)("li",{parentName:"ul"},"Each page number must have an ",Object(l.b)("inlineCode",{parentName:"li"},"aria-label")," to describe it. For example, ",Object(l.b)("inlineCode",{parentName:"li"},'aria-label="Page 3"'),"."),Object(l.b)("li",{parentName:"ul"},"The active page number must have an ",Object(l.b)("inlineCode",{parentName:"li"},'aria-current="page"')," attribute."),Object(l.b)("li",{parentName:"ul"},'The truncation element ("..." or ellipsis) does not need to have an ',Object(l.b)("inlineCode",{parentName:"li"},"aria-label"),".")),Object(l.b)("h2",{id:"usage-and-variations"},"Usage and variations"),Object(l.b)(p.a,{label:"Note the use of the data-next attribute!",className:"siteNotification",mdxType:"Notification"},"The Core implementation relies on manually setting the data-next attribute of the nav element. Remember to update its value to correspond with the content of the next page button."),Object(l.b)("h3",{id:"basic"},"Basic"),Object(l.b)("p",null,"By default, the HDS pagination shows a list of pages, and one page is marked as the active page. The previous and next buttons are always shown and they drop under the page number row on smaller screens."),Object(l.b)(o.c,{__position:4,__code:'<div class="hds-pagination-container">\n  <nav\n    class="hds-pagination"\n    role="navigation"\n    aria-label="Pagination"\n    data-next="Next"\n  >\n    <button\n      type="button"\n      disabled\n      class="hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-prev"\n    >\n      <span aria-hidden="true" class="hds-icon hds-icon--angle-left"></span>\n      <span class="hds-button__label">Previous</span>\n    </button>\n    <ul class="hds-pagination__pages">\n      <li>\n        <a\n          class="hds-pagination__item-link hds-pagination__item-link--active"\n          href="#"\n          title="Current page"\n          aria-label="Page 1"\n          aria-current="page"\n        >\n          1\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 2"\n          title="Go to page 2"\n        >\n          2\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 3"\n          title="Go to page 3"\n        >\n          3\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 4"\n          title="Go to page 4"\n        >\n          4\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 5"\n          title="Go to page 5"\n        >\n          5\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 6"\n          title="Go to page 6"\n        >\n          6\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 7"\n          title="Go to page 7"\n        >\n          7\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 8"\n          title="Go to page 8"\n        >\n          8\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 9"\n          title="Go to page 9"\n        >\n          9\n        </a>\n      </li>\n    </ul>\n    <button\n      type="button"\n      class="hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-next"\n    >\n      <span class="hds-button__label">Next</span>\n      <span aria-hidden="true" class="hds-icon hds-icon--angle-right"></span>\n    </button>\n  </nav>\n</div>',__scope:(n={props:m,DefaultLayout:s.a,Playground:o.c,StatusLabel:b.a,Notification:p.a,LargeParagraph:c.a},n.DefaultLayout=s.a,n._frontmatter=h,n),mdxType:"Playground"},Object(l.b)("div",{className:"hds-pagination-container"},Object(l.b)("nav",{className:"hds-pagination",role:"navigation","aria-label":"Pagination","data-next":"Next"},Object(l.b)("button",{type:"button",disabled:!0,className:"hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-prev"},Object(l.b)("span",{"aria-hidden":"true",className:"hds-icon hds-icon--angle-left"}),Object(l.b)("span",{className:"hds-button__label"},"Previous")),Object(l.b)("ul",{className:"hds-pagination__pages"},Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link hds-pagination__item-link--active",href:"#",title:"Current page","aria-label":"Page 1","aria-current":"page"},"1")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 2",title:"Go to page 2"},"2")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 3",title:"Go to page 3"},"3")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 4",title:"Go to page 4"},"4")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 5",title:"Go to page 5"},"5")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 6",title:"Go to page 6"},"6")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 7",title:"Go to page 7"},"7")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 8",title:"Go to page 8"},"8")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 9",title:"Go to page 9"},"9"))),Object(l.b)("button",{type:"button",className:"hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-next"},Object(l.b)("span",{className:"hds-button__label"},"Next"),Object(l.b)("span",{"aria-hidden":"true",className:"hds-icon hds-icon--angle-right"}))))),Object(l.b)("h4",{id:"core-code-example"},"Core code example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<div class="hds-pagination-container">\n  <nav class="hds-pagination" role="navigation" aria-label="Pagination" data-next="Next">\n    <button type="button" disabled class="hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-prev">\n      <span aria-hidden="true" class="hds-icon hds-icon--angle-left"></span>\n      <span class="hds-button__label">Previous</span>\n    </button>\n    <ul class="hds-pagination__pages">\n      <li>\n        <a class="hds-pagination__item-link hds-pagination__item-link--active" href="#" title="Current page" aria-label="Page 1" aria-current="page">\n          1\n        </a>\n      </li>\n      <li>\n        <a class="hds-pagination__item-link" href="#" aria-label="Page 2" title="Go to page 2">\n          2\n        </a>\n      </li>\n      <li>\n        <a class="hds-pagination__item-link" href="#"  aria-label="Page 3" title="Go to page 3">\n          3\n        </a>\n      </li>\n      <li>\n        <a class="hds-pagination__item-link" href="#" aria-label="Page 4" title="Go to page 4">\n          4\n        </a>\n      </li>\n      <li>\n        <a class="hds-pagination__item-link" href="#" aria-label="Page 5" title="Go to page 5">\n          5\n        </a>\n      </li>\n      <li>\n        <a class="hds-pagination__item-link" href="#" aria-label="Page 6" title="Go to page 6">\n          6\n        </a>\n      </li>\n      <li>\n        <a class="hds-pagination__item-link" href="#" aria-label="Page 7" title="Go to page 7">\n          7\n        </a>\n      </li>\n      <li>\n        <a class="hds-pagination__item-link" href="#" aria-label="Page 8" title="Go to page 8">\n          8\n        </a>\n      </li>\n      <li>\n        <a class="hds-pagination__item-link" href="#" aria-label="Page 9" title="Go to page 9">\n          9\n        </a>\n      </li>\n    </ul>\n    <button type="button" class="hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-next">\n      <span class="hds-button__label">Next</span>\n      <span aria-hidden="true" class="hds-icon hds-icon--angle-right"></span>\n    </button>\n  </nav>\n</div>\n')),Object(l.b)("h4",{id:"react-code-example"},"React code example:"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Coming soon to hds-react!")),Object(l.b)("h3",{id:"with-truncation"},"With truncation"),Object(l.b)("p",null,'In the truncated pagination variant some of the pages are hidden with the "..." (ellipsis) element. Truncation can happen either at the start, at the end, or at both ends - depending on the page the user is currently on. Note that you must keep the amount of shown pages consistent. For example, in the examples below 4 pages are always shown next to the currently active page.'),Object(l.b)(o.c,{__position:5,__code:'<div class="hds-pagination-container">\n  <nav\n    class="hds-pagination"\n    role="navigation"\n    aria-label="Pagination"\n    data-next="Next"\n  >\n    <button\n      type="button"\n      class="hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-prev"\n    >\n      <span aria-hidden="true" class="hds-icon hds-icon--angle-left"></span>\n      <span class="hds-button__label">Previous</span>\n    </button>\n    <ul class="hds-pagination__pages">\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          title="Go to page 1"\n          aria-label="Page 1"\n        >\n          1\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          title="Go to page 2"\n          aria-label="Page 2"\n        >\n          2\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link hds-pagination__item-link--active"\n          href="#"\n          title="Current page"\n          aria-label="Page 3"\n          aria-current="page"\n        >\n          3\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          title="Go to page 4"\n          aria-label="Page 4"\n        >\n          4\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          title="Go to page 5"\n          aria-label="Page 5"\n        >\n          5\n        </a>\n      </li>\n      <li>\n        <span class="hds-pagination__item-ellipsis">...</span>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 68"\n          title="Go to page 68"\n        >\n          68\n        </a>\n      </li>\n    </ul>\n    <button\n      type="button"\n      class="hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-next"\n    >\n      <span class="hds-button__label">Next</span>\n      <span aria-hidden="true" class="hds-icon hds-icon--angle-right"></span>\n    </button>\n  </nav>\n</div>\n<div class="hds-pagination-container">\n  <nav\n    class="hds-pagination"\n    role="navigation"\n    aria-label="Pagination"\n    data-next="Next"\n  >\n    <button\n      type="button"\n      class="hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-prev"\n    >\n      <span aria-hidden="true" class="hds-icon hds-icon--angle-left"></span>\n      <span class="hds-button__label">Previous</span>\n    </button>\n    <ul class="hds-pagination__pages">\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          title="Go to page 1"\n          aria-label="Page 1"\n        >\n          1\n        </a>\n      </li>\n      <li>\n        <span class="hds-pagination__item-ellipsis">...</span>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 30"\n          title="Go to page 30"\n        >\n          30\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 31"\n          title="Go to page 31"\n        >\n          31\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link hds-pagination__item-link--active"\n          href="#"\n          aria-label="Page 32"\n          title="Current page"\n          aria-current="page"\n        >\n          32\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 33"\n          title="Go to page 33"\n        >\n          33\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 34"\n          title="Go to page 34"\n        >\n          34\n        </a>\n      </li>\n      <li>\n        <span class="hds-pagination__item-ellipsis">...</span>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 68"\n          title="Go to page 68"\n        >\n          68\n        </a>\n      </li>\n    </ul>\n    <button\n      type="button"\n      class="hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-next"\n    >\n      <span class="hds-button__label">Next</span>\n      <span aria-hidden="true" class="hds-icon hds-icon--angle-right"></span>\n    </button>\n  </nav>\n</div>\n<div class="hds-pagination-container">\n  <nav\n    class="hds-pagination"\n    role="navigation"\n    aria-label="Pagination"\n    data-next="Next"\n  >\n    <button\n      type="button"\n      class="hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-prev"\n    >\n      <span aria-hidden="true" class="hds-icon hds-icon--angle-left"></span>\n      <span class="hds-button__label">Previous</span>\n    </button>\n    <ul class="hds-pagination__pages">\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          title="Go to page 1"\n          aria-label="Page 1"\n        >\n          1\n        </a>\n      </li>\n      <li>\n        <span class="hds-pagination__item-ellipsis">...</span>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 64"\n          title="Go to page 64"\n        >\n          64\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 65"\n          title="Go to page 65"\n        >\n          65\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link hds-pagination__item-link--active"\n          href="#"\n          aria-label="Page 66"\n          title="Current page"\n          aria-current="page"\n        >\n          66\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 67"\n          title="Go to page 67"\n        >\n          67\n        </a>\n      </li>\n      <li>\n        <a\n          class="hds-pagination__item-link"\n          href="#"\n          aria-label="Page 68"\n          title="Go to page 68"\n        >\n          68\n        </a>\n      </li>\n    </ul>\n    <button\n      type="button"\n      class="hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-next"\n    >\n      <span class="hds-button__label">Next</span>\n      <span aria-hidden="true" class="hds-icon hds-icon--angle-right"></span>\n    </button>\n  </nav>\n</div>',__scope:(e={props:m,DefaultLayout:s.a,Playground:o.c,StatusLabel:b.a,Notification:p.a,LargeParagraph:c.a},e.DefaultLayout=s.a,e._frontmatter=h,e),mdxType:"Playground"},Object(l.b)("div",{className:"hds-pagination-container"},Object(l.b)("nav",{className:"hds-pagination",role:"navigation","aria-label":"Pagination","data-next":"Next"},Object(l.b)("button",{type:"button",className:"hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-prev"},Object(l.b)("span",{"aria-hidden":"true",className:"hds-icon hds-icon--angle-left"}),Object(l.b)("span",{className:"hds-button__label"},"Previous")),Object(l.b)("ul",{className:"hds-pagination__pages"},Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#",title:"Go to page 1","aria-label":"Page 1"},"1")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#",title:"Go to page 2","aria-label":"Page 2"},"2")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link hds-pagination__item-link--active",href:"#",title:"Current page","aria-label":"Page 3","aria-current":"page"},"3")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#",title:"Go to page 4","aria-label":"Page 4"},"4")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#",title:"Go to page 5","aria-label":"Page 5"},"5")),Object(l.b)("li",null,Object(l.b)("span",{className:"hds-pagination__item-ellipsis"},"...")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 68",title:"Go to page 68"},"68"))),Object(l.b)("button",{type:"button",className:"hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-next"},Object(l.b)("span",{className:"hds-button__label"},"Next"),Object(l.b)("span",{"aria-hidden":"true",className:"hds-icon hds-icon--angle-right"})))),Object(l.b)("div",{className:"hds-pagination-container"},Object(l.b)("nav",{className:"hds-pagination",role:"navigation","aria-label":"Pagination","data-next":"Next"},Object(l.b)("button",{type:"button",className:"hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-prev"},Object(l.b)("span",{"aria-hidden":"true",className:"hds-icon hds-icon--angle-left"}),Object(l.b)("span",{className:"hds-button__label"},"Previous")),Object(l.b)("ul",{className:"hds-pagination__pages"},Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#",title:"Go to page 1","aria-label":"Page 1"},"1")),Object(l.b)("li",null,Object(l.b)("span",{className:"hds-pagination__item-ellipsis"},"...")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 30",title:"Go to page 30"},"30")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 31",title:"Go to page 31"},"31")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link hds-pagination__item-link--active",href:"#","aria-label":"Page 32",title:"Current page","aria-current":"page"},"32")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 33",title:"Go to page 33"},"33")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 34",title:"Go to page 34"},"34")),Object(l.b)("li",null,Object(l.b)("span",{className:"hds-pagination__item-ellipsis"},"...")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 68",title:"Go to page 68"},"68"))),Object(l.b)("button",{type:"button",className:"hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-next"},Object(l.b)("span",{className:"hds-button__label"},"Next"),Object(l.b)("span",{"aria-hidden":"true",className:"hds-icon hds-icon--angle-right"})))),Object(l.b)("div",{className:"hds-pagination-container"},Object(l.b)("nav",{className:"hds-pagination",role:"navigation","aria-label":"Pagination","data-next":"Next"},Object(l.b)("button",{type:"button",className:"hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-prev"},Object(l.b)("span",{"aria-hidden":"true",className:"hds-icon hds-icon--angle-left"}),Object(l.b)("span",{className:"hds-button__label"},"Previous")),Object(l.b)("ul",{className:"hds-pagination__pages"},Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#",title:"Go to page 1","aria-label":"Page 1"},"1")),Object(l.b)("li",null,Object(l.b)("span",{className:"hds-pagination__item-ellipsis"},"...")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 64",title:"Go to page 64"},"64")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 65",title:"Go to page 65"},"65")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link hds-pagination__item-link--active",href:"#","aria-label":"Page 66",title:"Current page","aria-current":"page"},"66")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 67",title:"Go to page 67"},"67")),Object(l.b)("li",null,Object(l.b)("a",{className:"hds-pagination__item-link",href:"#","aria-label":"Page 68",title:"Go to page 68"},"68"))),Object(l.b)("button",{type:"button",className:"hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-next"},Object(l.b)("span",{className:"hds-button__label"},"Next"),Object(l.b)("span",{"aria-hidden":"true",className:"hds-icon hds-icon--angle-right"}))))),Object(l.b)("h4",{id:"core-code-example-1"},"Core code example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<div class="hds-pagination-container">\n  <nav class="hds-pagination" role="navigation" aria-label="Pagination" data-next="Next">\n    <button type="button" class="hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-prev">\n      <span aria-hidden="true" class="hds-icon hds-icon--angle-left"></span>\n      <span class="hds-button__label">Previous</span>\n    </button>\n    <ul class="hds-pagination__pages">\n      <li>\n        <a class="hds-pagination__item-link" href="#" title="Go to page 1" aria-label="Page 1">\n          1\n        </a>\n      </li>\n      <li>\n        <span class="hds-pagination__item-ellipsis">\n          ...\n        </span>\n      </li>\n      <li>\n        <a class="hds-pagination__item-link" href="#" aria-label="Page 30" title="Go to page 30">\n          30\n        </a>\n      </li>\n      <li>\n        <a class="hds-pagination__item-link" href="#" aria-label="Page 31" title="Go to page 31">\n          31\n        </a>\n      </li>\n      <li>\n        <a class="hds-pagination__item-link hds-pagination__item-link--active" href="#" aria-label="Page 32" title="Current page" aria-current="page">\n          32\n        </a>\n      </li>\n      <li>\n        <a class="hds-pagination__item-link" href="#" aria-label="Page 33" title="Go to page 33">\n          33\n        </a>\n      </li>\n      <li>\n        <a class="hds-pagination__item-link" href="#" aria-label="Page 34" title="Go to page 34">\n          34\n        </a>\n      </li>\n      <li>\n        <span class="hds-pagination__item-ellipsis">\n          ...\n        </span>\n      </li>\n      <li>\n        <a class="hds-pagination__item-link" href="#" aria-label="Page 68" title="Go to page 68">\n          68\n        </a>\n      </li>\n    </ul>\n    <button type="button" class="hds-button hds-button--supplementary hds-button--theme-black hds-pagination__button-next">\n      <span class="hds-button__label">Next</span>\n      <span aria-hidden="true" class="hds-icon hds-icon--angle-right"></span>\n    </button>\n  </nav>\n</div>\n')),Object(l.b)("h4",{id:"react-code-example-1"},"React code example:"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Coming soon to hds-react!")),Object(l.b)("h2",{id:"demos--api"},"Demos & API"),Object(l.b)("h3",{id:"core"},"Core"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/v1.0/storybook/core/?path=/story/components-pagination--basic"},"Status labels in hds-core")),Object(l.b)("h3",{id:"react"},"React"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Coming soon to hds-react!")))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!Object.prototype.hasOwnProperty.call(u,"__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/pagination.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-pagination-mdx-482d2b3e4e4120c82e4c.js.map