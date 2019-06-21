import { Injectable } from '@angular/core';
import { HttpClient, XhrFactory } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
//import { resolve } from 'path';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(
    public http : HttpClient
  ) { } 


  loginChido(user: string, password: string){
 
    var url = 'http://alcantar.tech/siitecs/login_siitecs.php?user='+user+'&password='+password;
    return new Promise((resolve, reject) => {
     this.http.get(url)
        .subscribe(data => {
          resolve(data);
         }, (err) =>{
           reject(err);
         });
    });
   }

   
   pruebaLambda(edad : string){
     var edades = parseInt(edad);
     let datos={
       age:edades,
       height:180,
       income: 18000
     }
        let options = {
           headers: {
        'Content-Type': 'application/json'
          }
         };
         var url = 'https://htf6h5hbp7.execute-api.us-east-1.amazonaws.com/dev/compare-yourserl';
         var jsonchido = JSON.stringify(datos);
         console.log(jsonchido)
          return new Promise(resolve => {
          this.http.post(url,jsonchido,options)
            .subscribe(data => {
         resolve(data);
         
         });
           });
  }

  pruebaDeleteLambda(){
        var url = 'https://htf6h5hbp7.execute-api.us-east-1.amazonaws.com/dev/compare-yourserl';
         return new Promise(resolve => {
         this.http.delete(url)
           .subscribe(data => {
        resolve(data);
        
        });
          });
 }

 pruebaGetLambda(){
  var url = 'https://htf6h5hbp7.execute-api.us-east-1.amazonaws.com/dev/compare-yourserl/single';
  return new Promise(resolve => {
  this.http.get(url)
    .subscribe(data => {
 resolve(data);
 
 });
   });
}


insertarUsuario(usuario: string, contra: string){
// https://htf6h5hbp7.execute-api.us-east-1.amazonaws.com/dev
let datos={
  Usuario: usuario,
  Contrasena: contra
}
   let options = {
      headers: {
   'Content-Type': 'application/json'
     }
    };
    var url = 'https://htf6h5hbp7.execute-api.us-east-1.amazonaws.com/dev/compare-yourserl';
    var jsonchido = JSON.stringify(datos);
    console.log(jsonchido)
     return new Promise(resolve => {
     this.http.post(url,jsonchido,options)
       .subscribe(data => {
    resolve(data);
    
    });
      });

}


obtenerRegistros(){
  var url = 'https://htf6h5hbp7.execute-api.us-east-1.amazonaws.com/dev/compare-yourserl/single';
      
  
  
       return new Promise(resolve => {
       this.http.get(url)
         .subscribe(data => {
      resolve(data);
      
      });
        });
}
inicioSesion(user: string, contra: string){
  var url = 'https://htf6h5hbp7.execute-api.us-east-1.amazonaws.com/dev/compare-yourserl/single?user'+user+'&contra'+contra;
      
  
  
       return new Promise(resolve => {
       this.http.get(url)
         .subscribe(data => {
      resolve(data);
      
      });
        });
}
//https://d5tg7vwire.execute-api.us-east-1.amazonaws.com/devlp/put-info
  
actualizaUbicacion(User_Id: string, TimeStamp: string, lat: string, long: string){
  
  let datos={
    User_Id: User_Id,
    TimeStamp: TimeStamp,
    lat: lat,
    long: long

  }
     let options = {
        headers: {
     'Content-Type': 'application/json'
       }
      };
      var url = 'https://d5tg7vwire.execute-api.us-east-1.amazonaws.com/devlp/put-info';
      var jsonchido = JSON.stringify(datos);
      console.log(jsonchido)
       return new Promise(resolve => {
       this.http.post(url,jsonchido,options)
         .subscribe(data => {
      resolve(data);
      
      });
        });
  
  }
}
