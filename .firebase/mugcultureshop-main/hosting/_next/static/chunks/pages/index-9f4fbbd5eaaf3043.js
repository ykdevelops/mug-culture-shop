(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(8315)}])},8315:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return k}});var t=i(5893),a=i(7294),c=i(9250),o=i(8193),n=i(5434),r=i(4380),l=i.n(r),d=i(685);let u={hidden:{opacity:0,y:"-100vh"},visible:{opacity:1,y:"0",transition:{type:"spring",stiffness:50,damping:8}}},m=e=>{let{product:s,closeModal:i}=e,[r,m]=(0,a.useState)(0),[h,p]=(0,a.useState)(!1),[_,g]=(0,a.useState)(!1),[j,x]=(0,a.useState)(!1),{cart:f,addToCart:C,removeItem:v,clearCart:N,isCheckingOut:w,proceedToCheckout:M,handleCheckout:k,total:y,setCart:b}=(0,c.jD)(),P=()=>{m(e=>e>0?e-1:s.images.length-1)},I=()=>{m(e=>(e+1)%s.images.length)},B=e=>{e.stopPropagation();let t=f.findIndex(e=>e.product.id===s.id);if(-1!==t){let e=[...f];e[t].quantity+=1,b(e)}else C(s,1);console.log("Cart:",f),i()},S=e=>{e.stopPropagation(),console.log("close button triggered"),i()},D=()=>{p(!h)},R=()=>{g(!_)},E=()=>{x(!j)};return(0,t.jsx)(d.E.div,{className:l().productModal,variants:u,initial:"hidden",animate:"visible",children:(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsx)("div",{className:l().closeBtnRow,children:(0,t.jsx)("button",{className:l().closeBtn,onClick:S,children:"X"})}),(0,t.jsxs)("div",{className:l().productDetails,children:[(0,t.jsxs)("div",{className:l().visual,children:[(0,t.jsx)("div",{className:l().leftArrowColumn,onClick:P,children:(0,t.jsx)(o.dnn,{className:l().arrowIcon})}),(0,t.jsx)("div",{className:l().photo,children:(0,t.jsx)("img",{src:s.images[r],alt:s.name})}),(0,t.jsx)("div",{className:l().rightArrowColumn,onClick:I,children:(0,t.jsx)(o.uuo,{className:l().arrowIcon})})]}),(0,t.jsxs)("div",{className:l().description,children:[(0,t.jsx)("h2",{children:s.name}),(0,t.jsxs)("p",{children:["$",s.price]}),(0,t.jsx)("p",{children:"Custom Designed Ceramic Coffee Mug | Cat, Coffee Break | 11oz Gloss White Mug "}),(0,t.jsx)("button",{onClick:B,children:"Add to Cart"}),(0,t.jsxs)("div",{className:l().highlights,onClick:D,children:["Highlights ",h?(0,t.jsx)(n.rWj,{}):(0,t.jsx)(n.x3N,{})]}),h&&(0,t.jsx)("div",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"High-quality ceramic material"}),(0,t.jsx)("li",{children:"Dishwasher and microwave safe"}),(0,t.jsx)("li",{children:"11oz capacity"})]})}),(0,t.jsxs)("div",{className:l().descriptionTitle,onClick:R,children:["Description ",_?(0,t.jsx)(n.rWj,{}):(0,t.jsx)(n.x3N,{})]}),_&&(0,t.jsx)("div",{className:l().descriptionContent,children:(0,t.jsx)("p",{children:"This custom-designed coffee mug features a cute cat taking a coffee break. It has an 11oz capacity and is made of high-quality ceramic material that is both dishwasher and microwave safe. The mug has a glossy white finish and is perfect for coffee lovers and cat enthusiasts alike."})}),(0,t.jsxs)("div",{className:l().shipping,onClick:E,children:["Shipping and return policies ",j?(0,t.jsx)(n.rWj,{}):(0,t.jsx)(n.x3N,{})]}),j&&(0,t.jsxs)("div",{className:l().shippingContent,children:[(0,t.jsx)("h3",{children:"Shipping Policy"}),(0,t.jsx)("p",{children:"We offer free shipping on all orders. Your order will be processed within 1-2 business days and will be delivered within 5-7 business days."}),(0,t.jsx)("h3",{children:"Return Policy"}),(0,t.jsx)("p",{children:"If you are not satisfied with your purchase, you may return it within 30 days for a full refund. Please contact us to initiate a return."})]})]})]})]})})};var h=i(6554),p=i.n(h);let _=e=>{let{product:s}=e,[i,c]=(0,a.useState)(!1),o=()=>{c(!0)},n=()=>{c(!1)};return(0,a.useEffect)(()=>{console.log("isModalOpen changed:",i)},[i]),(0,t.jsxs)("div",{className:p().product,onClick:o,children:[(0,t.jsx)("img",{src:s.images[0],alt:s.name}),(0,t.jsx)("h3",{children:s.name}),(0,t.jsxs)("p",{children:["$",s.price]}),i&&(0,t.jsx)(m,{product:s,closeModal:n})]})};var g=i(2052),j=i(9329),x=i.n(j),f=i(3454);let C=e=>{let{onClose:s}=e,{cart:i,isCheckingOut:o,proceedToCheckout:r,handleCheckout:l,clearCart:d,removeItem:u}=(0,c.jD)(),[m,h]=(0,a.useState)({}),[p,_]=(0,a.useState)("paypal"),j=e=>{e.preventDefault(),l(m,p)},C=i.reduce((e,s)=>e+s.product.price*s.quantity,0);return(0,t.jsx)("div",{className:x().cart,children:(0,t.jsxs)("div",{className:x().cartContainer,children:[(0,t.jsx)("div",{className:x().closeBtnRow,children:(0,t.jsx)("button",{className:x().closeBtn,onClick:s,children:(0,t.jsx)(n.FU5,{})})}),(0,t.jsx)("div",{className:x().cartHeader,children:(0,t.jsx)("h2",{children:"Your Cart"})}),0===i.length?(0,t.jsx)("p",{children:"Your cart is empty."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("ul",{children:i.map(e=>(0,t.jsxs)("li",{children:[e.product.name," - $",e.product.price," x ",e.quantity,(0,t.jsx)("button",{onClick:()=>u(e.product.id),children:"Remove"})]},e.product.id))}),(0,t.jsxs)("p",{children:["Total: $",C]}),(0,t.jsx)(g.Z,{name:"Mug Shop",description:"Custom Designed Ceramic Coffee Mugs",amount:100*C,token:j,stripeKey:f.env.STRIPE_API_KEY})]})]})})};var v=i(3750),N=[{id:1,name:"Custom Designed Ceramic Coffee Mug | Cat, Coffee Break | 11oz Gloss White Mug",price:20.82,images:["/images/mug1.1.jpeg","/images/mug1.2.jpeg","/images/mug1.3.jpeg"]},{id:2,name:"Custom Designed Ceramic Coffee Mug | Coffee | Happy | Paw Prints | 11oz Gloss White Mug",price:20.82,images:["/images/mug1.1.jpeg","/images/mug1.2.jpeg","/images/mug1.3.jpeg"]},{id:3,name:"Custom Designed Ceramic Coffee Mug | Cat Print | 11oz Gloss White Mug",price:16.99,images:["/images/mug1.1.jpeg","/images/mug1.2.jpeg","/images/mug1.3.jpeg"]}],w=i(6960),M=i.n(w);function k(){let[e,s]=(0,a.useState)([]),[i,o]=(0,a.useState)(!1),[n,r]=(0,a.useState)(0),{numberOfItems:l}=(0,c.jD)();return(0,a.useEffect)(()=>{r(l)},[e]),(0,t.jsxs)("div",{className:M().homePage,children:[(0,t.jsx)("div",{className:M().cartIconRow,children:(0,t.jsxs)("div",{onClick:()=>o(e=>!e),children:[(0,t.jsx)(v.a53,{className:M().cartIcon}),(0,t.jsx)("span",{className:M().cartCount,children:l})]})}),(0,t.jsx)("h1",{className:M().title,children:"Mug Culture Shop"}),i&&(0,t.jsx)(C,{items:e,onClose:()=>o(!1)}),(0,t.jsx)("div",{className:M().products,children:N.map(e=>(0,t.jsx)(_,{product:e,children:(0,t.jsx)(m,{product:e,setCart:s})},e.id))})]})}},9329:function(e){e.exports={cart:"cart_cart__1LWIm",cartContainer:"cart_cartContainer__eYgc8",closeBtn:"cart_closeBtn__4SJey",closeBtnRow:"cart_closeBtnRow___3LrW",checkoutForm:"cart_checkoutForm__zB5vC","checkout-form":"cart_checkout-form__g4MtZ",checkoutFormMessage:"cart_checkoutFormMessage__b5_RV"}},6960:function(e){e.exports={container:"main_container__s5l5Z",homePage:"main_homePage__dTmGq",cartIconRow:"main_cartIconRow__lu1mf",cartIcon:"main_cartIcon__0BOJp",title:"main_title__Vtdnt",products:"main_products__PU3Jb",cartCount:"main_cartCount__UKYPb"}},6554:function(e){e.exports={product:"product_product__Q92vX",products:"product_products__ma_E0"}},4380:function(e){e.exports={productModal:"productModal_productModal__mFId3",productDetails:"productModal_productDetails__npJGH",closeBtn:"productModal_closeBtn__hloQa",closeBtnRow:"productModal_closeBtnRow__7jtMz",container:"productModal_container__eKdg4",visual:"productModal_visual__crsNp",photo:"productModal_photo__vAQnp",leftArrowColumn:"productModal_leftArrowColumn__9NuWE",rightArrowColumn:"productModal_rightArrowColumn__QxRCn",description:"productModal_description__T0APA",arrowIcon:"productModal_arrowIcon__bnq3L"}}},function(e){e.O(0,[228,13,617,730,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);