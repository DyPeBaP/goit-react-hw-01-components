(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(a,e,t){a.exports={profile:"Profile_profile__3IOb-",description:"Profile_description__1uAag",avatar:"Profile_avatar__3kDTP",name:"Profile_name__3pQuM",tag:"Profile_tag__pfqZR",location:"Profile_location__3Qj1S",stats:"Profile_stats__1Cf0L",label:"Profile_label__3I3uf",quantity:"Profile_quantity__2lFwH"}},function(a,e,t){a.exports={transaction:"Transaction_transaction__3ErC4",boxName:"Transaction_boxName__2Zjp_",name:"Transaction_name__3t9kS",nameItem:"Transaction_nameItem__1bMR7",list:"Transaction_list__2rFsp"}},function(a,e,t){a.exports={friendList:"FriendList_friendList__2t594",item:"FriendList_item__Dp5aD",status:"FriendList_status__2DYSB",avatar:"FriendList_avatar__1OPNU",name:"FriendList_name__J_9wX"}},function(a,e,t){a.exports={statistics:"Statistics_statistics__2tXc7",title:"Statistics_title__6oRAy",statList:"Statistics_statList__3vaOd",item:"Statistics_item__8Tr23",label:"Statistics_label__1WxBq",percentage:"Statistics_percentage__26-nd"}},,,function(a){a.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(a){a.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(a){a.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,,,function(a,e,t){},function(a,e,t){"use strict";t.r(e);var n=t(6),c=t.n(n),i=t(9),s=t.n(i),r=t.p+"static/media/defaultImages.e10903b6.jpg",l=t(1),d=t.n(l),o=t(0);function b(a){var e=a.avatar,t=void 0===e?r:e,n=a.name,c=a.tag,i=a.location,s=a.stats,l=s.followers,b=s.views,m=s.likes;return Object(o.jsxs)("div",{className:d.a.profile,children:[Object(o.jsxs)("div",{className:d.a.description,children:[Object(o.jsx)("img",{src:t,alt:n,className:d.a.avatar}),Object(o.jsx)("p",{className:d.a.name,children:n}),Object(o.jsxs)("p",{className:d.a.tag,children:["@",c]}),Object(o.jsx)("p",{className:d.a.location,children:i})]}),Object(o.jsxs)("ul",{className:d.a.stats,children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:d.a.label,children:"Followers"}),Object(o.jsx)("span",{className:d.a.quantity,children:l})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:d.a.label,children:"Views"}),Object(o.jsx)("span",{className:d.a.quantity,children:b})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:d.a.label,children:"Likes"}),Object(o.jsx)("span",{className:d.a.quantity,children:m})]})]})]})}var m=t(7),p=t(4),u=t.n(p);function j(a){var e=a.title,t=void 0===e?"Upload stat":e,n=a.stats;return Object(o.jsxs)("section",{className:u.a.statistics,children:[t&&Object(o.jsx)("h2",{className:u.a.title,children:t}),Object(o.jsx)("ul",{className:u.a.statList,children:n.map((function(a){return Object(o.jsxs)("li",{className:u.a.item,children:[Object(o.jsx)("span",{className:u.a.label,children:a.label}),Object(o.jsxs)("span",{className:u.a.percentage,children:[a.percentage,"%"]})]},a.id)}))})]})}var f=t(10),_=t(3),O=t.n(_);function h(a){var e=a.isOnline,t=a.avatar,n=a.name;return Object(o.jsxs)("li",{className:O.a.item,children:[Object(o.jsx)("span",{className:O.a.status,style:{backgroundColor:e?"#008000":"#CD2956"}}),Object(o.jsx)("img",{className:O.a.avatar,src:t,alt:n,width:"48"}),Object(o.jsx)("p",{className:O.a.name,children:n})]})}var y=t(5),x=t.n(y);function v(a){var e=a.friends;return Object(o.jsx)("ul",{className:O.a.friendList,children:e.map((function(a){return Object(o.jsx)(h,{isOnline:a.isOnline,avatar:a.avatar,name:a.name},a.id)}))})}v.protoType={friends:x.a.arrayOf(x.a.shape({isOnline:x.a.bool.isRequired,avatar:x.a.string.isRequired,name:x.a.string.isRequired,id:x.a.number.isRequired}).isRequired).isRequired};var g=t(11),N=t(2),w=t.n(N);function L(a){var e=a.items;return Object(o.jsxs)("table",{className:w.a.transaction,children:[Object(o.jsx)("thead",{className:w.a.boxName,children:Object(o.jsxs)("tr",{className:w.a.name,children:[Object(o.jsx)("th",{className:w.a.nameItem,children:"Amount"}),Object(o.jsx)("th",{className:w.a.nameItem,children:"Currency"}),Object(o.jsx)("th",{className:w.a.nameItem,children:"Type"})]})}),Object(o.jsx)("tbody",{children:e.map((function(a){var e=a.type,t=a.amount,n=a.currency,c=a.id;return Object(o.jsxs)("tr",{className:w.a.list,children:[Object(o.jsx)("td",{children:e}),Object(o.jsx)("td",{children:t}),Object(o.jsx)("td",{children:n})]},c)}))})]})}var S=t(12);function P(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{name:m.name,tag:m.tag,location:m.location,stats:m.stats}),Object(o.jsx)(j,{stats:f}),Object(o.jsx)(v,{friends:g}),Object(o.jsx)(L,{items:S})]})}t(20);s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(P,{})}),document.querySelector("#root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.d8995479.chunk.js.map