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
    <div id="parabody4">
            <Categorie :cont="3"/>
    </div>

    `
});
App.mount("#categorieApp");