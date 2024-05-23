(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),l=n.n(o);n(19);const i=async(e,t)=>{const n="https://api.openweathermap.org/data/3.0/onecall?lat=".concat(e,"&lon=").concat(t,"&units=metric&exclude=minutely&appid=4cbdbc7df66de5de3bc03227c33e61be");try{const e=await fetch(n),t=await e.json();if(!e.ok)throw new Error("".concat(t.cod,": ").concat(t.message));return t}catch(a){throw console.error("Error fetching weather data:",a),a}};var c,u,d,s,p,m,g,b,h,E,x,w=n(2),f=n(3);const y=f.a.div(c||(c=Object(w.a)(["\n  padding: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 470px;\n  p {\n    margin: 5px 0;\n    position: relative;\n  }\n  h3 {\n    margin-bottom: 0;\n  }\n  li {\n    margin: 5px 0;\n  }\n"]))),S=f.a.div(u||(u=Object(w.a)(["\n  background-color: #ffcdd2;\n  color: #c63737;\n  padding: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  margin: 10px 0;\n"]))),k=Object(f.b)(d||(d=Object(w.a)(["\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(10px); /* Adjust the distance to move */\n  }\n"]))),v=f.a.img(s||(s=Object(w.a)(["\n  animation: "," 6s infinite alternate ease-in-out;\n  padding-top: 0;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.05);\n"])),k),O=f.a.button(p||(p=Object(w.a)(["\n  padding: 5px 10px;\n  border: 1px solid #eaeaea;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: background-color, box-shadow 0.3s ease;\n  &:hover {\n    background-color: #eaeaea;\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);\n  }\n"]))),j=f.a.select(m||(m=Object(w.a)(["\n  padding: 5px;\n  border: 1px solid #eaeaea;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  background-color: #eaeaea;\n  transition: box-shadow 0.3s ease;\n  &:hover {\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);\n  }\n  &:focus {\n    border: none;\n    outline: none;\n  }\n\n  /* Styles for active (selected) option */\n  option:checked {\n    border: none;\n    font-weight: bold;\n  }\n\n  /* Styles for inactive (unselected) options */\n  option:not(:checked) {\n    border: none;\n    outline: none;\n  }\n"]))),L=f.a.img(g||(g=Object(w.a)(["\n  border-radius: 5px;\n  max-width: 470px;\n  width: 100%;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n"]))),I=f.a.span(b||(b=Object(w.a)(["\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  margin-left: 5px;\n  border-radius: 3px;\n  border: 1px solid rgba(170, 170, 170, 0.5); // Equivalent RGBA color for #aaaaaa\n"]))),D=f.a.div(h||(h=Object(w.a)(["\n  color: #d32f2f;\n"]))),A=f.a.span.attrs(e=>({$deg:e.$deg}))(x||(x=Object(w.a)(["\n  width: 0;\n  height: 0;\n  position: absolute;\n  left: 120px;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 20px solid #aaaaaa;\n  border-radius: 6px;\n  transform-origin: center;\n  animation: ",' 2s infinite alternate\n    ease-in-out;\n\n  &::after {\n    content: "";\n    position: absolute;\n    left: -2.5px;\n    top: 12px;\n    width: 5px;\n    height: 5px;\n    background: linear-gradient(\n      ',"deg,\n      #ffff00,\n      #ff0000,\n      #800080\n    );\n    border-radius: 50%;\n  }\n"])),e=>(e=>Object(f.b)(E||(E=Object(w.a)(["\n  from {\n    transform: rotate(","deg);\n  }\n  to {\n    transform: rotate(","deg);\n  }\n"])),e+180-10,e+180+10))(e.$deg),e=>e.$deg+180);function N(){const[e,t]=Object(a.useState)(null),[n,o]=Object(a.useState)(null),[l,c]=Object(a.useState)(null),[u,d]=Object(a.useState)(!1),[s,p]=Object(a.useState)(""),[m,g]=Object(a.useState)(!1),b=()=>{const e=document.getElementsByClassName("toHide");if(navigator.geolocation){navigator.geolocation.getCurrentPosition(e=>h(e.coords.latitude,e.coords.longitude),E);for(let t=0;t<e.length;t++)e[t].style.display="none";d(!0)}else p("Geolocation is not supported by this browser.")},h=(e,n)=>{t(e),o(n);let a="https://maps.googleapis.com/maps/api/staticmap?center="+(e+","+n)+"&zoom=13&size=350x200&sensor=false&key=AIzaSyDOkBlOAJdoASnvwDn38G0mU9TJo5dcjXI";document.getElementById("location").innerHTML="Latitude: "+e.toFixed(2)+"\xb0<br>Longitude: "+n.toFixed(2)+"\xb0",document.getElementById("mapholder").src=a},E=e=>{switch(e.code){default:p("Unknown error");break;case e.PERMISSION_DENIED:p("You denied the request for GeoLocation.");break;case e.POSITION_UNAVAILABLE:p("Location information is unavailable.");break;case e.TIMEOUT:p("The request to get user location timed out.");break;case e.UNKNOWN_ERROR:p("An unknown error occurred.")}};function x(e){return e>=0&&e<=2?"Low":e>2&&e<=5?"Moderate":e>5&&e<=7?"High":e>7&&e<=10?"Very High":e>10?"Extreme":"Unknown"}return Object(a.useEffect)(()=>{e&&n&&(async()=>{g(!0);try{const a=await i(e,n);c(a),p("")}catch(t){console.error("Error fetching weather data:",t),p("Error fetching weather data: ".concat(t.message))}finally{g(!1)}})()},[e,n]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Geolocation Weather App"),r.a.createElement("p",{className:"toHide"},"Click the button to get your coordinates and weather."),r.a.createElement("p",{className:"toHide"},"Location permission must be accepted."),r.a.createElement(O,{onClick:b,className:"toHide"},"Try It"),u&&r.a.createElement(j,{onChange:e=>{const t=e.target.selectedIndex,n=e.target.options[t],a=n.getAttribute("latitude"),r=n.getAttribute("longitude");"current"===a&&"current"===r?b():h(parseFloat(a),parseFloat(r))}},r.a.createElement("option",{latitude:e,longitude:n},"Select favorite location"),r.a.createElement("option",{latitude:"current",longitude:"current"},"Current Location"),r.a.createElement("option",{latitude:"45.768739",longitude:"23.641838"},"Dobra"),r.a.createElement("option",{latitude:"45.806776",longitude:"24.146329"},"Sibiu"),r.a.createElement("option",{latitude:"42.83695",longitude:"-84.60515"},"Dewitt, USA")),r.a.createElement("p",{id:"location"}),r.a.createElement(L,{id:"mapholder"}),s&&r.a.createElement(S,null,s),r.a.createElement("div",null,m&&r.a.createElement("p",null,"Loading data...")," ",!m&&l&&l.current&&r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(y,null,r.a.createElement("h3",null,"Current Weather conditions:"),r.a.createElement("p",null,"Temperature: ",l.current.temp,"\xb0C"),r.a.createElement("p",null,"Feels Like: ",l.current.feels_like,"\xb0C"),r.a.createElement("p",null,"UV index: ",l.current.uvi," -",r.a.createElement(I,{style:{backgroundColor:"Low"===x(l.current.uvi)?"#4eb400":"Moderate"===x(l.current.uvi)?"#f7e400":"High"===x(l.current.uvi)?"#f88700":"Very High"===x(l.current.uvi)?"#d8001d":"Extreme"===x(l.current.uvi)?"#b54cff":"#f0f0f0"}}),r.a.createElement("span",null," ",x(l.current.uvi))),r.a.createElement("p",null,"Wind Speed: ",l.current.wind_speed," km/h"),r.a.createElement("p",null,"Wind Direction:"," ",(f=l.current.wind_deg,["N","NE","E","SE","S","SW","W","NW"][Math.round(f/45)%8])," ",r.a.createElement(A,{$deg:l.current.wind_deg})),r.a.createElement("p",null,"Humidity: ",l.current.humidity,"%"),r.a.createElement("p",null,"Atm. Pressure: ",l.current.pressure," mbar -"," ",r.a.createElement("span",null,(w=l.current.pressure)<1013.2?"Low":w>=1013.2?"High":"Unknown")),r.a.createElement("p",null,"Sunrise:"," ",new Date(1e3*l.current.sunrise).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),r.a.createElement("p",null,"Sunset:"," ",new Date(1e3*l.current.sunset).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),r.a.createElement("p",null,"Description: ",l.current.weather[0].description),r.a.createElement(v,{src:"https://openweathermap.org/img/wn/".concat(l.current.weather[0].icon,"@2x.png"),alt:"Weather Icon"}),l&&l.alerts&&l.alerts.length>0&&r.a.createElement("div",null,l.alerts.map((e,t)=>r.a.createElement(D,{key:t},r.a.createElement("h3",null,"Weather Alert:"),r.a.createElement("p",null,r.a.createElement("strong",null,"Sender:")," ",e.sender_name),r.a.createElement("p",null,r.a.createElement("strong",null,"Start:")," ",new Date(1e3*e.start).toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})),r.a.createElement("p",null,r.a.createElement("strong",null,"End:")," ",new Date(1e3*e.end).toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})),r.a.createElement("p",null,r.a.createElement("strong",null,"Description:")," ",e.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Tags:")," ",e.tags.join(", ")))))),r.a.createElement("br",null),r.a.createElement(y,null,r.a.createElement("h3",null,"Hourly Forecast:"),r.a.createElement("ul",null,l.hourly.slice(0,10).map((e,t)=>r.a.createElement("li",{key:t},r.a.createElement("b",null,new Date(1e3*e.dt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),":"," "),e.temp,"\xb0C, ",e.weather[0].description," ",r.a.createElement(v,{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"Hourly Weather Icon"}))))),r.a.createElement("br",null),r.a.createElement(y,null,r.a.createElement("h3",null,"Daily Forecast:"),r.a.createElement("ul",null,l.daily.slice(0,5).map((e,t)=>r.a.createElement("li",{key:t},r.a.createElement("b",null,new Date(1e3*e.dt).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})),":",r.a.createElement("br",null)," Min: ",e.temp.min,"\xb0C - Max: ",e.temp.max,"\xb0C ",r.a.createElement("br",null),"Probability of precipitation: ",parseInt(100*e.pop),"%",r.a.createElement("br",null),e.summary,r.a.createElement("br",null),r.a.createElement(v,{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"Weather Icon"}))))),r.a.createElement("br",null))));var w,f}var C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)))}},[[11,1,2]]]);
//# sourceMappingURL=main.b8f2c902.chunk.js.map