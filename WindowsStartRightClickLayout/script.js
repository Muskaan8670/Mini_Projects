function setdateTime(){
    const now = new Date();

    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    const time = `${hour}:${minute}`;
    const date = `${day}-${month}-${year}`;

    console.log(time);
    console.log(date);

    document.querySelector('#date').innerHTML = date ;
    document.querySelector('#time').innerHTML = time ;
}
setdateTime();

async function getWeather(city){
    try{
        let apiKey = 'e1dd49779e4181676afe052d79f1fee2' ;
    let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    
    if(! raw.ok){
        throw new Error('Something went wrong...');  
    }
 
    let realData = await raw.json();
    console.log(realData);
    const temp = Math.round(realData.main.temp);
    const condition = realData.weather[0].description;

    document.getElementById("degree").innerText = temp + "°";
    document.getElementById("weatherDescription").innerText = condition;
    }
    catch(error){
        console.log(error.message);
    }
    
}

getWeather('Malda');

const startBtn = document.getElementById("windows");
const startPopup = document.querySelector(".PopUp");
const rightPopup = document.querySelector(".rightClick");

let activePopup = null;

function closeAll() {
  startPopup.style.opacity = "0";
  rightPopup.style.opacity = "0";
  activePopup = null;
}

/* START BUTTON */
startBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (activePopup === "start") {
    closeAll();
  } else {
    closeAll();
    startPopup.style.opacity = "1";
    activePopup = "start";
  }
});

/* RIGHT CLICK */
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (activePopup === "rightClick") {
    closeAll();
  } else {
    closeAll();
    rightPopup.style.left = e.clientX + "px";
    rightPopup.style.top  = e.clientY + "px";
    rightPopup.style.opacity = "1";
    activePopup = "rightClick";
  }
});

/* CLICK OUTSIDE */
document.addEventListener("click", closeAll);

/* PREVENT INNER CLICK */
startPopup.addEventListener("click", e => e.stopPropagation());
rightPopup.addEventListener("click", e => e.stopPropagation());

