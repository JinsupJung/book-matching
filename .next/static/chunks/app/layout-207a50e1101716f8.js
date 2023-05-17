(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8543:function(e,r,t){Promise.resolve().then(t.t.bind(t,4026,23)),Promise.resolve().then(t.bind(t,5648)),Promise.resolve().then(t.bind(t,5151)),Promise.resolve().then(t.bind(t,2853)),Promise.resolve().then(t.bind(t,7914)),Promise.resolve().then(t.t.bind(t,6476,23))},5151:function(e,r,t){"use strict";t.r(r);var s=t(9268),n=t(5901),a=t(2540),i=t(3577),o=t(1816),l=t(9923),c=t(5842),d=t(6006),u=t(8919),f=t(5036);let x=e=>{let{className:r,...t}=e,x=(0,d.useRef)(null),[m,h]=(0,d.useState)(""),{messages:g,addMessage:b,removeMessage:p,updateMessage:v,setIsMessageUpdating:y}=(0,d.useContext)(n.B),{mutate:w,isLoading:N}=(0,i.D)({mutationKey:["sendMessage"],mutationFn:async e=>{let r=await fetch("/api/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:g})});return r.body},onMutate(e){b(e)},onSuccess:async e=>{if(!e)throw Error("No stream");let r=(0,c.x0)();b({id:r,isUserMessage:!1,text:""}),y(!0);let t=e.getReader(),s=new TextDecoder,n=!1;for(;!n;){let{value:e,done:a}=await t.read();n=a;let i=s.decode(e);v(r,e=>e+i)}y(!1),h(""),setTimeout(()=>{var e;null===(e=x.current)||void 0===e||e.focus()},10)},onError:(e,r)=>{var t;u.Am.error("Something went wrong. Please try again."),p(r.id),null===(t=x.current)||void 0===t||t.focus()}});return(0,s.jsx)("div",{...t,className:(0,a.cn)("border-t border-zinc-300",r),children:(0,s.jsxs)("div",{className:"relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none",children:[(0,s.jsx)(f.Z,{ref:x,onKeyDown:e=>{if("Enter"===e.key&&!e.shiftKey){e.preventDefault();let r={id:(0,c.x0)(),isUserMessage:!0,text:m};w(r)}},rows:2,maxRows:4,value:m,autoFocus:!0,disabled:N,onChange:e=>h(e.target.value),placeholder:"Write a message...",className:"peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6"}),(0,s.jsx)("div",{className:"absolute inset-y-0 right-0 flex py-1.5 pr-1.5",children:(0,s.jsx)("kbd",{className:"inline-flex items-center rounded border bg-white border-gray-200 px-1 font-sans text-xs text-gray-400",children:N?(0,s.jsx)(o.Z,{className:"w-3 h-3 animate-spin"}):(0,s.jsx)(l.Z,{className:"w-3 h-3"})})}),(0,s.jsx)("div",{className:"absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600","aria-hidden":"true"})]})})};r.default=x},5648:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var s=t(9268),n=t(5901),a=t(2540),i=t(6006),o=t(5846),l=t.n(o);let c=e=>{let r,{text:t}=e,n=/\[(.+?)\]\((.+?)\)/g,a=[],o=0;for(;null!==(r=n.exec(t));){let[e,n,i]=r,c=r.index,d=c+e.length;o<c&&a.push(t.slice(o,c)),a.push((0,s.jsx)(l(),{target:"_blank",rel:"noopener noreferrer",className:"break-words underline underline-offset-2 text-blue-600",href:i,children:n},i)),o=d}return o<t.length&&a.push(t.slice(o)),(0,s.jsx)(s.Fragment,{children:a.map((e,r)=>(0,s.jsx)(i.Fragment,{children:e},r))})},d=e=>{let{className:r,...t}=e,{messages:o}=(0,i.useContext)(n.B),l=[...o].reverse();return(0,s.jsxs)("div",{...t,className:(0,a.cn)("flex flex-col-reverse gap-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch",r),children:[(0,s.jsx)("div",{className:"flex-1 flex-grow"}),l.map(e=>(0,s.jsx)("div",{className:"chat-message",children:(0,s.jsx)("div",{className:(0,a.cn)("flex items-end",{"justify-end":e.isUserMessage}),children:(0,s.jsx)("div",{className:(0,a.cn)("flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden",{"order-1 items-end":e.isUserMessage,"order-2 items-start":!e.isUserMessage}),children:(0,s.jsx)("p",{className:(0,a.cn)("px-4 py-2 rounded-lg",{"bg-blue-600 text-white":e.isUserMessage,"bg-gray-200 text-gray-900":!e.isUserMessage}),children:(0,s.jsx)(c,{text:e.text})})})})},"".concat(e.id,"-").concat(e.id)))]})};var u=d},7914:function(e,r,t){"use strict";t.r(r);var s=t(9268),n=t(5901),a=t(2030),i=t(5194);let o=e=>{let{children:r}=e,t=new a.S;return(0,s.jsx)(i.aH,{client:t,children:(0,s.jsx)(n.A,{children:r})})};r.default=o},2853:function(e,r,t){"use strict";t.r(r),t.d(r,{Accordion:function(){return l},AccordionContent:function(){return u},AccordionItem:function(){return c},AccordionTrigger:function(){return d}});var s=t(9268),n=t(6006),a=t(1496),i=t(2300),o=t(2540);let l=a.fC,c=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,s.jsx)(a.ck,{ref:r,className:(0,o.cn)("border-b",t),...n})});c.displayName="AccordionItem";let d=n.forwardRef((e,r)=>{let{className:t,children:n,...l}=e;return(0,s.jsx)(a.h4,{className:"flex",children:(0,s.jsxs)(a.xz,{ref:r,className:(0,o.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...l,children:[n,(0,s.jsx)(i.Z,{className:"h-4 w-4 transition-transform duration-200"})]})})});d.displayName=a.xz.displayName;let u=n.forwardRef((e,r)=>{let{className:t,children:n,...i}=e;return(0,s.jsx)(a.VY,{ref:r,className:(0,o.cn)("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",t),...i,children:(0,s.jsx)("div",{className:"pb-4 pt-0",children:n})})});u.displayName=a.VY.displayName},5901:function(e,r,t){"use strict";t.d(r,{A:function(){return l},B:function(){return o}});var s=t(9268),n=t(6006),a=t(5842);let i=[{id:(0,a.x0)(),text:"관심있는 책이 있으신가요?",isUserMessage:!1}],o=(0,n.createContext)({messages:[],isMessageUpdating:!1,addMessage:()=>{},removeMessage:()=>{},updateMessage:()=>{},setIsMessageUpdating:()=>{}});function l(e){let{children:r}=e,[t,a]=(0,n.useState)(i),[l,c]=(0,n.useState)(!1),d=e=>{a(r=>[...r,e])},u=e=>{a(r=>r.filter(r=>r.id!==e))},f=(e,r)=>{a(t=>t.map(t=>t.id===e?{...t,text:r(t.text)}:t))};return(0,s.jsx)(o.Provider,{value:{messages:t,isMessageUpdating:l,addMessage:d,removeMessage:u,updateMessage:f,setIsMessageUpdating:c},children:r})}},2540:function(e,r,t){"use strict";t.d(r,{cn:function(){return a}});var s=t(293),n=t(9791);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m)((0,n.W)(r))}},4026:function(){}},function(e){e.O(0,[873,667,139,744],function(){return e(e.s=8543)}),_N_E=e.O()}]);