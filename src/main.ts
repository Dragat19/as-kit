import { setupSidebar } from './componets/sidebar/sidebar.ts';
import './style.css';

document.querySelector<HTMLDivElement>('#content')!.innerHTML = `
    <div class="content-page"></div>
`;

setupSidebar(document.querySelector<HTMLDivElement>('#sidebar')!);