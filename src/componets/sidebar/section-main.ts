import { COMUNICATIONS, MENU } from "../../constants/sidebar.const";
import { createItemElement, itemSelected } from "../../utils/help";

export function setupMenu(element: HTMLDivElement) {
    MENU.forEach(({ iconName, label, id }) => {
        element.append(createItemElement(iconName, label, () => itemSelected(id)));
    });
}

export function setupComunication(element: HTMLDivElement) {
    COMUNICATIONS.forEach(({ iconName, label, id }) => {
        element.append(createItemElement(iconName, label, () => itemSelected(id)));
    });
}