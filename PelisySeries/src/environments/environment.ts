// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  genders: ['Acción', 'Ciencia Ficción', 'Comedia', 'Drama', 'Fantasía', 'Melodrama', 'Musical', 'Romance', 'Suspense', 'Terror'],
  resolutions: ['1080p', '720p'],
  codecs: ['x265', 'x264'],
  apiUrl: 'http://localhost:3900/api/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
