import { Component, OnInit } from '@angular/core';
import { ServicedataService } from 'src/app/servicios/servicedata.service';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController} from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  //declaro una variable de cualquier tipo
  data: any;
  pokemons : any;
  imagen: any;

  constructor(private http: HTTP,public dataService:ServicedataService,
      public navCtrl:NavController,private emailComposer: EmailComposer) { 
    this.recuperarDatos();
    
    //muestro por consola en formato JSON
    console.log('datos' + JSON.stringify(this.data));
  }

  public recuperarDatos(){
    //recibo el dato por get y lo asigno 
    this.data = this.dataService.getData();
    //llamo a la función de api
    this.apiWebFoto(this.data.url);
  }

  ngOnInit() {
  }

  public apiWebFoto(url){
    this.http.get(url, {}, {})
  .then(data => {

    this.pokemons=JSON.parse(data.data);
    this.imagen = this.pokemons.sprites.back_default;
    console.log(this.pokemons);
    console.log(this.pokemons.sprites.back_default);
    console.log(this.pokemons.sprites);
    
    
    //console.log(data.data); // data received by server
    //console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
  }

  atras(){
    this.navCtrl.navigateBack('home');
  }



  public enviar() {
    let email = {
      to: 'anamortevila@gmail.com',
      attachments: [
           ],
      subject: 'Pokemon favorito',
      body: 'Ana, te paso mi pokemon favorito :)' + this.data.name,
      isHtml: true
    }
    
    // Send a text message using default options
    this.emailComposer.open(email);
}




}
