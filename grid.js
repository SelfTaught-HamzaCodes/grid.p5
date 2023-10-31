/**
 * Draws a grid on the canvas with the specified spacing and customizable colors.
 *
 * @param {number} spacing - The distance between grid lines and labels.
 * @param {string} [gridLineColor='black'] - Color for the grid lines.
 * @param {string} [labelColor='grey'] - Color for the labels.
 * @param {string} [pointerColor='red'] - Color for the pointer text.
 */
function drawGrid(spacing, gridLineColor = 'black', labelColor = 'grey', pointerColor = 'red') {
  push(); // Save the current drawing settings.

    /// Grid Generation ///
    stroke(gridLineColor);
    fill(labelColor);
    strokeWeight(1);

    const generation = max(width, height);

    for (let pos = 0; pos < generation; pos += spacing) {
      line(pos, 0, pos, height);
      line(0, pos, width, pos);
      textAlign(CENTER, CENTER);
      text(pos, 10, pos);
      text(pos, pos, 10);
    }

    /// Coordinates at pointer position ///
    fill(pointerColor);
    noStroke();
    text(`${mouseX},${mouseY}`, mouseX, mouseY);

  pop(); // Restore the previous drawing settings.
}
