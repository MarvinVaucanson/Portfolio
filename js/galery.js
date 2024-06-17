// galery.js
export default {
    props: ['cont', 'selected'],
    data() {
        return {
            currentIndex: 0,
            images: {
                0: ["none", "none", "none"],
                1: ["image4.jpg", "image5.jpg", "image6.jpg"],
                2: ["graphe", "daily", "none","tourism","none","none","kebap"],
                3: ["image10.jpg", "image11.jpg", "image12.jpg"],
                4: ["video", "photo", "escalade","+"],
            }[this.cont],
            cat :["competences","langages","projet","experiences","passion"],
            nbimages: {
                "graphe": 4,
                "video" : 6,
                "photo" : 3,
                "daily": 6,
                "tourism": 4,
                "kebap":3,
            }
        };
    },
    methods: {
        prev() {
            this.currentIndex = (this.currentIndex + this.nbimages[this.images[this.selected]] - 1) % this.nbimages[this.images[this.selected]];
        },
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.nbimages[this.images[this.selected]];
            console.log(this.nbimages[this.images[selected]])
        }
    },
    template: /*html*/ `
    <div class="carousel">
        <button @click="prev" class="carousel-button prev">
            <span class="arrow left"></span>
        </button>
            <div class="carousel-image-container">
                <img :src="'./img/'+ cat[cont] + '/' + images[selected] + '/' + currentIndex +'.png'" class="carousel-image"/>
            </div>
        <button @click="next" class="carousel-button next">
            <span class="arrow right"></span>
        </button>
    </div>
    `,
    watch: {
        selected(newVal) {
            this.currentIndex = newVal;
        }
    }
}