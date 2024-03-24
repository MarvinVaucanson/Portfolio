import Zone from "./zone.js";

export default {
    components: {
        Zone
    },
    props: ["cont"],
    setup(props) {
        console.log("hey " + props.cont)

        var conte = props.cont;

        if(props.cont === 0){
            const classdezone = "zone2";
            const classdecategorie = "categorie";
            const type = "UE";
            const numUE = [1, 2, 3, 4, 5, 6];
            const nomUE = ["Réaliser", "Optimiser", "Administrer", "Gérer", "Conduire", "Collaborer"];
            const licon = ["fa-solid fa-gears", "fa-solid fa-microchip", "fa-solid fa-server", "fa-solid fa-database", "fas fa-laptop", "fas fa-users"];
            const title ="./ compétence";
            return { classdezone,classdecategorie,type,title,numUE, nomUE, licon,conte };
        }
        if(props.cont === 1){
            const classdezone = "zone3";
            const classdecategorie = "categorieCase";
            const numUE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
            const nomUE = ["Python", "C", "Java", "AndroidStudio / Kotlin", "JS", "VueJS", "HTML/CSS", "PHP", "Symfony", "SQL", "PowerBI", "MongoDB", "Docker", "GIT"];
            const licon = ["fa-brands fa-python", "fa-solid fa-microchip", "fa-brands fa-java","fa-brands fa-android" ,"fa-brands fa-js", "fa-brands fa-vuejs","fa-brands fa-html5", "fa-brands fa-php","fa-brands fa-symfony","fa-solid fa-database","fa-brands fa-microsoft","fa-brands fa-envira","fa-brands fa-docker","fa-brands fa-gitlab"];
            const title ="./ langages";
            return { classdezone,classdecategorie,title,numUE, nomUE, licon, conte };
        }
        if(props.cont === 2){
            const classdezone = "zone4";
            const classdecategorie = "categorieProjet";
            const numUE = [1, 2, 3, 4, 5, 6, 7,8];
            const nomUE = ["Aide à la décision", "Daily Info", "Portfolio", "Tourisme App", "Kamouflage Web", "Douzie Clicker", "keb'app","Labyrinthe"];
            const licon = [ "./img/projet/projet.png","fa-brands fa-android" ,"fa-brands fa-js", "fa-brands fa-vuejs","fa-brands fa-html5", "fa-brands fa-php","fa-brands fa-symfony","fa-brands fa-python"];
            const title ="./ projet";
            return { classdezone,classdecategorie,title,numUE, nomUE, licon, conte };
        }
    },
    methods: {
        setSelectedUE(ueNumber) {
            this.selected = ueNumber;
        }
    },
    data() {
        return {
            selected: 1 // Valeur par défaut de selected
        };
    },
    template: /*html*/ `
    <div class="main">
        <div :class="classdecategorie">
            <h2>{{ title }}<span id="underscore" class="blink">_</span></h2>
            <button v-for="ue in numUE" :key="ue" @click="setSelectedUE(ue)" class="nobutton" :class="{ active: selected === ue }">
                <!-- Si c'est un projet-->
                <div v-if="cont === 2">
                    <img :src="licon[ue-1]"/>
                    <nav>{{ nomUE[ue-1] }}</nav>
                </div>

                <!-- Si c'est un langage ou une UE-->
                <div v-if="cont === 3 || cont === 1">
                <i :class="licon[ue-1]"></i> {{type}} {{ ue }} - {{ nomUE[ue-1] }}
                <div>
            </button>
        </div>
    </div>
<div :class="classdezone">
    <Zone :cont="conte" :selected="selected"/>
<div>

    `
}
