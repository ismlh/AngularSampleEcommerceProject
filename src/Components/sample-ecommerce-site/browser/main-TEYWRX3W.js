import{a as K}from"./chunk-OZX33LC5.js";import{a as j,c as z,d as B,e as W,f as $}from"./chunk-WU6JYLZ5.js";import{a as q}from"./chunk-CSMQTRKU.js";import{a as H,b as J,e as Q,g as U,l as Z}from"./chunk-QNAUOHVV.js";import{a as G}from"./chunk-GJFPVFQ4.js";import{b as L,c as R}from"./chunk-3QCEBEYH.js";import{Ea as C,Ga as m,Ia as r,Ja as i,Ka as _,La as I,Ma as k,Na as P,Oa as v,Pa as c,Ra as a,Sa as w,Ta as M,Ua as E,V as s,Va as N,Wa as T,Ya as u,ca as g,da as f,fb as D,ra as O,sb as A,tb as V,ua as d,va as b,wb as F}from"./chunk-N3C7RMIE.js";function nt(e,n){if(e&1){let t=P();r(0,"div",14)(1,"input",15),T("ngModelChange",function(p){g(t);let l=c(3);return N(l.amount,p)||(l.amount=p),f(p)}),i(),r(2,"button",16),v("click",function(){g(t);let p=c(2).$implicit,l=c();return f(l.addToCart(p))}),a(3,"Add"),i()()}if(e&2){let t=c(3);d(),E("ngModel",t.amount)}}function ot(e,n){if(e&1){let t=P();r(0,"button",17),v("click",function(){g(t);let p=c(2).$implicit,l=c();return f(l.addToCartButton(p))}),a(1,"Add To Cart"),i()}}function rt(e,n){if(e&1){let t=P();r(0,"div",4)(1,"div",5)(2,"img",6),v("click",function(){g(t);let p=c().$implicit,l=c();return f(l.goToProductDetails(p.id))}),i(),r(3,"div",7)(4,"h4",8),a(5),i(),r(6,"p",9),a(7),i(),r(8,"p",10),a(9),i(),C(10,nt,4,1,"div",11),r(11,"div",12),C(12,ot,2,0,"button",13),r(13,"span"),a(14),i()()()()()}if(e&2){let t=c().$implicit,o=c();d(2),m("src",t.image,O),d(3),w(t.title),d(2),M(" Category : ",t==null?null:t.category,""),d(2),w(t.description),d(),m("ngIf",o.selectedProduct&&o.selectedProduct.id===t.id),d(2),m("ngIf",!o.selectedProduct||o.selectedProduct.id!==t.id),d(2),M("",t.price," L.E")}}function it(e,n){if(e&1&&(I(0),C(1,rt,15,7,"div",3),k()),e&2){let t=n.$implicit,o=c();d(),m("ngIf",o.reciviedCatName==="all"||t.category===o.reciviedCatName)}}var h=class e{constructor(n,t,o){this.prdService=n;this._router=t;this.cartProductsSer=o;this.cartProducts=this.cartProductsSer.getAllCarts()}products;reciviedCatName="all";cartProducts=[];amount=1;selectedProduct;ngOnInit(){this.prdService.getAllProducts().subscribe(n=>{this.products=n})}catNameData(n){this.reciviedCatName=n}addToCartButton(n){this.selectedProduct=n}addToCart(n){if("cart"in localStorage)if(this.cartProducts?.find(o=>o.product.id==n.id))alert("Already added in Cart");else{let o={count:this.amount,product:n};this.cartProducts?.push(o),localStorage.setItem("cart",JSON.stringify(this.cartProducts)),alert("Added Succeffully")}else{let t={count:this.amount,product:n};this.cartProducts.push(t),localStorage.setItem("cart",JSON.stringify(this.cartProducts)),alert("Added Succeffully")}this.selectedProduct=null,this.amount=1}goToProductDetails(n){this._router.navigate(["Product_Detail",n])}static \u0275fac=function(t){return new(t||e)(b(G),b(B),b(K))};static \u0275cmp=s({type:e,selectors:[["app-products"]],standalone:!0,features:[u],decls:3,vars:1,consts:[[3,"categorEvent"],[1,"row","justify-content-center"],[4,"ngFor","ngForOf"],["class","col-md-6 col-lg-4 col-xl-3 col-sm-12",4,"ngIf"],[1,"col-md-6","col-lg-4","col-xl-3","col-sm-12"],[1,"item"],["alt","",3,"click","src"],[1,"body"],[1,"fw-bolder"],[1,"lead"],[1,"lead","my-2",2,"height","100px"],["class","w-75 m-auto my- d-flex ",4,"ngIf"],[1,"px-3","mb-2","d-flex","justify-content-between","align-items-center"],["class","btn btn-success",3,"click",4,"ngIf"],[1,"w-75","m-auto","my-","d-flex"],["type","number","placeholder","Quantity of prouct",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-outline-success","ms-1",3,"click"],[1,"btn","btn-success",3,"click"]],template:function(t,o){t&1&&(r(0,"app-category",0),v("categorEvent",function(l){return o.catNameData(l)}),i(),r(1,"div",1),C(2,it,2,1,"ng-container",2),i()),t&2&&(d(2),m("ngForOf",o.products))},dependencies:[F,A,V,Z,H,U,J,Q,q],styles:[".item[_ngcontent-%COMP%]{width:100%;text-decoration:none;color:#333;margin:15px;display:inline-block;border-radius:10px;box-shadow:0 2px 5px #ca25104d;transition:all .3s ease-in-out;cursor:pointer}.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:200px;border-radius:10px}.item[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{padding-top:0}.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{overflow:hidden;font-size:16px;padding:5px 15px}.item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{height:75px;overflow:hidden;padding:5px 15px;font-size:18px;background-color:#eee;font-weight:600;margin-top:10px}.item[_ngcontent-%COMP%]:hover{transform:scale(1.04)}.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#f1b4b4;padding:3px 7px;border-radius:30px}"]})};var tt=[{path:"Products",component:h},{path:"Cart",loadComponent:()=>import("./chunk-PNX24YBT.js").then(e=>e.CartComponent)},{path:"Order",loadComponent:()=>import("./chunk-QS4WYNFD.js").then(e=>e.OrderComponent)},{path:"Product_Detail/:id",loadComponent:()=>import("./chunk-MBF3MRGI.js").then(e=>e.ProductDetailComponent)},{path:"ProductsOpreations",loadComponent:()=>import("./chunk-GITJWNNC.js").then(e=>e.ProductsOpreationComponent)},{path:"**",redirectTo:"Products",pathMatch:"full"}];var et={providers:[D({eventCoalescing:!0}),$(tt),L(R())]};var y=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["app-navbar"]],standalone:!0,features:[u],decls:20,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container"],["routerLink","/Products",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","w-50","justify-content-evenly","mb-2","mb-lg-0"],[1,"nav-item"],["routerLink","/Products",1,"nav-link"],["routerLink","/Cart",1,"nav-link"],["routerLink","/Order",1,"nav-link"],["routerLink","/ProductsOpreations",1,"nav-link"]],template:function(t,o){t&1&&(r(0,"nav",0)(1,"div",1)(2,"a",2),a(3,"Market"),i(),r(4,"button",3),_(5,"span",4),i(),r(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),a(10,"Home"),i()(),r(11,"li",7)(12,"a",9),a(13,"Cart"),i()(),r(14,"li",7)(15,"a",10),a(16,"Orders"),i()(),r(17,"li",7)(18,"a",11),a(19,"Products"),i()()()()()())},dependencies:[W],styles:["nav[_ngcontent-%COMP%]{background:linear-gradient(to right,#950b0b,#440606);color:#fff!important}ul[_ngcontent-%COMP%]{list-style:none;display:flex;justify-content:space-between;width:20%;margin:0}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%]{cursor:pointer;font-size:22px;color:#fff;text-decoration:none}"]})};var S=class e{title="SampleEcommerceSite";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["app-root"]],standalone:!0,features:[u],decls:3,vars:0,consts:[[1,"container-fluid","container-md","mt-3"]],template:function(t,o){t&1&&(_(0,"app-navbar"),r(1,"div",0),_(2,"router-outlet"),i())},dependencies:[z,y]})};j(S,et).catch(e=>console.error(e));