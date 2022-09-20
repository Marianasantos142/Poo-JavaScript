class funcionário {

    nome: string;
    sobrenome: string;
    cargo: string;
    salário: number;

    mostrarInformacoes() {
      console.log(`funcionário: ${this.nome}  ${this.sobrenome} ${this.cargo} ${this.salário}`)


     }

}
   const fun = new funcionário ();

   fun.nome = "Julia"
   fun.sobrenome = "Silva"
   fun.cargo = "Vendedora"
   fun.salário = 1.456

   fun.mostrarInformacoes()