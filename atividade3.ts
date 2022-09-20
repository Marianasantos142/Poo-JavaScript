class produto {
   
    nome: string;
    marca: string;
    modelo: string;


    mostrarInformacoes() {
      console.log(`produto: ${this.nome} ${this.marca}  ${this.modelo}`)

    }
}
const pro = new produto ();

pro.nome = "Iphone"
pro.marca = "Apple"
pro.modelo = "Branco"

pro.mostrarInformacoes()


