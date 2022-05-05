(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{srm2:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return f})),o.d(t,"default",(function(){return O}));var n=o("cxan"),a=o("zjfJ"),c=o("+wNj"),l=o("ERkP"),s=o("ZVZ0"),r=o("9Rvw"),i=o("vD+s"),b=o("DcHz"),u=o("v6xS"),h=o("13lF"),d=o("4yrn"),m=o("VTNy"),g=o("fSvc"),p=o("qbsg");o("l1C2");function k(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function v(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?k(Object(o),!0).forEach((function(t){Object(a.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):k(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var f={};void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/guidelines/checkboxs-radiobuttons-toggles.mdx"}});var y={_frontmatter:f},x=r.a;function O(e){var t,o,a,k,O=e.components,j=Object(c.a)(e,["components"]);return Object(s.b)(x,Object(n.a)({},y,j,{components:O,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"checkboxes-radio-buttons-or-toggles"},"Checkboxes, radio buttons, or toggles?"),Object(s.b)(i.a,{mdxType:"LargeParagraph"},"Helsinki Design System has checkboxes, radio buttons and toggles that might seem similar to each other, but it is important to consider the use cases to decide which one to use."),Object(s.b)(b.a,{label:"TLDR (Too long, didn't read)",className:"siteNotification",mdxType:"Notification"},Object(s.b)("b",null,"Use checkboxes")," to select multiple parallel items. Use checkbox to single selections to confirm on/off selection.",Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("b",null,"Use radio buttons")," to mutually exclusive options.",Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("b",null,"Use toggle")," to selections affecting system settings or changing status."),Object(s.b)("h2",{id:"when-to-use-radio-buttons"},"When to use radio buttons?"),Object(s.b)(g.a,{href:"../components/radio-button",mdxType:"Link"},"HDS radio button component documentation"),Object(s.b)("br",null),Object(s.b)("br",null),"An application can use radio buttons when there is a list of two or more mutually exclusive choices and the user needs to select one of them. After clicking the non-selected radio button, whatever was previously selected is deselected. In traditional application design, the first radio button in the list was always selected by default. But not all modern websites follow this convention and rather use empty radio buttons by default. Websites today, forms, and applications inconsistently select one or leave all radio buttons blank by default. If none of the buttons is selected by default, users have no way to revert to this original state after they’ve made a selection. The lack of a standard can be confusing to users.",Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("b",null,"HDS strongly recommends that radio buttons are never presented unticked."),Object(s.b)("br",null),Object(s.b)("br",null),"Radio buttons have a lower cognitive load than dropdown menus because they make all options permanently visible so that users can easily compare them. Radio buttons are also easier to operate for users who have difficulty making precise mouse movements. (Limited space might sometimes force you to violate this guideline, but do try to keep choices visible whenever possible.)",Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("b",null,"Example use:")," Binary choices like YES/NO, age group or other similar choices that exclude other options.",Object(s.b)(p.c,{__position:3,__code:'() => {\n  const [selectedItem, setSelectedItem] = React.useState(\'1\')\n  const onChange = event => {\n    setSelectedItem(event.target.value)\n  }\n  return (\n    <SelectionGroup label="Choose your age group">\n      <RadioButton\n        id="v-radio1"\n        name="v-radio"\n        value="1"\n        label="Under 16"\n        checked={selectedItem === \'1\'}\n        onChange={onChange}\n      />\n      <RadioButton\n        id="v-radio2"\n        name="v-radio"\n        value="2"\n        label="17-35"\n        checked={selectedItem === \'2\'}\n        onChange={onChange}\n      />\n      <RadioButton\n        id="v-radio3"\n        name="v-radio"\n        value="3"\n        label="35-64"\n        checked={selectedItem === \'3\'}\n        onChange={onChange}\n      />\n      <RadioButton\n        id="v-radio4"\n        name="v-radio"\n        value="4"\n        label="Over 65"\n        checked={selectedItem === \'4\'}\n        onChange={onChange}\n      />\n    </SelectionGroup>\n  )\n}',__scope:(t={props:j,DefaultLayout:r.a,LargeParagraph:i.a,Notification:b.a,Checkbox:u.a,RadioButton:h.a,ToggleButton:d.a,SelectionGroup:m.a,Link:g.a,Playground:p.c},t.DefaultLayout=r.a,t._frontmatter=f,t),mdxType:"Playground"},(function(){var e=l.useState("1"),t=e[0],o=e[1],n=function(e){o(e.target.value)};return Object(s.b)(m.a,{label:"Choose your age group",mdxType:"SelectionGroup"},Object(s.b)(h.a,{id:"v-radio1",name:"v-radio",value:"1",label:"Under 16",checked:"1"===t,onChange:n,mdxType:"RadioButton"}),Object(s.b)(h.a,{id:"v-radio2",name:"v-radio",value:"2",label:"17-35",checked:"2"===t,onChange:n,mdxType:"RadioButton"}),Object(s.b)(h.a,{id:"v-radio3",name:"v-radio",value:"3",label:"35-64",checked:"3"===t,onChange:n,mdxType:"RadioButton"}),Object(s.b)(h.a,{id:"v-radio4",name:"v-radio",value:"4",label:"Over 65",checked:"4"===t,onChange:n,mdxType:"RadioButton"}))})),Object(s.b)("h2",{id:"when-to-use-checkboxes"},"When to use checkboxes?"),Object(s.b)(g.a,{href:"../components/checkbox",mdxType:"Link"},"HDS checkbox component documentation"),Object(s.b)("br",null),Object(s.b)("br",null),"Checkboxes allow the user to select zero, one, or multiple selections from a list of options. In other words, each checkbox is independent of the other checkboxes, i.e. checking one does not uncheck the others.",Object(s.b)("p",null,"A stand-alone checkbox is used for a single option that the user can turn on or off."),Object(s.b)("b",null,"Example use: "),"Single selection confirming on/off selection",Object(s.b)(p.c,{__position:6,__code:'() => {\n  const [checked, setChecked] = React.useState(false)\n  return (\n    <Checkbox\n      id="checkbox"\n      label="I have a loyalty card"\n      checked={checked}\n      onChange={() => setChecked(!checked)}\n    />\n  )\n}',__scope:(o={props:j,DefaultLayout:r.a,LargeParagraph:i.a,Notification:b.a,Checkbox:u.a,RadioButton:h.a,ToggleButton:d.a,SelectionGroup:m.a,Link:g.a,Playground:p.c},o.DefaultLayout=r.a,o._frontmatter=f,o),mdxType:"Playground"},(function(){var e=l.useState(!1),t=e[0],o=e[1];return Object(s.b)(u.a,{id:"checkbox",label:"I have a loyalty card",checked:t,onChange:function(){return o(!t)},mdxType:"Checkbox"})})),Object(s.b)("br",null),Object(s.b)("b",null,"HDS recommends using checkboxes when the user is required to make more than two choices or confirm a single choice. "),Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("b",null,"Example use:")," Selecting interests ",Object(s.b)("br",null),Object(s.b)(p.c,{__position:8,__code:'() => {\n  const [checkedItems, setCheckedItems] = React.useState({\n    \'v-checkbox1\': true,\n    \'v-checkbox2\': true,\n  })\n  const onChange = event => {\n    setCheckedItems({\n      ...checkedItems,\n      [event.target.name]: event.target.checked,\n    })\n  }\n  return (\n    <SelectionGroup label="Select your interests">\n      <Checkbox\n        id="v-checkbox1"\n        name="v-checkbox1"\n        label="Music"\n        checked={checkedItems[\'v-checkbox1\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        id="v-checkbox2"\n        name="v-checkbox2"\n        label="Arts and museums"\n        checked={checkedItems[\'v-checkbox2\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        id="v-checkbox3"\n        name="v-checkbox3"\n        label="Sports and outdoor activities"\n        checked={checkedItems[\'v-checkbox3\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        id="v-checkbox4"\n        name="v-checkbox4"\n        label="Cooking"\n        checked={checkedItems[\'v-checkbox4\']}\n        onChange={onChange}\n      />\n    </SelectionGroup>\n  )\n}',__scope:(a={props:j,DefaultLayout:r.a,LargeParagraph:i.a,Notification:b.a,Checkbox:u.a,RadioButton:h.a,ToggleButton:d.a,SelectionGroup:m.a,Link:g.a,Playground:p.c},a.DefaultLayout=r.a,a._frontmatter=f,a),mdxType:"Playground"},(function(){var e=l.useState({"v-checkbox1":!0,"v-checkbox2":!0}),t=e[0],o=e[1],n=function(e){var n;o(v(v({},t),{},((n={})[e.target.name]=e.target.checked,n)))};return Object(s.b)(m.a,{label:"Select your interests",mdxType:"SelectionGroup"},Object(s.b)(u.a,{id:"v-checkbox1",name:"v-checkbox1",label:"Music",checked:t["v-checkbox1"],onChange:n,mdxType:"Checkbox"}),Object(s.b)(u.a,{id:"v-checkbox2",name:"v-checkbox2",label:"Arts and museums",checked:t["v-checkbox2"],onChange:n,mdxType:"Checkbox"}),Object(s.b)(u.a,{id:"v-checkbox3",name:"v-checkbox3",label:"Sports and outdoor activities",checked:t["v-checkbox3"],onChange:n,mdxType:"Checkbox"}),Object(s.b)(u.a,{id:"v-checkbox4",name:"v-checkbox4",label:"Cooking",checked:t["v-checkbox4"],onChange:n,mdxType:"Checkbox"}))})),Object(s.b)("br",null),Object(s.b)("b",null,"HDS recommends using checkboxes when the user can select multiple options that are not excluding other options. "),Object(s.b)("h2",{id:"when-to-use-toggles-or-switches"},"When to use toggles or switches?"),Object(s.b)(g.a,{href:"../components/toggle",mdxType:"Link"},"HDS toggle component documentation"),Object(s.b)("br",null),Object(s.b)("br",null),"Toggle switches are digital on/off switches. They prompt users to choose between two mutually exclusive options and always have a default value. Toggle buttons have been inspired by real-world physical switches (e.g. a light switch). Therefore users expect something to happen immediately when the toggle button is activated. Toggle buttons should do three things — change states, show the current state, and reveal unselected options. If your toggle button doesn’t do all these things, it has poor usability. Toggles are best used for switching between two opposing states of system functionality and preferences. They are similar to radio buttons or checkboxes in that they allow users to select from only two options.",Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("b",null,"Example use:")," Switching between themes.",Object(s.b)(p.c,{__position:11,__code:"() => {\n  const [hasCustomTheme, setHasCustomTheme] = React.useState(false)\n  const customTheme = {\n    title: 'Primary theme',\n    label: 'Use primary theme',\n    baseStyles: {\n      ['--label-color-default']: 'var(--color-coat-of-arms)',\n    },\n    titleStyles: {\n      color: 'var(--color-coat-of-arms)',\n    },\n    toggle: {\n      '--toggle-button-color': 'var(--color-coat-of-arms)',\n      '--toggle-button-hover-color': 'var(--color-coat-of-arms)',\n    },\n  }\n  return (\n    <div style={hasCustomTheme ? customTheme.baseStyles : {}}>\n      <h2 style={hasCustomTheme ? customTheme.titleStyles : undefined}>\n        {hasCustomTheme ? customTheme.title : 'Default theme'}\n      </h2>\n      <ToggleButton\n        id=\"toggle-button-1\"\n        label={customTheme.label}\n        checked={hasCustomTheme}\n        theme={hasCustomTheme ? customTheme.toggle : {}}\n        onChange={() => setHasCustomTheme(!hasCustomTheme)}\n      />\n      <br />\n    </div>\n  )\n}",__scope:(k={props:j,DefaultLayout:r.a,LargeParagraph:i.a,Notification:b.a,Checkbox:u.a,RadioButton:h.a,ToggleButton:d.a,SelectionGroup:m.a,Link:g.a,Playground:p.c},k.DefaultLayout=r.a,k._frontmatter=f,k),mdxType:"Playground"},(function(){var e,t=l.useState(!1),o=t[0],n=t[1],a={title:"Primary theme",label:"Use primary theme",baseStyles:(e={},e["--label-color-default"]="var(--color-coat-of-arms)",e),titleStyles:{color:"var(--color-coat-of-arms)"},toggle:{"--toggle-button-color":"var(--color-coat-of-arms)","--toggle-button-hover-color":"var(--color-coat-of-arms)"}};return Object(s.b)("div",{style:o?a.baseStyles:{}},Object(s.b)("h2",{style:o?a.titleStyles:void 0},o?a.title:"Default theme"),Object(s.b)(d.a,{id:"toggle-button-1",label:a.label,checked:o,theme:o?a.toggle:{},onChange:function(){return n(!o)},mdxType:"ToggleButton"}),Object(s.b)("br",null))})),Object(s.b)("h2",{id:"sources-and-further-reading"},"Sources and further reading"),Object(s.b)("p",null,"Note that these articles might include guides that are not in line with HDS guidelines."),Object(s.b)("ul",null,Object(s.b)("li",null,Object(s.b)(g.a,{href:"https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/",external:!0,mdxType:"Link"},"Checkboxes vs. Radio Buttons, N&N Group")),Object(s.b)("li",null,Object(s.b)(g.a,{href:"https://www.nngroup.com/articles/toggle-switch-guidelines/",external:!0,mdxType:"Link"},"Toggle-Switch Guidelines, N&N Group")),Object(s.b)("li",null,Object(s.b)(g.a,{href:"https://www.nngroup.com/articles/radio-buttons-default-selection/",external:!0,mdxType:"Link"},"Radio Buttons: Always Select One? , N&N Group")),Object(s.b)("li",null,Object(s.b)(g.a,{href:"https://uxmovement.com/buttons/the-challenges-with-single-toggle-buttons/",external:!0,mdxType:"Link"},"The Challenges with Single Toggle Buttons, UXMovement"))))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/guidelines/checkboxs-radiobuttons-toggles.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-guidelines-checkboxs-radiobuttons-toggles-mdx-fb5b1ea6e36c6d787564.js.map