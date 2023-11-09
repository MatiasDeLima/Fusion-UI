import { HeaderComponent, Hero, About } from '/index.js';

const links = [
    { text: "Página Inicial", url: "#" },
    { text: "Sobre nós", url: "#" },
    { text: "Serviços", url: "#" },
    // Adicione mais links aqui, conforme necessário
];

const header = new HeaderComponent("Cosmic", "/", links, "Get Started");
header.createHeader();

const hero = new Hero("https://unsplash.com/pt-br/fotografias/uma-pessoa-nadando-no-oceano-perto-de-um-recife-de-coral-g_suks3yx-U", "ashdfjjsd", "sdjfkasdj", "sjdkfjkasdj")
hero.createHero();

const about = new About("https://unsplash.com/pt-br/fotografias/uma-pessoa-nadando-no-oceano-perto-de-um-recife-de-coral-g_suks3yx-U", "ashdfjjsd", "sdjfkasdj", "sjdkfjkasdj")
about.createHero();
