
import { setupFooter } from "./section-footer";
import { setupHeader } from "./section-header";
import { setupComunication, setupMenu } from "./section-main";


export function setupSidebar(sidebar: HTMLDivElement) {
    sidebar.innerHTML = `
        <div class="sidebar_container">
            <div class="sidebar_expand">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <section class="sidebar_header">
                <div id="header"></div>
            </section>
            <div class="sidebar_content">
                <section class="sidebar_main">
                    <h6 class="sidebar-title">Main</h6>
                    <div id="main"></div>
                </section>
                <section class="sidebar_comunication">
                    <h6 class="sidebar-title">Comunication</h6>
                    <div id="comunication"></div>
                    <div class="sidebar-upgrade">
                        <div class="comunication-card">
                            <div class='card-chart'>
                                <div class="char-value">60%</div>
                            </div>
                            <div class='card-content'>
                                <h2>Used Capacity</h2>
                                <p>You are already using 60% of your capacity</p>
                                <button>Upgrade plan</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="sidebar_footer" id="footer"></div>
        </div>
    `;
    setupHeader(document.querySelector<HTMLDivElement>("#header")!);
    setupMenu(document.querySelector<HTMLDivElement>("#main")!);
    setupComunication(document.querySelector<HTMLDivElement>("#comunication")!);

    setupFooter(document.querySelector<HTMLDivElement>("#footer")!);
}
