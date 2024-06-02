// galery.js
export default {
    props: ['cont', 'selected'],
    data() {
        return {
            currentIndex: this.selected || 0,
            images: {
                0: ["image1.jpg", "image2.jpg", "image3.jpg"],
                1: ["image4.jpg", "image5.jpg", "image6.jpg"],
                2: ["image7.jpg", "image8.jpg", "image9.jpg"],
                3: ["image10.jpg", "image11.jpg", "image12.jpg"],
                4: ["image13.jpg", "image14.jpg", "image15.jpg"],
            }[this.cont]
        };
    },
    methods: {
        prev() {
            this.currentIndex = (this.currentIndex + this.images.length - 1) % this.images.length;
        },
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }
    },
    template: /*html*/ `
    <div class="carousel">
        <button @click="prev" class="carousel-button prev">‹</button>
        <img :src="'./path/to/images/' + images[currentIndex]" class="carousel-image"/>
        <button @click="next" class="carousel-button next">›</button>
    </div>
    `,
    watch: {
        selected(newVal) {
            this.currentIndex = newVal;
        }
    }
}