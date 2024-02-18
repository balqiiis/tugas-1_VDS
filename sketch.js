let k;
function setup(){
//sensitive software    
    createCanvas(400,400);
    background(200);

    k = 0;
}

function draw(){
    stroke(255,255,255);
    line(200,399,200,0);

    fill(39,158,255);
    stroke(200);
    ellipse(100,155,70,40);
    ellipse(60,235,25,20);
    ellipse(133,235,25,20);
    fill(32,28,88);
    stroke(32,28,88);
    ellipse(100,162,60,30);
    fill(255,255,255);
    stroke(255,255,255);
    ellipse(100,200,100,90);
    fill(253,231,103);
    arc(100,215,35,20, 0, 3)
    arc(100,215,35,25, 3, 0);
    fill(0,0,0);
    ellipse(90,195,10,10);
    ellipse(110,195,10,10);
    fill(255, 235, 216);
    ellipse(120,205,10,5);
    ellipse(80,205,10,5);
    fill(184, 0, 0);
    stroke(184, 0, 0);
    ellipse(100,235,3,3);
    ellipse(93,235,10,7);
    ellipse(107,235,10,7);
    stroke(236, 177, 89);
    line(83,215,116,215);
    fill(118,69,59);
    stroke(200);
    rect(43,229,15,20);
    
    fill(39,158,255);
    stroke(39,158,255);
    ellipse(299,155,70,40);
    ellipse(330,235,25,20);
    var x = 260 + 3* Math.sin(PI/60*k)
    k += 1;
    fill(39,158,255);
    stroke(200)
    ellipse(x,235,25,20);
    fill(32,28,88);
    stroke(32,28,88);
    ellipse(299,162,60,30);
    fill(255,255,255);
    stroke(255,255,255);
    ellipse(299,200,100,90);
    fill(255, 0, 77);
    arc(299,214,30,15,0,3);
    fill(253,231,103);
    arc(299,214,35,25, 3, 0);
    fill(0,0,0);
    ellipse(290,195,10,10);
    ellipse(310,195,10,10);
    fill(250, 235, 216);
    ellipse(319,205,10,5);
    ellipse(279,205,10,5);
    stroke(236, 177, 89);
    line(315,214,283,215);
    fill(184, 0, 0);
    stroke(184, 0, 0);
    ellipse(300,235,3,3);
    ellipse(293,235,10,7);
    ellipse(307,235,10,7);
    var x = 243 + 3* Math.sin(PI/60*k)
    k += 1;
    fill(118,69,59);
    stroke(200);
    rect(x,229,15,20);
    var y = 215 + 3* Math.sin(PI/70*k)
    k += 1;
    fill(253,231,103);
    stroke(253,231,103);
    arc(299,y,35,20, 0, 3);
}