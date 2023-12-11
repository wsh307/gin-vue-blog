import{r as g,l as b,s as w,b as l,c,f as e,I as v,P as x,E as y,o as k,A as $,q as U,h as I,z as S,i as B,e as z,N as C,F as D,H as F}from"./index.992b8db2.js";import{_ as N}from"./BannerPage.d876fa47.js";import"./AppFooter.4a4bf310.js";import"./ULoading.873d0242.js";const V={class:"flex items-center justify-center bg-gray-100 font-sans"},O={for:"dropzone-file",class:"mx-auto max-w-[300px] w-full cursor-pointer items-center border-1 border-blue-400 rounded-xl border-dashed bg-white p-2 text-center"},R={key:0,class:"group relative"},j=["src"],q=e("div",{class:"absolute bottom-0 left-0 right-0 top-0 f-c-c cursor-pointer"},[e("button",{class:"i-mdi:upload pointer-events-none inline-block text-[50px] text-white opacity-35 duration-200 group-hover:opacity-80"})],-1),A={key:1,class:"f-c-c lg:h-[160px] lg:w-[160px]"},E=e("div",{class:"flex flex-col items-center"},[e("span",{class:"i-mdi:upload text-[58px] text-blue-500"}),e("span",{class:"text-blue-400"}," \u70B9\u51FB\u4E0A\u4F20\u6587\u4EF6")],-1),M=[E],P={__name:"UploadOne",props:{preview:{type:String,default:""}},emits:["update:preview"],setup(m,{emit:s}){const d=m,o=s,a=g(d.preview),n=b(()=>w(a.value)),r=g(null);async function t(){var _,f;const i=r.value.files[0],p=new FormData;p.append("file",i);try{const{token:h}=v(),u=await(await fetch("/api/front/upload",{method:"POST",headers:{Authorization:`Bearer ${h}`},body:p})).json();if(u.code!==0){(_=window.$message)==null||_.error(u.message);return}a.value=u.data,o("update:preview",a)}catch{(f=window.$message)==null||f.error("\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25")}}return(i,p)=>(l(),c("main",V,[e("label",O,[a.value?(l(),c("div",R,[e("img",{class:"lg:h-[160px] lg:w-[160px]",src:n.value,alt:"user avatar"},null,8,j),q])):(l(),c("div",A,M)),e("input",{id:"dropzone-file",ref_key:"fileRef",ref:r,type:"file",class:"hidden",onChange:t},null,544)])]))}},T=e("p",{class:"mb-6 text-xl font-bold"}," \u57FA\u672C\u4FE1\u606F ",-1),H={class:"grid grid-cols-12 gap-4"},J={class:"col-span-4 f-c-c"},L={class:"col-span-8 lg:col-span-7"},G={class:"my-6 space-y-3"},K={class:"mb-2"},Q=["onUpdate:modelValue","placeholder"],W=e("div",{class:"col-span-0 lg:col-span-1"},null,-1),te={__name:"index",setup(m){const s=v(),d=x(),o=y({avatar:s.avatar,nickname:s.nickname,intro:s.intro,website:s.website,email:s.email});k(async()=>{await s.getUserInfo(),s.userId||d.push("/")});async function a(){var n;try{await F.updateUser(o),(n=window.$message)==null||n.success("\u4FEE\u6539\u6210\u529F!"),s.getUserInfo()}catch{}}return(n,r)=>(l(),$(N,{label:"user",title:"\u4E2A\u4EBA\u4E2D\u5FC3",card:""},{default:U(()=>[T,e("div",H,[e("div",J,[I(P,{preview:o.avatar,"onUpdate:preview":r[0]||(r[0]=t=>o.avatar=t)},null,8,["preview"])]),e("div",L,[e("div",G,[(l(),c(D,null,S([{label:"\u6635\u79F0",key:"nickname"},{label:"\u4E2A\u4EBA\u7F51\u7AD9",key:"website"},{label:"\u7B80\u4ECB",key:"intro"},{label:"\u90AE\u7BB1",key:"email"}],t=>e("div",{key:t.label},[e("div",K,B(t.label),1),z(e("input",{"onUpdate:modelValue":i=>o[t.key]=i,required:"",placeholder:`\u8BF7\u8F93\u5165${t.label}`,class:"block w-full border-0 rounded-md p-2 text-gray-900 shadow-sm outline-none ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-emerald"},null,8,Q),[[C,o[t.key]]])])),64))]),e("button",{class:"the-button mt-2",onClick:a}," \u4FEE\u6539 ")]),W])]),_:1}))}};export{te as default};