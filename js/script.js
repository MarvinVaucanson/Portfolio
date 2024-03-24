import Categorie from "./categorie.js";
import Zone from "./zone.js";

const App = Vue.createApp({
    components: {
        Categorie,
        Zone
    },

    template: /*html*/`
    <div id="parabody2">
            <Categorie :cont="0"/>
        <div id="1">  
            <Categorie :cont="1"/>
        </div>
    </div>
    <div id="parabody3">
            <Categorie :cont="2"/>
    </div>

    `
});
App.mount("#categorieApp");

// import Zone from "./zone.js";
// const App2 = Vue.createApp({
//     components: {
//         Zone
//     },

//     template: /*html*/`
//         <Zone :format="0" />
//     `,
// });
// App2.mount("#zoneApp");

// const app2 = Vue.createApp({
//     components: {
//         Categorie
//     },
//     template: /*html*/ `<Categorie :cont="1" />`
// });
// app2.mount("#categorieApp2");