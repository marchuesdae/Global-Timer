function clock() {
    const date = new Date();
    const hr = date.getHours().toString().padStart(2, "0");
    const min = date.getMinutes().toString().padStart(2, "0");
    const sec = date.getSeconds().toString().padStart(2, "0");

    const formattedTime = `${hr}:${min}:${sec}`;

    document.getElementById("clock").innerHTML = formattedTime;

    if (hr == 00 && min == 55 && sec == 00) {
        alert("It's 7:44! Clock stopped.");
    }
}

const myInterval = setInterval(clock, 1000);
