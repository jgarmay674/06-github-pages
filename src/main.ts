import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// ESTE COMENTARIO ES PARA PROBAR EL CAMBIO DEL CÓDIGO 'HASH',
// Y VEMOS QUE NO OCURRE NADA, YA QUE ES UN COMENTARIO

// ESTE CÓDIGO ES PARA PROBAR EL CAMBIO DEL CÓDIGO 'HASH',
// Y VEMOS QUE ESTA VEZ, SÍ CAMBIA, YA QUE SE TIENE EN CUENTA

const test1: string = "Esto es ";
const test2: string = " una prueba";
let test: string = test1 + test2;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
