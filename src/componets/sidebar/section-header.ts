import viteLogo from '/vite.svg';
export function setupHeader(element: HTMLDivElement) {
    element.className = 'header-container'
    element.innerHTML = `
        <div class="header-logo">
            <img img src="${viteLogo}" class="logo"/>
            <h6>Storeify</h6>
        </div>
        <div class="header-search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search for anything..." />
        </div>
    `;
}