var scene = 0;
let runner;
let correct;
let wrong;
let click;
let vroom;

function skift(k) {
  scene = k;
}

function intervalrestart(tid, pointscore) {
  interval = tid;
  score = pointscore;
}

function preload() {
  runner = loadImage("løbstick.png");
  correct = loadSound("correct.wav");
  wrong = loadSound("wrong.wav");
  click = loadSound("click.mp3");
  vroom = loadSound("vroom.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  t1 = 0;
  t2 = 0;
  n = 0;
  interval = 8000;
  score = 0;
}

//START
function draw() {

  if (scene == 0) {
    rect1X = 200;
    rect2X = rect1X + 500;
    rect3X = rect1X + 1000;
    rectY = 550;
    rectH = 50;
    rectW = 150;
    shape = 10;
    text1X = rect1X + 75;
    text2X = text1X + 500;
    text3X = text1X + 1000;
    textY = rectY + 30;
    runnerX = 350;
    background(173, 230, 186);

    // løber.png
    image(runner, runnerX, 50);

    // Knapper - scene 0
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0);
    rect(rect1X, rectY, rectW, rectH, shape);
    rect(rect2X, rectY, rectW, rectH, shape);
    rect(rect3X, rectY, rectW, rectH, shape);
    textAlign(CENTER);
    textFont("Georgia");
    textSize(20);
    fill(0, 0, 0);
    strokeWeight(0);
    text("Regler", text1X, textY);
    text("Spil", text2X, textY);
    text("Highscore", text3X, textY);
  }

  if (scene == 1) {
    timeInterval();
    rectW = 1000;
    rectH = 600;
    rectX = 50;
    rectY = 50;
    scorectX = rectX + rectW + 150;
    scorectY = rectY + 50;
    scoretextX = scorectX + 50;
    scoretextY = scorectY + 50;
    background(0);

    // Score display
    stroke(0);
    strokeWeight(0);
    fill(255, 255, 255);
    rect(scorectX, scorectY, 100, 100, 10)
    fill(0, 0, 0);
    textSize(30);
    textAlign(CENTER);
    text(score, scoretextX, scoretextY - 5);
    text(interval, scoretextX, scoretextY + 25);

    // Home knap
    stroke(255, 255, 255);
    strokeWeight(3);
    textSize(20);
    textAlign(CENTER);
    fill(173, 230, 186);
    rect(scorectX - 25, scorectY + 400, 150, 50, shape);
    fill(0, 0, 0);
    strokeWeight(0);
    text("Home", scorectX + 50, scorectY + 430);

    // Rød - A
    if (n == 0) {
      stroke(0);
      fill(255, 0, 0);
      rect(rectX, rectY, rectW, rectH, 15);
    }

    // Grøn - F
    if (n == 1) {
      stroke(0);
      fill(0, 255, 0);
      rect(rectX, rectY, rectW, rectH, 15);
    }

    // Blå - W
    if (n == 2) {
      stroke(0);
      fill(0, 0, 255);
      rect(rectX, rectY, rectW, rectH, 15);
    }

    // Hvid - D
    if (n == 3) {
      stroke(0);
      fill(255, 255, 255);
      rect(rectX, rectY, rectW, rectH, 15);
    }

    // Gul - S
    if (n == 4) {
      stroke(0);
      fill(255, 255, 0);
      rect(rectX, rectY, rectW, rectH, 15);
    }

  }

  //scene2-regler
  if (scene == 2) {
    background(173, 230, 186);
    textAlign(CENTER);
    textFont("Georgia");
    textSize(32);
    fill(0, 0, 0);
    text("Reglerne er simple \n \n Når en farve vises på skærmen skal du trykke på knappen med den tilsvarende farve \n \n Husk at løbe ;)", 700, 200);

    // Home knap
    stroke(0);
    strokeWeight(3);
    textSize(20);
    textAlign(CENTER);
    fill(255, 255, 255);
    rect(1175, 500, 150, 50, shape);
    fill(0, 0, 0);
    strokeWeight(0);
    text("Home", 1250, 530);
  }

  //scene3-Highscore
  if (scene == 3) {
    background(173, 230, 186);
    var hightextY = 243;
    var vertdivHeight = 390;
    var vertdivX = 210;
    var bredde = 2;

    // Home knap
    stroke(0);
    strokeWeight(3);
    textSize(20);
    textAlign(CENTER);
    fill(255, 255, 255);
    rect(1175, 500, 150, 50, shape);
    fill(0, 0, 0);
    strokeWeight(0);
    text("Home", 1250, 530);

    //  Tabel layout
    strokeWeight(3);
    stroke(0);
    fill(255, 0, 0);
    rect(500, 150, 400, 450, 30);
    noStroke();

    fill(0, 0, 0);
    rect(500, 210, 400, bredde);
    rect(500, 260, 400, bredde);
    rect(800, vertdivX, bredde, vertdivHeight);
    rect(680, vertdivX, bredde, vertdivHeight);

    //  Tabel text
    fill(0, 0, 0);
    textSize(25);
    text("Highscore", 700, 190);

    fill(0, 0, 0);
    textSize(20);
    text("Name", 585, hightextY);

    fill(0, 0, 0);
    textSize(20);
    text("Points", 850, hightextY)

    fill(0, 0, 0);
    textSize(20);
    text("Interval", 740, hightextY)
  }

}

function timeInterval() {
  t2 = millis();
  if (t2 - t1 > interval) {
    t1 = t2;
    score -= 1
    n = randomNumber();
  }
}

function randomNumber() {
  m = int(random(5));
  if (m == n) {
    randomNumber();
  }
  return m;
}

function keyPressed() {
  if (keyCode == 65) {
    if (n != 0) {
      wrong.play();
      score -= 1
      n = randomNumber();
      t1 = t2;
      interval += 100;
      afspil = afspillyd();
    } else {
      correct.play();
      score += 1;
      n = randomNumber();
      t1 = t2;
      interval -= 200;
      afspil = afspillyd();
    }
  }

  if (keyCode == 70) {
    if (n != 1) {
      wrong.play();
      score -= 1
      n = randomNumber();
      t1 = t2;
      interval += 100;
      afspil = afspillyd();
    } else {
      correct.play();
      score += 1;
      n = randomNumber();
      t1 = t2;
      interval -= 200;
      afspil = afspillyd();
    }
  }

  if (keyCode == 87) {
    if (n != 2) {
      wrong.play();
      score -= 1
      n = randomNumber();
      t1 = t2;
      interval += 100;
      afspil = afspillyd();
    } else {
      correct.play();
      score += 1;
      n = randomNumber();
      t1 = t2;
      interval -= 200;
      afspil = afspillyd();
    }
  }

  if (keyCode == 68) {
    if (n != 3) {
      wrong.play();
      score -= 1
      n = randomNumber();
      t1 = t2;
      interval += 100;
      afspil = afspillyd();
    } else {
      correct.play();
      score += 1;
      n = randomNumber();
      t1 = t2;
      interval -= 200;
      afspil = afspillyd();
    }
  }

  if (keyCode == 83) {
    if (n != 4) {
      wrong.play();
      score -= 1
      n = randomNumber();
      t1 = t2;
      interval += 100;
      afspil = afspillyd();
    } else {
      correct.play();
      score += 1;
      n = randomNumber();
      t1 = t2;
      interval -= 200;
      afspil = afspillyd();
    }
  }
}

function mouseClicked() {
  scorectX = 1200;
  scorectY = 100;
  rect1X = 200;
  rect2X = rect1X + 500;
  rect3X = rect1X + 1000;
  rectY = 550;
  rectH = 50;
  rectW = 150;
  // Home knap - scene 1
  if (mouseX >= (scorectX - 25) && mouseX <= ((scorectX - 25) + 150) && mouseY >= (scorectY + 400) && mouseY <= ((scorectY + 400) + 50) && scene == 1) {
    scene = 0;
    click.play();
  }
  // Home knap - scene 3
  if (mouseX >= (scorectX - 25) && mouseX <= ((scorectX - 25) + 150) && mouseY >= (scorectY + 400) && mouseY <= ((scorectY + 400) + 50) && scene == 3) {
    scene = 0;
    click.play();
  }
  // Home knap - scene 2
  if (mouseX >= (scorectX - 25) && mouseX <= ((scorectX - 25) + 150) && mouseY >= (scorectY + 400) && mouseY <= ((scorectY + 400) + 50) && scene == 2) {
    scene = 0;
    click.play();
  }
  // Regler knap - scene 0
  if (mouseX >= rect1X && mouseX <= (rect1X + rectW) && mouseY >= rectY && mouseY <= (rectY + rectH) && scene == 0) {
    scene = 2;
    click.play();
  }
  // Spil knap - scene 0
  if (mouseX >= rect2X && mouseX <= (rect2X + rectW) && mouseY >= rectY && mouseY <= (rectY + rectH) && scene == 0) {
    vroom.setVolume(0.2);
    vroom.play();
    setTimeout(function() {
      skift(1);
    }, 2500);
    setTimeout(function() {
      intervalrestart(8000, 0);
    }, 2500);
  }
  // Highscore knap - scene 0
  if (mouseX >= rect3X && mouseX <= (rect3X + rectW) && mouseY >= rectY && mouseY <= (rectY + rectH) && scene == 0) {
    scene = 3;
    click.play();
  }
}
