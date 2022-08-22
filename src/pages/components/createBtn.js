export function makeButton(btnClass,renderFunction) {
    const button = document.createElement('button');
    button.classList.add(btnClass)
    button.textContent = '+';
    button.addEventListener('click', renderFunction)
    return button;
} 