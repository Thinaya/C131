img = "";
song ="";
status = "";
objects = [];
var r;
var g
var b;
var a; 

function preload() {
    img=loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
    video =createCapture(VIDEO);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function modelLoaded() { 
    console.log("modelLoaded");
    status=true;
}

function gotResult(error, results) {
if (error) {
    console.log(error);
}
console.log(results);
objects = results;
}

function draw() {
    image(video,0,0,380,380);

    r = random(255);
    g = random(100,200);
    b = random(100);
    a = random(200,255);
     
    if(status != "")
    {
        objectDetector.detect(video,gotResult);
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            
            fill(r, g, b, a);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r, g, b, a);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
           }
        }
    }
        