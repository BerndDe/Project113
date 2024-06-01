function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position (110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw () {
    image(video, 50, 50, 540, 380);
    tint(tint_color);
    
    fill(0, 200, 0)
    stroke(0, 200, 0)
    rect(10, 10, 620, 20)

    fill(0, 200, 0)
    stroke(0, 200, 0)
    rect(610, 10, 20, 450)

    fill(0, 200, 0)
    stroke(0, 200, 0)
    rect(10, 450, 620, 20)

    fill(0, 200, 0)
    stroke(0, 200, 0)
    rect(10, 10, 20, 450)

    fill(200, 0, 0)
    stroke(200, 0, 0)
    circle(20, 20, 35)

    fill(200, 0, 0)
    stroke(200, 0, 0)
    circle(620, 20, 35)

    fill(200, 0, 0)
    stroke(200, 0, 0)
    circle(20, 460, 35)

    fill(200, 0, 0)
    stroke(200, 0, 0)
    circle(620, 460, 35)
}

function take_snapshot(){
    save('party_photo.png');
}