class cliente {

    nome: string;
    sobrenome: string;
    endereço: string;
    idade: number;
  
    mostrarInformacoes() {
        console.log(`cliente: ${this.nome} ${this.sobrenome}\nidade: ${this.idade}\nendereço: ${this.endereço}\n`)
    }
}

const cl1 = new cliente();

cl1.nome = "Mari"
cl1.sobrenome = "Santos"
cl1.idade = 18
cl1.endereço = "Rua Isabel"

cl1.mostrarInformacoes()