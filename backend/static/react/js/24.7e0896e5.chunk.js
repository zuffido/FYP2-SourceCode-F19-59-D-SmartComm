(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{618:function(e,t,a){"use strict";t.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]},619:function(e,t,a){"use strict";t.__esModule=!0;var r=a(620);t.CChart=r.CChart,t.CCharts=r.CCharts,t.CChartBar=r.CChartBar,t.CChartHorizontalBar=r.CChartHorizontalBar,t.CChartLine=r.CChartLine,t.CChartDoughnut=r.CChartDoughnut,t.CChartRadar=r.CChartRadar,t.CChartPie=r.CChartPie,t.CChartPolarArea=r.CChartPolarArea},620:function(e,t,a){"use strict";t.__esModule=!0,t.CChartPolarArea=t.CChartPie=t.CChartRadar=t.CChartDoughnut=t.CChartLine=t.CChartHorizontalBar=t.CChartBar=t.CCharts=t.CChart=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var l=r?Object.getOwnPropertyDescriptor(e,n):null;l&&(l.get||l.set)?Object.defineProperty(a,n,l):a[n]=e[n]}a.default=e,t&&t.set(e,a);return a}(a(1)),n=(i(a(57)),i(a(622))),l=a(623);function i(e){return e&&e.__esModule?e:{default:e}}function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a(624);var u=["January","February","March","April","May","June","July","August","September","October","November","December"],c=function(e){var t=e.innerRef,a=e.datasets,i=e.labels,o=e.options,c=e.plugins,d=e.type,m=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["innerRef","datasets","labels","options","plugins","type"]),f=(0,r.useRef)({firstRun:!0}).current,C=(0,r.useState)(),h=C[0],p=C[1],g=(0,r.useRef)(),b=(0,r.useState)("safe_id_"+Math.random().toString(36).replace("0.",""))[0],E=function(){return h&&h.destroy()},v=a&&a[0]&&a[0].data||[],y=(0,r.useMemo)((function(){if(i&&"string"!==typeof i)return i;var e=Array(v.length).fill("");return"indexes"===i?e.map((function(e,t){return t+1})):"months"===i?e.map((function(e,t){return u[t%12]})):e}),[JSON.stringify(i),v.length]),A=function(){if(!o||!o.tooltips)return{tooltips:{enabled:!1,custom:l.customTooltips,intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(e,t){var a,r=t.data.datasets[e.datasetIndex];return{backgroundColor:"object"===typeof(a=r.tooltipLabelColor||r.pointHoverBackgroundColor||r.borderColor||r.backgroundColor)?a[e.index]:a}}}}}}(),P={type:d,data:{datasets:a,labels:y},options:Object.assign({},o,A||{}),plugins:c};return(0,r.useEffect)((function(){f.firstRun||(Object.assign(h,P),h.update())}),[P]),(0,r.useEffect)((function(){return E(),p(new n.default(g.current.getContext("2d"),P)),f.firstRun=!1,function(){return E()}}),[]),r.default.createElement("div",s({},m,{ref:t}),r.default.createElement("canvas",{id:b,ref:g}))};t.CChart=c,c.propTypes={};t.CChartBar=function(e){return r.default.createElement(c,s({},e,{type:"bar"}))};t.CChartHorizontalBar=function(e){return r.default.createElement(c,s({},e,{type:"horizontalBar"}))};t.CChartLine=function(e){return r.default.createElement(c,s({},e,{type:"line"}))};t.CChartDoughnut=function(e){return r.default.createElement(c,s({},e,{type:"doughnut"}))};t.CChartRadar=function(e){return r.default.createElement(c,s({},e,{type:"radar"}))};t.CChartPie=function(e){return r.default.createElement(c,s({},e,{type:"pie"}))};t.CChartPolarArea=function(e){return r.default.createElement(c,s({},e,{type:"polarArea"}))};t.CCharts=function(e){return console.warn("<CCharts> component has been deprecated. Use <CChart> or <CChart{type}> instead"),r.default.createElement(c,e)}},682:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=(a(612),a(613)),i=(a(618),a(619)),o=a(614);t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},"Statistics"),n.a.createElement("div",{className:"card-body"},n.a.createElement(l.wb,null,n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.j,null,n.a.createElement(l.n,null,"Sales Amount"),n.a.createElement(l.k,null,n.a.createElement(l.Vb,{text:"gross sales",header:"$1.999,50",color:"primary"},n.a.createElement(o.a,{width:24,name:"cil-dollar"})),n.a.createElement(l.Wb,{variant:"inverse",value:40,header:"$1.999,50",text:"Revenue"})))),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.j,null,n.a.createElement(l.n,null,"Sales Volume"),n.a.createElement(l.k,null,n.a.createElement(l.Vb,{text:"orders",header:"50",color:"info"},n.a.createElement(o.a,{width:24,name:"cil-dollar"})),n.a.createElement(l.Wb,{variant:"inverse",color:"info",value:40,header:"150",text:"Units Sold"})))),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.j,null,n.a.createElement(l.n,null,"Net Before COGS"),n.a.createElement(l.k,null,n.a.createElement(l.Vb,{text:"refunded",header:"$1.999,50",color:"warning"},n.a.createElement(o.a,{width:24,name:"cil-dollar"})),n.a.createElement(l.Wb,{variant:"inverse",color:"warning",value:40,header:"$1.999,50",text:"COGS"})))),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.j,null,n.a.createElement(l.n,null,"Net Profit"),n.a.createElement(l.k,null,n.a.createElement(l.Vb,{text:"Net Profit",header:"$1.999,50",color:"success"},n.a.createElement(o.a,{width:24,name:"cil-dollar"})),n.a.createElement(l.Wb,{variant:"inverse",color:"success",value:40,header:"$1.999,50",text:"ROI"}))))),n.a.createElement(l.wb,null,n.a.createElement(l.u,null,n.a.createElement(l.j,null,n.a.createElement(l.n,null,"Revenue Per Month"),n.a.createElement(l.k,null,n.a.createElement(i.CChartBar,{type:"bar",datasets:[{label:"PKR",backgroundColor:"#60fcef",data:[40,20,12,39,10,40,39,80,40,20,12,11]}],labels:"months",options:{tooltips:{enabled:!0}}})))),n.a.createElement(l.u,null,n.a.createElement(l.j,null,n.a.createElement(l.n,null,"Units Sold Per Month"),n.a.createElement(l.k,null,n.a.createElement(i.CChartBar,{type:"bar",datasets:[{label:"Number of units",backgroundColor:"#fcd360",data:[40,20,12,39,10,40,39,80,40,20,12,11]}],labels:"months",options:{tooltips:{enabled:!0}}}))))))))}}}]);
//# sourceMappingURL=24.7e0896e5.chunk.js.map