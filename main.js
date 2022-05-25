nosex= 0;
nosey= 0;
leftwristx= 0;
rightwristx= 0;
difference= 0;

function setup() {
    video= createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 100);
    canvas= createCanvas(550, 500);
    canvas.position(690, 100);
    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);
}

function modelLoaded() {
    console.log("Posenet is loaded!!!");
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        nosex= results[0].pose.nose.x;
        nosey= results[0].pose.nose.y;
        console.log(nosex, nosey);
        leftwristx= results[0].pose.leftWrist.x;
        rightwristx= results[0].pose.rightWrist.x;
        difference= floor(leftwristx - rightwristx);
        console.log(leftwristx, rightwristx);
    }
}

function draw() {
    background("#09424a");
    document.getElementById("square_side").innerHTML= "The Width and Height of the Square will Be:" + difference + "px";
    fill("#faffc2");
    stroke("#f5c2ff");
    square(nosex, nosey, difference);
}