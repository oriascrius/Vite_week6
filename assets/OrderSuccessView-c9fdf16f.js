import{_ as d}from"./BusinessCard_reverse-9a66f03c.js";import{_ as n,c as i,b as t,d as _,w as h,F as l,e,r as p,o as u}from"./index-5c1680c7.js";const{VITE_API:r,VITE_PATH:c}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"qoqvuedemo",BASE_URL:"/Vite_week6/",MODE:"production",DEV:!1,PROD:!0},m={data(){return{order:{products:[],user:{}}}},methods:{getOrder(){this.$http.get(`${r}api/${c}/order/${this.orderId}`).then(o=>{const{order:s}=o.data;this.order=s}).catch(()=>{})},payOrder(){this.$http.post(`${r}api/${c}/pay/${this.orderId}`).then(()=>{this.getOrder()}).catch(()=>{})}},mounted(){this.orderId=this.$route.params.orderId,this.getOrder()}},g=t("header",{style:{width:"100%",height:"768px","background-image":"url(./images/ssuccess_header.jpg)","background-repeat":"no-repeat","background-position":"left top","background-size":"cover",position:"relative"},class:"vh-100 mb-6"},null,-1),b={class:"container"},$={class:"row justify-content-between align-items-center"},f={class:"col-md-6"},v=t("h2",{class:"text-custom_btn-color fw-bold h4"},"訂購成功",-1),k=t("p",{class:"text-muted mt-3"},[e("謝謝您的訂購，期待再次為您服務"),t("br"),e("繼續選購請點擊回到首頁")],-1),I=t("div",{class:"col-md-6"},[t("img",{src:d,alt:"名片圖"})],-1);function V(o,s,x,w,E,T){const a=p("router-link");return u(),i(l,null,[g,t("div",b,[t("div",$,[t("div",f,[v,k,_(a,{to:"/",class:"btn btn-outline-custom_btn-color mt-3"},{default:h(()=>[e("Back To Home")]),_:1})]),I])])],64)}const B=n(m,[["render",V]]);export{B as default};
