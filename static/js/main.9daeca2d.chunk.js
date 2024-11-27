(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),l=n.n(o);n(22);var c,i,u,s,m,d,p,b,g,h,E,x,w,f,y,O,v=n(3),j=n(4);const S=j.a.div(c||(c=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  max-width: 960px;\n"]))),k=j.a.div(i||(i=Object(v.a)(["\n  padding: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  width: 48%; //  will create two columns with a small gap\n  margin-bottom: 20px; // vertical space between rows\n  overflow: auto;\n  p {\n    margin: 5px 0;\n    display: inline-flex;\n    flex-wrap: wrap;\n  }\n  h3 {\n    margin-bottom: 0;\n  }\n\n  ul {\n    margin-bottom: 0;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n\n  li {\n    margin: 5px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    padding: 1rem;\n    width: 10em;\n    text-align: center;\n    justify-content: center;\n    line-height: 1.5rem;\n    flex-wrap: wrap;\n  }\n  @media (max-width: 980px) {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n"]))),C=j.a.h2(u||(u=Object(v.a)(["\n  line-height: 1.5rem;\n"]))),L=j.a.div(s||(s=Object(v.a)(["\n  background-color: #ffcdd2;\n  color: #c63737;\n  padding: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  margin-bottom: 20px;\n  max-width: 950px;\n  @media (max-width: 980px) {\n    max-width: 460px;\n  }\n"]))),A=Object(j.b)(m||(m=Object(v.a)(["\n  0% {\n    transform: translateX(0);\n  }\n  50% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: translateX(5px);\n  }\n"]))),I=j.a.img(d||(d=Object(v.a)(["\n  animation: "," 3s infinite alternate ease-in-out;\n  padding-top: 0;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.05);\n"])),A),M=j.a.button(p||(p=Object(v.a)(["\n  padding: 10px;\n  font-size: 1.1rem;\n  border: 1px solid #eaeaea;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: background-color, box-shadow 0.3s ease;\n  &:hover {\n    background-color: #eaeaea;\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);\n  }\n"]))),H=j.a.div(b||(b=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n"]))),_=j.a.div(g||(g=Object(v.a)(["\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  min-width: 98%;\n  & * {\n    border: none;\n    background-color: rgba(250, 250, 250, 0.5);\n    box-shadow: none;\n    padding: 3px;\n    border-radius: 50%;\n  }\n  & *:hover {\n    background-color: rgba(250, 250, 250, 1);\n\n    box-shadow: none;\n  }\n"]))),N=j.a.div(h||(h=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 73%;\n\n  @media (max-width: 980px) {\n    width: 100%;\n  }\n  @media (max-width: 515px) {\n    margin-bottom: 1rem;\n  }\n"]))),T=j.a.select(E||(E=Object(v.a)(["\n  width: 15rem;\n  height: 2.5rem;\n  font-size: 1.2rem;\n  padding: 5px;\n  border: 1px solid #eaeaea;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  background-color: #eaeaea;\n  transition: box-shadow 0.3s ease;\n  &:hover {\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);\n  }\n  &:focus {\n    border: none;\n    outline: none;\n  }\n\n  /* Styles for active (selected) option */\n  option:checked {\n    border: none;\n    font-weight: bold;\n  }\n\n  /* Styles for inactive (unselected) options */\n  option:not(:checked) {\n    border: none;\n    outline: none;\n  }\n"]))),z=j.a.img(x||(x=Object(v.a)(["\n  border-radius: 5px;\n  max-width: 460px;\n  width: 100%;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  margin-bottom: 20px;\n  @media (max-width: 980px) {\n    margin-bottom: 10px;\n  }\n"]))),D=j.a.span(w||(w=Object(v.a)(["\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  margin: 0 5px;\n  border-radius: 3px;\n  border: 1px solid rgba(170, 170, 170, 0.5); // Equivalent RGBA color for #aaaaaa\n"]))),W=j.a.div(f||(f=Object(v.a)(["\n  color: #d32f2f;\n"]))),q=j.a.span.attrs(e=>({$deg:e.$deg}))(O||(O=Object(v.a)(["\n  margin-left: 10px;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 20px solid #aaaaaa;\n  border-radius: 6px;\n  transform-origin: center;\n  animation: ",' 1s infinite alternate\n    ease-in-out;\n\n  &::after {\n    content: "";\n    position: absolute;\n    left: -3px;\n    top: 9px;\n    width: 5px;\n    height: 5px;\n    background: linear-gradient(\n      ',"deg,\n      #ffff00,\n      #ff0000,\n      #800080\n    );\n    border-radius: 50%;\n  }\n"])),e=>{return t=e.$deg,Object(j.b)(y||(y=Object(v.a)(["\n  from {\n    transform: rotate(","deg);\n  }\n  to {\n    transform: rotate(","deg);\n  }\n"])),t+180-10,t+180+10);var t},e=>e.$deg+180);var F,P,U;const Q=j.a.input(F||(F=Object(v.a)(["\n  width: 15rem;\n  height: 2.5rem;\n  font-size: 1.2rem;\n  padding: 8px;\n  margin-right: 0.5rem;\n  margin-bottom: 1rem;\n  border: 1px solid #eaeaea;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  cursor: text;\n  transition: border-color 0.3s ease;\n\n  &:focus {\n    outline: none;\n    border-color: #aaa;\n  }\n"]))),B=j.a.ul(P||(P=Object(v.a)(["\n  list-style-type: none;\n  padding: 0;\n"]))),J=j.a.li(U||(U=Object(v.a)(["\n  padding: 8px;\n  margin: 3px 0;\n  background-color: #f9f9f9;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #e0e0e0;\n  }\n"])));var R=e=>{let{onSelectLocation:t}=e;const[n,o]=Object(a.useState)(""),[l,c]=Object(a.useState)(n),[i,u]=Object(a.useState)([]),[s,m]=Object(a.useState)("");Object(a.useEffect)(()=>{const e=setTimeout(()=>{c(n)},500);return()=>clearTimeout(e)},[n]),Object(a.useEffect)(()=>{l.length>3?d(l):(u([]),m(""))},[l]);const d=async e=>{const t="https://api.openweathermap.org/geo/1.0/direct?q=".concat(e,"&limit=5&appid=").concat("4cbdbc7df66de5de3bc03227c33e61be");try{const e=await fetch(t);if(!e.ok)throw new Error("Location HTTP error! status: ".concat(e.status));const n=await e.json();n.length>0?(u(n),m("")):(m("Location not found. Please try again."),u([]))}catch(n){console.error("Error searching location:",n),m("Error searching location: ".concat(n.message)),u([])}};return r.a.createElement("div",null,r.a.createElement(Q,{type:"text",value:n,id:"search",onChange:e=>o(e.target.value),placeholder:"Search location"}),i.length>0&&r.a.createElement(B,null,i.map((e,n)=>r.a.createElement(J,{key:n,onClick:()=>t(e)},e.name,", ",e.state&&e.state+","||""," ",e.country))),s&&r.a.createElement(L,null,s))},V=n(7),G=n(6);function $(){const e=document.getElementById("location"),[t,n]=Object(a.useState)(null),[o,l]=Object(a.useState)(null),[c,i]=Object(a.useState)(null),[u,s]=Object(a.useState)(""),[m,d]=Object(a.useState)(!1),[p,b]=Object(a.useState)(""),[g,h]=Object(a.useState)(!1),[E,x]=Object(a.useState)(!1),[w,f]=Object(a.useState)(!1),{fetchAltitude:y,loadingAltitude:O,altitudeError:v}=(()=>{const[e,t]=Object(a.useState)(!1),[n,r]=Object(a.useState)("");return{fetchAltitude:async(e,n)=>{try{t(!0),r("");const a=await fetch("https://api.open-elevation.com/api/v1/lookup?locations=".concat(e,",").concat(n));if(t(!1),!a.ok)throw new Error("status ".concat(a.status));return(await a.json()).results[0].elevation}catch(a){console.error("Error fetching altitude data:",a.message),r("Error fetching altitude data: "+a.message),t(!1)}},loadingAltitude:e,altitudeError:n}})(),{aqi:j,components:A,loadingAQI:F,errorAQI:P,getAQICategory:U,getAQIColor:Q,categorizeComponent:B}=((e,t)=>{const[n,r]=Object(a.useState)(null),[o,l]=Object(a.useState)({}),[c,i]=Object(a.useState)(!1),[u,s]=Object(a.useState)(""),m={no2:[0,40,70,150,200,1/0],pm10:[0,20,50,100,200,1/0],o3:[0,60,100,140,180,1/0],pm2_5:[0,10,25,50,75,1/0],so2:[0,20,80,250,350,1/0],co:[0,4400,9400,12400,15400,1/0],nh3:[.1,40,80,120,200],no:[.1,20,40,60,100]};return Object(a.useEffect)(()=>{(async()=>{if(!e||!t)return;i(!0),s("");const n="https://api.openweathermap.org/data/2.5/air_pollution?lat=".concat(e,"&lon=").concat(t,"&appid=").concat("4cbdbc7df66de5de3bc03227c33e61be");try{const e=await fetch(n);if(!e.ok)throw new Error("Server responded with status: ".concat(e.status));const t=await e.json();if(!(t.list&&t.list.length>0))throw new Error("Air quality data is not available.");r(t.list[0].main.aqi),l(t.list[0].components)}catch(a){console.error("Error fetching air quality data:",a),s("Error fetching air quality data: "+a.message)}finally{i(!1)}})()},[e,t]),{aqi:n,components:o,loadingAQI:c,errorAQI:u,getAQICategory:e=>1===e?"Good":2===e?"Fair":3===e?"Moderate":4===e?"Poor":5===e?"Very Poor":"Unknown",getAQIColor:e=>1===e?"#00cc66":2===e?"#ffcc00":3===e?"#ff6600":4===e?"#cc0000":5===e?"#9900cc":"#333333",categorizeComponent:(e,t)=>{const n=m[e];return n?t<=n[0]?"Very Low":t<=n[1]?"Low":t<=n[2]?"Medium":t<=n[3]?"High":"Very High":"Unknown"}}})(t,o),[J,$]=Object(a.useState)(0),[X,Z]=Object(a.useState)(0),Y=e=>{$(t=>{const n=t+4*e;return Math.max(0,Math.min(n,16))})},K=e=>{Z(t=>{const n=t+3*e;return Math.max(0,Math.min(n,c.daily.length-3))})},ee=()=>{x(!0);const e=document.getElementsByClassName("toHide");if(navigator.geolocation){const t={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};navigator.geolocation.getCurrentPosition(e=>{ne(e.coords.latitude,e.coords.longitude),x(!1)},e=>{te(e),x(!1)},t);for(let n=0;n<e.length;n++)e[n].style.display="none";d(!0)}else b("Geolocation is not supported by this browser."),x(!1)},te=e=>{switch(e.code){case e.PERMISSION_DENIED:b("User denied the request for Geolocation. Please enable location access in your browser settings.");break;case e.POSITION_UNAVAILABLE:b("Location information is unavailable.");break;case e.TIMEOUT:b("The request to get user location timed out.");break;default:b("An unknown error occurred.")}},ne=async(e,t)=>{n(e),l(t);try{const n=await y(e,t);let a="https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/".concat(t+","+e,",13,0,45/460x250@2x?access_token=").concat("pk.eyJ1IjoiaWxpZXJhc2EiLCJhIjoiY2x5ZnhvYmdwMDNrZTJsczQ2M3F4ejlzaCJ9.lixvmbHaXrnCTNHtlqdt_Q","&logo=false");const r=document.getElementById("mapholder"),o=document.getElementById("location");o&&r&&(o.innerHTML+="Latitude: ".concat(e.toFixed(1),"\xb0<br>\n        Longitude: ").concat(t.toFixed(1),"\xb0<br>\n        Altitude: ").concat(void 0!==n?n+"m":"N/A"),r.src=a)}catch(a){}};function ae(e){return e>=0&&e<=2?"Low":e>2&&e<=5?"Moderate":e>5&&e<=7?"High":e>7&&e<=10?"Very High":e>10?"Extreme":"Unknown"}return Object(a.useEffect)(()=>{t&&o&&(async()=>{h(!0);try{const e=await(async(e,t)=>{const n="https://api.openweathermap.org/data/3.0/onecall?lat=".concat(e,"&lon=").concat(t,"&units=metric&exclude=minutely&appid=").concat("4cbdbc7df66de5de3bc03227c33e61be");try{const e=await fetch(n),t=await e.json();if(!e.ok)throw new Error("".concat(t.cod,": ").concat(t.message));return t}catch(a){throw console.error("Error fetching weather data:",a),a}})(t,o);i(e),b("")}catch(e){console.error("Error fetching weather data:",e),b("Error fetching weather data: ".concat(e.message))}finally{h(!1)}})()},[t,o]),r.a.createElement("div",null,r.a.createElement(C,{className:"toHide"},"Welcome to the Geolocation Weather App"),r.a.createElement("p",{className:"toHide"},"Please click the button to get your coordinates, weather and more..."),r.a.createElement("p",{className:"toHide"},"Location permission must be granted at request."),r.a.createElement(M,{onClick:ee,className:"toHide"},"Try It"),E&&r.a.createElement("p",null,"Loading location data..."),O&&!v&&r.a.createElement("p",null,"Loading altitude data..."),F&&r.a.createElement("p",null,"Loading air quality..."),g&&r.a.createElement("p",null,"Loading weather data..."),!E&&!F&&m&&r.a.createElement(N,null,r.a.createElement(R,{onSelectLocation:t=>{const{lat:a,lon:r,name:o,country:c,state:i}=t;n(a),l(r),s("".concat(o,", ").concat(i||""," ").concat(c)),ne(a,r),e&&o&&c&&(e.innerHTML="Location: ".concat(o,", ").concat(i||""," ").concat(c,"<br>")),$(0),Z(0)}}),r.a.createElement(T,{id:"select",value:u,onChange:t=>{const n=t.target.selectedIndex,a=t.target.options[n],r=a.getAttribute("latitude"),o=a.getAttribute("longitude");s(a.text),$(0),Z(0),"current"===r&&"current"===o?(e.innerHTML="",ee()):(e.innerHTML="",ne(parseFloat(r),parseFloat(o)))}},r.a.createElement("option",{hidden:!0,value:""},"Select favorite location"),r.a.createElement("option",{latitude:"current",longitude:"current"},"Current Location"),r.a.createElement("option",{latitude:"45.768739",longitude:"23.641838"},"Dobra, RO"),r.a.createElement("option",{latitude:"45.806776",longitude:"24.146329"},"Sibiu, RO"),r.a.createElement("option",{latitude:"45.871873",longitude:"24.064956"},"Ocna Sb, RO"),r.a.createElement("option",{latitude:"44.4268",longitude:"26.1025"},"Bucharest, RO"),r.a.createElement("option",{latitude:"52.5200",longitude:"13.4050"},"Berlin, DE"),r.a.createElement("option",{latitude:"42.836948",longitude:"-84.605148"},"Dewitt, USA"))),r.a.createElement("div",null,r.a.createElement("p",{id:"location"})),p&&r.a.createElement(L,null,p),P&&r.a.createElement(L,null,P),v&&r.a.createElement(L,null,v),r.a.createElement(S,null,r.a.createElement("div",null,r.a.createElement(z,{id:"mapholder"})),r.a.createElement("br",null),!P&&!F&&j&&r.a.createElement(k,null,r.a.createElement("h3",null,"Air Quality: "),r.a.createElement("p",null,U(j)," "),r.a.createElement(V.a,{icon:G.e,style:{color:Q(j),marginLeft:"5px"}}),r.a.createElement("br",null),w&&r.a.createElement("div",null,r.a.createElement("p",null,"SO\u2082 - Sulphur dioxide: ",A.so2," \u03bcg/m3 (",B("so2",A.so2),")"),r.a.createElement("br",null),r.a.createElement("p",null,"NO\u2082 - Nitrogen dioxide: ",A.no2," \u03bcg/m3 (",B("no2",A.no2),")"),r.a.createElement("br",null),r.a.createElement("p",null,"PM10 - Coarse particulate matter: ",A.pm10," \u03bcg/m3 (",B("pm10",A.pm10),")"),r.a.createElement("br",null),r.a.createElement("p",null,"PM2.5 - Fine particles matter: ",A.pm2_5," \u03bcg/m3 (",B("pm2_5",A.pm2_5),")"),r.a.createElement("br",null),r.a.createElement("p",null,"O\u2083 - Ozone: ",A.o3," \u03bcg/m3 (",B("o3",A.o3),")"),r.a.createElement("br",null),r.a.createElement("p",null,"CO - Carbon monoxide: ",A.co," \u03bcg/m3 (",B("co",A.co),")"),r.a.createElement("br",null),r.a.createElement("p",null,"NO - Nitrogen monoxide: ",A.no," \u03bcg/m3 (",B("no",A.no),")"),r.a.createElement("br",null),r.a.createElement("p",null,"NH3 - Ammonia: ",A.nh3," \u03bcg/m3 (",B("nh3",A.nh3),")")),r.a.createElement(M,{onClick:()=>{f(!w)}},w?r.a.createElement(r.a.Fragment,null,"hide details ",r.a.createElement(V.a,{icon:G.d})):r.a.createElement(r.a.Fragment,null,"show details ",r.a.createElement(V.a,{icon:G.a})))),!g&&!E&&!F&&c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),c.current&&r.a.createElement(k,null,r.a.createElement("h3",null,"Current Weather:"),r.a.createElement("p",null," ",r.a.createElement("span",{role:"img","aria-label":"temperature"},"\ud83c\udf21\ufe0f"),": ",Math.round(c.current.temp),"\xb0C")," ",r.a.createElement("br",null),r.a.createElement("p",null,"Feels Like: ",Math.round(c.current.feels_like),"\xb0C"),r.a.createElement("br",null),r.a.createElement("p",null,"UV index: ",c.current.uvi," -",r.a.createElement(D,{style:{backgroundColor:"Low"===ae(c.current.uvi)?"#4eb400":"Moderate"===ae(c.current.uvi)?"#f7e400":"High"===ae(c.current.uvi)?"#f88700":"Very High"===ae(c.current.uvi)?"#d8001d":"Extreme"===ae(c.current.uvi)?"#b54cff":"#f0f0f0"}}),r.a.createElement("span",null," ",ae(c.current.uvi))),r.a.createElement("br",null),r.a.createElement("p",null,"Wind: ",Math.round(c.current.wind_speed)," m/s ","- ",(oe=c.current.wind_deg,["N","NE","E","SE","S","SW","W","NW"][Math.round(oe/45)%8])," ",r.a.createElement(q,{$deg:c.current.wind_deg})),r.a.createElement("br",null),r.a.createElement("p",null,"Humidity: ",c.current.humidity,"%"),r.a.createElement("br",null),r.a.createElement("p",null,"Atm. Pressure: ",c.current.pressure," mbar -"," ",(re=c.current.pressure)<1013.2?"Low":re>=1013.2?"High":"Unknown"),r.a.createElement("br",null),r.a.createElement("p",null,"Sunrise:"," ",new Date(1e3*(c.current.sunrise+c.timezone_offset)).toISOString().substring(11,16)),r.a.createElement("br",null),r.a.createElement("p",null,"Sunset:"," ",new Date(1e3*(c.current.sunset+c.timezone_offset)).toISOString().substring(11,16)),r.a.createElement("br",null),r.a.createElement(I,{src:"https://openweathermap.org/img/wn/".concat(c.current.weather[0].icon,"@2x.png"),alt:"Weather Icon"}),r.a.createElement("br",null),r.a.createElement("p",null,c.current.weather[0].description),c.alerts&&c.alerts.length>0&&r.a.createElement("div",null,c.alerts.map((e,t)=>r.a.createElement(W,{key:t},r.a.createElement("h3",null,"Weather Alert",c.alerts.length>=2&&" ",c.alerts.length>=2&&t+1,":"),r.a.createElement("p",null,r.a.createElement("strong",null,"Sender:\xa0")," ",e.sender_name),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Start:\xa0"),new Date(1e3*e.start).toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"End:\xa0"),new Date(1e3*e.end).toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Event:\xa0")," ",e.event),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Description:\xa0"),e.description))))),r.a.createElement("br",null),c.hourly&&r.a.createElement(k,null,r.a.createElement("h3",null,"Hourly Weather:"),r.a.createElement("p",null,"*pop = probability of precipitation"),r.a.createElement("br",null),r.a.createElement("p",null,"Timezone ",c.timezone,": GMT"," ",c.timezone_offset>0&&"+",c.timezone_offset/3600,"h"),r.a.createElement(H,null,r.a.createElement("ul",null,c.hourly.slice(J,J+4).map((e,t)=>r.a.createElement("li",{key:t},r.a.createElement("b",null,new Date(1e3*(e.dt+c.timezone_offset)).toISOString().substring(11,16)),r.a.createElement("br",null),r.a.createElement("span",{role:"img","aria-label":"temperature"},"\ud83c\udf21\ufe0f")," ",Math.round(e.temp),"\xb0C ",r.a.createElement("br",null),"Feels like: ",Math.round(e.feels_like),"\xb0C ",r.a.createElement("br",null),"pop: ",Math.round(100*e.pop),"% ",r.a.createElement("br",null),"Humidity: ",e.humidity,"%",r.a.createElement("br",null),"Wind: ",Math.round(e.wind_speed)," m/s",r.a.createElement("br",null),r.a.createElement(I,{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"Hourly Weather Icon"}),r.a.createElement("br",null),e.weather[0].description))),r.a.createElement(_,null,r.a.createElement(M,{onClick:()=>Y(-1),disabled:0===J},r.a.createElement(V.a,{icon:G.b})),r.a.createElement(M,{onClick:()=>Y(1),disabled:J+4>=20},r.a.createElement(V.a,{icon:G.c}))))),r.a.createElement("br",null),c.daily&&r.a.createElement(k,null,r.a.createElement("h3",null,"Daily Weather:"),r.a.createElement(H,null,r.a.createElement("ul",null,c.daily.slice(X,X+3).map((e,t)=>{const n=new Date(1e3*e.dt).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return r.a.createElement("li",{key:t},r.a.createElement("b",null,0===t&&0===X?"Today":n),r.a.createElement("br",null)," ",Math.round(e.temp.min)," ",r.a.createElement("span",{role:"img","aria-label":"temperature"},"\ud83c\udf21\ufe0f")," ",Math.round(e.temp.max),"\xb0C",r.a.createElement("br",null),"Precipitation: ",parseInt(100*e.pop),"%",r.a.createElement("br",null),r.a.createElement(I,{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"Weather Icon"}),r.a.createElement("br",null),e.summary)})),r.a.createElement(_,null,r.a.createElement(M,{onClick:()=>K(-1),disabled:0===X},r.a.createElement(V.a,{icon:G.b}))," ",r.a.createElement(M,{onClick:()=>K(1),disabled:X+3>=c.daily.length},r.a.createElement(V.a,{icon:G.c}))))),r.a.createElement("br",null))));var re,oe}var X=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)))}},[[14,1,2]]]);
//# sourceMappingURL=main.9daeca2d.chunk.js.map