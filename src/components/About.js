export default class About {
    constructor(aboutImg, aboutTitle, aboutText, aboutButton) {
        this.aboutImg = aboutImg,
        this.aboutTitle = aboutTitle
        this.aboutText = aboutText,
        this.aboutButton = aboutButton
    }

    createHero() {
        const body = document.querySelector(".about");

        body.innerHTML = `
            <div class="about__container container grid">
                <div class="about__data">
                    <h1 class="about__title">
                        ${this.aboutTitle}
                    </h1>

                    <p class="about__decription">
                        ${this.aboutText}
                    </p>

                    <a href="#" class="about__button">${this.aboutButton}</a>
                </div>

                <div class="about__image">
                    <img src=${this.aboutImg}>
                </div>
            </div>
        `;
    }
}