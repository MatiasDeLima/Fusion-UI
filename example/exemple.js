import { HeaderComponent } from "/index.js";

const links = [
    { text: "Página Inicial", url: "#" },
    { text: "Sobre nós", url: "#" },
    { text: "Serviços", url: "#" },
    // Adicione mais links aqui, conforme necessário
];

const header = new HeaderComponent("Cosmic", "/", links, "Get Started");
header.createHeader();