difference = 0;
leftwristX = 0;
rightwristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    canvas = createCanvas(500, 500);
    video.position(300, 150);
    canvas.position(900, 150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', getResults);
}

function draw(){
    background('#450202');
    textSize(difference);
    fill('#FFFFFF');
    text('Font Changer', 100, 350);
}
 
function getResults(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftwristX = " + leftwristX + " rightwristX = " + rightwristX + " difference = " + difference);
    }
}

function modelLoaded(){
    console.log('Model is Loaded');
}