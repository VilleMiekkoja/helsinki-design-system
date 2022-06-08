(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{RbY6:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return h})),n.d(t,"default",(function(){return f}));var a=n("cxan"),o=n("+wNj"),l=n("ERkP"),c=n("ZVZ0"),i=n("9Rvw"),b=n("qbsg"),s=n("7UOt"),r=n("/7SX"),u=n("vD+s"),d=n("fSvc"),g=(n("l1C2"),["components"]),h={};void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!Object.prototype.hasOwnProperty.call(h,"__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/toggle.mdx"}});var m={_frontmatter:h},p=i.a;function f(e){var t,n,f=e.components,O=Object(o.a)(e,g);return Object(c.b)(p,Object(a.a)({},m,O,{components:f,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"toggle-button"},"Toggle button"),Object(c.b)(s.a,{type:"info",mdxType:"StatusLabel"},"Stable"),Object(c.b)(s.a,{type:"success",style:{marginLeft:"var(--spacing-xs)"},mdxType:"StatusLabel"},"Accessible"),Object(c.b)(u.a,{mdxType:"LargeParagraph"},'Toggle button allows the user to switch between two distinct states such as "On" and "Off".'),Object(c.b)("h2",{id:"principles"},"Principles"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"A label should always be provided with a toggle button."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},'Make sure that the label is clear and concise. A good toggle button label describes the effect that will happen when the toggle button is set to "On" position.'),Object(c.b)("li",{parentName:"ul"},'For example, use the label "',Object(c.b)("em",{parentName:"li"},"Allow notifications"),'" instead of "',Object(c.b)("em",{parentName:"li"},"Do you want to receive notifications?"),'".'))),Object(c.b)("li",{parentName:"ul"},"The toggle button should have an immediate effect when activated.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Toggle buttons have been inspired by real-world physical switches (e.g. a light switch). Therefore users expect something to happen immediately when the toggle button is activated.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Also, avoid using toggle buttons if the effect requires an asynchronous call."))),Object(c.b)("li",{parentName:"ul"},"Toggle buttons must not be used in forms that require pressing a submit button in order to the selection come into effect - unless they have an immediate effect inside the form."),Object(c.b)("li",{parentName:"ul"},"If your toggle button does not have an immediate effect, use a single ",Object(c.b)("a",{parentName:"li",href:"/v1.0/components/checkbox"},"Checkbox component")," instead. Also see ",Object(c.b)("a",{parentName:"li",href:"/v1.0/guidelines/checkboxes-radiobuttons-toggles"},"guidelines for choosing between radiobuttons, checkboxes and toggles.")))),Object(c.b)("li",{parentName:"ul"},'Toggle button will always have a default option. Toggle buttons that do not have a state at all (neither "On" or "Off") must not be used.')),Object(c.b)("h2",{id:"accessibility"},"Accessibility"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"It is advisable to use colour combinations provided by the implementation.")," These combinations are ensured to comply with WCAG AA requirements. When customising colours, refer to ",Object(c.b)("a",{parentName:"li",href:"/v1.0/design-tokens/colour",title:"Colour"},"colour guidelines")," to ensure accessibility."),Object(c.b)("li",{parentName:"ul"},"If the toggle button makes other elements appear on the view, those elements should be located next to the toggle button - preferably right after or below it.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"While not recommended, if a toggle button makes elements appear in other parts of the user interface, you need to make sure to notify assistive technologies about the change. You can use ",Object(c.b)("a",{parentName:"li",href:"/v1.0/components/notification"},"HDS Notification component")," for this purpose."))),Object(c.b)("li",{parentName:"ul"},"HDS Toggle button includes a small animation when the toggle state is changed. However, the animation is considered non-decorative and therefore it does not have to be able to be disabled. See ",Object(c.b)(d.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html",external:!0,mdxType:"Link"},"WCAG 2.3.3 Animation from Interactions guideline")," for more information.")),Object(c.b)("h2",{id:"usage--variations"},"Usage & variations"),Object(c.b)("h3",{id:"toggle-button-1"},"Toggle button"),Object(c.b)("p",null,"The default HDS toggle button variant includes a label above the toggle button familiar from other HDS form components."),Object(c.b)(b.c,{__position:2,__code:'() => {\n  const [checked1, setChecked1] = React.useState(false)\n  const [checked2, setChecked2] = React.useState(false)\n  return (\n    <>\n      <ToggleButton\n        id="toggle-button-1"\n        label="Label"\n        checked={checked1}\n        onChange={() => setChecked1(!checked1)}\n      />\n      <br />\n      <ToggleButton\n        id="toggle-button-2"\n        disabled\n        label="Label"\n        checked={checked2}\n        onChange={() => setChecked2(!checked2)}\n      />\n    </>\n  )\n}',__scope:(t={props:O,DefaultLayout:i.a,Playground:b.c,StatusLabel:s.a,ToggleButton:r.a,LargeParagraph:u.a,Link:d.a},t.DefaultLayout=i.a,t._frontmatter=h,t),mdxType:"Playground"},(function(){var e=l.useState(!1),t=e[0],n=e[1],a=l.useState(!1),o=a[0],i=a[1];return Object(c.b)(l.Fragment,null,Object(c.b)(r.a,{id:"toggle-button-1",label:"Label",checked:t,onChange:function(){return n(!t)},mdxType:"ToggleButton"}),Object(c.b)("br",null),Object(c.b)(r.a,{id:"toggle-button-2",disabled:!0,label:"Label",checked:o,onChange:function(){return i(!o)},mdxType:"ToggleButton"}))})),Object(c.b)("h4",{id:"react-code-example"},"React code example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'{\n  () => {\n    const [checked1, setChecked1] = React.useState(false);\n    const [checked2, setChecked2] = React.useState(false);\n    return (\n      <>\n        <ToggleButton id="toggle-button-1" label="Label" checked={checked1} onChange={() => setChecked1(!checked1)} />\n        <br />\n        <ToggleButton\n          id="toggle-button-2"\n          disabled\n          label="Label"\n          checked={checked2}\n          onChange={() => setChecked2(!checked2)}\n        />\n      </>\n    );\n  };\n}\n')),Object(c.b)("h3",{id:"toggle-button-with-a-horizontal-label"},"Toggle button with a horizontal label"),Object(c.b)("p",null,"The toggle button label can also be positioned horizontally. This alignment is often used on smaller screens (e.g. mobile phones) and tighter user interface spaces."),Object(c.b)(b.c,{__position:3,__code:'() => {\n  const [checked1, setChecked1] = React.useState(false)\n  const [checked2, setChecked2] = React.useState(false)\n  return (\n    <>\n      <div style={{ maxWidth: \'320px\' }}>\n        <ToggleButton\n          id="toggle-button-1"\n          label="Label"\n          checked={checked1}\n          onChange={() => setChecked1(!checked1)}\n          variant="inline"\n        />\n        <br />\n        <ToggleButton\n          id="toggle-button-2"\n          disabled\n          label="Label"\n          checked={checked2}\n          onChange={() => setChecked2(!checked2)}\n          variant="inline"\n        />\n      </div>\n    </>\n  )\n}',__scope:(n={props:O,DefaultLayout:i.a,Playground:b.c,StatusLabel:s.a,ToggleButton:r.a,LargeParagraph:u.a,Link:d.a},n.DefaultLayout=i.a,n._frontmatter=h,n),mdxType:"Playground"},(function(){var e=l.useState(!1),t=e[0],n=e[1],a=l.useState(!1),o=a[0],i=a[1];return Object(c.b)(l.Fragment,null,Object(c.b)("div",{style:{maxWidth:"320px"}},Object(c.b)(r.a,{id:"toggle-button-1",label:"Label",checked:t,onChange:function(){return n(!t)},variant:"inline",mdxType:"ToggleButton"}),Object(c.b)("br",null),Object(c.b)(r.a,{id:"toggle-button-2",disabled:!0,label:"Label",checked:o,onChange:function(){return i(!o)},variant:"inline",mdxType:"ToggleButton"})))})),Object(c.b)("h4",{id:"react-code-example-1"},"React code example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'{\n  () => {\n    const [checked1, setChecked1] = React.useState(false);\n    const [checked2, setChecked2] = React.useState(false);\n    return (\n      <>\n        <div style={{ maxWidth: \'320px\' }}>\n          <ToggleButton\n            id="toggle-button-1"\n            label="Label"\n            checked={checked1}\n            onChange={() => setChecked1(!checked1)}\n            variant="inline"\n          />\n          <br />\n          <ToggleButton\n            id="toggle-button-2"\n            disabled\n            label="Label"\n            checked={checked2}\n            onChange={() => setChecked2(!checked2)}\n            variant="inline"\n          />\n        </div>\n      </>\n    );\n  };\n}\n')),Object(c.b)("h2",{id:"demos--api"},"Demos & API"),Object(c.b)("h3",{id:"react"},"React"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/v1.0/storybook/react/?path=/story/components-togglebutton--default"},"Toggle buttons in hds-react")),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/v1.0/storybook/react/?path=/docs/components-togglebutton--default"},"Toggle button API")))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!Object.prototype.hasOwnProperty.call(f,"__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/toggle.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-toggle-mdx-35fe3af5fdf04bd0d223.js.map