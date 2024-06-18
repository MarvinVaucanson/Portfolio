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
            const numUE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
            const nomUE = ["Python", "C", "Java", "AndroidStudio / Kotlin", "JS", "VueJS", "HTML/CSS", "PHP", "Symfony", "SQL", "PowerBI", "MongoDB", "Docker", "GIT", "Jinja2"];
            const licon = ["fa-brands fa-python", "fa-solid fa-microchip", "fa-brands fa-java","fa-brands fa-android" ,"fa-brands fa-js", "fa-brands fa-vuejs","fa-brands fa-html5", "fa-brands fa-php","fa-brands fa-symfony","fa-solid fa-database","fa-brands fa-microsoft","fa-brands fa-envira","fa-brands fa-docker","fa-brands fa-gitlab","fa-solid fa-torii-gate"];
            const title ="./ langages";
            return { classdezone,classdecategorie,title,numUE, nomUE, licon, conte };
        }
        if(props.cont === 2){
            const classdezone = "zone4";
            const classdecategorie = "categorieProjet";
            const numUE = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const nomUE = ["Aide à la décision", "Daily Info", "Portfolio", "Tourisme App", "Kamouflage Web", "Douzie Clicker", "keb'app","Labyrinthe","Poster"];
            const licon = [ "./img/projet/graphe.png","./img/projet/daily.png" ,"./img/projet/portfolio.png", "./img/projet/tourisme.png","./img/projet/kamouflage.png", "./img/projet/douzieclicker.png","./img/projet/kebab.png","./img/projet/labyrinthe.png","./img/projet/poster.png"];
            const title ="./ projet";
            return { classdezone,classdecategorie,title,numUE, nomUE, licon, conte };
        }
        if(props.cont === 3){
            const classdezone = "zone5";
            const classdecategorie = "categorieExperience";
            const nomUE = {
                "INRAE":1,
                "Pepites d'Héloïse":2,
                "Maison Ivey":3,
                "Endorah":4,
                "La Galoche":5,
                "BDE Info":6,
                "Art et Science":7,
                "Youth For Climate":8,
                "Conseil de Vie Lycéenne":9, 
                "Tutorat":10
            };
            const title ="./ experiences";
            const undertitle = ["/ professionel","/ associative","/ autre"]

            const dico = {
                "/ professionel": ["INRAE", "Pepites d'Héloïse", "Maison Ivey"],
                "/ associative": ["Endorah", "La Galoche", "BDE Info", "Art et Science", "Youth For Climate"],
                "/ autre": ["Conseil de Vie Lycéenne", "Tutorat"]
            }

            return { classdezone,classdecategorie,title,undertitle, nomUE, conte, dico };
        }
        if(props.cont === 4){
            const classdezone = "zone6";
            const classdecategorie = "categoriePassion";
            const numUE = [1, 2, 3, 4];
            const nomUE = ["Video", "Photo", "Escalade", "+"];
            const licon = ["video", "photo", "escalade", "+"];
            const title ="./ passions";
            return { classdezone,classdecategorie,title,numUE, nomUE, licon, conte };
        }
    },
    methods: {
        setSelectedUE(ueNumber) {
            this.selected = ueNumber;
        },
        getIdbyName(name){
            const nomUE = {
                "INRAE":1,
                "Pepites d'Héloïse":2,
                "Maison Ivey":3,
                "Endorah":4,
                "La Galoche":5,
                "BDE Info":6,
                "Art et Science":7,
                "Youth For Climate":8,
                "Conseil de Vie Lycéenne":9, 
                "Tutorat":10
            };
            let index = nomUE[name];
            return index
        }
    },
    data() {
        return {
            selected: 1 // Valeur par défaut de selected
        };
    },
    template: /*html*/ `
    <div class="main">
        <div v-if:="cont === 0 || cont === 1 || cont === 2 || cont === 4" :class="classdecategorie">
            <h2>{{ title }}<span id="underscore" class="blink">_</span></h2>
            <button v-for="ue in numUE" :key="ue" @click="setSelectedUE(ue)" class="nobutton" :class="{ active: selected === ue }">
                <!-- Si c'est un projet-->
                <div v-if="cont === 4">
                    <nav>{{ nomUE[ue-1] }}</nav>
                </div>
                <div v-if="cont === 2">
                    <img :src="licon[ue-1]"/>
                    <nav>{{ nomUE[ue-1] }}</nav>
                </div>
                <div v-if="cont === 1">
                    <i :class="licon[ue-1]"></i>{{ nomUE[ue-1] }}
                </div>
                <!-- Si c'est un langage ou une UE-->
                <div v-if="cont === 0 ">
                    <i :class="licon[ue-1]"></i> {{type}} {{ ue }} - {{ nomUE[ue-1] }}
                </div>
            </button>
        </div>

        <div v-if="cont === 3 "  :class="classdecategorie">
            <h2>{{ title }}<span id="underscore" class="blink">_</span></h2>
            <div class="undertitle" v-for="(elt, key) in dico" :key="key">
                <h3>{{ key }}<span id="underscore" class="blink">_</span></h3><br>
                <div class="exp">
                    <button v-for="(ueName, ueIndex) in elt" :key="ueName" @click="setSelectedUE( getIdbyName(ueName))" class="nobutton" :class="{ active: selected ===  getIdbyName(ueName)}">
                        {{ ueName }}
                    </button>
                </div>
            </div>
        </div>
        
    </div>

<div :class="classdezone">
    <Zone :cont="conte" :selected="selected"/>
</div>

    `
}
