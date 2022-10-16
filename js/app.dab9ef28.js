(function(){"use strict";var e={8902:function(e,t,a){var o=a(9242),r=a(3396);function l(e,t,a,o,l,s){const i=(0,r.up)("my-navbar"),n=(0,r.up)("router-view"),c=(0,r.up)("user-info-button");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r.Wm)(n),(0,r.Wm)(c,{userInfo:l.userInfo},null,8,["userInfo"])],64)}var s=a.p+"img/lb-logo.2f30d16b.jpg";const i={class:"shadow-lg accent-gray-400 px-5 sm:px-0 relative z-10"},n={class:"container mx-auto flex justify-between items-center sm:py-3 py-2"},c=(0,r._)("div",null,[(0,r._)("img",{class:"sm:w-24 w-14",src:s,alt:"LoriBlue logo"})],-1),m=(0,r._)("div",{class:"hidden sm:block"},[(0,r._)("h2",{class:"lg:text-3xl sm:text-2xl text-base font-extrabold tracking-tight text-center sm:text-left text-gray-900"}," Магазин женской обуви LoriBlue ")],-1),u=(0,r.Uk)("Catalog");function d(e,t,a,o,l,s){const d=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("nav",n,[c,m,(0,r._)("div",null,[(0,r.Wm)(d,{to:"/"},{default:(0,r.w5)((()=>[u])),_:1})])])])}var g={},p=a(89);const h=(0,p.Z)(g,[["render",d]]);var f=h;const w=(0,r._)("div",{class:"text-white"},"User",-1),b=[w];function v(e,t,a,o,l,s){const i=(0,r.up)("my-modal");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{class:"fixed left-5 bottom-5 w-14 h-14 bg-rose-400 rounded-full flex items-center justify-center",id:"show-modal",onClick:t[0]||(t[0]=e=>l.showModal=!0)},b),((0,r.wg)(),(0,r.j4)(r.lR,{to:"body"},[(0,r.Wm)(i,{userInfo:a.userInfo,show:l.showModal,onClose:t[1]||(t[1]=e=>l.showModal=!1)},null,8,["userInfo","show"])]))],64)}var x=a(7139);const y={key:0,class:"modal-mask"},_={class:"modal-wrapper"},k={class:"modal-container"},B={class:"modal-body"},j={key:0};function C(e,t,a,l,s,i){return(0,r.wg)(),(0,r.j4)(o.uT,{name:"modal"},{default:(0,r.w5)((()=>[a.show?((0,r.wg)(),(0,r.iD)("div",y,[(0,r._)("div",_,[(0,r._)("div",k,[(0,r._)("div",B,[a.userInfo?((0,r.wg)(),(0,r.iD)("div",j,[(0,r.WI)(e.$slots,"body",{},(()=>[(0,r._)("p",null,"Name: "+(0,x.zw)(a.userInfo.user.first_name),1),(0,r._)("p",null,"LastName: "+(0,x.zw)(a.userInfo.user.last_name),1),(0,r._)("p",null,"Username: "+(0,x.zw)(a.userInfo.user.username),1),(0,r._)("p",null,"UserId: "+(0,x.zw)(a.userInfo.user.id),1),(0,r._)("p",null,(0,x.zw)(a.userInfo),1)])),(0,r._)("button",{class:"modal-default-button",onClick:t[0]||(t[0]=t=>e.$emit("close"))}," OK ")])):(0,r.kq)("",!0)])])])])):(0,r.kq)("",!0)])),_:3})}var D={props:{show:Boolean,userInfo:{type:Object,required:!1}}};const I=(0,p.Z)(D,[["render",C]]);var E=I,S={props:{userInfo:{type:Object,required:!1}},components:{MyModal:E},data(){return{showModal:!1}}};const A=(0,p.Z)(S,[["render",v]]);var z=A,P={components:{MyNavbar:f,UserInfoButton:z},mounted(){let e=window.Telegram.WebApp;e.expand(),this.userInfo=e.initDataUnsafe,e.ThemeParams.bg_color,e.ThemeParams.text_color,e.ThemeParams.hint_color,e.ThemeParams.link_color,e.ThemeParams.button_color,e.ThemeParams.button_text_colorString},data(){return{userInfo:null}}};const T=(0,p.Z)(P,[["render",l]]);var W=T,M=a(2483);const $={class:"mt-10 container mx-auto px-5 sm:px-0"},L={class:"bg-white"},O={class:"xl:max-w-7xl xl:mx-auto xl:px-8"},H=(0,r._)("div",{class:"px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0"},[(0,r._)("h2",{class:"text-2xl font-extrabold tracking-tight text-center sm:text-left text-gray-900"}," Shop by Category ")],-1),Z={class:"mt-10 flow-root"},F={class:"grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4"},K={"aria-hidden":"true",class:"absolute inset-0"},Y=["src"],G=(0,r._)("span",{"aria-hidden":"true",class:"absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"},null,-1),U={class:"relative mt-auto text-center sm:text-xl text-base font-bold text-white"};function R(e,t,a,o,l,s){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",$,[(0,r._)("div",L,[(0,r._)("div",O,[H,(0,r._)("div",Z,[(0,r._)("div",null,[(0,r._)("div",F,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.categories,(t=>((0,r.wg)(),(0,r.j4)(i,{to:`${e.$route.path}${t.name.split(" ").join("-").toLowerCase()}`,key:t.name,class:"relative md:h-80 h-40 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"},{default:(0,r.w5)((()=>[(0,r._)("span",K,[(0,r._)("img",{src:t.imageSrc,alt:"",class:"w-full h-full object-center object-cover"},null,8,Y)]),G,(0,r._)("span",U,(0,x.zw)(t.name),1)])),_:2},1032,["to"])))),128))])])])])])])}const V={role:"list",class:""},q={class:"sm:w-64 flex flex-col text-center lg:w-auto"},N={class:"group relative"},J={class:"w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1"},Q=["src","alt"],X={class:"mt-4"},ee={class:"text-sm text-gray-500"},te={class:"mt-1 font-semibold text-gray-900"},ae=["href"],oe=(0,r._)("span",{class:"absolute inset-0"},null,-1),re={class:"mt-1 text-gray-900"},le=(0,r._)("h4",{class:"sr-only"},"Available colors",-1),se={role:"list",class:"mt-auto pt-4 pb-4 flex items-center justify-center space-x-3"},ie={class:"sr-only"};function ne(e,t,a,o,l,s){return(0,r.wg)(),(0,r.iD)("ul",V,[(0,r._)("li",q,[(0,r._)("div",N,[(0,r._)("div",J,[(0,r._)("img",{src:a.product.imageSrc,alt:a.product.imageAlt,class:"w-full h-full object-center object-cover group-hover:opacity-75"},null,8,Q)]),(0,r._)("div",X,[(0,r._)("p",ee,(0,x.zw)(a.product.color),1),(0,r._)("h3",te,[(0,r._)("a",{href:a.product.href},[oe,(0,r.Uk)(" "+(0,x.zw)(a.product.name)+" "+(0,x.zw)(e.$route.params.shoestype),1)],8,ae)]),(0,r._)("p",re,(0,x.zw)(a.product.price),1)])]),le,(0,r._)("ul",se,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.product.availableColors,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.name,class:"w-4 h-4 rounded-full border border-black border-opacity-10",style:(0,x.j5)({backgroundColor:e.colorBg})},[(0,r._)("span",ie,(0,x.zw)(e.name),1)],4)))),128))])])])}var ce={props:{product:{type:Object,required:!1}}};const me=(0,p.Z)(ce,[["render",ne]]);var ue=me,de={name:"CatalogView",components:{CategoryItem:ue},data(){return{categories:[{name:"New Arrivals",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg"},{name:"Productivity",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg"},{name:"Workspace",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg"},{name:"Accessories",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg"},{name:"Sale",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg"},{name:"Sale",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg"},{name:"Sale",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg"},{name:"Sale",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg"}]}}};const ge=(0,p.Z)(de,[["render",R]]);var pe=ge;const he={class:"mt-10 container mx-auto px-5 sm:px-0"},fe=(0,r._)("i",{class:"fa-solid fa-arrow-left-long cursor-pointer"},null,-1),we=[fe],be={class:"grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4"};function ve(e,t,a,o,l,s){const i=(0,r.up)("Category-item"),n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",he,[(0,r._)("div",{onClick:t[0]||(t[0]=(...e)=>s.back&&s.back(...e))},we),(0,r._)("div",be,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.products,(t=>((0,r.wg)(),(0,r.j4)(n,{to:`${e.$route.path}/${t.name.split(" ").join("-").toLowerCase()}`,key:t.id},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{product:t},null,8,["product"])])),_:2},1032,["to"])))),128))])])}var xe={name:"CatalogItems",components:{CategoryItem:ue},data(){return{products:[{id:1,name:"Machined Pen1",color:"Black",price:"$35",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",imageAlt:"Black machined steel pen with hexagonal grip and small white logo at top.",availableColors:[{name:"Black",colorBg:"#111827"},{name:"Brass",colorBg:"#FDE68A"},{name:"Chrome",colorBg:"#E5E7EB"}]},{id:2,name:"Machined Pen2",color:"Black",price:"$35",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",imageAlt:"Black machined steel pen with hexagonal grip and small white logo at top.",availableColors:[{name:"Black",colorBg:"#111827"},{name:"Brass",colorBg:"#FDE68A"},{name:"Chrome",colorBg:"#E5E7EB"}]},{id:3,name:"Machined Pen3",color:"Black",price:"$35",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",imageAlt:"Black machined steel pen with hexagonal grip and small white logo at top.",availableColors:[{name:"Black",colorBg:"#111827"},{name:"Brass",colorBg:"#FDE68A"},{name:"Chrome",colorBg:"#E5E7EB"}]},{id:4,name:"Machined Pen4",color:"Black",price:"$35",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",imageAlt:"Black machined steel pen with hexagonal grip and small white logo at top.",availableColors:[{name:"Black",colorBg:"#111827"},{name:"Brass",colorBg:"#FDE68A"},{name:"Chrome",colorBg:"#E5E7EB"}]},{id:5,name:"Machined Pen4",color:"Black",price:"$35",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",imageAlt:"Black machined steel pen with hexagonal grip and small white logo at top.",availableColors:[{name:"Black",colorBg:"#111827"},{name:"Brass",colorBg:"#FDE68A"},{name:"Chrome",colorBg:"#E5E7EB"}]},{id:6,name:"Machined Pen4",color:"Black",price:"$35",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",imageAlt:"Black machined steel pen with hexagonal grip and small white logo at top.",availableColors:[{name:"Black",colorBg:"#111827"},{name:"Brass",colorBg:"#FDE68A"},{name:"Chrome",colorBg:"#E5E7EB"}]},{id:7,name:"Machined Pen4",color:"Black",price:"$35",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",imageAlt:"Black machined steel pen with hexagonal grip and small white logo at top.",availableColors:[{name:"Black",colorBg:"#111827"},{name:"Brass",colorBg:"#FDE68A"},{name:"Chrome",colorBg:"#E5E7EB"}]},{id:8,name:"Machined Pen4",color:"Black",price:"$35",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",imageAlt:"Black machined steel pen with hexagonal grip and small white logo at top.",availableColors:[{name:"Black",colorBg:"#111827"},{name:"Brass",colorBg:"#FDE68A"},{name:"Chrome",colorBg:"#E5E7EB"}]}]}},methods:{back(){this.$router.go(-1)}}};const ye=(0,p.Z)(xe,[["render",ve]]);var _e=ye;const ke={class:"bg-white"},Be={class:"max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8"},je=(0,r._)("i",{class:"fa-solid fa-arrow-left-long cursor-pointer"},null,-1),Ce=[je],De={class:"lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start"},Ie={class:"hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none"},Ee={class:"sr-only"},Se={class:"absolute inset-0 rounded-md overflow-hidden"},Ae=["src"],ze=["src","alt"],Pe={class:"mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0"},Te={class:"text-3xl font-extrabold tracking-tight text-gray-900"},We={class:"mt-3"},Me=(0,r._)("h2",{class:"sr-only"},"Product information",-1),$e={class:"text-3xl text-gray-900"},Le={class:"mt-3"},Oe=(0,r._)("h3",{class:"sr-only"},"Reviews",-1),He={class:"flex items-center"},Ze={class:"flex items-center"},Fe={class:"sr-only"},Ke={class:"mt-6"},Ye=(0,r._)("h3",{class:"sr-only"},"Description",-1),Ge=["innerHTML"],Ue={class:"mt-6"},Re=(0,r._)("h3",{class:"text-sm text-gray-600"},"Color",-1),Ve=(0,r.Uk)(" Choose a color "),qe={class:"flex items-center space-x-3"},Ne={class:"mt-10 flex sm:flex-col1"},Je=(0,r._)("button",{type:"submit",class:"max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"}," Add to bag ",-1),Qe={type:"button",class:"ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"},Xe=(0,r._)("span",{class:"sr-only"},"Add to favorites",-1),et={"aria-labelledby":"details-heading",class:"mt-12 px-5"},tt=(0,r._)("h2",{id:"details-heading",class:"sr-only"},"Additional details",-1),at={class:"border-t divide-y divide-gray-200"},ot={class:"ml-6 flex items-center"},rt={class:"list-disc",role:"list"};function lt(e,t,a,o,l,s){const i=(0,r.up)("Tab"),n=(0,r.up)("TabList"),c=(0,r.up)("TabPanel"),m=(0,r.up)("TabPanels"),u=(0,r.up)("TabGroup"),d=(0,r.up)("StarIcon"),g=(0,r.up)("RadioGroupLabel"),p=(0,r.up)("RadioGroupOption"),h=(0,r.up)("RadioGroup"),f=(0,r.up)("HeartIcon"),w=(0,r.up)("PlusIcon"),b=(0,r.up)("MinusIcon"),v=(0,r.up)("DisclosureButton"),y=(0,r.up)("DisclosurePanel"),_=(0,r.up)("Disclosure");return(0,r.wg)(),(0,r.iD)("div",ke,[(0,r._)("div",Be,[(0,r._)("div",{onClick:t[0]||(t[0]=(...e)=>s.back&&s.back(...e))},Ce),(0,r._)("div",De,[(0,r.Wm)(u,{as:"div",class:"flex flex-col-reverse"},{default:(0,r.w5)((()=>[(0,r._)("div",Ie,[(0,r.Wm)(n,{class:"grid grid-cols-4 gap-6"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.product.images,(e=>((0,r.wg)(),(0,r.j4)(i,{key:e.id,class:"relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"},{default:(0,r.w5)((({selected:t})=>[(0,r._)("span",Ee,(0,x.zw)(e.name),1),(0,r._)("span",Se,[(0,r._)("img",{src:e.src,alt:"",class:"w-full h-full object-center object-cover"},null,8,Ae)]),(0,r._)("span",{class:(0,x.C_)([t?"ring-indigo-500":"ring-transparent","absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"]),"aria-hidden":"true"},null,2)])),_:2},1024)))),128))])),_:1})]),(0,r.Wm)(m,{class:"w-full aspect-w-1 aspect-h-1"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.product.images,(e=>((0,r.wg)(),(0,r.j4)(c,{key:e.id},{default:(0,r.w5)((()=>[(0,r._)("img",{src:e.src,alt:e.alt,class:"w-full h-full object-center object-cover sm:rounded-lg"},null,8,ze)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,r._)("div",Pe,[(0,r._)("h1",Te,(0,x.zw)(o.product.name),1),(0,r._)("div",We,[Me,(0,r._)("p",$e,(0,x.zw)(o.product.price),1)]),(0,r._)("div",Le,[Oe,(0,r._)("div",He,[(0,r._)("div",Ze,[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)([0,1,2,3,4],(e=>(0,r.Wm)(d,{key:e,class:(0,x.C_)([o.product.rating>e?"text-indigo-500":"text-gray-300","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"]))),64))]),(0,r._)("p",Fe,(0,x.zw)(o.product.rating)+" out of 5 stars",1)])]),(0,r._)("div",Ke,[Ye,(0,r._)("div",{class:"text-base text-gray-700 space-y-6",innerHTML:o.product.description},null,8,Ge)]),(0,r._)("form",Ue,[(0,r._)("div",null,[Re,(0,r.Wm)(h,{modelValue:o.selectedColor,"onUpdate:modelValue":t[1]||(t[1]=e=>o.selectedColor=e),class:"mt-2"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{class:"sr-only"},{default:(0,r.w5)((()=>[Ve])),_:1}),(0,r._)("div",qe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.product.colors,(e=>((0,r.wg)(),(0,r.j4)(p,{as:"template",key:e.name,value:e},{default:(0,r.w5)((({active:t,checked:a})=>[(0,r._)("div",{class:(0,x.C_)([e.selectedColor,t&&a?"ring ring-offset-1":"",!t&&a?"ring-2":"","-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"])},[(0,r.Wm)(g,{as:"p",class:"sr-only"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,x.zw)(e.name),1)])),_:2},1024),(0,r._)("span",{"aria-hidden":"true",class:(0,x.C_)([e.bgColor,"h-8 w-8 border border-black border-opacity-10 rounded-full"])},null,2)],2)])),_:2},1032,["value"])))),128))])])),_:1},8,["modelValue"])]),(0,r._)("div",Ne,[Je,(0,r._)("button",Qe,[(0,r.Wm)(f,{class:"h-6 w-6 flex-shrink-0","aria-hidden":"true"}),Xe])])]),(0,r._)("section",et,[tt,(0,r._)("div",at,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.product.details,(e=>((0,r.wg)(),(0,r.j4)(_,{as:"div",key:e.name},{default:(0,r.w5)((({open:t})=>[(0,r._)("h3",null,[(0,r.Wm)(v,{class:"group relative w-full py-6 flex justify-between items-center text-left"},{default:(0,r.w5)((()=>[(0,r._)("span",{class:(0,x.C_)([t?"text-indigo-600":"text-gray-900","text-sm font-medium"])},(0,x.zw)(e.name),3),(0,r._)("span",ot,[t?((0,r.wg)(),(0,r.j4)(b,{key:1,class:"block h-6 w-6 text-indigo-400 group-hover:text-indigo-500","aria-hidden":"true"})):((0,r.wg)(),(0,r.j4)(w,{key:0,class:"block h-6 w-6 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}))])])),_:2},1024)]),(0,r.Wm)(y,{as:"div",class:"pb-6 prose prose-sm"},{default:(0,r.w5)((()=>[(0,r._)("ul",rt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.items,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e},(0,x.zw)(e),1)))),128))])])),_:2},1024)])),_:2},1024)))),128))])])])])])])}var st=a(4870),it=a(2026),nt=a(7659),ct=a(4253),mt=a(4421),ut=a(8222),dt=a(8487),gt=a(6804);const pt={name:"Zip Tote Basket",price:"$140",rating:4,images:[{id:1,name:"Angled view",src:"https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",alt:"Angled front view with bag zipped and handles upright."},{id:1,name:"Angled view",src:"https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",alt:"Angled front view with bag zipped and handles upright."},{id:1,name:"Angled view",src:"https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",alt:"Angled front view with bag zipped and handles upright."},{id:1,name:"Angled view",src:"https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",alt:"Angled front view with bag zipped and handles upright."}],colors:[{name:"Washed Black",bgColor:"bg-gray-700",selectedColor:"ring-gray-700"},{name:"White",bgColor:"bg-white",selectedColor:"ring-gray-400"},{name:"Washed Gray",bgColor:"bg-gray-500",selectedColor:"ring-gray-500"}],description:"\n    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>\n  ",details:[{name:"Features",items:["Multiple strap configurations","Spacious interior with top zip","Leather handle and tabs","Interior dividers","Stainless strap loops","Double stitched construction","Water-resistant"]},{name:"Features2",items:["Multiple strap configurations","Spacious interior with top zip","Leather handle and tabs","Interior dividers","Stainless strap loops","Double stitched construction","Water-resistant"]},{name:"Features3",items:["Multiple strap configurations","Spacious interior with top zip","Leather handle and tabs","Interior dividers","Stainless strap loops","Double stitched construction","Water-resistant"]},{name:"Features4",items:["Multiple strap configurations","Spacious interior with top zip","Leather handle and tabs","Interior dividers","Stainless strap loops","Double stitched construction","Water-resistant"]}]};var ht={components:{Disclosure:it.pJ,DisclosureButton:it.lG,DisclosurePanel:it.V2,RadioGroup:nt.Ee,RadioGroupLabel:nt.Nt,RadioGroupOption:nt.$v,Tab:ct.OK,TabGroup:ct.v0,TabList:ct.td,TabPanel:ct.x4,TabPanels:ct.nP,HeartIcon:ut.Z,MinusIcon:dt.Z,PlusIcon:gt.Z,StarIcon:mt.Z},setup(){const e=(0,st.iH)(pt.colors[0]);return{product:pt,selectedColor:e}},methods:{back(){this.$router.go(-1)}}};const ft=(0,p.Z)(ht,[["render",lt]]);var wt=ft;const bt=[{path:"/",name:"CatalogView",component:pe},{path:"/:shoestype",name:"CatalogItems",component:_e},{path:"/:shoestype/:item",name:"ItemView",component:wt}],vt=(0,M.p7)({history:(0,M.r5)("/LoriBlue/"),routes:bt,scrollBehavior(){return{top:0}}});var xt=vt,yt=a(65),_t=(0,yt.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(W).use(_t).use(xt).mount("#app")}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,o,r,l){if(!o){var s=1/0;for(m=0;m<e.length;m++){o=e[m][0],r=e[m][1],l=e[m][2];for(var i=!0,n=0;n<o.length;n++)(!1&l||s>=l)&&Object.keys(a.O).every((function(e){return a.O[e](o[n])}))?o.splice(n--,1):(i=!1,l<s&&(s=l));if(i){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[o,r,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/LoriBlue/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,l,s=o[0],i=o[1],n=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(n)var m=n(a)}for(t&&t(o);c<s.length;c++)l=s[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(m)},o=self["webpackChunkLoriBlue"]=self["webpackChunkLoriBlue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(8902)}));o=a.O(o)})();
//# sourceMappingURL=app.dab9ef28.js.map