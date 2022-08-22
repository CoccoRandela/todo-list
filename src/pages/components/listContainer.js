export function makeList(list, divClass, renderFunction) {
    const listContainer = document.createElement('div');
    listContainer.classList.add(divClass);
    for (let item of list) {
        renderFunction(item, listContainer);
    }
    return listContainer;
}