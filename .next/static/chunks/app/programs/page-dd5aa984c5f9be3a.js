(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[625],{1960:function(e,l,t){"use strict";var a=t(8997);l.Z=void 0;var s=a(t(6906)),r=t(9268),i=(0,s.default)((0,r.jsx)("path",{d:"M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"}),"ArrowForwardRounded");l.Z=i},7032:function(e,l,t){Promise.resolve().then(t.bind(t,7119))},7119:function(e,l,t){"use strict";t.r(l);var a=t(9268),s=t(878),r=t(7090),i=t(6394),d=t.n(i),c=t(6006),n=t(1960),o=t(4214),x=t(3791),m=t(1573);l.default=()=>{let[e,l]=(0,c.useState)(!1),[t,i]=(0,c.useState)(!1),[f,u]=(0,c.useState)(0),[p,g]=(0,c.useState)("All"),[h,b]=(0,c.useState)([]),[j,w]=(0,c.useState)(!1),N=async()=>{w(!0);try{let e=await o.Z.get("https://resource.candidatecollegeind.com/api/event/categories");setTimeout(()=>{b(e.data.data),w(!1)},1500)}catch(e){console.error(e)}};return(0,c.useEffect)(()=>{N()},[]),(0,a.jsxs)("main",{className:"bg-white h-full",children:[(0,a.jsx)(s.wp,{active:"Programs",isDetail:!1}),(0,a.jsxs)("section",{className:"flex flex-col md:flex-row pt-28 gap-4 px-5 md:max-w-6xl md:mx-auto py-12 bg-primary md:justify-center md:items-center relative h-fit md:h-[80vh]",children:[(0,a.jsx)(d(),{src:"/decoration/programs.png",width:0,height:0,className:"w-[25rem]",alt:"Article Decoration",title:"Article Decoration"}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 mb-3",children:[(0,a.jsx)("h1",{className:"font-semibold text-white text-3xl md:text-[70px] md:w-[90%] md:leading-[100%] leading-[150%]",children:"Achieve Quality Equally For All Indonesian Student."}),(0,a.jsx)("p",{className:"text-gray text-sm lg:text-base md:w-[85%]",children:"Candidate College is an Education Platform that works to facilitate students in Indonesia at home and aboard to achieve a quality education system."})]})]}),(0,a.jsx)("section",{className:"flex flex-col w-full px-5 pt-5 md:pt-10 pb-20 bg-white",children:(0,a.jsxs)("div",{className:"flex flex-col md:mx-auto md:max-w-5xl bg-white",children:[(0,a.jsx)("div",{className:"overflow-x-auto scrollbar-hide relative",children:(0,a.jsx)("div",{className:"flex flex-row gap-4 md:mt-5 mb-10 md:mb-16 overflow-x-auto overflow-y-hidden w-[1000px] h-full no-scrollbar scrollbar-hide",children:j?[1,2,3,4,5,6].map((e,l)=>(0,a.jsx)(s.HC,{data:e,isLoading:!0,onClick:e=>g(""),active:""})):null==h?void 0:h.map((e,l)=>(0,a.jsx)(s.HC,{data:e,isLoading:!1,onClick:l=>g(e.name),active:p}))})}),(0,a.jsxs)("div",{className:"".concat("All"!=p?"flex flex-col":"hidden"),children:[(0,a.jsx)("div",{className:"flex flex-row items-center justify-between pb-6 border-b border-b-gray",children:(0,a.jsx)("h2",{className:"font-semibold text-2xl md:text-4xl text-primary",children:p})}),(0,a.jsx)("div",{className:"flex flex-col gap-8 md:gap-5 mt-7 md:grid md:grid-cols-3",children:r.NE.map((e,l)=>(0,a.jsxs)("div",{className:"flex-col gap-2 md:items-center md:gap-5 flex",children:[(0,a.jsx)(d(),{width:100,height:50,src:e.coverLandscape,alt:e.title,title:e.title,className:"w-full md:flex-1 h-full rounded-xl",priority:!0}),(0,a.jsxs)("div",{className:"flex md:flex-1 flex-col gap",children:[(0,a.jsx)("h3",{className:"font-semibold text-xl md:text-2xl text-primary",children:e.title}),(0,a.jsx)("p",{className:"font-normal text-sm md:text-base text-gray",children:e.snippets}),(0,a.jsxs)("p",{className:"font-normal text-xs text-gray md:mt-5 mt-3",children:[e.publishedAt," | ",e.duration," min read"]})]})]},l))})]}),(0,a.jsxs)("div",{className:"".concat("All"!=p?"hidden":"flex flex-col"),children:[(0,a.jsxs)("div",{className:"flex flex-row items-center justify-between pb-6 border-b border-b-gray",children:[(0,a.jsx)("h2",{className:"font-semibold text-2xl md:text-4xl text-primary",children:"Latest"}),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center text-sm gap-1 cursor-pointer text-primary",children:["See all ",(0,a.jsx)("span",{className:"text-primary text-sm md:text-base",children:(0,a.jsx)(n.Z,{fontSize:"inherit",color:"inherit"})})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-5 w-full mt-7",children:[(0,a.jsx)(m.Z,{data:r.NE[f],isLoading:!0}),(0,a.jsx)("div",{className:"md:flex flex-row gap-4 hidden",children:r.NE.slice(1,r.NE.length-1).map((e,l)=>(0,a.jsx)(x.Z,{data:e,type:"Article",isLoading:!0},l))}),(0,a.jsx)("div",{className:"flex flex-row gap-1 md:hidden items-center justify-center w-full",children:r.NE.map((e,l)=>(0,a.jsx)("div",{onClick:e=>u(l),className:"flex  p-[5px] h-2 ".concat(f==l?"w-8 bg-secondary":"w-2 bg-primary"," rounded-full cursor-pointer")}))})]}),(0,a.jsx)("section",{className:"my-14 w-full rounded-xl bg-primary h-[350px]"}),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-between pb-6 border-b border-b-gray mt-6",children:[(0,a.jsx)("h2",{className:"font-semibold text-2xl md:text-4xl text-primary",children:"External Programs"}),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center text-sm gap-1 cursor-pointer text-primary",children:["See all ",(0,a.jsx)("span",{className:"text-primary text-sm md:text-base",children:(0,a.jsx)(n.Z,{fontSize:"inherit",color:"inherit"})})]})]}),(0,a.jsx)("section",{className:"w-full h-full bg-white py-10 md:pt-10 md:pb-2 flex flex-col gap-9 overflow-hidden",children:(0,a.jsx)("div",{className:"flex gap-2 overflow-x-auto overflow-y-hidden w-full h-full pb-2 no-scrollbar scrollbar-hide",style:{scrollbarWidth:"none"},children:(0,a.jsx)("div",{className:"flex flex-row gap-4 no-scrollbar scrollbar-hide",style:{minWidth:"".concat(22*r.RB.length,"rem")},children:r.RB.map((e,l)=>(0,a.jsx)(s.Ss,{data:e,type:"Programs",isLoading:!0},l))})})}),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-between pb-6 border-b border-b-gray mt-16",children:[(0,a.jsx)("h2",{className:"font-semibold text-2xl md:text-4xl text-primary",children:"Internal Programs"}),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center text-sm gap-1 cursor-pointer text-primary",children:["See all ",(0,a.jsx)("span",{className:"text-primary text-sm md:text-base",children:(0,a.jsx)(n.Z,{fontSize:"inherit",color:"inherit"})})]})]}),(0,a.jsx)("section",{className:"w-full h-full bg-white py-10 md:py-10 flex flex-col gap-9 overflow-hidden",children:(0,a.jsx)("div",{className:"flex gap-2 overflow-x-auto overflow-y-hidden w-full h-full pb-2 no-scrollbar scrollbar-hide",style:{scrollbarWidth:"none"},children:(0,a.jsx)("div",{className:"flex flex-row gap-4 no-scrollbar scrollbar-hide",style:{minWidth:"".concat(22*r.RB.length,"rem")},children:r.RB.map((e,l)=>(0,a.jsx)(s.Ss,{data:e,type:"Programs",isLoading:!0},l))})})})]})]})}),(0,a.jsx)(s.MV,{}),(0,a.jsx)("div",{className:"w-full bg-primary",children:(0,a.jsx)(s.$_,{})})]})}},3791:function(e,l,t){"use strict";var a=t(9268),s=t(9907),r=t(6394),i=t.n(r),d=t(5846),c=t.n(d);t(6006),l.Z=e=>{let{data:l,type:t,isLoading:r}=e;return(0,a.jsx)(a.Fragment,{children:r?(0,a.jsxs)("div",{className:"flex-col gap-2 md:items-center md:gap-2 flex",children:[(0,a.jsx)("div",{className:"w-[328px] h-[172px] rounded-xl object-cover bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsxs)("div",{className:"flex w-full gap-2 flex-col gap",children:[(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-2/3 rounded-lg py-4"}),(0,a.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[(0,a.jsx)("div",{className:"w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsx)("div",{className:"w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsx)("div",{className:"w-2/3 py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"})]}),(0,a.jsxs)("div",{className:"flex flex-row max-w-fit gap-3 text-gray",children:[(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-[3rem] rounded-lg py-3"}),(0,a.jsx)("p",{children:"|"}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-[3rem] rounded-lg py-3"})]})]})]}):(0,a.jsxs)(c(),{href:"/".concat("Article"==t?"articles":"events","/").concat(l.slug),about:l.title,title:l.title,className:"flex-col gap-2 md:items-center md:gap-2 flex md:w-[320px]",children:[(0,a.jsx)(i(),{width:100,height:180,src:"https://resource.candidatecollegeind.com/storage/".concat(l.cover_landscape),alt:l.title,title:l.title,className:"w-full h-[178px] md:h-[168px] rounded-xl object-cover",priority:!0}),(0,a.jsxs)("div",{className:"flex md:flex-1 flex-col gap",children:[(0,a.jsx)(c(),{href:"/".concat("Article"==t?"articles":"events","/").concat(l.slug),about:l.title,title:l.title,className:"font-semibold text-2xl text-primary",children:l.title.length>40?l.title.substring(0,48)+" ...":l.title}),(0,a.jsx)("p",{className:"font-normal text-sm text-gray",children:l.snippets.substring(0,170)+" ..."}),(0,a.jsxs)("p",{className:"font-normal text-xs text-gray mt-5",children:[(0,s.p6)(l.created_at)," \xa0 | \xa0 ",l.duration," min read"]})]})]})})}},1573:function(e,l,t){"use strict";var a=t(9268),s=t(9907),r=t(6394),i=t.n(r);t(6006),l.Z=e=>{let{data:l,isLoading:t}=e;return(0,a.jsx)(a.Fragment,{children:t?(0,a.jsxs)("div",{className:"flex-col md:flex-row gap-2 md:items-center md:gap-5 flex",children:[(0,a.jsx)("div",{className:"w-[650px] h-[340px] rounded-xl object-cover bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsxs)("div",{className:"md:flex w-full gap-2 flex-1 flex-col gap hidden",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-full rounded-lg py-5"}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-full rounded-lg py-5"}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-full rounded-lg py-5"}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-1/3 rounded-lg py-5"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[(0,a.jsx)("div",{className:"w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsx)("div",{className:"w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsx)("div",{className:"w-2/3 py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"})]}),(0,a.jsxs)("div",{className:"flex flex-row max-w-fit gap-3 text-gray",children:[(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-[3rem] rounded-lg py-3"}),(0,a.jsx)("p",{children:"|"}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-[3rem] rounded-lg py-3"})]})]})]}):(0,a.jsxs)("div",{className:"flex-col md:flex-row gap-2 md:items-center md:gap-5 flex",children:[(0,a.jsx)(i(),{width:100,height:50,src:"https://resource.candidatecollegeind.com/storage/".concat(l&&l.cover_landscape),alt:l&&l.title,title:l&&l.title,className:"w-full md:w-[650px] md:h-[340px] md:flex-1 object-cover h-full rounded-xl",priority:!0}),(0,a.jsxs)("div",{className:"md:flex md:flex-1 flex-col gap-3",children:[(0,a.jsx)("h3",{className:"font-semibold text-2xl md:text-4xl text-primary",children:l&&l.title}),(0,a.jsx)("p",{className:"font-normal text-sm md:text-base text-gray",children:l&&l.snippets}),(0,a.jsxs)("p",{className:"font-normal text-xs text-gray mt-2",children:[(0,s.p6)(l&&l.created_at)," | ",l&&l.duration," min read"]})]})]})})}},9907:function(e,l,t){"use strict";t.d(l,{p6:function(){return s}});let a=e=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e],s=e=>{let l=new Date(e),t=l.getUTCDate().toString().padStart(2,"0"),s=a(l.getUTCMonth()),r=l.getUTCFullYear();return"".concat(t," ").concat(s," ").concat(r)}}},function(e){e.O(0,[302,214,878,253,698,744],function(){return e(e.s=7032)}),_N_E=e.O()}]);