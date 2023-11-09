export default class Hero {
    constructor(heroImg, heroTitle, heroText, heroButton) {
        this.heroImg = heroImg,
        this.heroTitle = heroTitle
        this.heroText = heroText,
        this.heroButton = heroButton
    }

    createHero() {
        const body = document.querySelector(".hero");

        body.innerHTML = `
            <div class="hero__container container grid">
                <div class="hero__data">
                    <h1 class="hero__title">
                        ${this.heroTitle}
                    </h1>

                    <p class="hero__decription">
                        ${this.heroText}
                    </p>

                    <a href="#" class="hero__button">${this.heroButton}</a>
                </div>

                <div class="hero__image">
                    <img src=${this.heroImg}>
                </div>
            </div>
        `;
    }
}