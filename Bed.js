img = "";
status ="";

function preload() {
    img=loadImage("Bed.jpeg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function modelLoaded() {
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error, results) {
if (error) {
    console.log(error);
}
console.log(results);
}

function draw() {
    image(img,0,0,640,420);
}