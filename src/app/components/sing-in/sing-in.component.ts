import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})
export class SingInComponent implements OnInit {
  name: string = '';
  lastname: string = '';
  credential: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';

  constructor() {}

  ngOnInit(): void {}

  addUser(): void {
    if(this.name == '' || this.lastname == '' || this.credential == '' || this.email == '' || this.password == '' || this.repeatPassword == '') {
      alert('Los datos no pueden estar vacios');
  }else{
    alert('El usuario se ha registrado exitosamente');
  }
}

}
