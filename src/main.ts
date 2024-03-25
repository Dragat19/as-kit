import { setupCounter } from './counter.ts';
import './style.css';
import viteLogo from '/vite.svg';

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `


document.querySelector<HTMLDivElement>('#sidebar')!.innerHTML = `
  <div class="sidebar_container">
     <section class="sidebar_header">
          <div class="header-container">
            <div class="header-logo">
              <img img src="${viteLogo}" class="logo"/>
              <h6>Storeify</h6>
            </div>
            <div class="header-search">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input placeholder="Search for anything..." />
            </div>
          </div>
     </section>
     <section  class="sidebar_main">

     </section>
     <section class="sidebar_comunication">

     </section>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
