var i = 0,
    images = [
       "https://i.ibb.co/k2Tj2Fx/1.png",
"https://i.ibb.co/2PqXp2Q/2.png",
"https://i.ibb.co/tHfKvBB/3.png",
"https://i.ibb.co/qCqtjvL/4.png",
"https://i.ibb.co/yPh3rJ2/5.png"
    ];

function mySlide(param) {
    if (param === "next") {
        i++;
        if (i === images.length) {
            i = images.length - 1;
        }
    } else {
        i--;
        if (i < 0) {
            i = 0;
        }
    }

    document.getElementById("slide").src = images[i];
}
