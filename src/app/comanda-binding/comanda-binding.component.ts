import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'has-comanda-binding',
  templateUrl: './comanda-binding.component.html',
  styleUrls: ['./comanda-binding.component.css']
})
export class ComandaBindingComponent implements OnInit {

    formPizzaria: FormGroup;
 

  constructor(public formBuilder   :   FormBuilder) { }
 
   
  ngOnInit() {
    this.formPizzaria = this.formBuilder.group({

      inChop : this.formBuilder.control('2'),
   
      inPizzas : this.formBuilder.control('2'),
   
      inRecheios : this.formBuilder.control('4'),
   
      inPessoas : this.formBuilder.control('4'),

      inServico :this.formBuilder.control(false)

      
   })

  }
   onProcessar(){
    let chop=this.formPizzaria.value.inChop;  
     
    let pizza=this.formPizzaria.value.inPizzas;  

    let recheios=this.formPizzaria.value.inRecheios;
    
    let pessoas=this.formPizzaria.value.inPessoas;  

    let servico=this.formPizzaria.value.inServico;  
    
    let valorchop=7.30*chop;

     let valorpizza=31.50*pizza;

     let valorrecheio=5.90*recheios;

     let valortotal = valorchop+valorpizza+valorrecheio;
     let valortaxa = 0;
     if (servico) {
      valortaxa = valortotal*0.1;
      valortotal = valortotal  + valortaxa;
     } 
     let valorfinal=valortotal+valortaxa;
     let valorpessoa= valorfinal/pessoas;
     

     alert(`Consumo: R$ ${valortotal} \n Serviços: R$ ${valortaxa} \n Total: R$ ${valorfinal} \n Por Pessoa: R$ ${valorpessoa}`)
   }


  

}
