(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__33gBG",description:"Profile_description__3f4-B",avatar:"Profile_avatar__3SdIC",name:"Profile_name__3cKBO",tag:"Profile_tag__1BCq3",location:"Profile_location__3jR5Q",stats:"Profile_stats__1vL2R",label:"Profile_label__BfQce",quantity:"Profile_quantity__2fK-e"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,a,t){e.exports={transaction:"Transaction_transaction__3kTWg",boxName:"Transaction_boxName__2gTM8",name:"Transaction_name__2xQLJ",nameItem:"Transaction_nameItem__2Kown",list:"Transaction_list__1J5t_"}},function(e,a,t){e.exports={friendList:"FriendList_friendList__13k50",item:"FriendList_item__107yQ",status:"FriendList_status__1M8zN",avatar:"FriendList_avatar__1RCP7",name:"FriendList_name__S_pen"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__37TX1",title:"Statistics_title__3G4DE",statList:"Statistics_statList__39amh",item:"Statistics_item__pgONH",label:"Statistics_label__22b-9",percentage:"Statistics_percentage__30aon"}},,,,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(7),n=t.n(s),c=t(9),i=t.n(c),r=t.p+"static/media/defaultImages.e10903b6.jpg",l=t(1),d=t.n(l),o=t(0);function b(e){var a=e.userAvatar,t=void 0===a?r:a,s=e.userName,n=e.userTag,c=e.userLocation,i=e.userFollowers,l=e.userViews,b=e.userLikes;return Object(o.jsxs)("div",{className:d.a.profile,children:[Object(o.jsxs)("div",{className:d.a.description,children:[Object(o.jsx)("img",{src:t,alt:s,className:d.a.avatar}),Object(o.jsx)("p",{className:d.a.name,children:s}),Object(o.jsxs)("p",{className:d.a.tag,children:["@",n]}),Object(o.jsx)("p",{className:d.a.location,children:c})]}),Object(o.jsxs)("ul",{className:d.a.stats,children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:d.a.label,children:"Followers"}),Object(o.jsx)("span",{className:d.a.quantity,children:i})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:d.a.label,children:"Views"}),Object(o.jsx)("span",{className:d.a.quantity,children:l})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:d.a.label,children:"Likes"}),Object(o.jsx)("span",{className:d.a.quantity,children:b})]})]})]})}var m=t(2),u=t(5),p=t.n(u);function j(e){var a=e.title,t=void 0===a?"Upload stat":a,s=e.stats;return Object(o.jsxs)("section",{className:p.a.statistics,children:[t&&Object(o.jsx)("h2",{className:p.a.title,children:t}),Object(o.jsx)("ul",{className:p.a.statList,children:s.map((function(e){return Object(o.jsxs)("li",{className:p.a.item,children:[Object(o.jsx)("span",{className:p.a.label,children:e.label}),Object(o.jsxs)("span",{className:p.a.percentage,children:[e.percentage,"%"]})]},e.id)}))})]})}var f=t(10),_=t(4),O=t.n(_);function h(e){var a=e.isOnline,t=e.avatar,s=e.name;return Object(o.jsxs)("li",{className:O.a.item,children:[Object(o.jsx)("span",{className:O.a.status,style:{backgroundColor:a?"#008000":"#CD2956"}}),Object(o.jsx)("img",{className:O.a.avatar,src:t,alt:s,width:"48"}),Object(o.jsx)("p",{className:O.a.name,children:s})]})}var y=t(6),x=t.n(y);function v(e){var a=e.friends;return Object(o.jsx)("ul",{className:O.a.friendList,children:a.map((function(e){return Object(o.jsx)(h,{isOnline:e.isOnline,avatar:e.avatar,name:e.name},e.id)}))})}v.protoType={friends:x.a.arrayOf(x.a.shape({isOnline:x.a.bool.isRequired,avatar:x.a.string.isRequired,name:x.a.string.isRequired,id:x.a.number.isRequired}).isRequired).isRequired};var g=t(11),N=t(3),w=t.n(N);function L(e){var a=e.items;return Object(o.jsxs)("table",{className:w.a.transaction,children:[Object(o.jsx)("thead",{className:w.a.boxName,children:Object(o.jsxs)("tr",{className:w.a.name,children:[Object(o.jsx)("th",{className:w.a.nameItem,children:"Amount"}),Object(o.jsx)("th",{className:w.a.nameItem,children:"Currency"}),Object(o.jsx)("th",{className:w.a.nameItem,children:"Type"})]})}),Object(o.jsx)("tbody",{children:a.map((function(e){var a=e.type,t=e.amount,s=e.currency,n=e.id;return Object(o.jsxs)("tr",{className:w.a.list,children:[Object(o.jsx)("td",{children:a}),Object(o.jsx)("td",{children:t}),Object(o.jsx)("td",{children:s})]},n)}))})]})}var S=t(12);function P(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{userAvatar:m.avatar,userName:m.name,userTag:m.tag,userLocation:m.location,userFollowers:m.stats.followers,userViews:m.stats.views,userLikes:m.stats.likes}),Object(o.jsx)(j,{stats:f}),Object(o.jsx)(v,{friends:g}),Object(o.jsx)(L,{items:S})]})}t(20);i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(P,{})}),document.querySelector("#root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.ebf2e82e.chunk.js.map