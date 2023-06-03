//your JS code here. If required.
 function updateTime(){
        let container = document.getElementById("timer");
        let date = new Date();
        let curDate = date.toLocaleDateString();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let period = hours < 12 ? "AM" : "PM";

        let formattedHour = hours <= 12 ? hours : hours % 12;
        let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; 
        let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds; 

        let time = `${formattedHour}:${formattedMinutes}:${formattedSeconds} ${period}`;

        console.log(`${formattedHour}:${formattedMinutes}:${formattedSeconds} ${period}`);
        container.textContent = `${curDate}, ${time}`;
    }
    setInterval(updateTime,1000);