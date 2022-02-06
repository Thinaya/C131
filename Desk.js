img = "";
status = "";
objects = [];

function preload() {
    img=loadImage("Desk.jpg");
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
objects = results;
}

function draw() {
    image(img,0,0,640,420);
    if(status != "")
    {
        objectDetector.detect(img,gotResult);
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            
            fill("coral");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("coral");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}