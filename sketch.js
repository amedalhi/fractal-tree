function setup() {
  createCanvas(400, 400);
  background(0); // Black background
}

function draw() {
  stroke(255); // White color for the tree
  translate(width / 2, height); // Move the origin to the bottom center
  branch(100); // Draw a branch of length 100
  noLoop(); // Stops draw() from looping
}

function branch(len) {
  line(0, 0, 0, -len); // Draw the branch
  translate(0, -len); // Move to the end of the branch

  len *= 0.65; // Each branch will be 67% of the size of the previous one

  if (len > 2) {
    // Recursive case: if the branch length is more than 2 pixels
    push(); // Save the current transformation state
    rotate(PI / 4); // Rotate by 45 degrees
    branch(len); // Draw a right branch
    pop(); // Restore the original transformation state

    push();
    rotate(-PI / 4); // Rotate by -45 degrees
    branch(len); // Draw a left branch
    pop();
  }
}
