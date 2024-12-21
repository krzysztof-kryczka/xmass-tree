// Kolory dla ozdób
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00', '#00ffff'];

// Funkcja do generowania losowego koloru
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Funkcja do tworzenia choinki
function createTree() {
    const tree = document.getElementById('tree');
    const height = 12; // Wysokość choinki
    const decorations = ['*', 'o', '@', '#']; // Ozdoby

    for (let i = 0; i < height; i++) {
        const level = document.createElement('div');
        let row = '';

        for (let j = 0; j < height - i; j++) {
            row += '&nbsp;';
        }

        for (let k = 0; k < (2 * i + 1); k++) {
            if (Math.random() > 0.8) {
                const decoration = decorations[Math.floor(Math.random() * decorations.length)];
                row += `<span style="color:${getRandomColor()}">${decoration}</span>`;
            } else {
                row += '^';
            }
        }

        level.innerHTML = row;
        tree.appendChild(level);
    }

    // Dodanie pnia choinki
    const trunk = document.createElement('div');
    trunk.innerHTML = '&nbsp;'.repeat(height - 1) + '| |';
    tree.appendChild(trunk);
}

// Funkcja do animacji choinki
function animateTree() {
    const elements = document.querySelectorAll('.tree div span');
    elements.forEach(element => {
        element.style.color = getRandomColor();
    });
}

// Utwórz choinkę i zacznij animację
createTree();
setInterval(animateTree, 1000);
