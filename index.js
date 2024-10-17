let typed = new Typed(".text", {
    strings: ["FullStack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const gridContainer = document.getElementById('grid-container');
    const totalItems = 450; // Adjust to match the grid size (30x80 is too large for 450, so adjust for testing)

    // Dynamically generate grid items
    for (let i = 0; i < totalItems; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridContainer.appendChild(gridItem);
    }

    gridContainer.addEventListener('mousemove', function (e) {
      // Get the position of the mouse relative to the grid container
      const mouseX = e.clientX;
      const mouseY = e.clientY;
    
      // Get the grid items
      const gridItems = document.querySelectorAll('.grid-item');
    
      // Calculate the index of the grid item the mouse is closest to
      const column = Math.floor(mouseX / 51); // 51px is the width of each column
      const row = Math.floor(mouseY / 50); // 50px is the height of each row
      const index = row * 30 + column; // Calculate the linear index for the grid item
      const columns = 30; // Number of columns
    
      // Reset all grid items' borders to the original color
      gridItems.forEach(item => {
        item.style.border = "1px solid rgb(39, 13, 95)";
      });
    
      // Highlight the entire row (same row horizontally)
      for (let i = row * columns; i < (row + 1) * columns; i++) {
        if (gridItems[i]) {
          gridItems[i].style.border = "2px solid rgb(91, 37, 207)";
        }
      }
    
      // Highlight the entire column (same column vertically)
      for (let i = column; i < gridItems.length; i += columns) {
        if (gridItems[i]) {
          gridItems[i].style.border = "2px solid rgb(91, 37, 207)";
        }
      }
    });
    

