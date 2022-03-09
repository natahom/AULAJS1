class Estudante{
  constructor(nome,sobrenome,instituto,turma,data_nascimento){
   this.nome = nome
   this.sobrenome = sobrenome 
   this.instituto = instituto
   this.turma = turma
   this.data_nascimento = data_nascimento
  }
   mostrarNome(){
  return this.nome
} 
     mostrarAtributos(){
  return this.sobrenome + "\n" + this.instituto + "\n" + this.turma +"\n" + 
  this.data_nascimento;
        
         
} 
  
}



let estudante = new Estudante("Nathan","Pires","ifms","3B","14/05/2006")
  console.log(estudante.mostrarNome())
  console.log(estudante.mostrarAtributos())

