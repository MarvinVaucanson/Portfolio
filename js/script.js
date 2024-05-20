import Categorie from "./categorie.js";
import Zone from "./zone.js";

const App = Vue.createApp({
    components: {
        Categorie,
        Zone
    },

    template: /*html*/`
    <section id="parabody2">
            <Categorie :cont="0"/>
        <div id="1">  
            <Categorie :cont="1"/>
        </div>
    </section>
    <section id="parabody3">
            <Categorie :cont="2"/>
    </section>
    <section id="parabody4">
            <Categorie :cont="3"/>
    </section>
    <section id="parabody5">
            <Categorie :cont="4"/>
    </section>
    
    `
});
App.mount("#categorieApp");