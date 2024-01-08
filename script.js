shrimp_video = document.getElementById("shrimp_video")


let rotation = 0;
const angle = 1;

function rotateImage() {
    rotation = (rotation + angle) % 360;
    shrimp_video.style.transform = `rotate(${rotation}deg)`;
}

setInterval(rotateImage, 100)

