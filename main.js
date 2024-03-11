function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("The X coordinate of nose is - ", results[0].pose.nose.x);
        console.log("The Y coordinate of nose is - ", results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save("My Filtered Image");
}