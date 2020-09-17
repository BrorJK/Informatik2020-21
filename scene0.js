var scene = 1;

function draw() {
  if (scene == 0) {
    var rectX = 200;
    var rectY = 800;
    var rectH = 50;
    var rectW = 100;
    background(173, 230, 186);
    rect(rectX, rectY, rectW, rectH);
    rect(rectX + 300, rectY, rectW, rectH);
    rect(rectX + 600, rectY, rectW, rectH);
  }
}
