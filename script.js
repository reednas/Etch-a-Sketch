const gridContainer = document.getElementById('grid-container');
const clearButton = document.getElementById('clear-button');


function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'green';
        });
        gridContainer.appendChild(cell);
    }
}

function clearGrid() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
}

createGrid(16);

clearButton.addEventListener('click', clearGrid);
