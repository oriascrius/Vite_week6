import{_ as y,a as h,L as k,m as C,J as E,c as u,b as e,d as a,w as v,F as T,l as S,t as i,f as g,v as w,g as F,r as c,o as p,D as m}from"./index-5c1680c7.js";import{c as _}from"./cart-cfcbe818.js";const{VITE_API:N,VITE_PATH:P}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"qoqvuedemo",BASE_URL:"/Vite_week6/",MODE:"production",DEV:!1,PROD:!0},U={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{isPhone(o){return/^(09)[0-9]{8}$/.test(o)?!0:"請輸入行動電話"},sendOrder(){this.$http.post(`${N}api/${P}/order`,{data:this.form}).then(o=>{const{orderId:s}=o.data;this.$swal.fire({toast:!0,position:"top",icon:"success",title:"送出訂單成功",showConfirmButton:!1,timer:1500}),this.$refs.form.resetForm(),this.form.message="",this.$router.push(`/orderPay/${s}`)}).catch(()=>{this.hideLoading(),this.$swal.fire({toast:!0,position:"top",icon:"error",title:"購物車沒東西唷!",showConfirmButton:!1,timer:1500})})},...h(k,["showLoading","hideLoading"]),...h(_,["getCarts","addCouponCode"])},computed:{...C(_,["cart","messages"]),...E(_,["couponCode"])},mounted(){this.getCarts()}},L={class:"container text-custom_medium-green"},q=F('<div class="row justify-content-center"><div class="col-md-10"><nav class="navbar navbar-expand-lg navbar-light px-0"><ul class="list-unstyled mb-0 ms-md-auto d-flex align-items-center justify-content-between justify-content-md-end w-100 mt-md-0 mt-4"><li class="me-md-6 me-3 position-relative custom-step-line"><i class="fas fa-check-circle d-md-inline d-block text-center"></i><span class="text-nowrap">購物車</span></li><li class="me-md-6 me-3 position-relative custom-step-line"><i class="fas fa-check-circle d-md-inline d-block text-center"></i><span class="text-nowrap">表單確認</span></li><li><i class="fas fa-dot-circle d-md-inline d-block text-center"></i><span class="text-nowrap">訂購成功</span></li></ul></nav></div></div><h3 class="py-3 h4 fw-bold">訂購表單</h3>',2),A={class:"row pb-5 g-6"},B={class:"mb-3"},D=e("label",{for:"email",class:"form-label"},"Email",-1),j={class:"mb-3"},O=e("label",{for:"name",class:"form-label"},"訂購姓名",-1),$={class:"mb-3"},M=e("label",{for:"tel",class:"form-label"},"訂購電話",-1),H={class:"mb-3"},I=e("label",{for:"address",class:"form-label"},"訂購地址",-1),R={class:"mb-3"},z=e("label",{for:"message",class:"form-label"},"想告訴我們",-1),J={class:"row text-center"},W={class:"col-6"},G=e("button",{type:"button",class:"btn btn-custom_btn-color text-white mt-4"}," 回購物車 ",-1),K=e("div",{class:"col-6"},[e("button",{type:"submit",class:"btn btn-custom_btn-color text-white mt-4"},"送出訂單")],-1),Q={class:"col-md-6"},X={class:"border border-custom_medium-green p-4 mb-4"},Y=["src","alt"],Z={class:"w-100"},ee={class:"d-flex justify-content-between"},se={class:"mb-0 fw-bold"},te={class:"mb-0"},oe={class:"mb-0 fw-bold"},le={class:"table mt-4 p-2 border-top border-bottom"},ae={class:"text-custom_medium-green"},ne=e("th",{scope:"row",class:"border-0 px-0 pt-4"},"小計",-1),ie={class:"text-end border-0 px-0 pt-4"},de={class:"list-unstyled mt-4"},re={class:"input-group w-100"},ce={class:"input-group-append"},me=e("i",{class:"bi bi-gift"},null,-1),ue=[me],pe={class:"table mt-4 p-2"},_e={class:"text-custom_medium-green"},be=e("th",{scope:"row",class:"border-0 px-0 pt-4 h4"},"總計",-1),fe={class:"text-end border-0 px-0 pt-4"};function he(o,s,ve,ge,l,b){var f;const d=c("Field"),r=c("ErrorMessage"),x=c("router-link"),V=c("Form");return p(),u("div",L,[q,e("div",A,[a(V,{ref:"form",class:"col-md-6",onSubmit:b.sendOrder},{default:v(({errors:t})=>[e("div",B,[D,a(d,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=n=>l.form.user.email=n)},null,8,["class","modelValue"]),a(r,{name:"email",class:"invalid-feedback"})]),e("div",j,[O,a(d,{id:"name",name:"姓名",type:"text",class:m(["form-control",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=n=>l.form.user.name=n)},null,8,["class","modelValue"]),a(r,{name:"姓名",class:"invalid-feedback"})]),e("div",$,[M,a(d,{id:"tel",name:"電話",type:"tel",class:m(["form-control",{"is-invalid":t.電話}]),placeholder:"請輸入電話",rules:b.isPhone,modelValue:l.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=n=>l.form.user.tel=n)},null,8,["class","rules","modelValue"]),a(r,{name:"電話",class:"invalid-feedback"})]),e("div",H,[I,a(d,{id:"address",name:"地址",type:"text",class:m(["form-control",{"is-invalid":t.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=n=>l.form.user.address=n)},null,8,["class","modelValue"]),a(r,{name:"地址",class:"invalid-feedback"})]),e("div",R,[z,g(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=n=>l.form.message=n)},null,512),[[w,l.form.message]])]),e("div",J,[e("div",W,[a(x,{to:"/cart"},{default:v(()=>[G]),_:1})]),K])]),_:1},8,["onSubmit"]),e("div",Q,[e("div",X,[(p(!0),u(T,null,S(o.cart.carts,t=>(p(),u("div",{class:"d-flex py-2",key:t.id},[e("img",{src:t.product.imageUrl,alt:t.total,class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,Y),e("div",Z,[e("div",ee,[e("p",se,i(t.product.title),1),e("p",te,"NT$ "+i(t.total),1)]),e("p",oe,"x"+i(t.qty),1)])]))),128)),e("table",le,[e("tbody",null,[e("tr",ae,[ne,e("td",ie,"NT$ "+i(o.cart.total),1)])])]),e("ul",de,[e("li",re,[g(e("input",{type:"text",class:"form-control","onUpdate:modelValue":s[5]||(s[5]=t=>o.couponCode=t),placeholder:"輸入優惠碼可獲得折扣唷"},null,512),[[w,o.couponCode]]),e("div",ce,[e("button",{class:"btn btn-outline-dark",type:"button",onClick:s[6]||(s[6]=t=>o.addCouponCode(o.couponCode))},ue)])]),e("table",pe,[e("tbody",null,[e("tr",_e,[be,e("td",fe,"NT$ "+i((f=o.messages.data)==null?void 0:f.final_total),1)])])])])])])])])}const Ve=y(U,[["render",he]]);export{Ve as default};
