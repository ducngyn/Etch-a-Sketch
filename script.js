const grid = document.querySelector('.grid-wrapper');

function init() {
    createGrid(30);
    initButtons();
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const currentLine = document.createElement('div');
        currentLine.classList.add('line');

        for (let i = 0; i < size; i++) {
            initCell(currentLine);
        }
        grid.append(currentLine);
    }
}

function initCell(line) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    line.appendChild(cell);

    cell.addEventListener('mouseenter', () => {
        cell.classList.add('js-active');
    })
}

function initButtons() {
    const clearButton = document.querySelector('.btn-clear');

    clearButton.addEventListener('click', () => {
        clearGrid();
    })


}

function clearGrid() {
    const cells = grid.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.remove('js-active');
    })

}


init();

