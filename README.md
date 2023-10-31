# Grid & Pointer in p5.js

Enhance your p5.js sketches with precision and ease using this script for p5.js.  

It offers the ability to create a customizable grid on the canvas, along with a pointer that displays the exact coordinates of your mouse cursor. This combination simplifies the alignment of elements, making it a valuable tool for artists and developers.
<br></br>
## Features
- **Grid Drawing**: Easily draw grid lines and labels on your canvas with customizable colors and spacing. This feature is perfect for creating structured and well-aligned designs.

- **Mouse Pointer**: The script includes a mouse pointer that displays the real-time coordinates of your cursor. This feature is especially helpful for pinpointing exact positions in your sketches.
<br></br>
## Getting Started
- **Download grid.js from the respitory.**

  [Download raw file](https://github.com/SelfTaught-HamzaCodes/grid.p5/blob/main/grid.js)
  
- **Add it to the same folder as your canvas.**
  
  ```
  project-folder/
  ├── index.html
  ├── grid.js
  ├── p5.min.js
  └── sketch.js
  ```
- **Add grid.js as a script tag to index.html**.
  
  ```html
  <script src="grid.js"></script>
  ```

- **Call the function just before you close your draw function in sketch.js**.

  ```js
  function draw()
  {

    // YOUR CODE
  
    drawGrid(25,  // (Optional) The distance between grid lines and labels. (Default: 50)
    true,  // (Optional) To enable/disable coordinates at the pointer's current position. (Default: false)
    'grey',  // (Optional) Color for the grid lines. (Default: 'black')
    'white'  // (Optional) Color for the labels. (Default: 'grey')
    'green')  // (Optional) Color for the pointer text. (Default: 'red')
  }
  ```
  
  "***Fewer distractions and more focus on creativity***"

  This feature positions the grid above all other shapes, simplifying the creation of intricate designs with precision.
  
  ⚠ Ensure that if you've enabled the coordinates at the pointer's current position, you have the `background()` function at the beginning of your `draw()` function.
<br></br>
## Example
![image](https://github.com/SelfTaught-HamzaCodes/grid.p5/assets/123310424/971e048c-c252-4767-ba72-a853979b7c85)


  ```js
  function setup() 
  {
    // Set canvas
	createCanvas(800, 600);
  }  

  function draw() 
  {

	// Set background
	// IMPORTANT: If coordinates at the pointer's current position is required.
	background(200);

	//Face:
	fill(255);
	rect(250, 200, 300, 250, 5);

	//Eyes:
	fill(100);
	ellipse(350, 300, 50, 50)
	ellipse(450, 300, 50, 50)

	// Mouth:
	strokeWeight(5);
	line(350, 350, 400, 400)
	line(400, 400, 450, 350)
	 
	// Grid Function:
	drawGrid(50, true, "black", "black", "red");

  }
  ```
  ### More Example Usage

  Here are some examples of how to use the `drawGrid` function:

```javascript
// Customize all colors, and enable pointer.
drawGrid(50, true, 'blue', 'green', 'orange');

// Customize grid line and label colors, and enable pointer.
drawGrid(25, true, 'red', 'purple');

// Customize label color only, use default grid line and pointer colors, and enable pointer.
drawGrid(30, true, undefined, 'yellow');

// Use all default colors, and enable pointer.
drawGrid(40, true);
```
<br></br>
## Contributions 
I would love to see fellow peers contribute to this project to make p5.js more accessible for people of all skill levels.
<br></br>
## Acknowledgments
- Special thanks to a fellow peer for suggesting the idea of pointer addition to enhance precision.
<br></br>

Happy Coding! 
