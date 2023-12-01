



function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
   
    colorMode (HSB);
    frameRate (2)
    
    
   

}

function draw() {
   
    background(255);
    
    for (i=0; i<30; i++){

        circles()
    }
    
}

function circles (){

    var x = random(height);
    var y = random (width);
    var s = random (100,300);
    var hue = random (100,500)

    noStroke ();

    fill(hue, 255, 255, 0.1); // The fourth parameter determines the intensity of the color from a range of 0 to 1. 
    square(x, y, s);

}

