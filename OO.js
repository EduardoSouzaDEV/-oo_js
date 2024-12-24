function Anime(anime, antHeroi, poder) {
    this.anime = anime;
    this.antHeroi = antHeroi;
    this.poder = poder;

    this.setNivelDePoder = function (valor) {
        if (typeof valor === "number") { // Verifica se o valor é um número
            this.poder = valor; // Atualiza a propriedade do objeto
            console.log(`O poder de ${this.antHeroi} foi atualizado para ${this.poder}`);
        } else {
            console.log("Por favor, forneça um valor numérico para o poder.");
        }
    };
}

function Anime2(anime) {
    Anime.call(this, anime, "Vegeta", 3000); // Passa os argumentos corretamente para `Anime`

    this.setNivelDePoder = function (valor) {
        if (typeof valor === "number") { // Verifica se o valor é um número
            this.poder = valor; // Atualiza a propriedade do objeto
            console.log(`O poder de ${this.antHeroi} foi atualizado para ${this.poder} é de mais de 8 mil!!!`);
        } else {
            console.log("Por favor, forneça um valor numérico para o poder.");
        }
    };
}

function Anime3(anime) {
    Anime.call(this, anime, "Zoro", 3500); // Passa os argumentos corretamente para `Anime`

    this.setNivelDePoder = function (valor) {
        if (typeof valor === "number") { // Verifica se o valor é um número
            this.poder = valor; // Atualiza a propriedade do objeto
            console.log(`O poder de ${this.antHeroi} foi atualizado para ${this.poder} o zoro sola!!!`);
        } else {
            console.log("Por favor, forneça um valor numérico para o poder.");
        }
    };
}

// Criação das instâncias
const animeOnePiece = new Anime3("One piece")
const animeDragonBall = new Anime2("Dragon Ball");
const animeNaruto = new Anime("Naruto", "Sasuke", 4000);

// Exibindo propriedades das instâncias
console.log(animeOnePiece.anime)
console.log(animeDragonBall.anime); // "Dragon Ball"
console.log(animeNaruto.anime); // "Naruto"

// Atualizando e exibindo o poder do anti-herói
animeOnePiece.setNivelDePoder(12000)
animeDragonBall.setNivelDePoder(10000)
animeNaruto.setNivelDePoder(7000); // O poder de Sasuke foi atualizado para 9000

