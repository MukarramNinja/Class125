difference=0;
rightWristX=0;
leftWristX=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#EC5800');
    document.getElementById('font_size').innerHTML = "Font size is" + difference + "px";
    textSize(difference);
    fill('#E97A4A');
    text('Mukarram', 50, 400);
}

function modeLoaded() {
    console.log('PoseNet is Initialized');
}
function gotPoses(results) {
    if(results.length > 0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}