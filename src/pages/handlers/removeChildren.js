export function removeChildren(element) {
    while(element.hasChildNodes()) {
        element.removeChild(element.lastChild)
    }
}