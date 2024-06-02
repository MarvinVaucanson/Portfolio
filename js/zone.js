import Galery from "./galery.js";

export default {
    components: {
        Galery
    },
    props: ["cont", "selected"],
    setup(props) {
        var selected = Vue.ref(props.selected - 1);

        Vue.watch(() => props.selected, (newValue) => {
            selected.value = newValue - 1;
        });

        const data = {
            0: {
                type: "UE",
                numUE: [1, 2, 3, 4, 5, 6],
                nomUE: ["Réaliser", "Optimiser", "Administrer", "Gérer", "Conduire", "Collaborer"],
                licon: ["fa-solid fa-gears", "fa-solid fa-microchip", "fa-solid fa-server", "fa-solid fa-database", "fas fa-laptop", "fas fa-users"],
                texte: [
                    "L'UE 1, Développer une application, est un cours typique dans les programmes de formation en informatique, en particulier dans un Bachelor Universitaire de Technologie (BUT) en informatique. Cette unité d'enseignement vise à fournir aux étudiants les compétences et les connaissances nécessaires pour développer des applications logicielles à partir de zéro, en mettant l'accent sur les principes de base du développement de logiciels et en utilisant souvent des langages de programmation et des technologies populaires.",
                    "L'UE 2, Optimiser une application",
                    "Coubeh",
                    "UE 4",
                    "UE 5",
                    "UE 6"
                ],
                cheminImages: "chemin/vers/repertoire/contenant/images/"
            },
            1: {
                type: "",
                path: "/langages",
                numUE: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                nomUE: ["Python", "C", "Java", "AndroidStudio_Kotlin", "JS", "VueJS", "HTML_CSS", "PHP", "Symfony", "SQL", "PowerBI", "MongoDB", "Docker", "GIT"],
                licon: ["fa-brands fa-python", "fa-solid fa-microchip", "fa-brands fa-java","fa-brands fa-android" ,"fa-brands fa-js", "fa-brands fa-vuejs","fa-brands fa-html5", "fa-brands fa-php","fa-brands fa-symfony","fa-solid fa-database","fa-brands fa-microsoft","fa-brands fa-envira","fa-brands fa-docker","fa-brands fa-gitlab"],
                texte: [
                    `Python est un langage de programmation polyvalent, reconnu pour sa simplicité syntaxique et sa lisibilité. Il est largement utilisé dans le développement web, le machine learning, l'automatisation de tâches et bien plus encore.`,
                    `Le langage C est un pilier de la programmation informatique, réputé pour son efficacité et sa proximité avec le matériel. Il est souvent utilisé dans le développement de systèmes d'exploitation, de logiciels embarqués et d'applications nécessitant des performances optimales.`,
                    `Java est un langage de programmation populaire, reconnu pour sa portabilité et sa robustesse. Il est largement utilisé pour développer des applications d'entreprise, des applications Android, des systèmes distribués et bien d'autres projets.`,                    
                    `Kotlin est un langage moderne conçu pour interagir parfaitement avec Java, en particulier pour le développement d'applications Android. Android Studio est l'environnement de développement intégré (IDE) de prédilection pour créer des applications Android avec Kotlin, offrant des fonctionnalités avancées pour faciliter le développement.`,                    
                    `JavaScript est le langage de programmation essentiel pour le développement web. Il permet d'ajouter des fonctionnalités dynamiques et interactives aux sites web, de créer des applications web côté client, des jeux et bien plus encore.`,                    
                    `Vue.js est un framework JavaScript progressif et accessible, utilisé pour construire des interfaces utilisateur interactives et dynamiques. Il offre une architecture flexible et des performances optimales, ce qui en fait un choix populaire pour le développement d'applications web modernes.`,                  
                    `HTML et CSS sont les langages de base du développement web. HTML est utilisé pour structurer le contenu des pages web, tandis que CSS est utilisé pour styliser et mettre en forme ces contenus, créant ainsi des expériences visuelles attrayantes et cohérentes.`,                    
                    `PHP est un langage de script côté serveur largement utilisé pour le développement web. Il est principalement utilisé pour générer des contenus dynamiques, traiter les formulaires, interagir avec les bases de données et bien plus encore.`,                    
                    `Symfony est un framework PHP robuste et modulaire, utilisé pour accélérer le processus de développement d'applications web complexes. Il offre une architecture flexible, des composants réutilisables et une communauté active, ce qui en fait un choix populaire parmi les développeurs PHP.`,                 
                    `My SQL et SQLDeveloper. SQL (Structured Query Language) est un langage de programmation utilisé pour communiquer avec les bases de données relationnelles. Il permet de manipuler et de gérer les données stockées dans une base de données, en effectuant des opérations telles que la création, la modification et la récupération de données.`,                    
                    `Power BI est une plateforme d'analyse de données de Microsoft qui permet aux utilisateurs de visualiser et partager des insights à partir de données. Il offre des outils de création de rapports, de visualisation et de tableau de bord pour aider les entreprises à prendre des décisions informées.`,                
                    `MongoDB est une base de données NoSQL flexible et évolutive, utilisée pour stocker des données semi-structurées et non structurées. Elle offre une scalabilité horizontale, une haute disponibilité et une flexibilité de schéma, ce qui en fait un choix populaire pour les applications web modernes.`,                    
                    `Docker est une plateforme de virtualisation légère qui permet aux développeurs de créer, de déployer et d'exécuter des applications dans des conteneurs logiciels. Il offre une gestion efficace des environnements de développement et de production, ainsi qu'une portabilité des applications entre différents systèmes.`,             
                    `Git est un système de contrôle de version distribué largement utilisé pour le suivi des modifications apportées au code source lors du développement logiciel. Il permet aux équipes de collaborer efficacement, de gérer les branches de code et de suivre l'historique des modifications.`,
                ],
                cheminImages: "img/langages/"
            },
            2: {
                type: "",
                path: "/langages",
                numUE : [1, 2, 3, 4, 5, 6, 7,8],
                nomUE : ["Aide à la décision", "Daily Info", "Portfolio", "Tourisme App", "Kamouflage Web", "Douzie Clicker", "keb'app","Labyrinthe"],
                licon : ["graphe","daily","portfolio","tourisme","kamouflagek","douzieclicker","kebab","labyrinthe"], 
                // licon : [ "./img/projet/graphe.png","./img/projet/daily.png" ,"./img/projet/portfolio.png", "./img/projet/tourisme.png","./img/projet/kamouflage.png", "","./img/projet/kebab.png","./img/projet/labyrinthe.png"],
                texte: [
                    `Python est un langage de programmation polyvalent, reconnu pour sa simplicité syntaxique et sa lisibilité. Il est largement utilisé dans le développement web, le machine learning, l'automatisation de tâches et bien plus encore.`,
                    `Le langage C est un pilier de la programmation informatique, réputé pour son efficacité et sa proximité avec le matériel. Il est souvent utilisé dans le développement de systèmes d'exploitation, de logiciels embarqués et d'applications nécessitant des performances optimales.`,
                    `Java est un langage de programmation populaire, reconnu pour sa portabilité et sa robustesse. Il est largement utilisé pour développer des applications d'entreprise, des applications Android, des systèmes distribués et bien d'autres projets.`,                    
                    `Kotlin est un langage moderne conçu pour interagir parfaitement avec Java, en particulier pour le développement d'applications Android. Android Studio est l'environnement de développement intégré (IDE) de prédilection pour créer des applications Android avec Kotlin, offrant des fonctionnalités avancées pour faciliter le développement.`,                    
                    `JavaScript est le langage de programmation essentiel pour le développement web. Il permet d'ajouter des fonctionnalités dynamiques et interactives aux sites web, de créer des applications web côté client, des jeux et bien plus encore.`,                    
                    `Vue.js est un framework JavaScript progressif et accessible, utilisé pour construire des interfaces utilisateur interactives et dynamiques. Il offre une architecture flexible et des performances optimales, ce qui en fait un choix populaire pour le développement d'applications web modernes.`,                  
                    `HTML et CSS sont les langages de base du développement web. HTML est utilisé pour structurer le contenu des pages web, tandis que CSS est utilisé pour styliser et mettre en forme ces contenus, créant ainsi des expériences visuelles attrayantes et cohérentes.`,                    
                    `PHP est un langage de script côté serveur largement utilisé pour le développement web. Il est principalement utilisé pour générer des contenus dynamiques, traiter les formulaires, interagir avec les bases de données et bien plus encore.`,                    
                ],
                cheminImages: "./img/projet/"
            },
            3: {
                type: "",
                path: "/experiences",
                numUE : [1, 2, 3, 4, 5, 6, 7,8],
                nomUE : ["INRAE", "Pepites d'Héloïse", "Maison Ivey", "Endorah", "Association La Galoche", "BDE Info", "Art et Science", "Youth For Climate", "Conseil de Vie Lycéenne", "Tutorat"],
                licon : ["INRAE","pepiteshelo","maisonIvey","endorah","galoche","bde","art","yfc","cvl","tutorat"], 
                // licon : [ "./img/projet/graphe.png","./img/projet/daily.png" ,"./img/projet/portfolio.png", "./img/projet/tourisme.png","./img/projet/kamouflage.png", "","./img/projet/kebab.png","./img/projet/labyrinthe.png"],
                texte: [
                    `Stage de zinzin`,
                    `Community manager`,
                    `La meme`,                    
                    `Association de fifou`,
                    `JavaScript est le langage de programmation essentiel pour le développement web. Il permet d'ajouter des fonctionnalités dynamiques et interactives aux sites web, de créer des applications web côté client, des jeux et bien plus encore.`,                    
                    `Vue.js est un framework JavaScript progressif et accessible, utilisé pour construire des interfaces utilisateur interactives et dynamiques. Il offre une architecture flexible et des performances optimales, ce qui en fait un choix populaire pour le développement d'applications web modernes.`,                  
                    `HTML et CSS sont les langages de base du développement web. HTML est utilisé pour structurer le contenu des pages web, tandis que CSS est utilisé pour styliser et mettre en forme ces contenus, créant ainsi des expériences visuelles attrayantes et cohérentes.`,                    
                    `PHP est un langage de script côté serveur largement utilisé pour le développement web. Il est principalement utilisé pour générer des contenus dynamiques, traiter les formulaires, interagir avec les bases de données et bien plus encore.`,                    
                ],
                cheminImages: "./img/experiences/"
            },
            4: {
                type: "",
                path: "/langages",
                numUE : [1, 2, 3, 4],
                nomUE : ["Montagne", "Vidéo", "Photo", "Escalade"],
                licon : ["montagne","daily","portfolio","tourisme","kamouflagek","douzieclicker","kebab","labyrinthe"], 
                // licon : [ "./img/projet/graphe.png","./img/projet/daily.png" ,"./img/projet/portfolio.png", "./img/projet/tourisme.png","./img/projet/kamouflage.png", "","./img/projet/kebab.png","./img/projet/labyrinthe.png"],
                texte: [
                    `Python est un langage de programmation polyvalent, reconnu pour sa simplicité syntaxique et sa lisibilité. Il est largement utilisé dans le développement web, le machine learning, l'automatisation de tâches et bien plus encore.`,
                    `Le langage C est un pilier de la programmation informatique, réputé pour son efficacité et sa proximité avec le matériel. Il est souvent utilisé dans le développement de systèmes d'exploitation, de logiciels embarqués et d'applications nécessitant des performances optimales.`,
                    `Java est un langage de programmation populaire, reconnu pour sa portabilité et sa robustesse. Il est largement utilisé pour développer des applications d'entreprise, des applications Android, des systèmes distribués et bien d'autres projets.`,                    
                    `Kotlin est un langage moderne conçu pour interagir parfaitement avec Java, en particulier pour le développement d'applications Android. Android Studio est l'environnement de développement intégré (IDE) de prédilection pour créer des applications Android avec Kotlin, offrant des fonctionnalités avancées pour faciliter le développement.`,                    
                    `JavaScript est le langage de programmation essentiel pour le développement web. Il permet d'ajouter des fonctionnalités dynamiques et interactives aux sites web, de créer des applications web côté client, des jeux et bien plus encore.`,                    
                    `Vue.js est un framework JavaScript progressif et accessible, utilisé pour construire des interfaces utilisateur interactives et dynamiques. Il offre une architecture flexible et des performances optimales, ce qui en fait un choix populaire pour le développement d'applications web modernes.`,                  
                    `HTML et CSS sont les langages de base du développement web. HTML est utilisé pour structurer le contenu des pages web, tandis que CSS est utilisé pour styliser et mettre en forme ces contenus, créant ainsi des expériences visuelles attrayantes et cohérentes.`,                    
                    `PHP est un langage de script côté serveur largement utilisé pour le développement web. Il est principalement utilisé pour générer des contenus dynamiques, traiter les formulaires, interagir avec les bases de données et bien plus encore.`,                    
                ],
                cheminImages: "./img/projet/"
            },

        };

        return { selected, ...data[props.cont] };
    },
    computed: {
        selectedImagePath() {
            return `${this.cheminImages}${this.nomUE[this.selected]}.png`;
        },
        selectedImagePath2() {
            return `${this.cheminImages}${this.licon[this.selected]}.png`;
        }
    },

    template: /*html*/ `
    <img v-if="cont === 0||cont === 1|| cont == 4" :src="selectedImagePath" width="100%" class="photoronde"/>
    <img v-if="cont === 2||cont === 3" :src="selectedImagePath2" width="100%" class="photoronde"/>

    <div v-if="cont === 0||cont === 1">
        <div class="titre">// {{ type }} {{ numUE[selected] }} - {{ nomUE[selected] }}</div>
        <div class="zone-content">
            <p>{{ texte[selected] }}</p>
        </div>
    </div>

    <div v-if="cont === 2||cont === 3|| cont === 4">
        <div class="titre">{{ nomUE[selected] }}</div>
        <div class="zone-content">
            <p>{{ texte[selected] }}</p>
            <p>link</p>
            <Galery :cont="cont" :selected="selected"/>
        </div>
    </div>

    `

}
