(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),l=n.n(o);n(22);var c,i,s,m,u,d,p,b,g,h,E,x,f,w,y,v,O,j,S=n(2),k=n(3);const C=k.a.div(c||(c=Object(S.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  max-width: 960px;\n"]))),M=k.a.div(i||(i=Object(S.a)(["\n  padding: 5px 10px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  width: 48%; //  will create two columns with a small gap\n  margin-bottom: 20px; // vertical space between rows\n  overflow: auto;\n  p {\n    margin: 5px 0;\n    display: inline-flex;\n    flex-wrap: wrap;\n  }\n  h3 {\n    margin-bottom: 0;\n  }\n\n  ul {\n    margin-bottom: 0;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n\n  li {\n    margin: 5px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    padding: 0 0.2rem;\n    width: 10em;\n    text-align: center;\n    justify-content: center;\n    line-height: 1.5rem;\n    flex-wrap: wrap;\n  }\n  @media (max-width: 980px) {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n"]))),A=k.a.h2(s||(s=Object(S.a)(["\n  line-height: 1.5rem;\n"]))),I=k.a.div(m||(m=Object(S.a)(["\n  // background-color: #ffcdd2;\n  color: #c63737;\n  padding: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  margin-bottom: 20px;\n  max-width: 950px;\n  @media (max-width: 980px) {\n    max-width: 460px;\n  }\n"]))),L=Object(k.b)(u||(u=Object(S.a)(["\n  0% {\n    opacity: 0.5; // 50% opacity\n  }\n  100% {\n    opacity: 1; // 100% opacity\n  }\n"]))),H=k.a.div(d||(d=Object(S.a)(["\n  // background-color: #ffcdd2;\n  color: #f88700;\n  padding: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  margin-bottom: 20px;\n  max-width: 950px;\n  @media (max-width: 980px) {\n    max-width: 460px;\n  }\n\n  // Apply the animation to text elements\n  span {\n    animation: "," 1s infinite alternate;\n  }\n"])),L),N=Object(k.b)(p||(p=Object(S.a)(["\n  0% {\n    transform: translateX(0);\n  }\n  50% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: translateX(5px);\n  }\n"]))),_=k.a.img(b||(b=Object(S.a)(["\n  animation: "," 3s infinite alternate ease-in-out;\n  padding-top: 0;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.05);\n"])),N),P=k.a.button(g||(g=Object(S.a)(["\n  padding: 10px;\n  font-size: 1.1rem;\n  border: 1px solid #eaeaea;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: all 0.3s ease-out;\n\n  &:disabled {\n  opacity: 0.7;\n  pointer-events: none;\n}\n  &:hover {\n    background-color: #eaeaea;\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);\n  }\n"]))),T=k.a.div(h||(h=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n"]))),F=k.a.div(E||(E=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  min-width: 100%;\n  & * {\n    border: none;\n    background-color: rgba(250, 250, 250, 0.5);\n    box-shadow: none;\n    padding: 3px;\n    border-radius: 50%;\n  }\n  & *:hover {\n    background-color: rgba(250, 250, 250, 1);\n\n    box-shadow: none;\n  }\n"]))),z=k.a.div(x||(x=Object(S.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 73%;\n\n  @media (max-width: 980px) {\n    width: 100%;\n  }\n  @media (max-width: 515px) {\n    margin-bottom: 1rem;\n  }\n"]))),W=k.a.select(f||(f=Object(S.a)(["\n  width: 15rem;\n  height: 2.5rem;\n  font-size: 1.2rem;\n  padding: 5px;\n  border: 1px solid #eaeaea;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  background-color: #eaeaea;\n  transition: box-shadow 0.3s ease;\n  &:hover {\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);\n  }\n  &:focus, &:active {\n    border: none;\n    outline: none;\n   \n  }\n\n  /* Styles for active (selected) option */\n  option:checked {\n    border: none;\n    font-weight: bold;\n  }\n\n  /* Styles for inactive (unselected) options */\n  option:not(:checked) {\n    border: none;\n    outline: none;\n  }\n"]))),q=k.a.img(w||(w=Object(S.a)(["\n  border-radius: 5px;\n  max-width: 460px;\n  width: 100%;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  margin-bottom: 20px;\n  @media (max-width: 980px) {\n    margin-bottom: 10px;\n  }\n"]))),D=k.a.span(y||(y=Object(S.a)(["\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  margin: 0 5px;\n  border-radius: 3px;\n  border: 1px solid rgba(170, 170, 170, 0.5); // Equivalent RGBA color for #aaaaaa\n"]))),U=k.a.div(v||(v=Object(S.a)(["\n  color: #d32f2f;\n"]))),Q=k.a.span.attrs(e=>({$deg:e.$deg}))(j||(j=Object(S.a)(["\n  margin-left: 10px;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 20px solid #aaaaaa;\n  border-radius: 6px;\n  transform-origin: center;\n  animation: ",' 1s infinite alternate\n    ease-in-out;\n\n  &::after {\n    content: "";\n    position: absolute;\n    left: -3px;\n    top: 9px;\n    width: 5px;\n    height: 5px;\n    background: linear-gradient(\n      ',"deg,\n      #ffff00,\n      #ff0000,\n      #800080\n    );\n    border-radius: 50%;\n  }\n"])),e=>{return t=e.$deg,Object(k.b)(O||(O=Object(S.a)(["\n  from {\n    transform: rotate(","deg);\n  }\n  to {\n    transform: rotate(","deg);\n  }\n"])),t+180-10,t+180+10);var t},e=>e.$deg+180);var B,J,V;const G=k.a.input(B||(B=Object(S.a)(["\n  width: 15rem;\n  height: 2.5rem;\n  font-size: 1.2rem;\n  padding: 8px;\n  margin-right: 0.5rem;\n  margin-bottom: 1rem;\n  border: 1px solid #eaeaea;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  cursor: text;\n  transition: border-color 0.3s ease;\n\n  &:focus {\n    outline: none;\n    border-color: #aaa;\n  }\n"]))),R=k.a.ul(J||(J=Object(S.a)(["\n  list-style-type: none;\n  padding: 0;\n"]))),$=k.a.li(V||(V=Object(S.a)(["\n  padding: 8px;\n  margin: 3px 0;\n  background-color: #f9f9f9;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #e0e0e0;\n  }\n"])));var X,Z,K=e=>{let{onSelectLocation:t}=e;const[n,o]=Object(a.useState)(""),[l,c]=Object(a.useState)(n),[i,s]=Object(a.useState)([]),[m,u]=Object(a.useState)("");Object(a.useEffect)(()=>{const e=setTimeout(()=>{c(n)},500);return()=>clearTimeout(e)},[n]),Object(a.useEffect)(()=>{l.length>3?d(l):(s([]),u(""))},[l]);const d=async e=>{const t="https://api.openweathermap.org/geo/1.0/direct?q=".concat(e,"&limit=5&appid=").concat("4cbdbc7df66de5de3bc03227c33e61be");try{const e=await fetch(t);if(!e.ok)throw new Error("Location HTTP error! status: ".concat(e.status));const n=await e.json();n.length>0?(s(n),u("")):(u("Location not found. Please try again."),s([]))}catch(n){console.error("Error searching location:",n),u("Error searching location: ".concat(n.message)),s([])}};return r.a.createElement("div",null,r.a.createElement(G,{type:"text",value:n,id:"search",onChange:e=>o(e.target.value),placeholder:"Search location"}),i.length>0&&r.a.createElement(R,null,i.map((e,n)=>r.a.createElement($,{key:n,onClick:()=>t(e)},e.name,", ",e.state&&e.state+","||""," ",e.country))),m&&r.a.createElement(I,null,m))},Y=n(6),ee=n(5);const te=k.a.div(X||(X=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 10px;\n  width: 100%;\n"]))),ne=k.a.div(Z||(Z=Object(S.a)(["\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #b9bcc1;\n  border: 1px solid #b9bcc1;\n  transition: all 0.2s ease-in-out;\n\n  &.active {\n    background-color: #000000;\n    border: 1px solid #000000;\n  }\n"]))),ae=e=>{let{totalPages:t,currentPage:n}=e;const a=[];for(let o=0;o<t;o++)a.push(r.a.createElement(ne,{key:o,className:"dot ".concat(o===n?"active":"")}));return r.a.createElement(te,{className:"scroll-dots"},a)};function re(){var e;const t=document.getElementById("location"),[n,o]=Object(a.useState)(null),[l,c]=Object(a.useState)(null),[i,s]=Object(a.useState)(null),[m,u]=Object(a.useState)(""),[d,p]=Object(a.useState)(!1),[b,g]=Object(a.useState)(""),[h,E]=Object(a.useState)(!1),[x,f]=Object(a.useState)(!1),[w,y]=Object(a.useState)(!1),{fetchAltitude:v,loadingAltitude:O,altitudeError:j}=(()=>{const[e,t]=Object(a.useState)(!1),[n,r]=Object(a.useState)("");return{fetchAltitude:async(e,n)=>{try{t(!0),r("");const a=await fetch("https://api.open-elevation.com/api/v1/lookup?locations=".concat(e,",").concat(n));if(t(!1),!a.ok)throw new Error("status ".concat(a.status));return(await a.json()).results[0].elevation}catch(a){console.error("Error fetching altitude data:",a.message),r("Error fetching altitude data: "+a.message),t(!1)}},loadingAltitude:e,altitudeError:n}})(),{aqi:S,components:k,loadingAQI:L,errorAQI:N,getAQICategory:B,getAQIColor:J,categorizeComponent:V,getComponentColor:G}=((e,t)=>{const[n,r]=Object(a.useState)(null),[o,l]=Object(a.useState)({}),[c,i]=Object(a.useState)(!1),[s,m]=Object(a.useState)(""),u={no2:[0,40,70,150,200,1/0],pm10:[0,20,50,100,200,1/0],o3:[0,60,100,140,180,1/0],pm2_5:[0,10,25,50,75,1/0],so2:[0,20,80,250,350,1/0],co:[0,4400,9400,12400,15400,1/0],nh3:[.1,40,80,120,200],no:[.1,20,40,60,100]};return Object(a.useEffect)(()=>{(async()=>{if(!e||!t)return;i(!0),m("");const n="https://api.openweathermap.org/data/2.5/air_pollution?lat=".concat(e,"&lon=").concat(t,"&appid=").concat("4cbdbc7df66de5de3bc03227c33e61be");try{const e=await fetch(n);if(!e.ok)throw new Error("Server responded with status: ".concat(e.status));const t=await e.json();if(!(t.list&&t.list.length>0))throw new Error("Air quality data is not available.");r(t.list[0].main.aqi),l(t.list[0].components)}catch(a){console.error("Error fetching air quality data:",a),m("Error fetching air quality data: "+a.message)}finally{i(!1)}})()},[e,t]),{aqi:n,components:o,loadingAQI:c,errorAQI:s,getAQICategory:e=>1===e?"Good":2===e?"Fair":3===e?"Moderate":4===e?"Poor":5===e?"Very Poor":"Unknown",getAQIColor:e=>1===e?"#00cc66":2===e?"#ffcc00":3===e?"#ff6600":4===e?"#cc0000":5===e?"#9900cc":"#333333",categorizeComponent:(e,t)=>{const n=u[e];return n?t<=n[0]?"Very Low":t<=n[1]?"Low":t<=n[2]?"Medium":t<=n[3]?"High":"Very High":"Unknown"},getComponentColor:(e,t)=>{const n=u[e];return t<=n[0]?"#008040":t<=n[1]?"#3ac600":t<=n[2]?"#ff6600":t<=n[3]?"#cc0000":t>n[3]?"#9900cc":"#333333"}}})(n,l),[R,$]=Object(a.useState)(0),[X,Z]=Object(a.useState)(0),te=e=>{$(t=>{const n=t+4*e;return Math.max(0,Math.min(n,16))})},ne=e=>{Z(t=>{const n=t+3*e;return Math.max(0,Math.min(n,i.daily.length-3))})},re=async()=>{f(!0);const e=document.getElementsByClassName("toHide");if(navigator.geolocation){const t={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};navigator.geolocation.getCurrentPosition(e=>{le(e.coords.latitude,e.coords.longitude),f(!1)},e=>{oe(e),f(!1)},t);for(let n=0;n<e.length;n++)e[n].style.display="none";p(!0)}else g("Geolocation is not supported by this browser."),f(!1)},oe=e=>{switch(e.code){case e.PERMISSION_DENIED:g("User denied the request for Geolocation. Please enable location access in your browser settings.");break;case e.POSITION_UNAVAILABLE:g("Location information is unavailable.");break;case e.TIMEOUT:g("The request to get user location timed out.");break;default:g("An unknown error occurred.")}},le=async(e,t)=>{o(e),c(t);let n="".concat(t,",").concat(e),a={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[t,e]},properties:{"marker-color":"#FF0000"}}]},r=encodeURIComponent(JSON.stringify(a)),l="https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/geojson(".concat(r,")/").concat(n,",13,0,45/460x250@2x?access_token=").concat("pk.eyJ1IjoiaWxpZXJhc2EiLCJhIjoiY2x5ZnhvYmdwMDNrZTJsczQ2M3F4ejlzaCJ9.lixvmbHaXrnCTNHtlqdt_Q","&logo=false");const i=document.getElementById("mapholder"),s=document.getElementById("location");s&&i&&!x&&(s.innerHTML+="Latitude: ".concat(e.toFixed(1),"\xb0<br>\n      Longitude: ").concat(t.toFixed(1),"\xb0<br>"),i.src=l);try{const n=await v(e,t);s&&!O&&(s.innerHTML+="Altitude: ".concat(void 0!==n?n+"m":"N/A"))}catch(m){console.error("Error fetching altitude or setting map image:",m)}};function ce(e){return e>=0&&e<=2?"Low":e>2&&e<=5?"Moderate":e>5&&e<=7?"High":e>7&&e<=10?"Very High":e>10?"Extreme":"Unknown"}Object(a.useEffect)(()=>{n&&l&&(async()=>{E(!0);try{const e=await(async(e,t)=>{const n="https://api.openweathermap.org/data/3.0/onecall?lat=".concat(e,"&lon=").concat(t,"&units=metric&exclude=minutely&appid=").concat("4cbdbc7df66de5de3bc03227c33e61be");try{const e=await fetch(n),t=await e.json();if(!e.ok)throw new Error("".concat(t.cod,": ").concat(t.message));return t}catch(a){throw console.error("Error fetching weather data:",a),a}})(n,l);s(e),g("")}catch(e){console.error("Error fetching weather data:",e),g("Error fetching weather data: ".concat(e.message))}finally{E(!1)}})()},[n,l]);const ie=Math.ceil(5),se=Math.ceil((null===i||void 0===i||null===(e=i.daily)||void 0===e?void 0:e.length)/3),me=Math.floor(R/4),ue=Math.floor((X+1)/3);return r.a.createElement("div",null,r.a.createElement(A,{className:"toHide"},"Welcome to the Geolocation Weather App"),r.a.createElement("p",{className:"toHide"},"Please click the button to get your coordinates, weather and more..."),r.a.createElement("p",{className:"toHide"},"Location permission must be granted at request."),r.a.createElement(P,{onClick:re,className:"toHide"},"Try It"),(O||x||L||h)&&r.a.createElement(H,null,"Loading",x&&r.a.createElement("span",null," location data..."),O&&!j&&r.a.createElement("span",null," altitude data..."),L&&r.a.createElement("span",null," air quality data..."),h&&r.a.createElement("span",null," weather data...")),!L&&!x&&d&&r.a.createElement(z,null,r.a.createElement(K,{onSelectLocation:e=>{const{lat:n,lon:a,name:r,country:l,state:i}=e;o(n),c(a),u("".concat(r,", ").concat(i||""," ").concat(l)),t&&r&&l&&(t.innerHTML="Location: ".concat(r,", ").concat(i||""," ").concat(l,"<br>")),le(n,a),y(!1),$(0),Z(0)}}),r.a.createElement(W,{id:"select",value:m,onChange:e=>{const n=e.target.selectedIndex,a=e.target.options[n],r=a.getAttribute("latitude"),o=a.getAttribute("longitude");u(a.text),$(0),Z(0),"current"===r&&"current"===o?(t.innerHTML="",re(),y(!1)):(t.innerHTML="",le(parseFloat(r),parseFloat(o)),y(!1))}},r.a.createElement("option",{hidden:!0,value:""},"Select favorite location"),r.a.createElement("option",{latitude:"current",longitude:"current"},"Current Location"),r.a.createElement("option",{latitude:"45.871873",longitude:"24.064956"},"Ocna Sb, RO"),r.a.createElement("option",{latitude:"44.4268",longitude:"26.1025"},"Bucharest, RO"),r.a.createElement("option",{latitude:"52.5200",longitude:"13.4050"},"Berlin, DE"))),r.a.createElement("div",null,r.a.createElement("p",{id:"location"})),b&&r.a.createElement(I,null,b),N&&r.a.createElement(I,null,N),j&&r.a.createElement(I,null,j),r.a.createElement(C,null,r.a.createElement("div",null,r.a.createElement(q,{id:"mapholder"})),r.a.createElement("br",null),!N&&!L&&S&&r.a.createElement(M,null,r.a.createElement("h3",null,"Air Quality: "),r.a.createElement("p",null,B(S)),r.a.createElement(Y.a,{icon:ee.f,style:{color:J(S),marginLeft:"5px"}}),r.a.createElement("br",null),w&&r.a.createElement("div",null,r.a.createElement("p",null,"Air quality index: ",S," (1-5)"),r.a.createElement("br",null),r.a.createElement("p",null,"PM2.5 - Fine particles matter: ",k.pm2_5," \u03bcg/m3 -\xa0",r.a.createElement("span",{style:{color:G("pm2_5",k.pm2_5)}},"(",V("pm2_5",k.pm2_5),")")," "),r.a.createElement("br",null),r.a.createElement("p",null,"PM10 - Coarse particulate matter: ",k.pm10," \u03bcg/m3 -\xa0",r.a.createElement("span",{style:{color:G("pm10",k.pm10)}},"(",V("pm10",k.pm10),")")," "),r.a.createElement("br",null),r.a.createElement("p",null,"O\u2083 - Ozone: ",k.o3," \u03bcg/m3 -\xa0",r.a.createElement("span",{style:{color:G("o3",k.o3)}},"(",V("o3",k.o3),")")," "),r.a.createElement("br",null),r.a.createElement("p",null,"SO\u2082 - Sulphur dioxide: ",k.so2," \u03bcg/m3 -\xa0",r.a.createElement("span",{style:{color:G("so2",k.so2)}},"(",V("so2",k.so2),")")," "),r.a.createElement("br",null),r.a.createElement("p",null,"NO\u2082 - Nitrogen dioxide: ",k.no2," \u03bcg/m3 -\xa0",r.a.createElement("span",{style:{color:G("no2",k.no2)}},"(",V("no2",k.no2),")")," "),r.a.createElement("br",null),r.a.createElement("p",null,"CO - Carbon monoxide: ",k.co," \u03bcg/m3 -\xa0",r.a.createElement("span",{style:{color:G("co",k.co)}},"(",V("co",k.co),")")," "),r.a.createElement("br",null),r.a.createElement("p",null,"NO - Nitrogen monoxide: ",k.no," \u03bcg/m3 -\xa0",r.a.createElement("span",{style:{color:G("no",k.no)}},"(",V("no",k.no),")")," "),r.a.createElement("br",null),r.a.createElement("p",null,"NH3 - Ammonia: ",k.nh3," \u03bcg/m3 -\xa0",r.a.createElement("span",{style:{color:G("nh3",k.nh3)}},"(",V("nh3",k.nh3),")")," ")),r.a.createElement(P,{onClick:()=>{y(!w)}},w?r.a.createElement(r.a.Fragment,null,"hide details ",r.a.createElement(Y.a,{icon:ee.d})):r.a.createElement(r.a.Fragment,null,"show details ",r.a.createElement(Y.a,{icon:ee.a})))),!h&&!x&&!L&&i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),i.current&&r.a.createElement(M,null,r.a.createElement("h3",null,"Current Weather:"),r.a.createElement("p",null," ",r.a.createElement("span",{role:"img","aria-label":"temperature"},r.a.createElement(Y.a,{icon:ee.e}),"\xa0"),Math.round(i.current.temp),"\xb0C")," ",r.a.createElement("br",null),r.a.createElement("p",null,"Feels Like: ",Math.round(i.current.feels_like),"\xb0C"),r.a.createElement("br",null),r.a.createElement("p",null,"UV index: ",i.current.uvi," -",r.a.createElement(D,{style:{backgroundColor:"Low"===ce(i.current.uvi)?"#4eb400":"Moderate"===ce(i.current.uvi)?"#f7e400":"High"===ce(i.current.uvi)?"#f88700":"Very High"===ce(i.current.uvi)?"#d8001d":"Extreme"===ce(i.current.uvi)?"#b54cff":"#f0f0f0"}}),r.a.createElement("span",null," ",ce(i.current.uvi))),r.a.createElement("br",null),r.a.createElement("p",null,"Wind: ",Math.round(3.6*i.current.wind_speed)," Km/h"," ","- ",(pe=i.current.wind_deg,["N","NE","E","SE","S","SW","W","NW"][Math.round(pe/45)%8])," ",r.a.createElement(Q,{$deg:i.current.wind_deg})),r.a.createElement("br",null),r.a.createElement("p",null,"Humidity: ",i.current.humidity,"%"),r.a.createElement("br",null),r.a.createElement("p",null,"Atm. Pressure: ",i.current.pressure," mbar -"," ",(de=i.current.pressure)<1013.2?"Low":de>=1013.2?"High":"Unknown"),r.a.createElement("br",null),r.a.createElement("p",null,"Sunrise:"," ",new Date(1e3*(i.current.sunrise+i.timezone_offset)).toISOString().substring(11,16)),r.a.createElement("br",null),r.a.createElement("p",null,"Sunset:"," ",new Date(1e3*(i.current.sunset+i.timezone_offset)).toISOString().substring(11,16)),r.a.createElement("br",null),r.a.createElement(_,{src:"https://openweathermap.org/img/wn/".concat(i.current.weather[0].icon,"@2x.png"),alt:"Weather Icon"}),r.a.createElement("br",null),r.a.createElement("p",null,i.current.weather[0].description),i.alerts&&i.alerts.length>0&&r.a.createElement("div",null,i.alerts.map((e,t)=>r.a.createElement(U,{key:t},r.a.createElement("h3",null,"Weather Alert",i.alerts.length>=2&&" ",i.alerts.length>=2&&t+1,":"),r.a.createElement("p",null,r.a.createElement("strong",null,"Sender:\xa0")," ",e.sender_name),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Start:\xa0"),new Date(1e3*e.start).toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"End:\xa0"),new Date(1e3*e.end).toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Event:\xa0")," ",e.event),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Description:\xa0"),e.description))))),r.a.createElement("br",null),i.hourly&&r.a.createElement(M,null,r.a.createElement("h3",null,"Hourly Weather:"),r.a.createElement("p",null,"*pop = probability of precipitation"),r.a.createElement("br",null),r.a.createElement("p",null,"Timezone ",i.timezone,": GMT",i.timezone_offset>0&&"+",i.timezone_offset/3600),r.a.createElement(T,null,r.a.createElement("ul",null,i.hourly.slice(R,R+4).map((e,t)=>r.a.createElement("li",{key:t},r.a.createElement("b",null,new Date(1e3*(e.dt+i.timezone_offset)).toISOString().substring(11,16)),r.a.createElement("br",null),r.a.createElement(Y.a,{icon:ee.e})," ",Math.round(e.temp),"\xb0C ",r.a.createElement("br",null),"Feels like: ",Math.round(e.feels_like),"\xb0C ",r.a.createElement("br",null),"pop: ",Math.round(100*e.pop),"% ",r.a.createElement("br",null),"Humidity: ",e.humidity,"%",r.a.createElement("br",null),"Wind: ",Math.round(3.6*e.wind_speed)," Km/h",r.a.createElement("br",null),r.a.createElement(_,{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"Hourly Weather Icon"}),r.a.createElement("br",null),e.weather[0].description))),r.a.createElement(F,null,r.a.createElement(P,{onClick:()=>te(-1),disabled:0===R,className:0===R?"disabled":""},r.a.createElement(Y.a,{icon:ee.b})),r.a.createElement(P,{onClick:()=>te(1),disabled:R+4>=20,className:R+4>=20?"disabled":""},r.a.createElement(Y.a,{icon:ee.c})))),r.a.createElement(ae,{totalPages:ie,currentPage:me})),r.a.createElement("br",null),i.daily&&r.a.createElement(M,null,r.a.createElement("h3",null,"Daily Weather:"),r.a.createElement(T,null,r.a.createElement("ul",null,i.daily.slice(X,X+3).map((e,t)=>{const n=new Date(1e3*e.dt).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return r.a.createElement("li",{key:t},r.a.createElement("b",null,0===t&&0===X?"Today":n),r.a.createElement("br",null)," ",Math.round(e.temp.min)," ",r.a.createElement(Y.a,{icon:ee.e})," ",Math.round(e.temp.max),"\xb0C",r.a.createElement("br",null),"Precipitation: ",parseInt(100*e.pop),"%",r.a.createElement("br",null),r.a.createElement(_,{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"Weather Icon"}),r.a.createElement("br",null),e.summary)})),r.a.createElement(F,null,r.a.createElement(P,{onClick:()=>ne(-1),disabled:0===X},r.a.createElement(Y.a,{icon:ee.b}))," ",r.a.createElement(P,{onClick:()=>ne(1),disabled:X+3>=i.daily.length},r.a.createElement(Y.a,{icon:ee.c})))),r.a.createElement(ae,{totalPages:se,currentPage:ue})),r.a.createElement("br",null))));var de,pe}var oe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)))}},[[14,1,2]]]);
//# sourceMappingURL=main.d4d12866.chunk.js.map