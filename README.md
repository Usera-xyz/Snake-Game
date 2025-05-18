# Snake Game

A classic Snake game built with HTML, CSS, and JavaScript. Control the snake using the arrow keys, eat the red apple to grow, and try not to hit the walls or yourself.

## Features

- Classic Snake gameplay with keyboard controls
- Score tracking
- Game over screen with final score
- Restartable game loop
- Responsive UI and clean design

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- `<canvas>` API for game rendering

## How to Run

### Option 1: Using Live Server (recommended)

1. Open the project in Visual Studio Code.
2. Install the Live Server extension (if not already installed).
3. Right-click on `index.html` and choose “Open with Live Server”.
4. The game will open in your browser with all styles and scripts loaded correctly.

> This method ensures that resource paths like `/src/...` are resolved properly.

### Option 2: Open with double-click (manual)

1. Locate the `index.html` file in your file explorer.
2. Open it directly in your browser.
3. If the game appears without styling or doesn't function, update the paths in `index.html` to be relative:

```html
<!-- Original -->
<link rel="stylesheet" href="/src/css/styles.css">
<script src="/src/js/scripts.js"></script>

<!-- Updated -->
<link rel="stylesheet" href="src/css/styles.css">
<script src="src/js/scripts.js"></script>
```

## Project Status
Functional and complete — currently being improved and refined.
