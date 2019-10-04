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

      inChop : this.formBuilder.control(''),
   
      inPizzas : this.formBuilder.control(''),
   
      inRecheios : this.formBuilder.control(''),
   
      inPessoas : this.formBuilder.control('')
   })


  }

}
