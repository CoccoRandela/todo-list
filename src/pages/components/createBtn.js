export function makeButton(btnClass) {
    const button = document.createElement('button');
    button.classList.add(btnClass)
    button.textContent = '+';
    return button;
} 