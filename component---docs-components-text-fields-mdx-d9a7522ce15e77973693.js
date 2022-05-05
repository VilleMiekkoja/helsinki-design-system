(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{opbm:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return h})),a.d(t,"default",(function(){return f}));var n=a("cxan"),l=a("+wNj"),i=(a("ERkP"),a("ZVZ0")),o=a("9Rvw"),r=a("qbsg"),s=a("dMJO"),p=a("dK3K"),d=a("X0YS"),u=a("sQ7B"),c=a("vD+s"),b=a("fSvc"),x=a("x0e6"),h=(a("l1C2"),{});void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/text_fields.mdx"}});var m={_frontmatter:h},T=o.a;function f(e){var t,a,f,v,O=e.components,j=Object(l.a)(e,["components"]);return Object(i.b)(T,Object(n.a)({},m,j,{components:O,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"text-fields"},"Text fields"),Object(i.b)(s.a,{type:"info",mdxType:"StatusLabel"},"Stable"),Object(i.b)(s.a,{type:"success",style:{marginLeft:"var(--spacing-xs)"},mdxType:"StatusLabel"},"Accessible"),Object(i.b)(c.a,{mdxType:"LargeParagraph"},"A text field is an input field that the user can interact with and input content and data. The user can also be provided with helper text if needed. Text inputs are used for shorter information while Text areas can be used for multiline answers."),Object(i.b)("h2",{id:"principles"},"Principles"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"A label should always be provided with a text field.")),Object(i.b)("li",{parentName:"ul"},"Use a text input when a single line of text is expected. For multiline inputs, use a text area."),Object(i.b)("li",{parentName:"ul"},"Allow the text input to reflect the length of the content you expect the user to enter."),Object(i.b)("li",{parentName:"ul"},"If possible, add programmatic assistance. Detect and pre-fill inputs to reduce errors and save time. Use sentence-case for default values, detected values, and auto-completion text."),Object(i.b)("li",{parentName:"ul"},"If possible, do input validation in client-side real-time and provide the user with immediate feedback. See ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/patterns/form-validation"}),"HDS Form validation pattern page")," for more information."),Object(i.b)("li",{parentName:"ul"},"If possible, be forgiving of different input formats and small mistakes. It can greatly increase user experience of your product if you can fix common mistakes for the user."),Object(i.b)("li",{parentName:"ul"},"To decrease a cognitive load of the user, it is recommended to mark all required fields. Remember to provide explanation of the required field indicator at the top of your form.")),Object(i.b)("h2",{id:"accessibility"},"Accessibility"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Placeholder text can be used to give hints and examples to the user what should be entered to the field. ",Object(i.b)("strong",{parentName:"li"},"However, all assistive technologies do not threat placeholder texts as labels and therefore they may ignore them completely.")," Aim to provide the sufficient information to fill the input in the label."),Object(i.b)("li",{parentName:"ul"},"It is required to use ",Object(i.b)("inlineCode",{parentName:"li"},"autocomplete")," attribute if input control is listed in the common input purposes list. You can read the full list of common input purposes at ",Object(i.b)(b.a,{href:"https://www.w3.org/TR/WCAG21/#input-purposes",external:!0,mdxType:"Link"},"WCAG 2.1 documentation website"),". You can read more about the requirement from ",Object(i.b)(b.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose",external:!0,mdxType:"Link"},"WCAG 2.1 Identify Input Purpose guideline"),"."),Object(i.b)("li",{parentName:"ul"},"In the case of an erroneous input, aim to provide clear instructions to the user on how to correct the mistake. Always provide a text description of the error.")),Object(i.b)("h2",{id:"usage-and-variations"},"Usage and variations"),Object(i.b)("h3",{id:"text-input"},"Text input"),Object(i.b)("p",null,"A text input serves in most use cases when the user needs to enter information. Text input works well for short inputs that fit in one line and are not longer than one sentence."),Object(i.b)(r.c,{__position:2,__code:'<TextInput\n  id="input"\n  label="Label"\n  placeholder="Placeholder"\n  helperText="Assistive text"\n  required\n/>\n<TextInput\n  label="Label"\n  defaultValue="Text input value"\n  helperText="Assistive text"\n  style={{ marginTop: \'var(--spacing-s)\' }}\n  disabled\n/>\n<TextInput\n  id="input-invalid"\n  label="Label"\n  defaultValue="Text input value"\n  errorText="Error text"\n  helperText="Assistive text"\n  style={{ marginTop: \'var(--spacing-s)\' }}\n  invalid\n/>',__scope:(t={props:j,DefaultLayout:o.a,Playground:r.c,TextArea:p.a,TextInput:d.a,StatusLabel:s.a,ColorBox:u.a,LargeParagraph:c.a,Link:b.a,Text:x.a},t.DefaultLayout=o.a,t._frontmatter=h,t),mdxType:"Playground"},Object(i.b)(d.a,{id:"input",label:"Label",placeholder:"Placeholder",helperText:"Assistive text",required:!0,mdxType:"TextInput"}),Object(i.b)(d.a,{label:"Label",defaultValue:"Text input value",helperText:"Assistive text",style:{marginTop:"var(--spacing-s)"},disabled:!0,mdxType:"TextInput"}),Object(i.b)(d.a,{id:"input-invalid",label:"Label",defaultValue:"Text input value",errorText:"Error text",helperText:"Assistive text",style:{marginTop:"var(--spacing-s)"},invalid:!0,mdxType:"TextInput"})),Object(i.b)("h4",{id:"core-code-example"},"Core code example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Enabled  --\x3e\n<div class="hds-text-input">\n  <label for="input" class="hds-text-input__label">\n    Label\n    <span class="hds-text-input__required">*</span>\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <input id="input" class="hds-text-input__input" type="text" placeholder="Placeholder" required />\n  </div>\n  <span class="hds-text-input__helper-text">Assistive text</span>\n</div>\n\n\x3c!-- Disabled --\x3e\n<div class="hds-text-input">\n  <label for="input" class="hds-text-input__label">\n    Label\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <input id="input" class="hds-text-input__input" type="text" value="Text input value" disabled />\n  </div>\n  <span class="hds-text-input__helper-text">Assistive text</span>\n</div>\n\n\x3c!-- Error --\x3e\n<div class="hds-text-input hds-text-input--invalid">\n  <label for="input" class="hds-text-input__label">\n    Label\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <input id="input" class="hds-text-input__input" type="text" value="Text input value" />\n  </div>\n  <span class="hds-text-input__error-text">Error text</span>\n  <span class="hds-text-input__helper-text">Assistive text</span>\n</div>\n')),Object(i.b)("h4",{id:"react-code-example"},"React code example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'/* Enabled */\n<TextInput\n  id="input"\n  label="Label"\n  placeholder="Placeholder"\n  helperText="Assistive text"\n  required\n/>\n\n/* Disabled */\n<TextInput\n  id="input"\n  label="Label"\n  defaultValue="Text input value"\n  helperText="Assistive text"\n  disabled\n/>\n\n/* Error */\n<TextInput\n  id="input"\n  label="Label"\n  defaultValue="Text input value"\n  errorText="Error text"\n  helperText="Assistive text"\n  invalid\n/>\n')),Object(i.b)("h3",{id:"text-area"},"Text area"),Object(i.b)("p",null,"A text area is meant for situations where inputted text is multiline or contains more than one sentence."),Object(i.b)(r.c,{__position:3,__code:'<TextArea\n  id="textarea"\n  label="Label"\n  placeholder="Placeholder"\n  helperText="Assistive text"\n  required\n/>\n<TextArea\n  label="Label"\n  defaultValue="Text area value"\n  helperText="Assistive text"\n  style={{ marginTop: \'var(--spacing-s)\' }}\n  disabled\n/>\n<TextArea\n  id="textarea-invalid"\n  label="Label"\n  defaultValue="Text area value"\n  errorText="Error text"\n  helperText="Assistive text"\n  style={{ marginTop: \'var(--spacing-s)\' }}\n  invalid\n/>',__scope:(a={props:j,DefaultLayout:o.a,Playground:r.c,TextArea:p.a,TextInput:d.a,StatusLabel:s.a,ColorBox:u.a,LargeParagraph:c.a,Link:b.a,Text:x.a},a.DefaultLayout=o.a,a._frontmatter=h,a),mdxType:"Playground"},Object(i.b)(p.a,{id:"textarea",label:"Label",placeholder:"Placeholder",helperText:"Assistive text",required:!0,mdxType:"TextArea"}),Object(i.b)(p.a,{label:"Label",defaultValue:"Text area value",helperText:"Assistive text",style:{marginTop:"var(--spacing-s)"},disabled:!0,mdxType:"TextArea"}),Object(i.b)(p.a,{id:"textarea-invalid",label:"Label",defaultValue:"Text area value",errorText:"Error text",helperText:"Assistive text",style:{marginTop:"var(--spacing-s)"},invalid:!0,mdxType:"TextArea"})),Object(i.b)("h4",{id:"core-code-example-1"},"Core code example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Enabled  --\x3e\n<div class="hds-text-input">\n  <label for="textarea" class="hds-text-input__label">\n    Label\n    <span class="hds-text-input__required">*</span>\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <textarea id="textarea" class="hds-text-input__input" placeholder="Placeholder" required></textarea>\n  </div>\n  <span class="hds-text-input__helper-text">Assistive text</span>\n</div>\n\n\x3c!-- Disabled --\x3e\n<div class="hds-text-input">\n  <label for="textarea" class="hds-text-input__label">\n    Label\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <textarea id="textarea" class="hds-text-input__input" disabled>\n      Text area value\n    </textarea>\n  </div>\n  <span class="hds-text-input__helper-text">Assistive text</span>\n</div>\n\n\x3c!-- Error --\x3e\n<div class="hds-text-input hds-text-input--invalid">\n  <label for="textarea" class="hds-text-input__label">\n    Label\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <textarea id="textarea" class="hds-text-input__input">\n      Text area value\n    </textarea>\n  </div>\n  <span class="hds-text-input__error-text">Error text</span>\n  <span class="hds-text-input__helper-text">Assistive text</span>\n</div>\n')),Object(i.b)("h4",{id:"react-code-example-1"},"React code example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'/* Enabled */\n<TextArea\n  id="textarea"\n  label="Label"\n  placeholder="Placeholder"\n  helperText="Assistive text"\n  required\n/>\n\n/* Disabled */\n<TextArea\n  id="textarea"\n  label="Label"\n  defaultValue="Text input value"\n  helperText="Assistive text"\n  disabled\n/>\n\n/* Error */\n<TextArea\n  id="textarea"\n  label="Label"\n  defaultValue="Text input value"\n  errorText="Error text"\n  helperText="Assistive text"\n  invalid\n/>\n')),Object(i.b)("h3",{id:"read-only"},"Read-only"),Object(i.b)("p",null,"Read-only text input is used to indicate an input among other inputs that cannot be edited. This is needed in situations where, for example, the information has been gathered from other source and filled automatically. Read-only fields should not be confused with disabled text fields. Disabled text fields are used when there is an action the user can make to activate the field. Read-only text fields will stay uneditable in the same view."),Object(i.b)(r.c,{__position:4,__code:'<TextInput\n  label="Label"\n  defaultValue="Read-only value"\n  helperText="Assistive text"\n  readOnly\n/>',__scope:(f={props:j,DefaultLayout:o.a,Playground:r.c,TextArea:p.a,TextInput:d.a,StatusLabel:s.a,ColorBox:u.a,LargeParagraph:c.a,Link:b.a,Text:x.a},f.DefaultLayout=o.a,f._frontmatter=h,f),mdxType:"Playground"},Object(i.b)(d.a,{label:"Label",defaultValue:"Read-only value",helperText:"Assistive text",readOnly:!0,mdxType:"TextInput"})),Object(i.b)("h4",{id:"core-code-example-2"},"Core code example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<div class="hds-text-input">\n  <label for="input" class="hds-text-input__label">\n    Label\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <input id="input" class="hds-text-input__input" type="text" value="Text input value" readonly />\n  </div>\n  <span class="hds-text-input__helper-text">Assistive text</span>\n</div>\n')),Object(i.b)("h4",{id:"react-code-example-2"},"React code example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'<TextInput\n  id="textarea"\n  label="Label"\n  defaultValue="Text input value"\n  helperText="Assistive text"\n  readOnly\n/>\n')),Object(i.b)("h3",{id:"with-tooltip"},"With tooltip"),Object(i.b)("p",null,"Both text input and text area can be provided with additional tooltip. Tooltip information should be considered as extra information, for example, why this information is gathered or how is it used. The user should have sufficient information on how to fill the input field in label and assistive text. You can find more information about Tooltips how they are used from the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/components/tooltip"}),"Tooltip documentation page"),"."),Object(i.b)(r.c,{__position:5,__code:'<TextInput\n  id="input-tooltip"\n  label="Label"\n  placeholder="Placeholder"\n  tooltipLabel="Tooltip label"\n  tooltipButtonLabel="Tooltip button label"\n  tooltipText=\'Tooltips contain "nice to have" information. Default Tooltip contents should not be longer than two to three sentences. For longer descriptions, provide a link to a separate page.\'\n/>\n<TextArea\n  id="textarea-tooltip"\n  label="Label"\n  placeholder="Placeholder"\n  tooltipLabel="Tooltip label"\n  tooltipButtonLabel="Tooltip button label"\n  tooltipText=\'Tooltips contain "nice to have" information. Default Tooltip contents should not be longer than two to three sentences. For longer descriptions, provide a link to a separate page.\'\n  style={{ marginTop: \'var(--spacing-s)\' }}\n/>',__scope:(v={props:j,DefaultLayout:o.a,Playground:r.c,TextArea:p.a,TextInput:d.a,StatusLabel:s.a,ColorBox:u.a,LargeParagraph:c.a,Link:b.a,Text:x.a},v.DefaultLayout=o.a,v._frontmatter=h,v),mdxType:"Playground"},Object(i.b)(d.a,{id:"input-tooltip",label:"Label",placeholder:"Placeholder",tooltipLabel:"Tooltip label",tooltipButtonLabel:"Tooltip button label",tooltipText:'Tooltips contain "nice to have" information. Default Tooltip contents should not be longer than two to three sentences. For longer descriptions, provide a link to a separate page.',mdxType:"TextInput"}),Object(i.b)(p.a,{id:"textarea-tooltip",label:"Label",placeholder:"Placeholder",tooltipLabel:"Tooltip label",tooltipButtonLabel:"Tooltip button label",tooltipText:'Tooltips contain "nice to have" information. Default Tooltip contents should not be longer than two to three sentences. For longer descriptions, provide a link to a separate page.',style:{marginTop:"var(--spacing-s)"},mdxType:"TextArea"})),Object(i.b)("h4",{id:"react-code-example-3"},"React code example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'/* Text input */\n<TextInput\n  id="input"\n  label="Label"\n  placeholder="Placeholder"\n  tooltipLabel="Tooltip label"\n  tooltipButtonLabel="Tooltip button label"\n  tooltipText="Tooltips contain &quot;nice to have&quot; information. Default Tooltip contents should not be longer than two to three sentences. For longer descriptions, provide a link to a separate page."\n/>\n\n/* Text area */\n<TextArea\n  id="textarea"\n  label="Label"\n  placeholder="Placeholder"\n  tooltipLabel="Tooltip label"\n  tooltipButtonLabel="Tooltip button label"\n  tooltipText="Tooltips contain &quot;nice to have&quot; information. Default Tooltip contents should not be longer than two to three sentences. For longer descriptions, provide a link to a separate page."\n/>\n')),Object(i.b)("h2",{id:"demos--api"},"Demos & API"),Object(i.b)("h3",{id:"core"},"Core"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/storybook/core/?path=/story/components-text-input--default"}),"Text inputs in hds-core")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/storybook/core/?path=/story/components-textarea--default"}),"Text areas in hds-core")),Object(i.b)("h3",{id:"react"},"React"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/storybook/react/?path=/story/components-textinput--default"}),"Text inputs in hds-react")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/storybook/react/?path=/docs/components-textinput--default"}),"TextInput API")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/storybook/react/?path=/story/components-textarea--default"}),"Text areas in hds-react")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/storybook/react/?path=/docs/components-textarea--default"}),"TextArea API")))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/text_fields.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-text-fields-mdx-d9a7522ce15e77973693.js.map