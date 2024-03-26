export const createItemElement = (nameIcon: string, label: string, onAction: () => void): HTMLElement => {
    const item = document.createElement("div");
    item.className = `item`;
    item.innerHTML = `
            <i class="fa-solid fa-${nameIcon}"></i>
            <label>${label}</label>
        `;

    item.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        onAction();
        const active = document.querySelector('.selected');
        if (active) {
            active.classList.remove('selected');
        }
        item.classList.add('selected');
    })
    return item;
}

export const itemSelected = (id: string) => {
    console.log({ id });
}