function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill('red');
    text("dog",50,100);
    noFill()
    stroke("green");
    rect(50,60,450,360)
}