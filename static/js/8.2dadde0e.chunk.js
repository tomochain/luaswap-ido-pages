(this["webpackJsonpluaswap-ui"]=this["webpackJsonpluaswap-ui"]||[]).push([[8],{1049:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Qe}));var r,a,c,i,o=t(40),s=t(76),u=t(0),d=t.n(u),l=t(35),b=t(60),j=t(41),p=t(25),O=t(7),f=O.e.div(r||(r=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]))),x=t(94),m=t(360),h=function(e,n){var t=Object(u.useState)((function(){try{var t=localStorage.getItem(n);return t?JSON.parse(t):e}catch(r){return e}})),r=Object(o.a)(t,2),a=r[0],c=r[1];return Object(u.useEffect)((function(){localStorage.setItem(n,JSON.stringify(a))}),[a,n]),[a,c]},v=t(28),g=t(77),w={latin_map:{"\u03c4":"t","\u03a4":"T"}},y=function(e){return e.replace(/[^A-Za-z0-9[\] ]/g,(function(e){return w.latin_map[e]||e}))},k=t(238),C=t(16),S=t(237),L=t(247),A=t(15),F=["background","isImage","children"],I=Object(O.e)(p.d)(a||(a=Object(s.a)(["\n  background: ",";\n  ","\n"])),(function(e){var n=e.theme;return e.background||n.colors.gradients.bubblegum}),(function(e){return e.isImage?"background-size: cover;background-repeat: no-repeat;":""})),U=Object(O.e)(L.a)(c||(c=Object(s.a)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n"]))),q=function(e){var n=e.background,t=e.isImage,r=e.children,a=Object(S.a)(e,F);return Object(A.jsx)(I,Object(C.a)(Object(C.a)({background:n,isImage:t},a),{},{children:Object(A.jsx)(U,{children:r})}))},T=t(26),z=t.n(T),B=O.e.div(i||(i=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),P=function(e){var n=e.onClick,t=e.expanded,r=Object(g.b)().t;return Object(A.jsxs)(B,{"aria-label":r("Hide or show expandable content"),role:"button",onClick:function(){return n()},children:[Object(A.jsx)(p.O,{color:"primary",bold:!0,children:r(t?"Hide":"Details")}),t?Object(A.jsx)(p.j,{}):Object(A.jsx)(p.i,{})]})};P.defaultProps={expanded:!1};var D,H,M,N,E,R,Q,V,J,W,_,G,K,X,Y,$,Z,ee,ne,te,re,ae,ce=P,ie=t(86),oe=t(233),se=O.e.div(D||(D=Object(s.a)(["\n  margin-top: 24px;\n"]))),ue=Object(O.e)(p.t)(H||(H=Object(s.a)(["\n  font-weight: 400;\n"]))),de=function(e){e.infoAddress,e.removed;var n=e.totalValueFormatted,t=e.lpLabel,r=e.addLiquidityUrl,a=Object(g.b)().t;return Object(A.jsxs)(se,{children:[Object(A.jsxs)(p.n,{justifyContent:"space-between",children:[Object(A.jsxs)(p.O,{children:[a("Total Liquidity"),":"]}),Object(A.jsx)(p.O,{children:n})]}),Object(A.jsxs)(ue,{href:r,children:["Add liquidity ",t]})]})},le=Object(O.e)(p.n)(M||(M=Object(s.a)(["\n  svg {\n    margin-right: 4px;\n  }\n"]))),be=(Object(O.e)(p.L)(N||(N=Object(s.a)(["\n  margin-left: 4px;\n"]))),function(e){var n=e.lpLabel,t=(e.isCommunityFarm,e.farmImages,e.tokenSymbol),r=e.farm;return Object(A.jsxs)(le,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(A.jsxs)(le,{justifyContent:"left",alignItems:"center",width:"130px",children:[Object(A.jsx)(p.q,{src:r.icon,alt:t,width:64,height:64}),Object(A.jsx)(p.q,{src:r.icon2,alt:t,width:64,height:64})]}),Object(A.jsxs)(p.n,{flexDirection:"column",alignItems:"flex-end",children:[Object(A.jsx)(p.o,{mb:"4px",children:n.replace("LUA-V1 LP","").trim()}),Object(A.jsx)(p.n,{justifyContent:"center"})]})]})}),je=t(3),pe=t.n(je),Oe=t(19),fe=t(30),xe=t(32),me=t(827),he=t(234),ve=t(835),ge=function(e,n){var t=Object(b.c)(),r=Object(j.c)(),a=r.account,c=r.chainId,i=Object(v.a)(),o=Object(he.d)(c,n);return{onStake:Object(u.useCallback)(function(){var n=Object(Oe.a)(pe.a.mark((function n(r){var s;return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(me.g)(o,e,r,a,c);case 2:s=n.sent,t(Object(k.a)(a,c,i)),console.info(s);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[a,t,o,e,c,i])}},we=function(e,n){var t=Object(b.c)(),r=Object(j.c)(),a=r.account,c=r.chainId,i=Object(v.a)(),o=Object(he.d)(c,n);return{onUnstake:Object(u.useCallback)(function(){var n=Object(Oe.a)(pe.a.mark((function n(r){var s;return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(me.h)(o,e,r,a,c);case 2:s=n.sent,t(Object(k.a)(a,c,i)),console.info(s);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[a,t,o,e,c,i])}},ye=t(867),ke=O.e.div(E||(E=Object(s.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px 0;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),Ce=O.e.div(R||(R=Object(s.a)(["\n  flex: 1;\n"]))),Se=function(e){var n=e.children,t=d.a.Children.toArray(n).length;return Object(A.jsx)(ke,{children:d.a.Children.map(n,(function(e,n){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(Ce,{children:e}),n<t-1&&Object(A.jsx)(ye.a,{})]})}))})},Le=t(843),Ae=function(e){var n=e.max,t=e.onConfirm,r=e.onDismiss,a=e.tokenName,c=void 0===a?"":a,i=e.addLiquidityUrl,s=Object(u.useState)(""),d=Object(o.a)(s,2),l=d[0],b=d[1],j=Object(u.useState)(!1),O=Object(o.a)(j,2),f=O[0],x=O[1],m=Object(g.b)().t,h=Object(u.useMemo)((function(){return Object(oe.e)(n)}),[n]),v=new z.a(l),w=new z.a(h),y=Object(u.useCallback)((function(e){e.currentTarget.validity.valid&&b(e.currentTarget.value.replace(/,/g,"."))}),[b]),k=Object(u.useCallback)((function(){b(h)}),[h,b]);return Object(A.jsxs)(p.z,{title:m("Stake LP tokens"),onDismiss:r,children:[Object(A.jsx)(Le.a,{value:l,onSelectMax:k,onChange:y,max:h,symbol:c,addLiquidityUrl:i,inputTitle:m("Stake")}),Object(A.jsxs)(Se,{children:[Object(A.jsx)(p.e,{variant:"secondary",onClick:r,width:"100%",disabled:f,children:m("Cancel")}),Object(A.jsx)(p.e,{width:"100%",disabled:f||!v.isFinite()||v.eq(0)||v.gt(w),onClick:Object(Oe.a)(pe.a.mark((function e(){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,t(l);case 3:x(!1),r();case 5:case"end":return e.stop()}}),e)}))),children:m(f?"Pending Confirmation":"Confirm")})]}),Object(A.jsx)(p.t,{href:i,style:{alignSelf:"center"},children:m("Get %symbol%",{symbol:c})})]})},Fe=function(e){var n=e.onConfirm,t=e.onDismiss,r=e.max,a=e.tokenName,c=void 0===a?"":a,i=Object(u.useState)(""),s=Object(o.a)(i,2),d=s[0],l=s[1],b=Object(u.useState)(!1),j=Object(o.a)(b,2),O=j[0],f=j[1],x=Object(g.b)().t,m=Object(u.useMemo)((function(){return Object(oe.e)(r)}),[r]),h=new z.a(d),v=new z.a(m),w=Object(u.useCallback)((function(e){e.currentTarget.validity.valid&&l(e.currentTarget.value.replace(/,/g,"."))}),[l]),y=Object(u.useCallback)((function(){l(m)}),[m,l]);return Object(A.jsxs)(p.z,{title:x("Unstake LP tokens"),onDismiss:t,children:[Object(A.jsx)(Le.a,{onSelectMax:y,onChange:w,value:d,max:m,symbol:c,inputTitle:x("Unstake")}),Object(A.jsxs)(Se,{children:[Object(A.jsx)(p.e,{variant:"secondary",onClick:t,width:"100%",disabled:O,children:x("Cancel")}),Object(A.jsx)(p.e,{disabled:O||!h.isFinite()||h.eq(0)||h.gt(v),onClick:Object(Oe.a)(pe.a.mark((function e(){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,n(d);case 3:f(!1),t();case 5:case"end":return e.stop()}}),e)}))),width:"100%",children:x(O?"Pending Confirmation":"Confirm")})]})]})},Ie=O.e.div(Q||(Q=Object(s.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),Ue=function(e){var n=e.stakedBalance,t=e.tokenBalance,r=e.tokenName,a=e.pid,c=e.farm,i=e.master,s=e.addLiquidityUrl,d=Object(g.b)().t,b=ge(a,i).onStake,j=we(a,i).onUnstake,O=Object(l.h)(),f=c.reserves0,x=c.reserves1,m=c.totalSupply,h=c.token2Symbol,v=c.tokenSymbol,w=Object(u.useCallback)((function(){var e=Object(oe.c)(n);return e>0&&e<1e-4?Object(oe.e)(n).toLocaleString():e.toLocaleString()}),[n]),y=Object(u.useMemo)((function(){return new z.a(f).multipliedBy(Object(oe.b)(n)).dividedBy(m).toNumber().toFixed(2)}),[w]),k=Object(u.useMemo)((function(){return new z.a(x).multipliedBy(Object(oe.b)(n)).dividedBy(m).toNumber().toFixed(2)}),[w]),C=Object(p.X)(Object(A.jsx)(Ae,{max:t,onConfirm:b,tokenName:r,addLiquidityUrl:s})),S=Object(o.a)(C,1)[0],L=Object(p.X)(Object(A.jsx)(Fe,{max:n,onConfirm:j,tokenName:r})),F=Object(o.a)(L,1)[0];return Object(A.jsxs)(p.n,{justifyContent:"space-between",alignItems:"center",children:[Object(A.jsx)(p.o,{color:n.eq(0)?"textDisabled":"text",children:n.eq(0)?"0":Object(A.jsxs)("span",{children:[w(),Object(A.jsxs)("span",{style:{fontSize:"15px"},children:["\xa0(",y," ",null===v||void 0===v?void 0:v.symbol," + ",k," ",null===h||void 0===h?void 0:h.symbol,")"]})]})}),n.eq(0)?Object(A.jsx)(p.e,{onClick:S,disabled:["history","archived"].some((function(e){return O.pathname.includes(e)})),children:d("Stake LP")}):Object(A.jsxs)(Ie,{children:[Object(A.jsx)(p.p,{variant:"tertiary",onClick:F,mr:"6px",children:Object(A.jsx)(p.y,{color:"primary",width:"14px"})}),Object(A.jsx)(p.p,{variant:"tertiary",onClick:S,disabled:["history","archived"].some((function(e){return O.pathname.includes(e)})),children:Object(A.jsx)(p.a,{color:"primary",width:"14px"})})]})]})},qe=function(e){var n=e.earnings,t=e.token,r=e.earningsLua,a=e.pid,c=e.master,i=Object(j.c)().account,s=Object(g.b)().t,d=Object(u.useState)(!1),l=Object(o.a)(d,2),O=l[0],f=l[1],x=function(e,n){var t=Object(b.c)(),r=Object(j.c)(),a=r.account,c=r.chainId,i=Object(v.a)(),o=Object(he.d)(c,n);return{onReward:Object(u.useCallback)(Object(Oe.a)(pe.a.mark((function n(){var r;return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(me.f)(o,e,a,c);case 2:return r=n.sent,t(Object(k.a)(a,c,i)),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)}))),[a,t,e,o,c,i])}}(a,c).onReward,m=i?Object(oe.c)(n):0,h=i?Object(oe.c)(r):0,w=m.toLocaleString(),y=h.toLocaleString();return Object(A.jsxs)(p.n,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(A.jsxs)(p.o,{color:0===m?"textDisabled":"text",children:[w," ",t]}),Object(A.jsxs)(p.o,{color:0===m?"textDisabled":"text",children:[y," LUA"]}),Object(A.jsx)(p.e,{disabled:0===m||O,onClick:Object(Oe.a)(pe.a.mark((function e(){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,x();case 3:f(!1);case 4:case"end":return e.stop()}}),e)}))),children:s("Harvest")})]})},Te=O.e.div(V||(V=Object(s.a)(["\n  padding-top: 16px;\n"]))),ze=function(e){var n,t=e.farm,r=e.account,a=e.addLiquidityUrl,c=Object(g.b)().t,i=Object(u.useState)(!1),s=Object(o.a)(i,2),d=s[0],l=s[1],O=Object(j.c)(),f=O.library,x=O.chainId,m=t.pid,h=t.lpAddresses,w=t.master,y=t.quoteToken,C=(t.reserves0,t.reserves1,t.totalSupply,t.userData||{}),S=C.allowance,L=void 0===S?0:S,F=C.tokenBalance,I=void 0===F?0:F,U=C.stakedBalance,q=void 0===U?0:U,T=C.earnings,B=void 0===T?0:T,P=C.earningsLua,D=void 0===P?0:P,H=new z.a(L),M=new z.a(I),N=new z.a(q),E=new z.a(B),R=new z.a(D),Q=Object(fe.a)(h,x),V=null===(n=t.lpTokenName)||void 0===n?void 0:n.toUpperCase(),J=r&&H&&H.isGreaterThan(0),W=f||null,_=function(e,n){var t=Object(b.c)(),r=Object(j.c)(),a=r.account,c=r.chainId,i=Object(v.a)(),o=Object(he.d)(c,n);return{onApprove:Object(u.useCallback)(Object(Oe.a)(pe.a.mark((function n(){var r;return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(me.a)(e,o,a,c);case 3:return r=n.sent,t(Object(k.a)(a,c,i)),n.abrupt("return",r);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",!1);case 11:case"end":return n.stop()}}),n,null,[[0,8]])}))),[a,t,e,o,c,i])}}(Object(xe.h)(W,Q,x),w).onApprove,G=Object(u.useCallback)(Object(Oe.a)(pe.a.mark((function e(){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,_();case 4:l(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[_]);return Object(A.jsxs)(Te,{children:[Object(A.jsxs)(p.n,{children:[Object(A.jsxs)(p.O,{bold:!0,textTransform:"uppercase",color:"#FABC46",fontSize:"12px",pr:"3px",children:[y.symbol," & LUA"]}),Object(A.jsx)(p.O,{bold:!0,textTransform:"uppercase",color:"#c3c3c3",fontSize:"12px",children:c("Earned")})]}),Object(A.jsx)(qe,{earnings:E,pid:m,master:w,token:y.symbol,earningsLua:R}),Object(A.jsxs)(p.n,{children:[Object(A.jsx)(p.O,{bold:!0,textTransform:"uppercase",color:"#FABC46",fontSize:"12px",pr:"3px",children:V}),Object(A.jsx)(p.O,{bold:!0,textTransform:"uppercase",color:"#c3c3c3",fontSize:"12px",children:c("Staked")})]}),r?J?Object(A.jsx)(Ue,{stakedBalance:N,farm:t,tokenBalance:M,tokenName:V,pid:m,master:w,addLiquidityUrl:a}):Object(A.jsx)(p.e,{mt:"8px",width:"100%",disabled:d,onClick:G,children:c("Approve Contract")}):Object(A.jsx)(ve.a,{mt:"8px",width:"100%"})]})},Be=Object(O.f)(J||(J=Object(s.a)(["  \n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"]))),Pe=O.e.div(W||(W=Object(s.a)(["\n  background: ",";\n  background-size: 400% 400%;\n  animation: "," 2s linear infinite;\n  border-radius: 32px;\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -3px;\n  left: -1px;\n  z-index: -1;\n"])),(function(e){var n=e.theme;return"linear-gradient(180deg, ".concat(n.colors.primaryBright,", ").concat(n.colors.secondary,")")}),Be),De=O.e.div(_||(_=Object(s.a)(["\n  align-self: baseline;\n  background: #282828;\n  border-radius: ",";\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){var n=e.theme;return e.isPromotedFarm?"31px":n.radii.card})),He=O.e.div(G||(G=Object(s.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.cardBorder})),Me=O.e.div(K||(K=Object(s.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),Ne=function(e){var n=e.farm,t=e.removed,r=e.account,a=(e.luaPrice,Object(g.b)().t),c=Object(j.c)().chainId,i=88===c?88:1,s=(Object(ie.a)(i),Object(u.useState)(!1)),d=Object(o.a)(s,2),l=d[0],b=d[1],O=n.reward?new z.a(n.reward):new z.a(0),f=n.lpSymbol.split("-"),x=n.usdValue?"$".concat(parseFloat(n.usdValue.toFixed(0)).toLocaleString("en-US")):"-",m=n.lpSymbol&&n.lpSymbol.toUpperCase().replace("PANCAKE",""),h=n.addLiquidityLink,v=n.pairLink,w=(n.lpAddresses[c],"CAKE"===n.token.symbol);return n.master?Object(A.jsxs)(De,{isPromotedFarm:w,children:[w&&Object(A.jsx)(Pe,{}),Object(A.jsx)(be,{farm:n,lpLabel:m,multiplier:n.multiplier,isCommunityFarm:n.isCommunity,farmImages:f,tokenSymbol:n.token.symbol}),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(p.n,{justifyContent:"space-between",children:[Object(A.jsxs)(p.O,{children:[a("Reward"),":"]}),Object(A.jsxs)(p.O,{bold:!0,children:[Object(oe.c)(O).toFixed(2)," ",n.quoteToken.symbol,"\xa0+\xa0",Object(oe.c)(new z.a(n.luaReward||"0")).toFixed(2)," LUA / block"]})]}),Object(A.jsxs)(p.n,{justifyContent:"space-between",children:[Object(A.jsx)(p.O,{children:"APY:"}),Object(A.jsxs)(p.O,{bold:!0,children:[n.apy," %"]})]})]}),Object(A.jsx)(ze,{farm:n,account:r,addLiquidityUrl:h}),Object(A.jsx)(He,{}),Object(A.jsx)(ce,{onClick:function(){return b(!l)},expanded:l}),Object(A.jsx)(Me,{expanded:l,children:Object(A.jsx)(de,{removed:t,infoAddress:v,totalValueFormatted:x,lpLabel:m,addLiquidityUrl:h})})]}):Object(A.jsx)("div",{children:"Missing master address in this pool"})};!function(e){e.TABLE="TABLE",e.CARD="CARD"}(X||(X={}));var Ee=O.e.div(Y||(Y=Object(s.a)(["\n  padding: 48px 24px;\n"]))),Re=(O.e.div($||($=Object(s.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 32px;\n\n  "," {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 16px 32px;\n    margin-bottom: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),O.e.div(Z||(Z=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),p.O),O.e.div(ee||(ee=Object(s.a)(["\n  > "," {\n    font-size: 12px;\n  }\n"])),p.O),O.e.div(ne||(ne=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0px;\n\n  "," {\n    width: auto;\n    padding: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),O.e.div(te||(te=Object(s.a)(["\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > div {\n    padding: 8px 0px;\n  }\n\n  "," {\n    justify-content: flex-start;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),O.e.div(re||(re=Object(s.a)(["\n  height: calc(100vh - 312px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])))),Qe=(Object(O.e)(p.q)(ae||(ae=Object(s.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 58px;\n"]))),function(){Object(l.j)().path;var e=Object(g.b)().t,n=Object(x.b)(),t=n.data,r=(n.userDataLoaded,Object(u.useState)(!0)),a=Object(o.a)(r,2),c=a[0],i=a[1],s=Object(m.a)(),d=Object(u.useState)(""),O=Object(o.a)(d,2),w=O[0],C=(O[1],h(X.TABLE,"pancake_farm_view")),S=Object(o.a)(C,2),L=(S[0],S[1],Object(j.c)()),F=L.account,I=L.chainId,U=Object(v.a)(),T=Object(b.c)();Object(l.g)();Object(u.useEffect)((function(){T(Object(k.d)(I)),T(Object(k.b)(I,U,!0,(function(){i(!1)})))}),[F,T,I,U]),Object(u.useEffect)((function(){var e;return F&&t.length>0&&t[0].master&&(e=setInterval((function(){T(Object(k.a)(F,I,U,t))}),2e3)),function(){clearInterval(e)}}),[F,t.length,I,U,T]);var z=Object(u.useMemo)((function(){if(w){var e=y(w.toLowerCase());return t.filter((function(n){return y(n.lpSymbol.toLowerCase()).includes(e)}))}return t}),[w,t]);return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(q,{background:"url(".concat("/ido","/images/farm-bg.png)"),isImage:!0,children:[Object(A.jsx)(p.o,{as:"h1",scale:"xxl",color:"#FFFFFF",mb:"24px",children:e("Farms")}),Object(A.jsx)(p.o,{scale:"lg",color:"text",children:"Stake your LP tokens and earn token rewards"})]}),Object(A.jsxs)(Ee,{children:[88!==I&&!c&&Object(A.jsx)(p.x,{variant:"warning",children:Object(A.jsx)(p.O,{children:"Please switch to Tomo Mainnet to use this feature"})}),Object(A.jsx)("div",{children:c?Object(A.jsx)(Re,{children:Object(A.jsx)(p.I,{})}):Object(A.jsx)(f,{children:z.map((function(e){return Object(A.jsx)(Ne,{farm:e,account:F,removed:!1,luaPrice:s},"".concat(e.master).concat(e.pid))}))})})]})]})})},827:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"g",(function(){return b})),t.d(n,"e",(function(){return j})),t.d(n,"c",(function(){return p})),t.d(n,"d",(function(){return O})),t.d(n,"b",(function(){return f})),t.d(n,"h",(function(){return x})),t.d(n,"f",(function(){return m}));var r=t(16),a=t(3),c=t.n(a),i=t(19),o=t(26),s=t.n(o),u=t(36),d=t(912),l=(t(70),function(){var e=Object(i.a)(c.a.mark((function e(n,t,r,a){var i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=88===a?{from:r,gasLimit:"0x7A120"}:{from:r},e.next=3,n.methods.approve(t.options.address,d.a.constants.MaxUint256).send(i);case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}()),b=function(){var e=Object(i.a)(c.a.mark((function e(n,t,r,a,i){var o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=88===i?{from:a,gasLimit:"0x7A120"}:{from:a},e.abrupt("return",n.methods.deposit(t,new s.a(r).times(u.g).toString()).send(o).on("transactionHash",(function(e){return e.transactionHash})));case 2:case"end":return e.stop()}}),e)})));return function(n,t,r,a,c){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(c.a.mark((function e(n,t,a,i,o,s){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.commit(i,a,s).send(Object(r.a)({from:t},o&&{value:a})).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r,a,c,i){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(c.a.mark((function e(n,t,r,a,i){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.userClaim(a,t,r,i).send({from:t}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r,a,c){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.claim().send({from:t}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(c.a.mark((function e(n,t,r,a){var i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=88===a?{from:r,gasLimit:"0x7A120"}:{from:r},e.next=3,n.methods.approve(t,d.a.constants.MaxUint256).send(i);case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(c.a.mark((function e(n,t,r,a,i){var o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=88===i?{from:a,gasLimit:"0x7A120"}:{from:a},e.abrupt("return",n.methods.withdraw(t,new s.a(r).times(u.g).toString()).send(o).on("transactionHash",(function(e){return e.transactionHash})));case 2:case"end":return e.stop()}}),e)})));return function(n,t,r,a,c){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(c.a.mark((function e(n,t,r,a){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=88===a?{from:r,gasLimit:"0x7A120"}:{from:r},e.abrupt("return",n.methods.claimReward(t).send(i).on("transactionHash",(function(e){return e.transactionHash})));case 2:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}()},835:function(e,n,t){"use strict";var r=t(16),a=(t(0),t(25)),c=t(126),i=t(77),o=t(15);n.a=function(e){var n=Object(i.b)().t,t=Object(c.a)(),s=t.login,u=t.logout,d=Object(a.Y)(s,u).onPresentConnectModal;return Object(o.jsx)(a.e,Object(r.a)(Object(r.a)({width:"100%",onClick:d},e),{},{children:n("Unlock Wallet")}))}},843:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r,a,c,i=t(76),o=(t(0),t(7)),s=t(25),u=t(77),d=t(15),l=o.e.div(r||(r=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #1a1a1a;\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])),(function(e){var n=e.isWarning,t=void 0!==n&&n,r=e.theme;return t?r.shadows.warning:r.shadows.inset}),(function(e){return e.theme.colors.text})),b=Object(o.e)(s.r)(a||(a=Object(i.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n\n  "," {\n    width: 80px;\n  }\n\n  "," {\n    width: auto;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.sm})),j=Object(o.e)(s.O)(c||(c=Object(i.a)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),p=function(e){var n=e.max,t=e.min,r=e.symbol,a=e.onChange,c=e.onSelectMax,i=e.value,o=e.isLoadingDataFromContract,p=void 0!==o&&o,O=e.addLiquidityUrl,f=e.inputTitle,x=e.secondaryTitle,m=void 0===x?"Balance":x,h=e.showWarning,v=void 0===h||h,g=Object(u.b)().t,w="0"===n||!n;return Object(d.jsxs)("div",{style:{position:"relative",width:"100%"},children:[Object(d.jsxs)(l,{isWarning:w&&v,children:[Object(d.jsxs)(s.n,{justifyContent:"space-between",pl:"16px",children:[Object(d.jsx)(s.O,{fontSize:"14px",children:f}),Object(d.jsx)(s.O,{fontSize:"14px",children:"".concat(m,": ").concat(p?"~":n)})]}),Object(d.jsxs)(s.n,{alignItems:"flex-end",justifyContent:"space-between",children:[Object(d.jsx)(s.d,{children:Object(d.jsx)(b,{pattern:"^[0-9]*[.,]?[0-9]*$",inputMode:"decimal",step:"any",min:t,max:n,onChange:a,placeholder:"0",value:i})}),Object(d.jsxs)(s.n,{alignItems:"center",children:[Object(d.jsx)(s.e,{scale:"sm",onClick:c,mr:"8px",disabled:p,children:g("Max")}),Object(d.jsx)(s.O,{children:r})]})]})]}),w&&O&&Object(d.jsxs)(j,{fontSize:"14px",color:"failure",children:[g("No tokens to stake"),":"," ",Object(d.jsx)(s.s,{fontSize:"14px",bold:!1,href:O,external:!0,color:"failure",children:g("Get %symbol%",{symbol:r})})]})]})}},867:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r,a=t(76),c=t(0),i=t(7),o=t(15),s=i.e.div(r||(r=Object(a.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),u=function(e){var n,t=e.size,r=void 0===t?"md":t,a=Object(c.useContext)(i.a).spacing;switch(r){case"lg":n=a[6];break;case"sm":n=a[2];break;case"md":default:n=a[4]}return Object(o.jsx)(s,{size:n})}}}]);
//# sourceMappingURL=8.2dadde0e.chunk.js.map