(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),l=n.n(o);n(19);var c,i,d,u,m=n(3),s=n(4);const p=Object(s.b)(c||(c=Object(m.a)(["\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(10px); /* Adjust the distance to move */\n  }\n"]))),h=s.a.img(i||(i=Object(m.a)(["\n  animation: "," 6s infinite alternate ease-in-out; /* Adjust animation duration as needed */\n  padding-top: 0;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.05);\n"])),p),E=s.a.button(d||(d=Object(m.a)(["\n  padding: 5px 10px;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n  transition: background-color, box-shadow 0.3s ease;\n  &:hover {\n    background-color: #eaeaea;\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);\n  }\n"]))),g=s.a.img(u||(u=Object(m.a)(["\n  border-radius: 5px;\n  max-width: 300px;\n"])));function b(){const[e,t]=Object(a.useState)(null),[n,o]=Object(a.useState)(null),[l,c]=Object(a.useState)(null),i=e=>{t(e.coords.latitude),o(e.coords.longitude);let n="https://maps.googleapis.com/maps/api/staticmap?center="+(e.coords.latitude+","+e.coords.longitude)+"&zoom=12&size=300x200&sensor=false&key=AIzaSyDOkBlOAJdoASnvwDn38G0mU9TJo5dcjXI";document.getElementById("demo").innerHTML="Latitude: "+e.coords.latitude+"<br>Longitude: "+e.coords.longitude,document.getElementById("mapholder").src=n},d=e=>{switch(e.code){default:document.getElementById("demo").innerHTML="Unknown error";break;case e.PERMISSION_DENIED:document.getElementById("demo").innerHTML="User denied the request for Geolocation.";break;case e.POSITION_UNAVAILABLE:document.getElementById("demo").innerHTML="Location information is unavailable.";break;case e.TIMEOUT:document.getElementById("demo").innerHTML="The request to get user location timed out.";break;case e.UNKNOWN_ERROR:document.getElementById("demo").innerHTML="An unknown error occurred."}};return Object(a.useEffect)(()=>{e&&n&&(async()=>{try{const t=await(async(e,t)=>{const n="https://api.openweathermap.org/data/3.0/onecall?lat=".concat(e,"&lon=").concat(t,"&units=metric&exclude=minutely&appid=4cbdbc7df66de5de3bc03227c33e61be"),a=await fetch(n);return await a.json()})(e,n);c(t)}catch(t){console.error("Error fetching weather data:",t)}})()},[e,n]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Geolocation Weather App"),r.a.createElement("p",null,"Click the button to get your coordinates and weather."),r.a.createElement("p",null,"Location permission must be allowed."),r.a.createElement(E,{onClick:()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(i,d):document.getElementById("demo").innerHTML="Geolocation is not supported by this browser."}},"Try It"),r.a.createElement("p",{id:"demo"}),r.a.createElement(g,{id:"mapholder"}),r.a.createElement("div",null,l&&l.current&&r.a.createElement("div",null,r.a.createElement("h3",null,"Current Weather for timezone ",l.timezone,":"),r.a.createElement("p",null,"Temperature: ",l.current.temp,"\xb0C"),r.a.createElement("p",null,"Feels Like: ",l.current.feels_like,"\xb0C"),r.a.createElement("p",null,"UV index: ",l.current.uvi),r.a.createElement("p",null,"Wind Speed: ",l.current.wind_speed," km/h"),r.a.createElement("p",null,"Humidity: ",l.current.humidity,"%"),r.a.createElement("p",null,"Atmospheric Pressure: ",l.current.pressure,"mbar"),r.a.createElement("p",null,"Description: ",l.current.weather[0].description),r.a.createElement(h,{src:"https://openweathermap.org/img/wn/".concat(l.current.weather[0].icon,"@2x.png"),alt:"Weather Icon"}),r.a.createElement("h3",null,"Hourly Forecast"),r.a.createElement("ul",null,l.hourly.slice(0,5).map((e,t)=>r.a.createElement("li",{key:t},new Date(1e3*e.dt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),": ",e.temp," \xb0C"))),r.a.createElement("br",null),r.a.createElement("h3",null,"Daily Forecast"),r.a.createElement("ul",null,l.daily.slice(0,3).map((e,t)=>r.a.createElement("li",{key:t},new Date(1e3*e.dt).toLocaleDateString([],{weekday:"short",month:"short",day:"numeric"}),": MIN: ",e.temp.min,"\xb0C - MAX: ",e.temp.max,"\xb0C ",r.a.createElement("br",null),e.weather[0].description,r.a.createElement("br",null),r.a.createElement(h,{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),alt:"Weather Icon"})))))))}var w=function(){return r.a.createElement(b,null)};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)))}},[[11,1,2]]]);
//# sourceMappingURL=main.5078c5e1.chunk.js.map