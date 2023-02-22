function setup(){
  video = createCapture(VIDEO);
  video.size(600, 300);
  video.position(100, 250);
  canvas = createCanvas(600, 300);
  canvas.position(700, 250);
  modale = ml5.poseNet(video, consoler);
  modale.on('pose' , result);
}

x=0;
y=0;
leftwrist=0;
rightwrist= 0;
difference=0;

function draw(){
    background("white");
    textSize(difference);
    fill("black");
    text("Shin-Chan", x, y);
}

function consoler(){
    console.log("hi world");
}

function result(results){
    if(results.length > 0)
    console.log(results);
    leftwrist = results[0].pose.leftWrist.x;
    rightwrist = results[0].pose.rightWrist.x;
    x = results[0].pose.nose.x;
    y = results[0].pose.nose.y;
    difference = floor(leftwrist - rightwrist);
    console.log(difference);
}