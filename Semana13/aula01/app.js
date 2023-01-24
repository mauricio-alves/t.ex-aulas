import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

// createApp({
//   data() {
//     return {
//       m2: "Bora codar! Clica ai :)",
//       count: 0,
//     };
//   },
// }).mount("#app");

import calculos from "./src/components/calculos.js";
createApp(calculos).mount("#app");
