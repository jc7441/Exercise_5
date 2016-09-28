var peach, nyu; //colors
var stepX = 0;
var stepY = 0;

function setup() {
  createCanvas(600, 600);
  background(255);
  peach = color(255, 153, 122);
  nyu = color(78, 56, 150);
}

function draw() {
  background(255);
  eyeColor = color(41, 20, 3);
  bodyColor = color(209, 113, 117);
  bodyColor2 = color(250, 246, 129);

//when the mouse is pressed then the eye color of BOTH monster will be randomly chosen colors
  if (mouseIsPressed) {
    eyeColor = color(random(0, 255), random(0, 255), random(0, 255));
  }

//when the lowercase x key is pressed then the belly of my bigger monster will be randomly chosen colors
  if (keyIsPressed) {
    (keyCode == 'x')
    bodyColor = color(random(0, 255), random(0, 255), random(0, 255));
  }

nazMonster(-100 + stepX, 300 + stepY, peach); //calls monster
nazMonster(300, 300, nyu); //calls monster

myMonster(125, 10, .9, eyeColor, bodyColor);
myMonster(-100, 0, .3, eyeColor, bodyColor2);

}


function myMonster(newX, newY, newScale, eyeColor, bodyColor) {
  scale(newScale);
  translate(newX, newY);

  stroke(100, 0, 0);
  // legs
  fill(209, 113, 117);
  quad(100, 575, 125, 454, 160, 478, 170, 575); // left
  quad(220, 575, 235, 478, 275, 454, 290, 575); // right
  // body
  fill(41, 20, 3);
  ellipse(200, 360, 220, 250); // shell
  // abdomen
  fill(bodyColor);
  ellipse(200, 360, 150, 180);
  noFill();
  arc(200, 300, 109, 20, 0, PI);
  arc(200, 330, 139, 20, 0, PI);
  arc(200, 360, 147, 20, 0, PI);
  arc(200, 390, 139, 20, 0, PI);
  arc(200, 420, 109, 20, 0, PI);
  fill(209, 113, 117);
  ellipse(200, 200, 140, 170); // head
  noStroke();
  fill(157, 67, 67);
  ellipse(194, 208, 8, 8);
  ellipse(205, 208, 8, 8);
  fill(122, 67, 67);
  rect(160, 162, 34, 3); // left eyebrow
  rect(205, 162, 34, 3); // right eyebrow
  fill(255);
  ellipse(180, 180, 30, 20); // left eye
  ellipse(220, 180, 30, 20); // right eye
  fill(eyeColor);
  ellipse(180, 183, 20, 20); // left eye
  ellipse(220, 183, 20, 20); // right eye
  ellipseMode(CENTER); // left pupil
  fill(0);
  ellipse(180, 183, 12, 12);
  ellipseMode(CENTER); // right pupil
  fill(0);
  ellipse(220, 183, 12, 12);
  fill(73, 20, 3);
  stroke(100, 0, 0);
  arc(200, 225, 90, 80, 0, PI); // mouth
  // teeth
  fill(225);
  triangle(165, 225, 170, 265, 175, 225); // left fang
  triangle(180, 225, 190, 245, 200, 225);
  triangle(200, 225, 210, 245, 220, 225);
  triangle(225, 225, 230, 265, 235, 225); // right fang
  // antena
  fill(180, 182, 184);
  line(160, 128, 120, 70); // left
  triangle(110, 80, 107, 49, 130, 60);
  line(235, 128, 285, 70); // right
  triangle(275, 65, 300, 58, 296, 85);
  // arms
  fill(209, 113, 117);
  rotate(radians(-20));
  ellipse(130, 465, 60, 150); // right
  rotate(radians(50));
  ellipse(295, 280, 60, 150); // left

}

//naz monster
function nazMonster(locX, locY, headColor) {
  noStroke();

  //upper body
  fill(25, 255, 45);
  rect(185 + locX, 145 + locY, 30, 60);

  //head
  fill(headColor);
  ellipse(200 + locX, 100 + locY, 100, 100);

  //ears
  fill(0);
  triangle(165 + locX, 65 + locY, 165 + locX, 20 + locY, 185 + locX, 55 + locY);
  triangle(235 + locX, 65 + locY, 235 + locX, 20 + locY, 215 + locX, 55 + locY);

  //leg
  fill(0, 203, 255);
  rect(195 + locX, 205 + locY, 10, 40);

  //foot
  triangle(195 + locX, 245 + locY, 205 + locX, 245 + locY, 200 + locX, 260 + locY);
  triangle(195 + locX, 245 + locY, 197 + locX, 252 + locY, 185 + locX, 260 + locY);
  triangle(205 + locX, 245 + locY, 203 + locX, 252 + locY, 215 + locX, 260 + locY);

  /*trial body looks like table
    //lower body
    fill(0, 203, 255);
    ellipse(200, 200, 300, 50);
  
    //legs
    rect(50, 197, 15, 70);
    rect(335, 197, 15, 70);
    rect(150, 222, 20, 45);
    rect(240, 222, 20, 45);
    */
  //arms
  quad(140 + locX, 150 + locY, 185 + locX, 155 + locY, 185 + locX, 160 + locY, 125 + locX, 165 + locY);
  quad(260 + locX, 150 + locY, 215 + locX, 155 + locY, 215 + locX, 160 + locY, 275 + locX, 165 + locY);
  //rect(215, 150, 60, 10);

  //mouth
  fill(255, 50, 15);
  quad(175 + locX, 135 + locY, 180 + locX, 105 + locY, 220 + locX, 90 + locY, 230 + locX, 120 + locY);

  //teeth
  fill(255);
  triangle(180 + locX, 105 + locY, 182 + locX, 120 + locY, 185 + locX, 102 + locY);
  triangle(190 + locX, 99 + locY, 194 + locX, 118 + locY, 195 + locX, 98 + locY);
  triangle(200 + locX, 96 + locY, 206 + locX, 114 + locY, 208 + locX, 94 + locY);
  triangle(212 + locX, 93 + locY, 214 + locX, 112 + locY, 220 + locX, 90 + locY);

  //eye slits
  fill(0);
  triangle(165 + locX, 75 + locY, 190 + locX, 85 + locY, 180 + locX, 85 + locY);
  triangle(225 + locX, 75 + locY, 200 + locX, 85 + locY, 210 + locX, 85 + locY);
}

//when a key is pressed the monster will move in a specific direction
function keyPressed() {
  if (keyCode == RIGHT_ARROW) { //moves right
    stepX = stepX + 10;
  }
  if (keyCode == LEFT_ARROW) { //moves left
    stepX = stepX - 10;
  }
  if (keyCode == UP_ARROW) { //moves up
    stepY = stepY - 10;
  }
  if (keyCode == DOWN_ARROW) { //moves down
    stepY = stepY + 10;
  }
}