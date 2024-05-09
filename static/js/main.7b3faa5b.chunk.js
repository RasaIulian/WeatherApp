(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),l=n.n(o);n(19);var c,i,u,d,s,m,p,g,E,h=n(2),b=n(3);const x=b.a.div(c||(c=Object(h.a)(["\n  padding: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 400px;\n  p {\n    margin: 5px 0;\n  }\n  h3 {\n    margin-bottom: 0;\n  }\n"]))),w=b.a.div(i||(i=Object(h.a)(["\n  background-color: #ffcdd2;\n  color: #c63737;\n  padding: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  margin: 10px 0;\n"]))),y=Object(b.b)(u||(u=Object(h.a)(["\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(10px); /* Adjust the distance to move */\n  }\n"]))),f=b.a.img(d||(d=Object(h.a)(["\n  animation: "," 6s infinite alternate ease-in-out;\n  padding-top: 0;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.05);\n"])),y),k=b.a.button(s||(s=Object(h.a)(["\n  padding: 5px 10px;\n  border: 1px solid #eaeaea;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: background-color, box-shadow 0.3s ease;\n  &:hover {\n    background-color: #eaeaea;\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);\n  }\n"]))),v=b.a.select(m||(m=Object(h.a)(["\n  padding: 5px;\n  border: 1px solid #eaeaea;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  background-color: #eaeaea;\n  transition: box-shadow 0.3s ease;\n  &:hover {\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);\n  }\n  &:focus {\n    border: none;\n    outline: none;\n    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);\n  }\n\n  /* Styles for active (selected) option */\n  option:checked {\n    border: none;\n    font-weight: bold;\n  }\n\n  /* Styles for inactive (unselected) options */\n  option:not(:checked) {\n    border: none;\n    outline: none;\n  }\n"]))),S=b.a.img(p||(p=Object(h.a)(["\n  border-radius: 5px;\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n"]))),L=b.a.span(g||(g=Object(h.a)(["\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  margin-left: 5px;\n  border-radius: 3px;\n"]))),O=b.a.div(E||(E=Object(h.a)(["\n  color: #d32f2f;\n"])));function I(){const[e,t]=Object(a.useState)(null),[n,o]=Object(a.useState)(null),[l,c]=Object(a.useState)(null),[i,u]=Object(a.useState)(!1),[d,s]=Object(a.useState)(""),m=()=>{const e=document.getElementsByClassName("toHide");if(navigator.geolocation){navigator.geolocation.getCurrentPosition(e=>p(e.coords.latitude,e.coords.longitude),g);for(let t=0;t<e.length;t++)e[t].style.display="none";u(!0)}else document.getElementById("demo").innerHTML="Geolocation is not supported by this browser."},p=(e,n)=>{t(e),o(n);let a="https://maps.googleapis.com/maps/api/staticmap?center="+(e+","+n)+"&zoom=13&size=350x200&sensor=false&key=AIzaSyDOkBlOAJdoASnvwDn38G0mU9TJo5dcjXI";document.getElementById("demo").innerHTML="Latitude: "+e.toFixed(2)+"\xb0<br>Longitude: "+n.toFixed(2)+"\xb0",document.getElementById("mapholder").src=a},g=e=>{switch(e.code){default:document.getElementById("demo").innerHTML="Unknown error";break;case e.PERMISSION_DENIED:document.getElementById("demo").innerHTML="You denied the request for GeoLocation.";break;case e.POSITION_UNAVAILABLE:document.getElementById("demo").innerHTML="Location information is unavailable.";break;case e.TIMEOUT:document.getElementById("demo").innerHTML="The request to get user location timed out.";break;case e.UNKNOWN_ERROR:document.getElementById("demo").innerHTML="An unknown error occurred."}};function E(e){return e>=0&&e<=2?"Low":e>2&&e<=5?"Moderate":e>5&&e<=7?"High":e>7&&e<=10?"Very High":e>10?"Extreme":"Unknown"}return Object(a.useEffect)(()=>{e&&n&&(async()=>{try{const t=await(async(e,t)=>{const n="https://api.openweathermap.org/data/3.0/onecall?lat=".concat(e,"&lon=").concat(t,"&units=metric&exclude=minutely&appid=4cbdbc7df66de5de3bc03227c33e61be");try{const e=await fetch(n),t=await e.json();if(!e.ok)throw new Error("".concat(t.cod,": ").concat(t.message));return t}catch(a){throw console.error("Error fetching weather data:",a),a}})(e,n);c(t),s("")}catch(t){console.error("Error fetching weather data:",t),s("Error: ".concat(t.message))}})()},[e,n]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Geolocation Weather App"),r.a.createElement("p",{className:"toHide"},"Click the button to get your coordinates and weather."),r.a.createElement("p",{className:"toHide"},"Location permission must be accepted."),r.a.createElement(k,{onClick:m,className:"toHide"},"Try It"),i&&r.a.createElement(v,{onChange:e=>{const t=e.target.selectedIndex,n=e.target.options[t],a=n.getAttribute("latitude"),r=n.getAttribute("longitude");"current"===a&&"current"===r?m():p(parseFloat(a),parseFloat(r))}},r.a.createElement("option",{latitude:e,longitude:n},"Select favorite location"),r.a.createElement("option",{latitude:"current",longitude:"current"},"Current Location"),r.a.createElement("option",{latitude:"45.768739",longitude:"23.641838"},"Dobra"),r.a.createElement("option",{latitude:"45.806776",longitude:"24.146329"},"Sibiu"),r.a.createElement("option",{latitude:"42.83695",longitude:"-84.60515"},"Dewitt, USA")),r.a.createElement("p",{id:"demo"}),r.a.createElement(S,{id:"mapholder"}),d&&r.a.createElement(w,null,d),r.a.createElement("div",null,l&&l.current&&r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(x,null,r.a.createElement("h3",null,"Current Weather conditions:"),r.a.createElement("p",null,"Temperature: ",l.current.temp,"\xb0C"),r.a.createElement("p",null,"Feels Like: ",l.current.feels_like,"\xb0C"),r.a.createElement("p",null,"UV index: ",l.current.uvi," -",r.a.createElement(L,{style:{backgroundColor:"Low"===E(l.current.uvi)?"#4eb400":"Moderate"===E(l.current.uvi)?"#f7e400":"High"===E(l.current.uvi)?"#f88700":"Very High"===E(l.current.uvi)?"#d8001d":"Extreme"===E(l.current.uvi)?"#b54cff":"#f0f0f0"}}),r.a.createElement("span",null," ",E(l.current.uvi))),r.a.createElement("p",null,"Wind Speed: ",l.current.wind_speed," km/h"),r.a.createElement("p",null,"Humidity: ",l.current.humidity,"%"),r.a.createElement("p",null,"Atm. Pressure: ",l.current.pressure," mbar -"," ",r.a.createElement("span",null,(h=l.current.pressure)<1013.2?"Low":h>=1013.2?"High":"Unknown")),r.a.createElement("p",null,"Sunrise:"," ",new Date(1e3*l.current.sunrise).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),r.a.createElement("p",null,"Sunset:"," ",new Date(1e3*l.current.sunset).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),r.a.createElement("p",null,"Description: ",l.current.weather[0].description),r.a.createElement(f,{src:"https://openweathermap.org/img/wn/".concat(l.current.weather[0].icon,"@2x.png"),alt:"Weather Icon"}),l&&l.alerts&&l.alerts.length>0&&r.a.createElement("div",null,l.alerts.map((e,t)=>r.a.createElement(O,{key:t},r.a.createElement("h3",null,"Weather Alert:"),r.a.createElement("p",null,r.a.createElement("strong",null,"Sender:")," ",e.sender_name),r.a.createElement("p",null,r.a.createElement("strong",null,"Event:")," ",e.event),r.a.createElement("p",null,r.a.createElement("strong",null,"Start:")," ",new Date(1e3*e.start).toLocaleString([],{hour:"2-digit",minute:"2-digit"})),r.a.createElement("p",null,r.a.createElement("strong",null,"End:")," ",new Date(1e3*e.end).toLocaleString([],{hour:"2-digit",minute:"2-digit"})),r.a.createElement("p",null,r.a.createElement("strong",null,"Description:")," ",e.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Tags:")," ",e.tags.join(", ")))))),r.a.createElement("br",null),r.a.createElement(x,null,r.a.createElement("h3",null,"Hourly Forecast:"),r.a.createElement("ul",null,l.hourly.slice(0,10).map((e,t)=>r.a.createElement("li",{key:t},r.a.createElement("b",null,new Date(1e3*e.dt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),": ",e.temp,"\xb0C, ",e.weather[0].description," ",r.a.createElement(f,{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"Hourly Weather Icon"}))))),r.a.createElement("br",null),r.a.createElement(x,null,r.a.createElement("h3",null,"Daily Forecast:"),r.a.createElement("ul",null,l.daily.slice(0,5).map((e,t)=>r.a.createElement("li",{key:t},r.a.createElement("b",null,new Date(1e3*e.dt).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})),":",r.a.createElement("br",null)," Min: ",e.temp.min,"\xb0C - Max: ",e.temp.max,"\xb0C ",r.a.createElement("br",null),e.summary,r.a.createElement("br",null),r.a.createElement(f,{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"Weather Icon"}))))))));var h}var j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)))}},[[11,1,2]]]);
//# sourceMappingURL=main.7b3faa5b.chunk.js.map