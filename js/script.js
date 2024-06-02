import Categorie from "./categorie.js";
import Zone from "./zone.js";
import Galery from "./galery.js"

const App = Vue.createApp({
    components: {
        Categorie,
        Zone,
        Galery
    },

    template: /*html*/`
    <section id="parabody2">
            <Categorie :cont="0"/>
    </section>
        <div id="1">
    <section id="parabody3">
            <Categorie :cont="1"/>
        </div>
    </section>
    <section id="parabody4">
            <Categorie :cont="2"/>
    </section>
    <section id="parabody5">
            <Categorie :cont="3"/>
    </section>
    <section id="parabody6">
            <Categorie :cont="4"/>
    </section>
    
    `
});
App.mount("#categorieApp");