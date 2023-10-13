/**
 * Draws a grid on the canvas with the specified spacing and labels the axes.
 * @param {number} spacing - The distance between grid lines and labels.
 */
function drawGrid(spacing) {
  // Draw vertical grid lines and label the x-axis
  for (let x = 0; x < width; x += spacing) {
    line(x, 0, x, height); // Draw a vertical grid line.
    textAlign(CENTER, CENTER);
    text(x, x, 10); // Label the x-axis with the value 'x' at the top of each line.
  }

  // Draw horizontal grid lines and label the y-axis
  for (let y = 0; y < height; y += spacing) {
    line(0, y, width, y); // Draw a horizontal grid line.
    textAlign(CENTER, CENTER);
    text(y, 10, y); // Label the y-axis with the value 'y' at the left of each line.
  }
}
