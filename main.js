status = "";

function setup(){
    canvas = createCanvas(380, 380);
    canvas.position(650,340);
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_value = document.getElementById("input_box").value;
}

function modelLoaded(){
    console.log("Model is loaded");
    status = true;

}

function draw(){
    image(video,0,0,380,380);
}