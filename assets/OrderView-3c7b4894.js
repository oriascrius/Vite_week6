import{_ as w,a as u,L as v,m as f,c as d,b as t,F as h,y as p,t as n,d as m,w as b,r as C,o as l,g as y,J as k}from"./index-4a114324.js";import{c as g}from"./cart-2e10908d.js";const x={name:"CartView",data(){return{couponCode:"",loadingItem:""}},mounted(){this.getCarts()},methods:{...u(g,["addToCart","getCarts","updateCartItem","deleteItem","deleteCars","addCouponCode"]),...u(v,["showLoading","hideLoading"])},computed:{...f(g,["cart"])}},$={class:"container text-custom_medium-green"},V={key:0,class:"row"},L=t("h3",{class:"mt-3 h4 fw-bold"},"購物車清單",-1),N={class:"col-md-8 mt-3"},S={class:"table text-custom_medium-green"},T=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"border-0 ps-0"},"商品名稱"),t("th",{scope:"col",class:"border-0"},"商品數量"),t("th",{scope:"col",class:"border-0"},"商品小計"),t("th",{scope:"col",class:"border-0"})])],-1),B={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},F=["src","alt"],U={class:"mb-0 fw-bold ms-3 d-inline-block"},j={class:"border-0 align-middle",style:{"max-width":"160px"}},q={class:"input-group pe-5"},D=t("div",{class:"input-group-prepend"},null,-1),A={class:"input-group input-group-sm"},E=["onUpdate:modelValue","onChange","disabled"],J=["value"],M={class:"ms-2"},O={class:"border-0 align-middle"},X={class:"mb-0 ms-auto"},z={class:"border-0 align-middle"},G=["onClick","disabled"],H={class:"col-md-4"},K={class:"border p-4 mb-4"},P=t("h3",{class:"h4 fw-bold mb-4"},"訂單細節",-1),Q={class:"table text-custom_medium-green border-bottom"},R=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"總計",-1),W={class:"text-end border-0 px-0 pt-4"},Y={class:"d-flex justify-content-between mt-4"},Z=t("p",{class:"mb-0 h4 fw-bold"},"折扣價",-1),I={class:"mb-0 h4 fw-bold"},tt=t("button",{type:"button",class:"btn btn-custom_btn-color text-white w-100 mt-4"}," 確認購物車 ",-1),st={class:"text-center mt-6"},et=["disabled"],ot={key:1,class:"row text-center"},dt=t("h4",{class:"text-custom_medium-green"},"購物車目前空空如也～趕緊將喜歡的餐點加入其中吧！",-1),nt=t("button",{class:"mt-4 btn btn-custom_btn-color text-white w-25"},"前往選購",-1);function lt(o,i,ct,it,c,at){var r,_;const a=C("router-link");return l(),d("div",$,[(r=o.cart.carts)!=null&&r.length?(l(),d("div",V,[L,t("div",N,[t("table",S,[T,t("tbody",null,[(l(!0),d(h,null,p(o.cart.carts,s=>(l(),d("tr",{key:s.id},[t("th",B,[t("img",{src:s.product.imageUrl,alt:s.title,style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,F),t("p",U,n(s.product.title),1)]),t("td",j,[t("div",q,[D,t("div",A,[y(t("select",{name:"",id:"","onUpdate:modelValue":e=>s.qty=e,onChange:e=>o.updateCartItem(s),disabled:s.id===c.loadingItem},[(l(),d(h,null,p(20,e=>t("option",{value:e,key:e+"1233"},n(e),9,J)),64))],40,E),[[k,s.qty]]),t("div",M,n(s.product.unit),1)])])]),t("td",O,[t("p",X,"NT$ "+n(s.product.price),1)]),t("td",z,[t("button",{type:"button",class:"btn btn-sm btn-outline-custom_red",onClick:e=>o.deleteItem(s),disabled:s.id===c.loadingItem}," X ",8,G)])]))),128))])])]),t("div",H,[t("div",K,[P,t("table",Q,[t("tbody",null,[t("tr",null,[R,t("td",W,"NT$ "+n(o.cart.total),1)])])]),t("div",Y,[Z,t("p",I,"NT$ "+n(o.cart.final_total),1)]),m(a,{to:"/orderForm"},{default:b(()=>[tt]),_:1})]),t("div",st,[t("button",{class:"btn btn-outline-custom_red",type:"button",onClick:i[0]||(i[0]=s=>{var e;return o.deleteCars((e=o.cart)==null?void 0:e.carts)}),disabled:((_=o.cart)==null?void 0:_.carts.id)===c.loadingItem}," 清空購物車 ",8,et)])])])):(l(),d("div",ot,[dt,m(a,{to:"/products",class:""},{default:b(()=>[nt]),_:1})]))])}const ut=w(x,[["render",lt]]);export{ut as default};
