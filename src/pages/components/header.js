export function makeHeader(text, divClass) {
    const head = document.createElement('div');
    head.classList.add(divClass);
    const title = document.createElement('h1');
    title.textContent = text;
    head.append(title);
    return head;
}