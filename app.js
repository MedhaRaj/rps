var i = 0,
    images = [
       "https://i.ibb.co/tKy3h5Z/1.png",
"https://i.ibb.co/tsZZkbR/2.png",
"https://i.ibb.co/B3f2HJD/3.png",
"https://i.ibb.co/yRmsMWW/4.png",
"https://i.ibb.co/ysVYxV9/5.png"
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
