(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{618:function(e,t,a){"use strict";t.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]},619:function(e,t,a){"use strict";t.__esModule=!0;var r=a(620);t.CChart=r.CChart,t.CCharts=r.CCharts,t.CChartBar=r.CChartBar,t.CChartHorizontalBar=r.CChartHorizontalBar,t.CChartLine=r.CChartLine,t.CChartDoughnut=r.CChartDoughnut,t.CChartRadar=r.CChartRadar,t.CChartPie=r.CChartPie,t.CChartPolarArea=r.CChartPolarArea},620:function(e,t,a){"use strict";t.__esModule=!0,t.CChartPolarArea=t.CChartPie=t.CChartRadar=t.CChartDoughnut=t.CChartLine=t.CChartHorizontalBar=t.CChartBar=t.CCharts=t.CChart=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=r?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(a,n,i):a[n]=e[n]}a.default=e,t&&t.set(e,a);return a}(a(1)),n=(s(a(57)),s(a(622))),i=a(623);function s(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a(624);var u=["January","February","March","April","May","June","July","August","September","October","November","December"],c=function(e){var t=e.innerRef,a=e.datasets,s=e.labels,l=e.options,c=e.plugins,d=e.type,m=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["innerRef","datasets","labels","options","plugins","type"]),f=(0,r.useRef)({firstRun:!0}).current,C=(0,r.useState)(),h=C[0],p=C[1],g=(0,r.useRef)(),b=(0,r.useState)("safe_id_"+Math.random().toString(36).replace("0.",""))[0],E=function(){return h&&h.destroy()},v=a&&a[0]&&a[0].data||[],y=(0,r.useMemo)((function(){if(s&&"string"!==typeof s)return s;var e=Array(v.length).fill("");return"indexes"===s?e.map((function(e,t){return t+1})):"months"===s?e.map((function(e,t){return u[t%12]})):e}),[JSON.stringify(s),v.length]),P=function(){if(!l||!l.tooltips)return{tooltips:{enabled:!1,custom:i.customTooltips,intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(e,t){var a,r=t.data.datasets[e.datasetIndex];return{backgroundColor:"object"===typeof(a=r.tooltipLabelColor||r.pointHoverBackgroundColor||r.borderColor||r.backgroundColor)?a[e.index]:a}}}}}}(),A={type:d,data:{datasets:a,labels:y},options:Object.assign({},l,P||{}),plugins:c};return(0,r.useEffect)((function(){f.firstRun||(Object.assign(h,A),h.update())}),[A]),(0,r.useEffect)((function(){return E(),p(new n.default(g.current.getContext("2d"),A)),f.firstRun=!1,function(){return E()}}),[]),r.default.createElement("div",o({},m,{ref:t}),r.default.createElement("canvas",{id:b,ref:g}))};t.CChart=c,c.propTypes={};t.CChartBar=function(e){return r.default.createElement(c,o({},e,{type:"bar"}))};t.CChartHorizontalBar=function(e){return r.default.createElement(c,o({},e,{type:"horizontalBar"}))};t.CChartLine=function(e){return r.default.createElement(c,o({},e,{type:"line"}))};t.CChartDoughnut=function(e){return r.default.createElement(c,o({},e,{type:"doughnut"}))};t.CChartRadar=function(e){return r.default.createElement(c,o({},e,{type:"radar"}))};t.CChartPie=function(e){return r.default.createElement(c,o({},e,{type:"pie"}))};t.CChartPolarArea=function(e){return r.default.createElement(c,o({},e,{type:"polarArea"}))};t.CCharts=function(e){return console.warn("<CCharts> component has been deprecated. Use <CChart> or <CChart{type}> instead"),r.default.createElement(c,e)}},680:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=(a(612),a(613)),s=a(618),l=a(619),o=a(614),u=["item#","name","units sold","revenue","total stock"],c=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},"Product Statistics"),n.a.createElement("div",{className:"card-body"},n.a.createElement(i.j,null,n.a.createElement(i.n,null,"Monthly Valuation"),n.a.createElement(i.k,null,n.a.createElement(i.wb,null,n.a.createElement(i.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(i.Vb,{text:"units sold",header:"$1.999,50",color:"primary",iconPadding:!1},n.a.createElement(o.a,{width:24,name:"cil-settings"}))),n.a.createElement(i.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(i.Vb,{text:"estimated profit",header:"$1.999,50",color:"info",iconPadding:!1},n.a.createElement(o.a,{width:24,name:"cil-laptop"}))),n.a.createElement(i.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(i.Vb,{text:"revenue",header:"$1.999,50",color:"warning",iconPadding:!1},n.a.createElement(o.a,{width:24,name:"cil-moon"}))),n.a.createElement(i.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(i.Vb,{text:"total discount",header:"$1.999,50",color:"danger",iconPadding:!1},n.a.createElement(o.a,{width:24,name:"cil-bell"})))))),n.a.createElement(i.wb,null,n.a.createElement(i.u,null,n.a.createElement(i.z,{className:"row justify-content-md-center"},n.a.createElement(i.E,null,"Select Product"),n.a.createElement(i.D,null,n.a.createElement(i.C,null,"Sufi Banaspati"),n.a.createElement(i.C,null,"jam e shireen"))),n.a.createElement(i.j,null,n.a.createElement(i.n,null,"Sales Per Month"),n.a.createElement(i.k,null,n.a.createElement(l.CChartBar,{type:"bar",datasets:[{label:"GitHub Commits",backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40,20,12,11]}],labels:"months",options:{tooltips:{enabled:!0}}})))),n.a.createElement(i.u,null,n.a.createElement(i.j,null,n.a.createElement(i.n,null,"Top Selling"),n.a.createElement(i.k,null,n.a.createElement(i.y,{items:s.a,fields:u,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,scopedSlots:{status:function(e){return n.a.createElement("td",null,n.a.createElement(i.b,{color:c(e.status)},e.status))}}}))))))))}}}]);
//# sourceMappingURL=22.8fe2bcb8.chunk.js.map