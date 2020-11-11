var i = 0;
var images = [
    "1491581548881.jpeg",
    "1491581548887.jpeg",
    "1491581548898.jpeg",
    "1491581548979.jpeg",
    "1491581548990.jpeg",
    "1491581549051.jpeg",
    "1491581549062.jpeg"
];
function imgchange() {
    document.getElementById("7wonders").src=images[i];
    if (i==6) {
    i = 0;
    }
    i++;
}