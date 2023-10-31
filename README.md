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
  
- Add it to the same folder as your canvas.
  
  ```
  project-folder/
  ├── index.html
  ├── grid.js
  ├── p5.min.js
  └── sketch.js
  ```
- Add **grid.js** as a script to **index.html**.
  
  ```
  <script src="grid.js"></script>
  ```

- Call the function just before you close your draw function in sketch.js.

  This positions the grid above all other shapes, simplifying the creation of intricate designs with precision.

## Example
![image](https://github.com/SelfTaught-HamzaCodes/grid.p5/assets/123310424/2569855d-07f2-4b10-b5a3-78a7cc2e3dd2)


  ```
  function setup()
  {
    //create a canvas for the robot
    createCanvas(500, 500);
    drawGrid(40);
  }	

  function draw()
  {
    fill(0);
    ellipse(100, 120, 20, 20);
    ellipse(100, 120, 20, 20);
    fill(255, 0, 0);
    rect(80, 80, 120, 30);
    triangle(120, 80, 140, 40, 160, 80);
  }
  ```


## 🚧 Under-Construction: 
Stay tuned for more updates on this script.
