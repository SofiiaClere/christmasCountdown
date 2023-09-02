function christmasCountdown(){
    const ChristmasDate = new Date("December 25, 2023 00:00");
    const now = new Date();
    const diff = ChristmasDate - now;
    
    const msInSeconds = 1000;
    const msInMinutes = 60000;
    const msInHour = 3600000;
    const msInDay = 86400000;

    const displayDay = Math.floor((diff/msInDay));
    document.querySelector(".days").textContent = displayDay;

    const displayHours = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHours;

    const displayMinutes = Math.floor((diff%msInHour)/msInMinutes);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displaySeconds = Math.floor((diff%msInMinutes)/msInSeconds);
    document.querySelector(".seconds").textContent = displaySeconds;

    if (diff<= 0){
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerId);
        merryChristmas();
    }
    
}

let timerId = setInterval(christmasCountdown,1000);

function merryChristmas(){
    const heading = document.querySelector(".header");
    heading.textContent="Merry Christmas!!!";
    heading.classList.add("red");
}


const play = document.querySelector("#btn")

play.addEventListener("click", function(){
    document.querySelector("#myAudio").play();
})



