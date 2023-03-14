import{_ as f,o as n,c as a,b as t,d as i,w as u,r,a as h,L as V,m as x,R as y,F as g,l as m,D as C,E as T,t as d,e as A}from"./index-817a2b58.js";import{c as v}from"./cart-25f4ad40.js";import{P as E}from"./PaginationModal-eead0dab.js";const L="/Vite_week6/images/Products_Banner.jpg",R={},B={class:"position-relative"},D=t("img",{src:L,alt:"關於我們圖片",class:"img-fluid"},null,-1),H=t("button",{type:"button",class:"btn btn-custom_btn-color btn-lg text-white"},"享用時光",-1);function M(o,s,P,b,c,l){const _=r("router-link");return n(),a("header",null,[t("div",B,[D,i(_,{to:"/products",style:{position:"absolute",left:"50%",transform:"translateX(-50%) translateY(50%)",bottom:"60px"}},{default:u(()=>[H]),_:1})])])}const S=f(R,[["render",M]]),{VITE_API:F,VITE_PATH:N}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"qoqvuedemo",BASE_URL:"/Vite_week6/",MODE:"production",DEV:!1,PROD:!0},j={name:"ProductsView",data(){return{products:[],productId:"",page:{},productsTab:["全部","主食","早午餐","漢堡","炸物","甜點","沙拉","飲料"],isActive:"全部"}},methods:{...h(v,["addToCart","getCarts"]),...h(V,["showLoading","hideLoading"]),getProducts(o=1){this.$http.get(`${F}api/${N}/products?page=${o}`).then(s=>{this.products=s.data.products,this.page=s.data.pagination,this.hideLoading()}).catch(s=>{alert(s.response.data.message),this.hideLoading()})}},computed:{...x(v,["cart"]),productsFiltered(){return this.isActive==="全部"?this.products:this.products.filter(o=>o.category===this.isActive)}},components:{RouterView:y,ProductsHeader:S,PaginationModal:E},mounted(){this.showLoading(),this.getProducts()}},q={class:"nav nav-tabs m-5 p-3 justify-content-center flex-nowrap"},O=["onClick"],U={class:"container text-custom_medium-green"},z={class:"mt-4"},X={class:"row"},Y={class:"card rounded-3"},G=["src","alt"],J={class:"card-body"},K={class:"card-title"},Q={class:"badge bg-custom_medium-green rounded-pill fs-8"},W={class:"card-text"},Z={class:"card-footer text-center"},I=t("button",{type:"button",class:"btn btn-outline-secondary mx-4"}," 查看更多 ",-1),tt=["onClick"];function et(o,s,P,b,c,l){const _=r("RouterView"),k=r("ProductsHeader"),p=r("router-link"),w=r("PaginationModal");return n(),a("div",null,[i(_),i(k),t("ul",q,[(n(!0),a(g,null,m(c.productsTab,e=>(n(),a("li",{class:"nav-item",key:e},[t("a",{href:"#",class:C(["nav-link",{active:c.isActive===e}]),onClick:T($=>c.isActive=e,["prevent"])},d(e),11,O)]))),128))]),t("div",U,[t("div",z,[t("div",null,[t("div",X,[(n(!0),a(g,null,m(l.productsFiltered,e=>(n(),a("div",{class:"col-md-4 g-4",key:e.id},[t("div",Y,[i(p,{to:`/product/${e.id}`},{default:u(()=>[t("img",{src:e.imageUrl,class:"card-img-top rounded-3",alt:e.title,width:"200",height:"300"},null,8,G)]),_:2},1032,["to"]),t("div",J,[t("div",null,[t("h5",K,[A(d(e.title)+" ",1),t("span",Q,d(e.category),1)])]),t("p",W,"NT$ "+d(e.price),1)]),t("div",Z,[i(p,{to:`/product/${e.id}`},{default:u(()=>[I]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-outline-custom_dark-green mx-4",onClick:$=>o.addToCart(e.id)}," 加入商品 ",8,tt)])])]))),128))])]),i(w,{class:"mt-5",pages:c.page,onChangePage:l.getProducts},null,8,["pages","onChangePage"])])])])}const at=f(j,[["render",et]]);export{at as default};