var peach, nyu;
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

  noStroke();

  //upper body
  fill(25, 255, 45);
  rect(185, 145, 30, 60);

  //head
  fill(255, 123, 0);
  ellipse(200, 100, 100, 100);

  //ears
  fill(0);
  triangle(165, 65, 165, 20, 185, 55);
  triangle(235, 65, 235, 20, 215, 55);

  //leg
  fill(0, 203, 255);
  rect(195, 205, 10, 40);

  //foot
  triangle(195, 245, 205, 245, 200, 260);
  triangle(195, 245, 197, 252, 185, 260);
  triangle(205, 245, 203, 252, 215, 260);

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
  quad(140, 150, 185, 155, 185, 160, 125, 165);
  quad(260, 150, 215, 155, 215, 160, 275, 165);
  //rect(215, 150, 60, 10);

  //mouth
  fill(255, 50, 15);
  quad(175, 135, 180, 105, 220, 90, 230, 120);

  //teeth
  fill(255);
  triangle(180, 105, 182, 120, 185, 102);
  triangle(190, 99, 194, 118, 195, 98);
  triangle(200, 96, 206, 114, 208, 94);
  triangle(212, 93, 214, 112, 220, 90);

  //eye slits
  fill(0);
  triangle(165, 75, 190, 85, 180, 85);
  triangle(225, 75, 200, 85, 210, 85);

  monster(-100 + stepX, 300 + stepY, peach); //calls monster
  monster(300, 300, nyu); //calls monster

}

function monster(locX, locY, headColor) {
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
  if (keyCode == RIGHT_ARROW) {
    stepX = stepX + 10;
  }
  if (keyCode == LEFT_ARROW) {
    stepX = stepX - 10;
  }
  if (keyCode == UP_ARROW) {
    stepY = stepY - 10;
  }
  if (keyCode == DOWN_ARROW) {
    stepY = stepY + 10;
  }
}