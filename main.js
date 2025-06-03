function Jogo(titulo, desenvolvedora){
    this.titulo = titulo;
    this.desenvolvedora = desenvolvedora;
}

function XboxGame(titulo, desenvolvedora, genero, valor){
    Jogo.call(this, titulo, desenvolvedora);
    this.genero = genero;
    this.valor = valor;
}

function PlayStationGame(titulo, desenvolvedora, genero, valor){
    Jogo.call(this, titulo, desenvolvedora);
    this.genero = genero;
    this.valor = valor;
}

function PcGame(titulo, desenvolvedora, genero, valor){
    Jogo.call(this, titulo, desenvolvedora);
    this.genero = genero;
    this.valor = valor;
}

const xbox1 = new XboxGame("ELDENRING", "FromSoftware", "Soulslike", 299.90);
const ps1 = new PlayStationGame("Demon's Souls", "FromSoftware", "Soulslike", 349.90);
const pc1 = new PcGame("Enigma do Medo", "Dumativa", "Ação e Aventura", 65);

console.log(xbox1);
console.log(ps1);
console.log(pc1);
