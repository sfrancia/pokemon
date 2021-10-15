import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController} from '@ionic/angular';
import { ServicedataService } from 'src/app/servicios/servicedata.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemons:any;

  constructor(private http: HTTP,public navCtrl:NavController,public dataService:ServicedataService) {
    this.apiWeb();
  }

  public navegarDetalle(pokemon){
      //setea los datos que he pasado en el servicio
      this.dataService.setData(pokemon);
    //le indico que al llamar al método navegarDetalle, hago que navegue a detalle
    this.navCtrl.navigateForward('detalle');
  }


  public apiWeb(){
    this.http.get('https://pokeapi.co/api/v2/pokemon', {}, {})
  .then(data => {

    this.pokemons=JSON.parse(data.data);

    console.log(this.pokemons);
    //console.log(data.data); // data received by server
    //console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
  }

}
