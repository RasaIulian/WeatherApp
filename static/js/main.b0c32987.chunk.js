(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),o=n.n(l);n(22);var c,i,u,s,m,d,p,b,g,h,E,x,w,f,y,v,O=n(3),j=n(4);const S=j.a.div(c||(c=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  max-width: 960px;\n"]))),k=j.a.div(i||(i=Object(O.a)(["\n  padding: 5px 10px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  width: 48%; //  will create two columns with a small gap\n  margin-bottom: 20px; // vertical space between rows\n  overflow: auto;\n  p {\n    margin: 5px 0;\n    display: inline-flex;\n    flex-wrap: wrap;\n  }\n  h3 {\n    margin-bottom: 0;\n  }\n\n  ul {\n    margin-bottom: 0;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n\n  li {\n    margin: 5px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    padding: 0 0.2rem;\n    width: 10em;\n    text-align: center;\n    justify-content: center;\n    line-height: 1.5rem;\n    flex-wrap: wrap;\n  }\n  @media (max-width: 980px) {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n"]))),M=j.a.h2(u||(u=Object(O.a)(["\n  line-height: 1.5rem;\n"]))),A=j.a.div(s||(s=Object(O.a)(["\n  background-color: #ffcdd2;\n  color: #c63737;\n  padding: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  margin-bottom: 20px;\n  max-width: 950px;\n  @media (max-width: 980px) {\n    max-width: 460px;\n  }\n"]))),C=Object(j.b)(m||(m=Object(O.a)(["\n  0% {\n    transform: translateX(0);\n  }\n  50% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: translateX(5px);\n  }\n"]))),L=j.a.img(d||(d=Object(O.a)(["\n  animation: "," 3s infinite alternate ease-in-out;\n  padding-top: 0;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.05);\n"])),C),I=j.a.button(p||(p=Object(O.a)(["\n  padding: 10px;\n  font-size: 1.1rem;\n  border: 1px solid #eaeaea;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: background-color, box-shadow 0.3s ease;\n  &:hover {\n    background-color: #eaeaea;\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);\n  }\n"]))),H=j.a.div(b||(b=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n"]))),_=j.a.div(g||(g=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  min-width: 100%;\n  & * {\n    border: none;\n    background-color: rgba(250, 250, 250, 0.5);\n    box-shadow: none;\n    padding: 3px;\n    border-radius: 50%;\n  }\n  & *:hover {\n    background-color: rgba(250, 250, 250, 1);\n\n    box-shadow: none;\n  }\n"]))),N=j.a.div(h||(h=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 73%;\n\n  @media (max-width: 980px) {\n    width: 100%;\n  }\n  @media (max-width: 515px) {\n    margin-bottom: 1rem;\n  }\n"]))),P=j.a.select(E||(E=Object(O.a)(["\n  width: 15rem;\n  height: 2.5rem;\n  font-size: 1.2rem;\n  padding: 5px;\n  border: 1px solid #eaeaea;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  background-color: #eaeaea;\n  transition: box-shadow 0.3s ease;\n  &:hover {\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);\n  }\n  &:focus {\n    border: none;\n    outline: none;\n  }\n\n  /* Styles for active (selected) option */\n  option:checked {\n    border: none;\n    font-weight: bold;\n  }\n\n  /* Styles for inactive (unselected) options */\n  option:not(:checked) {\n    border: none;\n    outline: none;\n  }\n"]))),T=j.a.img(x||(x=Object(O.a)(["\n  border-radius: 5px;\n  max-width: 460px;\n  width: 100%;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  margin-bottom: 20px;\n  @media (max-width: 980px) {\n    margin-bottom: 10px;\n  }\n"]))),z=j.a.span(w||(w=Object(O.a)(["\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  margin: 0 5px;\n  border-radius: 3px;\n  border: 1px solid rgba(170, 170, 170, 0.5); // Equivalent RGBA color for #aaaaaa\n"]))),D=j.a.div(f||(f=Object(O.a)(["\n  color: #d32f2f;\n"]))),W=j.a.span.attrs(e=>({$deg:e.$deg}))(v||(v=Object(O.a)(["\n  margin-left: 10px;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 20px solid #aaaaaa;\n  border-radius: 6px;\n  transform-origin: center;\n  animation: ",' 1s infinite alternate\n    ease-in-out;\n\n  &::after {\n    content: "";\n    position: absolute;\n    left: -3px;\n    top: 9px;\n    width: 5px;\n    height: 5px;\n    background: linear-gradient(\n      ',"deg,\n      #ffff00,\n      #ff0000,\n      #800080\n    );\n    border-radius: 50%;\n  }\n"])),e=>{return t=e.$deg,Object(j.b)(y||(y=Object(O.a)(["\n  from {\n    transform: rotate(","deg);\n  }\n  to {\n    transform: rotate(","deg);\n  }\n"])),t+180-10,t+180+10);var t},e=>e.$deg+180);var q,F,U;const Q=j.a.input(q||(q=Object(O.a)(["\n  width: 15rem;\n  height: 2.5rem;\n  font-size: 1.2rem;\n  padding: 8px;\n  margin-right: 0.5rem;\n  margin-bottom: 1rem;\n  border: 1px solid #eaeaea;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  cursor: text;\n  transition: border-color 0.3s ease;\n\n  &:focus {\n    outline: none;\n    border-color: #aaa;\n  }\n"]))),B=j.a.ul(F||(F=Object(O.a)(["\n  list-style-type: none;\n  padding: 0;\n"]))),J=j.a.li(U||(U=Object(O.a)(["\n  padding: 8px;\n  margin: 3px 0;\n  background-color: #f9f9f9;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #e0e0e0;\n  }\n"])));var R,V,G=e=>{let{onSelectLocation:t}=e;const[n,l]=Object(a.useState)(""),[o,c]=Object(a.useState)(n),[i,u]=Object(a.useState)([]),[s,m]=Object(a.useState)("");Object(a.useEffect)(()=>{const e=setTimeout(()=>{c(n)},500);return()=>clearTimeout(e)},[n]),Object(a.useEffect)(()=>{o.length>3?d(o):(u([]),m(""))},[o]);const d=async e=>{const t="https://api.openweathermap.org/geo/1.0/direct?q=".concat(e,"&limit=5&appid=").concat("4cbdbc7df66de5de3bc03227c33e61be");try{const e=await fetch(t);if(!e.ok)throw new Error("Location HTTP error! status: ".concat(e.status));const n=await e.json();n.length>0?(u(n),m("")):(m("Location not found. Please try again."),u([]))}catch(n){console.error("Error searching location:",n),m("Error searching location: ".concat(n.message)),u([])}};return r.a.createElement("div",null,r.a.createElement(Q,{type:"text",value:n,id:"search",onChange:e=>l(e.target.value),placeholder:"Search location"}),i.length>0&&r.a.createElement(B,null,i.map((e,n)=>r.a.createElement(J,{key:n,onClick:()=>t(e)},e.name,", ",e.state&&e.state+","||""," ",e.country))),s&&r.a.createElement(A,null,s))},$=n(7),X=n(6);const Z=j.a.div(R||(R=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 10px;\n  width: 100%;\n"]))),K=j.a.div(V||(V=Object(O.a)(["\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #b9bcc1;\n  transition: all 0.2s ease-in-out;\n\n  &.active {\n    background-color: #000000;\n  }\n"]))),Y=e=>{let{totalPages:t,currentPage:n}=e;const a=[];for(let l=0;l<t;l++)a.push(r.a.createElement(K,{key:l,className:"dot ".concat(l===n?"active":"")}));return r.a.createElement(Z,{className:"scroll-dots"},a)};function ee(){var e;const t=document.getElementById("location"),[n,l]=Object(a.useState)(null),[o,c]=Object(a.useState)(null),[i,u]=Object(a.useState)(null),[s,m]=Object(a.useState)(""),[d,p]=Object(a.useState)(!1),[b,g]=Object(a.useState)(""),[h,E]=Object(a.useState)(!1),[x,w]=Object(a.useState)(!1),[f,y]=Object(a.useState)(!1),{fetchAltitude:v,loadingAltitude:O,altitudeError:j}=(()=>{const[e,t]=Object(a.useState)(!1),[n,r]=Object(a.useState)("");return{fetchAltitude:async(e,n)=>{try{t(!0),r("");const a=await fetch("https://api.open-elevation.com/api/v1/lookup?locations=".concat(e,",").concat(n));if(t(!1),!a.ok)throw new Error("status ".concat(a.status));return(await a.json()).results[0].elevation}catch(a){console.error("Error fetching altitude data:",a.message),r("Error fetching altitude data: "+a.message),t(!1)}},loadingAltitude:e,altitudeError:n}})(),{aqi:C,components:q,loadingAQI:F,errorAQI:U,getAQICategory:Q,getAQIColor:B,categorizeComponent:J}=((e,t)=>{const[n,r]=Object(a.useState)(null),[l,o]=Object(a.useState)({}),[c,i]=Object(a.useState)(!1),[u,s]=Object(a.useState)(""),m={no2:[0,40,70,150,200,1/0],pm10:[0,20,50,100,200,1/0],o3:[0,60,100,140,180,1/0],pm2_5:[0,10,25,50,75,1/0],so2:[0,20,80,250,350,1/0],co:[0,4400,9400,12400,15400,1/0],nh3:[.1,40,80,120,200],no:[.1,20,40,60,100]};return Object(a.useEffect)(()=>{(async()=>{if(!e||!t)return;i(!0),s("");const n="https://api.openweathermap.org/data/2.5/air_pollution?lat=".concat(e,"&lon=").concat(t,"&appid=").concat("4cbdbc7df66de5de3bc03227c33e61be");try{const e=await fetch(n);if(!e.ok)throw new Error("Server responded with status: ".concat(e.status));const t=await e.json();if(!(t.list&&t.list.length>0))throw new Error("Air quality data is not available.");r(t.list[0].main.aqi),o(t.list[0].components)}catch(a){console.error("Error fetching air quality data:",a),s("Error fetching air quality data: "+a.message)}finally{i(!1)}})()},[e,t]),{aqi:n,components:l,loadingAQI:c,errorAQI:u,getAQICategory:e=>1===e?"Good":2===e?"Fair":3===e?"Moderate":4===e?"Poor":5===e?"Very Poor":"Unknown",getAQIColor:e=>1===e?"#00cc66":2===e?"#ffcc00":3===e?"#ff6600":4===e?"#cc0000":5===e?"#9900cc":"#333333",categorizeComponent:(e,t)=>{const n=m[e];return n?t<=n[0]?"Very Low":t<=n[1]?"Low":t<=n[2]?"Medium":t<=n[3]?"High":"Very High":"Unknown"}}})(n,o),[R,V]=Object(a.useState)(0),[Z,K]=Object(a.useState)(0),ee=e=>{V(t=>{const n=t+4*e;return Math.max(0,Math.min(n,16))})},te=e=>{K(t=>{const n=t+3*e;return Math.max(0,Math.min(n,i.daily.length-3))})},ne=()=>{w(!0);const e=document.getElementsByClassName("toHide");if(navigator.geolocation){const t={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};navigator.geolocation.getCurrentPosition(e=>{re(e.coords.latitude,e.coords.longitude),w(!1)},e=>{ae(e),w(!1)},t);for(let n=0;n<e.length;n++)e[n].style.display="none";p(!0)}else g("Geolocation is not supported by this browser."),w(!1)},ae=e=>{switch(e.code){case e.PERMISSION_DENIED:g("User denied the request for Geolocation. Please enable location access in your browser settings.");break;case e.POSITION_UNAVAILABLE:g("Location information is unavailable.");break;case e.TIMEOUT:g("The request to get user location timed out.");break;default:g("An unknown error occurred.")}},re=async(e,t)=>{l(e),c(t);try{const n=await v(e,t);let a="https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/".concat(t+","+e,",13,0,45/460x250@2x?access_token=").concat("pk.eyJ1IjoiaWxpZXJhc2EiLCJhIjoiY2x5ZnhvYmdwMDNrZTJsczQ2M3F4ejlzaCJ9.lixvmbHaXrnCTNHtlqdt_Q","&logo=false");const r=document.getElementById("mapholder"),l=document.getElementById("location");l&&r&&(l.innerHTML+="Latitude: ".concat(e.toFixed(1),"\xb0<br>\n        Longitude: ").concat(t.toFixed(1),"\xb0<br>\n        Altitude: ").concat(void 0!==n?n+"m":"N/A"),r.src=a)}catch(n){}};function le(e){return e>=0&&e<=2?"Low":e>2&&e<=5?"Moderate":e>5&&e<=7?"High":e>7&&e<=10?"Very High":e>10?"Extreme":"Unknown"}Object(a.useEffect)(()=>{n&&o&&(async()=>{E(!0);try{const e=await(async(e,t)=>{const n="https://api.openweathermap.org/data/3.0/onecall?lat=".concat(e,"&lon=").concat(t,"&units=metric&exclude=minutely&appid=").concat("4cbdbc7df66de5de3bc03227c33e61be");try{const e=await fetch(n),t=await e.json();if(!e.ok)throw new Error("".concat(t.cod,": ").concat(t.message));return t}catch(a){throw console.error("Error fetching weather data:",a),a}})(n,o);u(e),g("")}catch(e){console.error("Error fetching weather data:",e),g("Error fetching weather data: ".concat(e.message))}finally{E(!1)}})()},[n,o]);const oe=Math.ceil(5),ce=Math.ceil((null===i||void 0===i||null===(e=i.daily)||void 0===e?void 0:e.length)/3),ie=Math.floor(R/4),ue=Math.floor((Z+1)/3);return r.a.createElement("div",null,r.a.createElement(M,{className:"toHide"},"Welcome to the Geolocation Weather App"),r.a.createElement("p",{className:"toHide"},"Please click the button to get your coordinates, weather and more..."),r.a.createElement("p",{className:"toHide"},"Location permission must be granted at request."),r.a.createElement(I,{onClick:ne,className:"toHide"},"Try It"),x&&r.a.createElement("p",null,"Loading location data..."),O&&!j&&r.a.createElement("p",null,"Loading altitude data..."),F&&r.a.createElement("p",null,"Loading air quality..."),h&&r.a.createElement("p",null,"Loading weather data..."),!x&&!F&&d&&r.a.createElement(N,null,r.a.createElement(G,{onSelectLocation:e=>{const{lat:n,lon:a,name:r,country:o,state:i}=e;l(n),c(a),m("".concat(r,", ").concat(i||""," ").concat(o)),re(n,a),t&&r&&o&&(t.innerHTML="Location: ".concat(r,", ").concat(i||""," ").concat(o,"<br>")),V(0),K(0)}}),r.a.createElement(P,{id:"select",value:s,onChange:e=>{const n=e.target.selectedIndex,a=e.target.options[n],r=a.getAttribute("latitude"),l=a.getAttribute("longitude");m(a.text),V(0),K(0),"current"===r&&"current"===l?(t.innerHTML="",ne()):(t.innerHTML="",re(parseFloat(r),parseFloat(l)))}},r.a.createElement("option",{hidden:!0,value:""},"Select favorite location"),r.a.createElement("option",{latitude:"current",longitude:"current"},"Current Location"),r.a.createElement("option",{latitude:"45.768739",longitude:"23.641838"},"Dobra, RO"),r.a.createElement("option",{latitude:"45.806776",longitude:"24.146329"},"Sibiu, RO"),r.a.createElement("option",{latitude:"45.871873",longitude:"24.064956"},"Ocna Sb, RO"),r.a.createElement("option",{latitude:"44.4268",longitude:"26.1025"},"Bucharest, RO"),r.a.createElement("option",{latitude:"52.5200",longitude:"13.4050"},"Berlin, DE"),r.a.createElement("option",{latitude:"42.836948",longitude:"-84.605148"},"Dewitt, USA"))),r.a.createElement("div",null,r.a.createElement("p",{id:"location"})),b&&r.a.createElement(A,null,b),U&&r.a.createElement(A,null,U),j&&r.a.createElement(A,null,j),r.a.createElement(S,null,r.a.createElement("div",null,r.a.createElement(T,{id:"mapholder"})),r.a.createElement("br",null),!U&&!F&&C&&r.a.createElement(k,null,r.a.createElement("h3",null,"Air Quality: "),r.a.createElement("p",null,Q(C)),r.a.createElement($.a,{icon:X.e,style:{color:B(C),marginLeft:"5px"}}),r.a.createElement("br",null),f&&r.a.createElement("div",null,r.a.createElement("p",null,"(Air quality index: ",C,")"),r.a.createElement("br",null),r.a.createElement("p",null,"SO\u2082 - Sulphur dioxide: ",q.so2," \u03bcg/m3 (",J("so2",q.so2),")"),r.a.createElement("br",null),r.a.createElement("p",null,"NO\u2082 - Nitrogen dioxide: ",q.no2," \u03bcg/m3 (",J("no2",q.no2),")"),r.a.createElement("br",null),r.a.createElement("p",null,"PM10 - Coarse particulate matter: ",q.pm10," \u03bcg/m3 (",J("pm10",q.pm10),")"),r.a.createElement("br",null),r.a.createElement("p",null,"PM2.5 - Fine particles matter: ",q.pm2_5," \u03bcg/m3 (",J("pm2_5",q.pm2_5),")"),r.a.createElement("br",null),r.a.createElement("p",null,"O\u2083 - Ozone: ",q.o3," \u03bcg/m3 (",J("o3",q.o3),")"),r.a.createElement("br",null),r.a.createElement("p",null,"CO - Carbon monoxide: ",q.co," \u03bcg/m3 (",J("co",q.co),")"),r.a.createElement("br",null),r.a.createElement("p",null,"NO - Nitrogen monoxide: ",q.no," \u03bcg/m3 (",J("no",q.no),")"),r.a.createElement("br",null),r.a.createElement("p",null,"NH3 - Ammonia: ",q.nh3," \u03bcg/m3 (",J("nh3",q.nh3),")")),r.a.createElement(I,{onClick:()=>{y(!f)}},f?r.a.createElement(r.a.Fragment,null,"hide details ",r.a.createElement($.a,{icon:X.d})):r.a.createElement(r.a.Fragment,null,"show details ",r.a.createElement($.a,{icon:X.a})))),!h&&!x&&!F&&i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),i.current&&r.a.createElement(k,null,r.a.createElement("h3",null,"Current Weather:"),r.a.createElement("p",null," ",r.a.createElement("span",{role:"img","aria-label":"temperature"},"\ud83c\udf21\ufe0f"),": ",Math.round(i.current.temp),"\xb0C")," ",r.a.createElement("br",null),r.a.createElement("p",null,"Feels Like: ",Math.round(i.current.feels_like),"\xb0C"),r.a.createElement("br",null),r.a.createElement("p",null,"UV index: ",i.current.uvi," -",r.a.createElement(z,{style:{backgroundColor:"Low"===le(i.current.uvi)?"#4eb400":"Moderate"===le(i.current.uvi)?"#f7e400":"High"===le(i.current.uvi)?"#f88700":"Very High"===le(i.current.uvi)?"#d8001d":"Extreme"===le(i.current.uvi)?"#b54cff":"#f0f0f0"}}),r.a.createElement("span",null," ",le(i.current.uvi))),r.a.createElement("br",null),r.a.createElement("p",null,"Wind: ",Math.round(3.6*i.current.wind_speed)," Km/h"," ","- ",(me=i.current.wind_deg,["N","NE","E","SE","S","SW","W","NW"][Math.round(me/45)%8])," ",r.a.createElement(W,{$deg:i.current.wind_deg})),r.a.createElement("br",null),r.a.createElement("p",null,"Humidity: ",i.current.humidity,"%"),r.a.createElement("br",null),r.a.createElement("p",null,"Atm. Pressure: ",i.current.pressure," mbar -"," ",(se=i.current.pressure)<1013.2?"Low":se>=1013.2?"High":"Unknown"),r.a.createElement("br",null),r.a.createElement("p",null,"Sunrise:"," ",new Date(1e3*(i.current.sunrise+i.timezone_offset)).toISOString().substring(11,16)),r.a.createElement("br",null),r.a.createElement("p",null,"Sunset:"," ",new Date(1e3*(i.current.sunset+i.timezone_offset)).toISOString().substring(11,16)),r.a.createElement("br",null),r.a.createElement(L,{src:"https://openweathermap.org/img/wn/".concat(i.current.weather[0].icon,"@2x.png"),alt:"Weather Icon"}),r.a.createElement("br",null),r.a.createElement("p",null,i.current.weather[0].description),i.alerts&&i.alerts.length>0&&r.a.createElement("div",null,i.alerts.map((e,t)=>r.a.createElement(D,{key:t},r.a.createElement("h3",null,"Weather Alert",i.alerts.length>=2&&" ",i.alerts.length>=2&&t+1,":"),r.a.createElement("p",null,r.a.createElement("strong",null,"Sender:\xa0")," ",e.sender_name),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Start:\xa0"),new Date(1e3*e.start).toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"End:\xa0"),new Date(1e3*e.end).toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Event:\xa0")," ",e.event),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Description:\xa0"),e.description))))),r.a.createElement("br",null),i.hourly&&r.a.createElement(k,null,r.a.createElement("h3",null,"Hourly Weather:"),r.a.createElement("p",null,"*pop = probability of precipitation"),r.a.createElement("br",null),r.a.createElement("p",null,"Timezone ",i.timezone,": GMT",i.timezone_offset>0&&"+",i.timezone_offset/3600),r.a.createElement(H,null,r.a.createElement("ul",null,i.hourly.slice(R,R+4).map((e,t)=>r.a.createElement("li",{key:t},r.a.createElement("b",null,new Date(1e3*(e.dt+i.timezone_offset)).toISOString().substring(11,16)),r.a.createElement("br",null),r.a.createElement("span",{role:"img","aria-label":"temperature"},"\ud83c\udf21\ufe0f")," ",Math.round(e.temp),"\xb0C ",r.a.createElement("br",null),"Feels like: ",Math.round(e.feels_like),"\xb0C ",r.a.createElement("br",null),"pop: ",Math.round(100*e.pop),"% ",r.a.createElement("br",null),"Humidity: ",e.humidity,"%",r.a.createElement("br",null),"Wind: ",Math.round(3.6*e.wind_speed)," Km/h",r.a.createElement("br",null),r.a.createElement(L,{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"Hourly Weather Icon"}),r.a.createElement("br",null),e.weather[0].description))),r.a.createElement(_,null,r.a.createElement(I,{onClick:()=>ee(-1),disabled:0===R},r.a.createElement($.a,{icon:X.b})),r.a.createElement(I,{onClick:()=>ee(1),disabled:R+4>=20},r.a.createElement($.a,{icon:X.c})))),r.a.createElement(Y,{totalPages:oe,currentPage:ie})),r.a.createElement("br",null),i.daily&&r.a.createElement(k,null,r.a.createElement("h3",null,"Daily Weather:"),r.a.createElement(H,null,r.a.createElement("ul",null,i.daily.slice(Z,Z+3).map((e,t)=>{const n=new Date(1e3*e.dt).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return r.a.createElement("li",{key:t},r.a.createElement("b",null,0===t&&0===Z?"Today":n),r.a.createElement("br",null)," ",Math.round(e.temp.min)," ",r.a.createElement("span",{role:"img","aria-label":"temperature"},"\ud83c\udf21\ufe0f")," ",Math.round(e.temp.max),"\xb0C",r.a.createElement("br",null),"Precipitation: ",parseInt(100*e.pop),"%",r.a.createElement("br",null),r.a.createElement(L,{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"Weather Icon"}),r.a.createElement("br",null),e.summary)})),r.a.createElement(_,null,r.a.createElement(I,{onClick:()=>te(-1),disabled:0===Z},r.a.createElement($.a,{icon:X.b}))," ",r.a.createElement(I,{onClick:()=>te(1),disabled:Z+3>=i.daily.length},r.a.createElement($.a,{icon:X.c})))),r.a.createElement(Y,{totalPages:ce,currentPage:ue})),r.a.createElement("br",null))));var se,me}var te=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null))};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)))}},[[14,1,2]]]);
//# sourceMappingURL=main.b0c32987.chunk.js.map