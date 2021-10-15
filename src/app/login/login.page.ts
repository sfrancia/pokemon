import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    //declaramos el formulario formLogin
  formLogin: FormGroup;

  constructor(public formBuilder: FormBuilder,public navCtrl:NavController) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    });
  }

  login() {
    switch (true) {
      case !this.formLogin.controls.email.valid && !this.formLogin.controls.password.valid:
        alert('El email y la contraseña están en blanco o no tienen un formato válido');
        break;
      case !this.formLogin.controls.email.valid:
        alert( 'El email está en blanco o no tiene un formato válido');
        break;
      case!this.formLogin.controls.password.valid:
        alert('La contraseña está en blanco o no tiene un formato válido, debe contener un mínimo de cinco caracteres');
        break;
      case this.formLogin.valid:
        this.navCtrl.navigateForward('home');
        console.log("ha entrado ok a home");
    }
  }

}
