let circleX = 200;
let circleY = 150;
let circleRadius = 75;

let graphX = 50;
let graphY = 200;
let graphAmplitude = 100;
let graphPeriod = 300;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  describe(
    "Animated demonstration of a point moving around the unit circle, together with the corresponding sine and cosine values moving along their graphs."
  );
}

function draw() {
  background(0);

  // Set angle based on frameCount, and display current value

  let angle = frameCount % 360;

  fill(255);
  textSize(20);
  textAlign(LEFT, CENTER);
  text(`angle: ${angle}`, 25, 25);

  // Draw cosine curve

  noFill();
  stroke("orange");
  beginShape();
  for (let t = 0; t <= 360; t++) {
    let x = map(t, 0, 360, graphX, graphX + graphPeriod);
    let y = graphY - 50 * cos(t);
    vertex(x, y);
  }
  endShape();

  // Draw sine curve

  noFill();
  stroke("red");
  beginShape();
  for (let t = 0; t <= 360; t++) {
    let x = map(t, 0, 360, graphX, graphX + graphPeriod);
    let y = graphY - 50 * sin(t);
    vertex(x, y);
  }
  endShape();

  // Draw tangent curve

  noFill();
  stroke("#4CAF50");
  beginShape();
  for (let t = 0; t <= 360; t++) {
    if (t != 90 || t != 270);
    {
      let x = map(t, 0, 360, graphX, graphX + graphPeriod);
      let y = graphY - 50 * tan(t);
      vertex(x, y);
    }
  }
  endShape();

  // Draw secant curve

  noFill();
  stroke("#03A9F4");
  beginShape();
  for (let t = 0; t <= 360; t++) {
    let x = map(t, 0, 360, graphX, graphX + graphPeriod);
    let y = graphY - 50 * (1 / cos(t));
    vertex(x, y);
  }
  endShape();

  // Draw cosecant curve

  noFill();
  stroke("#673AB7");
  beginShape();
  for (let t = 0; t <= 360; t++) {
    let x = map(t, 0, 360, graphX, graphX + graphPeriod);
    let y = graphY - 50 * (1 / sin(t));
    vertex(x, y);
  }
  endShape();

  // Draw cotangent curve

  noFill();
  stroke("#FFEB3B");
  beginShape();
  for (let t = 0; t <= 360; t++) {
    if (t != 90 || t != 270);
    {
      let x = map(t, 0, 360, graphX, graphX + graphPeriod);
      let y = graphY - 50 * (1 / tan(t));
      vertex(x, y);
    }
  }
  endShape();

  // Draw moving line

  let lineX = map(angle, 0, 360, graphX, graphX + graphPeriod);
  //stroke('grey');
  //line(lineX, graphY - graphAmplitude, lineX, graphY + graphAmplitude);

  // Draw moving points on graph

  let orangeY = graphY - 50 * cos(angle);
  let redY = graphY - 50 * sin(angle);
  let greenY = graphY - 50 * tan(angle);
  let blueY = graphY - 50 * (1 / cos(angle));
  let purpleY = graphY - 50 * (1 / sin(angle));
  let yellowY = graphY - 50 * (1 / tan(angle));

  // Delete asymptote

  stroke("#000000");
  strokeWeight(2);
  line(201, 0, 201, 400);
  line(126, 0, 126, 400);
  line(276, 0, 276, 400);

  // Draw graph

  stroke("grey");
  strokeWeight(3);
  line(graphX, graphY, graphX + 300, graphY);
  line(graphX, graphY - graphAmplitude, graphX, graphY + graphAmplitude);
  line(
    graphX + graphPeriod,
    graphY - graphAmplitude,
    graphX + graphPeriod,
    graphY + graphAmplitude
  );

  fill("grey");
  strokeWeight(1);
  textAlign(CENTER, CENTER);
  text("0", graphX, graphY + graphAmplitude + 20);
  text("2π", graphX + graphPeriod, graphY + graphAmplitude + 20);
  text("1", graphX / 2, graphY - 50);
  text("0", graphX / 2, graphY);
  text("-1", graphX / 2, graphY + 50);

  //fill('orange');
  //text('cos', graphX + graphPeriod + graphX / 2, graphY - 50);
  //fill('red');
  //text('sin', graphX + graphPeriod + graphX / 2, graphY);

  noStroke();

  fill("orange");
  circle(lineX, orangeY, 10);

  fill("red");
  circle(lineX, redY, 10);

  fill("#4CAF50");
  circle(lineX, greenY, 10);

  fill("#03A9F4");
  circle(lineX, blueY, 10);

  fill("#673AB7");
  circle(lineX, purpleY, 10);

  fill("#FFEB3B");
  circle(lineX, yellowY, 10);
}
