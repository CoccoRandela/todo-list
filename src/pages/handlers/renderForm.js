export function renderForm(builderF, appendingEl) {
    const form = builderF();
    appendingEl.appendChild(form);
}
