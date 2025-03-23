var dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");
var MicroModal = require("micromodal");


// Plugins aktivieren
dayjs.extend(utc);
dayjs.extend(timezone);

var TIMEZONE;

// Funktion zur Aktualisierung der Uhrzeit
function updateClock() {

    // Setzt die Zeit für die aktuell gewählte Zeitzone
    var timeElement = document.getElementById("clock");
    var currentTime = dayjs().tz(TIMEZONE).format("HH:mm:ss");
    timeElement.innerText = currentTime;

    // Setzt das Datum
    var dateElement = document.getElementById("date");
    var curentDate = dayjs().tz(TIMEZONE).format("DD.MM.YYYY");
    dateElement.innerText = curentDate;

    // Setz die Timezone
    var timezoneElement = document.getElementById("timezone");
    timezoneElement.innerText = TIMEZONE.replace("/", " | ").replace("_", " ");
}

// Uhr jede Sekunde aktualisieren
TIMEZONE = "America/New_York";
MicroModal.init();
setInterval(updateClock, 1000);
updateClock();



