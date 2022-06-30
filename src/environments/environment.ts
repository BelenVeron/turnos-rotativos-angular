// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //environmentUrl: 'http://localhost:8080',
  environmentUrl: 'https://app-portfolio-backend-1.herokuapp.com',
  /* Empleados */
  getListEmpleado: '/empleado/list-empleados',
  getListHoras: '/empleado/list-horas-cargadas/',
  addEmpleado: '/empleado/add',
  deleteEmpleado: '/empleado/delete/',
  /* Tipo jornada */
  getListTipoJornada: '/tipo-jornada/list-tipo-jornadas',
  addTipoJornada: '/tipo-jornada/add',
  deleteTipoJornada: '/tipo-jornada/delete/',
  /* Jornada */
  getListJornada: '/jornada/list-jornadas',
  addJornada: '/jornada/add/',
  updateJornada: '/jornada/update/',
  deleteJornada: '/jornada/delete/'

  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
