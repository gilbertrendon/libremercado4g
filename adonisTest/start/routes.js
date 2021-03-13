'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { 
      "cod": "200",
      "message": 0.0025,
      "cnt": 40,
      "list": [
          {
          "dt": 1503586800,
              "main": {
                  "temp": 307.92,
                  "temp_min": 307.92,
                  "temp_max": 308.292,
                  "pressure": 956.05,
                  "sea_level": 1026.51,
                  "grnd_level": 956.05,
                  "humidity": 19,
                  "temp_kf": -0.37
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ],
              "clouds": {
                  "all": 0
              },
              "wind": {
                  "speed": 6.57,
                  "deg": 232.003
              },
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2017-08-24 15:00:00"
          },
          {
              "dt": 1503597600,
              "main": {
                  "temp": 305.14,
                  "temp_min": 305.14,
                  "temp_max": 305.416,
                  "pressure": 956.03,
                  "sea_level": 1026.69,
                  "grnd_level": 956.03,
                  "humidity": 17,
                  "temp_kf": -0.28
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ],
              "clouds": {
                  "all": 0
              },
              "wind": {
                  "speed": 5.57,
                  "deg": 246
              },
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2017-08-24 18:00:00"
          }
      ],
      "city": {
          "id": 3117735,
          "name": "Madrid",
          "coord": {
              "lat": 40.4165,
              "lon": -3.7026
          },
          "country": "ES"
      }
  }
})

// Route.get('/users', () => {
//   return { greeting: 'Hello world usuarios' }
// })


Route.post('users/registr', 'UserController.store');
Route.post('users/login', 'UserController.login');
Route.get('projects', 'ProyectController.index');
Route.post('projects', 'ProyectController.create');
Route.delete('projects/:id','ProyectController.destroy');
Route.patch('projects/:id','ProyectController.update');


Route.group(() => {
    //Route.post('users/login', 'UserController.login');
}).prefix('/api/v1/').middleware('auth');

//EL .middleware('auth') se puede agregar individual pero es más seguro en grupo

