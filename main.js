song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 500);
    canvas.center();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }

function draw(){
    image(video, 0, 0, 600, 500);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY "+ rightWristY);
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
