(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{1960:function(e,t,l){"use strict";var a=l(8997);t.Z=void 0;var s=a(l(6906)),r=l(9268),i=(0,s.default)((0,r.jsx)("path",{d:"M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"}),"ArrowForwardRounded");t.Z=i},210:function(e,t,l){Promise.resolve().then(l.bind(l,5186))},5186:function(e,t,l){"use strict";l.r(t);var a=l(9268),s=l(878),r=l(5846),i=l.n(r),c=l(6006),d=l(1960),o=l(6394),n=l.n(o),m=l(4214),x=l(3791),u=l(1573),f=l(5365),p=l(2948);l(72),l(2823),l(8315);var g=l(9858);l(8003),t.default=()=>{let[e,t]=(0,c.useState)(!1),[l,r]=(0,c.useState)(!1),[o,h]=(0,c.useState)(0),[b,j]=(0,c.useState)("All"),[w,v]=(0,c.useState)([]),[N,y]=(0,c.useState)([]),[A,S]=(0,c.useState)(!0),[C,Z]=(0,c.useState)(!0),[M,L]=(0,c.useState)([]),[R,_]=(0,c.useState)(!0),k=[1,2,3,4,5,6],E=async()=>{_(!0);let e=(0,f.C)(b,N);try{let t=await m.Z.get("https://resource.candidatecollegeind.com/api/article/categories/".concat(e));console.log(t),L(t.data.data.articles),setTimeout(()=>{_(!1)},1500)}catch(e){console.error(e),Z(!1)}},D=e=>{j(e)},T=async()=>{Z(!0);try{let e=await m.Z.get("https://resource.candidatecollegeind.com/api/articles?count=8");setTimeout(()=>{v(e.data.data),Z(!1)},1500)}catch(e){console.error(e),Z(!1)}},F=async()=>{S(!0);try{let e=await m.Z.get("https://resource.candidatecollegeind.com/api/article/categories");setTimeout(()=>{y(e.data.data),S(!1)},1500)}catch(e){console.error(e),Z(!1)}};return(0,c.useEffect)(()=>{T(),F()},[]),(0,c.useEffect)(()=>{E()},[b]),(0,a.jsxs)("main",{className:"bg-primary h-full w-full",children:[(0,a.jsx)(s.wp,{active:"Articles",isDetail:!1}),(0,a.jsxs)("section",{className:"flex flex-col md:flex-row pt-28 gap-4 px-5 md:max-w-6xl md:mx-auto py-12 bg-primary md:justify-center md:items-center relative h-fit md:h-[80vh]",children:[(0,a.jsx)(n(),{src:"/decoration/article.png",width:0,height:0,className:"w-[25rem]",alt:"Article Decoration",title:"Article Decoration"}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 mb-3",children:[(0,a.jsx)("h1",{className:"font-semibold text-white text-3xl md:text-[70px] md:w-[90%] md:leading-[100%] leading-[150%]",children:"Achieve Quality Equally For All Indonesian Student."}),(0,a.jsx)("p",{className:"text-gray text-sm lg:text-base md:w-[85%]",children:"Candidate College is an Education Platform that works to facilitate students in Indonesia at home and aboard to achieve a quality education system."})]})]}),(0,a.jsx)("section",{className:"flex flex-col w-full px-5 pt-5 md:pt-10 pb-20 bg-white",children:(0,a.jsxs)("div",{className:"flex flex-col md:mx-auto md:max-w-5xl bg-white",children:[(0,a.jsx)("div",{className:"overflow-x-auto scrollbar-hide relative",children:(0,a.jsx)("div",{className:"flex flex-row gap-4 md:mt-5 mb-10 md:mb-16 overflow-x-auto overflow-y-hidden w-[1000px] h-full no-scrollbar scrollbar-hide",children:A?null==k?void 0:k.map((e,t)=>(0,a.jsx)(s.HC,{data:e,isLoading:!0,onClick:e=>j(""),active:""})):null==N?void 0:N.map((e,t)=>(0,a.jsx)(s.HC,{data:e,isLoading:!1,onClick:t=>D(e.name),active:b}))})}),(0,a.jsxs)("div",{className:"".concat("All"!=b?"flex flex-col":"hidden"),children:[(0,a.jsx)("div",{className:"flex flex-row items-center justify-between pb-6 border-b border-b-gray",children:(0,a.jsx)("h2",{className:"font-semibold text-2xl md:text-4xl text-primary",children:b})}),0==M.length?(0,a.jsx)("div",{className:"w-full h-fit py-10 flex items-center justify-center",children:(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)(n(),{src:"/decoration/empty.png",title:"Empty Article Decoration",alt:"Empty Article Decoration",width:0,height:0,className:"w-[25rem] h-[25rem] object-contain mx-auto",priority:!0}),(0,a.jsx)("p",{className:"text-gray text-base text-center",children:"No Article Available on This Category"})]})}):"All"!=b?(0,a.jsx)("div",{className:"flex flex-col gap-8 md:gap-5 mt-7 md:grid md:grid-cols-3",children:R?null==k?void 0:k.map((e,t)=>(0,a.jsx)(x.Z,{data:e,type:"Article",isLoading:!0},t)):M.reverse().map((e,t)=>(0,a.jsx)(x.Z,{data:e,type:"Article",isLoading:!1},t))}):null]}),(0,a.jsxs)("div",{className:"".concat("All"!=b?"hidden":"flex flex-col"),children:[(0,a.jsxs)("div",{className:"flex flex-row items-center justify-between pb-6 border-b border-b-gray",children:[(0,a.jsx)("h2",{className:"font-semibold text-2xl md:text-4xl text-primary",children:"Latest"}),(0,a.jsxs)(i(),{href:"/articles/latest",title:"Latest Articles",about:"Latest Articles",className:"flex flex-row items-center justify-center text-sm gap-1 cursor-pointer text-primary",children:["See all ",(0,a.jsx)("span",{className:"text-primary text-sm md:text-base",children:(0,a.jsx)(d.Z,{fontSize:"inherit",color:"inherit"})})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-5 w-full mt-7",children:[R?(0,a.jsx)(u.Z,{data:M[o],isLoading:!0}):(0,a.jsx)(u.Z,{data:M[o],isLoading:!1}),(0,a.jsx)("div",{className:"md:flex flex-row gap-4 hidden",children:C?w.slice(0,3).map((e,t)=>(0,a.jsx)(x.Z,{data:e,type:"Article",isLoading:!0},t)):w.slice(0,3).map((e,t)=>(0,a.jsx)(x.Z,{data:e,type:"Article",isLoading:!1},t))}),(0,a.jsx)("div",{className:"flex flex-row gap-1 md:hidden items-center justify-center w-full",children:w.slice(0,3).map((e,t)=>(0,a.jsx)("div",{onClick:e=>h(t),className:"flex  p-[5px] h-2 ".concat(o==t?"w-8 bg-secondary":"w-2 bg-primary"," rounded-full cursor-pointer")},t))})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-between pb-6 border-b border-b-gray mt-16",children:[(0,a.jsx)("h2",{className:"font-semibold text-2xl md:text-4xl text-primary",children:"Read Insightful Articles"}),(0,a.jsxs)(i(),{href:"/articles/read-insightful-articles",title:"Read Insightful Articles",about:"Read Insightful Articles",className:"flex flex-row items-center justify-center text-sm gap-1 cursor-pointer text-primary",children:["See all ",(0,a.jsx)("span",{className:"text-primary text-sm md:text-base",children:(0,a.jsx)(d.Z,{fontSize:"inherit",color:"inherit"})})]})]}),(0,a.jsx)("section",{className:"w-full h-full bg-white py-10 md:py-10 flex flex-col gap-9 overflow-hidden",children:(0,a.jsx)(p.tq,{slidesPerView:1,spaceBetween:10,navigation:!0,breakpoints:{0:{slidesPerView:1},1024:{slidesPerView:3}},modules:[g.W_],className:"mySwiper",children:C?null==k?void 0:k.map((e,t)=>(0,a.jsx)(p.o5,{children:(0,a.jsxs)("div",{className:"flex flex-col gap-2 rounded-xl bg-white shadow-md cursor-pointer",children:[(0,a.jsx)("div",{className:"rounded-lg w-[22rem] h-[22rem] bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsxs)("div",{className:"flex flex-col gap-2 pt-3 pb-5 relative px-5",children:[(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-2/3 rounded-lg py-3"}),(0,a.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[(0,a.jsx)("div",{className:"w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsx)("div",{className:"w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsx)("div",{className:"w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsx)("div",{className:"w-2/3 py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"})]}),(0,a.jsx)(i(),{href:"/articles",title:"Read More",about:"Read More",className:"bg-secondary text-transparent font-medium text-sm rounded-full py-3 text-center cursor-pointer mt-5 bg-gradient-to-r from-yellow-200 to-yellow-300 animate-pulse",children:"Read More"})]})]})})):null==w?void 0:w.reverse().map((e,t)=>(0,a.jsx)(p.o5,{children:(0,a.jsxs)(i(),{href:"/articles/".concat(e.slug),title:"Read More",about:"Read More",className:"flex flex-col gap-2 rounded-xl bg-white shadow-md cursor-pointer w-[22rem]",children:[(0,a.jsx)(n(),{src:"https://resource.candidatecollegeind.com/storage/".concat(e.cover),alt:e.title,title:e.title,className:"rounded-lg w-[22rem] h-[22rem] object-cover",width:0,height:0}),(0,a.jsxs)("div",{className:"flex flex-col gap-2 pt-3 pb-5 relative px-5",children:[(0,a.jsx)("h3",{className:"font-semibold text-base text-primary",children:e.title.length>33?e.title.substring(0,33)+"...":e.title}),(0,a.jsx)("p",{className:"font-normal text-sm text-gray",children:e.snippets.substring(0,150)+"..."}),(0,a.jsx)(i(),{href:"/articles/".concat(e.slug),title:"Read More",about:"Read More",className:"bg-secondary text-primary font-medium text-sm rounded-full py-3 text-center cursor-pointer mt-5",children:"Read More"})]})]})}))})})]})]})}),(0,a.jsx)(s.MV,{}),(0,a.jsx)(s.$_,{})]})}},3791:function(e,t,l){"use strict";var a=l(9268),s=l(9907),r=l(6394),i=l.n(r),c=l(5846),d=l.n(c);l(6006),t.Z=e=>{let{data:t,type:l,isLoading:r}=e;return(0,a.jsx)(a.Fragment,{children:r?(0,a.jsxs)("div",{className:"flex-col gap-2 md:items-center md:gap-2 flex",children:[(0,a.jsx)("div",{className:"w-[328px] h-[172px] rounded-xl object-cover bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsxs)("div",{className:"flex w-full gap-2 flex-col gap",children:[(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-2/3 rounded-lg py-4"}),(0,a.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[(0,a.jsx)("div",{className:"w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsx)("div",{className:"w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsx)("div",{className:"w-2/3 py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"})]}),(0,a.jsxs)("div",{className:"flex flex-row max-w-fit gap-3 text-gray",children:[(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-[3rem] rounded-lg py-3"}),(0,a.jsx)("p",{children:"|"}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-[3rem] rounded-lg py-3"})]})]})]}):(0,a.jsxs)(d(),{href:"/".concat("Article"==l?"articles":"events","/").concat(t.slug),about:t.title,title:t.title,className:"flex-col gap-2 md:items-center md:gap-2 flex md:w-[320px]",children:[(0,a.jsx)(i(),{width:100,height:180,src:"https://resource.candidatecollegeind.com/storage/".concat(t.cover_landscape),alt:t.title,title:t.title,className:"w-full h-[178px] md:h-[168px] rounded-xl object-cover",priority:!0}),(0,a.jsxs)("div",{className:"flex md:flex-1 flex-col gap",children:[(0,a.jsx)(d(),{href:"/".concat("Article"==l?"articles":"events","/").concat(t.slug),about:t.title,title:t.title,className:"font-semibold text-2xl text-primary",children:t.title.length>40?t.title.substring(0,48)+" ...":t.title}),(0,a.jsx)("p",{className:"font-normal text-sm text-gray",children:t.snippets.substring(0,170)+" ..."}),(0,a.jsxs)("p",{className:"font-normal text-xs text-gray mt-5",children:[(0,s.p6)(t.created_at)," \xa0 | \xa0 ",t.duration," min read"]})]})]})})}},1573:function(e,t,l){"use strict";var a=l(9268),s=l(9907),r=l(6394),i=l.n(r);l(6006),t.Z=e=>{let{data:t,isLoading:l}=e;return(0,a.jsx)(a.Fragment,{children:l?(0,a.jsxs)("div",{className:"flex-col md:flex-row gap-2 md:items-center md:gap-5 flex",children:[(0,a.jsx)("div",{className:"w-[650px] h-[340px] rounded-xl object-cover bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsxs)("div",{className:"md:flex w-full gap-2 flex-1 flex-col gap hidden",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-full rounded-lg py-5"}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-full rounded-lg py-5"}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-full rounded-lg py-5"}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-1/3 rounded-lg py-5"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[(0,a.jsx)("div",{className:"w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsx)("div",{className:"w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"}),(0,a.jsx)("div",{className:"w-2/3 py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"})]}),(0,a.jsxs)("div",{className:"flex flex-row max-w-fit gap-3 text-gray",children:[(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-[3rem] rounded-lg py-3"}),(0,a.jsx)("p",{children:"|"}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-[3rem] rounded-lg py-3"})]})]})]}):(0,a.jsxs)("div",{className:"flex-col md:flex-row gap-2 md:items-center md:gap-5 flex",children:[(0,a.jsx)(i(),{width:100,height:50,src:"https://resource.candidatecollegeind.com/storage/".concat(t&&t.cover_landscape),alt:t&&t.title,title:t&&t.title,className:"w-full md:w-[650px] md:h-[340px] md:flex-1 object-cover h-full rounded-xl",priority:!0}),(0,a.jsxs)("div",{className:"md:flex md:flex-1 flex-col gap-3",children:[(0,a.jsx)("h3",{className:"font-semibold text-2xl md:text-4xl text-primary",children:t&&t.title}),(0,a.jsx)("p",{className:"font-normal text-sm md:text-base text-gray",children:t&&t.snippets}),(0,a.jsxs)("p",{className:"font-normal text-xs text-gray mt-2",children:[(0,s.p6)(t&&t.created_at)," | ",t&&t.duration," min read"]})]})]})})}},5365:function(e,t,l){"use strict";l.d(t,{C:function(){return a}});let a=(e,t)=>{for(let l of t)if(e===l.name)return l.id;return 16}},9907:function(e,t,l){"use strict";l.d(t,{p6:function(){return s}});let a=e=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e],s=e=>{let t=new Date(e),l=t.getUTCDate().toString().padStart(2,"0"),s=a(t.getUTCMonth()),r=t.getUTCFullYear();return"".concat(l," ").concat(s," ").concat(r)}},2823:function(){},8003:function(){}},function(e){e.O(0,[903,906,878,253,698,744],function(){return e(e.s=210)}),_N_E=e.O()}]);