import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  perfil = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    dataNascimento: new FormControl(''),
    nomeMae: new FormControl(''),
  });

  data: any;

  constructor() {}

  ngOnInit(): void {}

  obterData() {
    this.data = this.perfil.value;
  }

  isFormValid(): boolean {
    return this.perfil.disabled ? true : this.perfil.valid;
  }
}
