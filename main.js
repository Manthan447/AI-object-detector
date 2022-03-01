video = ""; 
status = "";

function preload(){
}

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 0 , 0 , 480 , 380);
}

function Start(){
    object_detector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("Status").innerHTML = "Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    video.loop();
    video.volume(0);
    video.speed(1); 
}