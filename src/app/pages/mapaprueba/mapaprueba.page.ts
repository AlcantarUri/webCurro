import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ViewChild, ElementRef } from '@angular/core'
import { LoadingController } from '@ionic/angular';
import { delay } from 'q';
import { HttpService } from 'src/app/services/http.service';
import { error } from 'util';
<<<<<<< HEAD
import { AuthService } from 'src/app/services/auth.service';
=======
>>>>>>> e4c8cf097a827c039b617ca71ddba3e036add2ae
declare var google;

@Component({
  selector: 'app-mapaprueba',
  templateUrl: './mapaprueba.page.html',
  styleUrls: ['./mapaprueba.page.scss'],
})
export class MapapruebaPage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  marker: any;
  latLng : any;
  latitude: any;
  longitude: any;
  i: number;
  medetengo: boolean;
  latInicial: any;
  lngInicial: any;
  latLong: any;
  cont: any=0;
<<<<<<< HEAD
  usuario:string;
=======
>>>>>>> e4c8cf097a827c039b617ca71ddba3e036add2ae

  posMarkerInicial: Geoposition;
  posMarkerFinal: Geoposition;
  constructor(
      private geolocation: Geolocation,
      private nativeGeocoder: NativeGeocoder,
      private loadingCtrl: LoadingController,
<<<<<<< HEAD
      private http: HttpService,
      private auth: AuthService
=======
      private http: HttpService
>>>>>>> e4c8cf097a827c039b617ca71ddba3e036add2ae
  ) {

    this.medetengo = false;
    this.i = 0;
    
<<<<<<< HEAD
    
    
   }

  ngOnInit() {
    this.sacarCoordenadas();
    this.sacarUsuario();
  }
  sacarUsuario(){
    var username = this.auth.getUser();
    this.usuario = username["username"];
    
    
  }
  
=======
   }

  ngOnInit() {
    //this.ontas();
    this.sacarCoordenadas();
  }
  
  
>>>>>>> e4c8cf097a827c039b617ca71ddba3e036add2ae


async delay(ms: number) {
    return await new Promise( resolve => setTimeout(resolve, ms) );
}




async cargarMapa(resp: Geoposition){

  const loading = await this.loadingCtrl.create();
  loading.present();

    this.latInicial = resp.coords.latitude;
    this.lngInicial = resp.coords.longitude;
    //console.log(this.latInicial, +" "+ this.lngInicial);

    const latLng = new google.maps.LatLng(this.latInicial, this.lngInicial);     
    let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }    
    this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      loading.dismiss();
    });

    this.vigilarNino();
}


vigilarNino(){
  let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
   var lat = data.coords.latitude.toString();
   var long = data.coords.longitude.toString();

    //this.posMarkerFinal= new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
    this.crearMarcador(data.coords.latitude, data.coords.longitude);
    this.actualizaPosicion(lat, long);
   });
}


async crearMarcador(latitud: number, longitud: number){
        console.log(latitud+" "+longitud);
        var currentPos= new google.maps.LatLng(latitud, longitud);
        //this.posMarkerInicial = new google.maps.LatLng(lat, lng);
       // console.log(lat +" el chido alv "+lng);
      
      
    if(this.cont<1){
      
      //this.animatedMove(this.marker, .5, this.posMarkerInicial, currentPos)
      this.marker = new google.maps.Marker({
        position: currentPos,
        map: this.map,
        title: 'HI!! HI´M HERE!',
        icon: { url : '../assets/img/seta.png' }
      });
      
      var latInicial = this.marker.position.lat();
      var lngInicial = this.marker.position.lng();
      var latlngVieja = new google.maps.LatLng(latInicial, lngInicial);

      this.animatedMove(this.marker, .5, latlngVieja, currentPos);
      this.cont=this.cont + 1;
      
    }
      else{
        this.marker.setPosition(currentPos);
        this.map.panTo(currentPos);
      }
}
//24.0305116  -104.65870729999999
//24.0305087  -104.6587435

sacarCoordenadas(){
  
  this.geolocation.getCurrentPosition().then((resp) => {
    
    this.cargarMapa(resp);
    
  }).catch((error) => {
    console.log('Error getting location', error);
  });
}


animatedMove(marker, t, current, moveto) {
  var lat = current.lat();
  var lng = current.lng();

  var deltalat = (moveto.lat() - current.lat()) / 100;
  var deltalng = (moveto.lng() - current.lng()) / 100;

  var delay = 10 * t;
  for (var i = 0; i < 100; i++) {
    (function(ind) {
      setTimeout(
        function() {
          var lat = marker.position.lat();
          var lng = marker.position.lng();
          lat += deltalat;
          lng += deltalng;
          var latlng = new google.maps.LatLng(lat, lng);
          marker.setPosition(latlng);
          
          if(this.count<1){this.map.panTo(latlng);}

        }, delay * ind
      );
    })(i)
  }
}


actualizaPosicion(lat: string, long: string){
  var f = new Date();
  var fechaCompletaUTC = f.toUTCString();

  console.log(fechaCompletaUTC);
  //console.log(lat);
  //console.log(long);
<<<<<<< HEAD
  this.http.actualizaUbicacion(this.usuario, fechaCompletaUTC, lat, long).then((inv)=>{
=======
  this.http.actualizaUbicacion("EscorpionDorado", fechaCompletaUTC, lat, long).then((inv)=>{
>>>>>>> e4c8cf097a827c039b617ca71ddba3e036add2ae
    
    console.log("todo chido");
  },(error)=>{
    console.error("Error");
  })
  
  
}
  
}
