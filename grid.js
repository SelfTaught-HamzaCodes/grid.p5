/**
 * Draws a grid on the canvas with the specified spacing and customizable colors.
 *
 * @param {number} [spacing] - The distance between grid lines and labels.
 * @param {boolean} [pointer=false] - To enable/disable coordinates at the pointer's current position.
 * @param {string} [gridLineColor='black'] - Color for the grid lines.
 * @param {string} [labelColor='grey'] - Color for the labels.
 * @param {string} [pointerColor='red'] - Color for the pointer text.
 */
function drawGrid(spacing=50, pointer=false, gridLineColor = 'black', labelColor = 'grey', pointerColor = 'red') {
  push(); // Save the current drawing settings.

    /// Grid Generation ///
    const generation = max(width, height);

    for (let pos = 0; pos < generation; pos += spacing) {
      push();
        strokeWeight(1);
        stroke(gridLineColor);
        line(pos, 0, pos, height);
        line(0, pos, width, pos);
      pop();
      
      textAlign(CENTER, CENTER);
      
      push();
          fill(labelColor)
          noStroke();
          text(pos, 10, pos);
          text(pos, pos, 10);
        pop();
    }

    /// Coordinates at pointer position ///
    if (pointer)
    {

      fill(pointerColor);
      noStroke();
      text(`${mouseX},${mouseY}`, mouseX, mouseY);
    }


  pop(); // Restore the previous drawing settings.
}
