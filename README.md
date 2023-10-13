# Grid in p5.js
A JavaScript script for p5.js that creates a customizable grid on the canvas. Use this script to easily add grid lines and labels to your p5.js sketches, aiding in precise positioning and alignment of elements.
<br></br>
## Getting Started
- Download **grid.js** from the respitory.
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

- Simply call `drawGrid()` in **sketch.js** after `createCanvas()`.
  ```
  function setup()
  {
	//create a canvas for the robot
	createCanvas(500, 500);
    //draw grid with a spacing of 50. 
	drawGrid(40);
  }	
  ```
  ***
  ### Example
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
More on Grid.
