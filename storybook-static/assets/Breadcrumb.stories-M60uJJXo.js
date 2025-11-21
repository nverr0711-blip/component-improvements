import{j as e}from"./jsx-runtime-D_zvdyIk.js";function j(){return e.jsx("svg",{"aria-hidden":!0,viewBox:"0 0 20 20",width:18,height:18,fill:"currentColor",style:{transform:"rotate(90deg)",color:"#8c94a8",position:"relative",left:-1},children:e.jsx("path",{fillRule:"evenodd",d:"M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z",clipRule:"evenodd"})})}function h({items:o,separatorLabel:g="Breadcrumb"}){const y={display:"flex",alignItems:"center",gap:4,padding:"10px 12px",background:"#f9fafb",borderRadius:12,border:"1px solid #e5e7eb",color:"#374151",fontSize:14,fontWeight:500,fontFamily:"Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",overflowX:"auto",scrollbarWidth:"thin",whiteSpace:"nowrap"},l={color:"#1f2937",textDecoration:"none",padding:"4px 4px",borderRadius:8,transition:"color 120ms ease, background-color 120ms ease",fontSize:"inherit",fontFamily:"inherit"},x={color:"#0f172a",fontWeight:700,padding:"4px 4px",fontFamily:"inherit",fontSize:"inherit"};return e.jsx("nav",{"aria-label":g,style:{width:"100%"},children:e.jsx("ol",{style:y,children:o.map((r,s)=>{const c=s===o.length-1;return e.jsxs("li",{style:{display:"inline-flex",alignItems:"center",gap:4},children:[c?e.jsx("span",{style:x,children:r.label}):r.href||r.onClick?e.jsx("button",{type:"button",style:{...l,background:"transparent",border:"none",cursor:"pointer"},onClick:a=>{var i;a.preventDefault(),(i=r.onClick)==null||i.call(r)},onMouseEnter:a=>{a.currentTarget.style.color="#111827",a.currentTarget.style.backgroundColor="#eef2f7"},onMouseLeave:a=>{a.currentTarget.style.color="#1f2937",a.currentTarget.style.backgroundColor="transparent"},children:r.label}):e.jsx("span",{style:l,children:r.label}),c?null:e.jsx(j,{})]},s)})})})}h.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},separatorLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Breadcrumb'",computed:!1}}}};const S=[{label:"Home",href:"#"},{label:"Uploads",href:"#"},{label:"New"}],B={title:"Components/Breadcrumb",component:h,args:{items:S}},n={},t={args:{items:[{label:"Home",href:"#"},{label:"Projects",href:"#"},{label:"2025",href:"#"},{label:"Design System",href:"#"},{label:"Docs",href:"#"},{label:"Breadcrumbs"}]}};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,m,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Projects',
      href: '#'
    }, {
      label: '2025',
      href: '#'
    }, {
      label: 'Design System',
      href: '#'
    }, {
      label: 'Docs',
      href: '#'
    }, {
      label: 'Breadcrumbs'
    }]
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const k=["Default","LongTrail"];export{n as Default,t as LongTrail,k as __namedExportsOrder,B as default};
