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
                    "L'UE 1, Développer une application, cette unité d'enseignement vise à fournir aux étudiants les compétences et les connaissances nécessaires pour développer des applications logicielles à partir de zéro, en mettant l'accent sur les principes de base du développement de logiciels et en utilisant souvent des langages de programmation et des technologies populaires. Elle est une des plus importantes et est presque associés à tout mes projets se trouvant sur le site.",
                    "L'UE 2, Optimiser une application, Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d’exécution, précision, consommation de ressources..",
                    "L'UE 3, Administrer, Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d’une organisation",
                    "UE 4, Gérer une base de donnée, Concevoir, gérer, administrer et exploiter les données de l’entreprise et mettre à disposition toutes les informations pour un bon pilotage de l’entreprise",
                    "UE 5, Conduire un projet, Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles",
                    "UE 6, Collaborer, Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique"
                ],
                textesae:["Daily Info, Keb'App, Aide à la décision","Création d'un algo de tri (S1), Daily Info, Aide à la décision","SAE Guide d'installation d'un poste de travail, SAE Installation et utilisation de Linux","Daily Info, SAE PowerBI, SAE Gestion BD","Rédaction de cahier des charges pour tout les projets","Poster, Campagne Fictive pour Auvergnat Cola"],
                cheminImages: "img/competences/",
                galerytab:[0],
                link:[0]

            },
            1: {
                type: "",
                path: "/langages",
                numUE: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                nomUE: ["Python", "C", "Java", "AndroidStudio_Kotlin", "JS", "VueJS", "HTML_CSS", "PHP", "Symfony", "SQL", "PowerBI", "MongoDB", "Docker", "GIT", "Jinja2"],
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
                textesae:[],
                cheminImages: "img/langages/",
                galerytab:[0],
                link:[0]
            },
            2: {
                type: "",
                path: "/projets",
                numUE : [1, 2, 3, 4, 5, 6, 7, 8, 9],
                nomUE : ["Aide à la décision", "Daily Info", "Portfolio", "Tourisme App", "Kamouflage Web", "Douzie Clicker", "keb'app","Labyrinthe","Poster"],
                licon : ["graphe","daily","portfolio","tourisme","kamouflagek","douzieclicker","kebab","labyrinthe","poster"], 
                // licon : [ "./img/projet/graphe.png","./img/projet/daily.png" ,"./img/projet/portfolio.png", "./img/projet/tourisme.png","./img/projet/kamouflage.png", "","./img/projet/kebab.png","./img/projet/labyrinthe.png"],
                texte: [
                    `SAE réalisé en java lors du deuxième semestre d'IUT. On devait réaliser un logiciel pour aider à la décision d'un chemin à travers un graphe complexe. Le projet à été réalisé from scratch sans librairies de gestion de graphe. Nous avons implémenté l'algorithme de parcurs DijKstra`,
                    `Daily Info est un site web PHP qui permet aux joueurs de recevoirent chaque jour un nouveau défi en lien avec l'IUT et l'informatique. Il existe plein de type de mission ! SAE su S3 d'IUT`,
                    `Magnifique site web sur lequel vous vous trouvez actuellement ! Crée en Vue.js il retrace l'entièreté de mon parcours professionnel et associatif`,
                    `Tourisme App ! Application mobile utilisant les données de data.grandlyon pour vous conseillez des sorties en ville dans Lyon`,
                    `Kamouflage Web, site perso en Vue.JS pour la création d'une boutique en ligne et d'autres surprises. En cours de DEV`,
                    `Clique, clique, clique, clique ! Toujours plus ! Gagne le plus de twolve dans ce jeu de type clicker. Projet de web de moitié de S2 d'IUT`,
                    `Une petite faim ? Keb'app est là pour toi ! SAE de S1 d'IUT en HTML/CSS`,
                    `Labyrinthe, projet de fin de lycée en cours de NSI. Battez vos amis dans ce jeu python pour parcouris le plus de labyrinthe dans un temps limité. Bonne chance !`,
                    `Connaissez vous le PIET ? Un langage de programmation basé sur une grille de couleur ! Ce poster scientifique résume tout !`,
                ],
                cheminImages: "./img/projet/",
                galerytab:[1,1,0,1,0,0,1,0,1],
                link:["https://github.com/MarvinVaucanson/sae_graphe/tree/main/sae-125-s2-logiciel-d-aide-a-la-decisions","https://dailyinfos.fun","https://baptiste.rousselot.name/Portfolio","https://github.com/MarvinVaucanson/DevMobile",0,"https://github.com/MarvinVaucanson/DouzieClicker",0,0,"https://github.com/MarvinVaucanson/Labyrinthe",0]
            },
            3: {
                type: "",
                path: "/experiences",
                numUE : [1, 2, 3, 4, 5, 6, 7,8],
                nomUE : ["INRAE", "Pepites d'Héloïse", "Maison Ivey", "Endorah", "Association La Galoche", "BDE Info", "Art et Science", "Youth For Climate", "Conseil de Vie Lycéenne", "Tutorat"],
                licon : ["INRAE","pepiteshelo","maisonIvey","endorah","galoche","bde","art","yfc","cvl","tutorat"], 
                // licon : [ "./img/projet/graphe.png","./img/projet/daily.png" ,"./img/projet/portfolio.png", "./img/projet/tourisme.png","./img/projet/kamouflage.png", "","./img/projet/kebab.png","./img/projet/labyrinthe.png"],
                texte: [
                    `Stage de validation de la 2eme année de BUT. J'ai travaillé avec les équipes d'INRAE Pollutions Agricoles Diffuses (PollDiff), sur GeoMelba un logiciel de modélisation de bassin versant. Plus d'info sur leurs sites web. Attente du rendu du rapport pour poster les images.`,
                    `Des meumbles de seconde main ! Pendant 1 an j'ai géré l'instagram et le facebook`,
                    `Job d'été. Gestion de l'instagram et de la boutique en ligne de cette micro entreprise de brocante.`,                    
                    `Endorah est une équipe de créateurs passionnés par le jeu Minecraft dont je fais partis depuis 4 ans déjà. Nous regroupons, constructeurs, décorateurs, développeurs Java et web, graphistes, trailer makers et bien d’autres talents pour mener à bien nos projets !
De la conception à la réalisation, nous créons nos projets de A à Z en accordant une attention particulière à chaque demande. La qualité finale et le succès de nos œuvres sont des valeurs essentielles pour nous.
Ensemble, nous pouvons donner vie à votre projet !

Plus d'image sur notres sites web !`,
                    `Le collectif La Galoche est né de l’envie d’ouvrir un café associatif, lieu convivial et chaleureux sur Sathonay–Camp. Il a été créé par des habitant.es de Sathonay-Camp désirant un lieu de rencontre animé, ouvert à toutes et tous pour faire émerger des initiatives locales : concerts, conférences, théâtre, débats et échanges de savoirs. Le projet a grandi pour devenir aujourd’hui un lieu-ressource convivial, décontracté et citoyen réunissant à la fois un espace de travail partagé, une épicerie, un café associatif avec une programmation culturelle et festive. Formé au bar que je tiens régulièrement j'organise aussi des soirées loups garous et jeux de société.`,                    
                    `Mandat de 2023 à 2024. Responsable du pôle culture j'ai dirigé la pblication de la radio culture, un mensuel sur instagram de culture. Ainsi qu'organisé de nombreux évènements.`,                  
                    `L'art et la science ! Deux choses passionnantes. Dépassez les limites de la réalité en observant l'invisible ! Cela ne suffit pas ? Avez vous déjà rêvez de voir le son d'une manière inédite ? Non ? C'est pas grave parce qu'on l'a fait ! Exposition à l'ENS pour la fête de la science.`,                    
                    `Lycée engagé pour le climat et la justice sociale ! Nous sommes plus chauds que le climat !`,
                    `Elu pour être le représentant des lycéens de la cité scolaire de saint exupéry.`,
                    `Transmettre mes connaissances, voir la même étincelle que moi dans les yeux des autres !`
                ],
                textesae:[],
                cheminImages: "./img/experiences/",
                // galerytab:[0,1,0,1,1,1,1,1,0,0],
                galerytab:[0,0,0,0,0,0,0,0,0,0],
                link:["https://polldiff.lyon-grenoble.hub.inrae.fr/recherche/gestion-integree-du-bassin-versant/jeu-serieux-causerie","https://www.instagram.com/lespepitesdheloise/","https://www.instagram.com/maison.ivey/?hl=fr","https://endorah.net/","https://lagaloche.fr/","https://www.instagram.com/bde_info/",0,0,"https://www.instagram.com/cvl_stex_lyon/?hl=fr",0]
            },
            4: {
                type: "",
                path: "/passions",
                numUE : [1, 2, 3,4],
                nomUE : ["Vidéo", "Photo", "Escalade", "+"],
                licon : ["vidéo", "photo", "escalade", "+"],
                // licon : [ "./img/projet/graphe.png","./img/projet/daily.png" ,"./img/projet/portfolio.png", "./img/projet/tourisme.png","./img/projet/kamouflage.png", "","./img/projet/kebab.png","./img/projet/labyrinthe.png"],
                texte: [
                    `J'écris, réalise, tourne, monte, projète mes propres court métrage ! Pour le Nicon Festival ou pour le plaisir avec mes amis. Toujours une caméra à proximité pour capter tout ce que je vois et imagines.`,
                    `La photo, l'art de saisir un instant à jamais. Toujours pour essayer de transmettre des émotions d'un instant.`,
                    `Grimpeur sur roche depuis toujours, les murs de blocs et de voies indoor sont devenues mon sport favoris. Toujours à la recherche d'amis avec qui peut être, enfin réussir à atteindre le sommet`,                    
                    `Science, Guitare, Bande Dessiné, Musique, Urbex, Jeux Vidéos... Je ne manque pas de passion ni de passe temps.`,                    
                ],
                textesae:[],
                cheminImages: "./img/projet/",
                galerytab:[0],
                link:["https://www.youtube.com/channel/UC-O2kjB-UuN_QOCCvl6PfjQ",0,0,0]
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
            <div v-if="cont === 0">
                <p>Les SAE associés sont : {{ textesae[selected] }}</p>
            </div>
        </div>

    </div>

    <div v-if="cont === 2||cont === 3|| cont === 4">
        <div class="titre">{{ nomUE[selected] }}</div>
        <div class="zone-content">
            <p>{{ texte[selected] }}</p>
            <p v-if="link[selected]!==0">
                <nav>Lien : <a v-bind:href='link[selected]'>{{ nomUE[selected] }}</a></nav>
            </p>
            <Galery v-if="galerytab[selected] === 1" :cont="cont" :selected="selected"/>
        </div>
    </div>
    `
}
