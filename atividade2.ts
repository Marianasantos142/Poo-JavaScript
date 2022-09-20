class avião {

    nome: string;
    país: string;
    modelo: string;
    ano: number;


    mostrarInformacoes(){
       console.log(`avião: ${this.nome} ${this.país} ${this.modelo} ${this.ano}`)

    }

}
   const av1 = new avião ();

   av1.nome = "Airbus"
   av1.país = "França"
   av1.modelo = "A330"
   av1.ano = 1954

   av1.mostrarInformacoes()
